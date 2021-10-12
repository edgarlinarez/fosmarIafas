using FOSMAR.CORE.Extensions;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.Negocios.Modelos.Aseguramiento.GrupoServicio;
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
    [Route("GrupoServicio")]
    [Authorize]
    [ServiceFilter(typeof(AuthLogin))]
    public class GrupoServicioController : Controller
    {
        private readonly IGrupoServicioProxy _GrupoServicioProxy;
        private readonly IDataTableService _dataTableService;
        public GrupoServicioController(IGrupoServicioProxy grupoServicioServ, IDataTableService dataTableService)
        {
            _GrupoServicioProxy = grupoServicioServ;
            _dataTableService = dataTableService;
        }
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet("ListarGrupoServicio")]
        public async Task<IActionResult> ListarGrupoServicio()
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _GrupoServicioProxy.ObtenerDataTable(parameters);
            return Ok(retorno); ;
        }

        [HttpPost("ObtenerGrupoServicio")]
        public async Task<IActionResult> ObtenerGrupoServicio(int id)
        {
            var retorno = await _GrupoServicioProxy.Obtener(id);
            return Ok(retorno); ;
        }
        [HttpPost("InsertarGrupoServicio")]
        public async Task<IActionResult> InsertarGrupoServicio(GrupoServicioDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _GrupoServicioProxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("ActualizarGrupoServicio")]
        public async Task<IActionResult> ActualizarGrupoServicio(GrupoServicioDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _GrupoServicioProxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("EliminarGrupoServicio")]
        public async Task<IActionResult> EliminarGrupoServicio(int id)
        {
            var entidad = new GrupoServicioDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _GrupoServicioProxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
    }
}
