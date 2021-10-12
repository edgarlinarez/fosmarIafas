using FOSMAR.CORE.Extensions;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.Negocios.Modelos.Aseguramiento.GrupoServicioCmps;
using FOSMAR.Negocios.Modelos.Aseguramiento.SeccionCmps;
using FOSMAR.Negocios.Modelos.Aseguramiento.SubSeccionCpms;
using FOSMAR.Negocios.Modelos.Aseguramiento.Cpms;
using FOSMAR.Negocios.Aseguramiento;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using FOSMAR.PER.WEB.Filters;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClosedXML.Excel;
using System.IO;
using Microsoft.AspNetCore.Http;
using FOSMAR.CORE.Structs;

namespace FOSMAR.PER.WEB.Controllers
{
    [Route("GrupoServicioCmps")]
    [Authorize]
    [ServiceFilter(typeof(AuthLogin))]
    public class GrupoServicioCmpsController : Controller
    {
        private readonly IDataTableService _dataTableService;
        private readonly IGrupoServicioCmpsProxy _gruposerviciocmpsproxy;
        private readonly ISeccionCmpsProxy _seccionservicioCmpsproxy;
        private readonly ISubSeccionCpmsProxy _subseccionCpmsproxy;
        private readonly ICpmsProxy _cpmsproxy;

        public GrupoServicioCmpsController(IDataTableService dataTableService,
                                    IGrupoServicioCmpsProxy gruposerviciocmpsproxy,
                                    ISeccionCmpsProxy seccionservicioCmpsProxy,
                                    ISubSeccionCpmsProxy subseccionCmpsProxy,
                                    ICpmsProxy cpmsProxy)

        {
            _dataTableService = dataTableService;
            _gruposerviciocmpsproxy = gruposerviciocmpsproxy;
            _seccionservicioCmpsproxy = seccionservicioCmpsProxy;
            _subseccionCpmsproxy = subseccionCmpsProxy;
            _cpmsproxy = cpmsProxy;
        }

            public IActionResult Index()
        {
            return View();
        }

        #region GrupoServicioCmps

        [HttpGet("listar-tabla")]
        public async Task<IActionResult> listarGrupoServicioCmps()
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _gruposerviciocmpsproxy.ObtenerDataTable(parameters);
            return Ok(retorno);
        }
        [HttpGet("listarCombo")]
        public async Task<IActionResult> Listar()
        {
            var datos = await _gruposerviciocmpsproxy.Listar();
            return Ok(datos);
        }
        [HttpGet("obtener")]
        public async Task<IActionResult> obtenerGrupoServicioCmps(int id)
        {
            var retorno = await _gruposerviciocmpsproxy.Obtener(id);
            return Ok(retorno);
        }
        [HttpPost("insertar")]
        public async Task<IActionResult> insertarGrupoServicioCmps(GrupoServicioCmpsDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _gruposerviciocmpsproxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpPost("actualizar")]
        public async Task<IActionResult> actualizarGrupoServicioCmps(GrupoServicioCmpsDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _gruposerviciocmpsproxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("eliminar")]
        public async Task<IActionResult> eliminarGrupoServicioCmps(int id)
        {
            var entidad = new GrupoServicioCmpsDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _gruposerviciocmpsproxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }

        #endregion
        #region Sección

        [HttpGet("listar-seccion")]
        public async Task<IActionResult> listarDTSeccionCmps(int idgrpsrvco)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _seccionservicioCmpsproxy.ObtenerDataTable(parameters, idgrpsrvco);
            return Ok(retorno);
        }
        [HttpGet("obtener-seccion")]
        public async Task<IActionResult> obtenerSeccion(int id, int idgrpsrvco)
        {
            var retorno = await _seccionservicioCmpsproxy.Obtener(id, idgrpsrvco);
            return Ok(retorno);
        }
        [HttpPost("insertar-seccion")]
        public async Task<IActionResult> insertarSeccion(SeccionCmpsDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _seccionservicioCmpsproxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpPost("actualizar-seccion")]
        public async Task<IActionResult> actualizarSeccion(SeccionCmpsDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _seccionservicioCmpsproxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("eliminar-seccion")]
        public async Task<IActionResult> eliminarSeccion(int id)
        {
            var entidad = new SeccionCmpsDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _seccionservicioCmpsproxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }

        #endregion
        #region SubSección

        [HttpGet("listar-subseccion")]
        public async Task<IActionResult> listarDTSubseccionCmps(int idsccn)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _subseccionCpmsproxy.ObtenerDataTable(parameters, idsccn);
            return Ok(retorno);
        }
        [HttpGet("obtener-subseccion")]
        public async Task<IActionResult> obtenerSubseccion(int id, int idsccn)
        {
            var retorno = await _subseccionCpmsproxy.Obtener(id, idsccn);
            return Ok(retorno);
        }
        [HttpPost("insertar-subseccion")]
        public async Task<IActionResult> insertarSubseccion(SubSeccionDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _subseccionCpmsproxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpPost("actualizar-subseccion")]
        public async Task<IActionResult> actualizarSubseccion(SubSeccionDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _subseccionCpmsproxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("eliminar-subseccion")]
        public async Task<IActionResult> eliminarSubseccion(int id)
        {
            var entidad = new SubSeccionDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _subseccionCpmsproxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }

        #endregion
        #region CPMS
        [HttpGet("listarCpms")]
        public async Task<IActionResult> ListarDTCpms(string gdestdo)
        {
            var parametrosDT = _dataTableService.GetSentParameters();
            var retorno = await _cpmsproxy.ObtenerDataTable(parametrosDT,gdestdo);
            return Ok(retorno);
        }
        [HttpGet("listar")]
        public async Task<IActionResult> ListarCpms()
        {
            var retorno = await _cpmsproxy.Listar();
            return Ok(retorno);
        }
        [HttpGet("obtenerCpms")]
        public async Task<IActionResult> obtenerCmps(int id)
        {
            var retorno = await _cpmsproxy.Obtener(id);
            return Ok(retorno);
        }
        [HttpPost("insertarCpms")]
        public async Task<IActionResult> insertarCmps(CpmsDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _cpmsproxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpPost("actualizarCpms")]
        public async Task<IActionResult> actualizarCmps(CpmsDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _cpmsproxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }

        [HttpPost("eliminarCpms")]
        public async Task<IActionResult> eliminarCmps(int id)
        {
            var entidad = new CpmsDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _cpmsproxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }

        #endregion
        #region combos

        [HttpGet("listarSeccion")]
        public async Task<IActionResult> listarProvContrato(int idgrpsrvco)
        {
            var datos = await _seccionservicioCmpsproxy.Listar(idgrpsrvco);
            return Ok(datos);
        }

        [HttpGet("listarSubseccion")]
        public async Task<IActionResult> listarSucursalContratoProv(int idsccn)
        {
            var datos = await _subseccionCpmsproxy.Listar(idsccn);
            return Ok(datos);
        }
        #endregion

    }
}
