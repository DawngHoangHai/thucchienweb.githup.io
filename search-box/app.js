var btnSearch = document.querySelector('.search__box button');
var seachBox = document.querySelector('.search__box');
var input = seachBox.querySelector('.input__text');
btnSearch.addEventListener('click', () => {
   seachBox.classList.toggle('click');
   input.focus();
});
