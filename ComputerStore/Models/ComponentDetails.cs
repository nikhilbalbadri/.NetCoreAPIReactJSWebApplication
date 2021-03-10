using System.ComponentModel.DataAnnotations;

namespace ComputerStore.Models
{
    public class ComponentDetails
    {
        [Key]
        public int ComponentId { get; set; }
        public string ComponentName { get; set; }
        public string ComponentCategory { get; set; }
        public double ComponentCost { get; set; }
    }
}
