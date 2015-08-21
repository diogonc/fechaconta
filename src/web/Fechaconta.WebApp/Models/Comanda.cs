using System.Collections.Generic;

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

        public void Adicionar(Pedido pedido)
        {
            Pedidos.Add(pedido);
        }
    }
}