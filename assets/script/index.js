import './component/ui-wave.js';
import './component/ui-navbar.js';
import './component/ui-footer.js';
import './component/banner-info.js';


// hide/show daftar/masuk/user profile
let user = false;

let accountMode = false;

const userNav = document.querySelector('#userNav');
const gateway = document.querySelector('#gateway');
const dividerTwo = document.querySelector('.dividerTwo');

// console.log(userNav.style.display = 'block');
// console.log(gateway.style.display);

const userStatus = user => {
  if (user) {
    userNav.classList.add('d-block');
  } else {
    gateway.classList.add('d-flex');
    dividerTwo.classList.add('d-none');
  }
}

if (accountMode == false) {
  userNav.classList.add('d-none');
  gateway.classList.add('d-none');
  dividerTwo.classList.add('d-none');
} else {
  userStatus(user);
}