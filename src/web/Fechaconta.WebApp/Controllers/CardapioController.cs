using Fechaconta.WebApp.Models;
using System;
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
            var cardapio = new Cardapio { Categorias = new List<Categoria>() };

            cardapio.Adicionar("Bolinhos", "Bolinho de Feijoada", "Recheado com couve e bacon.", 7.56);
            cardapio.Adicionar("Bolinhos", "Bolinho de Comitiva", "Bolinho de arroz com carne de sol e queijo coalho.", 11);

            cardapio.Adicionar("Saladas", "Salada do Cezinha", "Folhas verdes, molho de mostarda, tomate, Torradinha e Queijo de Minas.", 11.87);
            cardapio.Adicionar("Saladas", "Salada de Carrapicho", "Filé cortado finim acompanhado de Minirrúculas, Parmessão e Alho.", 10.69);
            cardapio.Adicionar("Saladas", "Doces Pantaneiro", "Queijo caipira fresco com Goiabada.", 9.66);

            cardapio.Adicionar("Sobremesas", "Surpresa de Limão", "Sufle de Limão com raspas de chocolate.", 5.10);
            cardapio.Adicionar("Sobremesas", "Petit gâteau", "Doce de Leite, Chocollate em Barras com Sorvete.", 5.10);

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
                categoria = new Categoria { Nome = nomeDaCategoria, Itens = new List<Item>() };
                cardapio.Categorias.Add(categoria);
            }

            var item = categoria.Itens.FirstOrDefault(i => i.Nome == nomeDoItem);
            if (item == null)
            {
                item = new Item { Id = Guid.NewGuid(), Nome = nomeDoItem, Descricao = descricaoDoItem, Valor = valorDoItem };
                categoria.Itens.Add(item);
            }
        }
    }
}
