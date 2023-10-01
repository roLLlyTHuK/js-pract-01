//TODO: № 1 ==============================================
// Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)

// const button = document.querySelector("#alertButton");
// const input = document.querySelector("#alertInput");

// button.addEventListener("click", onClick);

// function onClick() {
//   console.log(input.value);
// }

//TODO: № 2 ==============================================
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

// const button = document.querySelector("#swapButton");
// const first_input = document.querySelector("#leftSwapInput");
// const second_input = document.querySelector("#rightSwapInput");

// button.addEventListener("click", onClick);

// function onClick() {
//     let swap = first_input.value;
//     first_input.value = second_input.value;
//     second_input.value = swap;
// }

//TODO: № 2.1 ==============================================
// При кліку на кнопку, текст параграфів змінюється на їх порядковий номер

// const paragraphList = document.querySelectorAll("p");
// const changeBtn = document.querySelector("button");

// function changeText() {
//   paragraphList.forEach((paragraph, index) => {
//     paragraph.textContent = index + 1;
//   });
// }

// changeBtn.addEventListener("click", changeText);

//TODO: № 3 ==============================================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.

// const button = document.querySelector("#passwordButton");
// const input = document.querySelector("#passwordInput");

// button.addEventListener("click", onClick);

// function onClick() {
//   if (input.type === "text") {
//     input.setAttribute("type", "password");
//     button.textContent = "Розкрити";
//   } else {
//     input.setAttribute("type", "text");
//     button.textContent = "Приховати";
//   }
// }

//TODO: № 4 ==============================================

// Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.

// const decreaseButton = document.querySelector("#decrease");
// const increaseButton = document.querySelector("#increase");
// const square = document.querySelector("#box");

// console.dir(square);

// decreaseButton.addEventListener("click", decreaseClick);

// function decreaseClick() {
//     const width = square.offsetWidth;
//     const height = square.offsetHeight;
//     square.style.width = `${width-10}px`;
//     square.style.height = `${height-10}px`;
// }

// increaseButton.addEventListener("click", increaseClick);

// function increaseClick() {
//     const width = square.offsetWidth;
//     const height = square.offsetHeight;
//     square.style.width = `${width+10}px`;
//     square.style.height = `${height+10}px`;
// }

// Другий варіант
// decreaseButton.addEventListener("click", onClick);
// increaseButton.addEventListener("click", onClick);

// function onClick(event) {
//     const width = square.offsetWidth;
//     const height = square.offsetHeight;
//     const currentButton = event.target.getAttribute("id");
//     // console.log(currentButton);

//     switch (currentButton) {
//         case 'decrease':
//             square.style.width = `${width - 10}px`;
//             square.style.height = `${height - 10}px`;
//             break;
//         case 'increase':
//             square.style.width = `${width + 10}px`;
//             square.style.height = `${height + 10}px`;
//             break;
//     }
// }

//TODO: № 5 ==============================================
// Додайде слухач кліку і визначте, коли клік відбувається
// всередині елемента з id "place" і коли клік припадає поза зоною елемента
// https://developer.mozilla.org/en-US/docs/Web/API/Node/contains

// const place = document.querySelector("#place");

// window.addEventListener("click", (e) => {
//   const isClick = place.contains(e.target);
//   if (isClick) {
//     console.log("Click is in id place");
//     return;
//   }
//   console.log("Click is outside id place");
// });

//TODO: № 6 ==============================================
// Натиснувши кнопку "Подвоювати", збільшити значення
// у кожному елементі списку у 2 рази

// const button = document.querySelector("#double");
// const list = document.querySelector(".list").children;
// console.dir(list);

// button.addEventListener("click", onClickDouble);

// function onClickDouble() {
//   [...list].map((item) => (item.textContent *= 2));
// }

//TODO: № 6.1 ==============================================
// Вводимо число у input з id="test" - число
// При кліку на кнопку, у інпут з id="result" повинен буди квадрат цього числа
// Зробити перевірку на число, реалізувати за допомогою alert з текстом

// const button = document.querySelector("button");
// const inputTest = document.querySelector("#test");
// const inputResult = document.querySelector("#result");

// button.addEventListener("click", onclick);

// function onclick() {
//     if (isNaN(inputTest.value)) {
//         return alert("Введіть number");
//     }

//     inputResult.value = inputTest.value ** 2;
// }

//TODO: № 7.1 ==============================================
// Напишіть інтерфейс, щоб створити список
// Для кожного пункту:
// Запитуйте вміст у користувача за допомогою promt
// створювати пункт та додавати його до списку
// процес припиняється коли користувач натискає ESC
// усі елементи мають створюватись динамічно

/*
Завдання 7.2
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

// Завдання 15
// Взяти попереднє завдання з Зоопарком та вивести звірів, їх тип та особливості в DOM.
// Додати до списку клас animalList.На елемент списку animalElement