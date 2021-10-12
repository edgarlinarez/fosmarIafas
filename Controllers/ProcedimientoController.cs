using FOSMAR.CORE.Extensions;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.Negocios.Modelos.Aseguramiento.Procedimientos;
using FOSMAR.Negocios.Aseguramiento;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using FOSMAR.PER.WEB.Filters;

namespace FOSMAR.PER.WEB.Controllers
{
    [Route("Procedimiento")]
    [Authorize]
    [ServiceFilter(typeof(AuthLogin))]
    public class ProcedimientoController : Controller
    {
        private readonly IProcedimientosProxy _procedimientoProxy;
        private readonly IDataTableService _dataTableService;

        public ProcedimientoController(IDataTableService dataTableService, IProcedimientosProxy procedimientosProxy)
        {
            _dataTableService = dataTableService;
            _procedimientoProxy = procedimientosProxy;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("listarProcedimiento")]
        public async Task<IActionResult> listarProcedimiento(string gdttrfro,string idprvdr)
        {
            var parametrosDT = _dataTableService.GetSentParameters();
            var retorno = await _procedimientoProxy.ObtenerDataTable(parametrosDT , gdttrfro, idprvdr);
            return Ok(retorno);
        }
        [HttpGet("listar")]
        public async Task<IActionResult> listar ()
        {
            var retorno = await _procedimientoProxy.Listar();
            return Ok(retorno);
        }

        [HttpPost("EliminarProcedimiento")]
        public async Task<IActionResult> eliminarProcedimiento(int id)
        {
            ProcedimientosDto eliminarProcedimiento = new ProcedimientosDto();
            eliminarProcedimiento.ID = id;
            eliminarProcedimiento.UEDCN = User.GetUserCode();

            var ret = await _procedimientoProxy.Eliminar(eliminarProcedimiento);

            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }

        [HttpPost("insertarProcedimiento")]
        public async Task<IActionResult> insertarProcedimiento(ProcedimientosDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();

            var ret = await _procedimientoProxy.Insertar(entidad);

            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok(ret.CodEstado);
        }

        [HttpPost("obtenerProcedimiento")]
        public async Task<IActionResult> obtenerProcedimiento(int id)
        {
            var retorno = await _procedimientoProxy.Obtener(id);
            return Ok(retorno);
        }

        [HttpPost("actualizarProcedimiento")]
        public async Task<IActionResult> actualizarProcedimiento(ProcedimientosDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var ret = await _procedimientoProxy.Actualizar(entidad);

            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();

        }
    }
}
