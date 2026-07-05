//Задание 1
const min = (a, b) => (a < b) ? a : b;

console.log(min(8, 4));
console.log(min(6, 6));

//Задание 2
const isOdd = (n) => (n % 2 === 0) ? 'Число четное' : 'Число нечетное';

console.log(isOdd(5));
console.log(isOdd(6));

//Задание 3
function square(num) {
    console.log(num ** 2);
}

square(5);

const up = (n) => n ** 2;

console.log(up(4));

//Задание 4
function userAge() {
    let userAge = +prompt('Сколько вам лет?');

    if (userAge < 0) {
        return 'Вы ввели неправильное значение';
    } else if (userAge >= 0 && userAge <= 12) {
        return 'Привет, друг!';
    } else if (userAge > 13) {
        return 'Добро пожаловать!';
    } else {
        return 'Вы ввели неправильное значение';
    }
}

alert(userAge());

//Задание 5
function calc(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}

console.log(calc(4, 8));
console.log(calc('hi', 8));

//Задание 6
function userNum() {
    let userNum = prompt('Введите число');

    if (isNaN(userNum)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${userNum} в кубе равняется ${userNum ** 3}`;
    }
}

console.log(userNum());

//Задание 7
function getArea() {
    return Math.PI * this.radius ** 2;
}

function getPerimeter() {
    return Math.PI * this.radius * 2;
}

const circle1 = {
    radius: 3,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}

const circle2 = {
    radius: 5,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}

console.log(circle1.methodGetArea());
console.log(circle1.methodGetPerimeter());
console.log(circle2.methodGetArea());
console.log(circle2.methodGetPerimeter());