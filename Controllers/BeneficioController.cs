using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using FOSMAR.PER.WEB.Filters;
using FOSMAR.CORE.Extensions;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.Negocios.Modelos.Aseguramiento.Beneficio;
using FOSMAR.Negocios.Aseguramiento;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace FOSMAR.PER.WEB.Controllers
{
    [Route("Beneficio")]
    [Authorize]
    [ServiceFilter(typeof(AuthLogin))]
    public class BeneficioController : Controller
    {
        private readonly IBeneficioProxy _BeneficioProxy;
        private readonly IDataTableService _dataTableService;

        public BeneficioController(IBeneficioProxy beneficioServ, IDataTableService dataTableService)
        {
            _BeneficioProxy = beneficioServ;
            _dataTableService = dataTableService;
        }
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost("insertarBeneficio")]
        public async Task<IActionResult> insertarBeneficio(BeneficioDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var ret = await _BeneficioProxy.Insertar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
        [HttpGet("listarBeneficio")]
        public async Task<IActionResult> ListarBeneficio(string gdestdo,string idprvdr)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _BeneficioProxy.ObtenerDataTable(parameters, gdestdo, idprvdr);
            return Ok(retorno); ;
        }
        [HttpGet("obtenerBeneficio")]
        public async Task<IActionResult> ObtenerCorreo(int id)
        {
            var retorno = await _BeneficioProxy.Obtener(id);
            return Ok(retorno); ;
        }
        [HttpPost("actualizarBeneficio")]
        public async Task<IActionResult> actualizarBeneficio(BeneficioDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var ret = await _BeneficioProxy.Actualizar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
        [HttpPost("eliminarBeneficio")]
        public async Task<IActionResult> eliminarBeneficio(int id)
        {
            BeneficioDto entidad = new BeneficioDto();
            entidad.ID = id;
            //entidad.GDESTDO = "I";
            entidad.UEDCN = User.GetUserCode();
            var ret = await _BeneficioProxy.Eliminar(entidad);
            if (!ret.EsSatisfactoria)
                return BadRequest(ret.Mensaje);
            return Ok();
        }
    }
}
