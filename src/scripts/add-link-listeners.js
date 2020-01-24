/* global document */

import forEachSelected from './for-each-selected';
import isLocalRoute from './is-local-route';


const addLinkListeners = (history) => {
  const nav = document.getElementById('pageNav');

  forEachSelected(
    'pageContent',
    'a[href]',
    (elem) => {
      const url = elem.getAttribute('href');

      if (isLocalRoute(url)) {
        elem.addEventListener('click', (evt) => {
          evt.preventDefault();
          history.push(url);
          nav.scrollIntoView(true);
        });
      }
    },
  );
};


export default addLinkListeners;
