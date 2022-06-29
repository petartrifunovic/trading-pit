'use strict';

// Hamburger Menu
const hamburgerBtn = document.querySelector('.hamburger-open');
const hamburgerClose = document.querySelector('.hamburger-close');
const sidebar = document.querySelector('.sidebar');

hamburgerBtn.addEventListener('click', () => {
  sidebar.classList.add('sidebar--visible');
});

hamburgerClose.addEventListener('click', () => {
  sidebar.classList.remove('sidebar--visible');
});
