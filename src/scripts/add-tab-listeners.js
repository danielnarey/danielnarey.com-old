/* global window, document */

import forEachSelected from './for-each-selected';


const addTabListeners = (history) => {
  const main = document.getElementById('pageMain');

  forEachSelected(
    'pageNav',
    'button[data-url]',
    (elem) => {
      const url = elem.getAttribute('data-url');

      elem.addEventListener('click', () => {
        history.push(url);
        if (window.innerWidth >= 748) {
          main.scrollIntoView(true);
        }
      });
    },
  );
};


export default addTabListeners;
