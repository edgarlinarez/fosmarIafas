using FOSMAR.CORE.Extensions;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.Negocios.Modelos.Persona.Direccion;
using FOSMAR.Negocios.Persona;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using FOSMAR.PER.WEB.Filters;
using System.Threading.Tasks;

namespace FOSMAR.PER.WEB.Controllers
{
    [Route("Direccion")]
    [Authorize]
    [ServiceFilter(typeof(AuthLogin))]
    public class DireccionController : Controller
    {
        private readonly IDireccionProxy _direccionProxy;
        private readonly IDataTableService _dataTableService;

        public DireccionController(IDireccionProxy direccionProxy, IDataTableService datatableservice)
        {
            _direccionProxy = direccionProxy;
            _dataTableService = datatableservice;
        }


        public IActionResult Index()
        {
            return View();
        }



        [HttpPost("insertarDireccion")]
        public async Task<IActionResult> insertarDireccion(DireccionDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var ret = await _direccionProxy.Insertar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
        [HttpGet("listarDireccion")]
        public async Task<IActionResult> listarDireccion(string idprsna, string id)
        {
            var parametrosDT = _dataTableService.GetSentParameters();
            var retorno = await _direccionProxy.ObtenerDataTable(parametrosDT, idprsna, id);
            return Ok(retorno); ;
        }
        [HttpGet("listar")]
        public async Task<IActionResult> listar(string idprsna, string id)
        {
            var retorno = await _direccionProxy.Listar(idprsna, id);
             return Ok(retorno); ;
        }
        [HttpGet("obtenerDireccion")]
        public async Task<IActionResult> ObtenerDireccion(string idprsna, string id)
        {
            var retorno = await _direccionProxy.Obtener(idprsna, id);
            return Ok(retorno); ;
        }
        [HttpPost("actualizarDireccion")]
        public async Task<IActionResult> actualizarDireccion(DireccionDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var ret = await _direccionProxy.Actualizar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
        [HttpPost("eliminarDireccion")]
        public async Task<IActionResult> eliminarDireccion(string idprsna, int id)
        {
            DireccionDto entidad = new DireccionDto();
            entidad.ID = id;
            entidad.GDESTDO = "I";
            entidad.UEDCN = User.GetUserCode();
            var ret = await _direccionProxy.Eliminar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
    }
}
