using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Fechaconta.WebApp.Models;

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

            var bolinhoDeFeijoada = new Item() {
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
}
