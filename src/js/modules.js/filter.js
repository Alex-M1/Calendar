export default function filter({
  filterSel, table, delEvt, delName,
}) {
  const filterItem = document.querySelector(filterSel);
  const td = document.querySelectorAll(table);
  const del = document.querySelector(delName);

  const showCell = (cell) => {
    cell.style.background = '#5fff9c';
    cell.innerHTML = `${cell.getAttribute('data-content')}<span class="delete">🞪</span>`;
  };

  filterItem.addEventListener('change', () => {
    td.forEach((cell) => {
      if (!cell.classList.contains('time') && cell.getAttribute('data-name') !== 'All members') {
        cell.style.background = '#fff';
        cell.innerHTML = '';
      }

      if (cell.getAttribute('data-name')) {
        const cellNames = cell.getAttribute('data-name').split(',');
        cellNames.forEach((name) => {
          if (name === filterItem.value) {
            showCell(cell);
          } else if (filterItem.value === 'All members') {
            showCell(cell);
          }
        });

        document.querySelectorAll('.delete').forEach((delItem) => {
          delEvt(delItem, del);
        });
      }
    });
  });
}
