'use strict';
import portfolio from './portfolio.js';

const main = function () {
  console.log('main is running');
  portfolio.render();
  portfolio.bindEventListeners();
};

$(main);