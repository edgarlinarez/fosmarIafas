var iniGrupoProcedimiento = function () {
    var $btnNuevo = $(".btn-nuevo");
    var $tblGrupoProcedimiento = $("#tabla_GrupoProcedimiento");
    var $mdlGrupoProcedimiento = $("#mdlGrupoProcedimiento");
    var $modalTitulo = $mdlGrupoProcedimiento.find(".modal-title");
    var $txtCodigo = $("#txtCodigo");
    var $txtDescripcion = $("#txtDescripcion");
    var $txtAbreviatura = $("#txtAbreviatura");
    var $txtAlias1 = $("#txtAlias1"); 
    var $txtAlias2 = $("#txtAlias2");
    var $txtAlias3 = $("#txtAlias3");
    var $cboEstado = $(".select-estados");
    var $frm_GrupoProcedimiento = $("#frm_GrupoProcedimiento");
    var $hfaction = $("#hfGrupoProcedimiento");

    var entidadGrupoProcedimiento = {
        id: "",
        dscrpcn: "",
        abrvtra: "",
        als1: "",
        als2: "",
        als3: "",
        gdestdo: "",
    }

    var configDTGrupoProcedimiento = {
        objecto: null,
        opciones: {
            ajax: {
                gatatype: "JSON",
                url: "/GrupoProcedimiento/ListarGrupoProcedimiento",
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
                    width: '10%',
                    orderable: false, className: "text-left d-none"
                },
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
                    class: "text-left"
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
                        tpm += '<button type="button" class="btn btn-info btn-xs btn-editar" data-toggle="modal" data-target="#mdlGrupoProcedimiento" data-id="'+data.id+'" title="Editar"><span><i class="la la-edit"></i></span></button>';
                        //}
                        //if ($accesoEliminarPerfil.val() == "True") {
                        tpm += ' <button title="Cambiar estado" data-id="'+data.id+'" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>';
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
                configDTGrupoProcedimiento.objecto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    fnGrupoProcedimiento.eliminar(id);
                })
            },

            editar: function () {
                configDTGrupoProcedimiento.objecto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");
                    $modalTitulo.text("Editar Grupo Procedimiento");
                    $hfaction.val("E");
                    fnGrupoProcedimiento.obtener(id);
                })
            },
            init: function () {
                configDTGrupoProcedimiento.eventos.eliminar();
                configDTGrupoProcedimiento.eventos.editar();
            }
        },
        reload: function () {
            configDTGrupoProcedimiento.objecto.ajax.reload();
        },
        init: function () {
            configDTGrupoProcedimiento.objecto = $tblGrupoProcedimiento.DataTable(configDTGrupoProcedimiento.opciones);
            configDTGrupoProcedimiento.eventos.init();
        }
    };

    var configformGrupoProcedimiento = {
        form: {
            objeto: $frm_GrupoProcedimiento.validate({
                rules: {
                    dscrpcn: {
                        required: true,
                        maxlength: 150
                    },
                    abrvtra: {
                        required: true,
                        maxlength: 150
                    },
                }
            }),
            eventos: {
                reset: function () {
                    configformGrupoProcedimiento.form.objeto.resetForm();
                }
            }
        },
        eventos: {
            onHide: function () {
                $mdlGrupoProcedimiento.on("hidden.bs.modal", function () {
                    configformGrupoProcedimiento.eventos.reset();
                })
            },
            onShow: function () {
                $mdlGrupoProcedimiento.on("shown.bs.modal", function () {
                    if ($hfaction.val() == "N") {
                        $frm_GrupoProcedimiento.AgregarCamposDefectoAuditoria();
                        $frm_GrupoProcedimiento.DeshabilitarCamposAuditoria();
                    }
                })
            },
            reset: function () {
                $frm_GrupoProcedimiento.trigger("reset");
                $frm_GrupoProcedimiento.find(":input").attr("disabled", false);
                configformGrupoProcedimiento.form.eventos.reset();
            }
        },
        init: function () {
            this.eventos.onHide();
            this.eventos.onShow();
        }
    }

    var fnGrupoProcedimiento = {
        guardar: function () {
            if ($hfaction.val() == "N") {
                fnGrupoProcedimiento.insertar();
            }
            else {
                fnGrupoProcedimiento.actualizar();
            }

            //$hfaction.val("");
        },
        insertar: function () {
            if ($frm_GrupoProcedimiento.valid()) {
               entidadGrupoProcedimiento.dscrpcn = $txtDescripcion.val();
               entidadGrupoProcedimiento.abrvtra = $txtAbreviatura.val();
               entidadGrupoProcedimiento.alS1 = $txtAlias1.val();
               entidadGrupoProcedimiento.alS2 = $txtAlias2.val();
               entidadGrupoProcedimiento.alS3 = $txtAlias3.val();
               entidadGrupoProcedimiento.gdestdo = $cboEstado.val();
                $.post("../GrupoProcedimiento/InsertarGrupoProcedimiento", entidadGrupoProcedimiento)
                    .done(function () {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se registro satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            configDTGrupoProcedimiento.reload();
                            $mdlGrupoProcedimiento.modal("hide");
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
            if ($frm_GrupoProcedimiento.valid()) {
                //entidadGrupoBeneficio.id =    $txtCodigo.val();
                entidadGrupoProcedimiento.dscrpcn = $txtDescripcion.val();
                entidadGrupoProcedimiento.abrvtra = $txtAbreviatura.val();
                entidadGrupoProcedimiento.alS1 = $txtAlias1.val();
                entidadGrupoProcedimiento.alS2 = $txtAlias2.val();
                entidadGrupoProcedimiento.alS3 = $txtAlias3.val();
                entidadGrupoProcedimiento.gdestdo = $cboEstado.val();
                $.post("../GrupoProcedimiento/ActualizarGrupoProcedimiento", entidadGrupoProcedimiento)
                    .done(function () {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se actualizó satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            configDTGrupoProcedimiento.reload();
                            $mdlGrupoProcedimiento.modal("hide");
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
            var vgprocedimiento = { id: codigo };
            $.post("../GrupoProcedimiento/ObtenerGrupoProcedimiento", vgprocedimiento)
                .done(function (data) {
                    entidadGrupoProcedimiento = data;
                    $txtCodigo.val(entidadGrupoProcedimiento.id);
                    $txtDescripcion.val(entidadGrupoProcedimiento.dscrpcn);
                    $txtAbreviatura.val(entidadGrupoProcedimiento.abrvtra);
                    $txtAlias1.val(entidadGrupoProcedimiento.alS1);
                    $txtAlias2.val(entidadGrupoProcedimiento.alS2);
                    $txtAlias3.val(entidadGrupoProcedimiento.alS3);
                    $cboEstado.val(entidadGrupoProcedimiento.gdestdo);
                    $frm_GrupoProcedimiento.AgregarCamposAuditoria(entidadGrupoProcedimiento);
                })
                .fail().always(function () {
                    $frm_GrupoProcedimiento.find(":input").attr("disabled", false);
                    $frm_GrupoProcedimiento.DeshabilitarCamposAuditoria();
                });
        },
        eliminar: function (codigo) {
            var vgprocedimiento = { id: codigo };
            Swal.fire({
                title: "¿Quiere modificar el estado del registro?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                confirmButtonClass: "btn btn-danger",
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    $.post("../GrupoProcedimiento/EliminarGrupoProcedimiento", vgprocedimiento)
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
        NuevoGrupoProcedimiento: function () {
            $btnNuevo.click(function () {
                $modalTitulo.text("Nuevo Grupo Procedimiento");
                $hfaction.val("N");
            })
        },

        GuardarGrupoProcedimiento: function () {
            $frm_GrupoProcedimiento.find(".btn-save").click(function () {
                fnGrupoProcedimiento.guardar();
            })
        },

        init: function () {
            eventosIncrustados.NuevoGrupoProcedimiento();
            eventosIncrustados.GuardarGrupoProcedimiento();
        }
    }

    var IniEstados = {
        init: function () {
            $cboEstado.LlenarSelectEstados();
        }
    };

    return {
        init: function () {
            configDTGrupoProcedimiento.init();
            configformGrupoProcedimiento.init();
            eventosIncrustados.init();
            IniEstados.init();

        }
    };




}();
$(() => {
    iniGrupoProcedimiento.init();
})
