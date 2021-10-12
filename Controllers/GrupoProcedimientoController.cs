using FOSMAR.CORE.Extensions;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.Negocios.Modelos.Aseguramiento.GrupoProcedimiento;
using FOSMAR.Negocios.Aseguramiento;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using FOSMAR.PER.WEB.Filters;
using System.Linq;
using System.Threading.Tasks;

namespace FOSMAR.PER.WEB.Controllers
{
    [Route("GrupoProcedimiento")]
    [Authorize]
    [ServiceFilter(typeof(AuthLogin))]
    public class GrupoProcedimientoController : Controller
    {
        private readonly IGrupoProcedimientoProxy _GrupoProcedimientoProxy;
        private readonly IDataTableService _dataTableService;
        public GrupoProcedimientoController(IGrupoProcedimientoProxy grupoProcedimientoServ, IDataTableService dataTableService)
        {
            _GrupoProcedimientoProxy = grupoProcedimientoServ;
            _dataTableService = dataTableService;
        }
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet("ListarGrupoProcedimiento")]
        public async Task<IActionResult> ListarGrupoProcedimiento(string gdestdo)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _GrupoProcedimientoProxy.ObtenerDataTable(parameters, gdestdo);
            return Ok(retorno); ;
        }

        [HttpPost("ObtenerGrupoProcedimiento")]
        public async Task<IActionResult> ObtenerGrupoProcedimiento(int id)
        {
            var retorno = await _GrupoProcedimientoProxy.Obtener(id);
            return Ok(retorno); ;
        }
        [HttpPost("InsertarGrupoProcedimiento")]
        public async Task<IActionResult> InsertarGrupoProcedimiento(GrupoProcedimientoDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _GrupoProcedimientoProxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("ActualizarGrupoProcedimiento")]
        public async Task<IActionResult> ActualizarGrupoProcedimiento(GrupoProcedimientoDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _GrupoProcedimientoProxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("EliminarGrupoProcedimiento")]
        public async Task<IActionResult> EliminarGrupoProcedimiento(int id)
        {
            var entidad = new GrupoProcedimientoDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _GrupoProcedimientoProxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
    }
}
