using LPP.Users;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace LPP;

public class LppDbContext(DbContextOptions<LppDbContext> options) : IdentityDbContext<LppUser>(options)
{
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<LppUser>(b =>
        {
            b.Property(u => u.DisplayName).IsRequired().HasMaxLength(100);
        });
    }
}
