﻿using System.ComponentModel.DataAnnotations;

namespace LPP.Users;

public class RegisterUser
{
    [Required, MaxLength(100)]
    public required string DisplayName { get; set; }

    [Required]
    public required string Email { get; set; }

    [Required]
    public required string Password { get; set; }
}
