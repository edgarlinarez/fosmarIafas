var iniNomenclador = function () {
    var $btnNuevo = $(".btn-nuevo");
    var $tblNomenclador = $("#tabla_Nomenclador");
    var $mdlNomenclador = $("#mdlNomenclador");
    var $modalTitulo = $mdlNomenclador.find(".modal-title");
    var $txtCodigo = $("#txtCodigo");
    var $cboCodigoPro = $("#cboCodigoPro");
    var $txtDescripcion = $("#txtDescripcion");
    var $cboEstado = $(".select-estados");
    var $frm_Nomenclador = $("#frm_Nomenclador");
    var $hfaction = $("#hfNomenclador");

    var entidadNomenclador = {
        id: "",
        dscrpcn: "",
        ctpint: "",
        ctpcode: "",
    }
    var configDTNomenclador = {
        objecto: null,
        opciones: {
            ajax: {
                gatatype: "JSON",
                url: "/Nomenclador/ListarNomenclador",
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
            eliminar: function () {
                configDTNomenclador.objecto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    fnNomenclador.eliminar(id);
                })
            },

            editar: function () {
                configDTNomenclador.objecto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");
                    $modalTitulo.text("Editar Grupo Procedimiento");
                    $hfaction.val("E");
                    fnNomenclador.obtener(id);
                })
            },
            init: function () {
                configDTNomenclador.eventos.eliminar();
                configDTNomenclador.eventos.editar();
            }
        },
        reload: function () {
            configDTNomenclador.objecto.ajax.reload();
        },
        init: function () {
            configDTNomenclador.objecto = $tblNomenclador.DataTable(configDTNomenclador.opciones);
            configDTNomenclador.eventos.init();
        }
    };
    var configformNomenclador = {
        form: {
            objeto: $frm_Nomenclador.validate({
                rules: {
                    txtCodigo: {
                        required: true,
                        maxlength: 150
                    },
                    cboCodigoPro: {
                        required: true,
                        maxlength: 150
                    },
                    txtDescripcion: {
                        required: true,
                        maxlength: 150
                    },
                }
            }),
            eventos: {
                reset: function () {
                    configformNomenclador.form.objeto.resetForm();
                }
            }
        },
        eventos: {
            onHide: function () {
                $mdlNomenclador.on("hidden.bs.modal", function () {
                    configformNomenclador.eventos.reset();
                })
            },
            onShow: function () {
                $mdlNomenclador.on("shown.bs.modal", function () {
                    if ($hfaction.val() == "N") {
                        $frm_Nomenclador.AgregarCamposDefectoAuditoria();
                        $frm_Nomenclador.DeshabilitarCamposAuditoria();
                    }
                })
            },
            reset: function () {
                $frm_Nomenclador.trigger("reset");
                $frm_Nomenclador.find(":input").attr("disabled", false);
                configformNomenclador.form.eventos.reset();
            }
        },
        init: function () {
            this.eventos.onHide();
            this.eventos.onShow();
        }
    }

    var fnNomenclador = {
        guardar: function () {
            if ($hfaction.val() == "N") {
                fnNomenclador.insertar();
            }
            else {
                fnNomenclador.actualizar();
            }

            //$hfaction.val("");
        },
        insertar: function () {
            if ($frm_Nomenclador.valid()) {
                entidadNomenclador.dscrpcn = $txtDescripcion.val();
                entidadNomenclador.ctpint = $txtCodigo.val();
                entidadNomenclador.ctpcode = $cboCodigoPro.val();
                entidadNomenclador.gdestdo = $cboEstado.val();
                $.post("../Nomenclador/InsertarNomenclador", entidadNomenclador)
                    .done(function () {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se registro satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            configDTNomenclador.reload();
                            $mdlNomenclador.modal("hide");
                        });
                    }).fail(function (e) {
                        Swal.fire({
                            icon: "error",
                            title: "Error al guardar los datos.",
                            text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                            confirmButtonText: "Aceptar"
                        });
                    });
            }
        },
        actualizar: function () {
            if ($frm_Nomenclador.valid()) {
                entidadNomenclador.dscrpcn = $txtDescripcion.val();
                entidadNomenclador.ctpint = $txtCodigo.val();
                entidadNomenclador.ctpcode = $cboCodigoPro.val();
                entidadNomenclador.gdestdo = $cboEstado.val();
                $.post("../Nomenclador/ActualizarNomenclador", entidadNomenclador)
                    .done(function () {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se actualizó satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            configDTNomenclador.reload();
                            $mdlNomenclador.modal("hide");
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
            var vNomenclador = { id: codigo };
            $.post("../Nomenclador/ObtenerNomenclador", vNomenclador)
                .done(function (data) {
                    entidadNomenclador = data;
                    $txtCodigo.val(entidadNomenclador.ctpint);
                    $txtDescripcion.val(entidadNomenclador.dscrpcn);
                    $cboCodigoPro.val(entidadNomenclador.ctpcode);
                    $cboEstado.val(entidadNomenclador.gdestdo);
                    $frm_Nomenclador.AgregarCamposAuditoria(entidadNomenclador);
                })
                .fail().always(function () {
                    $frm_Nomenclador.find(":input").attr("disabled", false);
                    $frm_Nomenclador.DeshabilitarCamposAuditoria();
                });
        },
        eliminar: function (codigo) {
            var vNomenclador = { id: codigo };
            Swal.fire({
                title: "¿Quiere modificar el estado del registro?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                confirmButtonClass: "btn btn-danger",
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    $.post("../Nomenclador/EliminarNomenclador", vNomenclador)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTGrupoProcedimiento.reload();
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
    var eventosIncrustados = {
        NuevoNomenclador: function () {
            $btnNuevo.click(function () {
                $modalTitulo.text("Nuevo Nomenclador");
                $hfaction.val("N");
            })
        },

        GuardarNomenclador: function () {
            $frm_Nomenclador.find(".btn-save").click(function () {
                fnNomenclador.guardar();
            })
        },

        init: function () {
            eventosIncrustados.NuevoNomenclador();
            eventosIncrustados.GuardarNomenclador();
        }
    }

    var IniEstados = { 
        init: function () {
            $cboEstado.LlenarSelectEstados(); 
            $cboCodigoPro.LlenarSelectGD("GDCTPCODE");
        }
    };

    return {
        init: function () {
            configDTNomenclador.init();
            configformNomenclador.init();
            eventosIncrustados.init();
            IniEstados.init();

        }
    };
}();
$(() => {
    iniNomenclador.init();
})