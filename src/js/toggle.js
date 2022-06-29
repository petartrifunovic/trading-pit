'use strict';

//Toggle - View More
let toggleBtn = document.querySelector('.btn--toggle');
const cardChild = document.querySelectorAll('.stats:nth-last-child(-n + 5)');

toggleBtn.addEventListener('click', () => {
  cardChild.forEach(el => {
    el.classList.toggle('stats--visible');
  });

  toggleBtn.textContent === 'View More'
    ? (toggleBtn.textContent = 'View Less')
    : (toggleBtn.textContent = 'View More');
});
