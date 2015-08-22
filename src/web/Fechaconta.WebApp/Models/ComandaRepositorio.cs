using System.Collections.Generic;
using System.Linq;

namespace Fechaconta.WebApp.Models
{
    public static class ComandaRepositorio
    {
        private static readonly List<Comanda> Comandas = new List<Comanda>();

        public static Comanda BuscarPor(string numeroDaComanda)
        {
            return Comandas.FirstOrDefault(c => c.Numero == numeroDaComanda);
        }

        public static IEnumerable<Comanda> BuscarTodas()
        {
            return Comandas.OrderBy(c => c.Status);
        }

        public static void Adicionar(Comanda comanda)
        {
            Comandas.Add(comanda);
        }
    }
}