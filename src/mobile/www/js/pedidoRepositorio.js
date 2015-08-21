angular.module("starter.services", []).factory("PedidoRepository", function(){
	var pedidoRepository = new Repository('pedido', storage);
				
	return {
		getAll: pedidoRepository.getAll,
		save: pedidoRepository.save,
		get: pedidoRepository.get,
		delete: pedidoRepository.delete
	}
});