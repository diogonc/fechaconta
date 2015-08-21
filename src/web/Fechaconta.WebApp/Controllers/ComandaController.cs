using Fechaconta.WebApp.Models;
using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Fechaconta.WebApp.Controllers
{
    public class ComandaController : ApiController
    {
        public Comanda Get(string numeroDaComanda)
        {
            return ComandaRepositorio.BuscarPor(numeroDaComanda);
        }

        public HttpResponseMessage Post(int numeroDaMesa)
        {
            var numeroDaComanda = Guid.NewGuid().ToString();
            var comanda = new Comanda { Numero = numeroDaComanda, NumeroDaMesa = numeroDaMesa };
            ComandaRepositorio.Adicionar(comanda);

            return new HttpResponseMessage(HttpStatusCode.Created) { Content = new StringContent(numeroDaComanda) };
        }
    }
}