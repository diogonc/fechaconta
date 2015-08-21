namespace Fechaconta.WebApp.Models
{
    public class ItemDoPedido
    {
        public Item Item { get; set; }
        public int Quantidade { get; set; }

        public double Valor 
        {
            get { return Item.Valor * Quantidade; }
        }
    }
}