export default function addEvent({
  evtName, peoples, day, hour, createBtn,
  data, error, setCellData, delEvt, delName,
}) {
  const evt = document.querySelector(evtName);
  const peopleList = document.querySelector(peoples);
  const dayList = document.querySelector(day);
  const hourList = document.querySelector(hour);
  const create = document.querySelector(createBtn);
  const dataTime = document.querySelectorAll(data);
  const addError = document.querySelector(error);
  const del = document.querySelector(delName);

  create.addEventListener('click', (e) => {
    e.preventDefault();
    dataTime.forEach((el, i) => {
      const cell = dataTime[i].children;
      if (dataTime[i].getAttribute('data-time') === hourList.value) {
        switch (dayList.value) {
          case 'Mon':
            setCellData(cell[1], evt, peopleList, addError, delEvt, del);
            break;
          case 'Tue':
            setCellData(cell[2], evt, peopleList, addError, delEvt, del);
            break;
          case 'Wed':
            setCellData(cell[3], evt, peopleList, addError, delEvt, del);
            break;
          case 'Thu':
            setCellData(cell[4], evt, peopleList, addError, delEvt, del);
            break;
          case 'Fri':
            setCellData(cell[5], evt, peopleList, addError, delEvt, del);
            break;
          default:
            return dayList.value;
        }
      }
      return true;
    });
  });
}
