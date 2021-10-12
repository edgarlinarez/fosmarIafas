using FOSMAR.CORE.Extensions;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.Negocios.Modelos.Aseguramiento.Nomenclador;
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
    [Route("Nomenclador")]
    [Authorize]
    [ServiceFilter(typeof(AuthLogin))]
    public class NomencladorController : Controller
    {
        private readonly INomencladorProxy _NomencladorProxy;
        private readonly IDataTableService _dataTableService;
        public NomencladorController(INomencladorProxy nomencladorServ, IDataTableService dataTableService)
        {
            _NomencladorProxy = nomencladorServ;
            _dataTableService = dataTableService;
        }
        
        [HttpGet("ListarNomenclador")]
        public async Task<IActionResult> ListarNomenclador(string gdestdo)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _NomencladorProxy.ObtenerDataTable(parameters,gdestdo);
            return Ok(retorno); ;
        }

        [HttpPost("ObtenerNomenclador")]
        public async Task<IActionResult> ObtenerNomenclador(int id)
        {
            var retorno = await _NomencladorProxy.Obtener(id);
            return Ok(retorno); ;
        }
        [HttpPost("InsertarNomenclador")]
        public async Task<IActionResult> InsertarNomenclador(NomencladorDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _NomencladorProxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("ActualizarNomenclador")]
        public async Task<IActionResult> ActualizarNomenclador(NomencladorDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _NomencladorProxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("EliminarNomenclador")]
        public async Task<IActionResult> EliminarNomenclador(int id)
        {
            var entidad = new NomencladorDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _NomencladorProxy.Eliminar(entidad);
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
