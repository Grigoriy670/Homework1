
function guessNumberGameButton() {
    const maxNumber = 100;
    const randomNumber = Math.floor(Math.random() * maxNumber) + 1; 
    let attempts = 0;
    
    while (true) {
        let guess = prompt(`Угадай число от 1 до ${maxNumber} (введите "отмена" для выхода)`);
        
        
        if (guess === null || guess.toLowerCase() === 'отмена') {
            alert('Игра отменена');
            return;
        }
        
       
        guess = Number(guess);
        if (isNaN(guess) || guess < 1 || guess > maxNumber) {
            alert('Пожалуйста, введите число от 1 до 100!');
            continue; 
        }
        
        attempts++;
        
        if (guess === randomNumber) {
            alert(`🎉 Поздравляю! Ты угадал число ${randomNumber} за ${attempts} попыток!`);
            return; 
        } else if (guess > randomNumber) {
            alert('⬇ Меньше! Попробуй ещё раз.');
        } else {
            alert('⬆ Больше! Попробуй ещё раз.');
        }
    }
}