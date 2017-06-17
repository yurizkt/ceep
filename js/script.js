var btn = document.querySelector("#mudaLayout");


btn.addEventListener('click', function(){
  //Pega o elemento com a class="mural"
  var mural = document.querySelector(".mural");

  //Tira ou coloca a classe
  mural.classList.toggle("mural--linhas");

  //Muda o texto do botão
  if(mural.classList.contains("mural--linhas")){
    this.value = "Blocos";
  }else{
    this.value = "Linhas";
  }
});

function removeCartao(){
  var cartao = document.querySelector("#cartao_" + this.dataset.ref);

  //dá uma classe que faz ela sumir devagar
  cartao.classList.add("cartao--some");

  //tira da página depois da animação
  setTimeout(function(){
    cartao.remove();
  }, 400);
}

//pega os botoes
var botoes = document.querySelectorAll(".opcoesDoCartao-remove");

for(var i = 0; i < botoes.length; i++){

  //adiciona o evento em cada botao
  botoes[i].addEventListener("click", removeCartao);
}
