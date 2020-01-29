/* global document */

import forEachSelected from './for-each-selected';
import isLocalRoute from './is-local-route';


const addLinkListeners = (history) => {
  const content = document.getElementById('pageContent');

  forEachSelected(
    'pageContent',
    'a[href]',
    (elem) => {
      const url = elem.getAttribute('href');

      if (isLocalRoute(url)) {
        elem.addEventListener('click', (evt) => {
          evt.preventDefault();
          history.push(url);
          content.scrollIntoView(true);
        });
      }
    },
  );
};


export default addLinkListeners;
