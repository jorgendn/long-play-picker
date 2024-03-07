using System.Security.Claims;
using LPP;
using LPP.Users;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<LppDbContext>(options => options.UseInMemoryDatabase("LppDb"));

builder.Services.AddCors(options => options.AddPolicy("AllowAnything", builder =>
{
    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
}));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAuthorization();

builder.Services.AddIdentityApiEndpoints<LppUser>().AddEntityFrameworkStores<LppDbContext>();

var app = builder.Build();

app.UseCors("AllowAnything");

app.MapIdentityApi<LppUser>();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapPost("/registerCustom", async (UserManager<LppUser> userManager, [FromBody] RegisterUser registerInfo) => 
{
    LppUser user = new()
    {
        DisplayName = registerInfo.DisplayName,
        Email = registerInfo.Email,
        UserName = registerInfo.Email
    };

    var result = await userManager.CreateAsync(user, registerInfo.Password);

    return result.Succeeded ? Results.Ok() : Results.BadRequest();
})
.WithOpenApi();

app.MapGet("/currentUser", async (UserManager < LppUser > userManager, ClaimsPrincipal principal) =>
{
    var userName = principal.Identity?.Name;

    if (userName == null) return Results.NotFound();

    var user = await userManager.FindByNameAsync(userName);

    return Results.Ok(user);
})
.WithOpenApi()
.RequireAuthorization();

app.MapPost("/logout", async (SignInManager<LppUser> signInManager, [FromBody] object? empty) =>
{
    if (empty == null) return Results.Unauthorized();

    await signInManager.SignOutAsync();
    return Results.Ok();

})
.WithOpenApi()
.RequireAuthorization();

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast")
.WithOpenApi()
.RequireAuthorization();

app.Run();

internal record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
