using FOSMAR.CORE.Extensions;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.Negocios.Modelos.Aseguramiento.SolicitudSuscripcion;
using FOSMAR.Negocios.Aseguramiento;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using FOSMAR.PER.WEB.Filters;

namespace FOSMAR.PER.WEB.Controllers
{
    [Route("solicitudsuscripcion")]
    [Authorize]
    //[ServiceFilter(typeof(AuthLogin))]
    public class SolicitudSuscripcionController : Controller
    {

        private readonly ISolicitudSuscripcionProxy _solicitudsuscripcionProxy;

        private readonly IDataTableService _dataTableService;

        public SolicitudSuscripcionController(ISolicitudSuscripcionProxy solicitudsuscripcionProxy, IDataTableService datatableservice)
        {
            _solicitudsuscripcionProxy = solicitudsuscripcionProxy;
            _dataTableService = datatableservice;
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("agregar")]
        [HttpGet("editar/{id}")]
        public IActionResult AddSolicitud(int? id = 0)
        {
            return View(id);
        }

        [HttpPost("insertarSolicitudSuscripcion")]
        public async Task<IActionResult> insertarSolicitudSuscripcion(SolicitudSuscripcionDto entidad)
        {

            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var ret = await _solicitudsuscripcionProxy.Insertar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }

        [HttpGet("listarSolicitudSuscripcion")]
        public async Task<IActionResult> listarSolicitudSuscripcion(int idprsna, string id)
        {
            var parametrosDT = _dataTableService.GetSentParameters();
            var retorno = await _solicitudsuscripcionProxy.ObtenerDataTable(parametrosDT, idprsna, id);
            return Ok(retorno);
        }
        [HttpGet("listar")]
        public async Task<IActionResult> listar(int idprsna, int id)
        {
            var retorno = await _solicitudsuscripcionProxy.Listar(idprsna, id);
            return Ok(retorno);
        }
        [HttpGet("obtenerSolicitudSuscripcion")]
        public async Task<IActionResult> obtenerSolicitudSuscripcion(string idprsna, string id)
        {
            var retorno = await _solicitudsuscripcionProxy.Obtener(idprsna, id);
            return Ok(retorno);
        }
        [HttpPost("actualizarSolicitudSuscripcion")]
        public async Task<IActionResult> actualizarSolicitudSuscripcion(SolicitudSuscripcionDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var ret = await _solicitudsuscripcionProxy.Actualizar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
        [HttpPost("eliminarSolicitudSuscripcion")]
        public async Task<IActionResult> eliminarSolicitudSuscripcion(string idprsna, int id)
        {
            var entidad = new SolicitudSuscripcionDto();
            entidad.UEDCN = User.GetUserCode();
            entidad.ID = id;
            var ret = await _solicitudsuscripcionProxy.Eliminar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
    }
}
