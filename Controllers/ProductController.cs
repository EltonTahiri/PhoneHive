using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using PhoneHive.Data;
using PhoneHive.DTOs;
using PhoneHive.Models;


namespace PhoneHive.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly DataContext _context;

        public ProductController(DataContext context)
        {
            _context = context;
        }
        

        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetProducts()
        {
            var products = _context.Products.ToList();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public ActionResult<Product> GetProduct(int id)
        {
            var product = _context.Products.Find(id);
            if (product == null)
            {
                return NotFound("Product not found. Please try later!");
            }
            return Ok(product);
        }

        [HttpPost]
        public ActionResult<Product> CreateProduct(CreateProductDTO productDto)
        {
            var product = new Product
            {
                Name = productDto.Name,
                Price = productDto.Price,
                Battery = productDto.Battery,
                Ram = productDto.Ram,
                Memory = productDto.Memory,
                Camera = productDto.Camera, 
                Processor = productDto.Processor,   
                Display = productDto.Display,
            };

            _context.Products.Add(product);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            var product = _context.Products.Find(id);
            if (product == null)
            {
                return NotFound("The product you're looking for doesn't exist!");
            }

            _context.Products.Remove(product);
            _context.SaveChanges();

            return NoContent();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateProduct(int id, UpdateProductDTO updateProductDto)
        {
            var product = _context.Products.Find(id);
            if (product == null)
            {
                return NotFound("Product wasn't found!");
            }

            product.Name = updateProductDto.Name;
            product.Price = updateProductDto.Price;
            product.Battery = updateProductDto.Battery;
            product.Ram = updateProductDto.Ram;
            product.Memory = updateProductDto.Memory;
            product.Camera = updateProductDto.Camera;
            product.Processor = updateProductDto.Processor;
            product.Display = updateProductDto.Display;

            _context.SaveChanges();
            // The put still needs work
            return NoContent();
        }

    }
}
