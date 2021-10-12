using FOSMAR.CORE.Extensions;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.CORE.Structs;
using FOSMAR.PER.WEB.Filters;
using FOSMAR.Negocios.Modelos.Aseguramiento.Red;
using FOSMAR.Negocios.Aseguramiento;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FOSMAR.PER.WEB.Controllers
{
    [Route("Red")]
    [Authorize]
    [ServiceFilter(typeof(AuthLogin))]
    public class RedController : Controller
    {
        private readonly IRedProxy _redproxy;
        private readonly IRedProvSucursalProxy _redPSproxy;
        private readonly IContratoProveedorProxy _contratoProvproxy;
        private readonly IDataTableService _datatableservice;

        public RedController(IRedProxy redproxy, IRedProvSucursalProxy redPSproxy, IDataTableService datatableservice, IContratoProveedorProxy contratoProvproxy)
        {
            _redproxy = redproxy;
            _redPSproxy = redPSproxy;
            _contratoProvproxy = contratoProvproxy;
            _datatableservice = datatableservice;
        }
        public IActionResult Index()
        {
            return View();
        }
        #region Red
        [HttpPost("actualizarRed")]
        public async Task<IActionResult> actualizarRed(RedDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var ret = await _redproxy.actualizar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
        [HttpPost("eliminarRed")]
        public async Task<IActionResult> eliminarRed(RedDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _redproxy.eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("insertarRed")]
        public async Task<IActionResult> insertarRed(RedDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _redproxy.insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpGet("listarRed")]
        public async Task<IActionResult> listarRed(string gdestdo)
        {
            var retorno = await _redproxy.listar(gdestdo);
            return Ok(retorno);
        }
        [HttpGet("listarRedDT")]
        public async Task<IActionResult> listarDTRed(string gdestdo)
        {
            var parameters = _datatableservice.GetSentParameters();
            var retorno = await _redproxy.listarDT(parameters, gdestdo);
            return Ok(retorno);
        }
        [HttpGet("obtenerRed")]
        public async Task<IActionResult> obtenerRed(int id)
        {
            var retorno = await _redproxy.obtener(id);
            return Ok(retorno);
        }
        #endregion
        #region Configuracion
        [HttpGet("listarCfgRedDT")]
        public async Task<IActionResult> listarDTCfgRed(string id, string gdestdo)
        {
            var parameters = _datatableservice.GetSentParameters();
            var retorno = await _redPSproxy.listarDT(parameters, id, gdestdo);
            return Ok(retorno);
        }
        [HttpGet("listarCfgRed")]
        public async Task<IActionResult> listarCfgRed(string id, string gdestdo)
        {
            var retorno = await _redPSproxy.listar(id, gdestdo);
            return Ok(retorno);
        }
        [HttpGet("obtenerCfgRed")]
        public async Task<IActionResult> obtenerCfgRed(int id)
        {
            var retorno = await _redPSproxy.obtener(id);
            return Ok(retorno);
        }
        [HttpPost("insertarCfgRed")]
        public async Task<IActionResult> insertarCfgRed(RedProvSucursalDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _redPSproxy.insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpPost("actualizarCfgRed")]
        public async Task<IActionResult> actualizarCfgRed(RedProvSucursalDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var ret = await _redPSproxy.actualizar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
        [HttpPost("eliminarCfgRed")]
        public async Task<IActionResult> eliminarCfgRed(RedProvSucursalDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _redPSproxy.eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        #endregion
        #region combos
        [HttpGet("listarProveedorContrato")]
        public async Task<IActionResult> listarProvContrato(string gdestdo)
        {
            var datos = await _contratoProvproxy.listarProveedorConContrato(gdestdo);
            return Ok(datos);
        }

        [HttpGet("listarSucursalContratoProv")]
        public async Task<IActionResult> listarSucursalContratoProv(int idprvdr, string gdestdo)
        {
            var datos = await _contratoProvproxy.listarSucursalesConContratoxProv(idprvdr, gdestdo);
            return Ok(datos);
        }
        #endregion
    }
}
