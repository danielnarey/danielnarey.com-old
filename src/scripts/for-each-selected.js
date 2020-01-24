/* global document */


const forEachSelected = (
  context,
  selector,
  callback,
) => {
  const baseElem = document.getElementById(context);
  const selected = baseElem.querySelectorAll(selector);

  selected.forEach(callback);
};


export default forEachSelected;
