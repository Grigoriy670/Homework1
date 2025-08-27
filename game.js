
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


function simpleArithmetic() {
    const operations = ['+', '-', '/', '*'];
    let operation = operations[Math.floor(Math.random() * operations.length)];
    let a, b, result;
    let userAnswer;

    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;

    switch (operation) {
        case '+':
            userAnswer = prompt(`Сложите ${a} и ${b}`);
            result = a + b;
            break;

        case '-':
            userAnswer = prompt(`Вычтите ${a} и ${b}`);
            result = a - b;
            break;

        case '*':
            userAnswer = prompt(`Умножьте ${a} и ${b}`);
            result = a * b;
            break;

        case '/':
            userAnswer = prompt(`Разделите ${a} и ${b}`);
            result = a / b;
            break;
    }

    
    if (userAnswer === null) {
        alert('Игра прервана');
        return;
    }

   
    userAnswer = +userAnswer;

    if (userAnswer === result) {
        alert('Это верный ответ');
    } else {
        alert(`Не верно! Правильный ответ ${result}`);
    }
}

function reverseString() {
    let text = prompt('Введите ваш текст');
    alert(text === null ? 'Вы отменили ввод' : text.split('').reverse().join(''));
}


const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["Красный", "Синий", "Зеленый"],
        correctAnswer: 2,
        explanation: "Синий - потому что рассеяние Рэлея делает небо синим!"
    },
    {
        question: "Сколько дней в неделе?",
        options: ["Шесть", "Семь", "Восемь"],
        correctAnswer: 2,
        explanation: "7 дней - эта система идет из Древнего Вавилона!"
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["Четыре", "Пять", "Шесть"],
        correctAnswer: 2,
        explanation: "5 пальцев - большой, указательный, средний, безымянный, мизинец!"
    }
];



function startQuiz() {
    let score = 0;

    for(let i = 0; i < quiz.length; i++) {
        const question = quiz[i];

       
        let optionsText = '';
        for(let j = 0; j < question.options.length; j++) {
            optionsText += `${j + 1}. ${question.options[j]}\n`;
        }

        
        const answer = prompt(
            `Вопрос ${i + 1}/${quiz.length}:\n${question.question}\n\n${optionsText}\nВведите номер ответа:`
        );

        if (answer === null) {
            alert('Викторина прервана');
            return;
        }

        const userAnswer = parseInt(answer);

        
        if (userAnswer === question.correctAnswer) {
            score++;
            alert('✅ Правильно!');
        } else {
             alert(`❌ Неправильно! Правильный ответ: ${question.correctAnswer}`)
        }
    }

        alert(`🎉 Викторина завершена!\nПравильных ответов: ${score} из ${quiz.length}`);
    }

const choices = ['Камень', 'Ножницы', 'Бумага'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex].toLowerCase(); 
}

function getUserChoice() {
    const answer = prompt('Выберите: Камень, Ножницы или Бумага');
    if (answer === null) {
        return null;
    }
    return answer.toLowerCase();
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    }

    const winConditions = {
        'камень': 'ножницы',
        'ножницы': 'бумага', 
        'бумага': 'камень'
    };

    if (winConditions[userChoice] === computerChoice) {
        return 'user';
    } else {
        return 'computer';
    }
}

function rockPaperScissors() {
    const userChoice = getUserChoice();
    
    
    if (userChoice === null) {
        alert('Игра отменена');
        return;
    }
    
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    if (result === 'draw') {
        alert(`Ничья! Оба выбрали ${userChoice}`);
    } else if (result === 'user') {
        alert(`Вы выиграли! ${userChoice} побеждает ${computerChoice}`);
    } else {
        alert(`Компьютер выиграл! ${computerChoice} побеждает ${userChoice}`);
    }
}