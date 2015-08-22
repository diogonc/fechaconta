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
            var comanda = ComandaRepositorio.BuscarPor(numeroDaComanda);
            if (comanda == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);

            return comanda;
        }

        public HttpResponseMessage Post(int numeroDaMesa)
        {
            var numeroDaComanda = Guid.NewGuid().ToString();
            var comanda = new Comanda { Numero = numeroDaComanda, NumeroDaMesa = numeroDaMesa };
            ComandaRepositorio.Adicionar(comanda);

            return new HttpResponseMessage(HttpStatusCode.Created) { Content = new StringContent(numeroDaComanda) };
        }

        [Route("api/Comanda/{numeroDaComanda}/fechar")]
        public HttpResponseMessage Post(string numeroDaComanda)
        {
            var comanda = ComandaRepositorio.BuscarPor(numeroDaComanda);
            if (comanda == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);

            comanda.Fechar();

            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}