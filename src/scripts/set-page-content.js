/* global document */


const setPageContent = (html) => {
  const panel = document.getElementById('pageContent');

  panel.innerHTML = html;
};


export default setPageContent;
