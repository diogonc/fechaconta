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

            //var bolinhoDeFeijoada = new Item() { Nome}

            return cardapio;
        }
    }
}
