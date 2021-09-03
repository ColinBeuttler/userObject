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

// localStorage.setItem('accounts', JSON.stringify(users));

// let welcomeMsgEle = document.createElement('div');
// welcomeMsgEle.innerHTML = ' ';

// let existingUsers = JSON.parse(localStorage.getItem(users));
// existingUser = existingUser ? existingUser.split(',') : [];

// const userName = JSON.stringify(userNameEl.value)
// const userPassword = JSON.stringify(userPasswordEl.value)

// Object Class Prototypes
class UserObj {
  constructor(userEmail, userName, userPassword) {
    this.userEmail = userEmail;
    this.userName = userName;
    this.userPassword = userPassword;
  }
}

// App Object
class App {
  // User Array
  // #users;

  constructor() {
    // get local Storage//
    this._getLocalStorage();

    /////// Event Listeners

    // Submit New User to Accounts
    submitEl.addEventListener('click', this._newUserInput);

    // Change CSS to New User
    regNewUserEl.addEventListener('click', this._toggleUserForm);

    // Change CSS to Existing User Login
    existingUserEl.addEventListener('click', this._toggleUserForm);

    // / Login existing user/ check for account
    loginEl.addEventListener('click', function () {
      formEl.remove();
      console.log('logged in');
      headerEl.append(`\n Welcome Back`);
    });
  }

  _newUserInput(e) {
    const validEmail = inputs => inputs.includes('@');
    const validInputs = (...inputs) => inputs.every(inp => inp != ' ');

    e.preventDefault();
    let users = [];
    const userEmail = userEmailEl.value;
    const userName = userNameEl.value;
    const userPassword = userPasswordEl.value;
    let newAccount;

    if (!validEmail(userEmail) || !validInputs(userName, userPassword)) {
      return alert('not valid');
    }
    // user oject created
    newAccount = new UserObj(userEmail, userName, userPassword);

    formEl.remove();
    headerEl.append(`\n Welcome ${newAccount.userName}`);
    console.log('added', { newAccount });

    // pushed to user array
    users.push(newAccount);
    console.log(users);

    this._setLocalStorage();
  }

  ////////////////////// Hide/Show CSS display
  // Switch Display for new/existing User
  _toggleUserForm() {
    submitEl.closest('.form__row').classList.toggle('form__row--hidden');
    userEmailEl.closest('.form__row').classList.toggle('form__row--hidden');
    loginEl.closest('.form__row').classList.toggle('form__row--hidden');
    regNewUserEl.closest('.form__row').classList.toggle('form__row--hidden');
    existingUserEl.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _setLocalStorage() {
    localStorage.setItem('accounts', JSON.stringify(users));
  }
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('accounts'));
    // if (!data) return;

    // this.users = data;
  }
}

console.log(localStorage);
// console.log(users);

const app = new App();
