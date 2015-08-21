angular.module('starter.controllers', [])

.controller('MesaCtrl', function($scope, $http, ComandaRepository, $state) {
	var homeUrl = 'http://fechaconta.azurewebsites.net/';

	$scope.abrirComanda = function(mesa){
		$http.post(homeUrl+'api/comanda?numeroDaMesa=' + mesa).success(function(numeroDaComanda){
			ComandaRepository.save({mesa:mesa, numeroDaComanda: numeroDaComanda});
			$state.go('tab.menu');
		});
	}
})

.controller('ComandaCtrl', function($scope) {})

.controller('ConfirmarCtrl', function($scope, $http, $state, PedidoRepository) {

	$scope.$on('$ionicView.enter', function(e) {
		$scope.pedido = PedidoRepository.get();
		console.log($scope.pedido);
	});

	$scope.confirmar = function(){

		var homeUrl = 'http://fechaconta.azurewebsites.net/';
		// LOCAL: var homeUrl = 'http://localhost:17357/'
		
		$http.post(homeUrl + 'api/pedido', { NumeroDaComanda: $scope.pedido.numeroDaComanda, NumeroDaMesa: $scope.pedido.mesa, ItensDoPedido: $scope.pedido.itens }).success(function(numeroDaComanda){      
			
			//PedidoRepository.delete();
			
			$state.go('tab.comanda');
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
		console.log('foi', $scope.itens);

		for (var i = 0; i < $scope.itens.Categorias.length; i++) {
			var categoria= $scope.itens.Categorias[i];
			for (var j = 0; j < categoria.Itens.length; j++) {
				categoria.Itens[j].quantidade = 0;
			}
		}
	};

});
