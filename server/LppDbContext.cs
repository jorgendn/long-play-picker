using LPP.Users;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace LPP;

public class LppDbContext(DbContextOptions<LppDbContext> options) : IdentityDbContext<LppUser>(options);
