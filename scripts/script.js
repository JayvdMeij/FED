const words = ["brand", "talent", "product", "website"];
let index = 0;
const word = document.querySelector(".rotate-word");

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

setInterval(() => {

  word.classList.add("fade-out");

  setTimeout(() => {
    index = (index + 1) % words.length;
    word.textContent = words[index];


    word.classList.remove("fade-out");
    word.classList.add("fade-in");

    setTimeout(() => word.classList.remove("fade-in"), 500);
  }, 500);
}, 2500);


document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.theme-toggle');
  const saved = localStorage.getItem('theme');

  if (saved === 'light') document.body.classList.add('light');

  btn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
});