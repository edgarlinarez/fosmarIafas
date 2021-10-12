using FOSMAR.CORE.Extensions;
using FOSMAR.PER.WEB.Models;
using FOSMAR.Negocios.Modelos;
using FOSMAR.Negocios.General.Seguridad;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Security.Claims;
using System.Text.Json;
using System.Threading.Tasks;

namespace FOSMAR.PER.WEB.Controllers
{
    public class GeneralController : Controller
    {
        private readonly IGrupoDatoProxy _grupoDatoProxy;
        private readonly IUbigeoProxy _ubigeoProxy;
        private readonly IParametroProxy _parametroProxy;
        private readonly IMemoryCache _cache;
        public GeneralController(
            IGrupoDatoProxy grupoDatoProxy,
            IUbigeoProxy ubigeoProxy,
            IParametroProxy parametroProxy,
            IMemoryCache cache
            )
        {
            _grupoDatoProxy = grupoDatoProxy;
            _ubigeoProxy = ubigeoProxy;
            _parametroProxy = parametroProxy;
            _cache = cache;
        }
        [HttpGet("obtener-datos-usuario-logueado")]
        public IActionResult ObtenerLogueado()
        {
            var audit = new AuditoriaDto();
            audit.UEDCN = User.GetUserCode();
            audit.UCRCN = User.GetUserCode();
            audit.FCRCN = DateTime.Now;
            audit.FEDCN = DateTime.Now;
            audit.FESTDO = DateTime.Now;
            return Ok(audit);
        }
        [HttpGet("obtener-sucursales-usuario-logueado")]
        public IActionResult ObtenerSucursalesLogueado()
        {
            var suc = User?.ObtenerSucursales() ?? "";
            var sucursales = string.IsNullOrEmpty(suc) ? new List<SucursalUsuarioInfo>() : JsonSerializer.Deserialize<List<SucursalUsuarioInfo>>(suc);
            return Ok(sucursales);
        }
        [HttpPost("guardar-sucursal-seleccionada")]
        public IActionResult GuardarSucursal(string id)
        {
            // Set cache options.
            var cacheEntryOptions = new MemoryCacheEntryOptions()
                // Keep in cache for this time, reset time if accessed.
                .SetSlidingExpiration(TimeSpan.FromDays(1));

            // Save data in cache.
            _cache.Set("ScrslSelec", id, cacheEntryOptions);
            return Ok();
        }
        [HttpGet("agrupadatos")]
        public JsonResult AgrupaDatos(string gddescripcion)
        {
            //(int idgrupo)
            var lista = new List<object> {
                new { idGrupo = 1, nombre = gddescripcion + " 1", vlr1 = "1", idparametro = "" },
                new { idGrupo = 2, nombre = gddescripcion + " 2", vlr1 = "2", idparametro = "" },
                new { idGrupo = 3, nombre = gddescripcion + " 3", vlr1 = "3", idparametro = "" },
                new { idGrupo = 4, nombre = gddescripcion + " 4", vlr1 = "4", idparametro = "" },
                new { idGrupo = 5, nombre = gddescripcion + " 5", vlr1 = "5", idparametro = "" }
            };
            return Json(lista);
        }

        [HttpGet("obtener-departamentos")]
        public async Task<IActionResult> ObtenerDepartamentos(string cps)
        {
            var result = await _ubigeoProxy.ObtenerDepartamentos(cps);
            return Ok(result);
        }
        [HttpGet("obtener-provincias")]
        public async Task<IActionResult> ObtenerProvincias(string codigoDpto, string cps)
        {
            var result = await _ubigeoProxy.ObtenerProvincias(codigoDpto, cps);
            return Ok(result);
        }
        [HttpGet("obtener-distritos")]
        public async Task<IActionResult> ObtenerDistritos(string codigoProvincia, string cps)
        {
            var result = await _ubigeoProxy.ObtenerDistrito(codigoProvincia, cps);
            return Ok(result);
        }

        [HttpGet("obtenercatalogoGD")]
        public async Task<IActionResult> ObtenerCatalogo()
        {
            var result = await _grupoDatoProxy.ObtenerCatalogos();
            return Ok(result);
        }

        [HttpGet("obtener-paises")]
        public async Task<IActionResult> ObtenerPaises()
        {
            var result = await _ubigeoProxy.ObtenerPaises();
            return Ok(result);
        }

        [HttpGet("obtener-parametro-por-abreviacion")]
        public async Task<IActionResult> ObtenerParametroPorAbreviacion(string aprmtro)
        {
            var retorno = await _parametroProxy.ObtenerParametroPorAbreviacion(aprmtro);
            return Ok(retorno); ;
        }
    }
}
