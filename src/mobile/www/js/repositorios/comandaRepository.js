appServices.factory("ComandaRepository", function(){
	var repositorio = new Repository('comanda', storage);
				
	return {
		getAll: repositorio.getAll,
		save: repositorio.save,
		get: repositorio.getAll,
		delete: repositorio.delete,
		limparDados: repositorio.limparDados
	}
})