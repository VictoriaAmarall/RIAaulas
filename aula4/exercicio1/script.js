const botao = document.querySelector('#botao');
const p2 = document.querySelector('#p2');
const artigo = document.querySelector('#artigo');
const img = document.querySelector('#img');


function alternarConteudo() {
    artigo.classList.toggle("mudar");

    if (artigo.classList.contains("mudar")) {
        p2.textContent = 'Mudando texto do parágrafo';
        img.src = 'catnoir.jpg';
    } else {
        p2.textContent = 'Texto original do parágrafo';
        img.src = 'ladybug-leaf.avif';
    }
}

botao.addEventListener('click', alternarConteudo);

