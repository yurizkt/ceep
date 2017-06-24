(function(){
  'use strict'

  var contador = $('.cartao').length

  function adicionaCartao(event){

        event.preventDefault();

        var campoTexto = $('.novoCartao-conteudo');
        var conteudo = campoTexto.val().trim().replace(/\n/g, '<br>');


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

              var cartao = $('<div>').attr('id', 'cartao_'+ contador)
                                     .addClass('cartao')
                                     .append(divOpcoes)
                                     .append(cartaoConteudo)
                                     .prependTo('.mural')

              campoTexto.val('')
        }

  }

  $('#novoCartao').on('submit', adicionaCartao);



})();
