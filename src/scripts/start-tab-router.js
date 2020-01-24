import addLinkListeners from './add-link-listeners';
import addTabListeners from './add-tab-listeners';
import setLocation from './set-location';


const startTabRouter = (history, routeMap) => {
  const navigate = setLocation(history, routeMap);

  addTabListeners(history);

  if (history.location !== '/') {
    navigate(history.location);
  } else {
    addLinkListeners(history);
  }

  history.listen(navigate);
};


export default startTabRouter;
