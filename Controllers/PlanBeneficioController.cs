using FOSMAR.CORE.Extensions;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.Negocios.Modelos.Aseguramiento.PlanBeneficio;
using FOSMAR.Negocios.Modelos.Aseguramiento.VersionPlanBeneficio;
using FOSMAR.Negocios.Modelos.Aseguramiento.DiagnosticoExcluido;
using FOSMAR.Negocios.Modelos.Aseguramiento.BeneficioPlanBeneficio;
using FOSMAR.Negocios.Modelos.Aseguramiento.CopagoPlanBeneficio;
using FOSMAR.Negocios.Modelos.Aseguramiento.RedCopagoPlanBeneficio;
using FOSMAR.Negocios.Modelos.Aseguramiento.CostoEtario;
using FOSMAR.Negocios.Aseguramiento;
using FOSMAR.Negocios.Persona;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using FOSMAR.PER.WEB.Filters;
using System.Collections.Generic;   
using System.Linq;
using System.Threading.Tasks;

namespace FOSMAR.PER.WEB.Controllers
{
    [Route("PlanBeneficio")]
    [Authorize]
    [ServiceFilter(typeof(AuthLogin))]

    public class PlanBeneficioController : Controller
    {
        private readonly IDataTableService _dataTableService;
        private readonly IPlanBeneficioProxy _planbeneficioproxy;
        private readonly IVersionPlanBeneficioProxy _versionplanbeneficioproxy;
        private readonly IDiagnosticoExcluidoProxy _diagnosticoexcluidoproxy;
        private readonly IBeneficioPlanBeneficioProxy _beneficioplanbeneficioProxy;
        private readonly ICopagoPlanBeneficioProxy _copagoplanbeneficioproxy;
        private readonly IRedCopagoPlanBeneficioProxy _redcopagoplanbeneficioproxy;
        private readonly ICostoEtarioProxy _CostoEtarioProxy;
        private readonly IDiagnosticoProxy _diagnosticoProxy;
        private readonly IRedProxy _redProxy;

        public PlanBeneficioController(IDataTableService dataTableService,
                                    IPlanBeneficioProxy PlanBeneficioProxy,
                                    IVersionPlanBeneficioProxy VersionPlanBeneficioProxy,
                                    IDiagnosticoExcluidoProxy DiagnosticoExcluidoProxy,
                                    IBeneficioPlanBeneficioProxy BeneficioPlanBeneficioProxy,
                                    ICopagoPlanBeneficioProxy CopagoPlanBeneficioProxy,
                                    IRedCopagoPlanBeneficioProxy RedCopagoPlanBeneficioProxy,
                                    ICostoEtarioProxy costoEtarioProxy,
                                    IDiagnosticoProxy diagnosticoProxy,
                                    IRedProxy redProxy
                                    )

        {
            _dataTableService = dataTableService;
            _planbeneficioproxy = PlanBeneficioProxy;
            _versionplanbeneficioproxy = VersionPlanBeneficioProxy;
            _diagnosticoexcluidoproxy = DiagnosticoExcluidoProxy;
            _beneficioplanbeneficioProxy = BeneficioPlanBeneficioProxy;
            _copagoplanbeneficioproxy = CopagoPlanBeneficioProxy;
            _redcopagoplanbeneficioproxy = RedCopagoPlanBeneficioProxy;
            _CostoEtarioProxy = costoEtarioProxy;
            _diagnosticoProxy = diagnosticoProxy;
            _redProxy = redProxy;
        }



        public IActionResult Index()
        {
            return View();
        }

        #region PlanBeneficio
        [HttpGet("listar-tabla")]
        public async Task<IActionResult> listarPlanBeneficio()
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _planbeneficioproxy.ObtenerDataTable(parameters);
            return Ok(retorno);
        }
        [HttpGet("listar")]
        public async Task<IActionResult> Listar()
        {
            var datos = await _planbeneficioproxy.Listar();
            return Ok(datos);
        }
        [HttpGet("obtener")]
        public async Task<IActionResult> obtenerPlanBeneficio(int id)
        {
            var retorno = await _planbeneficioproxy.Obtener(id);
            return Ok(retorno);
        }
        [HttpPost("insertar")]
        public async Task<IActionResult> insertarPlanBeneficio(PlanBeneficioDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _planbeneficioproxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpPost("actualizar")]
        public async Task<IActionResult> actualizarPlanBeneficio(PlanBeneficioDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _planbeneficioproxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("eliminar")]
        public async Task<IActionResult> eliminarPlanBeneficio(int id)
        {
            var entidad = new PlanBeneficioDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _planbeneficioproxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        #endregion

        #region versionPB
        [HttpGet("listar-version")]
        public async Task<IActionResult> listarVersion(int idpbnfco)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _versionplanbeneficioproxy.ObtenerDataTable(parameters, idpbnfco);
            return Ok(retorno);
        }

        [HttpGet("obtener-version")]
        public async Task<IActionResult> obtenerVersion(int id, int idpbnfco)
        {
            var retorno = await _versionplanbeneficioproxy.Obtener(id, idpbnfco);
            return Ok(retorno);
        }
        [HttpPost("insertar-version")]
        public async Task<IActionResult> insertarVersion(VersionPlanBeneficioDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _versionplanbeneficioproxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpPost("actualizar-version")]
        public async Task<IActionResult> actualizarVersion(VersionPlanBeneficioDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _versionplanbeneficioproxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("eliminar-version")]
        public async Task<IActionResult> eliminarVersion(int id)
        {
            var entidad = new VersionPlanBeneficioDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _versionplanbeneficioproxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }

        #endregion

