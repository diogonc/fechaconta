using Fechaconta.WebApp.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Fechaconta.WebApp.Controllers
{
    public class CardapioController : ApiController
    {
        // GET api/values
        public Cardapio Get()
        {

            return CriadorDeCardapio.Criar();
        }
    }

    public class CriadorDeCardapio
    {
        public static Cardapio Criar()
        {
            var cardapio = new Cardapio();
            var categorias = new List<Categoria>();

            var bolinhos = new Categoria();

            var bolinhoDeFeijoada = new Item()
            {
                Nome = "Bolinho de Feijoada",
                Descricao = "Recheado com couve e bacon.",
                Valor = 7.56
            };
            var bolinhoDeComitiva = new Item()
            {
                Nome = "Bolinho de Comitiva",
                Descricao = "Bolinho de arroz com carne de sol e queijo coalho.",
                Valor = 11.00
            };

            var itensDaCategoriaBolinhos = new List<Item>();
            itensDaCategoriaBolinhos.Add(bolinhoDeFeijoada);
            itensDaCategoriaBolinhos.Add(bolinhoDeComitiva);
            bolinhos.Itens = itensDaCategoriaBolinhos;

            categorias.Add(bolinhos);

            cardapio.Categorias = categorias;

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

            var item = categoria.Itens.FirstOrDefault();
            if (item == null)
            {
                item = new Item()
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
