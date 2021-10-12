using FOSMAR.CORE.Extensions;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.Negocios.Modelos.Aseguramiento.TarifarioProveedor;
using FOSMAR.Negocios.Modelos.Aseguramiento.Procedimientos;
using FOSMAR.Negocios.Modelos.Aseguramiento.Tarifario;
using FOSMAR.Negocios.Modelos.Aseguramiento.CpmsProveedor;
using FOSMAR.Negocios.Modelos.Aseguramiento.Cpms;
using FOSMAR.Negocios.Modelos.Aseguramiento.NomencladorProveedor;
using FOSMAR.Negocios.Modelos.Aseguramiento.Nomenclador;
using FOSMAR.Negocios.Modelos.Aseguramiento.BSProveedor;
using FOSMAR.Negocios.Modelos.Aseguramiento.CuentaProveedor;
using FOSMAR.Negocios.Modelos.Aseguramiento.EPSucursalProveedor;
using FOSMAR.Negocios.Modelos.Aseguramiento.Proveedor;
using FOSMAR.Negocios.Modelos.Aseguramiento.SucursalProveedor;
using FOSMAR.Negocios.Aseguramiento;
using FOSMAR.Negocios.Persona;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using FOSMAR.PER.WEB.Filters;
using System.Threading.Tasks;
namespace FOSMAR.PER.WEB.Controllers
{
    [Route("Proveedor")]
   // [ApiController]
    [Authorize]
    [ServiceFilter(typeof(AuthLogin))]
    public class ProveedorController : Controller
    {
        #region Proxys
        private readonly IDataTableService _dataTableService;
        private readonly IProveedorProxy _proveedorproxy;
        private readonly IPersonaProxy _personaproxy;
        private readonly IEPSucursalProveedorProxy _equivalenciaproxy;
        private readonly ISucursalProveedorProxy _sucursalproxy;
        private readonly IBSProveedorProxy _beneficioPrvproxy;
        private readonly IBeneficioProxy _beneficioproxy;
        private readonly ITarifarioProxy _tarifarioproxy;
        private readonly ICuentaProveedorProxy _ctaproveedorproxy;
        private readonly ITarifarioCMPSProxy _tarifariocmpsproxy;

        private readonly ITarifarioProveedorProxy _tarifarioPrvdrProxy;
        private readonly IProcedimientosProxy _procedimientosProxy;
        private readonly ICpmsProveedorProxy _cpmsPrvdrProxy;
        private readonly ICpmsProxy _cpmsProxy;
        private readonly INomencladorProveedorProxy _nomencladorPrvdrProxy;
        private readonly INomencladorProxy _nomencladorProxy;


