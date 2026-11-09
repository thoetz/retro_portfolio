const keys = document.querySelectorAll('.key');
const panels = document.querySelectorAll('.panel');

keys.forEach(key => {
  key.addEventListener('click', () => {
    const target = key.dataset.target;
    keys.forEach(k => k.classList.remove('is-active'));
    key.classList.add('is-active');
    panels.forEach(panel => {
      panel.hidden = panel.id !== target;
    });
  });
});

document.querySelector('.key[data-target="home"]').classList.add('is-active');

// on-screen buttons that jump to a section ("see projects", "about me")
document.querySelectorAll('[data-goto]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector(`.key[data-target="${btn.dataset.goto}"]`).click();
  });
});

const projectSummary = document.querySelector('.project-card-summary');
const projectToggleLabel = document.querySelector('.project-toggle-label');
const projectToggleText = projectToggleLabel.textContent;
let questionMarkCount = 0;
let questionMarkTimer;

function stopQuestionMarkEffect() {
  clearInterval(questionMarkTimer);
  questionMarkTimer = null;
  questionMarkCount = 0;
  projectToggleLabel.textContent = projectToggleText;
}

function startQuestionMarkEffect() {
  stopQuestionMarkEffect();
  questionMarkTimer = setInterval(() => {
    questionMarkCount = questionMarkCount % 5 + 1;
    projectToggleLabel.textContent = projectToggleText.replace(/\?+$/, '') + '?'.repeat(questionMarkCount);
  }, 150);
}

projectSummary.addEventListener('pointerenter', startQuestionMarkEffect);
projectSummary.addEventListener('pointerleave', stopQuestionMarkEffect);
projectSummary.addEventListener('focus', startQuestionMarkEffect);
projectSummary.addEventListener('blur', stopQuestionMarkEffect);
