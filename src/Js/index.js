// Objetivo Geral - Identificar os elementos
const btnavancar = document.getElementById("btn-avancar");
const btnvoltar = document.getElementById("btn-voltar");
let cartaoatual = 0;
const cartoes = document.querySelectorAll(".cartao");

// OBJETIVO 1 - BTN AVANÇAR
// passo 1 - dar um jeito de identificar o clique do usuário na seta avançar
btnavancar.addEventListener("click", function () {
    const EhUltimoCartao = cartaoatual === cartoes.length - 1
    if (EhUltimoCartao) return;

  // passo 2 - buscar o cartão que esta selecionado e esconder
  esconderCartaoSelecionado(); 

  // passo 3 - fazer aparecer o próximo cartão da lista

  cartaoatual++;
  mostrarCartao();
});

// OBJETIVO 2 - BTN VOLTAR

// passo 1 - dar um jeito de identificar o clique do usuário na seta voltar
btnvoltar.addEventListener("click", function () {
  const EhPrimeiroCartao = cartaoatual === 0; 
    if (EhPrimeiroCartao) return;
 
  // passo 2 - buscar o cartão que esta selecionado e esconder
  esconderCartaoSelecionado();
  
  // passo 3 - fazer aparecer o cartão anterior da lista
  cartaoatual--;
  mostrarCartao();
});

// Funções
function mostrarCartao() {
    cartoes[cartaoatual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoselecionado = document.querySelector(".selecionado");
    cartaoselecionado.classList.remove("selecionado");
}