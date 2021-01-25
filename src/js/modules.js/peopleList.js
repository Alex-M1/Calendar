export default function peopleList(dropdownSel, peopleCheck) {
  const dropdownBtn = document.querySelector(dropdownSel);
  const checkboxes = document.querySelectorAll(peopleCheck);
  let choosenPeople = ['All members'];

  checkboxes.forEach((check) => {
    check.addEventListener('change', (e) => {
      const { target } = e;

      if (!check.checked && check.value !== 'All members') {
        checkboxes[0].checked = false;
      } else if (target.value === 'All members' && target.checked) {
        checkboxes.forEach((box) => {
          box.checked = true;
        });
        choosenPeople = ['All members'];
      } else if (check.checked && check.value !== 'All members') {
        let count = 0;
        checkboxes.forEach((box) => {
          if (box.checked) count += count;
          else count -= count;
        });
        count === checkboxes.length - 2
          ? checkboxes[0].checked = true
          : checkboxes[0].checked = false;
      } else if (!check.checked && target.value === 'All members') {
        checkboxes.forEach((box) => {
          box.checked = false;
        });
      }

      if (target.value !== 'All members') {
        choosenPeople = [];
        checkboxes.forEach((box) => {
          if (box.checked && box.value !== 'All members') {
            choosenPeople.push(box.value);
          }
        });
      }

      if (checkboxes[0].checked) {
        choosenPeople = ['All members'];
      }
      dropdownBtn.textContent = choosenPeople;
    });
  });
  dropdownBtn.textContent = choosenPeople;
}
