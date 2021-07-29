'use strict';

// html elements
const formEl = document.querySelector('.userForm');
const submitEl = document.querySelector('.submitBtn');
const userNameEl = document.querySelector('.userName--Input');
const userPasswordEl = document.querySelector('.userPassword--Input');
const headerEl = document.querySelector('.header');

let users = [];

users.push(JSON.parse(localStorage.getItem('accounts')));
// localStorage.setItem('accounts', JSON.stringify(users));


let welcomeMsgEle = document.createElement('div');
welcomeMsgEle.innerHTML = ' ';

// let existingUsers = JSON.parse(localStorage.getItem(users));
// existingUser = existingUser ? existingUser.split(',') : [];

const createObj = () => {
  // user oject created
  let userObj = {
    name: userNameEl.value,
    password: userPasswordEl.value,
  };
  // pushed to user array
  users.push(userObj);
  formEl.remove();
  headerEl.append(`\n Welcome ${userObj.name}`);
  console.log('added', { userObj });
  localStorage.setItem('accounts', JSON.stringify(users))
};
// button callback
submitEl.addEventListener('click', createObj);

console.log(localStorage)
console.log(users)

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
