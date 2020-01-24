import forEachSelected from './for-each-selected';


const toggleActiveTab = (location) => {
  forEachSelected(
    'pageNav',
    'button[data-url]',
    (elem) => {
      const url = elem.getAttribute('data-url');
      const active = elem.getAttribute('data-active');

      const classNames = (
        active && active !== ''
          ? active.replace(/[^a-zA-Z-_]+/g, ' ').trim().split(' ')
          : []
      );

      if (url === location.pathname) {
        elem.setAttribute('aria-selected', 'true');
        classNames.forEach((name) => {
          elem.classList.add(name);
        });
      } else {
        elem.setAttribute('aria-selected', 'false');
        classNames.forEach((name) => {
          elem.classList.remove(name);
        });
      }
    },
  );
};


export default toggleActiveTab;
