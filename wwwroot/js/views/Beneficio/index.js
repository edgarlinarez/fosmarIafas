var initBusquedaBeneficio = function () {

    $FormularioBeneficio = $("#FormularioBeneficio");
    $txtCodigo = $("#txtCodigo");
    $txtDescripcion = $("#txtDescripcion");
    $txtAbreviatura = $("#txtAbreviatura");
    $cboTPrestacion = $("#cboTPrestacion");
    $cboDBeneficio = $("#cboDBeneficio");
    $cboTCSiteds = $("#cboTCSiteds");
    $txtCSiteds = $("#txtCSiteds");
    $cboTGPrestacion = $("#cboTGPrestacion");
    $cboCGBeneficio = $("#cboCGBeneficio");
    $cboObligatoriedad = $("#cboObligatoriedad");
    $cboICG = $("#cboICG");
    $cboGenero = $("#cboGenero");
    $cboIInternamiento = $("#cboIInternamiento");
    $tab_Lista = $("#Lista-tab");
    $tab_Agregar = $("#DatosGenerales-tab");
    $cboEstado = $(".select-estados");
    $btnGrabarBeneficio = $("#btnGrabarBeneficio");
    $btnNuevoBeneficio = $("#btnNuevoBeneficio");
    $tblbeneficio = $("#tabla_beneficio");
    $hfactionBeneficio = $("#hfactionBeneficio");
    //var $accesoEditarBeneficio = $("#accesoEditarCorreo");
    //var $accesoEliminarCorreo = $("#accesoEliminarCorreo");

    //#region validacionControl
    let aNuBeneficio = $("#aNuBeneficio").val();
    let aGuBeneficio = $("#aGuBeneficio").val();
    let aEdBeneficio = $("#aEdBeneficio").val();
    let aElBeneficio = $("#aElBeneficio").val();

    let validacionControles = {
        init: function () {
            console.log(aNuBeneficio);
            aNuBeneficio == "False" && $btnNuevoBeneficio.hide();
            aGuBeneficio == "False" && $btnGrabarBeneficio.hide();
        }
    };
    //#endregion

    var EntidadBeneficio = {
        codbnfcio : "",
        dscrpcn : "",
        abrvtra	: "",
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
        Fdaccdnte: "",
        gdestdo: "",
    }
    var funcionesBeneficios = {
        NuevoBeneficio: function () {
            $tab_Agregar.removeClass("disabled");
            $hfactionBeneficio.val("N");
            $tab_Agregar.click();
            $FormularioBeneficio.AgregarCamposDefectoAuditoria();
            $FormularioBeneficio.DeshabilitarCamposAuditoria();
            configModalBeneficio.eventos.reset();
        },
        guardarBeneficio: function () {
            if ($hfactionBeneficio.val() == "N") {
                funcionesBeneficios.insertaBeneficio();
                
            } else { funcionesBeneficios.actualizarBeneficio();}

        },
        insertaBeneficio: function () {
            if ($FormularioBeneficio.valid()) {
                EntidadBeneficio.codbnfcio = $txtCodigo.val();
                EntidadBeneficio.dscrpcn = $txtDescripcion.val();
                EntidadBeneficio.abrvtra = $txtAbreviatura.val();
                EntidadBeneficio.gdtprstcn = $cboTPrestacion.val();
                EntidadBeneficio.fdbnfco = $cboDBeneficio.val();
                EntidadBeneficio.tcstds = $cboTCSiteds.val();
                EntidadBeneficio.cstds = $txtCSiteds.val();
                EntidadBeneficio.gdtgprstcn = $cboTGPrestacion.val();
                EntidadBeneficio.idgbnfco = $cboCGBeneficio.val();
                EntidadBeneficio.gdocbrtra = $cboObligatoriedad.val();
                EntidadBeneficio.fircgrntia = $cboICG.val();
                EntidadBeneficio.gnro = $cboGenero.val();
                EntidadBeneficio.gdintrnmto = $cboIInternamiento.val();
                EntidadBeneficio.gdestdo = $FormularioBeneficio.find("[name='GDESTDO']").val();

                $.post("../Beneficio/insertarBeneficio", EntidadBeneficio).done(function () {
                    Swal.fire({
                        icon: "success",
                        allowOutsideClick: false,
                        title: "Éxito",
                        text: "Se registro satisfactoriamente.",
                        confirmButtonText: "Aceptar"
                    }).then((result) => {
                        //$mdlDireccion.modal("hide");
                        configDTBeneficio.reload();
                    });
                }).fail(function (e) {
                    Swal.fire({
                        icon: "error",
                        title: "Error al insertar el registro.",
                        text: e.status === 502 ? "No hay respuesta del servidor" : e.responseText,
                        confirmButtonText: "Aceptar"
                    });
                });
                $hfactionBeneficio.val("");
            }
        },
        actualizarBeneficio: function () {
            if ($FormularioBeneficio.valid()) {
                EntidadBeneficio.codbnfcio = $txtCodigo.val();
                EntidadBeneficio.dscrpcn = $txtDescripcion.val();
                EntidadBeneficio.abrvtra = $txtAbreviatura.val();
                EntidadBeneficio.gdtprstcn = $cboTPrestacion.val();
                EntidadBeneficio.fdbnfco = $cboDBeneficio.val();
                EntidadBeneficio.tcstds = $cboTCSiteds.val();
                EntidadBeneficio.cstds = $txtCSiteds.val();
                EntidadBeneficio.gdtgprstcn = $cboTGPrestacion.val();
                EntidadBeneficio.idgbnfco = $cboCGBeneficio.val();
                EntidadBeneficio.gdocbrtra = $cboObligatoriedad.val();
                EntidadBeneficio.fircgrntia = $cboICG.val();
                EntidadBeneficio.gnro = $cboGenero.val();
                EntidadBeneficio.gdintrnmto = $cboIInternamiento.val();
                EntidadBeneficio.gdestdo = $FormularioBeneficio.find("[name='GDESTDO']").val();

                $.post("../Beneficio/actualizarBeneficio", EntidadBeneficio).done(function () {
                    Swal.fire({
                        icon: "success",
                        allowOutsideClick: false,
                        title: "Éxito",
                        text: "Se registro satisfactoriamente.",
                        confirmButtonText: "Aceptar"
                    }).then((result) => {
                        //$mdlDireccion.modal("hide");
                        configDTBeneficio.reload();
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
        obtenerBeneficio: function (idBeneficio) {
            var parametro = { id: idBeneficio };
            $.get("/Beneficio/obtenerBeneficio", parametro)
                .done(function (data) {
                    EntidadBeneficio = data;
                    $txtCodigo.val(EntidadBeneficio.codbnfcio);
                    $txtDescripcion.val(EntidadBeneficio.dscrpcn);
                    $txtAbreviatura.val(EntidadBeneficio.abrvtra);
                    $cboTPrestacion.val(EntidadBeneficio.gdtprstcn);
                    $cboDBeneficio.val(EntidadBeneficio.fdbnfco);
                    $cboTCSiteds.val(EntidadBeneficio.tcstds);
                    $txtCSiteds.val(EntidadBeneficio.cstds);
                    $cboTGPrestacion.val(EntidadBeneficio.gdtgprstcn);
                    $cboCGBeneficio.val(EntidadBeneficio.idgbnfco);
                    $cboObligatoriedad.val(EntidadBeneficio.gdocbrtra);
                    $cboICG.val(EntidadBeneficio.fircgrntia);
                    $cboGenero.val(EntidadBeneficio.gnro);
                    $cboIInternamiento.val(EntidadBeneficio.gdintrnmto);
                    $FormularioBeneficio.AgregarCamposAuditoria(EntidadBeneficio);
                })
                .fail().always(function () {
                    $FormularioBeneficio.DeshabilitarCamposAuditoria();
                });
        },
        eliminarBeneficio: function (idBeneficio) {
            var parametro = { id: idBeneficio};
            Swal.fire({
                title: "¿Quiere modificar el estado del registro?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                confirmButtonClass: "btn btn-danger",
                cancelButtonText: "Cancelar"
            }).then(function (result) {
                if (result.value) {
                    $.post("../Beneficio/eliminarBeneficio", parametro)
                        .done(function (data) {
                            Swal.fire({
                                icon: "success",
                                allowOutsideClick: false,
                                title: "Éxito",
                                text: "Registro modificado satisfactoriamente.",
                                confirmButtonText: "Aceptar"
                            }).then((result) => {
                                configDTBeneficio.reload();
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

    var configDTBeneficio =  {
        objecto: null,
        tienePrincipal: false,
        opciones: {
            ajax: {
                dataType: "JSON",
                url: "../Beneficio/listarBeneficio",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.gdestdo = "";
                    data.idprvdr = "";
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
                },
                {
                    title: "Opciones",
                    data: null,
                    orderable: false,
                    width: '15%',
                    class: "text-center",
                    render: function (data) {
                        var tpm = "";
                        if (aEdBeneficio == "True") {
                            tpm += `<button type="button" class="btn btn-info btn-xs btn-editar" data-toggle="modal"  data-id="${data.id}" title="Editar"><span><i class="la la-edit"></i></span></button>`; /*data - target="#mdlCorreo"*/
                        }
                        if (aElBeneficio == "True") {
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
            }
        },
        reload: function () {
            configDTBeneficio.objecto.ajax.reload();
        },
        init: function () {
            configDTBeneficio.objecto = $tblbeneficio.DataTable(configDTBeneficio.opciones);
            configDTBeneficio.eventos.init();
        }
    };

    var configModalBeneficio = {
        objeto: $FormularioBeneficio.validate({
            errorPlacement: function (error, element) {
                if (element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else {
                    error.insertAfter(element);
                }
            },
            rules: {
                    txtCodigo: {
                        required: true,
                    },
                    txtDescripcion: {
                        required: true,
                    },
                    txtAbreviatura: {
                        required: false,
                    },
                    cboTPrestacion: {
                        required: true,
                    },
                    cboDBeneficio: {
                        required: true,
                    },
                    cboTCSiteds: {
                        required: true,
                    },
                    txtCSiteds: {
                        required: true,
                    },
                    cboTGPrestacion: {
                        required: true,
                    },
                    cboCGBeneficio: {
                        required: true,
                    },
                    cboObligatoriedad: {
                        required: true,
                    },
                    cboICG: {
                        required: true,
                    },
                    cboGenero: {
                        required: true,
                    },
                    cboIInternamiento: {
                        required: true,
                    }
                }
            }),
            eventos: {
                reset: function () {
                    $FormularioBeneficio.trigger("reset");
                    //$FormularioBeneficio.find(":input").attr("disabled", false);
                    ////configModalBeneficio.form.eventos.reset();
                    //configModalBeneficio.eventos.reset();
                    configModalBeneficio.objeto.resetForm();
                }
            },
        }
        
    

    eventosIncrustadosBeneficios = {
        botonNuevoBeneficio: function () {            
            $btnNuevoBeneficio.click(function () { funcionesBeneficios.NuevoBeneficio(); });
        },
        tap_listaBeneficio: function () {
            $tab_Lista.click(function () {
                $tab_Agregar.addClass("disabled");
            });
        },
        botonGrabarBeneficio: function () {
            $btnGrabarBeneficio.click(function () { funcionesBeneficios.guardarBeneficio(); });

        },
        init: function () {
            eventosIncrustadosBeneficios.botonNuevoBeneficio();
            eventosIncrustadosBeneficios.tap_listaBeneficio();
            eventosIncrustadosBeneficios.botonGrabarBeneficio();
        }
    }

    var llenarlistas = {
        LlenarSelectGrupoBeneficio: function (){
            $.get("/GrupoBeneficio/obtener-activas")
                .done(function (data) {
                    $cboCGBeneficio.append($("<option />").val('').text("Seleccione"));
                    $.each(data, function (key, item) {
                        $cboCGBeneficio.append($("<option />").val(item["id"]).text(item["dscrpcn"]));
                    });
                });
        },
        init: function () {
            $cboEstado.LlenarSelectGD("GDESTDO");
            $cboTPrestacion.LlenarSelectGD("GDTPRSTCN");
            $cboTGPrestacion.LlenarSelectGD("GDTGPRSTCN");
            $cboObligatoriedad.LlenarSelectGD("GDOCBRTRA");
            $cboIInternamiento.LlenarSelectGD("GDINTRNMTO");
            $cboDBeneficio.LlenarSelectGD("GDTDOPC");
            $cboICG.LlenarSelectGD("GDTDOPC"); 
            $cboGenero.LlenarSelectGD("GNRO"); 
            $cboTCSiteds.LlenarSelectGD("GDTCBRTRSTDS"); 
            llenarlistas.LlenarSelectGrupoBeneficio();
        }
    };
    return {
        inicializar: function () {
            validacionControles.init();
            configDTBeneficio.init();
            eventosIncrustadosBeneficios.init();
            //configModalBeneficio.init();
            llenarlistas.init();
            
        }
    }
    

}();
$(function () {
    initBusquedaBeneficio.inicializar();
});