const button = document.querySelector('#menu-button'); // Hamburger Icon
const menu = document.querySelector('#menu'); // Menu


button.addEventListener('click', function () {
  menu.classList.toggle('hidden');
});