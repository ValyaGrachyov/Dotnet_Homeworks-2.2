var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();


var app = builder.Build();

app.UseCors(x => x
        .AllowAnyMethod()
        .AllowAnyHeader()
        .SetIsOriginAllowed(origin => true) // allow any origin
        .AllowCredentials());


app.UseCors();

app.MapControllers();

app.Run();
