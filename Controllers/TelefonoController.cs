using FOSMAR.CORE.Extensions;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.PER.WEB.Filters;
using FOSMAR.Negocios.Modelos.Persona.Telefono;
using FOSMAR.Negocios.Persona;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace FOSMAR.PER.WEB.Controllers
{
    [Route("Telefono")]
    [Authorize]
    [ServiceFilter(typeof(AuthLogin))]
    public class TelefonoController : Controller
    {
        private readonly ITelefonoProxy _telefonoProxy;
        private readonly IDataTableService _dataTableService;

        public TelefonoController(ITelefonoProxy telefonoProxy, IDataTableService datatableservice)
        {
            _telefonoProxy = telefonoProxy;
            _dataTableService = datatableservice;
        }
        public IActionResult Index()
        {
            return View();
        }


        [HttpPost("insertarTelefono")]
        public async Task<IActionResult> insertarTelefono(TelefonoDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var ret = await _telefonoProxy.Insertar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
        [HttpGet("listarTelefono")]
        public async Task<IActionResult> listarTelefono(string idprsna, string id)
        {
            var parametrosDT = _dataTableService.GetSentParameters();
            var retorno = await _telefonoProxy.ObtenerDataTable(parametrosDT, idprsna, id);
            return Ok(retorno); ;
        }
        [HttpGet("listar")]
        public async Task<IActionResult> listar(int idprsna, string id)
        {
            var parametrosDT = _dataTableService.GetSentParameters();
            var retorno = await _telefonoProxy.Listar(idprsna, id);
            return Ok(retorno); ;
        }
        [HttpGet("ObtenerTelefono")]
        public async Task<IActionResult> ObtenerTelefono(string idprsna, string id)
        {
            var retorno = await _telefonoProxy.Obtener(idprsna, id);
            return Ok(retorno); ;
        }
        [HttpPost("actualizarTelefono")]
        public async Task<IActionResult> actualizarTelefono(TelefonoDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var ret = await _telefonoProxy.Actualizar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
        [HttpPost("eliminarTelefono")]
        public async Task<IActionResult> eliminarTelefono(string idprsna, int id)
        {
            TelefonoDto entidad = new TelefonoDto();
            entidad.ID = id;
            entidad.GDESTDO = "I";
            entidad.UEDCN = User.GetUserCode();
            var ret = await _telefonoProxy.Eliminar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
    }
}
