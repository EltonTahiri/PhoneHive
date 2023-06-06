using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace PhoneHive.DTOs

{
    public class CreateProductDTO
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Battery { get; set; }

        public string Ram { get; set; }

        public string Memory { get; set; }

        public string Camera { get; set; }

        public string Processor { get; set; }

        public string Display { get; set; }

    }
    
    public class UpdateProductDTO
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Battery { get; set; }

        public string Ram { get; set; }

        public string Memory { get; set; }

        public string Camera { get; set; }

        public string Processor { get; set; }

        public string Display { get; set; }
    }
}
