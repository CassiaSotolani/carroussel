const botaoVoltar = document.querySelector('[data-js="carroussel__botao-voltar"]');
const botaoProximo = document.querySelector('[data-js="carroussel__botao-proximo"]');
const cards = document.querySelectorAll('[data-js="carroussel__item"]');

let indiceDosSlidesAtuais = 0;

//evento do botão voltar
botaoVoltar.addEventListener('click', function() {
    console.log(cards);
})

//evento do botão proximo
botaoProximo.addEventListener('click', function() {
    console.log('Teste 2');
})