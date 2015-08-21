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

            cardapio.Adicionar("Bolinhos", "Bolinho de Feijoada", "Recheado com couve e bacon.", 12.56);
            cardapio.Adicionar("Bolinhos", "Bolinho de Comitiva", "Bolinho de arroz com carne de sol e queijo coalho.", 11.05);
            cardapio.Adicionar("Bolinhos", "Bolinho de carne de Sol", "Pure de mandioca com carne de sol e tempero verde.", 10.00);

            cardapio.Adicionar("Saladas", "Salada do Cezinha", "Folhas verdes, molho de mostarda, tomate, Torradinha e Queijo de Minas.", 11.87);
            cardapio.Adicionar("Saladas", "Salada de Carrapicho", "Filé cortado finim acompanhado de Minirrúculas, Parmessão e Alho.", 10.69);
            cardapio.Adicionar("Saladas", "Salada de Pantaneira", "Filé cortado finim acompanhado de Minirrúculas, Parmessão e Alho.", 9.10);


            cardapio.Adicionar("Sobremesas", "Surpresa de Limão", "Sufle de Limão com raspas de chocolate.", 5.10);
            cardapio.Adicionar("Sobremesas", "Petit gâteau", "Doce de Leite, Chocollate em Barras com Sorvete.", 5.10);
            cardapio.Adicionar("Sobremesas", "Doces Pantaneiro", "Queijo caipira fresco com Goiabada.", 9.66);

            cardapio.Adicionar("Bebidas", "Skol", "Aquela que desce redondo.", 4.5);
            cardapio.Adicionar("Bebidas", "Antartica", "A cerveja Original.", 7.70);
            cardapio.Adicionar("Bebidas", "Bhama", "Mais geladinha ainda.", 4.30);

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
