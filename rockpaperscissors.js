
var compWin = 0
var userWin = 0
for(i = 0; i < 5; i++) {


var userChoice = prompt("Do you choose rock, paper or scissors?");

var compChoice = Math.random();

if (compChoice < 0.3) {
	compChoice = 'rock';
} else if (compChoice > 0.3 && compChoice < 0.6) {
	compChoice = 'paper';
} else {
	compChoice = 'scissors';
};


var compare = function(choice1, choice2) {
	if(choice1 === 'It is a tie') {
	} else if(choice1 === 'rock') {
		if(choice2 === 'scissors') {
			userWin += 1;
			return 'You win!';
		} else {
			compWin += 1;
			return 'Computer wins';
		}
	} else if(choice1 === 'paper') {
		if(choice2 === 'rock') {
			userWin += 1;
			return 'You win!';
		} else {
			compWin += 1;
			return 'Computer wins';
		}
	} else if(choice1 === 'scissors') {
		if(choice2 === 'rock') {
			userWin += 1;
			return 'You win!';
		} else {
			compWin += 1;
			return 'Computer wins';
		}
	}
};

console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + compChoice);
console.log(compare(userChoice, compChoice));
}

console.log('The computer won ' + compWin + ' rounds, and you won ' + userWin + ' rounds.')
