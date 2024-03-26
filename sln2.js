const prompt=require('prompt-sync')({sigint:true})
// Function to get the car's speed and calculate the number of demerit points
function getDemeritPoints(speed) {
    if (speed <=70) {
     return 'ok'
    } else{
        const demeritPoints=(speed-70)/5;
        if(demeritPoints>12){
            return "License suspended"
        } else{
            return `points: ${demeritPoints}`
        }
    }
}

const speed = parseInt(prompt("enter the speed; "))
console.log(getDemeritPoints(speed))
