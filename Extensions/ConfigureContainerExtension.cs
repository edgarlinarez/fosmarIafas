using FOSMAR.CORE.Services.Implementations;
using FOSMAR.CORE.Services.Interfaces;
using FOSMAR.PER.WEB.Filters;
using FOSMAR.Negocios.Aseguramiento;
using FOSMAR.Negocios.Persona;
using FOSMAR.Negocios.General.Seguridad;
using FOSMAR.Negocios.Sunat;
using FOSMAR.Negocios.SuSalud;
using Microsoft.Extensions.DependencyInjection;
using SuSalud.Servicios;
using Sunat.Servicios;

namespace FOSMAR.PER.WEB.Extensions
{
    public static class ConfigureContainerExtension
    {
        public static void AddRepository(this IServiceCollection serviceCollection)
        {
        }
        public static void AddTransientServices(this IServiceCollection serviceCollection)
        {
            //Base
            //serviceCollection.AddTransient<IEmailService, EmailService>();
            //serviceCollection.AddTransient<IEmailTemplateService, EmailTemplateService>();
            serviceCollection.AddTransient<ISelect2Service, Select2Service>();
            serviceCollection.AddTransient<IDataTableService, DataTableService>();
            serviceCollection.AddTransient<IPaginationService, PaginationService>();
            serviceCollection.AddTransient<IViewRenderService, ViewRenderService>();

            //serviceCollection.AddTransient<ICloudStorageService, CloudStorageService>(); 

            //Proxies
            //persona
            serviceCollection.AddHttpClient<ICorreoProxy, CorreoProxy>();
            serviceCollection.AddHttpClient<IDireccionProxy, DireccionProxy>();
            serviceCollection.AddHttpClient<IDocumentoProxy, DocumentoProxy>();
            serviceCollection.AddHttpClient<IGradoProxy, GradoProxy>();
            serviceCollection.AddHttpClient<IPersonaProxy, PersonaProxy>();
            serviceCollection.AddHttpClient<ITelefonoProxy, TelefonoProxy>();
            serviceCollection.AddHttpClient<IDependenciaProxy, DependenciaProxy>();
            serviceCollection.AddHttpClient<ICuentaBancoProxy, CuentaBancoProxy>();

            serviceCollection.AddHttpClient<IContratanteProxy, ContratanteProxy>();

            //seguridad
            serviceCollection.AddHttpClient<IPerfilObjetoProxy, PerfilObjetoProxy>();
            serviceCollection.AddHttpClient<IGrupoDatoProxy, GrupoDatoProxy>();
            serviceCollection.AddHttpClient<IParametroProxy, ParametroProxy>();
            serviceCollection.AddHttpClient<IUbigeoProxy, UbigeoProxy>(); 
            serviceCollection.AddHttpClient<IUsuarioProxy, UsuarioProxy>();


            //susalud
            serviceCollection.AddTransient<ISuSaludSoap, SuSaludSoap>();
            serviceCollection.AddTransient<ISuSaludProxy, SuSaludProxy>();

            //sunat
            serviceCollection.AddTransient<ISunatSoap, SunatSoap>();
            serviceCollection.AddTransient<ISunatProxy, SunatProxy>();


            //aseguramiento
            serviceCollection.AddHttpClient<IBeneficioProxy, BeneficioProxy>();
            serviceCollection.AddHttpClient<IDiagnosticoProxy, DiagnosticoProxy>();
            serviceCollection.AddHttpClient<IProveedorProxy, ProveedorProxy>();
            serviceCollection.AddHttpClient<IEPSucursalProveedorProxy, EPSucursalProveedorProxy>();
            serviceCollection.AddHttpClient<ISucursalProveedorProxy, SucursalProveedorProxy>();
            serviceCollection.AddHttpClient<IBSProveedorProxy, BSProveedorProxy>();
            serviceCollection.AddHttpClient<ITarifarioProxy, TarifarioProxy>();
            serviceCollection.AddHttpClient<IProcedimientosProxy, ProcedimientoProxy>();
            serviceCollection.AddHttpClient<ITarifarioProxy, TarifarioProxy>();
            serviceCollection.AddHttpClient<IGrupoBeneficioProxy, GrupoBeneficioProxy>();
            serviceCollection.AddHttpClient<IGrupoProcedimientoProxy,   GrupoProcedimientoProxy>();
            serviceCollection.AddHttpClient<IContratoProveedorProxy, ContratoProveedorProxy>();
            serviceCollection.AddHttpClient<ICCoberturasProveedorProxy, CCoberturasProveedorProxy>();
            serviceCollection.AddHttpClient<ICSucursalProveedorProxy, CSucursalProveedorProxy>();
            serviceCollection.AddHttpClient<ICuentaProveedorProxy, CuentaProveedorProxy>();
            serviceCollection.AddHttpClient<ITarifarioCMPSProxy, TarifarioCMPSProxy>();            
            serviceCollection.AddHttpClient<IVersionContratoProveedorProxy, VersionContratoProveedorProxy>();
            serviceCollection.AddHttpClient<IDetalleVersionProxy, DetalleVersionProxy>();
            serviceCollection.AddHttpClient<IConfigContratoCoberturaProxy, ConfigContratoCoberturaProxy>();
            serviceCollection.AddHttpClient<IConfigContratoTarifaProxy, ConfigContratoTarifaProxy>();
            serviceCollection.AddHttpClient<IDocumentoContratoProveedorProxy, DocumentoContratoProveedorProxy>();
            serviceCollection.AddHttpClient<IRedProxy, RedProxy>();
            serviceCollection.AddHttpClient<IRedProvSucursalProxy, RedProvSucursalProxy>();
            serviceCollection.AddHttpClient<IPlanBeneficioProxy, PlanBeneficioProxy>();
            serviceCollection.AddHttpClient<IVersionPlanBeneficioProxy, VersionPlanBeneficioProxy>();
            serviceCollection.AddHttpClient<IDiagnosticoExcluidoProxy, DiagnosticoExcluidoProxy>();
            serviceCollection.AddHttpClient<IBeneficioPlanBeneficioProxy, BeneficioPlanBeneficioProxy>();
            serviceCollection.AddHttpClient<ICopagoPlanBeneficioProxy, CopagoPlanBeneficioProxy>();
            serviceCollection.AddHttpClient<IRedCopagoPlanBeneficioProxy, RedCopagoPlanBeneficioProxy>();
            serviceCollection.AddHttpClient<ICostoEtarioProxy, CostoEtarioProxy>();
            serviceCollection.AddHttpClient<IGrupoServicioCmpsProxy, GrupoServicioCmpsProxy>();
            serviceCollection.AddHttpClient<ISeccionCmpsProxy, SeccionCmpsProxy>();
            serviceCollection.AddHttpClient<ISubSeccionCpmsProxy, SubSeccionCpmsProxy>();
            serviceCollection.AddHttpClient<ICpmsProxy, CpmsProxy>();
            serviceCollection.AddHttpClient<ITarifarioProveedorProxy, TarifarioProveedorProxy>();
            serviceCollection.AddHttpClient<ICpmsProveedorProxy, CpmsProveedorProxy>();
            serviceCollection.AddHttpClient<INomencladorProveedorProxy, NomencladorProveedorProxy>();

            serviceCollection.AddHttpClient<ISolicitudSuscripcionProxy, SolicitudSuscripcionProxy>();

            serviceCollection.AddHttpClient<IGrupoServicioProxy, GrupoServicioProxy>();
            serviceCollection.AddHttpClient<ISubGrupoServicioProxy, SubGrupoServicioProxy>();
            serviceCollection.AddHttpClient<IServicioProxy, ServicioProxy>();
            serviceCollection.AddHttpClient<INomencladorProxy, NomencladorProxy>();
            serviceCollection.AddScoped<AuthLogin>();
        }
    }
}
