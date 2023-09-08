using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace OAuth.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : Controller
    {
        private readonly string client_id = "585964779299-rfqn24tr6ihod2jvnk1fql04tvdf75bj.apps.googleusercontent.com";
        private readonly string client_secret = "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";
        private readonly string redirect_uri = "http://localhost:3000/afterauth";
        private readonly string token_uri = "https://oauth2.googleapis.com/token";
        private readonly string grant_type = "authorization_code";

    


        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] string code)
        {

            var oauth = new OAuthAccessTokenDto
            {
                GrantType= grant_type,
                RedirectUri= redirect_uri,
                Code = code,
                ClientId = client_id,
                ClientSecret = client_secret
            };

            HttpClient client = new HttpClient();
            client.DefaultRequestHeaders.Add("Accept", "application/json");
            var resultToken = await client.PostAsync(token_uri,
                new StringContent(JsonSerializer.Serialize(oauth), null, "application/json"));
            var resultTokenString = await resultToken.Content.ReadAsStringAsync();
            Console.WriteLine(resultTokenString);
            return Ok(resultTokenString);
        }
    }

    public class OAuthAccessTokenDto
    {
        [JsonPropertyName("redirect_uri")]
        public string RedirectUri { get; set; }

        [JsonPropertyName("grant_type")]
        public string GrantType {get; set; }

        [JsonPropertyName("client_id")]
        public string ClientId { get; set; }

        [JsonPropertyName("client_secret")]
        public string ClientSecret { get; set; }

        [JsonPropertyName("code")]
        public string Code { get; set; }
    }

}
