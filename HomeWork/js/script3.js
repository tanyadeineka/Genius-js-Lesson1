//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruits = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// let result = fruits.map((item) => item.name);
// console.log(result);

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// let result=[];
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) result.push(i);
// }
// console.log(result);

//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//     console.lpg( `цифра ${i}!` );
//   }

// let i = 0
// while (i < 5) {
//     i++;
//     console.log(`цифра ${i}!`);
//   }

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// while (true) {
//   let userInput = prompt(
//     "Будь ласка, введіть число більше за 100 (або натисніть Cancel для виходу):"
//   );
//   if (userInput === null || userInput === "") {
//     alert("Ви скасували введення. Завершення програми.");
//     break;
//   }
//   let number = parseFloat(userInput);
//   if (!isNaN(number) && number > 100) {
//     alert("Ви ввели число більше за 100. Завершення програми.");
//     break;
//   } else {
//     alert("Ви ввели число менше або дорівнює 100. Спробуйте ще раз.");
//   }
// }

//  -- 5 --
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// let ageArr = girls.map((girl) => girl.age);
// console.log(ageArr);
// let aveAge = ageArr.reduce((sum, age) => sum + age) / ageArr.length;
// console.log(aveAge);
