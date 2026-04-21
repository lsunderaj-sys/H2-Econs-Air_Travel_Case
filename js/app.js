document.addEventListener('DOMContentLoaded', () => {
  const extractsContainer = document.getElementById('extracts');
  const questionsContainer = document.getElementById('questions');

  // Render Extracts & Table
  if (caseStudy.extracts) {
    caseStudy.extracts.forEach(ext => {
      const div = document.createElement('div');
      div.className = 'extract-card';
      div.innerHTML = `<h3>${ext.title}</h3><p>${ext.content.replace(/\n/g, '<br>')}</p>`;
      extractsContainer.appendChild(div);
    });
  }
  const tableDiv = document.createElement('div');
  tableDiv.className = 'extract-card';
  tableDiv.innerHTML = `<h3>Table 1: Elasticities</h3>${caseStudy.tableHTML}`;
  extractsContainer.appendChild(tableDiv);

  // Render Questions
  caseStudy.questions.forEach(q => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.innerHTML = `
      <h3>Question ${q.id} <span class="marks-badge">[${q.marks} marks]</span></h3>
      <p class="q-text">${q.text}</p>
      <textarea id="ans-${q.id}" placeholder="Draft your answer here. Focus on economic concepts, data references, and logical chains of reasoning."></textarea>
      <div class="btn-group">
        <button class="btn submit-btn" data-qid="${q.id}">Review & Get Guidance</button>
        <button class="btn reset-btn" data-qid="${q.id}">Clear</button>
      </div>
      <div id="feedback-${q.id}" class="feedback hidden"></div>
    `;
    questionsContainer.appendChild(card);
  });

  // Event Listeners
  document.querySelectorAll('.submit-btn').forEach(btn => {
    btn.addEventListener('click', handleFeedback);
  });
  document.querySelectorAll('.reset-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const qid = e.target.dataset.qid;
      document.getElementById(`ans-${qid}`).value = '';
      document.getElementById(`feedback-${qid}`).classList.add('hidden');
    });
  });
});

function handleFeedback(e) {
  const qid = e.target.dataset.qid;
  const question = caseStudy.questions.find(q => q.id === qid);
  const answer = document.getElementById(`ans-${qid}`).value.trim();
  const feedbackBox = document.getElementById(`feedback-${qid}`);

  if (!answer) {
    alert("Please draft an answer before requesting feedback.");
    return;
  }

  const guidance = generateSocraticFeedback(answer.toLowerCase(), question);
  
  feedbackBox.classList.remove('hidden');
  feedbackBox.innerHTML = `
    <div class="feedback-section">
      <h4>🔍 Self-Assessment Guide</h4>
      ${guidance.status}
      <div class="socratic-prompts">
        <h5>❓ Guiding Questions</h5>
        <ul>${guidance.prompts.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>
      <div class="examiner-checklist">
        <h5>📋 Examiner's Checklist for 2/2 Marks</h5>
        <ul>${question.checklist.map(c => `<li>☐ ${c}</li>`).join('')}</ul>
      </div>
      <p class="refine-tip">💡 <strong>Next Step:</strong> Refine your draft using the questions and checklist above. Then submit again to track your progress.</p>
    </div>
  `;
}

function generateSocraticFeedback(answerText, question) {
  const matchedConcepts = question.keyConcepts.filter(c => answerText.includes(c.toLowerCase()));
  const wordCount = answerText.split(/\s+/).length;
  
  let status = '';
  if (matchedConcepts.length >= 3) {
    status = `<p class="status-good">✅ You've included several key economic concepts. Now check if your explanation forms a complete logical chain.</p>`;
  } else if (matchedConcepts.length >= 1) {
    status = `<p class="status-partial">🔸 You've started with relevant concepts. Use the guiding questions below to strengthen your analysis.</p>`;
  } else {
    status = `<p class="status-missing">⚠️ Your draft lacks the core economic terminology expected for this question. Review the checklist and guiding questions.</p>`;
  }

  // Filter prompts based on missing concepts
  let prompts = question.socratic;
  if (wordCount < 15) {
    prompts = ["Your answer is quite brief. How can you expand it to explain the economic mechanism clearly?", ...prompts];
  }

  return { status, prompts };
}
