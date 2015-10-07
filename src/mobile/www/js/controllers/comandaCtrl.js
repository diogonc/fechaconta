appControllers.controller('ComandaCtrl', function($scope, WebApi, $state, ComandaRepository) {
  $scope.trocoPara = {valor: ''};
  $scope.comanda = {Total: 0};
  $scope.$on('$ionicView.enter', function(e) {
    $scope.estado = 'aberta';
    var comanda = ComandaRepository.get();

    WebApi.obterComanda(comanda.numeroDaComanda).then(function(comanda){
      $scope.comanda = comanda;
    });
  });

  $scope.troco = function (){
    var trocoPara = $scope.trocoPara.valor === '' ? $scope.comanda.Total : $scope.trocoPara.valor;
    return trocoPara - $scope.comanda.Total;
  }

  $scope.voltar = function(){
    $state.go('tab.menu');
  };

  $scope.fecharConta = function(){
    $scope.estado = 'opcoesDePagamento';
  };

  $scope.escolherTroco = function(){
    $scope.estado = 'trocoPara';
  };

  $scope.finalizarPedido = function(){
    $scope.estado = 'finalizarPedido';
  }

  $scope.mostraOpcoesDePagamento = function(){
    return $scope.estado === 'opcoesDePagamento';
  };

  $scope.mostraTrocoPara = function(){
    return $scope.estado === 'trocoPara';
  };

  $scope.mostraFecharPedido = function(){
    return $scope.comanda.Total > 0 && $scope.estado === 'aberta';
  };

  $scope.mostraFinalizarPedido = function(){
    return $scope.comanda.Total > 0 && ($scope.estado === 'finalizarPedido' || $scope.estado === 'trocoPara');
  };

  $scope.mostraCobrancaFechada = function(){
    return $scope.estado === 'comandaFechada';
  }

  $scope.solicitarFechamento = function(){
    WebApi.fecharComanda($scope.comanda.Numero).then(function(){
     $state.go('tab.volteSempre');
   });
  };
});