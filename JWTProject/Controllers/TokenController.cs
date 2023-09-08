using JWTProject.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace JWTProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TokenController : Controller
    {
        private readonly IConfiguration _configuration;

        public TokenController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost("[action]")]
        public string CreateToken([FromBody] UserDTO userDto)
        {
            return new JWTTokenGenerator(_configuration).GenerateJwttoken(userDto.Name, userDto.Password);
        }   
    }
}
