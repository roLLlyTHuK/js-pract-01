//TODO: № 1 на if...else ===============================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// let a = 15;

// // if (a === 10) {
// //     console.log('Вірно');
// // } else {
// //     console.log("Невірно");
// // }

// a === 10 ? console.log("Вірно") : console.log("Невірно");

let min = 57;

if(min >0 && min <= 15) {
    console.log("1 четверть");
} else if(min <= 30) {
    console.log("2 четверть");
} else if( min <= 45) {
    console.log("3 четверть");
} else if (min > 45 && min <= 59){
    console.log("4 четверть");
} else {
    console.log("Введите корректное значение");
}
