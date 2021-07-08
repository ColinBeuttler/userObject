'use strict';

// html elements
const formEl = document.querySelector('.userForm');
const submitEl = document.querySelector('.submitBtn');

const users = [];

const createObj = e => {
  //   e.preventDefault();
  let userObj = {
    name: document.querySelector('.userName--Input').value,
    password: document.querySelector('.userPassword--Input').value,
  };
  users.push(userObj);
  console.log('added', { users });
};

submitEl.addEventListener('click', createObj());

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
