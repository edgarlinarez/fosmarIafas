using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FOSMAR.PER.WEB.Filters;
using FOSMAR.CORE.Extensions;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.Negocios.Modelos.Persona.Dependencia;
using FOSMAR.Negocios.Persona;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FOSMAR.PER.WEB.Controllers
{
    [Route("Dependencias")]
    [Authorize]
    [ServiceFilter(typeof(AuthLogin))]
    public class DependenciaController : Controller
    {
        private readonly IDependenciaProxy _dependenciaproxy;
        private readonly IDataTableService _dataTableService;
        public DependenciaController(IDependenciaProxy dependenciaproxy, IDataTableService datatableservice)
        {
            _dependenciaproxy = dependenciaproxy;
            _dataTableService = datatableservice;
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("insertar")]
        public async Task<IActionResult> insertarDependencia(DependenciaDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var ret = await _dependenciaproxy.Insertar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
        [HttpGet("listar")]
        public async Task<IActionResult> listarDependencia(int idprsna)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _dependenciaproxy.ObtenerDataTable(parameters, idprsna);
            return Ok(retorno); ;
        }
        [HttpGet("obtener")]
        public async Task<IActionResult> obtenerDependencia(int id)
        {
            var retorno = await _dependenciaproxy.Obtener(id);
            return Ok(retorno); ;
        }
        [HttpPost("actualizar")]
        public async Task<IActionResult> actualizarDependencia(DependenciaDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var ret = await _dependenciaproxy.Actualizar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
        [HttpPost("eliminar")]
        public async Task<IActionResult> eliminarDependencia(int id)
        {
            var entidad = await _dependenciaproxy.Obtener(id);
            entidad.GDESTDO = "I";
            entidad.UEDCN = User.GetUserCode();
            var ret = await _dependenciaproxy.Actualizar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
    }
}
