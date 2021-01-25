export default function onDeletedCell(closeEl, delName) {
  const del = delName;
  closeEl.addEventListener('click', (e) => {
    del.textContent = `"${e.target.parentElement.getAttribute('data-content')}"`;
    document.querySelector('.modal-delete').style.display = 'flex';
    e.target.parentElement.setAttribute('data-deleted', '');
  });
}
