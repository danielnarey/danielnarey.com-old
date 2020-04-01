/* eslint import/no-unresolved: off */

import { createBrowserHistory } from 'history';
import startTabRouter from './start-tab-router';
import routeMap from '../.metamodern/route-map';

import Footer from '../app/_Footer/Footer.svelte';

try {
  const footer = new Footer({
    target: document.getElementById('footerContent'),
  });

  const history = createBrowserHistory();

  startTabRouter(history, routeMap);
} catch (err) {
  console.log(err);
}
