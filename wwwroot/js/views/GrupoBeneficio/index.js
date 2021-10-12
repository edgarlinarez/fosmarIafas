var iniGrupoBeneficio = function () {
    var $btnNuevo = $(".btn-nuevo");
    var $tblGrupoBeneficio = $("#tabla_GrupoBenefico");
    var $mdlGrupoBeneficio = $("#mdlGrupoBeneficio");
    var $modalTitulo = $mdlGrupoBeneficio .find(".modal-title");
    var $txtCodigo = $("#txtCodigo");
    var $txtDescripcion = $("#txtDescripcion");
    var $txtAbreviatura = $("#txtAbreviatura");
    var $txtAlias1 = $("#txtAlias1");
    var $txtAlias2 = $("#txtAlias2");
    var $txtAlias3 = $("#txtAlias3");
    var $cboEstado = $(".select-estados");
    var $frm_GrupoBeneficio = $("#frm_GrupoBeneficio");
    var $hfaction = $("#hfGrupoBeneficio");

    var entidadGrupoBeneficio = {
        id: "",
        dscrpcn: "",
        abrvtra: "",
        als1: "",
        als2: "",
        als3: "",
        gdestdo: "",  
    }

    var configDTGrupoBeneficio = {
        objecto: null,
        opciones: {
            ajax: {
                gatatype: "JSON",
                url: "/GrupoBeneficio/ListarGrupoBeneficio",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    
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
                        tpm += '<button type="button" class="btn btn-info btn-xs btn-editar" data-toggle="modal" data-target="#mdlGrupoBeneficio" data-id="'+data.id+'" title="Editar"><span><i class="la la-edit"></i></span></button>';
                        //}
                        //if ($accesoEliminarPerfil.val() == "True") {
                            tpm += '<button title="Cambiar estado" data-id="'+data.id+'" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>';
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
                configDTGrupoBeneficio.objecto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    fnGrupoBeneficio.eliminar(id);
                })
            },

            editar: function () {
                configDTGrupoBeneficio.objecto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");
                    $modalTitulo.text("Editar Grupo Beneficio");
                    $hfaction.val("E");
                    fnGrupoBeneficio.obtener(id);
                })
            },
            init: function () {
                configDTGrupoBeneficio.eventos.eliminar();
                configDTGrupoBeneficio.eventos.editar();
            }
        },
        reload: function () {
            configDTGrupoBeneficio.objecto.ajax.reload();
        },
        init: function () {
            configDTGrupoBeneficio.objecto = $tblGrupoBeneficio.DataTable(configDTGrupoBeneficio.opciones);
            configDTGrupoBeneficio.eventos.init();
        }
    };

    var configModalGrupoBeneficio = {
        form: {
            objeto: $frm_GrupoBeneficio.validate({
                rules: {
                    dscrpcn: {
                        required: true,
                        maxlength: 150
                    },
                    abrvtra: {
                        required: true,
                        maxlength: 150
                    },
                    als1: {
                        required: false,
                        maxlength: 150
                    },
                    als2: {
                        required: false,
                        maxlength: 150
                    },
                    als3: {
                        required: false,
                        maxlength: 150
                    },
                }
            }),
            eventos: {
                reset: function () {
                    configModalGrupoBeneficio.form.objeto.resetForm();
                }
            }
        },
        eventos: {
            onHide: function () {
                $mdlGrupoBeneficio.on("hidden.bs.modal", function () {
                    configModalGrupoBeneficio.eventos.reset();
                })
            },
            onShow: function () {
                $mdlGrupoBeneficio.on("shown.bs.modal", function () {
                    if ($hfaction.val() == "N") {
                        $frm_GrupoBeneficio.AgregarCamposDefectoAuditoria();
                        $frm_GrupoBeneficio.DeshabilitarCamposAuditoria();
                    }
                })
            },
            reset: function () {
                $frm_GrupoBeneficio.trigger("reset");
                $frm_GrupoBeneficio.find(":input").attr("disabled", false);
                configModalGrupoBeneficio.form.eventos.reset();
            }
        },
        init: function () {
            this.eventos.onHide();
            this.eventos.onShow();
        }
    }

    var fnGrupoBeneficio = {
        guardar: function () {
            if ($hfaction.val() == "N") {
                fnGrupoBeneficio.insertar();
            }
            else {
                fnGrupoBeneficio.actualizar();
            }

            //$hfaction.val("");
        },
        insertar: function () {
            if ($frm_GrupoBeneficio.valid()) {
                entidadGrupoBeneficio.dscrpcn = $txtDescripcion.val();
                entidadGrupoBeneficio.abrvtra = $txtAbreviatura.val();
                entidadGrupoBeneficio.alS1 = $txtAlias1.val();
                entidadGrupoBeneficio.alS2 = $txtAlias2.val();
                entidadGrupoBeneficio.alS3 = $txtAlias3.val();
                entidadGrupoBeneficio.gdestdo = $cboEstado.val();
                $.post("../GrupoBeneficio/InsertarGrupoBeneficio", entidadGrupoBeneficio)
                    .done(function () {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se registro satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            configDTGrupoBeneficio.reload();
                            $mdlGrupoBeneficio.modal("hide");
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
            if ($frm_GrupoBeneficio.valid()) {
                //entidadGrupoBeneficio.id =    $txtCodigo.val();
                entidadGrupoBeneficio.dscrpcn = $txtDescripcion.val();
                entidadGrupoBeneficio.abrvtra = $txtAbreviatura.val();
                entidadGrupoBeneficio.alS1 = $txtAlias1.val();
                entidadGrupoBeneficio.alS2 = $txtAlias2.val();
                entidadGrupoBeneficio.alS3 = $txtAlias3.val();
                entidadGrupoBeneficio.gdestdo = $cboEstado.val();
                $.post("../GrupoBeneficio/ActualizarGrupoBeneficio", entidadGrupoBeneficio)
                    .done(function () {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se actualizó satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            configDTGrupoBeneficio.reload();
                            $mdlGrupoBeneficio.modal("hide");
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
            var vgbeneficio = { id: codigo };
            $.post("../GrupoBeneficio/ObtenerGrupoBeneficio", vgbeneficio)
                .done(function (data) {
                    entidadGrupoBeneficio = data;
                    $txtCodigo.val(entidadGrupoBeneficio.id);
                    $txtDescripcion.val(entidadGrupoBeneficio.dscrpcn);
                    $txtAbreviatura.val(entidadGrupoBeneficio.abrvtra);
                    $txtAlias1.val(entidadGrupoBeneficio.alS1);
                    $txtAlias2.val(entidadGrupoBeneficio.alS2);
                    $txtAlias3.val(entidadGrupoBeneficio.alS3);
                    $cboEstado.val(entidadGrupoBeneficio.gdestdo);
                    $frm_GrupoBeneficio.AgregarCamposAuditoria(entidadGrupoBeneficio);
                })
                .fail().always(function () {
                    $frm_GrupoBeneficio.find(":input").attr("disabled", false);
                    $frm_GrupoBeneficio.DeshabilitarCamposAuditoria();
                });
        },
        eliminar: function (codigo) {
            var vgbeneficio = {id:codigo};
            Swal.fire({
                title: "¿Quiere modificar el estado del registro?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                confirmButtonClass: "btn btn-danger",
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    $.post("../GrupoBeneficio/EliminarGrupoBeneficio", vgbeneficio)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTGrupoBeneficio.reload();
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
        NuevoGrupoBeneficio: function () {
            $btnNuevo.click(function () {
                $modalTitulo.text("Nuevo Grupo Beneficio");
                $hfaction.val("N");
            })
        },

        GuardarGrupoBeneficio: function () {
            $frm_GrupoBeneficio.find(".btn-save").click(function () {
                fnGrupoBeneficio.guardar();
            })
        },

        init: function () {
            eventosIncrustados.NuevoGrupoBeneficio();
            eventosIncrustados.GuardarGrupoBeneficio();
        }
    }

    var IniEstados = {
        init: function () {
            $cboEstado.LlenarSelectEstados();
        }
    };

    return {
        init: function () {
            configDTGrupoBeneficio.init();
            configModalGrupoBeneficio.init();
            eventosIncrustados.init();
            IniEstados.init();

        }
    };
}();
$(() => {
    iniGrupoBeneficio.init();
})
