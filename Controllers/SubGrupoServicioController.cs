using FOSMAR.CORE.Extensions;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.Negocios.Modelos.Aseguramiento.SubGrupoServicio;
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
    [Route("GrupoServicio")]
    [Authorize]
    [ServiceFilter(typeof(AuthLogin))]
    public class SubGrupoServicioController : Controller
    {
        private readonly ISubGrupoServicioProxy _SubGrupoServicioProxy;
        private readonly IDataTableService _dataTableService;
        public SubGrupoServicioController(ISubGrupoServicioProxy subgrupoServicioServ, IDataTableService dataTableService)
        {
            _SubGrupoServicioProxy = subgrupoServicioServ;
            _dataTableService = dataTableService;
        }
        [HttpGet("ListarSubGrupoServicio")]
        public async Task<IActionResult> ListarSubGrupoServicio(string id, string idgsrvcio, string gdestdo)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _SubGrupoServicioProxy.ObtenerDataTable(parameters,id,idgsrvcio,gdestdo);
            return Ok(retorno); ;
        }

        [HttpPost("ObtenerSubGrupoServicio")]
        public async Task<IActionResult> ObtenerSubGrupoServicio(string id, string idgsrvcio)
        {
            var retorno = await _SubGrupoServicioProxy.Obtener(id,idgsrvcio);
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
    }
}
