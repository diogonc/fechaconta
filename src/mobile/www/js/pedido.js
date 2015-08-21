var Pedido = function (numeroDoPedido) {
	var self = this;
	self.numeroDoPedido = numeroDoPedido;
	self.itens = [];

	self.adicionarProduto = function(produto, quantidade){
		self.itens.push({produto: produto, quantidade: quantidade});
	}
}