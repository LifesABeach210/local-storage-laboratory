
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
})

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
    }

    console.log(newUser);

    //Add newUser to our users array
    users.push(newUser);

    console.log(users);

    //Save the array object in localStorage
    //anything saved in localStorage must be a string, so we should convert our objects/arrays into strings using JSON.stringify();
    localStorage.setItem('users', JSON.stringify(users));

});
//part 2

let newElement = $(`<form id = "form3"></form>`);
$(`#body1`).append(newElement);
let newEle = $(`<div id = "container-1"><h5 id = "counterPlace"></h5></div>`);
$(`#form3`).append(newEle);
let CounterPlace = document.querySelector('#counterPlace');
function createCount(){
    let numberPlace = localStorage.getItem('number');
    if(numberPlace===null){
        localStorage.setItem('number','1');
        CounterPlace.innerText = numberPlace;
    }else{
        numberPlace = Number(numberPlace)+1;
        localStorage.setItem('number',numberPlace.toString())
        CounterPlace.innerText = numberPlace;
    }
};

createCount();

let numberPlace = localStorage.getItem('number');
CounterPlace.innerText = numberPlace;

//part 3

let form5 = $(`<form id = "form4"><div><input type = "submit"
 id = "form4Btn"></input><input type = "text" id = "form4Box"></input>
 <ol id = "List1"></ol></div></form>`)


 $(`#body1`).append(form5);
 let inputVal = document.querySelector('#form4Box');

 let formSub = document.querySelector('#form4');
 let olList = document.querySelector('#List1');


formSub.addEventListener("submit", function(event){
    event.preventDefault();

    let list = localStorage.getItem('list');
        if(list === null){
            list = [];
        }else {
            list = JSON.parse(list);
            for(let str of list){
                console.log(str)
            }
        }
    let newList = inputVal.value;
    
    console.log(newList);
    
    list.push(newList);
    
    console.log(list)
    
    
    localStorage.setItem('list', JSON.stringify(list));
    
    let createLi = document.createElement('li');
    createLi.innerText = newList;
    olList.appendChild(createLi)
    olList.innerHTML = newList;
})













