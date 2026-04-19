document.addEventListener('DOMContentLoaded', () => {
  const extractsContainer = document.getElementById('extracts');
  const questionsContainer = document.getElementById('questions');

  // Render Extracts
  caseStudy.extract && caseStudy.extract.forEach(ext => {
    const div = document.createElement('div');
    div.className = 'extract-card';
    div.innerHTML = `<h3>${ext.title}</h3><p>${ext.content.replace(/\n/g, '<br>')}</p>`;
    extractsContainer.appendChild(div);
  });

  // Render Table
  const tableDiv = document.createElement('div');
  tableDiv.className = 'extract-card';
  tableDiv.innerHTML = `<h3>Table 1: Elasticities</h3><pre>${caseStudy.table}</pre>`;
  extractsContainer.appendChild(tableDiv);

  // Render Questions
  caseStudy.questions.forEach(q => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.innerHTML = `
      <h3>Question ${q.id} [${q.marks} marks]</h3>
      <p class="q-text">${q.text}</p>
      <textarea id="ans-${q.id}" placeholder="Type your answer here... Use economic terms and refer to the extracts where appropriate."></textarea>
      <div class="btn-group">
        <button class="btn submit-btn" data-qid="${q.id}">Submit & Get Feedback</button>
        <button class="btn reset-btn" data-qid="${q.id}">Clear</button>
      </div>
      <div id="feedback-${q.id}" class="feedback hidden"></div>
    `;
    questionsContainer.appendChild(card);
  });

  // Attach Event Listeners
  document.querySelectorAll('.submit-btn').forEach(btn => {
    btn.addEventListener('click', handleSubmission);
  });
  document.querySelectorAll('.reset-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const qid = e.target.dataset.qid;
      document.getElementById(`ans-${qid}`).value = '';
      document.getElementById(`feedback-${qid}`).classList.add('hidden');
      document.getElementById(`feedback-${qid}`).innerHTML = '';
    });
  });
});

function handleSubmission(e) {
  const qid = e.target.dataset.qid;
  const question = caseStudy.questions.find(q => q.id === qid);
  const answer = document.getElementById(`ans-${qid}`).value.trim();
  const feedbackBox = document.getElementById(`feedback-${qid}`);

  if (!answer) {
    alert("Please type an answer before submitting.");
    return;
  }

  const { score, breakdown, missingConcepts } = gradeAnswer(answer.toLowerCase(), question);
  const modelAnswer = generateModelAnswer(question);

  feedbackBox.classList.remove('hidden');
  feedbackBox.innerHTML = `
    <div class="score-badge">${score}/${question.marks} marks</div>
    <div class="breakdown">
      <h4>📝 Marking Breakdown:</h4>
      ${breakdown}
      ${missingConcepts.length > 0 ? `<p class="missed">⚠️ <strong>Concepts to improve:</strong> ${missingConcepts.join(', ')}</p>` : ''}
    </div>
    <details>
      <summary>📖 View Model Answer & Examiner Notes</summary>
      <p><strong>Examiner Guidance:</strong> ${modelAnswer}</p>
      <p><em>Note: Automated grading checks for key economic concepts. Final marks in exams depend on precise application, logical chains of reasoning, and correct diagrammatic reference where applicable.</em></p>
    </details>
  `;
}

function gradeAnswer(answerText, question) {
  let score = 0;
  const breakdownItems = [];
  const missing = [];

  question.rubric.forEach(point => {
    const hit = point.keywords.some(kw => answerText.includes(kw));
    if (hit) {
      score += point.marks;
      breakdownItems.push(`<span class="hit">✅ ${point.point} (+${point.marks}m)</span>`);
    } else {
      missing.push(point.point);
      breakdownItems.push(`<span class="miss">❌ ${point.point} (+0m)</span>`);
    }
  });

  return {
    score,
    breakdown: `<ul>${breakdownItems.map(item => `<li>${item}</li>`).join('')}</ul>`,
    missingConcepts: missing
  };
}

function generateModelAnswer(q) {
  switch(q.id) {
    case 'a_i': return "PED = -1 indicates unitary price elasticity. A fall in price leads to a proportionate increase in quantity demanded. Since TR = P × Q, total revenue remains unchanged.";
    case 'a_ii': return "YED = 1.5 indicates leisure flights are a luxury good. A fall in income causes a more than proportionate decrease in demand. With both price and quantity falling, total revenue falls significantly.";
    case 'b_i': return "Fewer close substitutes exist for international leisure travel. Ferries, trains, and cars take significantly longer for non-UK trips, making them poor substitutes. Within the UK, rail and road are close substitutes, making domestic flights more price-elastic.";
    case 'b_ii': return "Business flights to non-UK destinations are more necessary for market familiarisation, establishing physical presence, and gathering foreign market information. Domestic business information can be communicated more easily, making UK business flights less income-responsive.";
    case 'c': return "CED measures responsiveness of demand for good A to a price change in good B. High-speed rail and air travel are substitutes, so CED is positive. However, it is likely small (<1) because rail only substitutes air on short-haul/domestic routes, not long-haul.";
    case 'd': return "Demand factor: Rise in EU migration and labour mobility increases willingness/ability to travel abroad to maintain relationships. ↑DD → shortage → ↑P → ↑Qs. Supply factor: Deregulation/liberalisation of aviation markets reduces barriers, enabling airlines to offer more flights. ↑SS → surplus → ↓P → ↑Qd.";
    default: return "Refer to the official mark scheme.";
  }
}
