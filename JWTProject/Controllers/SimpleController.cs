using JWTProject.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JWTProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize(Roles ="simple")]
    public class SimpleController : Controller
    {

        [HttpGet]
        public string Get()
        {
            return "You are Simple";
        }
    }
}
