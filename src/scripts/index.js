/* eslint import/no-unresolved: off */

import { createBrowserHistory } from 'history';
import startTabRouter from './start-tab-router';
import routeMap from '../.metamodern/route-map';


try {
  const history = createBrowserHistory();

  startTabRouter(history, routeMap);
} catch (err) {
  console.log(err);
}
