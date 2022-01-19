/*
quando clicar na seta, precisa exibir a proxima imagem e esconder as demais

usando a estrutura DOM, mover a classe mostrar na tag section da tag main para selecionar exibição da imagem

*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;


function esconderImagens() {
    //    ArrowFunction
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}

function exibirImagens() {
    imagensPainel[imagemAtual].classList.add('mostrar')
}
//funcao para substituir o onClick no HTML
setaAvancar.addEventListener('click', function () {

    const totalDeImagens = imagensPainel.length - 1
    //    === mesmo tipo e valor
    if (imagemAtual === totalDeImagens) {
        return imagemAtual = -1;
    }
    imagemAtual++;

    esconderImagens();
    exibirImagens();
})
setaVoltar.addEventListener('click', function () {
    if (imagemAtual === 0) {
        return imagemAtual = 3;
    }
    imagemAtual--;
    
    esconderImagens();
    exibirImagens();
})