        #endregion
        #region constructor
        public ProveedorController(IDataTableService dataTableService,
                                    IProveedorProxy proveedorproxy,
                                    IPersonaProxy personaproxy,
                                    IEPSucursalProveedorProxy equivalenciaproxy,
                                    ISucursalProveedorProxy sucursalproxy,
                                    IBSProveedorProxy beneficioPrvproxy,
                                    IBeneficioProxy beneficioproxy,
                                    ITarifarioProxy tarifarioproxy,
                                    ICuentaProveedorProxy ctaproveedorproxy,
                                    ITarifarioCMPSProxy tarifariocmpsproxy,

                                    ITarifarioProveedorProxy tarifarioprvdrproxy,
                                    IProcedimientosProxy procedimientosproxy,
                                    ICpmsProveedorProxy cpmsprvdrproxy,
                                    ICpmsProxy cpmsproxy,
                                    INomencladorProveedorProxy nomencladorprvdrproxy,
                                    INomencladorProxy nomencladorproxy
                                    )
        {
            _dataTableService = dataTableService;
            _proveedorproxy = proveedorproxy;
            _personaproxy = personaproxy;
            _equivalenciaproxy = equivalenciaproxy;
            _sucursalproxy = sucursalproxy;
            _beneficioPrvproxy = beneficioPrvproxy;
            _beneficioproxy = beneficioproxy;
            _tarifarioproxy = tarifarioproxy;
            _ctaproveedorproxy = ctaproveedorproxy;
            _tarifariocmpsproxy = tarifariocmpsproxy;

            _tarifarioPrvdrProxy = tarifarioprvdrproxy;
            _procedimientosProxy = procedimientosproxy;
            _cpmsPrvdrProxy = cpmsprvdrproxy;
            _cpmsProxy = cpmsproxy;
            _nomencladorPrvdrProxy = nomencladorprvdrproxy;
            _nomencladorProxy = nomencladorproxy;
        }
        #endregion
        public IActionResult Index()
        {
            return View();
        }
        #region Proveedor
        [HttpGet("listar-tabla")]
        public async Task<IActionResult> listarProveedor(string gdestdo)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _proveedorproxy.ObtenerDataTable(parameters,gdestdo);
            return Ok(retorno);
        }
        [HttpGet("listar")]
        public async Task<IActionResult> Listar()
        {
            var datos = await _proveedorproxy.Listar();
            return Ok(datos);
        }
        [HttpGet("obtener")]
        public async Task<IActionResult> obtenerProveedor(int id)
        {
            var retorno = await _proveedorproxy.Obtener(id);
            return Ok(retorno); ;
        }
        [HttpPost("insertar")]
        public async Task<IActionResult> insertarProveedor(ProveedorDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _proveedorproxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpPost("actualizar")]
        public async Task<IActionResult> actualizarProveedor(ProveedorDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _proveedorproxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("eliminar")]
        public async Task<IActionResult> eliminarProveedor(int id)
        {
            var entidad = new ProveedorDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _proveedorproxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpGet("listar-persona")]
        public async Task<IActionResult> listarPersona(string tPersona, string tDocumento, string nDocumento, string Datos, string fDesde, string fHasta, string Estado)
        {
            var parametrosDT = _dataTableService.GetSentParameters();
            var retorno = await _personaproxy.ObtenerDataTable(parametrosDT, tPersona, tDocumento, nDocumento, Datos, fDesde, fHasta, Estado);
            return Ok(retorno);
        }
        [HttpGet("obtener-persona")]
        public async Task<IActionResult> obtenerPersona(int id)
        {
            var retorno = await _personaproxy.Obtener(id);
            return Ok(retorno);
        }
        #endregion
        #region Cuentas
        [HttpGet("listar-dtCuentaPrv")]
        public async Task<IActionResult> listardtCtaPrv(int idprvdr)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _ctaproveedorproxy.ObtenerDataTable(parameters, idprvdr);
            return Ok(retorno);
        }
        [HttpGet("listar-cuentaPrv")]
        public async Task<IActionResult> ListarCtaPrv(int idprvdr)
        {
            var datos = await _ctaproveedorproxy.Listar(idprvdr);
            return Ok(datos);
        }
        [HttpGet("obtener-ctaPrv")]
        public async Task<IActionResult> obtenerCtaPrv(int id)
        {
            var retorno = await _ctaproveedorproxy.Obtener(id);
            return Ok(retorno); ;
        }
        [HttpPost("insertar-ctaPrv")]
        public async Task<IActionResult> insertarCtaPrv(CuentaProveedorDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _ctaproveedorproxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpPost("actualizar-ctaPrv")]
        public async Task<IActionResult> actualizarCtaPrv(CuentaProveedorDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _ctaproveedorproxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("eliminar-ctaPrv")]
        public async Task<IActionResult> eliminarCtaPrv(int id)
        {
            var entidad = new CuentaProveedorDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _ctaproveedorproxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpGet("listar-dtCuentaPer")]
        public async Task<IActionResult> listardtCtaPer(string gdestdo)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _proveedorproxy.ObtenerDataTable(parameters,gdestdo);
            return Ok(retorno);
        }
        #endregion
        #region equivalencias
        [HttpGet("listar-dtEquivalencias")]
        public async Task<IActionResult> listarEquivalencia(int idprvdr)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _equivalenciaproxy.ObtenerDataTable(parameters, idprvdr);
            return Ok(retorno); ;
        }
        [HttpGet("obtener-equivalencia")]
        public async Task<IActionResult> obtenerEquivalencia(int id)
        {
            var retorno = await _equivalenciaproxy.Obtener(id);
            return Ok(retorno); ;
        }
        [HttpPost("insertar-equivalencia")]
        public async Task<IActionResult> insertarEquivalencia(EPSucursalProveedorDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _equivalenciaproxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpPost("actualizar-equivalencia")]
        public async Task<IActionResult> actualizarEquivalencia(EPSucursalProveedorDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _equivalenciaproxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("eliminar-equivalencia")]
        public async Task<IActionResult> eliminarEquivalencia(int id)
        {
            var entidad = new EPSucursalProveedorDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _equivalenciaproxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }

        [HttpGet("listar-dtTarifario-segus")]
        public async Task<IActionResult> listarSegus()
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _tarifarioproxy.ObtenerDataTable(parameters);
            return Ok(retorno); ;
        }
        #region TarifarioCMPS
        [HttpGet("listar-dtTarifarioCMPS")]
        public async Task<IActionResult> listardtTarifarioCMPS()
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _tarifariocmpsproxy.ObtenerDataTable(parameters);
            return Ok(retorno); ;
        }
        [HttpGet("listar-TarifarioCMPS")]
        public async Task<IActionResult> listarTarifarioCMPS()
        {
            var retorno = await _tarifariocmpsproxy.Listar();
            return Ok(retorno); ;
        }
        [HttpGet("obtener-TarifarioCMPS")]
        public async Task<IActionResult> obtenerTarifarioCMPS(int id)
        {
            var retorno = await _tarifariocmpsproxy.Obtener(id);
            return Ok(retorno); ;
        }
        #endregion
        #endregion
        #region sucursales
        [HttpGet("listar-dtSucursales")]
        public async Task<IActionResult> listarSucursal(int idprvdr)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _sucursalproxy.ObtenerDataTable(parameters, idprvdr);
            return Ok(retorno); ;
        }
        [HttpGet("obtener-sucursales")]
        public async Task<IActionResult> obtenerSucursal(int id)
        {
            var retorno = await _sucursalproxy.Obtener(id);
            return Ok(retorno); ;
        }
        [HttpPost("insertar-sucursales")]
        public async Task<IActionResult> insertarSucursal(SucursalProveedorDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _sucursalproxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpPost("actualizar-sucursales")]
        public async Task<IActionResult> actualizarSucursal(SucursalProveedorDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _sucursalproxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("eliminar-sucursales")]
        public async Task<IActionResult> eliminarSucursal(int id)
        {
            var entidad = new SucursalProveedorDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _sucursalproxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        #endregion

        #region Tarifario-proveedor
        [HttpGet("listar-dtTarifarioPrv")]
        public async Task<IActionResult> listarTarifarioPrv(int idprvdr)//, int idgrproc)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _tarifarioPrvdrProxy.ObtenerDataTable(parameters, idprvdr); //, idgrproc);
            return Ok(retorno); ;
        }
        [HttpGet("obtener-tarifarioPrv")]
        public async Task<IActionResult> obtenerTarifarioPrv(int id)
        {
            var retorno = await _tarifarioPrvdrProxy.Obtener(id);
            return Ok(retorno); ;
        }
        [HttpPost("insertar-tarifarioPrv")]
        public async Task<IActionResult> insertarTarifarioPrv(TarifarioconProveedorDto data)
        {
            data.ucrcn = User.GetUserCode();
            data.uedcn = User.GetUserCode();
            var retorno = await _tarifarioPrvdrProxy.Insertar(data);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpPost("actualizar-tarifarioPrv")]
        public async Task<IActionResult> actualizarTarifarioPrv(TarifarioProveedorDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _tarifarioPrvdrProxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("eliminar-tarifarioPrv")]
        public async Task<IActionResult> eliminarTarifarioPrv(int id)
        {
            var entidad = new TarifarioProveedorDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _tarifarioPrvdrProxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpGet("listar-dtTarifario")]
        public async Task<IActionResult> listarTarifario(string gdttrfro, string idprvdr)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _procedimientosProxy.ObtenerDataTable(parameters, gdttrfro, idprvdr);
            return Ok(retorno); ;
        }
        #endregion

        #region Cpms-proveedor
        [HttpGet("listar-dtCpmsPrv")]
        public async Task<IActionResult> listarCpmsPrv(int idprvdr)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _cpmsPrvdrProxy.ObtenerDataTable(parameters, idprvdr);
            return Ok(retorno); ;
        }
        [HttpGet("obtener-cpmsPrv")]
        public async Task<IActionResult> obtenerCpmsPrv(int id)
        {
            var retorno = await _cpmsPrvdrProxy.Obtener(id);
            return Ok(retorno); ;
        }
        [HttpPost("insertar-cpmsPrv")]
        public async Task<IActionResult> insertarCpmsPrv(CpmsconProveedorDto data)
        {
            data.ucrcn = User.GetUserCode();
            data.uedcn = User.GetUserCode();
            var retorno = await _cpmsPrvdrProxy.Insertar(data);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpPost("actualizar-cpmsPrv")]
        public async Task<IActionResult> actualizarCpmsPrv(CpmsProveedorDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _cpmsPrvdrProxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("eliminar-cpmsPrv")]
        public async Task<IActionResult> eliminarCpmsPrv(int id)
        {
            var entidad = new CpmsProveedorDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _cpmsPrvdrProxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpGet("listar-dtCpms")]
        public async Task<IActionResult> listarCpms(string gdestdo)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _cpmsProxy.ObtenerDataTable(parameters,gdestdo);
            return Ok(retorno); ;
        }
        #endregion
        #region Nomenclador-proveedor
        [HttpGet("listar-dtNomencladorPrv")]
        public async Task<IActionResult> listarNomencladorPrv(int idprvdr)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _nomencladorPrvdrProxy.ObtenerDataTable(parameters, idprvdr);
            return Ok(retorno); ;
        }
        [HttpGet("obtener-nomencladorPrv")]
        public async Task<IActionResult> obtenerNomencladorPrv(int id)
        {
            var retorno = await _nomencladorPrvdrProxy.Obtener(id);
            return Ok(retorno); ;
        }
        [HttpPost("insertar-nomencladorPrv")]
        public async Task<IActionResult> insertarNomencladoPrv(NomencladorconProveedorDto data)
        {
            data.ucrcn = User.GetUserCode();
            data.uedcn = User.GetUserCode();
            var retorno = await _nomencladorPrvdrProxy.Insertar(data);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpPost("actualizar-nomencladorPrv")]
        public async Task<IActionResult> actualizarNomencladorPrv(NomencladorProveedorDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _nomencladorPrvdrProxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("eliminar-nomencladorPrv")]
        public async Task<IActionResult> eliminarNomencladorPrv(int id)
        {
            var entidad = new NomencladorProveedorDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _nomencladorPrvdrProxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        //PENDIENTE DE CAMBIOS QUINAYA
        [HttpGet("listar-dtNomenclador")]
        public async Task<IActionResult> listarNomenclador(string gdestdo)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _nomencladorProxy.ObtenerDataTable(parameters,gdestdo);
            return Ok(retorno); ;
        }
        #endregion

        #region  beneficios-proveedor
        [HttpGet("listar-dtBeneficioPrv")]
        public async Task<IActionResult> listarBeneficioPrv(int idprvdr, int idscrsl)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _beneficioPrvproxy.ObtenerDataTable(parameters, idprvdr, idscrsl);
            return Ok(retorno); ;
        }
        [HttpGet("obtener-beneficioPrv")]
        public async Task<IActionResult> obtenerBeneficioPrv(int id)
        {
            var retorno = await _beneficioPrvproxy.Obtener(id);
            return Ok(retorno); ;
        }
        [HttpPost("insertar-beneficioPrv")]
        public async Task<IActionResult> insertarBeneficioPrv(BeneficioScrslPrvdrDto data)
        {
            data.ucrcn = User.GetUserCode();
            data.uedcn = User.GetUserCode();
            var retorno = await _beneficioPrvproxy.Insertar(data);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpPost("actualizar-beneficioPrv")]
        public async Task<IActionResult> actualizarBeneficioPrv(BSProveedorDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _beneficioPrvproxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("eliminar-beneficioPrv")]
        public async Task<IActionResult> eliminarBeneficioPrv(int id)
        {
            var entidad = new BSProveedorDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _beneficioPrvproxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpGet("listar-dtBeneficio")]
        public async Task<IActionResult> listarBeneficio(string gdestdo,string idprvdr)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _beneficioproxy.ObtenerDataTable(parameters, gdestdo, idprvdr);
            return Ok(retorno); ;
        }
        #endregion
    }
}