using Microsoft.AspNetCore.Mvc;
using System.Net;
using System;
using System.Text;
using System.Text.Json;
using System.Net.Http;

namespace CsRf.Controllers
{
    public class BadController : Controller
    {
        Uri uri = new Uri("https://localhost:7182");

        [HttpGet]
        public IActionResult Index()
        {
            

            return View();
        }

        [HttpPost]
        public async Task Index([FromForm]string value)
        {
            HttpClient client = new HttpClient();            
            CookieContainer cookies = new CookieContainer();

            var cook = Request.Cookies["UserName"];
            cookies.Add(uri, new Cookie("UserName", $"{cook}"));

            client.DefaultRequestHeaders.Add("cookie", cookies.GetCookieHeader(uri));
            var response = await client.PostAsync("https://localhost:7182", new StringContent(JsonSerializer.Serialize(value), null, "application/json"));
            Console.WriteLine(response.Content.ReadAsStringAsync().Result);
        }
    }
}
