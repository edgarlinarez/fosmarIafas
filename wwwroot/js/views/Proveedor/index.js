const jsPagProveedor = function () {
    //#region Variables Proveedor
    $btnGProveedor = $("#btnGProveedor");
    $btnVListado = $("#btnVListado");
    $datosAyN = $("#cnt-ape-nom");
    $frmProveedor = $("#frmProveedor");
    $dtProveedor = $("#dtProveedor");
    $btnNuevoProveedor = $("#btnNuevoProveedor");
    $hfactionProveedor = $("#hfactionProveedor");
    $Lista_tab = $("#Lista-tab");
    $Datos_tab = $("#Datos-tab");
    $Equivalencia_tab = $("#Equivalencia-tab");
    $Sucursal_tab = $("#Sucursal-tab");
    $hfIdPersona = $("#hfIdPersona");
    $txtIdProveedor = $("#txtID");
    $cboTDocumento = $("#cboTDocumento");
    $txtNDocumento = $("#txtNDocumento");
    $txtRazonSocial = $("#txtRazonSocial");
    $txtAPaterno = $("#txtAPaterno");
    $txtAMaterno = $("#txtAMaterno");
    $txtPNombre = $("#txtPNombre");
    $txtSNombre = $("#txtSNombre");
    $hfIdDireccion = $("#hfIdDireccion");
    $txtDireccion = $("#txtDireccionPers");
    $hfIdTelefono = $("#hfIdTelefono");
    $txtTelefono = $("#txtTelefonoPers");
    $hfIdCorreo = $("#hfIdCorreo");
    $txtCorreo = $("#txtCorreoPers");
    $cboTiProveedor = $("#cboTiProveedor");
    $cboTiRProveedor = $("#cboTiRProveedor");
    $cboZNaval = $("#cboZNaval");
    $cboIndInstitucional = $("#cboIndInstitucional");
    $txtPWeb = $("#txtPWeb");
    $cboIndExIGV = $("#cboIndExIGV");
    $cboGEconomico = $("#cboGEconomico");
    $cboIndCertificado = $("#cboIndCertificado");
    $stdoProveedor = $frmProveedor.find("[name='GDESTDO']");
    $mdlBuscarPersona = $("#mdlBuscarPersona");
    $mdlBuscarDireccion = $("#mdlBuscarDireccion");
    $mdlBuscarTelefono = $("#mdlBuscarTelefono");
    $mdlBuscarCorreo = $("#mdlBuscarCorreo");

    $frmBusquedaPersona = $("#frmBusquedaPersona");
    $btnMdlBsqPersona = $("#btnMdlBsqPersona");
    $btnBuscarPersona = $("#btnBuscarPersona");
    $cboTipoDocumento = $("#cboTipoDocumento");
    $txtDocumento = $("#txtDocumento");
    $txtNombreRazon = $("#txtNombreRazon");
    //$cboEstadoBsqPersona = $("#cboEstado");
    $dtBsqPersona = $("#dtBsqPersona");
    $cboTPersona = $("#cboTPersona");

    $btnNuevoDireccion = $("#btnNuevoDireccion");
    $btnNuevoTelefono = $("#btnNuevoTelefono");
    $btnNuevoCorreo = $("#btnNuevoCorreo");
    $btnmdlDireccion = $("#btnmdlDireccion");
    $btnmdlTelefono = $("#btnmdlTelefono");
    $btnmdlCorreo = $("#btnmdlCorreo");

    $dtBsqDireccion = $("#tabla_direccion");
    $dtBsqTelefono = $("#tabla_telefono");
    $dtBsqCorreo = $("#tabla_correo");
    $dtCuentaBancoproveedor = $("#dtCuentaBancoproveedor");

    $cboDireccionPers = $("#cboDireccionPers");
    $cboTelefonoPers = $("#cboTelefonoPers");
    $cboCorreoPers = $("#cboCorreoPers");
    $hfIdDocumento = $("#hfIdDocumento");
    $hftPersona = $("#hftPersona");
    $hfDatosPrv = $("#hfDatosPrv");
    $hfDatosScr = $("#hfDatosScr");
    $cboTEmpresa = $("#cboTEmpresa");

    //#endregion
    //#region Variable equivalencia
    $frmEquivalencia = $("#frmEquivalencia");
    $cboTarifario = $("#cboTarifario");
    $txtIdTarifario = $("#txtIdTarifario");
    $txtDesTarifario = $("#txtDesTarifario");
    $txtIdProcedimiento = $("#txtIdProcedimiento");
    $txtDesProcedimiento = $("#txtDesProcedimiento");
    $txtUnProcedimiento = $("#txtUnProcedimiento");
    $hfUnProcedimiento = $("#hfUnProcedimiento");
    $btnNuEquivalencia = $("#btnNuEquivalencia");
    $btnGuEquivalencia = $("#btnGuEquivalencia");
    $dtEquivalenciaPrv = $("#dtEquivalenciaPrv");
    $btnmdlTarifario = $("#btnmdlTarifario");
    $dtTarifario = $("#dtTarifario");
    $dtProcedimiento = $("#dtProcedimiento");
    $btnmdlProcedimiento = $("#btnmdlProcedimiento");
    $hfactionEquivalencia = $("#hfactionEquivalencia");
    $datoProvEquivalencia = $frmEquivalencia.find("[name='txtDatoProveedor']");
    $stdoEquivalencia = $frmEquivalencia.find("[name='GDESTDO']");
    $mdlBuscarTarifario = $("#mdlBuscarTarifario");
    $mdlBuscarProcedimiento = $("#mdlBuscarProcedimiento");
    $hfIdEquivalencia = $("#hfIdEquivalencia");
    $hfIdTarifario = $("#hfIdTarifario");
    $hfIdProcedimiento = $("#hfIdProcedimiento");
    $txtCostoProcedimiento = $("#txtCostoProcedimiento");
    $chkCostof = $("#chkCostof");
    $chkUnidad = $("#chkUnidad");
    $segusTab = $("#Segus-tab");
    $cpmsTab = $("#Cpms-tab");
    $serviciosTab = $("#Servicios-tab");
    $hfTipoEquivalencia = $("#hfTipoEquivalencia");
    $mdlTitleTarifario = $("#mdlTitleTarifario");
    //#endregion
    //#region variable sucursal
    $frmBeneficio = $("#frmBeneficio");
    $frmSucursal = $("#frmSucursal");
    $btnNuSucursal = $("#btnNuSucursal");
    $dtBeneficio = $("#dtBeneficio");
    $dtSucursal = $("#dtSucursal");
    $TabPillBeneficio = $("#Tbbeneficio-tab");
    $TabPillSucursal = $("#Tbsucursal-tab");
    $hfIdSucursal = $("#hfIdSucursal");
    $cboPrdtrmndoScrsl = $("#cboPrdtrmndoScrsl");
    $txtDescripcionScrsl = $("#txtDescripcionScrsl");
    $txtAbrvtraScrsl = $("#txtAbrvtraScrsl");
    $txtDireccionScrsl = $("#txtDireccionScrsl");
    $txtReferenciaScrsl = $("#txtReferenciaScrsl");
    $cboDepartamento = $("#cboDepartamento");
    $cboProvincia = $("#cboProvincia");
    $cboDistrito = $("#cboDistrito");
    $txtNRegistroSusalud = $("#txtNRegistroSusalud");
    $txtfinivigencia = $("#txtfinivigencia");
    $txtffinvigencia = $("#txtffinvigencia");
    $cboImpCarta = $("#cboImpCarta");
    $txtDatoProveedorSuc = $frmSucursal.find("[name='txtDatoProveedor']");
    $stdoSucursal = $frmSucursal.find("[name='GDESTDO']");
    $btnGuSucursal = $("#btnGuSucursal");
    $mdlSucursal = $("#mdlSucursal");
    $mdlSucursalLabel = $("#mdlSucursalLabel");
    $rngFechasSUSALUD = $(".rngFechasSUSALUD");
    $hfactionSucursal = $("#hfactionSucursal");
    //#endregion
    //#region variable Beneficios
    $frmBeneficio = $("#frmBeneficio");
    $txtDatoProveedorBen = $frmBeneficio.find("[name='txtDatoProveedor']");
    $dtBeneficioSrcl = $("#dtBeneficioSrcl");
    $dtBeneficio = $("#dtBeneficio");
    $mdlBuscarBeneficio = $("#mdlBuscarBeneficio");
    $btnNuBeneficio = $("#btnNuBeneficio");
    $btnGuBeneficios = $("#btnGuBeneficios");
    $txtDatoProvSucursal = $("#txtDatoProvSucursal");
    //#endregion Beneficios

    //#region variables TarifarioProveedor
    $frmTarifarioEquivalencia = $("#frmTarifarioEquivalencia");
    $mdlBuscarTarifario = $("#mdlBuscarTarifario");
    $dtTarifarioPrvdr = $("#dtTarifarioPrvdr");
    $btnNuEquivalencia = $("#btnNuEquivalencia");
    $btnNuTarifarios = $("#btnNuTarifarios");
    $btnGuTarifarios = $("#btnGuTarifarios");
    $dtTarifario = $("#dtTarifario");
    //#endregion
    //#region variables CpmsProveedor
    $Cpms_tab = $("#Cpms-tab");
    $btnNuCpms = $("#btnNuCpms");
    $mdlBuscarCpms = $("#mdlBuscarCpms");
    $mdlTitleCpms = $("#mdlTitleCpms");
    $dtCpmsPrvdr = $("#dtCpmsPrvdr");
    $dtCpms = $("#dtCpms");
    $btnGuCpms = $("#btnGuCpms");
    //#endregion
    //#region variables NomencladorProveedor

    $Nomenclador_tab = $("#Nomenclador-tab");
    $btnNuNomenclador = $("#btnNuNomenclador");
    $mdlBuscarNomenclador = $("#mdlBuscarNomenclador");
    $dtNomencladorPrvdr = $("#dtNomencladorPrvdr");
    $mdlTitleNomenclador = $("#mdlTitleNomenclador");
    $dtNomenclador = $("#dtNomenclador");
    $btnGuNomenclador = $("#btnGuNomenclador");
    //#endregion


    //#region variable CuentasProv
    $dtCtaProveedor = $("#dtCtaProveedor");
    $mdlBuscarCuentaBanco = $("#mdlBuscarCuentaBanco");
    $BuscarCuentaBanco=$(".btn-bcb")
    //#endregion
    //#region Datatables
    var configDTProveedor = {
        objeto: null,
        opciones: {
            filter: true,
            ajax: {
                dataType: "JSON",
                url: "/Proveedor/listar-tabla",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.gdestdo = "";
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
                        //if ($accesoEditarPersona.val() == "True") {
                        tpm += `<button type="button" class="btn btn-info btn-xs btn-editar" data-id="${data.id}" title="Editar"><span><i class="la la-edit"></i></span></button>`;
                        //}
                        //if ($accesoEliminarPersona.val() == "True") {
                        tpm += ` <button title="Cambiar estado" data-id="${data.id}" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>`;
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
                configDTProveedor.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesProveedor.eliminar(id)
                })
            },
            editar: function () {
                configDTProveedor.objeto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");
                    var data = configDTProveedor.objeto.row($(this).parents('tr')).data();
                    console.log(data.dprvdr);
                    $hfDatosPrv.val(data.dprvdr);
                    funcionesProveedor.editar(id);
                })
            },
            init: function () {
                configDTProveedor.eventos.eliminar();
                configDTProveedor.eventos.editar();
            }
        },
        reload: function () {
            configDTProveedor.objeto.ajax.reload();
        },
        init: function () {
            configDTProveedor.objeto = $dtProveedor.DataTable(configDTProveedor.opciones);
            configDTProveedor.eventos.init();
            /*
            if (configDTCorreo.objeto == null || configDTCorreo.objeto == "" || configDTCorreo.objeto == undefined) {
                configDTCorreo.objeto = $tblCorreo.DataTable(configDTCorreo.opciones);
                configDTCorreo.eventos.init();

            } else { configDTCorreo.objeto.ajax.reload(); }

             */
        }
    }
    var configDTPersona = {
        objeto: null,
        opciones: {
            filter: false,
            ajax: {
                dataType: "JSON",
                url: "/Proveedor/listar-persona",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.tPersona = $cboTPersona.val();
                    data.tDocumento = $cboTipoDocumento.val();
                    data.nDocumento = $txtDocumento.val();
                    data.Datos = $txtNombreRazon.val();
                    //data.fDesde,
                    //data.fHasta,
                    //data.Estado = $cboEstadoBsqPersona.val();
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
                            tpm = `<span><i class="fa fa-circle text-success" title="Activo"></i></span>`;
                        }
                        else {
                            tpm = `<span><i class="fa fa-circle text-danger" title="Inactivo"></i></span>`;
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
                $dtBsqPersona.on('click', 'tbody tr', function () {
                    var data = configDTPersona.objeto.row(this).data();
                    EntidadPersona = new Object();
                    EntidadPersona = data;
                    if (typeof (EntidadPersona) != 'undefined') {
                        funcionesPersona.obtener(EntidadPersona.id);
                    }
                })
            },
            init: function () {
                configDTPersona.eventos.selectRow();
            }
        },
        reload: function () {
            configDTPersona.objeto.ajax.reload();
        },
        init: function () {
            configDTPersona.objeto = $dtBsqPersona.DataTable(configDTPersona.opciones);
            configDTPersona.eventos.init();
        },
    };
    var configDTCorreo = {
        objeto: null,
        tienePrincipal: false,
        opciones: {
            ajax: {
                dataType: "JSON",
                url: "../Correo/listarCorreo",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idprsna = $hfIdPersona.val();
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
                            tpm += `SI`;
                            configDTCorreo.tienePrincipal = true;
                        }
                        else {
                            tpm += `NO`;
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
                $dtBsqCorreo.on('click', 'tbody tr', function () {
                    var data = configDTCorreo.objeto.row(this).data();
                    objCorreo = new Object();
                    objCorreo = data;
                    if (typeof (objCorreo) != 'undefined') {
                        funcionesProveedor.obtenerCorreo(objCorreo);
                    }
                })
            },
            init: function () {
                configDTCorreo.eventos.selectRow();
            }
        },
        reload: function () {
            if (configDTCorreo.objeto == null || configDTCorreo.objeto == "" || configDTCorreo.objeto == undefined) {
                configDTCorreo.objeto = $dtBsqCorreo.DataTable(configDTCorreo.opciones);
                configDTCorreo.eventos.init();

            } else { configDTCorreo.objeto.ajax.reload(); }
        },
    };
    var configDTDireccion = {
        objeto: null,
        tienePrincipal: false,
        tipoDirecciones: [],
        opciones: {
            ajax: {
                dataType: "JSON",
                url: "../Direccion/listarDireccion",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idprsna = $hfIdPersona.val();
                    data.id = "";
                }
            },
            columns: [
                {
                    title: "Tipo Direccion",
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
                            tpm += `SI`;
                            configDTDireccion.tienePrincipal = true;
                        }
                        else {
                            tpm += `NO`;
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
                        tpm += `<div class="row text-left">
                                        <div class="col-12 text-break">${data.gdtvia + " " + data.via + " " + data.nvia + " - " + data.gdtdzna + " " + data.zna + " - " + data.nintrr + " - " + data.rfrncia}</div>
                                        <div class="col-12 font-weight-bold">${data.cubgeo}</div>
                                    </div>`;
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
                $dtBsqDireccion.on('click', 'tbody tr', function () {
                    var data = configDTDireccion.objeto.row(this).data();
                    objDireccion = new Object();
                    objDireccion = data;
                    if (typeof (objDireccion) != 'undefined') {
                        funcionesProveedor.obtenerDireccion(objDireccion);
                    }
                })
            },
            init: function () {
                configDTDireccion.eventos.selectRow();
            }
        },
        reload: function () {
            configDTDireccion.tipoDirecciones = [];
            if (configDTDireccion.objeto == null || configDTDireccion.objeto == "" || configDTDireccion.objeto == undefined) {
                configDTDireccion.objeto = $dtBsqDireccion.DataTable(configDTDireccion.opciones);
                configDTDireccion.eventos.init()
            } else { configDTDireccion.objeto.ajax.reload(); }
        },

    };
    var configDTTelefono = {
        objeto: null,
        tienePrincipal: false,
        opciones: {
            ajax: {
                dataType: "JSON",
                url: "../Telefono/listarTelefono",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idprsna = $hfIdPersona.val();
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
                            tpm += `SI`;
                            configDTTelefono.tienePrincipal = true;
                        }
                        else {
                            tpm += `NO`;
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
                $dtBsqTelefono.on('click', 'tbody tr', function () {
                    var data = configDTTelefono.objeto.row(this).data();
                    objTelefono = new Object();
                    objTelefono = data;
                    if (typeof (objTelefono) != 'undefined') {
                        funcionesProveedor.obtenerTelefono(objTelefono);
                    }
                })
            },
            init: function () {
                configDTTelefono.eventos.selectRow();
            }
        },
        reload: function () {
            if (configDTTelefono.objeto == null || configDTTelefono.objeto == "" || configDTTelefono.objeto == undefined) {
                configDTTelefono.objeto = $dtBsqTelefono.DataTable(configDTTelefono.opciones);
                configDTTelefono.eventos.init();
            } else { configDTTelefono.objeto.ajax.reload(); }
        },

    };
    var configDTBeneficio = {
        asignados: [],
        noAsignados: [],
        swCheckedAll: false,
        estadoPadre: false,
        func: {
            addItem: function (array, item) {
                var i = array.includes((item))
                i || array.push((item));
            },
            delItem: function (array,item) {
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
                var ctNA = configDTBeneficio.noAsignados.length;
                if (configDTBeneficio.swCheckedAll && ctNA == 0) {
                    $dtBeneficio.find(".chkPadre").prop("checked", true);
                    if (configDTBeneficio.swCheckedAll == false) configDTBeneficio.swCheckedAll = true;
                }
            },
            cacheChk: function (id) {
                var bool = false;
                if (configDTBeneficio.swCheckedAll && configDTBeneficio.estadoPadre) {
                    return true;
                } else {
                    if (configDTBeneficio.swCheckedAll) {
                        bool = !configDTBeneficio.noAsignados.includes((id).toString());
                    } else {
                        bool = configDTBeneficio.asignados.includes((id).toString());
                    }
                }
                //console.log(bool);
                return bool;
            },
            init: function () {
                $dtBeneficio.find(".chkPadre").is(':checked') && $dtBeneficio.find(".chkPadre").prop("checked", false);
                $dtBeneficio.find(".chkHijos").is(':checked') && $dtBeneficio.find(".chkHijos").prop("checked", false);
                configDTBeneficio.swCheckedAll = false;
                configDTBeneficio.estadoPadre = false;
                configDTBeneficio.asignados = [];
                configDTBeneficio.noAsignados = [];
            }
        },
        objeto: null,
        opciones: {
            ajax: {
                dataType: "JSON",
                url: "../Proveedor/listar-dtBeneficio",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.gdestdo = "A"
                    data.idprvdr = $txtIdProveedor.val();
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
                        var checking = configDTBeneficio.func.cacheChk(data.id);
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
                    data: "codbnfcio",
                    width: '10%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Grupo Beneficio",
                    data: "gbdscrpcn",
                    width: '40%',
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
                    title: "Tip. Prestación",
                    data: "gdtprstcn",
                    width: '10%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Tip. Cobertura",
                    data: "tcstds",
                    width: '10%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Cod. Siteds",
                    data: "cstds",
                    width: '10%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN", width: '10%',
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
                    data: "uedcn", width: '10%',
                    orderable: false,
                    class: "d-none"
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
                configDTBeneficio.objeto.on("change", ".chkPadre", function () {
                    configDTBeneficio.estadoPadre = $(this).is(":checked");
                    if (configDTBeneficio.swCheckedAll == false) configDTBeneficio.swCheckedAll = true;
                    if (!configDTBeneficio.estadoPadre) configDTBeneficio.swCheckedAll = false; //verificar
                    configDTBeneficio.func.delAll(configDTBeneficio.asignados);
                    configDTBeneficio.func.delAll(configDTBeneficio.noAsignados);
                    var Items = $(".chkHijos");
                    $(Items).each(function () {
                        $(this).prop("checked", configDTBeneficio.estadoPadre);
                    });
                    //console.log('Estatico Padre: ' + configDTBeneficio.swCheckedAll);
                    //console.log('asignados: ' + configDTBeneficio.asignados);
                    //console.log('no asignados: ' + configDTBeneficio.noAsignados);
                })
            },
            chkhijos: function () {
                configDTBeneficio.objeto.on("change", ".chkHijos", function () {
                    var chkPadre = $dtBeneficio.find(".chkPadre");
                    if ($(chkPadre).is(':checked')) { $(chkPadre).prop("checked", false); configDTBeneficio.estadoPadre = false; }
                    if (configDTBeneficio.swCheckedAll) {
                        $(this).is(':checked') ? configDTBeneficio.func.delItem(configDTBeneficio.noAsignados, $(this)[0].value) : configDTBeneficio.func.addItem(configDTBeneficio.noAsignados, $(this)[0].value);
                        configDTBeneficio.func.valAll();
                    } else {
                        $(this).is(':checked') ? configDTBeneficio.func.addItem(configDTBeneficio.asignados, $(this)[0].value) : configDTBeneficio.func.delItem(configDTBeneficio.asignados, $(this)[0].value);
                    }
                    //console.log('asignados: ' + configDTBeneficio.asignados);
                    //console.log('no asignados: ' + configDTBeneficio.noAsignados);
                })
            },
            drawRow: function () {
                configDTBeneficio.objeto.on("draw", function () {
                    var Items = $dtBeneficio.find('tbody tr .chkHijos');
                    $(Items).each(function () {
                        //configDTBeneficio.swCheckedAll && configDTBeneficio.func.addItem($(this)[0].value); 
                    });
                    console.log('asignados: ' + configDTBeneficio.asignados);
                    console.log('no asignados: ' + configDTBeneficio.noAsignados);
                })
            },
            init: function () {
                configDTBeneficio.eventos.chkpadre();
                configDTBeneficio.eventos.chkhijos();
                //configDTBeneficio.eventos.drawRow();
            }
        },
        reload: function () {
            if (configDTBeneficio.objeto == null || configDTBeneficio.objeto == "" || configDTBeneficio.objeto == undefined) {
                configDTBeneficio.objeto = $dtBeneficio.DataTable(configDTBeneficio.opciones);
                configDTBeneficio.eventos.init();
            } else { configDTBeneficio.objeto.ajax.reload(); }
        }
    };
    //var configDTTarifarioSegus = {
    //    objeto: null,
    //    tTarifario: null,
    //    opcSEGUS: {
    //        destroy: true,
    //        ajax: {
    //            dataType: "JSON",
    //            url: "../Proveedor/listar-dtTarifario-segus",
    //            type: "GET",
    //            data: function (data) {
    //                delete data.columns;
    //                data.id = "";
    //            }
    //        },
    //        columns: [
    //            {
    //                title: "ID",
    //                width: "10%",
    //                data: "id",
    //                orderable: false,
    //                className: "text-center d-none"
    //            },
    //            {
    //                title: "Descripción",
    //                data: "dscrpcn",
    //                width: '40%',
    //                orderable: false,
    //                className: "text-left"
    //            },
    //            {
    //                title: "Cod. Segus",
    //                data: "csgs",
    //                width: '10%',
    //                orderable: false,
    //                className: "text-center"
    //            },
    //            {
    //                title: "U. Segus",
    //                data: "usgs",
    //                width: '10%',
    //                orderable: false,
    //                className: "text-center"
    //            },
    //            {
    //                title: "Cod. Nomenclador",
    //                data: "cnmcldr",
    //                width: '10%',
    //                orderable: false,
    //                className: "text-center"
    //            },
    //            {
    //                title: "U. Segus",
    //                data: "unmcldr",
    //                width: '10%',
    //                orderable: false,
    //                className: "text-center"
    //            },
    //            {
    //                title: "Estado",
    //                data: null,
    //                width: '2%',
    //                orderable: false,
    //                className: "d-none",
    //                render: function (data) {
    //                    var tpm;
    //                    if (data.gdestdo == "A") {
    //                        tpm = `<span><i class="fa fa-circle text-success" title="Activo"></i></span>`;
    //                    }
    //                    else {
    //                        tpm = `<span><i class="fa fa-circle text-danger" title="Inactivo"></i></span>`;
    //                    }
    //                    return tpm;
    //                }
    //            },
    //            {
    //                title: "U. Edición",
    //                data: "uedcn", width: '5%',
    //                orderable: false,
    //                className: "d-none"
    //            },
    //            {
    //                title: "F. Edición",
    //                data: "cFEDCN", width: '15%',
    //                orderable: false,
    //                className: "d-none"
    //            }
    //        ],
    //        columnDefs: [
    //            {
    //                targets: "_all",
    //                className: 'text-center'
    //            }
    //        ]
    //    },
    //    opcCMPS: {
    //        destroy: true,
    //        ajax: {
    //            dataType: "JSON",
    //            url: "../Proveedor/listar-dtTarifarioCMPS",
    //            type: "GET",
    //            data: function (data) {
    //                delete data.columns;
    //                data.id = "";
    //            }
    //        },
    //        columns: [
    //            {
    //                title: "ID",
    //                width: "10%",
    //                data: "id",
    //                orderable: false,
    //                className: "text-center d-none"
    //            },
    //            {
    //                title: "Código",
    //                width: "10%",
    //                data: "ccmps",
    //                orderable: false,
    //                className: "text-center"
    //            },
    //            {
    //                title: "Descripción",
    //                data: "dscrpcn",
    //                width: '40%',
    //                orderable: false,
    //                className: "text-left"
    //            },
    //            {
    //                title: "Estado",
    //                data: null,
    //                width: '2%',
    //                orderable: false,
    //                className: "d-none",
    //                render: function (data) {
    //                    var tpm;
    //                    if (data.gdestdo == "A") {
    //                        tpm = `<span><i class="fa fa-circle text-success" title="Activo"></i></span>`;
    //                    }
    //                    else {
    //                        tpm = `<span><i class="fa fa-circle text-danger" title="Inactivo"></i></span>`;
    //                    }
    //                    return tpm;
    //                }
    //            },
    //            {
    //                title: "U. Edición",
    //                data: "uedcn", width: '5%',
    //                orderable: false,
    //                className: "d-none"
    //            },
    //            {
    //                title: "F. Edición",
    //                data: "cFEDCN", width: '15%',
    //                orderable: false,
    //                className: "d-none"
    //            }
    //        ],
    //        columnDefs: [
    //            {
    //                targets: "_all",
    //                className: 'text-center'
    //            }
    //        ]
    //    },
    //    eventos: {
    //        selectRow: function () {
    //            $dtTarifario.on('click', 'tbody tr', function () {
    //                var data = configDTTarifarioSegus.objeto.row(this).data();
    //                if ($cboTarifario.val() == '') {
    //                    Swal.fire({
    //                        icon: "warning",
    //                        allowOutsideClick: false,
    //                        title: "Tarifario",
    //                        text: "Seleccione el tipo de tarifario.",
    //                        confirmButtonText: "Aceptar"
    //                    })
    //                    return false;
    //                }
    //                if (typeof (data) != 'undefined') {
    //                    funcionesEquivalencia.obtenerTarifa(data);
    //                }
    //            })
    //        },
    //        init: function () {
    //            configDTTarifarioSegus.eventos.selectRow();
    //        }
    //    },
    //    reload: function () {
    //        if (configDTTarifarioSegus.tTarifario == null) {
    //            configDTTarifarioSegus.tTarifario = $cboTarifario.val();
    //        }
    //        if (configDTTarifarioSegus.tTarifario != $cboTarifario.val()) {
    //            configDTTarifarioSegus.tTarifario = $cboTarifario.val();
    //            configDTTarifarioSegus.objeto.destroy();
    //            configDTTarifarioSegus.objeto = null;
    //            if ($cboTarifario.val() == 2) {
    //                if (configDTTarifarioSegus.objeto == null || configDTTarifarioSegus.objeto == "" || configDTTarifarioSegus.objeto == undefined) {
    //                    $dtTarifario.empty();
    //                    configDTTarifarioSegus.objeto = $dtTarifario.DataTable(configDTTarifarioSegus.opcCMPS);
    //                    configDTTarifarioSegus.eventos.init();
    //                } 
    //            }
    //            else {
    //                if (configDTTarifarioSegus.objeto == null || configDTTarifarioSegus.objeto == "" || configDTTarifarioSegus.objeto == undefined) {
    //                    $dtTarifario.empty();
    //                    configDTTarifarioSegus.objeto = $dtTarifario.DataTable(configDTTarifarioSegus.opcSEGUS);
    //                    configDTTarifarioSegus.eventos.init();
    //                } 
    //            }
    //        }
    //        else {
    //            if (configDTTarifarioSegus.objeto == null || configDTTarifarioSegus.objeto == "" || configDTTarifarioSegus.objeto == undefined) {
    //                if ($cboTarifario.val() == 2)
    //                    configDTTarifarioSegus.objeto = $dtTarifario.DataTable(configDTTarifarioSegus.opcCMPS);
    //                else
    //                    configDTTarifarioSegus.objeto = $dtTarifario.DataTable(configDTTarifarioSegus.opcSEGUS);
    //                configDTTarifarioSegus.eventos.init();
    //            }
    //            else {
    //                configDTTarifarioSegus.objeto.ajax.reload();
    //            }
    //        }
    //    }
    //}
    var configDTProcedimiento = {
        objeto: null,
        opciones: {
            filter: true,
            ajax: {
                datatype: "JSON",
                url: "../Procedimiento/listarProcedimiento",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.gdttrfro = $cboTarifario.val();
                }
            },
            columns: [
                {
                    title: "Id",
                    width: '10%',
                    data: "id",
                    orderable: false,
                    class: "text-center"
                },
                {
                    title: "Descripción",
                    data: "dscrpcn",
                    width: '10%',
                    orderable: false,
                    className: "text-left"
                }, 
                {
                    title: "nomenclador",
                    data: "unmcldr",
                    width: '10%',
                    orderable: false,
                    className: "text-left d-none"
                }, 
                {
                    title: "segus",
                    data: "usgs",
                    width: '10%',
                    orderable: false,
                    className: "text-left d-none"
                }, 
                {
                    title: "sincatalogo",
                    data: "undd",
                    width: '10%',
                    orderable: false,
                    className: "text-left d-none"
                }, 
                {
                    title: "U. Edición",
                    width: '10%',
                    data: "uedcn",
                    orderable: false,
                    class: "text-center"
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN",
                    width: '60%',
                    orderable: false
                },
                {
                    title: "Estado",
                    width: '10%',
                    data: null,
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
                $dtProcedimiento.on('click', 'tbody tr', function () {
                    var data = configDTProcedimiento.objeto.row(this).data();                    
                    if (typeof (data) != 'undefined') {
                        funcionesEquivalencia.obtenerProcedimiento(data);
                    }
                })
            },
            init: function () {
                configDTProcedimiento.eventos.selectRow();
            }
        },
        reload: function () {
            if (configDTProcedimiento.objeto == null || configDTProcedimiento.objeto == "" || configDTProcedimiento.objeto == undefined) {
                configDTProcedimiento.objeto = $dtProcedimiento.DataTable(configDTProcedimiento.opciones);
                configDTProcedimiento.eventos.init();
            } else { configDTProcedimiento.objeto.ajax.reload(); }

        }
    }
    var configDTEquivalencia = {
        objeto: null,
        opciones: {
            filter: false,
            ajax: {
                dataType: "JSON",
                url: "/Proveedor/listar-dtEquivalencias",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idprvdr = $txtIdProveedor.val();
                }
            },
            columns: [
                {
                    title: "Id",
                    data: "id",
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "idprvdr",
                    data: "idprvdr",
                    orderable: false,
                    className: "d-none"
                },
                {
                    title: "id Procedimiento",
                    data: "idprcdmnto",
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Procedimiento",
                    data: "dprcdmnto",
                    width: "20%",
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "id Tarifario",
                    data: "idtrfro",
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Cod. Tarifario",
                    data: "codtrfro",
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Tarifario",
                    width: "20%",
                    data: "dtrfro",
                    orderable: false,
                    className: "text-left d-none"
                },
                {
                    title: "Unidad",
                    data: "ueqvlnca",
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Tipo Catalogo",
                    data: "ddttrfro",
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
                    data: null, width: '8%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        //if ($accesoEditarPersona.val() == "True") {
                        tpm += `<button type="button" class="btn btn-info btn-xs btn-editar" data-id="${data.id}" title="Editar"><span><i class="la la-edit"></i></span></button>`;
                        //}
                        //if ($accesoEliminarPersona.val() == "True") {
                        tpm += ` <button title="Cambiar estado" data-id="${data.id}" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>`;
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
                configDTEquivalencia.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesEquivalencia.eliminar(id)
                })
            },
            editar: function () {
                configDTEquivalencia.objeto.on("click", ".btn-editar", function () {
                    var rowDatos = configDTEquivalencia.objeto.row($(this).parents('tr')).data();
                    if (typeof (rowDatos) != 'undefined') {
                        funcionesEquivalencia.editar(rowDatos);
                    }
                })
            },
            init: function () {
                configDTEquivalencia.eventos.eliminar();
                configDTEquivalencia.eventos.editar();
            }
        },
        reload: function () {
            if (configDTEquivalencia.objeto == null || configDTEquivalencia.objeto == "" || configDTEquivalencia.objeto == undefined) {
                configDTEquivalencia.objeto = $dtEquivalenciaPrv.DataTable(configDTEquivalencia.opciones);
                configDTEquivalencia.eventos.init();

            } else { configDTEquivalencia.objeto.ajax.reload(); }
        }
    }
    var configDTSucursales = {
        objeto: null,
        opciones: {
            autoWidth:false,
            filter: false,
            ajax: {
                dataType: "JSON",
                url: "/Proveedor/listar-dtSucursales",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idprvdr = $txtIdProveedor.val();
                }
            },
            columns: [
                {
                    title: "",
                    data: null, width: '4%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        tpm += `<button type="button" class="btn btn-primary btn-xs btn-beneficios" data-id="${data.id}" title="Configurar Beneficios"><span><i class="fa fa-cogs"></i></span></button>`;
                        return tpm;
                    }
                },
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
                    width: '38%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Nro. Reg. SUSALUD",
                    data: "nrssld",
                    orderable: false,
                    width: '15%',
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
                    data: null, width: '4%',
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
                    data: null, width: '11%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        //if ($accesoEditarPersona.val() == "True") {
                        tpm += `<button type="button" class="btn btn-info btn-xs btn-editar" data-id="${data.id}" title="Editar"  data-toggle="modal" data-target="#mdlSucursal"><span><i class="la la-edit"></i></span></button>`;
                        //}
                        //if ($accesoEliminarPersona.val() == "True") {
                        tpm += ` <button title="Cambiar estado" data-id="${data.id}" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>`;
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
            beneficios: function () {
                configDTSucursales.objeto.on("click", ".btn-beneficios", function () {
                    $hfIdSucursal.val($(this).data("id"));
                    var data = configDTSucursales.objeto.row($(this).parents('tr')).data();
                    $hfDatosScr.val(data.dscrpcn);
                    funcionesBeneficios.verFicha();
                })
            },
            eliminar: function () {
                configDTSucursales.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesSucursales.eliminar(id)
                })
            },
            editar: function () {
                configDTSucursales.objeto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");
                    funcionesSucursales.editar(id);
                    $btnGuSucursal.prop("disabled", false);
                })
            },
            init: function () {
                configDTSucursales.eventos.eliminar();
                configDTSucursales.eventos.editar();
                configDTSucursales.eventos.beneficios();
            }
        },
        reload: function () {
            if (configDTSucursales.objeto == null || configDTSucursales.objeto == "" || configDTSucursales.objeto == undefined) {
                configDTSucursales.objeto = $dtSucursal.DataTable(configDTSucursales.opciones);
                configDTSucursales.eventos.init();

            } else { configDTSucursales.objeto.ajax.reload(); }
        }
    }
    var configDTBeneficioScrsl = {
        objeto: null,
        opciones: {
            ajax: {
                dataType: "JSON",
                url: "../Proveedor/listar-dtBeneficioPrv",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idprvdr = $txtIdProveedor.val();
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
                    title: "Grupo Beneficio",
                    data: "gbdscrpcn",
                    width: '5%',
                    orderable: false,
                    className: "text-center"
                }, 
                 {
                    title: "Cod. Beneficio",
                    data: "idbnfco",
                    width: '15%',
                    orderable: false,
                    className: "text-left d-none"
                },
                {
                    title: "Cod. Beneficio",
                    data: "codbnfcio",
                    width: '15%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Descripción",
                    data: "dscrpcn",
                    width: '15%',
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
                configDTBeneficioScrsl.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesBeneficios.eliminar(id)
                })
            },
            init: function () {
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
    var configDTCtasPrv = {
        asignados: [],
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
                url: "../Proveedor/listar-dtCuentaPrv",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idprvdr = $txtIdProveedor.val();
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
                    className: "text-left"
                },
                {
                    title: "Banco",
                    data: "gdbnco",
                    width: '15%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Nro Cuenta",
                    data: "ncnta",
                    width: '15%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Cuenta CCI",
                    data: "ncci",
                    width: '15%',
                    orderable: false,
                    className: "text-center"
                },
                //{
                //    title: "Estado",
                //    data: null,
                //    width: '2%',
                //    orderable: false,
                //    class: "text-center",
                //    render: function (data) {

                //        var tpm;
                //        if (data.gdestdo == "A") {
                //            tpm = `<span><i class="fa fa-circle text-success span-status" title="Activo"></i></span>`;
                //        }
                //        else {
                //            tpm = `<span><i class="fa fa-circle text-danger span-status" title="Inactivo"></i></span>`;
                //        }
                //        return tpm;
                //    }
                //},
                {
                    title: "Opc",
                    data: null,
                    orderable: false,
                    width: '15%',
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        configDTCtasPrv.asignados.push(data.id)
                        //if ($accesoEliminarCorreo.val() == "True") {
                      
                            tpm += ` <button type="button" title="Eliminar Cuenta" data-id="${data.id}" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-trash"></i><span></span></span></button>`;                       
                        
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
                configDTCtasPrv.objeto.on("click", ".btn-delete", function () {                    
                    var id = $(this).data("id");
                    funcionesCuentaBanco.eliminar(id);
                })
            },
            init: function () {
                configDTCtasPrv.eventos.eliminar();
            }
        },
        //llenar: function () {
        //    var parametros = {
        //        idprvdr: $txtIdProveedor.val(),
        //        idscrsl: $hfIdSucursal.val(),
        //    };
        //    $.get("../Proveedor/listar-dtCuentaPrv", parametros)
        //        .done(function (result) {
        //            //crear el datatble
        //            configDTCtasPrv.objeto = $dtCtaProveedor.DataTable(configDTCtasPrv.opciones)
        //            $.each(result.data, function (index, valor) {
        //                EntidadCuenta = new Object();
        //                EntidadCuenta.id = valor.id;
        //                EntidadCuenta.idcbnco = valor.idcbnco;
        //                EntidadCuenta.ncnta = valor.ncnta;
        //                EntidadCuenta.ncci = valor.ncci;
        //                EntidadCuenta.gdestdo = valor.gdestdo;
        //                configDTCtasPrv.objeto.rows.add([EntidadCuenta]).draw(false);
        //                var bNoParam = "1";
        //            });
        //            configDTCtasPrv.eventos.init();
        //        })
        //},
        reload: function () {
            if (configDTCtasPrv.objeto == null || configDTCtasPrv.objeto == "" || configDTCtasPrv.objeto == undefined) {
                configDTCtasPrv.objeto = $dtCtaProveedor.DataTable(configDTCtasPrv.opciones)
                configDTCtasPrv.eventos.init()
                //configDTCtasPrv.llenar();
            } else {
                configDTCtasPrv.objeto.ajax.reload();
                //destory and init 
                //configDTCtasPrv.objeto.ajax.reload();
                //configDTCtasPrv.objeto.destroy();
                //configDTCtasPrv.llenar();
            }
        }
    };
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
                    data.idprsna = $hfIdPersona.val();
                    data.id = "";
                }
            },
            columns: [
                {
                    title: "ID",
                    data: "id",
                    width: '7%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Titular",
                    data: "ttlr",
                    width: '10%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Tipo Cuenta",
                    data: "gdtcnta",
                    width: '10%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Banco",
                    data: "gdbnco",
                    width: '18%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Nro de Cuenta",
                    data: "ncnta",
                    width: '10%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Cuenta CCI",
                    data: "ncci",
                    width: '10%',
                    orderable: false,
                    className: "text-center"
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
                $dtCuentaBancoproveedor.on('dblclick', 'tbody tr', function () {
                    $dtCuentaBancoproveedor.prop("disabled", true);
                    var data = configDTCuentaBanco.objecto.row(this).data();
                    EntidadCuenta = new Object();
                    EntidadCuenta = data;
                    EntidadCuenta.idcbnco = data.id;

                    //if ($.inArray(EntidadCuenta.id, configDTCtasPrv.asignados) == -1) {
                        objCuentaBando = new Object;
                        objCuentaBando.idprvdr = $txtIdProveedor.val();
                        objCuentaBando.idcbnco = EntidadCuenta.idcbnco;
                        objCuentaBando.gdestdo= "A";
                        //if ($dtCtaProveedor.valid()) {
                            $.post("../Proveedor/insertar-ctaPrv", objCuentaBando).done(function () {
                                Swal.fire({
                                    icon: "success",
                                    allowOutsideClick: false,
                                    title: "Éxito",
                                    text: "Se actualizo satisfactoriamente.",
                                    confirmButtonText: "Aceptar"
                                }).then((result) => {
                                    //funcionesProveedor.obtener($txtIdProveedor.val());
                                    configDTCtasPrv.reload();
                                    $mdlBuscarCuentaBanco.modal('hide');
                                });
                            }).fail(function (e) {
                                Swal.fire({
                                    icon: "error",
                                    title: "Error al insertar el registro.",
                                    text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                                    confirmButtonText: "Aceptar"                                    
                                });
                            });
                        //}
                        
                        //configDTCtasPrv.asignados.push(EntidadCuenta.id)
                        //if (configDTCtasPrv.objeto == null || configDTCtasPrv.objeto == "" || configDTCtasPrv.objeto == undefined) {
                        //    configDTCtasPrv.objeto.destroy();
                        //    configDTCtasPrv.objeto = $dtCtaProveedor.DataTable(configDTCtasPrv.opciones);
                        //}
                        //if (typeof (EntidadCuenta) != 'undefined') {
                        //    configDTCtasPrv.objeto.rows.add([EntidadCuenta]).draw(true);
                        //    $mdlBuscarCuentaBanco.modal('hide');
                        //    bNoParam = "2";
                        //}
                    //} else { alert("ya tiene asignada la cuenta de banco") }
                })
            },
            init: function () {
                configDTCuentaBanco.eventos.selectRow();
            }
        },
        reload: function () {
            if (configDTCuentaBanco.objecto == null || configDTCuentaBanco.objecto == "" || configDTCuentaBanco.objecto == undefined) {
                configDTCuentaBanco.objecto = $dtCuentaBancoproveedor.DataTable(configDTCuentaBanco.opciones);
                configDTCuentaBanco.eventos.init();

            } else { configDTCuentaBanco.objecto.ajax.reload(); }
        },
    };
    //#region Cambios Equivalencia
    var configDTTarifarioPrvdr = {
        objeto: null,
        opciones: {
            ajax: {
                dataType: "JSON",
                url: "../Proveedor/listar-dtTarifarioPrv",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idprvdr = $txtIdProveedor.val();
                    //data.idtrfro = $hfTipoEquivalencia.val();//tipo1:SEGUS,2:CPMS,3:NOMENCLADOR
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
                    width: '15%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Cód. Segus",
                    data: "codsgs",
                    width: '15%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Unidad Segus",
                    data: "unsgs",
                    width: '15%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Grupo Procedimiento",
                    data: "gpdscrpcn",//"gpdscrpcn",
                    width: '15%',
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
                configDTTarifarioPrvdr.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesTarifario.eliminar(id)
                })
            },
            init: function () {
                configDTTarifarioPrvdr.eventos.eliminar();
            }
        },
        reload: function () {
            if (configDTTarifarioPrvdr.objeto == null || configDTTarifarioPrvdr.objeto == "" || configDTTarifarioPrvdr.objeto == undefined) {
                configDTTarifarioPrvdr.objeto = $dtTarifarioPrvdr.DataTable(configDTTarifarioPrvdr.opciones);
                configDTTarifarioPrvdr.eventos.init();
            } else { configDTTarifarioPrvdr.objeto.ajax.reload(); }
        }
    }
    var array = [];
    var configDTTarifario = {
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
                var ctNA = configDTTarifario.noAsignados.length;
                if (configDTTarifario.swCheckedAll && ctNA == 0) {
                    $dtTarifario.find(".chkPadre").prop("checked", true);
                    if (configDTTarifario.swCheckedAll == false) configDTTarifario.swCheckedAll = true;
                }
            },
            cacheChk: function (id) {
                var bool = false;
                if (configDTTarifario.swCheckedAll && configDTTarifario.estadoPadre) {
                    return true;
                } else {
                    if (configDTTarifario.swCheckedAll) {
                        bool = !configDTTarifario.noAsignados.includes((id).toString());
                    } else {
                        bool = configDTTarifario.asignados.includes((id).toString());
                    }
                }
                //console.log(bool);
                return bool;
            },
            init: function () {
                $dtTarifario.find(".chkPadre").is(':checked') && $dtTarifario.find(".chkPadre").prop("checked", false);
                $dtTarifario.find(".chkHijos").is(':checked') && $dtTarifario.find(".chkHijos").prop("checked", false);
                configDTTarifario.swCheckedAll = false;
                configDTTarifario.estadoPadre = false;
                configDTTarifario.asignados = [];
                configDTTarifario.noAsignados = [];
            }
        },
        objeto: null,
        opciones: {
            ajax: {
                dataType: "JSON",
                url: "../Proveedor/listar-dtTarifario",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.gdttrfro = "A";
                    data.idprvdr = $txtIdProveedor.val();
                }
            },
            columns: [
                {
                    title: `<div class="d-flex justify-content-center">
                                <div class="custom-control custom-checkbox px-2">
                                    <input type="checkbox" class="custom-control-input chkPadre" id="chkPTarifario">
                                    <label class="custom-control-label" for="chkPTarifario"></label>
                                </div>
                            </div>`,
                    data: null, width: '1%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var checking = configDTTarifario.func.cacheChk(data.id);
                        //var data = configDTTarifario.objeto.row($(this).parents('tr')).data();
                        //$hfDatosScr.val(data.dscrpcn);
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
                    title: "Descripción",
                    data: "dscrpcn",
                    width: '40%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Grupo Procedimiento",
                    data: "gpdscrpcn",
                    width: '40%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN", width: '10%',
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
                    data: "uedcn", width: '10%',
                    orderable: false,
                    class: "d-none"
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
                configDTTarifario.objeto.on("change", ".chkPadre", function () {
                    configDTTarifario.estadoPadre = $(this).is(":checked");
                    if (configDTTarifario.swCheckedAll == false) configDTTarifario.swCheckedAll = true;
                    if (!configDTTarifario.estadoPadre) configDTTarifario.swCheckedAll = false; //verificar
                    configDTTarifario.func.delAll(configDTTarifario.asignados);
                    configDTTarifario.func.delAll(configDTTarifario.noAsignados);
                    var Items = $(".chkHijos");
                    $(Items).each(function () {
                        $(this).prop("checked", configDTTarifario.estadoPadre);
                    });
                    //console.log('Estatico Padre: ' + configDTBeneficio.swCheckedAll);
                    //console.log('asignados: ' + configDTBeneficio.asignados);
                    //console.log('no asignados: ' + configDTBeneficio.noAsignados);
                })
            },
            chkhijos: function () {
                configDTTarifario.objeto.on("change", ".chkHijos", function () {
                    var chkPadre = $dtTarifario.find(".chkPadre");
                    if ($(chkPadre).is(':checked')) { $(chkPadre).prop("checked", false); configDTTarifario.estadoPadre = false; }
                    if (configDTTarifario.swCheckedAll) {
                        $(this).is(':checked') ? configDTTarifario.func.delItem(configDTTarifario.noAsignados, $(this)[0].value) : configDTTarifario.func.addItem(configDTTarifario.noAsignados, $(this)[0].value);
                        configDTTarifario.func.valAll();
                    } else {
                        $(this).is(':checked') ? configDTTarifario.func.addItem(configDTTarifario.asignados, $(this)[0].value) : configDTTarifario.func.delItem(configDTTarifario.asignados, $(this)[0].value);
                    }
                    //console.log('asignados: ' + configDTBeneficio.asignados);
                    //console.log('no asignados: ' + configDTBeneficio.noAsignados);
                })
            },
            drawRow: function () {
                configDTTarifario.objeto.on("draw", function () {
                    var Items = $dtTarifario.find('tbody tr .chkHijos');
                    $(Items).each(function () {
                        //configDTBeneficio.swCheckedAll && configDTBeneficio.func.addItem($(this)[0].value); 
                    });
                    console.log('asignados: ' + configDTTarifario.asignados);
                    console.log('no asignados: ' + configDTTarifario.noAsignados);
                })
            },
            init: function () {
                configDTTarifario.eventos.chkpadre();
                configDTTarifario.eventos.chkhijos();
                //configDTBeneficio.eventos.drawRow();
            }
        },
        reload: function () {
            if (configDTTarifario.objeto == null || configDTTarifario.objeto == "" || configDTTarifario.objeto == undefined) {
                configDTTarifario.objeto = $dtTarifario.DataTable(configDTTarifario.opciones);
                configDTTarifario.eventos.init();
            } else { configDTTarifario.objeto.ajax.reload(); }
        },
        eliminarDT: function () {
            configDTTarifario.objeto != null && configDTTarifario.objeto.destroy();
            configDTTarifario.objeto = null;
            $dtTarifario.empty();
        }
    };
    var configDTCpmsPrvdr = {
        objeto: null,
        opciones: {
            ajax: {
                dataType: "JSON",
                url: "../Proveedor/listar-dtCpmsPrv",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idprvdr = $txtIdProveedor.val();
                    
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
                    title: "Código CPMS",
                    data: "codigocpms",
                    width: '15%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Descripción",
                    data: "dscrpcn",
                    width: '15%',
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
                configDTCpmsPrvdr.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesCpms.eliminar(id)
                })
            },
            init: function () {
                configDTCpmsPrvdr.eventos.eliminar();
            }
        },
        reload: function () {
            if (configDTCpmsPrvdr.objeto == null || configDTCpmsPrvdr.objeto == "" || configDTCpmsPrvdr.objeto == undefined) {
                configDTCpmsPrvdr.objeto = $dtCpmsPrvdr.DataTable(configDTCpmsPrvdr.opciones);
                configDTCpmsPrvdr.eventos.init();
            } else { configDTCpmsPrvdr.objeto.ajax.reload(); }
        }
    }
    var configDTCpms = {
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
                var ctNA = configDTCpms.noAsignados.length;
                if (configDTCpms.swCheckedAll && ctNA == 0) {
                    $dtCpms.find(".chkPadre").prop("checked", true);
                    if (configDTCpms.swCheckedAll == false) configDTCpms.swCheckedAll = true;
                }
            },
            cacheChk: function (id) {
                var bool = false;
                if (configDTCpms.swCheckedAll && configDTCpms.estadoPadre) {
                    return true;
                } else {
                    if (configDTCpms.swCheckedAll) {
                        bool = !configDTCpms.noAsignados.includes((id).toString());
                    } else {
                        bool = configDTCpms.asignados.includes((id).toString());
                    }
                }
                //console.log(bool);
                return bool;
            },
            init: function () {
                $dtCpms.find(".chkPadre").is(':checked') && $dtCpms.find(".chkPadre").prop("checked", false);
                $dtCpms.find(".chkHijos").is(':checked') && $dtCpms.find(".chkHijos").prop("checked", false);
                configDTCpms.swCheckedAll = false;
                configDTCpms.estadoPadre = false;
                configDTCpms.asignados = [];
                configDTCpms.noAsignados = [];
            }
        },
        objeto: null,
        opciones: {
            ajax: {
                dataType: "JSON",
                url: "../Proveedor/listar-dtCpms",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.gdestdo = "A";
                }
            },
            columns: [
                {
                    title: `<div class="d-flex justify-content-center">
                                <div class="custom-control custom-checkbox px-2">
                                    <input type="checkbox" class="custom-control-input chkPadre" id="chkPCpms">
                                    <label class="custom-control-label" for="chkPCpms"></label>
                                </div>
                            </div>`,
                    data: null, width: '1%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var checking = configDTCpms.func.cacheChk(data.id);
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
                    title: "Descripción",
                    data: "dscrpcn",
                    width: '40%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN", width: '10%',
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
                    data: "uedcn", width: '10%',
                    orderable: false,
                    class: "d-none"
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
                configDTCpms.objeto.on("change", ".chkPadre", function () {
                    configDTCpms.estadoPadre = $(this).is(":checked");
                    if (configDTCpms.swCheckedAll == false) configDTCpms.swCheckedAll = true;
                    if (!configDTCpms.estadoPadre) configDTCpms.swCheckedAll = false; //verificar
                    configDTCpms.func.delAll(configDTCpms.asignados);
                    configDTCpms.func.delAll(configDTCpms.noAsignados);
                    var Items = $(".chkHijos");
                    $(Items).each(function () {
                        $(this).prop("checked", configDTCpms.estadoPadre);
                    });
                    //console.log('Estatico Padre: ' + configDTBeneficio.swCheckedAll);
                    //console.log('asignados: ' + configDTBeneficio.asignados);
                    //console.log('no asignados: ' + configDTBeneficio.noAsignados);
                })
            },
            chkhijos: function () {
                configDTCpms.objeto.on("change", ".chkHijos", function () {
                    var chkPadre = $dtCpms.find(".chkPadre");
                    if ($(chkPadre).is(':checked')) { $(chkPadre).prop("checked", false); configDTCpms.estadoPadre = false; }
                    if (configDTCpms.swCheckedAll) {
                        $(this).is(':checked') ? configDTCpms.func.delItem(configDTCpms.noAsignados, $(this)[0].value) : configDTCpms.func.addItem(configDTCpms.noAsignados, $(this)[0].value);
                        configDTCpms.func.valAll();
                    } else {
                        $(this).is(':checked') ? configDTCpms.func.addItem(configDTCpms.asignados, $(this)[0].value) : configDTCpms.func.delItem(configDTCpms.asignados, $(this)[0].value);
                    }
                    //console.log('asignados: ' + configDTBeneficio.asignados);
                    //console.log('no asignados: ' + configDTBeneficio.noAsignados);
                })
            },
            drawRow: function () {
                configDTCpms.objeto.on("draw", function () {
                    var Items = $dtCpms.find('tbody tr .chkHijos');
                    $(Items).each(function () {
                        //configDTBeneficio.swCheckedAll && configDTBeneficio.func.addItem($(this)[0].value); 
                    });
                    console.log('asignados: ' + configDTCpms.asignados);
                    console.log('no asignados: ' + configDTCpms.noAsignados);
                })
            },
            init: function () {
                configDTCpms.eventos.chkpadre();
                configDTCpms.eventos.chkhijos();
                //configDTBeneficio.eventos.drawRow();
            }
        },
        reload: function () {
            if (configDTCpms.objeto == null || configDTCpms.objeto == "" || configDTCpms.objeto == undefined) {
                configDTCpms.objeto = $dtCpms.DataTable(configDTCpms.opciones);
                configDTCpms.eventos.init();
            } else { configDTCpms.objeto.ajax.reload(); }
        },
        eliminarDT: function () {
            configDTCpms.objeto != null && configDTCpms.objeto.destroy();
            configDTCpms.objeto = null;
            $dtCpms.empty();
        }

    };
    var configDTNomencladorPrvdr = {
        objeto: null,
        opciones: {
            ajax: {
                dataType: "JSON",
                url: "../Proveedor/listar-dtNomencladorPrv",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idprvdr = $txtIdProveedor.val();
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
                    title: "Código Nomenclador",
                    data: "ctpcode",
                    width: '15%',
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
                configDTNomencladorPrvdr.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    funcionesNomenclador.eliminar(id)
                })
            },
            init: function () {
                configDTNomencladorPrvdr.eventos.eliminar();
            }
        },
        reload: function () {
            if (configDTNomencladorPrvdr.objeto == null || configDTNomencladorPrvdr.objeto == "" || configDTNomencladorPrvdr.objeto == undefined) {
                configDTNomencladorPrvdr.objeto = $dtNomencladorPrvdr.DataTable(configDTNomencladorPrvdr.opciones);
                configDTNomencladorPrvdr.eventos.init();
            } else { configDTNomencladorPrvdr.objeto.ajax.reload(); }
        }
    }
    var configDTNomenclador = {
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
                var ctNA = configDTNomenclador.noAsignados.length;
                if (configDTNomenclador.swCheckedAll && ctNA == 0) {
                    $dtNomenclador.find(".chkPadre").prop("checked", true);
                    if (configDTNomenclador.swCheckedAll == false) configDTNomenclador.swCheckedAll = true;
                }
            },
            cacheChk: function (id) {
                var bool = false;
                if (configDTNomenclador.swCheckedAll && configDTNomenclador.estadoPadre) {
                    return true;
                } else {
                    if (configDTNomenclador.swCheckedAll) {
                        bool = !configDTNomenclador.noAsignados.includes((id).toString());
                    } else {
                        bool = configDTNomenclador.asignados.includes((id).toString());
                    }
                }
                //console.log(bool);
                return bool;
            },
            init: function () {
                $dtNomenclador.find(".chkPadre").is(':checked') && $dtNomenclador.find(".chkPadre").prop("checked", false);
                $dtNomenclador.find(".chkHijos").is(':checked') && $dtNomenclador.find(".chkHijos").prop("checked", false);
                configDTNomenclador.swCheckedAll = false;
                configDTNomenclador.estadoPadre = false;
                configDTNomenclador.asignados = [];
                configDTNomenclador.noAsignados = [];
            }
        },
        objeto: null,
        opciones: {
            ajax: {
                dataType: "JSON",
                url: "../Proveedor/listar-dtNomenclador",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.gdestdo = "A";
                }
            },
            columns: [
                {
                    title: `<div class="d-flex justify-content-center">
                                <div class="custom-control custom-checkbox px-2">
                                    <input type="checkbox" class="custom-control-input chkPadre" id="chkPNomenclador">
                                    <label class="custom-control-label" for="chkPNomenclador"></label>
                                </div>
                            </div>`,
                    data: null, width: '1%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var checking = configDTNomenclador.func.cacheChk(data.id);
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
                    title: "Descripción",
                    data: "dscrpcn",
                    width: '40%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN", width: '10%',
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
                    data: "uedcn", width: '10%',
                    orderable: false,
                    class: "d-none"
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
                configDTNomenclador.objeto.on("change", ".chkPadre", function () {
                    configDTNomenclador.estadoPadre = $(this).is(":checked");
                    if (configDTNomenclador.swCheckedAll == false) configDTNomenclador.swCheckedAll = true;
                    if (!configDTNomenclador.estadoPadre) configDTNomenclador.swCheckedAll = false; //verificar
                    configDTNomenclador.func.delAll(configDTNomenclador.asignados);
                    configDTNomenclador.func.delAll(configDTNomenclador.noAsignados);
                    var Items = $(".chkHijos");
                    $(Items).each(function () {
                        $(this).prop("checked", configDTNomenclador.estadoPadre);
                    });
                    //console.log('Estatico Padre: ' + configDTBeneficio.swCheckedAll);
                    //console.log('asignados: ' + configDTBeneficio.asignados);
                    //console.log('no asignados: ' + configDTBeneficio.noAsignados);
                })
            },
            chkhijos: function () {
                configDTNomenclador.objeto.on("change", ".chkHijos", function () {
                    var chkPadre = $dtNomenclador.find(".chkPadre");
                    if ($(chkPadre).is(':checked')) { $(chkPadre).prop("checked", false); configDTNomenclador.estadoPadre = false; }
                    if (configDTNomenclador.swCheckedAll) {
                        $(this).is(':checked') ? configDTNomenclador.func.delItem(configDTNomenclador.noAsignados, $(this)[0].value) : configDTNomenclador.func.addItem(configDTNomenclador.noAsignados, $(this)[0].value);
                        configDTNomenclador.func.valAll();
                    } else {
                        $(this).is(':checked') ? configDTNomenclador.func.addItem(configDTNomenclador.asignados, $(this)[0].value) : configDTNomenclador.func.delItem(configDTNomenclador.asignados, $(this)[0].value);
                    }
                    //console.log('asignados: ' + configDTBeneficio.asignados);
                    //console.log('no asignados: ' + configDTBeneficio.noAsignados);
                })
            },
            drawRow: function () {
                configDTNomenclador.objeto.on("draw", function () {
                    var Items = $dtNomenclador.find('tbody tr .chkHijos');
                    $(Items).each(function () {
                        //configDTBeneficio.swCheckedAll && configDTBeneficio.func.addItem($(this)[0].value); 
                    });
                    console.log('asignados: ' + configDTNomenclador.asignados);
                    console.log('no asignados: ' + configDTNomenclador.noAsignados);
                })
            },
            init: function () {
                configDTNomenclador.eventos.chkpadre();
                configDTNomenclador.eventos.chkhijos();
                //configDTBeneficio.eventos.drawRow();
            }
        },
        reload: function () {
            if (configDTNomenclador.objeto == null || configDTNomenclador.objeto == "" || configDTNomenclador.objeto == undefined) {
                configDTNomenclador.objeto = $dtNomenclador.DataTable(configDTNomenclador.opciones);
                configDTNomenclador.eventos.init();
            } else { configDTNomenclador.objeto.ajax.reload(); }
        },
        eliminarDT: function () {
            configDTNomenclador.objeto != null && configDTNomenclador.objeto.destroy();
            configDTNomenclador.objeto = null;
            $dtNomenclador.empty();
        }
    };

    //#endregion
    //#endregion
    //#region entidades
    var objProveedor = {
        id: '',
        idprsna: '',
        iddcmnto: '',
        dprvdr: '',
        idtlfno: '',
        iddrccn: '',
        idcrro: '',
        gdtprvdr: '',
        gdtrprvdr: '',
        fexigv: '',
        gecnmco: '',
        fznvl: '',
        gdecrtfccn: '',
        finsttcnl: '',
        pwb: '',
        gdestdo: '',
        festdo: '',
        ucrcn: '',
        fcrcn: '',
        uedcn: '',
        fedcn: ''
    }
    var objPersona = {
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

    }
    var objDocumento = {
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
    var objCorreo = {
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
    var objDireccion = {
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
    var objTelefono = {
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
    var objEquivalencia = {
        id: "",
        idprvdr: "",
        idtrfro: "",
        idprcdmnto: "",
        gdttrfro: "",
        ueqvlnca: "",
        cfeqvlnca: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",
        gdestdo: "",
        festdo: ""
    }
    var objSucursal = {
        id: "",
        idprvdr: "",
        dscrpcn: "",
        abrvtra: "",
        fprdtrmndo: "",
        ficrta: "",
        idubgo: "",
        drccn: "",
        rdrccn: "",
        nrssld: "",
        fivgncia: "",
        ffvgncia: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",
        gdestdo: "",
        festdo: ""
    }
    var objNomencladorPrvdr = {
        id: '',
        idprvdr: '',
        idnmncldr: '',
        ftbtds: '',
        idbasgnds: '',
        idbnoasgnds: '',
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",
        gdestdo: "",
        festdo: ""
    }
    var objCpmsPrvdr = {
        id: '',
        idcpms: '',
        idprvdr: '',
        ftbtds: '',
        idbasgnds: '',
        idbnoasgnds: '',
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",
        gdestdo: "",
        festdo: ""
    }
    var objTarifarioPrvdr = {
        id: '',
        idproc: '',
        idprvdr: '',
        ftbtds: '',
        idbasgnds: '',
        idbnoasgnds: '',
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",
        gdestdo: "",
        festdo: ""
    }
    var objBeneficioScrsl = {
        id: '',
        idbnfco: '',
        idsprvdr: '',
        idprvdr: '',
        ftbtds: '',
        idbasgnds: '',
        idbnoasgnds: '',
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",
        gdestdo: "",
        festdo: ""
    }
    var objCuentaBando = {
        id: "",
        idprvdr: "",
        idcbnco: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",
        gdestdo: "",
        festdo: "",
    }

    //#endregion
    //#region funciones
    var funcionesProveedor = {
        nuevo: function () {
            $hfactionProveedor.val("N");
            $btnMdlBsqPersona.show();
            $Datos_tab.removeClass("disabled");
            $Datos_tab.click();
            $btnNuevoDireccion.addClass("d-none");
            $btnNuevoTelefono.addClass("d-none");
            $btnNuevoCorreo.addClass("d-none");
            $btnmdlDireccion.attr("disabled", true);
            $btnmdlTelefono.attr("disabled", true);
            $btnmdlCorreo.attr("disabled", true);
            configFormProveedor.validacion.eventos.reset();
            $frmProveedor.trigger("reset");
            configCboListCorreoPers.reset();
            configCboListDireccionPers.reset();
            configCboListTelefonoPers.reset();
            configDTProveedor.reload()
            //$mdlBuscarCuentaBanco.addClass("d-none");
            $BuscarCuentaBanco.attr("disabled", true);
            configDTCtasPrv.reload()
        },
        insertar: function () {
            objProveedor = new Object();
            objProveedor.idprsna = $hfIdPersona.val();
            objProveedor.idtlfno = $hfIdTelefono.val();
            objProveedor.iddrccn = $hfIdDireccion.val();
            objProveedor.idcrro = $hfIdCorreo.val();
            objProveedor.gdtprvdr = $cboTiProveedor.val();
            objProveedor.gdtrprvdr = $cboTiRProveedor.val();
            objProveedor.fexigv = $cboIndExIGV.val();
            objProveedor.gecnmco = $cboGEconomico.val();
            objProveedor.fznvl = $cboZNaval.val();
            objProveedor.gdecrtfccn = $cboIndCertificado.val();
            objProveedor.finsttcnl = $cboIndInstitucional.val();
            objProveedor.pwb = $txtPWeb.val();
            objProveedor.gdestdo = $stdoProveedor.val();
            objProveedor.iddcmnto = $hfIdDocumento.val();
            objProveedor.dprvdr = $hftPersona.val() != 1 ? $txtRazonSocial.val() : $txtPNombre.val() + ' ' + $txtSNombre.val() + ' ' + $txtAPaterno.val() + ' ' + $txtAMaterno.val()
            objProveedor.gdcemprsa = $cboTEmpresa.val();
            if ($frmProveedor.valid()) {
                $.post("../Proveedor/insertar", objProveedor).done(function (idPersona) {
                    Swal.fire({
                        icon: "success",
                        allowOutsideClick: false,
                        title: "Éxito",
                        text: "Se registro satisfactoriamente.",
                        confirmButtonText: "Aceptar"
                    }).then((result) => {
                        $hfIdPersona.val(idPersona)
                        funcionesProveedor.obtener($hfIdPersona.val());
                        configDTProveedor.reload()
                        $hfactionProveedor.val("E");
                        if ($txtIdProveedor.val != "") { $BuscarCuentaBanco.attr("disabled", false); }
                        $btnMdlBsqPersona.hide();
                    });
                })
                    .fail(function (e) {
                        Swal.fire({
                            icon: "error",
                            title: "Error al insertar el registro.",
                            text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                            confirmButtonText: "Aceptar"
                        });
                    })
                    .always(function () {
                        configDTProveedor.reload();
                    });
            }
        },
        actualizar: function () {
            objProveedor = new Object();
            objProveedor.id = $txtIdProveedor.val();
            objProveedor.idprsna = $hfIdPersona.val();
            objProveedor.idtlfno = $hfIdTelefono.val();
            objProveedor.iddrccn = $hfIdDireccion.val();
            objProveedor.idcrro = $hfIdCorreo.val();
            objProveedor.gdtprvdr = $cboTiProveedor.val();
            objProveedor.gdtrprvdr = $cboTiRProveedor.val();
            objProveedor.fexigv = $cboIndExIGV.val();
            objProveedor.gecnmco = $cboGEconomico.val();
            objProveedor.fznvl = $cboZNaval.val();
            objProveedor.gdecrtfccn = $cboIndCertificado.val();
            objProveedor.finsttcnl = $cboIndInstitucional.val();
            objProveedor.pwb = $txtPWeb.val();
            objProveedor.gdestdo = $stdoProveedor.val();
            objProveedor.iddcmnto = $hfIdDocumento.val();
            objProveedor.dprvdr = $hftPersona.val() != 1 ? $txtRazonSocial.val() : $txtPNombre.val() + ' ' + $txtSNombre.val() + ' ' + $txtAPaterno.val() + ' ' + $txtAMaterno.val()
            objProveedor.gdcemprsa = $cboTEmpresa.val();
            if ($frmProveedor.valid()) {
                $.post("../Proveedor/actualizar", objProveedor).done(function () {
                    Swal.fire({
                        icon: "success",
                        allowOutsideClick: false,
                        title: "Éxito",
                        text: "Se actualizo satisfactoriamente.",
                        confirmButtonText: "Aceptar"
                    }).then((result) => {
                        funcionesProveedor.obtener($txtIdProveedor.val());
                        configDTProveedor.reload();
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
        editar: function (id) {
            $btnMdlBsqPersona.hide();
            funcionesProveedor.obtener(id);
        },
        obtener: function (id) {
            var parametros = { id: id };
            $.get("../Proveedor/obtener", parametros)
                .done(function (data) {
                    $hfactionProveedor.val("E");
                    $Datos_tab.removeClass("disabled");
                    $Equivalencia_tab.removeClass("disabled");
                    $Sucursal_tab.removeClass("disabled");
                    $Datos_tab.removeClass("disabled");
                    $Datos_tab.click();
                    objProveedor = new Object();
                    objProveedor = data;
                    $txtIdProveedor.val(objProveedor.id);
                    $hfIdPersona.val(objProveedor.idprsna);
                    $hfIdDocumento.val(objProveedor.iddcmnto)
                    $hfIdTelefono.val(objProveedor.idtlfno);
                    $hfIdDireccion.val(objProveedor.iddrccn);
                    $hfIdCorreo.val(objProveedor.idcrro);
                    $cboTiProveedor.val(objProveedor.gdtprvdr);
                    $cboTiRProveedor.val(objProveedor.gdtrprvdr);
                    $cboZNaval.val(objProveedor.fznvl);
                    $cboIndInstitucional.val(objProveedor.finsttcnl);
                    $txtPWeb.val(objProveedor.pwb);
                    funcionesPersona.obtener(objProveedor.idprsna);
                    $cboTEmpresa.val(objProveedor.gdcemprsa);
                    $frmProveedor.AgregarCamposAuditoria(objProveedor);
                    configDTCtasPrv.reload();
                    configDTCuentaBanco.reload();
                    if ($txtIdProveedor.val != "") { $BuscarCuentaBanco.attr("disabled", false); }
                    configDTProveedor.reload()
                    //funcionesPersona.llenarPredeterminados();
                })
                .fail().always(function () {
                    $frmProveedor.DeshabilitarCamposAuditoria();
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
                    $.post("../Proveedor/eliminar", parametro)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTProveedor.reload();
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
        obtenerDireccion: function (obj) {
            funcionesDireccion.obtener(obj)
        },
        obtenerTelefono: function (obj) {
            funcionesTelefono.obtener(obj)
        },
        obtenerCorreo: function (obj) {
            funcionesCorreo.obtener(obj)
        }
    }
    var funcionesPersona = {
        obtener: function (id) {
            $btnmdlDireccion.attr("disabled", false);
            $btnmdlTelefono.attr("disabled", false);
            $btnmdlCorreo.attr("disabled", false);
            $hfIdPersona.val(id);
            var parm = { id: id };
            $.get("../Proveedor/obtener-persona", parm)
                .done(function (result) {
                    objPersona = new Object();
                    objDireccion = new Object();
                    objDocumento = new Object();
                    objTelefono = new Object();
                    objCorreo = new Object();
                    objPersona = result;
                    $hftPersona.val(objPersona.gdtprsna)
                    $hftPersona.val() != 1 ? $datosAyN.addClass("d-none") : $datosAyN.removeClass("d-none")
                    $txtAPaterno.val(objPersona.aptrno);
                    $txtAMaterno.val(objPersona.amtrno);
                    $txtPNombre.val(objPersona.pnmbre);
                    $txtSNombre.val(objPersona.snmbre);
                    $txtRazonSocial.val(objPersona.rscl);
                    if (objPersona.mpepE01 != '') objDireccion = sXMLToJson(objPersona.mpepE01);
                    if (objPersona.mpepE02 != '') objTelefono = sXMLToJson(objPersona.mpepE02);
                    if (objPersona.mpepE03 != '') objCorreo = sXMLToJson(objPersona.mpepE03);
                    if (objPersona.mpepE04 != '') objDocumento = sXMLToJson(objPersona.mpepE04);
                    $hfIdDireccion.val(isObjEmpty(objDireccion) ? "" : objDireccion.MPEPE01.ID);
                    $hfIdTelefono.val(isObjEmpty(objTelefono) ? "" : objTelefono.MPEPE02.ID);
                    $hfIdCorreo.val(isObjEmpty(objCorreo) ? "" : objCorreo.MPEPE03.ID);
                    $hfIdDocumento.val(isObjEmpty(objDocumento) ? "" : objDocumento.MPEPE04.ID);
                    $cboDireccionPers.attr("disabled", false);
                    $cboTelefonoPers.attr("disabled", false);
                    $cboCorreoPers.attr("disabled", false);
                    funcionesPersona.llenarPredeterminados();
                })
                .always(function () {
                    $mdlBuscarPersona.modal('hide');
                });
        },
        llenarPredeterminados: function () {
            configCboListCorreoPers.selected($hfIdCorreo.val());
            configCboListDireccionPers.selected($hfIdDireccion.val());
            configCboListTelefonoPers.selected($hfIdTelefono.val());
            funcionesDocumento.obtener($hfIdDocumento.val());
        }
    }
    var funcionesDireccion = {
        obtener: function (obj) {
            var direccion = obj.gdtvia + " " + obj.via + " " + obj.nvia + " - " + obj.gdtdzna + " " + obj.zna + " - " + obj.nintrr + " - " + obj.rfrncia;
            $hfIdDireccion.val(obj.id);
            $txtDireccion.val(direccion);
            $mdlBuscarDireccion.modal('hide');
        },
        obtenerID: function (idprsna, id) {
            $get("../Direccion/obtenerDireccion", { idprsna: idprsna, id: id })
                .done(function (data) {
                    objDireccion = new Object();
                    objDireccion = data;
                });
        }
    }
    var funcionesTelefono = {
        obtener: function (obj) {
            $hfIdTelefono.val(obj.id);
            $txtTelefono.val(obj.ntlfno);
            $mdlBuscarTelefono.modal('hide');
        },
        obtenerID: function (idprsna, id) {
            $get("../Telefono/ObtenerTelefono", { idprsna: idprsna, id: id })
                .done(function (data) {
                    objTelefono = new Object();
                    objTelefono = data;
                });
        }

    }
    var funcionesCorreo = {
        obtener: function (obj) {
            $hfIdCorreo.val(obj.id);
            $txtCorreo.val(obj.ccrreo);
            $mdlBuscarCorreo.modal('hide');
        },
        obtenerID: function (idprsna, id) {
            $get("../Correo/obtenerCorreo", { idprsna: idprsna, id: id })
                .done(function (data) {
                    objDireccion = new Object();
                    objDireccion = data;
                });
        }
    }
    var funcionesDocumento = {
        obtener: function (id) {
            var parms = { id: id }
            $.get("../Documento/obtenerDocumento", parms)
                .done(function (result) {
                    objDocumento = new Object();
                    objDocumento = result;
                    $cboTDocumento.val(objDocumento.gddcmnto);
                    $txtNDocumento.val(objDocumento.ndcmnto);
                })
        }
    }
    var funcionesEquivalencia = {
        nuevo: function () {
            $hfactionEquivalencia.val("N");
            $cboTarifario.attr('disabled', false);
            $btnmdlTarifario.attr('disabled', false);
            $btnmdlProcedimiento.attr('disabled', false);
            //$txtUnProcedimiento.attr('disabled', false);
            //$txtCostoProcedimiento.attr('disabled', false);
        },
        insertar: function () {            
            objEquivalencia = new Object;
            objEquivalencia.id = '';
            objEquivalencia.idprvdr = $txtIdProveedor.val();
            objEquivalencia.idtrfro = $hfIdTarifario.val();
            objEquivalencia.idprcdmnto = $hfIdProcedimiento.val();
            objEquivalencia.gdttrfro = $cboTarifario.val();
            objEquivalencia.ueqvlnca = $hfUnProcedimiento.val();
            objEquivalencia.cfeqvlnca = $txtCostoProcedimiento.val();
            objEquivalencia.gdestdo = $stdoEquivalencia.val();
            $.post("../Proveedor/insertar-equivalencia", objEquivalencia).done(function (idEquivalencia) {
                Swal.fire({
                    icon: "success",
                    allowOutsideClick: false,
                    title: "Éxito",
                    text: "Se registro satisfactoriamente.",
                    confirmButtonText: "Aceptar"
                }).then((result) => {
                    console.log("equivalencia:" + idEquivalencia)
                    //funcionesProveedor.obtener($hfIdPersona.val());
                    configFormEquivalencia.inicio();
                    configDTEquivalencia.reload();
                    //$hfactionProveedor.val("E");
                });
            }).fail(function (e) {
                Swal.fire({
                    icon: "error",
                    title: "Error al insertar el registro.",
                    text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                    confirmButtonText: "Aceptar"
                });
            });
        },
        actualizar: function () {
            objEquivalencia = new Object;
            objEquivalencia.id = $hfIdEquivalencia.val();
            objEquivalencia.idprvdr = $txtIdProveedor.val();
            objEquivalencia.idtrfro = $hfIdTarifario.val();
            objEquivalencia.idprcdmnto = $hfIdProcedimiento.val();
            objEquivalencia.gdttrfro = $cboTarifario.val();
            objEquivalencia.ueqvlnca = $txtUnProcedimiento.val();
            objEquivalencia.cfeqvlnca = $txtCostoProcedimiento.val();
            objEquivalencia.gdestdo = $stdoEquivalencia.val();
            $.post("../Proveedor/actualizar-equivalencia", objEquivalencia).done(function () {
                Swal.fire({
                    icon: "success",
                    allowOutsideClick: false,
                    title: "Éxito",
                    text: "Se actualizo satisfactoriamente.",
                    confirmButtonText: "Aceptar"
                }).then((result) => {
                    configFormEquivalencia.inicio();
                    configDTEquivalencia.reload();
                });
            }).fail(function (e) {
                Swal.fire({
                    icon: "error",
                    title: "Error al insertar el registro.",
                    text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                    confirmButtonText: "Aceptar"
                });
            });
        },
        editar: function (data) {
            console.log(data);
            $hfIdEquivalencia.val(data.id);
            $hfIdTarifario.val(data.idtrfro);
            $hfIdProcedimiento.val(data.idprcdmnto);
            $cboTarifario.val(data.gdttrfro);
            $txtIdTarifario.val(data.codtrfro);
            $txtDesTarifario.val(data.dtrfro);
            $txtIdProcedimiento.val(data.idprcdmnto);
            $txtDesProcedimiento.val(data.dprcdmnto);
            $txtUnProcedimiento.val(data.ueqvlnca);
            $stdoEquivalencia.val(data.gdestdo);
            funcionesEquivalencia.nuevo();
            $hfactionEquivalencia.val("E");
            $datoProvEquivalencia.val($hfDatosPrv.val());
            //$txtDatoProveedor.val($hfDatosPrv.val());
            $txtDatoProveedorBen.val($hfDatosPrv.val());
            //funcionesEquivalencia.obtener(idEquivalencia);
        },
        obtener: function (id) {
            var parametros = { id: id };
            $.get("../Proveedor/obtener", parametros)
                .done(function (data) {
                    objEquivalencia = new Object;
                    objEquivalencia = data;
                    $hfIdEquivalencia.val(objEquivalencia.id);
                    $txtIdProveedor.val(objEquivalencia.idprvdr);
                    $txtIdTarifario.val(objEquivalencia.idtrfro);
                    $txtIdProcedimiento.val(objEquivalencia.idprcdmnto);
                    $cboTarifario.val(objEquivalencia.gdttrfro);
                    $txtUnProcedimiento.val(objEquivalencia.ueqvlnca);
                    $stdoEquivalencia.val(objEquivalencia.gdestdo);
                    funcionesEquivalencia.nuevo();
                    $hfactionEquivalencia.val("E");
                })
                .fail().always(function () {
                    $frmEquivalencia.DeshabilitarCamposAuditoria();
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
                    $.post("../Proveedor/eliminar-equivalencia", parametro)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTEquivalencia.reload();
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
            if ($hfactionEquivalencia.val() == "N") {
                funcionesEquivalencia.insertar();
            }
            else {
                funcionesEquivalencia.actualizar();
            }

        },
        obtenerTarifa: function (data) {
            $hfIdTarifario.val(data.id);
            $txtDesTarifario.val(data.dscrpcn);
            if ($cboTarifario.val() != 2) {
                if ($cboTarifario.val() == 1) {
                    if (!data.csgs) {
                        funcionesEquivalencia.opcmsj.title = "¿Tarifa sin código, desea usar el código Nomenclador?";
                        Swal.fire(funcionesEquivalencia.opcmsj).then(function (result) {
                            if (result.value) {
                                $cboTarifario.val("3");
                                $txtIdTarifario.val(data.cnmcldr);
                                $mdlBuscarTarifario.modal('hide');
                            }
                        });
                    }
                    else {
                        $txtIdTarifario.val(data.csgs);
                        $mdlBuscarTarifario.modal('hide');
                    }
                } else {
                    if (!data.cnmcldr) {
                        funcionesEquivalencia.opcmsj.title = "¿Tarifa sin código, desea usar el código SEGUS?";
                        Swal.fire(funcionesEquivalencia.opcmsj).then(function (result) {
                            if (result.value) {
                                $cboTarifario.val("1");
                                $txtIdTarifario.val(data.csgs);
                                $mdlBuscarTarifario.modal('hide');
                            }
                        });
                    } else {
                        $txtIdTarifario.val(data.cnmcldr);
                        $mdlBuscarTarifario.modal('hide');
                    }
                }
            } else {
                $txtIdTarifario.val(data.ccmps);
                $mdlBuscarTarifario.modal('hide');
            }
        },
        obtenerProcedimiento: function (data) {
            $hfIdProcedimiento.val(data.id);
            $txtIdProcedimiento.val(data.id);
            $txtDesProcedimiento.val(data.dscrpcn);
            $mdlBuscarProcedimiento.modal('hide');
            if ($cboTarifario.val() == '1') { $hfUnProcedimiento.val(data.usgs) }
            else if ($cboTarifario.val() == '3') { $hfUnProcedimiento.val(data.unmcldr) }
            else if ($cboTarifario.val() == '4') { $hfUnProcedimiento.val(data.undd) }
        },
        opcmsj: {
            title: "¿Quiere modificar el estado del registro?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Aceptar",
            cancelButtonText: "Cancelar",
            customClass: {
                confirmButton: 'btn btn-primary btn-xs mr-2',
                cancelButton: 'btn btn-secondary btn-xs'
            },
            buttonsStyling: false
        }
    }
    var funcionesSucursales = {
        nuevo: function () {
        },
        insertar: function () {
            objSucursal = new Object;
            objSucursal.id = '';
            objSucursal.idprvdr = $txtIdProveedor.val();
            objSucursal.dscrpcn = $txtDescripcionScrsl.val();
            objSucursal.abrvtra = $txtAbrvtraScrsl.val();
            objSucursal.fprdtrmndo = $cboPrdtrmndoScrsl.val();
            objSucursal.drccn = $txtDireccionScrsl.val();
            objSucursal.rdrccn = $txtReferenciaScrsl.val();
            objSucursal.idubgo = $cboDistrito.val();
            objSucursal.nrssld = $txtNRegistroSusalud.val();
            objSucursal.fivgncia = $txtfinivigencia.val();
            objSucursal.ffvgncia = $txtffinvigencia.val();
            objSucursal.ficrta = $cboImpCarta.val();
            objSucursal.gdestdo = $stdoSucursal.val();
            $.post("../Proveedor/insertar-sucursales", objSucursal).done(function (idSucursal) {
                Swal.fire({
                    icon: "success",
                    allowOutsideClick: false,
                    title: "Éxito",
                    text: "Se registro satisfactoriamente.",
                    confirmButtonText: "Aceptar"
                }).then((result) => {
                    console.log("sucursal:" + idSucursal)
                    //funcionesProveedor.obtener($hfIdPersona.val());
                    configDTSucursales.reload();
                    $mdlSucursal.modal('hide');
                    $btnGuSucursal.prop("disabled", false);
                    //$hfactionProveedor.val("E");
                });
            }).fail(function (e) {
                Swal.fire({
                    icon: "error",
                    title: "Error al insertar el registro.",
                    text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                    confirmButtonText: "Aceptar"
                });
            });
        },
        actualizar: function () {
            objSucursal = new Object;
            objSucursal.id = $hfIdSucursal.val();
            objSucursal.idprvdr = $txtIdProveedor.val();
            objSucursal.dscrpcn = $txtDescripcionScrsl.val();
            objSucursal.abrvtra = $txtAbrvtraScrsl.val();
            objSucursal.fprdtrmndo = $cboPrdtrmndoScrsl.val();
            objSucursal.drccn = $txtDireccionScrsl.val();
            objSucursal.rdrccn = $txtReferenciaScrsl.val();
            objSucursal.idubgo = $cboDistrito.val();
            objSucursal.nrssld = $txtNRegistroSusalud.val();
            objSucursal.fivgncia = $txtfinivigencia.val();
            objSucursal.ffvgncia = $txtffinvigencia.val();
            objSucursal.ficrta = $cboImpCarta.val();
            objSucursal.gdestdo = $stdoSucursal.val();
            $.post("../Proveedor/actualizar-sucursales", objSucursal).done(function () {
                Swal.fire({
                    icon: "success",
                    allowOutsideClick: false,
                    title: "Éxito",
                    text: "Se actualizó satisfactoriamente.",
                    confirmButtonText: "Aceptar"
                }).then((result) => {
                    //funcionesProveedor.obtener($hfIdPersona.val());
                    configDTSucursales.reload();
                    $mdlSucursal.modal('hide');
                    //$hfactionProveedor.val("E");
                });
            }).fail(function (e) {
                Swal.fire({
                    icon: "error",
                    title: "Error al insertar el registro.",
                    text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                    confirmButtonText: "Aceptar"
                });
            });
        },
        editar: function (id) {
            funcionesSucursales.obtener(id);
        },
        obtener: function (id) {
            var parametros = { id: id };
            $.get("../Proveedor/obtener-sucursales", parametros)
                .done(function (data) {
                    $hfactionSucursal.val("E");
                    objSucursal = new Object();
                    objSucursal = data;
                    $hfIdSucursal.val(objSucursal.id);
                    $txtIdProveedor.val(objSucursal.idprvdr);
                    $txtDescripcionScrsl.val(objSucursal.dscrpcn);
                    $txtAbrvtraScrsl.val(objSucursal.abrvtra);
                    $txtDireccionScrsl.val(objSucursal.drccn);
                    $cboPrdtrmndoScrsl.val(objSucursal.fprdtrmndo);
                    $txtReferenciaScrsl.val(objSucursal.rdrccn);
                    //$cboDistrito.val(objSucursal.idubgo);
                    funcionesSucursales.ubigeoDireccion.cargarUbigeo(objSucursal);
                    $txtNRegistroSusalud.val(objSucursal.nrssld);
                    $txtfinivigencia.val(objSucursal.fivgncia);
                    $txtffinvigencia.val(objSucursal.ffvgncia);
                    $cboImpCarta.val(objSucursal.ficrta);
                    $frmSucursal.AgregarCamposAuditoria(objSucursal);
                })
                .fail().always(function () {
                    $frmSucursal.DeshabilitarCamposAuditoria();
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
                    $.post("../Proveedor/eliminar-sucursales", parametro)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTSucursales.reload();
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
            if ($hfactionSucursal.val() == "N") {
                funcionesSucursales.insertar();
            } else {
                funcionesSucursales.actualizar();
                //funcionesCuentaBanco.insertar();
            }
        },
        ubigeoDireccion: {
            optUbigeo: {
                codDepartamento: '',
                codProvincia: '',
                codUbigeo: '',
                codPais: '169',
                controles: {
                    departamento: $cboDepartamento,
                    provincia: $cboProvincia,
                    distrito: $cboDistrito,
                    nacionalidad: ''
                }
            },
            cargarUbigeo: function (datosUbigeo) {
                var opt = {};
                opt = funcionesSucursales.ubigeoDireccion.optUbigeo;
                opt.codUbigeo = datosUbigeo.idubgo;
                cargarUbigeos(opt);
            },
            init: function () {
                var opt = {};
                opt = funcionesSucursales.ubigeoDireccion.optUbigeo;
                opt.refresh = true;
                cargarUbigeo(opt);
            }
        }
    }
    var funcionesBeneficios = {
        verFicha: function () {
            $TabPillBeneficio.removeClass("disabled");
            $TabPillBeneficio.click();

        },
        insertar: function () {
            console.log('insertando');
            objBeneficioScrsl = new Object;
            objBeneficioScrsl.id = '';
            objBeneficioScrsl.idprvdr = $txtIdProveedor.val();
            objBeneficioScrsl.idsprvdr = $hfIdSucursal.val();
            objBeneficioScrsl.idbasgnds = configDTBeneficio.asignados;
            objBeneficioScrsl.idbnoasgnds = configDTBeneficio.noAsignados;
            objBeneficioScrsl.ftbtds = configDTBeneficio.swCheckedAll ? 1 : 0;
            objBeneficioScrsl.gdestdo = "A";
            $.post("../Proveedor/insertar-beneficioPrv", objBeneficioScrsl)
                .done(function (Retorno) {
                    Swal.fire({
                        icon: "success",
                        allowOutsideClick: false,
                        title: "Éxito",
                        text: "Se registro satisfactoriamente.",
                        confirmButtonText: "Aceptar"
                    }).then((result) => {
                        console.log("lote de beneficios:" + Retorno)
                        configDTBeneficioScrsl.reload();
                        $mdlBuscarBeneficio.modal('hide');
                    });
                })
                .fail(function (e) {
                    Swal.fire({
                        icon: "error",
                        title: "Error al insertar el registro.",
                        text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                        confirmButtonText: "Aceptar"
                    });
                })
                .always(function () {
                    $btnGuBeneficios.removeLoader();
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
                    $.post("../Proveedor/eliminar-beneficioPrv", parametro)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTBeneficioScrsl.reload();
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
            funcionesBeneficios.insertar();
        }
    }
    var funcionesCuentaBanco = {
        insertar: function () {
            
        },
        eliminar: function (id) {
            //var parametro = { id: id };
            Swal.fire({
                title: "¿Quiere modificar el estado del registro?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                confirmButtonClass: "btn btn-danger",
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    $.post("../Proveedor/eliminar-ctaPrv?id=" + id)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                //var asdad = configDTCtasPrv.objeto.row(id).data();
                                configDTCtasPrv.reload();

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

    var funcionesTarifario = {
        insertar: function () {
            console.log('insertando');
            objTarifarioPrvdr = new Object;

            objTarifarioPrvdr.id = '';
            objTarifarioPrvdr.idprvdr = $txtIdProveedor.val();
            //objTarifarioPrvdr.idgrproc = '';
            //objTarifarioPrvdr.idtrfro = $hfTipoEquivalencia.val();
            objTarifarioPrvdr.idbasgnds = configDTTarifario.asignados;
            objTarifarioPrvdr.idbnoasgnds = configDTTarifario.noAsignados;
            objTarifarioPrvdr.ftbtds = configDTTarifario.swCheckedAll ? 1 : 0;
            objTarifarioPrvdr.gdestdo = "A";
            $.post("../Proveedor/insertar-tarifarioPrv", objTarifarioPrvdr)
                .done(function (Retorno) {
                    Swal.fire({
                        icon: "success",
                        allowOutsideClick: false,
                        title: "Éxito",
                        text: "Se registro satisfactoriamente.",
                        confirmButtonText: "Aceptar"
                    }).then((result) => {
                        console.log("lote de tarifarios:" + Retorno)
                        configDTTarifarioPrvdr.reload();
                        $mdlBuscarTarifario.modal('hide');
                    });
                })
                .fail(function (e) {
                    Swal.fire({
                        icon: "error",
                        title: "Error al insertar el registro.",
                        text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                        confirmButtonText: "Aceptar"
                    });
                })
                .always(function () {
                    $btnGuTarifarios.removeLoader();
                });
        },
        guardar: function () {
            funcionesTarifario.insertar();
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
                    $.post("../Proveedor/eliminar-tarifarioPrv", parametro)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTTarifarioPrvdr.reload();
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
    var funcionesCpms = {
        insertar: function () {
            console.log('insertando');
            objCpmsPrvdr = new Object;

            objCpmsPrvdr.id = '';
            objCpmsPrvdr.idprvdr = $txtIdProveedor.val();
            //objTarifarioPrvdr.idcpms = $hfTipoEquivalencia.val();
            objCpmsPrvdr.idbasgnds = configDTCpms.asignados;
            objCpmsPrvdr.idbnoasgnds = configDTCpms.noAsignados;
            objCpmsPrvdr.ftbtds = configDTCpms.swCheckedAll ? 1 : 0;
            objCpmsPrvdr.gdestdo = "A";
            $.post("../Proveedor/insertar-cpmsPrv", objCpmsPrvdr)
                .done(function (Retorno) {
                    Swal.fire({
                        icon: "success",
                        allowOutsideClick: false,
                        title: "Éxito",
                        text: "Se registro satisfactoriamente.",
                        confirmButtonText: "Aceptar"
                    }).then((result) => {
                        console.log("lote de Cpms:" + Retorno)
                        configDTCpmsPrvdr.reload();
                        $mdlBuscarCpms.modal('hide');
                    });
                })
                .fail(function (e) {
                    Swal.fire({
                        icon: "error",
                        title: "Error al insertar el registro.",
                        text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                        confirmButtonText: "Aceptar"
                    });
                })
                .always(function () {
                    $btnGuCpms.removeLoader();
                });
        },
        guardar: function () {
            funcionesCpms.insertar();
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
                    $.post("../Proveedor/eliminar-cpmsPrv", parametro)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTCpmsPrvdr.reload();
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
    var funcionesNomenclador = {
        insertar: function () {
            console.log('insertando');
            objNomencladorPrvdr = new Object;

            objNomencladorPrvdr.id = '';
            objNomencladorPrvdr.idprvdr = $txtIdProveedor.val();
            objNomencladorPrvdr.idbasgnds = configDTNomenclador.asignados;
            objNomencladorPrvdr.idbnoasgnds = configDTNomenclador.noAsignados;
            objNomencladorPrvdr.ftbtds = configDTNomenclador.swCheckedAll ? 1 : 0;
            objNomencladorPrvdr.gdestdo = "A";
            $.post("../Proveedor/insertar-nomencladorPrv", objNomencladorPrvdr)
                .done(function (Retorno) {
                    Swal.fire({
                        icon: "success",
                        allowOutsideClick: false,
                        title: "Éxito",
                        text: "Se registro satisfactoriamente.",
                        confirmButtonText: "Aceptar"
                    }).then((result) => {
                        console.log("lote de Cpms:" + Retorno)
                        configDTNomencladorPrvdr.reload();
                        $mdlBuscarNomenclador.modal('hide');
                    });
                })
                .fail(function (e) {
                    Swal.fire({
                        icon: "error",
                        title: "Error al insertar el registro.",
                        text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                        confirmButtonText: "Aceptar"
                    });
                })
                .always(function () {
                    $btnNuNomenclador.removeLoader();
                });
        },
        guardar: function () {
            funcionesNomenclador.insertar();
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
                    $.post("../Proveedor/eliminar-nomencladorPrv", parametro)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTNomencladorPrvdr.reload();
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


    
    //#endregion
    //#region eventos
    var eventosProveedor = {
        btnNuevoProv: function () {
            $btnNuevoProveedor.click(function () {
                funcionesProveedor.nuevo();
                configFormProveedor.inicio();
            });
        },
        btnBuscarPersona: function () {
            $btnMdlBsqPersona.click(function () {
                $frmBusquedaPersona.trigger("reset");
                $cboTPersona.val("2");
                $cboTPersona.attr("disabled", true);
                $cboTipoDocumento.val("8");
                $cboTipoDocumento.attr("disabled", true);
                configDTPersona.reload();
            });
            $btnBuscarPersona.click(function () {
                configDTPersona.reload();
            });
        },
        btnBuscarDireccion: function () {
            $btnmdlDireccion.click(function () {
                configDTDireccion.reload();
            });
        },
        btnBuscarTelefono: function () {
            $btnmdlTelefono.click(function () {
                configDTTelefono.reload();
            });
        },
        btnBuscarCorreo: function () {
            $btnmdlCorreo.click(function () {
                configDTCorreo.reload();
            });
        },
        btnGuardarProveedor: function () {
            $btnGProveedor.click(function () {
                if ($hfactionProveedor.val() == "N") {
                    funcionesProveedor.insertar();
                } else {
                    funcionesProveedor.actualizar();
                    configDTCtasPrv.reload();
                    
                }
            });
        },
        Lista_tab: function () {
            $Lista_tab.click(function () {
                configFormProveedor.inicioIndex();
                configDTCtasPrv.asignados = [];
                configFormProveedor.validacion.eventos.reset();
                $frmProveedor.trigger("reset");
                //configDTCtasPrv.reload();
            });
        },
        Equivalencia_tab: function () {
            $Equivalencia_tab.click(function () {
                //configFormEquivalencia.inicio();
                $segusTab.click();
                configDTTarifarioPrvdr.reload();
            });
        },
        Sucursal_tab: function () {
            $Sucursal_tab.click(function () {
                $TabPillSucursal.click();
            });
        },
        init: function () {
            eventosProveedor.btnNuevoProv();
            eventosProveedor.btnBuscarPersona();
            eventosProveedor.btnBuscarDireccion();
            eventosProveedor.btnBuscarTelefono();
            eventosProveedor.btnBuscarCorreo();
            eventosProveedor.btnGuardarProveedor();
            eventosProveedor.Lista_tab();
            eventosProveedor.Equivalencia_tab();
            eventosProveedor.Sucursal_tab();

        }
    }
    var eventosEquivalencia = {
        chkCostof: function () {
            $chkCostof.change(function () {
                configFormEquivalencia.validacion.eventos.reset();
                var bool = $(this).is(':checked');
                $txtUnProcedimiento.val('').attr("disabled", bool);
                $txtCostoProcedimiento.attr("disabled", !bool);

            });
        },
        chkUnidad: function () {
            $chkUnidad.change(function () {
                configFormEquivalencia.validacion.eventos.reset();
                var bool = $(this).is(':checked');
                $txtUnProcedimiento.attr("disabled", !bool);
                $txtCostoProcedimiento.val('').attr("disabled", bool);
            });
        },
        cboTarifario: function () {
            $cboTarifario.change(function () {
                //configFormEquivalencia.validacion.eventos.reset();
                //$txtIdTarifario.val('');
                //$txtDesTarifario.val('');
                //$hfIdTarifario.val('');
                //if (this.value == 2 || this.value == "") {
                //    $frmEquivalencia.find("[name='cstounidad']").attr("disabled", true);
                //    $frmEquivalencia.find("[name='cstounidad']").prop("checked", false);
                //    $txtUnProcedimiento.attr("disabled", true).val('');
                //    $txtCostoProcedimiento.attr("disabled", true).val('');
                //} else {
                //    $frmEquivalencia.find("[name='cstounidad']").attr("disabled", false);
                //    $chkUnidad.click();
                //}
                $txtDesProcedimiento.val("");
                $txtIdProcedimiento.val("");
                $
            });
        },
        btnmdlTarifario: function () {
            $btnmdlTarifario.click(function () {
                configDTTarifarioSegus.reload();
            });
        },
        btnmdlProcedimiento: function () {
            $btnmdlProcedimiento.click(function () {
                if ($cboTarifario.val() == '') {
                    Swal.fire({
                        icon: "warning",
                        allowOutsideClick: false,
                        title: "Tarifario",
                        text: "Seleccione el tipo de tarifario.",
                        confirmButtonText: "Aceptar"
                    })
                    return false;
                } else { configDTProcedimiento.reload(); }
                
            });
        },
        btnNuEquivalencia: function () {
            $btnNuEquivalencia.click(function () {
                if ($hfTipoEquivalencia.val() == "1") {
                    $mdlTitleTarifario.text("Búsqueda SEGUS");
                    $cboTarifario.val("1");
                    configDTTarifario.eliminarDT();
                    configDTTarifario.reload();
                    configDTCpmsPrvdr.reload();
                    configDTTarifario.func.init();
                    
                }
                else if ($hfTipoEquivalencia.val() == "2") {
                    $mdlTitleTarifario.text("Búsqueda CPMS");
                 //prueba   $cboTarifario.val("2");
                 //prueba   configDTTarifarioSegus.reload();
                    configDTCpms.reload();
                } else {
                    $mdlTitleTarifario.text("Búsqueda Servicios");
                }
            });
        },
        btnGuEquivalencia: function () {
            $btnGuEquivalencia.click(function () {
                if ($frmEquivalencia.valid()) {
                    funcionesEquivalencia.guardar();
                }
            });
        },
        TabsEquivalencias: function () {
            $segusTab.click(function () {
                configDTNomenclador.eliminarDT();
                configDTCpms.eliminarDT();
                $hfTipoEquivalencia.val("1");
                console.log($hfTipoEquivalencia.val())

            });
            //$cpmsTab.click(function () {
            //    $hfTipoEquivalencia.val("2");
            //    console.log($hfTipoEquivalencia.val())

            //});
            //$serviciosTab.click(function () {
            //    $hfTipoEquivalencia.val("3");
            //    console.log($hfTipoEquivalencia.val())

            //});
        },
        init: function () {
            eventosEquivalencia.btnmdlTarifario();
            eventosEquivalencia.btnmdlProcedimiento();
            eventosEquivalencia.btnNuEquivalencia();
            eventosEquivalencia.btnGuEquivalencia();
            eventosEquivalencia.cboTarifario();
            eventosEquivalencia.chkCostof();
            eventosEquivalencia.chkUnidad();
            eventosEquivalencia.TabsEquivalencias();
        }
    }
    var eventosSucursal = {
        tbBeneficio: function () {
            $TabPillBeneficio.click(function () {
                $txtDatoProveedorBen.val($hfDatosPrv.val());
                $txtDatoProvSucursal.val($hfDatosScr.val());
                configDTBeneficioScrsl.reload();
            });
        },
        tbSucursal: function () {
            $TabPillSucursal.click(function () {
                $TabPillBeneficio.addClass('disabled');
                configDTSucursales.reload();
            });
        },
        btnNuSucursal: function () {
            $btnNuSucursal.click(function () {
                configFormSucursal.inicio();
                $hfactionSucursal.val("N");
                $btnGuSucursal.prop("disabled", false);
            });
        },
        btnGuSucursal: function () {
            $btnGuSucursal.click(function () {
                if ($frmSucursal.valid()) {
                    $btnGuSucursal.prop("disabled", true);
                    funcionesSucursales.guardar();
                }
            });
        },
        init: function () {
            eventosSucursal.tbBeneficio();
            eventosSucursal.tbSucursal();
            eventosSucursal.btnNuSucursal();
            eventosSucursal.btnGuSucursal();
        }
    }

    //#region Cambios segusproveedor
    var eventosTarifarioProveedor = {
        btnNuTarifario: function () {
            $btnNuTarifarios.click(function () {
                if ($hfTipoEquivalencia.val() == "1") {
                    $mdlTitleTarifario.text("Búsqueda SEGUS");
                    configDTTarifario.func.init();
                    configDTTarifario.reload();
                }
                else if ($hfTipoEquivalencia.val() == "2") {
                    $mdlTitleTarifario.text("Búsqueda CPMS");
                    configDTCpms.func.init();
                    configDTCpms.reload();
                }
                else {
                    $mdlTitleTarifario.text("Búsqueda Servicios");
                }

            });
        },
        btnGuTarifario: function () {
            $btnGuTarifarios.click(function () {
                $(this).addLoader();
                //if (configDTBeneficio.asignados != '' || configDTBeneficio.noAsignados != '' || configDTBeneficio.swCheckedAll) {
                funcionesTarifario.guardar();
                //}
            });
        },
        TabsEquivalencias: function () {
            $segusTab.click(function () {
                $hfTipoEquivalencia.val("1");
                console.log($hfTipoEquivalencia.val())

            });
            $cpmsTab.click(function () {
                $hfTipoEquivalencia.val("2");
                console.log($hfTipoEquivalencia.val())

            });
            $serviciosTab.click(function () {
                $hfTipoEquivalencia.val("3");
                console.log($hfTipoEquivalencia.val())

            });
        },
        init: function () {
            eventosTarifarioProveedor.btnNuTarifario();
            eventosTarifarioProveedor.btnGuTarifario();
            eventosTarifarioProveedor.TabsEquivalencias();
        }
    }
    var eventosCpmsProveedor = {
            btnNuevo: function () {
                $btnNuCpms.click(function () {
                    if ($hfTipoEquivalencia.val() == "2") {
                        $mdlTitleCpms.text("Búsqueda CPMS");
                        configDTCpms.eliminarDT();
                        configDTCpms.reload();
                        configDTCpms.func.init();
                        
                    }
                });
            },
            btnGuardar: function () {
                $btnGuCpms.click(function () {
                    $(this).addLoader();
                    funcionesCpms.insertar();
                });
            },
            tabDiagEx: function () {
                $Cpms_tab.click(function () {
                    configDTTarifario.eliminarDT();
                    configDTNomenclador.eliminarDT();
                    configDTCpmsPrvdr.reload();
                    configDTCpms.reload();
                });
            },
            init: function () {
                this.btnNuevo();
                this.btnGuardar();
                this.tabDiagEx();
            }

    }
    var eventosNomencladorProveedor = {
        btnNuevo: function () {
            $btnNuNomenclador.click(function () {
                //if ($hfTipoEquivalencia.val() == "3") {
                $mdlTitleNomenclador.text("Búsqueda Nomenclador");
                configDTNomenclador.eliminarDT();
                configDTNomenclador.reload();
                configDTNomenclador.func.init();
                    
                //}
            });
        },
        btnGuardar: function () {
            $btnGuNomenclador.click(function () {
                $(this).addLoader();
                funcionesNomenclador.insertar();
            });
        },
        tabNomenclador: function () {
            $Nomenclador_tab.click(function () {
                configDTTarifario.eliminarDT();
                configDTCpms.eliminarDT();
                configDTNomencladorPrvdr.reload();
                configDTNomenclador.reload();
            });
        },
        init: function () {
            this.btnNuevo();
            this.btnGuardar();
            this.tabNomenclador();
        }
    }
    //#endregion

    var eventosBeneficios = {
        btnNuBeneficio: function () {
            $btnNuBeneficio.click(function () {
                configDTBeneficio.func.init();
                configDTBeneficio.reload();
            });
        },
        btnGuBeneficios: function () {
            $btnGuBeneficios.click(function () {
                $(this).addLoader();
                //if (configDTBeneficio.asignados != '' || configDTBeneficio.noAsignados != '' || configDTBeneficio.swCheckedAll) {
                funcionesBeneficios.guardar();
                //}
            });
        },
        init: function () {
            eventosBeneficios.btnNuBeneficio();
            eventosBeneficios.btnGuBeneficios();
        }
    }

    //#endregion
    //#region ConfigModales
    var configModalSucursal = {
        eventos: {
            onHide: function () {
                $mdlSucursal.on("hidden.bs.modal", function () {
                    configModalSucursal.eventos.reset();
                })
            },
            onShow: function () {
                $mdlSucursal.on("shown.bs.modal", function () {
                    if ($hfactionSucursal.val() == "N") {
                        $frmSucursal.AgregarCamposDefectoAuditoria();
                        $txtDatoProveedorSuc.val($hfDatosPrv.val());
                        $frmSucursal.DeshabilitarCamposAuditoria();
                    }
                })
            },
            reset: function () {
                //configFormSucursal.reset();
                $frmSucursal.trigger("reset");
                //configFormSucursal.validacion.objeto.resetForm();
                configFormSucursal.validacion.eventos.reset();
                $frmSucursal.find(":input").attr("disabled", false);
            }
        },
        init: function () {
            this.eventos.onHide();
            this.eventos.onShow();
        }
    }
    var configModalBeneficios = {
        eventos: {
            onHide: function () {
                $mdlBuscarBeneficio.on("hidden.bs.modal", function () {
                    configModalBeneficios.eventos.reset();
                })
            },
            onShow: function () {
                $mdlBuscarBeneficio.on("shown.bs.modal", function () {

                })
            },
            reset: function () {
                console.log('on hide beneficios');
                configDTBeneficio.func.init();
            }
        },
        init: function () {
            configModalBeneficios.eventos.onHide();
        }
    }
    //#endregion
    //#region Formularios
    var configFormProveedor = {
        inicioIndex: function () {
            $Datos_tab.addClass('disabled');
            $Equivalencia_tab.addClass('disabled');
            $Sucursal_tab.addClass('disabled');
            $cboDireccionPers.attr("disabled", true);
            $cboTelefonoPers.attr("disabled", true);
            $cboCorreoPers.attr("disabled", true);
        },
        inicio: function () {
            $datosAyN.addClass("d-none");
            if ($hfactionProveedor.val() == "N") {
                $frmProveedor.AgregarCamposDefectoAuditoria();
            }
        },
        validacion: {
            objeto: $frmProveedor.validate({
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
                    cboDireccionPers: {
                        required: true,
                    },
                    cboTelefonoPers: {
                        required: true,
                    },
                    cboCorreoPers: {
                        required: true,
                    },
                    cboTDocumento: {
                        required: true,
                    },
                    txtNDocumento: {
                        required: true,
                    },
                    txtRazonSocial: {
                        required: true,
                    },
                    txtAPaterno: {
                        required: true,
                    },
                    txtAMaterno: {
                        required: true,
                    },
                    txtPNombre: {
                        required: true,
                        maxlength: 22
                    },
                    txtDireccionPers: {
                        required: true,
                        maxlength: 22
                    },
                    txtTelefonoPers: {
                        required: true,
                    },
                    txtCorreoPers: {
                        required: true,
                    },
                    cboTiProveedor: {
                        required: true,
                    },
                    cboTiRProveedor: {
                        required: true,
                    },
                    cboZNaval: {
                        required: true,
                    },
                    cboIndInstitucional: {
                        required: true,
                    },
                    txtPWeb: {
                        required: false,
                    },
                    cboTEmpresa: {
                        required: true,
                    }
                }
            }),
            eventos: {
                reset: function () {
                    configFormProveedor.validacion.objeto.resetForm();
                }
            }
        },
        init: function () {
            configFormProveedor.inicioIndex();
        }
    }
    var configFormEquivalencia = {
        inicio: function () {
            //configFormEquivalencia.reset();
            $cboTarifario.attr('disabled', true);
            $btnmdlTarifario.attr('disabled', true);
            $btnmdlProcedimiento.attr('disabled', true);
            $datoProvEquivalencia.attr('disabled', true);
            $txtUnProcedimiento.attr('disabled', true);
            $txtCostoProcedimiento.attr('disabled', true);
            $frmEquivalencia.find("[name='cstounidad']").attr("disabled", true);
            $datoProvEquivalencia.val($hfDatosPrv.val());
            configFormEquivalencia.validacion.eventos.reset();
           // $frmEquivalencia.AgregarCamposDefectoAuditoria();
        },
        reset: function () {
            $frmEquivalencia.trigger("reset");
        },
        validacion: {
            objeto: $frmEquivalencia.validate({
                errorPlacement: function (error, element) {
                    if (element.parent('.input-group').length) {
                        error.insertAfter(element.parent());
                    } else {
                        error.insertAfter(element);
                    }
                },
                rules: {
                    cboTarifario: {
                        required: true,
                    },
                    txtIdTarifario: {
                        required: true,
                    },
                    txtIdProcedimiento: {
                        required: true,
                        maxlength: 22
                    },
                    txtUnProcedimiento: {
                        required: true,
                    },
                    txtCostoProcedimiento: {
                        required: true,
                        maxlength: 7
                    },
                }
            }),
            eventos: {
                reset: function () {
                    configFormEquivalencia.validacion.objeto.resetForm();
                }
            }
        },
        init: function () {
            configFormEquivalencia.inicio();
        }
    }
    var configFormSucursal = {
        inicio: function () {
            $cboProvincia.val('').text('Seleccione').attr('disabled', true);
            $cboDistrito.val('').text('Seleccione').attr('disabled', true); 
            $txtDatoProveedorSuc.val($hfDatosPrv.val());
            configFormSucursal.ubigeo.init();
            
        },
        reset: function () {
            $frmSucursal.trigger("reset");
        },
        validacion: {
            objeto: $frmSucursal.validate({
                errorPlacement: function (error, element) {
                    if (element.parent('.input-group').length) {
                        error.insertAfter(element.parent());
                    } else {
                        error.insertAfter(element);
                    }
                },
                rules: {
                    cboPrdtrmndoScrsl: {
                        required: true,
                    },
                    txtDescripcionScrsl: {
                        required: true,
                    },
                    txtAbrvtraScrsl: {
                        required: true,
                        maxlength: 22
                    },
                    txtDireccionScrsl: {
                        required: true,
                    },
                    txtReferenciaScrsl: {
                        required: true,
                    },
                    cboDepartamento: {
                        required: true,
                    },
                    cboProvincia: {
                        required: true,
                    },
                    cboDistrito: {
                        required: true,
                    },
                    txtNRegistroSusalud: {
                        required: true,
                    },
                    txtfinivigencia: {
                        required: true,

                    }, txtffinvigencia: {
                        required: true,
                    },
                    cboImpCarta: {
                        required: true,
                    }
                }
            }),
            eventos: {
                reset: function () {
                    configFormSucursal.validacion.objeto.resetForm();
                }
            }
        },
        ubigeo: {
            opc: {
                codDepartamento: '',
                codProvincia: '',
                codUbigeo: '',
                codPais: '169',
                controles: {
                    departamento: $cboDepartamento,
                    provincia: $cboProvincia,
                    distrito: $cboDistrito,
                    nacionalidad: ''
                }
            },
            init: function () {
                configFormSucursal.ubigeo.opc.refresh = true;
                cargarUbigeo(configFormSucursal.ubigeo.opc);
            }
        },
        init: function () {
            configFormSucursal.inicio();
        }
    }
    //#endregion
    //#region combos
    var configLlenarListas = {
        init: function () {
            $cboTPersona.LlenarSelectGD("GDTPRSNA");
            $cboTDocumento.LlenarSelectGD("GDDCMNTO");
            $cboTiRProveedor.LlenarSelectGD("GDTDOPC");
            $cboZNaval.LlenarSelectGD("GDTDOPC");
            $cboIndInstitucional.LlenarSelectGD("GDTDOPC");
            $stdoProveedor.LlenarSelectGD("GDESTDO");
            $cboTipoDocumento.LlenarSelectGD("GDDCMNTO");
            $cboTiProveedor.LlenarSelectGD("GDTESLDD");
            $stdoEquivalencia.LlenarSelectGD("GDESTDO");
            $cboTarifario.LlenarSelectGD("GDTTRFRO");
            $cboPrdtrmndoScrsl.LlenarSelectGD("GDTDOPC");
            $cboImpCarta.LlenarSelectGD("GDTDOPC");
            $stdoSucursal.LlenarSelectGD("GDESTDO");
            $cboIndExIGV.LlenarSelectGD("GDTDOPC");
            $cboTEmpresa.LlenarSelectGD("GDCEMPRSA");
            
        }
    };
    //#endregion
    var optSelect = {
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
            }
        }
    }
    var configCboListDireccionPers = {
        options: {
            width: 'resolve', minimumResultsForSearch: -1,
            placeholder: 'Seleccione',
            dropdownCssClass: 'form-control form-control-sm',
            language: optSelect.language,
            theme: 'bootstrap4',
            ajax: {
                url: "../Direccion/listar",
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    var query = {
                        idprsna: $hfIdPersona.val(),
                    }
                    return query;
                },
                processResults: function (data) {
                    var results = [];
                    var dataResponse = { id: '', text: '' }
                    for (var i = 0; i < data.length; i++) {
                        dataResponse = new Object();
                        dataResponse.id = data[i].id;
                        if (data[i].via != null) {
                            dataResponse.text = data[i].gdtvia + " " + data[i].via + " " + data[i].nvia + " - " + data[i].gdtdzna + " " + data[i].zna + " - " + data[i].nintrr + " - " + data[i].rfrncia;
                        } else { dataResponse.text = data[i].gdtvia + " " + data[i].nvia + " - " + data[i].gdtdzna + " " + data[i].zna + " - " + data[i].nintrr + " - " + data[i].rfrncia; }
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
                $cboDireccionPers.on('select2:select', function (e) {
                    var data = e.params.data;
                    $hfIdDireccion.val(data.id);
                })
            },
            init: function () {
                configCboListDireccionPers.eventos.onSelect();
            }
        },
        reset: function () {
            $cboDireccionPers.val(null).trigger('change');
            configCboListDireccionPers.init();
        },
        selected: function (id) {
            if (!id) {
                configCboListDireccionPers.reset();
                return false;
            }
            configCboListDireccionPers.init();
            var param = { idprsna: $hfIdPersona.val() }
            $.get("../Direccion/listar", param)
                .done(function (result) {
                    var i = 0;
                    var data = $((result)).filter((i, n) => { return n.id == id });
                    if (data[i].via != null) {
                        var dirText = data[i].gdtvia + " " + data[i].via + " " + data[i].nvia + " - " + data[i].gdtdzna + " " + data[i].zna + " - " + data[i].nintrr + " - " + data[i].rfrncia;
                    } else { var dirText = data[i].gdtvia + " " + data[i].nvia + " - " + data[i].gdtdzna + " " + data[i].zna + " - " + data[i].nintrr + " - " + data[i].rfrncia; }
                    var newOption = new Option(dirText, data[i].id, false, false);
                    $cboDireccionPers.append(newOption).trigger('change');
                });
        },
        init: function () {
            $cboDireccionPers.select2(configCboListDireccionPers.options);
            configCboListDireccionPers.eventos.init();
        }
    }
    var configCboListTelefonoPers = {
        options: {
            width: 'resolve', minimumResultsForSearch: -1,
            placeholder: 'Seleccione',
            dropdownCssClass: 'form-control form-control-sm',
            language: optSelect.language,
            theme: 'bootstrap4',
            ajax: {
                url: "../Telefono/listar",
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    var query = {
                        idprsna: $hfIdPersona.val(),
                    }
                    return query;
                },
                processResults: function (data) {
                    var results = [];
                    var dataResponse = { id: '', text: '' }
                    for (var i = 0; i < data.length; i++) {
                        dataResponse = new Object();
                        dataResponse.id = data[i].id;
                        dataResponse.text = data[i].gdttlfno + " - " + data[i].ntlfno;;
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
                $cboTelefonoPers.on('select2:select', function (e) {
                    var data = e.params.data;
                    $hfIdTelefono.val(data.id);
                })
            },
            init: function () {
                configCboListTelefonoPers.eventos.onSelect();
            }
        },
        reset: function () {
            $cboTelefonoPers.val(null).trigger('change');
            configCboListTelefonoPers.init();
        },
        selected: function (id) {
            if (!id) {
                configCboListTelefonoPers.reset();
                return false;
            }
            configCboListTelefonoPers.init();
            var param = { idprsna: $hfIdPersona.val() }
            $.get("../Telefono/listar", param)
                .done(function (result) {
                    var i = 0;
                    var data = $((result)).filter((i, n) => { return n.id == id });
                    var itemText = data[i].gdttlfno + " - " + data[i].ntlfno;
                    var newOption = new Option(itemText, data[i].id, false, false);
                    $cboTelefonoPers.append(newOption).trigger('change');
                });
        },
        init: function () {
            $cboTelefonoPers.select2(configCboListTelefonoPers.options);
            configCboListTelefonoPers.eventos.init();
        }
    }
    var configCboListCorreoPers = {
        options: {
            width: 'resolve', minimumResultsForSearch: -1,
            placeholder: 'Seleccione',
            dropdownCssClass: 'form-control form-control-sm',
            language: optSelect.language,
            theme: 'bootstrap4',
            ajax: {
                url: "../Correo/listar",
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    var query = {
                        idprsna: $hfIdPersona.val(),
                    }
                    return query;
                },
                processResults: function (data) {
                    var results = [];
                    var dataResponse = { id: '', text: '' }
                    for (var i = 0; i < data.length; i++) {
                        dataResponse = new Object();
                        dataResponse.id = data[i].id;
                        dataResponse.text = data[i].ccrreo;
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
                $cboCorreoPers.on('select2:select', function (e) {
                    var data = e.params.data;
                    $hfIdTelefono.val(data.id);
                })
            },
            init: function () {
                configCboListCorreoPers.eventos.onSelect();
            }
        },
        reset: function () {
            $cboCorreoPers.val(null).trigger('change');
            configCboListCorreoPers.init();
        },
        selected: function (id) {
            if (!id) {
                configCboListCorreoPers.reset();
                return false;
            }
            configCboListCorreoPers.init();
            var param = { idprsna: $hfIdPersona.val() }
            $.get("../Correo/listar", param)
                .done(function (result) {
                    var i = 0;
                    var data = $((result)).filter((i, n) => { return n.id == id });
                    var itemText = data[i].ccrreo;
                    var newOption = new Option(itemText, data[i].id, false, false);
                    $cboCorreoPers.append(newOption).trigger('change');
                });
        },
        init: function () {
            $cboCorreoPers.select2(configCboListCorreoPers.options);
            configCboListCorreoPers.eventos.init();
        }
    }
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
        fechasSUSALUD: function () {
            configDatePickers.opcRangoDesdeHasta.inputs = $('.dpRngSSLD');
            $rngFechasSUSALUD.datepicker(configDatePickers.opcRangoDesdeHasta);
        },
        init: function () {
            configDatePickers.fechasSUSALUD();
        }
    }
    //#endregion
    return {
        inicializar: function () {
            configFormProveedor.init();
            configDTProveedor.init();
            eventosProveedor.init();
            configLlenarListas.init();
            configDTPersona.init();
            eventosEquivalencia.init();
            eventosSucursal.init();
            configDTTarifarioPrvdr.reload();
            eventosTarifarioProveedor.init();

            eventosCpmsProveedor.init();
            configDTCpmsPrvdr.reload();

            configDTNomencladorPrvdr.reload();
            eventosNomencladorProveedor.init();

            //configFormEquivalencia.init();
            configDatePickers.init();
            configModalSucursal.init();
            eventosBeneficios.init();
            configModalBeneficios.init();
            configFormSucursal.init();
        }
    }
}();
$(() => jsPagProveedor.inicializar());