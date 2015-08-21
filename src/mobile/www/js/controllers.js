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
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
