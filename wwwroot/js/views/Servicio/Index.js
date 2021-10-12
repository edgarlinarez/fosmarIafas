var iniServicio = function () {
    var $btnNuevo = $("#btnNuevoGrupo");
    var $btnGrabarGrupo = $("#btnGrabarGrupo");
    var $tblGrupo = $("#tabla_Grupo");
    var $mdlGrupo = $("#mdlGrupo");
    var $modalTitulogrupo = $mdlGrupo.find(".modal-title");
    var $txtCodigo = $("#txtCodigo");
    var $txtDescripcion = $("#txtDescripcion");
    var $txtAbreviatura = $("#txtAbreviatura");
    var $cboEstado = $(".select-estados");
    var $frm_Grupo = $("#FormularioGrupo");
    var $hfaction_grupo = $("#hfGrupo");
    var $hfCodGrupo = $("#hfCodGrupo");
    var $Grupo_tab = $("#Grupo-tab");
    var $btnNuevoSubGrupo = $("#btnNuevoSubGrupo");
    var $btnGrabarSubGrupo = $("#btnGrabarSubGrupo");
    var $tblSubGrupo = $("#tabla_SubGrupo");
    var $mdlSubGrupo = $("#mdlSubGrupo");
    var $modalTituloSubgrupo = $mdlSubGrupo.find(".modal-title");
    var $frm_SubGrupo = $("#FormularioSubGrupo");
    var $hfaction_Subgrupo = $("#hfSubGrupo");
    var $txtCodigosub = $("#txtCodigosub");
    var $txtDescripcionsub = $("#txtDescripcionsub");
    var $txtAbreviaturasub = $("#txtAbreviaturasub");
    var $lblGrupo = $("#lblGrupo");
    var $hfCodSubGrupo = $("#hfCodSubGrupo");
    var $Subgrupo_tab = $("#Subgrupo-tab"); 
    var $tblServicio = $("#tabla_Servicio");
    var $frm_Servicio = $("#FormularioServicio");
    var $btnGrabarServicio = $('#btnGrabarServicio');
    var $btnNuevoservicio = $('#btnNuevoservicio');
    var $txtCodigoServicio = $('#txtCodigoServicio');
    var $txtDescripcionServicio = $('#txtDescripcionServicio');
    var $txtAbreviaturaServicio = $('#txtAbreviaturaServicio'); 
    var $txtSubservicio = $('#txtSubservicio');
    var $dtSubservicio = $('#dtSubservicio');
    var $mdlBuscarSubServicio = $('#mdlBuscarSubServicio');
    var $TbAgregarServicio_tab = $('#TbAgregarServicio-tab'); 
    var $TbListarServio_tab = $('#TbListarServio-tab')
    var $hfCodSubgrupoSer = $('#hfCodSubgrupoSer');
    var $hfaction_servicio = $("#hfServico");
    var $Servicio_tab = $("#Servicio-tab");
    var $btnmdlSubservicio = $("#btnmdlSubservicio");

    var entidadGrupo = {
        id: "",
        dscrpcn: "",
        abrvtra: "",
        gdestdo: "",
    }
    var entidadsubGrupo = {
        id: "",
        idgsrvcio:"",
        dscrpcn: "",
        abrvtra: "",
        gdestdo: "",
    }
    var entidadServicio = {
        id: "",
        idsgsrvcio: "",
        dscrpcn: "",
        abrvtra: "",
        sgdscrpcn:"",
        gdestdo: "",
    }

    var configDTGrupo = {
        objecto: null,
        opciones: {
            ajax: {
                gatatype: "JSON",
                url: "/Servicio/ListarGrupoServicio",
                type: "GET",
                data: function (data) {
                    delete data.columns;
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
                    title: "Id",
                    data: "id",
                    width: '25%',
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
                        tpm += '<button type="button" class="btn btn-info btn-xs btn-editar" data-toggle="modal" data-target="#mdlGrupo" data-id="' + data.id + '" title="Editar"><span><i class="la la-edit"></i></span></button>';
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
                configDTGrupo.objecto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    fnGrupo.eliminar(id);
                })
            },

            editar: function () {
                configDTGrupo.objecto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");                    
                    $modalTitulogrupo.text("Editar Grupo");
                    $hfaction_grupo.val("E");
                    fnGrupo.obtener(id);
                })
            },
            configurar: function () {
                configDTGrupo.objecto.on("click", ".btn-config", function () {
                    var id = $(this).data("id");
                    var data = configDTGrupo.objecto.row($(this).parents('tr')).data();
                    $lblGrupo.text(data.dscrpcn);
                    $hfCodGrupo.val(id);
                    configDTSubGrupo.reload();
                    //$Config_tab.prop('disabled', false);
                    $Subgrupo_tab.removeClass('disabled');
                    $Subgrupo_tab.click();
                })
            },

            init: function () {
                configDTGrupo.eventos.eliminar();
                configDTGrupo.eventos.editar();
                configDTGrupo.eventos.configurar();
            }
        },
        reload: function () {
            if (configDTGrupo.objecto == null || configDTGrupo.objecto == "" || configDTGrupo.objecto == undefined) {
                configDTGrupo.objecto = $tblGrupo.DataTable(configDTGrupo.opciones);
                configDTGrupo.eventos.init();
            } else { configDTGrupo.objecto.ajax.reload(); }
        }
    };
    var configDTSubGrupo = {
        objecto: null,
        opciones: {
            ajax: {
                gatatype: "JSON",
                url: "/Servicio/ListarSubGrupoServicio",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.id = "";
                    data.idgsrvcio = $hfCodGrupo.val();
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
                    title: "idgrupo",
                    data: "idgsrvcio",
                    width: '25%',
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
                        tpm += '<button type="button" class="btn btn-info btn-xs btn-editar" data-toggle="modal" data-target="#mdlSubGrupo" data-id="' + data.id + '" title="Editar"><span><i class="la la-edit"></i></span></button>';
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
                configDTSubGrupo.objecto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    fnSubGrupo.eliminar(id);
                })
            },

            editar: function () {
                configDTSubGrupo.objecto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");                   
                    $modalTituloSubgrupo.text("Editar Grupo");
                    $hfCodSubGrupo.val(id);
                    $hfaction_Subgrupo.val("E");
                    fnSubGrupo.obtener(id);
                })
            },           

            init: function () {
                configDTSubGrupo.eventos.eliminar();
                configDTSubGrupo.eventos.editar();
            }
        },
        reload: function () {
            if (configDTSubGrupo.objecto == null || configDTSubGrupo.objecto == "" || configDTSubGrupo.objecto == undefined) {
                configDTSubGrupo.objecto = $tblSubGrupo.DataTable(configDTSubGrupo.opciones);
                configDTSubGrupo.eventos.init();
            } else { configDTSubGrupo.objecto.ajax.reload(); }
        }
    };
    var configDTServicio = {
        objecto: null,
        opciones: {
            ajax: {
                gatatype: "JSON",
                url: "/Servicio/ListarServicio",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.id = "";
                    data.idsgsrvcio = "";
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
                    title: "Nomenclador",
                    data: "dscrpcn",
                    width: '25%',
                    orderable: false, className: "text-left "
                },
                {
                    title: "SubGrupo",
                    data: "sgdscrpcn",
                    width: '25%',
                    orderable: false, className: "text-left"
                },
                {
                    title: "Grupo",
                    data: "gdscrpcn",
                    width: '10%',
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
                        tpm += '<button type="button" class="btn btn-info btn-xs btn-editar" data-toggle="modal" data-target="" data-id="' + data.id + '" title="Editar"><span><i class="la la-edit"></i></span></button>';
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
                configDTServicio.objecto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    fnServicio.eliminar(id);
                })
            },

            editar: function () {
                configDTServicio.objecto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");
                    $hfaction_servicio.val("E");
                    $TbAgregarServicio_tab.removeClass("disabled");
                    $TbAgregarServicio_tab.click();
                    fnServicio.obtener(id);
                })
            },

            init: function () {
                configDTServicio.eventos.eliminar();
                configDTServicio.eventos.editar();
            }
        },
        reload: function () {
            if (configDTServicio.objecto == null || configDTServicio.objecto == "" || configDTServicio.objecto == undefined) {
                configDTServicio.objecto = $tblServicio.DataTable(configDTServicio.opciones);
                configDTServicio.eventos.init();
            } else { configDTServicio.objecto.ajax.reload(); }
        }
    };
    var configDTSubGrupoServicio = {
        objecto: null,
        opciones: {
            ajax: {
                gatatype: "JSON",
                url: "/Servicio/ListarSubGrupoServicio",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.id = "";
                    data.idsgsrvcio = "";
                    data.gdestdo = "A";
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
                    title: "idgrupo",
                    data: "idgsrvcio",
                    width: '25%',
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
                $dtSubservicio.on('click', 'tbody tr', function () {
                    var data = configDTSubGrupoServicio.objecto.row(this).data();
                    if (typeof (data) != 'undefined') {
                        entidadsubGrupo = new Object();
                        entidadsubGrupo = data;
                        $hfCodSubgrupoSer.val(data.id);
                        $txtSubservicio.val(data.dscrpcn);
                        $mdlBuscarSubServicio.modal("hide");
                    }
                })
            },
            init: function () {
                configDTSubGrupoServicio.eventos.selectRow();
            }
        },
        reload: function () {
            if (configDTSubGrupoServicio.objecto == null || configDTSubGrupoServicio.objecto == "" || configDTSubGrupoServicio.objecto == undefined) {
                configDTSubGrupoServicio.objecto = $dtSubservicio.DataTable(configDTSubGrupoServicio.opciones);
                configDTSubGrupoServicio.eventos.init();
            } else { configDTSubGrupoServicio.objecto.ajax.reload(); }

        }
    };


    var configformGrupo = {
        form: {
            objeto: $frm_Grupo.validate({
                errorPlacement: function (error, element) {
                    if (element.parent('.input-group').length) {
                        error.insertAfter(element.parent());
                    } else {
                        error.insertAfter(element);
                    }
                },
                rules: {
                    txtDescripcion: {
                        required: true,
                        maxlength: 150
                    },
                    txtAbreviatura: {
                        required: false,
                        maxlength: 150
                    },
                }
            }),
            eventos: {
                reset: function () {
                    configformGrupo.form.objeto.resetForm();
                }
            }
        },
        eventos: {
            onHide: function () {
                $mdlGrupo.on("hidden.bs.modal", function () {
                    configformGrupo.eventos.reset();
                })
            },
            onShow: function () {
                $mdlGrupo.on("shown.bs.modal", function () {
                    if ($hfaction_grupo.val() == "N") {
                        $frm_Grupo.AgregarCamposDefectoAuditoria();
                        $frm_Grupo.DeshabilitarCamposAuditoria();
                    }
                })
            },
            reset: function () {               
                configformGrupo.form.eventos.reset();
                $frm_Grupo.trigger("reset");
                $frm_Grupo.find(":input").attr("disabled", false);
            }
        },
        init: function () {
            this.eventos.onHide();
            this.eventos.onShow();
        }
    }
    var configformSubGrupo = {
        form: {
            objeto: $frm_SubGrupo.validate({
                rules: {
                    txtDescripcionsub: {
                        required: true,
                        maxlength: 150
                    },
                    txtAbreviaturasub: {
                        required: false,
                        maxlength: 150
                    },
                }
            }),
            eventos: {
                reset: function () {
                    configformSubGrupo.form.objeto.resetForm();
                }
            }
        },
        eventos: {
            onHide: function () {
                $mdlSubGrupo.on("hidden.bs.modal", function () {
                    configformSubGrupo.eventos.reset();
                })
            },
            onShow: function () {
                $mdlSubGrupo.on("shown.bs.modal", function () {
                    if ($hfaction_Subgrupo.val() == "N") {
                        $frm_SubGrupo.AgregarCamposDefectoAuditoria();
                        $frm_SubGrupo.DeshabilitarCamposAuditoria();
                    }
                })
            },
            reset: function () {
                $frm_SubGrupo.trigger("reset");
                $frm_SubGrupo.find(":input").attr("disabled", false);
                configformSubGrupo.form.eventos.reset();
            }
        },
        init: function () {
            this.eventos.onHide();
            this.eventos.onShow();
        }
    }
    var configformServicio = {
        form: {
            objeto: $frm_Servicio.validate({
                errorPlacement: function (error, element) {
                    if (element.parent('.input-group').length) {
                        error.insertAfter(element.parent());
                    } else {
                        error.insertAfter(element);
                    }
                },
                rules: {
                    txtDescripcionServicio: {
                        required: true,
                        maxlength: 150
                    },
                    txtAbreviaturaServicio: {
                        required: false,
                        maxlength: 150
                    },
                    txtSubservicio: {
                        required: true,
                    },
                }
            }),
            eventos: {
                reset: function () {
                    configformServicio.form.objeto.resetForm();
                }
            }
        },
        eventos: {
            
            reset: function () {
                $frm_Servicio.trigger("reset");
                $frm_Servicio.find(":input").attr("disabled", false);
                configformServicio.form.eventos.reset();
            }
        },        
    }

    var fnGrupo = {
        guardar: function () {
            if ($hfaction_grupo.val() == "N") {
                fnGrupo.insertar();
            }
            else {
                fnGrupo.actualizar();
            }

            //$hfaction.val("");
        },
        insertar: function () {
            if ($frm_Grupo.valid()) {
                entidadGrupo.dscrpcn = $txtDescripcion.val();
                entidadGrupo.abrvtra = $txtAbreviatura.val();
                entidadGrupo.gdestdo = $frm_Grupo.find("[name='GDESTDO']").val();
                $.post("../Servicio/InsertarGrupoServicio", entidadGrupo)
                    .done(function () {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se registro satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            configDTGrupo.reload();
                            $mdlGrupo.modal("hide");
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
            if ($frm_Grupo.valid()) {
                entidadGrupo.id      = $txtCodigo.val();
                entidadGrupo.dscrpcn = $txtDescripcion.val();
                entidadGrupo.abrvtra = $txtAbreviatura.val();
                entidadGrupo.gdestdo = $frm_Grupo.find("[name='GDESTDO']").val();
                $.post("../Servicio/ActualizarGrupoServicio", entidadGrupo)
                    .done(function () {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se actualizó satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            configDTGrupo.reload();
                            $mdlGrupo.modal("hide");
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
            var vggrupo = { id: codigo };
            $.post("../Servicio/ObtenerGrupoServicio", vggrupo)
                .done(function (data) {
                    entidadGrupo = data;
                    $txtCodigo.val(entidadGrupo.id);
                    $txtDescripcion.val(entidadGrupo.dscrpcn);
                    $txtAbreviatura.val(entidadGrupo.abrvtra);
                    $cboEstado.val(entidadGrupo.gdestdo);
                    $frm_Grupo.AgregarCamposAuditoria(entidadGrupo);
                })
                .fail().always(function () {
                    $frm_Grupo.find(":input").attr("disabled", false);
                    $frm_Grupo.DeshabilitarCamposAuditoria();
                });
        },
        eliminar: function (codigo) {
            var vggrupo = { id: codigo };
            Swal.fire({
                title: "¿Quiere modificar el estado del registro?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                confirmButtonClass: "btn btn-danger",
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    $.post("../Servicio/EliminarGrupoServicio", vggrupo)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTGrupo.reload();
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
    var fnSubGrupo = {
        guardar: function () {
            if ($hfaction_Subgrupo.val() == "N") {
                fnSubGrupo.insertar();
            }
            else {
                fnSubGrupo.actualizar();
            }

            //$hfaction.val("");
        },
        insertar: function () {
            if ($frm_SubGrupo.valid()) {
                entidadsubGrupo.idgsrvcio = $hfCodGrupo.val();
                entidadsubGrupo.dscrpcn = $txtDescripcionsub.val();
                entidadsubGrupo.abrvtra = $txtAbreviaturasub.val();
                entidadsubGrupo.gdestdo = $frm_SubGrupo.find("[name='GDESTDO']").val();
                $.post("../Servicio/InsertarSubGrupoServicio", entidadsubGrupo)
                    .done(function () {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se registro satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            configDTSubGrupo.reload();
                            $mdlSubGrupo.modal("hide");
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
            if ($frm_SubGrupo.valid()) {
                entidadsubGrupo.id = $txtCodigosub.val();
                entidadsubGrupo.idgsrvcio = $hfCodGrupo.val();
                entidadsubGrupo.dscrpcn = $txtDescripcionsub.val();
                entidadsubGrupo.abrvtra = $txtAbreviaturasub.val();
                entidadsubGrupo.gdestdo = $frm_SubGrupo.find("[name='GDESTDO']").val();
                $.post("../Servicio/ActualizarSubGrupoServicio", entidadsubGrupo)
                    .done(function () {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se actualizó satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            configDTSubGrupo.reload();
                            $mdlSubGrupo.modal("hide");
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
            var vggrupo = { id: codigo };
            $.post("../Servicio/ObtenerSubGrupoServicio", vggrupo)
                .done(function (data) {
                    entidadsubGrupo = data;
                    $txtCodigosub.val(entidadsubGrupo.id);
                    $hfCodGrupo.val(entidadsubGrupo.idgsrvcio);
                    $txtDescripcionsub.val(entidadsubGrupo.dscrpcn);
                    $txtAbreviaturasub.val(entidadsubGrupo.abrvtra);
                    $frm_SubGrupo.find("[name='GDESTDO']").val(entidadsubGrupo.gdestdo);
                    $frm_SubGrupo.AgregarCamposAuditoria(entidadsubGrupo);
                })
                .fail().always(function () {
                    $frm_SubGrupo.find(":input").attr("disabled", false);
                    $frm_SubGrupo.DeshabilitarCamposAuditoria();
                });
        },
        eliminar: function (codigo) {
            var vggrupo = { id: codigo };
            Swal.fire({
                title: "¿Quiere modificar el estado del registro?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                confirmButtonClass: "btn btn-danger",
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    $.post("../Servicio/EliminarSubGrupoServicio", vggrupo)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTSubGrupo.reload();
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
    var fnServicio = {
        guardar: function () {
            if ($hfaction_servicio.val() == "N") {
                fnServicio.insertar();
            }
            else {
                fnServicio.actualizar();
            }

            //$hfaction.val("");
        },
        insertar: function () {
            if ($frm_Servicio.valid()) {
                entidadServicio.idsgsrvcio = $hfCodSubgrupoSer.val();
                entidadServicio.dscrpcn = $txtDescripcionServicio.val();
                entidadServicio.abrvtra = $txtAbreviaturaServicio.val();
                entidadServicio.gdestdo = $frm_Servicio.find("[name='GDESTDO']").val();
                $.post("../Servicio/InsertarServicio", entidadServicio)
                    .done(function () {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se registro satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            configDTServicio.reload();
                            $TbListarServio_tab.click();
                            $TbAgregarServicio_tab.addClass("disabled");
                            //$mdlSubGrupo.modal("hide");
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
            if ($frm_Servicio.valid()) {
                entidadServicio.id = $txtCodigoServicio.val();
                entidadServicio.idsgsrvcio = $hfCodGrupo.val();
                entidadServicio.dscrpcn = $txtDescripcionServicio.val();
                entidadServicio.abrvtra = $txtAbreviaturaServicio.val();
                entidadServicio.gdestdo = $frm_Servicio.find("[name='GDESTDO']").val();
                $.post("../Servicio/ActualizarServicio", entidadServicio)
                    .done(function () {
                        Swal.fire({
                            icon: "success",
                            allowOutsideClick: false,
                            title: "Éxito",
                            text: "Se actualizó satisfactoriamente.",
                            confirmButtonText: "Aceptar"
                        }).then((result) => {
                            configDTServicio.reload();
                            $TbListarServio_tab.click();
                            $TbAgregarServicio_tab.addClass("disabled");
                            //$mdlSubGrupo.modal("hide");
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
            var vggrupo = { id: codigo };
            $.post("../Servicio/ObtenerServicio", vggrupo)
                .done(function (data) {
                    entidadServicio = data;
                    $txtCodigoServicio.val(entidadServicio.id);
                    $hfCodGrupo.val(entidadServicio.idsgsrvcio);
                    $txtSubservicio.val(entidadServicio.sgdscrpcn);
                    $txtDescripcionServicio.val(entidadServicio.dscrpcn);
                    $txtAbreviaturaServicio.val(entidadServicio.abrvtra);
                    $frm_Servicio.find("[name='GDESTDO']").val(entidadServicio.gdestdo);
                    $frm_Servicio.AgregarCamposAuditoria(entidadServicio);
                })
                .fail().always(function () {
                    $frm_Servicio.find(":input").attr("disabled", false);
                    $frm_Servicio.DeshabilitarCamposAuditoria();
                });
        },
        eliminar: function (codigo) {
            var vggrupo = { id: codigo };
            Swal.fire({
                title: "¿Quiere modificar el estado del registro?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                confirmButtonClass: "btn btn-danger",
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    $.post("../Servicio/EliminarServicio", vggrupo)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTServicio.reload();
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


    var eventosIncrustadosgrupo = {
        NuevoGrupo: function () {
            $btnNuevo.click(function () {
                $modalTitulogrupo.text("Nuevo Grupo");
                $hfaction_grupo.val("N");
            })
        },

        GuardarGrupo: function () {
             $btnGrabarGrupo.click(function () {
                fnGrupo.guardar();
            })
        },

        init: function () {
            eventosIncrustadosgrupo.NuevoGrupo();
            eventosIncrustadosgrupo.GuardarGrupo();
        }
    }   
    var eventosIncrustadosSubgrupo = {
        NuevosSubGrupo: function () {
            $btnNuevoSubGrupo.click(function () {
                $modalTituloSubgrupo.text("Nuevo Sub-Grupo");
                $hfaction_Subgrupo.val("N");
            })
        },

        GuardarSubGrupo: function () {
            $btnGrabarSubGrupo.click(function () {
                fnSubGrupo.guardar();
            })
        },

        init: function () {
            eventosIncrustadosSubgrupo.NuevosSubGrupo();
            eventosIncrustadosSubgrupo.GuardarSubGrupo();
        }
    }
    var eventosIncrustadosServicios = {
        NuevosServicio: function () {
            $btnNuevoservicio.click(function () {
               // $modalTituloSubgrupo.text("Nuevo Servicio");
                $frm_Servicio.AgregarCamposDefectoAuditoria();
                $frm_Servicio.find(":input").attr("disabled", false);
                $frm_Servicio.DeshabilitarCamposAuditoria();
                configformServicio.eventos.reset();
                $TbAgregarServicio_tab.removeClass("disabled");
                $TbAgregarServicio_tab.click();
                $hfaction_servicio.val("N");

            })
        },
        GuardarServicio: function () {
            $btnGrabarServicio.click(function () {
                fnServicio.guardar();
            })
        },
        btnmdlSubservicio: function () {
            $btnmdlSubservicio.click(function () {
                configDTSubGrupoServicio.reload(); 
            })           
        },
        TbListarServio_tab: function () {
            $TbListarServio_tab.click(function () {
                $TbAgregarServicio_tab.addClass("disabled");
            });
        },
        Servicio_tab: function () {
            $Servicio_tab.click(function () {
                configDTServicio.reload();
            });
        },
        Grupo_tab: function () {
            $Grupo_tab.click(function () {
                $Subgrupo_tab.addClass("disabled");
                $TbListarServio_tab.click();
                $TbAgregarServicio_tab.addClass("disabled");
            });
        },
        Subgrupo_tab: function () {
            $Subgrupo_tab.click(function () {
                $TbListarServio_tab.click();
                $TbAgregarServicio_tab.addClass("disabled");
            });
        },


        init: function () {
            eventosIncrustadosServicios.NuevosServicio();
            eventosIncrustadosServicios.GuardarServicio();
            eventosIncrustadosServicios.btnmdlSubservicio();
            eventosIncrustadosServicios.TbListarServio_tab();
            eventosIncrustadosServicios.Servicio_tab();
            eventosIncrustadosServicios.Grupo_tab();
            eventosIncrustadosServicios.Subgrupo_tab();
        }
    }
    

    var IniEstados = {
        init: function () {
            $cboEstado.LlenarSelectEstados();
        }
    };
    return {
        inicializar: function () {
            configDTGrupo.reload();
            eventosIncrustadosgrupo.init();
            configformGrupo.init();
            IniEstados.init();
            eventosIncrustadosSubgrupo.init();
            configformSubGrupo.init();
            eventosIncrustadosServicios.init();

        }
    };
}();
    $(() => {
        iniServicio.inicializar();
    })