const initProcedimiento = function () {
    //#region Procedimiento
    $btnNuevoProcedimiento = $("#btnNuevoProcedimiento");
    $txtBuscarProcedimiento = $("#txtBuscarProcedimiento");
    // $tabla_procedimiento = $("#tabla_procedimiento");
    $tblProcedimiento = $("#tabla_procedimiento");
    $mdlProcedimiento = $("#mdlProcedimiento"); //REVISAR
    $modalTitulo = $mdlProcedimiento.find(".modal-title");//REVISAR
    $frm_Procedimiento = $("#FormularioProcedimiento");
    $hfaction = $("#hfaction"); //REVISAR
    $btnGrabarProcedimiento = $("#btnGrabarProcedimiento");
    $hfCodProcedimiento = $("#hfProcedimiento");
    $hfCodigoProcedimiento = $("#hfCodigoProcedimiento");

    $tab_Lista = $("#Lista-tab");
    $tab_Procedimiento = $("#Procedimiento-tab");

    $txtCodigo = $("#txtCodigo");
    $txtDescripcion = $("#txtDescripcion");
    $txtAbreviatura = $("#txtAbreviatura");

    $txtTip = $("#txtTip");
    $cboGrupoProc = $(".select-grupo-listado");
    $cboSexo = $("#cboSexo");

    $cboMedicTratante = $("#cboMedicTratante");
    $cboBeneficio = $("#cboBeneficio");
    $cboPiezasDentales = $("#cboPiezasDentales");

    $cboEstado = $(".select-estados");

    $txtEdadLimite = $("#txtEdadLimite");
    $cboInterQuirur = $("#cboInterQuirur");
    $txtProcedRep = $("#txtProcedRep");

    $cboEqSusalud1 = $("#cboEqSusalud1");
    $cboEqSusalud2 = $("#cboEqSusalud2");
    $cboTarifario = $("#cboTarifario");
    $txtCSegus = $("#txtCSegus");
    $txtUSegus = $("#txtUSegus");
    $txtCNomenclador = $("#txtCNomenclador");
    $txtUNomenclador = $("#txtUNomenclador");
    $txtUnidad = $("#txtUnidad");

    //GRUPOPROCEDIMIENTO
    $hfIdProcedimiento = $("#hfIdProcedimiento");
    $txtCodProcedimiento = $("#txtCodProcedimiento");

    $hfIdGProcedimiento = $("#hfIdGProcedimiento"); //cread
    $txtGProcedimiento = $("#txtGProcedimiento");//cread
    $frm_GProcedimiento = $("#frm_GProcedimiento");
    $tabla_GProcedimiento = $("#tabla_GProcedimiento");
    $hfactionGProcedimiento = $("#hfGProcedimiento");
    $btnmdlGProcedimiento = $("#btnmdlGProcedimiento");
    $mdlBuscarGProcedimiento = $("#mdlBuscarGProcedimiento");
    $modalTitulo2 = $mdlBuscarGProcedimiento.find(".modal-title");

    //BENEFICIO
    $hfIdCodBeneficio = $("#hfIdCodBeneficio");
    $txtCodBeneficio = $("#txtCodBeneficio");

    $hfIdBeneficio = $("#hfIdBeneficio");
    $txtBeneficio = $("#txtBeneficio");
    $btnmdlBeneficio = $("#btnmdlBeneficio");
    $mdlBuscarBeneficio = $("#mdlBuscarBeneficio");

    $tabla_Beneficio = $("#tabla_Beneficio");
    $hfactionBeneficio = $("#hfBeneficio");
    $modalTitulo3 = $mdlBuscarBeneficio.find(".modal-title");

    //controles
    $accesoAgregarProcedimiento = $("#accesoAgregarProcedimiento");
    $accesoEditarProcedimiento = $("#accesoEditarProcedimiento");
    $accesoEliminarProcedimiento = $("#accesoEliminarProcedimiento");

    $dtnomenclador = $("#dtnomenclador");
    $mdlBuscarnomeclador = $("#mdlBuscarnomeclador");
    //entidadesBD
    var EntidadProcedimiento = {
        id: "",
        dscrpcn: "",
        abrvtra: "",
        tip: "",
        idgprcdmnto: "",
        gpdscrpcn: "",
        gdsxo: "",
        elcbrtra: "",
        idbnfco: "",
        fpdntls: "",
        fmtrtnte: "",
        fiqrrgca: "",
        prptble: "",
        gdessld1: "",
        gdessld2: "",
        gdttrfro: "",
        csgs: "",
        cnmcldr: "",
        usgs: "",
        unmcldr: "",
        undd: "",
        gpdscrpcn: "",
        bdscrpcn: "",
        gdestdo: "",
        festdo: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        festdo: "",
    }

    //BENEFICIO BD
    objBeneficio = {
        id: "",
        codbnfcio: "",
        dscrpcn: "",
        abrvtra: "",
        tip: "",
        gdtprstcn: "",
        gdtgprstcn: "",
        fdbnfco: "",
        tcstds: "",
        cstds: "",
        gdocbrtra: "",
        coditen: "",
        fbprncpl: "",
        gdbadcnl: "",
        fircgrntia: "",
        gdaseps: "",
        gnro: "",
        idgbnfco: "",
        gdintrnmto: "",
        fdaccdnte: "",
        gdestdo: "",
        ctpint:"",
        festdo: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: ""
    }

    // controles
    validacionControles = {
        init: function () {
            if ($accesoAgregarProcedimiento.val() == "False") {
                $btnNuevoProcedimiento.hide();

            }
        }
    };

    // confiGrilla
    configDTProcedimiento = {
        objecto: null,
        opciones: {
            filter: true,
            ajax: {
                datatype: "JSON",
                url: "/Procedimiento/listarProcedimiento",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    //data.p_sId = $txtCodigo.val();
                    data.gdttrfro = "";
                    data.idprvdr = "";
                }
            },
            columns: [

                {
                    title: "Id",
                    data: "id",
                    width: '4%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {

                    title: "Descripción",
                    data: "dscrpcn",
                    width: '20%',
                    orderable: false, className: "text-left"
                },
                {

                    title: "Grupo Procedimiento",
                    data: "gpdscrpcn",
                    width: '20%',
                    orderable: false, className: "text-left"
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
                    title: "Acciones",
                    data: null,
                    orderable: false,
                    width: '11%',
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        // if ($accesoEditarProcedimiento.val() == "True") {
                        tpm += '<button type="button" class="btn btn-info btn-xs btn-editar" data-id="' + data.id + '" title="Editar"><span><i class="la la-edit"></i></span></button>';
                        // }
                        // if ($accesoEliminarProcedimiento.val() == "True") {
                        tpm += ' <button title="Cambiar estado" data-id="' + data.id + '" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>';
                        //   }
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
                configDTProcedimiento.objecto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesProcedimiento.eliminarProcedimiento(id);
                })
            },
            editar: function () {
                configDTProcedimiento.objecto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");
                    $hfCodProcedimiento.val("E");
                    $tab_Procedimiento.removeClass("disabled");
                    $tab_Procedimiento.click();
                    funcionesProcedimiento.obtenerProcedimiento(id);
                    //funcionesProcedimiento.cboTarifarioProcedimiento();

                })
            },
            init: function () {
                configDTProcedimiento.eventos.eliminar();
                configDTProcedimiento.eventos.editar();
            }
        },
        reload: function () {
            configDTProcedimiento.objecto.ajax.reload();
        },
        init: function () {
            configDTProcedimiento.objecto = $tblProcedimiento.DataTable(configDTProcedimiento.opciones);
            configDTProcedimiento.eventos.init();
        }
    };

    //GrupoProcedimiento
    var configDTGrupoProcedimiento = {
        objeto: null,
        opciones: {
            ajax: {
                gatatype: "JSON",
                url: "../GrupoProcedimiento/ListarGrupoProcedimiento",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.gdestdo = 'A'
                }
            },
            columns: [
                {
                    title: "Descripción",
                    data: "dscrpcn",
                    width: '25%',
                    orderable: false, className: "text-left"
                },
                {
                    title: "Abreviatura",
                    data: "abrvtra",
                    width: '10%',
                    orderable: false,
                    class: "text-center"
                },
                {
                    title: "Alias 1",
                    data: "alS1",
                    width: '10%',
                    orderable: false,
                    class: "text-center"
                },
                {
                    title: "Alias 2",
                    data: "alS2",
                    width: '10%',
                    orderable: false
                },
                {
                    title: "Alias 3",
                    data: "alS3",
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
                $tabla_GProcedimiento.on('click', 'tbody tr', function () {
                    var data = configDTGrupoProcedimiento.objeto.row(this).data();

                    if (typeof (data) != 'undefined') {
                        //$hfIdProcedimiento.val(data.id)
                        $txtCodProcedimiento.val(data.id);
                        $txtGProcedimiento.val(data.dscrpcn);
                        $hfIdGProcedimiento.val(data.id);
                        // funcionesProveedor.obtenerDireccion(objDireccion);//mod
                        $mdlBuscarGProcedimiento.modal('hide');
                    }
                })
            },
            init: function () {
                configDTGrupoProcedimiento.eventos.selectRow();
            }
        },
        reload: function () {
            configDTGrupoProcedimiento.tipoDirecciones = [];
            if (configDTGrupoProcedimiento.objeto == null || configDTGrupoProcedimiento.objeto == "" || configDTGrupoProcedimiento.objeto == undefined) {
                configDTGrupoProcedimiento.objeto = $tabla_GProcedimiento.DataTable(configDTGrupoProcedimiento.opciones);
                configDTGrupoProcedimiento.eventos.init()
            } else { configDTGrupoProcedimiento.objeto.ajax.reload(); }
        },

    };

    //BENEFICIO
    var configDTBeneficio = {
        objeto: null,
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
                    title: "id",
                    data: "id",
                    width: '5%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Codigo",
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
                $tabla_Beneficio.on('click', 'tbody tr', function () {
                    var data = configDTBeneficio.objeto.row(this).data();

                    if (typeof (data) != 'undefined') {
                        $hfIdBeneficio.val(data.id);
                        $txtBeneficio.val(data.dscrpcn);
                        // funcionesProveedor.obtenerDireccion(objDireccion);//mod
                        $mdlBuscarBeneficio.modal('hide');
                    }
                })
            },
            init: function () {
                configDTBeneficio.eventos.selectRow();
            }
        },
        reload: function () {
            configDTBeneficio.tipoDirecciones = [];
            if (configDTBeneficio.objeto == null || configDTBeneficio.objeto == "" || configDTBeneficio.objeto == undefined) {
                configDTBeneficio.objeto = $tabla_Beneficio.DataTable(configDTBeneficio.opciones);
                configDTBeneficio.eventos.init()
            } else { configDTBeneficio.objeto.ajax.reload(); }
        },
    };

    var configDTNomenclador = {
        objecto: null,
        opciones: {
            ajax: {
                gatatype: "JSON",
                url: "/Nomenclador/ListarNomenclador",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                }
            },
            columns: [
                {
                    title: "Id",
                    data: "id",
                    width: '25%',
                    orderable: false, className: "text-left d-none"
                },
                {
                    title: "Código Tipo Procode",
                    data: "ctpcode",
                    width: '10%',
                    orderable: false,
                    class: "text-center"
                },
                {
                    title: "Código",
                    data: "ctpint",
                    width: '10%',
                    orderable: false,
                    class: "text-center"
                },
                {
                    title: "Descripción",
                    data: "dscrpcn",
                    width: '25%',
                    orderable: false, className: "text-left"
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
                    width: '11%',
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        //if ($accesoEditarPerfil.val() == "True") {
                        tpm += '<button type="button" class="btn btn-info btn-xs btn-editar" data-toggle="modal" data-target="#mdlNomenclador" data-id="' + data.id + '" title="Editar"><span><i class="la la-edit"></i></span></button>';
                        //}
                        //if ($accesoEliminarPerfil.val() == "True") {
                        tpm += ' <button title="Cambiar estado" data-id="' + data.id + '" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>';
                        // }
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
                $dtnomenclador.on('click', 'tbody tr', function () {
                    var data = configDTNomenclador.objecto.row(this).data();
                    if (typeof (data) != 'undefined') {
                        EntidadProcedimiento = new Object();
                        EntidadProcedimiento = data;
                        $txtCNomenclador.val(data.ctpint);
                        $mdlBuscarnomeclador.modal("hide");
                    }
                })
            },
            init: function () {
                configDTNomenclador.eventos.selectRow();
            }

        },
        reload: function () {
            if (configDTNomenclador.objecto == null || configDTNomenclador.objecto == "" || configDTNomenclador.objecto == undefined) {
                configDTNomenclador.objecto = $dtnomenclador.DataTable(configDTNomenclador.opciones);
                configDTNomenclador.eventos.init();
            } else { configDTNomenclador.objecto.ajax.reload(); }

        }
    };


    configFormProcedimiento = {
        objeto: $frm_Procedimiento.validate({
            errorPlacement: function (error, element) {
                if (element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else {
                    error.insertAfter(element);
                }
            },
            rules: {
                //txtCodigo: {
                //    required: true,
                //},
                txtDescripcion: {
                    required: true,
                },
                txtAbreviatura: {
                    required: true,
                },
                txtTip: {
                    required: false,
                },
                //AGREGAR ID GRUPO PROCEDIMIENTO
                txtGProcedimiento: {
                    required: true,
                },

                cboSexo: {
                    required: true,
                },
                cboMedicTratante: {
                    required: true,
                },
                txtGProcedimiento: {
                    required: true,
                },
                //agregar beneficio
                cboPiezasDentales: {
                    required: true,
                },
                //txtEdadLimite: {
                //    required: false,
                //    // maxlength: 3
                //},
                cboInterQuirur: {
                    required: true,
                },
                //txtProcedRep: {
                //    required: false,
                //},
                cboEqSusalud1: {
                    required: true,
                },
                cboEqSusalud2: {
                    required: true,
                },
                cboTarifario: {
                    required: true,
                },
                txtCSegus: {
                    required: false,
                },
                txtUSegus: {
                    required: false,
                },
                txtCNomenclador: {
                    required: false,
                },
                txtUNomenclador: {
                    required: false,
                },
                txtUnidad: {
                    required: false,
                },
            }
        }),
        eventos: {
            reset: function () {
                configFormProcedimiento.objeto.resetForm();
                $frm_Procedimiento.trigger("reset");
            }
        },
    }

    var funcionesProcedimiento = {
        nuevoProcedimiento: function () {
            $tab_Procedimiento.removeClass("disabled");
            $tab_Procedimiento.click();
            $frm_Procedimiento.AgregarCamposDefectoAuditoria();
            $frm_Procedimiento.DeshabilitarCamposAuditoria();

            $hfCodProcedimiento.val("N");
            configFormProcedimiento.eventos.reset();
            funcionesProcedimiento.cboTarifarioProcedimiento();
        },
        guardarProcedimiento: function () {
            if ($frm_Procedimiento.valid()) {

                if ($hfCodProcedimiento.val() == "N") {
                    funcionesProcedimiento.insertarProcedimiento(); //revisar

                    $hfCodProcedimiento.val("");

                } else {

                    funcionesProcedimiento.actualizarProcedimiento(); //revisar
                }
            }
        },
        insertarProcedimiento: function () {
            if ($frm_Procedimiento.valid()) {
                $frm_Procedimiento.find("[type='button']").attr("disabled", true);
                EntidadProcedimiento = new Object();

                // EntidadProcedimiento.id = $txtCodigo.val();
                EntidadProcedimiento.dscrpcn = $txtDescripcion.val();
                EntidadProcedimiento.abrvtra = $txtAbreviatura.val();
                EntidadProcedimiento.gdsxo = $cboSexo.val();
                EntidadProcedimiento.tip = $txtTip.val();
                EntidadProcedimiento.fmtrtnte = $cboMedicTratante.val();
                EntidadProcedimiento.idgprcdmnto = $hfIdGProcedimiento.val();
                EntidadProcedimiento.idbnfco = $hfIdBeneficio.val();
                // EntidadProcedimiento.idbnfco = $hfIdBeneficio.val(); //BENEFICIO
                EntidadProcedimiento.fpdntls = $cboPiezasDentales.val();
                EntidadProcedimiento.elcbrtra = $txtEdadLimite.val();
                EntidadProcedimiento.fiqrrgca = $cboInterQuirur.val();
                EntidadProcedimiento.prptble = $txtProcedRep.val();
                EntidadProcedimiento.gdessld1 = $cboEqSusalud1.val();
                EntidadProcedimiento.gdessld2 = $cboEqSusalud2.val();
                EntidadProcedimiento.gdttrfro = $cboTarifario.val();
                EntidadProcedimiento.csgs = $txtCSegus.val();
                EntidadProcedimiento.cnmcldr = $txtCNomenclador.val();
                EntidadProcedimiento.usgs = $txtUSegus.val();
                EntidadProcedimiento.unmcldr = $txtUNomenclador.val();
                EntidadProcedimiento.undd = $txtUnidad.val();

                EntidadProcedimiento.gdestdo = $frm_Procedimiento.find("[name='GDESTDO']").val();
                //
                $.post("../Procedimiento/insertarProcedimiento", EntidadProcedimiento)
                    .done(function (idProcedimiento) {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se registró satisfactoriamente.",
                            confimButtonText: "Aceptar"
                        }).then((result) => {
                            //$mdlTarifario.modal("hide");
                            $hfCodigoProcedimiento.val(idProcedimiento)
                           // funcionesProcedimiento.obtenerProcedimiento($hfCodigoProcedimiento.val());
                            configDTProcedimiento.reload();
                            $tab_Lista.removeClass("disabled");
                            $tab_Lista.click();
                            $tab_Procedimiento.addClass("disabled");
                            

                        });
                    }).fail(function (e) {
                        Swal.fire({
                            icon: "error",
                            title: "error al guardar los datos.",
                            text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                            confimButtonText: "Aceptar"
                        });
                    });

            }
        },
        actualizarProcedimiento: function () {
            if ($frm_Procedimiento.valid()) {
                EntidadProcedimiento.id = $txtCodigo.val();
                EntidadProcedimiento.dscrpcn = $txtDescripcion.val();
                EntidadProcedimiento.abrvtra = $txtAbreviatura.val();
                EntidadProcedimiento.tip = $txtTip.val();
                EntidadProcedimiento.idgprcdmnto = $txtCodProcedimiento.val();//05/05
                EntidadProcedimiento.gdsxo = $cboSexo.val();
                EntidadProcedimiento.fmtrtnte = $cboMedicTratante.val();

                EntidadProcedimiento.idgprcdmnto = $hfIdGProcedimiento.val();
                EntidadProcedimiento.idbnfco = $hfIdBeneficio.val();
                // BENEFICIO
                // EntidadProcedimiento.idbnfco = $hfIdBeneficio.val(); 
                EntidadProcedimiento.fpdntls = $cboPiezasDentales.val();
                EntidadProcedimiento.elcbrtra = $txtEdadLimite.val();
                EntidadProcedimiento.fiqrrgca = $cboInterQuirur.val();
                EntidadProcedimiento.prptble = $txtProcedRep.val();
                EntidadProcedimiento.gdessld1 = $cboEqSusalud1.val();
                EntidadProcedimiento.gdessld2 = $cboEqSusalud2.val();
                EntidadProcedimiento.gdttrfro = $cboTarifario.val();
                EntidadProcedimiento.csgs = $txtCSegus.val();
                EntidadProcedimiento.cnmcldr = $txtCNomenclador.val();
                EntidadProcedimiento.usgs = $txtUSegus.val();
                EntidadProcedimiento.unmcldr = $txtUNomenclador.val();
                EntidadProcedimiento.undd = $txtUnidad.val();
                EntidadProcedimiento.gdestdo = $frm_Procedimiento.find("[name='GDESTDO']").val();

                $.post("../Procedimiento/actualizarProcedimiento", EntidadProcedimiento)
                    .done(function () {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se actualizó satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            configDTProcedimiento.reload();
                            //$mdlTarifario.modal("hide");
                            funcionesProcedimiento.obtenerProcedimiento($txtCodigo.val());
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
        obtenerProcedimiento: function (codigo) {
            vprocedimiento = { id: codigo };
            $.post("../Procedimiento/obtenerProcedimiento", vprocedimiento)
                .done(function (data) {
                    EntidadProcedimiento = data;

                    $hfCodigoProcedimiento.val(EntidadProcedimiento.id);
                    $txtCodigo.val($hfCodigoProcedimiento.val());
                    $txtDescripcion.val(EntidadProcedimiento.dscrpcn);
                    $txtAbreviatura.val(EntidadProcedimiento.abrvtra);
                    $txtTip.val(EntidadProcedimiento.tip);
                    //GRUPO PROCEDIMIENTO
                    $txtCodProcedimiento.val(EntidadProcedimiento.idgprcdmnto);
                    $txtGProcedimiento.val(EntidadProcedimiento.gpdscrpcn);
                    $cboSexo.val(EntidadProcedimiento.gdsxo);
                    $cboMedicTratante.val(EntidadProcedimiento.fmtrtnte);
                    $hfIdGProcedimiento.val(EntidadProcedimiento.idgprcdmnto);
                    $txtGProcedimiento.val(EntidadProcedimiento.gpdscrpcn);
                    $hfIdBeneficio.val(EntidadProcedimiento.idbnfco);
                    $txtBeneficio.val(EntidadProcedimiento.bdscrpcn);
                    //BENEFICIO
                    $txtCodBeneficio.val(EntidadProcedimiento.idbnfco);
                    $txtBeneficio.val(EntidadProcedimiento.bdscrpcn);
                    $cboPiezasDentales.val(EntidadProcedimiento.fpdntls);
                    $txtEdadLimite.val(EntidadProcedimiento.elcbrtra);
                    $cboInterQuirur.val(EntidadProcedimiento.fiqrrgca);
                    $txtProcedRep.val(EntidadProcedimiento.prptble);
                    $cboEqSusalud1.val(EntidadProcedimiento.gdesslD1);
                    $cboEqSusalud2.val(EntidadProcedimiento.gdesslD2);
                    $cboTarifario.val(EntidadProcedimiento.gdttrfro);
                    $txtCSegus.val(EntidadProcedimiento.csgs);
                    $txtCNomenclador.val(EntidadProcedimiento.cnmcldr);
                    $txtUSegus.val(EntidadProcedimiento.usgs);
                    $txtUNomenclador.val(EntidadProcedimiento.unmcldr);
                    $txtUnidad.val(EntidadProcedimiento.undd);
                    $frm_Procedimiento.AgregarCamposAuditoria(EntidadProcedimiento);
                })
                .fail().always(function () {
                    $frm_Procedimiento.find(":input").attr("disabled", false);
                    $frm_Procedimiento.DeshabilitarCamposAuditoria();
                    funcionesProcedimiento.cboTarifarioProcedimiento();
                });
        },
        eliminarProcedimiento: function (codigo) {
            vprocedimiento = { id: codigo };
            Swal.fire({
                title: "¿Quiere modificar el estado del registro?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                confirmButtonClass: "btn btn-danger",
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    $.post("../Procedimiento/EliminarProcedimiento", vprocedimiento)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTProcedimiento.reload();
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
        cboTarifarioProcedimiento: function () {
            var id = $cboTarifario.val();
            if (id == 4) {
                $txtCSegus.attr("disabled", true);
                $txtUSegus.attr("disabled", true);
                $txtCNomenclador.attr("disabled", true);
                $txtUNomenclador.attr("disabled", true);
                $txtUnidad.attr("disabled", false);
                $txtCSegus.val("");
                $txtUSegus.val("");
                $txtCNomenclador.val("");
                $txtUNomenclador.val("");

            } else {
                $txtCSegus.attr("disabled", false);
                $txtUSegus.attr("disabled", false);
                $txtCNomenclador.attr("disabled", false);
                $txtUNomenclador.attr("disabled", false);
                $txtUnidad.attr("disabled", true);
                $txtUnidad.val("");
            }
        },
        //AGREGAR FUNCION OBTENER BENEFICIO

    }
    //BENEFICIO
    //funcionesBeneficio = {
    //    obtener: function (obj) {
    //        var beneficio = 
    //        $hfIdBeneficio.val(obj.id);
    //        $txtBeneficio.val(beneficio);
    //        $mdlBuscarBeneficio.modal('hide');
    //        console.log(obj);
    //    }

    //} 




    /*EVENTOS*/
    var eventosIncrustados = {
        BotonNuevoProcedimiento: function () {
            $btnNuevoProcedimiento.click(function () {
                funcionesProcedimiento.nuevoProcedimiento();
            });
        },

        botonGrabarProcedimiento: function () {
            $btnGrabarProcedimiento.click(function () {
                funcionesProcedimiento.guardarProcedimiento();
            });
        },

        botonBuscarGProcedimiento: function () {
            $btnmdlGProcedimiento.click(function () {
                $modalTitulo2.text("Grupo Procedimiento")
                $hfactionGProcedimiento.val("B");
            })
        },
        //btnGProcedimiento
        btnBuscarGProcedimiento: function () {
            $btnmdlGProcedimiento.click(function () {
                configDTGrupoProcedimiento.reload();
            });
        },
        //buscar beneficio
        botonBuscarBeneficio: function () {
            $btnmdlBeneficio.click(function () {
                $modalTitulo3.text("Beneficio")
                $hfactionBeneficio.val("C");
            })
        },

        btnBuscarBeneficio: function () {
            $btnmdlBeneficio.click(function () {
                configDTBeneficio.reload();
            });
        },

        cboTarifario: function () {
            $cboTarifario.on("change", function () {
                funcionesProcedimiento.cboTarifarioProcedimiento();
            });
        },
        lista_tab: function () {
            $tab_Lista.click(function () {
                $tab_Procedimiento.addClass("disabled");

            });
        },


        init: function () {
            eventosIncrustados.BotonNuevoProcedimiento();
            eventosIncrustados.botonGrabarProcedimiento();
            eventosIncrustados.botonBuscarGProcedimiento();
            eventosIncrustados.btnBuscarGProcedimiento();
            eventosIncrustados.botonBuscarBeneficio();
            eventosIncrustados.btnBuscarBeneficio();
            eventosIncrustados.cboTarifario();
            eventosIncrustados.lista_tab();
        }
    }


    var IniEstados = {
        init: function () {
            $cboEstado.LlenarSelectEstados();
            $cboSexo.LlenarSelectGD("GNRO");
            $cboEqSusalud1.LlenarSelectGD("GDESSLD1");//grupo dato
            $cboEqSusalud2.LlenarSelectGD("GDESSLD2");
            $cboMedicTratante.LlenarSelectGD("GDTDOPC"); //flag
            $cboPiezasDentales.LlenarSelectGD("GDTDOPC");
            $cboInterQuirur.LlenarSelectGD("GDTDOPC");
            $cboTarifario.LlenarSelectGD("GDTTRFRO");

        }
    };
    return {
        init: function () {
            configDTProcedimiento.init();
            eventosIncrustados.init();
            validacionControles.init();
            IniEstados.init();
            configDTNomenclador.reload();

        }
    };
}();
$(() => {
    initProcedimiento.init();
})
