using FOSMAR.CORE.Extensions;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.Negocios.Modelos.Persona.Documento;
using FOSMAR.Negocios.Persona;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using FOSMAR.PER.WEB.Filters;

namespace FOSMAR.PER.WEB.Controllers
{
    [Route("Documento")]
    [Authorize]
    [ServiceFilter(typeof(AuthLogin))]
    public class DocumentoController : Controller
    {

        private readonly IDocumentoProxy _documentoProxy;

        private readonly IDataTableService _dataTableService;

        public DocumentoController(IDocumentoProxy documentoProxy, IDataTableService datatableservice)
        {
            _documentoProxy = documentoProxy;
            _dataTableService = datatableservice;
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("insertarDocumento")]
        public async Task<IActionResult> insertarDocumento(DocumentoDto entidad)
        {

            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var ret = await _documentoProxy.Insertar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }

        [HttpGet("listarDocumento")]
        public async Task<IActionResult> listarDocumento(int idprsna, string id)
        {
            var parametrosDT = _dataTableService.GetSentParameters();
            var retorno = await _documentoProxy.ObtenerDataTable(parametrosDT, idprsna, id);
            return Ok(retorno);
        }
        [HttpGet("listar")]
        public async Task<IActionResult> listar(int idprsna, int id)
        {
            var retorno = await _documentoProxy.Listar(idprsna, id);
            return Ok(retorno);
        }
        [HttpGet("obtenerDocumento")]
        public async Task<IActionResult> obtenerDocumento(string idprsna, string id)
        {
            var retorno = await _documentoProxy.Obtener(idprsna, id);
            return Ok(retorno);
        }
        [HttpGet("obtenerUltimoCRN")]
        public async Task<IActionResult> ObtenerUltimoCRN()
        {
            var retorno = await _documentoProxy.ObtenerUltimoCRN();
            return Ok(retorno);
        }
        [HttpPost("actualizarDocumento")]
        public async Task<IActionResult> actualizarDocumento(DocumentoDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var ret = await _documentoProxy.Actualizar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
        [HttpPost("eliminarDocumento")]
        public async Task<IActionResult> eliminarDocumento(string idprsna, int id)
        {
            var entidad = new DocumentoDto();
            entidad.UEDCN = User.GetUserCode();
            entidad.ID = id;
            var ret = await _documentoProxy.Eliminar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
    }
}
