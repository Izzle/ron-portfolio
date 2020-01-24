const render = function(myObj) {
  console.log('render is working');
};

// This function works, but its a bit jarring to have all the elements on the page
// move down when the nav bar appears, it would be better if there was an animation
// for the nav bar appearing and none of the other elements moved.
const handleHamburgerClick = function() {
  $('header').on('click', '#mobile-nav-hamburger', event => {
    $('nav').toggleClass('hidden');
  });
};

const bindEventListeners = function() {
  handleHamburgerClick();
};

export default {
  render,
  bindEventListeners,
};
