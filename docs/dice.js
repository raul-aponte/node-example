// eslint-disable-next-line no-unused-vars
function rollDice() {
    const diceImage = document.getElementById('diceImage');
    const resultText = document.getElementById('result');
    
    // Show rolling animation
    diceImage.src = 'dice-rolling.svg';
    resultText.textContent = 'Lanzando...';
    
    // After 1 second, show the result
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        diceImage.src = `dice-${randomNumber}.svg`;
        resultText.textContent = `Tiraste: ${randomNumber}`;
    }, 1000);
}
