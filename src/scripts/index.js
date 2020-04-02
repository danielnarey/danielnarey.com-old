/* eslint import/no-unresolved: off */

import { createBrowserHistory } from 'history';
import startTabRouter from './start-tab-router';
import routeMap from '../.metamodern/route-map';

import Footer from '../app/footer/Footer.svelte';
import Header from '../app/header/Header.svelte';
import Nav from '../app/nav/Nav.svelte';

try {
  const footer = new Footer({
    target: document.getElementById('pageFooter'),
  });
  
  const header = new Header({
    target: document.getElementById('pageHeader'),
  });
  
  const nav = new Nav({
    target: document.getElementById('pageNav'),
  });

  const history = createBrowserHistory();

  startTabRouter(history, routeMap);
} catch (err) {
  console.log(err);
}
