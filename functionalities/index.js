const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const playGame = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const generateComputerChoice = () => {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    };

    const determineWinner = (playerChoice, computerChoice) => {
        if (playerChoice === computerChoice) {
            return "A Tie";
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'scissors' && computerChoice === 'paper') ||
            (playerChoice === 'paper' && computerChoice === 'rock')
        ) {
            playerScore++;
            return "You Win";
        } else {
            computerScore++;
            return "Computer Wins";
        }
    };

    const playRound = (playerChoice) => {
        const computerChoice = generateComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        console.log(`You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`);
        moves++;

        if (moves === 3) {
            console.log(`Game over! Final score: Player ${playerScore} - Computer ${computerScore}`);
            moves = 0;
            playerScore = 0;
            computerScore = 0;
            rl.close();
        } else {
            rl.question('Enter your choice (rock, paper, scissors): ', (answer) => {
                playRound(answer.toLowerCase());
            });
        }
    };

    rl.question('Enter your choice (rock, paper, scissors): ', (answer) => {
        playRound(answer.toLowerCase());
    });
};

playGame();
