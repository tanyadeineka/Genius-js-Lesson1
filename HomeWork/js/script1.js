// *** Завдання 8.1
// const var0 = [];
// const var1 = null;
// let var2;
// const var3 = {};
// const var4 = 3 + 4;
// const var5 = !false;
// const var6 = function () {};
// const var7 = Symbol("itemId");
// console.log(typeof var0);
// console.log(typeof var1);
// console.log(typeof var2);
// console.log(typeof var3);
// console.log(typeof var4);
// console.log(typeof var5);
// console.log(typeof var6);
// console.log(typeof var7);

// *** Завдання 8.2
// const func = (number) => {
//   let result;
//   return result = (number % 2 === 0) ? true : false;
// };
// console.log(func(8));
// console.log(func(3));

// *** Завдання 8.3
// const varA = 27;
// const varB = 42;
// const sumTotal = varA + varB;
// console.log(sumTotal);
// const isVarAGreater = varA > varB;
// console.log(isVarAGreater);
// const centModulo = (varA * 100) % varB;
// console.log(centModulo);
// const dualCondition = (isVarAGreater >= 24 && centModulo >= 24) ? true : false;
// console.log(dualCondition);
// const concatToString = String(varA) + String(varB);
// console.log(concatToString);

// *** Завдання 8.4
// const ageCondition = (age) => {
//   let result;
//     result = age < 18 ? "Вхід заборонений" : "Вхід дозволений";
//   return result;
// };
// console.log(ageCondition(16));

// *** Завдання 8.5
// function conditionFunc(firstParam, secondParam) {
//     let result = null;
//     if (firstParam === 'JavaScript' && (secondParam >= 7 && secondParam < 16)) {
//         result = "Prometheus";
//     } else if (firstParam !== 'JavaScript' && secondParam === 10) {
//         result = 42;
//     } else if (firstParam === 'JavaScript' && secondParam >= 16) {
//         result = "Developer";
//     } else if (firstParam !== "JavaScript" && secondParam >= 16) {
//         result = 'else';
//     }
//     return result;
// }
// console.log(conditionFunc("JavaScript", 8));

// *** Завдання 8.6
// function generateNumbers(n, m) {
//   let result = [];
//     for (let i = n; i <= m; i++) {
//         result.push(i);
//     }
//   return result;
// }
// console.log(generateNumbers(2, 6));
// function sumNumbers(n, m) {
//   let result = null;
//   for (let i = n; i <= m; i++) {
//         result += i;
//     }
//   return result;
// }
// console.log(sumNumbers(2, 7));

//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// let name = "Іван";
// let city = "Kyiv";
// city = name;
// console.log(city);

//***2***
//Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); //       привіт 1
// console.log(`привіт ${"name"}`); //  привіт name
// console.log(`привіт ${name}`); // ?  привіт Olga

//***3***
//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// вивести в консоль тип

// console.log(typeof Number(a));
// console.log(typeof parseInt(b));
// console.log(typeof parseFloat(c));

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3

// console.log((0.1 * 10 + 0.2 * 10) / 10);

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40

// console.log(Math.max(20, 10, 50, 40));

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4

// console.log(Math.random() * (4 - 2) + 2);

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";

// console.log(message.length);

//***8**
//вивести в консоль message  великими літерами

// console.log(message.toUpperCase());

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

// let user = {};
// user.name = "Tanya";
// user.age = 34;
// user.city = "Konotop";
// delete user.city;
// user["like flowers"] = true;
// console.log(user);

//***10**
// За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта

// for (key in user) {
//     console.log(key);
//     console.log(user[key]);
// }
