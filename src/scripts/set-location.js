import addLinkListeners from './add-link-listeners';
import setPageContent from './set-page-content';
import toggleActiveTab from './toggle-active-tab';


const setLocation = (history, routeMap) => (location) => {
  const html = routeMap.get(location.pathname);

  setPageContent(html);
  toggleActiveTab(location);
  addLinkListeners(history);
};


export default setLocation;
