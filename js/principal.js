$('#busca').on('input', function(){
  var busca = $(this).val().trim();

  if(busca.length){
    $('.cartao').hide().filter(function(){
      return $(this).find('.cartao-conteudo')
                    .text()
                    .match(new RegExp(busca, 'gi'));
    }).show()
  }else{
    $('.cartao').show();
  }
});

$('#ajuda').on('click', function(){
  $.getJSON('https://ceep.herokuapp.com/cartoes/instrucoes', function(res){
    console.log(res);

    res.instrucoes.forEach(function(instrucao){
      controllerCartao.adicionaCartao(instrucao.conteudo, instrucao.cor);
    })
  })
});
