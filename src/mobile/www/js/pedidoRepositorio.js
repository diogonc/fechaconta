angular.module("starter.services", []).factory("PedidoRepository", function(){
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