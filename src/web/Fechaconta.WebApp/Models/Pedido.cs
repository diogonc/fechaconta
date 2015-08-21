using System.Collections.Generic;
using System.Linq;

namespace Fechaconta.WebApp.Models
{
    public class Pedido
    {
        public string NumeroDaComanda { get; set; }
        public int NumeroDaMesa { get; set; }
        public List<ItemDoPedido> ItensDoPedido { get; set; }

        public double Valor()
        {
            return ItensDoPedido.Sum(i => i.ValorTotal);
        }
    }
}