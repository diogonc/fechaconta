using System;

namespace Fechaconta.WebApp.Models
{
    public class Item
    {
        public Guid Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public double Valor { get; set; }
    }
}