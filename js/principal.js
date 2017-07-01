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
