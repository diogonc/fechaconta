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

.controller('ConfirmarCtrl', function($scope, PedidoRepository) {

    $scope.$on('$ionicView.enter', function(e) {
        $scope.pedido = PedidoRepository.getAll()[0];
        console.log($scope.pedido);
    });
})

.controller('MenuCtrl', function($scope, $http, PedidoRepository, $state) {
  var homeUrl = 'http://fechaconta.azurewebsites.net/';
  var pedido;

  $scope.$on('$ionicView.enter', function(e) {
      $http.get(homeUrl+'api/cardapio').success(function(data){
        $scope.itens = data;      
        inicializarQuantidade();
      });
      comanda = PedidoRepository.getAll()[0];
      $scope.mesa = comanda.mesa;
      pedido = new Pedido(comanda.numeroDaComanda, comanda.mesa);
      
  });

  $scope.categoriaSelecionada = 0;

  $scope.alterarCategoria = function(indiceDaCategoria){
    $scope.categoriaSelecionada = indiceDaCategoria;
  };

  $scope.adicionarItem = function(item){    

    pedido.adicionar(item);
    item.quantidade += 1;
  };

  $scope.removerItem = function(item){
    pedido.remover(item);
    if(item.quantidade > 0) {
        item.quantidade -= 1;
    }
  };

  $scope.fazerPedido = function(){
    PedidoRepository.save(pedido);
    $state.go('tab.confirmar');
  };

  function inicializarQuantidade() {
      console.log('foi', $scope.itens);
      
     for (var i = 0; i < $scope.itens.Categorias.length; i++) {
         var categoria= $scope.itens.Categorias[i];
         for (var j = 0; j < categoria.Itens.length; j++) {
            categoria.Itens[j].quantidade = 0;
         }
     }
 };
      
});
