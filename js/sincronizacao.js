$("#sync").on('click', function(){

  var cartoes = [];

  $(".cartao").each(function(){
    var cartao = {};
    cartao.conteudo = $(this).find(".cartao-conteudo").html();
    cartoes.push(cartao);
  });

  var mural = {
    usuario : "yuri.zkt@gmail.com",
    cartoes : cartoes
  }

  $.ajax({
    url: "https://ceep.herokuapp.com/cartoes/salvar",
    method: "POST",
    data: mural,
    success: function(res){
      $('#sync').addClass('botaoSync--sincronizado');
      console.log(res.quantidade + "cartões salvos em " + res.usuario);
    },
    error: function(){
      $('#sync').addClass('botaoSync--deuRuim');
      console.log("não foi possível salvar o mural");
    },
    complete: function(){
      $('#sync').removeClass('botaoSync--esperando');
    }
  });
});
