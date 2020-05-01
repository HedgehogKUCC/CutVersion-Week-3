const icon = document.querySelector('.ham_icon');
const dropdown = document.querySelector('.dropdown');
const iconStyle = document.querySelector('#icon');

icon.addEventListener('click', toggle);

function toggle(e) {
  e.preventDefault();
  dropdown.classList.toggle('active');
  iconStyle.classList.toggle('icon-menu');
  iconStyle.classList.toggle('icon-cross');
}