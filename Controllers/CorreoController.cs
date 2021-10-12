using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using FOSMAR.CORE.Extensions;
using FOSMAR.PER.WEB.Filters;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.Negocios.Modelos.Persona.Correo;
using FOSMAR.Negocios.Persona;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace FOSMAR.PER.WEB.Controllers
{

    [Route("Correo")]
    [Authorize]
    [ServiceFilter(typeof(AuthLogin))]
    public class CorreoController : Controller
    {
        private readonly ICorreoProxy _correoProxy;
        private readonly IDataTableService _dataTableService;

        public CorreoController(ICorreoProxy correoProxy, IDataTableService datatableservice)
        {
            _correoProxy = correoProxy;
            _dataTableService = datatableservice;
        }
        public IActionResult Index()
        {
            return View();
        }



        [HttpPost("insertarCorreo")]
        public async Task<IActionResult> insertarCorreo(CorreoDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var ret = await _correoProxy.Insertar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
        [HttpGet("listarCorreo")]
        public async Task<IActionResult> ListarCorreo(string idprsna, string id)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _correoProxy.ObtenerDataTable(parameters, idprsna, id);
            return Ok(retorno); ;
        }
        [HttpGet("listar")]
        public async Task<IActionResult> listar(string idprsna, string id)
        {
            var retorno = await _correoProxy.Listar(idprsna, id);
            return Ok(retorno); ;
        }
        [HttpGet("obtenerCorreo")]
        public async Task<IActionResult> ObtenerCorreo(string idprsna, string id)
        {
            var retorno = await _correoProxy.Obtener(idprsna, id);
            return Ok(retorno); ;
        }
        [HttpPost("actualizarCorreo")]
        public async Task<IActionResult> actualizarCorreo(CorreoDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var ret = await _correoProxy.Actualizar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
        [HttpPost("eliminarCorreo")]
        public async Task<IActionResult> eliminarCorreo(string idprsna, int id)
        {
            //var entidad = await _correoProxy.Obtener(idprsna, id);
            CorreoDto entidad = new CorreoDto();
            entidad.ID = id;
            entidad.GDESTDO = "I";
            entidad.UEDCN = User.GetUserCode();
            var ret = await _correoProxy.Eliminar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
    }
}
