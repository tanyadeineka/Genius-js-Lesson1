// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:
// -- read() запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта.
// -- sum() повертає суму цих властивостей.
// -- mul() повертає результат множення даних властивостей.

// class Calculator {
//     constructor() {
//         this.number1 = 0;
//         this.number2 = 0;
//     }
//     read() {
//         this.number1 = +prompt('Введіть перше число:', 0);
//         this.number2 = +prompt("Введіть друге число:", 0);
//     }
//     sum() {
//         return this.number1 + this.number2;
//     }
//     mul() {
//         return this.number1 * this.number2;
//     }
// }
// const calc = new Calculator();
// calc.read();
// console.log("sum=", calc.sum());
// console.log("mul=", calc.mul());