angular.module('starter.controllers', [])

.controller('MesaCtrl', function($scope, $http, ComandaRepository, PedidoRepository, $state) {
  
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

.controller('ComandaCtrl', function($scope, $http, $state, ComandaRepository) {
  $scope.trocoPara = {valor: ''};
  $scope.comanda = {Total: 0};
  $scope.$on('$ionicView.enter', function(e) {
    $scope.estado = 'aberta';
    var comanda = ComandaRepository.get();
    $http.get(homeUrl+'api/comanda?numeroDaComanda=' + comanda.numeroDaComanda).success(function(comanda){
      $scope.comanda = comanda;
    });   
  });

  $scope.troco = function (){
    var trocoPara = $scope.trocoPara.valor === '' ? 0 : $scope.trocoPara.valor;
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
    return $scope.estado === 'aberta';
  };

  $scope.mostraFinalizarPedido = function(){
    return $scope.estado === 'finalizarPedido' || $scope.estado === 'trocoPara';
  };

  $scope.mostraCobrancaFechada = function(){
    return $scope.estado === 'comandaFechada';
  }

  $scope.solicitarFechamento = function(){
    $http.post(homeUrl+'api/comanda/' + $scope.comanda.Numero + '/fechar').success(function(){
       $state.go('tab.volteSempre');
    });   
  };
})

.controller('VolteSempreCtrl', function() { })

.controller('ConfirmarCtrl', function($scope, $http, $state, PedidoRepository) {
  $scope.pedido = [];

  $scope.$on('$ionicView.enter', function(e) {    
    $scope.pedido = PedidoRepository.get();
  });

  $scope.voltar = function(){
    $state.go('tab.menu');
  }

  $scope.confirmar = function(){
    
    $http.post(homeUrl + 'api/pedido', { NumeroDaComanda: $scope.pedido.numeroDaComanda, NumeroDaMesa: $scope.pedido.mesa, ItensDoPedido: $scope.pedido.itens }).success(function(numeroDaComanda){      
     
     PedidoRepository.limparDados();
     $state.go('tab.comanda');
   });
  };

  $scope.excluirItem = function(item){
    removerItenDoPedido(item);
  }

  function removerItenDoPedido(itemParaRemover){
    var indice = findById($scope.pedido.itens, itemParaRemover.Id);
    $scope.pedido.itens.splice(indice, 1);

    if($scope.pedido.itens.length == 0)
      $state.go('tab.menu');   
  }
})

.controller('MenuCtrl', function($scope, $http, ComandaRepository,  $state, PedidoRepository) {  
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
