const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let arr = ['rock', 'paper', 'scissor'];
let randomIndex = Math.floor(Math.random() * arr.length);
let random = arr[randomIndex];


function getUserInput(){
    rl.question('Enter rock, paper, or scissor: ', (user) =>{
        evaluateResult(user);
        rl.close();
    });

}

function evaluateResult(user) {
if (random === 'rock' && user === 'paper'){
    console.log('You won');
}else if (random === 'paper' && user === 'scissor'){
    console.log('You won');
}else if(random === 'scissor' && user === 'rock'){
    console.log('You won');
}else if(random === user){
    console.log('Game tied');
}else {
    console.log('You lose');
}
console.log('computer chooses:' + random)
}
getUserInput();