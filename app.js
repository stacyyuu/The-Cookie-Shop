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

// function getCourseLevel(){
//     let level = prompt("What level course are we in?");
//     if(level != 2){
//         prompt("Incorrect. Try again?");
//     } else {
//         confirm("That is correct!");
//     }
// }

function generateGreeting(){
    let firstName = getFirstName();
    let message = timeOfDay();
    backgroundColor();
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

//while loop
//while (some condition is true){
    // will do something over and over again
//}  make sure that the loop increments and stops 

// let x = 0;
// // starts loop at 0 and adds by 1 
// // have to declare variable outside of conditional statement, can also add everything into a function
 
// while(x < 5){
//     console.log(x);
//     x++;
//     // x = x + 1; increment by 1, same as x++;
// }

// console.log("i am done");

function guessNumberOfCats(){
    let answer = prompt("How many cats do I have?");

    // string !== string (string, only used for similar data type)
    // stringify (converting something to string)
    // string != int (loose, use when crossing data types)

    while(answer != 2){
        if(answer < 2){
            alert("Too low!")
        } else {
            alert("Too high!");
        }
        answer = prompt("How many cats do I have?");
    }
    alert("Correct!");
}

// doWhileExample();
// function doWhileExample(){
//     let answer = "";
// //do... while generates at least one iteration, used more in frontend
//     do{
//         answer = prompt("Guess a number between 1-5");
//         if(answer < 3){
//             alert("Too low!");
//         } else if(answer > 3){
//             alert("Too high!");
//         } else{
//             alert("CORRECT! The answer is 3!");
//         }
//     } while(answer != 3)
//     console.log("Completed");
// }

// function forLoopExample(){
//     // variable declaration and assignment
//     // condition that needs to be met
//     // what do we do with the variable once an iteration has completed
//     for(let x = 0; x < 5; x++){
//         console.log(x);
//     }
//     console.log("Done");
//     // onnce variable has met condition of being equal to 5
// }

// getRating();
// function getRating(){
//     let answer = prompt("How many stars would you rate Chip Cookies 1-5?");
    // while(answer <= 1 || answer >= 5 ){
    //     if(answer < 1 ){
    //         alert("Please rate 1-5.")
    //     } else if(answer > 5){
    //         alert("Please rate 1-5.");
    //     } 
    //     answer = prompt("How many stars would you rate Chip Cookies 1-5?");
//      }
//      alert("Thanks for rating!");  
// }

function getStars(){
    let answer = prompt('How many stars would you rate Chip Cookie? (1 -5)'); // 3
    let output = '';
    while(answer <= 1 || answer >= 6 ){
        if(answer < 1 ){
            alert("Please rate 1-5.")
        } else if(answer > 5){
            alert("Please rate 1-5.");
        } 
        answer = prompt("How many stars would you rate Chip Cookies 1-5?"); 
    }
    for(let x = 0; x < answer; x++){
        output = output + "<img class='star' src='https://www.nicepng.com/png/detail/168-1684303_orange-star-icon-diamond-icon-cute-star.png' />"
    }
    return document.write(output);
}