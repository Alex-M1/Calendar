export default function dropdown(trigger, ...closeSections) {
  const dropdownBtn = document.querySelector(trigger);
  const close = document.querySelectorAll(closeSections);
  const id = dropdownBtn.getAttribute('id');
  const toggleElem = document.querySelector(`[data-toggle-id="${id}"]`);

  dropdownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (toggleElem.style.display === 'block') {
      toggleElem.style.display = 'none';
    } else {
      toggleElem.style.display = 'block';
    }
  });

  close.forEach((el) => {
    el.addEventListener('click', (e) => {
      if (e.target === el) {
        toggleElem.style.display = 'none';
      }
    });
  });
}
