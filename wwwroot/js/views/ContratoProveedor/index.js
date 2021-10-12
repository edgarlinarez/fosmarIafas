const InitContratoProveedor = function () {
    //#region Variables ListarProveedor
    $Lista_tab = $("#Lista-tab");
    $Datos_tab = $("#Datos-tab");
    $sucursal_tab = $("#sucursal-tab");
    $Coberturas_tab = $("#Coberturas-tab");
    $hfactionContratoProveedor = $("#hfactionContratoProveedor");
    $btnNuevoContratoProveedor = $("#btnNuevoContratoProveedor");
    $dtContratoProveedor = $("#dtContratoProveedor");
    $hfIdProveedor = $("#hfIdProveedor");
    //#endregion
    //#region variables AgregarDatosContrato
    $frm_ContratoProveedor = $("#FormularioContratoProveedor");
    $txtNumeroContrato = $("#txtNumeroContrato");
    $hfIdContrato = $("#hfIdContrato");
    //buscar código proveedor
    $txtCodProveedor = $("#txtCodProveedor");
    $txtProveedor = $("#txtProveedor");
    $hfNombreProveedor = $("#hfNombreProveedor");
    $btnmdlCodProveedor = $("#btnmdlCodProveedor");
    $mdlBuscarCodProveedor = $("#mdlBuscarCodProveedor");
    $tabla_Proveedor = $("#tabla_Proveedor");
    $hfactionProveedor = $("#hfProveedor");
    $modalTitulo1 = $mdlBuscarCodProveedor.find(".modal-title");
    $hfNombreProveedor = $("#hfNombreProveedor");
    //
    $cboMecanismoPago = $("#cboMecanismoPago");
    $cboFormaPago = $("#cboFormaPago");
    $cboMoneda = $("#cboMoneda");
    $cboFechaPago = $("#cboFechaPago");
    $cboBanco = $("#cboBanco");
    $cboTipoCuenta = $("#cboTipoCuenta");
    $txtNumCuenta = $("#txtNumCuenta");
    $txtNumDetraccion = $("#txtNumDetraccion");
    $txtCCI = $("#txtCCI");
    //Botones
    $btnNuContratoProveedor = $("#btnNuContratoProveedor");
    $btnGrContratoProveedor = $("#btnGrContratoProveedor");
    $btnReContratoProveedor = $("#btnReContratoProveedor");
    $btnAnContratoProveedor = $("#btnAnContratoProveedor");

    $tabla_cuentasbancarias = $("#tabla_cuentasbancarias")
    $titleContrato = $("#titleContrato");
    //#endregion
    //#region variables VersionContrato
    $mdlVersion = $("#mdlVersion")
    $tblVersion = $("#tabla_version");
    $frmVersion = $("#frmVersion");
    $txtNVersion = $("#txtNVersion");
    $txtFIniVigencia = $("#txtfinivigencia");
    $txtFFinVigencia = $("#txtffinvigencia");
    $txtPlazoCredito = $("#txtPlazoCredito");
    $cboEstado = $(".select-estados");
    //botones version
    $btnNuVersionContratoProveedor = $("#btnNuVersionContratoProveedor");
    $btnGrVersionContratoProveedor = $("#btnGrVersionContratoProveedor");
    $hfIdversion = $("#hfIdversion");
    $hfnumversion = $("#hfnumversion");
    $btnNuevaVersion = $(".btn-nuevo");
    $hfactionNuevaVersion = $("#hfNuevaVersion");
    $rngFechasVIGENCIA = $(".rngFechasVIGENCIA");
    $titleVersion = $("#titleVersion");
    $cboIFcontrato = $("#cboIFcontrato");
    $txtffcontrato = $("#txtffcontrato");
    $txtFFiniquito = $("#txtFFiniquito");
    $chkFFiniquito = $("#chkFFiniquito");
    $btnFFiniquito = $("#btnFFiniquito");
    $btnGuFiniquito = $("#btnGuFiniquito");
    $frmFiniquito = $("#frmFiniquito");
    $mdlFiniquitoVersion = $("#mdlFiniquitoVersion");
    $hfIfcntrto = $("#hfIfcntrto");
    //#endregion
    //#region Variables Adjuntar Documentos
    $btnmdlDocumento = $("#btnmdlDocumento");
    $mdlDocumento = $("#mdlDocumento");

    $ArchivoDocumento = $("#ArchivoDocumento");
    $frm_Documento = $("#frm_Documento");
    $tabla_detalleDocumento = $("#tabla_detalleDocumento");
    $lblarchivodocumento = $("#lblarchivodocumento");
    $btnCargarDocumento = $("#btnCargarDocumento");
    $hfIdDocumento = $("#hfIdDocumento");

    //#endregion
    //#region Entidades
    var EntidadContratoProveedor = {
        id: "",
        idprvdr: "",
        gdpsrvco: "",
        gdfpgo: "",
        gdtmnda: "",
        gdfepgo: "",
        gdestdo: "",
        festdo: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",
    }
    var EntidadVersion = {
        id: "",
        idcprvdr: "",
        nvrsn: "",
        fivgnca: "",
        ffvgnca: "",
        pcrdto: "",
        ifcntrto: "",
        ffcntrto: "",
        gdestdo: "",
        festdo: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",
        fcvrsn: ""
    }
    var EntidadCuentasBancarias = {
        id: "",
        idprvdr: "",
        idcbnco: "",
        gdestdo: "",
        festdo: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",
    }
    //#endregion
    //#region DT/Grillas
    var configDTContratoProveedor = {
        objeto: null,
        opciones: {
            filter: true,
            ajax: {
                dataType: "JSON",
                url: "/ContratoProveedor/listar-tabla",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.p_sId = $txtNumeroContrato.val();
                }
            },
            columns: [
                {
                    title: "Nro. Contrato",
                    data: "id",
                    width: '7%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Datos Proveedor",
                    data: "dprvdr",
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Tipo de Contrato",
                    data: "gdpsrvco",
                    orderable: false, width: '15%',
                    className: "text-left"
                },
                {
                    title: "U. Edición",
                    data: "uedcn", width: '11%',
                    orderable: false
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN", width: '14%',
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
                        //if ($accesoEditarPersona.val() == "True") {
                        tpm += '<button type="button" class="btn btn-info btn-xs btn-editar" data-id="' + data.id + '" title="Editar"><span><i class="la la-edit"></i></span></button> ';
                        //}
                        //if ($accesoEliminarPersona.val() == "True") {
                        tpm += '<button title="Cambiar estado" data-id="' + data.id + '" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>';
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
                configDTContratoProveedor.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesContratoProveedor.eliminarContratoProveedor(id)
                })
            },
            editar: function () {
                configDTContratoProveedor.objeto.on("click", ".btn-editar", function () {
                    $titleContrato.text("Editar Contrato");
                    var data = configDTContratoProveedor.objeto.row($(this).parents('tr')).data();
                    $hfNombreProveedor.val(data.dprvdr);//prueba
                    $DtoPrvdrAcuerdo.val($hfNombreProveedor.val());
                    $hfIdProveedor.val(data.idprvdr);
                    $hfDtoPrvdrTarifaCobertura.val($hfNombreProveedor.val());
                    configDTDocumento.reload();//27.05
                    var id = $(this).data("id");
                    $hfactionContratoProveedor.val("E");
                    $btnNuevaVersion.attr("disabled", false);
                    $btnmdlDocumento.attr("disabled", false);
                    $Datos_tab.removeClass("disabled");
                    //$Datos_tab.click();
                    funcionesContratoProveedor.editarContratoProveedor(id);

                })
            },
            init: function () {
                configDTContratoProveedor.eventos.eliminar();
                configDTContratoProveedor.eventos.editar();
            }
        },
        reload: function () {
            configDTContratoProveedor.objeto.ajax.reload();
        },
        init: function () {
            configDTContratoProveedor.objeto = $dtContratoProveedor.DataTable(configDTContratoProveedor.opciones);
            configDTContratoProveedor.eventos.init();
        }
    };
    var configDTVersion = {
        objeto: null,
        opciones: {
            filter: false,
            ajax: {
                datatype: "JSON",
                url: "/ContratoProveedor/listar-version",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idcprvdr = $hfIdContrato.val();
                }
            },
            columns: [
                {
                    title: "",
                    data: null, width: '10%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        tpm += '<button type="button" class="btn btn-primary btn-xs btn-version" data-id="' + data.id + '" title="Configurar Beneficios"><span><i class="fa fa-cogs"></i></span></button> ';
                        tpm += '<button type="button" class="btn btn-secondary btn-xs btn-fin" data-id="' + data.id + '" title="Finiquitar Versión"><span><i class="fa fa-lock"></i></span></button>';
                        return tpm;
                    }
                },
                {
                    title: "Ind. Finalizar ",
                    data: "ifcntrto",
                    width: '0%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Versión",
                    data: "nvrsn",
                    width: '10%',
                    orderable: false, className: "text-center"
                },
                {
                    title: "Desde",
                    data: "fivgnca",
                    width: '11%',
                    orderable: false
                },
                {
                    title: "Hasta",
                    data: "ffvgnca",
                    width: '11%',
                    orderable: false
                },
                {
                    title: "Fecha Finiquito",
                    data: "ffcntrto",
                    width: '11%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "U. Edición",
                    data: "uedcn",
                    width: '12%',
                    orderable: false
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN",
                    width: '14%',
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
                        tpm += '<button type="button" class="btn btn-info btn-xs btn-editar" data-id="' + data.id + '" title="Editar"><span><i class="la la-edit"></i></span></button> ';
                        // }
                        // if ($accesoEliminarProcedimiento.val() == "True") {
                        tpm += '<button title="Cambiar estado" data-id="' + data.id + '" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>';
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
                configDTVersion.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesVersionCP.eliminarVersionCP(id)
                })
            },
            editar: function () {
                configDTVersion.objeto.on("click", ".btn-editar", function () {
                    $titleVersion.text("Editar Versión");
                    var data = configDTVersion.objeto.row($(this).parents('tr')).data();
                    if (data.ifcntrto != "SI") {
                        $hfactionNuevaVersion.val("E");
                        $mdlVersion.modal("show");
                        funcionesVersionCP.obtenerVersionCP(data.id);
                    } else {
                        Swal.fire({
                            icon: "info",
                            allowOutsideClick: false,
                            title: "",
                            text: "La versión esta finiquitada.",
                            confirmButtonText: "Aceptar"
                        });
                    }
                })
            },
            finiquitar: function () {
                configDTVersion.objeto.on("click", ".btn-fin", function () {
                    EntidadVersion.fcvrsn = 0;
                    var data = configDTVersion.objeto.row($(this).parents('tr')).data();
                    $hfIdversion.val(data.id);
                    $chkFFiniquito.prop("checked", data.ifcntrto == "SI")
                    $txtFFiniquito.val(data.ffcntrto).prop("disabled", false).prop("readonly", false);
                    if (data.ifcntrto == "SI") {
                        $mdlFiniquitoVersion.modal('show')
                    } else {
                        Swal.fire({
                            title: "¿Desea crear una nueva versión?",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonText: "Aceptar",
                            confirmButtonClass: "btn btn-danger",
                            cancelButtonText: "Cancelar"
                        }).then(function (result) {
                            cfgFrmFiniquito.inicio();
                            if (result.value) {
                                EntidadVersion.fcvrsn = 1;
                                $mdlFiniquitoVersion.modal('show')
                            }
                            else {
                                $mdlFiniquitoVersion.modal('show')
                            }
                        });

                    }
                })
            },
            buscarversion: function () {
                var data = configDTVersion.objeto.row($(this).parents('tr')).data();
                if (data == undefined) {
                    $hfnumversion.val(1)
                } else {
                    $hfnumversion.val(data.nvrsn + 1)
                }
            },
            version: function () {
                configDTVersion.objeto.on("click", ".btn-version", function () {
                    //$hfIdversion.val($(this).data("id"));
                    var data = configDTVersion.objeto.row($(this).parents('tr')).data();
                    $hfIfcntrto.val(data.ifcntrto);
                    $hfIdversion.val(data.id);
                    $hfnumversion.val(data.nvrsn);
                    $Acuerdos_tab.removeClass('disabled');
                    $Acuerdos_tab.click();
                })
            },
            init: function () {
                configDTVersion.eventos.editar();
                configDTVersion.eventos.eliminar();
                configDTVersion.eventos.version();
                configDTVersion.eventos.finiquitar();
            }
        },
        reload: function () {
            if (configDTVersion.objeto == null || configDTVersion.objeto == "" || configDTVersion.objeto == undefined) {
                configDTVersion.objeto = $tblVersion.DataTable(configDTVersion.opciones);
                configDTVersion.eventos.init();
            } else { configDTVersion.objeto.ajax.reload(); }
        }
    };
    var configDTProveedor = {
        objeto: null,
        opciones: {
            filter: true,
            ajax: {
                dataType: "JSON",
                url: "../Proveedor/listar-tabla",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.gdestdo = "A";
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
                    title: "Datos Proveedor",
                    data: "dprvdr",
                    orderable: false,
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
                $tabla_Proveedor.on('click', 'tbody tr', function () {
                    var data = configDTProveedor.objeto.row(this).data();

                    if (typeof (data) != 'undefined') {
                        $hfIdProveedor.val(data.id);
                        $txtCodProveedor.val(data.id);
                        $txtProveedor.val(data.dprvdr);

                        $hfNombreProveedor.val(data.dprvdr);//prueba
                        $DtoPrvdrAcuerdo.val($hfNombreProveedor.val());
                        $hfDtoPrvdrTarifaCobertura.val($hfNombreProveedor.val());

                        configDTCuentaBanco.reload();
                        $mdlBuscarCodProveedor.modal('hide');
                    }
                })
            },
            init: function () {
                configDTProveedor.eventos.selectRow();
            }
        },
        reload: function () {
            configDTProveedor.tipoDirecciones = [];
            if (configDTProveedor.objeto == null || configDTProveedor.objeto == "" || configDTProveedor.objeto == undefined) {
                configDTProveedor.objeto = $tabla_Proveedor.DataTable(configDTProveedor.opciones);
                configDTProveedor.eventos.init()
            } else { configDTProveedor.objeto.ajax.reload(); }
        },
    };
    var configDTCuentaBanco = {
        objeto: null,
        opciones: {
            filter: false,
            "autoWidth": false,
            "lengthChange": false,
            "scrollX": true,
            //"paging": false,
            "info": false,
            //serverSide: false,
            "pageLength": 2,
            data: [],
            ajax: {
                dataType: "JSON",
                url: "../ContratoProveedor/listar-dtCuentaPrv",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    //data.RecordsPerDraw = 2;
                    data.idprvdr = $hfIdProveedor.val();
                    //data.idscrsl = $hfIdSucursal.val();
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
                    title: "id Cta",
                    data: "idcbnco",
                    width: '15%',
                    orderable: false,
                    className: "text-left d-none"
                },
                {
                    title: "Tipo Cuenta",
                    data: "gdtcnta",
                    width: '15%',
                    orderable: false,
                    className: "text-left d-none"
                },
                {
                    title: "Banco",
                    data: "gdbnco",
                    width: '15%',
                    orderable: false,
                    className: "text-left d-none"
                },
                {
                    title: "Nro Cuenta",
                    data: "ncnta",
                    width: '15%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Cuenta CCI",
                    data: "ncci",
                    width: '15%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Cuentas Proveedor",
                    data: null,
                    orderable: false,
                    width: '11%',
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        tpm +=
                            '<div class="col-lg-12 item p-1">' +
                            '<div class="card card-bordered">' +
                            '<div class="card-body p-2">' +
                            '<div class="form-row">' +
                            '<div class="col-lg-6 text-left">' +
                            '<span class="card-title mb-0 font-weight-bold">Banco</span>' +
                            '<div class="card-text">' + data.gdbnco + '</div>' +
                            '</div>' +
                            '<div class="col-lg-6 text-left">' +
                            '<span class="card-title mb-0 font-weight-bold">Tipo Cuenta</span>' +
                            '<div class="card-text">' + data.gdtcnta + '</div>' +
                            '</div>' +
                            '</div>' +
                            '<div class="form-row">' +
                            '<div class="col-lg-6 text-left">' +
                            '<span class="card-title mb-0 font-weight-bold">Nro Cta.</span>' +
                            '<div class="card-text">' + data.ncnta + '</div>' +
                            '</div>' +
                            '<div class="col-lg-6 text-left">' +
                            '<span class="card-title mb-0 font-weight-bold">CCI</span>' +
                            '<div class="card-text">' + data.ncci + '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>'
                            ;
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
            init: function () {

            }
        },
        reload: function () {
            if (configDTCuentaBanco.objeto == null || configDTCuentaBanco.objeto == "" || configDTCuentaBanco.objeto == undefined) {
                configDTCuentaBanco.objeto = $tabla_cuentasbancarias.DataTable(configDTCuentaBanco.opciones);
                configDTCuentaBanco.eventos.init();
            } else { configDTCuentaBanco.objeto.ajax.reload(); }
        }
    };
    var configDTDocumento = {
        objeto: null,
        opciones: {
            filter: false,
            ajax: {
                dataType: "JSON",
                url: "/ContratoProveedor/listar-documentoContratoProveedor",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idcprvdr = $hfIdContrato.val();
                    //data.idscrsl = $hfIdSucursal.val();
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
                        tpm += `<button type="button" class="btn btn-primary btn-xs btn-descargar" data-id="${data.id}" title="Descargar"><span><i class="fa fa-download" aria-hidden="true"></i></span></button>`;
                        return tpm;
                    }
                },
                {
                    title: "Id",
                    data: "id",
                    width: '5%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Contrato",
                    data: "idcprvdr",
                    width: '5%',
                    orderable: false,
                    className: "text-left d-none"
                },
                {
                    title: "Archivo",
                    data: "archvo",
                    width: '25%',
                    orderable: false,
                    className: "text-left d-none"
                },
                {
                    title: "ruta",
                    data: "rarchvo",
                    width: '25%',
                    orderable: false,
                    className: "text-left d-none"
                },
                {
                    title: "Nombre Archivo",
                    data: "narchvo",
                    width: '5%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Tamaño Archivo (Mb)",
                    data: "tarchvo",
                    width: '5%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Tipo de Archivo",
                    data: "gdtarchvo",
                    width: '20%',
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
                    data: "uedcn", width: '15%',
                    orderable: false,
                    class: "text-center"
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN", width: '30%',
                    orderable: false
                },
                {
                    title: "Opciones",
                    data: null,
                    orderable: false,
                    width: '15%',
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        //if ($accesoEliminarCorreo.val() == "True") {
                        tpm += ` <button type="button" title="Cambiar estado" data-id="${data.id}" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>`;
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
                configDTDocumento.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesContratoProveedor.eliminarDocumento(id)
                })
            },
            descargar: function () {
                configDTDocumento.objeto.on("click", ".btn-descargar", function () {
                    var data = configDTDocumento.objeto.row($(this).parents('tr')).data();
                    $hfIdDocumento.val(data.id);
                    var id = $(this).data("id");
                    funcionesContratoProveedor.obtenerDocumento(id);
                })
            },
            init: function () {
                configDTDocumento.eventos.descargar();
                configDTDocumento.eventos.eliminar();
            }
        },
        reload: function () {
            if (configDTDocumento.objeto == null || configDTDocumento.objeto == "" || configDTDocumento.objeto == undefined) {
                configDTDocumento.objeto = $tabla_detalleDocumento.DataTable(configDTDocumento.opciones);
                configDTDocumento.eventos.init();
            } else {
                configDTDocumento.objeto.ajax.reload();
            }
        }

    };

    //#endregion
    //#region Formularios
    var configFormContratoProveedor = {
        inicio: function () {
            if ($hfactionContratoProveedor.val() == "N") {
                $frm_ContratoProveedor.AgregarCamposDefectoAuditoria();
            }
        },
        inicioIndex: function () {
            //$Lista_tab.addClass('disabled');
            $Datos_tab.addClass('disabled');
            $Acuerdos_tab.addClass('disabled');
        },
        objeto: $frm_ContratoProveedor.validate({
            errorPlacement: function (error, element) {
                if (element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else {
                    error.insertAfter(element);
                }
            },
            rules: {
                //txtCodProveedor: {
                //    required: true,
                //},
                txtProveedor: {
                    required: true,
                },
                cboMecanismoPago: {
                    required: true,
                },
                cboFormaPago: {
                    required: true,
                },
                cboMoneda: {
                    required: true,
                },
                cboFechaPago: {
                    required: true,
                },

            }
        }),
        eventos: {
            reset: function () {
                $frmVersion.trigger("reset");
                configFormContratoProveedor.objeto.resetForm();
                $frm_ContratoProveedor.trigger("reset");
            }
        },
        estadoControles: function (bool) {
            $btnmdlCodProveedor.attr('disabled', bool);
            $cboMecanismoPago.attr('disabled', bool);
            $cboFormaPago.attr('disabled', bool);
            $cboMoneda.attr('disabled', bool);
            $cboFechaPago.attr('disabled', bool);
        },
        init: function () {
            configFormContratoProveedor.inicioIndex();
        }
    }
    var configFormVersionCP = {
        inicio: function () {

            if ($hfactionNuevaVersion.val() == "N") {
                $frmVersion.AgregarCamposDefectoAuditoria();

            }
        },
        objeto: $frmVersion.validate({
            errorPlacement: function (error, element) {
                if (element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else {
                    error.insertAfter(element);
                }
            },
            rules: {

                txtFIniVigencia: {
                    required: true,
                },
                txtFFinVigencia: {
                    required: true,
                },
                txtPlazoCredito: {
                    required: true,
                },

            }
        }),
        eventos: {
            reset: function () {
                $frmVersion.trigger("reset");
                configFormVersionCP.objeto.resetForm();
            }
        },
    }
    var cfgFrmFiniquito = {
        form: $frmFiniquito.validate({
            errorPlacement: function (error, element) {
                if (element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else {
                    error.insertAfter(element);
                }
            },
            rules: {
                txtFFiniquito: {
                    required: true,
                }
            }
        }),
        inicio: function () {
            $chkFFiniquito.prop('checked', false);
            $txtFFiniquito.val('').prop('readonly', false).prop('disabled', true);
            $btnFFiniquito.prop('disabled', true);
        }
    }
    //#endregion
    //#region Funciones
    var funcionesContratoProveedor = {
        nuevoContratoProveedor: function () {
            $hfactionContratoProveedor.val("N");
            configFormContratoProveedor.eventos.reset();
            configFormContratoProveedor.inicio();
            configFormVersionCP.eventos.reset();
            $frm_ContratoProveedor.AgregarCamposDefectoAuditoria();
            $frm_ContratoProveedor.DeshabilitarCamposAuditoria();
            $Datos_tab.removeClass("disabled");
            $Datos_tab.click();
            $btnNuevaVersion.attr("disabled", true);
            $btnmdlDocumento.attr("disabled", true);//31.05
            configFormContratoProveedor.estadoControles(false);
        },
        editarContratoProveedor: function (id) {
            //$btnMdlBsqPersona.hide(); boton buscar persona
            configFormContratoProveedor.objeto.resetForm();
            $btnmdlCodProveedor.addClass('disabled');
            configFormContratoProveedor.estadoControles(true);
            funcionesContratoProveedor.obtenerContratoProveedor(id);
        },
        insertarContratoProveedor: function () {
            if ($frm_ContratoProveedor.valid()) {
                $frm_ContratoProveedor.find("[type='button']").attr("disabled", true);

                $hfNombreProveedor.val($txtProveedor.val());
                EntidadContratoProveedor = new Object();
                EntidadContratoProveedor.dprvdr = $hfNombreProveedor.val();
                EntidadContratoProveedor.idprvdr = $txtCodProveedor.val();/*$hfIdCodProveedor.val();*/
                EntidadContratoProveedor.gdpsrvco = $cboMecanismoPago.val();
                EntidadContratoProveedor.gdfpgo = $cboFormaPago.val();
                EntidadContratoProveedor.gdtmnda = $cboMoneda.val();
                EntidadContratoProveedor.gdfepgo = $cboFechaPago.val();
                EntidadContratoProveedor.gdestdo = $frm_ContratoProveedor.find("[name='GDESTDO']").val();

                $.post("../ContratoProveedor/insertar", EntidadContratoProveedor)
                    .done(function (idContrato) {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se registró satisfactoriamente.",
                            confimButtonText: "Aceptar"
                        }).then((result) => {
                            $hfIdContrato.val(idContrato)

                            funcionesContratoProveedor.obtenerContratoProveedor($hfIdContrato.val());
                            configDTContratoProveedor.reload();
                            $btnNuevaVersion.attr("disabled", false);
                            $btnmdlDocumento.attr("disabled", false);
                            $hfactionContratoProveedor.val("E");
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
                        configDTContratoProveedor.reload();
                    });
            }
        },
        actualizarContratoProveedor: function () {
            if ($frm_ContratoProveedor.valid()) {
                EntidadContratoProveedor.id = $txtNumeroContrato.val();
                EntidadContratoProveedor.idprvdr = $txtCodProveedor.val();
                EntidadContratoProveedor.gdpsrvco = $cboMecanismoPago.val();
                EntidadContratoProveedor.gdfpgo = $cboFormaPago.val();
                EntidadContratoProveedor.gdtmnda = $cboMoneda.val();
                EntidadContratoProveedor.gdfepgo = $cboFechaPago.val();
                //falta bancoo
                EntidadContratoProveedor.gdestdo = $frm_ContratoProveedor.find("[name='GDESTDO']").val();
                $.post("../ContratoProveedor/actualizar", EntidadContratoProveedor).done(function () {
                    Swal.fire({
                        icon: "success",
                        allowOutsideClick: false,
                        title: "Éxito",
                        text: "Se actualizó satisfactoriamente.",
                        confirmButtonText: "Aceptar"
                    }).then((result) => {
                        //agregado
                        funcionesContratoProveedor.obtenerContratoProveedor($txtNumeroContrato.val());
                        configDTContratoProveedor.reload();
                        //  $mdlGrupoBeneficio.modal("hide");
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
        obtenerContratoProveedor: function (codigo) {
            params = { id: codigo };
            $.get("../ContratoProveedor/obtener", params)
                .done(function (data) {
                    EntidadContratoProveedor = new Object();
                    EntidadContratoProveedor = data;
                    $hfactionContratoProveedor.val("E");//revisar
                    $Datos_tab.removeClass("disabled");
                    $Datos_tab.click();

                    $hfIdContrato.val(EntidadContratoProveedor.id); //28.04 AQUI ES
                    $txtNumeroContrato.val($hfIdContrato.val());//28.04
                    //$txtNumeroContrato.val(EntidadContratoProveedor.id);//29.04
                    $txtProveedor.val($hfNombreProveedor.val());//agregadoPRUEBAPROVEEDOR
                    $txtCodProveedor.val(EntidadContratoProveedor.idprvdr);
                    $cboMecanismoPago.val(EntidadContratoProveedor.gdpsrvco);
                    $cboFormaPago.val(EntidadContratoProveedor.gdfpgo);
                    $cboMoneda.val(EntidadContratoProveedor.gdtmnda);
                    $cboFechaPago.val(EntidadContratoProveedor.gdfepgo);
                    $frm_ContratoProveedor.AgregarCamposAuditoria(EntidadContratoProveedor);
                    $cboTipContratoAcuerdo.val(EntidadContratoProveedor.gdpsrvco);

                    configDTCuentaBanco.reload();
                    configDTVersion.reload();

                })
                .fail().always(function () {
                    //$frm_ContratoProveedor.find(":input").attr("disabled", false);
                    $frm_ContratoProveedor.DeshabilitarCamposAuditoria();
                });
        },
        eliminarContratoProveedor: function (codigo) {
            vcontratoproveedor = { id: codigo };
            Swal.fire({
                title: "¿Quiere modificar el estado del registro?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                confirmButtonClass: "btn btn-danger",
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    $.post("../ContratoProveedor/eliminar", vcontratoproveedor)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTContratoProveedor.reload();
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
        //Descargar Documento
        obtenerDocumento: function (codigo) {
            var url = "../ContratoProveedor/obtener-descargarDocumento/?id=" + codigo;
            console.log('descargando');
            window.location.href = url;
        },
        eliminarDocumento: function (codigo) {
            vDocumento = { id: codigo };
            Swal.fire({
                title: "¿Quiere modificar el estado del registro?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                confirmButtonClass: "btn btn-danger",
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    $.post("../ContratoProveedor/eliminar-Documento", vDocumento)
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
                        })
                }
            });
        },
    }
    var funcionesVersionCP = {
        insertarVersionCP: function () {
            if ($frmVersion.valid()) {
                $frmVersion.find("[type='button']").attr("disabled", true);

                $hfIdContrato.val($txtNumeroContrato.val());//29.04

                configDTVersion.eventos.buscarversion();


                EntidadVersion = new Object();

                EntidadVersion.idcprvdr = $hfIdContrato.val(); //$txtNumeroContrato.val();//$txtCodProveedor.val();
                EntidadVersion.nvrsn = $hfnumversion.val();
                EntidadVersion.fivgnca = $txtFIniVigencia.val();
                EntidadVersion.ffvgnca = $txtFFinVigencia.val();
                EntidadVersion.pcrdto = $txtPlazoCredito.val();
                EntidadVersion.gdestdo = $frmVersion.find("[name='GDESTDO']").val();

                $.post("../ContratoProveedor/insertar-version", EntidadVersion)
                    .done(function (idVersion) {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se registró satisfactoriamente.",
                            confimButtonText: "Aceptar"
                        }).then((result) => {
                            $hfIdversion.val(idVersion);//03.05
                            //  funcionesVersionCP.obtenerVersionCP($hfIdContrato.val());
                            configDTVersion.reload();
                            $mdlVersion.modal("hide");//
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
        obtenerVersionCP: function (codigo) {
            vversionCP = { id: codigo, idcprvdr: $txtNumeroContrato.val() };

            $.get("../ContratoProveedor/obtener-version", vversionCP)
                .done(function (data) {
                    EntidadVersion = data;

                    $hfIdversion.val(EntidadVersion.id);//hiddenidversion
                    $hfIdContrato.val(EntidadVersion.idcprvdr); //29.04


                    $txtNVersion.val(EntidadVersion.nvrsn);
                    $txtFIniVigencia.val(EntidadVersion.fivgnca);
                    $txtFFinVigencia.val(EntidadVersion.ffvgnca);
                    $txtPlazoCredito.val(EntidadVersion.pcrdto);
                    $cboIFcontrato.val(EntidadVersion.ifcntrto);
                    $txtffcontrato.val(EntidadVersion.ffcntrto);
                    $frmVersion.AgregarCamposAuditoria(EntidadVersion);
                    funcionesVersionCP.bloquearfechafinalizar();

                })
                .fail().always(function () {
                    //  $frm_ContratoProveedor.find(":input").attr("disabled", false);
                    $frmVersion.DeshabilitarCamposAuditoria();
                });

        },
        actualizarVersionCP: function () {
            if ($frm_ContratoProveedor.valid()) {

                EntidadVersion.id = $hfIdversion.val();
                EntidadVersion.idcprvdr = $txtNumeroContrato.val();
                EntidadVersion.fivgnca = $txtFIniVigencia.val();
                EntidadVersion.ffvgnca = $txtFFinVigencia.val();
                EntidadVersion.pcrdto = $txtPlazoCredito.val();
                EntidadVersion.ifcntrto = $cboIFcontrato.val();
                EntidadVersion.ffcntrto = $txtffcontrato.val();
                EntidadVersion.gdestdo = $frmVersion.find("[name='GDESTDO']").val();

                $.post("../ContratoProveedor/actualizar-version", EntidadVersion).done(function () {
                    Swal.fire({
                        icon: "success",
                        allowOutsideClick: false,
                        title: "Éxito",
                        text: "Se actualizó satisfactoriamente.",
                        confirmButtonText: "Aceptar"
                    }).then((result) => {
                        //agregado
                        //funcionesContratoProveedor.obtenerVersionCP($hfIdversion.val());
                        configDTVersion.reload();
                        $mdlVersion.modal("hide");
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
        eliminarVersionCP: function (codigo) {
            vVersionCP = { id: codigo };
            Swal.fire({
                title: "¿Quiere modificar el estado del registro?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                confirmButtonClass: "btn btn-danger",
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    $.post("../ContratoProveedor/eliminar-version", vVersionCP)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTVersion.reload();
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
        bloquearfechafinalizar: function () {
            if ($cboIFcontrato.val() == 1) { $txtffcontrato.attr("disabled", false); }
            else { $txtffcontrato.attr("disabled", true); $txtffcontrato.val("") }
        },
        guardarFechaFiniquito: function () {
            if (!$chkFFiniquito.is(":checked")) {
                Swal.fire({
                    icon: "info",
                    allowOutsideClick: false,
                    title: "",
                    text: "Ingrese la fecha finiquito.",
                    confirmButtonText: "Aceptar"
                });
                return false;
            }
            if ($frmFiniquito.valid()) {

                EntidadVersion.id = $hfIdversion.val();
                EntidadVersion.ifcntrto = $chkFFiniquito.is(":checked") ? "1" : "2";
                EntidadVersion.ffcntrto = $txtFFiniquito.val();
                $.post('/ContratoProveedor/grabarFechaFiniquito', EntidadVersion)
                    .done(function () {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se actualizó satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            EntidadVersion = new Object();
                            configDTVersion.reload();
                            $mdlFiniquitoVersion.modal("hide");
                        });
                    })
            }
        }
    }
    //#endregion
    //#region Eventos
    var eventosIncrustados = {
        botonNuevoContratoProveedor: function () {
            $btnNuevoContratoProveedor.click(function () {
                $titleContrato.text("Nuevo Contrato");
                funcionesContratoProveedor.nuevoContratoProveedor();
                configDTVersion.reload();
                configDTCuentaBanco.reload();
                configDTDocumento.reload();

            });
        },
        botonGuardarContratoProveedor: function () {
            $btnGrContratoProveedor.click(function () {


                if ($hfactionContratoProveedor.val() == "N") {
                    funcionesContratoProveedor.insertarContratoProveedor();

                    $hfactionContratoProveedor.val("");

                } else {
                    funcionesContratoProveedor.actualizarContratoProveedor();
                }


            });

        },
        botonBuscarProveedor: function () {
            $btnmdlCodProveedor.click(function () {
                $modalTitulo1.text("Proveedor")
                $hfactionProveedor.val("P");
            })
        },
        btnBuscarProveedor: function () {
            $btnmdlCodProveedor.click(function () {
                configDTProveedor.reload();
            });
        },
        botonNuevaVersion: function () {
            $btnNuevaVersion.click(function () {

                $hfactionNuevaVersion.val("N");
                configFormVersionCP.inicio();
                configFormVersionCP.eventos.reset();
            });
        },
        botonGuardarVersionContratoProveedor: function () {
            $btnGrVersionContratoProveedor.click(function () {
                if ($hfactionNuevaVersion.val() == "N") {
                    funcionesVersionCP.insertarVersionCP();

                } else {
                    funcionesVersionCP.actualizarVersionCP();
                }
            });

        },
        //27.05
        botonBuscarDocumento: function () {
            $btnmdlDocumento.click(function () {
                configDTDocumento.reload();
            });
        },
        btnCargarDocumento: function () {
            $btnCargarDocumento.click(function () {
                var Archivo = ($ArchivoDocumento)[0].files[0];
                if (($ArchivoDocumento)[0].files.length <= 0) {
                    alert("ingrese el archivo.");
                    return
                } else {
                    var dataForm = new FormData();
                    dataForm.append("f_resultado", Archivo);
                    dataForm.append("s_hfIdcprvdr", $hfIdContrato.val());
                    $.ajax({
                        url: "../ContratoProveedor/insertar-imagendocumento",
                        type: "POST",
                        data: dataForm,
                        contentType: false,
                        processData: false,
                        async: true,
                        //agregado
                        icon: "success",
                        allowOutsideClick: false,
                        title: "Éxito",
                        text: "Se registró satisfactoriamente.",
                        confimButtonText: "Aceptar",//
                        success: function (result) {
                            alert("Archivo agregado con éxito.");
                            configDTDocumento.reload();
                            $lblarchivodocumento.text("Seleccionar Archivo...");

                        }
                    });
                }
            });
        },//fin27.05

        //jose
        lista_tab: function () {
            $Lista_tab.click(function () {
                configFormContratoProveedor.inicioIndex();
                $hfIdProveedor.val("");
                $hfIdContrato.val("");
                $hfIdversion.val("");
                configDTCuentaBanco.reload();
                configDTVersion.reload();
            });
        },
        datos_tab: function () {
            $Datos_tab.click(function () {
                $Acuerdos_tab.addClass('disabled');
                //configDTCuentaBanco.reload();
                //configDTVersion.reload();
            });
        },
        listaIndFechacontrato: function () {
            $cboIFcontrato.on("change", function () {
                funcionesVersionCP.bloquearfechafinalizar();
                //if ($cboIFcontrato.val() == 1)
                //{ $txtffcontrato.attr("disabled", false); }
                //else { $txtffcontrato.attr("disabled", true); $txtffcontrato.val("")}
            })
        },
        version: {
            btnFiniquito: function () {
                $btnFFiniquito.click(() => { $txtFFiniquito.blur().focus() });
            },
            chkFiniquito: function () {
                $chkFFiniquito.change(function () {
                    var bool = $(this).is(":checked")
                    $txtFFiniquito.val('').prop("readonly", !bool).prop("disabled", !bool);
                    $btnFFiniquito.prop("disabled", !bool);
                });
            },
            btnGuFiniquito: function () {
                $btnGuFiniquito.click(function () {
                    funcionesVersionCP.guardarFechaFiniquito();
                });
            },
            mdlFiniquito: {
                onShow: function () {
                    /*$mdlFiniquitoVersion.on("shown.bs.modal", function () {
                        cfgFrmFiniquito.inicio();
                    })*/
                },
                onHide: function () {
                    $mdlFiniquitoVersion.on("hidden.bs.modal", function () {
                        cfgFrmFiniquito.inicio();
                    })
                },
                init: function () {
                    this.onHide();
                    this.onShow();
                }
            },
            init: function () {
                this.mdlFiniquito.init();
                this.btnFiniquito();
                this.chkFiniquito();
                this.btnGuFiniquito();
            }
        },
        init: function () {
            eventosIncrustados.botonNuevoContratoProveedor();
            eventosIncrustados.botonBuscarProveedor();
            eventosIncrustados.btnBuscarProveedor();
            eventosIncrustados.botonGuardarContratoProveedor();
            eventosIncrustados.botonNuevaVersion();
            eventosIncrustados.botonGuardarVersionContratoProveedor();
            eventosIncrustados.botonBuscarDocumento();
            eventosIncrustados.btnCargarDocumento();
            //jose
            eventosIncrustados.lista_tab();
            eventosIncrustados.datos_tab();
            eventosIncrustados.listaIndFechacontrato();
            this.version.init();
        }
    }
    //#endregion
    //#region Datepickers
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
        fechaFiniquito: function () {
            $txtFFiniquito.datepicker(configDatePickers.opcStandar);
        },
        init: function () {
            configDatePickers.fechasVersion();
            configDatePickers.fechaFiniquito();
        }
    }
    //#endregion
    //#region Combos / GDatos
    var IniEstados = {
        init: function () {
            $txtFIniVigencia.datepicker(configDatePickers.opcStandar);
            $txtFFinVigencia.datepicker(configDatePickers.opcStandar);
            $cboEstado.LlenarSelectEstados();
            $cboMecanismoPago.LlenarSelectGD("GDPSRVCO");
            $cboFormaPago.LlenarSelectGD("GDFPGO");
            $cboMoneda.LlenarSelectGD("GDTMNDA");
            $cboFechaPago.LlenarSelectGD("GDFEPGO");
            $cboBanco.LlenarSelectGD("GDBNCO");
            $cboTipoCuenta.LlenarSelectGD("GDTCNTA");
            $cboEstadoAcuerdo.LlenarSelectEstados();
            //#region Jose
            $cboTipContrato.LlenarSelectGD("GDPSRVCO");
            $cboTipContratoCbrtra.LlenarSelectGD("GDPSRVCO");
            $cboCCMedica.LlenarSelectGD("GDCCMDCA");
            $cboDiagIncluido.LlenarSelectGD("GDINCLDS");
            $cboProcIncluido.LlenarSelectGD("GDINCLDS");
            $cboIFcontrato.LlenarSelectGD("GDTDOPC");

            $cboSelecTarifario.LlenarSelectGD("GDTTRFRO");
            //#endregion


        }
    };

    //#endregion
    //#region Jose
    $hfIdSucursal = $("#hfIdSucursal");
    $dtSProveedor = $("#dtSProveedor");
    //#region Datatables
    var configDTSucursales = {
        objeto: null,
        opciones: {
            filter: false,
            ajax: {
                dataType: "JSON",
                url: "/ContratoProveedor/dtsucursaldisponible",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idprvdr = $txtCodProveedor.val();
                    data.idcprvdr = $hfIdContrato.val();
                    data.idvrsn = $hfIdversion.val();
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
                    title: "Descripción",
                    data: "dscrpcn",
                    width: '5%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Nro. Reg. SUSALUD",
                    data: "nrssld",
                    orderable: false,
                    className: "text-center"
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
                            tpm = '<span><i class="fa fa-circle text-success" title="Activo"></i></span>';
                        }
                        else {
                            tpm = '<span><i class="fa fa-circle text-danger" title="Inactivo"></i></span>';
                        }
                        return tpm;
                    }
                },
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
                $dtSProveedor.on('click', 'tbody tr', function () {
                    var data = configDTSucursales.objeto.row(this).data();
                    if (typeof (data) != 'undefined') {
                        $hfIdSucursal.val(data.id);
                        $txtIdSucursalDAcuerdo.val(data.id);
                        $txtSucursalDAcuerdo.val(data.dscrpcn);
                        $IdSucursal.val(data.id);
                        $DatosSucursal.val(data.dscrpcn);
                        $mdlSucursalProveedor.modal('hide');
                    }
                })
            },
            init: function () {
                configDTSucursales.eventos.selectRow();
            }
        },
        reload: function () {
            if (configDTSucursales.objeto == null || configDTSucursales.objeto == "" || configDTSucursales.objeto == undefined) {
                configDTSucursales.objeto = $dtSProveedor.DataTable(configDTSucursales.opciones);
                configDTSucursales.eventos.init();
            } else { configDTSucursales.objeto.ajax.reload(); }
        }
    }
    var configDTAcuerdos = {
        objeto: null,
        opciones: {
            filter: false,
            ajax: {
                dataType: "JSON",
                url: "/ContratoProveedor/listarDtDetVersion",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idvrsn = $hfIdversion.val();
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
                        tpm += '<button type="button" class="btn btn-primary btn-xs btn-acuerdoDet" data-id="' + data.id + '" title="Configurar Acuerdo"><span><i class="fa fa-cogs"></i></span></button>';
                        return tpm;
                    }
                },
                {
                    title: "Id",
                    data: "id",
                    width: '4%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Id Contrato",
                    data: "idcprvdr",
                    width: '2%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Id Versión",
                    data: "idvrsn",
                    width: '2%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "N. Versión",
                    data: "nvrsn",
                    width: '8%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Id Proveedor",
                    data: "idprvdr",
                    width: '2%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Proveedor",
                    data: "dprvdr",
                    width: '2%',
                    orderable: false,
                    className: "text-left d-none"
                },
                {
                    title: "Id Sucursal",
                    data: "idscrsl",
                    width: '2%',
                    orderable: false,
                    className: "text-left d-none"
                },
              
                {
                    title: "Sucursal",
                    data: "dscrsl",
                    width: '30%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Tarifario",
                    data: "gdttrfro",
                    width: '2%',
                    orderable: false,
                    className: "text-left"
                }, 
                {
                    title: "Tarifario",
                    data: "gdidttrfro",
                    width: '2%',
                    orderable: false,
                    className: "text-left d-none"
                },
                {
                    title: "U. Edición",
                    data: "uedcn", width: '12%',
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
                        //if (.val() == "True") {
                        tpm += '<button type="button" class="btn btn-info btn-xs btn-editar" data-id="' + data.id + '" title="Editar"><span><i class="la la-edit"></i></span></button>';
                        //}
                        //if ($accesoEliminarPersona.val() == "True") {
                        tpm += ' <button type="button" class="btn btn-danger btn-xs btn-delete" data-id="' + data.id + '" title="Cambiar estado"><span><i class="la la-refresh"></i><span></span></span></button>';
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
            detalle: function () {
                configDTAcuerdos.objeto.on("click", ".btn-acuerdoDet", function () {
                    //$hfIdversion.val($(this).data("id"));
                    var data = configDTAcuerdos.objeto.row($(this).parents('tr')).data();
                    $hfIdSucursal.val(data.idscrsl);
                    $IdSucursal.val(data.idscrsl);
                    $DatosSucursal.val(data.dscrsl);
                    $hfDatoTarifario.val(data.gdttrfro);//07.07
                    funcionAcuerdoTarifa.editar(data);
                    funcionAcuerdoTarifa.tarifario(data.gdttrfro);//06.07
                    funcionAcuerdoTarifa.Costotarifario(data.gdttrfro);//06.07
                    $hfIdAcuerdo.val(data.id);
                    $sucursal_tab.removeClass("disabled");
                    $beneficios_tab.removeClass("disabled");
                    $sucursal_tab.click();
                    configDTDetTarifa.reload();
                })
            },
            eliminar: function () {
                configDTAcuerdos.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionAcuerdos.eliminar(id);

                })
            },
            editar: function () {
                configDTAcuerdos.objeto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");
                    //$hfactionContratoProveedor.val("E");
                    var data = configDTAcuerdos.objeto.row($(this).parents('tr')).data();
                   // $cboSelecTarifario.val(data.gdttrfro);
                    funcionAcuerdos.editar(data);
                    if ($hfIfcntrto.val() == "NO") { $btnMdlSucursal.attr("disabled", false);}

                    //console.log(data);
                })
            },
            init: function () {
                configDTAcuerdos.eventos.eliminar();
                configDTAcuerdos.eventos.editar();
                configDTAcuerdos.eventos.detalle();
                //configDTAcuerdos.eventos.selectRow();
            }
        },
        reload: function () {
            if (configDTAcuerdos.objeto == null || configDTAcuerdos.objeto == "" || configDTAcuerdos.objeto == undefined) {
                configDTAcuerdos.objeto = $dtAcuerdos.DataTable(configDTAcuerdos.opciones);
                configDTAcuerdos.eventos.init();
            } else { configDTAcuerdos.objeto.ajax.reload(); }
        }
    }
    var configDTCobertura = {
        objeto: null,
        opciones: {
            filter: false,
            ajax: {
                dataType: "JSON",
                url: "/ContratoProveedor/listardtcontratocoberturadet",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idacrdo = $hfIdAcuerdo.val();
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
                    title: "Id Acuerdo",
                    data: "idacrdo",
                    width: '2%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Código",
                    data: "codbnfcio",
                    width: '2%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Beneficio",
                    data: "dscrpcn",
                    width: '30%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "id Diag. Incluido",
                    data: "gddincldo",
                    width: '2%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Diagnóstico Incluido",
                    data: "dincldo",
                    width: '5%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Id Procedimiento",
                    data: "gdpincldo",
                    width: '2%',
                    orderable: false,
                    className: "text-left d-none"
                },
                {
                    title: "Procedimiento Incluido",
                    data: "dpincldo",
                    width: '5%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Importe",
                    data: "cfpimprte",
                    width: '5%',
                    orderable: false,
                    className: "text-right d-none"
                },
                {
                    title: "Días",
                    data: "cfpds",
                    width: '5%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Valor Cápita",
                    data: "cfpvcaptl",
                    width: '5%',
                    orderable: false,
                    className: "text-right d-none"
                },
                {
                    title: "U. Edición",
                    data: "uedcn", width: '12%',
                    orderable: false
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN", width: '12%',
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
                        //if ($accesoEditarPersona.val() == "True") {
                        tpm += '<button type="button" class="btn btn-info btn-xs btn-editar" data-id="' + data.id + '" title="Editar"><span><i class="la la-edit"></i></span></button>';
                        //}
                        //if ($accesoEliminarPersona.val() == "True") {
                        tpm += ' <button title="Cambiar estado" data-id="' + data.id + '" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>';
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
            detalle: function () {
                configDTCobertura.objeto.on("click", ".btn-acuerdoDetALLE", function () {//cambio06.07
                    //$hfIdversion.val($(this).data("id"));
                    var data = configDTCobertura.objeto.row($(this).parents('tr')).data();
                    $hfIdSucursal.val(data.idscrsl);
                    $IdSucursal.val(data.idscrsl);
                    $DatosSucursal.val(data.dscrsl);
                    funcionAcuerdoTarifa.editar(data);
                    $hfIdAcuerdo.val(data.id);
                    $sucursal_tab.click();
                })
            },
            eliminar: function () {
                configDTCobertura.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    //funcionesContratoProveedor.eliminarContratoProveedor(id)
                })
            },
            editar: function () {
                configDTCobertura.objeto.on("click", ".btn-editar", function () {
                    //var id = $(this).data("id");
                    var data = configDTCobertura.objeto.row($(this).parents('tr')).data();
                    funcionAcuerdoCobertura.editar(data);
                })
            },
            init: function () {
                configDTCobertura.eventos.eliminar();
                configDTCobertura.eventos.editar();
               // configDTCobertura.eventos.detalle();06.07
                //configDTCobertura.eventos.selectRow();
            }
        },
        reload: function () {
            if (configDTCobertura.objeto == null || configDTCobertura.objeto == "" || configDTCobertura.objeto == undefined) {
                configDTCobertura.objeto = $dtAcuerdoCobertura.DataTable(configDTCobertura.opciones);
                configDTCobertura.eventos.init();
            } else { configDTCobertura.objeto.ajax.reload(); }
        }
    }
    var configDTBeneficioScrsl = 
    {
        objeto: null,
        opciones: {
            ajax: {
                dataType: "JSON",
                url: "../ContratoProveedor/listar-dtBeneficioPrv",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idprvdr = $hfIdProveedor.val();
                    data.idscrsl = $hfIdSucursal.val();
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
                    title: "Cod. Beneficio",
                    data: "idbnfco",
                    width: '5%',
                    orderable: false,
                    className: "text-left d-none"
                },
                {
                    title: "Descripción",
                    data: "dscrpcn",
                    width: '25%',
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
                        //if ($accesoEliminarCorreo.val() == "True") {
                        tpm += '<button type="button" title="Cambiar estado" data-id="' + data.id + '" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>';
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
            selectRow: function () {
                $dtBeneficioSrcl.on('click', 'tbody tr', function () {
                    var data = configDTBeneficioScrsl.objeto.row(this).data();
                    if (typeof (data) != 'undefined') {
                        $hfIdBeneficio.val(data.id);
                        $txtIdBeneficio.val(data.idbnfco);
                        $txtBeneficio.val(data.dscrpcn);
                        $mdlBeneficioScrsl.modal('hide');
                    }
                })
            },
            eliminar: function () {
                configDTBeneficioScrsl.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesBeneficios.eliminar(id)
                })
            },
            init: function () {
                configDTBeneficioScrsl.eventos.selectRow();
                configDTBeneficioScrsl.eventos.eliminar();
            }
        },
        reload: function () {
            if (configDTBeneficioScrsl.objeto == null || configDTBeneficioScrsl.objeto == "" || configDTBeneficioScrsl.objeto == undefined) {
                configDTBeneficioScrsl.objeto = $dtBeneficioSrcl.DataTable(configDTBeneficioScrsl.opciones);
                configDTBeneficioScrsl.eventos.init();
            } else { configDTBeneficioScrsl.objeto.ajax.reload(); }
        }
    }
    var configDTDetTarifa = {
        func: {
            OcultarColumnas: function (data) {
                configDTDetTarifa.objeto.columns([3, 4, 5]).visible($hfDatoTarifario.val() == 'SEGUS');
            },
        },
        objeto: null,
        opciones: {
            filter: false,
            ajax: {
                dataType: "JSON",
                url: "/ContratoProveedor/listar-contratoTarifadet",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idacrdo = $hfIdAcuerdo.val();
                    //data.idscrsl = $hfIdSucursal.val();
                }
            },
            columns: [
                {
                    title: "Id",
                    data: "id",
                    width: '6%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Descripción",
                    data: "dprcdmnto",
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Tarifario",
                    data: "dtrfro",
                    width: '13%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Cód. Segus",
                    data: "ctrfro",
                    width: '10%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Unidad Segus",
                    data: "utrfro",
                    width: '10%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Grupo Procedimiento",
                    data: "dgprcdmnto",
                    width: '5%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Precio",
                    data: "cfnl",
                    width: '7%',
                    orderable: false,
                    className: "text-right"
                },
                {
                    title: "U. Edición",
                    data: "uedcn", width: '10%',
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
                    title: "Opciones",
                    data: null,
                    orderable: false,
                    width: '15%',
                    class: "text-center d-none",
                    render: function (data) {
                        var tpm = "";
                        //if ($accesoEliminarCorreo.val() == "True") {
                        tpm += ` <button type="button" title="Cambiar estado" data-id="${data.id}" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>`;
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
                configDTDetTarifa.objeto.on("click", ".btn-delete", function () {
                    //var id = $(this).data("id");
                    //funcionesBeneficios.eliminar(id)
                })
            },
            init: function () {
                //configDTBeneficioScrsl.eventos.selectRow();
                //configDTBeneficioScrsl.eventos.eliminar();
            }
        },
        reload: function () {
            if (configDTDetTarifa.objeto == null || configDTDetTarifa.objeto == "" || configDTDetTarifa.objeto == undefined) {
                configDTDetTarifa.objeto = $detalletarifatabla.DataTable(configDTDetTarifa.opciones);
                configDTDetTarifa.eventos.init();
                //$ArchivoTarifa.attr("disabled", false);
                configDTDetTarifa.func.OcultarColumnas();
            } else {
                configDTDetTarifa.objeto.ajax.reload(); //$ArchivoTarifa.attr("disabled", false);
                configDTDetTarifa.func.OcultarColumnas();
            }
        }

    }
    var configDTEquivalencias = {
        asignados: [],
        noAsignados: [],
        swCheckedAll: false,
        estadoPadre: false,
        valorGrProcedimiento: {
            consulta: "3",
            habitacion: "4",
            factor: "5"
        },
        LstTarifas: {},
        aTarifas: [],
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
                var ctNA = configDTEquivalencias.noAsignados.length;
                if (configDTEquivalencias.swCheckedAll && ctNA == 0) {
                    $dtProcedimiento.find(".chkPadre").prop("checked", true);
                    if (configDTEquivalencias.swCheckedAll == false) configDTEquivalencias.swCheckedAll = true;
                }
            },
            cacheChk: function (id) {
                var bool = false;
                if (configDTEquivalencias.swCheckedAll && configDTEquivalencias.estadoPadre) {
                    return true;
                } else {
                    if (configDTEquivalencias.swCheckedAll) {
                        bool = !configDTEquivalencias.noAsignados.includes((id).toString());
                    } else {
                        bool = configDTEquivalencias.asignados.includes((id).toString());
                    }
                }
                //console.log(bool);
                return bool;
            },
            //17.06
            OcultarColumnas: function (data) {
                /*configDTEquivalencias.objeto.columns([7, 8, 9, 10]).visible(data.idtrfro == '1'); */ //($cboSelecTarifario.val() == 'SEGUS');
            },
            valorCostoFinal: function (data) {
                var retorno = 0;
                var unidad;

                if (data.idtrfro != "1") {
                    retorno = $txtCostoTarifario.val()
                }
                //if ($cboSelecTarifario.val() != "1") {
                //    retorno = $txtCostoTarifario.val()
                //}
                else 

                if (data.idgprcdmnto == configDTEquivalencias.valorGrProcedimiento.consulta) {
                    retorno = $txtCnsltaConsulta.val();
                }
                else if (data.idgprcdmnto == configDTEquivalencias.valorGrProcedimiento.habitacion) {
                    retorno = $txtHabIndividual.val();
                }
                else if (data.idgprcdmnto == configDTEquivalencias.valorGrProcedimiento.factor) {
                    //unidad = data.usgs || data.unmcldr;
                    if (data.idtrfro == "1") {
                        unidad = data.usgs
                    } else if (data.idtrfro == "3") {
                        unidad = data.unmcldr;
                    }
                    retorno = parseFloat($txtFactorServicio.val()) * parseFloat(unidad);
                }
                return parseFloat(retorno).toFixed(2);
            },
            acJson: function (id,column,value) {
                /*for (var i = 0; i < configDTEquivalencias.aTarifas.length; i++) {
                    if (configDTEquivalencias.aTarifas[i].gdttrfrio === id ) {
                        configDTEquivalencias.aTarifas[i][column] = value;
                        return;
                    }
                }*/
                var row = configDTEquivalencias.aTarifas.filter(function (item) {
                    return item.gdttrfrio == id;
                })[0];
                row[column] = value;
            },
            validRows: function (id) {
                var row = configDTEquivalencias.aTarifas.filter(function (item) {
                    return item.gdttrfrio == id;
                })[0];
                return typeof row == 'undefined';
            },
            init: function () {
                $dtProcedimiento.find(".chkPadre").is(':checked') && $dtProcedimiento.find(".chkPadre").prop("checked", false);
                $dtProcedimiento.find(".chkHijos").is(':checked') && $dtProcedimiento.find(".chkHijos").prop("checked", false);
                configDTEquivalencias.swCheckedAll = false;
                configDTEquivalencias.estadoPadre = false;
                configDTEquivalencias.asignados = [];
                configDTEquivalencias.noAsignados = [];
            }
        },
        objeto: null,
        opciones: {
            ajax: {
                dataType: "JSON",
                url: "../ContratoProveedor/listarProcedimientosDT",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idprvdr = $hfIdProveedor.val();
                }
            },
            columns: [
                {
                    title:''
                        /*`<div class="d-flex justify-content-center">
                                <div class="custom-control custom-checkbox px-2">
                                    <input type="checkbox" class="custom-control-input chkPadre" id="chkPBeneficio">
                                    <label class="custom-control-label" for="chkPBeneficio"></label>
                                </div>
                            </div>`*/,
                    data: null, width: '1%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var checking = configDTEquivalencias.func.cacheChk(data.idprcdmnto);
                        var tpm = "";
                        tpm += `<div class="d-flex justify-content-center">
                                    <div class="custom-control custom-checkbox px-2">
                                        <input type="checkbox" class="custom-control-input chkHijos" id="chkitem${data.idprcdmnto}" value="${data.idprcdmnto}"  ${checking ? "checked" : ""}>
                                        <label class="custom-control-label" for="chkitem${data.idprcdmnto}"></label>
                                    </div>
                                </div>`;
                        return tpm;
                    }
                },
                {
                    title: "Id Procedimiento",
                    data: "idprcdmnto",
                    width: '7%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Procedimiento",
                    data: "dprcdmnto",
                    width: '',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Id Tarifario",
                    data: "idtrfro",
                    width: '',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Tarifario",
                    data: "dtrfro",
                    width: '10%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Id Gr. Procedimiento",
                    data: "idgprcdmnto",
                    width: '',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Gr. Procedimiento",
                    data: "dgprcdmnto",
                    width: '11%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Cod. SEGUS",
                    data: "csgs",
                    width: '7%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Un. SEGUS",
                    data: "usgs",
                    width: '7%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Cod. Nomenclador",
                    data: "cnmcldr",
                    width: '7%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Un. Nomenclador",
                    data: "unmcldr",
                    width: '7%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Costo",
                    data: null,
                    width: '9%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var checking = configDTEquivalencias.func.cacheChk(data.idprcdmnto);
                        var valorCostoFinal = configDTEquivalencias.func.valorCostoFinal(data);
                        var tpm;
                        tpm = `<div class="input-group input-group-sm">
                                <div class="input-group-prepend">
                                    <div class="input-group-text px-2 py-0">
                                        <div class="d-flex justify-content-center">
                                            <div class="custom-control custom-checkbox px-2 py-0">
                                                <input type="checkbox" id="chkitemCFijo${data.id}" name="cantidadLatencia" class="custom-control-input chkCF" ${checking ? "" : "disabled"}>
                                                <label class="custom-control-label" for="chkitemCFijo${data.id}"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <input type="number" id="txtCFijo${data.id}" name="txtCFijo${data.id}" value="${valorCostoFinal}" maxlength="2" min="-1" max="9999999" step="0.01" maxlength="7" class="form-control form-control-sm text-right pr-1 numeroDecimal txtCF" placeholder="0.00" readonly="">
                            </div>`;
                        return tpm;
                    }
                },
                {
                    title: "Costo final",
                    data: null,
                    width: '7%',
                    orderable: false,
                    class: "text-center d-none",
                    render: function (data) {
                        var valorCostoFinal = configDTEquivalencias.func.valorCostoFinal(data);
                        var tpm;
                        tpm = `<div>
                                <input type="number" id="txtCFinal${data.id}" name="txtCFinal${data.id}" value="${valorCostoFinal}" maxlength="2" min="0" max="12" step="1" class="form-control form-control-sm text-right pr-1 numeroDecimal txtCFinal" placeholder="0.00" disabled>
                            </div>`;
                        return tpm;
                    }
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
                    className: "text-center d-none"
                },
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
                configDTEquivalencias.objeto.on("change", ".chkPadre", function () {
                    configDTEquivalencias.estadoPadre = $(this).is(":checked");
                    if (configDTEquivalencias.swCheckedAll == false) configDTEquivalencias.swCheckedAll = true;
                    if (!configDTEquivalencias.estadoPadre) configDTEquivalencias.swCheckedAll = false; //verificar
                    configDTEquivalencias.func.delAll(configDTEquivalencias.asignados);
                    configDTEquivalencias.func.delAll(configDTEquivalencias.noAsignados);
                    var Items = $(".chkHijos");
                    $(Items).each(function () {
                        $(this).prop("checked", configDTEquivalencias.estadoPadre);
                    });
                    //console.log('Estatico Padre: ' + configDTEquivalencias.swCheckedAll);
                    //console.log('asignados: ' + configDTEquivalencias.asignados);
                    //console.log('no asignados: ' + configDTEquivalencias.noAsignados);
                })
            },
            chkhijos: function () {
                configDTEquivalencias.objeto.on("change", ".chkHijos", function () {
                    var chkPadre = $dtProcedimiento.find(".chkPadre");
                    var data = configDTEquivalencias.objeto.row($(this).parents('tr')).data();
                    var chkCF = $(this).parents('tr').find(".chkCF");
                    if ($(chkPadre).is(':checked')) { $(chkPadre).prop("checked", false); configDTEquivalencias.estadoPadre = false; }
                    if (configDTEquivalencias.swCheckedAll) {
                        if ($(this).is(':checked')) {
                            configDTEquivalencias.func.delItem(configDTEquivalencias.noAsignados, $(this)[0].value)
                        }
                        else {
                            configDTEquivalencias.func.addItem(configDTEquivalencias.noAsignados, $(this)[0].value);
                        }
                        configDTEquivalencias.func.valAll();
                    } else {
                        if ($(this).is(':checked')) {
                            configDTEquivalencias.func.addItem(configDTEquivalencias.asignados, $(this)[0].value);
                            chkCF.attr('disabled', false);
                            objAcuerdoTarifaDet = new Object();
                            if (configDTEquivalencias.func.validRows(data.idprcdmnto)) {
                                objAcuerdoTarifaDet.gdttrfrio = data.idprcdmnto;
                                objAcuerdoTarifaDet.fcfjo = $(this).parents('tr').find(".chkCF").is(':checked') ? 1 : 0;
                                objAcuerdoTarifaDet.cfjo = $(this).parents('tr').find(".txtCF").val();
                                objAcuerdoTarifaDet.cfnl = $(this).parents('tr').find(".txtCFinal").val();
                                configDTEquivalencias.aTarifas.push(objAcuerdoTarifaDet);
                            }
                        }
                        else {
                            configDTEquivalencias.func.delItem(configDTEquivalencias.asignados, $(this)[0].value);
                            chkCF.attr('disabled', true);
                        }
                    }
                    //console.log('asignados: ' + configDTEquivalencias.asignados);
                    //console.log('no asignados: ' + configDTEquivalencias.noAsignados);
                })
            },
            chkCostoFijo: function () {
                configDTEquivalencias.objeto.on("change", ".chkCF", function () {
                    let txtCostoFijo = $($(this).closest(".input-group")).find(".txtCF"); //$(".txtCF");
                    let txtCostoFinal = $($(this).closest(".input-group")).parent("td").parent("tr").find(".txtCFinal");
                    var data = configDTEquivalencias.objeto.row($(this).parents('tr')).data();
                    if ($(this).is(":checked")) {
                        txtCostoFijo.prop("readonly", false).val('');
                    } else {
                        txtCostoFijo.prop("readonly", true);
                       // txtCostoFijo.val('');
                        txtCostoFijo.val(configDTEquivalencias.func.valorCostoFinal(data));
                        //txtCostoFinal.val(configDTEquivalencias.func.valorCostoFinal(data));
                        configDTEquivalencias.func.acJson(data.idprcdmnto, "cfjo", txtCostoFijo.val());//
                        configDTEquivalencias.func.acJson(data.idprcdmnto, "cfnl", txtCostoFinal.val());
                    }
                    configDTEquivalencias.func.acJson(data.idprcdmnto, "fcfjo", ($(this).is(":checked") ? 1 : 0));
                    console.log(configDTEquivalencias.aTarifas);
                })
            },
            txtCostoFijo: function () {
                configDTEquivalencias.objeto.on("keyup keypress blur change", ".txtCF", function () {
                    var txtCostoFinal = $($(this).closest(".input-group")).parent("td").parent("tr").find(".txtCFinal");
                    txtCostoFinal.val(parseFloat($(this).val()).toFixed(2));
                                        
                });
                configDTEquivalencias.objeto.on("blur", ".txtCF", function () {
                    var txtCostoFinal = $($(this).closest(".input-group")).parent("td").parent("tr").find(".txtCFinal");
                    var data = configDTEquivalencias.objeto.row($(this).parents('tr')).data();
                    if ($(this).val() == "") {
                        txtCostoFinal.val(configDTEquivalencias.func.valorCostoFinal(data));
                    }
                    else {
                        $(this).val(parseFloat($(this).val()).toFixed(2));
                    }
                    configDTEquivalencias.func.acJson(data.idprcdmnto, "cfjo", $(this).val());
                    configDTEquivalencias.func.acJson(data.idprcdmnto, "cfnl", txtCostoFinal.val());
                    console.log(configDTEquivalencias.aTarifas);
                });
            },
            drawRow: function () {
                configDTEquivalencias.objeto.on("draw", function () {
                    var Items = $dtProcedimiento.find('tbody tr .chkHijos');
                    $(Items).each(function () {
                        //configDTEquivalencias.swCheckedAll && configDTEquivalencias.func.addItem($(this)[0].value); 
                    });
                    console.log('asignados: ' + configDTEquivalencias.asignados);
                    console.log('no asignados: ' + configDTEquivalencias.noAsignados);
                })
            },
            init: function () {
                configDTEquivalencias.eventos.chkpadre();
                configDTEquivalencias.eventos.chkhijos();
                //configDTEquivalencias.eventos.drawRow();
                configDTEquivalencias.eventos.chkCostoFijo();
                configDTEquivalencias.eventos.txtCostoFijo();
            }
        },
        reload: function () {
            if (configDTEquivalencias.objeto == null || configDTEquivalencias.objeto == "" || configDTEquivalencias.objeto == undefined) {
                configDTEquivalencias.objeto = $dtProcedimiento.DataTable(configDTEquivalencias.opciones);
                configDTEquivalencias.eventos.init();
              //  configDTEquivalencias.func.OcultarColumnas();
            } else {
                configDTEquivalencias.objeto.ajax.reload();
              //  configDTEquivalencias.func.OcultarColumnas();
            }
        }
    };


    var configDTTarifarioSegus = {
        asignados: [],
        noAsignados: [],
        swCheckedAll: false,
        estadoPadre: false,
        valorGrProcedimiento: {
            consulta: "3",
            habitacion: "4",
            factor: "5"
        },
        LstTarifas: {},
        aTarifas: [],
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
                var ctNA = configDTTarifarioSegus.noAsignados.length;
                if (configDTTarifarioSegus.swCheckedAll && ctNA == 0) {
                    $dtProcedimiento.find(".chkPadre").prop("checked", true);
                    if (configDTTarifarioSegus.swCheckedAll == false) configDTTarifarioSegus.swCheckedAll = true;
                }
            },
            cacheChk: function (id) {
                var bool = false;
                if (configDTTarifarioSegus.swCheckedAll && configDTTarifarioSegus.estadoPadre) {
                    return true;
                } else {
                    if (configDTTarifarioSegus.swCheckedAll) {
                        bool = !configDTTarifarioSegus.noAsignados.includes((id).toString());
                    } else {
                        bool = configDTTarifarioSegus.asignados.includes((id).toString());
                    }
                }
                //console.log(bool);
                return bool;
            },

            valorCostoFinal: function (data) {
                var retorno = 0;
                var unidad;

                if (data.gpdscrpcn == "GRUPO  CONSULTAS") {
                    retorno = $txtCnsltaConsulta.val();
                }
                else if (data.gpdscrpcn == "GRUPO HABITACION") {
                    retorno = $txtHabIndividual.val();
                }
                else if (data.gpdscrpcn == "GRUPO FACTOR") {
                    unidad = data.unsgs;

                    retorno = parseFloat($txtFactorServicio.val()) * parseFloat(unidad);
                }
            return parseFloat(retorno).toFixed(2);
        },

            acJson: function (id, column, value) {
                /*for (var i = 0; i < configDTEquivalencias.aTarifas.length; i++) {
                    if (configDTEquivalencias.aTarifas[i].gdttrfrio === id ) {
                        configDTEquivalencias.aTarifas[i][column] = value;
                        return;
                    }
                }*/
                var row = configDTTarifarioSegus.aTarifas.filter(function (item) {
                    return item.gdttrfrio == id;
                })[0];
                row[column] = value;
            },
            validRows: function (id) {
                var row = configDTTarifarioSegus.aTarifas.filter(function (item) {
                    return item.gdttrfrio == id;
                })[0];
                return typeof row == 'undefined';
            },
            init: function () {
                $dtProcedimiento.find(".chkPadre").is(':checked') && $dtProcedimiento.find(".chkPadre").prop("checked", false);
                $dtProcedimiento.find(".chkHijos").is(':checked') && $dtProcedimiento.find(".chkHijos").prop("checked", false);
                configDTTarifarioSegus.swCheckedAll = false;
                configDTTarifarioSegus.estadoPadre = false;
                configDTTarifarioSegus.asignados = [];
                configDTTarifarioSegus.noAsignados = [];
            }
        },
        objeto: null,
        opciones: {
            ajax: {
                dataType: "JSON",
                url: "../ContratoProveedor/listarProcedimientoSegusDT",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idprvdr = $hfIdProveedor.val();
                }
            },
            columns: [
                {
                    title: ''
                        //`<div class="d-flex justify-content-center">
                        //        <div class="custom-control custom-checkbox px-2">
                        //            <input type="checkbox" class="custom-control-input chkPadre" id="chkPBeneficio">
                        //            <label class="custom-control-label" for="chkPBeneficio"></label>
                        //        </div>
                    //    </div>`
                    ,
                    data: null, width: '1%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var checking = configDTTarifarioSegus.func.cacheChk(data.idproc);
                        var tpm = "";
                        tpm += `<div class="d-flex justify-content-center">
                                    <div class="custom-control custom-checkbox px-2">
                                        <input type="checkbox" class="custom-control-input chkHijos" id="chkitem${data.idproc}" value="${data.idproc}"  ${checking ? "checked" : ""}>
                                        <label class="custom-control-label" for="chkitem${data.idproc}"></label>
                                    </div>
                                </div>`;
                        return tpm;
                    }
                },
                {
                    title: "Id Procedimiento",
                    data: "idproc",
                    width: '7%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Procedimiento",
                    data: "dscrpcn",
                    width: '30',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Gr. Procedimiento",
                    data: "gpdscrpcn",
                    width: '30%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Cod. SEGUS",
                    data: "codsgs",
                    width: '7%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Un. SEGUS",
                    data: "unsgs",
                    width: '7%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Costo",
                    data: null,
                    width: '9%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var checking = configDTTarifarioSegus.func.cacheChk(data.idproc);
                        var valorCostoFinal = configDTTarifarioSegus.func.valorCostoFinal(data);
                        var tpm;
                        tpm = `<div class="input-group input-group-sm">
                                <div class="input-group-prepend">
                                    <div class="input-group-text px-2 py-0">
                                        <div class="d-flex justify-content-center">
                                            <div class="custom-control custom-checkbox px-2 py-0">
                                                <input type="checkbox" id="chkitemCFijo${data.idproc}" name="cantidadLatencia" class="custom-control-input chkCF" ${checking ? "" : "disabled"}>
                                                <label class="custom-control-label" for="chkitemCFijo${data.idproc}"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <input type="number" id="txtCFijo${data.idproc}" name="txtCFijo${data.idproc}" value="${valorCostoFinal}" maxlength="2" min="-1" max="9999999" step="0.01" maxlength="7" class="form-control form-control-sm text-right pr-1 numeroDecimal txtCF" placeholder="0.00" readonly="">
                            </div>`;
                        return tpm;
                    }
                },
                {
                    title: "Costoooo",
                    data: null,
                    width: '7%',
                    orderable: false,
                    class: "text-center d-none",
                    render: function (data) {
                        var valorCostoFinal = configDTTarifarioSegus.func.valorCostoFinal(data);
                        var tpm;
                        tpm = `<div>
                                <input type="number" id="txtCFinal${data.id}" name="txtCFinal${data.id}" value="${valorCostoFinal}" maxlength="2" min="0" max="12" step="1" class="form-control form-control-sm text-right pr-1 numeroDecimal txtCFinal " placeholder="0.00" disabled>
                            </div>`;
                        return tpm;
                    }
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
                    className: "text-center d-none"
                },
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
                configDTTarifarioSegus.objeto.on("change", ".chkPadre", function () {
                    configDTTarifarioSegus.estadoPadre = $(this).is(":checked");
                    if (configDTTarifarioSegus.swCheckedAll == false) configDTTarifarioSegus.swCheckedAll = true;
                    if (!configDTTarifarioSegus.estadoPadre) configDTTarifarioSegus.swCheckedAll = false; //verificar
                    configDTTarifarioSegus.func.delAll(configDTTarifarioSegus.asignados);
                    configDTTarifarioSegus.func.delAll(configDTTarifarioSegus.noAsignados);
                    var Items = $(".chkHijos");
                    $(Items).each(function () {
                        $(this).prop("checked", configDTTarifarioSegus.estadoPadre);
                    });
                    //console.log('Estatico Padre: ' + configDTEquivalencias.swCheckedAll);
                    //console.log('asignados: ' + configDTEquivalencias.asignados);
                    //console.log('no asignados: ' + configDTEquivalencias.noAsignados);
                })
            },
            chkhijos: function () {
                configDTTarifarioSegus.objeto.on("change", ".chkHijos", function () {
                    var chkPadre = $dtProcedimiento.find(".chkPadre");
                    var data = configDTTarifarioSegus.objeto.row($(this).parents('tr')).data();
                    var chkCF = $(this).parents('tr').find(".chkCF");
                    //let txtCosto = $(this).parents('tr').find(".txtCF"); //$(".txtCF");
                    //let txtCostoFinal = $(this).parent("tr").find(".txtCFinal");
                    if ($(chkPadre).is(':checked')) { $(chkPadre).prop("checked", false); configDTTarifarioSegus.estadoPadre = false; }
                    if (configDTTarifarioSegus.swCheckedAll) {
                        if ($(this).is(':checked')) {
                            configDTTarifarioSegus.func.delItem(configDTTarifarioSegus.noAsignados, $(this)[0].value)
                        }
                        else {
                            configDTTarifarioSegus.func.addItem(configDTTarifarioSegus.noAsignados, $(this)[0].value);
                        }
                        configDTTarifarioSegus.func.valAll();
                    } else {
                        if ($(this).is(':checked')) {
                            configDTTarifarioSegus.func.addItem(configDTTarifarioSegus.asignados, $(this)[0].value);
                            chkCF.attr('disabled', false);
                            objAcuerdoTarifaDet = new Object();
                            if (configDTTarifarioSegus.func.validRows(data.idproc)) {
                                objAcuerdoTarifaDet.gdttrfrio = data.idproc;
                                objAcuerdoTarifaDet.fcfjo = $(this).parents('tr').find(".chkCF").is(':checked') ? 1 : 0;
                                objAcuerdoTarifaDet.cfjo = $(this).parents('tr').find(".txtCF").val();
                                objAcuerdoTarifaDet.cfnl = $(this).parents('tr').find(".txtCFinal").val();
                                configDTTarifarioSegus.aTarifas.push(objAcuerdoTarifaDet);
                            }
                        }
                        else {
                            configDTTarifarioSegus.func.delItem(configDTTarifarioSegus.asignados, $(this)[0].value);
                            chkCF.attr('disabled', true);
                        }
                    }
                    //console.log('asignados: ' + configDTEquivalencias.asignados);
                    //console.log('no asignados: ' + configDTEquivalencias.noAsignados);
                })
            },
            chkCostoFijo: function () {
                configDTTarifarioSegus.objeto.on("change", ".chkCF", function () {
                    let txtCosto = $($(this).closest(".input-group")).find(".txtCF"); //$(".txtCF");
                    let txtCostoFinal = $($(this).closest(".input-group")).parent("td").parent("tr").find(".txtCFinal");//anterior
                    var data = configDTTarifarioSegus.objeto.row($(this).parents('tr')).data();
                    if ($(this).is(":checked")) {
                        txtCosto.prop("readonly", false).val('');//blanco y vacío
                    } else {
                        txtCosto.prop("readonly", true);
                       // txtCostoFijo.val('');
                        txtCosto.val(configDTTarifarioSegus.func.valorCostoFinal(data));
                        // txtCostoFinal.val(configDTTarifarioSegus.func.valorCostoFinal(data));
                        //configDTTarifarioSegus.func.acJson(data.idprcdmnto, "cfjo", txtCosto.val());
                        //configDTTarifarioSegus.func.acJson(data.idprcdmnto, "cfnl", txtCostoFinal.val());
                    }
                    configDTTarifarioSegus.func.acJson(data.idproc, "cfjo", txtCosto.val());
                    configDTTarifarioSegus.func.acJson(data.idproc, "cfnl", txtCostoFinal.val());
                    configDTTarifarioSegus.func.acJson(data.idproc, "fcfjo", ($(this).is(":checked") ? 1 : 0));
                    console.log(configDTTarifarioSegus.aTarifas);
                })
            },
            txtCosto: function () {
                configDTTarifarioSegus.objeto.on("keyup keypress blur change", ".txtCF", function () {
                    var txtCostoFinal = $($(this).closest(".input-group")).parent("td").parent("tr").find(".txtCFinal");
                    txtCostoFinal.val(parseFloat($(this).val()).toFixed(2));

                });
                configDTTarifarioSegus.objeto.on("blur", ".txtCF", function () {
                    var txtCostoFinal = $($(this).closest(".input-group")).parent("td").parent("tr").find(".txtCFinal");
                    var data = configDTTarifarioSegus.objeto.row($(this).parents('tr')).data();
                    if ($(this).val() == "") {
                        txtCostoFinal.val(configDTTarifarioSegus.func.valorCostoFinal(data));
                    }
                    else {
                        $(this).val(parseFloat($(this).val()).toFixed(2));
                    }
                    configDTTarifarioSegus.func.acJson(data.idproc, "cfjo", $(this).val());
                    configDTTarifarioSegus.func.acJson(data.idproc, "cfnl", txtCostoFinal.val());
                    console.log(configDTTarifarioSegus.aTarifas);
                });
            },
            drawRow: function () {
                configDTTarifarioSegus.objeto.on("draw", function () {
                    var Items = $dtProcedimiento.find('tbody tr .chkHijos');
                    $(Items).each(function () {
                        //configDTEquivalencias.swCheckedAll && configDTEquivalencias.func.addItem($(this)[0].value); 
                    });
                    console.log('asignados: ' + configDTTarifarioSegus.asignados);
                    console.log('no asignados: ' + configDTTarifarioSegus.noAsignados);
                })
            },
            init: function () {
                configDTTarifarioSegus.eventos.chkpadre();
                configDTTarifarioSegus.eventos.chkhijos();
                //configDTEquivalencias.eventos.drawRow();
                configDTTarifarioSegus.eventos.chkCostoFijo();
                configDTTarifarioSegus.eventos.txtCosto();
            }
        },
        reload: function () {
            if (configDTTarifarioSegus.objeto == null || configDTTarifarioSegus.objeto == "" || configDTTarifarioSegus.objeto == undefined) {
                configDTTarifarioSegus.objeto = $dtProcedimiento.DataTable(configDTTarifarioSegus.opciones);
                configDTTarifarioSegus.eventos.init();
               // configDTEquivalencias.func.OcultarColumnas();
            } else {
                configDTTarifarioSegus.objeto.ajax.reload();
               // configDTEquivalencias.func.OcultarColumnas();
            }
        },
        eliminarDT: function () {
            configDTTarifarioSegus.objeto != null && configDTTarifarioSegus.objeto.destroy();
            configDTTarifarioSegus.objeto = null;
            $dtProcedimiento.empty();
        }
    };
    var configDTTarifarioCpms = {
        asignados: [],
        noAsignados: [],
        swCheckedAll: false,
        estadoPadre: false,
        LstTarifas: {},
        aTarifas: [],
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
                var ctNA = configDTTarifarioCpms.noAsignados.length;
                if (configDTTarifarioCpms.swCheckedAll && ctNA == 0) {
                    $dtcpms.find(".chkPadre").prop("checked", true);
                    if (configDTTarifarioCpms.swCheckedAll == false) configDTTarifarioCpms.swCheckedAll = true;
                }
            },
            cacheChk: function (id) {
                var bool = false;
                if (configDTTarifarioCpms.swCheckedAll && configDTTarifarioCpms.estadoPadre) {
                    return true;
                } else {
                    if (configDTTarifarioCpms.swCheckedAll) {
                        bool = !configDTTarifarioCpms.noAsignados.includes((id).toString());
                    } else {
                        bool = configDTTarifarioCpms.asignados.includes((id).toString());
                    }
                }
                //console.log(bool);
                return bool;
            },

            valorCostoFinal: function (data) { //verificar08.07
                var retorno = 0;

                if (data.codigocpms != "") {
                    retorno = $txtCostoTarifario.val()
                }
                return parseFloat(retorno).toFixed(2);
            },
            //NO VA

            acJson: function (id, column, value) { //VALIDAR 
            //    /*for (var i = 0; i < configDTEquivalencias.aTarifas.length; i++) {
            //        if (configDTEquivalencias.aTarifas[i].gdttrfrio === id ) {
            //            configDTEquivalencias.aTarifas[i][column] = value;
            //            return;
            //        }
            //    }*/
                var row = configDTTarifarioCpms.aTarifas.filter(function (item) {
                    return item.gdttrfrio == id;
                })[0];
                row[column] = value;
            },
            validRows: function (id) {
                var row = configDTTarifarioCpms.aTarifas.filter(function (item) {
                    return item.gdttrfrio == id;
                })[0];
                return typeof row == 'undefined';
            },
            init: function () {
                $dtcpms.find(".chkPadre").is(':checked') && $dtcpms.find(".chkPadre").prop("checked", false);
                $dtcpms.find(".chkHijos").is(':checked') && $dtcpms.find(".chkHijos").prop("checked", false);
                configDTTarifarioCpms.swCheckedAll = false;
                configDTTarifarioCpms.estadoPadre = false;
                configDTTarifarioCpms.asignados = [];
                configDTTarifarioCpms.noAsignados = [];
            }
        },
        objeto: null,
        opciones: {
            ajax: {
                dataType: "JSON",
                url: "../ContratoProveedor/listarProcedimientoCPMSDT",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idprvdr = $hfIdProveedor.val();
                }
            },
            columns: [
                {
                    title: ''
                        //`<div class="d-flex justify-content-center">
                        //        <div class="custom-control custom-checkbox px-2">
                        //            <input type="checkbox" class="custom-control-input chkPadre" id="chkPCpms">
                        //            <label class="custom-control-label" for="chkPCpms"></label>
                        //        </div>
                        //    </div>`
                    ,
                    data: null, width: '1%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var checking = configDTTarifarioCpms.func.cacheChk(data.idcpms);
                        var tpm = "";
                        tpm += `<div class="d-flex justify-content-center">
                                    <div class="custom-control custom-checkbox px-2">
                                        <input type="checkbox" class="custom-control-input chkHijos" id="chkitem${data.idcpms}" value="${data.idcpms}"  ${checking ? "checked" : ""}>
                                        <label class="custom-control-label" for="chkitem${data.idcpms}"></label>
                                    </div>
                                </div>`;
                        return tpm;
                    }
                },
                {
                    title: "Id CPMS",
                    data: "idcpms",
                    width: '7%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Código CPMS",
                    data: "codigocpms",
                    width: '10%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Descripción",
                    data: "dscrpcn",
                    width: '30%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Costo",
                    data: null,
                    width: '6%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var checking = configDTTarifarioCpms.func.cacheChk(data.idcpms);
                        var valorCostoFinal = configDTTarifarioCpms.func.valorCostoFinal(data);
                        var tpm;
                        tpm = `<div class="input-group input-group-sm">
                                <div class="input-group-prepend">
                                    <div class="input-group-text px-2 py-0">
                                        <div class="d-flex justify-content-center">
                                            <div class="custom-control custom-checkbox px-2 py-0">
                                                <input type="checkbox" id="chkitemCFijo${data.idcpms}" name="cantidadLatencia" class="custom-control-input chkCF" ${checking ? "" : "disabled"}>
                                                <label class="custom-control-label" for="chkitemCFijo${data.idcpms}"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <input type="number" id="txtCFijo${data.idcpms}" name="txtCFijo${data.idcpms}" value="${valorCostoFinal}" maxlength="2" min="-1" max="9999999" step="0.01" maxlength="7" class="form-control form-control-sm text-right pr-1 numeroDecimal txtCF" placeholder="0.00" readonly="">
                            </div>`;
                        return tpm;
                    }
                },
                {
                    title: "Costo",
                    data: null,
                    width: '7%',
                    orderable: false,
                    class: "text-center d-none",
                    render: function (data) {
                        var valorCostoFinal = configDTTarifarioCpms.func.valorCostoFinal(data);
                        var tpm;
                        tpm = `<div>
                                <input type="number" id="txtCFinal${data.id}" name="txtCFinal${data.id}" value="${valorCostoFinal}" maxlength="2" min="0" max="12" step="1" class="form-control form-control-sm text-right pr-1 numeroDecimal txtCFinal " placeholder="0.00" disabled>
                            </div>`;
                        return tpm;
                    }
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
                    className: "text-center d-none"
                },
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
                configDTTarifarioCpms.objeto.on("change", ".chkPadre", function () {
                    configDTTarifarioCpms.estadoPadre = $(this).is(":checked");
                    if (configDTTarifarioCpms.swCheckedAll == false) configDTTarifarioCpms.swCheckedAll = true;
                    if (!configDTTarifarioCpms.estadoPadre) configDTTarifarioCpms.swCheckedAll = false; //verificar
                    configDTTarifarioCpms.func.delAll(configDTTarifarioCpms.asignados);
                    configDTTarifarioCpms.func.delAll(configDTTarifarioCpms.noAsignados);
                    var Items = $(".chkHijos");
                    $(Items).each(function () {
                        $(this).prop("checked", configDTTarifarioCpms.estadoPadre);
                    });
                    //console.log('Estatico Padre: ' + configDTEquivalencias.swCheckedAll);
                    //console.log('asignados: ' + configDTEquivalencias.asignados);
                    //console.log('no asignados: ' + configDTEquivalencias.noAsignados);
                })
            },
            chkhijos: function () {
                configDTTarifarioCpms.objeto.on("change", ".chkHijos", function () {
                    var chkPadre = $dtcpms.find(".chkPadre");
                    var data = configDTTarifarioCpms.objeto.row($(this).parents('tr')).data();
                    var chkCF = $(this).parents('tr').find(".chkCF");
                    if ($(chkPadre).is(':checked')) { $(chkPadre).prop("checked", false); configDTTarifarioCpms.estadoPadre = false; }
                    if (configDTTarifarioCpms.swCheckedAll) {
                        if ($(this).is(':checked')) {
                            configDTTarifarioCpms.func.delItem(configDTTarifarioCpms.noAsignados, $(this)[0].value)
                        }
                        else {
                            configDTTarifarioCpms.func.addItem(configDTTarifarioCpms.noAsignados, $(this)[0].value);
                        }
                        configDTTarifarioCpms.func.valAll();
                    } else {
                        if ($(this).is(':checked')) {
                            configDTTarifarioCpms.func.addItem(configDTTarifarioCpms.asignados, $(this)[0].value);
                            chkCF.attr('disabled', false); //REVISAR
                            objAcuerdoTarifaDet = new Object();
                            if (configDTTarifarioCpms.func.validRows(data.idcpms)) {
                                objAcuerdoTarifaDet.gdttrfrio = data.idcpms;
                                objAcuerdoTarifaDet.fcfjo = $(this).parents('tr').find(".chkCF").is(':checked') ? 1 : 0;
                                objAcuerdoTarifaDet.cfjo = $(this).parents('tr').find(".txtCF").val();
                                objAcuerdoTarifaDet.cfnl = $(this).parents('tr').find(".txtCFinal").val();
                                configDTTarifarioCpms.aTarifas.push(objAcuerdoTarifaDet);
                            }
                        }
                        else {
                            configDTTarifarioCpms.func.delItem(configDTTarifarioCpms.asignados, $(this)[0].value);
                            chkCF.attr('disabled', true);
                        }
                    }
                    //console.log('asignados: ' + configDTEquivalencias.asignados);
                    //console.log('no asignados: ' + configDTEquivalencias.noAsignados);
                })
            },
            chkCostoFijo: function () {
                configDTTarifarioCpms.objeto.on("change", ".chkCF", function () {
                    let txtCostoFijo = $($(this).closest(".input-group")).find(".txtCF"); //$(".txtCF");
                    let txtCostoFinal = $($(this).closest(".input-group")).parent("td").parent("tr").find(".txtCFinal");
                    var data = configDTTarifarioCpms.objeto.row($(this).parents('tr')).data();
                    if ($(this).is(":checked")) {
                        txtCostoFijo.prop("readonly", false).val('');
                    } else {
                        txtCostoFijo.prop("readonly", true);
                        txtCostoFijo.val(configDTTarifarioCpms.func.valorCostoFinal(data));
                        //configDTTarifarioCpms.func.acJson(data.idcpms, "cfjo", txtCostofijo.val());
                        //configDTTarifarioCpms.func.acJson(data.idcpms, "cfnl", txtCostoFinal.val());
                    }
                    configDTTarifarioCpms.func.acJson(data.idcpms, "cfjo", txtCostoFijo.val());
                    configDTTarifarioCpms.func.acJson(data.idcpms, "cfnl", txtCostoFinal.val());
                    configDTTarifarioCpms.func.acJson(data.idcpms, "fcfjo", ($(this).is(":checked") ? 1 : 0));
                    console.log(configDTTarifarioCpms.aTarifas);
                })
            },
            txtCostoFijo: function () {
                configDTTarifarioCpms.objeto.on("keyup keypress blur change", ".txtCF", function () {
                    var txtCostoFinal = $($(this).closest(".input-group")).parent("td").parent("tr").find(".txtCFinal");
                    txtCostoFinal.val(parseFloat($(this).val()).toFixed(2));

                });
                configDTTarifarioCpms.objeto.on("blur", ".txtCF", function () {
                    var txtCostoFinal = $($(this).closest(".input-group")).parent("td").parent("tr").find(".txtCFinal");
                    var data = configDTTarifarioCpms.objeto.row($(this).parents('tr')).data();
                    if ($(this).val() == "") {
                        txtCostoFinal.val(configDTTarifarioCpms.func.valorCostoFinal(data));
                    }
                    else {
                        $(this).val(parseFloat($(this).val()).toFixed(2));
                    }
                    configDTTarifarioCpms.func.acJson(data.idcpms, "cfjo", $(this).val());
                    configDTTarifarioCpms.func.acJson(data.idcpms, "cfnl", txtCostoFinal.val());
                    console.log(configDTTarifarioCpms.aTarifas);
                });
            },
            drawRow: function () {
                configDTTarifarioCpms.objeto.on("draw", function () {
                    var Items = $dtcpms.find('tbody tr .chkHijos');
                    $(Items).each(function () {
                        //configDTEquivalencias.swCheckedAll && configDTEquivalencias.func.addItem($(this)[0].value); 
                    });
                    console.log('asignados: ' + configDTTarifarioCpms.asignados);
                    console.log('no asignados: ' + configDTTarifarioCpms.noAsignados);
                })
            },
            init: function () {
                configDTTarifarioCpms.eventos.chkpadre();
                configDTTarifarioCpms.eventos.chkhijos();
                configDTTarifarioCpms.eventos.chkCostoFijo();
                configDTTarifarioCpms.eventos.txtCostoFijo();
            }
        },
        reload: function () {
            if (configDTTarifarioCpms.objeto == null || configDTTarifarioCpms.objeto == "" || configDTTarifarioCpms.objeto == undefined) {
                configDTTarifarioCpms.objeto = $dtcpms.DataTable(configDTTarifarioCpms.opciones);
                configDTTarifarioCpms.eventos.init();
            } else {
                configDTTarifarioCpms.objeto.ajax.reload();
            }
        },
        eliminarDT: function () {
            configDTTarifarioCpms.objeto != null && configDTTarifarioCpms.objeto.destroy();
            configDTTarifarioCpms.objeto = null;
            $dtcpms.empty();
        }

    };
    var configDTTarifarioNomenclador = {
        asignados: [],
        noAsignados: [],
        swCheckedAll: false,
        estadoPadre: false,
        LstTarifas: {},
        aTarifas: [],
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
                var ctNA = configDTTarifarioNomenclador.noAsignados.length;
                if (configDTTarifarioNomenclador.swCheckedAll && ctNA == 0) {
                    $dtNomenclador.find(".chkPadre").prop("checked", true);
                    if (configDTTarifarioNomenclador.swCheckedAll == false) configDTTarifarioNomenclador.swCheckedAll = true;
                }
            },
            cacheChk: function (id) {
                var bool = false;
                if (configDTTarifarioNomenclador.swCheckedAll && configDTTarifarioNomenclador.estadoPadre) {
                    return true;
                } else {
                    if (configDTTarifarioNomenclador.swCheckedAll) {
                        bool = !configDTTarifarioNomenclador.noAsignados.includes((id).toString());
                    } else {
                        bool = configDTTarifarioNomenclador.asignados.includes((id).toString());
                    }
                }
                //console.log(bool);
                return bool;
            },

            valorCostoFinal: function (data) {
                var retorno = 0;

                if (data.ctpcode != "") {
                    retorno = $txtCostoTarifario.val()
                }
                return parseFloat(retorno).toFixed(2);
            },
            //NO VA

            acJson: function (id, column, value) { //VALIDAR 
            //    /*for (var i = 0; i < configDTEquivalencias.aTarifas.length; i++) {
            //        if (configDTEquivalencias.aTarifas[i].gdttrfrio === id ) {
            //            configDTEquivalencias.aTarifas[i][column] = value;
            //            return;
            //        }
            //    }*/
                var row = configDTTarifarioNomenclador.aTarifas.filter(function (item) {
                    return item.gdttrfrio == id;
                })[0];
                row[column] = value;
            },
            validRows: function (id) {
                var row = configDTTarifarioNomenclador.aTarifas.filter(function (item) {
                    return item.gdttrfrio == id;
                })[0];
                return typeof row == 'undefined';
            },
            init: function () {
                $dNomenclador.find(".chkPadre").is(':checked') && $dNomenclador.find(".chkPadre").prop("checked", false);
                $dNomenclador.find(".chkHijos").is(':checked') && $dNomenclador.find(".chkHijos").prop("checked", false);
                configDTTarifarioNomenclador.swCheckedAll = false;
                configDTTarifarioNomenclador.estadoPadre = false;
                configDTTarifarioNomenclador.asignados = [];
                configDTTarifarioNomenclador.noAsignados = [];
            }
        },
        objeto: null,
        opciones: {
            ajax: {
                dataType: "JSON",
                url: "../ContratoProveedor/listarProcedimientoNomencladorDT",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idprvdr = $hfIdProveedor.val();
                }
            },
            columns: [
                {
                    title: '',
                        //`<div class="d-flex justify-content-center">
                        //        <div class="custom-control custom-checkbox px-2">
                        //            <input type="checkbox" class="custom-control-input chkPadre" id="chkPBeneficio">
                        //            <label class="custom-control-label" for="chkPBeneficio"></label>
                        //        </div>
                        //    </div>`,
                    data: null, width: '1%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var checking = configDTTarifarioNomenclador.func.cacheChk(data.idnmncldr);
                        var tpm = "";
                        tpm += `<div class="d-flex justify-content-center">
                                    <div class="custom-control custom-checkbox px-2">
                                        <input type="checkbox" class="custom-control-input chkHijos" id="chkitem${data.idnmncldr}" value="${data.idnmncldr}"  ${checking ? "checked" : ""}>
                                        <label class="custom-control-label" for="chkitem${data.idnmncldr}"></label>
                                    </div>
                                </div>`;
                        return tpm;
                    }
                },
                {
                    title: "Id Nomenclador",
                    data: "idnmncldr",
                    width: '7%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Código Nomenclador",
                    data: "ctpcode",
                    width: '7%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Descripción",
                    data: "dscrpcn",
                    width: '10%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Costo",
                    data: null,
                    width: '6%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var checking = configDTTarifarioNomenclador.func.cacheChk(data.idnmncldr);
                        var valorCostoFinal = configDTTarifarioNomenclador.func.valorCostoFinal(data);
                        var tpm;
                        tpm = `<div class="input-group input-group-sm">
                                <div class="input-group-prepend">
                                    <div class="input-group-text px-2 py-0">
                                        <div class="d-flex justify-content-center">
                                            <div class="custom-control custom-checkbox px-2 py-0">
                                                <input type="checkbox" id="chkitemCFijo${data.idnmncldr}" name="cantidadLatencia" class="custom-control-input chkCF" ${checking ? "" : "disabled"}>
                                                <label class="custom-control-label" for="chkitemCFijo${data.idnmncldr}"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <input type="number" id="txtCFijo${data.idnmncldr}" name="txtCFijo${data.idnmncldr}" value="${valorCostoFinal}" maxlength="2" min="-1" max="9999999" step="0.01" maxlength="7" class="form-control form-control-sm text-right pr-1 numeroDecimal txtCF" placeholder="0.00" readonly="">
                            </div>`;
                        return tpm;
                    }
                },
                {
                    title: "Costo",
                    data: null,
                    width: '7%',
                    orderable: false,
                    class: "text-center d-none",
                    render: function (data) {
                        var valorCostoFinal = configDTTarifarioNomenclador.func.valorCostoFinal(data);
                        var tpm;
                        tpm = `<div>
                                <input type="number" id="txtCFinal${data.id}" name="txtCFinal${data.id}" value="${valorCostoFinal}" maxlength="2" min="0" max="12" step="1" class="form-control form-control-sm text-right pr-1 numeroDecimal txtCFinal " placeholder="0.00" disabled>
                            </div>`;
                        return tpm;
                    }
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
                    className: "text-center d-none"
                },
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
                configDTTarifarioNomenclador.objeto.on("change", ".chkPadre", function () {
                    configDTTarifarioNomenclador.estadoPadre = $(this).is(":checked");
                    if (configDTTarifarioNomenclador.swCheckedAll == false) configDTTarifarioNomenclador.swCheckedAll = true;
                    if (!configDTTarifarioNomenclador.estadoPadre) configDTTarifarioNomenclador.swCheckedAll = false; //verificar
                    configDTTarifarioNomenclador.func.delAll(configDTTarifarioNomenclador.asignados);
                    configDTTarifarioNomenclador.func.delAll(configDTTarifarioNomenclador.noAsignados);
                    var Items = $(".chkHijos");
                    $(Items).each(function () {
                        $(this).prop("checked", configDTTarifarioNomenclador.estadoPadre);
                    });
                    //console.log('Estatico Padre: ' + configDTEquivalencias.swCheckedAll);
                    //console.log('asignados: ' + configDTEquivalencias.asignados);
                    //console.log('no asignados: ' + configDTEquivalencias.noAsignados);
                })
            },
            chkhijos: function () {
                configDTTarifarioNomenclador.objeto.on("change", ".chkHijos", function () {
                    var chkPadre = $dtNomenclador.find(".chkPadre");
                    var data = configDTTarifarioNomenclador.objeto.row($(this).parents('tr')).data();
                    var chkCF = $(this).parents('tr').find(".chkCF");
                    if ($(chkPadre).is(':checked')) { $(chkPadre).prop("checked", false); configDTTarifarioNomenclador.estadoPadre = false; }
                    if (configDTTarifarioNomenclador.swCheckedAll) {
                        if ($(this).is(':checked')) {
                            configDTTarifarioNomenclador.func.delItem(configDTTarifarioNomenclador.noAsignados, $(this)[0].value)
                        }
                        else {
                            configDTTarifarioNomenclador.func.addItem(configDTTarifarioNomenclador.noAsignados, $(this)[0].value);
                        }
                        configDTTarifarioNomenclador.func.valAll();
                    } else {
                        if ($(this).is(':checked')) {
                            configDTTarifarioNomenclador.func.addItem(configDTTarifarioNomenclador.asignados, $(this)[0].value);
                            chkCF.attr('disabled', false); //REVISAR
                            objAcuerdoTarifaDet = new Object();
                            if (configDTTarifarioNomenclador.func.validRows(data.idnmncldr)) {
                                objAcuerdoTarifaDet.gdttrfrio = data.idnmncldr;
                                objAcuerdoTarifaDet.fcfjo = $(this).parents('tr').find(".chkCF").is(':checked') ? 1 : 0;
                                objAcuerdoTarifaDet.cfjo = $(this).parents('tr').find(".txtCF").val();
                                objAcuerdoTarifaDet.cfnl = $(this).parents('tr').find(".txtCFinal").val();
                                configDTTarifarioNomenclador.aTarifas.push(objAcuerdoTarifaDet);
                            }
                        }
                        else {
                            configDTTarifarioNomenclador.func.delItem(configDTTarifarioNomenclador.asignados, $(this)[0].value);
                            chkCF.attr('disabled', true);
                        }
                    }
                    //console.log('asignados: ' + configDTEquivalencias.asignados);
                    //console.log('no asignados: ' + configDTEquivalencias.noAsignados);
                })
            },
            chkCostoFijo: function () {
                configDTTarifarioNomenclador.objeto.on("change", ".chkCF", function () {
                    let txtCostoFijo = $($(this).closest(".input-group")).find(".txtCF"); //$(".txtCF");
                    let txtCostoFinal = $($(this).closest(".input-group")).parent("td").parent("tr").find(".txtCFinal");
                    var data = configDTTarifarioNomenclador.objeto.row($(this).parents('tr')).data();
                    if ($(this).is(":checked")) {
                        txtCostoFijo.prop("readonly", false).val('');
                    } else {
                        txtCostoFijo.prop("readonly", true);
                        //txtCostoFijo.val('');
                        txtCostoFijo.val(configDTTarifarioNomenclador.func.valorCostoFinal(data));
                        //txtCostoFinal.val(configDTTarifarioNomenclador.func.valorCostoFinal(data));
                        //configDTTarifarioNomenclador.func.acJson(data.idnmncldr, "cfjo", txtCostoFijo.val());
                        //configDTTarifarioNomenclador.func.acJson(data.idnmncldr, "cfnl", txtCostoFinal.val());
                    }
                    configDTTarifarioNomenclador.func.acJson(data.idnmncldr, "cfjo", txtCostoFijo.val());
                    configDTTarifarioNomenclador.func.acJson(data.idnmncldr, "cfnl", txtCostoFinal.val());
                    configDTTarifarioNomenclador.func.acJson(data.idnmncldr, "fcfjo", ($(this).is(":checked") ? 1 : 0));
                    console.log(configDTTarifarioNomenclador.aTarifas);
                })
            },
            txtCostoFijo: function () {
                configDTTarifarioNomenclador.objeto.on("keyup keypress blur change", ".txtCF", function () {
                    var txtCostoFinal = $($(this).closest(".input-group")).parent("td").parent("tr").find(".txtCFinal");
                    txtCostoFinal.val(parseFloat($(this).val()).toFixed(2));

                });
                configDTTarifarioNomenclador.objeto.on("blur", ".txtCF", function () {
                    var txtCostoFinal = $($(this).closest(".input-group")).parent("td").parent("tr").find(".txtCFinal");
                    var data = configDTTarifarioNomenclador.objeto.row($(this).parents('tr')).data();
                    if ($(this).val() == "") {
                        txtCostoFinal.val(configDTTarifarioNomenclador.func.valorCostoFinal(data));
                    }
                    else {
                        $(this).val(parseFloat($(this).val()).toFixed(2));
                    }
                    configDTTarifarioNomenclador.func.acJson(data.idnmncldr, "cfjo", $(this).val());
                    configDTTarifarioNomenclador.func.acJson(data.idnmncldr, "cfnl", txtCostoFinal.val());
                    console.log(configDTTarifarioNomenclador.aTarifas);
                });
            },
            drawRow: function () {
                configDTTarifarioNomenclador.objeto.on("draw", function () {
                    var Items = $dtNomenclador.find('tbody tr .chkHijos');
                    $(Items).each(function () {
                        //configDTEquivalencias.swCheckedAll && configDTEquivalencias.func.addItem($(this)[0].value); 
                    });
                    console.log('asignados: ' + configDTTarifarioNomenclador.asignados);
                    console.log('no asignados: ' + configDTTarifarioNomenclador.noAsignados);
                })
            },
            init: function () {
                configDTTarifarioNomenclador.eventos.chkpadre();
                configDTTarifarioNomenclador.eventos.chkhijos();
                //configDTEquivalencias.eventos.drawRow();
                configDTTarifarioNomenclador.eventos.chkCostoFijo();
                configDTTarifarioNomenclador.eventos.txtCostoFijo();
            }
        },
        reload: function () {
            if (configDTTarifarioNomenclador.objeto == null || configDTTarifarioNomenclador.objeto == "" || configDTTarifarioNomenclador.objeto == undefined) {
                configDTTarifarioNomenclador.objeto = $dtNomenclador.DataTable(configDTTarifarioNomenclador.opciones);
                configDTTarifarioNomenclador.eventos.init();
            } else {
                configDTTarifarioNomenclador.objeto.ajax.reload();
            }
        },
        eliminarDT: function () {
            configDTTarifarioNomenclador.objeto != null && configDTTarifarioNomenclador.objeto.destroy();
            configDTTarifarioNomenclador.objeto = null;
            $dtNomenclador.empty();
        }
    };

    //#endregion
    //#region Variables AcuerdosContrato
    $cboTipContratoAcuerdo = $("[name='cboTipContrato']");
    $hfDtoPrvdrTarifaCobertura = $("#hfDtoProveedor");
    $cboSelecTarifario = $("#cboSelecTarifario");//16.06
    $DatosTarifa = $("#DatosTarifa");//16.06
    $dtAcuerdos = $("#dtAcuerdos");
    $nroContrato = $("[name='txtNumContrato']");
    $nroVersion = $("[name='txtNumVersion']");
    $IdPrvdr = $("[name='txtDtoIdProveedor']");
    $DtoPrvdrAcuerdo = $("[name='txtDtoProveedor']");
    $IdSucursal = $("[name='txtDtoIdSucursal']");
    $DatosSucursal = $("[name='txtDtoSucursal']");
    $Acuerdos_tab = $("#Acuerdos-tab");
    $listaAcuerdos_tab = $("#listaAcuerdos-tab");
    $mdlSucursalProveedor = $("#mdlSucursalProveedor");
    $frmAcuerdoDet = $("#frmAcuerdoDet");
    $btnNuAcuerdoScrsl = $("#btnNuAcuerdoScrsl");
    $btnCanAcuerdoScrsl = $("#btnCanAcuerdoScrsl");
    $btnGuAcuerdoScrsl = $("#btnGuAcuerdoScrsl")
    $btnMdlSucursal = $("#btnMdlSucursal");
    //$stdoEstadoAcuerdo = $frmAcuerdoDet.find("[name='GDESTDO']");
    $cboEstadoAcuerdo = $frmAcuerdoDet.find("[name='GDESTDO']");
    $hfIdAcuerdo = $("#hfIdAcuerdo");
    $hfactAcuerdoSucursal = $("#hfactAcuerdoSucursal");
    $txtIdSucursalDAcuerdo = $("#txtIdSucursalDAcuerdo");
    $txtSucursalDAcuerdo = $("#txtSucursalDAcuerdo");

    $hfDatoTarifario = $("#hfDatoTarifario");//07.07

    //#endregion
    //#region Variables Sucursal-Tarifas
    $hfIdTarifario = $("#hfIdTarifario");
    $frmSucursal = $("#frmSucursal");
    $nContratoSucursal = $frmSucursal.find("[name='txtNumContrato']");
    $nVersionSucursal = $frmSucursal.find("[name='txtNumVersion']");
    $DtoIdProveedorSucursal = $frmSucursal.find("[name='txtDtoIdProveedor']");
    $DtoProveedorSucursal = $frmSucursal.find("[name='txtDtoProveedor']");
    $DtoIdSucursal = $frmSucursal.find("[name='txtDtoIdSucursal']");
    $DtoSucursal = $frmSucursal.find("[name='txtDtoSucursal']");
    $cboTipContrato = $frmSucursal.find("[name='cboTipContrato']");
    $cboCCMedica = $("#cboCCMedica");
    $stdoSucursal = $frmSucursal.find("[name='GDESTDO']");
    $txtCnsltaConsulta = $("#txtCnsltaConsulta");
    $txtCnsltaInterconsulta = $("#txtCnsltaInterconsulta");
    $txtFactorServicio = $("#txtFactorServicio");
    $txtFactorHonorario = $("#txtFactorHonorario");
    $txtFarmaciaDscto = $("#txtFarmaciaDscto");
    $txtFarmaciaInsumo = $("#txtFarmaciaInsumo");
    $txtHabIndividual = $("#txtHabIndividual");
    $txtHabBipersonal = $("#txtHabBipersonal");
    $txtHabSuite = $("#txtHabSuite");
    $txtLrgEstanciaNDias = $("#txtLrgEstanciaNDias");
    $txtLrgEstanciaDscto = $("#txtLrgEstanciaDscto");

    $IngresarCosto = $("#IngresarCosto");
    $txtCostoTarifario = $("#txtCostoTarifario");

    $btnNuSucursal = $("#btnNuSucursal");
    $btnCanSucursal = $("#btnCanSucursal");
    $btnEditSucursal = $("#btnEditSucursal");
    $btnGuSucursal = $("#btnGuSucursal");
    $hfactionTarifario = $("#hfactionTarifario");
    $mdlProcedimiento = $("#mdlProcedimiento");
    $btnNuProcedimiento = $("#btnNuProcedimiento");
    $btnGuProcedimiento = $("#btnGuProcedimiento");

    $dtProcedimiento = $("#dtProcedimiento");
    $dtcpms = $("#dtcpms");
    $dtNomenclador = $("#dtnomenclador");
    $tablitasegus = $("#tablitasegus");
    $tablitacpms = $("#tablitacpms");
    $tablitanomenclador = $("#tablitanomenclador");

    //#endregion
    //#region Variables Coberturas
    $beneficios_tab = $("#beneficios-tab");
    $frmCoberturas = $("#frmCoberturas");
    $dtAcuerdoCobertura = $("#dtAcuerdoCobertura");
    $ArchivoCobertura = $("#ArchivoCobertura");
    $btnCargarTramaCobertura = $("#btnCargarTramaCobertura");
    $lblarchivoCob = $("#lblarchivoCob");
    $nContratoCobertura = $frmCoberturas.find("[name='txtNumContrato']");
    $nVersionCobertura = $frmCoberturas.find("[name='txtNumVersion']");
    $DtoIdProveedorCobertura = $frmCoberturas.find("[name='txtDtoIdProveedor']");
    $DtoProveedorCobertura = $frmCoberturas.find("[name='txtDtoProveedor']");
    $DtoIdSucursalCobertura = $frmCoberturas.find("[name='txtDtoIdSucursal']");
    $DtoSucursalCobertura = $frmCoberturas.find("[name='txtDtoSucursal']");
    $stdoCobertura = $frmCoberturas.find("[name='GDESTDO']");
    $cboDiagIncluido = $("#cboDiagIncluido");
    $cboProcIncluido = $("#cboProcIncluido");
    $cboTipContratoCbrtra = $frmCoberturas.find("[name='cboTipContrato']");
    $btnMdlCbrtraScrsl = $("#btnMdlCbrtraScrsl");
    $btnMdlCbrtraBnfcio = $("#btnMdlCbrtraBnfcio");
    $btnNuCobertura = $("#btnNuCobertura");
    $btnCanCobertura = $("#btnCanCobertura");
    $btnEditCobertura = $("#btnEditCobertura");
    $btnGuCobertura = $("#btnGuCobertura");
    $hfactionCobertura = $("#hfactionCobertura");
    $hfIdCoberturaDet = $("#hfIdCoberturaDet");
    $hfIdBeneficio = $("#hfIdBeneficio");
    $txtCostoFijoPac = $("#txtCostoFijoPac");
    $txtNDiasAcumulados = $("#txtNDiasAcumulados");
    $txtValorCapita = $("#txtValorCapita");
    $dtBeneficioSrcl = $("#dtBeneficioSrcl");
    $txtIdBeneficio = $("#txtIdBeneficio");
    $txtBeneficio = $("#txtBeneficio");
    $mdlBeneficioScrsl = $("#mdlBeneficioScrsl");
    $ArchivoTarifa = $("#ArchivoTarifa");
    $detalletarifatabla = $("#tabla_detalletarifa");
    $btnCargarTramaTarifa = $("#btnCargarTramaTarifa");
    $lblarchivotari = $("#lblarchivotari");
    //#endregion
    //#region Objetos
    var objAcuerdo = {
        id: "",
        idvrsn: "",
        idscrsl: "",
        gdttrfro: "",
        gdestdo: "",
        festdo: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: ""
    }
    var objAcuerdoTarifa = {
        id: "",
        idcprvdr: "",
        idvcprvdr: "",
        idsprvdr: "",
        idacrdo: "",
        gdccmdca: "",
        cnslta: "",
        intrcnslta: "",
        fsrvco: "",
        fhnrrs: "",
        fdscto: "",
        finsms: "",
        hindvdl: "",
        hbprsnal: "",
        hste: "",
        leds: "",
        ledscto: "",
        cstfinal: "",
        gdestdo: "",
        festdo: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: ""
    }
    var objAcuerdoCobertura = {
        id: "",
        idcprvdr: "",
        idvcprvdr: "",
        cfpcnte: "",
        ndacmlds: "",
        vcpta: "",
        gdestdo: "",
        festdo: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: ""
    }
    var objAcuerdoCoberturaDet = {
        id: '',
        idacrdo: '',
        idcbrtra: '',
        codbnfcio: '',
        dscrpcn: '',
        gddincldo: '',
        dincldo: '',
        gdpincldo: '',
        dpincldo: '',
        cfpimprte: '',
        cfpds: '',
        cfpvcaptl: '',
        gdestdo: '',
        festdo: '',
        ucrcn: '',
        fcrcn: '',
        uedcn: '',
        fedcn: ''
    }
    var objAcuerdoTarifaDet = {
        gdttrfrio: "", //idprocedimiento
        fcfjo : "",
        cfjo: "",
        cfnl :""
    }
    var objTarifaProcedimiento = {
        id:"",
        idacrdo : "",
        prcdmntos: "",
        gdestdo: '',
        festdo: '',
        ucrcn: '',
        fcrcn: '',
        uedcn: '',
        fedcn: ''
    }
    //#endregion
    //#region Eventos
    var eventoAcuerdos = {
        acuerdos_tab: function () {
            $Acuerdos_tab.click(function () {
                /*$nroContrato.val($hfIdContrato.val());
                $IdPrvdr.val($txtCodProveedor.val());
                $DtoPrvdrAcuerdo.val($txtProveedor.val());*/
                $sucursal_tab.addClass("disabled");
                $beneficios_tab.addClass("disabled");
                $listaAcuerdos_tab.click();
               
            });
        },
        lista_acuerdos: function () {
            $listaAcuerdos_tab.click(function () {
                $sucursal_tab.addClass("disabled");
                $beneficios_tab.addClass("disabled");
                frmAcuerdo.init();
                configDTAcuerdos.reload();
            });
        },
        sucursal_tab: function () {
            $sucursal_tab.click(function () {
                //frmTarifario.inicio();
                frmTarifario.init();
            });
        },
        beneficios_tab: function () {
            $beneficios_tab.click(function () {
                frmCobertura.inicio();
                frmCobertura.reset();
                configDTCobertura.reload();
            });
        },
        btnNuAcuerdo: function () {
            $btnNuAcuerdoScrsl.click(function () {
                funcionAcuerdos.nuevo();
            });
        },
        btnCanAcuerdo: function () {
            $btnCanAcuerdoScrsl.click(function () {
                frmAcuerdo.inicio();
            });
        },
        btnGuAcuerdo: function () {
            $btnGuAcuerdoScrsl.click(function () {
                if ($frmAcuerdoDet.valid()) {
                    funcionAcuerdos.guardar();
                }
            });
        },
        init: function () {
            eventoAcuerdos.sucursal_tab();
            eventoAcuerdos.beneficios_tab();
            eventoAcuerdos.acuerdos_tab();
            eventoAcuerdos.lista_acuerdos();
            eventoAcuerdos.btnNuAcuerdo();
            eventoAcuerdos.btnCanAcuerdo();
            eventoAcuerdos.btnGuAcuerdo();
        }
    }
    var eventoTarifario = {
        btnNuSucursal: function () {
            $btnNuSucursal.click(function () {
                frmTarifario.validacion.eventos.reset();
                $hfactionTarifario.val("N");
                frmTarifario.inicio();
                frmTarifario.reset();
                funcionAcuerdoTarifa.nuevo();
            });
        },
        btnGuSucursal: function () {
            $btnGuSucursal.click(function () {
                if ($frmSucursal.valid()) {
                    funcionAcuerdoTarifa.guardar();
                    //frmTarifario.validacion.eventos.reset();
                    frmTarifario.inicio();
                }
            });
        },
        btnEditSucursal: function () {
            $btnEditSucursal.click(function () {
                frmTarifario.validacion.eventos.reset();
                $hfactionTarifario.val("E");
                funcionAcuerdoTarifa.editar();
                $btnNuSucursal.addClass('d-none');
                $btnEditSucursal.addClass('d-none');
                $btnCanSucursal.removeClass('d-none');
                $btnGuSucursal.removeClass('d-none');
            });
        },
        btnCanSucursal: function () {
            $btnCanSucursal.click(function () {
                frmTarifario.validacion.eventos.reset();
                funcionAcuerdoTarifa.obtenerAcuerdoTarifario($hfIdAcuerdo.val());
                frmTarifario.inicio();
                //frmTarifario.reset();
                if ($hfactionTarifario.val() == "N") {
                    $btnNuSucursal.removeClass('d-none');
                } else {
                    $btnEditSucursal.removeClass('d-none');
                }
                $btnCanSucursal.addClass('d-none');
                $btnGuSucursal.addClass('d-none');
            });
        },
        btnMdlSucursal: function () {
            $btnMdlSucursal.click(function () {
                configDTSucursales.reload();
            });
        },
        btnGuProcedimiento: function () {
            $btnGuProcedimiento.click(function () {
                funcionAcuerdoTarifa.guardarTarifa();
            });
        },
        btnCargarTramaTarifa: function () {
            $btnCargarTramaTarifa.click(function () {
                var Archivo = ($ArchivoTarifa)[0].files[0];
                if (($ArchivoTarifa)[0].files.length <= 0) {
                    alert("ingrese el archivo.");
                    return
                } else {
                    var dataForm = new FormData();
                    dataForm.append("f_resultado", Archivo);
                    dataForm.append("s_hfIdAcuerdo", $hfIdAcuerdo.val());
                    $.ajax({
                        url: "../ContratoProveedor/insertar-tramatarifa",
                        type: "POST",
                        data: dataForm,
                        contentType: false,
                        processData: false,
                        async: true,
                        success: function (result) {
                            alert(result);
                            configDTDetTarifa.reload();
                            $lblarchivotari.text("Seleccionar Archivo...");

                        }
                    });
                }
                //eventoTarifario.btnCargarTramaTarifa();
                //configDTDetTarifa.reload();
            });
        },
        btnNuProcedimiento: function () {
            $btnNuProcedimiento.click(function () {
                if ($hfDatoTarifario.val() == "SEGUS") {
                    // $tablitasegus.removeClass('d-none');
                    // $tablitacpms.addClass('d-none'); //$DatosTarifa.addClass('d-none');
                    // $tablitanomenclador.addClass('d-none');
                    configDTTarifarioCpms.eliminarDT();
                    configDTTarifarioNomenclador.eliminarDT();
                    configDTTarifarioSegus.reload();
                    configDTTarifarioSegus.asignados = [];//limpiar chk
                    configDTTarifarioSegus.noAsignados = [];

                } else if ($hfDatoTarifario.val() == "CMPS") {
                    configDTTarifarioNomenclador.eliminarDT();
                    configDTTarifarioSegus.eliminarDT();
                    configDTTarifarioCpms.reload();
                    configDTTarifarioCpms.asignados = [];
                    configDTTarifarioCpms.noAsignados = [];

                } else if ($hfDatoTarifario.val() == "NOMENCLADOR") {
                    configDTTarifarioSegus.eliminarDT();
                    configDTTarifarioCpms.eliminarDT();
                    configDTTarifarioNomenclador.reload();
                    configDTTarifarioNomenclador.asignados = [];
                    configDTTarifarioNomenclador.noAsignados = [];

                } else {
                    Swal.fire({
                        icon: "info",
                        allowOutsideClick: false,
                        title: "",
                        text: "No hay tarifario designado",
                        confirmButtonText: "Aceptar"
                    });
                }
                //configDTEquivalencias.reload();

            });
        },
        init: function () {
            eventoTarifario.btnNuSucursal();
            eventoTarifario.btnGuSucursal();
            eventoTarifario.btnEditSucursal();
            eventoTarifario.btnCanSucursal();
            eventoTarifario.btnMdlSucursal();
            eventoTarifario.btnCargarTramaTarifa();
            this.btnNuProcedimiento();
            this.btnGuProcedimiento();
        }
    }
    var eventoCobertura = {
        btnNuCobertura: function () {
            $btnNuCobertura.click(function () {
                $hfactionCobertura.val("N");
                funcionAcuerdoCobertura.nuevo();
            });
        },
        btnGuCobertura: function () {
            $btnGuCobertura.click(function () {
                if ($frmCoberturas.valid()) {
                    funcionAcuerdoCobertura.guardar();
                }
            });
        },
        btnCanCobertura: function () {
            $btnCanCobertura.click(function () {
                frmCobertura.inicio();
                frmCobertura.reset();
            });
        },
        btnMdlCbrtraBnfcio: function () {
            $btnMdlCbrtraBnfcio.click(function () {
                configDTBeneficioScrsl.reload();
            });
        },
        btnCargarTramaCobertura: function () {
            $btnCargarTramaCobertura.click(function () {
                funcionAcuerdoCobertura.cargarTramacobertura();
            })
        },
        init: function () {
            eventoCobertura.btnNuCobertura();
            eventoCobertura.btnGuCobertura();
            eventoCobertura.btnCanCobertura();
            eventoCobertura.btnMdlCbrtraBnfcio();
            eventoCobertura.btnCargarTramaCobertura();
        }
    }
    //#endregion
    //#region Funciones
    var funcionAcuerdos = {
        nuevo: function () {
            frmAcuerdo.validacion.eventos.reset(); //15.07
            frmAcuerdo.inicio();
            $frmAcuerdoDet.AgregarCamposDefectoAuditoria();//15.07
            $frmAcuerdoDet.DeshabilitarCamposAuditoria();//15.07
            $hfactAcuerdoSucursal.val("N");
            $btnNuAcuerdoScrsl.addClass("d-none");
            $btnCanAcuerdoScrsl.removeClass("d-none");
            $btnGuAcuerdoScrsl.removeClass("d-none");
            $btnMdlSucursal.attr("disabled", false);
            $cboSelecTarifario.attr("disabled", false);//18.06
            $cboEstadoAcuerdo.attr("disabled", false);//$stdoEstadoAcuerdo.attr("disabled", false);
        },
        guardar: function () {
            if ($hfactAcuerdoSucursal.val() == "N") {
                funcionAcuerdos.insertar();
            } else {
                funcionAcuerdos.actualizar();
            }
        },
        insertar: function () {
            objAcuerdo = new Object();
            objAcuerdo.id = $hfIdAcuerdo.val();
            objAcuerdo.idvrsn = $hfIdversion.val();
            objAcuerdo.idscrsl = $hfIdSucursal.val();
            objAcuerdo.gdttrfro = $cboSelecTarifario.val();//18.06
            objAcuerdo.gdestdo = $frmAcuerdoDet.find("[name='GDESTDO']").val();//$stdoEstadoAcuerdo.val();
            $.post("../ContratoProveedor/insertarDetVersion", objAcuerdo)
                .done(function (idAcuerdo) {
                    Swal.fire({
                        icon: "success",
                        allowOutsideClick: false,
                        title: "Éxito",
                        text: "Se registró satisfactoriamente.",
                        confimButtonText: "Aceptar"
                    }).then((result) => {
                        $hfIdAcuerdo.val(idAcuerdo);
                        configDTAcuerdos.reload();
                        frmAcuerdo.inicio();
                        Swal.fire({
                            title: "¿Configurar los acuerdos de la versión sucursal?",
                            icon: "info",
                            showCancelButton: true,
                            confirmButtonText: "Aceptar",
                            confirmButtonClass: "btn btn-danger",
                            cancelButtonText: "Cancelar"
                        }).then(function (result) {
                            if (result.value) {
                                $sucursal_tab.removeClass("disabled");
                                $beneficios_tab.removeClass("disabled");
                                $sucursal_tab.click();
                                configDTDetTarifa.reload();
                                $ArchivoTarifa.attr("disabled", false);

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
                    frmAcuerdo.inicio();
                });
        },
        actualizar: function () {
            objAcuerdo = new Object();
            objAcuerdo.id = $hfIdAcuerdo.val();
            objAcuerdo.idvrsn = $hfIdversion.val();
            objAcuerdo.idscrsl = $hfIdSucursal.val();
            objAcuerdo.gdttrfro = $cboSelecTarifario.val();
            objAcuerdo.gdestdo = $frmAcuerdoDet.find("[name='GDESTDO']").val();
            $.post("../ContratoProveedor/actualizarDetVersion", objAcuerdo)
                .done(function () {
                    Swal.fire({
                        icon: "success",
                        allowOutsideClick: false,
                        title: "Éxito",
                        text: "Se actualizó satisfactoriamente.",
                        confimButtonText: "Aceptar"
                    }).then((result) => {
                        configDTAcuerdos.reload();
                        frmAcuerdo.inicio();
                    });
                })
                .always(function () {
                    //bloquear los controles
                });

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
                    $.post("../ContratoProveedor/eliminarDetVersion", parametro)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTAcuerdos.reload();
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
            $hfactAcuerdoSucursal.val("E");
            $hfIdAcuerdo.val(data.id);
            $hfDtoPrvdrTarifaCobertura.val(data.dprvdr);
            $IdPrvdr.val(data.idprvdr);
            $DtoPrvdrAcuerdo.val($hfDtoPrvdrTarifaCobertura.val());
            $hfIdSucursal.val(data.idscrsl);
            $IdSucursal.val(data.idscrsl);
            $DatosSucursal.val(data.dscrsl);
            $txtIdSucursalDAcuerdo.val(data.idscrsl);
            $txtSucursalDAcuerdo.val(data.dscrsl);
            $cboSelecTarifario.val(data.gdidttrfro);//18.06
            funcionAcuerdos.obtener(data.id);
            //$hfactAcuerdoSucursal.val("N");
            $btnNuAcuerdoScrsl.addClass("d-none");
            $btnCanAcuerdoScrsl.removeClass("d-none");
            $btnGuAcuerdoScrsl.removeClass("d-none");
            $btnMdlSucursal.attr("disabled", true);
            $cboSelecTarifario.attr("disabled", true);//18.06
            $cboEstadoAcuerdo.attr("disabled", false); //$stdoEstadoAcuerdo.attr("disabled", false);
            $frmAcuerdoDet.AgregarCamposAuditoria(data);
        },
        obtener: function (id) {
            //var params = { id: id }
            //$.post("../ContratoProveedor/obtenerDetVersion", params)
            //    .done(function (data) {
            //        objAcuerdo = new Object();
            //        objAcuerdo = data;
            //        $hfIdAcuerdo.val(objAcuerdo.id);
            //        $hfDtoPrvdrTarifaCobertura.val(objAcuerdo.dprvdr);
            //        $IdPrvdr.val(objAcuerdo.idprvdr);
            //        $DtoPrvdrAcuerdo.val($hfDtoPrvdrTarifaCobertura.val());
            //        $hfIdSucursal.val(objAcuerdo.idscrsl);
            //        $IdSucursal.val(objAcuerdo.idscrsl);
            //        $DatosSucursal.val(objAcuerdo.dscrsl);
            //        $txtIdSucursalDAcuerdo.val(objAcuerdo.idscrsl);
            //        $txtSucursalDAcuerdo.val(objAcuerdo.dscrsl);
            //        $cboSelecTarifario.val(objAcuerdo.gdttrfro);
            //        $frmSucursal.AgregarCamposAuditoria(objAcuerdoTarifa);
            //    })
            //    .fail(function () {
            //        //bloquear los controles
            //    });
        },          
        
    }
    var funcionAcuerdoTarifa = {
        nuevo: function () {
            //frmTarifario.reset();
            $frmSucursal.AgregarCamposDefectoAuditoria();//15.07
            $frmSucursal.DeshabilitarCamposAuditoria();//15.07
            frmTarifario.habilitarControles();
            $btnNuSucursal.addClass('d-none');
            $btnEditSucursal.addClass('d-none');
            $btnCanSucursal.removeClass('d-none');
            $btnGuSucursal.removeClass('d-none');
        },
        obtener: function (id) {
            var params = { id: id }
            $.post("../ContratoProveedor/obtener-Csucursales", params)
                .done(function (data) {
                    objAcuerdoTarifa = new Object();
                    objAcuerdoTarifa = data;
                    $hfIdTarifario.val(objAcuerdoTarifa.id);
                    $hfIdContrato.val(objAcuerdoTarifa.idcprvdr);
                    $hfIdversion.val(objAcuerdoTarifa.idvcprvdr);
                    $hfIdSucursal.val(objAcuerdoTarifa.idsprvdr);
                    $cboCCMedica.val(objAcuerdoTarifa.gdccmdca);
                    $txtCnsltaConsulta.val(objAcuerdoTarifa.cnslta);
                    $txtCnsltaInterconsulta.val(objAcuerdoTarifa.intrcnslta);
                    $txtFactorServicio.val(objAcuerdoTarifa.fsrvco);
                    $txtFactorHonorario.val(objAcuerdoTarifa.fhnrrs);
                    $txtFarmaciaDscto.val(objAcuerdoTarifa.fdscto);
                    $txtFarmaciaInsumo.val(objAcuerdoTarifa.finsms);
                    $txtHabIndividual.val(objAcuerdoTarifa.hindvdl);
                    $txtHabBipersonal.val(objAcuerdoTarifa.hbprsnal);
                    $txtHabSuite.val(objAcuerdoTarifa.hste);
                    $txtLrgEstanciaNDias.val(objAcuerdoTarifa.leds);
                    $txtLrgEstanciaDscto.val(objAcuerdoTarifa.ledscto);
                    $txtCostoTarifario.val(objAcuerdoTarifa.cstfinal);
                    $frmSucursal.AgregarCamposAuditoria(objAcuerdoTarifa);
                })
                .fail(function () {
                    //bloquear los controles
                });
        },
        obtenerAcuerdoTarifario: function (idacrdo) {
            var params = { idacrdo: idacrdo }
            $.get("../ContratoProveedor/obteneracuerdotarifa", params)
                .done(function (data) {
                    console.log(data);
                    //frmTarifario.inicio();
                    if (data.entidad == null) {
                        $hfactionTarifario.val("N");
                        frmTarifario.inicio();
                        frmTarifario.reset();
                        $btnNuSucursal.removeClass('d-none');
                        $btnEditSucursal.addClass('d-none');
                        $btnCanSucursal.addClass('d-none');
                        $btnGuSucursal.addClass('d-none');

                    } else {
                        $btnNuSucursal.addClass('d-none');
                        $btnEditSucursal.removeClass('d-none');
                        $btnCanSucursal.addClass('d-none');
                        $btnGuSucursal.addClass('d-none');

                        objAcuerdoTarifa = new Object();
                        objAcuerdoTarifa = data.entidad;
                        $hfIdTarifario.val(objAcuerdoTarifa.id);
                        //$hfIdContrato.val(objAcuerdoTarifa.idcprvdr);
                        //$hfIdversion.val(objAcuerdoTarifa.idvcprvdr);
                        //$hfIdSucursal.val(objAcuerdoTarifa.idsprvdr);
                        $cboCCMedica.val(objAcuerdoTarifa.gdccmdca);
                        $txtCnsltaConsulta.val(objAcuerdoTarifa.cnslta);
                        $txtCnsltaInterconsulta.val(objAcuerdoTarifa.intrcnslta);
                        $txtFactorServicio.val(objAcuerdoTarifa.fsrvco);
                        $txtFactorHonorario.val(objAcuerdoTarifa.fhnrrs);
                        $txtFarmaciaDscto.val(objAcuerdoTarifa.fdscto);
                        $txtFarmaciaInsumo.val(objAcuerdoTarifa.finsms);
                        $txtHabIndividual.val(objAcuerdoTarifa.hindvdl);
                        $txtHabBipersonal.val(objAcuerdoTarifa.hbprsnal);
                        $txtHabSuite.val(objAcuerdoTarifa.hste);
                        $txtLrgEstanciaNDias.val(objAcuerdoTarifa.leds);
                        $txtLrgEstanciaDscto.val(objAcuerdoTarifa.ledscto);
                        $txtCostoTarifario.val(objAcuerdoTarifa.cstfinal);
                        $frmSucursal.AgregarCamposAuditoria(objAcuerdoTarifa);
                        //frmTarifario.inicio();
                        $btnNuProcedimiento.attr("disabled", false);

                    }
                })
                .fail(function () {
                    //bloquear los controles
                });
        },
        editar: function (data) {
            //$DtoIdSucursal.val($hfIdSucursal.val());
            //$DtoSucursal
            frmTarifario.habilitarControles();
            $btnNuSucursal.addClass('d-none');
            $btnEditSucursal.addClass('d-none');
            $btnCanSucursal.removeClass('d-none');
            $btnGuSucursal.removeClass('d-none');
        },
        insertar: function () {
            objAcuerdoTarifa = new Object();
            objAcuerdoTarifa.id = $hfIdTarifario.val();
            objAcuerdoTarifa.idacrdo = $hfIdAcuerdo.val();
            objAcuerdoTarifa.gdccmdca = $cboCCMedica.val();
            objAcuerdoTarifa.cnslta = $txtCnsltaConsulta.val();
            objAcuerdoTarifa.intrcnslta = $txtCnsltaInterconsulta.val();
            objAcuerdoTarifa.fsrvco = $txtFactorServicio.val();
            objAcuerdoTarifa.fhnrrs = $txtFactorHonorario.val();
            objAcuerdoTarifa.fdscto = $txtFarmaciaDscto.val();
            objAcuerdoTarifa.finsms = $txtFarmaciaInsumo.val();
            objAcuerdoTarifa.hindvdl = $txtHabIndividual.val();
            objAcuerdoTarifa.hbprsnal = $txtHabBipersonal.val();
            objAcuerdoTarifa.hste = $txtHabSuite.val();
            objAcuerdoTarifa.leds = $txtLrgEstanciaNDias.val();
            objAcuerdoTarifa.ledscto = $txtLrgEstanciaDscto.val();
            objAcuerdoTarifa.cstfinal = $txtCostoTarifario.val();
            objAcuerdoTarifa.gdestdo = $stdoSucursal.val();
            $.post("../ContratoProveedor/insertar-Csucursales", objAcuerdoTarifa)
                .done(function (idTarifa) {
                    Swal.fire({
                        icon: "success",
                        allowOutsideClick: false,
                        title: "Éxito",
                        text: "Se registró satisfactoriamente.",
                        confimButtonText: "Aceptar"
                    }).then((result) => {
                        $hfIdTarifario.val(idTarifa);
                        funcionAcuerdoTarifa.obtenerAcuerdoTarifario($hfIdAcuerdo.val());
                        funcionAcuerdoTarifa.configuracionProcedimientos();
                    });
                })
                .always(function () {
                    //bloquear los controles
                });
        },
        actualizar: function () {
            objAcuerdoTarifa = new Object();
            objAcuerdoTarifa.id = $hfIdTarifario.val();
            objAcuerdoTarifa.idacrdo = $hfIdAcuerdo.val();
            objAcuerdoTarifa.gdccmdca = $cboCCMedica.val();
            objAcuerdoTarifa.cnslta = $txtCnsltaConsulta.val();
            objAcuerdoTarifa.intrcnslta = $txtCnsltaInterconsulta.val();
            objAcuerdoTarifa.fsrvco = $txtFactorServicio.val();
            objAcuerdoTarifa.fhnrrs = $txtFactorHonorario.val();
            objAcuerdoTarifa.fdscto = $txtFarmaciaDscto.val();
            objAcuerdoTarifa.finsms = $txtFarmaciaInsumo.val();
            objAcuerdoTarifa.hindvdl = $txtHabIndividual.val();
            objAcuerdoTarifa.hbprsnal = $txtHabBipersonal.val();
            objAcuerdoTarifa.hste = $txtHabSuite.val();
            objAcuerdoTarifa.leds = $txtLrgEstanciaNDias.val();
            objAcuerdoTarifa.ledscto = $txtLrgEstanciaDscto.val();
            objAcuerdoTarifa.cstfinal = $txtCostoTarifario.val();
            objAcuerdoTarifa.gdestdo = $stdoSucursal.val();
            $.post("../ContratoProveedor/actualizar-Csucursales", objAcuerdoTarifa)
                .done(function () {
                    Swal.fire({
                        icon: "success",
                        allowOutsideClick: false,
                        title: "Éxito",
                        text: "Se actualizó satisfactoriamente.",
                        confimButtonText: "Aceptar"
                    }).then((result) => {
                        //$hfIdTarifario.val(idTarifa);
                        funcionAcuerdoTarifa.obtenerAcuerdoTarifario($hfIdAcuerdo.val());
                    });
                })
                .always(function () {
                    //bloquear los controles
                });
        },
        eliminar: function (id) {

        },
        //agregado 16.06
        tarifario: function (data) {
            
            if (data != 'SEGUS') {
                $DatosTarifa.addClass('d-none');
                
            } else
                $DatosTarifa.removeClass('d-none');
                
        },//fin
        Costotarifario: function (data) {
            
            if (data != 'SEGUS') {
                $IngresarCosto.removeClass("d-none");
            } else
                $IngresarCosto.addClass("d-none");
        },//fin

        guardar: function () {
            if ($hfactionTarifario.val() == "N") {
                funcionAcuerdoTarifa.insertar();
            } else {
                funcionAcuerdoTarifa.actualizar();
            }
        },
        configuracionProcedimientos: function(){
            Swal.fire({
                title: "¿Desea configurar los procedimientos?",
                icon: "info",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                confirmButtonClass: "btn btn-danger",
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    configDTEquivalencias.reload();
                    $mdlProcedimiento.modal('show');
                }
            });
        },

        guardarTarifa: function () {
            objAcuerdoTarifaDet = new Object();
            var row;
            var aEntidad = [];

            //Fé
            if ($hfDatoTarifario.val() == "SEGUS") {
                console.log("entro segus");
                for (var i = 0; i < configDTTarifarioSegus.asignados.length; i++) {
                    row = configDTTarifarioSegus.aTarifas.filter(function (item) {
                        return item.gdttrfrio == configDTTarifarioSegus.asignados[i]
                    })[0];
                    objAcuerdoTarifaDet = row;
                    aEntidad.push(objAcuerdoTarifaDet)
                }
            } else if ($hfDatoTarifario.val() == "CMPS") {
                console.log("entro cpms");
                for (var i = 0; i < configDTTarifarioCpms.asignados.length; i++) {
                    row = configDTTarifarioCpms.aTarifas.filter(function (item) {
                        return item.gdttrfrio == configDTTarifarioCpms.asignados[i]
                    })[0];
                    objAcuerdoTarifaDet = row;
                    aEntidad.push(objAcuerdoTarifaDet)
                }
            } else {
                console.log("entro nomenclador");
                for (var i = 0; i < configDTTarifarioNomenclador.asignados.length; i++) {
                    row = configDTTarifarioNomenclador.aTarifas.filter(function (item) {
                        return item.gdttrfrio == configDTTarifarioNomenclador.asignados[i]
                    })[0];
                    objAcuerdoTarifaDet = row;
                    aEntidad.push(objAcuerdoTarifaDet)
                }
            }
            

            objTarifaProcedimiento = new Object();
            objTarifaProcedimiento.prcdmntos = JSON.stringify(aEntidad);
            objTarifaProcedimiento.idacrdo = $hfIdAcuerdo.val();
            $.post("../ContratoProveedor/guardaracontratoTarifadet", objTarifaProcedimiento)
                .done(function () {
                    Swal.fire({
                        icon: "success",
                        allowOutsideClick: false,
                        title: "Éxito",
                        text: "Se registró satisfactoriamente.",
                        confimButtonText: "Aceptar"
                    }).then((result) => {
                        $mdlProcedimiento.modal('hide');
                        configDTDetTarifa.reload();
                    });
                })
        }
    }
    var funcionAcuerdoCobertura = {
        nuevo: function () {
            $btnMdlCbrtraBnfcio.attr("disabled", false);
            $cboDiagIncluido.attr("disabled", false);
            $cboProcIncluido.attr("disabled", false);
            $txtCostoFijoPac.attr("disabled", false);
            $txtNDiasAcumulados.attr("disabled", false);
            $txtValorCapita.attr("disabled", false);
            $btnNuCobertura.addClass("d-none");
            $btnCanCobertura.removeClass("d-none");
            $btnGuCobertura.removeClass("d-none");
            frmCobertura.validacion.eventos.reset(); //15.07
            $frmCoberturas.AgregarCamposDefectoAuditoria();//15.07
            $frmCoberturas.DeshabilitarCamposAuditoria();//15.07
        },
        obtener: function () { },
        editar: function (data) {
            $hfactionCobertura.val("E");
            funcionAcuerdoCobertura.nuevo();
            $hfIdCoberturaDet.val(data.id);
            $hfIdBeneficio.val(data.idcbrtra);
            $txtIdBeneficio.val(data.codbnfcio);
            $txtBeneficio.val(data.dscrpcn);
            $cboDiagIncluido.val(data.gddincldo);
            $cboProcIncluido.val(data.gdpincldo);
            $txtCostoFijoPac.val(data.cfpimprte)
            $txtNDiasAcumulados.val(data.cfpds);
            $txtValorCapita.val(data.cfpvcaptl);
            $stdoCobertura.val(data.gdestdo);
            //funcionAcuerdos.obtener(data.id);
            $btnNuCobertura.addClass("d-none");
            $btnCanCobertura.removeClass("d-none");
            $btnGuCobertura.removeClass("d-none");
            $btnMdlSucursal.attr("disabled", false);
            $stdoEstadoAcuerdo.attr("disabled", false);
            $frmCoberturas.AgregarCamposAuditoria(data);
        },
        insertar: function () {
            console.log("insertar");
            objAcuerdoCoberturaDet = new Object();
            objAcuerdoCoberturaDet.id = $hfIdCoberturaDet.val();
            objAcuerdoCoberturaDet.idacrdo = $hfIdAcuerdo.val();
            objAcuerdoCoberturaDet.idcbrtra = $hfIdBeneficio.val();
            objAcuerdoCoberturaDet.gddincldo = $cboDiagIncluido.val();
            objAcuerdoCoberturaDet.gdpincldo = $cboProcIncluido.val();
            objAcuerdoCoberturaDet.cfpimprte = $txtCostoFijoPac.val();
            objAcuerdoCoberturaDet.cfpds = $txtNDiasAcumulados.val();
            objAcuerdoCoberturaDet.cfpvcaptl = $txtValorCapita.val();
            objAcuerdoCoberturaDet.gdestdo = $stdoCobertura.val();
            $.post("../ContratoProveedor/insertarcontratocoberturadet", objAcuerdoCoberturaDet)
                .done(function (idCoberturaDet) {
                    Swal.fire({
                        icon: "success",
                        allowOutsideClick: false,
                        title: "Éxito",
                        text: "Se registró satisfactoriamente.",
                        confimButtonText: "Aceptar"
                    }).then((result) => {
                        //$hfIdCoberturaDet.val(idCoberturaDet);
                        frmCobertura.inicio();
                        frmCobertura.reset();
                        configDTCobertura.reload();
                    });
                })
                .always(function () {
                    //bloquear los controles
                });
        },
        actualizar: function () {
            objAcuerdoCoberturaDet = new Object();
            objAcuerdoCoberturaDet.id = $hfIdCoberturaDet.val();
            objAcuerdoCoberturaDet.idacrdo = $hfIdAcuerdo.val();
            objAcuerdoCoberturaDet.idcbrtra = $hfIdBeneficio.val();
            objAcuerdoCoberturaDet.gddincldo = $cboDiagIncluido.val();
            objAcuerdoCoberturaDet.gdpincldo = $cboProcIncluido.val();
            objAcuerdoCoberturaDet.cfpimprte = $txtCostoFijoPac.val();
            objAcuerdoCoberturaDet.cfpds = $txtNDiasAcumulados.val();
            objAcuerdoCoberturaDet.cfpvcaptl = $txtValorCapita.val();
            objAcuerdoCoberturaDet.gdestdo = $stdoCobertura.val();
            $.post("../ContratoProveedor/actualizarcontratocoberturadet", objAcuerdoCoberturaDet)
                .done(function () {
                    Swal.fire({
                        icon: "success",
                        allowOutsideClick: false,
                        title: "Éxito",
                        text: "Se actualizó satisfactoriamente.",
                        confimButtonText: "Aceptar"
                    }).then((result) => {
                        frmCobertura.inicio();
                        frmCobertura.reset();
                        configDTCobertura.reload();
                    });
                })
                .always(function () {
                    //bloquear los controles
                });
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
                    $.post("../ContratoProveedor/eliminarcontratocoberturadet", parametro)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                //configDTAcuerdos.reload();
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
        guardar: function () {
            if ($hfactionCobertura.val() == "N") {
                funcionAcuerdoCobertura.insertar();
            } else {
                funcionAcuerdoCobertura.actualizar();
            }
        },
        cargarTramacobertura: function () {
            var Archivo = ($ArchivoCobertura)[0].files[0];
            if (($ArchivoCobertura)[0].files.length <= 0) {
                alert("ingrese el archivo.");
                return
            } else {
                var dataForm = new FormData();
                dataForm.append("f_resultado", Archivo);
                dataForm.append("s_hfIdAcuerdo", $hfIdAcuerdo.val());
                $.ajax({
                    url: "../ContratoProveedor/insertar-tramacobertura",
                    type: "POST",
                    data: dataForm,
                    contentType: false,
                    processData: false,
                    async: true,
                    success: function (result) {
                        if (result.berror == false) {
                            alert(result.mnsje);
                            console.log(result.lresult);
                            // odtLaboratorio.ajax.reload();
                            configDTDetTarifa.ajax.reload();
                        }
                        else {
                            alert(result);
                            configDTCobertura.reload();
                            $lblarchivoCob.text("Seleccionar Archivo...");

                        }
                    }
                });
            }
        }

    }
    //#endregion
    //#region Formulario
    var frmAcuerdo = {
        inicio: function () {
            $frmAcuerdoDet.trigger("reset");
            $nroContrato.val($hfIdContrato.val());
            $nroVersion.val($hfnumversion.val());
            $IdPrvdr.val($hfIdProveedor.val());
            $DtoPrvdrAcuerdo.val($hfDtoPrvdrTarifaCobertura.val());
            $btnNuAcuerdoScrsl.removeClass("d-none");
            $btnCanAcuerdoScrsl.addClass("d-none");
            $btnGuAcuerdoScrsl.addClass("d-none");
            $cboSelecTarifario.attr("disabled", true);
            $btnMdlSucursal.attr("disabled", true);
            $cboEstadoAcuerdo.attr("disabled", true); //$stdoEstadoAcuerdo.attr("disabled", true);
            $frmAcuerdoDet.AgregarCamposDefectoAuditoria();
            //$frmAcuerdoDet.DeshabilitarCamposAuditoria();//15.07
            frmAcuerdo.validacion.eventos.reset();
        },
        validacion: {
            objeto: $frmAcuerdoDet.validate({
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
                    txtIdSucursalDAcuerdo: {
                        required: true,
                    }
                }
            }),
            eventos: {
                reset: function () {
                    frmAcuerdo.validacion.objeto.resetForm();
                }
            }
        },
        init: function () { frmAcuerdo.inicio(); }
    }
    var frmTarifario = {
        inicio: function () {
            frmTarifario.reset();
            $frmSucursal.find('input').attr("disabled", true);
            $btnMdlSucursal.attr("disabled", true);
            $cboTipContrato.attr("disabled", true);
            $cboCCMedica.attr("disabled", true);
            $stdoSucursal.attr("disabled", true);
            $ArchivoTarifa.attr("disabled", false);
            $ArchivoCobertura.attr("disabled", false);
            $btnNuProcedimiento.attr("disabled", true);

            if ($hfactionTarifario.val() == "N") {
                $frmSucursal.AgregarCamposDefectoAuditoria();

            }
        },
        reset: function () {
            $cboCCMedica.val("");
            $txtCnsltaConsulta.val("");
            $txtCnsltaInterconsulta.val("");
            $txtFactorServicio.val("");
            $txtFactorHonorario.val("");
            $txtFarmaciaDscto.val("");
            $txtFarmaciaInsumo.val("");
            $txtHabIndividual.val("");
            $txtHabBipersonal.val("");
            $txtHabSuite.val("");
            $txtLrgEstanciaNDias.val("");
            $txtLrgEstanciaDscto.val("");
            $txtCostoTarifario.val("");
        },
        habilitarControles: function () {
            $btnMdlSucursal.attr("disabled", false);
            $stdoSucursal.attr("disabled", false);
            //$cboTipContrato.attr("disabled", false);
            $cboCCMedica.attr("disabled", false);
            $txtCostoTarifario.attr("disabled", false);//18.06
            $txtCnsltaConsulta.attr("disabled", false);
            $txtCnsltaInterconsulta.attr("disabled", false);
            $txtFactorServicio.attr("disabled", false);
            $txtFactorHonorario.attr("disabled", false);
            $txtFarmaciaDscto.attr("disabled", false);
            $txtFarmaciaInsumo.attr("disabled", false);
            $txtHabIndividual.attr("disabled", false);
            $txtHabBipersonal.attr("disabled", false);
            $txtHabSuite.attr("disabled", false);
            $txtLrgEstanciaNDias.attr("disabled", false);
            $txtLrgEstanciaDscto.attr("disabled", false);
        },
        validacion: {
            objeto: $frmSucursal.validate({
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
                    cboCCMedica: {
                        required: true,
                    },
                    txtCnsltaConsulta: {
                        required: true,
                    },
                    txtCnsltaInterconsulta: {
                        required: true,
                    },
                    txtFactorServicio: {
                        required: true,
                    },
                    txtFactorHonorario: {
                        required: true,
                    },
                    txtFarmaciaDscto: {
                        required: true,
                    },
                    txtFarmaciaInsumo: {
                        required: true,
                    },
                    txtHabIndividual: {
                        required: true,
                    },
                    txtHabBipersonal: {
                        required: true,
                    },
                    txtHabSuite: {
                        required: true,
                    },
                    txtLrgEstanciaNDias: {
                        required: true,
                    },
                    txtLrgEstanciaDscto: {
                        required: true,
                    }
                }
            }),
            eventos: {
                reset: function () {
                    frmTarifario.validacion.objeto.resetForm();
                }
            }
        },
        init: function () {
            //frmTarifario.inicio();
            $btnNuSucursal.addClass('d-none');
            $btnEditSucursal.addClass('d-none');
            $btnCanSucursal.addClass('d-none');
            $btnGuSucursal.addClass('d-none');
            frmTarifario.inicio();
            funcionAcuerdoTarifa.obtenerAcuerdoTarifario($hfIdAcuerdo.val());
        }
    }
    var frmCobertura = {
        inicio: function () {
            $btnNuCobertura.removeClass("d-none");
            $btnCanCobertura.addClass("d-none");
            $btnGuCobertura.addClass("d-none");
            //$frmCoberturas.find('input').attr("disabled", true);
            $btnMdlCbrtraScrsl.attr("disabled", true);
            $btnMdlCbrtraBnfcio.attr("disabled", true);
            $cboTipContratoCbrtra.attr("disabled", true);
            $cboDiagIncluido.attr("disabled", true);
            $cboProcIncluido.attr("disabled", true);
            $stdoCobertura.attr("disabled", true);
            $txtNDiasAcumulados.attr("disabled", true);
            $frmCoberturas.AgregarCamposDefectoAuditoria();
            frmCobertura.validacion.eventos.reset();
        },
        validacion: {
            objeto: $frmCoberturas.validate({
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
                    txtIdBeneficio: {
                        required: true,
                    },
                    txtBeneficio: {
                        required: true,
                    },
                    cboDiagIncluido: {
                        required: true,
                    },
                    cboProcIncluido: {
                        required: true,
                    },
                    txtCostoFijoPac: {
                        required: true,
                    },
                    txtNDiasAcumulados: {
                        required: true,
                    },
                    txtValorCapita: {
                        required: true,
                    }
                }
            }),
            eventos: {
                reset: function () {
                    frmCobertura.validacion.objeto.resetForm();
                }
            }
        },
        reset: function () {
            $hfIdCoberturaDet.val("");
            $hfIdBeneficio.val("");
            $txtIdBeneficio.val("");
            $txtBeneficio.val("");
            $cboDiagIncluido.val("");
            $cboProcIncluido.val("");
            $txtCostoFijoPac.val("");
            $txtNDiasAcumulados.val("");
            $txtValorCapita.val("");
            $stdoCobertura.val("");
        },
        init: function () {
            frmCobertura.inicio();
        }
    }
    //#endregion
    //#endregion
    return {
        init: function () {
            configDTContratoProveedor.init();
            eventosIncrustados.init();
            configDatePickers.init();
            IniEstados.init();

            configFormContratoProveedor.init();
            frmCobertura.init();
            eventoAcuerdos.init();
            eventoTarifario.init();
            eventoCobertura.init();
            bsCustomFileInput.init();
            //#endregion
        }
    };
}();
$(() => {
    InitContratoProveedor.init();
})