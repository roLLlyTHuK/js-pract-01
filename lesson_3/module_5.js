//TODO: № 1 ==============================================
//Виправте помилки, щоб код працював

// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();

//TODO: № 2 ==============================================
// Яким буде результат виклику функції?

// function f() {
//   console.log(this.name);
// }
// const foo = f.bind({ name: "Іван" }).bind({ name: "Juan" });
// foo();

//TODO: № 3 ==============================================
//Виправте помилки, щоб код працював

// function callAction(action) {
//   action();
// }

// const item = {
//   getQuatity() {
//     console.log(this.quantity);
//   },
//   quantity: 5,
// };

// callAction(item.getQuatity.bind(item));

//TODO: № 4 ==============================================

// Функція askPassword приймає 2 колбека і викливає 1 іх них в задежності від пароля

// function askPassword(ok, fail) {
//   let password = prompt("Password? 🤔");
//   if (password === "admin") ok();
//   else fail();
// }

// const user = {
//   name: "aaa",

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// Створити обект user з властивістю name і двома методами
// loginOk() i loginFail()
// ці методи виводять в консоль повідомлення у форматі
// "<name> logged in" i "<name> failed to log in" відповідно
// зроби виклик функції askPassword, привязавши в якості аргуметів методи обекта


//TODO: № 5 на class-и  =============================================
//Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`


// class User {
//     constructor({ userName, age, numbersOfPost }) {
//         this.userName = userName;
//         this.age = age;
//         this.numbersOfPost = numbersOfPost;
//     }

//     getInfo() {
//         return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`
//     }

// } 

// const user1 = new User({ userName: "Olga", age: 22, numbersOfPost: 105 });
// console.log(user1);
// console.log(user1.getInfo());

// TODO: № 7 на class-и =============================================
// Напиши клас Notes який управляє колекцією нотаток у
// властивості items.
// Нотатка - це об'єкт із властивостями text і priority.
// Додай класу статичний властивість Priopity,
// який буде зберігати об'єкт із пріоритетами ("high" i "low").
// Додай методи addNote(note), removeNote(noteName)
// updatePriority(text, newPriority)

// class Notes {
//   static Priority ={
//    high : "high",
//    low : "low",
//   }

//   constructor () {
//     this.items = [];
//   }
//   showNotes(){
//     console.log(this.items)
//   }
//   addNote(note){
//     this.items.push(note)
//   }
//   removeNote(noteName){
//     const indexItem =this.items.findIndex(item=> item.text === noteName)
//     if (indexItem !== -1){
//      return this.items.splice(indexItem,1)}
//     }
  
//   updatePriority(text, newPriority){
//    const indexItem =this.items.findIndex(item=> item.text === text)
//    if (indexItem !== -1){
//     this.items[indexItem].priority = newPriority;
//    }
//   }
// }
// const notes =new Notes();
// notes.addNote({text:"Завдання", priority: Notes.Priority.high});
// notes.addNote({text:"Завдання2", priority:Notes.Priority.low});
// notes.addNote({text:"Завдання3", priority: Notes.Priority.high});
// notes.showNotes();
// notes.removeNote("Завдання");
// notes.showNotes();
// notes.updatePriority("Завдання2", Notes.Priority.high);
// notes.showNotes();

//TODO: на class ======================
//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.

//TODO: № 6 на class-и =============================================
//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер
// get clientData() має повертати оюект з переліченими властивостями
// set changeEmail(newEmail) який перезаписує почту користувача