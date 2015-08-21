using Fechaconta.WebApp.Models;
using System.Collections.Generic;
using System.Linq;
using System;

namespace Fechaconta.WebApp.Controllers
{
    public class Comanda
    {
        public string Numero { get; set; }
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

    public static class ComandaRepositorio
    {
        private static List<Comanda> _comandas = new List<Comanda>();

        public static Comanda BuscarPor(string numeroDaComanda)
        {
            return _comandas.FirstOrDefault(c => c.Numero == numeroDaComanda);
        }

        public static void Adicionar(Comanda comanda)
        {
            _comandas.Add(comanda);
        }
    }
}