document.addEventListener('DOMContentLoaded', () => {
  const extractsContainer = document.getElementById('extracts');
  const questionsContainer = document.getElementById('questions');

  // Render Extracts
  if (caseStudy.extracts) {
    caseStudy.extracts.forEach(ext => {
      const div = document.createElement('div');
      div.className = 'extract-card';
      div.innerHTML = `<h3>${ext.title}</h3><p>${ext.content.replace(/\n/g, '<br>')}</p>`;
      extractsContainer.appendChild(div);
    });
  }

  // Render Table
  const tableDiv = document.createElement('div');
  tableDiv.className = 'extract-card';
  tableDiv.innerHTML = `<h3>Table 1: Elasticities</h3>${caseStudy.tableHTML}`;
  extractsContainer.appendChild(tableDiv);

  // Render Questions
  caseStudy.questions.forEach(q => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.innerHTML = `
      <h3>Question ${q.id}</h3>
      <p class="q-text">${q.text}</p>
      <textarea id="ans-${q.id}" placeholder="Type your answer here. Focus on economic concepts, data references, and logical chains of reasoning."></textarea>
      <div class="btn-group">
        <button class="btn submit-btn" data-qid="${q.id}">Generate Feedback</button>
        <button class="btn reset-btn" data-qid="${q.id}">Clear</button>
      </div>
      <div id="feedback-${q.id}" class="feedback hidden"></div>
    `;
    questionsContainer.appendChild(card);
  });

  // Attach Event Listeners
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
    alert("Please type an answer before generating feedback.");
    return;
  }

  const analysis = analyzeAnswer(answer.toLowerCase(), question.guidelines);
  
  feedbackBox.classList.remove('hidden');
  feedbackBox.innerHTML = `
    <div class="feedback-section">
      <h4>📝 Feedback Report</h4>
      <ul class="feedback-list">${analysis.feedback.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>
    <details class="examiner-details">
      <summary>👨‍🏫 Examiner Guidance & Model Answer</summary>
      <p><strong>💡 Examiner Focus:</strong> ${question.guidelines.examinerTips}</p>
      <p><strong>📖 Model Answer:</strong> ${question.guidelines.modelAnswer}</p>
      <p class="note">Note: H2 Economics marks are awarded for <strong>Knowledge + Application + Analysis</strong>. This tool checks for concept coverage and extract referencing. In exams, precise diagram labels and logical chains of reasoning are also required.</p>
    </details>
  `;
}

function analyzeAnswer(answerText, guidelines) {
  const matchedConcepts = guidelines.keyConcepts.filter(c => answerText.includes(c.toLowerCase()));
  const matchedData = guidelines.applicationCues.filter(d => answerText.includes(d.toLowerCase()));
  const missingConcepts = guidelines.keyConcepts.filter(c => !answerText.includes(c.toLowerCase()));

  const feedback = [];
  
  if (matchedConcepts.length >= 2) {
    feedback.push(`✅ <strong>Strong conceptual understanding:</strong> You correctly referenced <em>${matchedConcepts.slice(0, 3).join(', ')}</em>.`);
  } else if (matchedConcepts.length === 1) {
    feedback.push(`🔸 <strong>Concept identified:</strong> You mentioned <em>${matchedConcepts[0]}</em>, which is a good start.`);
  } else {
    feedback.push(`⚠️ <strong>Missing core concepts:</strong> Your answer doesn't yet include the key economic terms expected.`);
  }

  if (matchedData.length > 0) {
    feedback.push(`📊 <strong>Good application:</strong> You referenced relevant data/context (<em>${matchedData.join(', ')}</em>).`);
  } else {
    feedback.push(`💡 <strong>Improvement tip:</strong> Explicitly reference the table/extracts (e.g., "Table 1 shows...", "Extract 1 states...") to secure Application marks.`);
  }

  if (missingConcepts.length > 0 && missingConcepts.length <= 3) {
    feedback.push(`🔄 <strong>To strengthen:</strong> Consider incorporating <em>${missingConcepts.slice(0, 3).join(', ')}</em> to build a more complete explanation.`);
  } else if (missingConcepts.length > 3) {
    feedback.push(`🔄 <strong>To strengthen:</strong> Focus on building a logical chain: Concept → Data reference → Economic outcome.`);
  }

  return { feedback };
}
