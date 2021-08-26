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

// App Object
class App {
  // User Array
  users = [];

  constructor() {
    // get local Storage///////////////////////////// button callback
    /////////////////////////// Button Methods

    // Submit New User to Accounts
    submitEl.addEventListener('click', function () {
      // user oject created
      const newAccount = new UserObj();
      // pushed to user array
      users.push(newAccount);
      formEl.remove();
      headerEl.append(`\n Welcome ${newAccount.userName}`);
      console.log('added', { newAccount });
      localStorage.setItem('accounts', JSON.stringify(users));
    });

    ////////////////////// Hide/Show CSS display
    // Switch Display for new/existing User

    // Change CSS to New User
    regNewUserEl.addEventListener('click', function () {
      submitEl.closest('.form__row').classList.toggle('form__row--hidden');
      userEmailEl.closest('.form__row').classList.toggle('form__row--hidden');
      loginEl.closest('.form__row').classList.toggle('form__row--hidden');
      regNewUserEl.closest('.form__row').classList.toggle('form__row--hidden');
      existingUserEl
        .closest('.form__row')
        .classList.toggle('form__row--hidden');
    });

    // Change CSS to Existing User Login
    existingUserEl.addEventListener('click', function () {
      submitEl.closest('.form__row').classList.toggle('form__row--hidden');
      userEmailEl.closest('.form__row').classList.toggle('form__row--hidden');
      loginEl.closest('.form__row').classList.toggle('form__row--hidden');
      regNewUserEl.closest('.form__row').classList.toggle('form__row--hidden');
      existingUserEl
        .closest('.form__row')
        .classList.toggle('form__row--hidden');
    });

    // Login Existing User
    // / Login existing user/ check for account
    loginEl.addEventListener('click', function () {
      formEl.remove();
      console.log('logged in');
      headerEl.append(`\n Welcome Back`);
    });

    this._getLocalStorage();
  }

  _setLocalStorage() {
    localStorage.setItem('accounts', JSON.stringify(this.users));
  }
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('accounts'));
    if (!data) return;

    this.#users = data;
    this.#users.forEach(user => {
      this._renderWorkout(user);
    });
  }
}

// Object Class Prototypes
class UserObj {
  constructor() {
    this.userEmail = document.querySelector('.userEmail--Input').value;
    this.userName = document.querySelector('.userName--Input').value;
    this.userPassword = document.querySelector('.userPassword--Input').value;
  }
}

console.log(localStorage);
console.log(users);
