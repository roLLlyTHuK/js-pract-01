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