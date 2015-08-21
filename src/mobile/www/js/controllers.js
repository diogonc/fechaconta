angular.module('starter.controllers', [])

.controller('ComandaCtrl', function($scope) {})

.controller('MenuCtrl', function($scope, Cardapio) {
  $scope.$on('$ionicView.enter', function(e) {
  });

  $scope.itens = Cardapio.all();

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
