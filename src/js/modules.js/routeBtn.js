export default function routeBtn(trigger, from, to) {
  const route = document.querySelector(trigger);
  const prevPage = document.querySelector(from);
  const nextPage = document.querySelector(to);
  route.addEventListener('click', (e) => {
    e.preventDefault();
    prevPage.style.display = 'none';
    nextPage.style.display = 'block';
  });
}
