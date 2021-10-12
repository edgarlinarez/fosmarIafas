using FOSMAR.CORE.Extensions;
using FOSMAR.PER.WEB.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text.Json;
using System.Threading.Tasks;

namespace FOSMAR.PER.WEB.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(
            ILogger<HomeController> logger
            )
        {
            _logger = logger;
        }

        public async Task<IActionResult> Index()
        {
            var sucursales = JsonSerializer.Deserialize<List<SucursalUsuarioInfo>>(User.ObtenerSucursales());
            var mostrarModalSucursales = false;
            if (sucursales.Count >1)
            {
                mostrarModalSucursales = true;
            }

            ViewBag.MostrarModalSucursales = mostrarModalSucursales;
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
