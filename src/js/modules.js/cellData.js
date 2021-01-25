export default function setCellData(cellElem, evtName, peoples, errorElem, delEvt, delName) {
  const errorText = {
    error: '<span>🞪</span>Falied to create event. This slot already blocked',
    warning: '<span>🞪</span>Input event name',
  };
  const cell = cellElem;
  const error = errorElem;
  const span = document.createElement('span');
  span.classList.add('delete');
  span.textContent = '🞪';
  if (!cell.getAttribute('data-name') && evtName.value) {
    document.querySelector('.event').style.display = 'none';
    document.querySelector('.main').style.display = 'block';
    cell.setAttribute('data-name', peoples.textContent);
    cell.setAttribute('data-content', evtName.value);
    cell.innerHTML = evtName.value;
    cell.appendChild(span);
    cell.style.background = '#5fff9c';
    error.style.display = 'none';
  } else {
    error.style.display = 'block';
    if (!evtName.value) {
      error.innerHTML = errorText.warning;
      return error;
    }
    if (cell.getAttribute('data-name')) error.innerHTML = errorText.error;
  }
  delEvt(span, delName);
  return true;
}
