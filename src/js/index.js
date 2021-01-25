import '../styles/style.scss';
import addEvent from './modules.js/addEvent';
import setCellData from './modules.js/cellData';
import dropdown from './modules.js/dropdown';
import filter from './modules.js/filter';
import modal from './modules.js/modal';
import onDeletedCell from './modules.js/onDeletedCell';
import peopleList from './modules.js/peopleList';
import routeBtn from './modules.js/routeBtn';

window.addEventListener('DOMContentLoaded', () => {
  routeBtn('#add-event', '.main', '.event');
  routeBtn('#cancel', '.event', '.main');

  addEvent({
    evtName: '#evt-name',
    peoples: '#peoples',
    day: '#day',
    hour: '#hour',
    createBtn: '#create',
    data: '[data-time]',
    error: '.add-error',
    delName: '.del-name',
    setCellData,
    delEvt: onDeletedCell,
  });
  const dropdownClose = ['.add', '.event', '.add-option', '.add-option span'];
  dropdown('.dropdown-button', ...dropdownClose);
  peopleList('.dropdown-button', '.people-check');
  modal('.modal-delete', '[data-close]');
  filter({
    filterSel: '.filter',
    table: 'td',
    delName: '.del-name',
    delEvt: onDeletedCell,
  });
});
