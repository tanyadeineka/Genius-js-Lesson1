// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Батьки дозволили?');
//     }
// }

// function checkAge(age) {
//     age > 18 ? "true" : confirm("Батьки дозволили?");
// }
// console.log(checkAge(17));
// console.log(checkAge(22));

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function min(a, b) {
//     if (a < b) {
//         return a;
//     }
//     return b;
// }
// console.log(min(4, 2));
// console.log(min(-1, 3));


// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }
// ask("Ви згодні?",
//     function() { alert("Ви погодились."); },
//     function() { alert("Ви скасували виконання."); }
// );

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };
// ask ("Ви згодні?",
//     function() { alert("Ви погодились."); },
//     function() { alert("Ви скасували виконання."); }
// );