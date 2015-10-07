appControllers.controller('MesaCtrl', function($scope, WebApi, ComandaRepository, PedidoRepository, $state) {

	$scope.$on('$ionicView.enter', function(e) {
		ComandaRepository.limparDados();
		PedidoRepository.limparDados();
	});

	$scope.abrirComanda = function(mesa){
		WebApi.abrirComanda(mesa).then(function(numeroDaComanda){
			ComandaRepository.save({mesa: mesa, numeroDaComanda: numeroDaComanda});
			$state.go('tab.menu');
		});
	};
});