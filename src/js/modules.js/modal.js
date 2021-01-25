export default function modal(modalSel, modalClose) {
  const modalWindow = document.querySelector(modalSel);
  const dataClose = document.querySelectorAll(modalClose);

  const removeAttrs = (item, ...attr) => {
    attr.forEach((el) => item.removeAttribute(el));
  };

  modalWindow.addEventListener('click', (e) => {
    if (e.target === modalWindow) {
      const delItem = document.querySelector('[data-deleted]');
      removeAttrs(delItem, 'data-deleted');
      modalWindow.style.display = 'none';
    }
  });

  dataClose.forEach((el) => {
    el.addEventListener('click', () => {
      modalWindow.style.display = 'none';
      const delItem = document.querySelector('[data-deleted]');
      removeAttrs(delItem, 'data-deleted');
      if (el.textContent === 'Yes') {
        delItem.style.background = '';
        delItem.textContent = '';
        removeAttrs(delItem, 'data-name', 'data-content', 'data-deleted');
      }
    });
  });
}
