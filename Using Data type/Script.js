console.log("Good morning from External");

//get name from prompt and saves it in user variable
let user = prompt("Enter Name");
//prints Welcome message to console
console.log("Welcome " + user);

//gets h1 element with id 'message'
let messageH1 = document.getElementById("message");
//edits text of h1 element
messageH1.innerHTML = "Hello my name is " + user;

let userColor = prompt('Enter Color');
messageH1.style.color = userColor;
