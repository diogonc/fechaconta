using System;
using System.Collections.Generic;

namespace Fechaconta.WebApp.Models
{
    public class Pedido
    {
        public string NumeroDaComanda { get; set; }
        public List<ItemDoPedido> ItensDoPedido { get; set; }
    }
}