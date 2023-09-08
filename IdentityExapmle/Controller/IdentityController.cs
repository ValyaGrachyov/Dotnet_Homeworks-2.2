using IdentityExapmle.DTO;
using IdentityExapmle.Services;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;

namespace IdentityExapmle.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class IdentityController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly IEmailService _emailService;

        public IdentityController(IEmailService emailService, UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _emailService= emailService;
        }


        [HttpPost("auth")]
        public async Task<IActionResult> Auth([FromBody] UserDTO authdto)
        {
            var _user = await _userManager.FindByNameAsync(authdto.Name);

            if(_user != null) 
            {                
                return NotFound("Бла бла");
            }

            var user = new IdentityUser(authdto.Name);
            user.Email = authdto.Email;

            //string a = "<a href=\"http://localhost:5184/Identity/login\">Click</a>";
            //_emailService.SendEmailAsync("goust190703@gmail.com", "TEST", a);
            var result = await _userManager.CreateAsync(user);
            

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(user, isPersistent: false);
            }

            return  Ok("you are authorized");
        }

        [HttpGet("login")]
        public async Task<IActionResult> Login()
        {
            return Ok("You are autorize");
        }
    }
}
