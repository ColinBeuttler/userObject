'use strict';

// HTML elements
const formEl = document.querySelector('.userForm');
const submitEl = document.querySelector('.submitBtn');
const loginEl = document.querySelector('.loginBtn');
const userNameEl = document.querySelector('.userName--Input');
const userPasswordEl = document.querySelector('.userPassword--Input');
const userEmailEl = document.querySelector('.userEmail--Input');
const headerEl = document.querySelector('.header');
const regNewUserEl = document.querySelector('.regNewUser');
const existingUserEl = document.querySelector('.existingUser');

// User Array
let users = [];

users.push(JSON.parse(localStorage.getItem('accounts')));
// localStorage.setItem('accounts', JSON.stringify(users));

// let welcomeMsgEle = document.createElement('div');
// welcomeMsgEle.innerHTML = ' ';

// let existingUsers = JSON.parse(localStorage.getItem(users));
// existingUser = existingUser ? existingUser.split(',') : [];

// // app functions

// class App {
//      #userObj = []

//      constructor(){
//          form.addEventListener('submit', this._userObj.bind(this))

//      }
// }

// const userName = JSON.stringify(userNameEl.value)
// const userPassword = JSON.stringify(userPasswordEl.value)

// console.log(userNameEl, userPasswordEl);

// Object Class Prototypes
class UserObj {
  constructor() {
    this.userEmail = document.querySelector('.userEmail--Input').value;
    this.userName = document.querySelector('.userName--Input').value;
    this.userPassword = document.querySelector('.userPassword--Input').value;
  }
}

/////////////////////////// Button Methods

// Login existing user/ check for account
const checkAccLogin = function () {
  formEl.remove();
  console.log('logged in');
  headerEl.append(`\n Welcome Back`);
};

// create User Object
const pushObj = function () {
  // user oject created
  const newAccount = new UserObj();
  // pushed to user array
  users.push(newAccount);
  formEl.remove();
  headerEl.append(`\n Welcome ${newAccount.userName}`);
  console.log('added', { newAccount });
  localStorage.setItem('accounts', JSON.stringify(users));
};

////////////////////// Hide/Show CSS display
// Switch Display for new/existing User
const switchUserInit = function () {
  submitEl.closest('.form__row').classList.toggle('form__row--hidden');
  userEmailEl.closest('.form__row').classList.toggle('form__row--hidden');
  loginEl.closest('.form__row').classList.toggle('form__row--hidden');
  regNewUserEl.closest('.form__row').classList.toggle('form__row--hidden');
  existingUserEl.closest('.form__row').classList.toggle('form__row--hidden');
};

///////////////////////////// button callback

// Submit New User to Accounts
submitEl.addEventListener('click', pushObj);

// Change CSS to New User
regNewUserEl.addEventListener('click', switchUserInit);

// Change CSS to Existing User Login
existingUserEl.addEventListener('click', switchUserInit);

// Login Existing User
loginEl.addEventListener('click', checkAccLogin);

console.log(localStorage);
console.log(users);
