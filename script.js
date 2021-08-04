'use strict';

// html elements
const formEl = document.querySelector('.userForm');
const submitEl = document.querySelector('.submitBtn');
const loginEl = document.querySelector('.loginBtn');
const userNameEl = document.querySelector('.userName--Input');
const userPasswordEl = document.querySelector('.userPassword--Input');
const userEmailEl = document.querySelector('.userEmail--Input');
const headerEl = document.querySelector('.header');
const regNewUserEl = document.querySelector('.regNewUser');

let users = [];

users.push(JSON.parse(localStorage.getItem('accounts')));
// localStorage.setItem('accounts', JSON.stringify(users));


let welcomeMsgEle = document.createElement('div');
welcomeMsgEle.innerHTML = ' ';

// let existingUsers = JSON.parse(localStorage.getItem(users));
// existingUser = existingUser ? existingUser.split(',') : [];

// Object Prototypes

const UserObj =function(userEmail, userName, userPassword){
  this.userEmail = userEmail
  this.userName = userName
  this.userPassword = userPassword
}

// Button Methods

// create User Object

const pushObj = () => {
  // user oject created
  const newAccount = new UserObj()
  // pushed to user array
  users.push(newAccount);
  formEl.remove();
  headerEl.append(`\n Welcome ${newAccount.name}`);
  console.log('added', { newAccount });
  localStorage.setItem('accounts', JSON.stringify(users))
};

// Initate New User

const newUserinit =function(loginBtnEl){
  loginBtnEl.setAttribute('style', 'display:none')
  console.log('new user form')
}

// button callback
submitEl.addEventListener('click', pushObj);

regNewUserEl.addEventListener('click', newUserinit)




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
