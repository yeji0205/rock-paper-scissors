
			let score = JSON.parse(localStorage.getItem('score')) || { wins:0, losses: 0, ties: 0};

			// // showing result
			document.querySelector('.js-result').innerHTML = '---';
			// // showing the move from user & computer
			// document.querySelector('.js-move').innerHTML = `You ? --- ? Computer`;
			// showing scores
			updateScore();

			function getComputerMove()
			{
				const randomNum = Math.floor(Math.random() * 3);
				let computerMove = '';

				if (randomNum === 0) computerMove = 'Rock'
				else if (randomNum === 1) computerMove = 'Paper'
				else if (randomNum === 2) computerMove = 'Scissors';

				return computerMove;
			}

			// input will be computerMove and userMove(given)
			// and compare each other
			function getResult(userMove)
			{
				const computerMove = getComputerMove();
				let result = '';

				if (computerMove === userMove) result = 'Tie.';
				if (userMove === 'Rock')
				{
					if (computerMove === 'Paper') result = 'You lost..';
					else if (computerMove === 'Scissors') result = 'You won!';
				}
				else if (userMove === 'Paper')
				{
					if (computerMove === 'Rock') result = 'You won!';
					else if (computerMove === 'Scissors') result = 'You lost..';
				}
				else if (userMove === 'Scissors')
				{
					if (computerMove === 'Rock') result = 'You lost..';
					else if (computerMove === 'Paper') result = 'You won!';
				}

				if (result === 'You won!') score.wins += 1;
				else if (result === 'You lost..') score.losses += 1;
				else if (result === 'Tie.') score.ties += 1;

				// localStorage는 스트링만 저장가능하니까, 숫자는 JSON.stringify를 이용해서 스트링으로 변경해준다.
				localStorage.setItem('score', JSON.stringify(score));

				// showing the scores
				updateScore();

				// showing result
				document.querySelector('.js-result').innerHTML = result;
				// showing the move from user & computer
				document.querySelector('.js-move').innerHTML =
					`YOU <img src="/img/${userMove}-emoji.png" class="move-icon">
					<img src="/img/${computerMove}-emoji.png" class="move-icon">
					COMPUTER`;
			}

			function resetScore()
			{
				localStorage.removeItem('score');
				score = {
					wins: 0,
					losses: 0,
					ties: 0
				}
				updateScore();
				document.querySelector('.js-result').innerHTML = '---';
				document.querySelector('.js-move').innerHTML = `YOU <img src="/img/Rock-emoji.png" class="move-icon">
					<img src="/img/Scissors-emoji.png" class="move-icon">
					COMPUTER`;
			}

			function updateScore()
			{
				let textElement = document.querySelector('.js-score');
				textElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
			}