
export default {
  element: 'div',
  mutate: function(element) {
    element.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
      + '<text tabindex="0">a</text></svg>';
    return element.querySelector('text');
  },
};