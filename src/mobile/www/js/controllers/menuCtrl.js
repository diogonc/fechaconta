appControllers.controller('MenuCtrl', function($scope, $http, ComandaRepository,  $state, PedidoRepository) {
  var pedido;

  $scope.$on('$ionicView.enter', function(e) {
    $http.get(homeUrl+'api/cardapio').success(function(data){
      $scope.itens = data;
      inicializarQuantidade();
    });
    comanda = ComandaRepository.get();
    $scope.mesa = comanda.mesa;
    pedido = new Pedido(comanda.numeroDaComanda, comanda.mesa);

    $scope.categoriaSelecionada = 0;
  });

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

 $scope.podeFazerPedido = function(){
  return pedido != undefined && pedido.itens.length > 0;
 };

  $scope.fazerPedido = function(){
    PedidoRepository.save(pedido);
    $state.go('tab.confirmar');
  };

  $scope.vaiParaComanda = function(){
    $state.go('tab.comanda');
  };

  function inicializarQuantidade() {
    for (var i = 0; i < $scope.itens.Categorias.length; i++) {
     var categoria= $scope.itens.Categorias[i];
     for (var j = 0; j < categoria.Itens.length; j++) {
      categoria.Itens[j].quantidade = 0;
    }
  }
  };
});
