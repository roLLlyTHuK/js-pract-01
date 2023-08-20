//TODO: № 1 на if...else ===============================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// let a = 15;

// if (a === 10) {
//     console.log('Вірно');
// } else {
//     console.log("Невірно");
// }

// a === 10 ? console.log("Вірно") : console.log("Невірно");

// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

// const min = 65;

// if (min >= 0 && min <= 15) {
//     console.log("Перша чверть");

// }
// else if (min >= 16 && min <= 30) {
//     console.log("Друга чверть");
// }
// else if (min >= 31 && min <= 45) {
//     console.log("Третя чверть");
// }
// else if (min >= 46 && min < 60) {
//     console.log("Четверта чверть")
// }

// else {
//     console.log("Такого значення не існує");
// }

//TODO: № 4 на switch ===========================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// let num = 8;
// let result;
// switch (num) {
//     case 1:
//         result = "зима";
//         break;
//     case 2:
//         result = "весна";
//         break;
//     case 3:
//         result = "літо";
//         break;
//     case 4:
//         result = "осінь";
//         break;
//     default:
//         result = "Введіть корректне значення";
//         break;
// }
// console.log(result);

// TODO: № 5 на for =====================================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const max = 10;
// const min = 1;
// let sum = 0;

// for (let i = max; i >= min; i -= 1) {
//   //   console.log(i);
//   if (i % 2 === 0) {
//     sum += i;
//     console.log(i);
//   }
// }
// console.log(sum);


//TODO: № 6  for...of ============================================================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 1, 7, 80, 3];
// const number = 3;

// function findSmallerNumber(array) {
//   if (!Array.isArray(array)) {
//   return "Введене значення не є масив"
// }

//   let min = array[0];

//   for (const number of array) {
//     if (min > number)
//       min = number;
// }
//   return min;
// }

// console.log(findSmallerNumber(numbers));
// console.log(findSmallerNumber(number));


//TODO: ==========================
// Напишіть if..else, що відповідає наступному switch:
// const browser = "Opera"
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

const browser = "fsfa"
if (browser === 'Edge') {
  alert( "You've got the Edge!" );
}
else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser ===  'Opera') {
  alert( 'Okay we support these browsers too' );
}
else {
  alert( 'We hope that this page looks ok!' );
}