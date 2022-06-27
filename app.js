'use strict'
// use strict tell us to follow some baseline 'strict rules'
// variables = storing data as values. declore some sort of data and add value to it 
// declaring variable firstname to equal value of stacy 
// let firstName = "stacy";

// let firstName = prompt("What is your name?");

// if(firstName === "Stacy"){
//     console.log("Your name is Stacy!")
// }

let firstName = prompt("What is your name?");
let time = prompt("What hour is it (0-24)?");
let color = prompt("What's your favorite color?")
let message = "";

if(time <= 11){
    message = "Good Morning!";
    //console.log("Good Morning!");
} else if(time <= 18){
    message = "Good Afternoon!";
    //console.log("Good Afternoon!");
} else if(time <= 24){
    message = "Good Night!";
    //console.log("Good Night!");
} else{
    message = "Good Day!";
    //console.log("Have a great day!");
}
if (confirm("Confirm Answers?") == true) {
    document.write("Hello " + firstName + "! " + message);
}

document.body.style.backgroundColor = color;