using FOSMAR.CORE.Extensions;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.Negocios.Modelos.Aseguramiento.ContratoProveedor;
using FOSMAR.Negocios.Modelos.Aseguramiento.ContratoSucursalProveedor;
using FOSMAR.Negocios.Modelos.Aseguramiento.ContratoCoberturasProveedor;
using FOSMAR.Negocios.Modelos.Aseguramiento.VersionContratoProveedor;
using FOSMAR.Negocios.Modelos.Aseguramiento.ContratoTarifaDet;
using FOSMAR.Negocios.Modelos.Aseguramiento.DocumentoContratoProveedor;
using FOSMAR.Negocios.Modelos.Aseguramiento.Procedimientos;
using FOSMAR.Negocios.Modelos.Aseguramiento.TarifarioProveedor;
using FOSMAR.Negocios.Modelos.Aseguramiento.CpmsProveedor;
using FOSMAR.Negocios.Modelos.Aseguramiento.NomencladorProveedor;
using FOSMAR.Negocios.Aseguramiento;
using FOSMAR.Negocios.Persona;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using FOSMAR.PER.WEB.Filters;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FOSMAR.Negocios.Modelos.Aseguramiento.DetalleVersion;
using FOSMAR.Negocios.Modelos.Aseguramiento.ContratoCoberturaDet;
using ClosedXML.Excel;
using System.IO;
using Microsoft.AspNetCore.Http;
using FOSMAR.CORE.Structs;


namespace FOSMAR.PER.WEB.Controllers
{
    [Route("ContratoProveedor")]
    [Authorize]
    [ServiceFilter(typeof(AuthLogin))]
    public class ContratoProveedorController : Controller
    {
        private readonly IDataTableService _dataTableService;
        private readonly IContratoProveedorProxy _contratoproveedorproxy;
        private readonly ICSucursalProveedorProxy _CSucursalProveedorproxy;
        private readonly ICCoberturasProveedorProxy _CCoberturasProveedorProxy;
        private readonly IVersionContratoProveedorProxy _VContratoProveedorProxy;
        private readonly ISucursalProveedorProxy _sucursalproxy;
        private readonly IDetalleVersionProxy _dtversionproxy;
        private readonly IConfigContratoCoberturaProxy _contratocoberturadetproxy;
        private readonly IBSProveedorProxy _beneficioPrvproxy;
        private readonly ICuentaProveedorProxy _ctaproveedorproxy;
        private readonly IConfigContratoTarifaProxy _contratotarifadetproxy;
        private readonly IDocumentoContratoProveedorProxy _documentoContratoProveedorproxy;
        private readonly IEPSucursalProveedorProxy _EquivalenciaProxy;
        private readonly ITarifarioProveedorProxy _tarifarioProveedorProxy;
        private readonly ICpmsProveedorProxy _cpmsProveedorProxy;
        private readonly INomencladorProveedorProxy _nomencladorProveedorProxy;


        public ContratoProveedorController(IDataTableService dataTableService,
                                    IContratoProveedorProxy contratoproveedorproxy,
                                    ICSucursalProveedorProxy cSucursalProveedorProxy,
                                    ICCoberturasProveedorProxy cCoberturasProveedorProxy,
                                    IVersionContratoProveedorProxy vContratoProveedorProxy,
                                    ISucursalProveedorProxy sucursalproxy,
                                    IDetalleVersionProxy detalleversionproxy,
                                    IConfigContratoCoberturaProxy contratocoberturadetproxy,
                                    IBSProveedorProxy bsproveedorproxy,
                                    ICuentaProveedorProxy cuentaproveedorproxy,
                                    IConfigContratoTarifaProxy contratoTarifaDetProxy,
                                    IDocumentoContratoProveedorProxy documentoContratoProveedorProxy,
                                    IEPSucursalProveedorProxy EquivalenciaProxy,
                                    ITarifarioProveedorProxy tarifarioproveedorproxy,
                                    ICpmsProveedorProxy cpmsproveedorproxy,
                                    INomencladorProveedorProxy nomencladorproveedorproxy)

