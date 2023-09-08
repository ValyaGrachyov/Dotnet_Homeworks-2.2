using JWTProject.Data;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace JWTProject
{
    public class JWTTokenGenerator
    {
        private readonly IConfiguration _configuration;

        public JWTTokenGenerator(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string? GenerateJwttoken(string name, string password)
        {
            var foundUser = UserMocks.Users.FirstOrDefault(x => x.Password == password && x.Name == name);
            if (foundUser == null)
                return null;


            var now = DateTime.UtcNow;

            var jwt = new JwtSecurityToken(
                issuer: _configuration["JWTTokenSettings:Issuer"],
                audience: _configuration["JWTTokenSettings:Audience"],
                notBefore: now,
                claims: GetIdentity(foundUser.Name, foundUser.Role).Claims,
                expires: now.Add(TimeSpan.FromMinutes(1)),
                signingCredentials: new SigningCredentials(new SymmetricSecurityKey(
                        Encoding.ASCII.GetBytes(_configuration["JWTTokenSettings:Key"])),
                        SecurityAlgorithms.HmacSha256));
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return encodedJwt;
        }

        private ClaimsIdentity GetIdentity(string username, string role)
        {
            var claims = new List<Claim>()
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, username),
                new Claim(ClaimsIdentity.DefaultRoleClaimType, role),
            };
            ClaimsIdentity claimsIdentity =
                new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
            return claimsIdentity;
        }
    }
}
