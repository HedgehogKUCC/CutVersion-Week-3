"use strict";

var icon = document.querySelector('.ham_icon');
var dropdown = document.querySelector('.dropdown');
var iconStyle = document.querySelector('#icon');
var problemList = document.querySelector('.problem_content .list');
icon.addEventListener('click', toggle);
problemList.addEventListener('click', toggleList);

function toggle(e) {
  e.preventDefault();
  dropdown.classList.toggle('active');
  iconStyle.classList.toggle('icon-menu');
  iconStyle.classList.toggle('icon-cross');
}

function toggleList(e) {
  if (e.target.nodeName !== 'H4') {
    return;
  }

  e.target.parentNode.classList.toggle('active');
  e.target.nextElementSibling.classList.toggle('fadeInDown');
  e.target.nextElementSibling.classList.toggle('am-order-1');
}
//# sourceMappingURL=all.js.map