        {
            _dataTableService = dataTableService;
            _contratoproveedorproxy = contratoproveedorproxy;
            _CSucursalProveedorproxy = cSucursalProveedorProxy;
            _CCoberturasProveedorProxy = cCoberturasProveedorProxy;
            _VContratoProveedorProxy = vContratoProveedorProxy;
            _sucursalproxy = sucursalproxy;
            _dtversionproxy = detalleversionproxy;
            _contratocoberturadetproxy = contratocoberturadetproxy;
            _beneficioPrvproxy = bsproveedorproxy;
            _ctaproveedorproxy = cuentaproveedorproxy;
            _contratotarifadetproxy = contratoTarifaDetProxy;
            _documentoContratoProveedorproxy = documentoContratoProveedorProxy;
            _EquivalenciaProxy = EquivalenciaProxy;
            _tarifarioProveedorProxy = tarifarioproveedorproxy;
            _cpmsProveedorProxy = cpmsproveedorproxy;
            _nomencladorProveedorProxy = nomencladorproveedorproxy;
        }

        public IActionResult Index()
        {
            return View();
        }

        #region contratoProveedor
        [HttpGet("listar-tabla")]
        public async Task<IActionResult> listarContratoProveedor()
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _contratoproveedorproxy.ObtenerDataTable(parameters);
            return Ok(retorno);
        }
        [HttpGet("listar")]
        public async Task<IActionResult> Listar()
        {
            var datos = await _contratoproveedorproxy.Listar();
            return Ok(datos);
        }

        [HttpGet("obtener")]
        public async Task<IActionResult> obtenerContratoProveedor(int id)
        {
            var retorno = await _contratoproveedorproxy.Obtener(id);
            return Ok(retorno);
        }
        [HttpPost("insertar")]
        public async Task<IActionResult> insertarContratoProveedor(ContratoProveedorDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _contratoproveedorproxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpPost("actualizar")]
        public async Task<IActionResult> actualizarContratoProveedor(ContratoProveedorDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _contratoproveedorproxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("eliminar")]
        public async Task<IActionResult> eliminarContratoProveedor(int id)
        {
            var entidad = new ContratoProveedorDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _contratoproveedorproxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        #endregion

        #region version
        [HttpGet("listar-version")]
        public async Task<IActionResult> listarVersion(int idcprvdr)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _VContratoProveedorProxy.ObtenerDataTable(parameters, idcprvdr);
            return Ok(retorno);
        }
        [HttpGet("obtener-version")]
        public async Task<IActionResult> obtenerVersion(int id, int idcprvdr)
        {
            var retorno = await _VContratoProveedorProxy.Obtener(id, idcprvdr);
            return Ok(retorno);
        }
        [HttpPost("insertar-version")]
        public async Task<IActionResult> insertarVersion(VersionContratoProveedorDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _VContratoProveedorProxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpPost("actualizar-version")]
        public async Task<IActionResult> actualizarVersion(VersionContratoProveedorDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _VContratoProveedorProxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("eliminar-version")]
        public async Task<IActionResult> eliminarVersion(int id)
        {
            var entidad = new VersionContratoProveedorDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _VContratoProveedorProxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }

        [HttpPost("grabarFechaFiniquito")]
        public async Task<IActionResult> actualizarFiniquito(VersionFiniquitoDto entidad) {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _VContratoProveedorProxy.actualizarFiniquito(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        #endregion
        //Contrato sucursales
        [HttpGet("listar-dtSucursales")]
        public async Task<IActionResult> listarSucursal(int idprvdr)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _sucursalproxy.ObtenerDataTable(parameters, idprvdr);
            return Ok(retorno); ;
        }
        [HttpGet("dtsucursaldisponible")]
        public async Task<IActionResult> lstDTSucursalDisponible(int idprvdr, int idcprvdr, int idvrsn)
        {
            var parameters = _dataTableService.GetSentParameters();
            var empresas = await _sucursalproxy.lstDTSucursalDisponible(parameters, idprvdr, idcprvdr, idvrsn);
            return Ok(empresas);
        }

        [HttpGet("listar-CSucursales")]
        public async Task<IActionResult> listarCSucursal(int idprvdr)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _CSucursalProveedorproxy.ObtenerDataTable(parameters, idprvdr);
            return Ok(retorno); ;
        }
        [HttpGet("obtener-Csucursales")]
        public async Task<IActionResult> obtenerCSucursal(int id)
        {
            var retorno = await _CSucursalProveedorproxy.Obtener(id);
            return Ok(retorno); ;
        }

