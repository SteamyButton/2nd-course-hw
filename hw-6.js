//Задание 1
const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);
    if (numbs[i] === 10) {
        break;
    }
}

//Задание 2
const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] === 4) {
        console.log(i);
        break;
    }
}

//Задание 3
const numbs = [1, 3, 5, 10, 20];

console.log(numbs.join(' '));

//Задание 4
const arr = [];

for (let i = 0; i < 3; i++) {
    const arr2 = [];

    for (let i = 0; i < 3; i++) {
        arr2.push('1');
    }

    arr.push(arr2);
}

console.log(arr);

//Задание 5
const numbs = [1, 1, 1];

numbs.push(2, 2, 2);

console.log(numbs);

//Задание 6
const arr = [9, 8, 7, 'a', 6, 5];

arr.sort();

const numbs = arr.filter(item => typeof item === 'number');

console.log(numbs);

//Задание 7
const numbs = [9, 8, 7, 6, 5];
const answer = +prompt('Угадай число');

if (numbs.includes(answer)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

//Задание 8
let letters = 'abcdef';
letters = letters.split('');
letters.reverse();
letters = letters.join('');
console.log(letters);

//Задание 9
const arr = [[1, 2, 3], [4, 5, 6]];
const result = [];

arr.forEach(item => {
    result.push(...item);
});

console.log(result);

//Задание 10
const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbs.length; i++) {
    if (numbs[i + 1]) {
        console.log(numbs[i] + numbs[i + 1]);
    }    
}

//Задание 11
function square(numbs) {
    return numbs.map(item => item ** 2);
}

console.log(square([1, 2, 3, 4, 5, 6, 7]));

//Задание 12
function getLength(words) {
    return words.map(item => item.length);
}

console.log(getLength(['кот', 'собака', 'слон']));

//Задание 13
function negatives(numbs) {
    return numbs.filter(item => item < 0);
}

console.log(negatives([9, -8, 7, -1, 6, -5]));

//Задание 14
const numbs = [];

for (let i = 0; i < 10; i++) {
    numbs.push(Math.floor(Math.random() * 10));    
}

const evens = numbs.filter(item => item % 2 === 0);

console.log(numbs);
console.log(evens);

//Задание 15
const numbs = [];

for (let i = 0; i < 6; i++) {
    numbs.push(Math.floor(Math.random() * 10));    
}

const sum = numbs.reduce((acc, item) => acc + item, 0) / numbs.length;

console.log(sum);