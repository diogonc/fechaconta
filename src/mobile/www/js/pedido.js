var Pedido = function (numeroDaComanda, mesa) {
	var self = this;
	self.numeroDaComanda = numeroDaComanda;
	self.mesa = mesa;
	self.itens = [];

	self.adicionar = function(itemParaAdicionar){

		var indice = findById(self.itens, itemParaAdicionar.Id);

		if(indice < 0 )
			self.itens.push({produto: itemParaAdicionar, quantidade: 1});
		else
			self.itens[indice].quantidade += 1;
	}

	self.remover = function(itemParaRemover){
		var indice = findById(self.itens, itemParaRemover.Id);
		
		if(indice >= 0 )
		{
			var item = self.itens[indice];
			item.quantidade -= 1;
			
			if(item.quantidade === 0)
				self.itens.splice(indice, 1);
		}
	}
}

function findById(source, id) {
  for (var i = 0; i < source.length; i++) {
    if (source[i].produto.Id === id) {
      return i;
    }
  }
  return -1;  
}