        [HttpGet("obteneracuerdotarifa")]
        public async Task<IActionResult> ObtenerAcuerdoTarifa(int idacrdo)
        {
            var datos = await _CSucursalProveedorproxy.ObtenerAcuerdoTarifa(idacrdo);
            return Ok(datos);
        }

        [HttpPost("insertar-Csucursales")]
        public async Task<IActionResult> insertarCSucursal(CSucursalProveedorDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _CSucursalProveedorproxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpPost("actualizar-Csucursales")]
        public async Task<IActionResult> actualizarCSucursal(CSucursalProveedorDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _CSucursalProveedorproxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("eliminar-sucursales")]
        public async Task<IActionResult> eliminarCSucursal(int id)
        {
            var entidad = new CSucursalProveedorDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _CSucursalProveedorproxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }

        // Contrato Coberturas

        [HttpGet("listar-CCoberturas")]
        public async Task<IActionResult> listarCCoberturas(int idacrdo)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _CCoberturasProveedorProxy.ObtenerDataTable(parameters, idacrdo);
            return Ok(retorno); ;
        }
        [HttpGet("obtener-Ccoberturas")]
        public async Task<IActionResult> obtenerCCoberturas(int id)
        {
            var retorno = await _CCoberturasProveedorProxy.Obtener(id);
            return Ok(retorno); ;
        }
        [HttpPost("insertar-Ccoberturas")]
        public async Task<IActionResult> insertarCCoberturas(CCoberturasProveedorDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _CCoberturasProveedorProxy.Insertar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok(retorno.CodEstado);
        }
        [HttpPost("actualizar-Ccoberturas")]
        public async Task<IActionResult> actualizarCSucursal(CCoberturasProveedorDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _CCoberturasProveedorProxy.Actualizar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }
        [HttpPost("eliminar-Ccoberturas")]
        public async Task<IActionResult> eliminarCCoberturas(int id)
        {
            var entidad = new CCoberturasProveedorDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _CCoberturasProveedorProxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }


        #region DetalleVersion
        [HttpGet("listarDtDetVersion")]
        public async Task<IActionResult> ObtenerDataTable(int idvrsn)
        {
            var parameters = _dataTableService.GetSentParameters();
            var empresas = await _dtversionproxy.obtenerDtDetVersion(parameters, idvrsn);
            return Ok(empresas);
        }
        [HttpGet("listarDetVersion")]
        public async Task<IActionResult> Listar(int idvrsn)
        {
            var parameters = _dataTableService.GetSentParameters();
            var empresas = await _dtversionproxy.obtenerDtDetVersion(parameters, idvrsn);
            return Ok(empresas);
        }
        [HttpPost("obtenerDetVersion")]//httpGET
        public async Task<IActionResult> Obtener(int id)
        {
            var empresa = await _dtversionproxy.obtenerDetVersion(id);
            return Ok(empresa);
        }
        [HttpPost("insertarDetVersion")]
        public async Task<IActionResult> Insertar(DetalleVersionDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var resultado = await _dtversionproxy.insertar(entidad);
            if (!resultado.EsSatisfactoria)
                return BadRequest(resultado.Mensaje);
            return Ok(resultado.CodEstado);
        }
        [HttpPost("actualizarDetVersion")]
        public async Task<IActionResult> Actualizar(DetalleVersionDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var resultado = await _dtversionproxy.actualizar(entidad);
            if (!resultado.EsSatisfactoria)
                return BadRequest(resultado.Mensaje);
            return Ok(resultado);
        }
        [HttpPost("eliminarDetVersion")]
        public async Task<IActionResult> Eliminar(DetalleVersionDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var resultado = await _dtversionproxy.eliminar(entidad);
            return Ok(resultado);
        }
        #endregion

        #region Contrato Cobertura Detalle
        [HttpGet("listar-dtBeneficioPrv")]
        public async Task<IActionResult> listarBeneficioPrv(int idprvdr, int idscrsl)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _beneficioPrvproxy.ObtenerDataTable(parameters, idprvdr, idscrsl);
            return Ok(retorno);
        }
        [HttpGet("listardtcontratocoberturadet")]
        public async Task<IActionResult> obtenerDtContratoCoberturaDet(int idacrdo)
        {
            var parameters = _dataTableService.GetSentParameters();
            var empresas = await _contratocoberturadetproxy.obtenerDataTable(parameters, idacrdo);
            return Ok(empresas);
        }
        [HttpGet("listarcontratocoberturadet")]
        public async Task<IActionResult> listarContratoCoberturaDet(int idacrdo)
        {
            var empresas = await _contratocoberturadetproxy.listar(idacrdo);
            return Ok(empresas);
        }
        [HttpGet("obtenercontratocoberturadet")]
        public async Task<IActionResult> obtenerContratoCoberturaDet(int id)
        {
            var empresa = await _contratocoberturadetproxy.obtener(id);
            return Ok(empresa);
        }
        [HttpPost("insertarcontratocoberturadet")]
        public async Task<IActionResult> insertarContratoCoberturaDet(ContratoCoberturaDetDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var resultado = await _contratocoberturadetproxy.Insertar(entidad);
            if (!resultado.EsSatisfactoria)
                return BadRequest(resultado.Mensaje);
            return Ok(resultado.CodEstado);
        }
        [HttpPost("actualizarcontratocoberturadet")]
        public async Task<IActionResult> actualizarContratoCoberturaDet(ContratoCoberturaDetDto entidad)
        {
            entidad.UEDCN = User.GetUserCode();
            var resultado = await _contratocoberturadetproxy.Actualizar(entidad);
            return Ok(resultado);
        }
        [HttpPost("eliminarcontratocoberturadet")]
        public async Task<IActionResult> eliminarContratoCoberturaDet(ContratoCoberturaDetDto entidad)
        {
            var resultado = await _contratocoberturadetproxy.Eliminar(entidad);
            return Ok(resultado);
        }
        #endregion

        [HttpGet("listar-dtCuentaPrv")]
        public async Task<IActionResult> listardtCtaPrv(int idprvdr)
        {
            var parameters = _dataTableService.GetSentParameters();
            parameters.RecordsPerDraw = 2;
            var retorno = await _ctaproveedorproxy.ObtenerDataTable(parameters, idprvdr);
            return Ok(retorno);
        }

        [HttpPost("insertar-tramacobertura")]
        public async Task<IActionResult> insertartramacobertura(IFormFile f_resultado, string s_hfIdAcuerdo)
        {
            ContratoCoberturaDetDto eContratoCoberturaDetDto = null;
            List<ContratoCoberturaDetDto> listLab = new List<ContratoCoberturaDetDto>();
            string cUsuario = HttpContext.User.Identity.Name;
            try
            {
                var tipoArchivo = f_resultado.FileName.Split(".")[1];
                if (f_resultado.Length == 0)
                {
                    return BadRequest("Seleccione el resultado.");
                }
                if (tipoArchivo != "xlsx" && tipoArchivo != "XLSX")
                {
                    return BadRequest("Archivo no soportado, solo se admite Excel(xlsx).");
                }
                var sExcel = f_resultado.OpenReadStream();
                long pesoExcel;
                byte[] bytesExcel;
                using (var msExcel = new MemoryStream())
                {
                    await sExcel.CopyToAsync(msExcel);
                    bytesExcel = msExcel.ToArray();
                    pesoExcel = msExcel.Length;
                    sExcel.Dispose();
                    using (var wbLeerResultado = new XLWorkbook(msExcel))
                    {
                        IXLWorksheet hoja = wbLeerResultado.Worksheet(1); //var hoja = wbLeerResultado.Worksheets.Where(x => x.Name == "Hoja 1").First();
                        int rowLen = 2;
                        int colLen = 1;
                        bool cntrlEstado = true;
                        while (cntrlEstado)
                        {
                            var dato = hoja.Cell(rowLen, colLen).GetString().ToUpper();
                            bool check = false;
                            int NroColumnas = 7;
                            for (int i = 1; i < NroColumnas; i++)
                            {
                                check = hoja.Cell(rowLen, i).IsMerged();
                                if (check)
                                {
                                    throw (new Exception("El archivo contiene celdas combinadas, por favor validar."));
                                }
                            }
                            if (dato.Length == 0) { cntrlEstado = false; }
                            else
                            {
                                eContratoCoberturaDetDto = new ContratoCoberturaDetDto();
                                eContratoCoberturaDetDto.IDACRDO = s_hfIdAcuerdo;
                                eContratoCoberturaDetDto.IDCBRTRA = hoja.Cell(rowLen, 1).GetString().ToUpper();
                                eContratoCoberturaDetDto.GDDINCLDO = hoja.Cell(rowLen, 2).GetString().ToUpper();
                                eContratoCoberturaDetDto.GDPINCLDO = hoja.Cell(rowLen, 3).GetString().ToUpper();
                                eContratoCoberturaDetDto.CFPIMPRTE = hoja.Cell(rowLen, 4).GetString().ToUpper();
                                eContratoCoberturaDetDto.CFPDS = hoja.Cell(rowLen, 5).GetString().ToUpper();
                                eContratoCoberturaDetDto.CFPVCAPTL = hoja.Cell(rowLen, 6).GetString().ToUpper();
                                eContratoCoberturaDetDto.GDESTDO = hoja.Cell(rowLen, 7).GetString().ToUpper();

                                listLab.Add(eContratoCoberturaDetDto);
                                await insertarContratoCoberturaDet(eContratoCoberturaDetDto);
                            }
                            rowLen++;

                        }
                    }
                }
                return Ok("Resultado agregado con éxito.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        #region Adjuntar Documento Contrato Proveedor

        [HttpGet("listar-documentoContratoProveedor")]
        public async Task<IActionResult> listarDocumentoContratoProveedor(int idcprvdr)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _documentoContratoProveedorproxy.obtenerDataTable(parameters, idcprvdr);
            return Ok(retorno);
        }
        [HttpPost("insertardocumentoContratoProveedor")]
        public async Task<IActionResult> insertarDocumentoContratoProveedor(DocumentoContratoProveedorDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var resultado = await _documentoContratoProveedorproxy.Insertar(entidad);
            if (!resultado.EsSatisfactoria)
                return BadRequest(resultado.Mensaje);
            return Ok(resultado.CodEstado);
        }

        [HttpPost("insertar-imagendocumento")]
        public async Task<IActionResult> insertarimagenDocumento(IFormFile f_resultado, string s_hfIdcprvdr)
        {

            DocumentoContratoProveedorDto eoDocumentoContratoProveedorDto = null;
            RespuestaEntidad<DocumentoContratoProveedorDto> data = new RespuestaEntidad<DocumentoContratoProveedorDto>();
            string cUsuario = HttpContext.User.Identity.Name;
            try
            {
                IFormFile file = f_resultado;
                string extension = Path.GetExtension(file.FileName);
                string name = f_resultado.FileName;
                string ruta = "Documentos/pdf";
                string tipoDoc = "pdf";
                string stado = "A";

                var tipoArchivo = f_resultado.FileName.Split(".")[1];
                if (f_resultado.Length == 0)
                {
                    return BadRequest("Seleccione el resultado.");
                }
                if (tipoArchivo != "pdf" && tipoArchivo != "PDF")
                {
                    return BadRequest("Archivo no soportado, solo se admite pdf(.pdf).");
                }
                string tamanoArchivo = "30000";
                decimal tamano = (((file.Length / 1024) * 100) / 100);
                if (tamano > Convert.ToInt32(tamanoArchivo))
                {
                    data.Mensaje = "El tamaño no es válido";
                    return Json(data);
                }
                var ImgStream = file.OpenReadStream();
                long TamImagen;
                byte[] bytesFile;
                using (var msImagen = new MemoryStream())
                {
                    await ImgStream.CopyToAsync(msImagen);
                    bytesFile = msImagen.ToArray();
                    TamImagen = msImagen.Length;
                }
                eoDocumentoContratoProveedorDto = new DocumentoContratoProveedorDto();
                eoDocumentoContratoProveedorDto.IDCPRVDR = s_hfIdcprvdr;
                eoDocumentoContratoProveedorDto.ARCHVO = bytesFile;
                eoDocumentoContratoProveedorDto.RARCHVO = ruta;
                eoDocumentoContratoProveedorDto.NARCHVO = name;
                eoDocumentoContratoProveedorDto.TARCHVO = tamano.ToString();
                eoDocumentoContratoProveedorDto.GDTARCHVO = tipoDoc;
                eoDocumentoContratoProveedorDto.GDESTDO = stado;
                await insertarDocumentoContratoProveedor(eoDocumentoContratoProveedorDto);

                //data.Mensaje = "Imagen agregada con éxito.";
                //return Json(data);
                return Ok("Archivo agregado con éxito.");

            }
            catch (Exception ex)
            {
                //data.Mensaje = ex.Message;
                //return Json(data);
                return BadRequest(ex.Message);

            }
        }

        [HttpGet("obtener-documentoContratoProveedor")]
        public async Task<IActionResult> obtenerdocumento(int id)
        {
            var retorno = await _documentoContratoProveedorproxy.obtener(id);
            return Ok(retorno);
        }
        [HttpPost("eliminar-Documento")]
        public async Task<IActionResult> eliminarDocumento(int id)
        {
            var entidad = new DocumentoContratoProveedorDto();
            entidad.ID = id;
            entidad.UEDCN = User.GetUserCode();
            var retorno = await _documentoContratoProveedorproxy.Eliminar(entidad);
            if (!retorno.EsSatisfactoria)
                return BadRequest(retorno.Mensaje);
            return Ok();
        }


        [HttpGet("obtener-descargarDocumento")]
        public async Task<FileResult> DescargarDocumento(int id)
        {
            DocumentoContratoProveedorDto eoDocumentoContratoProveedorDto = null;
            eoDocumentoContratoProveedorDto = new DocumentoContratoProveedorDto();
            eoDocumentoContratoProveedorDto.ID = id;
            var retorno = await _documentoContratoProveedorproxy.obtener(id);
            return File(retorno.ARCHVO, System.Net.Mime.MediaTypeNames.Application.Octet, retorno.NARCHVO);
        }

        #endregion
        [HttpGet("listar-contratoTarifadet")]
        public async Task<IActionResult> listarcontratoTarifadet(int idacrdo)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _contratotarifadetproxy.obtenerDataTable(parameters, idacrdo);
            return Ok(retorno);
        }
        [HttpPost("insertarcontratoTarifadet")]
        public async Task<IActionResult> insertarcontratoTarifadet(ContratoTarifaDetDto entidad)
        {
            entidad.UCRCN = User.GetUserCode();
            entidad.UEDCN = User.GetUserCode();
            var resultado = await _contratotarifadetproxy.Insertar(entidad);
            if (!resultado.EsSatisfactoria)
                return BadRequest(resultado.Mensaje);
            return Ok(resultado.CodEstado);
        }
        [HttpPost("guardaracontratoTarifadet")]
        public async Task<IActionResult> guardaracontratoTarifadet(TarifaProcedimientosDto entidad) {
            entidad.UCRCN = User.GetUserCode();
            entidad.GDESTDO = "A";
            var resultado = await _contratotarifadetproxy.insertarTarifadet(entidad);
            if (!resultado.EsSatisfactoria)
                return BadRequest(resultado.Mensaje);
            return Ok(resultado.CodEstado);
        }


        [HttpPost("insertar-tramatarifa")]
        public async Task<IActionResult> insertartramatarifa(IFormFile f_resultado, string s_hfIdAcuerdo)
        {
            ContratoTarifaDetDto eoContratoTarifaDetDto = null;
            List<ContratoTarifaDetDto> listLab = new List<ContratoTarifaDetDto>();
            string cUsuario = HttpContext.User.Identity.Name;
            try
            {
                var tipoArchivo = f_resultado.FileName.Split(".")[1];
                if (f_resultado.Length == 0)
                {
                    return BadRequest("Seleccione el resultado.");
                }
                if (tipoArchivo != "xlsx" && tipoArchivo != "XLSX")
                {
                    return BadRequest("Archivo no soportado, solo se admite Excel(xlsx).");
                }
                var sExcel = f_resultado.OpenReadStream();
                long pesoExcel;
                byte[] bytesExcel;
                using (var msExcel = new MemoryStream())
                {
                    await sExcel.CopyToAsync(msExcel);
                    bytesExcel = msExcel.ToArray();
                    pesoExcel = msExcel.Length;
                    sExcel.Dispose();
                    using (var wbLeerResultado = new XLWorkbook(msExcel))
                    {
                        IXLWorksheet hoja = wbLeerResultado.Worksheet(1); //var hoja = wbLeerResultado.Worksheets.Where(x => x.Name == "Hoja 1").First();
                        int rowLen = 2;
                        int colLen = 1;
                        bool cntrlEstado = true;
                        while (cntrlEstado)
                        {
                            var dato = hoja.Cell(rowLen, colLen).GetString().ToUpper();
                            bool check = false;
                            int NroColumnas = 9;
                            for (int i = 1; i < NroColumnas; i++)
                            {
                                check = hoja.Cell(rowLen, i).IsMerged();
                                if (check)
                                {
                                    throw (new Exception("El archivo contiene celdas combinadas, por favor validar."));
                                }
                            }
                            if (dato.Length == 0) { cntrlEstado = false; }
                            else
                            {
                                eoContratoTarifaDetDto = new ContratoTarifaDetDto();
                                eoContratoTarifaDetDto.IDACRDO = s_hfIdAcuerdo;
                                eoContratoTarifaDetDto.GDTTRFRIO = hoja.Cell(rowLen, 1).GetString().ToUpper();
                                eoContratoTarifaDetDto.DSCRPCN = hoja.Cell(rowLen, 2).GetString().ToUpper();
                                eoContratoTarifaDetDto.GDTTSTNDR = hoja.Cell(rowLen, 3).GetString().ToUpper();
                                eoContratoTarifaDetDto.CTRFRIO = hoja.Cell(rowLen, 4).GetString().ToUpper();
                                eoContratoTarifaDetDto.UTSTNDR = hoja.Cell(rowLen, 5).GetString().ToUpper();
                                eoContratoTarifaDetDto.GDTPRCO = hoja.Cell(rowLen, 6).GetString().ToUpper();
                                eoContratoTarifaDetDto.PRCO = hoja.Cell(rowLen, 7).GetString().ToUpper();
                                eoContratoTarifaDetDto.GDESTDO = hoja.Cell(rowLen, 8).GetString().ToUpper();
                                listLab.Add(eoContratoTarifaDetDto);
                                await insertarcontratoTarifadet(eoContratoTarifaDetDto);
                            }
                            rowLen++;
                        }
                    }
                }
                return Ok("Resultado agregado con éxito.");
            }

            catch (Exception ex)
            {                
                return BadRequest(ex.Message);
            }
        }

        #region ConfiguracionTarifas
        [HttpGet("listarProcedimientosDT")]
        public async Task<IActionResult> listarProcedimientosDT(int idprvdr) {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _EquivalenciaProxy.lstProcedimientoProveedor(parameters, idprvdr);
            return Ok(retorno);
        }
        #endregion

        [HttpGet("listarProcedimientoSegusDT")]
        public async Task<IActionResult> listarTarifarioPrv(int idprvdr)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _tarifarioProveedorProxy.ObtenerDataTable(parameters, idprvdr);
            return Ok(retorno); ;
        }

        [HttpGet("listarProcedimientoCPMSDT")]
        public async Task<IActionResult> listarCpmsPrv(int idprvdr)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _cpmsProveedorProxy.ObtenerDataTable(parameters, idprvdr);
            return Ok(retorno); ;
        }
        [HttpGet("listarProcedimientoNomencladorDT")]
        public async Task<IActionResult> listarNomencladorPrv(int idprvdr)
        {
            var parameters = _dataTableService.GetSentParameters();
            var retorno = await _nomencladorProveedorProxy.ObtenerDataTable(parameters, idprvdr);
            return Ok(retorno); ;
        }
    }
}
