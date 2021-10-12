using FOSMAR.CORE.Extensions;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.Negocios.Modelos.Aseguramiento.GrupoBeneficio;
using FOSMAR.Negocios.Aseguramiento;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using FOSMAR.PER.WEB.Filters;
using System.Threading.Tasks;

namespace FOSMAR.PER.WEB.Controllers
{
    [Route("GrupoBeneficio")]
    [Authorize]
    [ServiceFilter(typeof(AuthLogin))]
    public class GrupoBeneficioController : Controller
    {
        private readonly IGrupoBeneficioProxy  _GrupoBeneficioProxy;
        private readonly IDataTableService _dataTableService;
        public GrupoBeneficioController(IGrupoBeneficioProxy grupoBeneficioServ, IDataTableService dataTableService)
        {
            _GrupoBeneficioProxy = grupoBeneficioServ;
            _dataTableService = dataTableService;
        }
        public IActionResult Index()
        {
            return View();
        }


        [HttpGet("ListarGrupoBeneficio")]
        public async Task<IActionResult> ListarGrupoBeneficio()
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _GrupoBeneficioProxy.ObtenerDataTable(parameters);
            return Ok(retorno); ;
        }
        
        [HttpPost("ObtenerGrupoBeneficio")]
        public async Task<IActionResult> ObtenerGrupoBeneficio(int id)
        {
            var retorno = await _GrupoBeneficioProxy.Obtener(id);
            return Ok(retorno); ;
        }
        [HttpPost("InsertarGrupoBeneficio")]
        public async Task<IActionResult> InsertarGrupoBeneficio(GrupoBeneficioDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _GrupoBeneficioProxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("ActualizarGrupoBeneficio")]
        public async Task<IActionResult> ActualizarGrupoBeneficio(GrupoBeneficioDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _GrupoBeneficioProxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("EliminarGrupoBeneficio")]
        public async Task<IActionResult> EliminarGrupoBeneficio(int id)
        {
            var entidad = new GrupoBeneficioDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _GrupoBeneficioProxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpGet("obtener-activas")]
        public async Task<IActionResult> ObtenerActivas()
        {
            var grupoBeneficio = await _GrupoBeneficioProxy.ObtenerActivas();
            return Ok(grupoBeneficio);
        }
    }
}
