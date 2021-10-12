using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FOSMAR.PER.WEB.Helpers
{
    public static class ControlesVistas
    {
        public const string VistaPersona = "PERSONA";
        public const string VistaBeneficio = "BENEFICIO";
        public const string VistaPlanBeneficio = "PLANBENEFICIO";
        public const string VistaRed = "RED";
        public const string VistaTarifario = "TARIFARIO";
        public const string VistaContratoProveedor = "CNTRTOPRVDR";
        public const string VistaProveedor = "PROVEEDOR";
        public const string VistaGrupoProcedimiento = "GRUPO PROCEDIMIENTO";
        public const string VistaGrupoBeneficio = "GRUPO BENEFICIO";
        public const string VistaProcedimiento = "PROCEDIMIENTO";
        public const string VistaSolicitudSuscripcion = "SOLICITUD SUSCRIPCIÓN";
        public const string VistaContratante = "CONTRATANTE";


        public static class Persona
        {
            public const string AgregarPersona = "AGRGRPRSNA";
            public const string EditarPersona = "EDTRPRSNA";
            public const string EliminarPersona = "ELMNRPRSNA";

            public const string AgregarDocumento = "AGRGRDCMNTO";
            public const string EditarDocumento = "EDTRDCMNTO";
            public const string EliminarDocumento = "ELMNRDCMNTO";

            public const string AgregarDireccion = "AGRGRDRCCN";
            public const string EditarDireccion = "EDTRDRCCN";
            public const string EliminarDireccion = "ELMNRDRCCN";

            public const string AgregarTelefono = "AGRGRTLFNO";
            public const string EditarTelefono = "EDTRTLFNO";
            public const string EliminarTelefono = "ELMNRTLFNO";

            public const string AgregarCorreo = "AGRGRCRRO";
            public const string EditarCorreo = "EDTRCRRO";
            public const string EliminarCorreo = "ELMNRCRRO";

            public const string AgregarGrado = "AGRGRGRDO";
            public const string EditarGrado = "EDTRGRDO";
            public const string EliminarGrado = "ELMNRGRDO";

            public const string AgregarDependientes = "AGRGRDPNDTS";
            public const string EditarDependientes = "EDTRDPNDTS";
            public const string EliminarDependientes = "ELMNRDPNDTS";
        }
        public static class Beneficio
        {
            public const string NuBeneficio = "NBNFCO";
            public const string GuBeneficio = "GBNFCO";
            public const string EdBeneficio = "EBNFCO";
            public const string ElBeneficio = "DBNFCO";
        }
        public static class PlanBeneficio {
            public const string NuPBeneficio = "NPBNFCO";
            public const string EdPBeneficio = "EPBNFCO";
            public const string ElPBeneficio = "DPBNFCO";
            public const string GuPBeneficio = "GPBNFCO";

            public const string NuVersion = "NVRSN";
            public const string EdVersion = "EVRSN";
            public const string ElVersion = "DVRSN";
            public const string GuVersion = "GVRSN";

            public const string NuDExcluido = "NDEXCLDO";
            public const string EdDExcluido = "EDEXCLDO";
            public const string ElDExcluido = "DDEXCLDO";
            public const string GuDExcluido = "GDEXCLDO";

            public const string NuBeneficio = "NBNFCO";
            public const string EdBeneficio = "EBNFCO";
            public const string ElBeneficio = "DBNFCO";
            public const string GuBeneficio = "GBNFCO";

            public const string NuCopago = "NCPGO";
            public const string EdCopago = "ECPGO";
            public const string ElCopago = "DCPGO";
            public const string GuCopago = "GCPGO";

            public const string NuRCopago = "NRCPGO";
            public const string EdRCopago = "ERCPGO";
            public const string ElRCopago = "DRCPGO";
            public const string GuRCopago = "GRCPGO";

            public const string NuCEtario = "NCETRO";
            public const string EdCEtario = "ECETRO";
            public const string ElCEtario = "DCETRO";
            public const string GuCEtario = "GCETRO";
        }
        public static class Red {
            public const string NuRed = "NRED";
            public const string EdRed = "ERED";
            public const string ElRed = "DRED";
            public const string GuRed = "GRED";

            public const string NuRedSucursal = "NRSCRSL";
            public const string EdRedSucursal = "ERSCRSL";
            public const string ElRedSucursal = "DRSCRSL";
            public const string GuRedSucursal = "GRSCRSL";
        }
        public static class Tarifario {
            public const string NuTarifario = "NTRFRO";
            public const string EdTarifario = "ETRFRO";
            public const string ElTarifario = "DTRFRO";
            public const string GuTarifario = "GTRFRO";
        }
        public static class ContratoProveedor
        {
            public const string NuevoContratoProveedor = "NCNTRTOPRVDR";
            public const string EditarContratoProveedor = "ECNTRTOPRVDR";
            public const string EliminarContratoProveedor = "DCNTRTOPRVDR";
            public const string GrabarContratoProveedor = "GCNTRTOPRVDR";

            public const string NuevoVersionContratoProveedor = "NVRSNCP";
            public const string EditarVersionContratoProveedor = "EVRSNCP";
            public const string EliminarVersionContratoProveedor = "DVRSNCP";
            public const string GrabarVersionContratoProveedor = "GVRSNCP";

            public const string NuevoDocumentoContratoProveedor = "NDCMNTOCP";
            public const string EditarDocumentoContratoProveedor = "EDCMNTOCP";
            public const string EliminarDocumentoContratoProveedor = "DDCMNTOCP";
            public const string GrabarDocumentoContratoProveedor = "GDCMNTOCP";

            public const string NuevoAcuerdoContratoProveedor = "NACUERDOCP";
            public const string EditarAcuerdoContratoProveedor = "EACUERDOCP";
            public const string EliminarAcuerdoContratoProveedor = "DACUERDOCP";
            public const string GrabarAcuerdoContratoProveedor = "GACUERDOCP";

            public const string NuevoTarifaContratoProveedor = "NTARIFACP";
            public const string EditarTarifaContratoProveedor = "ETARIFACP";
            public const string EliminarTarifaContratoProveedor = "DTARIFACP";
            public const string GrabarTarifaContratoProveedor = "GTARIFACP";

            public const string NuevoFileTarifaContratoProveedor = "NFTARIFACP";
            public const string EditarFileTarifaContratoProveedor = "EFTARIFACP";
            public const string EliminarFileTarifaContratoProveedor = "DFTARIFACP";
            public const string GrabarFileTarifaContratoProveedor = "GFTARIFACP";

            public const string NuevoCoberturaContratoProveedor = "NCOBERTURACP";
            public const string EditarCoberturaContratoProveedor = "ECOBERTURACP";
            public const string EliminarCoberturaContratoProveedor = "DCOBERTURACP";
            public const string GrabarCoberturaContratoProveedor = "GCOBERTURACP";

            public const string NuevoFileCoberturaContratoProveedor = "NFCOBERTURACP";
            public const string EditarFileCoberturaContratoProveedor = "EFCOBERTURACP";
            public const string EliminarFileCoberturaContratoProveedor = "DFCOBERTURACP";
            public const string GrabarFileCoberturaContratoProveedor = "GFCOBERTURACP";

        }
        public static class Proveedor
        {
            public const string NuevoProveedor = "NPRVDR";
            public const string EditarProveedor = "EPRVDR";
            public const string EliminarProveedor = "DPRVDR";
            public const string GrabarProveedor = "GPRVDR";

            public const string NuevoCuentaBancoProveedor = "NCBPRVDR";
            public const string EditarCuentaBancoProveedor = "ECBPRVDR";
            public const string EliminarCuentaBancoProveedor = "DCBPRVDR";
            public const string GrabarCuentaBancoProveedor = "GCBPRVDR";

            public const string NuevoEquivalenciasProveedor = "NEPRVDR";
            public const string EditarEquivalenciasProveedor = "EEPRVDR";
            public const string EliminarEquivalenciasProveedor = "DEPRVDR";
            public const string GrabarEquivalenciasProveedor = "GEPRVDR";

            public const string NuevoSucursalProveedor = "NSPRVDR";
            public const string EditarSucursalProveedor = "ESPRVDR";
            public const string EliminarSucursalProveedor = "DSPRVDR";
            public const string GrabarSucursalProveedor = "GSPRVDR";

            public const string NuevoBeneficioProveedor = "NBPRVDR";
            public const string EditarBeneficioProveedor = "EBPRVDR";
            public const string EliminarBeneficioProveedor = "DBPRVDR";
            public const string GrabarBeneficioProveedor = "GBPRVDR";

        }
        public static class GrupoProcedimiento
        {
            public const string NuevoGrupoProcedimiento = "NGPRCDMNTO";
            public const string EditarGrupoProcedimiento = "EGPRCDMNTO";
            public const string EliminarGrupoProcedimiento = "DGPRCDMNTO";
            public const string GrabarGrupoProcedimiento = "GGPRCDMNTO";

        }
        public static class GrupoBeneficio
        {
            public const string NuevoGrupoBeneficio = "NGBNFCO";
            public const string EditarGrupoBeneficio = "EGBNFCO";
            public const string EliminarGrupoBeneficio = "DGBNFCO";
            public const string GrabarGrupoBeneficio = "GGBNFCO";

        }
        public static class Procedimiento
        {
            public const string NuevoProcedimiento = "NPRCDMNTO";
            public const string EditarProcedimiento = "EPRCDMNTO";
            public const string EliminarProcedimiento = "DPRCDMNTO";
            public const string GrabarProcedimiento = "GPRCDMNTO";

        }
        public static class SolicitudSuscripcion
        {
            public const string NuevoSolicitudSuscripcion = "NSSSCRPCN";
            public const string EditarSolicitudSuscripcion = "ESSSCRPCN";
            public const string EliminarSolicitudSuscripcion = "DSSSCRPCN";
            public const string GrabarSolicitudSuscripcion = "GSSSCRPCN";

        }

        public static class Contratante
        {
            public const string NuevoContratante = "NCNTRNTE";
            public const string EditarContratante = "ECNTRNTE";
            public const string EliminarContratante = "DCNTRNTE";
            public const string GrabarContratante = "GCNTRNTE";
        }


    }
}
