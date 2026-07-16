//Игра № 1. Угадай число
function guessNum() {
    const num = Math.floor(Math.random() * 100);
    let guess;

    do {
        guess = +prompt('Угадай число от 1 до 100');

        if (num < guess) {
            alert('Загаданное число меньше');
        } else if (num > guess) {
            alert('Загаданное число больше');
        }
    } while (num !== guess);

    alert("Поздравляем! Вы угадали число!");
}

//Игра № 2. Простая арифметика
function simpleMath() {
    const a = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let correctAnswer;

    switch (operation) {
        case "+":
            correctAnswer = a + b;
            break;
        case "-":
            correctAnswer = a - b;
            break;
        case "*":
            correctAnswer = a * b;
            break;
        case "/":
            correctAnswer = a / b;
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