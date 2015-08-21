angular.module('starter.controllers', [])

.controller('MesaCtrl', function($scope, $http, ComandaRepository, PedidoRepository, $state) {
  var homeUrl = 'http://fechaconta.azurewebsites.net/';
  
  $scope.$on('$ionicView.enter', function(e) {
    ComandaRepository.limparDados();
    PedidoRepository.limparDados();  
  });  

  $scope.abrirComanda = function(mesa){
   $http.post(homeUrl+'api/comanda?numeroDaMesa=' + mesa).success(function(numeroDaComanda){
    ComandaRepository.save({mesa:mesa, numeroDaComanda: numeroDaComanda});
    $state.go('tab.menu');
  });
 }
})

.controller('ComandaCtrl', function($scope) {})

.controller('ConfirmarCtrl', function($scope, $http, PedidoRepository) {

  $scope.$on('$ionicView.enter', function(e) {
    $scope.pedido = PedidoRepository.get();
  });

  $scope.voltar = function(){
    $state.go('tab.menu');
  }

  $scope.confirmar = function(){

    var homeUrl = 'http://fechaconta.azurewebsites.net/';

    var pedido = {
      NumeroDaComanda: 'sample string 1',
      ItensDoPedido: [
      {
        Item: {
          Id: '00d35519-234f-4878-bd5e-6dfdb5ba8d3c',
          Nome: 'sample string 2',
          Descricao: 'sample string 3',
          Valor: 4.1,
          NomeDaImagem: 'sample string 5'
        },
        Quantidade: 1,
        Valor: 4.1
      }
      ]
    };

    $http({
        url: homeUrl + 'api/pedido',
        method: "POST",
        data: $.param({
            pedido
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    });
  };
})

.controller('MenuCtrl', function($scope, $http, ComandaRepository,  $state, PedidoRepository) {
  var homeUrl = 'http://fechaconta.azurewebsites.net/';
  var pedido;

  $scope.$on('$ionicView.enter', function(e) {
    $http.get(homeUrl+'api/cardapio').success(function(data){
      $scope.itens = data;
      inicializarQuantidade();
    });
    comanda = ComandaRepository.get();
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
    for (var i = 0; i < $scope.itens.Categorias.length; i++) {
     var categoria= $scope.itens.Categorias[i];
     for (var j = 0; j < categoria.Itens.length; j++) {
      categoria.Itens[j].quantidade = 0;
    }
  }
};

});
