import forEachSelected from './for-each-selected';


const addTabListeners = (history) => {
  forEachSelected(
    'pageNav',
    'button[data-url]',
    (elem) => {
      const url = elem.getAttribute('data-url');

      elem.addEventListener('click', () => {
        history.push(url);
      });
    },
  );
};


export default addTabListeners;
