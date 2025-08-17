
function gameButton() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
   
while (true) {
    let guess = prompt('Угадай число от 1 до 100');
    guess = Number(guess);
if(guess === randomNumber) {
alert('Молодец! Поздравляю ты угадал число');
break;
}
else if(guess < randomNumber ){
    alert('Больше! Попробуешь еще раз?');
    
}    
else {
    alert('Меньше! Попробуешь еще раз?');
    
}
}

}


