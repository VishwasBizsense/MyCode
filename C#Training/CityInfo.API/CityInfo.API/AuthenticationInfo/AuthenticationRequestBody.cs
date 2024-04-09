using System;

namespace CityInfo.API.AuthenticationInfo
{
    public class AuthenticationRequestBody
    {
        public string? UserName { get; set; }
        public string? Password { get; set; }
    }
}

