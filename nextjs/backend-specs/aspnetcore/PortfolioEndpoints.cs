// ============================================================================
// ASP.NET Core 9 (C# 13) - 25-Year Clean Architecture Minimal API Contract
// ============================================================================

using MediatR;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

// Register MediatR CQRS Pipeline & Services
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(Program).Assembly));
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:3000", "http://localhost:3001")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();
app.UseCors();

// API Group adhering strictly to Frontend Ports
var v1 = app.MapGroup("/api/v1");

// 1. Profile Query Endpoint
v1.MapGet("/profile", async (ISender mediator) =>
{
    var profile = await mediator.Send(new GetProfileQuery());
    return Results.Ok(profile);
});

// 2. Skills Query Endpoint
v1.MapGet("/skills", async (string? category, ISender mediator) =>
{
    var skills = await mediator.Send(new GetSkillsQuery(category));
    return Results.Ok(skills);
});

// 3. Projects Query Endpoint
v1.MapGet("/projects", async (string? category, ISender mediator) =>
{
    var projects = await mediator.Send(new GetProjectsQuery(category));
    return Results.Ok(projects);
});

// 4. Contact Command Endpoint
v1.MapPost("/contact", async ([FromBody] SubmitContactCommand command, ISender mediator) =>
{
    var result = await mediator.Send(command);
    return Results.Ok(result);
});

app.Run();

// ========================== CQRS Contracts ==========================
public record GetProfileQuery() : IRequest<ProfileDto>;
public record GetSkillsQuery(string? Category) : IRequest<IEnumerable<SkillDto>>;
public record GetProjectsQuery(string? Category) : IRequest<IEnumerable<ProjectDto>>;
public record SubmitContactCommand(string Name, string Email, string Message) : IRequest<ContactResultDto>;

public record ProfileDto(string Id, string Name, string Title, string BioSummary);
public record SkillDto(string Id, string Name, string Category, int Proficiency);
public record ProjectDto(string Id, string Title, string Summary, string[] Tags);
public record ContactResultDto(bool Success, string MessageId, string Timestamp);
