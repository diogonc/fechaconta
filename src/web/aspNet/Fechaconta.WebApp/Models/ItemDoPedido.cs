namespace Fechaconta.WebApp.Models
{
    public class ItemDoPedido
    {
        public Produto Produto { get; set; }
        public int Quantidade { get; set; }
        public double ValorTotal { get; set; }
    }
}