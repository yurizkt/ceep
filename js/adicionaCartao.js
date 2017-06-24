(function(){
  'use strict'

  var contador = $('.cartao').length

  function adicionaCartao(event){

        event.preventDefault();

        var campoTexto = $('.novoCartao-conteudo');
        var conteudo = campoTexto.val().trim().replace(/\n/g, '<br>');

        console.log(conteudo.length);

        if(conteudo){

              contador++

              var buttonOpcoes = $('<button>').addClass('opcoesDoCartao-opcao')
                                              .addClass('opcoesDoCartao-remove')
                                              .attr('data-ref', contador)
                                              .text('Remover')
                                              .click(removeCartao)

              var divOpcoes = $('<div>').addClass('opcoesDoCartao')
                                        .append(buttonOpcoes)

              var cartaoConteudo = $('<p>').addClass('cartao-conteudo')
                                           .append(conteudo);

              var tipoCartao = decideTipoCartao(conteudo);

              var cartao = $('<div>').attr('id', 'cartao_'+ contador)
                                     .addClass('cartao')
                                     .addClass(tipoCartao)
                                     .append(divOpcoes)
                                     .append(cartaoConteudo)
                                     .prependTo('.mural')

              campoTexto.val('')
        }

  }

  $('#novoCartao').on('submit', adicionaCartao);

  function decideTipoCartao(conteudo){
    var quebras = conteudo.replace("<br>").length;

    var totalDeLetras = conteudo.replace(/<br>/g , " ").length;

    var ultimoMaior = "";
    conteudo.replace(/<br>/g , " ")
            .split(" ")
            .forEach(function(palavra){
              if(palavra.length > ultimoMaior.length){
                ultimoMaior = palavra;
              }
            });
    var tamMaior = ultimoMaior.length;

    //no mínimo, todo cartão tem o texto pequeno
    var tipoCartao = "cartao--textoPequeno";

    if(tamMaior < 9 && quebras < 5 && totalDeLetras < 55){
      tipoCartao = "cartao--textoGrande";
    }else if(tamMaior < 12 && quebras < 6 && totalDeLetras < 75){
      tipoCartao = "cartao--textoMedio";
    }

    return tipoCartao;

  }

  window.adicionaCartao = adicionaCartao;

})();
