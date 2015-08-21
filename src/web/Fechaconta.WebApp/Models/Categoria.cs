using System.Collections.Generic;

namespace Fechaconta.WebApp.Models
{
    public class Categoria
    {
        public string Nome { get; set; }
        public List<Item> Itens { get; set; }
    }
}