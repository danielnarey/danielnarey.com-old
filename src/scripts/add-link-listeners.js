/* global window, document */

import forEachSelected from './for-each-selected';
import isLocalRoute from './is-local-route';


const addLinkListeners = (history) => {
  const main = document.getElementById('pageMain');

  forEachSelected(
    'pageContent',
    'a[href]',
    (elem) => {
      const url = elem.getAttribute('href');

      if (isLocalRoute(url)) {
        elem.addEventListener('click', (evt) => {
          evt.preventDefault();
          history.push(url);
          if (window.innerWidth >= 748) {
            main.scrollIntoView(true);
          }
        });
      }
    },
  );
};


export default addLinkListeners;
