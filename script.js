'use strict';

// html elements
const formEl = document.querySelector('.userForm')
const submitEl = document.querySelector('.submitBtn')
const userNameEl = document.querySelector('.userName--Input')
const userPasswordEl = document.querySelector('.userPassword--Input')

const user ={
    user: 'Colin',
    password : '7339'
}



// object creation
class UserObj {
    constructor(userName, userPassword){
        this.userName = userName
        this.userPassword = userPassword
    }
}

// app functions

class App {
     #userObj = []

     constructor(){
         form.addEventListener('submit', this._userObj.bind(this))

     }
}

// const userName = JSON.stringify(userNameEl.value)
// const userPassword = JSON.stringify(userPasswordEl.value)

console.log(user)

// submit element

// create new user objects

// display new users

// save users in the console

