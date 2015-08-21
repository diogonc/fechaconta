using Fechaconta.WebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace Fechaconta.WebApp.Controllers
{
    public class PedidoController : ApiController
    {
        public HttpResponseMessage Post(Pedido pedido)
        {
            var comanda = ComandaRepositorio.BuscarPor(pedido.NumeroDaComanda);
            if(comanda == null)
            {
                comanda = new Comanda { Numero = pedido.NumeroDaComanda };
                ComandaRepositorio.Adicionar(comanda);
            }
            comanda.Adicionar(pedido);

            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}