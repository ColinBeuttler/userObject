'use strict';

// html elements
const formEl = document.querySelector('.userForm');
const submitEl = document.querySelector('.submitBtn');
const userNameEl = document.querySelector('.userName--Input');
const userPasswordEl = document.querySelector('.userPassword--Input');

let users = [];

let existingUser = localStorage.getItem(users);
existingUser = existingUser ? existingUser.split(',') : [];

const createObj = () => {
  // user oject created
  let userObj = {
    name: userNameEl.value,
    password: userPasswordEl.value,
  };
  // pushed to user array
  users.push(userObj);
  // clear fields
  formEl.reset();
  console.log('added', { users });
  existingUser.push(localStorage);
  console.log(localStorage);
};
// button callback
submitEl.addEventListener('click', createObj);

localStorage.setItem('users', existingUser.toString());

// object creation
// class UserObj {
//     constructor(userName, userPassword){
//         this.userName = userName
//         this.userPassword = userPassword
//     }
// }

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

// submit element

// create new user objects

// display new users

// save users in the console
