angular.module("starter.services", [])
.factory("ComandaRepository", function(){
	var repositorio = new Repository('comanda', storage);
				
	return {
		getAll: repositorio.getAll,
		save: repositorio.save,
		get: repositorio.getAll,
		delete: repositorio.delete,
		limparDados: repositorio.limparDados
	}
})
.factory("PedidoRepository", function(){
	var repositorio = new Repository('pedido', storage);
				
	return {
		getAll: repositorio.getAll,
		save: repositorio.save,
		get: repositorio.getAll,
		delete: repositorio.delete,
		limparDados: repositorio.limparDados
	}
});