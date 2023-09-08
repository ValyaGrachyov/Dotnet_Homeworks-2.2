using IdentityExapmle.DbContext;
using IdentityExapmle.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddTransient<IEmailService, EmailService>();

builder.Services.AddDbContext<MyDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("ConnectionString")));

builder.Services.AddIdentity<IdentityUser, IdentityRole>
    (options =>
    {
        options.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyz";
        options.SignIn.RequireConfirmedAccount = true;
        options.Password.RequiredUniqueChars = 10;
        options.Password.RequireNonAlphanumeric = true;
        options.Password.RequireDigit = true;
        options.Password.RequiredLength = 6;
        options.Password.RequireNonAlphanumeric = false;
        options.Password.RequireUppercase = false;
        options.Password.RequireLowercase = false;
    })
.AddEntityFrameworkStores<MyDbContext>()
.AddTokenProvider<DataProtectorTokenProvider<IdentityUser>>(TokenOptions.DefaultProvider);

var app = builder.Build();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.MapGet("/", () => "Hello World!");

app.Run();