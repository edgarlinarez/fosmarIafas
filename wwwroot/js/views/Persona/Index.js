var initBusquedaPersona = function () {
    //#region Persona
    $FormularioPersona = $("#FormularioPersona");
    $txtNombreRazon = $("#txtNombreRazon");
    $tabla_persona = $("#tabla_persona");
    $btnNuevoPersona = $("#btnNuevoPersona");
    $btnBuscarPersona = $("#btnBuscarPersona");
    $cnt_fDesde = $('.input-group.fecDesde');
    $cnt_fHasta = $('.input-group.fecHasta');
    $txtDesde = $("#txtDesde");
    $txtHasta = $("#txtHasta");
    $cboEstado = $(".select-estados");
    $cboEstadoListado = $(".select-estado-listado");
    $cboEstadoFormulario = $(".select-estado-formulario");
    $cboTipoDocumento = $("#cboTipoDocumento");
    $txtDocumento = $("#txtDocumento");
    $btnGrabarPersona = $("#btnGrabarPersona");
    $tab_DatosGenerales = $("#DatosGenerales-tab");
    $tab_Direccion = $("#Direccion-tab");
    $tab_Lista = $("#Lista-tab");
    $tab_Telefono = $("#Telefono-tab");
    $tab_CuentaCorreo = $("#CuentaCorreo-tab");
    $tab_Documento = $("#Documento-tab");
    $tab_GradoMilitar = $("#GradoMilitar-tab");
    $tab_Dependientes = $("#Dependientes-tab");
    $tab_CuentaBanco = $("#CuentaBanco-tab");

    $lblTDocumento = $("#lblTDocumento");
    $txtnuDocumento = $("#txtnuDocumento");
    $lblnuDocumento = $("#lblnuDocumento");
    $cboTPersonaNJ = $("#cboTPersonaNJ");
    $txtRSocial = $("#txtRSocial");
    $txtAPaterno = $("#txtAPaterno");
    $txtAMaterno = $("#txtAMaterno");
    $txtACasada = $("#txtACasada");
    $txtPNombre = $("#txtPNombre");
    $txtSNombre = $("#txtSNombre");
    $cboNacionalidad = $("#cboNacionalidad");
    $cboPDepartamento = $("#cboPDepartamento");
    $cboPProvincia = $("#cboPProvincia");
    $cboPDistrito = $("#cboPDistrito");
    $cboECivil = $("#cboECivil");
    $cboSexo = $("#cboSexo");
    $txtFNacimiento = $("#txtFNacimiento");
    $txtFFallecimiento = $("#txtFFallecimiento");
    $hfCodPersona = $("#hfCodPersona");
    $btnBuscarSUSALUD = $("#btnBuscarSUSALUD");
    $btnConsultaSusalud = $("#btnConsultaSusalud");
    $cnt_pNatural = $(".pNatural");
    $cnt_pNaturalAgregando = $(".pNaturalAgregando");
    $cnt_pJuridica = $(".pJuridica");
    $cboPJTDocumento = $("#cboPJTDocumento");
    $cboPNTDocumento = $("#cboPNTDocumento");
    $txtPJNDocumento = $("#txtPJNDocumento");
    $txtPNDocumento = $("#txtPNDocumento");
    $cboPJTSociedad = $("#cboPJTSociedad");
    $cboPJTEmpresa = $("#cboPJTEmpresa");
    $txtPJFNacimiento = $("#txtPJFNacimiento");
    $rdpPersList = $('#rdpPersList');

    $cboSSLDTDocumento = $('#cboSSLD-TDocumento');
    $txtSSLDNDocumento = $('#txtSSLD-NDocumento');
    $dtPersonaSusalud = $("#dtPersonaSusalud");
    $mdlSusalud = $("#mdlSusalud");

    $PaisNac = $("#PaisNac");
    $chkPaisNac = $PaisNac.find("input[type=checkbox]");
    $cboPaisNac = $("#cboPaisNac");

    //#endregion 
    //#region ------------DOCUMENTO ---------------------
    $btnNuevoDocumento = $("#btnNuevoDocumento");
    $hfCodPersona = $("#hfCodPersona");
    $hfCodDocumento = $("#hfCodDocumento");
    $tblDocumento = $("#tabla_documento");
    $mdlDocumento = $("#mdlDocumento");
    $modalTituloDocum = $mdlDocumento.find(".modal-title");

    $FormularioDocumento = $("#FormularioDocumento");
    $btnGrabarDocumento = $("#btnGrabarDocumento");
    $cboDocumento = $("#cboDocumento");
    $txtNDocumento = $("#txtNDocumento");
    $txtFInscripcion = $("#txtFInscripcion");
    $txtFVncmt = $("#txtFVncmt");
    $cboPrincipalDocumento = $("#cboPrincipalDocumento");
    //$cboEstado = $(".select-estados");
    $txtFecha = $("#txtFecha");
    $hfaction = $("#hfaction");
    //#endregion ------------DOCUMENTO ---------------------
    //#region ----------- CORREO----------------------
    $btnNuevoCorreo = $("#btnNuevoCorreo");
    //$hfCodPersona = $("#hfCodPersona");
    $hfCodCorreo = $("#hfCodCorreo");
    $tblCorreo = $("#tabla_correo");
    $mdlCorreo = $("#mdlCorreo");
    $modalTituloCorreo = $mdlCorreo.find(".modal-title");
    $FormularioCorreo = $("#FormularioCorreo");
    $btnGrabarCorreo = $("#btnGrabarCorreo");
    $cboTCorreo = $("#cboTCorreo");
    $txtCorreo = $("#txtCorreo");
    $cboPrincipalCorreo = $("#cboPrincipalCorreo");
    $cboEstado = $(".select-estados");
    $hfactionCorreo = $("#hfactionCorreo");
    //#endregion ----------- CORREO----------------------
    //#region ---------Direccion--------------------
    $btnNuevoDireccion = $("#btnNuevoDireccion");
    //$hfCodPersona = $("#hfCodPersona");
    $hfCodDireccion = $("#hfCodDireccion");
    $tblDireccion = $("#tabla_direccion");
    $mdlDireccion = $("#mdlDireccion");
    $modalTituloDireccion = $mdlDireccion.find(".modal-title");

    $FormularioDireccion = $("#FormularioDireccion");
    $btnGrabarDireccion = $("#btnGrabarDireccion");
    $cboTDireccion = $("#cboTDireccion");
    $cboTVia = $("#cboTVia");
    $txtVia = $("#txtVia");
    $cboTipoZona = $("#cboTipoZona");
    $txtNroZona = $("#txtNroZona");
    $txtNroVia = $("#txtNroVia");
    //$txtVia = $("#txtVia");
    $txtInterior = $("#txtInterior");
    $txtReferencia = $("#txtReferencia");
    $txtFPrincipal = $("#txtFPrincipal");
    $cboPrincipalDireccion = $("#cboPrincipalDireccion");
    $hfactionDireccion = $("#hfactionDireccion");
    $cboDepartamentoDirec = $("#cboDepartamentoDirec");
    $cboProvinciaDirec = $("#cboProvinciaDirec");
    $cboDistritoDirec = $("#cboDistritoDirec");

    //#endregion ---------Direccion--------------------
    //#region ------telefono----------------
    $btnNuevoTelefono = $("#btnNuevoTelefono");
    $hfCodPersona = $("#hfCodPersona");
    $hfCodTelefono = $("#hfCodTelefono");
    $tbltelefono = $("#tabla_telefono");
    $mdltelefono = $("#mdlTelefono");
    $modalTituloTelefono = $mdltelefono.find(".modal-title");
    $cboPrincipalTelefono = $("#cboPrincipalTelefono");
    $FormularioTelefono = $("#FormularioTelefono")
    $btnGrabarTelefono = $("#btnGrabarTelefono");
    $cboTTelefono = $("#cboTTelefono");
    $cboDepartamentoTlfno = $("#cboDepartamentoTlfno");
    $txtTelefono = $("#txtTelefono");
    $txtObservacion = $("#txtObservacion");
    $hfactionTelefono = $("#hfactionTelefono");
    //#endregion ------telefono----------------
    //#region ---------------Grado------------------
    $btnNuevoGrado = $("#btnNuevoGrado");
    $hfCodPersona = $("#hfCodPersona");
    $hfCodGrado = $("#hfCodGrado");
    $tblGrado = $("#tabla_grado");
    $mdlGrado = $("#mdlGrado");
    $modalTituloGrado = $mdlGrado.find(".modal-title");

    $FormularioGrado = $("#FormularioGrado");
    $btnGrabarGrado = $("#btnGrabarGrado");
    $cboSMilitar = $("#cboSMilitar");
    $cboGrado = $("#cboGrado");
    $cboTRelaccion = $("#cboTRelaccion");

    ///WB
    var aniosPensionables = null;
    var aniosPensionablesHombres = null;
    var aniosPensionablesMujeres = null;
    var rangoAfiliable = null;
    var aniosPerNav = null;
    $txtFIngreso = $("#txtFIngreso");
    $txtFDisponibilidad = $("#txtFDisponibilidad");
    $txtFTermino = $("#txtFTermino");
    $txtFBaja = $("#txtFBaja");

    $inputBaja = $(".input-fecha-baja");
    $inputIngreso = $(".input-fecha-ingreso");
    $inputIngresoSup = $(".input-fecha-ingreso-sup");
    $inputFechaDisponibilidad = $(".input-fecha-disponibilidad");
    $rowFechas = $(".inputs-fechas-todas");
    $inputFechaTerminoDisponibilidad = $(".input-fecha-termino");
    $inputTiempoServicio = $(".input-tiempo-servicio");
    $rowPersonaNaval = $(".row-persona-naval");
    $inputCausal = $(".input-causal");
    $inputAfeccion = $(".input-afeccion");
    $inputGrado = $(".input-grado");
    $inputEspecialidad = $(".input-especialidad");
    $inputDisponibilidad = $(".input-disponibilidad");
    $txtNCertificado = $("#txtNCertificado");
    $cboMDisponibilidad = $("#cboMDisponibilidad");
    $cboDiagnostico = $("#cboDiagnostico");
    $cboAfiliable = $("#cboAfiliable");
    $inputDiscapacidad = $(".input-discapacidad");
    $inputAfiliable = $(".input-afiliable");
    $inputPensionable = $(".input-pensionable");
    ///
    $cboCBaja = $("#cboCBaja");
    $cboEspecialidad = $("#cboEspecialidad");
    $cboTAfeccion = $("#cboTAfeccion");
    $txtTServicio = $("#txtTServicio");
    $cboTPersonaGrado = $("#cboTPersonaGrado");
    $txtFCertificado = $("#txtFCertificado");
    $cboUpago = $("#cboUpago");
    $cboInterdicto = $("#cboInterdicto");
    $cboPensionable = $("#cboPensionable");
    $hfactionGrado = $("#hfactionGrado");
    //#endregion ---------------Grado------------------
    //#region --------------- Dependencia ------------------
    $btnNuevaDependencia = $('#btnNuevaDependencia');
    $dtDependencias = $('#dtDependencias');
    $mdlDependencia = $('#mdlDependencia');
    $mdlDependenciaLabel = $('#mdlDependenciaLabel');
    $frmDependencia = $("#frmDependencia");
    $txtIDPersonaDep = $('#txtIDPersonaDep');
    $cboPersonasDep = $('#cboPersonasDep');
    $btnGuardarDependencia = $("#btnGuardarDependencia");
    //#endregion --------------- Dependencia ------------------
    //#region Homonimos
    $mdlHomonimos = $("#mdlHomonimos");
    $dtHomonimo = $("#dtHomonimo");
    //#endregion
    //#region sunat
    $btnConsultaSunat = $("#btnConsultaSunat");
    $cboTDocumentoSUNAT = $("#cboSUNAT-TDocumento");
    $txtNDocumentoSUNAT = $("#txtSUNAT-NDocumento");
    $mdlSunat = $("#mdlSunat");
    $dtPersonaJuridica = $("#dtPersonaJuridica");
    $btnBuscarSunat = $("#btnBuscarSunat");
    //#endregion
    //#region Cuenta de banco
    $cboBanco = $("#cboBanco");
    $cboTipoCuenta = $("#cboTipoCuenta");
    $txtNroCuenta = $("#txtNroCuenta");
    $txtNroCci = $("#txtNroCci");
    $txtTitularCuenta = $("#txtTitularCuenta");
    $cboTipoDocumentocb = $("#cboTipoDocumentocb");
    $txtNroDocumento = $("#txtNroDocumento");
    $btnGrabarCuentaBanco = $("#btnGrabarCuentaBanco");
    $tblCuentaBanco = $("#dtCuentaBanco");
    $FormularioCuentaBanco = $("#FormularioCuentaBanco");
    $hfCodCuentaBanco = $("#hfCodCuentaBanco");
    $TbListartab = $("#TbListar-tab");
    $TbAgregartab = $("#TbAgregar-tab");
    $btnNuevoCuenta = $("#btnNuevoCuenta");
    //#endregion
    //#region --------entidades--------

    var EntidadPersona = {
        gdtprsna: "",
        rscl: "",
        aptrno: "",
        amtrno: "",
        acsda: "",
        pnmbre: "",
        snmbre: "",
        ncnldd: "",
        cpncmnto: "",
        gdecvl: "",
        gdsxo: "",
        fncmnto: "",
        ffllcmnto: "",
        cubgeo: "",
        gdestdo: "",
        ucrcn: "",
        uedcn: "",
        cboTDcmnto: "",
        txtnDcmnto: "",
        idprsna: "",
        fprncpl: "",
        finscrpcn: "",
        fvncmnto: "",
        gddcmnto: "",
        ndcmnto: "",
    }

    var EntidadDocumento = {
        id: "",
        gddcmnto: "",
        ndcmnto: "",
        finscrpcn: "",
        fvncmnto: "",
        fprncpl: "",
        idprsna: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",
        gdestdo: "",
        festdo: "",
        festdo: "",
    }

    var EntidadCorreo = {
        id: "",
        gdtcrreo: "",
        ccrreo: "",
        fprncpl: "",
        idprsna: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",
        gdestdo: "",
        festdo: "",
    }

    var EntidadDireccion = {
        id: "",
        gdtdrccn: "",
        gdtvia: "",
        via: "",
        nvia: "",
        nintrr: "",
        gdtdzna: "",
        zna: "",
        rfrncia: "",
        fprncpl: "",
        cubgeo: "",
        idprsna: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",
        gdestdo: "",
        festdo: ""
    }

    var EntidadTelefono = {
        gdttlfno: "",
        cubgeo: "",
        ntlfno: "",
        obsrvcn: "",
        fprncpl: "",
        idprsna: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",
        gdestdo: "",
        festdo: "",
    }

    var EntidadGrado = {
        aflble: "",
        gdsmltr: "",
        gdtgrdo: "",
        gdtrlcn: "",
        fingreso: "",
        fdispon: "",
        ftdispon: "",
        fbaja: "",
        gdcbja: "",
        gdespcldd: "",
        gdtafccn: "",
        gdmtvdsp: "",
        gdtprsnl: "",
        fecrtfcdo: "",
        gdintrdcto: "",
        diagcie: "",
        ncrtfcdo: "",
        gdpncnble: "",
        gdtupgo: "",
        idprsna: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",
        gdestdo: "",
        festdo: "",
        iddiagcie: ""
    }

    var EntidadSusalud = {
        afiliaciones: "",
        apCasada: "",
        apMaterno: "",
        apPaterno: "",
        coContinente: "",
        coDepartamento: "",
        coDistrito: "",
        coError: "",
        coPais: "",
        coPaisEmisor: "",
        coProvincia: "",
        deContinente: "",
        deDepartamento: "",
        deDistrito: "",
        dePais: "",
        deProvincia: "",
        deSexo: "",
        deUbigeo: "",
        feFallecimiento: "",
        feNacimiento: "",
        inFallecimiento: "",
        noPersona: "",
        nuDocumento: "",
        tiDocumento: ""
    }

    var DatosPersona = {
        DatosNatural: function () {
            EntidadPersona.aptrno = $txtAPaterno.val();
            EntidadPersona.amtrno = $txtAMaterno.val();
            EntidadPersona.acsda = $txtACasada.val();
            EntidadPersona.pnmbre = $txtPNombre.val();
            EntidadPersona.snmbre = $txtSNombre.val();
            EntidadPersona.ncnldd = $cboNacionalidad.val();
            EntidadPersona.cpncmnto = $chkPaisNac.is(':checked') == true ? $cboPaisNac.val() : $cboNacionalidad.val();
            EntidadPersona.gdecvl = $cboECivil.val();
            EntidadPersona.gdsxo = $cboSexo.val();
            EntidadPersona.fncmnto = $txtFNacimiento.val();
            EntidadPersona.ffllcmnto = $txtFFallecimiento.val();
            EntidadPersona.cubgeo = $cboPDistrito.val();
        },
        DatosJuridica: function () {
            EntidadPersona.rscl = $txtRSocial.val();
            EntidadPersona.fncmnto = $txtPJFNacimiento.val();
            EntidadPersona.gdtescdd = $cboPJTSociedad.val();
            EntidadPersona.gdtetmno = $cboPJTEmpresa.val();
            EntidadPersona.cubgeo = "150101";
        }
    }

    var EntidadDependiente = {
        id: '',
        idpj: '',
        idpn: ''
    }

    var EntidadSunat = {
        "resultado": "",
        "nombre_razon_social": "",
        "direccion": "",
        "estado_contribuyente": "",
        "condicion_domicilio": "",
        "ubigeo": "",
        "tipo_via": "",
        "nombre_via": "",
        "codigo_zona": "",
        "tipo_zona": "",
        "numero": "",
        "interior": "",
        "lote": "",
        "departamento": "",
        "manzana": "",
        "kilometro": ""
    }

    var EntidadCuentaBando = {
        id: "",
        idprsna: "",
        gdtcnta: "",
        gdbnco: "",
        ncnta: "",
        ncci: "",
        ttlr: "",
        gddcmnto: "",
        ndcmnto: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",
        gdestdo: "",
        festdo: "",
    }

    //#endregion --------entidades--------
    //#region ------------CONTROLES ---------------------
    var $accesoAgregarPersona = $("#accesoAgregarPersona");
    var $accesoEditarPersona = $("#accesoEditarPersona");
    var $accesoEliminarPersona = $("#accesoEliminarPersona");

    var $accesoAgregarDocumento = $("#accesoAgregarDocumento");
    var $accesoEditarDocumento = $("#accesoEditarDocumento");
    var $accesoEliminarDocumento = $("#accesoEliminarDocumento");

    var $accesoAgregarDireccion = $("#accesoAgregarDireccion");
    var $accesoEditarDireccion = $("#accesoEditarDireccion");
    var $accesoEliminarDireccion = $("#accesoEliminarDireccion");

    var $accesoAgregarTelefono = $("#accesoAgregarTelefono");
    var $accesoEditarTelefono = $("#accesoEditarTelefono");
    var $accesoEliminarTelefono = $("#accesoEliminarTelefono");

    var $accesoAgregarCorreo = $("#accesoAgregarCorreo");
    var $accesoEditarCorreo = $("#accesoEditarCorreo");
    var $accesoEliminarCorreo = $("#accesoEliminarCorreo");

    var $accesoAgregarGrado = $("#accesoAgregarGrado");
    var $accesoEditarGrado = $("#accesoEditarGrado");
    var $accesoEliminarGrado = $("#accesoEliminarGrado");

    var $accesoAgregarDependientes = $("#accesoAgregarDependientes");
    var $accesoEditarDependientes = $("#accesoEditarDependientes");
    var $accesoEliminarDependientes = $("#accesoEliminarDependientes");

    //#endregion ------------CONTROLES ---------------------

    var validacionControles = {
        init: function () {
            if ($accesoAgregarPersona.val() == "False") {
                $btnNuevoPersona.hide();
            }
            if ($accesoAgregarDocumento.val() == "False") {
                $btnNuevoDocumento.hide();
            }
            if ($accesoAgregarDireccion.val() == "False") {
                $btnNuevoDireccion.hide();
            }
            if ($accesoAgregarTelefono.val() == "False") {
                $btnNuevoTelefono.hide();
            }
            if ($accesoAgregarCorreo.val() == "False") {
                $btnNuevoCorreo.hide();
            }
            if ($accesoAgregarGrado.val() == "False") {
                $btnNuevoGrado.hide();
            }
            if ($accesoAgregarDependientes.val() == "False") {
                $btnNuevaDependencia.hide();
            }
        }
    };

    var configDTSusalud = {
        objeto: null,
        opciones: {
            bAutoWidth: false,
            filter: false,
            ajax: {
                dataType: "JSON",
                url: "../Persona/lista-susalud",
                timeout: 60000,
                type: "GET",
                data: function (data) {
                    //delete data.columns;
                    data.tiDocumento = $cboSSLDTDocumento.val();
                    data.nuDocumento = $txtSSLDNDocumento.val();
                },
            },
            paging: false,
            ordering: false,
            columns: [
                {
                    data: null,
                    title: "Nombres y Apellidos",
                    class: "d-none",
                    render: function (data) {
                        tpm = data.noPersona + ' ' + data.apPaterno + ' ' + data.apMaterno;
                        return tpm;
                    }
                },
                {
                    data: "apPaterno",
                    title: "Apellido Paterno",
                    class: "text-center"
                },
                {
                    data: "apMaterno",
                    title: "Apellido Materno",
                    class: "text-center"
                },
                {
                    data: "noPersona",
                    title: "Nombres",
                    class: "text-center"
                }, {
                    data: "feNacimiento",
                    title: "Fecha Nacimiento",
                    class: "text-center"
                }
            ],
            columnDefs: [
                {
                    targets: "_all",
                    className: 'text-center'
                }
            ],
        },
        eventos: {
            selectRow: function () {
                $dtPersonaSusalud.on('click', 'tbody tr', function () {
                    var data = configDTSusalud.objeto.row(this).data();
                    EntidadSusalud = new Object();
                    EntidadSusalud = data;
                    if (typeof (EntidadSusalud) != 'undefined') {
                        funcionesPersona.obtenerPersonaSusalud(EntidadSusalud);
                    }
                })
            },
            init: function () {
                configDTSusalud.eventos.selectRow();
            }
        },
        reload: function () {
            if (configDTSusalud.objeto == null || configDTSusalud.objeto == "" || configDTSusalud.objeto == undefined) {
                configDTSusalud.objeto = $dtPersonaSusalud.DataTable(configDTSusalud.opciones);
                configDTSusalud.eventos.init();
            }
            else {
                configDTSusalud.objeto.ajax.reload();
            }
        }
    }

    var configDTSunat = {
        objeto: null,
        opciones: {
            bAutoWidth: false,
            filter: false,
            ajax: {
                dataType: "JSON",
                url: "../Persona/lista-sunat",
                type: "GET",
                data: function (data) {
                    //delete data.columns;
                    //data.tiDocumento = $cboSSLDTDocumento.val();
                    data.nuDocumento = $txtNDocumentoSUNAT.val();
                },
            },
            paging: false,
            ordering: false,
            columns: [
                {
                    data: "nombre_razon_social",
                    title: "Razón  Social",
                    class: "text-center"
                },
                {
                    data: "estado_contribuyente",
                    title: "Estado Contribuyente",
                    class: "text-center"
                }
            ],
            columnDefs: [
                {
                    targets: "_all",
                    className: 'text-center'
                }
            ],
        },
        eventos: {
            selectRow: function () {
                $dtPersonaJuridica.on('click', 'tbody tr', function () {
                    var data = configDTSunat.objeto.row(this).data();
                    EntidadSusalud = new Object();
                    EntidadSusalud = data;
                    if (typeof (EntidadSunat) != 'undefined') {
                        funcionesPersona.obtenerPersonaSunat(EntidadSunat);
                    }
                })
            },
            init: function () {
                configDTSunat.eventos.selectRow();
            }
        },
        reload: function () {
            if (configDTSunat.objeto == null || configDTSunat.objeto == "" || configDTSunat.objeto == undefined) {
                configDTSunat.objeto = $dtPersonaJuridica.DataTable(configDTSunat.opciones);
                configDTSunat.eventos.init();
            }
            else {
                configDTSunat.objeto.ajax.reload();
            }
        }
    }

    var configDTPersona = {
        objecto: null,
        opciones: {
            filter: false,
            ajax: {
                dataType: "JSON",
                url: "/Persona/listar-persona",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.p_sDatos = $txtNombreRazon.val();
                    data.p_sDesde = $txtDesde.val();
                    data.p_sHasta = $txtHasta.val();
                    data.p_sTDocumento = $cboTipoDocumento.val();
                    data.p_sNDocumento = $txtDocumento.val();
                    data.p_sEstado = $cboEstadoListado.val();
                }
            },
            columns: [
                {
                    title: "Tipo Persona",
                    data: "gdtprsna",
                    width: '5%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Tipo Documento",
                    data: "gddcmnto",
                    width: '5%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Nro. Documento",
                    data: "ndcmnto", width: '15%',
                    orderable: false
                },
                {
                    title: "Nombres y apellidos /Razón",
                    data: "datos", width: '39%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "F. Edición",
                    data: "fedcn", width: '15%',
                    orderable: false
                },
                {
                    title: "Estado",
                    data: null, width: '5%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var tpm;
                        if (data.gdestdo == "A") {
                            tpm = '<span><i class="fa fa-circle text-success" title="Activo"></i></span>';
                        }
                        else {
                            tpm = '<span><i class="fa fa-circle text-danger" title="Inactivo"></i></span>';
                        }
                        return tpm;
                    }
                },
                {
                    title: "Opciones",
                    data: null, width: '15%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        if ($accesoEditarPersona.val() == "True") {
                            tpm += '<button type="button" class="btn btn-info btn-xs btn-editar" data-id="'+data.id+'" title="Editar"><span><i class="la la-edit"></i></span></button>';
                        }

                        if ($accesoEliminarPersona.val() == "True") {
                            tpm += ' <button title="Cambiar estado" data-id="'+data.id+'" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>';

                            //tpm += ' <button type="button" class="btn btn-danger btn-xs btn-delete" data-id="'+data.id+'" title="Desactivar"><span><i class="la la-trash"></i></span></button>';
                        }
                        return tpm;
                    }
                }
            ],
            columnDefs: [
                {
                    targets: "_all",
                    className: 'text-center'
                }
            ]
        },
        eventos: {
            eliminar: function () {
                configDTPersona.objecto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesPersona.eliminarPersona(id)
                })
            },
            editar: function () {
                configDTPersona.objecto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");
                    $hfCodPersona.val(id);
                    //$tab_DatosGenerales.click();
                    funcionesPersona.obtenerPersona(id);
                })
            },
            init: function () {
                configDTPersona.eventos.eliminar();
                configDTPersona.eventos.editar();
            }

        },
        reload: function () {
            configDTPersona.objecto.ajax.reload();
        },
        init: function () {
            configDTPersona.objecto = $tabla_persona.DataTable(configDTPersona.opciones);
            configDTPersona.eventos.init();
        }
    };

    var configDTDocumento = {
        objecto: null,
        tiposDocumentos: [],
        tienePrincipal: false,
        opciones: {
            filter: false,
            ajax: {
                dataType: "JSON",
                url: "../Documento/listarDocumento",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idprsna = $hfCodPersona.val();
                    data.id = "";
                }
            },
            columns: [
                {
                    title: "Tipo Documento",
                    data: "gddcmnto",
                    width: '5%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "N° Documento",
                    data: "ndcmnto",
                    width: '10%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "F. Inscripción",
                    data: "finscrpcn",
                    width: '10%',
                    orderable: false,
                    class: "text-center d-none"
                },
                {
                    title: "Fec. Vencimiento",
                    data: "fvncmnto",
                    width: '10%',
                    orderable: false,
                    class: "text-center d-none"
                },
                {
                    title: "Predeterminada",
                    data: null,
                    width: '10%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        if (data.fprncpl == "1") {
                            tpm += 'SI';
                            configDTDocumento.tienePrincipal = true;
                        }
                        else {
                            tpm += 'NO';
                        }
                        return tpm;
                    }
                },
                {
                    title: "U. Edición",
                    data: "uedcn", width: '10%',
                    orderable: false,
                    class: "text-center"
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN", width: '10%',
                    orderable: false
                },
                {
                    title: "Estado",
                    data: null,
                    width: '2%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var tpm;
                        if (data.gdestdo == "A") {
                            tpm = '<span><i class="fa fa-circle text-success" title="Activo"></i></span>';
                        }
                        else {
                            tpm = '<span><i class="fa fa-circle text-danger" title="Inactivo"></i></span>';
                        }
                        return tpm;
                    }
                },
                {
                    title: "Opciones",
                    data: null,
                    orderable: false,
                    width: '15%',
                    class: "text-center",
                    render: function (data) {
                        configDTDocumento.tiposDocumentos.push(data.igddcmnto);

                        var tpm = "";
                        if ($accesoEditarDocumento.val() == "True") {
                            tpm += '<button type="button" class="btn btn-info btn-xs btn-editar" data-toggle="modal" data-target="#mdlDocumento" data-doc="'+data.igddcmnto+'" data-id="'+data.id+'" title="Editar"><span><i class="la la-edit"></i></span></button>';
                        }
                        if ($accesoEliminarDocumento.val() == "True") {
                            tpm += ' <button title="Cambiar estado" data-id="'+data.id+'" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>';

                            //tpm += ' <button type="button" class="btn btn-danger btn-xs btn-delete" data-id="'+data.id+'" title="Desactivar"><span><i class="la la-trash"></i></span></button>';
                        }
                        return tpm;
                    }
                }
            ],
            columnDefs: [
                {
                    targets: "_all",
                    className: 'text-center'
                }
            ]
        },
        eventos: {
            eliminar: function () {
                configDTDocumento.objecto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesDocumento.eliminarDocumento(id);
                })
            },
            editar: function () {
                configDTDocumento.objecto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");
                    var doc = $(this).data("doc");
                    $modalTituloDocum.text("Editar Documento");
                    $hfaction.val("E");
                    $cboDocumento.empty();
                    $cboDocumento.LlenarSelectGDFiltrado("GDDCMNTO", configDTDocumento.tiposDocumentos, doc);
                    funcionesDocumento.obtenerDocumento(id);
                })
            },
            init: function () {
                configDTDocumento.eventos.eliminar();
                configDTDocumento.eventos.editar();
            }
        },
        reload: function () {
            configDTDocumento.tiposDocumentos = [];
            if (configDTDocumento.objecto == null || configDTDocumento.objecto == "" || configDTDocumento == undefined) {
                configDTDocumento.objecto = $tblDocumento.DataTable(configDTDocumento.opciones);
                configDTDocumento.eventos.init();
            }
            else {
                configDTDocumento.objecto.ajax.reload();
            }
        },
    };

    var configDTCorreo = {
        objecto: null,
        tienePrincipal: false,
        opciones: {
            filter: false,
            ajax: {
                dataType: "JSON",
                url: "../Correo/listarCorreo",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idprsna = $hfCodPersona.val();
                    data.id = "";
                }
            },
            columns: [
                {
                    title: "Tipo Correo",
                    data: "gdtcrreo",
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Correo",
                    data: "ccrreo",
                    width: '10%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Predeterminada",
                    data: null,
                    width: '10%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        if (data.fprncpl == "1") {
                            tpm += 'SI';
                            configDTCorreo.tienePrincipal = true;
                        }
                        else {
                            tpm += 'NO';
                        }
                        return tpm;
                    }
                },
                {
                    title: "U. Edición",
                    data: "uedcn", width: '10%',
                    orderable: false,
                    class: "text-center"
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN", width: '10%',
                    orderable: false
                },
                {
                    title: "Estado",
                    data: null,
                    width: '2%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var tpm;
                        if (data.gdestdo == "A") {
                            tpm = '<span><i class="fa fa-circle text-success" title="Activo"></i></span>';
                        }
                        else {
                            tpm = '<span><i class="fa fa-circle text-danger" title="Inactivo"></i></span>';
                        }
                        return tpm;
                    }
                },
                {
                    title: "Opciones",
                    data: null,
                    orderable: false,
                    width: '15%',
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        if ($accesoEditarCorreo.val() == "True") {
                            tpm += '<button type="button" class="btn btn-info btn-xs btn-editar" data-toggle="modal" data-target="#mdlCorreo" data-id="'+data.id+'" title="Editar"><span><i class="la la-edit"></i></span></button>';
                        }
                        if ($accesoEliminarCorreo.val() == "True") {
                            tpm += ' <button title="Cambiar estado" data-id="'+data.id+'" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>';

                            //tpm += ' <button type="button" class="btn btn-danger btn-xs btn-delete" data-id="'+data.id+'" title="Desactivar"><span><i class="la la-trash"></i></span></button>';
                        } return tpm;
                    }
                }
            ],
            columnDefs: [
                {
                    targets: "_all",
                    className: 'text-center'
                }
            ]
        },
        eventos: {
            eliminar: function () {
                configDTCorreo.objecto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesCorreo.eliminarCorreo(id);
                })
            },
            editar: function () {
                configDTCorreo.objecto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");
                    $modalTituloCorreo.text("Editar Correo");
                    $hfactionCorreo.val("E");
                    funcionesCorreo.obtenerCorreo(id);
                })
            },
            init: function () {
                configDTCorreo.eventos.eliminar();
                configDTCorreo.eventos.editar();
            }
        },
        reload: function () {
            if (configDTCorreo.objecto == null || configDTCorreo.objecto == "" || configDTCorreo.objecto == undefined) {
                configDTCorreo.objecto = $tblCorreo.DataTable(configDTCorreo.opciones);
                configDTCorreo.eventos.init();

            } else { configDTCorreo.objecto.ajax.reload(); }
        },
    };

    var configDTDireccion = {
        objecto: null,
        tienePrincipal: false,
        tipoDirecciones: [],
        opciones: {
            filter: false,
            ajax: {
                dataType: "JSON",
                url: "../Direccion/listarDireccion",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idprsna = $hfCodPersona.val();
                    data.id = "";
                }
            },
            columns: [
                {
                    title: "Tipo Dirección",
                    data: "gdtdrccn",
                    width: '10%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Predeterminada",
                    data: null,
                    width: '10%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        if (data.fprncpl == "1") {
                            tpm += 'SI';
                            configDTDireccion.tienePrincipal = true;
                        }
                        else {
                            tpm += 'NO';
                        }
                        return tpm;
                    }
                },
                {
                    title: "Dirección",
                    data: null,
                    orderable: false,
                    width: '20%',
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        tpm += '<div class="row text-left">'+
                                        '<div class="col-12 text-break">'+data.gdtvia + " " + (data.via ? data.via + " " : "") + (data.nvia ? "# " + data.nvia + " - " : "") + (data.gdtdzna ? data.gdtdzna + " " : "") + (data.zna ? data.zna + " - " : "") + (data.nintrr ? "INTERIOR " + data.nintrr + " - " : "") + data.rfrncia+'</div>'+
                                        '<div class="col-12 font-weight-bold">'+data.cubgeo+'</div>'+
                                    '</div>';
                        return tpm;
                    }
                },
                {
                    title: "U. Edición",
                    data: "uedcn",
                    width: '10%',
                    orderable: false,
                    class: "text-center"
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN",
                    width: '10%',
                    orderable: false
                },
                {
                    title: "Estado",
                    data: null,
                    width: '2%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var tpm;
                        if (data.gdestdo == "A") {
                            tpm = '<span><i class="fa fa-circle text-success" title="Activo"></i></span>';
                        }
                        else {
                            tpm = '<span><i class="fa fa-circle text-danger" title="Inactivo"></i></span>';
                        }
                        return tpm;
                    }
                },
                {
                    title: "Opciones",
                    data: null,
                    orderable: false,
                    width: '90px',
                    class: "text-center",
                    render: function (data) {
                        configDTDireccion.tipoDirecciones.push(data.igdtdrccn);

                        var tpm = "";
                        if ($accesoEditarDireccion.val() == "True") {
                            tpm += '<button type="button" class="btn btn-info btn-xs btn-editar" data-toggle="modal" data-target="#mdlDireccion" data-dir="'+data.igdtdrccn+'" data-id="'+data.id+'" title="Editar"><span><i class="la la-edit"></i></span></button>';
                        }
                        if ($accesoEliminarDireccion.val() == "True") {
                            tpm += ' <button title="Cambiar estado" data-id="'+data.id+'" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>';

                            //tpm += ' <button type="button" class="btn btn-danger btn-xs btn-delete" data-id="'+data.id+'" title="Desactivar"><span><i class="la la-trash"></i></span></button>';
                        }
                        return tpm;
                    }
                }
            ],
            columnDefs: [
                {
                    targets: "_all",
                    className: 'text-center'
                }
            ]
        },
        eventos: {
            eliminar: function () {
                configDTDireccion.objecto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesDireccion.eliminarDireccion(id);
                })
            },
            editar: function () {
                configDTDireccion.objecto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");
                    var dir = $(this).data("dir");
                    $modalTituloDireccion.text("Editar Dirección");
                    $hfactionDireccion.val("E");
                    $cboTDireccion.empty();
                    $cboTDireccion.LlenarSelectGDFiltrado("GDTDRCCN", configDTDireccion.tipoDirecciones, dir);
                    if ($cboTPersonaNJ.val() == 1) {
                        $cboTDireccion.children('option[value="3"]').hide();
                    } else {
                        $cboTDireccion.children('option[value="3"]').show();
                        $cboTDireccion.val("3").trigger("change")
                    }
                    funcionesDireccion.obtenerDireccion(id);
                    if ($cboTipoZona.val() == 0) {
                        $FormularioDireccion.find('.input-zona').attr('disabled', true);
                    }
                })
            },
            init: function () {
                configDTDireccion.eventos.eliminar();
                configDTDireccion.eventos.editar();
            }
        },
        reload: function () {
            configDTDireccion.tipoDirecciones = [];
            if (configDTDireccion.objecto == null || configDTDireccion.objecto == "" || configDTDireccion.objecto == undefined) {
                configDTDireccion.objecto = $tblDireccion.DataTable(configDTDireccion.opciones);
                configDTDireccion.eventos.init()
            } else { configDTDireccion.objecto.ajax.reload(); }
        },

    };

    var configDTTelefono = {
        objecto: null,
        tienePrincipal: false,
        opciones: {
            filter: false,
            ajax: {
                dataType: "JSON",
                url: "../Telefono/listarTelefono",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idprsna = $hfCodPersona.val();
                    data.id = "";
                }
            },
            columns: [
                {
                    title: "Tipo Telefono",
                    data: "gdttlfno",
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Departamento",
                    data: "cubgeo",
                    width: '10%',
                    orderable: false,
                    class: "text-center"
                },
                {
                    title: "Teléfono",
                    data: "ntlfno",
                    width: '10%',
                    orderable: false,
                    class: "text-center"
                },
                {
                    title: "Observación",
                    data: "obsrvcn",
                    width: '10%',
                    orderable: false,
                    class: "text-center"
                },
                {
                    title: "Predeterminada",
                    data: null,
                    width: '10%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        if (data.fprncpl == "1") {
                            tpm += 'SI';
                            configDTTelefono.tienePrincipal = true;
                        }
                        else {
                            tpm += 'NO';
                        }
                        return tpm;
                    }
                },
                {
                    title: "F. Estado",
                    data: "festdo", width: '10%',
                    orderable: false,
                    class: "text-center d-none"
                },
                {
                    title: "U. Edición",
                    data: "uedcn", width: '10%',
                    orderable: false,
                    class: "text-center"
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN", width: '10%',
                    orderable: false
                },
                {
                    title: "Estado",
                    data: null,
                    width: '2%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var tpm;
                        if (data.gdestdo == "A") {
                            tpm = '<span><i class="fa fa-circle text-success" title="Activo"></i></span>';
                        }
                        else {
                            tpm = '<span><i class="fa fa-circle text-danger" title="Inactivo"></i></span>';
                        }
                        return tpm;
                    }
                },
                {
                    title: "Opciones",
                    data: null,
                    orderable: false,
                    width: '15%',
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        if ($accesoEditarTelefono.val() == "True") {
                            tpm += '<button type="button" class="btn btn-info btn-xs btn-editar" data-toggle="modal" data-target="#mdlTelefono" data-id="'+data.id+'" title="Editar"><span><i class="la la-edit"></i></span></button>';
                        }
                        if ($accesoEliminarTelefono.val() == "True") {
                            tpm += ' <button title="Cambiar estado" data-id="'+data.id+'" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>';

                            //tpm += ' <button type="button" class="btn btn-danger btn-xs btn-delete" data-id="'+data.id+'" title="Desactivar"><span><i class="la la-trash"></i></span></button>';
                        }
                        return tpm;
                    }
                }
            ],
            columnDefs: [
                {
                    targets: "_all",
                    className: 'text-center'
                }
            ]
        },
        eventos: {
            eliminar: function () {
                configDTTelefono.objecto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesTelefono.eliminarTelefono(id);
                })
            },
            editar: function () {
                configDTTelefono.objecto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");
                    $modalTituloTelefono.text("Editar Telefono");
                    $hfactionTelefono.val("E");
                    funcionesTelefono.obtenerTelefono(id);
                })
            },
            init: function () {
                configDTTelefono.eventos.eliminar();
                configDTTelefono.eventos.editar();
            }
        },
        reload: function () {
            if (configDTTelefono.objecto == null || configDTTelefono.objecto == "" || configDTTelefono.objecto == undefined) {
                configDTTelefono.objecto = $tbltelefono.DataTable(configDTTelefono.opciones);
                configDTTelefono.eventos.init();
            } else { configDTTelefono.objecto.ajax.reload(); }
        },

    };

    var configDTGrado = {
        objecto: null,
        opciones: {
            filter: false,
            ajax: {
                dataType: "JSON",
                url: "../Grado/listarGrado",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idprsna = $hfCodPersona.val();
                    data.id = "";
                }
            },
            columns: [
                {
                    title: "ID",
                    data: "id",
                    width: '5%',
                    orderable: true,
                    className: "d-none"
                },
                {
                    "class": "",
                    "orderable": false,
                    "data": null,
                    "defaultContent": "",
                    render: function (data) {
                        return '<div class=" la la-plus btn btn-info btn-xs vwDetAdicional"></div>';
                    }
                },
                {
                    title: "Tipo de Relación",
                    data: "gdtrlcn",
                    width: '10%',
                    orderable: false,
                    class: "text-center"
                },
                {
                    title: "Situación Militar",
                    data: "gdsmltr",
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Grado",
                    data: "gdtgrdo",
                    width: '10%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "F.Baja",
                    data: "fbaja",
                    width: '10%',
                    orderable: false,
                    class: "text-center d-none"
                },
                {
                    title: "Causal de Baja",
                    data: "gdcbja",
                    width: '10%',
                    orderable: false,
                    class: "text-center d-none"
                },
                {
                    title: "Especialidad",
                    data: "gdespcldd",
                    width: '10%',
                    orderable: false,
                    class: "text-center"
                },
                {
                    title: "Tipo Afección",
                    data: "gdtafccn",
                    width: '10%',
                    orderable: false,
                    class: "text-center d-none"
                },
                {
                    title: "Vínculo de Persona",
                    data: "gdtprsnl",
                    width: '10%',
                    orderable: false,
                    class: "text-center"
                },
                {
                    title: "F.Certificado",
                    data: "fecrtfcdo",
                    width: '10%',
                    orderable: false,
                    class: "text-center d-none"
                },
                {
                    title: "Pencionable",
                    data: "gdpncnble",
                    width: '10%',
                    orderable: false,
                    class: "text-center d-none"
                },
                {
                    title: "Unidad de Pago",
                    data: "gdtupgo",
                    width: '10%',
                    orderable: false,
                    class: "text-center d-none"
                },
                {
                    title: "U. Edición",
                    data: "uedcn",
                    width: '10%',
                    orderable: false,
                    class: "text-center"
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN",
                    width: '10%',
                    orderable: false
                },
                {
                    title: "Estado",
                    data: null,
                    width: '2%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var tpm;
                        if (data.gdestdo == "A") {
                            tpm = '<span><i class="fa fa-circle text-success" title="Activo"></i></span>';
                        }
                        else {
                            tpm = '<span><i class="fa fa-circle text-danger" title="Inactivo"></i></span>';
                        }
                        return tpm;
                    }
                },
                {
                    title: "Opciones",
                    data: null,
                    orderable: false,
                    width: '15%',
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        if ($accesoEditarGrado.val() == "True") {
                            tpm += '<button type="button" class="btn btn-info btn-xs btn-editar" data-toggle="modal" data-target="#mdlGrado" data-id="'+data.id+'" title="Editar"><span><i class="la la-edit"></i></span></button>';
                        }
                        if ($accesoEliminarGrado.val() == "True") {
                            tpm += ' <button title="Cambiar estado" data-id="'+data.id+'" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>';

                            //tpm += ' <button type="button" class="btn btn-danger btn-xs btn-delete" data-id="'+data.id+'" title="Desactivar"><span><i class="la la-trash"></i></span></button>';
                        } return tpm;
                    }
                }
            ],
            columnDefs: [
                {
                    targets: "_all",
                    className: 'text-center'
                }
            ]
        },
        eventos: {
            eliminar: function () {
                configDTGrado.objecto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesGrado.eliminarGrado(id);
                })
            },
            editar: function () {
                configDTGrado.objecto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");
                    $modalTituloGrado.text("Editar Datos de Interés");
                    $hfactionGrado.val("E");
                    funcionesGrado.obtenerGrado(id);
                })
            },
            count: function () {
                configDTGrado.objecto.on('draw', function () {
                    var info = configDTGrado.objecto.page.info();
                    if (info.recordsTotal == 0) {
                        $btnNuevoGrado.removeClass("d-none");
                    }
                    else {
                        $btnNuevoGrado.addClass("d-none");
                    }
                })
            },
            mostrarDetalle: function (data) {
                var serviceTime = calcTimeServ(data.fingreso, data.fdispon, data.ftdispon, data.fbaja);
                var aServ = serviceTime[2];
                var mServ = serviceTime[1];
                var dServ = serviceTime[0];

                var TServA = (aServ == 1) ? aServ + " año / " : aServ + " años / ";
                var TServM = (mServ == 1) ? mServ + " mes / " : mServ + " meses / ";
                var fullServ = (dServ == 1) ? TServA + TServM + dServ + " día" : TServA + TServM + dServ + " dias";


                if (isNaN(aServ) || isNaN(mServ) || isNaN(dServ)) {
                    fullServ = "NO REGISTRA";
                }

                return '<table class="table table-striped table-bordered">'
                        +'<thead>'
                        +'<tr>'
                        +'<th>Ingreso</th>'
                        +'<th>Disponibilidad</th>'
                        +'<th>Termino Disponibilidad</th>'
                        +'<th>Retiro</th>'
                        +'<th>Años de Servicio</th>'
                        +'</tr>'
                        +'</thead>'
                        +'<tbody>'
                        +'<tr>'
                        +'<td>'+data.fingreso+'</td>'
                        +'<td>'+data.fdispon+'</td>'
                        +'<td>'+data.ftdispon+'</td>'
                        +'<td>'+data.fbaja+'</td>'
                        +'<td>'+fullServ+'</td>'
                        +'</tr>'
                        +'</tbody>'
                        +'<thead>'
                        +'<tr>'
                        +'<th>Motivo Disponibilidad</th>'
                        +'<th colspan="2">Causal de Baja</th>'
                        +'<th>Tipo de Afección</th>'
                        +'<th>Tipo Discapacidad</th>'
                        +'</tr>'
                        +'</thead>'
                        +'<tbody>'
                        +'<tr>'
                        +'<td>'+data.gdmtvdsp+'</td>'
                        +'<td colspan="2">'+data.gdcbja+'</td>'
                        +'<td>'+data.gdtafccn+'</td>'
                        +'<td>'+data.gdintrdcto+'</td>'
                        +'</tr>'
                        +'</tbody>'
                        +'<thead>'
                        +'<tr>'
                        +'<th>Diagnóstico</th>'
                        +'<th>Num. Certificado</th>'
                        +'<th>Fecha Certificado</th>'
                        +'<th>Unidad de Pago</th>'
                        +'<th>Pensionable</th>'
                        +'</tr>'
                        +'</thead>'
                        +'<tbody>'
                        +'<tr>'
                        +'<td>'+data.diagcie+'</td>'
                        +'<td>'+data.ncrtfcdo+'</td>'
                        +'<td>'+data.fecrtfcdo+'</td>'
                        +'<td>'+data.gdtupgo+'</td>'
                        +'<td>'+data.gdpncnble+'</td>'
                        +'</tr>'
                        +'</tbody>'
                        +'</table>'
            },
            verDetalle: function () {
                var detailRows = [];
                $tblGrado.find('tbody').on('click', 'tr td .vwDetAdicional', function () {
                    var tr = $(this).closest('tr');
                    var data = configDTGrado.objecto.row(tr).data();
                    var row = configDTGrado.objecto.row(tr);
                    var idx = $.inArray(data.id, detailRows);
                    if (row.child.isShown()) {
                        tr.removeClass('details');
                        $(this).removeClass("la-minus")
                        $(this).addClass("la-plus")
                        row.child.hide();
                        // Remove from the 'open' array
                        detailRows.splice(idx, 1);
                    }
                    else {
                        tr.addClass('details');
                        $(this).addClass("la-minus")
                        $(this).removeClass("la-plus")
                        row.child(configDTGrado.eventos.mostrarDetalle(row.data())).show();
                        // Add to the 'open' array
                        if (idx === -1) {
                            detailRows.push(tr.attr('id'));
                        }
                    }
                });
                configDTGrado.objecto.on('draw', function () {
                    $.each(detailRows, function (i, id) {
                        $('#' + id + ' td.details-control').trigger('click');
                    });
                });
            },
            init: function () {
                configDTGrado.eventos.eliminar();
                configDTGrado.eventos.editar();
                configDTGrado.eventos.count();
                configDTGrado.eventos.verDetalle();
            }
        },
        reload: function () {
            if (configDTGrado.objecto == null || configDTGrado.objecto == "" || configDTGrado.objecto == undefined) {
                configDTGrado.objecto = $tblGrado.DataTable(configDTGrado.opciones);
                configDTGrado.eventos.init();
            } else { configDTGrado.objecto.ajax.reload(); }
        },
    };

    var configDtDependencia = {
        objeto: null,
        opciones: {
            filter: false,
            ajax: {
                dataType: "JSON",
                url: "../Dependencias/listar",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idprsna = $hfCodPersona.val();
                    //data.id = "";
                }
            },
            columns: [
                {
                    title: "Cod. Persona",
                    data: "idpn",
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Nombres y Apellidos",
                    data: "datos",
                    width: '70%',
                    orderable: false,
                    class: "text-left"
                },
                {
                    title: "U. Edición",
                    data: "uedcn",
                    width: '10%',
                    orderable: false,
                    class: "text-center"
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN",
                    width: '10%',
                    orderable: false
                },
                {
                    title: "Estado",
                    data: null,
                    width: '2%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var tpm;
                        if (data.gdestdo == "A") {
                            tpm = '<span><i class="fa fa-circle text-success" title="Activo"></i></span>';
                        }
                        else {
                            tpm = '<span><i class="fa fa-circle text-danger" title="Inactivo"></i></span>';
                        }
                        return tpm;
                    }
                },
                {
                    title: "Opciones",
                    data: null,
                    orderable: false,
                    width: '15%',
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        if ($accesoEditarDependientes.val() == "True") {
                            tpm += '<button type="button" class="btn btn-info btn-xs btn-editar" data-toggle="modal" data-target="#mdlDependencia" data-id="'+data.id+'" title="Editar"><span><i class="la la-edit"></i></span></button>';
                        }
                        if ($accesoEliminarDependientes.val() == "True") {
                            tpm += ' <button title="Cambiar estado" data-id="'+data.id+'" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>';
                        }
                        return tpm;
                    }
                }
            ],
            columnDefs: [
                {
                    targets: "_all",
                    className: 'text-center'
                }
            ]
        },
        eventos: {
            eliminar: function () {
                configDtDependencia.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesDependiente.eliminar(id);
                })
            },
            editar: function () {
                configDtDependencia.objeto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");
                    var datarow = configDtDependencia.objeto.row($(this).parents('tr')).data();
                    var obj = { id: datarow.idpn, text: datarow.datos };
                    $mdlDependenciaLabel.text("Editar Dependiente");
                    $hfaction.val("E");
                    funcionesDependiente.obtener(id, obj);
                })
            },
            init: function () {
                configDtDependencia.eventos.eliminar();
                configDtDependencia.eventos.editar();
            }
        },
        reload: function () {
            if (configDtDependencia.objeto == null || configDtDependencia.objeto == "" || configDtDependencia.objeto == undefined) {
                configDtDependencia.objeto = $dtDependencias.DataTable(configDtDependencia.opciones);
                configDtDependencia.eventos.init();
            } else { configDtDependencia.objeto.ajax.reload(); }
        }
    }

    var configDtHomonimos = {
        objeto: null,
        opciones: {
            filter: false,
            ajax: {
                dataType: "JSON",
                url: "../Persona/lista-homonimos",
                type: "POST",
                data: function (data) {
                    delete data.columns;
                    data.entidad = {
                        amtrno: $txtAMaterno.val().trim(),
                        aptrno: $txtAPaterno.val().trim(),
                        pnmbre: $txtPNombre.val().trim(),
                        snmbre: $txtSNombre.val().trim(),
                    }
                }
            },
            columns: [
                {
                    title: "ID",
                    data: "id",
                    width: '5%',
                    orderable: true,
                    className: "d-none"
                },
                {
                    title: "Tipo Documento",
                    data: "gddcmnto",
                    width: '5%',
                    orderable: true,
                    className: "text-center"
                },
                {
                    title: "Nro. Documento",
                    data: "ndcmnto",
                    width: '5%',
                    orderable: true,
                    className: "text-center"
                },
                {
                    title: "Nombres y Apellidos",
                    data: "datos",
                    width: '70%',
                    orderable: false,
                    class: "text-left"
                },
                {
                    title: "Estado",
                    data: null,
                    width: '2%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var tpm;
                        if (data.gdestdo == "A") {
                            tpm = '<span><i class="fa fa-circle text-success" title="Activo"></i></span>';
                        }
                        else {
                            tpm = '<span><i class="fa fa-circle text-danger" title="Inactivo"></i></span>';
                        }
                        return tpm;
                    }
                },
                {
                    title: "Opciones",
                    data: null,
                    orderable: false,
                    width: '15%',
                    class: "text-center d-none",
                    render: function (data) {
                        var tpm = "";

                        tpm += '<button type="button" class="btn btn-info btn-xs btn-editar" data-toggle="modal" data-target="#mdlDependencia" data-id="'+data.id+'" title="Editar"><span><i class="la la-edit"></i></span></button>';

                        tpm += ' <button title="Cambiar estado" data-id="'+data.id+'" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>';

                        //tpm += '<button type="button" class="btn btn-danger btn-xs btn-delete" data-id="'+data.id+'" title="Desactivar"><span><i class="la la-trash"></i></span></button>';
                        return tpm;
                    }
                }
            ],
            columnDefs: [
                {
                    targets: "_all",
                    className: 'text-center'
                }
            ]
        },
        eventos: {
            selectRow: function () {
                $dtHomonimo.on('click', 'tbody tr', function () {
                    var data = configDtHomonimos.objeto.row(this).data();
                    EntidadSusalud = new Object();
                    EntidadSusalud = data;
                    if (data.id > 0) {
                        Swal.fire({
                            title: "¿Quiere cargar los datos del registro?",
                            icon: "info",
                            showCancelButton: true,
                            confirmButtonText: "Si, cargar",
                            confirmButtonClass: "btn btn-danger",
                            cancelButtonText: "Cancelar"
                        }).then(function (result) {
                            if (result.value) {
                                $hfCodPersona.val(data.id);
                                funcionesPersona.obtenerPersona(data.id);
                                $mdlHomonimos.modal('hide');

                            }
                        });
                    }
                })
            },
            count: function () {
                configDtHomonimos.objeto.on('draw', function () {
                    var info = configDtHomonimos.objeto.page.info();
                    if (info.recordsTotal > 0) {
                        $mdlHomonimos.modal('show')
                    }
                })
            },
            init: function () {
                configDtHomonimos.eventos.selectRow();
                configDtHomonimos.eventos.count();
            }
        },
        reload: function () {
            if (configDtHomonimos.objeto == null || configDtHomonimos.objeto == "" || configDtHomonimos.objeto == undefined) {
                configDtHomonimos.objeto = $dtHomonimo.DataTable(configDtHomonimos.opciones);
                configDtHomonimos.eventos.init();
            } else { configDtHomonimos.objeto.ajax.reload(); }
        }
    }

    var configDTCuentaBanco = {
        objecto: null,
        tienePrincipal: false,
        opciones: {
            filter: false,
            ajax: {
                dataType: "JSON",
                url: "../CuentaBanco/listarCuentaBanco",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idprsna = $hfCodPersona.val();
                    data.id = "";
                }
            },
            columns: [ 
                {
                    title: "Banco",
                    data: "gdbnco",
                    width: '10%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Tipo Cuenta",
                    data: "gdtcnta",
                    width: '10%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Titular",
                    data: "ttlr",
                    width: '10%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Nro de Cuenta",
                    data: "ncnta",
                    width: '10%',
                    orderable: false,
                    className: "text-center"
                },              
                {
                    title: "U. Edición",
                    data: "uedcn", width: '10%',
                    orderable: false,
                    class: "text-center"
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN", width: '5%',
                    orderable: false
                },
                {
                    title: "Estado",
                    data: null,
                    width: '2%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var tpm;
                        if (data.gdestdo == "A") {
                            tpm = '<span><i class="fa fa-circle text-success" title="Activo"></i></span>';
                        }
                        else {
                            tpm = '<span><i class="fa fa-circle text-danger" title="Inactivo"></i></span>';
                        }
                        return tpm;
                    }
                },
                {
                    title: "Opciones",
                    data: null,
                    orderable: false,
                    width: '15%',
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        //  if ($accesoEditarCorreo.val() == "True") {
                        tpm += '<button type="button" class="btn btn-info btn-xs btn-editar" data-toggle="modal" data-id="'+data.id+'" title="Editar"><span><i class="la la-edit"></i></span></button>';//data-target="#mdlCorreo" 
                        //}
                        // if ($accesoEliminarCorreo.val() == "True") {
                        tpm += ' <button title="Cambiar estado" data-id="'+data.id+'" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>';

                        //}
                        return tpm;
                    }
                }
            ],
            columnDefs: [
                {
                    targets: "_all",
                    className: 'text-center'
                }
            ]
        },
        eventos: {
            eliminar: function () {
                configDTCuentaBanco.objecto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesCuentaBanco.eliminarCuentaBanco(id);
                })
            },
            editar: function () {
                configDTCuentaBanco.objecto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");
                    $hfCodCuentaBanco.val("E");
                    $TbAgregartab.removeClass("disabled");
                    $TbAgregartab.click();
                    funcionesCuentaBanco.obtenerCuentaBanco(id);

                })
            },
            init: function () {
                configDTCuentaBanco.eventos.eliminar();
                configDTCuentaBanco.eventos.editar();
            }
        },
        reload: function () {
            if (configDTCuentaBanco.objecto == null || configDTCuentaBanco.objecto == "" || configDTCuentaBanco.objecto == undefined) {
                configDTCuentaBanco.objecto = $tblCuentaBanco.DataTable(configDTCuentaBanco.opciones);
                configDTCuentaBanco.eventos.init();

            } else { configDTCuentaBanco.objecto.ajax.reload(); }
        },
    }

    var configModalDocumento = {
        form: {
            objeto: $FormularioDocumento.validate({
                errorPlacement: function (error, element) {
                    if (element.parent('.input-group').length) {
                        error.insertAfter(element.parent());
                    } else {
                        error.insertAfter(element);
                    }
                },
                rules: {
                    cboDocumento: {
                        required: true
                    },
                    txtNDocumento: {
                        required: true,
                        ruc_10: true
                    },
                    txtFInscripcion: {
                        required: false
                    },
                    txtFVncmt: {
                        required: false
                    },
                    cboPrincipalDocumento: {
                        required: true
                    }
                }
            }),
            eventos: {
                reset: function () {
                    configModalDocumento.form.objeto.resetForm();
                }
            }
        },
        eventos: {
            onHide: function () {
                $mdlDocumento.on("hidden.bs.modal", function () {
                    configModalDocumento.eventos.reset();
                    $FormularioDocumento.find(".msg").text("");
                })
            },
            onShow: function () {
                $mdlDocumento.on("shown.bs.modal", function () {
                    if ($hfaction.val() == "N") {
                        $FormularioDocumento.AgregarCamposDefectoAuditoria();
                        $FormularioDocumento.DeshabilitarCamposAuditoria();
                    }
                })
            },
            reset: function () {
                configModalDocumento.form.eventos.reset();
                $FormularioDocumento.trigger("reset");
                $FormularioDocumento.find(":input").attr("disabled", false);
            }
        },
        init: function () {
            this.eventos.onHide();
            this.eventos.onShow();
        }
    }

    var configModalCorreo = {
        form: {
            objeto: $FormularioCorreo.validate({
                rules: {
                    cboTCorreo: {
                        required: true,
                    },
                    txtCorreo: {
                        required: true,
                    },
                    cboPrincipalCorreo: {
                        required: true,
                    }
                }
            }),
            eventos: {
                reset: function () {
                    configModalCorreo.form.objeto.resetForm();
                }
            }
        },
        eventos: {
            onHide: function () {
                $mdlCorreo.on("hidden.bs.modal", function () {
                    configModalCorreo.eventos.reset();
                })
            },
            onShow: function () {
                $mdlCorreo.on("shown.bs.modal", function () {
                    if ($hfactionCorreo.val() == "N") {
                        $FormularioCorreo.AgregarCamposDefectoAuditoria();
                        $FormularioCorreo.DeshabilitarCamposAuditoria();
                    }
                })
            },
            reset: function () {
                configModalCorreo.form.eventos.reset();
                $FormularioCorreo.trigger("reset");
                $FormularioCorreo.find(":input").attr("disabled", false);
            }
        },
        init: function () {
            this.eventos.onHide();
            this.eventos.onShow();
        }
    }

    var configModalDireccion = {
        form: {
            objeto: $FormularioDireccion.validate({
                rules: {
                    cboTDireccion: {
                        required: true,
                    },
                    cboTVia: {
                        required: true,
                    },
                    txtNroVia: {
                        required: true,
                    },
                    cboTipoZona: {
                        required: false,
                    },
                    cboPrincipalDireccion: {
                        required: true,
                    },
                    Zona: {
                        required: false,
                    },
                    cboDepartamentoDirec: {
                        required: true,
                    },
                    cboProvinciaDirec: {
                        required: true,
                    },
                    cubgeo: {
                        required: true,
                    }
                }
            }),
            eventos: {
                reset: function () {
                    configModalDireccion.form.objeto.resetForm();
                }
            }
        },
        eventos: {
            onHide: function () {
                $mdlDireccion.on("hidden.bs.modal", function () {
                    configModalDireccion.eventos.reset();
                })
            },
            onShow: function () {
                $mdlDireccion.on("shown.bs.modal", function () {
                    if ($hfactionDireccion.val() == "N") {
                        $FormularioDireccion.AgregarCamposDefectoAuditoria();
                        $FormularioDireccion.DeshabilitarCamposAuditoria();
                        $cboProvinciaDirec.val('').text('Seleccione').attr('disabled', true);
                        $cboDistritoDirec.val('').text('Seleccione').attr('disabled', true);
                    }
                })
            },
            reset: function () {
                configModalDireccion.form.eventos.reset();
                $FormularioDireccion.trigger("reset");
                $FormularioDireccion.find(":input").attr("disabled", false);
            }
        },
        init: function () {
            this.eventos.onHide();
            this.eventos.onShow();
        }
    }

    var configModalTelefono = {
        form: {
            objeto: $FormularioTelefono.validate({
                rules: {
                    cboTTelefono: {
                        required: true,
                    },
                    txtTelefono: {
                        required: true,
                    },
                    txtNroVia: {
                        required: true,
                    },
                    cboPrincipalTelefono: {
                        required: true,
                    }
                }
            }),
            eventos: {
                reset: function () {

                    configModalTelefono.form.objeto.resetForm();
                }
            }
        },
        eventos: {
            onHide: function () {
                $mdltelefono.on("hidden.bs.modal", function () {
                    configModalTelefono.eventos.reset();
                })
            },
            onShow: function () {
                $mdltelefono.on("shown.bs.modal", function () {
                    if ($hfactionTelefono.val() == "N") {
                        $FormularioTelefono.AgregarCamposDefectoAuditoria();
                        $FormularioTelefono.DeshabilitarCamposAuditoria();
                    }
                })
            },
            reset: function () {
                configModalTelefono.form.eventos.reset();
                $FormularioTelefono.trigger("reset");
                $FormularioTelefono.find(":input").attr("disabled", false);
            }
        },
        init: function () {
            this.eventos.onHide();
            this.eventos.onShow();
        }
    }

    var configModalGrado = {
        form: {
            objecto: $FormularioGrado.validate({
                highlight: function (element, errorClass, validClass) {
                    if ($(element).hasClass("select2-hidden-accessible")) {
                        $(element).siblings(".select2-container").find(".select2-selection").addClass("error");
                    } else {
                        $(element).addClass('error');
                    }
                },
                unhighlight: function (element, errorClass, validClass) {
                    if ($(element).hasClass("select2-hidden-accessible")) {
                        $(element).siblings(".select2-container").find(".select2-selection").removeClass("error");
                    } else {
                        $(element).removeClass('error');
                    }
                },
                success: function (label, element) {
                    if ($(element).hasClass("select2-hidden-accessible")) {
                        $(element).siblings(".select2-container").find(".select2-selection").removeClass("error");
                    } else {
                        $(element).removeClass('error');
                    }
                    label.remove();
                },
                errorPlacement: function (error, element) {
                    if (element.parent('.input-group').length) {
                        error.insertAfter(element.parent());
                    } else if (element.hasClass("select2-hidden-accessible")) {
                        element.siblings(":last").append(error);
                    } else {
                        error.insertAfter(element);
                    }
                },
                rules: {
                    cboSMilitar: {
                        //required: true,
                    },
                    cboGrado: {
                        required: true,
                    },
                    cboTRelaccion: {
                        required: true,
                        maxlength: 22
                    },
                    cboCBaja: {
                        required: true,
                    },
                    cboEspecialidad: {
                        required: true,
                    },
                    cboTAfeccion: {
                        required: true,
                        maxlength: 22
                    },
                    cboTPersonaGrado: {
                        required: true,
                    },
                    cboUpago: {
                        //required: true,
                        maxlength: 22
                    },
                    cboInterdicto: {
                        //required: true,
                        maxlength: 22
                    },
                    cboPensionable: {
                        //required: true,
                    }


                }
            }),
            eventos: {
                reset: function () {
                    configModalGrado.form.objecto.resetForm();
                }
            }
        },
        eventos: {
            onHide: function () {
                $mdlGrado.on("hidden.bs.modal", function () {
                    configModalGrado.eventos.reset();
                })
            },
            onShow: function () {
                $mdlGrado.on("shown.bs.modal", function () {
                    if ($hfactionGrado.val() == "N") {
                        $FormularioGrado.AgregarCamposDefectoAuditoria();
                        $FormularioGrado.DeshabilitarCamposAuditoria();
                        $txtFIngreso.val("");
                        $txtFDisponibilidad.val("");
                        $txtFTermino.val("");
                        $txtFBaja.val("");
                        $txtTServicio.val("").attr("disabled", true);
                        $cboGrado.val("");
                        $cboEspecialidad.val("");
                    }
                    $cboInterdicto.attr("required", false);
                    $cboDiagnostico.attr("required", false);
                    $txtNCertificado.attr("required", false);
                    $txtFCertificado.attr("required", false);
                })
            },
            reset: function () {
                configModalGrado.form.eventos.reset();
                $FormularioGrado.trigger("reset");
                $FormularioGrado.find(":input").attr("disabled", false);
                $txtTServicio.val("").attr("disabled", true);
                $cboMDisponibilidad.val("").trigger("change");
            }
        },
        init: function () {
            this.eventos.onHide();
            this.eventos.onShow();
        }
    }

    var configFormPersona = {
        objeto: $FormularioPersona.validate({
            errorPlacement: function (error, element) {
                if (element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else {
                    error.insertAfter(element);
                }
            },
            rules: {
                cboTPersonaNJ: {
                    required: true,
                },
                txtRSocial: {
                    required: true,
                },
                txtAPaterno: {
                    required: true,
                    maxlength: 22
                },
                txtAMaterno: {
                    required: false,
                },
                txtPNombre: {
                    required: true,
                },
                txtSNombre: {
                    required: false,
                },
                cboNacionalidad: {
                    required: true,
                },
                cboECivil: {
                    required: true,
                },
                cboSexo: {
                    required: true,
                },
                txtFNacimiento: {
                    required: true,
                },
                txtFFallecimiento: {
                    //dateAfter: '#txtFNacimiento'
                },
                cboPDepartamento: {
                    required: true,
                },
                cboPProvincia: {
                    required: true,
                },
                cboDistrito: {
                    required: true,
                },
                cboTDocumento: {
                    required: true,
                },
                cboPJTDocumento: {
                    required: true,
                },
                txtPJNDocumento: {
                    required: true,
                    minlength: 11,
                    ruc_20:true
                },
                cboPJTSociedad: {
                    required: true,
                },
                cboPJTEmpresa: {
                    required: false,
                },
                txtPJFNacimiento: {
                    required: false,
                },
            }
        }),
        homonimiaPN: {
            options: {
                class: 'homo',
                elemcontent: $FormularioPersona
            },
            init: function () {
                eventosIncrustadosPersona.Homonimia(configFormPersona.homonimiaPN.options);
            }
        },
        eventos: {
            reset: function () {

                configFormPersona.objeto.resetForm();
            }
        },
    }

    var configModalPersonaDep = {
        form: {
            objeto: $frmDependencia.validate({
                rules: {
                    cboSMilitar: {
                        required: true,
                    },
                    txtGrado: {
                        required: true,
                    },
                    cboTRelaccion: {
                        required: true,
                        maxlength: 22
                    },
                    cboCBaja: {
                        required: true,
                    },
                    cboEspecialidad: {
                        required: true,
                    },
                    cboTAfeccion: {
                        required: true,
                        maxlength: 22
                    },
                    cboTPersona: {
                        required: true,
                    },
                    txtUpago: {
                        required: true,
                        maxlength: 22
                    },
                    cboInterdicto: {
                        required: true,
                        maxlength: 22
                    },
                    cboPensionable: {
                        required: true,
                    }
                }
            }),
            eventos: {
                reset: function () {
                    configModalPersonaDep.form.objeto.resetForm();
                }
            }
        },
        eventos: {
            onHide: function () {
                $mdlDependencia.on("hidden.bs.modal", function () {
                    configModalPersonaDep.eventos.reset();
                })
            },
            onShow: function () {
                $mdlDependencia.on("shown.bs.modal", function () {
                    if ($hfaction.val() == "N") {
                        $frmDependencia.AgregarCamposDefectoAuditoria();
                        $frmDependencia.DeshabilitarCamposAuditoria();
                    }
                })
            },
            reset: function () {
                //configModalPersonaDep.form.eventos.reset();
                $frmDependencia.trigger("reset");
                $frmDependencia.find(":input").attr("disabled", false);
            }
        },
        init: function () {
            this.eventos.onHide();
            this.eventos.onShow();
        }
    }

    var configDatePickers = {
        opcStandar: {
            language: "es",
            assumeNearbyYear: true,
            weekStart: 1,
            daysOfWeekHighlighted: "6,0",
            autoclose: true,
            todayHighlight: true,
            format: "dd/mm/yyyy",
            todayBtn: "linked",
            keyboardNavigation: true
        },
        opcRangoDesdeHasta: {
            inputs: $('.fRangoPers'),
            language: "es",
            assumeNearbyYear: true,
            weekStart: 1,
            daysOfWeekHighlighted: "6,0",
            autoclose: true,
            todayHighlight: true,
            format: "dd/mm/yyyy",
            todayBtn: "linked",
            keyboardNavigation: true
        },
        init: function () {

            //DP LISTAR PERSONA
            $rdpPersList.datepicker(configDatePickers.opcRangoDesdeHasta);

            //DP PERSONA
            $txtFNacimiento.datepicker(configDatePickers.opcStandar);
            $txtFFallecimiento.datepicker(configDatePickers.opcStandar);
            $txtPJFNacimiento.datepicker(configDatePickers.opcStandar);

            //DP GRADO
            $txtFIngreso.datepicker(configDatePickers.opcStandar);
            $txtFDisponibilidad.datepicker(configDatePickers.opcStandar);
            $txtFTermino.datepicker(configDatePickers.opcStandar);
            $txtFBaja.datepicker(configDatePickers.opcStandar);
            $txtFCertificado.datepicker(configDatePickers.opcStandar);

            //DP DOCUMENTO
            $txtFInscripcion.datepicker(configDatePickers.opcStandar);
            $txtFVncmt.datepicker(configDatePickers.opcStandar);
        }
    }

    var configCboListPersonas = {
        objeto: null,
        options: {
            placeholder: 'Seleccione',
            dropdownCssClass: 'form-control form-control-sm',
            language: "es",
            theme: 'bootstrap4',
            ajax: {
                url: "/Persona/listar",
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    var query = {
                        tPersona: '1',
                        p_sDatos: params.term,
                    }
                    return query;
                },
                processResults: function (data) {
                    var results = [];
                    var dataResponse = { id: '', text: '' }
                    for (var i = 0; i < data.length; i++) {
                        dataResponse = new Object();
                        dataResponse.id = data[i].id;
                        dataResponse.text = data[i].datos;
                        results.push(dataResponse);
                    }
                    return {
                        results: results
                    };
                }
            },
            allowClear: true
        },
        eventos: {
            onSelect: function () {
                $cboPersonasDep.on('select2:select', function (e) {
                    var data = e.params.data;
                    $txtIDPersonaDep.val(data.id);
                })
            },
            init: function () {
                configCboListPersonas.eventos.onSelect();
            }

        },
        reset: function () {
            $cboPersonasDep.val(null).trigger('change');
        },
        selected: function (data) {
            $cboPersonasDep
                .empty()
                .append(new Option(data.text, data.id))
            $cboPersonasDep.val(data.id);
            $cboPersonasDep.select2('data', data);
            $cboPersonasDep.trigger('change');
        },
        init: function () {
            $cboPersonasDep.select2(configCboListPersonas.options);
            configCboListPersonas.eventos.init();
        }
    }

    var configCboTipoDocumentos = {
        optDocumento: {
            obj: $txtNDocumento[0].id,
            param: [
                { val: "1", mlength: "8", minlength: "8" },
                { val: "8", mlength: "11", minlength: "11" },
                { val: "2", mlength: "15", minlength: null },
                { val: "3", mlength: "15", minlength: null },
                { val: "6", mlength: "6", minlength: null },
                { val: "9", mlength: "15", minlength: null }]
        },
        optDocSusalud: {
            obj: $txtSSLDNDocumento[0].id,
            param: [
                { val: "1", mlength: "8", minlength: "8" },
                { val: "8", mlength: "11", minlength: "11" },
                { val: "2", mlength: "15", minlength: null },
                { val: "3", mlength: "15", minlength: null },
                { val: "6", mlength: "6", minlength: null },
                { val: "9", mlength: "15", minlength: null }]
        },
        optDocPj: {
            obj: $txtPJNDocumento[0].id,
            param: [
                { val: "1", mlength: "8", minlength: "8" },
                { val: "8", mlength: "11", minlength: "11" },
                { val: "2", mlength: "15", minlength: null },
                { val: "3", mlength: "15", minlength: null },
                { val: "6", mlength: "6", minlength: null },
                { val: "9", mlength: "15", minlength: null }]
        },
        optDocLstPersona: {
            obj: $txtDocumento[0].id,
            param: [
                { val: "1", mlength: "8", minlength: "8" },
                { val: "8", mlength: "11", minlength: "11" },
                { val: "2", mlength: "15", minlength: null },
                { val: "3", mlength: "15", minlength: null },
                { val: "6", mlength: "6", minlength: null },
                { val: "9", mlength: "15", minlength: null }]
        },
        optDocumentoCuentaBanco: {
            obj: $txtNroDocumento[0].id,
            param: [
                { val: "1", mlength: "8", minlength: "8" },
                { val: "8", mlength: "11", minlength: "11" },
                { val: "2", mlength: "15", minlength: null },
                { val: "3", mlength: "15", minlength: null },
                { val: "6", mlength: "6", minlength: null },
                { val: "9", mlength: "15", minlength: null }]
        },
        init: function () {
            $cboDocumento.on("change", function () {
                var id = $cboDocumento.val();
                if (id == "6") {
                    //buscar CRN siguiente
                    $txtNDocumento.attr("disabled", true);
                    $.get("../Documento/obtenerUltimoCRN")
                        .done(function (data) {
                            $txtNDocumento.val(data);
                            $txtNDocumento.attr("disabled", true);
                        })
                        .fail()
                        .always(function () {
                            //$txtNDocumento.attr("disabled", false);
                        });

                } else {
                    $txtNDocumento.attr("disabled", false);
                }
            });

            $cboDocumento.maxlengthDocumento(configCboTipoDocumentos.optDocumento);
            $cboSSLDTDocumento.maxlengthDocumento(configCboTipoDocumentos.optDocSusalud);
            $cboPJTDocumento.maxlengthDocumento(configCboTipoDocumentos.optDocPj);
            $cboTipoDocumento.maxlengthDocumento(configCboTipoDocumentos.optDocLstPersona);
            $cboTipoDocumentocb.maxlengthDocumento(configCboTipoDocumentos.optDocumentoCuentaBanco);
        }
    }

    var configUbigeos = {
        f_nacionalidad: function (obj) {
            var Pais = $(obj).val();
            var chkPais = $chkPaisNac;
            var optUbigeos;
            $cboPDistrito.children('option[value=""]').text("Seleccione").val("");
            $cboPDistrito.prop("disabled", false);
            if (chkPais.is(":checked")) {
                optUbigeos = configUbigeos.ubigeoPersona.optPaisNacimiento;
            }
            else {
                $PaisNac.addClass("d-none");
                $cboPaisNac.val(Pais);
                optUbigeos = configUbigeos.ubigeoPersona.optionNacionalidad;
            }
            if (Pais != 51) {
                $cboPDistrito.parent('div').find('span').text('Estado');
                $cboPDepartamento.parent('div').addClass('d-none');
                $cboPProvincia.parent('div').addClass('d-none');
                optUbigeos.codPais = Pais;
                optUbigeos.codProvincia = '';
                LlenarSelectDistrito(optUbigeos);
            }
            else {
                if (!chkPais.is(":checked")) {
                    $cboPaisNac.attr('disabled', true);
                }
                $PaisNac.removeClass('d-none');
                $cboPDistrito.parent('div').find('span').text('Distrito');
                $cboPDepartamento.parent('div').removeClass('d-none');
                $cboPProvincia.parent('div').removeClass('d-none');

                optUbigeos.codPais = '';
                optUbigeos.refresh = true;
                cargarUbigeo(optUbigeos);//2
            }
        },
        f_inicioUbigeo: function () {
            $PaisNac.addClass("d-none");
            $cboPDistrito.parent('div').find('span').text('Distrito');
            $cboPDistrito.append($("<option />").val('').text("Seleccione"));
            $cboPDistrito.val("");
            $cboPDistrito.attr("disabled", true);
            $cboPDepartamento.parent('div').removeClass('d-none');
            $cboPProvincia.append($("<option />").val('').text("Seleccione"));
            $cboPProvincia.val("");
            $cboPProvincia.attr("disabled", true);
            $cboPProvincia.parent('div').removeClass('d-none');
        },
        ubigeoPersona: {
            optPaisNacimiento: {
                codDepartamento: '',
                codProvincia: '',
                codUbigeo: '',
                codPais: '',
                controles: {
                    departamento: $cboPDepartamento,
                    provincia: $cboPProvincia,
                    distrito: $cboPDistrito,
                    nacionalidad: $cboPaisNac
                }
            },
            optionNacionalidad: {
                codDepartamento: '',
                codProvincia: '',
                codUbigeo: '',
                codPais: '',
                controles: {
                    departamento: $cboPDepartamento,
                    provincia: $cboPProvincia,
                    distrito: $cboPDistrito,
                    nacionalidad: $cboNacionalidad
                },
            },
            cargarUbigeosPersona: function (datosUbigeo) {
                var opt = {}
                opt = configUbigeos.ubigeoPersona.optionNacionalidad
                if (datosUbigeo.ncnldd == '51') {
                    opt = null;
                    if (datosUbigeo.cpncmnto == '51') {
                        opt = configUbigeos.ubigeoPersona.optionNacionalidad;
                        opt.codPais = datosUbigeo.ncnldd == '51' ? '169' : datosUbigeo.ncnldd;;
                    } else {
                        opt = configUbigeos.ubigeoPersona.optPaisNacimiento;
                        opt.codPais = datosUbigeo.cpncmnto;
                    }
                } else { 
                    opt.codPais = datosUbigeo.cpncmnto == '51' ? '169' : datosUbigeo.cpncmnto;
                }
                opt.codUbigeo = datosUbigeo.cubgeo
                cargarUbigeos(opt);
                //#region funcionalidad mostrar elementos Ubigeo
                if (datosUbigeo.ncnldd == '51') {
                    $PaisNac.removeClass('d-none');
                    if (datosUbigeo.cpncmnto == '51') {
                        $chkPaisNac.prop('checked', false);
                        $cboPaisNac.attr('disabled', true);
                        $cboPDistrito.parent('div').find('span').text('Distrito');
                        $cboPDepartamento.parent('div').removeClass('d-none');
                        $cboPProvincia.parent('div').removeClass('d-none');
                    }
                    else {
                        $chkPaisNac.prop('checked', true);
                        $cboPaisNac.attr('disabled', false);
                        $cboPDistrito.parent('div').find('span').text('Estado');
                        $cboPDepartamento.parent('div').addClass('d-none');
                        $cboPProvincia.parent('div').addClass('d-none');
                    }
                }
                else {
                    $PaisNac.addClass('d-none');
                    $cboPDistrito.parent('div').find('span').text('Estado');
                    $cboPDepartamento.parent('div').addClass('d-none');
                    $cboPProvincia.parent('div').addClass('d-none');
                }
                $cboNacionalidad.attr("disabled", false);
                //#endregion
            },
            init: function () {
                var opt = {};
                opt = configUbigeos.ubigeoPersona.optionNacionalidad;
                opt.codPais = '169';
                opt.refresh = true;
                //cargarUbigeo(opt);///1
                //configUbigeos.f_nacionalidad($cboNacionalidad)
                configUbigeos.f_inicioUbigeo();
            }
        },
        ubigeoDireccion: {
            optUbigeo: {
                codDepartamento: '',
                codProvincia: '',
                codUbigeo: '',
                codPais: '169',
                controles: {
                    departamento: $cboDepartamentoDirec,
                    provincia: $cboProvinciaDirec,
                    distrito: $cboDistritoDirec,
                    nacionalidad: ''
                }
            },
            cargarUbigeo: function (datosUbigeo) {
                var opt = {};
                opt = configUbigeos.ubigeoDireccion.optUbigeo;
                opt.codUbigeo = datosUbigeo.cubgeo;
                cargarUbigeos(opt);
            },
            init: function () {
                var opt = {};
                opt = configUbigeos.ubigeoDireccion.optUbigeo;
                opt.refresh = true;
                cargarUbigeo(opt);
            }
        },
        init: function () {

        }
    }

    var configFormCuentaBanco = {
        objeto: $FormularioCuentaBanco.validate({
            errorPlacement: function (error, element) {
                if (element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else {
                    error.insertAfter(element);
                }
            },
            rules: {
                cboBanco: {
                    required: true,
                },
                cboTipoCuenta: {
                    required: true,
                },
                txtNroCuenta: {
                    required: true,
                },
                txtTitularCuenta: {
                    required: true,
                },
                cboTipoDocumentocb: {
                    required: true,
                },
                txtNroDocumento: {
                    required: true,
                },
            }
        }),
        eventos: {
            reset: function () {
                $FormularioCuentaBanco.trigger("reset");
                configFormCuentaBanco.objeto.resetForm();
            }
        },
    }

    var funcionesPersona = {
        initTipoPersona: function (valor) {
            if (!$hfCodPersona.val()) {
                $FormularioPersona.trigger("reset");
                $FormularioPersona.AgregarCamposDefectoAuditoria();
                $cboTPersonaNJ.val(valor);
            }
            if (valor == 1) {
                $cnt_pNatural.show();
                $cnt_pJuridica.hide();
                configFormPersona.eventos.reset();
                $tab_GradoMilitar.removeClass("d-none");
                $tab_Dependientes.addClass("d-none");
                $btnConsultaSusalud.show();
                $btnConsultaSunat.hide();
            } else {
                $cnt_pNatural.hide();
                $cnt_pJuridica.show();
                configFormPersona.eventos.reset();
                $tab_GradoMilitar.addClass("d-none");
                $tab_Dependientes.removeClass("d-none");
                $btnConsultaSusalud.hide();
                $btnConsultaSunat.hide();
                $cboPJTDocumento.val('8').trigger("change");
                $cboPJTDocumento.attr('disabled', true);
            }
        },
        NuevoPersona: function () {
            $tab_Documento.removeClass("disabled");
            $tab_Direccion.addClass("disabled");
            $tab_CuentaCorreo.addClass("disabled");
            $tab_GradoMilitar.addClass("disabled");
            $tab_Telefono.addClass("disabled");
            $tab_Dependientes.addClass("disabled");
            $tab_CuentaBanco.addClass("disabled");
            $tab_DatosGenerales.removeClass("disabled");
            $FormularioPersona.trigger("reset");
            $FormularioPersona.AgregarCamposDefectoAuditoria();
            $FormularioPersona.DeshabilitarCamposAuditoria();
            $cboTPersonaNJ.attr("disabled", false);
            //$cboTDocumento.show();
            $txtnuDocumento.show();
            $btnConsultaSusalud.show();
            $lblTDocumento.show();
            $lblnuDocumento.show();
            $tab_DatosGenerales.click();
            $tab_Documento.click();
            $cboTPersonaNJ.val(1);
            funcionesPersona.initTipoPersona($cboTPersonaNJ.val());
            $cnt_pNaturalAgregando.hide();
            configDTDocumento.reload();
            funcionesPersona.validarNuevoBotones();
            configUbigeos.ubigeoPersona.init();
            $cboNacionalidad.val('51').trigger("change");

            $cboPDistrito.attr("disabled", true);
            $cboPProvincia.attr("disabled", true);
        },
        obtenerPersona: function (id) {
            funcionesPersona.obtenerDatosPersona(id);
            $cboTPersonaNJ.attr("disabled", true);
            $tab_Direccion.removeClass("disabled");
            $tab_Telefono.removeClass("disabled");
            $tab_CuentaCorreo.removeClass("disabled");
            $tab_GradoMilitar.removeClass("disabled");
            $tab_Direccion.removeClass("disabled");
            $tab_Documento.removeClass("disabled");
            $tab_Dependientes.removeClass("disabled");
            $tab_CuentaBanco.removeClass("disabled");
            $TbListartab.click();

        },
        guardarPersona: function () {
            var documentoCorrecto
            if ($cboTPersonaNJ.val() == "1") {
                documentoCorrecto = true
            } else {
                documentoCorrecto = validarPJNDocumento($txtPJNDocumento.val())
            }

            if ($FormularioPersona.valid() && documentoCorrecto) {
                if (!$hfCodPersona.val() || $hfCodPersona.val() == 0) {
                    funcionesPersona.insertarPersona();
                    $tab_Direccion.removeClass("disabled");
                    $tab_Telefono.removeClass("disabled");
                    $tab_CuentaCorreo.removeClass("disabled");
                    $tab_GradoMilitar.removeClass("disabled");
                    $tab_Direccion.removeClass("disabled");
                    $tab_Documento.removeClass("disabled");
                    $tab_DatosGenerales.removeClass("disabled");
                    $tab_CuentaBanco.removeClass("disabled");
                    $TbListartab.click();
                    $tab_DatosGenerales.click();
                } else {
                    funcionesPersona.actualizarPersona();
                }
            }

        },
        insertarPersona: function () {//INSERTAR PERSONA
            if ($FormularioPersona.valid()) {
                $btnGrabarPersona.attr("disabled", true);
                EntidadPersona = new Object();
                EntidadPersona.gdtprsna = $cboTPersonaNJ.val();
                EntidadPersona.gdestdo = $FormularioPersona.find("[name='GDESTDO']").val();

                var fini = "", ffin = "";
                var valorBool = false, flag = false, valorBool2 = false;
                var factual = new Date();
                if ($cboTPersonaNJ.val() == "1") {
                    DatosPersona.DatosNatural();
                    fini = $FormularioPersona.find("[name='txtFNacimiento']").val().split("/");
                } else {
                    DatosPersona.DatosJuridica();
                    fini = $FormularioPersona.find("[name='txtPJFNacimiento']").val().split("/");
                }
                //FECHA INICIAL MAYOR O IGUAL A LA FECHA ACTUAL
                var fecinic = new Date(fini[2], fini[1] - 1, fini[0]);
                valorBool2 = funcionFechas2.validarFechaMayor(valorBool, fecinic, factual);
                if (valorBool2) {
                    $FormularioPersona.find(".msg0").text("La fecha seleccionada es mayor a la fecha actual");
                    if ($cboTPersonaNJ.val() == "1") {
                        $FormularioPersona.find("[name='txtFNacimiento']").addClass('error');
                    } else {
                        $FormularioPersona.find("[name='txtPJFNacimiento']").addClass('error');
                    }
                    flag = true;
                } else {
                    if (!$FormularioPersona.find("[name='txtFFallecimiento']").val()) {
                        valorBool2 = false;
                    } else {
                        ffin = $FormularioPersona.find("[name='txtFFallecimiento']").val().split("/");
                        var fechafin = new Date(ffin[2], ffin[1] - 1, ffin[0]);
                        // FECHA FALLECIMIENTO MAYOR O IGUAL A LA FECHA ACTUAL
                        valorBool2 = funcionFechas2.validarFechaMayor(valorBool, fechafin, factual)
                        if (valorBool2) {
                            $FormularioPersona.find(".msg").text("La fecha de fallecimiento es mayor a la fecha actual");
                            $FormularioPersona.find("[name='txtFFallecimiento']").addClass('error');
                            flag = true;
                        } else {
                            // FECHA FALLECIMIENTO MAYOR O IGUAL A LA FECHA DE NACIMIENT0
                            valorBool2 = funcionFechas2.validarFechaMayor(valorBool, fecinic, fechafin);
                            if (valorBool2) {
                                $FormularioPersona.find(".msg").text("La fecha es menor a la fecha de Nacimiento");
                                $FormularioPersona.find("[name='txtFFallecimiento']").addClass('error');
                                flag = true;
                            } else {
                                $FormularioPersona.find(".msg").text("");
                                $FormularioPersona.find("[name='txtFNacimiento']").removeClass('error');
                            }
                        }
                    }
                    $FormularioPersona.find(".msg0").text("");
                    $FormularioPersona.find("[name='txtFFallecimiento']").removeClass('error');
                }
                if (flag == false && valorBool2 == false) {
                    EntidadPersona.gddcmnto = $cboPJTDocumento.val();
                    EntidadPersona.ndcmnto = $txtPJNDocumento.val();
                    $.post("../Persona/insertarPersonas", EntidadPersona).done(function (idPersona) {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se registro satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            $hfCodPersona.val(idPersona)
                            //if ($cboTPersonaNJ.val() == "2") {
                            //funcionesPersona.insertarDniPersona(idPersona);
                            //}
                            $tab_Documento.removeClass("disabled");
                            $tab_Direccion.removeClass("disabled");
                            $tab_Telefono.removeClass("disabled");
                            $tab_CuentaCorreo.removeClass("disabled");
                            $tab_GradoMilitar.removeClass("disabled");
                            $tab_Dependientes.removeClass("disabled");
                            configDTPersona.reload();
                            configDTDireccion.reload();
                            configDTCorreo.reload();
                            configDTDocumento.reload();
                            configDTGrado.reload();
                            configDTTelefono.reload();
                            configDTCuentaBanco.reload();
                            funcionesPersona.obtenerPersona($hfCodPersona.val());
                        });
                        $FormularioPersona.find(".msg").text("");
                    }).fail(function (e) {
                        Swal.fire({
                            icon: "error",
                            title: "Error al insertar el registro.",
                            text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                            confirmButtonText: "Aceptar"
                        });
                    });
                }
                $btnGrabarPersona.attr("disabled", false);
            }
        },
        actualizarPersona: function () {
            if ($FormularioPersona.valid()) {
                $btnGrabarPersona.attr("disabled", true);
                EntidadPersona = new Object();
                EntidadPersona.id = $hfCodPersona.val();
                EntidadPersona.gdtprsna = $cboTPersonaNJ.val();
                EntidadPersona.gdestdo = $FormularioPersona.find("[name='GDESTDO']").val();
                var fini = "", ffin = "";
                var valorBool = false, flag = false, valorBool2 = false;
                var factual = new Date();

                if ($cboTPersonaNJ.val() == "1") {
                    DatosPersona.DatosNatural();
                    fini = $FormularioPersona.find("[name='txtFNacimiento']").val().split("/");
                } else {
                    DatosPersona.DatosJuridica();
                    fini = $FormularioPersona.find("[name='txtPJFNacimiento']").val().split("/");
                }

                var fecinic = new Date(fini[2], fini[1] - 1, fini[0]);
                //FECHA INICIAL MAYOR O IGUAL A LA FECHA ACTUAL
                valorBool2 = funcionFechas2.validarFechaMayor(valorBool, fecinic, factual);
                if (valorBool2) {
                    $FormularioPersona.find(".msg0").text("La fecha seleccionada es mayor a la fecha actual");
                    if ($cboTPersonaNJ.val() == "1") {
                        $FormularioPersona.find("[name='txtFNacimiento']").addClass('error');
                    } else {
                        $FormularioPersona.find("[name='txtPJFNacimiento']").addClass('error');
                    }
                    flag = true;
                } else {
                    if (!$FormularioPersona.find("[name='txtFFallecimiento']").val()) {
                        valorBool2 = false;
                    } else {
                        ffin = $FormularioPersona.find("[name='txtFFallecimiento']").val().split("/");
                        var fechafin = new Date(ffin[2], ffin[1] - 1, ffin[0]);
                        // FECHA FALLECIMIENTO MAYOR O IGUAL A LA FECHA ACTUAL
                        valorBool2 = funcionFechas2.validarFechaMayor(valorBool, fechafin, factual)
                        if (valorBool2) {
                            $FormularioPersona.find(".msg").text("La fecha de fallecimiento es mayor a la fecha actual");
                            $FormularioPersona.find("[name='txtFFallecimiento']").addClass('error');
                            flag = true;
                        } else {
                            // FECHA FALLECIMIENTO MAYOR O IGUAL A LA FECHA DE NACIMIENT0
                            valorBool2 = funcionFechas2.validarFechaMayor(valorBool, fecinic, fechafin);
                            if (valorBool2) {
                                $FormularioPersona.find(".msg").text("La fecha es menor a " + $FormularioPersona.find("[name='txtFNacimiento']").val());
                                $FormularioPersona.find("[name='txtFFallecimiento']").addClass('error');
                                flag = true;
                            } else {
                                $FormularioPersona.find(".msg").text("");
                                if ($cboTPersonaNJ.val() == "1") {
                                    $FormularioPersona.find("[name='txtFNacimiento']").removeClass('error');
                                } else {
                                    $FormularioPersona.find("[name='txtPJFNacimiento']").removeClass('error');
                                }
                            }
                        }
                    }
                    $FormularioPersona.find(".msg0").text("");
                    $FormularioPersona.find("[name='txtFNacimiento']").removeClass('error');
                }
                if (flag == 0 && valorBool2 == false) {
                    $.post("../Persona/actualizarPersona", EntidadPersona).done(function (msj) {
                        Swal.fire({
                            icon: msj ? "info" : "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: msj ? msj : "Se actualizo satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            configDTPersona.reload();
                            configDTDocumento.reload();
                            funcionesPersona.obtenerPersona($hfCodPersona.val());
                        });
                        $FormularioPersona.find(".msg").text("");
                    }).fail(function (e) {
                        Swal.fire({
                            icon: "error",
                            title: "Error al modificar el registro.",
                            text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                            confirmButtonText: "Aceptar"
                        });
                    });
                }
                $btnGrabarPersona.attr("disabled", false);
            }
        },
        eliminarPersona: function (codigo) {
            var parametro = { id: codigo };
            Swal.fire({
                title: "¿Quiere modificar el estado del registro?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                confirmButtonClass: "btn btn-danger",
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    $.post("../Persona/EliminarPersonas", parametro)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTPersona.reload();
                            });
                        })
                        .fail(function (e) {
                            Swal.fire({
                                icon: "error",
                                title: "Error al modificar el registro.",
                                text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                                confirmButtonText: "Aceptar"
                            });
                        })
                }
            });
        },
        validartipodoc: function () {
            if ($cboTDocumento.val() == 8) {
                $txtRSocial.attr("disabled", false);
                $txtAPaterno.attr("disabled", true);
                $txtAMaterno.attr("disabled", true);
                $txtACasada.attr("disabled", true);
                $txtPNombre.attr("disabled", true);
                $txtSNombre.attr("disabled", true);
            } else {
                $txtRSocial.attr("disabled", true);
                $txtAPaterno.attr("disabled", false);
                $txtAMaterno.attr("disabled", false);
                $txtACasada.attr("disabled", false);
                $txtPNombre.attr("disabled", false);
                $txtSNombre.attr("disabled", false);
            }

        },
        ConsultarSusalud: function () {
            configDTSusalud.reload();
        },
        obtenerPersonaSusalud: function (entidad) {
            $txtAPaterno.val(entidad.apPaterno);
            $txtAMaterno.val(entidad.apMaterno);
            $txtACasada.val(entidad.apCasada);
            $txtPNombre.val(entidad.noPersona.split(" ")[0]);
            $txtSNombre.val(entidad.noPersona.split(" ")[1]);
            $cboSexo.val(entidad.deSexo);
            $txtFNacimiento.val(entidad.feNacimiento);
            $mdlSusalud.modal('hide');
        },
        obtenerPersonaSunat: function (entidad) {
            $txtRSocial.val(entidad.nombre_razon_social);
            $mdlSunat.modal('hide');
        },
        validarNuevoBotones: function () {
            if ($hfCodPersona.val() == "") {
                $btnNuevoDocumento.addClass('d-none');
                $btnNuevoTelefono.addClass('d-none');
                $btnNuevoDireccion.addClass('d-none');
                $btnNuevoCorreo.addClass('d-none');
                $btnNuevoGrado.addClass('d-none');
            } else {
                if ($cboTPersonaNJ.val() == 2) {
                    $btnNuevoDocumento.addClass('d-none');
                } else {
                    $btnNuevoDocumento.removeClass('d-none');
                }
                $btnNuevoTelefono.removeClass('d-none');
                $btnNuevoDireccion.removeClass('d-none');
                $btnNuevoCorreo.removeClass('d-none');
                $btnNuevoGrado.removeClass('d-none');
            }
        },
        obtenerDatosPersona: function (codigo) {
            var vpersona = { id: codigo };
            $.get("../Persona/obtenerPersona", vpersona)
                .done(function (data) {
                    EntidadPersona = data;
                    //$hfCodPersona.val(EntidadPersona.id);
                    $cboTPersonaNJ.val(EntidadPersona.gdtprsna);
                    $txtRSocial.val(EntidadPersona.rscl);
                    $txtAPaterno.val(EntidadPersona.aptrno);
                    $txtAMaterno.val(EntidadPersona.amtrno);
                    $txtACasada.val(EntidadPersona.acsda);
                    $txtPNombre.val(EntidadPersona.pnmbre);
                    $txtSNombre.val(EntidadPersona.snmbre);
                    $cboNacionalidad.val(EntidadPersona.ncnldd);
                    $cboPaisNac.val(EntidadPersona.cpncmnto);
                    $cboECivil.val(EntidadPersona.gdecvl);
                    $cboSexo.val(EntidadPersona.gdsxo);
                    $txtFNacimiento.val(EntidadPersona.fncmnto);
                    $txtFFallecimiento.val(EntidadPersona.ffllcmnto);
                    $txtPJFNacimiento.val(EntidadPersona.fncmnto);
                    $cboPJTSociedad.val(EntidadPersona.gdtescdd);
                    $cboPJTEmpresa.val(EntidadPersona.gdtetmno);
                    $cboPDistrito.val(EntidadPersona.cubgeo).trigger("change");
                    $FormularioPersona.AgregarCamposAuditoria(EntidadPersona);
                    configUbigeos.ubigeoPersona.cargarUbigeosPersona(EntidadPersona);
                    configDTPersona.reload();
                    configDTDocumento.reload();
                    configDTCorreo.reload();
                    configDTDireccion.reload();
                    configDTTelefono.reload();
                    configDTGrado.reload();
                    configDtDependencia.reload();
                    configDTCuentaBanco.reload();
                    funcionesPersona.initTipoPersona($cboTPersonaNJ.val());
                    $btnConsultaSusalud.hide();
                    $tab_DatosGenerales.removeClass("disabled");
                    $tab_DatosGenerales.click();
                    $tab_Documento.click();
                    funcionesPersona.validarNuevoBotones();
                    var dataDocJuridica = sXMLToJson(EntidadPersona.mpepE04);
                    if (dataDocJuridica && dataDocJuridica.MPEPE04) {
                        if (EntidadPersona.gdtprsna == 2) {
                            $txtPJNDocumento.val(dataDocJuridica.MPEPE04.NDCMNTO + "");
                        } else {
                            $cboPNTDocumento.val(dataDocJuridica.MPEPE04.GDDCMNTO + "").trigger("change");
                            $txtPNDocumento.val(dataDocJuridica.MPEPE04.NDCMNTO + "");
                        }
                    }
                })
                .fail().always(function () {
                    //$FormularioPersona.find(":input").attr("disabled", false);
                    $FormularioPersona.DeshabilitarCamposAuditoria();
                });
        },
        insertarDniPersona: function (idpersona) {
            if ($FormularioPersona.valid()) {
                $btnGrabarPersona.attr("disabled", true);
                EntidadDocumento = new Object();
                EntidadDocumento.gddcmnto = $cboPJTDocumento.val();
                EntidadDocumento.ndcmnto = $txtPJNDocumento.val();
                EntidadDocumento.finscrpcn = "";
                EntidadDocumento.fvncmnto = "";
                EntidadDocumento.fprncpl = "1";
                EntidadDocumento.idprsna = idpersona;
                EntidadDocumento.gdestdo = $FormularioPersona.find("[name='GDESTDO']").val();
                if ((!mayorFechaActual(false, $("#txtFInscripcion").val(), $("#txtFVncmt").val()))
                    || (!mayorFechaActual(false, $("#txtFInscripcion").val()))
                    || (!mayorFechaActual(false, $("#txtFVncmt").val()))) {
                    $.post("../Documento/insertarDocumento", EntidadDocumento).done(function () {
                        configDTPersona.reload();
                        configDTDocumento.reload();
                    }).fail(function (e) {
                        Swal.fire({
                            icon: "error",
                            title: "Error al insertar el registro.",
                            text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                            confirmButtonText: "Aceptar"
                        });
                        configDTDocumento.reload();
                    });
                    $btnGrabarPersona.attr("disabled", false);
                }
            }
        },
        mostrarModalHomonimia: function (valorBool) {
            if (valorBool) {
                configDtHomonimos.reload()
            }
        }
    }

    //VALIDAR FECHAS MAYORES
    var funcionFechas2 = {
        validarFechaMayor: function (valorBool2, fecha1, fecha2) {
            fecha1.setHours(0, 0, 0, 0);
            fecha2.setHours(0, 0, 0, 0);
            if (fecha1.getTime() > fecha2.getTime() || fecha1 > fecha2) {
                valorBool2 = true;
            } else {
                valorBool2 = false;
            }
            return valorBool2;
        }
    }

    var funcionesDocumento = { //DOCUMENTOS
        insertarDocumento: function () {//INSERTAR
            if ($FormularioDocumento.valid()) {
                $btnGrabarDocumento.attr("disabled", true);
                EntidadDocumento.gddcmnto = $cboDocumento.val();
                EntidadDocumento.ndcmnto = $txtNDocumento.val();
                EntidadDocumento.finscrpcn = $txtFInscripcion.val();
                EntidadDocumento.fvncmnto = $txtFVncmt.val();
                EntidadDocumento.fprncpl = $cboPrincipalDocumento.val();
                EntidadDocumento.idprsna = $hfCodPersona.val();
                EntidadDocumento.gdestdo = $FormularioDocumento.find("[name='GDESTDO']").val();
                var band = false;
                var con1 = false;
                if ($txtFInscripcion.val()) {
                    if ($txtFVncmt.val()) {
                        con1 = mayorFechaActual(band, $("#txtFInscripcion").val(), $("#txtFVncmt").val());
                    } else {
                        con1 = mayorFechaActual(band, $("#txtFInscripcion").val());
                    }
                } else {
                    if ($txtFVncmt.val()) {
                        con1 = mayorFechaActual(band, $("#txtFVncmt").val());
                        if (!con1) {
                            con1 = true;
                        }
                    }
                }
                if (!con1) {
                    $.post("../Documento/insertarDocumento", EntidadDocumento).done(function () {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se registro satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            $mdlDocumento.modal("hide");
                            configDTDocumento.reload();
                        });
                        $FormularioDocumento.find(".msg").text("");
                    }).fail(function (e) {
                        Swal.fire({
                            icon: "error",
                            title: "Error al modificar el registro.",
                            text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                            confirmButtonText: "Aceptar"
                        });
                        configDTDocumento.reload();
                    });
                    $btnGrabarDocumento.attr("disabled", false);
                    $FormularioDocumento.find(".msg").text("");
                    $FormularioDocumento.find(".msg0").text("");
                }
            }
        },
        actualizarDocumento: function () {
            if ($FormularioDocumento.valid()) {
                $btnGrabarDocumento.attr("disabled", true);
                EntidadDocumento.gddcmnto = $cboDocumento.val();
                EntidadDocumento.ndcmnto = $txtNDocumento.val();
                EntidadDocumento.finscrpcn = $txtFInscripcion.val();
                EntidadDocumento.fvncmnto = $txtFVncmt.val();
                EntidadDocumento.fprncpl = $cboPrincipalDocumento.val();
                EntidadDocumento.idprsna = $hfCodPersona.val();
                EntidadDocumento.gdestdo = $FormularioDocumento.find("[name='GDESTDO']").val();
                var band = false;
                var con1 = false;
                if ($txtFInscripcion.val()) {
                    if ($txtFVncmt.val()) {
                        con1 = mayorFechaActual(band, $("#txtFInscripcion").val(), $("#txtFVncmt").val());
                    } else {
                        con1 = mayorFechaActual(band, $("#txtFInscripcion").val());
                    }
                } else {
                    if ($txtFVncmt.val()) {
                        con1 = mayorFechaActual(band, $("#txtFVncmt").val());
                        if (!con1) {
                            con1 = true;
                        }
                    }
                }
                if (!con1) {
                    $.post("../Documento/actualizarDocumento", EntidadDocumento).done(function () {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se registro satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            $mdlDocumento.modal("hide");
                            configDTDocumento.reload();
                        });
                        $FormularioDocumento.find(".msg").text("");
                    }).fail(function (e) {
                        Swal.fire({
                            icon: "error",
                            title: "Error al modificar el registro.",
                            text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                            confirmButtonText: "Aceptar"
                        });
                        configDTDocumento.reload();
                    });
                    $btnGrabarDocumento.attr("disabled", false);
                }
            }
        },
        obtenerDocumento: function (idDocumento) {
            var parametro = { id: idDocumento, idprsna: $hfCodPersona.val() };
            $.get("../Documento/obtenerDocumento", parametro)
                .done(function (data) {
                    EntidadDocumento = data;
                    $cboDocumento.val(EntidadDocumento.gddcmnto).trigger("change");
                    $txtNDocumento.val(EntidadDocumento.ndcmnto);
                    $txtFInscripcion.val(EntidadDocumento.finscrpcn);
                    $txtFVncmt.val(EntidadDocumento.fvncmnto);
                    $cboPrincipalDocumento.val(EntidadDocumento.fprncpl);
                    $hfCodDocumento.val(EntidadDocumento.id);
                    $FormularioDocumento.AgregarCamposAuditoria(EntidadDocumento);
                    if ($cboTPersonaNJ.val() == 2) {
                        $cboDocumento.prop('disabled', true);
                    } else {
                        $cboDocumento.prop('disabled', false);
                    }
                })
                .fail().always(function () {
                    $FormularioDocumento.DeshabilitarCamposAuditoria();
                    $cboDocumento.val(EntidadDocumento.gddcmnto).attr("disabled", true);
                });
        },
        eliminarDocumento: function (idDocumento) {
            var parametro = { id: idDocumento, idprsna: $hfCodPersona.val() };
            Swal.fire({
                title: "¿Quiere modificar el estado del registro?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                confirmButtonClass: "btn btn-danger",
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    $.post("../Documento/eliminarDocumento", parametro)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTDocumento.reload();
                            });
                        })
                        .fail(function (e) {
                            Swal.fire({
                                icon: "error",
                                title: "Error al modificar el registro.",
                                text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                                confirmButtonText: "Aceptar"
                            });
                            configDTDocumento.reload();
                        })
                }
            });
        },
        guardarDocumento: function () {
            if ($hfaction.val() == "N") {
                funcionesDocumento.insertarDocumento();
            }
            else {
                funcionesDocumento.actualizarDocumento();
            }
        },
    }

    var funcionesCorreo = {
        insertarCorreo: function () {
            if ($FormularioCorreo.valid()) {
                $btnGrabarCorreo.attr("disabled", true);
                EntidadCorreo.gdtcrreo = $cboTCorreo.val();
                EntidadCorreo.ccrreo = $txtCorreo.val();
                EntidadCorreo.fprncpl = $cboPrincipalCorreo.val();
                EntidadCorreo.gdestdo = $FormularioCorreo.find("[name='GDESTDO']").val();
                EntidadCorreo.idprsna = $hfCodPersona.val();
                $.post("../Correo/insertarCorreo", EntidadCorreo).done(function () {
                    Swal.fire({
                        icon: "success",
                        allowOutsideClick: false,
                        title: "Éxito",
                        text: "Se registro satisfactoriamente.",
                        confirmButtonText: "Aceptar"
                    }).then((result) => {
                        $mdlCorreo.modal("hide");
                        configDTCorreo.reload();
                    });
                }).fail(function (e) {
                    Swal.fire({
                        icon: "error",
                        title: "Error al insertar el registro.",
                        text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                        confirmButtonText: "Aceptar"
                    });
                    configDTCorreo.reload();
                });
                $btnGrabarCorreo.attr("disabled", false);
            }
        },
        actualizarCorreo: function () {
            if ($FormularioCorreo.valid()) {
                $btnGrabarCorreo.attr("disabled", true);
                EntidadCorreo.gdtcrreo = $cboTCorreo.val();
                EntidadCorreo.ccrreo = $txtCorreo.val();
                EntidadCorreo.fprncpl = $cboPrincipalCorreo.val();
                EntidadCorreo.gdestdo = $FormularioCorreo.find("[name='GDESTDO']").val();//$cboEstado.val();
                EntidadCorreo.idprsna = $hfCodPersona.val();
                $.post("../Correo/actualizarCorreo", EntidadCorreo)
                    .done(function () {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se actualizó satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            $mdlCorreo.modal("hide");
                            configDTCorreo.reload();
                        });
                    })
                    .fail(function (e) {
                        Swal.fire({
                            icon: "error",
                            title: "Error al modificar el registro.",
                            text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                            confirmButtonText: "Aceptar"
                        });
                        configDTCorreo.reload();
                    });
                $btnGrabarCorreo.attr("disabled", false);
            }
        },
        obtenerCorreo: function (idCorreo) {
            var parametro = { id: idCorreo, idprsna: $hfCodPersona.val() };
            $.get("../Correo/obtenerCorreo", parametro)
                .done(function (data) {
                    EntidadCorreo = data;
                    $cboTCorreo.val(EntidadCorreo.gdtcrreo);
                    $txtCorreo.val(EntidadCorreo.ccrreo);
                    $cboPrincipalCorreo.val(EntidadCorreo.fprncpl);
                    $hfCodCorreo.val(EntidadCorreo.id);
                    $FormularioCorreo.AgregarCamposAuditoria(EntidadCorreo);
                })
                .fail().always(function () {
                    $FormularioCorreo.find(":input").attr("disabled", false);
                    $FormularioCorreo.DeshabilitarCamposAuditoria();
                });
        },
        eliminarCorreo: function (idCorreo) {
            var parametro = { id: idCorreo, idprsna: $hfCodPersona.val() };
            Swal.fire({
                title: "¿Quiere modificar el estado del registro?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                confirmButtonClass: "btn btn-danger",
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    $.post("../Correo/eliminarCorreo", parametro)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTCorreo.reload();
                            });
                        })
                        .fail(function (e) {
                            Swal.fire({
                                icon: "error",
                                title: "Error al modificar el registro.",
                                text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                                confirmButtonText: "Aceptar"
                            });
                            configDTCorreo.reload();
                        })
                }
            });
        },
        guardarCorreo: function () {
            if ($hfactionCorreo.val() == "N") {
                funcionesCorreo.insertarCorreo();
            }
            else {
                funcionesCorreo.actualizarCorreo();
            }
            //$hfactionCorreo.val("");
        }
    }

    var funcionesDireccion = {
        insertarDireccion: function () {
            if ($FormularioDireccion.valid()) {
                $btnGrabarDireccion.attr("disabled", true);
                EntidadDireccion.gdtdrccn = $cboTDireccion.val();
                EntidadDireccion.gdtvia = $cboTVia.val();
                EntidadDireccion.via = $txtVia.val();
                EntidadDireccion.gdtdzna = $cboTipoZona.val();
                EntidadDireccion.nvia = $txtNroVia.val();
                EntidadDireccion.nintrr = $txtInterior.val();
                EntidadDireccion.zna = $txtNroZona.val();
                EntidadDireccion.rfrncia = $txtReferencia.val();
                EntidadDireccion.fprncpl = $cboPrincipalDireccion.val();
                EntidadDireccion.cubgeo = $cboDistritoDirec.val();
                EntidadDireccion.gdestdo = $FormularioDireccion.find("[name='GDESTDO']").val();
                EntidadDireccion.idprsna = $hfCodPersona.val();
                $.post("../Direccion/insertarDireccion", EntidadDireccion).done(function () {
                    Swal.fire({
                        icon: "success",
                        allowOutsideClick: false,
                        title: "Éxito",
                        text: "Se registro satisfactoriamente.",
                        confirmButtonText: "Aceptar"
                    }).then((result) => {
                        $mdlDireccion.modal("hide");
                        configDTDireccion.reload();
                    });
                }).fail(function (e) {
                    Swal.fire({
                        icon: "error",
                        title: "Error al insertar el registro.",
                        text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                        confirmButtonText: "Aceptar"
                    });
                    configDTDireccion.reload();
                });
                $btnGrabarDireccion.attr("disabled", false);
            }
        },
        actualizarDireccion: function () {
            if ($FormularioDireccion.valid()) {
                $btnGrabarDireccion.attr("disabled", true);
                EntidadDireccion.id = $hfCodDireccion.val();
                EntidadDireccion.gdtdrccn = $cboTDireccion.val();
                EntidadDireccion.gdtvia = $cboTVia.val();
                EntidadDireccion.via = $txtVia.val();
                EntidadDireccion.gdtdzna = $cboTipoZona.val();
                EntidadDireccion.nvia = $txtNroVia.val();
                EntidadDireccion.nintrr = $txtInterior.val();
                EntidadDireccion.zna = $txtNroZona.val();
                EntidadDireccion.rfrncia = $txtReferencia.val();
                EntidadDireccion.fprncpl = $cboPrincipalDireccion.val();
                EntidadDireccion.cubgeo = $cboDistritoDirec.val();
                EntidadDireccion.gdestdo = $FormularioDireccion.find("[name='GDESTDO']").val();
                EntidadDireccion.idprsna = $hfCodPersona.val();
                $.post("../Direccion/actualizarDireccion", EntidadDireccion)
                    .done(function () {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se actualizó satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            $mdlDireccion.modal("hide");
                            configDTDireccion.reload();

                        });
                    })
                    .fail(function (e) {
                        Swal.fire({
                            icon: "error",
                            title: "Error al modificar el registro.",
                            text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                            confirmButtonText: "Aceptar"
                        });
                        configDTDireccion.reload();
                    });
                $btnGrabarDireccion.attr("disabled", false);
            }
        },
        obtenerDireccion: function (idDireccion) {
            var parametro = { id: idDireccion, idprsna: $hfCodPersona.val() };
            $.get("/Direccion/obtenerDireccion", parametro)
                .done(function (data) {
                    EntidadDireccion = data;
                    $cboTDireccion.val(EntidadDireccion.gdtdrccn);
                    $cboTVia.val(EntidadDireccion.gdtvia);
                    $txtVia.val(EntidadDireccion.via);
                    $cboTipoZona.val(EntidadDireccion.gdtdzna);
                    $txtNroVia.val(EntidadDireccion.nvia);
                    $txtInterior.val(EntidadDireccion.nintrr);
                    $txtNroZona.val(EntidadDireccion.zna);
                    $txtReferencia.val(EntidadDireccion.rfrncia);
                    $cboPrincipalDireccion.val(EntidadDireccion.fprncpl);
                    configUbigeos.ubigeoDireccion.cargarUbigeo(EntidadDireccion);
                    $hfCodDireccion.val(EntidadDireccion.id);
                    $FormularioDireccion.AgregarCamposAuditoria(EntidadDireccion);

                })
                .fail().always(function () {
                    $FormularioDireccion.find(":input").attr("disabled", false);
                    $FormularioDireccion.DeshabilitarCamposAuditoria();
                    $cboTDireccion.attr("disabled", true);
                    if ($cboTipoZona.val() == "") {
                        $FormularioDireccion.find('.input-zona').attr('disabled', true);
                    }
                });
        },
        eliminarDireccion: function (idDireccion) {
            var parametro = { id: idDireccion, idprsna: $hfCodPersona.val() };
            Swal.fire({
                title: "¿Quiere modificar el estado del registro?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                confirmButtonClass: "btn btn-danger",
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    $.post("../Direccion/eliminarDireccion", parametro)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTDireccion.reload();
                            });
                        })
                        .fail(function (e) {
                            Swal.fire({
                                icon: "error",
                                title: "Error al modificar el registro.",
                                text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                                confirmButtonText: "Aceptar"
                            });
                            configDTDireccion.reload();
                        })
                }
            });
        },
        guardarDireccion: function () {
            if ($hfactionDireccion.val() == "N") {
                funcionesDireccion.insertarDireccion();
            }
            else {
                funcionesDireccion.actualizarDireccion();
            }

            //$hfactionDireccion.val("");
        },
        selectTipoZona: function () {
            if ($cboTipoZona.val() == 0) {
                $FormularioDireccion.find('.input-zona').attr('disabled', true);
                //$FormularioDireccion.find("[name='txtNroZona']").val("").attr('disabled', true);
                $txtNroZona.val("");

            } else {
                $FormularioDireccion.find('.input-zona').attr('disabled', false);
            }
        },
        inicioModal: function () {
            $cboTipoZona.attr('disabled', false);
            funcionesDireccion.selectTipoZona();
        }
    }

    var funcionesTelefono = {
        insertarTelefono: function () {
            if ($FormularioTelefono.valid()) {
                $btnGrabarTelefono.attr("disabled", true);
                EntidadTelefono.gdttlfno = $cboTTelefono.val();
                EntidadTelefono.cubgeo = $cboDepartamentoTlfno.val();
                EntidadTelefono.ntlfno = $txtTelefono.val();
                EntidadTelefono.obsrvcn = $txtObservacion.val();
                EntidadTelefono.fprncpl = $cboPrincipalTelefono.val();//$cboPrincipal.val(); 
                EntidadTelefono.gdestdo = $FormularioTelefono.find("[name='GDESTDO']").val();//$cboEstado.val();
                EntidadTelefono.idprsna = $hfCodPersona.val();
                $.post("../Telefono/insertarTelefono", EntidadTelefono)
                    .done(function () {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se registro satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            $mdltelefono.modal("hide");
                            configDTTelefono.reload();
                        });
                    }).fail(function (e) {
                        Swal.fire({
                            icon: "error",
                            title: "Error al insertar el registro.",
                            text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                            confirmButtonText: "Aceptar"
                        });
                        configDTTelefono.reload();
                    });
                $btnGrabarTelefono.attr("disabled", false);
            }
        },
        actualizarTelefono: function () {
            if ($FormularioTelefono.valid()) {
                $btnGrabarTelefono.attr("disabled", true);
                EntidadTelefono.gdttlfno = $cboTTelefono.val();
                EntidadTelefono.cubgeo = $cboDepartamentoTlfno.val();
                EntidadTelefono.ntlfno = $txtTelefono.val();
                EntidadTelefono.obsrvcn = $txtObservacion.val();
                EntidadTelefono.fprncpl = $cboPrincipalTelefono.val();//$cboPrincipal.val();
                EntidadTelefono.gdestdo = $FormularioTelefono.find("[name='GDESTDO']").val();//$cboEstado.val();
                EntidadTelefono.idprsna = $hfCodPersona.val();
                $.post("../Telefono/actualizarTelefono", EntidadTelefono)
                    .done(function () {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se actualizó satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            $mdltelefono.modal("hide");
                            configDTTelefono.reload();
                        });
                    })
                    .fail(function (e) {
                        Swal.fire({
                            icon: "error",
                            title: "Error al modificar el registro.",
                            text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                            confirmButtonText: "Aceptar"
                        });
                        configDTTelefono.reload();
                    });
                $btnGrabarTelefono.attr("disabled", false);
            }
        },
        obtenerTelefono: function (idTelefono) {
            var parametro = { id: idTelefono, idprsna: $hfCodPersona.val() };
            $.get("../Telefono/obtenerTelefono", parametro)
                .done(function (data) {
                    EntidadTelefono = data;
                    $cboTTelefono.val(EntidadTelefono.gdttlfno).trigger("change");
                    $cboDepartamentoTlfno.val(EntidadTelefono.cubgeo);
                    $txtTelefono.val(EntidadTelefono.ntlfno);
                    $txtObservacion.val(EntidadTelefono.obsrvcn);
                    $cboPrincipalTelefono.val(EntidadTelefono.fprncpl);
                    $hfCodTelefono.val(EntidadTelefono.id);
                    $FormularioTelefono.AgregarCamposAuditoria(EntidadTelefono);
                })
                .fail().always(function () {
                    $FormularioTelefono.DeshabilitarCamposAuditoria();
                });
        },
        eliminarTelefono: function (idTelefono) {
            var parametro = { id: idTelefono, idprsna: $hfCodPersona.val() };
            Swal.fire({
                title: "¿Quiere modificar el estado del registro?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                confirmButtonClass: "btn btn-danger",
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    $.post("../Telefono/eliminarTelefono", parametro)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTTelefono.reload();
                            });
                        })
                        .fail(function (e) {
                            Swal.fire({
                                icon: "error",
                                title: "Error al modificar el registro.",
                                text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                                confirmButtonText: "Aceptar"
                            });
                            configDTTelefono.reload();
                        })
                }
            });
        },
        guardarTelefono: function () {
            if ($hfactionTelefono.val() == "N") {
                funcionesTelefono.insertarTelefono();
            }
            else {
                funcionesTelefono.actualizarTelefono();
            }
            //$hfactionTelefono.val("");
        }
    }

    var funcionesGrado = {
        insertarGrado: function () {
            if (FechasCorrectas() && $FormularioGrado.valid()) {
                $btnGrabarGrado.attr("disabled", true);
                EntidadGrado.gdsmltr = $cboSMilitar.val();
                EntidadGrado.gdtgrdo = $cboGrado.val();
                EntidadGrado.gdtrlcn = $cboTRelaccion.val();
                EntidadGrado.fingreso = $txtFIngreso.val();
                EntidadGrado.fdispon = $txtFDisponibilidad.val();
                EntidadGrado.ftdispon = $txtFTermino.val();
                EntidadGrado.fbaja = $txtFBaja.val();
                EntidadGrado.gdcbja = $cboCBaja.val();
                EntidadGrado.gdespcldd = $cboEspecialidad.val();
                EntidadGrado.gdtafccn = $cboTAfeccion.val();
                EntidadGrado.gdtprsnl = $cboTPersonaGrado.val();
                EntidadGrado.fecrtfcdo = $txtFCertificado.val();
                EntidadGrado.ncrtfcdo = $txtNCertificado.val();
                EntidadGrado.gdtupgo = $cboUpago.val();
                EntidadGrado.gdintrdcto = $cboInterdicto.val();
                EntidadGrado.gdpncnble = $cboPensionable.val();
                EntidadGrado.idprsna = $hfCodPersona.val();
                EntidadGrado.gdestdo = $FormularioGrado.find("[name='GDESTDO']").val();
                $.post("../Grado/insertarGrado", EntidadGrado).done(function () {
                    Swal.fire({
                        icon: "success",
                        allowOutsideClick: false,
                        title: "Éxito",
                        text: "Se registro satisfactoriamente.",
                        confirmButtonText: "Aceptar"
                    }).then((result) => {
                        $mdlGrado.modal("hide");
                        configDTGrado.reload();
                    });
                }).fail(function (e) {
                    Swal.fire({
                        icon: "error",
                        title: "Error al insertar el registro.",
                        text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                        confirmButtonText: "Aceptar"
                    });
                });
            }
        },
        actualizarGrado: function () {
            if (FechasCorrectas() && $FormularioGrado.valid()) {
                $btnGrabarGrado.attr("disabled", true);
                EntidadGrado.gdtrlcn = $cboTRelaccion.val();
                EntidadGrado.gdsmltr = $cboSMilitar.val();
                EntidadGrado.gdtgrdo = $cboGrado.val();
                EntidadGrado.fingreso = $txtFIngreso.val();
                EntidadGrado.fdispon = $txtFDisponibilidad.val();
                EntidadGrado.ftdispon = $txtFTermino.val();
                EntidadGrado.fbaja = $txtFBaja.val();
                EntidadGrado.gdcbja = $cboCBaja.val();
                EntidadGrado.gdespcldd = $cboEspecialidad.val();
                EntidadGrado.gdtafccn = $cboTAfeccion.val();
                EntidadGrado.gdtprsnl = $cboTPersonaGrado.val();
                EntidadGrado.fecrtfcdo = $txtFCertificado.val();
                EntidadGrado.ncrtfcdo = $txtNCertificado.val();
                EntidadGrado.gdtupgo = $cboUpago.val();
                EntidadGrado.gdintrdcto = $cboInterdicto.val();
                EntidadGrado.gdpncnble = $cboPensionable.val();
                EntidadGrado.idprsna = $hfCodPersona.val();
                if (EntidadGrado.gdsmltr == 2 && $cboSMilitar.val() == 2) {
                    EntidadGrado.gdmtvdsp = $cboMDisponibilidad.val();
                } else {
                    EntidadGrado.gdmtvdsp == EntidadGrado.gdmtvdsp;
                };
                EntidadGrado.diagcie = $cboDiagnostico.val();
                EntidadGrado.aflble = $cboAfiliable.val() == 1;
                EntidadGrado.gdestdo = $FormularioGrado.find("[name='GDESTDO']").val();
                $.post("../Grado/actualizarGrado", EntidadGrado)
                    .done(function () {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se actualizó satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            configDTGrado.reload();
                            $mdlGrado.modal("hide");
                        });
                    }).fail(function (e) {
                        Swal.fire({
                            icon: "error",
                            title: "Error al modificar el registro.",
                            text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                            confirmButtonText: "Aceptar"
                        });
                        configDTGrado.reload();
                    });
                $btnGrabarGrado.attr("disabled", false);
            }
        },
        obtenerGrado: function (idGrado) {
            $FormularioGrado.find(":input").attr("disabled", true);
            var parametro = { id: idGrado, idprsna: $hfCodPersona.val() };
            $.get("../Grado/obtenerGrado", parametro)
                .done(function (data) {
                    EntidadGrado = data;
                    $cboTRelaccion.val(EntidadGrado.gdtrlcn).trigger("change");
                    $cboSMilitar.val(EntidadGrado.gdsmltr).trigger("change");
                    $txtFIngreso.val(EntidadGrado.fingreso).trigger("change");
                    $txtFDisponibilidad.val(EntidadGrado.fdispon).trigger("change");
                    $txtFTermino.val(EntidadGrado.ftdispon).trigger("change");
                    $txtFBaja.val(EntidadGrado.fbaja).trigger("change");
                    $cboCBaja.val(EntidadGrado.gdcbja).trigger("change");
                    $cboTAfeccion.val(EntidadGrado.gdtafccn).trigger("change");
                    $cboGrado.val(EntidadGrado.gdtgrdo).trigger("change");
                    $cboEspecialidad.val(EntidadGrado.gdespcldd).trigger("change");
                    $cboTPersonaGrado.val(EntidadGrado.gdtprsnl).trigger("change");
                    $cboUpago.val(EntidadGrado.gdtupgo).trigger("change");
                    $cboInterdicto.val(EntidadGrado.gdintrdcto).trigger("change");
                    $cboMDisponibilidad.val(EntidadGrado.gdmtvdsp).trigger("change");
                    var opcionNueva = {
                        id: EntidadGrado.iddiagcie || "",
                        text: EntidadGrado.diagcie
                    };
                    var newOption1 = new Option("Seleccione", null, false, false);
                    var newOption = new Option(opcionNueva.text, opcionNueva.id, true, true);
                    $cboDiagnostico.append(newOption1);
                    $cboDiagnostico.append(newOption).trigger('change');

                    $txtNCertificado.val(EntidadGrado.ncrtfcdo);
                    $txtFCertificado.val(EntidadGrado.fecrtfcdo);
                    $cboAfiliable.val(EntidadGrado.aflble ? 1 : 2).trigger("change");
                    $cboPensionable.val(EntidadGrado.gdpncnble).trigger("change");

                    $hfCodGrado.val(EntidadGrado.id);

                    $FormularioGrado.AgregarCamposAuditoria(EntidadGrado);

                    if (EntidadGrado.ftdispon || EntidadGrado.fbaja) {
                        $cboSMilitar.children('option[value|="2"]').attr("disabled", true);
                    }
                    if (EntidadGrado.fbaja) {
                        $cboSMilitar.children('option[value|="1"]').attr("disabled", true);
                    }

                })
                .fail().always(function () {
                    $FormularioGrado.find(":input").attr("disabled", false);
                    $txtTServicio.attr('disabled', true);
                    $FormularioGrado.DeshabilitarCamposAuditoria();
                });
        },
        eliminarGrado: function (idGrado) {
            var parametro = { id: idGrado, idprsna: $hfCodPersona.val() };
            Swal.fire({
                title: "¿Quiere modificar el estado del registro?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                confirmButtonClass: "btn btn-danger",
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    $.post("../Grado/eliminarGrado", parametro)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTGrado.reload();
                            });
                        })
                        .fail(function (e) {
                            Swal.fire({
                                icon: "error",
                                title: "Error al modificar el registro.",
                                text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                                confirmButtonText: "Aceptar"
                            });
                            configDTGrado.reload();
                        })
                }
            });
        },
        guardarGrado: function () {
            if ($hfactionGrado.val() == "N") {
                funcionesGrado.insertarGrado();
            }
            else {
                funcionesGrado.actualizarGrado();
            }
        },
        selectTipoRelacion: function () {
            $cboTRelaccion.children('option[value=""]').attr("disabled", true);
            //MMW
            /*$cboTRelaccion.children('option[value="1"]').attr("disabled", true);
            $cboTRelaccion.children('option[value="2"]').attr("disabled", true);*/
            if ($cboTRelaccion.val() == 1) {///SI ES DERECHO HABIENTE
                //SITUACION MILITAR
                $cboSMilitar.children('option[value=""]').attr("disabled", false).show();
                $cboSMilitar.children('option[value="0"]').attr("disabled", true).hide();
                $cboSMilitar.children('option[value="1"]').attr("disabled", true).hide();
                $cboSMilitar.children('option[value="2"]').attr("disabled", true).hide();
                $cboSMilitar.children('option[value="3"]').attr("disabled", true).hide();
                $cboSMilitar.children('option[value="4"]').attr("disabled", true).hide();
                $cboSMilitar.children('option[value="5"]').attr("disabled", false).show();
                $cboSMilitar.val('')
                    .trigger("change")
                    .attr("required", false);
                ///VINCULO PERSONA
                $cboTPersonaGrado.val('');

                //MMW Limpieza de data
                $cboSMilitar.val('').trigger("change");
                $txtTServicio.val('');
                $txtFIngreso.val('');
                $txtFDisponibilidad.val('');
                $txtFTermino.val('');
                $txtFBaja.val('');
                $cboCBaja.val('').trigger("change");
                $cboTAfeccion.val('').trigger("change");
                $cboMDisponibilidad.val('').trigger("change");
                $cboGrado.val('').trigger("change");
                $cboEspecialidad.val('').trigger("change");
                $cboInterdicto.val('').trigger("change");
                $cboDiagnostico.val('').trigger("change");
                $txtNCertificado.val('')
                $txtFCertificado.val('')
                $cboAfiliable.val('')
                $cboPensionable.val('')

            } else if ($cboTRelaccion.val() == 2) {//SI ES PERSONA NAVAL
                //SITUACION MILITAR
                $cboSMilitar.children('option[value=""]').attr("disabled", true).hide();
                $cboSMilitar.children('option[value="0"]').attr("disabled", false).show();
                $cboSMilitar.children('option[value="1"]').attr("disabled", false).show();
                $cboSMilitar.children('option[value="2"]').attr("disabled", false).show();
                $cboSMilitar.children('option[value="3"]').attr("disabled", false).show();
                $cboSMilitar.children('option[value="4"]').attr("disabled", false).show();
                $cboSMilitar.children('option[value="5"]').attr("disabled", true).hide();
                $cboSMilitar.val('1')
                    .trigger("change")
                    .attr("required", true);
                ///VINCULO PERSONA
                $cboTPersonaGrado.children('option[value="0"]').attr("disabled", false).show();
                $cboTPersonaGrado.children('option[value="1"]').attr("disabled", true).hide();
                $cboTPersonaGrado.children('option[value="2"]').attr("disabled", true).hide();
                $cboTPersonaGrado.children('option[value="3"]').attr("disabled", true).hide();
                $cboTPersonaGrado.children('option[value="4"]').attr("disabled", true).hide();
                $cboTPersonaGrado.children('option[value="5"]').attr("disabled", true).hide();
                $cboTPersonaGrado.val(0).trigger("change");

                //MMW Limpieza de data
                $txtFBaja.val('');
                $cboCBaja.val('').trigger("change");
                $cboTAfeccion.val('').trigger("change");
                $cboMDisponibilidad.val('').trigger("change");
                $cboInterdicto.val('').trigger("change");
                $cboDiagnostico.val('').trigger("change");
                $txtNCertificado.val('');
                $txtFCertificado.val('');
                $cboAfiliable.val('').trigger("change");
                $cboPensionable.val('').trigger("change");
            }
        },
        selectSituacionMilitar: function () {
            $inputIngresoSup.hide();
            $cboGrado.trigger("change");
            $cboEspecialidad.trigger("change");
            $cboUpago.attr("required", true);
            if ($cboSMilitar.val() == "") {//VACIO - NINGUNA - SELECCIONE
                //FECHAS Y TIEMPO DE SERVICIO
                $rowFechas.hide();
                $txtFIngreso.val("").attr("required", false);
                $txtFTermino.attr("required", false);
                $txtFDisponibilidad.val("").attr("required", false);
                $inputBaja.hide();
                $txtFBaja.val("").attr("required", false);
                $inputTiempoServicio.hide();
                $txtTServicio.attr("disabled", true);

                //ROW PERSONA NAVAL
                $rowPersonaNaval.hide();
                $cboCBaja.val("").attr("required", false);
                $cboMDisponibilidad.val("").attr("required", false);
                $cboTAfeccion.val("").attr("required", false);
                $cboGrado.val("").attr("required", false);
                $cboEspecialidad.val("").attr("required", false);

                //UNIDAD DE PAGO
                $cboUpago.children('option[value="0"]').attr("disabled", false).show();
                $cboUpago.children('option[value="1"]').attr("disabled", false).show();
                $cboUpago.children('option[value="2"]').attr("disabled", false).show();
                $cboUpago.children('option[value="4"]').attr("disabled", true).hide();
                $cboUpago.val('').trigger("change");

                //PENSIONABLE / AFILIABLE
                $inputAfiliable.hide();
                $inputPensionable.hide();
                $cboPensionable.val('').trigger("change");
                $cboPensionable.attr("required", false);
                $cboAfiliable.val('').trigger("change");
                $cboAfiliable.attr("required", false);

                //VINCULO
                $cboTPersonaGrado.children('option[value=""]').attr("disabled", false).show();
                $cboTPersonaGrado.children('option[value="0"]').attr("disabled", true).show();
                $cboTPersonaGrado.children('option[value="1"]').attr("disabled", false).show();
                $cboTPersonaGrado.children('option[value="2"]').attr("disabled", false).show();
                $cboTPersonaGrado.children('option[value="4"]').attr("disabled", false).show();
                $cboTPersonaGrado.children('option[value="5"]').attr("disabled", false).show();
                $cboTPersonaGrado.val("").trigger("change");

                //MMW Limpieza de data
                $txtTServicio.val('');
                $txtFIngreso.val('');
                $txtFDisponibilidad.val('');
                $txtFTermino.val('');
                $txtFBaja.val('');
                $cboCBaja.val('').trigger("change");
                $cboTAfeccion.val('').trigger("change");
                $cboMDisponibilidad.val('').trigger("change");
                $cboGrado.val('').trigger("change");
                $cboEspecialidad.val('').trigger("change");
                $cboInterdicto.val('').trigger("change");
                $cboDiagnostico.val('').trigger("change");
                $txtNCertificado.val('');
                $txtFCertificado.val('');
                $cboAfiliable.val('').trigger("change");
                $cboPensionable.val('').trigger("change");


            } else if ($cboSMilitar.val() == 1) {//CUANDO ES ACTIVIDAD
                //FECHAS Y TIEMPO DE SERVICIO
                $rowFechas.show();
                $txtFBaja.attr("required", false);
                $inputIngreso.show()
                    .removeClass("col-lg-3")
                    .addClass("col-lg-4");
                $txtFIngreso.attr("required", true);
                $inputFechaDisponibilidad.show()
                    .removeClass("col-lg-3")
                    .addClass("col-lg-4");
                $inputFechaTerminoDisponibilidad.show()
                    .removeClass("col-lg-3")
                    .addClass("col-lg-4");
                $inputBaja.hide();
                $inputTiempoServicio.show();

                //CAUSAL Y AFECCION
                $rowPersonaNaval.show();
                $inputCausal.hide();
                $inputAfeccion.hide();
                $inputDisponibilidad.hide();
                $inputGrado.removeClass("col-lg-3")
                    .removeClass("col-lg-4")
                    .addClass("col-lg-6")
                $inputEspecialidad.removeClass("col-lg-3")
                    .removeClass("col-lg-4")
                    .addClass("col-lg-6")
                $cboCBaja.val("").attr("required", false);
                $cboTAfeccion.val("").attr("required", false);
                $cboGrado.attr("required", true);
                $cboMDisponibilidad.val("").attr("required", false);
                $cboEspecialidad.attr("required", true);
                $cboUpago.children('option[value="0"]').attr("disabled", true).hide();
                $cboUpago.children('option[value="1"]').attr("disabled", true).hide();
                $cboUpago.children('option[value="2"]').attr("disabled", true).hide();
                $cboUpago.children('option[value="4"]').attr("disabled", false).show();
                $cboUpago.val('4').trigger("change");

                //PENSIONABLE / AFILIABLE
                $inputAfiliable.hide();
                $inputPensionable.hide();
                $cboPensionable.val('').trigger("change");
                $cboPensionable.attr("required", false);
                $cboAfiliable.val('').trigger("change");
                $cboAfiliable.attr("required", false);

                //MMW Limpieza de data
                $txtFBaja.val('');
                $cboCBaja.val('').trigger("change");
                $cboTAfeccion.val('').trigger("change");
                $cboMDisponibilidad.val('').trigger("change");
                $cboInterdicto.val('').trigger("change");
                $cboDiagnostico.val('').trigger("change");
                $txtNCertificado.val('');
                $txtFCertificado.val('');
                $cboAfiliable.val('').trigger("change");
                $cboPensionable.val('').trigger("change");

                //VINCULO
                $cboTPersonaGrado.children('option[value="5"]').attr("disabled", true).hide();
                $cboTPersonaGrado.trigger("change");
            } else if ($cboSMilitar.val() == 2) {//CUANDO ES DISPONIBILIDAD
                //FECHAS Y TIEMPO DE SERVICIO
                $rowFechas.show();
                $inputIngreso.show()
                    .removeClass("col-lg-3")
                    .addClass("col-lg-4");
                $txtFIngreso.attr("required", true);
                $inputFechaDisponibilidad.show()
                    .removeClass("col-lg-3")
                    .addClass("col-lg-4");
                $txtFDisponibilidad.attr("required", true);
                $txtFTermino.attr("required", false);
                $inputFechaTerminoDisponibilidad.hide();
                $inputBaja.hide();
                $txtFBaja.attr("required", false);
                $inputTiempoServicio.show();
                //CAUSAL Y AFECCION
                $rowPersonaNaval.show();
                $inputCausal.hide();
                $inputAfeccion.hide();
                $inputDisponibilidad.show();
                $inputGrado.removeClass("col-lg-6")
                    .removeClass("col-lg-3")
                    .addClass("col-lg-4")
                $inputEspecialidad.removeClass("col-lg-6")
                    .removeClass("col-lg-3")
                    .addClass("col-lg-4")
                $cboCBaja.val("").attr("required", false);
                $cboTAfeccion.val("").attr("required", false);
                $cboMDisponibilidad.val("").attr("required", true);
                $cboGrado.attr("required", true);
                $cboEspecialidad.attr("required", true);

                //UNIDAD DE PAGO
                $cboUpago.children('option[value="0"]').attr("disabled", false).show();
                $cboUpago.children('option[value="1"]').attr("disabled", false).show();
                $cboUpago.children('option[value="2"]').attr("disabled", false).show();
                $cboUpago.children('option[value="4"]').attr("disabled", true).hide();
                $cboUpago.val('').trigger("change");

                //PENSIONABLE / AFILIABLE
                $inputAfiliable.hide();
                $inputPensionable.show();
                $cboPensionable.val('').trigger("change");
                $cboPensionable.attr("required", true);
                $cboAfiliable.val('').trigger("change");
                $cboAfiliable.attr("required", false);

                //MMW Limpieza de data
                $txtFTermino.val('');
                $txtFBaja.val('');
                $cboCBaja.val('').trigger("change");
                $cboTAfeccion.val('').trigger("change");
                $cboInterdicto.val('').trigger("change");
                $cboDiagnostico.val('').trigger("change");
                $txtNCertificado.val('');
                $txtFCertificado.val('');
                $cboAfiliable.val('').trigger("change");

                //VINCULO
                $cboTPersonaGrado.children('option[value="5"]').attr("disabled", true).hide();
                $cboTPersonaGrado.trigger("change");
            } else if ($cboSMilitar.val() == 3) {//CUANDO ES RETIRO
                //FECHAS Y TIEMPO DE SERVICIO
                $rowFechas.show();
                $inputIngreso.show()
                    .removeClass("col-lg-4")
                    .addClass("col-lg-3");
                $txtFIngreso.attr("required", true);

                $inputFechaDisponibilidad.show()
                    .removeClass("col-lg-4")
                    .addClass("col-lg-3");
                $inputFechaTerminoDisponibilidad.show()
                    .removeClass("col-lg-4")
                    .addClass("col-lg-3");
                $inputBaja.show();
                $txtFBaja.attr("required", true);
                $inputTiempoServicio.show();

                //CAUSAL Y AFECCION
                $rowPersonaNaval.show();
                $inputCausal.show();
                $inputAfeccion.show();
                $inputDisponibilidad.hide();
                $inputGrado.removeClass("col-lg-4")
                    .removeClass("col-lg-6")
                    .addClass("col-lg-3")
                $inputEspecialidad.removeClass("col-lg-4")
                    .removeClass("col-lg-6")
                    .addClass("col-lg-3")
                $cboCBaja.val("").attr("required", true);
                $cboTAfeccion.val("").attr("required", true);
                $cboMDisponibilidad.val("").attr("required", false);
                $cboGrado.attr("required", true);
                $cboEspecialidad.attr("required", true);

                //UNIDAD DE PAGO
                $cboUpago.children('option[value="0"]').attr("disabled", false).show();
                $cboUpago.children('option[value="1"]').attr("disabled", false).show();
                $cboUpago.children('option[value="2"]').attr("disabled", false).show();
                $cboUpago.children('option[value="4"]').attr("disabled", true).hide();
                $cboUpago.val('').trigger("change");

                //PENSIONABLE / AFILIABLE
                $inputAfiliable.hide();
                $inputPensionable.show();
                $cboPensionable.attr("required", true);
                //$cboPensionable.val('1').trigger("change");
                $cboAfiliable.val('').trigger("change");
                $cboAfiliable.attr("required", false);

                //MMW Limpieza de data
                $cboMDisponibilidad.val('').trigger("change");
                $cboAfiliable.val('').trigger("change");

                //VINCULO
                $cboTPersonaGrado.children('option[value="5"]').attr("disabled", true).hide();
                $cboTPersonaGrado.trigger("change");
            } else if ($cboSMilitar.val() == 5) {//CUANDO ES MONTEPIO
                //FECHAS Y TIEMPO DE SERVICIO
                $rowFechas.hide();
                $txtFIngreso.val("").attr("required", false);
                $txtFDisponibilidad.val("").attr("required", false);
                $txtFTermino.val("").attr("required", false);
                $txtFBaja.val("");
                $txtFBaja.attr("required", false);
                $inputDisponibilidad.hide();
                $inputTiempoServicio.hide();
                $txtTServicio.attr("disabled", true);

                //ROW PERSONA NAVAL
                $rowPersonaNaval.hide();
                $cboCBaja.val("").attr("required", false);
                $cboMDisponibilidad.val("").attr("required", false);
                $cboTAfeccion.val("").attr("required", false);
                $cboGrado.val("").attr("required", false);
                $cboEspecialidad.val("").attr("required", false);

                //UNIDAD DE PAGO
                $cboUpago.children('option[value="0"]').attr("disabled", false).show();
                $cboUpago.children('option[value="1"]').attr("disabled", false).show();
                $cboUpago.children('option[value="2"]').attr("disabled", false).show();
                $cboUpago.children('option[value="4"]').attr("disabled", true).hide();
                $cboUpago.val('').trigger("change");

                //PENSIONABLE / AFILIABLE
                $inputAfiliable.hide();
                $inputPensionable.hide();
                $cboPensionable.val('').trigger("change");
                $cboPensionable.attr("required", false);
                $cboAfiliable.val('').trigger("change");
                $cboAfiliable.attr("required", false);

                //MMW Limpieza de data
                //$cboTRelaccion 
                //$cboSMilitar.val('').trigger("change");
                $txtTServicio.val('');
                $txtFIngreso.val('');
                $txtFDisponibilidad.val('');
                $txtFTermino.val('');
                $txtFBaja.val('');
                $cboCBaja.val('').trigger("change");
                $cboTAfeccion.val('').trigger("change");
                $cboMDisponibilidad.val('').trigger("change");
                $cboGrado.val('').trigger("change");
                $cboEspecialidad.val('').trigger("change");
                //$cboTPersonaGrado
                //$cboUpago
                $cboInterdicto.val('').trigger("change");
                $cboDiagnostico.val('').trigger("change");
                $txtNCertificado.val('');
                $txtFCertificado.val('');
                $cboAfiliable.val('');
                $cboPensionable.val('');

                //VINCULO
                $cboTPersonaGrado.val('1').trigger("change");
                $cboTPersonaGrado.children('option[value=""]').attr("disabled", true).show();
                $cboTPersonaGrado.children('option[value="0"]').attr("disabled", true).show();
                $cboTPersonaGrado.children('option[value="1"]').attr("disabled", false).show();
                $cboTPersonaGrado.children('option[value="2"]').attr("disabled", true).show();
                $cboTPersonaGrado.children('option[value="4"]').attr("disabled", true).show();
                $cboTPersonaGrado.children('option[value="5"]').attr("disabled", true).show();

            }
        },
        selectTipoVinculo: function () {
            $inputAfiliable.hide();
            $cboAfiliable.val('').trigger("change");
            $cboInterdicto.val('').trigger("change");
            $cboAfiliable.attr("required", false);
            if ($cboTPersonaGrado.val() == "") {
                $cboUpago.val('').trigger("change");
                $cboInterdicto.val('').trigger("change");
                $cboDiagnostico.val('').trigger("change");
                $txtNCertificado.val('').trigger("change");
                $txtFCertificado.val('').trigger("change");
                $cboAfiliable.val('').trigger("change");

            } else if ($cboTPersonaGrado.val() == 0 && $cboSMilitar.val() == 3) {//TITULAR Y RETIRADO
                $cboAfiliable.val('').trigger("change");
                $inputDiscapacidad.show();

            } else if ($cboTPersonaGrado.val() == 1) {//CONYUGE
                $cboAfiliable.val('').trigger("change");
                $inputDiscapacidad.show();
            } else if ($cboTPersonaGrado.val() == 2) {//HIJO
                $inputDiscapacidad.show();
                $inputAfiliable.show();
                $cboAfiliable.val('').trigger("change");
                $cboAfiliable.attr("required", true);
            } else if ($cboTPersonaGrado.val() == 4) {//PADRE
                $cboInterdicto.val('').trigger("change");
                $cboDiagnostico.val('').trigger("change");
                $txtNCertificado.val('').trigger("change");
                $txtFCertificado.val('').trigger("change");
                $cboAfiliable.val('').trigger("change");
                $inputDiscapacidad.hide();
            } else if ($cboTPersonaGrado.val() == 5) {//SUEGRO
                $cboInterdicto.val('').trigger("change");
                $cboDiagnostico.val('').trigger("change");
                $txtNCertificado.val('').trigger("change");
                $txtFCertificado.val('').trigger("change");
                $cboAfiliable.val('').trigger("change");
                $inputDiscapacidad.hide();
            } else {//PADRE
                $cboInterdicto.val('').trigger("change");
                $cboDiagnostico.val('').trigger("change");
                $txtNCertificado.val('').trigger("change");
                $txtFCertificado.val('').trigger("change");
                $cboAfiliable.val('').trigger("change");
                $inputDiscapacidad.hide();
            }
        },
        selectUnidadPago: function () {
            if ($cboSMilitar.val() == 5 && $cboUpago.val() != "") {//SI ES MONTEPIO
                $inputPensionable.show();
                $cboPensionable.val('1').trigger("change");
                $cboPensionable.attr("required", false);
            }
        },
        selectCausalBaja: function () {
            $cboCBaja.attr("title", $cboCBaja.find("option:selected").text());
        },
        selectDiagnostico: function () {
            $cboDiagnostico.attr("title", $cboDiagnostico.find("option:selected").text());
        },
        selectInterdicto: function () {
            $cboInterdicto.children('option[value=""]').text("NINGUNA");
        },
        inputTiemposServicios: function () {
            //MMW
            $cboPensionable.children('option[value|=""]').attr("disabled", true);
            if ($cboSMilitar.val() == 2) {//DISPONIBILIDAD /
                if ($txtFDisponibilidad.val()) {//FECHA DISPONIBILIDAD
                    var $valServ = calcTimeServ($txtFIngreso.val(), $txtFDisponibilidad.val());
                    var $aserv = $valServ[2];
                    var $mserv = $valServ[1];
                    var aniosPensionables;
                    if ($cboSexo.val() == 1) {
                        aniosPensionables = parseInt(aniosPensionablesHombres);
                    } else {
                        aniosPensionables = parseInt(aniosPensionablesMujeres);
                    }
                    var aniosPensionablesPar = parseInt(aniosPensionables);
                    var mesesPensionablesPar = (aniosPensionables - aniosPensionablesPar) * 12;
                    if ($aserv >= aniosPensionablesPar && $mserv >= mesesPensionablesPar) {
                        $cboPensionable.val('1').trigger("change");
                        $cboPensionable.children('option[value|="1"]').attr("disabled", false);
                        $cboPensionable.children('option[value|="2"]').attr("disabled", true);
                        $cboUpago.val('1').trigger("change");
                    } else {
                        $cboPensionable.val('2').trigger("change");
                        $cboPensionable.children('option[value|="2"]').attr("disabled", false);
                        $cboPensionable.children('option[value|="1"]').attr("disabled", true);
                        $cboUpago.val('0').trigger("change");
                    }

                }
            } else if ($cboSMilitar.val() == 3) {//RETIRO
                if ($txtFBaja.val() || ($txtFTermino.val() && $txtFBaja.val())) {

                    var $valServ = calcTimeServ($txtFIngreso.val(), $txtFDisponibilidad.val(), $txtFTermino.val(), $txtFBaja.val());
                    var $aserv = $valServ[2];
                    var $mserv = $valServ[1];
                    var aniosPensionables;
                    if ($cboSexo.val() == 1) {
                        aniosPensionables = parseInt(aniosPensionablesHombres);
                    } else {
                        aniosPensionables = parseInt(aniosPensionablesMujeres);
                    }
                    var aniosPensionablesPar = parseInt(aniosPensionables);
                    var mesesPensionablesPar = (aniosPensionables - aniosPensionablesPar) * 12;
                    if ($aserv >= aniosPensionablesPar && $mserv >= mesesPensionablesPar) {
                        $cboPensionable.val('1').trigger("change");
                        $cboPensionable.children('option[value|="1"]').attr("disabled", false);
                        $cboPensionable.children('option[value|="2"]').attr("disabled", true);
                        $cboUpago.val('1').trigger("change");
                    } else {
                        $cboPensionable.val('2').trigger("change");
                        $cboPensionable.children('option[value|="2"]').attr("disabled", false);
                        $cboPensionable.children('option[value|="1"]').attr("disabled", true);
                        $cboUpago.val('0').trigger("change");
                    }

                }
            }
            if ($cboTPersonaGrado.val() == 2) {//hijo
                var $valServ = calcTimeServ($txtFNacimiento.val());
                $aserv = $valServ[2];
                var minRangoAfiliable = rangoAfiliable.vlR1;
                var maxRangoAfiliable = rangoAfiliable.vlR2;
                if ($aserv >= minRangoAfiliable || $aserv <= maxRangoAfiliable) {
                    $cboAfiliable.val('1').change();
                } else {
                    $cboAfiliable.val('2').change();
                }
            }
        },
        inicioModal: function () {
            $cboTRelaccion.attr('disabled', false);
            funcionesGrado.selectTipoRelacion();
            funcionesGrado.selectSituacionMilitar();
            funcionesGrado.selectTipoVinculo();
            funcionesGrado.selectUnidadPago();
            funcionesGrado.selectInterdicto();
            funcionesGrado.inputTiemposServicios();


            //EDAD PARA SER PERSONA NAVAL
            var calcAge = calcTimeServ(EntidadPersona.fncmnto);
            var edad = calcAge[2];
            if (edad < aniosPerNav) {
                $cboTRelaccion.children('option[value="2"]').attr("disabled", true);
                $cboTRelaccion.val("1").trigger("change");
                $cboSMilitar.val("1").trigger("change");
            } else {
                $cboTRelaccion.children('option[value="2"]').attr("disabled", false);
                $cboTRelaccion.val("2").trigger("change");
                $cboSMilitar.val("1").trigger("change");
            }
        }
    }

    var funcionesDependiente = {
        insertar: function () {
            $btnGuardarDependencia.attr("disabled", true);
            EntidadDependiente = new Object();
            EntidadDependiente.idpj = $hfCodPersona.val();
            EntidadDependiente.idpn = $txtIDPersonaDep.val();
            EntidadDependiente.gdestdo = $frmDependencia.find("[name='GDESTDO']").val();
            $.post("../Dependencias/insertar", EntidadDependiente)
                .done(function () {
                    Swal.fire({
                        icon: "success",
                        allowOutsideClick: false,
                        title: "Éxito",
                        text: "Se registro satisfactoriamente.",
                        confirmButtonText: "Aceptar"
                    }).then((result) => {
                        $mdlDependencia.modal("hide");
                        configDtDependencia.reload();
                    });
                }).fail(function (e) {
                    Swal.fire({
                        icon: "error",
                        title: "Error al modificar el registro.",
                        text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                        confirmButtonText: "Aceptar"
                    });
                    configDtDependencia.reload();
                });
            $btnGuardarDependencia.attr("disabled", false);
        },
        actualizar: function () {
            $btnGuardarDependencia.attr("disabled", true);
            EntidadDependiente = new Object();
            EntidadDependiente.id = $frmDependencia.find("[name='ID']").val();
            EntidadDependiente.idpj = $hfCodPersona.val();
            EntidadDependiente.idpn = $txtIDPersonaDep.val();
            EntidadDependiente.gdestdo = $frmDependencia.find("[name='GDESTDO']").val();
            $.post("../Dependencias/actualizar", EntidadDependiente)
                .done(function () {
                    Swal.fire({
                        icon: "success",
                        allowOutsideClick: false,
                        title: "Éxito",
                        text: "Se registro satisfactoriamente.",
                        confirmButtonText: "Aceptar"
                    }).then((result) => {
                        $mdlDependencia.modal("hide");
                        configDtDependencia.reload();
                    });
                }).fail(function (e) {
                    Swal.fire({
                        icon: "error",
                        title: "Error al modificar el registro.",
                        text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                        confirmButtonText: "Aceptar"
                    });
                    configDtDependencia.reload();
                });
            $btnGuardarDependencia.attr("disabled", false);
        },
        eliminar: function (id) {
            var parametro = { id: id };
            Swal.fire({
                title: "¿Quiere modificar el estado del registro?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                confirmButtonClass: "btn btn-danger",
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    $.post("../Dependencias/eliminar", parametro)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDtDependencia.reload();
                            });
                        })
                        .fail(function (e) {
                            Swal.fire({
                                icon: "error",
                                title: "Error al modificar el registro.",
                                text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                                confirmButtonText: "Aceptar"
                            });
                            configDtDependencia.reload();
                        })
                }
            });
        },
        obtener: function (id, obj) {
            var parametro = { id: id };
            $.get("../Dependencias/obtener", parametro)
                .done(function (data) {
                    EntidadDependiente = data;
                    $txtIDPersonaDep.val(EntidadDependiente.idpn);
                    configCboListPersonas.selected(obj);
                    $frmDependencia.AgregarCamposAuditoria(EntidadDependiente);
                })
                .fail().always(function () {
                    $frmDependencia.find(":input").attr("disabled", false);
                    $frmDependencia.DeshabilitarCamposAuditoria();
                });
        },
        guardar: function () {
            if ($hfaction.val() == "N") {
                funcionesDependiente.insertar();
            }
            else {
                funcionesDependiente.actualizar();
            }
        }
    }

    var funcionesCuentaBanco = {
        insertarCuentaBanco: function () {
            if ($FormularioCuentaBanco.valid()) {
                $FormularioCuentaBanco.find("[type='button']").attr("disabled", true);
                EntidadCuentaBando.gdbnco = $cboBanco.val();
                EntidadCuentaBando.gdtcnta = $cboTipoCuenta.val();
                EntidadCuentaBando.ncnta = $txtNroCuenta.val();
                EntidadCuentaBando.ncci = $txtNroCci.val();
                EntidadCuentaBando.ttlr = $txtTitularCuenta.val();
                EntidadCuentaBando.gddcmnto = $cboTipoDocumentocb.val();
                EntidadCuentaBando.ndcmnto = $txtNroDocumento.val();
                EntidadCuentaBando.gdestdo = $FormularioCuentaBanco.find("[name='GDESTDO']").val();
                EntidadCuentaBando.idprsna = $hfCodPersona.val();
                $.post("../CuentaBanco/insertarCuentaBanco", EntidadCuentaBando).done(function () {
                    Swal.fire({
                        icon: "success",
                        allowOutsideClick: false,
                        title: "Éxito",
                        text: "Se registro satisfactoriamente.",
                        confirmButtonText: "Aceptar"
                    }).then((result) => {
                        $mdlCorreo.modal("hide");
                        configDTCuentaBanco.reload();
                        $TbListartab.click();
                        $TbAgregartab.addClass("disabled");
                    });
                }).fail(function (e) {
                    Swal.fire({
                        icon: "error",
                        title: "Error al insertar el registro.",
                        text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                        confirmButtonText: "Aceptar"
                    });
                });
                $FormularioCuentaBanco.find("[type='button']").attr("disabled", false);
            }
            $hfCodCuentaBanco.val("");
        },
        actualizarCuentaBanco: function () {
            if ($FormularioCuentaBanco.valid()) {
                $FormularioCuentaBanco.find("[type='button']").attr("disabled", true);
                EntidadCuentaBando.gdbnco = $cboBanco.val();
                EntidadCuentaBando.gdtcnta = $cboTipoCuenta.val();
                EntidadCuentaBando.ncnta = $txtNroCuenta.val();
                EntidadCuentaBando.ncci = $txtNroCci.val();
                EntidadCuentaBando.ttlr = $txtTitularCuenta.val();
                EntidadCuentaBando.gddcmnto = $cboTipoDocumentocb.val();
                EntidadCuentaBando.ndcmnto = $txtNroDocumento.val();
                EntidadCuentaBando.gdestdo = $FormularioCuentaBanco.find("[name='GDESTDO']").val();
                EntidadCuentaBando.idprsna = $hfCodPersona.val();
                $.post("../CuentaBanco/actualizarCuentaBanco", EntidadCuentaBando)
                    .done(function () {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se actualizó satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            //$mdlCorreo.modal("hide");
                            configDTCuentaBanco.reload();
                            $TbListartab.click();
                            $TbAgregartab.addClass("disabled");

                        });
                    })
                    .fail(function (e) {
                        Swal.fire({
                            icon: "error",
                            title: "Error al modificar el registro.",
                            text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                            confirmButtonText: "Aceptar"
                        });
                    });
                $FormularioCuentaBanco.find("[type='button']").attr("disabled", false);

            }
        },
        obtenerCuentaBanco: function (idCbanco) {
            var parametro = { id: idCbanco, idprsna: $hfCodPersona.val() };
            $.get("../CuentaBanco/obtenerCuentaBanco", parametro)
                .done(function (data) {
                    EntidadCuentaBando = data;
                    $cboBanco.val(EntidadCuentaBando.gdbnco);
                    $cboTipoCuenta.val(EntidadCuentaBando.gdtcnta);
                    $txtNroCuenta.val(EntidadCuentaBando.ncnta);
                    $txtNroCci.val(EntidadCuentaBando.ncci);
                    $txtTitularCuenta.val(EntidadCuentaBando.ttlr);
                    $cboTipoDocumentocb.val(EntidadCuentaBando.gddcmnto);
                    $txtNroDocumento.val(EntidadCuentaBando.ndcmnto);
                    $FormularioCuentaBanco.AgregarCamposAuditoria(EntidadCuentaBando);
                })
                .fail().always(function () {
                    $FormularioCuentaBanco.find(":input").attr("disabled", false);
                    $FormularioCuentaBanco.DeshabilitarCamposAuditoria();
                });
        },
        eliminarCuentaBanco: function (idCbanco) {
            var parametro = { id: idCbanco, idprsna: $hfCodPersona.val() };
            Swal.fire({
                title: "¿Quiere modificar el estado del registro?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                confirmButtonClass: "btn btn-danger",
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    $.post("../CuentaBanco/eliminarCuentaBanco", parametro)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTCuentaBanco.reload();
                            });
                        })
                        .fail(function (e) {
                            Swal.fire({
                                icon: "error",
                                title: "Error al modificar el registro.",
                                text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                                confirmButtonText: "Aceptar"
                            });
                        })
                }
            });
        },
        guardarCuentaBanco: function () {
            if ($hfCodCuentaBanco.val() == "N") {
                funcionesCuentaBanco.insertarCuentaBanco();
            }
            else {
                funcionesCuentaBanco.actualizarCuentaBanco();
            }
        },
        nuevaCuentabanco: function () {
            $hfCodCuentaBanco.val("N");
            $TbAgregartab.removeClass("disabled");
            $TbAgregartab.click();
            $FormularioCuentaBanco.AgregarCamposDefectoAuditoria();
            $FormularioCuentaBanco.DeshabilitarCamposAuditoria();
            configFormCuentaBanco.eventos.reset();
            //$cboTipoDocumentocb.maxlengthDocumento(configCboTipoDocumentos.optDocumentoCuentaBanco);
        }
    }

    var eventosIncrustadosPersona = {
        botonNuevoPersona: function () {
            $btnNuevoPersona.on("click", function () {
                funcionesPersona.NuevoPersona();
            });
        },
        botonBuscar: function () {
            $btnBuscarPersona.on("click", function () {
                configDTPersona.reload();
            })
        },
        botonGrabarPersona: function () {
            $btnGrabarPersona.on("click", function () {
                $(this).attr("disabled", true);
                funcionesPersona.guardarPersona();
                $(this).attr("disabled", false);
            })

        },
        CambioDoc: function () {
            $cboTDocumento.on('change', function () {
                //funcionesPersona.validartipodoc()
            });
        },
        botonConsultarSUSALUD: function () {
            $btnConsultaSusalud.on("click", function () {
                $cboSSLDTDocumento.val('');
                $txtSSLDNDocumento.val('');
                funcionesPersona.ConsultarSusalud();
            });
            $btnBuscarSUSALUD.on("click", function () {
                funcionesPersona.ConsultarSusalud();
            });
        },
        botonesConsultaSunat: function () {
            $btnConsultaSunat.on("click", function () {
                $cboTDocumentoSUNAT.val('8');
                $cboTDocumentoSUNAT.prop('disabled', true);
                $txtNDocumentoSUNAT.val('');
                configDTSunat.reload();
            });
            $btnBuscarSunat.on("click", function () {
                configDTSunat.reload();
            });
        },
        tap_listaPersona: function () {
            $tab_Lista.on("click", function () {
                $tab_Direccion.addClass("disabled");
                $tab_Telefono.addClass("disabled");
                $tab_CuentaCorreo.addClass("disabled");
                $tab_GradoMilitar.addClass("disabled");
                $tab_Direccion.addClass("disabled");
                $tab_Documento.addClass("disabled");
                $tab_DatosGenerales.addClass("disabled");
                $tab_Lista.removeClass("disabled");
                $hfCodPersona.val("");
                configDTDocumento.tiposDocumentos = [];
                configDTDireccion.tipoDirecciones = [];
                configDTCorreo.tienePrincipal = false;
                configDTDireccion.tienePrincipal = false;
                configDTTelefono.tienePrincipal = false;
            });

        },
        cboTipoPersona: function () {
            $cboTPersonaNJ.change(function () {
                funcionesPersona.initTipoPersona(this.value);
            });
        },
        Homonimia: function (options) {

            const defecto = {
                class: 'input-vacio',
                elemcontent: 'document',
            };
            var config = $.extend(defecto, options);

            //var elemClass = clase || "validar-vacios";
            var Elements = $(config.elemcontent).find('.' + config.class); // this.find('.' + elemClass);
            var ElemLength = $(config.elemcontent).find('.' + config.class).length;//this.find('.' + elemClass).length;
            $('.' + config.class).on("blur", function () {
                var boolVacio = false;
                for (var i = 0; i < ElemLength; i++) {
                    if (Elements[i].value) {
                        boolVacio = true;
                    } else { boolVacio = false; }
                }
                if (boolVacio) {
                    funcionesPersona.mostrarModalHomonimia(boolVacio);
                }
            });
        },
        nacionalidad: function () {
            $cboNacionalidad.on("change", function () {
                $cboPDepartamento.val("").change();
                $cboPDistrito.attr("disabled", true);
                configUbigeos.f_nacionalidad(this);
                //cargarUbigeo(opts);
            });
            $cboPaisNac.on("change", function () {
                $cboPDepartamento.val("").change();
                $cboPDistrito.attr("disabled", true);
                configUbigeos.f_nacionalidad(this);
                //cargarUbigeo(opts);
            });
            $chkPaisNac.on('change', function () {
                $cboPaisNac.attr("disabled", true);
                $cboNacionalidad.attr("disabled", false);
                if ($(this).is(':checked')) {
                    $cboPaisNac.attr("disabled", false);
                    $cboNacionalidad.attr("disabled", true);
                } else {
                    $cboPaisNac.val($cboNacionalidad.val());
                    configUbigeos.f_nacionalidad($cboNacionalidad);
                }
            });
        },
        PJNDocumento: function () {
            //$txtPJNDocumento.on("change", function () {
            //    $txtPJNDocumento.parent().find(".PJNDocumento-error").remove()
            //    if (!validarPJNDocumento($txtPJNDocumento.val())) {
            //        $txtPJNDocumento.parent().append('<label class="error PJNDocumento-error">El documento debe iniciar en 20.</label>')
            //    }
            //})
        },
        init: function () {
            eventosIncrustadosPersona.botonNuevoPersona();
            eventosIncrustadosPersona.botonBuscar();
            eventosIncrustadosPersona.botonGrabarPersona();
            //eventosIncrustadosPersona.CambioDoc();
            eventosIncrustadosPersona.botonConsultarSUSALUD();
            eventosIncrustadosPersona.tap_listaPersona();
            eventosIncrustadosPersona.cboTipoPersona();
            eventosIncrustadosPersona.nacionalidad();
            eventosIncrustadosPersona.PJNDocumento();
            eventosIncrustadosPersona.botonesConsultaSunat();
        }
    }

    var eventosIncrustadosDocumento = {
        botonGrabarDocumento: function () {
            $btnGrabarDocumento.on("click", function () {
                $(this).attr("disabled", true);
                funcionesDocumento.guardarDocumento()
                $(this).attr("disabled", false);
            });
        },
        botonNuevo: function () {
            $btnNuevoDocumento.on("click", function () {
                $hfaction.val("N");
                if (configDTDocumento.tienePrincipal) {
                    $cboPrincipalDocumento.val("2");
                } else {
                    $cboPrincipalDocumento.val("1");
                }
                $modalTituloDocum.text("Agregar Documento")
                if ($cboTPersonaNJ.val() == 2) {
                    $cboDocumento.empty();
                    $cboDocumento.LlenarSelectGDOrdenado("GDDCMNTO");
                    $cboDocumento.val('8').trigger("change");
                    $cboDocumento.prop('disabled', true);
                } else {
                    $cboDocumento.empty();
                    $cboDocumento.LlenarSelectGDFiltrado("GDDCMNTO", configDTDocumento.tiposDocumentos);
                    if (jQuery.inArray('1', configDTDocumento.tiposDocumentos) == -1) {
                        $cboDocumento.val('1').trigger("change");
                    }
                    $cboDocumento.val("").attr("disabled", false);
                    $cboDocumento.prop('disabled', false);
                }
            });
        },
        cambioFechaInscripcion: function () {
            $txtFInscripcion.on('change', function () {
                var valF = false;
                var $this = $(this);
                var fInscr = $this.val();

                var valMayor = mayorFechaActual(valF, fInscr);
                if (valMayor) {
                    $this.addClass("error");
                    $('#msgFI').text("La Fecha ingresada es mayor a la fecha actual");
                } else {
                    $this.removeClass("error");
                    $('#msgFI').text("");
                }
            });
        },
        cambioFechaVencimiento: function () {
            $('#txtFVncmt').on('change', function () {
                var valF = false;
                var $this = $(this);
                var fInscr = $('#txtFInscripcion').val();
                var fVenc = $this.val();
                $('#txtFInscripcion').attr("required", true);

                if (fVenc && !fInscr) {
                    $this.addClass("error");
                    $('#txtFInscripcion').attr("required", true);
                } else {
                    $this.remove("error");
                    $('#txtFInscripcion').attr("required", false);
                }
                if (mayorFechaActual(valF, fVenc)) {
                    $this.addClass("error");
                    $('#msgFv').text("La fecha ingresada es mayor a la fecha actual");
                } else {
                    $this.removeClass("error");
                    $('#msgFv').text("");
                }
                if (mayorFechaActual(valF, fInscr, fVenc)) {
                    $this.addClass("error");
                    $('#msgFv').text("La fecha es mayor a la fecha inscripción");
                } else {
                    $this.removeClass("error");
                    $('#msgFv').text("");
                }
            });
        },
        init: function () {
            eventosIncrustadosDocumento.botonGrabarDocumento();
            eventosIncrustadosDocumento.botonNuevo();
            eventosIncrustadosDocumento.cambioFechaInscripcion();
            eventosIncrustadosDocumento.cambioFechaVencimiento();
        }
    }

    var eventosIncrustadosCorreo = {
        botonGrabarCorreo: function () {
            $btnGrabarCorreo.on("click", function () {
                $(this).attr("disabled", true);
                funcionesCorreo.guardarCorreo();
                $(this).attr("disabled", false);
            });
        },
        botonNuevo: function () {
            $btnNuevoCorreo.on("click", function () {
                $hfactionCorreo.val("N");
                $modalTituloCorreo.text("Agregar Correo");
                if (configDTCorreo.tienePrincipal) {
                    $cboPrincipalCorreo.val("2");
                } else {
                    $cboPrincipalCorreo.val("1");
                }
            });
        },
        formatoCorreo: function () {
            $txtCorreo.on("change", function () {
                if (!validarEmail($txtCorreo.val())) {
                    $('#mssg').text("El formato de correo es inválido.");
                } else {
                    $('#mssg').text("");
                }
            });
        },
        init: function () {
            eventosIncrustadosCorreo.botonGrabarCorreo();
            eventosIncrustadosCorreo.botonNuevo();
            eventosIncrustadosCorreo.formatoCorreo();
        }
    }

    var eventosIncrustadosDireccion = {
        botonGrabarDireccion: function () {
            $btnGrabarDireccion.on("click", function () {
                $(this).attr("disabled", true);
                funcionesDireccion.guardarDireccion();
                $(this).attr("disabled", false);
            });
        },
        botonNuevo: function () {
            $btnNuevoDireccion.on("click", function () {
                $hfactionDireccion.val("N"); $modalTituloDireccion.text("Agregar Dirección");
                $cboTDireccion.empty();
                $cboTDireccion.LlenarSelectGDFiltrado("GDTDRCCN", configDTDireccion.tipoDirecciones);
                if ($cboTPersonaNJ.val() == 1) {
                    $cboTDireccion.children('option[value="3"]').hide();
                } else {
                    $cboTDireccion.children('option[value="3"]').show();
                    $cboTDireccion.val("3").trigger("change")
                }
                if (configDTDireccion.tienePrincipal) {
                    $cboPrincipalDireccion.val("2");
                } else {
                    $cboPrincipalDireccion.val("1");
                }
                $cboTDireccion.val("").attr("disabled", false);
                $FormularioDireccion.find('.input-zona').attr('disabled', true);
            });

        },
        onChangeTipoZona: function () {
            $cboTipoZona.on("change", function () {
                configModalDireccion.form.eventos.reset();
                funcionesDireccion.selectTipoZona();
            });
        },
        init: function () {
            eventosIncrustadosDireccion.botonGrabarDireccion();
            eventosIncrustadosDireccion.botonNuevo();
            eventosIncrustadosDireccion.onChangeTipoZona();
        }
    }

    var eventosIncrustadostelefono = {
        botonGrabarTelefono: function () {
            $btnGrabarTelefono.on("click", function () {
                $(this).attr("disabled", true);
                funcionesTelefono.guardarTelefono();
                $(this).attr("disabled", false);
            });
        },
        botonNuevo: function () {
            $btnNuevoTelefono.on("click", function () {
                $hfactionTelefono.val("N");
                $modalTituloTelefono.text("Agregar Teléfono");
                if (configDTTelefono.tienePrincipal) {
                    $cboPrincipalTelefono.val("2");
                } else {
                    $cboPrincipalTelefono.val("1");
                }
            });
        },
        cboTipoTelefono: function () {
            $cboTTelefono.on("change", function () {
                $this = $(this);
                $cboDepartamentoTlfno.val("").trigger("change");
                if ($this.val() == 1) {
                    $cboDepartamentoTlfno.removeClass("error");
                    $cboDepartamentoTlfno.attr("required", false);
                    $cboDepartamentoTlfno.attr("disabled", true);
                } else {
                    $cboDepartamentoTlfno.attr("required", true);
                    $cboDepartamentoTlfno.attr("disabled", false);
                }
            });
        },
        cboDepartamentoTelefono: function () {
            $cboDepartamentoTlfno.attr("disabled", true);
            var $ubigeo = $(JSON.parse(localStorage.getItem('ubigeo')));
            $cboDepartamentoTlfno.append($("<option />").val('').text("Cargando..."));
            $.each($ubigeo, function (key, item) {
                $cboDepartamentoTlfno.append($("<option />").val(item["cdgo"]).text(item["dscrpcn"]));
            });
            $cboDepartamentoTlfno.children('option[value=""]').text("Seleccione").val("");
            //$cboDepartamentoTlfno.attr("disabled", false);
        },
        init: function () {
            eventosIncrustadostelefono.botonGrabarTelefono();
            eventosIncrustadostelefono.botonNuevo();
            eventosIncrustadostelefono.cboTipoTelefono();
            eventosIncrustadostelefono.cboDepartamentoTelefono();
        }
    }

    var eventosIncrustadosGrado = {
        botonGrabarGrado: function () {
            $btnGrabarGrado.on("click", function () {
                $(this).attr("disabled", true);
                funcionesGrado.guardarGrado();
                $(this).attr("disabled", false);
            });
        },
        botonNuevo: function () {
            $btnNuevoGrado.on("click", function () {
                $hfactionGrado.val("N");
                $modalTituloGrado.text("Agregar Datos de Interés");
                funcionesGrado.inicioModal();
                $cboSMilitar.children('option[value="2"]').attr("disabled", true);
                $cboSMilitar.children('option[value="3"]').attr("disabled", true);
                $cboSMilitar.children('option[value="4"]').attr("disabled", true);
                $cboSMilitar.children('option[value="5"]').attr("disabled", true);
            });
        },
        onChangeTiempoServicio: function () {
            $txtTServicio.on("change", function () {
                configModalGrado.form.eventos.reset();
                funcionesGrado.inputTiemposServicios();
            });
        },
        onChangeTipoRelacion: function () {
            $cboTRelaccion.on("change", function () {
                configModalGrado.form.eventos.reset();
                funcionesGrado.selectTipoRelacion();
            });
        },
        onChangeSituacionMilitar: function () {
            $cboSMilitar.on("change", function () {
                configModalGrado.form.eventos.reset();
                funcionesGrado.selectSituacionMilitar();
            });
        },
        onChangeVinculoPersona: function () {
            $cboTPersonaGrado.on("change", function () {
                configModalGrado.form.eventos.reset();
                funcionesGrado.selectTipoVinculo();
                funcionesGrado.inputTiemposServicios();
            });
        },
        onChangeUnidadPago: function () {
            $cboUpago.on("change", function () {
                configModalGrado.form.eventos.reset();
                funcionesGrado.selectUnidadPago();
            });
        },
        onChangeCausalBaja: function () {
            $cboCBaja.on("change", function () {
                configModalGrado.form.eventos.reset();
                funcionesGrado.selectCausalBaja();
            });
        },
        onChangeDiagnostico: function () {
            $cboDiagnostico.on("change", function () {
                configModalGrado.form.eventos.reset();
                funcionesGrado.selectDiagnostico();
            });
        },
        onChangeFIngreso: function () {
            $txtFIngreso.on('change', function () {
                var valF = false;
                var $this = $(this);
                var fIngreso = $this.val();

                //CALCULAR TIEMPO DE SERVICIO
                var serviceTime = calcTimeServ(fIngreso);
                var aServ = serviceTime[2];
                var mServ = serviceTime[1];
                var dServ = serviceTime[0];

                var TServA = (aServ == 1) ? aServ + " año / " : aServ + " años / ";
                var TServM = (mServ == 1) ? mServ + " mes / " : mServ + " meses / ";
                var fullServ = (dServ == 1) ? TServA + TServM + dServ + " día" : TServA + TServM + dServ + " días";

                if (isNaN(aServ) || isNaN(mServ) || isNaN(dServ)) {
                    $('#txtTServicio').val("");
                } else {
                    $('#txtTServicio').val(fullServ);
                }

                //CALCULAR FECHA MAYOR
                var valMayor = mayorFechaActual(valF, fIngreso);
                if (valMayor) {
                    $this.addClass("error");
                    $('#mgrd0').text("La fecha es mayor a la fecha actual");
                } else {
                    $this.removeClass("error");
                    $('#mgrd0').text("");
                }

                //EVENTOS ON CHANGE
                $('#txtFDisponibilidad').change();
                $('#txtFTermino').change();
                $('#txtFBaja').change();

            });
        },
        onChangeFDisponibilidad: function () {
            $txtFDisponibilidad.on("change", function () {
                var $this = $(this);
                var fIngreso = $('#txtFIngreso').val();
                var fDisponibilidad = $this.val();
                var fTerminoDisp = $('#txtFTermino').val();
                var fBaja = $('#txtFBaja').val();
                var Smil = $('#cboSMilitar').val();
                var valF = false;

                //CALCULAR TIEMPO DE SERVICIO
                var serviceTime = calcTimeServ(fIngreso, fDisponibilidad);
                var aServ = serviceTime[2];
                var mServ = serviceTime[1];
                var dServ = serviceTime[0];

                var TServA = (aServ == 1) ? aServ + " año / " : aServ + " años / ";
                var TServM = (mServ == 1) ? mServ + " mes / " : mServ + " meses / ";
                var fullServ = (dServ == 1) ? TServA + TServM + dServ + " día" : TServA + TServM + dServ + " días";

                if (isNaN(aServ) || isNaN(mServ) || isNaN(dServ)) {
                    $('#txtTServicio').val("");
                } else {
                    $('#txtTServicio').val(fullServ);
                }

                //CALCULAR FECHA MAYOR
                var valMayor = mayorFechaActual(valF, fDisponibilidad);
                if (valMayor) {
                    $this.addClass("error");
                    $('#mgrd1').text("La fecha es mayor a la fecha actual");
                } else if (mayorFechaActual(valF, fIngreso, fDisponibilidad)) {
                    $this.addClass("error");
                    $('#mgrd1').text("La fecha es menor a la fecha de Ingreso");
                } else {
                    $this.removeClass("error");
                    $('#mgrd1').text("");
                }

                validaFechasIngresadas();
                $('#txtFTermino').change();
                $('#txtFBaja').change();
                $('#txtTServicio').change();
            });
        },
        onChangeFTermino: function () {
            $txtFTermino.on("change", function () {
                var $this = $(this);
                var fIngreso = $('#txtFIngreso').val();
                var fDisponibilidad = $('#txtFDisponibilidad');
                var fTerminoDisp = $this.val();
                var fBaja = $('#txtFBaja').val();
                var valF = false;

                //CALCULAR TIEMPO DE SERVICIO
                var serviceTime = calcTimeServ(fIngreso, fDisponibilidad.val(), fTerminoDisp);
                var aServ = serviceTime[2];
                var mServ = serviceTime[1];
                var dServ = serviceTime[0];

                var TServA = (aServ == 1) ? aServ + " año / " : aServ + " años / ";
                var TServM = (mServ == 1) ? mServ + " mes / " : mServ + " meses / ";
                var fullServ = (dServ == 1) ? TServA + TServM + dServ + " día" : TServA + TServM + dServ + " días";

                if (isNaN(aServ) || isNaN(mServ) || isNaN(dServ)) {
                    $('#txtTServicio').val("");
                } else {
                    $('#txtTServicio').val(fullServ);
                }

                //CALCULAR FECHA MAYOR
                if (mayorFechaActual(valF, fTerminoDisp)) {
                    $('#mgrd2').text("La fecha es mayor a la fecha actual");
                    $this.addClass("error");
                } else if (mayorFechaActual(valF, fIngreso, fTerminoDisp)) {
                    $('#mgrd2').text("La fecha es menor a la fecha de Ingreso");
                    $this.addClass("error");
                } else if (fDisponibilidad.val() && mayorFechaActual(valF, fDisponibilidad.val(), fTerminoDisp)) {
                    $('#mgrd2').text("La fecha es menor a la fecha de Disponibilidad");
                    $this.addClass("error");
                } else {
                    $this.removeClass("error");
                    $('#mgrd2').text("");
                }


                validaFechasIngresadas();
                $('#txtFBaja').change();
                $('#txtTServicio').change();
            });
        },
        onChangeFBaja: function () {
            $('#txtFBaja').on("change", function () {
                var $this = $(this);
                var fIngreso = $('#txtFIngreso').val();
                var fDisponibilidad = $('#txtFDisponibilidad').val();
                var fTerminoDisp = $('#txtFTermino').val();
                var fFAllecimiento = $('#txtFFallecimiento').val();
                var fBaja = $this.val();
                var sitMil = $('#cboSMilitar').val();
                var valF = false;

                //CALCULAR TIEMPO DE SERVICIO
                var serviceTime = calcTimeServ(fIngreso, fDisponibilidad, fTerminoDisp, fBaja);
                var aServ = serviceTime[2];
                var mServ = serviceTime[1];
                var dServ = serviceTime[0];

                var TServA = (aServ == 1) ? aServ + " año / " : aServ + " años / ";
                var TServM = (mServ == 1) ? mServ + " mes / " : mServ + " meses / ";
                var fullServ = (dServ == 1) ? TServA + TServM + dServ + " día" : TServA + TServM + dServ + " días";

                if (isNaN(aServ) || isNaN(mServ) || isNaN(dServ)) {
                    $('#txtTServicio').val("");
                } else {
                    $('#txtTServicio').val(fullServ);
                }
                if (mayorFechaActual(valF, fBaja)) {
                    $('#mgrd3').text("La fecha es mayor a la fecha actual");
                    $this.addClass("error");
                } else if (mayorFechaActual(valF, fIngreso, fBaja)) {
                    $('#mgrd3').text("La fecha es menor a la fecha de ingreso");
                    $this.addClass("error");
                } else if (fDisponibilidad && mayorFechaActual(valF, fDisponibilidad, fBaja)) {
                    $('#mgrd3').text("La fecha es menor a la fecha de disponibilidad");
                    $this.addClass("error");
                } else if (fTerminoDisp && mayorFechaActual(valF, fTerminoDisp, fBaja)) {
                    $('#mgrd3').text("La fecha es menor a la fecha de término");
                    $this.addClass("error");
                } else if (fFAllecimiento) {
                    //CALCULAR FECHA MAYOR
                    if (mayorFechaActual(valF, fBaja, fFAllecimiento)) {
                        $('#mgrd3').text("La fecha es mayor a la fecha de Fallecimiento");
                        $this.addClass("error");
                    } else {
                        $('#mgrd3').text("");
                        $this.removeClass("error");
                    }
                } else {
                    $this.removeClass("error");
                    $('#mgrd3').text("");
                }
                if (sitMil == 3 && $('#txtFFallecimiento').val()) {
                    valF = false;
                    if (mayorFechaActual(valF, fBaja, EntidadPersona.ffllcmnto)) {
                        $('#mgrd3').text("La fecha es mayor a la fecha de deceso");
                        $this.addClass("error");
                    } else {
                        $('#mgrd3').text("");
                        $this.removeClass("error");
                    }
                }
                if (sitMil == 3) {
                    if (!$this.val() || ($this.val()).length == 0) {
                        $this.addClass("error");
                        $this.attr("required", true);
                    } else {
                        $this.removeClass("error");
                        $this.attr("required", false);
                    }
                }
                validaFechasIngresadas();
                $('#txtTServicio').change();
            });
        },
        onChangeSMilitar: function () {
            $('#cboSMilitar').on("change", function () {
                validaFechasIngresadas();


                if ($('#cboSMilitar').val() == 1) {
                    $('#txtFBaja').val("");
                } else if ($('#cboSMilitar').val() == 2) {
                    $('#txtFTermino').val("");
                    $('#txtFBaja').val("");
                }
            });
        },

        init: function () {
            eventosIncrustadosGrado.botonGrabarGrado();
            eventosIncrustadosGrado.botonNuevo();
            eventosIncrustadosGrado.onChangeTipoRelacion();
            eventosIncrustadosGrado.onChangeSituacionMilitar();
            eventosIncrustadosGrado.onChangeVinculoPersona();
            eventosIncrustadosGrado.onChangeUnidadPago();
            eventosIncrustadosGrado.onChangeCausalBaja();
            eventosIncrustadosGrado.onChangeDiagnostico();
            eventosIncrustadosGrado.onChangeFIngreso();
            eventosIncrustadosGrado.onChangeFDisponibilidad();
            eventosIncrustadosGrado.onChangeFTermino();
            eventosIncrustadosGrado.onChangeFBaja();
            eventosIncrustadosGrado.onChangeSMilitar();
            $cboSMilitar.children('option[value=""]').text("NINGUNA");
            $cboTRelaccion.select2({ width: 'resolve', minimumResultsForSearch: -1 });
            $cboSMilitar.children('option[value=""]').text("NINGUNA");
            $cboSMilitar.select2({ width: 'resolve', minimumResultsForSearch: -1 });
            $cboGrado.select2({ width: 'resolve' });
            $cboTPersonaGrado.select2({ width: 'resolve', minimumResultsForSearch: -1 });
            $cboUpago.select2({ width: 'resolve', minimumResultsForSearch: -1 });
            $cboTAfeccion.select2({ width: 'resolve', minimumResultsForSearch: -1 });
            $cboInterdicto.select2({ width: 'resolve', minimumResultsForSearch: -1 });
            $cboPensionable.select2({ width: 'resolve', minimumResultsForSearch: -1 });
            $cboTRelaccion.select2({ width: 'resolve', minimumResultsForSearch: -1 });

            $cboEspecialidad.select2({ width: 'resolve', });
            //$cboDiagnostico.select2({ width: 'resolve' });
            $cboMDisponibilidad.select2({ width: 'resolve' });
            $cboCBaja.select2({ width: 'resolve' });
            eventosIncrustadosGrado.onChangeTiempoServicio();
        }
    }

    var eventosIncrustadosPersonaDep = {
        btnNuevaDependencia: function () {
            $btnNuevaDependencia.on("click", function () {
                $hfaction.val("N");
                $mdlDependenciaLabel.text("Agregar Persona");
                configCboListPersonas.reset();
            });
        },
        btnGuardarDependencia: function () {
            $btnGuardarDependencia.on("click", function () {
                $(this).attr("disabled", true);
                funcionesDependiente.guardar();
                $(this).attr("disabled", false);
            });
        },
        init: function () {
            eventosIncrustadosPersonaDep.btnNuevaDependencia();
            eventosIncrustadosPersonaDep.btnGuardarDependencia();
        }
    }


    var eventosInrustadosCuentaBanco = {
        botonNuevoCuentaBanco: function () {
            $btnNuevoCuenta.click(function () { funcionesCuentaBanco.nuevaCuentabanco(); });
        },

        botonGrabarCuentaBanco: function () {
            $btnGrabarCuentaBanco.click(function () { funcionesCuentaBanco.guardarCuentaBanco(); });
        },
        tap_listaCuentaBanco: function () {
            $TbListartab.click(function () {
                $TbAgregartab.addClass("disabled");
            });

        },

        init: function () {
            eventosInrustadosCuentaBanco.botonNuevoCuentaBanco();
            eventosInrustadosCuentaBanco.botonGrabarCuentaBanco();
            eventosInrustadosCuentaBanco.tap_listaCuentaBanco();

        }
    };

    var cboEstados = {
        init: function () {
            $cboEstado.LlenarSelectGD("GDESTDO");
        }
    };

    var cargarCombos = {
        diagnosticos: function () {
            $cboDiagnostico.select2({
                ajax: {
                    url: '/diagnostico/listarDiagnostico',
                    delay: 500,
                    data: function (params) {
                        var query = {
                            page: params.page || 1,
                            term: params.term
                        };
                        return query;
                    }
                },
                language: {
                    noResults: function () {
                        return "No hay resultados";
                    },
                    searching: function () {
                        return "Buscando..";
                    },
                    loadingMore: function () {
                        return 'Cargando más resultados..';
                    },
                    inputTooShort: function (args) {
                        var remainingChars = args.minimum - args.input.length;
                        var message = 'Por favor ingresar ' + remainingChars + ' o más caracteres';

                        return message;
                    },
                },
                width: 'resolve',
                dropdownParent: $mdlGrado,
                minimumInputLength: 3,
                placeholder: 'Seleccione Diagnóstico',
                allowClear: false
            });
        },
        init: function () {
            $cboTipoDocumento.LlenarSelectGDOrdenado("GDDCMNTO");
            $cboTPersonaNJ.LlenarSelectGD("GDTPRSNA");
            $cboSexo.LlenarSelectGDOrdenado("GDSXO", "vlR1", "dgddtlle");
            $cboECivil.LlenarSelectGDOrdenado("GDECVL", "vlR1", "dgddtlle");
            $cboPJTDocumento.LlenarSelectGDOrdenado("GDDCMNTO");
            $cboPNTDocumento.LlenarSelectGDOrdenado("GDDCMNTO");
            $cboNacionalidad.LlenarSelectPais();
            $cboPaisNac.LlenarSelectPais();
            $cboSSLDTDocumento.LlenarSelectGDOrdenado("GDDCMNTO");
            $cboPJTSociedad.LlenarSelectGD("GDTESCDD");
            $cboPJTEmpresa.LlenarSelectGD("GDTETMNO");
            $cboTDocumentoSUNAT.LlenarSelectGDOrdenado("GDDCMNTO");

            //------Documento ----------
            $cboDocumento.LlenarSelectGDOrdenado("GDDCMNTO");
            $cboPrincipalDocumento.LlenarSelectGD("GDTDOPC");

            //---------Correo----------
            $cboTCorreo.LlenarSelectGD("GDTCRREO");//GDTCRREO
            $cboPrincipalCorreo.LlenarSelectGD("GDTDOPC"); //GDTDOPC

            //--------Direccion-----------
            $cboTDireccion.LlenarSelectGDOrdenado("GDTDRCCN");
            if ($cboTPersonaNJ.val() == 1) {
                $cboTDireccion.children('option[value="3"]').hide();
            } else {
                $cboTDireccion.children('option[value="3"]').show();
                $cboTDireccion.val("3").trigger("change")
            }
            $cboTVia.LlenarSelectGDOrdenado("GDTVIA");
            //$cboVia.LlenarSelectGD("GDVIA");
            $cboTipoZona.LlenarSelectGDOrdenado("GDTDZNA"); //GDTDZNA
            $cboPrincipalDireccion.LlenarSelectGDOrdenado("GDTDOPC");

            //---------Telefono-----------
            $cboTTelefono.LlenarSelectGDOrdenado("GDTTLFNO");
            $cboPrincipalTelefono.LlenarSelectGD("GDTDOPC");

            //---------Grado------------
            $cboSMilitar.LlenarSelectGDOrdenado("GDSMLTR");
            $cboTRelaccion.LlenarSelectGDOrdenado("GDTRLCN");
            $cboCBaja.LlenarSelectGDOrdenado("GDCBJA", "vlR1", "dgddtlle");
            $cboEspecialidad.LlenarSelectGDOrdenado("GDESPCLDD", "vlR1", "dgddtlle");
            $cboTAfeccion.LlenarSelectGDOrdenado("GDTAFCCN");
            $cboTPersonaGrado.LlenarSelectGDOrdenado("GDTPRSNL");
            $cboInterdicto.LlenarSelectGDOrdenado("GDINTRDCTO");
            $cboPensionable.LlenarSelectGDOrdenado("GDPNCNBLE");
            $cboGrado.LlenarSelectGDOrdenado("GDTGRDO", "vlR1", "dgddtlle");
            $cboUpago.LlenarSelectGDOrdenado("GDTUPGO");
            $cboAfiliable.LlenarSelectGDOrdenado("GDPNCNBLE");
            cargarCombos.diagnosticos();
            $cboMDisponibilidad.LlenarSelectGDOrdenado("GDMTVDSP");

            //----------Cuenta de banco-------
            $cboBanco.LlenarSelectGD("GDBNCO");
            $cboTipoCuenta.LlenarSelectGD("GDTCNTA");
            $cboTipoDocumentocb.LlenarSelectGD("GDDCMNTO");
            $cboTipoDocumentocb.children('option[value="6"]').hide();
            $cboTipoDocumentocb.children('option[value="7"]').hide();
            $cboTipoDocumentocb.children('option[value="9"]').hide();
            //$cboTipoDocumentocb.LlenarSelectGDOrdenado("GDDCMNTO");
        }
    };

    var parametrosBD = {
        obtener: function (aprmtro) {

        },
        obtenerEdadPensionable: function (aprmtro) {
            $.ajax({
                url: '/obtener-parametro-por-abreviacion?aprmtro=RNGHIJOAFILIABLE',
                type: "Get",
            })
                .done(function (result) {
                    rangoAfiliable = result;
                });
        },
        obtenerAniosPensionables: function () {
            $.ajax({
                url: '/obtener-parametro-por-abreviacion?aprmtro=ANIOSPENSION',
                type: "Get",
            })
                .done(function (result) {
                    aniosPensionables = result;
                    aniosPensionablesMujeres = result.vlR1;
                    aniosPensionablesHombres = result.vlR2;
                });
        },
        obtenerAniosPersonaNavalReal: function () {
            $.ajax({
                url: '/obtener-parametro-por-abreviacion?aprmtro=ANIOSPERNAV',
                type: "Get",
            }).done(function (result) {
                aniosPerNav = result.vlR1;
            });
        },
        init: function () {
            this.obtenerEdadPensionable();
            this.obtenerAniosPensionables();
            this.obtenerAniosPersonaNavalReal();
        }
    };
    return {
        inicializar: function () {
            //donde se inicializa las funciones\
            parametrosBD.init();
            configDTPersona.init();
            eventosIncrustadosPersona.init();
            cboEstados.init();
            cargarCombos.init();
            configModalDocumento.init();
            eventosIncrustadosDocumento.init();
            configModalCorreo.init();
            eventosIncrustadosCorreo.init();
            configModalDireccion.init();
            eventosIncrustadosDireccion.init();
            configModalTelefono.init();
            eventosIncrustadostelefono.init();
            configModalGrado.init();
            eventosIncrustadosGrado.init();
            configDatePickers.init();
            configCboListPersonas.init();
            configModalPersonaDep.init();
            eventosIncrustadosPersonaDep.init();
            configCboTipoDocumentos.init();
            configFormPersona.homonimiaPN.init();
            validacionControles.init();
            configUbigeos.ubigeoPersona.init();
            configUbigeos.ubigeoDireccion.init();
            //configFormCuentaBanco.init();
            eventosInrustadosCuentaBanco.init();
        }
    }

}();
$(function () {
    initBusquedaPersona.inicializar();
});

