let randomNo = 0;
let attempts = 0;

function generateRandomNo() {
    randomNo = Math.floor(Math.random() * 100) + 1;
    document.getElementById('result').style.display = 'none';
    document.getElementById('guessForm').style.display = 'block';
    document.getElementById('guess').value = '';
}

function verifyGuess() {
    let guess = document.getElementById('guess').value;
    attempts++;
    if (guess == randomNo) {
        document.getElementById('result').style.display = 'block';
        document.getElementById('result').style.backgroundColor = 'green';
        document.getElementById('result').innerHTML = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
        document.getElementById('guessForm').style.display = 'none';
    } else if (guess > randomNo) {
        document.getElementById('result').style.display = 'block';
        document.getElementById('result').style.backgroundColor = 'red';
        document.getElementById('result').innerHTML = `You guessed too high. Try again!`;
    } else {
        document.getElementById('result').style.display = 'block';
        document.getElementById('result').style.backgroundColor = 'red';
        document.getElementById('result').innerHTML = `You guessed too low. Try again!`;
    }
}

function resetGame() {
    attempts = 0;
    generateRandomNo();
}