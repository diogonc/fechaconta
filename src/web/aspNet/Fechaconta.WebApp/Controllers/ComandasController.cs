using Fechaconta.WebApp.Models;
using System.Web.Mvc;

namespace Fechaconta.WebApp.Controllers
{
    public class ComandasController : Controller
    {
        public ActionResult Index()
        {
            var comandas = ComandaRepositorio.BuscarTodas();
            return View(comandas);
        }
    }
}