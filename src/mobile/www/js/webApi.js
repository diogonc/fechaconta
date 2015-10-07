appServices.factory("WebApi", function($http, $q){
	var myService = {
    abrirComanda: function(mesa) {
      var promise = $http.post(homeUrl+'api/comanda?numeroDaMesa=' + mesa).then(function (response) {
        return response.data;
      });
      return promise;
    },
    obterCardapio: function(){
      var promise = $http.get(homeUrl+'api/cardapio').then(function (response) {
        return response.data;
      });
      return promise;
    },
    fazerPedido: function(numeroDaComanda, numeroDaMesa, itensDoPedido){
      var promise = $http.post(homeUrl + 'api/pedido', { 
        NumeroDaComanda: numeroDaComanda,
        NumeroDaMesa: numeroDaMesa,
        ItensDoPedido: itensDoPedido 
      }).then(function(response){
        return response.data;
      });
      return promise;
    },
    obterComanda: function(numeroDaComanda){
      var promise = $http.get(homeUrl+'api/comanda?numeroDaComanda=' + numeroDaComanda).then(function(response){
        return response.data;
      });
      return promise;
    }, 
    fecharComanda: function(numeroDaComanda){
      var promise = $http.post(homeUrl+'api/comanda/' + numeroDaComanda + '/fechar').then(function(response){
        return response.data;
      });
      return promise;
    }
  };

  return myService;
});