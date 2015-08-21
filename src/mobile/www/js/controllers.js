angular.module('starter.controllers', [])

.controller('MesaCtrl', function($scope, $http, PedidoRepository, $state) {
  var homeUrl = 'http://fechaconta.azurewebsites.net/';

  $scope.abrirComanda = function(mesa){
       $http.post(homeUrl+'api/comanda?numeroDaMesa=' + mesa).success(function(data){
        var pedido = new Pedido(data);
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

      numeroDoPedido = PedidoRepository.getAll()[0];
      pedido = new Pedido(numeroDoPedido);
  });

  $scope.categoriaSelecionada = 1;

  $scope.alterarCategoria = function(indiceDaCategoria){
    $scope.categoriaSelecionada = indiceDaCategoria;
  }

  $scope.selecionarItem = function(indiceDoitem){
    var produto = $scope.itens.Categorias[$scope.categoriaSelecionada].Itens[indiceDoitem];

    pedido.adicionarProduto(produto, 1);
  }
});
