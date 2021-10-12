const iniTarifario = function () {

    $btnNuevoTarifario = $(".btn-nuevo");
    $mdlTarifario = $("#mdlTarifario");
    $tablaTarifario = $("#tabla_tarifario");
    $hfactionTarifario = $("#hfTarifario");

    $frm_Tarifario = $("#frm_Tarifario");
    $cboEstado = $(".select-estados");
    $modalTitulo = $mdlTarifario.find(".modal-title");

    $txtCodigo = $("#txtCodigo");
    $txtDescripcion = $("#txtDescripcion");
    $txtCSegus = $("#txtCSegus");
    $txtUSegus = $("#txtUSegus");
    $txtCNomenclador = $("#txtCNomenclador");
    $txtUNomenclador = $("#txtUNomenclador");
    $btnGuTarifario = $frm_Tarifario.find(".btn-save");
    //#region validacionControl
    let aNuTarifario = $("#aNuTarifario").val();
    let aGuTarifario = $("#aGuTarifario").val();
    let aEdTarifario = $("#aEdTarifario").val();
    let aElTarifario = $("#aElTarifario").val();

    let validacionControles = {
        init: function () {
            aNuTarifario == "False" && $btnNuevoTarifario.hide();
            aGuTarifario == "False" && $btnGuTarifario.hide();
        }
    };
    //#endregion
    entidadTarifario = {
        id: "",
        dscrpcn: "",
        csgs: "",
        cnmcldr: "",
        usgs: "",
        unmcldr: "",
        gdestdo: "",
        festdo: "",
        ucrcn:"",
        fcrcn: "",
        uedcn: "",
        fedcn:"",
    }

    //#REGION ---CONTROLES---
     $accesoAgregarTarifario = $("#accesoAgregarTarifario");
     $accesoEditarTarifario = $("#accesoEditarTarifario");
     $accesoEditarTarifario = $("#accesoEditarTarifario");

    configDTTarifario = {
        objecto: null,
        opciones: {
            filter: true,
            ajax: {
                dataType: "JSON",
                url: "/Tarifario/ListarTarifario",
                type: "GET",
                data: function (data) {
                    delete data.columns;
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

                    title: "Descripción",
                    data: "dscrpcn",
                    width: '22%',
                    orderable: false, className: "text-left"
                },
                {

                    title: "Cod. Segus",
                    data: "csgs",
                    width: '15%',
                    orderable: false, className: "text-left"
                },
                {

                    title: "Cod. Nomenclador",
                    data: "cnmcldr",
                    width: '20%',
                    orderable: false, className: "text-left"
                },
                {

                    title: "U. Segus",
                    data: "usgs",
                    width: '10%',
                    orderable: false, className: "text-left"
                },
                {

                    title: "U. Nomenclador",
                    data: "unmcldr",
                    width: '15%',
                    orderable: false, className: "text-left"
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
                    data: "uedcn", width: '13%',
                    orderable: false,
                    class: "text-center"
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN", width: '10%',
                    orderable: false
                },
                {
                    title: "Acciones",
                    data: null,
                    orderable: false,
                    width: '11%',
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        if (aEdTarifario == "True") {
                   //     tpm += `<button type="button" class="btn btn-info btn-xs btn-editar" data-toggle="modal" data-target="#mdlTarifario" data-id="${data.id}" title="Editar"><span><i class="la la-edit"></i></span></button>`;
                            tpm += `<button type="button" class="btn btn-info btn-xs btn-editar" data-toggle="modal" data-target="#mdlTarifario" data-id="${data.id}" title="Editar"><span><i class="la la-edit"></i></span></button>`;
                         }
                        if (aElTarifario == "True") {
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
                configDTTarifario.objecto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    fnTarifario.eliminar(id);
                })
            },

            editar: function () {
                configDTTarifario.objecto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");
                    $modalTitulo.text("Editar Tarifario");
                    $hfactionTarifario.val("E");
                    fnTarifario.obtener(id);
                })
            },
            init: function () {
                configDTTarifario.eventos.eliminar();
                configDTTarifario.eventos.editar();

            }
        },
        reload: function () {
            configDTTarifario.objecto.ajax.reload();
        },

        init: function () {
            configDTTarifario.objecto = $tablaTarifario.DataTable(configDTTarifario.opciones);
            configDTTarifario.eventos.init();

        }

    };

    var configModalTarifario = {
        form: {
            objeto: $frm_Tarifario.validate({
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
                    //txtCSegus: {
                    //    required: true,
                    //},
                    //txtUSegus: {
                    //    required: true,
                    //},
                    //txtCNomenclador: {
                    //    required: true,
                    //},
                    //txtUNomenclador: {
                    //    required: true,
                    //},
                }
            }),
            eventos: {
                reset: function () {
                    configModalTarifario.form.objeto.resetForm();//limpiar campos req
                }
            }
        },
        eventos: {
                onhide: function () {
                    $mdlTarifario.on("hidden.bs.modal", function () {
                        configModalTarifario.eventos.reset();
                    })
                },
                onshow: function () {
                    $mdlTarifario.on("show.bs.modal", function () {
                        if ($hfactionTarifario.val() == "N") {
                            $frm_Tarifario.AgregarCamposDefectoAuditoria();
                            $frm_Tarifario.DeshabilitarCamposAuditoria();
                        }
                    })
                },
                reset: function () {
                    $frm_Tarifario.trigger("reset");
                    $frm_Tarifario.find(":input").attr("disabled", false);
                    configModalTarifario.form.eventos.reset(); //limpia dato ingresados
                }
            },
            init: function () {
                this.eventos.onhide();
                this.eventos.onshow();
            }
        }

    var fnTarifario = {
        guardar: function () {
            if ($hfactionTarifario.val() == "N") {
                fnTarifario.insertar();
            }
            else {
                fnTarifario.actualizar();
            }
        //    $hfactionTarifario.val("");
        },

        insertar: function () {
            if ($frm_Tarifario.valid()) {
                //prueba
                //$frm_Tarifario.find("[type='button']").attr("disabled", true);
                //entidadTarifario = new Object();
                //prueba
                entidadTarifario.dscrpcn = $txtDescripcion.val();
                entidadTarifario.csgs = $txtCSegus.val();
                entidadTarifario.usgs = $txtUSegus.val();
                entidadTarifario.cnmcldr = $txtCNomenclador.val();
                entidadTarifario.unmcldr = $txtUNomenclador.val();
                entidadTarifario.gdestdo = $frm_Tarifario.find("[name='GDESTDO']").val();

                $.post("../Tarifario/InsertarTarifario", entidadTarifario)
                    .done(function () {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se registró satisfactoriamente.",
                            confimButtonText: "Aceptar"
                        }).then((result) => {
                            configDTTarifario.reload();
                            $mdlTarifario.modal("hide");
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
        actualizar: function () {
            if ($frm_Tarifario.valid()) {
                entidadTarifario.id = $txtCodigo.val();
                entidadTarifario.dscrpcn = $txtDescripcion.val();
                entidadTarifario.csgs = $txtCSegus.val();
                entidadTarifario.usgs = $txtUSegus.val();
                entidadTarifario.cnmcldr = $txtCNomenclador.val();
                entidadTarifario.unmcldr = $txtUNomenclador.val();
                entidadTarifario.gdestdo = $cboEstado.val();

                $.post("../Tarifario/ActualizarTarifario", entidadTarifario)
                    .done(function () {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se actualizó satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            configDTTarifario.reload();
                            $mdlTarifario.modal("hide");
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
            var vtarifario = { id: codigo };
            $.post("../Tarifario/obtenerTarifario", vtarifario)
                .done(function (data) {
                    entidadTarifario = data;
                    $txtCodigo.val(entidadTarifario.id);
                    $txtDescripcion.val(entidadTarifario.dscrpcn);
                    $txtCSegus.val(entidadTarifario.csgs);
                    $txtUSegus.val(entidadTarifario.usgs);
                    $txtCNomenclador.val(entidadTarifario.cnmcldr);
                    $txtUNomenclador.val(entidadTarifario.unmcldr);
                    $frm_Tarifario.AgregarCamposAuditoria(entidadTarifario);
                })
                .fail().always(function () {
                    $frm_Tarifario.find(":input").attr("disabled", false);
                    $frm_Tarifario.DeshabilitarCamposAuditoria();
                });
        },
        eliminar: function (codigo) {
            var vtarifario = { id: codigo };
            Swal.fire({
                title: "¿Quiere modificar el estado del registro?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                confirmButtonClass: "btn btn-danger",
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    $.post("../tarifario/EliminarTarifario", vtarifario)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTTarifario.reload();
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

    var eventosIncrustadosTarifario = {
        botonNuevoTarifario: function () {
            $btnNuevoTarifario.click(function () {
                //funcionesTarifario.nuevoTarifario(); });
                $modalTitulo.text("Nuevo Tarifario");
                $hfactionTarifario.val("N");
              //  console.log("error");
            });
        },

        botonGuardarTarifario: function () {
            $frm_Tarifario.find(".btn-save").click(function () {
                fnTarifario.guardar();
            })
        },

        init: function () {
            eventosIncrustadosTarifario.botonNuevoTarifario();
            eventosIncrustadosTarifario.botonGuardarTarifario();
       }
    }

    var IniEstados = {
        init: function () {
            $cboEstado.LlenarSelectGD("GDESTDO");
        }
    };
    
    return {
        init: function () {
            validacionControles.init();
            configDTTarifario.init();
            configModalTarifario.init();
            eventosIncrustadosTarifario.init();
            IniEstados.init();

        }

    };

}();
$(() => {
    iniTarifario.init();
})