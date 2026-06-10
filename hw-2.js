let a = 10;
alert(a);
a = 20;
alert(a);

let year = 2007;
alert(`Год создания iPhone - ${year}`);

let name = 'Брендан';
alert(`Имя создателя JavaScript - ${name}`);

let a = 10, b = 2;
alert(`Если a = ${a}, b = ${b}, то: сумма - ${a + b}, разница - ${a - b}, произведение - ${a * b}, частное - ${a / b}`);

let a = 2;
alert(`a^5 = ${a**5}`);

let a = 9, b = 2;
alert(`Остаток при делении a на b - ${a % b}`);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = Number(prompt('Сколько вам лет?'));
alert(`Вам ${age} лет`);

const user = {
    name: 'Саня',
    age: 30,
    isAdmin: false
}

let name = String(prompt('Как тебя зовут?'));
alert(`Привет, ${name}!`);