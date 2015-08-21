using System.Collections.Generic;

namespace Fechaconta.WebApp.Models
{
    public class Cardapio
    {
        public List<Categoria> Categorias { get; set; }
    }

    public class Categoria
    {
        public string Nome { get; set; }
        public List<Item> Itens { get; set; }
    }

    public class Item
    {
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public double Valor { get; set; }
    }
}