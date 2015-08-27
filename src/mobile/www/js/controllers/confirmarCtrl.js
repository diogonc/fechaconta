appControllers.controller('ConfirmarCtrl', function($scope, $http, $state, PedidoRepository) {
  $scope.pedido = [];

  $scope.$on('$ionicView.enter', function(e) {

    var pedido = PedidoRepository.get();
    if (pedido.length == 0 || pedido.itens.length == 0){
      $state.go('tab.menu');
    }
    $scope.pedido = pedido;
  });

  $scope.voltar = function(){
    $state.go('tab.menu');
  }

  $scope.confirmar = function(){

    $http.post(homeUrl + 'api/pedido', { NumeroDaComanda: $scope.pedido.numeroDaComanda, NumeroDaMesa: $scope.pedido.mesa, ItensDoPedido: $scope.pedido.itens }).success(function(numeroDaComanda){

     PedidoRepository.limparDados();
     $state.go('tab.comanda');
   });
  };

  $scope.excluirItem = function(item){
    removerItenDoPedido(item);
  }

  function removerItenDoPedido(itemParaRemover){
    var indice = findById($scope.pedido.itens, itemParaRemover.produto.Id);
    $scope.pedido.itens.splice(indice, 1);

    if($scope.pedido.itens.length == 0)
      $state.go('tab.menu');
  }
});