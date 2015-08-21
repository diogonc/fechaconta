angular.module('starter.controllers', [])

.controller('ComandaCtrl', function($scope) {})

.controller('MenuCtrl', function($scope, $http) {
  var homeUrl = 'http://fechaconta.azurewebsites.net/';

  $scope.$on('$ionicView.enter', function(e) {
      
      $http.get(homeUrl+'api/cardapio').success(function(data){
        console.log(data);
        $scope.itens = data;
      });
  });

  $scope.categoriaSelecionada = 1;

  $scope.alterarCategoria = function(indiceDaCategoria){
    $scope.categoriaSelecionada = indiceDaCategoria;
  }

  $scope.selecionarItem = function(indiceDoitem){
    var produto = $scope.itens.Categorias[$scope.categoriaSelecionada].Itens[indiceDoitem];
    produto.Selecionado = true;


    $scope.pedido.push({produto: produto, quantidade:1});
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});


var pedido = function(numeroDoPedido){
  var self = this;
  self.numeroDoPedido = numeroDoPedido


}
