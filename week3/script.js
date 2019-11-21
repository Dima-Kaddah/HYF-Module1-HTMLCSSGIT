//web menu function
var showAll = document.querySelector('.webNavbtn');
var myUls = document.querySelector('.myNav');

showAll.addEventListener('click', toggleMenu);
showAll.innerHTML = 'Show menu';
let showMenu = false;

function toggleMenu() {
  if (!showMenu) {
    showAll.innerHTML = 'Hide menu';
    myUls.classList.add('openMenu');

    showMenu = true;
  } else {
    showAll.innerHTML = 'Show menu';
    myUls.classList.remove('openMenu');

    showMenu = false;
  }
}
//mobile menu function
var minBtn = document.querySelector('.mobileBtn');
var mobileMenu = document.querySelector('.myNav');
minBtn.addEventListener('click', toggleMenuMobile);

let showMobileMenu = false;

function toggleMenuMobile() {
  if (!showMobileMenu) {
    mobileMenu.classList.add('openMenu');
    showMobileMenu = true;
  } else {
    mobileMenu.classList.remove('openMenu');
    showMobileMenu = false;
  }
}
