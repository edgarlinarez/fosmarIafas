using FOSMAR.CORE.Extensions;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.Negocios.Modelos.Persona.Persona;
using FOSMAR.Negocios.Persona;
using FOSMAR.Negocios.Sunat;
using FOSMAR.Negocios.SuSalud;
using Microsoft.AspNetCore.Authorization;
using FOSMAR.PER.WEB.Filters;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
namespace FOSMAR.PER.WEB.Controllers
{
    [Route("Persona")]
    [Authorize]
    [ServiceFilter(typeof(AuthLogin))]
    public class PersonaController : Controller

    {
        private readonly IPersonaProxy _personaProxy;
        private readonly IDataTableService _dataTableService;
        private readonly ISuSaludProxy _suSaludProxy;
        private readonly ISunatProxy _sunatproxy;
        //CONSTRUCTOR
        public PersonaController(IDataTableService dataTableService, IPersonaProxy personaProxy, ISuSaludProxy suSaludProxy, ISunatProxy sunatproxy)
        {
            _dataTableService = dataTableService;
            _personaProxy = personaProxy;
            _suSaludProxy = suSaludProxy;
            _sunatproxy = sunatproxy;
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("listar-persona")]
        public async Task<IActionResult> listarPersona(string p_sTDocumento, string p_sNDocumento, string p_sDatos, string p_sDesde, string p_sHasta, string p_sEstado)
        {
            var parametrosDT = _dataTableService.GetSentParameters();
            var retorno = await _personaProxy.ObtenerDataTable(parametrosDT, "", p_sTDocumento, p_sNDocumento, p_sDatos, p_sDesde, p_sHasta, p_sEstado);
            return Ok(retorno);
        }

        [HttpGet("listar")]
        public async Task<IActionResult> listar(string tPersona, string p_sTDocumento, string p_sNDocumento, string p_sDatos, string p_sDesde, string p_sHasta, string p_sEstado)
        {
            var retorno = await _personaProxy.Listar(tPersona, p_sTDocumento, p_sNDocumento, p_sDatos, p_sDesde, p_sHasta, p_sEstado);
            return Ok(retorno);
        }

        [HttpPost("EliminarPersonas")]
        public async Task<IActionResult> eliminarPersonas(int id)
        {
            PersonaDto eliminarPersona = new PersonaDto();
            eliminarPersona.ID = id;
            eliminarPersona.UEDCN = User.GetUserCode();
            var ret = await _personaProxy.Eliminar(eliminarPersona);

            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
        [HttpPost("insertarPersonas")]
        public async Task<IActionResult> insertarPersona(PersonaDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();

            var ret = await _personaProxy.Insertar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok(ret.CodEstado);
        }

        [HttpGet("obtenerPersona")]
        public async Task<IActionResult> obtenerPersona(int id)
        {
            var retorno = await _personaProxy.Obtener(id);
            return Ok(retorno);
        }

        [HttpPost("actualizarPersona")]
        public async Task<IActionResult> actualizarPersona(PersonaDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var ret = await _personaProxy.Actualizar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            else if(ret.CodEstado == 2)
                return Ok("DEBE ACTUALIZAR LA SITUACIÓN MILITAR Y FECHA DE BAJA DE ESTA PERSONA");
            return Ok();
        }

        [HttpGet("consultarsusalud")]
        public async Task<IActionResult> ConsultarSuSalud(string tiDocumento, string nuDocumento)
        {
            var retorno = await _suSaludProxy.ConsultarSuSalud(tiDocumento, nuDocumento);
            return Ok(retorno);
        }

        [HttpGet("lista-susalud")]
        public async Task<IActionResult> listaSuSalud(string tiDocumento, string nuDocumento)
        {
            var parametrosDT = _dataTableService.GetSentParameters();
            var retorno = await _suSaludProxy.ObtenerDataTable(parametrosDT, tiDocumento, nuDocumento);
            return Ok(retorno);
        }

        [HttpPost("lista-homonimos")]
        public async Task<IActionResult> listaHomonimos(HomonimoPersona entidad)
        {
            var parametrosDT = _dataTableService.GetSentParameters();
            var retorno = await _personaProxy.listaHomonimos(parametrosDT, entidad);
            return Ok(retorno);
        }
        
        [HttpGet("lista-sunat")]
        public async Task<IActionResult> listaSunat(string nuDocumento)
        {
            var parametrosDT = _dataTableService.GetSentParameters();
            var retorno = await _sunatproxy.ObtenerDataTable(parametrosDT, nuDocumento);
            return Ok(retorno);
        }

    }
}
