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