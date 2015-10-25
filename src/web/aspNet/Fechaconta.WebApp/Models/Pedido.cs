using System.Collections.Generic;
using System.Linq;

namespace Fechaconta.WebApp.Models
{
    public class Pedido
    {
        public string NumeroDaComanda { get; set; }
        public int NumeroDaMesa { get; set; }
        public double Valor { get { return ItensDoPedido.Sum(item => item.ValorTotal); } }

        public List<ItemDoPedido> ItensDoPedido { get; set; }
    }
}