using FOSMAR.CORE.Extensions;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.Negocios.Modelos.Aseguramiento.Tarifario;
using FOSMAR.Negocios.Aseguramiento;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using FOSMAR.PER.WEB.Filters;
using System;
using System.Collections.Generic;
using System.Linq;

namespace FOSMAR.PER.WEB.Controllers
{
    [Route("Tarifario")]
    [Authorize]
    [ServiceFilter(typeof(AuthLogin))]
    public class TarifarioController : Controller
    {
        private readonly ITarifarioProxy _tarifarioProxy;
        private readonly IDataTableService _dataTableService;

        public TarifarioController(IDataTableService dataTableService, ITarifarioProxy tarifarioProxy)
        {
            _dataTableService = dataTableService;
            _tarifarioProxy = tarifarioProxy;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("listarTarifario")]
        public async Task<IActionResult> ListarTarifario()
        {
            var parametrosDT = _dataTableService.GetSentParameters();
            var retorno = await _tarifarioProxy.ObtenerDataTable(parametrosDT);
            return Ok(retorno);
        }
        [HttpGet("listar")]
        public async Task<IActionResult> Listar()
        {
            var retorno = await _tarifarioProxy.Listar();
            return Ok(retorno);
        }

        [HttpPost("EliminarTarifario")]
        public async Task<IActionResult> EliminarTarifario(int id)
        {
            TarifarioDto eliminarTarifario = new TarifarioDto();
            eliminarTarifario.ID = id;
            eliminarTarifario.UEDCN = User.GetUserCode();

            var ret = await _tarifarioProxy.Eliminar(eliminarTarifario);

            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }

        [HttpPost("insertarTarifario")]
        public async Task<IActionResult> InsertarTarifario(TarifarioDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();

            var ret = await _tarifarioProxy.Insertar(entidad);

            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }

        [HttpPost("obtenerTarifario")]
        public async Task<IActionResult> ObtenerTarifario(int id)
        {
            var retorno = await _tarifarioProxy.Obtener(id);
            return Ok(retorno);
        }

        [HttpPost("actualizarTarifario")]
        public async Task<IActionResult> ActualizarTarifario(TarifarioDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var ret = await _tarifarioProxy.Actualizar(entidad);

            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();

        }
    }
}
