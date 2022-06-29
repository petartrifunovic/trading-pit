'use strict';

///////////////////////////////////////
//Accordion
const accordions = document.querySelectorAll('.accordion');

for (const accordion of accordions) {
  const panels = accordion.querySelectorAll('.accordion__panel');
  const accordionIcon = document.querySelectorAll('.accordion__icon');

  for (const panel of panels) {
    const head = panel.querySelector('.accordion__header');
    head.addEventListener('click', () => {
      for (const otherPanel of panels) {
        if (otherPanel !== panel) {
          otherPanel.classList.remove('accordion-expanded');
        }
      }

      for (const icon of accordionIcon) {
        if (icon !== accordionIcon) {
          icon.classList.toggle('accordion__icon--animated');
        }
      }

      panel.classList.toggle('accordion-expanded');
    });
  }
}
