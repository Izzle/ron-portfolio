const render = function(myObj) {
  console.log('render is working');
};

const handleHamburgerClick = function() {
  $('nav').on('click', '#mobile-nav-hamburger', event => {
    console.log('hamburger button clicked');
  });
};

const bindEventListeners = function() {
  handleHamburgerClick();
};

export default {
  render,
  bindEventListeners,
};
