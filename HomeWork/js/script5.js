// --1--
// 1) написати об*єкт студента який буде виводити ім'я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const student = {
//     name: "",
//     profession: "",
//     avaregeScore: 0,
//     missedLessons: 0,

//     showStudent: function() {
//         console.log(
//             `name: ${this.name}, profession: ${this.profession}, avaregeScore: ${this.avaregeScore}, missedLessons: ${this.missedLessons}`
//         );
//     }
// }

// const student1 = Object.create(student);
// student1.name = "Ivan";
// student1.profession = "Developer";
// student1.avaregeScore = 4.5;
// student1.missedLessons = 2;

// const student2 = Object.create(student);
// student2.name = "Maria";
// student2.profession = "Design";
// student2.avaregeScore = 4.0;
// student2.missedLessons = 3;

// const student3 = Object.create(student);
// student3.name = "Petro";
// student3.profession = "Testing";
// student3.avaregeScore = 4.8;
// student3.missedLessons = 0;

// const studentInfoFunction = student.showStudent;

// studentInfoFunction.call(student1);

// studentInfoFunction.apply(student2);

// const boundStudentInfoFunction = studentInfoFunction.bind(student3);
// boundStudentInfoFunction();

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const body = document.querySelector("body");
// const btnHtml = document.createElement("button");
// btnHtml.textContent = "HTML";
// body.append(btnHtml);
// btnHtml.addEventListener("click", ()=> alert("HTML (HyperText Markup Language) - це стандартна мова розмітки для створення веб-сторінок і веб-додатків."))

// const btnCss = document.createElement("button");
// btnCss.textContent = "CSS";
// body.append(btnCss);
// btnCss.addEventListener("click", ()=> alert("CSS (Cascading Style Sheets) - це мова таблиць стилів, яка використовується для оформлення вигляду веб-сторінок і веб-додатків."))

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// function shop(name, price, quantity) {
//     const total = price * quantity;
//     return `Товар ${name} в кількості ${quantity} коштує ${total}`;
// }
// const result1 = shop("banana", 30, 4.5);
// const result2 = shop("cherry", 58, 1.3);
// const result3 = shop("orange", 89, 3.4);
// console.log(result1);
// console.log(result2);
// console.log(result3);