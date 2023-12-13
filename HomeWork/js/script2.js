// 1 // Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// let value;
// value = 1;
// value = 0;
// value = -3;

// if (value > 0) {
//   console.log(true);
// } else console.log(false);

// value > 0 ? console.log(true) : console.log(false);

// 2 // Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// let value;
// value = "test";
// value = "qwerty";
// value = true;
// value === "test" ? console.log(true) : console.log(false);

// 3 // Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let result;
// result = 1;
// result = 10;
// result = 13;
// if (result > 10) {
//     result -= 5;
// } else if (result < 10) {
//     result += 5;
// }
// console.log(result);

// 4 //Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const num = prompt("Введіть число від 1 до 12");
// let month;
// switch (num) {
//   case "1":
//     month = "Січень";
//     alert(`Під номером ${num} місяць: ${month}`);
//     break;
//   case "2":
//     month = "Лютий";
//     alert(`Під номером ${num} місяць: ${month}`);
//     break;
//   case "3":
//     month = "Березень";
//     alert(`Під номером ${num} місяць: ${month}`);
//     break;
//   case "4":
//     month = "Квітень";
//     alert(`Під номером ${num} місяць: ${month}`);
//     break;
//   case "5":
//     month = "Травень";
//     alert(`Під номером ${num} місяць: ${month}`);
//     break;
//   case "6":
//     month = "Червень";
//     alert(`Під номером ${num} місяць: ${month}`);
//     break;
//   case "7":
//     month = "Липень";
//     alert(`Під номером ${num} місяць: ${month}`);
//     break;
//   case "8":
//     month = "Серпень";
//     alert(`Під номером ${num} місяць: ${month}`);
//     break;
//   case "9":
//     month = "Вересень";
//     alert(`Під номером ${num} місяць: ${month}`);
//     break;
//   case "10":
//     month = "Жовтень";
//     alert(`Під номером ${num} місяць: ${month}`);
//     break;
//   case "11":
//     month = "Листопад";
//     alert(`Під номером ${num} місяць: ${month}`);
//     break;
//   case "12":
//     month = "Грудень";
//     alert(`Під номером ${num} місяць: ${month}`);
//     break;
//   default:
//     alert(`Невірно введене число`);
// }

// 5 //Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const inputNum = prompt('Введіть тризначне число');
// let num = parseInt(inputNum);
// let digit1 = Math.floor(num / 100);
// let digit2 = Math.floor((num % 100) / 10);
// let digit3 = num % 10;
// let sum = digit1 + digit2 + digit3;
// alert(`Сума цифр у введеному тризначному числі: ${sum}`);