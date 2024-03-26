
 const prompt=require('prompt-sync')({sigint:true})
// Function to get user input and calculate grade
function getGrade(mark) {
    // Check if the mark is between 0 and 100
    if (mark <0 && mark > 100) {
        return'Invalid mark! Please enter a mark between 0 and 100.'
    }
    // Calculate the grade based on the mark
    else if (mark >79 && mark <=100) {// if marks are within ranges then output is A
        return 'A'
    } else if (mark>60 && mark<79){
        return 'B'
    } else if (mark>49 && mark<59) {
        return 'C'
    } else if (mark>39 && mark<49) {
        return'D'
    } else if (mark>=0 && mark<39){
        return 'E'// Return 'E' for marks between 0 and 39
    }
}

// Call the function to get the user input and calculate the grade


const marks = parseInt(prompt("enter your marks: "))
console.log(getGrade(marks))