angular.module("starter.services", [])
.factory("ComandaRepository", function(){
	var repository = new Repository('comanda', storage);
				
	return {
		getAll: repository.getAll,
		save: repository.save,
		get: function () { 
			var itens = repository.getAll();
			return  itens[itens.length -1];
		},
		delete: repository.delete,
		limparDados: repository.limparDados
	}
})
.factory("PedidoRepository", function(){
	var repository = new Repository('pedido', storage);
				
	return {
		getAll: repository.getAll,
		save: repository.save,
		get: function () { 
			var pedidos = repository.getAll();
			return  pedidos[pedidos.length -1];
		},
		delete: repository.delete,
		limparDados: repository.limparDados
	}
});