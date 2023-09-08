using JWTProject.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JWTProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize(Roles = "admin")]
    public class AdminController : Controller
    {        

        
        [HttpGet]
        public string Get()
        {
            return "You are admin";
        }        
    }

    
}
