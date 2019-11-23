var content = document.querySelector('.mainList');
var clickBtn = document.querySelector('.toggleNav');
clickBtn.addEventListener('click', openMenu);

let openMenuApp = false;
function openMenu() {
  if (!openMenuApp) {
    content.classList.add('open');

    openMenuApp = true;
  } else {
    content.classList.remove('open');
    openMenuApp = false;
  }
}

// i  need to know more to use style functions
// function show_hide() {
//   var content = document.getElementsByClassName('mainList');
//   if (content.style.display === 'none') {
//     content.style.display = 'block';
//   } else {
//     content.style.display = 'none';
//   }
// }
