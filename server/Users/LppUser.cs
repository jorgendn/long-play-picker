using Microsoft.AspNetCore.Identity;

namespace LPP.Users;

public class LppUser : IdentityUser
{
    public string DisplayName { get; set; } = string.Empty;
}
