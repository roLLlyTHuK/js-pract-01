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
