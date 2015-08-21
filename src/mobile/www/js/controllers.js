angular.module('starter.controllers', [])

.controller('MesaCtrl', function($scope, $http, PedidoRepository, $state) {
  var homeUrl = 'http://fechaconta.azurewebsites.net/';
  $scope.test = "sfafdsa";


    $scope.abrirComanda = function(mesa){
       $http.post(homeUrl+'api/comanda?numeroDaMesa=' + mesa).success(function(data){
        var pedido = new Pedido(data);
        PedidoRepository.save(pedido);
        $state.go('tab.menu');
      });
    }
})

.controller('ComandaCtrl', function($scope) {})

.controller('MenuCtrl', function($scope, $http) {
  var homeUrl = 'http://fechaconta.azurewebsites.net/';

  $scope.$on('$ionicView.enter', function(e) {
      
      $http.get(homeUrl+'api/cardapio').success(function(data){
        console.log(data);
        $scope.itens = data;
      });
  });

  $scope.categoriaSelecionada = 0;

  $scope.alterarCategoria = function(indiceDaCategoria){
    $scope.categoriaSelecionada = indiceDaCategoria;
  }

  $scope.selecionarItem = function(indiceDoitem){
    var produto = $scope.itens.Categorias[$scope.categoriaSelecionada].Itens[indiceDoitem];
    produto.Selecionado = true;


    $scope.pedido.push({produto: produto, quantidade:1});
  }
});
