//pegar o elemento html dos botoes
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

//identificar o click do usuario
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        //desmarcar o botão anterior selecionado
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //marcar o proximo botão selecionado
        botao.classList.add('selecionado');

        //esconder a imagem ativa de fundo anterior
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        //mostrar a imagem correspondente do botão clicado
        console.log(imagens);
        console.log(imagens[1]);

    });
});
