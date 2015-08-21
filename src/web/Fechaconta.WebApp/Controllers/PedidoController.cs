using Fechaconta.WebApp.Models;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Fechaconta.WebApp.Controllers
{
    public class PedidoController : ApiController
    {
        public HttpResponseMessage Post(Pedido pedido)
        {
            var comanda = ComandaRepositorio.BuscarPor(pedido.NumeroDaComanda);
            if (comanda == null)
            {
                comanda = new Comanda { Numero = pedido.NumeroDaComanda, NumeroDaMesa = pedido.NumeroDaMesa };
                ComandaRepositorio.Adicionar(comanda);
            }
            comanda.Adicionar(pedido);

            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}