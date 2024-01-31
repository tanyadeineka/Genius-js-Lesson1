// ----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

/* function hideElement() {
    const textElement = document.getElementById('text');
    if(textElement) {
        textElement.style.display = "none";
    }
} */ 


// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

/* function hideElement() {
    const btn = document.getElementById('btn');
    btn.style.display = "none";
} */

// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

/* const tree = document.querySelector(".tree");

tree.addEventListener("click", handleClick);

function handleClick(event) {
  const checkClass = tree.querySelector("li.active");

  if (checkClass) {
    event.target.classList.remove("active");
  } else {
    event.target.classList.add("active");
  }
} */