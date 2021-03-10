using System.ComponentModel.DataAnnotations;

namespace ComputerStore.Models
{
    public class ComputerDetails
    {
        [Key]
        public int ComputerId { get; set; }
        public string ComputerName { get; set; }
        public double ComputerCost { get; set; }
    }
}
