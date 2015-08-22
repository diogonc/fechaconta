﻿using System.Collections.Generic;
using System.Linq;

namespace Fechaconta.WebApp.Models
{
    public class Comanda
    {
        public string Numero { get; set; }
        public int NumeroDaMesa { get; set; }
        public double Total { get { return Pedidos.Sum(pedido => pedido.Valor); } }

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