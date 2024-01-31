// ----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

const text = document.querySelector('#text');
const btn = document.querySelector('.btn');
btn.addEventListener('click', ()=> text.style.display = none);


// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці