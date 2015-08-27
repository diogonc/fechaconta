appControllers.controller('MesaCtrl', function($scope, $http, ComandaRepository, PedidoRepository, $state) {

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
});