//Игра № 1. Угадай число
function guessNum() {
    const num = Math.floor(Math.random() * 100) + 1;
    let guess;

    do {
        const input = prompt('Угадай число от 1 до 100');

        if (input === null) {
            return;
        }

        guess = +input

        if (isNaN(guess)) {
            alert('Введите число!');
        } else if (num < guess) {
            alert('Загаданное число меньше');
        } else if (num > guess) {
            alert('Загаданное число больше');
        }

    } while (num !== guess);

    alert("Поздравляем! Вы угадали число!");
}

//Игра № 2. Простая арифметика
function simpleMath() {
    let a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let correctAnswer;

    switch (operation) {
        case '+':
            correctAnswer = a + b;
            break;

        case '-':
            correctAnswer = a - b;
            break;

        case '*':
            correctAnswer = a * b;
            break;

        case '/':
            const result = Math.floor(Math.random() * 9) + 1;
            a = result * b;
            correctAnswer = result;
            break;
    }
    
    const answer = +prompt(`${a} ${operation} ${b}`);

    if (answer === correctAnswer) {
        alert('Верно!');
    } else {
        alert(`Неверно! Правильный ответ: ${correctAnswer}`);
    }
}

//Игра № 3. Переверни текст
function reverseText() {
    let inputText = String(prompt('Введите текст'));
    let textInReverse = inputText.split('').reverse().join('');

    alert(`${textInReverse}`);
}

//Игра № 4. Камень, ножницы, бумага
const shootComp = ['камень', 'ножницы', 'бумага'];

function shootGame() {
    const computerChoice = shootComp[Math.floor(Math.random() * shootComp.length)];
    const userChoice = prompt('Введите: камень, ножницы или бумага').toLowerCase();
    const messageWin = `Компьютер выбрал ${computerChoice}. Ты победил`;
    const messageLose = `Компьютер выбрал ${computerChoice}. Ты проиграл`;
    console.log("Компьютер:", computerChoice);

    if (computerChoice === userChoice) {
        alert('Ничья');
        return;
    }

    switch (userChoice) {
        case 'камень':
            if (computerChoice === 'ножницы') {
                alert(messageWin);
            } else {
                alert(messageLose);
            }
            break;

        case 'ножницы':
            if (computerChoice === 'бумага') {
                alert(messageWin);
            } else {
                alert(messageLose);
            }
            break;

        case 'бумага':
            if (computerChoice === 'камень') {
                alert(messageWin);
            } else {
                alert(messageLose);
            }
            break;

        default:
            alert('Нужно ввести: камень, ножницы или бумага');
    }
}

//Игра № 5. Простая викторина 
const quiz = [
    {
        question: "Какой цвет неба?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },

    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },

    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function startQuiz() {
    let score = 0;

    quiz.forEach(item => {
        const userAnswer = Number(prompt(`${item.question}\n${item.options.join("\n")}`));

        if (userAnswer === item.correctAnswer) {
            score++;
        }
    });

    alert(`Правильных ответов: ${score}`);
}

//Скролл при нажатии на кнопку "Поехали!"
function scrollToAbout() {
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth'
    });
}