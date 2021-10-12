using FOSMAR.CORE.Extensions;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.Negocios.Modelos.Persona.CuentaBanco;
using FOSMAR.Negocios.Persona;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using FOSMAR.PER.WEB.Filters;
namespace FOSMAR.PER.WEB.Controllers
{
    [Route("CuentaBanco")]
    [Authorize]
    [ServiceFilter(typeof(AuthLogin))]
    public class CuentaBancoController : Controller
    {
        private readonly ICuentaBancoProxy _cuentabancoProxy;
        private readonly IDataTableService _dataTableServic;

        public CuentaBancoController(ICuentaBancoProxy cuentabancoProxy, IDataTableService datatableservice)
        {
            _cuentabancoProxy = cuentabancoProxy;
            _dataTableServic = datatableservice;
        }

        public IActionResult Index()
        {
            return View();
        }
        [HttpPost("insertarCuentaBanco")]
        public async Task<IActionResult> insertarCuentaBanco(CuentaBancoDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var ret = await _cuentabancoProxy.Insertar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }

        [HttpGet("listarCuentaBanco")]
        public async Task<IActionResult> listarCuentaBanco(string idprsna, string id)
        {
            var parametrosDT = _dataTableServic.GetSentParameters();
            var retorno = await _cuentabancoProxy.ObtenerDataTable(parametrosDT, idprsna, id);
            return Ok(retorno);
        }
        [HttpGet("obtenerCuentaBanco")]
        public async Task<IActionResult> obtenerCuentaBanco(string idprsna, string id)
        {
            var retorno = await _cuentabancoProxy.Obtener(idprsna, id);
            return Ok(retorno);
        }
        [HttpPost("actualizarCuentaBanco")]
        public async Task<IActionResult> actualizarGrado(CuentaBancoDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var ret = await _cuentabancoProxy.Actualizar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
        [HttpPost("eliminarCuentaBanco")]
        public async Task<IActionResult> eliminarCuentaBanco(string idprsna, int id)
        {
            CuentaBancoDto entidad = new CuentaBancoDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var ret = await _cuentabancoProxy.Eliminar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
    }
}
