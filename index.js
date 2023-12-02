"use strict";
// Exercise 5:  Write a program that determines if a person is eligible to vote based on their age.
function eligibleToVote(num) {
    if (num >= 18) {
        return 'eligible to vote';
    }
    else {
        return 'not eligible to vote';
    }
}
//Test the function 
let age = 11;
let result = eligibleToVote(age);
console.log(`The person is ${result}`);