        //#region DiagnosticoExcluido
        [HttpGet("listar-diagnosticoExcl")]
        public async Task<IActionResult> listarDiagnostico(int idpbnfco)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _diagnosticoexcluidoproxy.ObtenerDataTable(parameters, idpbnfco);
            return Ok(retorno);
        }
        [HttpGet("obtener-diagnosticoExcl")]
        public async Task<IActionResult> obtenerDiagnostico(int id, int idcprvdr)
        {
            var retorno = await _diagnosticoexcluidoproxy.Obtener(id, idcprvdr);
            return Ok(retorno);
        }
        [HttpPost("insertar-diagnosticoExcl")]
        public async Task<IActionResult> insertarDiagnostico(DiagnosticoExcluidoDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _diagnosticoexcluidoproxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpPost("actualizar-diagnosticoExcl")]
        public async Task<IActionResult> actualizarDiagnostico(DiagnosticoExcluidoDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _diagnosticoexcluidoproxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("eliminar-diagnosticoExcl")]
        public async Task<IActionResult> eliminarDiagnostico(int id)
        {
            var entidad = new DiagnosticoExcluidoDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _diagnosticoexcluidoproxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpGet("listarDiagnosticoDT")]
        public async Task<IActionResult> listarDiagnosticoDT()
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _diagnosticoProxy.listarDT(parameters);
            return Ok(retorno);
        }

        //#endregion
        #region beneficio PB
        [HttpGet("listar-beneficioPB")]
        public async Task<IActionResult> listarBeneficioPB(int idvrsn)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _beneficioplanbeneficioProxy.ObtenerDataTable(parameters, idvrsn);
            return Ok(retorno);
        }
        [HttpGet("obtener-beneficioPB")]
        public async Task<IActionResult> obtenerbeneficioPB(int idbnfco, int idvrsn)
        {
            var retorno = await _beneficioplanbeneficioProxy.Obtener(idbnfco, idvrsn);
            return Ok(retorno);
        }
        [HttpPost("insertar-beneficioPB")]
        public async Task<IActionResult> insertarbeneficioPB(BeneficioPlanBeneficioDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _beneficioplanbeneficioProxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpPost("actualizar-beneficioPB")]
        public async Task<IActionResult> actualizarbeneficioPB(BeneficioPlanBeneficioDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _beneficioplanbeneficioProxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("eliminar-beneficioPB")]
        public async Task<IActionResult> eliminarbeneficioPB(int id)
        {
            var entidad = new BeneficioPlanBeneficioDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _beneficioplanbeneficioProxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        #endregion

        //#region COPAGO
        [HttpGet("listar-copago")]
        public async Task<IActionResult> listarCopago(int idbnfco)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _copagoplanbeneficioproxy.ObtenerDataTable(parameters, idbnfco);
            return Ok(retorno);
        }
        [HttpGet("obtener-copago")]
        public async Task<IActionResult> obtenerCopago(int id, int idbnfco)
        {
            var retorno = await _copagoplanbeneficioproxy.Obtener(id,idbnfco);
            return Ok(retorno);
        }
        [HttpPost("insertar-copago")]
        public async Task<IActionResult> insertarCopago(CopagoPlanBeneficioDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _copagoplanbeneficioproxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpPost("actualizar-copago")]
        public async Task<IActionResult> actualizarCopago(CopagoPlanBeneficioDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _copagoplanbeneficioproxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("eliminar-copago")]
        public async Task<IActionResult> eliminarCopago(int id)
        {
            var entidad = new CopagoPlanBeneficioDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _copagoplanbeneficioproxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpGet("listarRedDT")]
        public async Task<IActionResult> listarDTRed(string gdestdo)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _redProxy.listarDT(parameters, gdestdo);
            return Ok(retorno);
        }


        #region CostoEtario
        [HttpGet("listarCEtarioDT")]
        public async Task<IActionResult> listarCEtarioDT(int idvrsn)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _CostoEtarioProxy.ObtenerDataTable(parameters,idvrsn);
            return Ok(retorno);
        }
        [HttpGet("listarCEtario")]
        public async Task<IActionResult> listarCEtario(int idvrsn)
        {
            var retorno = await _CostoEtarioProxy.Listar(idvrsn);
            return Ok(retorno);
        }
        [HttpGet("obtenerCEtario")]
        public async Task<IActionResult> obtenerCEtario(int id)
        {
            var retorno = await _CostoEtarioProxy.Obtener(id);
            return Ok(retorno);
        }
        [HttpPost("insertarCEtario")]
        public async Task<IActionResult> insertarCEtario(CostoEtarioDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _CostoEtarioProxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpPost("actualizarCEtario")]
        public async Task<IActionResult> actualizarCEtario(CostoEtarioDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _CostoEtarioProxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("eliminarCEtario")]
        public async Task<IActionResult> eliminarCEtario(CostoEtarioDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _CostoEtarioProxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        #endregion

        #region RedCopago
        [HttpGet("listarRedCopagoDT")]
        public async Task<IActionResult> listarRedCopagoDT(string idcpgo)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _redcopagoplanbeneficioproxy.ObtenerDataTable(parameters, idcpgo);
            return Ok(retorno);
        }
        [HttpPost("insertarRedCopago")]
        public async Task<IActionResult> insertarRedCopago(RedCopagoPlanBeneficioDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _redcopagoplanbeneficioproxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpPost("eliminarRedCopago")]
        public async Task<IActionResult> eliminarRedCopago(int id)
         {
            var entidad = new RedCopagoPlanBeneficioDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _redcopagoplanbeneficioproxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        #endregion
    }
}
