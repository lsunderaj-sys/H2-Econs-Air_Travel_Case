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
      <textarea id="ans-${q.id}" placeholder="Type your answer here..."></textarea>
      <div class="btn-group">
        <button class="btn submit-btn" data-qid="${q.id}">Check My Answer</button>
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

  if (!answer) { alert("Please type an answer first."); return; }

  const lowerAnswer = answer.toLowerCase();
  let score = 0;
  let feedbackHTML = `<h4>📝 Self-Assessment Checklist</h4><ul class="checklist">`;
  let guidanceHTML = `<div class="guidance-box"><h5>💡 Guidance for Improvement</h5><ul>`;

  // Check each rubric point
  question.rubric.forEach(item => {
    const found = item.keywords.some(keyword => lowerAnswer.includes(keyword));
    if (found) {
      score++;
      feedbackHTML += `<li class="found">✅ <strong>${item.point}</strong></li>`;
    } else {
      feedbackHTML += `<li class="missing">❌ <strong>${item.point}</strong></li>`;
      guidanceHTML += `<li>${item.hint}</li>`;
    }
  });

  feedbackHTML += `</ul>`;
  guidanceHTML += `</ul></div>`;

  // Add Model Answer Toggle
  const modelAnswerHTML = `
    <details class="model-answer">
      <summary>👀 Show Official Mark Scheme</summary>
      <pre>${question.modelAnswer}</pre>
    </details>
  `;

  // Final Score Estimate
  const scoreMsg = score === question.marks 
    ? `<p class="score-perfect">🌟 Excellent! You hit all key points.</p>` 
    : `<p class="score-partial">You scored approx ${score}/${question.marks}. Review the guidance below.</p>`;

  feedbackBox.classList.remove('hidden');
  feedbackBox.innerHTML = `
    ${scoreMsg}
    ${feedbackHTML}
    ${guidanceHTML}
    ${modelAnswerHTML}
  `;
}
