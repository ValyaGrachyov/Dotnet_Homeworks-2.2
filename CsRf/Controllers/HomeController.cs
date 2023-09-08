using CsRf.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace CsRf.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Index()
        {
            Response.Cookies.Append("UserName", "V");
            return View();
        }

        [HttpPost]
        public IActionResult Index([FromBody]string value)
        {
            if (Request.Cookies["UserName"] == "V")
            {
                return Ok($"{value} прошло во внутрь");            
            }
            return BadRequest("value не прошло во внутрь");
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}