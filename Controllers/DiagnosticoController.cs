using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.Negocios.Aseguramiento;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using FOSMAR.PER.WEB.Filters;

namespace FOSMAR.PER.WEB.Controllers
{
    [Route("diagnostico")]
    [Authorize]
    [ServiceFilter(typeof(AuthLogin))]
    public class DiagnosticoController : Controller
    {
        private readonly IDiagnosticoProxy _diagnosticoProxy;
        private readonly IDataTableService _dataTableService;
        private readonly ISelect2Service _select2Service;

        public DiagnosticoController(IDiagnosticoProxy diagnosticoProxy,
            IDataTableService dataTableService,
            ISelect2Service select2Service)
        {
            _diagnosticoProxy = diagnosticoProxy;
            _dataTableService = dataTableService;
            _select2Service = select2Service;
        }

        [HttpGet("listarDiagnostico")]
        public async Task<IActionResult> ListarBeneficio()
        {
            var param = _select2Service.GetRequestParameters();
            var retorno = await _diagnosticoProxy.Listar(param);
            return Ok(retorno); ;
        }
    }
}
