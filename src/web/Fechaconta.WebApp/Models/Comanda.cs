using System.Collections.Generic;
using System.Linq;

namespace Fechaconta.WebApp.Models
{
    public class Comanda
    {
        public string Numero { get; set; }
        public int NumeroDaMesa { get; set; }
        public List<Pedido> Pedidos { get; set; }

        public Comanda()
        {
            Pedidos = new List<Pedido>();
        }

        public double Valor()
        {
            return Pedidos.Sum(i => i.Valor());
        }

        public void Adicionar(Pedido pedido)
        {
            Pedidos.Add(pedido);
        }
    }
}