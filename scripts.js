const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;

	const playGame = () => {
		const vampireBtn = document.querySelector('.vampire');
		const werewolfBtn = document.querySelector('.werewolf');
		const skeletonBtn = document.querySelector('.skeleton');
		const playerOptions = [vampireBtn,werewolfBtn,skeletonBtn];
		const computerOptions = ['vampire','werewolf','skeleton']
		
		playerOptions.forEach(option => {
			option.addEventListener('click',function(){

				const movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Moves Left: ${5-moves}`;
				

				const choiceNumber = Math.floor(Math.random()*3);
				const computerChoice = computerOptions[choiceNumber];

				// check who wins
				winner(this.innerText,computerChoice)
				
				// Calling gameOver after 5 moves
				if(moves == 5){
					gameOver(playerOptions,movesLeft);
				}
			})
		})
		
	}

	// decide winner
	const winner = (player,computer) => {
		const result = document.querySelector('.result');
		const playerScoreBoard = document.querySelector('.p-count');
		const computerScoreBoard = document.querySelector('.c-count');
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		if(player === computer){
			result.textContent = 'Tie'
		}
		else if(player == 'vampire'){
			if(computer == 'skeleton'){
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;

			}else{
				result.textContent = 'Player Won'
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'werewolf'){
			if(computer == 'vampire'){
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Player Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'skeleton'){
			if(computer == 'werewolf'){
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Player Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
	}

	// when game is over
	const gameOver = (playerOptions,movesLeft) => {

		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

		playerOptions.forEach(option => {
			option.style.display = 'none';
		})

	
		chooseMove.innerText = 'Game Over!'
		movesLeft.style.display = 'none';

		if(playerScore > computerScore){
			result.style.fontSize = '1rem';
			result.innerText = 'You Won!'
			result.style.color = 'white';
		}
		else if(playerScore < computerScore){
			result.style.fontSize = '1rem';
			result.innerText = 'You Lost!';
			result.style.color = 'orange';
		}
		else{
			result.style.fontSize = '1rem';
			result.innerText = 'Tie';
			result.style.color = 'grey'
		}
		reloadBtn.innerText = 'Play Again';
		reloadBtn.style.display = 'flex'
		reloadBtn.addEventListener('click',() => {
			window.location.reload();
		})
	}

	playGame();
	
}

game();
