const InitPlanBeneficio = function () {
    //#region validacionControl
    let aNuPBeneficio = $("#aNuPBeneficio").val();
    let aEdPBeneficio = $("#aEdPBeneficio").val();
    let aElPBeneficio = $("#aElPBeneficio").val();
    let aGuPBeneficio = $("#aGuPBeneficio").val();
    let aNuVersion = $("#aNuVersion").val();
    let aEdVersion = $("#aEdVersion").val();
    let aElVersion = $("#aElVersion").val();
    let aGuVersion = $("#aGuVersion").val();
    let aNuDExcluido = $("#aNuDExcluido").val();
    let aEdDExcluido = $("#aEdDExcluido").val();
    let aElDExcluido = $("#aElDExcluido").val();
    let aGuDExcluido = $("#aGuDExcluido").val();
    let aNuBeneficio = $("#aNuBeneficio").val();
    let aEdBeneficio = $("#aEdBeneficio").val();
    let aElBeneficio = $("#aElBeneficio").val();
    let aGuBeneficio = $("#aGuBeneficio").val();
    let aNuCopago = $("#aNuCopago").val();
    let aEdCopago = $("#aEdCopago").val();
    let aElCopago = $("#aElCopago").val();
    let aGuCopago = $("#aGuCopago").val();
    let aNuRCopago = $("#aNuRCopago").val();
    let aEdRCopago = $("#aEdRCopago").val();
    let aElRCopago = $("#aElRCopago").val();
    let aGuRCopago = $("#aGuRCopago").val();
    let aNuCEtario = $("#aNuCEtario").val();
    let aEdCEtario = $("#aEdCEtario").val();
    let aElCEtario = $("#aElCEtario").val();
    let aGuCEtario = $("#aGuCEtario").val();
    //#endregion
    let validacionControles = {
        init: function () {
            console.log(aNuPBeneficio);
            aNuPBeneficio == "False" && $btnNuevoPlanBeneficio.hide();
            aGuPBeneficio == "False" && $btnGrPlanBeneficio.hide();
            aNuVersion == "False" && $btnNuevoVersionPB.hide();
            aGuVersion == "False" && $btnGrVersionPB.hide();
            aNuDExcluido == "False" && $btnNuDiagnostico.hide();
            aGuDExcluido == "False" && $btnGrDiagnostico.hide();
            aNuBeneficio == "False" && $btnNuBeneficio.hide();
            aGuBeneficio == "False" && $btnGuBeneficio.hide();
            aNuCopago == "False" && $btnNuCopago.hide();
            aGuCopago == "False" && $btnGuCopago.hide();
            aGuRCopago == "False" && $btnGuRedes.hide();
            aNuCEtario == "False" && $btnNuCostoEtario.hide();
            aGuCEtario == "False" && $btnGuCostoEtario.hide();
        }
    };
    //joseini
    var configPlugins = {
        in: {
            icon: "success",
            allowOutsideClick: false,
            title: "Éxito",
            text: "Se registró satisfactoriamente.",
            confirmButtonText: "Aceptar",
            //customClass: {
            //    confirmButton: 'btn btn-primary',
            ////    //cancelButton: 'btn btn-secondary btn-xs'
            //},
            //buttonsStyling: false
        },
        ac: {
            icon: "success",
            allowOutsideClick: false,
            title: "Éxito",
            text: "Se actualizó satisfactoriamente.",
            confirmButtonText: "Aceptar",
            //customClass: {
            //    confirmButton: 'btn btn-primary',
                //cancelButton: 'btn btn-secondary btn-xs'
            //},
           // buttonsStyling: false
        },
        el: {
            title: "¿Quiere modificar el estado del registro?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Aceptar",
            cancelButtonText: "Cancelar",
            confirmButtonClass: "btn btn-danger",//agregado
            //customClass: {
            //    confirmButton: 'btn btn-primary mr-2',
            //    cancelButton: 'btn btn-secondary'
            //},
            //buttonsStyling: false
        },
        languageStrSelect2: {
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
            }
        }
    }
    //#region Variables
    //#region Variables Lista PlanBeneficio
    $Lista_tab = $("#Lista-tab");
    $Datos_tab = $("#Datos-tab");
    $Configuracion_tab = $("#Configuracion-tab");
    $hfactionPlanBeneficio = $("#hfactionPlanBeneficio");
    $btnNuevoPlanBeneficio = $("#btnNuevoPlanBeneficio");
    $dtPlanBeneficio = $("#dtPlanBeneficio");
    //#endregion
    //#region Variables Agregar PlanBeneficio
    $titlePlan = $("#titlePlan");
    $frm_PlanBeneficio = $("#FormularioPlanBeneficio");
    $cboEstado = $(".select-estados");
    $btnGrPlanBeneficio = $("#btnGrPlanBeneficio");
    $hfNumPlanBeneficio = $("#hfNumPlanBeneficio");
    $txtNumeroPlanBeneficio = $("#txtNumeroPlanBeneficio");
    $txtDescripcionPB = $("#txtDescripcionPB");
    $hfDscrpcnBeneficio = $("#hfDscrpcnBeneficio");
    $cboMonedaPlan = $("#cboMonedaPlan");
    $cboMonedaPrima = $("#cboMonedaPrima");
    $cboPrimaIGV = $("#cboPrimaIGV");
    $cboProductoInterno = $("#cboProductoInterno");
    $cboTipoPlan = $("#cboTipoPlan");
    $cboTipoRegimen = $("#cboTipoRegimen");
    $cboIndRegafi = $("#cboIndRegafi");
    $cboCostoPlan = $("#cboCostoPlan");
    $chkLatencia = $("#chkLatencia");
    $txtCantidadMesesLa = $("#txtCantidadMesesLa");
    $chkCarencia = $("#chkCarencia");
    $txtCantidadMesesCa = $("#txtCantidadMesesCa");
    $chkCoberturaxEdad = $("#chkCoberturaxEdad");
    $txtCantidadAñosHombre = $("#txtCantidadAñosHombre");
    $txtCantidadAñosMujer = $("#txtCantidadAñosMujer");
    $cboParentesco = $("#cboParentesco");
    $cboEstdoTitular = $("#cboEstdoTitular");
    $cboInvalidez = $("#cboInvalidez");
    $chkActividad = $('[name="chkAServicio"]');
    $chkActividad1 = $('#chkasSI');
    $chkActividad2 = $('#chkasNo');
    $chkLimEdad = $('[name="chkLEdad"]');
    $chkLimEdad1 = $('#chkLEdadSi');
    $chkLimEdad2 = $('#chkLEdadNo');
    //#endregion
    //#region Variables VersionPB
    
    $ListarVersionPB_tab = $("#ListarVersionPB-tab");
    $Diagnostico_tab = $("#Diagnostico-tab");
    $btnNuevoVersionPB = $("#btnNuevoVersionPB");
    $tblVersionPB = $("#tabla_versionPB");
    $mdlVersionPB = $("#mdlVersionPB");
    $titleVersionPB = $("#titleVersion");
    $frmVersionPB = $("#frmVersionPB");
    $hfNumVersionPB = $("#hfNumVersionPB");
    $txtNVersionPB = $("#txtNVersionPB");
    $txtCostoFamiliar = $("#txtCostoFamiliar");
    $txtFIniVigencia = $("#txtFIniVigencia");
    $txtFFinVigencia = $("#txtFFinVigencia");
    $rngFechasVIGENCIA = $(".rngFechasVIGENCIA");
    $cboLimiteAnual = $("#cboLimiteAnual");
    $txtMontoLimite = $("#txtMontoLimite");
    $cboFormaReclamo = $("#cboFormaReclamo");
    $hfactionNuevaVersionPB = $("#hfNuevaVersionPB");
    $hfnumversionPB = $("#hfnumversionPB");
    $btnGrVersionPB = $("#btnGrVersionPB");
    $hfIdversionPB = $("#hfIdversionPB")

    //#endregion
    //#region Variables Diagnósticos
    $btnNuevoDiagnostico = $(".btn-nuevo");
    $dtDiagnosticoExcluido = $("#dtDiagnosticoExcluido");//jose
    $mdlDiagnostico = $("#mdlDiagnostico");
    $titleDiagnostico = $("#titleDiagnostico");
    $frmDiagnostico = $("#frmDiagnostico");
    $txtCodigoDiag = $("#txtCodigoDiag");
    $txtDescripcionDiag = $("#txtDescripcionDiag");
    $btnGrDiagnostico = $("#btnGrDiagnostico");
    $hfactionNuevoDiagnosticoExcl = $("#hfNuevoDiagnosticoExcl");
    $hfIdDiagnosticoExcl = $("#hfIdDiagnosticoExcl");
    $dtDiagnostico = $("#dtDiagnostico");//jose
    $btnNuDiagnostico = $("#btnNuDiagnostico");//jose
    //#endregion
    //#region Variables Beneficios PB
    $hfactionNuevoBeneficioPB = $("#hfNuevoBeneficioPB");
    $dtBeneficios = $("#dtBeneficios");
    $frm_BeneficioPB = $("#frmConfiguracionDet");
    $lblPlanDscrpcn = $("#lblPlanDscrpcn");
    $lblVersionDscrpcn = $("#lblVersionDscrpcn");
    //buscar ID beneficio
    $hfIDBenef = $("#hfIDBenef");
    $hfNombreBenef = $("#hfNombreBenef");
    $mdlBuscarCodBeneficio = $("#mdlBuscarCodBeneficio");
    $tblbeneficio = $("#tblbeneficio");
    $btnmdlCodBeneficio = $("#btnmdlCodBeneficio");
    $modalTitulo1 = $mdlBuscarCodBeneficio.find(".modal-title");
    $hfactionBeneficio = $("#hfBeneficio");
    //
    $btnNuBeneficio = $("#btnNuBeneficio");
    $btnGuBeneficio = $("#btnGuBeneficio");
    $btnCanBeneficio = $("#btnCanBeneficio");
    $cboIndBenefAdicional = $("#cboIndBenefAdicional");
    $txtAportRequeridas = $("#txtAportRequeridas");
    $txtIdBeneficio = $("#txtIdBeneficio");
    $txtBeneficio = $("#txtBeneficio");
    $txtLimAnualxPersona = $("#txtLimAnualxPersona");
    $txtConfigCarencia = $("#txtConfigCarencia");
    $txtConfigCobertura = $("#txtConfigCobertura");
    $txtObservacion = $("#txtObservacion");
    $cboParentescobeneficio = $("#cboParentescobeneficio");
    $cboGastoIBeneficio = $("#cboGastoIBeneficio");
    $hfIdBeneficiosPB = $("#hfIdBeneficiosPB");
    $stdoEstadoBeneficio = $frm_BeneficioPB.find("[name='GDESTDO']");
    $listaBeneficios_tab = $("#listaBeneficios-tab");
    $copago_tab = $("#copago-tab");
    $costoEtario_tab = $("#costoEtario-tab");
    //#endregion
    //#region VariableCostoEtario
    $hfactionCEtario = $("#hfactionCEtario");
    $frmCostoEtario = $("#frmCostoEtario");
    $hfIdCostoEtario = $("#hfIdCostoEtario");
    $txtCostoEtario = $("#txtCostoEtario");
    $cboSexoCostoEtario = $("#cboSexoCostoEtario");
    $txtEdadLimite = $("#txtEdadLimite");
    $txtAfiliado = $("#txtAfiliado");
    $txtEmpresa = $("#txtEmpresa");
    $txtTotal = $("#txtTotal");
    $estdoCEtario = $frmCostoEtario.find("[name='GDESTDO']")
    $dtCostoEtario = $("#dtCostoEtario");
    $mdlCostoEtario = $("#mdlCostoEtario");
    $titleCostoEtario = $("#titleCostoEtario");
    $btnGuCostoEtario = $("#btnGuCostoEtario");
    $btnNuCostoEtario = $("#btnNuCostoEtario");
    //#endregion
    //#region Variable Redes Proveedor
    $dtRedes = $("#dtRedes");
    $mdlRedes = $("#mdlRedes");
    $mdltitleRedes = $("#mdltitleRedes");
    $btnGuRedes = $("#btnGuRedes");
    $dtRedProveedor = $("#dtRedProveedor");
    //#endregion
    // #region Variables Copago
    $hfactionCopago = $("#hfactionCopago");
    $btnNuCopago = $("#btnNuCopago");
    $dtCopago = $("#dtCopago");
    $titleCopago = $("#titleCopago");
    $mdlCopago = $("#mdlCopago");
    $frmCopago = $("#frmCopago");
    $txtCodigoCopago = $("#txtCodigoCopago");
    $cboDeducible = $("#cboDeducible");
    $cboSolesDolaresDG = $("#cboSolesDolaresDG");
    $txtSolesMontoDG = $("#txtSolesMontoDG");
    $txtDolaresMontoDG = $("#txtDolaresMontoDG");
    $cboSolesDolaresDE = $("#cboSolesDolaresDE");
    $txtSolesMontoDE = $("#txtSolesMontoDE");
    $txtDolaresMontoDE = $("#txtDolaresMontoDE");
    $txtPorcentajeCobertura = $("#txtPorcentajeCobertura");
    $btnGuCopago = $("#btnGuCopago");
    $hfIDCopago = $("#hfIDCopago");
    $cboParentescoCopago = $("#cboParentescoCopago");
    //#endregion
    //#endregion
    //#region Entidades
    var EntidadPlanBeneficio = {
        id: "",
        dscrpcn: "",
        fmnda1: "",
        fmnda2: "",
        fpigv: "",
        gdpintrno: "",
        gdtpsld: "",
        gdtrgmn: "",
        firgfi: "",
        gdcpln: "",
        fltnca: "",
        tltnca: "",
        gdcrnca: "",
        tcrnca: "",
        fcesrvco: "",
        ahmbre: "",
        amjr: "",
        gdtprsnl: "",
        gdettlr: "",
        gdtafccn : "",
        asrvco: "",
        ledd : "",
        gdestdo: "",
        festdo: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",
    }
    var EntidadVersionPB = {
        id: "",
        idpbnfco: "",
        nvrsn: "",
        cgfmlr: "",
        gdlavpln: "",
        mlavpln: "",
        fivgnca: "",
        ffvgnca: "",
        gdfrclmo: "",
        gdestdo: "",
        festdo: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",
    }
    var EntidadDiagnostico = {
        id: "",
        idpbnfco: "",
        iddgnstco: "",
        gdestdo: "",
        festdo: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",
    }
    var EntidadBeneficio = {
        id: "",
        idvrsn: "",
        idbnfco: "",
        fbadcnl: "",
        naprts: "",
        laprsna: "",
        nmcrnca: "",
        elcbrtra: "",
        gdpbnfcio: "",
        gdgbnfcio: "",
        obsrvcn: "",
        gdestdo: "",
        festdo: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",

    }
    var objCEtario = {
        id: '',
        idvrsn: '',
        gnro: '',
        elmte: '',
        maafldo: '',
        maemprsa: '',
        total: '',
        gdestdo: '',
        festdo: '',
        ucrcn: '',
        fcrcn: '',
        uedcn: '',
        fedcn: ''
    }
    var objDiagnostico = {
        id: '',
        idpbnfco: '',
        iddgnstco: '',
        ftbtds: '',
        idbasgnds: '',
        idbnoasgnds: '',
        gdestdo: '',
        festdo: '',
        ucrcn: '',
        fcrcn: '',
        uedcn: '',
        fedcn: ''
    }
    var objRedCopago = {
        id: '',
        idcpgo: '',
        ftbtds: '',
        idasgnds: '',
        idnoasgnds: '',
        gdestdo: '',
        festdo: '',
        ucrcn: '',
        fcrcn: '',
        uedcn: '',
        fedcn: ''
    }
    var EntidadCopago = {
        id: "",
        idbnfco: "",
        fddcble: "",
        fmdgnrl: "",
        msdgnrl: "",
        mddgnrl: "",
        fmdespcl: "",
        msdespcl: "",
        mddespcl: "",
        pcbrtra: "",
        gdestdo: "",
        festdo: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",
        gdtprsnl: ""
    }

    //#endregion
    //#region DT Plan Beneficio
    var configDTPlanBeneficio = {
        objeto: null,
        opciones: {
            filter: true,
            ajax: {
                dataType: "JSON",
                url: "/PlanBeneficio/listar-tabla",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.p_sId = $txtNumeroPlanBeneficio.val();
                }
            },
            columns: [
                {
                    title: "Nro. Plan",
                    data: "id",
                    width: '10%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Descripción",
                    data: "dscrpcn",
                    orderable: false,
                    width: '60%',
                    className: "text-left"
                },
                {
                    title: "U. Edición",
                    data: "uedcn", width: '15%',
                    orderable: false
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN", width: '15%',
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
                            tpm = `<span><i class="fa fa-circle text-success" title="Activo"></i></span>`;
                        }
                        else {
                            tpm = `<span><i class="fa fa-circle text-danger" title="Inactivo"></i></span>`;
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
                      //  if (aEdPBeneficio == "True") {
                        tpm += `<button type="button" class="btn btn-info btn-xs btn-editar" data-id="${data.id}" title="Editar"><span><i class="la la-edit"></i></span></button>`;
                      //  }
                      //  if (aElPBeneficio == "True") {
                        tpm += ` <button title="Cambiar estado" data-id="${data.id}" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>`;
                      //  }
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
                configDTPlanBeneficio.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesPlanBeneficio.eliminarPlanBeneficio(id)
                })
            },
            editar: function () {
                configDTPlanBeneficio.objeto.on("click", ".btn-editar", function () {
                    $titlePlan.text("Editar Plan");
                    var data = configDTPlanBeneficio.objeto.row($(this).parents('tr')).data();
                    $hfNumPlanBeneficio.val(data.id);
                    $hfDscrpcnBeneficio.val(data.dscrpcn);
                    var id = $(this).data("id");
                    $hfactionPlanBeneficio.val("E");
                    $btnNuevoVersionPB.attr("disabled", false);
                    $btnNuDiagnostico.attr("disabled", false);
                    $Datos_tab.removeClass("disabled");
                    configDTVersionPB.reload();
                    configDTDiagnosticoExcl.reload();
                    funcionesPlanBeneficio.obtenerPlanBeneficio(id);

                })
            },
            init: function () {
                configDTPlanBeneficio.eventos.eliminar();
                configDTPlanBeneficio.eventos.editar();
            }
        },
        reload: function () {
            configDTPlanBeneficio.objeto.ajax.reload();
        },
        init: function () {
            configDTPlanBeneficio.objeto = $dtPlanBeneficio.DataTable(configDTPlanBeneficio.opciones);
            configDTPlanBeneficio.eventos.init();
        }
    };
    var configDTVersionPB = {
        objeto: null,
        opciones: {
            autoWidth: false,
            filter: false,
            ajax: {
                datatype: "JSON",
                url: "/PlanBeneficio/listar-version",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idpbnfco = $hfNumPlanBeneficio.val();
                }
            },
            columns: [
                {
                    title: "",
                    data: null, width: '5%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        tpm += `<button type="button" class="btn btn-primary btn-xs btn-versionPB" data-id="${data.id}" title="Configurar Beneficios"><span><i class="fa fa-cogs"></i></span></button>`;
                        return tpm;
                    }
                },
                {

                    title: "Versión",
                    data: "nvrsn",
                    width: '6%',
                    orderable: false, class: "text-center"
                },
                {

                    title: "Desde",
                    data: "fivgnca",
                    width: '9%',
                    orderable: false
                },
                {

                    title: "Hasta",
                    data: "ffvgnca",
                    width: '9%',
                    orderable: false
                },
                {

                    title: "Límite",
                    data: "gdlavpln",
                    width: '17%',
                    orderable: false
                },
                {

                    title: "Importe",
                    data: "mlavpln",
                    width: '10%',
                    class: "text-right",
                    orderable: false
                },
                {
                    title: "U. Edición",
                    data: "uedcn", width: '13%',
                    orderable: false,
                    class: "text-center"
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN", width: '15%',
                    orderable: false
                },
                {
                    title: "Estado",
                    data: null,
                    width: '5%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var tpm;
                        if (data.gdestdo == "A") {
                            tpm = `<span><i class="fa fa-circle text-success" title="Activo"></i></span>`;
                        }
                        else {
                            tpm = `<span><i class="fa fa-circle text-danger" title="Inactivo"></i></span>`;
                        }
                        return tpm;
                    }
                },
                {
                    title: "Acciones",
                    data: null,
                    orderable: false,
                    width: '11%',
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        if (aEdVersion == "True") {
                        tpm += `<button type="button" class="btn btn-info btn-xs btn-editar" data-id="${data.id}" title="Editar"><span><i class="la la-edit"></i></span></button>`;
                        }
                        if (aElVersion == "True") {
                        tpm += ` <button title="Cambiar estado" data-id="${data.id}" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>`;
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
                configDTVersionPB.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesVersionPB.eliminarVersionPB(id)
                })
            },
            editar: function () {
                configDTVersionPB.objeto.on("click", ".btn-editar", function () {
                    $titleVersionPB.text("Editar Versión");
                    var data = configDTVersionPB.objeto.row($(this).parents('tr')).data();
                    $hfIdversionPB.val(data.id);
                    var id = $(this).data("id");
                    $hfactionNuevaVersionPB.val("E");
                    $mdlVersionPB.modal("show");
                    $txtCostoFamiliar.prop("disabled", !funcionesVersionPB.validaCostoPlan());
                    funcionesVersionPB.obtenerVersionPB(id);

                })
            },
            versionPB: function () {
                configDTVersionPB.objeto.on("click", ".btn-versionPB", function () {
                    var data = configDTVersionPB.objeto.row($(this).parents('tr')).data();
                    $hfIdversionPB.val(data.id);
                    $hfNumVersionPB.val(data.nvrsn);
                    $lblPlanDscrpcn.text($hfDscrpcnBeneficio.val());
                    $lblVersionDscrpcn.text(data.nvrsn);
                    $Configuracion_tab.removeClass('disabled');
                    $Configuracion_tab.click();
                    funcionesVersionPB.validaTabEtario();
                })
            },
            init: function () {
                configDTVersionPB.eventos.editar();
                configDTVersionPB.eventos.eliminar();
                configDTVersionPB.eventos.versionPB();
            }
        },
        reload: function () {
            if (configDTVersionPB.objeto == null || configDTVersionPB.objeto == "" || configDTVersionPB.objeto == undefined) {
                configDTVersionPB.objeto = $tblVersionPB.DataTable(configDTVersionPB.opciones);
                configDTVersionPB.eventos.init();
            } else { configDTVersionPB.objeto.ajax.reload(); }
        }
    };
    var configDTDiagnosticoExcl = {
        objeto: null,
        opciones: {
            filter: false,
            ajax: {
                datatype: "JSON",
                url: "/PlanBeneficio/listar-diagnosticoExcl",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idpbnfco = $hfNumPlanBeneficio.val();
                }
            },
            columns: [
                {
                    title: "Id",
                    data: "id",
                    width: '4%',
                    orderable: false,
                    className: "text-center",
                    class: "d-none"
                },
                {
                    title: "idpbnfco",
                    data: "idpbnfco",
                    width: '10%',
                    orderable: false,
                    class: "d-none"
                },
                {
                    title: "iddgnstco",
                    data: "iddgnstco",
                    width: '10%',
                    orderable: false,
                    class: "d-none"
                },
                {
                    title: "Código",
                    data: "cdgnstco",
                    width: '10%',
                    orderable: false
                },
                {
                    title: "Descripción",
                    data: "ddgnstco",
                    width: '60%',
                    orderable: false,
                    class: "text-left"
                },
                {
                    title: "U. Edición",
                    data: "uedcn", width: '10%',
                    orderable: false,
                    class: "text-center"
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN", width: '12%',
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
                            tpm = `<span><i class="fa fa-circle text-success" title="Activo"></i></span>`;
                        }
                        else {
                            tpm = `<span><i class="fa fa-circle text-danger" title="Inactivo"></i></span>`;
                        }
                        return tpm;
                    }
                },
                {
                    title: "Acciones",
                    data: null,
                    orderable: false,
                    width: '11%',
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        if (aElDExcluido == "True") {
                            tpm += ` <button title="Cambiar estado" data-id="${data.id}" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>`;
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
                configDTDiagnosticoExcl.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesDiagnostico.eliminar(id)
                })
            },
            editar: function () {
                configDTDiagnosticoExcl.objeto.on("click", ".btn-editar", function () {
                })
            },
            init: function () {
                configDTDiagnosticoExcl.eventos.editar();
                configDTDiagnosticoExcl.eventos.eliminar();

            }
        },
        reload: function () {
            if (configDTDiagnosticoExcl.objeto == null || configDTDiagnosticoExcl.objeto == "" || configDTDiagnosticoExcl.objeto == undefined) {
                configDTDiagnosticoExcl.objeto = $dtDiagnosticoExcluido.DataTable(configDTDiagnosticoExcl.opciones);
                configDTDiagnosticoExcl.eventos.init();
            } else { configDTDiagnosticoExcl.objeto.ajax.reload(); }
        }
    };
    var configDTBeneficioPB = {
        objeto: null,
        opciones: {
            autoWidth: false,
            filter: true,
            ajax: {
                datatype: "JSON",
                url: "/PlanBeneficio/listar-beneficioPB",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idvrsn = $hfIdversionPB.val();
                }
            },
            columns: [
                {
                    title: "",
                    data: null, width: '2%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        tpm += `<button type="button" class="btn btn-primary btn-xs btn-beneficioCopago" data-id="${data.id}" title="Configurar Copago"><span><i class="fa fa-cogs"></i></span></button>`;
                        return tpm;
                    }
                },
                {
                    title: "Código",
                    data: "id",
                    width: '4%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Descripción",
                    data: "dscrpcn",
                    width: '40%',
                    orderable: false,
                    class: "text-left"
                },
                {
                    title: "U. Edición",
                    data: "uedcn", width: '15%',
                    orderable: false,
                    class: "text-center"
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN", width: '15%',
                    orderable: false
                },
                {
                    title: "Estado",
                    data: null,
                    width: '5%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var tpm;
                        if (data.gdestdo == "A") {
                            tpm = `<span><i class="fa fa-circle text-success" title="Activo"></i></span>`;
                        }
                        else {
                            tpm = `<span><i class="fa fa-circle text-danger" title="Inactivo"></i></span>`;
                        }
                        return tpm;
                    }
                },
                {
                    title: "Acciones",
                    data: null,
                    orderable: false,
                    width: '10%',
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        if (aEdBeneficio == "True") {
                        tpm += `<button type="button" class="btn btn-info btn-xs btn-editar" data-id="${data.id}" title="Editar"><span><i class="la la-edit"></i></span></button>`;
                        }
                        if (aElBeneficio == "True") {
                        tpm += ` <button type="button" title="Cambiar estado" data-id="${data.id}" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>`;
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
                configDTBeneficioPB.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesBeneficios.eliminar(id)
                })
            },
            editar: function () {
                configDTBeneficioPB.objeto.on("click", ".btn-editar", function () {
                    var data = configDTBeneficioPB.objeto.row($(this).parents('tr')).data();
                    funcionesBeneficios.editar(data);

                })
            },
            beneficioCopago: function () {
                configDTBeneficioPB.objeto.on("click", ".btn-beneficioCopago", function () {
                    var data = configDTBeneficioPB.objeto.row($(this).parents('tr')).data();
                    $hfIdBeneficiosPB.val(data.id);
                    configDTCopago.reload();
                    configDTRedCopago.reload();
                    $copago_tab.removeClass('disabled');
                    $copago_tab.click();
                })
            },
            init: function () {
                configDTBeneficioPB.eventos.editar();
                configDTBeneficioPB.eventos.eliminar();
                configDTBeneficioPB.eventos.beneficioCopago();
            }
        },
        reload: function () {
            if (configDTBeneficioPB.objeto == null || configDTBeneficioPB.objeto == "" || configDTBeneficioPB.objeto == undefined) {
                configDTBeneficioPB.objeto = $dtBeneficios.DataTable(configDTBeneficioPB.opciones);
                configDTBeneficioPB.eventos.init();
            } else { configDTBeneficioPB.objeto.ajax.reload(); }
        }
    };
    var configDTCopago = {
        objeto: null,
        opciones: {
            autoWidth:false,
            filter: false,
            ajax: {
                datatype: "JSON",
                url: "/PlanBeneficio/listar-copago",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idbnfco = $hfIdBeneficiosPB.val();
                }
            },
            columns: [
                {
                    title: "",
                    data: null, width: '8%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        if (aNuRCopago == "True") {
                            tpm += `<button type="button" class="btn btn-primary btn-xs btn-red" data-id="${data.id}" title="Agregar Red" data-toggle="modal" data-target="#mdlRedes"><span><i class="fa fa-plus"></i></span></button> `;
                        }
                        tpm += `<button type="button" class="btn btn-secondary btn-xs btn-VerRed px-2" data-id="${data.id}" title="Ver Redes"><span><i class="fa fa-eye"></i></span></button>`;

                        return tpm;
                    }
                },
                {
                    title: "Nro",
                    data: "id",
                    width: '4%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {

                    title: "Deducible",
                    data: "fddcble",
                    width: '5%',
                    orderable: false, className: "text-center"
                },
                {

                    title: "Moneda General",
                    data: "fmdgnrl",
                    width: '10%',
                    orderable: false
                },
                {

                    title: "Monto General S/.",
                    data: "msdgnrl",
                    width: '5%',
                    orderable: false
                },
                {

                    title: "Monto General $.",
                    data: "mddgnrl",
                    width: '5%',
                    orderable: false
                },
                {

                    title: "Moneda Especial",
                    data: "fmdespcl",
                    width: '10%',
                    orderable: false
                },
                {

                    title: "Monto Especial S/.",
                    data: "msdespcl",
                    width: '5%',
                    orderable: false
                },
                {

                    title: "Monto Especial $.",
                    data: "mddespcl",
                    width: '5%',
                    orderable: false
                },
                {

                    title: "% Cobertura",
                    data: "pcbrtra",
                    width: '5%',
                    orderable: false
                },
                {
                    title: "Parentesco",
                    data: "dtprsnl", width: '0%',
                    orderable: false,
                    class: "text-center d-none"
                },
                {
                    title: "U. Edición",
                    data: "uedcn", width: '10%',
                    orderable: false,
                    class: "text-center d-none"
                },                
                {
                    title: "F. Edición",
                    data: "cFEDCN", width: '10%',
                    orderable: false,
                    class: "text-center d-none"
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
                            tpm = `<span><i class="fa fa-circle text-success" title="Activo"></i></span>`;
                        }
                        else {
                            tpm = `<span><i class="fa fa-circle text-danger" title="Inactivo"></i></span>`;
                        }
                        return tpm;
                    }
                },
                {
                    title: "Acciones",
                    data: null,
                    orderable: false,
                    width: '11%',
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        if (aEdCopago == "True") {
                        tpm += `<button type="button" class="btn btn-info btn-xs btn-editar" data-id="${data.id}" title="Editar"><span><i class="la la-edit"></i></span></button>`;
                        }
                        if (aElCopago == "True") {
                        tpm += ` <button title="Cambiar estado" data-id="${data.id}" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>`;
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
                configDTCopago.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesCopago.eliminar(id)
                })
            },
            editar: function () {
                configDTCopago.objeto.on("click", ".btn-editar", function () {
                    $titleCopago.text("Editar Copago");
                    var data = configDTCopago.objeto.row($(this).parents('tr')).data();
                    $hfIDCopago.val(data.id);
                    $hfIdBeneficiosPB.val(data.idbnfco);
                    var id = $(this).data("id");
                    $hfactionCopago.val("E");
                    $mdlCopago.modal("show");
                    funcionesCopago.obtener(id);

                })
            },
            agregarRed: function () {
                configDTCopago.objeto.on("click", ".btn-red", function () {
                    var id = $(this).data("id");
                    $hfIDCopago.val(id);
                    configDTRedes.func.init();
                    configDTRedes.reload();
                })
            },
            selectRow: function () {
                $dtCopago.on('click', '.btn-VerRed', function () {
                    //var data = configDTCopago.objeto.row(this).data();
                    var id = $(this).data("id");
                    $hfIDCopago.val(id);
                    configDTRedCopago.reload();
                    //console.log(data);
                })
            },
            init: function () {
                configDTCopago.eventos.editar();
                configDTCopago.eventos.eliminar();
                configDTCopago.eventos.agregarRed();
                configDTCopago.eventos.selectRow();
            }
        },
        reload: function () {
            if (configDTCopago.objeto == null || configDTCopago.objeto == "" || configDTCopago.objeto == undefined) {
                configDTCopago.objeto = $dtCopago.DataTable(configDTCopago.opciones);
                configDTCopago.eventos.init();
            } else { configDTCopago.objeto.ajax.reload(); }
        }
    };
    var configDTBeneficio = {
        objecto: null,
        tienePrincipal: false,
        opciones: {
            ajax: {
                dataType: "JSON",
                url: "../Beneficio/listarBeneficio",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.id = "";
                }
            },
            columns: [
                {
                    title: "Código",
                    data: "codbnfcio",
                    width: '5%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Descripción",
                    data: "dscrpcn",
                    width: '15%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Tip. Prestación",
                    data: "gdtprstcn",
                    width: '10%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Tip. Cobertura",
                    data: "tcstds",
                    width: '10%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Cod. Siteds",
                    data: "cstds",
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
                            tpm = `<span><i class="fa fa-circle text-success" title="Activo"></i></span>`;
                        }
                        else {
                            tpm = `<span><i class="fa fa-circle text-danger" title="Inactivo"></i></span>`;
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
            selectRow: function () {
                $tblbeneficio.on('click', 'tbody tr', function () {
                    var data = configDTBeneficio.objecto.row(this).data();
                    if (typeof (data) != 'undefined') {
                        $hfIDBenef.val(data.id);
                        $txtIdBeneficio.val(data.id);
                        $txtBeneficio.val(data.dscrpcn);
                        $hfNombreBenef.val(data.dscrpcn);
                        $mdlBuscarCodBeneficio.modal('hide');
                    }
                })
            },

            eliminar: function () {
                configDTBeneficio.objecto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesBeneficios.eliminarBeneficio(id);
                })
            },
            editar: function () {
                configDTBeneficio.objecto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");
                    $hfactionBeneficio.val("E");
                    $tab_Agregar.removeClass("disabled");
                    $tab_Agregar.click();
                    funcionesBeneficios.obtenerBeneficio(id);
                    configModalBeneficio.objeto.resetForm();

                })
            },
            init: function () {
                configDTBeneficio.eventos.eliminar();
                configDTBeneficio.eventos.editar();
                configDTBeneficio.eventos.selectRow();
            }
        },
        reload: function () {
            configDTBeneficio.tipoDirecciones = [];
            if (configDTBeneficio.objecto == null || configDTBeneficio.objecto == "" || configDTBeneficio.objecto == undefined) {
                configDTBeneficio.objecto = $tblbeneficio.DataTable(configDTBeneficio.opciones);
                configDTBeneficio.eventos.init()
            } else { configDTBeneficio.objecto.ajax.reload(); }
        },

        init: function () {
            configDTBeneficio.objecto = $tblbeneficio.DataTable(configDTBeneficio.opciones);
            configDTBeneficio.eventos.init();
        }
    };//BuscarBeneficio
    var configDTCostoEtario = {
        objecto: null,
        tienePrincipal: false,
        opciones: {
            ajax: {
                dataType: "JSON",
                url: "../PlanBeneficio/listarCEtarioDT",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idvrsn = $hfIdversionPB.val();
                }
            },
            columns: [
                {
                    title: "Id",
                    data: "id",
                    width: '5%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Id Vrsn",
                    data: "idvrsn",
                    width: '5%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Género",
                    data: "gnro",
                    width: '5%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Edad Límite",
                    data: "elmte",
                    width: '5%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Aporte Afiliado",
                    data: "maafldo",
                    width: '5%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Aporte Empresa",
                    data: "maemprsa",
                    width: '5%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Total",
                    data: "total",
                    width: '5%',
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
                            tpm = `<span><i class="fa fa-circle text-success" title="Activo"></i></span>`;
                        }
                        else {
                            tpm = `<span><i class="fa fa-circle text-danger" title="Inactivo"></i></span>`;
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
                        if (aEdCEtario == "True") {
                            tpm += `<button type="button" class="btn btn-info btn-xs btn-editar" data-toggle="modal"  data-id="${data.id}" title="Editar" data-target="#mdlCostoEtario"><span><i class="la la-edit"></i></span></button>`; /*data - target="#mdlCorreo"*/
                        }
                        if (aElCEtario == "True") {
                            tpm += ` <button title="Cambiar estado" data-id="${data.id}" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>`;
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
                configDTCostoEtario.objecto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    fnCostoEtario.eliminar(id);
                })
            },
            editar: function () {
                configDTCostoEtario.objecto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");
                    $hfactionCEtario.val("E");
                    $hfIdCostoEtario.val(id);
                    fnCostoEtario.obtener(id);
                })
            },
            init: function () {
                configDTCostoEtario.eventos.eliminar();
                configDTCostoEtario.eventos.editar();
            }
        },
        reload: function () {
            configDTCostoEtario.tipoDirecciones = [];
            if (configDTCostoEtario.objecto == null || configDTCostoEtario.objecto == "" || configDTCostoEtario.objecto == undefined) {
                configDTCostoEtario.objecto = $dtCostoEtario.DataTable(configDTCostoEtario.opciones);
                configDTCostoEtario.eventos.init()
            } else { configDTCostoEtario.objecto.ajax.reload(); }
        }
    };
    var configDTDiagnostico = {
        asignados: [],
        noAsignados: [],
        swCheckedAll: false,
        estadoPadre: false,
        func: {
            addItem: function (array, item) {
                var i = array.includes((item))
                i || array.push((item));
            },
            delItem: function (array, item) {
                var i = array.indexOf((item));
                i !== -1 && array.splice(i, 1);
            },
            delAll: function (array) {
                let aAsignados = array;
                for (let i = aAsignados.length; i > 0; i--) {
                    aAsignados.pop();
                }
            },
            valAll: function () {
                var ctNA = configDTDiagnostico.noAsignados.length;
                if (configDTDiagnostico.swCheckedAll && ctNA == 0) {
                    $dtDiagnostico.find(".chkPadre").prop("checked", true);
                    if (configDTDiagnostico.swCheckedAll == false) configDTDiagnostico.swCheckedAll = true;
                }
            },
            cacheChk: function (id) {
                var bool = false;
                if (configDTDiagnostico.swCheckedAll && configDTDiagnostico.estadoPadre) {
                    return true;
                } else {
                    if (configDTDiagnostico.swCheckedAll) {
                        bool = !configDTDiagnostico.noAsignados.includes((id).toString());
                    } else {
                        bool = configDTDiagnostico.asignados.includes((id).toString());
                    }
                }
                //console.log(bool);
                return bool;
            },
            init: function () {
                $dtDiagnostico.find(".chkPadre").is(':checked') && $dtDiagnostico.find(".chkPadre").prop("checked", false);
                $dtDiagnostico.find(".chkHijos").is(':checked') && $dtDiagnostico.find(".chkHijos").prop("checked", false);
                configDTDiagnostico.swCheckedAll = false;
                configDTDiagnostico.estadoPadre = false;
                configDTDiagnostico.asignados = [];
                configDTDiagnostico.noAsignados = [];
            }
        },
        objeto: null,
        opciones: {
            ajax: {
                dataType: "JSON",
                url: "/PlanBeneficio/listarDiagnosticoDT",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                }
            },
            columns: [
                {
                    title: `<div class="d-flex justify-content-center">
                                <div class="custom-control custom-checkbox px-2">
                                    <input type="checkbox" class="custom-control-input chkPadre" id="chkPBeneficio">
                                    <label class="custom-control-label" for="chkPBeneficio"></label>
                                </div>
                            </div>`,
                    data: null, width: '1%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var checking = configDTDiagnostico.func.cacheChk(data.id);
                        var tpm = "";
                        tpm += `<div class="d-flex justify-content-center">
                                    <div class="custom-control custom-checkbox px-2">
                                        <input type="checkbox" class="custom-control-input chkHijos" id="chkitem${data.id}" value="${data.id}"  ${checking ? "checked" : ""}>
                                        <label class="custom-control-label" for="chkitem${data.id}"></label>
                                    </div>
                                </div>`;
                        return tpm;
                    }
                },
                {
                    title: "Código",
                    data: "cdgnstco",
                    width: '10%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Descripción",
                    data: "dscrpcn",
                    width: '40%',
                    orderable: false,
                    className: "text-left"
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
                            tpm = `<span><i class="fa fa-circle text-success" title="Activo"></i></span>`;
                        }
                        else {
                            tpm = `<span><i class="fa fa-circle text-danger" title="Inactivo"></i></span>`;
                        }
                        return tpm;
                    }
                },
                {
                    title: "U. Edición",
                    data: "uedcn", width: '10%',
                    orderable: false,
                    class: "d-none"
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN", width: '10%',
                    orderable: false,
                    className: "d-none"
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
            chkpadre: function () {
                configDTDiagnostico.objeto.on("change", ".chkPadre", function () {
                    configDTDiagnostico.estadoPadre = $(this).is(":checked");
                    if (configDTDiagnostico.swCheckedAll == false) configDTDiagnostico.swCheckedAll = true;
                    if (!configDTDiagnostico.estadoPadre) configDTDiagnostico.swCheckedAll = false;
                    configDTDiagnostico.func.delAll(configDTDiagnostico.asignados);
                    configDTDiagnostico.func.delAll(configDTDiagnostico.noAsignados);
                    var Items = $(".chkHijos");
                    $(Items).each(function () {
                        $(this).prop("checked", configDTDiagnostico.estadoPadre);
                    });
                })
            },
            chkhijos: function () {
                configDTDiagnostico.objeto.on("change", ".chkHijos", function () {
                    var chkPadre = $dtDiagnostico.find(".chkPadre");
                    if ($(chkPadre).is(':checked')) { $(chkPadre).prop("checked", false); configDTDiagnostico.estadoPadre = false; }
                    if (configDTDiagnostico.swCheckedAll) {
                        $(this).is(':checked') ? configDTDiagnostico.func.delItem(configDTDiagnostico.noAsignados, $(this)[0].value) : configDTDiagnostico.func.addItem(configDTDiagnostico.noAsignados, $(this)[0].value);
                        configDTDiagnostico.func.valAll();
                    } else {
                        $(this).is(':checked') ? configDTDiagnostico.func.addItem(configDTDiagnostico.asignados, $(this)[0].value) : configDTDiagnostico.func.delItem(configDTDiagnostico.asignados, $(this)[0].value);
                    }
                })
            },
            drawRow: function () {
                configDTDiagnostico.objeto.on("draw", function () {
                    //var Items = $dtBeneficio.find('tbody tr .chkHijos');
                    //$(Items).each(function () {
                    //configDTDiagnostico.swCheckedAll && configDTDiagnostico.func.addItem($(this)[0].value); 
                    //});
                    //console.log('asignados: ' + configDTDiagnostico.asignados);
                    //console.log('no asignados: ' + configDTDiagnostico.noAsignados);
                })
            },
            init: function () {
                configDTDiagnostico.eventos.chkpadre();
                configDTDiagnostico.eventos.chkhijos();
                //configDTDiagnostico.eventos.drawRow();
            }
        },
        reload: function () {
            if (configDTDiagnostico.objeto == null || configDTDiagnostico.objeto == "" || configDTDiagnostico.objeto == undefined) {
                configDTDiagnostico.objeto = $dtDiagnostico.DataTable(configDTDiagnostico.opciones);
                configDTDiagnostico.eventos.init();
            } else { configDTDiagnostico.objeto.ajax.reload(); }
        }
    };
    var configDTRedes = {
        asignados: [],
        noAsignados: [],
        swCheckedAll: false,
        estadoPadre: false,
        func: {
            addItem: function (array, item) {
                var i = array.includes((item))
                i || array.push((item));
            },
            delItem: function (array, item) {
                var i = array.indexOf((item));
                i !== -1 && array.splice(i, 1);
            },
            delAll: function (array) {
                let aAsignados = array;
                for (let i = aAsignados.length; i > 0; i--) {
                    aAsignados.pop();
                }
            },
            valAll: function () {
                var ctNA = configDTRedes.noAsignados.length;
                if (configDTRedes.swCheckedAll && ctNA == 0) {
                    $dtRedes.find(".chkPadre").prop("checked", true);
                    if (configDTRedes.swCheckedAll == false) configDTRedes.swCheckedAll = true;
                }
            },
            cacheChk: function (id) {
                var bool = false;
                if (configDTRedes.swCheckedAll && configDTRedes.estadoPadre) {
                    return true;
                } else {
                    if (configDTRedes.swCheckedAll) {
                        bool = !configDTRedes.noAsignados.includes((id).toString());
                    } else {
                        bool = configDTRedes.asignados.includes((id).toString());
                    }
                }
                //console.log(bool);
                return bool;
            },
            init: function () {
                $dtRedes.find(".chkPadre").is(':checked') && $dtRedes.find(".chkPadre").prop("checked", false);
                $dtRedes.find(".chkHijos").is(':checked') && $dtRedes.find(".chkHijos").prop("checked", false);
                configDTRedes.swCheckedAll = false;
                configDTRedes.estadoPadre = false;
                configDTRedes.asignados = [];
                configDTRedes.noAsignados = [];
            }
        },
        objeto: null,
        opciones: {
            ajax: {
                dataType: "JSON",
                url: "/PlanBeneficio/listarRedDT",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.gdestdo = 'A';
                }
            },
            columns: [
                {
                    title: `<div class="d-flex justify-content-center">
                                <div class="custom-control custom-checkbox px-2">
                                    <input type="checkbox" class="custom-control-input chkPadre" id="chkPBeneficio">
                                    <label class="custom-control-label" for="chkPBeneficio"></label>
                                </div>
                            </div>`,
                    data: null, width: '1%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var checking = configDTRedes.func.cacheChk(data.id);
                        var tpm = "";
                        tpm += `<div class="d-flex justify-content-center">
                                    <div class="custom-control custom-checkbox px-2">
                                        <input type="checkbox" class="custom-control-input chkHijos" id="chkitem${data.id}" value="${data.id}"  ${checking ? "checked" : ""}>
                                        <label class="custom-control-label" for="chkitem${data.id}"></label>
                                    </div>
                                </div>`;
                        return tpm;
                    }
                },
                {
                    title: "Id",
                    data: "id",
                    width: '10%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Descripción",
                    data: "dscrpcn",
                    width: '40%',
                    orderable: false,
                    className: "text-left"
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
                            tpm = `<span><i class="fa fa-circle text-success" title="Activo"></i></span>`;
                        }
                        else {
                            tpm = `<span><i class="fa fa-circle text-danger" title="Inactivo"></i></span>`;
                        }
                        return tpm;
                    }
                },
                {
                    title: "U. Edición",
                    data: "uedcn", width: '10%',
                    orderable: false,
                    class: "d-none"
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN", width: '10%',
                    orderable: false,
                    className: "d-none"
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
            chkpadre: function () {
                configDTRedes.objeto.on("change", ".chkPadre", function () {
                    configDTRedes.estadoPadre = $(this).is(":checked");
                    if (configDTRedes.swCheckedAll == false) configDTRedes.swCheckedAll = true;
                    if (!configDTRedes.estadoPadre) configDTRedes.swCheckedAll = false;
                    configDTRedes.func.delAll(configDTRedes.asignados);
                    configDTRedes.func.delAll(configDTRedes.noAsignados);
                    var Items = $(".chkHijos");
                    $(Items).each(function () {
                        $(this).prop("checked", configDTRedes.estadoPadre);
                    });
                })
            },
            chkhijos: function () {
                configDTRedes.objeto.on("change", ".chkHijos", function () {
                    var chkPadre = $dtRedes.find(".chkPadre");
                    if ($(chkPadre).is(':checked')) { $(chkPadre).prop("checked", false); configDTRedes.estadoPadre = false; }
                    if (configDTRedes.swCheckedAll) {
                        $(this).is(':checked') ? configDTRedes.func.delItem(configDTRedes.noAsignados, $(this)[0].value) : configDTRedes.func.addItem(configDTRedes.noAsignados, $(this)[0].value);
                        configDTRedes.func.valAll();
                    } else {
                        $(this).is(':checked') ? configDTRedes.func.addItem(configDTRedes.asignados, $(this)[0].value) : configDTRedes.func.delItem(configDTRedes.asignados, $(this)[0].value);
                    }
                })
            },
            drawRow: function () {
                configDTRedes.objeto.on("draw", function () {
                    //var Items = $dtBeneficio.find('tbody tr .chkHijos');
                    //$(Items).each(function () {
                    //configDTRedes.swCheckedAll && configDTRedes.func.addItem($(this)[0].value); 
                    //});
                    //console.log('asignados: ' + configDTRedes.asignados);
                    //console.log('no asignados: ' + configDTRedes.noAsignados);
                })
            },
            init: function () {
                configDTRedes.eventos.chkpadre();
                configDTRedes.eventos.chkhijos();
                //configDTRedes.eventos.drawRow();
            }
        },
        reload: function () {
            if (configDTRedes.objeto == null || configDTRedes.objeto == "" || configDTRedes.objeto == undefined) {
                configDTRedes.objeto = $dtRedes.DataTable(configDTRedes.opciones);
                configDTRedes.eventos.init();
            } else { configDTRedes.objeto.ajax.reload(); }
        }
    };
    var configDTRedCopago = {
        objecto: null,
        tienePrincipal: false,
        opciones: {
            ajax: {
                dataType: "JSON",
                url: "/PlanBeneficio/listarRedCopagoDT",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idcpgo = $hfIDCopago.val();
                }
            },
            columns: [
                {
                    title: "Código",
                    data: "id",
                    width: '5%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "id Red",
                    data: "idrprvdr",
                    width: '5%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Red",
                    data: "drprvdr",
                    width: '40%',
                    orderable: false,
                    className: "text-left"
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
                            tpm = `<span><i class="fa fa-circle text-success" title="Activo"></i></span>`;
                        }
                        else {
                            tpm = `<span><i class="fa fa-circle text-danger" title="Inactivo"></i></span>`;
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
                        if (aElRCopago == "True") {
                            tpm += ` <button title="Cambiar estado" data-id="${data.id}" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>`;
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
                configDTRedCopago.objecto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    fnRedCopago.eliminar(id);
                })
            },
            editar: function () {
                configDTRedCopago.objecto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");
                    $hfIdCostoEtario.val(id);
                    fnRedCopago.obtener(id);
                })
            },
            init: function () {
                configDTRedCopago.eventos.eliminar();
                configDTRedCopago.eventos.editar();
            }
        },
        reload: function () {
            configDTRedCopago.tipoDirecciones = [];
            if (configDTRedCopago.objecto == null || configDTRedCopago.objecto == "" || configDTRedCopago.objecto == undefined) {
                configDTRedCopago.objecto = $dtRedProveedor.DataTable(configDTRedCopago.opciones);
                configDTRedCopago.eventos.init()
            } else { configDTRedCopago.objecto.ajax.reload(); }
        }
    };
    //#endregion
    //#region Formularios
    var configFormPlanbeneficio = {
        inicio: function () {
            $frm_PlanBeneficio.trigger("reset");
            $frm_PlanBeneficio.AgregarCamposDefectoAuditoria();
            $txtCantidadMesesLa.prop("readonly", true);
            $txtCantidadMesesCa.prop("readonly", true);
            $txtCantidadAñosHombre.prop("readonly", true);
            $txtCantidadAñosMujer.prop("readonly", true);
            $chkActividad1.attr("checked", false);
            $chkActividad2.attr("checked", false);
            $chkLimEdad1.attr("checked", false);
            $chkLimEdad2.attr("checked", false);
        },
        inicioIndex: function () {
            $Datos_tab.addClass('disabled');
            $Configuracion_tab.addClass('disabled');
        },
        objeto: $frm_PlanBeneficio.validate({
            errorPlacement: function (error, element) {
                if (element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else {
                    error.insertAfter(element);
                }
            },
            rules: {
                txtDescripcionPB: {
                    required: true,
                },
                cboMonedaPlan: {
                    required: true,
                },
                cboMonedaPrima: {
                    required: true,
                },
                cboPrimaIGV: {
                    required: true,
                },
                cboProductoInterno: {
                    required: true,
                },
                cboTipoPlan: {
                    required: true,
                },
                cboTipoRegimen: {
                    required: true,
                },
                cboIndRegafi: {
                    required: true,
                },
                cboCostoPlan: {
                    required: true,
                },
                //txtCantidadMesesLa: {
                //    required: true,
                //},
                //txtCantidadMesesCa: {
                //    required: true,
                //},
                //txtCantidadAñosHombre: {
                //    required: true,
                //},
            }
        }),
        eventos: {
            reset: function () {
                configFormPlanbeneficio.objeto.resetForm();
            }
        },
        init: function () {
            configFormPlanbeneficio.inicioIndex();
        }
    }
    var configFormVersionPB = {
        inicio: function () {
            $txtCostoFamiliar.prop("disabled", true);
            $txtMontoLimite.prop("disabled", true);
            $frmVersionPB.AgregarCamposDefectoAuditoria();
            $txtCostoFamiliar.prop("disabled", !funcionesVersionPB.validaCostoPlan());
        },
        objeto: $frmVersionPB.validate({
            errorPlacement: function (error, element) {
                if (element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else {
                    error.insertAfter(element);
                }
            },
            rules: {
                txtCostoFamiliar: {
                    required: true,
                },
                txtFIniVigencia: {
                    required: true,
                },
                txtFFinVigencia: {
                    required: true,
                },
                cboLimiteAnual: {
                    required: true,
                },
                cboFormaReclamo: {
                    required: true,
                },

            }
        }),
        eventos: {
            reset: function () {
                configFormVersionPB.objeto.resetForm();
            }
        },
    }
    var configFormDiagnosticoExcl = {
        inicio: function () {
            if ($hfactionNuevoDiagnosticoExcl.val() == "N") {
                $frmDiagnostico.AgregarCamposDefectoAuditoria();
            }
        },
        objeto: $frmDiagnostico.validate({
            errorPlacement: function (error, element) {
                if (element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else {
                    error.insertAfter(element);
                }
            },
            rules: {
                txtDescripcionDiag: {
                    required: true,
                },
            }
        }),
        eventos: {
            reset: function () {
                $frmDiagnostico.trigger("reset");
                configFormDiagnosticoExcl.objeto.resetForm();
            }
        },
    }
    var configFormBeneficioPB = {
        inicio: function () {
            $frm_BeneficioPB.trigger("reset");
            $btnNuBeneficio.removeClass("d-none");
            $btnCanBeneficio.addClass("d-none");
            $btnGuBeneficio.addClass("d-none");
            $cboIndBenefAdicional.attr("disabled", true);
            $txtAportRequeridas.attr("disabled", true);
            $txtLimAnualxPersona.attr("disabled", true);
            $txtConfigCarencia.attr("disabled", true);
            $txtConfigCobertura.attr("disabled", true);
            $cboParentescobeneficio.attr("disabled", true);
            $cboGastoIBeneficio.attr("disabled", true);
            $btnmdlCodBeneficio.attr("disabled", true);
            $mdlBuscarCodBeneficio.attr("disabled", true);
            $txtObservacion.attr("disabled", true);
            $stdoEstadoBeneficio.attr("disabled", true);
            $frm_BeneficioPB.AgregarCamposDefectoAuditoria();
            configFormBeneficioPB.validacion.eventos.reset();
        },
        validacion: {
            objeto: $frm_BeneficioPB.validate({
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
                    cboIndBenefAdicional: {
                        required: true,
                    }, 
                    txtAportRequeridas: {
                        required: true,
                    },
                    txtLimAnualxPersona: {
                        required: true,
                    },
                    txtConfigCarencia: {
                        required: true,
                    },
                    txtConfigCobertura: {
                        required: true,
                    },
                    txtBeneficio: {
                        required: true,
                    },
                }
            }),
            eventos: {
                reset: function () {
                    // $frm_BeneficioPB.trigger("reset");
                    configFormBeneficioPB.validacion.objeto.resetForm();
                }
            }
        },
        init: function () { configFormBeneficioPB.inicio(); }
    }
    var configFrmCostoEtario = {
        inicio: function () {
            $frmCostoEtario.AgregarCamposDefectoAuditoria();
            configFrmCostoEtario.validacion.reset();
            $frmCostoEtario.DeshabilitarCamposAuditoria();
        },
        validacion: {
            objeto: $frmCostoEtario.validate({
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
                    cboSexoCostoEtario: {
                        required: true,
                    },
                    txtEdadLimite: {
                        required: true,
                    }
                }
            }),
            reset: function () {
                configFrmCostoEtario.validacion.objeto.resetForm();
            }
        },
        init: function () { configFrmCostoEtario.inicio(); }
    }
    var configFormCopago = {
        inicio: function () {
            $frmCopago.AgregarCamposDefectoAuditoria();
        },
        objeto: $frmCopago.validate({
            errorPlacement: function (error, element) {
                if (element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else {
                    error.insertAfter(element);
                }
            },
            rules: {
                cboSolesDolaresDG: {
                    required: true,
                },
                txtSolesMontoDG: {
                    required: true,
                },
                cboSolesDolaresDE: {
                    required: true,
                },
                txtSolesMontoDE: {
                    required: true,
                },
            }
        }),
        eventos: {
            reset: function () {
                $frmCopago.trigger("reset");
                configFormCopago.objeto.resetForm();
            }
        },
    }
    //#endregion
    //#region Funciones
    var funcionesPlanBeneficio = {
        nuevo: function () {
            $hfactionPlanBeneficio.val("N");
            configFormPlanbeneficio.eventos.reset();
            configFormPlanbeneficio.inicio();
            configFormVersionPB.eventos.reset();
            $frm_PlanBeneficio.AgregarCamposDefectoAuditoria();
            $frm_PlanBeneficio.DeshabilitarCamposAuditoria();
            $Datos_tab.removeClass("disabled");
            $Datos_tab.click();
            configDTVersionPB.reload();
            configDTDiagnosticoExcl.reload();
            configDTBeneficioPB.reload();
            configDTCopago.reload();
            $btnNuevoVersionPB.attr("disabled", true);
            $btnNuDiagnostico.attr("disabled", true);
        },
        insertarPlanBeneficio: function () {
            if ($frm_PlanBeneficio.valid()) {
                $frm_PlanBeneficio.find("[type='button']").attr("disabled", true);

                $hfNumPlanBeneficio.val($txtNumeroPlanBeneficio.val());
                EntidadPlanBeneficio = new Object();
                EntidadPlanBeneficio.dscrpcn = $txtDescripcionPB.val();
                EntidadPlanBeneficio.fmnda1 = $cboMonedaPlan.val();
                EntidadPlanBeneficio.fmnda2 = $cboMonedaPrima.val();
                EntidadPlanBeneficio.fpigv = $cboPrimaIGV.val();
                EntidadPlanBeneficio.gdpintrno = $cboProductoInterno.val();
                EntidadPlanBeneficio.gdtpsld = $cboTipoPlan.val();
                EntidadPlanBeneficio.gdtrgmn = $cboTipoRegimen.val();
                EntidadPlanBeneficio.firgfi = $cboIndRegafi.val();
                EntidadPlanBeneficio.gdcpln = $cboCostoPlan.val();
                EntidadPlanBeneficio.fltnca = $chkLatencia.is(":checked") ? "1" : "2";
                EntidadPlanBeneficio.tltnca = $txtCantidadMesesLa.val();
                EntidadPlanBeneficio.gdcrnca = $chkCarencia.is(":checked") ? "1" : "2";
                EntidadPlanBeneficio.tcrnca = $txtCantidadMesesCa.val();
                EntidadPlanBeneficio.fcesrvco = $chkCoberturaxEdad.is(":checked") ? "1" : "2";
                EntidadPlanBeneficio.ahmbre = $txtCantidadAñosHombre.val();
                EntidadPlanBeneficio.amjr = $txtCantidadAñosMujer.val();
                EntidadPlanBeneficio.gdtprsnl = $cboParentesco.val();
                EntidadPlanBeneficio.gdettlr = $cboEstdoTitular.val();
                EntidadPlanBeneficio.gdtafccn = $cboInvalidez.val();
                EntidadPlanBeneficio.asrvco = funcionesPlanBeneficio.ValorRadio($chkActividad, $chkActividad1, $chkActividad2);
                EntidadPlanBeneficio.ledd = funcionesPlanBeneficio.ValorRadio($chkLimEdad, $chkLimEdad1, $chkLimEdad2)
                EntidadPlanBeneficio.gdestdo = $frm_PlanBeneficio.find("[name='GDESTDO']").val();
                $.post("../PlanBeneficio/insertar", EntidadPlanBeneficio)
                    .done(function (idPlanbeneficio) {
                        Swal.fire(configPlugins.in)
                            .then((result) => {
                                $hfNumPlanBeneficio.val(idPlanbeneficio)

                                funcionesPlanBeneficio.obtenerPlanBeneficio($hfNumPlanBeneficio.val());
                                configDTPlanBeneficio.reload();
                                configDTVersionPB.reload();
                                configDTDiagnosticoExcl.reload();
                                configDTBeneficioPB.reload();
                                configDTCopago.reload(); //18.05
                                $btnNuevoVersionPB.attr("disabled", false);
                                $btnNuDiagnostico.attr("disabled", false);
                                $hfactionPlanBeneficio.val("E");
                            });
                    }).fail(function (e) {
                        Swal.fire({
                            icon: "error",
                            title: "error al guardar los datos.",
                            text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                            confimButtonText: "Aceptar"
                        });
                    })
                    .always(function () {
                        configDTPlanBeneficio.reload();
                    });
            }
        },
        obtenerPlanBeneficio: function (codigo) {
            params = { id: codigo };
            $.get("../PlanBeneficio/obtener", params)
                .done(function (data) {
                    EntidadPlanBeneficio = new Object();
                    EntidadPlanBeneficio = data;
                    $Datos_tab.removeClass("disabled");
                    $Datos_tab.click();
                    $hfNumPlanBeneficio.val(EntidadPlanBeneficio.id);
                    $txtNumeroPlanBeneficio.val($hfNumPlanBeneficio.val());
                    $txtDescripcionPB.val(EntidadPlanBeneficio.dscrpcn);
                    $cboMonedaPlan.val(EntidadPlanBeneficio.fmndA1);
                    $cboMonedaPrima.val(EntidadPlanBeneficio.fmndA2);
                    $cboPrimaIGV.val(EntidadPlanBeneficio.fpigv);
                    $cboProductoInterno.val(EntidadPlanBeneficio.gdpintrno);
                    $cboTipoPlan.val(EntidadPlanBeneficio.gdtpsld);
                    $cboTipoRegimen.val(EntidadPlanBeneficio.gdtrgmn);
                    $cboIndRegafi.val(EntidadPlanBeneficio.firgfi);
                    $cboCostoPlan.val(EntidadPlanBeneficio.gdcpln);
                    $chkLatencia.prop('checked', EntidadPlanBeneficio.fltnca == "1");
                    $txtCantidadMesesLa.prop("disabled", !(EntidadPlanBeneficio.fltnca == "1"));
                    $txtCantidadMesesLa.prop("readonly", !(EntidadPlanBeneficio.fltnca == "1"));
                    $txtCantidadMesesLa.val(EntidadPlanBeneficio.tltnca);
                    $chkCarencia.prop('checked', EntidadPlanBeneficio.gdcrnca == "1");
                    $txtCantidadMesesCa.prop("disabled", !(EntidadPlanBeneficio.gdcrnca == "1"));
                    $txtCantidadMesesCa.prop("readonly", !(EntidadPlanBeneficio.gdcrnca == "1"));
                    $txtCantidadMesesCa.val(EntidadPlanBeneficio.tcrnca);
                    $chkCoberturaxEdad.prop('checked', EntidadPlanBeneficio.fcesrvco == "1");
                    $txtCantidadAñosHombre.prop("disabled", !(EntidadPlanBeneficio.fcesrvco == "1"));
                    $txtCantidadAñosMujer.prop("disabled", !(EntidadPlanBeneficio.fcesrvco == "1"));
                    $txtCantidadAñosHombre.prop("readonly", !(EntidadPlanBeneficio.fcesrvco == "1"));
                    $txtCantidadAñosMujer.prop("readonly", !(EntidadPlanBeneficio.fcesrvco == "1"));
                    $txtCantidadAñosHombre.val(EntidadPlanBeneficio.ahmbre);
                    $txtCantidadAñosMujer.val(EntidadPlanBeneficio.amjr);
                    $cboParentesco.val(EntidadPlanBeneficio.gdtprsnl);
                    $cboEstdoTitular.val(EntidadPlanBeneficio.gdettlr);
                    $cboInvalidez.val(EntidadPlanBeneficio.gdtafccn);
                    $chkActividad1.attr("checked", EntidadPlanBeneficio.asrvco == "1")
                    $chkActividad2.attr("checked", EntidadPlanBeneficio.asrvco == "2");
                    $chkLimEdad1.attr("checked", EntidadPlanBeneficio.ledd == "1")
                    $chkLimEdad2.attr("checked", EntidadPlanBeneficio.ledd == "2");
                    $frm_PlanBeneficio.AgregarCamposAuditoria(EntidadPlanBeneficio);
                    configDTVersionPB.reload();
                    configDTDiagnosticoExcl.reload();
                    configDTBeneficioPB.reload();
                    configDTCopago.reload();
                })
                .fail().always(function () {
                    //$frm_PlanBeneficio.find(":input").attr("disabled", false);
                    $frm_PlanBeneficio.DeshabilitarCamposAuditoria();
                });
        },
        actualizarPlanBeneficio: function () {
            if ($frm_PlanBeneficio.valid()) {
                EntidadPlanBeneficio = new Object();
                EntidadPlanBeneficio.id = $txtNumeroPlanBeneficio.val();
                EntidadPlanBeneficio.dscrpcn = $txtDescripcionPB.val();
                EntidadPlanBeneficio.fmnda1 = $cboMonedaPlan.val();
                EntidadPlanBeneficio.fmnda2 = $cboMonedaPrima.val();
                EntidadPlanBeneficio.fpigv = $cboPrimaIGV.val();
                EntidadPlanBeneficio.gdpintrno = $cboProductoInterno.val();
                EntidadPlanBeneficio.gdtpsld = $cboTipoPlan.val();
                EntidadPlanBeneficio.gdtrgmn = $cboTipoRegimen.val();
                EntidadPlanBeneficio.firgfi = $cboIndRegafi.val();
                EntidadPlanBeneficio.gdcpln = $cboCostoPlan.val();
                EntidadPlanBeneficio.fltnca = $chkLatencia.is(":checked") ? "1" : "2";
                EntidadPlanBeneficio.tltnca = $txtCantidadMesesLa.val();
                EntidadPlanBeneficio.gdcrnca = $chkCarencia.is(":checked") ? "1" : "2";
                EntidadPlanBeneficio.tcrnca = $txtCantidadMesesCa.val();
                EntidadPlanBeneficio.fcesrvco = $chkCoberturaxEdad.is(":checked") ? "1" : "2";
                EntidadPlanBeneficio.ahmbre = $txtCantidadAñosHombre.val();
                EntidadPlanBeneficio.amjr = $txtCantidadAñosMujer.val();
                EntidadPlanBeneficio.gdtprsnl = $cboParentesco.val();
                EntidadPlanBeneficio.gdettlr = $cboEstdoTitular.val();
                EntidadPlanBeneficio.gdtafccn = $cboInvalidez.val();
                EntidadPlanBeneficio.asrvco = funcionesPlanBeneficio.ValorRadio($chkActividad,$chkActividad1,$chkActividad2);
                EntidadPlanBeneficio.ledd = funcionesPlanBeneficio.ValorRadio($chkLimEdad,$chkLimEdad1,$chkLimEdad2)
                EntidadPlanBeneficio.gdestdo = $frm_PlanBeneficio.find("[name='GDESTDO']").val();
                $.post("../PlanBeneficio/actualizar", EntidadPlanBeneficio)
                    .done(function () {
                        Swal.fire(configPlugins.ac)
                            .then((result) => {
                                funcionesPlanBeneficio.obtenerPlanBeneficio($txtNumeroPlanBeneficio.val());
                                configDTPlanBeneficio.reload();
                                configDTVersionPB.reload();
                                configDTDiagnosticoExcl.reload();
                                configDTBeneficioPB.reload();
                                configDTCopago.reload();
                            });
                    })
                    .fail(function (e) {
                        Swal.fire({
                            icon: "error",
                            title: "Error al modificar los datos.",
                            text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                            confirmButtonText: "Aceptar"
                        });

                    });
            }
        },
        eliminarPlanBeneficio: function (codigo) {
            vplanbeneficio = { id: codigo };
            Swal.fire(configPlugins.el)
                .then(function (result) {
                    if (result.value) {
                        $.post("../PlanBeneficio/eliminar", vplanbeneficio)
                            .done(function (data) {
                                Swal.fire(configPlugins.ac)
                                    .then((result) => {
                                        configDTPlanBeneficio.reload();
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
        ValorRadio: function (obj,obj1,obj2) {
            var retorno = "";
            if (obj.is(":checked")) {
                if (obj1.is(":checked")) {
                    retorno = obj1.val()
                }
                if (obj2.is(":checked")) {
                    retorno = obj2.val()
                }
            }
            return retorno;
        }
    }
    var funcionesVersionPB = {
        nuevo: function () {
            configFormVersionPB.eventos.reset();
            $frmVersionPB.trigger("reset");
        },
        insertarVersionPB: function () {
            if ($frmVersionPB.valid()) {
                $frmVersionPB.find("[type='button']").attr("disabled", true);
                $btnGrVersionPB.attr("disabled", true);
                $hfNumPlanBeneficio.val($txtNumeroPlanBeneficio.val());

                EntidadVersionPB = new Object();
                EntidadVersionPB.idpbnfco = $hfNumPlanBeneficio.val();
                EntidadVersionPB.nvrsn = $hfnumversionPB.val();
                EntidadVersionPB.cgfmlr = $txtCostoFamiliar.val();
                EntidadVersionPB.fivgnca = $txtFIniVigencia.val();
                EntidadVersionPB.ffvgnca = $txtFFinVigencia.val();
                EntidadVersionPB.gdlavpln = $cboLimiteAnual.val();
                EntidadVersionPB.mlavpln = $txtMontoLimite.val();
                EntidadVersionPB.gdfrclmo = $cboFormaReclamo.val();
                EntidadVersionPB.gdestdo = $frmVersionPB.find("[name='GDESTDO']").val();

                $.post("../PlanBeneficio/insertar-version", EntidadVersionPB)
                    .done(function (idVersion) {
                        Swal.fire(configPlugins.in)
                            .then((result) => {
                            $hfIdversionPB.val(idVersion);
                            configDTVersionPB.reload();
                            configDTDiagnosticoExcl.reload(); //14.05
                            $btnGrVersionPB.attr("disabled", false);
                            $mdlVersionPB.modal("hide");//
                        });
                    }).fail(function (e) {
                        Swal.fire({
                            icon: "error",
                            title: "error al guardar los datos.",
                            text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                            confimButtonText: "Aceptar"
                        });
                    });
                //.always(function () {
                //    configDTContratoProveedor.reload();
                //});
            }

        },
        actualizarVersionPB: function () {
            if ($frmVersionPB.valid()) {
                $btnGrVersionPB.attr("disabled", true);

                EntidadVersionPB.id = $hfIdversionPB.val();
                EntidadVersionPB.idpbnfco = $txtNumeroPlanBeneficio.val();
                EntidadVersionPB.cgfmlr = $txtCostoFamiliar.val();
                EntidadVersionPB.fivgnca = $txtFIniVigencia.val();
                EntidadVersionPB.ffvgnca = $txtFFinVigencia.val();
                EntidadVersionPB.gdlavpln = $cboLimiteAnual.val();
                EntidadVersionPB.mlavpln = $txtMontoLimite.val();
                EntidadVersionPB.gdfrclmo = $cboFormaReclamo.val();
                EntidadVersionPB.gdestdo = $frmVersionPB.find("[name='GDESTDO']").val();

                $.post("../PlanBeneficio/actualizar-version", EntidadVersionPB).done(function () {
                    Swal.fire(configPlugins.ac)
                        .then((result) => {
                        configDTVersionPB.reload();
                        configDTDiagnosticoExcl.reload();
                        $btnGrVersionPB.attr("disabled", false);
                        $mdlVersionPB.modal("hide");
                    });
                }).fail(function (e) {
                    Swal.fire({
                        icon: "error",
                        title: "Error al modificar los datos.",
                        text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                        confirmButtonText: "Aceptar"
                    });

                });

            }

        },
        obtenerVersionPB: function (codigo) {
            vversionPB = { id: codigo, idpbnfco: $txtNumeroPlanBeneficio.val() };
            $.get("../PlanBeneficio/obtener-version", vversionPB)
                .done(function (data) {
                    EntidadVersionPB = data;

                    $hfIdversionPB.val(EntidadVersionPB.id);
                    $hfNumPlanBeneficio.val(EntidadVersionPB.idpbnfco);
                    $txtNVersionPB.val(EntidadVersionPB.nvrsn);
                    $txtCostoFamiliar.val(EntidadVersionPB.cgfmlr);
                    $txtFIniVigencia.val(EntidadVersionPB.fivgnca);
                    $txtFFinVigencia.val(EntidadVersionPB.ffvgnca);
                    $cboLimiteAnual.val(EntidadVersionPB.gdlavpln);
                      if ($cboLimiteAnual.val() == "2") {
                            $txtMontoLimite.prop("disabled", false);
                        } else {
                            $txtMontoLimite.prop("disabled", true);
                        }
                    
                    $txtMontoLimite.val(EntidadVersionPB.mlavpln);
                    $cboFormaReclamo.val(EntidadVersionPB.gdfrclmo);
                    $frmVersionPB.AgregarCamposAuditoria(EntidadVersionPB);
                    
                })
                .fail().always(function () {
                    //  $frm_ContratoProveedor.find(":input").attr("disabled", false);
                    $frmVersionPB.DeshabilitarCamposAuditoria();
                });

        },
        eliminarVersionPB: function (codigo) {
            vVersionPB = { id: codigo };
            Swal.fire(configPlugins.el).then(function (result) {
                if (result.value) {
                    $.post("../PlanBeneficio/eliminar-version", vVersionPB)
                        .done(function (data) {
                            Swal.fire(configPlugins.ac)
                                .then((result) => {
                                configDTVersionPB.reload();
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
        validaCostoPlan: function () {
            console.log($cboCostoPlan.val() == "3");
            return $cboCostoPlan.val() == "3"
        },
        validaTabEtario: function () {
            if (this.validaCostoPlan()) {
                $costoEtario_tab.addClass("d-none");
            } else {
                $costoEtario_tab.removeClass("d-none");
            }
        }
    }
    var funcionesDiagnostico = {
        insertarDiagnostico: function () {
            objDiagnostico = new Object();
            
            objDiagnostico.idpbnfco = $hfNumPlanBeneficio.val();
            objDiagnostico.iddgnstco = '';
            objDiagnostico.ftbtds = configDTDiagnostico.swCheckedAll ? 1 : 0;
            objDiagnostico.idbasgnds = configDTDiagnostico.asignados;
            objDiagnostico.idbnoasgnds = configDTDiagnostico.noAsignados;

            $.post("../PlanBeneficio/insertar-diagnosticoExcl", objDiagnostico)
                .done(function (idDiagnostico) {
                  Swal.fire(configPlugins.in).then((result) => {
                        $hfIdDiagnosticoExcl.val(idDiagnostico);
                        configDTDiagnosticoExcl.reload();
                        $mdlDiagnostico.modal("hide");
                    });
                })
                .fail(function (e) {
                    Swal.fire({
                        icon: "error",
                        title: "error al guardar los datos.",
                        text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                        confimButtonText: "Aceptar"
                    });
                });
        },
        actualizarDiagnostico: function () {
        },
        eliminar: function (id) {
            var p = { id: id };
            Swal.fire(configPlugins.el).then(function (r) {           
                if (r.value) {
                    $.post("PlanBeneficio/eliminar-diagnosticoExcl", p)
                        .done(function () {
                            Swal.fire(configPlugins.ac).then(() => {
                            
                                configDTDiagnosticoExcl.reload();
                            });
                        })
                        .fail(function (e) {
                            Swal.fire({
                                icon: "error",
                                title: "Error al actualizar el registro.",
                                text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                                confirmButtonText: "Aceptar"
                            });
                        });
                }
            })
        }
    }
    var funcionesBeneficios = {
        nuevo: function () {
            $hfactionNuevoBeneficioPB.val("N");
            $btnNuBeneficio.addClass("d-none");
            $btnGuBeneficio.removeClass("d-none");
            $btnCanBeneficio.removeClass("d-none");
            $btnmdlCodBeneficio.attr("disabled", false);
            $cboIndBenefAdicional.attr("disabled", false);
            $txtAportRequeridas.attr("disabled", false);
            $txtLimAnualxPersona.attr("disabled", false);
            $txtConfigCarencia.attr("disabled", false);
            $txtConfigCobertura.attr("disabled", false);
            $cboParentescobeneficio.attr("disabled", false);
            $cboGastoIBeneficio.attr("disabled", false);
            $txtObservacion.attr("disabled", false);
            $stdoEstadoBeneficio.attr("disabled", false);
            $cboParentescobeneficio.val("1");
            $cboGastoIBeneficio.val("1");
        },
        guardar: function () {
            if ($frm_BeneficioPB.valid()) {
                if ($hfactionNuevoBeneficioPB.val() == "N") {
                    funcionesBeneficios.insertar();
                } else {
                    funcionesBeneficios.actualizar();
                }
            }
        },
        insertar: function () {
            EntidadBeneficio = new Object();

            EntidadBeneficio.id = $hfIdBeneficiosPB.val();
            EntidadBeneficio.idvrsn = $hfIdversionPB.val();
            EntidadBeneficio.idbnfco = $hfIDBenef.val();
            EntidadBeneficio.fbadcnl = $cboIndBenefAdicional.val();
            EntidadBeneficio.naprts = $txtAportRequeridas.val();
            EntidadBeneficio.laprsna = $txtLimAnualxPersona.val();
            EntidadBeneficio.nmcrnca = $txtConfigCarencia.val();
            EntidadBeneficio.elcbrtra = $txtConfigCobertura.val();
            EntidadBeneficio.gdpbnfcio = $cboParentescobeneficio.val();
            EntidadBeneficio.gdgbnfcio = $cboGastoIBeneficio.val();
            EntidadBeneficio.obsrvcn = $txtObservacion.val();
            EntidadBeneficio.gdestdo = $stdoEstadoBeneficio.val();
            $.post("../PlanBeneficio/insertar-BeneficioPB", EntidadBeneficio)
                .done(function (idBeneficioPB) {
                    Swal.fire(configPlugins.in)
                        .then((result) => {
                        $hfIdBeneficiosPB.val(idBeneficioPB);
                        configDTBeneficioPB.reload();
                        configFormBeneficioPB.inicio();
                            Swal.fire({
                                title: "¿Desea configurar los copago de la versión??",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonText: "Aceptar",
                                cancelButtonText: "Cancelar",
                                customClass: {
                                    confirmButton: 'btn btn-primary mr-2',
                                    cancelButton: 'btn btn-secondary'
                                },
                                buttonsStyling: false
                        }).then(function (result) {
                            if (result.value) {
                                $copago_tab.removeClass("disabled");
                                $costoEtario_tab.removeClass("disabled");
                                $copago_tab.click();
                            }
                        });
                    });
                })
                .fail(function (e) {
                    Swal.fire({
                        icon: "warning",
                        title: "Error al insertar el registro.",
                        text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                        confirmButtonText: "Aceptar"
                    });
                })
                .always(function () {
                    configFormBeneficioPB.inicio();
                });
        },
        actualizar: function () {
            EntidadBeneficio = new Object();

            EntidadBeneficio.id = $hfIdBeneficiosPB.val();
            EntidadBeneficio.idvrsn = $hfIdversionPB.val();
            EntidadBeneficio.idbnfco = $hfIDBenef.val();
            EntidadBeneficio.fbadcnl = $cboIndBenefAdicional.val();
            EntidadBeneficio.naprts = $txtAportRequeridas.val();
            EntidadBeneficio.laprsna = $txtLimAnualxPersona.val();
            EntidadBeneficio.nmcrnca = $txtConfigCarencia.val();
            EntidadBeneficio.elcbrtra = $txtConfigCobertura.val();
            EntidadBeneficio.gdpbnfcio = $cboParentescobeneficio.val();
            EntidadBeneficio.gdgbnfcio = $cboGastoIBeneficio.val();
            EntidadBeneficio.obsrvcn = $txtObservacion.val();
            EntidadBeneficio.gdestdo = $stdoEstadoBeneficio.val();

            $.post("../PlanBeneficio/actualizar-BeneficioPB", EntidadBeneficio)
                .done(function () {
                    Swal.fire(configPlugins.ac)
                        .then((result) => {
                        configDTBeneficioPB.reload();
                        configFormBeneficioPB.inicio();
                    });
                })
                .always(function () {
                    //bloquear los controles
                });

        },
        eliminar: function (codigo) {
            parametro = { id: codigo };
            Swal.fire(configPlugins.el)
                .then(function (result) {
                if (result.value) {
                    $.post("../PlanBeneficio/eliminar-BeneficioPB", parametro)
                        .done(function (data) {
                            Swal.fire(configPlugins.ac)
                                .then((result) => {
                                configDTBeneficioPB.reload();
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
        editar: function (data) {
            $hfactionNuevoBeneficioPB.val("E");

            $hfIdBeneficiosPB.val(data.id);
            $cboIndBenefAdicional.val(data.fbadcnl);
            $txtAportRequeridas.val(data.naprts);
            $hfIDBenef.val(data.idbnfco);
            $txtIdBeneficio.val(data.idbnfco);
            $hfNombreBenef.val(data.dscrpcn);
            $txtBeneficio.val(data.dscrpcn);
            $txtLimAnualxPersona.val(data.laprsna);
            $txtConfigCarencia.val(data.nmcrnca);
            $txtConfigCobertura.val(data.elcbrtra);
            $txtObservacion.val(data.obsrvcn);
            $cboParentescobeneficio.val(data.gdpbnfcio);
            $cboGastoIBeneficio.val(data.gdgbnfcio);

            $btnNuBeneficio.addClass("d-none");
            $btnCanBeneficio.removeClass("d-none");
            $btnGuBeneficio.removeClass("d-none");

            $cboIndBenefAdicional.attr("disabled", false);
            $txtAportRequeridas.attr("disabled", false);
            $txtLimAnualxPersona.attr("disabled", false);
            $txtConfigCarencia.attr("disabled", false);
            $txtConfigCobertura.attr("disabled", false);
            $txtObservacion.attr("disabled", false);
            $cboParentescobeneficio.attr("disabled", false);
            $cboGastoIBeneficio.attr("disabled", false);
            $btnmdlCodBeneficio.attr("disabled", false);
            $stdoEstadoBeneficio.attr("disabled", false);
            $frm_BeneficioPB.AgregarCamposAuditoria(data);
        },
    }
    var funcionesCopago = {
        nuevo: function () {
            $txtSolesMontoDG.attr("disabled", true);
            $txtDolaresMontoDG.attr("disabled", true);
            $txtSolesMontoDE.attr("disabled", true);
            $txtDolaresMontoDE.attr("disabled", true);
        },
        insertar: function () {
            if ($frmCopago.valid()) {
                $frmCopago.find("[type='button']").attr("disabled", true);

                EntidadCopago = new Object();

                EntidadCopago.idbnfco = $hfIdBeneficiosPB.val();
                EntidadCopago.fddcble = $cboDeducible.val();
                EntidadCopago.fmdgnrl = $cboSolesDolaresDG.val();
                EntidadCopago.msdgnrl = $txtSolesMontoDG.val();
                EntidadCopago.mddgnrl = $txtDolaresMontoDG.val();
                EntidadCopago.fmdespcl = $cboSolesDolaresDE.val();
                EntidadCopago.msdespcl = $txtSolesMontoDE.val();
                EntidadCopago.mddespcl = $txtDolaresMontoDE.val();
                EntidadCopago.pcbrtra = $txtPorcentajeCobertura.val();
                EntidadCopago.gdestdo = $frmCopago.find("[name='GDESTDO']").val();
                EntidadCopago.gdtprsnl = $cboParentescoCopago.val();
                $.post("../PlanBeneficio/insertar-copago", EntidadCopago)
                    .done(function (idCopago) {
                        Swal.fire(configPlugins.in)
                            .then((result) => {
                            $hfIDCopago.val(idCopago);
                            configDTCopago.reload();
                            $mdlCopago.modal("hide");
                        });
                    }).fail(function (e) {
                        Swal.fire({
                            icon: "error",
                            title: "error al guardar los datos.",
                            text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                            confimButtonText: "Aceptar"
                        });
                    });
                //.always(function () {
                //    configDTContratoProveedor.reload();
                //});
            }

        },
        actualizar: function () {
            if ($frmCopago.valid()) {

                EntidadCopago.id = $hfIDCopago.val();
                EntidadCopago.idbnfco = $hfIdBeneficiosPB.val();
                EntidadCopago.fddcble = $cboDeducible.val();
                EntidadCopago.fmdgnrl = $cboSolesDolaresDG.val();
                EntidadCopago.msdgnrl = $txtSolesMontoDG.val();
                EntidadCopago.mddgnrl = $txtDolaresMontoDG.val();
                EntidadCopago.fmdespcl = $cboSolesDolaresDE.val();
                EntidadCopago.msdespcl = $txtSolesMontoDE.val();
                EntidadCopago.mddespcl = $txtDolaresMontoDE.val();
                EntidadCopago.pcbrtra = $txtPorcentajeCobertura.val();
                EntidadCopago.gdestdo = $frmCopago.find("[name='GDESTDO']").val();
                EntidadCopago.gdtprsnl = $cboParentescoCopago.val();

                $.post("../PlanBeneficio/actualizar-copago", EntidadCopago).done(function () {
                    Swal.fire(configPlugins.ac)
                        .then((result) => {

                        configDTCopago.reload();
                        $mdlCopago.modal("hide");
                    });
                }).fail(function (e) {
                    Swal.fire({
                        icon: "error",
                        title: "Error al modificar los datos.",
                        text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                        confirmButtonText: "Aceptar"
                    });

                });

            }

        },
        obtener: function (codigo) {
            Obtcopago = { id: codigo, idbnfco: $hfIdBeneficiosPB.val() };

            $.get("../PlanBeneficio/obtener-copago", Obtcopago)
                .done(function (data) {
                    EntidadCopago = data;

                    $hfIDCopago.val(EntidadCopago.id);
                    $txtCodigoCopago.val($hfIDCopago.val());
                    $hfIdBeneficiosPB.val(EntidadCopago.idbnfco);
                    $cboDeducible.val(EntidadCopago.fddcble);
                    $cboSolesDolaresDG.val(EntidadCopago.fmdgnrl);
                    if ($cboSolesDolaresDG.val() == "1") {
                        $txtSolesMontoDG.attr("disabled", false);
                        $txtDolaresMontoDG.attr("disabled", true);
                    } else {
                        $txtSolesMontoDG.attr("disabled", true);
                        $txtDolaresMontoDG.attr("disabled", false);
                    }
                    $txtSolesMontoDG.val(EntidadCopago.msdgnrl);
                    $txtDolaresMontoDG.val(EntidadCopago.mddgnrl);
                    $cboSolesDolaresDE.val(EntidadCopago.fmdespcl);
                    if ($cboSolesDolaresDE.val() == "1") {
                        $txtSolesMontoDE.attr("disabled", false);
                        $txtDolaresMontoDE.attr("disabled", true);
                    } else {
                        $txtSolesMontoDE.attr("disabled", true);
                        $txtDolaresMontoDE.attr("disabled", false);
                    }
                    $txtSolesMontoDE.val(EntidadCopago.msdespcl);
                    $txtDolaresMontoDE.val(EntidadCopago.mddespcl);
                    $txtPorcentajeCobertura.val(EntidadCopago.pcbrtra);
                    $cboParentescoCopago.val(EntidadCopago.gdtprsnl);

                    $frmCopago.AgregarCamposAuditoria(EntidadCopago);

                })
                .fail().always(function () {
                    //  $frm_ContratoProveedor.find(":input").attr("disabled", false);
                    $frmCopago.DeshabilitarCamposAuditoria();
                });

        },
        eliminar: function (codigo) {
            copago = { id: codigo };
            Swal.fire(configPlugins.el)
                .then(function (result) {
                if (result.value) {
                    $.post("../PlanBeneficio/eliminar-copago", copago)
                        .done(function (data) {
                            Swal.fire(configPlugins.ac).then((result) => {
                                configDTCopago.reload();
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
        SolesDolares: function () {
            var id = $cboSolesDolaresDG.val();
            if (id == 1) {
                $txtSolesMontoDG.attr("disabled", false);
                $txtDolaresMontoDG.attr("disabled", true);
                $txtDolaresMontoDG.val('');
            }
            if (id == 2) {
                $txtSolesMontoDG.attr("disabled", true);
                $txtDolaresMontoDG.attr("disabled", false);
                $txtSolesMontoDG.val('');
            }
        },
        SolesDolares2: function () {
            var id = $cboSolesDolaresDE.val();
            if (id == 1) {
                $txtSolesMontoDE.attr("disabled", false);
                $txtDolaresMontoDE.attr("disabled", true);
                $txtDolaresMontoDE.val('');
            }
            if (id == 2) {
                $txtSolesMontoDE.attr("disabled", true);
                $txtDolaresMontoDE.attr("disabled", false);
                $txtSolesMontoDE.val('');
            }
        },
    }
    var fnCostoEtario = {
        nuevo: function () {
            $titleCostoEtario.text("Nuevo Costo")
            $hfactionCEtario.val("N");
            configFrmCostoEtario.validacion.reset();
            $frmCostoEtario.trigger("reset");
        },
        insertar: function () {
            objCEtario = new Object();
            objCEtario.id = $hfIdCostoEtario.val();
            objCEtario.idvrsn = $hfIdversionPB.val();
            objCEtario.gnro = $cboSexoCostoEtario.val();
            objCEtario.elmte = $txtEdadLimite.val();
            objCEtario.maafldo = $txtAfiliado.val();
            objCEtario.maemprsa = $txtEmpresa.val();
            objCEtario.total = $txtTotal.val();
            objCEtario.gdestdo = $estdoCEtario.val();
            $.post("/PlanBeneficio/insertarCEtario", objCEtario)
                .done(function (idCostoEtario) {
                   Swal.fire(configPlugins.in).then(function (r) {
                    
                        $hfIdCostoEtario.val(idCostoEtario);
                        $mdlCostoEtario.modal('hide');
                        configDTCostoEtario.reload();
                    });
                })
                .fail(function (e) {
                    Swal.fire({
                        icon: "error",
                        title: "Error al insertar el registro.",
                        text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                        confirmButtonText: "Aceptar"
                    });
                });
        },
        actualizar: function () {
            objCEtario = new Object();
            objCEtario.id = $hfIdCostoEtario.val();
            objCEtario.idvrsn = $hfIdversionPB.val();
            objCEtario.gnro = $cboSexoCostoEtario.val();
            objCEtario.elmte = $txtEdadLimite.val();
            objCEtario.maafldo = $txtAfiliado.val();
            objCEtario.maemprsa = $txtEmpresa.val();
            objCEtario.total = $txtTotal.val();
            objCEtario.gdestdo = $estdoCEtario.val();
            $.post("/PlanBeneficio/actualizarCEtario", objCEtario)
                .done(function () {
                  Swal.fire(configPlugins.ac).then(function (r) {
                  
                        $mdlCostoEtario.modal('hide');
                        configDTCostoEtario.reload();
                    });
                })
                .fail(function (e) {
                    Swal.fire({
                        icon: "error",
                        title: "Error al insertar el registro.",
                        text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                        confirmButtonText: "Aceptar"
                    });
                });
        },
        guardar: function () {
            if ($frmCostoEtario.valid()) {
                if ($hfactionCEtario.val() == "N") {
                    fnCostoEtario.insertar();
                } else {
                    fnCostoEtario.actualizar();
                }
            }
        },
        obtener: function (id) {
            $titleCostoEtario.text("Editar Costo")
            var p = { id: id };
            $.get("/PlanBeneficio/obtenerCEtario", p)
                .done(function (data) {
                    objCEtario = new Object();
                    objCEtario = data;
                    $hfIdCostoEtario.val(objCEtario.id);
                    $txtCostoEtario.val(objCEtario.id);
                    $cboSexoCostoEtario.val(objCEtario.gnro);
                    $txtEdadLimite.val(objCEtario.elmte);
                    $txtAfiliado.val(objCEtario.maafldo);
                    $txtEmpresa.val(objCEtario.maemprsa);
                    $txtTotal.val(objCEtario.total);
                    $frmCostoEtario.AgregarCamposAuditoria(objCEtario);
                })
                .fail(function (e) {
                    Swal.fire({
                        icon: "error",
                        title: "Error al insertar el registro.",
                        text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                        confirmButtonText: "Aceptar"
                    });
                });
        },
        eliminar: function (id) {
            objCEtario = new Object();
            objCEtario.id = id;
           Swal.fire(configPlugins.el).then(function (r) {
           
                if (r.value) {
                    $.post("PlanBeneficio/eliminarCEtario", objCEtario)
                        .done(function () {
                            Swal.fire(configPlugins.ac).then(() => {
                           
                                configDTCostoEtario.reload();
                            });
                        })
                        .fail(function (e) {
                            Swal.fire({
                                icon: "error",
                                title: "Error al actualizar el registro.",
                                text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                                confirmButtonText: "Aceptar"
                            });
                        });
                }
            })
        },
        Total: function () {
            var a = isNaN(parseFloat($txtAfiliado.val())) ? 0 : parseFloat($txtAfiliado.val());
            var b = isNaN(parseFloat($txtEmpresa.val())) ? 0 : parseFloat($txtEmpresa.val());
            var c = a + b;
            $txtTotal.val(parseFloat(c).toFixed(2));
        }
    }
    var fnRedCopago = {
        insertar: function () {
            objRedCopago = new Object();
            //objRedCopago.id = $hfIdDiagnosticoExcl.val();
            objRedCopago.idcpgo = $hfIDCopago.val();
            objRedCopago.ftbtds = configDTRedes.swCheckedAll ? 1 : 0;
            objRedCopago.idasgnds = configDTRedes.asignados;
            objRedCopago.idnoasgnds = configDTRedes.noAsignados;
            $.post("/PlanBeneficio/insertarRedCopago", objRedCopago)
                .done(function (idDiagnostico) {
                    Swal.fire(configPlugins.in).then((result) => {
                        configDTRedCopago.reload();
                        $mdlRedes.modal("hide");
                    });
                })
                .fail(function (e) {
                    Swal.fire({
                        icon: "error",
                        title: "error al guardar los datos.",
                        text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                        confimButtonText: "Aceptar"
                    });
                });
        },
        eliminar: function (id) {
            var p = { id: id };
           Swal.fire(configPlugins.el).then(function (r) {
           
            if (r.value) {
                    $.post("PlanBeneficio/eliminarRedCopago", p)
                        .done(function () {
                            Swal.fire(configPlugins.ac).then(() => {

                            configDTRedCopago.reload();
                            });
                        })
                        .fail(function (e) {
                            Swal.fire({
                                icon: "error",
                                title: "Error al actualizar el registro.",
                                text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                                confirmButtonText: "Aceptar"
                            });
                        });
                }
            })
        },
    }
    //#endregion
    //#region Modales
    var configModalDiagnosticos = {
        eventos: {
            onHide: function () {
                $mdlBuscarBeneficio.on("hidden.bs.modal", function () {
                    configModalDiagnosticos.eventos.reset();
                })
            },
            reset: function () {
                configDTDiagnostico.func.init();
            }
        },
        init: function () {
            configModalDiagnosticos.eventos.onHide();
        }
    }
    //#endregion
    //#region Eventos Plan Beneficio
    var eventosIncrustados = {
        Version: {
            botonNuevaVersionPB: function () {
                $btnNuevoVersionPB.click(function () {
                    $hfactionNuevaVersionPB.val("N");
                    funcionesVersionPB.nuevo();
                    configFormVersionPB.inicio();
                });
            },
            botonGuardarVersionPB: function () {
                $btnGrVersionPB.click(function () {

                    if ($hfactionNuevaVersionPB.val() == "N") {
                        funcionesVersionPB.insertarVersionPB();

                    } else {
                        funcionesVersionPB.actualizarVersionPB();
                    }
                });
            },

            init: function () {
                this.botonGuardarVersionPB();
                this.botonNuevaVersionPB();
            }
        },

        lista_tab: function () {
            $Lista_tab.click(function () {
                configFormPlanbeneficio.inicioIndex();
                $hfNumPlanBeneficio.val("");
                $hfIdversionPB.val("");
                $hfIDBenef.val("");
                $hfIdBeneficiosPB.val("");
                $hfIDCopago.val("");

            });
        },
        datos_tab: function () {
            $Datos_tab.click(function () {
                $Configuracion_tab.addClass('disabled');
            });
        },
        BotonNuevoPlanBeneficio: function () {
            $btnNuevoPlanBeneficio.click(function () {
                $titlePlan.text("Nuevo Plan")
                funcionesPlanBeneficio.nuevo();
                configDTVersionPB.reload();
            });

        },
        BotonGrabarPlanBeneficio: function () {
            $btnGrPlanBeneficio.click(function () {
                if ($hfactionPlanBeneficio.val() == "N") {
                    funcionesPlanBeneficio.insertarPlanBeneficio();

                    $hfactionPlanBeneficio.val("");

                } else {
                    funcionesPlanBeneficio.actualizarPlanBeneficio();
                }
            });
        },
        //EventosVersión
      /*  botonNuevaVersionPB: function () {
            $btnNuevoVersionPB.click(function () {
                $hfactionNuevaVersionPB.val("N");
                funcionesVersionPB.nuevo();
                configFormVersionPB.inicio();
            });
        },
        botonGuardarVersionPB: function () {
            $btnGrVersionPB.click(function () {
                if ($hfactionNuevaVersionPB.val() == "N") {
                    funcionesVersionPB.insertarVersionPB();

                } else {
                    funcionesVersionPB.actualizarVersionPB();
                }
            });
        },*/
        //EventosDiagnostico
        botonNuevoDiagnostico: function () {
            $btnNuevoDiagnostico.click(function () {
                $hfactionNuevoDiagnosticoExcl.val("N");
                configFormDiagnosticoExcl.inicio();
                configFormDiagnosticoExcl.eventos.reset();
            });
        },   
        //EventosBuscarBeneficios
        botonBuscarBeneficio: function () {
            $btnmdlCodBeneficio.click(function () {
                $modalTitulo1.text("Beneficio")
                $hfactionBeneficio.val("B");
            })
        },
        btnBuscarBeneficio: function () {
            $btnmdlCodBeneficio.click(function () {
                configDTBeneficio.reload();
            });
        },
        //eventosBeneficios
        configuracion: function () {
            $Configuracion_tab.click(function () {
                $copago_tab.addClass("disabled");
                //$costoEtario_tab.addClass("disabled"); //jose
                $listaBeneficios_tab.click();
            });
        },
        listaBeneficios: function () {
            $listaBeneficios_tab.click(function () {
                $copago_tab.addClass("disabled");
                //$costoEtario_tab.addClass("disabled"); //jose
                configFormBeneficioPB.init();
                configDTBeneficioPB.reload();
            });
        },
        //eventosBotonesBeneficios
        btnNuBeneficio: function () {
            $btnNuBeneficio.click(function () {
                funcionesBeneficios.nuevo();
            });
        },
        btnCanBeneficio: function () {
            $btnCanBeneficio.click(function () {
                configFormBeneficioPB.inicio();
            });
        },
        btnGuBeneficio: function () {
            $btnGuBeneficio.click(function () {
                if ($("#frmConfiguracionDet").valid()) {
                    funcionesBeneficios.guardar();
                }
            });
        },
        // jose ini
        cboLimitAnual: function () {
            $cboLimiteAnual.change(function () {
                if ($(this).val() == "2") {
                    $txtMontoLimite.prop("disabled", false);
                } else {
                    $txtMontoLimite.prop("disabled", true);
                }
                $txtMontoLimite.val("");

            })
        },
        PlanBeneficio: {
            chkLatencia: function () {
                $chkLatencia.change(function () {
                    var bool = $(this).is(":checked")
                    $txtCantidadMesesLa.prop("readonly", !bool);
                    $txtCantidadMesesLa.prop("disabled", !bool);
                    $txtCantidadMesesLa.val('');
                    configFormPlanbeneficio.eventos.reset();
                });
            },
            chkCarencia: function () {
                $chkCarencia.change(function () {
                    var bool = $(this).is(":checked")
                    $txtCantidadMesesCa.prop("readonly", !bool);
                    $txtCantidadMesesCa.prop("disabled", !bool);
                    $txtCantidadMesesCa.val('');
                    configFormPlanbeneficio.eventos.reset();
                });
            },
            chkCobertura: function () {
                $chkCoberturaxEdad.change(function () {
                    var bool = $(this).is(":checked")
                    $txtCantidadAñosHombre.prop("readonly", !bool);
                    $txtCantidadAñosMujer.prop("readonly", !bool);
                    $txtCantidadAñosHombre.prop("disabled", !bool);
                    $txtCantidadAñosMujer.prop("disabled", !bool);
                    $txtCantidadAñosHombre.val('');
                    $txtCantidadAñosMujer.val('');
                    configFormPlanbeneficio.eventos.reset();
                });
            },
            init: function () {
                this.chkLatencia();
                this.chkCarencia();
                this.chkCobertura();
            }
        },
        tabCostoEtario: function () {
            $costoEtario_tab.click(() => {
                $copago_tab.addClass("disabled");
                configDTCostoEtario.reload();
            });
        },
        CostoEtario: {
            btnNuCosto: function () {
                $btnNuCostoEtario.click(function () {
                    fnCostoEtario.nuevo();
                    configFrmCostoEtario.inicio();
                })
            },
            btnGuCosto: function () {
                $btnGuCostoEtario.click(function () {
                    fnCostoEtario.guardar();
                })
            },
            txtMontos: function () {
                $txtAfiliado.change(function () {
                    fnCostoEtario.Total();
                });
                $txtEmpresa.change(function () {
                    fnCostoEtario.Total();
                });
            },
            init: function () {
                this.btnNuCosto();
                this.btnGuCosto();
                this.txtMontos();
            }
        },
        Diagnostico: {
            btnNuevo: function () {
                $btnNuDiagnostico.click(function () {
                    configDTDiagnostico.func.init();
                    configDTDiagnostico.reload();
                });
            },
            btnGuardar: function () {
                $btnGrDiagnostico.click(function () {
                    funcionesDiagnostico.insertarDiagnostico();
                });
            },
            tabDiagEx: function () {
                $Diagnostico_tab.click(function () {
                    configDTDiagnosticoExcl.reload();
                });
            },
            init: function () {
                this.btnNuevo();
                this.btnGuardar();
                this.tabDiagEx();
            }

        },
        RedesCopago: {
            btnGuardar: function () {
                $btnGuRedes.click(function () {
                    fnRedCopago.insertar();
                });
            },
            init: function () {
                this.btnGuardar();
            }
        },
        //jose fin
        //EventosCopago
        btnNuCopago: function () {
            $btnNuCopago.click(function () {
                $hfactionCopago.val("N");
                funcionesCopago.nuevo();
                configFormCopago.inicio();
                configFormCopago.eventos.reset();
            });
        },
        btnGuCopago: function () {
            $btnGuCopago.click(function () {
                if ($hfactionCopago.val() == "N") {
                    funcionesCopago.insertar();
                } else {
                    funcionesCopago.actualizar();
                }
            });
        },
        cboSolesDolares: function () {
            $cboSolesDolaresDG.on("change", function () {
                funcionesCopago.SolesDolares();
            });
        },
        cboSolesDolares2: function () {
            $cboSolesDolaresDE.on("change", function () {
                funcionesCopago.SolesDolares2();
            });
        },

        init: function () {
            eventosIncrustados.lista_tab();
            eventosIncrustados.datos_tab();
            eventosIncrustados.BotonNuevoPlanBeneficio();
            eventosIncrustados.BotonGrabarPlanBeneficio();
           // eventosIncrustados.botonGuardarVersionPB();
           // eventosIncrustados.botonNuevaVersionPB();
            eventosIncrustados.Version.init();

            eventosIncrustados.botonNuevoDiagnostico();
           // eventosIncrustados.botonGuardarDiagnostico();
            eventosIncrustados.botonBuscarBeneficio();
            eventosIncrustados.btnBuscarBeneficio();
            eventosIncrustados.configuracion();
            eventosIncrustados.listaBeneficios();
            eventosIncrustados.btnNuBeneficio();
            eventosIncrustados.btnCanBeneficio();
            eventosIncrustados.btnGuBeneficio();
            eventosIncrustados.btnNuCopago();
            eventosIncrustados.btnGuCopago();
            eventosIncrustados.cboSolesDolares();
            eventosIncrustados.cboSolesDolares2();
            eventosIncrustados.tabCostoEtario(); 
            eventosIncrustados.CostoEtario.init();
            eventosIncrustados.Diagnostico.init();
            eventosIncrustados.RedesCopago.init();
            eventosIncrustados.PlanBeneficio.init();
            eventosIncrustados.cboLimitAnual();

        }
    }
    //#endregion
    //#region datepickers
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
        fechasVersion: function () {
            configDatePickers.opcRangoDesdeHasta.inputs = $('.dpRngVig');
            $rngFechasVIGENCIA.datepicker(configDatePickers.opcRangoDesdeHasta);
        },
        init: function () {
            configDatePickers.fechasVersion();
        }
    }
    //#endregion
    var IniEstados = {
        init: function () {
            $txtFIniVigencia.datepicker(configDatePickers.opcStandar);
            $txtFFinVigencia.datepicker(configDatePickers.opcStandar);
            $cboEstado.LlenarSelectEstados();
            $cboMonedaPlan.LlenarSelectGD("GDTMNDA");
            $cboMonedaPrima.LlenarSelectGD("GDTMNDA");
            $cboPrimaIGV.LlenarSelectGD("GDTDOPC");
            $cboIndRegafi.LlenarSelectGD("GDTDOPC");
            $cboProductoInterno.LlenarSelectGD("GDPRDTINTRNO");
            $cboTipoPlan.LlenarSelectGD("GDTPLNSLD");
            $cboTipoRegimen.LlenarSelectGD("GDTRGMN");
            $cboCostoPlan.LlenarSelectGD("GDCSTPLN");
            $cboLimiteAnual.LlenarSelectGD("GDLANUAL");
            $cboFormaReclamo.LlenarSelectGD("GDFRCLMO");
            $cboIndBenefAdicional.LlenarSelectGD("GDTDOPC");
            $cboParentescobeneficio.LlenarSelectGD("GDPBNFCIO");
            $cboGastoIBeneficio.LlenarSelectGD("GDGBNFCIO");
            $cboSexoCostoEtario.LlenarSelectGD("GNRO");//jose
            //$estdoCEtario.LlenarSelectEstados();//jose
            $cboSolesDolaresDG.LlenarSelectGD("GDTMNDA");
            $cboSolesDolaresDE.LlenarSelectGD("GDTMNDA");
            $cboDeducible.LlenarSelectGD("GDTDOPC");

            $cboParentesco.LlenarSelectGD("GDTPRSNL");
            $cboEstdoTitular.LlenarSelectGD("GDETTLR");
            $cboInvalidez.LlenarSelectGD("GDTAFCCN"); 

            $cboParentescoCopago.LlenarSelectGD("GDTPRSNL");
        }
    };
    return {
        init: function () {
            validacionControles.init();
            configDTPlanBeneficio.init();
            configFormPlanbeneficio.init();
            eventosIncrustados.init();
            configDatePickers.init();
            IniEstados.init();
        }
    };
}();
$(() => {
    InitPlanBeneficio.init();
})