using FOSMAR.CORE.Extensions;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.Negocios.Modelos.Persona.Grado;
using FOSMAR.Negocios.Persona;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using FOSMAR.PER.WEB.Filters;
using System.Threading.Tasks;

namespace FOSMAR.PER.WEB.Controllers
{

    [Route("Grado")]
    [Authorize]
    [ServiceFilter(typeof(AuthLogin))]
    public class GradoController : Controller
    {
        private readonly IGradoProxy _gradoProxy;
        private readonly IDataTableService _dataTableServic;

        public GradoController(IGradoProxy gradoProxy, IDataTableService datatableservice)
        {
            _gradoProxy = gradoProxy;
            _dataTableServic = datatableservice;
        }


        public IActionResult Index()
        {
            return View();
        }
        [HttpPost("insertarGrado")]
        public async Task<IActionResult> insertarGrado(GradoDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var ret = await _gradoProxy.Insertar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }

        [HttpGet("listarGrado")]
        public async Task<IActionResult> listarGrado(string idprsna, string id)
        {
            var parametrosDT = _dataTableServic.GetSentParameters();
            var retorno = await _gradoProxy.ObtenerDataTable(parametrosDT, idprsna, id);
            return Ok(retorno);
        }
        [HttpGet("obtenerGrado")]
        public async Task<IActionResult> obtenerGrado(string idprsna, string id)
        {
            var retorno = await _gradoProxy.Obtener(idprsna, id);
            return Ok(retorno);
        }
        [HttpPost("actualizarGrado")]
        public async Task<IActionResult> actualizarGrado(GradoDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var ret = await _gradoProxy.Actualizar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
        [HttpPost("eliminarGrado")]
        public async Task<IActionResult> eliminarGrado(string idprsna, int id)
        {
            GradoDto entidad = new GradoDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var ret = await _gradoProxy.Eliminar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
    }
}
