using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace LPP;

public class LppDbContext(DbContextOptions<LppDbContext> options) : IdentityDbContext<IdentityUser>(options);
