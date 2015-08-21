angular.module("starter.services", []).factory("ComandaRepository", function(){
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
});