using Fechaconta.WebApp.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Fechaconta.WebApp.Controllers
{
    public class CardapioController : ApiController
    {
        public Cardapio Get()
        {
            return CriadorDeCardapio.Criar();
        }
    }

    public class CriadorDeCardapio
    {
        public static Cardapio Criar()
        {
            var cardapio = new Cardapio() { Categorias = new List<Categoria>() };

            cardapio.Adicionar("Bolinhos", "Bolinho de Feijoada", "Recheado com couve e bacon.", 7.56);
            cardapio.Adicionar("Bolinhos", "Bolinho de Comitiva", "Bolinho de arroz com carne de sol e queijo coalho.", 11);

            cardapio.Adicionar("Bebidas", "Skol", "Bem geladinha.", 2.5);
            cardapio.Adicionar("Bebidas", "Antartica", "Mais geladinha ainda.", 3);

            return cardapio;
        }
    }

    public static class CardapioExtensions
    {
        public static void Adicionar(this Cardapio cardapio, string nomeDaCategoria, string nomeDoItem, string descricaoDoItem, double valorDoItem)
        {
            var categoria = cardapio.Categorias.FirstOrDefault(c => c.Nome == nomeDaCategoria);
            if (categoria == null)
            {
                categoria = new Categoria() { Nome = nomeDaCategoria, Itens = new List<Item>() };
                cardapio.Categorias.Add(categoria);
            }

            var item = categoria.Itens.FirstOrDefault(i => i.Nome == nomeDoItem);
            if (item == null)
            {
                item = new Item
                {
                    Nome = nomeDoItem,
                    Descricao = descricaoDoItem,
                    Valor = valorDoItem
                };
                categoria.Itens.Add(item);
            }
        }
    }
}
