using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PhoneHive.Models;
using PhoneHive.Data;
using System.Threading.Tasks;
using BCrypt.Net;
using PhoneHive.DTOs;
using Microsoft.EntityFrameworkCore;

namespace PhoneHive.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        private readonly DataContext _context;

        public RegisterController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Register(RegisterDTO registerDTO)
        {
            // Validates the registration data
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Checks if a user with the same email is already registered
            if (await _context.Users.AnyAsync(u => u.Email == registerDTO.Email))
            {
                ModelState.AddModelError("Email", "Email is already registered.");
                return BadRequest(ModelState);
            }

            // Creates a new user instance
            var user = new User
            {
                Username = registerDTO.Username,
                Email = registerDTO.Email,
                Name = registerDTO.Name,
                Surname = registerDTO.Surname,
                PhoneNumber = registerDTO.PhoneNumber,
                Role = "User"
            };

            // Hashes the user's password before storing it
            user.PasswordHash = HashPassword(registerDTO.Password);

            // Save the user to the database
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok("User has been successfully registered");
        }

        // Helper method to hash the password
        private static string HashPassword(string password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password);
        }
    }
}
