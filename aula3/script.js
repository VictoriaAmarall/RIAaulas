const butao = document.querySelector('#mostrarbtn');
const noticias = document.querySelector('#noticias');
const cont = document.querySelector('article').length;
console.log(cont);
butao.addEventListener('click',()=>{
    noticias.classList.toggle("mostrarnoticias");

})