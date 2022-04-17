let stringSaveForm = document.querySelector("#string-save-form");
let stringInput = document.querySelector("#string-input");
let savedString = document.querySelector("#saved-string");


let savedStringValue = localStorage.getItem('savedStringValue');

if (savedStringValue === null) {
    savedString.innerText = 'Nothing Saved - Please submit an item into the form';
} else {
    savedString.innerText = savedStringValue;
}

stringSaveForm.addEventListener('submit', function(event){
    event.preventDefault();

    //localStorage.setItem('key','value') - adds a key value pair into your local storage that will persist even after you refresh or exist the page
    localStorage.setItem('savedStringValue', stringInput.value);

    //localStorage.getItem('key') - takes in a key as a parameter and gets the value associated with that key from localStorage
    console.log(localStorage.getItem('savedStringValue'));

    savedStringValue = localStorage.getItem('savedStringValue');
    savedString.innerText = savedStringValue;
});

/////////////////////////////////////////////////////////////////////
//Create Account/Login
let createAccountForm = document.querySelector("#create-account-form");
let createAccountUsername = document.querySelector("#create-account-username");
let createAccountPassword = document.querySelector("#create-account-password");

let loginForm = document.querySelector("#login-form");
let loginUsername = document.querySelector("#login-username");
let loginPassword = document.querySelector("#login-password");

let loggedInUser = document.querySelector("#logged-in-username");

/*
users: [
    {
        username: String,
        password: String,
    },
    {
        username2: String,
        password2: String,
    },
]
*/



let users = localStorage.getItem('users');

function setupUsers(){
    users = localStorage.getItem('users');
    if (users === null) {
        //If no users are in our local storage, set up an empty array
        users = [];
    } else {
        //If there are users in our local storage, grab the users
        //in localStorage the users are treated as a String so we need to convert the string back to an object
        //Because we saved our object into localStorage using JSON.stringify() we know that our string is in the correct JSON format for us to convert back to an object 
        //We can convert it back to an object using JSON.parse()
        users = JSON.parse(users);
    }
}

//Create a new user
//Add them to our users array
//Save the array in localStorage
createAccountForm.addEventListener('submit', function(event){
    event.preventDefault();
    setupUsers();

    //create a new user
    
    let newUser = {
        username: createAccountUsername.value,
        password: createAccountPassword.value,
    };

    console.log(newUser);

    //Add newUser to our users array
    users.push(newUser);

    console.log(users);

    //Save the array object in localStorage
    //anything saved in localStorage must be a string, so we should convert our objects/arrays into strings using JSON.stringify();
    localStorage.setItem('users', JSON.stringify(users));

});