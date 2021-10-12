using FOSMAR.CORE.Extensions;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.Negocios.Modelos.Persona.Contratante;
using FOSMAR.Negocios.Persona;
using Microsoft.AspNetCore.Authorization;
using FOSMAR.PER.WEB.Filters;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace FOSMAR.PER.WEB.Controllers
{
    [Route("Contratante")]
    [Authorize]
    [ServiceFilter(typeof(AuthLogin))]
    public class ContratanteController : Controller
    {

        private readonly IContratanteProxy _contratanteProxy;

        private readonly IDataTableService _dataTableService;

        public ContratanteController(IContratanteProxy documentoProxy, IDataTableService datatableservice)
        {
            _contratanteProxy = documentoProxy;
            _dataTableService = datatableservice;
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("insertarContratante")]
        public async Task<IActionResult> insertarDocumento(ContratanteDto entidad)
        {

            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var ret = await _contratanteProxy.Insertar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }

        [HttpGet("listarContratante")]
        public async Task<IActionResult> listarContratante(int idprsna, string id)
        {
            var parametrosDT = _dataTableService.GetSentParameters();
            var retorno = await _contratanteProxy.ObtenerDataTable(parametrosDT, idprsna, id);
            return Ok(retorno);
        }
        [HttpGet("listar")]
        public async Task<IActionResult> listar()
        {
            var retorno = await _contratanteProxy.Listar();
            return Ok(retorno);
        }
        [HttpGet("obtenerContratante")]
        public async Task<IActionResult> obtenerDocumento(string idprsna, string id)
        {
            var retorno = await _contratanteProxy.Obtener(idprsna, id);
            return Ok(retorno);
        }


        //[HttpGet("obtenerUltimoCRN")]
        //public async Task<IActionResult> ObtenerUltimoCRN()
        //{
        //    var retorno = await _documentoProxy.ObtenerUltimoCRN();
        //    return Ok(retorno);
        //}
        [HttpPost("actualizarContratante")]
        public async Task<IActionResult> actualizarContratante(ContratanteDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var ret = await _contratanteProxy.Actualizar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
        [HttpPost("eliminarDocumento")]
        public async Task<IActionResult> eliminarContratante(string idprsna, int id)
        {
            var entidad = new ContratanteDto();
            entidad.UEDCN = User.GetUserCode();
            entidad.ID = id;
            var ret = await _contratanteProxy.Eliminar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
    }
}