const icon = document.querySelector('.ham_icon');
const dropdown = document.querySelector('.dropdown');
const iconStyle = document.querySelector('#icon');
const problemList = document.querySelector('.problem_content .list')

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
  e.target.nextElementSibling.classList.toggle('fadeInDown')
  e.target.nextElementSibling.classList.toggle('am-order-1')
}