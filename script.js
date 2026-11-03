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
