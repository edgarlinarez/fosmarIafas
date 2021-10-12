const jsRedes = function () {
    //#region variables index
    $TabRedes = $("#TabRedes");
    $Redes_tab = $("#Redes-tab");
    $Config_tab = $("#Config-tab");
    $Redes = $("#Redes");
    $ConfigRed = $("#ConfigRed");
    //#endregion
    //#region Red
    $hfactionRed = $("#hfactionRed");
    $btnNuRed = $("#btnNuRed");
    $btnGuRed = $("#btnGuRed");
    $dtRedes = $("#dtRedes");
    $mdlRed = $("#mdlRed");
    $mdlRedTitle = $("#mdlRedTitle");
    $frmRed = $("#frmRed");
    $hfIdRed = $("#hfIdRed");
    $txtIdRed = $("#txtIdRed");
    $txtRedDescripcion = $("#txtRedDescripcion");
    $cboTipoProveedor = $("#cboTipoProveedor");
    $cboDepartamento = $("#cboDepartamento");
    $cboRedSucursal = $("#cboRedSucursal");
    $estadoRed = $frmRed.find("[name='GDESTDO']");

    //#endregion
    //#region Configuracion Red
    $hfactionCfgRed = $("#hfactionCfgRed");
    $lblRedDscrpcn = $("#lblRedDscrpcn");
    $btnNuSucursal = $("#btnNuSucursal");
    $btnGuSucursal = $("#btnGuSucursal");
    $dtCfgRed = $("#dtCfgRed");
    $mdlProvSucursal = $("#mdlProvSucursal");
    $mdlProvSucursalTitle = $("#mdlProvSucursalTitle");
    $frmCfgRed = $("#frmCfgRed");
    $hfIdCfgRed = $("#hfIdCfgRed");
    $txtIdCfgRed = $("#txtIdCfgRed");
    $cboCfgRedProveedor = $("#cboCfgRedProveedor");
    $cboCfgRedSucursal = $("#cboCfgRedSucursal");
    $rngFechasVIGENCIA = $(".rngFechasVIGENCIA");
    $txtfinivigencia = $("#txtfinivigencia");
    $txtffinvigencia = $("#txtffinvigencia");
    $estadoRedSucursal = $frmCfgRed.find("[name='GDESTDO']");

    //#endregion
    //#region validacionControl

    let aNuRed = $("#aNuRed").val();
    let aEdRed = $("#aEdRed").val();
    let aElRed = $("#aElRed").val();
    let aGuRed = $("#aGuRed").val();
    let aNuRedSucursal = $("#aNuRedSucursal").val();
    let aEdRedSucursal = $("#aEdRedSucursal").val();
    let aElRedSucursal = $("#aElRedSucursal").val();
    let aGuRedSucursal = $("#aGuRedSucursal").val();

    let validacionControles = {
        init: function () {
            console.log(aNuRed);
            aNuRed == "False" && $btnNuRed.hide();
            aGuRed == "False" && $btnGuRed.hide();
            aNuRedSucursal == "False" && $btnNuSucursal.hide();
            aGuRedSucursal == "False" && $btnGuSucursal.hide();
        }
    };
    //#endregion
    //#region Configuracion DataTable
    var configDTRedes = {
        objeto: null,
        opciones: {
            filter: false,
            ajax: {
                datatype: "JSON",
                url: "/red/listarRedDT",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.gdestdo = '';
                }
            },
            columns: [
                {
                    title: "",
                    data: null,
                    width: '2%',
                    orderable: false,
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        tpm += `<button type="button" class="btn btn-primary btn-xs btn-config" data-id="${data.id}" title="Configurar Red"><span><i class="fa fa-cogs"></i></span></button>`;
                        return tpm;
                    }
                },
                {
                    title: "Código",
                    data: "id",
                    width: '4%',
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
                    title: "Grupo Proveedor",
                    data: "gdtprvdr",
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Departamento",
                    data: "udprtmnto",
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Cat. Sucursal",
                    data: "cscrsl",
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "U. Edición",
                    data: "uedcn",
                    width: '10%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN",
                    width: '18%',
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
                    title: "Acciones",
                    data: null,
                    orderable: false,
                    width: '11%',
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                       /* if (aEdRed == "True") {*/
                            tpm += `<button type="button" class="btn btn-info btn-xs btn-editar" data-id="${data.id}" title="Editar" data-toggle="modal" data-target="#mdlRed"><span><i class="la la-edit"></i></span></button>`;
                        //}
                      /*  if (aElRed == "True") {*/
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
                configDTRedes.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    fnRed.eliminar(id);
                })
            },
            editar: function () {
                configDTRedes.objeto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");
                    $mdlRedTitle.text("Editar Red");
                    $hfactionRed.val("E");
                    $hfIdRed.val(id);
                    fnRed.obtener(id);
                })
            },
            configurar: function () {
                configDTRedes.objeto.on("click", ".btn-config", function () {
                    var id = $(this).data("id");
                    var data = configDTRedes.objeto.row($(this).parents('tr')).data();
                    $lblRedDscrpcn.text(data.dscrpcn);
                    $hfIdRed.val(id);
                    configDTRedesSucursales.reload();
                    $Config_tab.prop('disabled', false);
                    $Config_tab.removeClass('disabled');
                    $Config_tab.click();
                })
            },
            init: function () {
                configDTRedes.eventos.editar();
                configDTRedes.eventos.eliminar();
                configDTRedes.eventos.configurar();
            }
        },
        reload: function () {
            if (configDTRedes.objeto == null || configDTRedes.objeto == "" || configDTRedes.objeto == undefined) {
                configDTRedes.objeto = $dtRedes.DataTable(configDTRedes.opciones);
                configDTRedes.eventos.init();
            } else { configDTRedes.objeto.ajax.reload(); }
        }
    };
    var configDTRedesSucursales = {
        objeto: null,
        opciones: {
            filter: false,
            ajax: {
                datatype: "JSON",
                url: "/red/listarCfgRedDT",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.id = $hfIdRed.val();
                    data.gdestdo = '';
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
                    title: "Id Red",
                    data: "idrd",
                    width: '4%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Proveedor",
                    data: "dprvdr",
                    width: '40%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Sucursal",
                    data: "dscrsl",
                    width: '40%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "F. Inicio",
                    data: "cFIVGNCA",
                    width: '14%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "F. Fin",
                    data: "cFFVGNCA",
                    width: '14%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "U. Edición",
                    data: "uedcn",
                    width: '16%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN",
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
                      //  if (aEdRedSucursal == "True") {
                        tpm += `<button type="button" class="btn btn-info btn-xs btn-editar" data-id="${data.id}" title="Editar" data-toggle="modal" data-target="#mdlProvSucursal"><span><i class="la la-edit"></i></span></button>`;
                       // }
                       // if (aElRedSucursal == "True") {
                        tpm += ` <button title="Cambiar estado" data-id="${data.id}" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>`;
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
            eliminar: function () {
                configDTRedesSucursales.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    $hfIdCfgRed.val(id);
                    fnRedSucursal.eliminar(id);
                })
            },
            editar: function () {
                configDTRedesSucursales.objeto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");
                    $hfactionCfgRed.val("E");
                    $mdlProvSucursalTitle.text("Editar Red Sucursales");
                    $hfIdCfgRed.val(id);
                    fnRedSucursal.obtener(id);
                })
            },
            init: function () {
                configDTRedesSucursales.eventos.editar();
                configDTRedesSucursales.eventos.eliminar();
            }
        },
        reload: function () {
            if (configDTRedesSucursales.objeto == null || configDTRedesSucursales.objeto == "" || configDTRedesSucursales.objeto == undefined) {
                configDTRedesSucursales.objeto = $dtCfgRed.DataTable(configDTRedesSucursales.opciones);
                configDTRedesSucursales.eventos.init();
            } else { configDTRedesSucursales.objeto.ajax.reload(); }
        }
    };
    //#endregion
    //#region Forms
    var frmRed = {
        index: function () {
            $Config_tab.prop('disabled', true);
            $Config_tab.addClass('disabled');
        },
        inicio: function () {
            $frmRed.AgregarCamposDefectoAuditoria();
            frmRed.validacion.reset();
            $frmRed.DeshabilitarCamposAuditoria();
        },
        validacion: {
            objeto: $frmRed.validate({
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
                    txtRedDescripcion: {
                        required: true,
                    }
                }
            }),
            reset: function () {
                frmRed.validacion.objeto.resetForm();
            }
        },
        init: function () { frmRed.inicio(); }
    }
    var frmRedSucursal = {
        inicio: function () {
            $frmCfgRed.AgregarCamposDefectoAuditoria();
            frmRedSucursal.validacion.reset();
        },
        validacion: {
            objeto: $frmCfgRed.validate({
                highlight: function (element, errorClass, validClass) {
                    var elem = $(element);
                    if (elem.hasClass("select2-hidden-accessible")) {
                        $("#select2-" + elem.attr("id") + "-container").parent().addClass(errorClass);
                    } else {
                        elem.addClass(errorClass);
                    }
                },
                unhighlight: function (element, errorClass, validClass) {
                    var elem = $(element);
                    if (elem.hasClass("select2-hidden-accessible")) {
                        $("#select2-" + elem.attr("id") + "-container").parent().removeClass(errorClass);
                    } else {
                        elem.removeClass(errorClass);
                    }
                },
                errorPlacement: function (error, element) {
                    if (element.parent('.input-group').length) {
                        error.insertAfter(element.parent());
                    } else if (element.hasClass("select2-hidden-accessible")) {
                        element.siblings(":last").append(error);
                        //   element = $("#select2-" + elem.attr("id") + "-container").parent(); 
                        error.insertAfter(element);
                    } else {
                        error.insertAfter(element);
                    }

                },
                //errorPlacement: function (error, element) {
                //    if (element.parent('.input-group').length) {
                //        error.insertAfter(element.parent());
                //    } else if (element.hasClass("select2-hidden-accessible")) {
                //        element.siblings(":last").append(error);
                //    } else {
                //        error.insertAfter(element);
                //    }
                //},
                rules: {
                    cboCfgRedProveedor: {
                        required: true,
                    },
                    cboCfgRedSucursal: {
                        required: true,
                    },
                    txtfinivigencia: {
                        required: true,
                    },
                    txtffinvigencia: {
                        required: true,
                    },
                }
            }),
            reset: function () {
                frmRedSucursal.validacion.objeto.resetForm();
            }
        },
        init: function () { frmRedSucursal.inicio(); }
    }
    //#endregion
    //#region Modals
    var configModalRed = {
        eventos: {
            onHide: function () {
                $mdlRed.on("hidden.bs.modal", function () {
                    configModalRed.eventos.reset();
                })
            },
            onShow: function () {
                $mdlRed.on("shown.bs.modal", function () {
                    if ($hfactionRed.val() == "N") {
                        frmRed.inicio();
                    }
                })
            },
            reset: function () {
                frmRed.validacion.reset();
                $frmRed.trigger("reset");
                $frmRed.find(":input").attr("disabled", false);
            }
        },
        init: function () {
            this.eventos.onHide();
            this.eventos.onShow();
        }
    }
    var configModalRedSucursal = {
        eventos: {
            onHide: function () {
                $mdlProvSucursal.on("hidden.bs.modal", function () {
                    configModalRedSucursal.eventos.reset();
                })
            },
            onShow: function () {
                $mdlProvSucursal.on("shown.bs.modal", function () {
                    if ($hfactionCfgRed.val() == "N") {
                        frmRedSucursal.inicio();
                    }
                })
            },
            reset: function () {
                frmRedSucursal.validacion.reset();
                $frmCfgRed.trigger("reset");
                $frmCfgRed.find(":input").attr("disabled", false);
            }
        },
        init: function () {
            this.eventos.onHide();
            this.eventos.onShow();
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
            inputs: '',
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
    var opcAlert = {
        in: {
            icon: "success",
            allowOutsideClick: false,
            title: "Éxito",
            text: "Se registró satisfactoriamente.",
            confimButtonText: "Aceptar",
            //customClass: {
            //    confirmButton: 'btn btn-primary btn-xs',
            //    //cancelButton: 'btn btn-secondary btn-xs'
            //},
            //buttonsStyling: false
        },
        ac: {
            icon: "success",
            allowOutsideClick: false,
            title: "Éxito",
            text: "Se actualizó satisfactoriamente.",
            confimButtonText: "Aceptar",
            //customClass: {
            //    confirmButton: 'btn btn-primary btn-xs',
            //    //cancelButton: 'btn btn-secondary btn-xs'
            //},
            //buttonsStyling: false
        },
        el: {
            title: "¿Quiere modificar el estado del registro?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Aceptar",
            cancelButtonText: "Cancelar",
            confirmButtonClass: "btn btn-danger",//agregado
            //customClass: {
            //    confirmButton: 'btn btn-primary btn-xs mr-2',
            //    cancelButton: 'btn btn-secondary btn-xs'
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
    var objRed = {
        id: '',
        dscrpcn: '',
        gdtprvdr: '',
        udprtmnto: '',
        cscrsl: '',
        gdestdo: '',
        festdo: '',
        ucrcn: '',
        fcrcn: '',
        uedcn: '',
        fedcn: ''
    }
    var objRedSucursal = {
        id: '',
        idrd: '',
        idprvdr: '',
        dprvdr: '',
        idscrsl: '',
        dscrsl: '',
        fivgnca: '',
        ffvgnca: '',
        gdestdo: '',
        festdo: '',
        ucrcn: '',
        fcrcn: '',
        uedcn: '',
        fedcn: ''
    }
    var fnRed = {
        nuevo: function () {
            $mdlRedTitle.text("Nueva Red");
            $hfactionRed.val("N");
        },
        insertar: function () {
            objRed = new Object();
            objRed.id = $hfIdRed.val();
            objRed.dscrpcn = $txtRedDescripcion.val();
            objRed.gdtprvdr = $cboTipoProveedor.val();
            objRed.udprtmnto = $cboDepartamento.val();
            objRed.cscrsl = $cboRedSucursal.val();
            objRed.gdestdo = $estadoRed.val();
            $.post('red/insertarRed', objRed)
                .done(function (idRed) {
                    Swal.fire(opcAlert.in).then(function (r) {
                        $mdlRed.modal('hide');
                        configDTRedes.reload();
                    });
                })
                .always(function () { })
        },
        actualizar: function () {
            objRed = new Object();
            objRed.id = $hfIdRed.val();
            objRed.dscrpcn = $txtRedDescripcion.val();
            objRed.gdtprvdr = $cboTipoProveedor.val();
            objRed.udprtmnto = $cboDepartamento.val();
            objRed.cscrsl = $cboRedSucursal.val();
            objRed.gdestdo = $estadoRed.val();
            $.post('red/actualizarRed', objRed)
                .done(function (idRed) {
                    Swal.fire(opcAlert.in).then(function (r) {
                        $mdlRed.modal('hide');
                        configDTRedes.reload();
                    });
                })
                .always(function () { })
        },
        guardar: function () {
            if ($frmRed.valid()) {
                if ($hfactionRed.val() == "N") {
                    fnRed.insertar();
                } else {
                    fnRed.actualizar();
                }
            }
        },
        eliminar: function (id) {
            objRed = new Object();
            objRed.id = id;
            Swal.fire(opcAlert.el).then(function (r) {
                if (r.value) {
                    $.post("red/eliminarRed", objRed)
                        .done(function () {
                            Swal.fire(opcAlert.ac).then(() => {
                                configDTRedes.reload();
                            });
                        })
                }
            })

        },
        obtener: function (id) {
            var p = { id: id };
            $.get("red/obtenerRed", p)
                .done(function (data) {
                    objRed = new Object();
                    objRed = data;
                    $txtIdRed.val(objRed.id);
                    $txtRedDescripcion.val(objRed.dscrpcn);
                    $cboTipoProveedor.val(objRed.gdtprvdr);
                    $cboDepartamento.val(objRed.udprtmnto);
                    $cboRedSucursal.val(objRed.cscrsl);
                    $frmRed.AgregarCamposAuditoria(objRed);
                })
        }
    }
    var fnRedSucursal = {
        nuevo: function () {
            $mdlProvSucursalTitle.text("Nueva Red Sucursales");
            $hfactionCfgRed.val("N");
            configCboRedProveedor.reset();
            configCboRedSucursal.reset();
            $cboCfgRedSucursal.attr("disabled", true);
        },
        insertar: function () {
            objRedSucursalSucursal = new Object();
            objRedSucursal.id = $hfIdCfgRed.val();
            objRedSucursal.idrd = $hfIdRed.val();
            objRedSucursal.idscrsl = $cboCfgRedSucursal.val();
            objRedSucursal.fivgnca = $txtfinivigencia.val();
            objRedSucursal.ffvgnca = $txtffinvigencia.val();
            objRedSucursal.gdestdo = $estadoRedSucursal.val();
            $.post('red/insertarCfgRed', objRedSucursal)
                .done(function (idRedSucursal) {
                    Swal.fire(opcAlert.in).then(function (r) {
                        $mdlProvSucursal.modal('hide');
                        configDTRedesSucursales.reload();
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
            objRedSucursalSucursal = new Object();
            objRedSucursal.id = $hfIdCfgRed.val();
            objRedSucursal.idrd = $hfIdRed.val();
            objRedSucursal.idscrsl = $cboCfgRedSucursal.val();
            objRedSucursal.fivgnca = $txtfinivigencia.val();
            objRedSucursal.ffvgnca = $txtffinvigencia.val();
            objRedSucursal.gdestdo = $estadoRedSucursal.val();
            $.post('red/actualizarCfgRed', objRedSucursal)
                .done(function () {
                    Swal.fire(opcAlert.ac).then(function (r) {
                        $mdlProvSucursal.modal('hide');
                        configDTRedesSucursales.reload();
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
        },
        guardar: function () {
            if ($frmCfgRed.valid()) {
                if ($hfactionCfgRed.val() == "N") {
                    fnRedSucursal.insertar();
                } else {
                    fnRedSucursal.actualizar();
                }
            }
        },
        eliminar: function (id) {
            objRedSucursal = new Object();
            objRedSucursal.id = id;
            Swal.fire(opcAlert.el).then(function (r) {
                if (r.value) {
                    $.post("red/eliminarCfgRed", objRedSucursal)
                        .done(function () {
                            Swal.fire(opcAlert.ac).then(() => {
                                configDTRedesSucursales.reload();
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
        obtener: function (id) {
            var p = { id: id };
            $.get("red/obtenerCfgRed", p)
                .done(function (data) {
                    objRedSucursalSucursal = new Object();
                    objRedSucursal = data;
                    $txtIdCfgRed.val(objRedSucursal.id);
                    configCboRedProveedor.selected(objRedSucursal.idprvdr);
                    configCboRedSucursal.selected(objRedSucursal.idscrsl, objRedSucursal.idprvdr);
                    $txtfinivigencia.val(objRedSucursal.cFIVGNCA);
                    $txtffinvigencia.val(objRedSucursal.cFFVGNCA);
                    $frmCfgRed.AgregarCamposAuditoria(objRedSucursal);
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
    }
    var evntRed = {
        btnNuevo: function () {
            $btnNuRed.click(() => {
                fnRed.nuevo();
            });
        },
        btnGuardar: function () {
            $btnGuRed.click(() => {
                fnRed.guardar();
            });
        },
        tabRedes: function () {
            $Redes_tab.click(function () {
                frmRed.index();
            });
        },
        init: function () {
            evntRed.btnNuevo();
            evntRed.btnGuardar();
            evntRed.tabRedes();
        }

    }
    var evntRedSucursal = {
        btnNuevo: function () {
            $btnNuSucursal.click(() => {
                fnRedSucursal.nuevo();
            });
        },
        btnGuardar: function () {
            $btnGuSucursal.click(() => {
                fnRedSucursal.guardar();
            });
        },
        init: function () {
            evntRedSucursal.btnNuevo();
            evntRedSucursal.btnGuardar();
        }
    }
    var configCboRedProveedor = {
        options: {
            width: 'resolve', minimumResultsForSearch: -1,
            placeholder: 'Seleccione',
            dropdownCssClass: 'form-control form-control-sm',
            language: opcAlert.languageStrSelect2,
            theme: 'bootstrap4',
            ajax: {
                url: "/red/listarProveedorContrato",
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    var query = {
                        gdestdo: '',
                    }
                    return query;
                },
                processResults: function (data) {
                    var results = [];
                    var dataResponse = { id: '', text: '' }
                    for (var i = 0; i < data.length; i++) {
                        dataResponse = new Object();
                        dataResponse.id = data[i].id;
                        dataResponse.text = data[i].dprvdr;
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
                $cboCfgRedProveedor.on('select2:select', function (e) {
                    var data = e.params.data;
                    $cboCfgRedSucursal.prop("disabled", true);
                    $cboCfgRedSucursal.val(null).trigger('change');
                    setTimeout(function () { $cboCfgRedSucursal.prop("disabled", false) }, 100);
                    //$cboCfgRedSucursal.reload();
                })
            },
            init: function () {
                configCboRedProveedor.eventos.onSelect();
            }
        },
        reset: function () {
            $cboCfgRedProveedor.val(null).trigger('change');
            configCboRedProveedor.init();
        },
        selected: function (id) {
            if (!id) {
                configCboRedProveedor.reset();
                return false;
            }
            configCboRedProveedor.init();
            var param = { gdestdo: '' }
            $.get("/red/listarProveedorContrato", param)
                .done(function (result) {
                    var i = 0;
                    var data = $((result)).filter((i, n) => { return n.id == id });
                    var dirText = data[i].dprvdr;
                    var newOption = new Option(dirText, data[i].id, false, false);
                    $cboCfgRedProveedor.append(newOption).trigger('change');
                    //
                    $cboCfgRedProveedor.val(id);

                });
        },
        init: function () {
            $cboCfgRedProveedor.select2(configCboRedProveedor.options);
            configCboRedProveedor.eventos.init();
        }
    }
    var configCboRedSucursal = {
        options: {
            width: 'resolve', minimumResultsForSearch: -1,
            placeholder: 'Seleccione',
            dropdownCssClass: 'form-control form-control-sm',
            language: opcAlert.languageStrSelect2,
            theme: 'bootstrap4',
            ajax: {
                url: "/red/listarSucursalContratoProv",
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    var query = {
                        idprvdr: $cboCfgRedProveedor.val(),
                        gdestdo: ''
                    }
                    return query;
                },
                processResults: function (data) {
                    var results = [];
                    var dataResponse = { id: '', text: '' }
                    for (var i = 0; i < data.length; i++) {
                        dataResponse = new Object();
                        dataResponse.id = data[i].id;
                        dataResponse.text = "Versión: " + data[i].nvrsn + "-" + data[i].dscrpcn;
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
                $cboCfgRedProveedor.on('select2:select', function (e) {
                    var data = e.params.data;
                    // $cboCfgRedSucursal.reload();
                })
            },
            init: function () {
                configCboRedSucursal.eventos.onSelect();
            }
        },
        reset: function () {
            $cboCfgRedSucursal.val(null).trigger('change');
            configCboRedSucursal.init();
        },
        selected: function (id, idPadre) {
            if (!id) {
                configCboRedSucursal.reset();
                return false;
            }
            configCboRedSucursal.init();
            var param = { idprvdr: idPadre, gdestdo: '' }
            $.get("/red/listarSucursalContratoProv", param)
                .done(function (result) {
                    var i = 0;
                    var data = $((result)).filter((i, n) => { return n.id == id });
                    var dirText = "Versión: " + data[i].nvrsn + "-" + data[i].dscrpcn;
                    var newOption = new Option(dirText, data[i].id, false, false);
                    $cboCfgRedSucursal.append(newOption).trigger('change');
                });
        },
        init: function () {
            $cboCfgRedSucursal.select2(configCboRedSucursal.options);
            configCboRedSucursal.eventos.init();
        }
    }
    var initCombos = {
        init: function () {
            $estadoRed.LlenarSelectEstados();
            $estadoRedSucursal.LlenarSelectEstados();
            configCboRedProveedor.init();
            configCboRedSucursal.init();
        }
    }
    return {
        inicializar: function () {
            validacionControles.init();
            frmRed.index();
            configDTRedes.reload();
            configDTRedesSucursales.reload();
            evntRed.init();
            evntRedSucursal.init();
            frmRed.init();
            frmRedSucursal.init();
            configModalRed.init();
            configModalRedSucursal.init();
            initCombos.init();
            configDatePickers.init();
        }
    }
}();

$(() => jsRedes.inicializar());