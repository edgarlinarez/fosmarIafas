using FOSMAR.CORE.Extensions;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.Negocios.Modelos.Aseguramiento.GrupoServicio;
using FOSMAR.Negocios.Modelos.Aseguramiento.SubGrupoServicio;
using FOSMAR.Negocios.Modelos.Aseguramiento.Servicio;
using FOSMAR.Negocios.Aseguramiento;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using FOSMAR.PER.WEB.Filters;
using System.Linq;
using System.Threading.Tasks;

namespace FOSMAR.PER.WEB.Controllers
{
    [Route("Servicio")]
    [Authorize]
    [ServiceFilter(typeof(AuthLogin))]
    public class ServicioController : Controller
    {
        private readonly IGrupoServicioProxy _GrupoServicioProxy;
        private readonly ISubGrupoServicioProxy _SubGrupoServicioProxy;
        private readonly IServicioProxy _ServicioProxy;
        private readonly IDataTableService _dataTableService;
        public ServicioController(IGrupoServicioProxy grupoServicioServ, ISubGrupoServicioProxy subgrupoServicioServ, IServicioProxy ServicioServ, IDataTableService dataTableService)
        {
            _GrupoServicioProxy = grupoServicioServ;
            _SubGrupoServicioProxy = subgrupoServicioServ;
            _ServicioProxy = ServicioServ;
            _dataTableService = dataTableService;
        }       
        [HttpGet("ListarGrupoServicio")]
        public async Task<IActionResult> ListarGrupoServicio()
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _GrupoServicioProxy.ObtenerDataTable(parameters);
            return Ok(retorno); ;
        }

        [HttpPost("ObtenerGrupoServicio")]
        public async Task<IActionResult> ObtenerGrupoServicio(int id)
        {
            var retorno = await _GrupoServicioProxy.Obtener(id);
            return Ok(retorno); ;
        }
        [HttpPost("InsertarGrupoServicio")]
        public async Task<IActionResult> InsertarGrupoServicio(GrupoServicioDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _GrupoServicioProxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("ActualizarGrupoServicio")]
        public async Task<IActionResult> ActualizarGrupoServicio(GrupoServicioDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _GrupoServicioProxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("EliminarGrupoServicio")]
        public async Task<IActionResult> EliminarGrupoServicio(int id)
        {
            var entidad = new GrupoServicioDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _GrupoServicioProxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpGet("ListarSubGrupoServicio")]
        public async Task<IActionResult> ListarSubGrupoServicio(string id, string idgsrvcio, string gdestdo)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _SubGrupoServicioProxy.ObtenerDataTable(parameters, id, idgsrvcio,gdestdo);
            return Ok(retorno); ;
        }

        [HttpPost("ObtenerSubGrupoServicio")]
        public async Task<IActionResult> ObtenerSubGrupoServicio(string id, string idgsrvcio)
        {
            var retorno = await _SubGrupoServicioProxy.Obtener(id, idgsrvcio);
            return Ok(retorno); ;
        }
        [HttpPost("InsertarSubGrupoServicio")]
        public async Task<IActionResult> InsertarSubGrupoServicio(SubGrupoServicioDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _SubGrupoServicioProxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("ActualizarSubGrupoServicio")]
        public async Task<IActionResult> ActualizarSubGrupoServicio(SubGrupoServicioDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _SubGrupoServicioProxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("EliminarSubGrupoServicio")]
        public async Task<IActionResult> EliminarSubGrupoServicio(int id)
        {
            var entidad = new SubGrupoServicioDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _SubGrupoServicioProxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpGet("ListarServicio")]
        public async Task<IActionResult> ListarServicio(string id, string idsgsrvcio)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _ServicioProxy.ObtenerDataTable(parameters, id, idsgsrvcio);
            return Ok(retorno); ;
        }

        [HttpPost("ObtenerServicio")]
        public async Task<IActionResult> ObtenerServicio(string id, string idsgsrvcio)
        {
            var retorno = await _ServicioProxy.Obtener(id, idsgsrvcio);
            return Ok(retorno); ;
        }
        [HttpPost("InsertarServicio")]
        public async Task<IActionResult> InsertarServicio(ServicioDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _ServicioProxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("ActualizarServicio")]
        public async Task<IActionResult> ActualizarServicio(ServicioDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _ServicioProxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("EliminarServicio")]
        public async Task<IActionResult> EliminarServicio(int id)
        {
            var entidad = new ServicioDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _ServicioProxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}
