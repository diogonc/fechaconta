angular.module('starter.controllers', [])

.controller('MesaCtrl', function($scope, $http, PedidoRepository, $state) {
  var homeUrl = 'http://fechaconta.azurewebsites.net/';

  $scope.abrirComanda = function(mesa){
       $http.post(homeUrl+'api/comanda?numeroDaMesa=' + mesa).success(function(numeroDaComanda){
        var pedido = new Pedido(numeroDaComanda, mesa);
        PedidoRepository.save(pedido);
        $state.go('tab.menu');
      });
    }
})

.controller('ComandaCtrl', function($scope) {})

.controller('MenuCtrl', function($scope, $http, PedidoRepository) {
  var homeUrl = 'http://fechaconta.azurewebsites.net/';
  var pedido;

  $scope.$on('$ionicView.enter', function(e) {
      $http.get(homeUrl+'api/cardapio').success(function(data){
        $scope.itens = data;
      });

      comanda = PedidoRepository.getAll()[0];
      $scope.mesa = comanda.mesa;

      pedido = new Pedido(comanda.numeroDaComanda, comanda.mesa);
  });

  $scope.categoriaSelecionada = 1;

  $scope.alterarCategoria = function(indiceDaCategoria){
    $scope.categoriaSelecionada = indiceDaCategoria;
  };

  $scope.adicionarItem = function(item){    
    pedido.adicionar(item);
  };

  $scope.removerItem = function(item){
    pedido.remover(item);
  }

});
