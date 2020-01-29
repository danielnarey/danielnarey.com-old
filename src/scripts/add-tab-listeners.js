import forEachSelected from './for-each-selected';


const addTabListeners = (history) => {
  const content = document.getElementById('pageContent');

  forEachSelected(
    'pageNav',
    'button[data-url]',
    (elem) => {
      const url = elem.getAttribute('data-url');

      elem.addEventListener('click', () => {
        history.push(url);
        content.scrollIntoView(true);
      });
    },
  );
};


export default addTabListeners;
