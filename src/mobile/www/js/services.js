angular.module("starter.services", [])
.factory("ComandaRepository", function(){
	var comandaRepository = new Repository('comanda', storage);
				
	return {
		getAll: comandaRepository.getAll,
		save: comandaRepository.save,
		get: function () { 
			var itens = comandaRepository.getAll();
			return  itens[itens.length -1];
		},
		delete: comandaRepository.delete
	}
})
.factory("PedidoRepository", function(){
	var pedidoRepository = new Repository('pedido', storage);
				
	return {
		getAll: pedidoRepository.getAll,
		save: pedidoRepository.save,
		get: function () { 
			var pedidos = pedidoRepository.getAll();
			return  pedidos[pedidos.length -1];
		},
		delete: pedidoRepository.delete
	}
});