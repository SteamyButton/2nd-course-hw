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