using FOSMAR.CORE.Extensions;
using FOSMAR.PER.WEB.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text.Json;
using System.Threading.Tasks;

namespace FOSMAR.PER.WEB.Controllers
{
    [Route("[controller]")]
    public class LoginController : Controller
    {
        private readonly string _authenticationUrl;
        private readonly IMemoryCache _cache;
        public LoginController(IConfiguration configuration, IMemoryCache cache)
        {
            _authenticationUrl = configuration.GetValue<string>("AuthenticationUrl");
            _cache = cache;
        }

        [HttpGet("/acceso-denegado")]
        public IActionResult AccessDenied(string ReturnUrl = "/")
        {
            return View("AccessDenied", ReturnUrl);
        }

        [HttpGet("/no-encontrada")]
        public IActionResult NotFound(string ReturnUrl = "/")
        {
            return View("NotFound", ReturnUrl);
        }

        public IActionResult Login()
        {
            return Redirect(_authenticationUrl + $"?ReturnBaseUrl={this.Request.Scheme}://{this.Request.Host}/");
        }
        [HttpGet("/cambiar-contrasena")]
        public IActionResult CambioContrasena()
        {
            return Redirect(_authenticationUrl + $"CambioContrasena?UserName={User.GetUserCode()}&ReturnBaseUrl={this.Request.Scheme}://{this.Request.Host}/");
        }
        [HttpGet("/indice-modulos")]
        public IActionResult IndiceModulos()
        {
            return Redirect(_authenticationUrl + $"Conexion?at={User.GetUserAccessToken()}");
        }
        [HttpGet("connect")]
        public async Task<IActionResult> Connect(string access_token)
        {
            var token = access_token.Split('.');
            var base64Content = GetBase64Content(token);

            var user = JsonSerializer.Deserialize<AccessTokenUserInformation>(base64Content);
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.nameid),
                new Claim(ClaimTypes.Name, user.unique_name),
                new Claim(ClaimTypes.Surname, user.family_name),
                new Claim(ClaimTypes.Email, user.email),
                new Claim("access_token", access_token),
                new Claim("SCRSLES", user.SCRSLES??""),
                new Claim("PRFLS", user.PRFLS??""),
                new Claim("ScrslSelec", user.ScrslSelec??"")
            };
            // Look for cache key.
            var cacheEntry = "";
            if (!_cache.TryGetValue("ScrslSelec", out cacheEntry))
            {
                // Key not in cache, so get data.
                cacheEntry = user.ScrslSelec;

                // Set cache options.
                var cacheEntryOptions = new MemoryCacheEntryOptions()
                    // Keep in cache for this time, reset time if accessed.
                    .SetSlidingExpiration(TimeSpan.FromDays(1));

                // Save data in cache.
                _cache.Set("ScrslSelec", cacheEntry, cacheEntryOptions);
            }
            var claimsIdentity = new ClaimsIdentity(
                 claims, CookieAuthenticationDefaults.AuthenticationScheme);

            var authProperties = new AuthenticationProperties
            {
                IssuedUtc = DateTime.UtcNow.AddHours(10),
                IsPersistent=true,
                
            };

            await HttpContext.SignInAsync(
                 CookieAuthenticationDefaults.AuthenticationScheme,
                 new ClaimsPrincipal(claimsIdentity),
                 authProperties);

            return Redirect("/");
        }

        [HttpGet("logout")]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return Redirect(_authenticationUrl);
        }

        private static byte[] GetBase64Content(string[] token)
        {
            var bytes = new List<byte>();
            try
            {
                bytes = (Convert.FromBase64String($"{token[1]}")).ToList();
                return bytes.ToArray();
            }
            catch
            {
                try
                {
                    bytes = (Convert.FromBase64String($"{token[1]}=")).ToList();
                    return bytes.ToArray();
                }
                catch
                {
                    try
                    {
                        bytes = (Convert.FromBase64String($"{token[1]}==")).ToList();
                        return bytes.ToArray();
                    }
                    catch { }
                }
            }
            return null;
        }
    }
}
