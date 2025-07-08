function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const emojis = {
        rock: '🪨',
        paper: '📄',
        scissors: '✂️'
    };

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('player-choice').textContent = emojis[playerChoice];
    document.getElementById('computer-choice').textContent = emojis[computerChoice];

    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a draw!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win! 🎉";
    } else {
        result = "You lose! 😢";
    }

    document.getElementById('result').textContent = result;
}
