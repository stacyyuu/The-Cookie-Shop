'use strict'
// use strict tell us to follow some baseline 'strict rules'
// variables = storing data as values. declore some sort of data and add value to it 
// declaring variable firstname to equal value of stacy 
// let firstName = "stacy";

// let firstName = prompt("What is your name?");

// if(firstName === "Stacy"){
//     console.log("Your name is Stacy!")
// }

// dynamic
function getFirstName (){
    let firstName = prompt("What is your name?");
    return firstName;
}

function timeOfDay(){
    let time = prompt("What hour is it (0-24)?");
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
    return message;
}

function getCourseLevel(){
    let level = prompt("What level course are we in?");
    if(level != 2){
        prompt("Incorrect. Try again?");
    } else {
        confirm("That is correct!");
    }
}

function generateGreeting(){
    let firstName = getFirstName();
    let message = timeOfDay();
    return document.write("Hello " + firstName + ", " + message);
}

function backgroundColor(){
    let color = prompt("What's your favorite color?");
    return document.body.style.backgroundColor = color;
}
// call the function getGreeting with ARGUMENT of first name
// getGreeting(firstName);

// function getGreeting(name) {
//     console.log('Hello, ' + name);
// }

// let sum = getSum(5, 25); 
// function getSum(numA, numB) { 
//     return numA + numB
// } 


// if (confirm("Confirm Answers?") == true) {
//     document.write("Hello " + firstName + "! " + message);
// }



