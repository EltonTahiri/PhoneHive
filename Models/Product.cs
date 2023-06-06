
using System.ComponentModel.DataAnnotations;
namespace PhoneHive.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
        [Required]
        public decimal Price { get; set; }

        public string Battery { get; set; }
        
        public string Ram { get; set; }

        public string Memory { get; set; }

        public string Camera { get; set; }  

        public string Processor { get; set; }   

        public string Display { get; set; }

    }
}
