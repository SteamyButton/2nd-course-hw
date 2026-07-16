//Задание 1
const text = 'js';
const upperCase = text.toUpperCase();

console.log(upperCase);

//Задание 2
const words = ['Молоко', 'машина', 'Море', 'Дом', 'Мандарин', 'книга', 'Мышь'];
const prefix = 'М';

function findWords(words, prefix) {
    return words.filter(word => word.toLowerCase().startsWith(prefix.toLowerCase()));    
}

console.log(findWords(words, prefix));

//Задание 3
const num = 32.58884;

console.log(Math.floor(num), Math.ceil(num), Math.round(num));

//Задание 4
const nums = [52, 53, 49, 77, 21, 32];

console.log(Math.min(...nums), Math.max(...nums));

//Задание 5
function getRandom() {
    return Math.floor(Math.random() * 10 + 1);
}

console.log(getRandom());

//Задание 6
function randomArray(num) {
    const arr = [];

    for (let i = 0; i < Math.floor(num / 2); i++) {
        arr.push(Math.floor(Math.random() * (num + 1)));
    }

    return arr;
}

console.log(randomArray(15));

//Задание 7
function randomBetween(min, max) {
    if (max < min) {
        [min, max] = [max, min];
    }
    
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomBetween(50, 15));

//Задание 8
let currentDate = new Date();
console.log(currentDate);

//Задание 9
const currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

//Задание 10
const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

const myDate = new Date();

function userDate(date) {
    return `Дата: ${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} года — это ${days[myDate.getDay()]}\nВремя: ${myDate.getHours().toString().padStart(2, '0')}:${myDate.getMinutes().toString().padStart(2, '0')}:${myDate.getSeconds().toString().padStart(2, '0')}`;    
}

console.log(userDate(myDate));