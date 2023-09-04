//TODO: № 1 ==============================================================

// Напиши скрипт, який для об'єкта user,

// Послідовно:

// 1. додати поле mood зі значенням 'happy'

// 2. замінити hobby на 'skydiving'

// 3. замінити значення premium на false

// 4. виводити зміст об'єкта user у форматі

// ключ:значення використовуючи Object.keys() і for...of

// const user = {

//   name: "John",

//   age: 20,

//   hobby: "tenis",

//   premium: true,

// };

// user.mood = 'happy';

// user.hobby = 'skydiving';

// user.premium = false;
// console.log(user);

// for (const key of Object.keys(user)) {
//   console.log(`${key}:${user[key]}`)
// };

//TODO: № 2 ==============================================================
//2. У нас есть объект, в котором храняться зарплаты
//нашей команды
//Напишите код для сумирования всех зарплат и
//сохраните его результат в переменной sum.
//Если объект salaries пуст, то результат должен быть 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// let sum = 0;
// for (const value of Object.values(salaries)) {
//   sum += value;
// }
// console.log(sum);

//TODO: № 3 ================================================================
// Потрібно написати функцію, яка приймає 2 параметри key та obj,
// яка буде перебирати об'єкт
// Якщо у об'єкта є такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію,
// потім вирішимо простим способом

// const obj = {
//   name: "Igor",
//   car: "Mercedes",
//   carColor: "black",
// };

// function foo(key, obj) {
//   //   return Object.keys(obj).includes(key); // 1 варіант
//   return key in obj; // 2 варіант
// }
// console.log(foo("car", obj));

//TODO: № 4 ==============================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(obj) {
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (typeof obj[key] === "number") {
//         obj[key] *= 2;
//       }
//     }
//   }
//   return obj;
// }

// console.log(multiplyNumeric(menu));

//TODO: № 5 ==============================================================
// Напиши функцію яка приймає массив чисел і повертає новий массив,
// унікальних чисел, які не півторюються

// const numbers = [1, 1, 1, 2, 3, 4, 7, 7, 6, 6, 5, 4, 23, 22, 22, 111, 1, 5];

// function unicNumbers(arr) {
//   const newArr = [];
//   for (const number of arr) {
//     // if (!arr.includes(number)) {
//     //   newArr.push(number);
//     // }
//     newArr[number] = number;
//   }
//   return Object.values(newArr);
// }

// console.log(unicNumbers(numbers));

//TODO № 6 з колбеком =====================================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// function letMeSeeYourName(callback) {
//     const name = prompt(`What is your name?`);
//     if (!name) {
//         alert('Please enter your name');
//         return;
//     }
//     return callback(name);
// }

// function greet(name) { //варіант 1
//     alert(`Привіт, ${name}`);
// }
//const  greet = name => alert(`Привіт, ${name}`); // варіант 2
// console.log(letMeSeeYourName(greet));

//TODO № 7 з колбеком ==============================================
//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

// function makeProduct(name, price, callback) {
//   const product = {
//     name,
//     price,
//     id: Math.random(),
//   };
//   //   return callback(product); //приходить объект с данными о продукте и возвращает его
//   return product;
// }

// console.log(makeProduct("Borsch", 80));

// function showProduct(product) {
//   return product;
// }

// console.log(makeProduct("Cake", 250, showProduct));
// console.log(makeProduct("Fish", 300, showProduct));

//TODO № 8 на замикання ✅ ==============================================

// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), яка памятає імя щефа піл час її виклику
// Функція  makeDish має логіровать рядок "<імя шефа> is cooking <dish>"

// function makeShef(shefName) {
//   return function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   };
// }

// const ivanCook = makeShef("Ivan");
// const svetaCook = makeShef("Sveta");

// ivanCook("Fish");
// ivanCook("Cake");
// svetaCook("Borsch");

//TODO: № 9 на замикання ✅ ==============================================
//Напишіть функцію makeCounter, яка повертає іншу
//функцію, яка рахує та логує кількість своїх викликів

function makeCounter() {
    let count = 0;
    
    function counter() {
        count+=1;
        console.log(`Функція була викликана ${count} разів`);
        return count;
    }
    
    return counter;
}
const counter = makeCounter();
console.log(counter());  
console.log(counter());  


//TODO: № 10 на замикання ✅ ==============================================
//Напишіть функцію savePassword(password), яка приймає
//пароль і повертає внутрішню функцію, що приймає
//рядок і повертає буль true, якщо рядок збігається зі збереженим
//паролем і false - якщо не збігається

// function savePassword(password) {
//     return function truePassword() {
//         const savePassword = "qwerty";
//         message = (password === savePassword) ? true : false;
//         console.log(message);
//     };
// }
// const variantOne = savePassword("qwerty");
// const variantTwo = savePassword("password");

// variantOne();
// variantTwo();