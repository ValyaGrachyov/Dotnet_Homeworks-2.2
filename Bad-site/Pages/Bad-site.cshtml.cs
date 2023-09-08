using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CsRfGood.Pages
{
    public class Bad_siteModel : PageModel
    {
        public void OnGet()
        {
            if(Request.Cookies.ContainsKey("Islogin"))
            {
                Console.WriteLine(Request.Cookies["Islogin"]);
            }

            var key = Request.Cookies["Key"];
            
        }
    }
}
