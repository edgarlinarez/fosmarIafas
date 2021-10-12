const InitGrupoServicioCmps = function () {
    //#region variables Lista GSCMPS
    $Lista_tab = $("#Lista-tab");
    $Datos_tab = $("#Datos-tab");
    $Configuracion2_tab = $("#Configuracion2-tab");
    $hfactionGSCmps = $("#hfactionGSCmps");
    $btnNuevoGServicioCmps = $("#btnNuevoGServicioCmps");
    $dtGServicioCmps = $("#dtGServicioCmps");
    //modal
    $mdlGServCmps = $("#mdlGServCmps");
    $titleGServicioCmps = $("#titleGServicioCmps");
    $frmGServicioCmps = $("#frmGServicioCmps");
    $hfIdGSCmps = $("#hfIdGSCmps");
    $txtIDGSCmps = $("#txtIDGSCmps");//oculto
    $hfCodGSCMPS = $("#hfCodGSCMPS");
    $txtCodGSCmps = $("#txtCodGSCmps");
    $txtDescripcion = $("#txtDescripcion");
    $txtAbreviatura = $("#txtAbreviatura");
    $btnGuardarGSCmps = $("#btnGrGSCmps");
    $cboEstado = $frmGServicioCmps.find("[name='GDESTDO']");
    //$cboEstado = $frmGServicioCmps.find("[name='GDESTDO']");

    //#endregion
    //#region Variables Sección
    $hfactionSeccion = $("#hfactionSeccion");
    $btnNuevoSeccionCmps = $("#btnNuevoSeccionCmps");
    $mdlSeccionCmps = $("#mdlSeccionCmps");
    $dtSeccionCmps = $("#dtSeccionCmps");
    $titleSeccion = $("#titleSeccion");
    $frmSeccion = $("#frmSeccion");
    $hfCodSeccion = $("#hfCodSeccion");
    $txtCodSeccion = $("#txtCodSeccion");
    $hfIdSeccion = $("#hfIdSeccion");
    $txtIDSeccion = $("#txtIDSeccion");//oculto
    $txtIDgrpsrvco = $("#txtIDgrpsrvco");//oculto
    $txtDescripcionSeccion = $("#txtDescripcionSeccion");
    $txtAbreviaturaSeccion = $("#txtAbreviaturaSeccion");
    $btnGrSeccion = $("#btnGrSeccion");
    $cboEstadoSeccion = $frmSeccion.find("[name='GDESTDO']");
    //#endregion
    //#region Variables SubSeccion
    $Configuracion_tab = $("#Configuracion-tab");
    $hfactionSubSeccion = $("#hfactionSubSeccion");
    $btnNuevoSubSeccion = $("#btnNuevoSubSeccion");
    $mdlSubSeccion = $("#mdlSubSeccion");
    $dtSubSeccion = $("#dtSubSeccion");
    $titleSubseccion = $("#titleSubseccion");
    $frmSubseccion = $("#frmSubseccion");
    $hfCodSubseccion = $("#hfCodSubseccion");
    $txtCodSubseccion = $("#txtCodSubseccion");
    $hfIdSubseccion = $("#hfIdSubseccion");
    $txtIDSubseccion = $("#txtIDSubseccion");//oculto
    $txtIDsccn = $("#txtIDsccn");//oculto
    $txtDscrpcnSubseccion = $("#txtDscrpcnSubseccion");
    $txtAbrvtraSubseccion = $("#txtAbrvtraSubseccion");

    $btnGrSubseccion = $("#btnGrSubseccion");
    $cboEstadoSubseccion = $frmSubseccion.find("[name='GDESTDO']");

    $txtGSrvcoBusq = $("#txtGSrvcoBusq");
    $txtSeccionBusq = $("#txtSeccionBusq");
    $txtProveedor = $("#txtProveedor");

    //#endregion
    //#region Variables CPMS
    $listaCpms_tab = $("#listaCpms-tab");
    $Cpms_tab = $("#Cpms-tab");
    $frmCpmsDet = $("#frmCpmsDet");


    $hfactionCpms = $("#hfactionCpms");
    $btnNuevoCpms = $("#btnNuevoCpms");
    $mdlCpms = $("#mdlCpms");
    $dtCpms = $("#dtCpms");
    $titleCpms = $("#titleCpms");
    $frmCpms = $("#frmCpms");
    $txtCodigoCpms = $("#txtCodigoCpms");
    $txtDscrpcnCpms = $("#txtDscrpcnCpms");
    $hfIdCpms = $("#hfIdCpms");//oculto
    $txtIDcpms = $("#txtIDcpms");//oculto
    $txtAbrvtraCpms = $("#txtAbrvtraCpms");
    $cboTedef = $("#cboTedef");
    $btnGrCpms = $("#btnGrCpms");
    $cboEstadoCpms = $frmCpms.find("[name='GDESTDO']");

    $cboGSrvcoBusq = $("#cboGSrvcoBusq");
    $cboSubseccionBusq = $("#cboSubseccionBusq");
    $cboSeccionBusq = $("#cboSeccionBusq");


    //#endregion
    //#region CombosCPMS
    var configCboGrpServicio = {
        options: {
            width: 'resolve', minimumResultsForSearch: -1,
            placeholder: 'Seleccione',
            dropdownCssClass: 'form-control form-control-sm',
            // language: opcAlert.languageStrSelect2,
            theme: 'bootstrap4',
            ajax: {
                url: "/GrupoServicioCmps/listarCombo",
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    var query = {
                       // idgrpsrvco: '',
                    }
                    return query;
                },
                processResults: function (data) {
                    var results = [];
                    var dataResponse = { id: '', text: '' }
                    for (var i = 0; i < data.length; i++) {
                        dataResponse = new Object();
                        dataResponse.id = data[i].id;
                        dataResponse.text = data[i].dscrpcngs;
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
                $cboGSrvcoBusq.on('select2:select', function (e) {
                    var data = e.params.data;
                    $cboSeccionBusq.prop("disabled", true);
                    $cboSubseccionBusq.prop("disabled", true);
                    $cboSeccionBusq.val(null).trigger('change');
                    setTimeout(function () { $cboSeccionBusq.prop("disabled", false) }, 100);
                    //$cboCfgRedSucursal.reload();
                })
            },
            init: function () {
                configCboGrpServicio.eventos.onSelect();
            }
        },
        reset: function () {
            $cboGSrvcoBusq.val(null).trigger('change');
            configCboGrpServicio.init();
        },
        selected: function (id) {
            if (!id) {
                configCboGrpServicio.reset();
                return false;
            }
            configCboGrpServicio.init();
            var param = { dscrpcngs : '' }
            $.get("/GrupoServicioCmps/listarCombo", param)
                .done(function (result) {
                    var i = 0;
                    var data = $((result)).filter((i, n) => { return n.id == id });
                    var dirText = data[i].dscrpcngs;
                    var newOption = new Option(dirText, data[i].id, false, false);
                    $cboGSrvcoBusq.append(newOption).trigger('change');
                    //
                    $cboGSrvcoBusq.val(id);

                });
        },
        init: function () {
            $cboGSrvcoBusq.select2(configCboGrpServicio.options);
            configCboGrpServicio.eventos.init();
        }
    }
    var configCboSeccion = {
        options: {
            width: 'resolve', minimumResultsForSearch: -1,
            placeholder: 'Seleccione',
            dropdownCssClass: 'form-control form-control-sm',
           // language: opcAlert.languageStrSelect2,
            theme: 'bootstrap4',
            ajax: {
                url: "/GrupoServicioCmps/listarSeccion",
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    var query = {
                        idgrpsrvco: $cboGSrvcoBusq.val(),
                    }
                    return query;
                },
                processResults: function (data) {
                    var results = [];
                    var dataResponse = { id: '', text: '' }
                    for (var i = 0; i < data.length; i++) {
                        dataResponse = new Object();
                        dataResponse.id = data[i].id;
                        dataResponse.text = data[i].dscrpcnsccn;
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
                $cboSeccionBusq.on('select2:select', function (e) {
                    var data = e.params.data;
                    $cboSubseccionBusq.prop("disabled", true);
                    $cboSubseccionBusq.val(null).trigger('change');
                    setTimeout(function () { $cboSubseccionBusq.prop("disabled", false) }, 100);
                    ////$cboCfgRedSucursal.reload();
                })
            },
            init: function () {
                configCboSeccion.eventos.onSelect();
            }
        },
        reset: function () {
            $cboSeccionBusq.val(null).trigger('change');
            configCboSeccion.init();
        },
        selected: function (idPadre) {
            if (!idPadre) {
                configCboSeccion.reset();
                return false;
            }
            configCboSeccion.init();
            var param = { idgrpsrvco: idPadre }
            $.get("/GrupoServicioCmps/listarSeccion", param)
                .done(function (result) {
                    var i = 0;
                    var data = $((result)).filter((i, n) => { return n.id == idPadre });
                    var dirText = data[i].dscrpcnsccn;
                    var newOption = new Option(dirText, data[i].id, false, false);
                    $cboSeccionBusq.append(newOption).trigger('change');
                    //
                  //  $cboSeccionBusq.val(id);

                });
        },
        init: function () {
            $cboSeccionBusq.select2(configCboSeccion.options);
            configCboSeccion.eventos.init();
        }
    }
    var configCboSubseccion = {
        options: {
            width: 'resolve', minimumResultsForSearch: -1,
            placeholder: 'Seleccione',
            dropdownCssClass: 'form-control form-control-sm',
            // language: opcAlert.languageStrSelect2,
            theme: 'bootstrap4',
            ajax: {
                url: "/GrupoServicioCmps/listarSubseccion",
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    var query = {
                        idsccn: $cboSeccionBusq.val()
                    }
                    return query;
                },
                processResults: function (data) {
                    var results = [];
                    var dataResponse = { id: '', text: '' }
                    for (var i = 0; i < data.length; i++) {
                        dataResponse = new Object();
                        dataResponse.id = data[i].id;
                        dataResponse.text = data[i].dscrpcnsbsccn;
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
                $cboSubseccionBusq.on('select2:select', function (e) {
                    var data = e.params.data;
                    //$cboCfgRedSucursal.prop("disabled", true);
                    //$cboCfgRedSucursal.val(null).trigger('change');
                    //setTimeout(function () { $cboCfgRedSucursal.prop("disabled", false) }, 100);
                    ////$cboCfgRedSucursal.reload();
                })
            },
            init: function () {
                configCboSubseccion.eventos.onSelect();
            }
        },
        reset: function () {
            $cboSubseccionBusq.val(null).trigger('change');
            configCboSubseccion.init();
        },
        selected: function (idPadre) {
            if (!idPadre) {
                configCboSubseccion.reset();
                return false;
            }
            configCboSubseccion.init();
            var param = { idsccn: idPadre }
            $.get("/GrupoServicioCmps/listarSubseccion", param)
                .done(function (result) {
                    var i = 0;
                    var data = $((result)).filter((i, n) => { return n.idsccn == idPadre });
                    var dirText = data[i].dscrpcnsbsccn;
                    var newOption = new Option(dirText, data[i].id, false, false);
                    $cboSubseccionBusq.append(newOption).trigger('change');
                    //
                    //$cboSubseccionBusq.val(id);

                });
        },
        init: function () {
            $cboSubseccionBusq.select2(configCboSubseccion.options);
            configCboSubseccion.eventos.init();
        }
    }
    //#endregion
    //#region Alertas
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
    //#endregion
    //#region Entidades
    var EntidadGServicioCmps = {
        id: "",
        codgsrvco: "",
        dscrpcngs: "",
        abrvtra: "",
        gdestdo: "",
        festdo: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",
    }
    var EntidadSeccion = {
        id: "",
        idgrpsrvco: "",
        codsccn: "",
        dscrpcnsccn: "",
        abrvtra: "",
        gdestdo: "",
        festdo: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",
    }
    var EntidadSubseccion = {
        id: "",
        idsccn: "",
        codsbsccn: "",
        dscrpcnsbsccn: "",
        abrvtra: "",
        gdestdo: "",
        festdo: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",
    }
    var EntidadCpms = {
        id: "",
        codigocpms: "",
        dscrpcn: "",
        abrvtra: "",
        gdtedef: "",
        idgrpsrvco: "",
        idsccn: "",
        idsbsccn: "",
        gdestdo: "",
        festdo: "",
        ucrcn: "",
        fcrcn: "",
        uedcn: "",
        fedcn: "",

    }
    //#endregion
    //#region DTs
    var configDTGServicioCmps = {
        objeto: null,
        opciones: {
            filter: true,
            ajax: {
                dataType: "JSON",
                url: "/GrupoServicioCmps/listar-tabla",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                 //   data.p_sId = $txtNumeroPlanBeneficio.val();
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
                        tpm += `<button type="button" class="btn btn-primary btn-xs btn-Seccion" data-id="${data.id}" title="Configurar Sección"><span><i class="fa fa-cogs"></i></span></button>`;
                        return tpm;
                    }
                },
                {
                    title: "Grupo Código",
                    data: "codgsrvco",
                    width: '5%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Descripción",
                    data: "dscrpcngs",
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Abreviatura",
                    data: "abrvtra",
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "U. Edición",
                    data: "uedcn", width: '10%',
                    orderable: false
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN", width: '20%',
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
                        //  if (aEdPBeneficio == "True") {
                        tpm += `<button type="button" class="btn btn-info btn-xs btn-editar" data-id="${data.id}" title="Editar"><span><i class="la la-edit"></i></span></button>`;
                        //  }
                        //  if (aElPBeneficio == "True") {
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
                configDTGServicioCmps.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    fnGServCmps.eliminar(id)
                })
            },
            editar: function () {
                configDTGServicioCmps.objeto.on("click", ".btn-editar", function () {
                    $titleGServicioCmps.text("Editar Grupo Servicio");
                    var data = configDTGServicioCmps.objeto.row($(this).parents('tr')).data();
                    $hfIdGSCmps.val(data.id);
                    var id = $(this).data("id");
                    $hfactionGSCmps.val("E");
                    $mdlGServCmps.modal("show");
                    fnGServCmps.obtener(id);

                })
            },
            Seccion: function () {
                configDTGServicioCmps.objeto.on("click", ".btn-Seccion", function () {
                    var id = $(this).data("id");
                    var data = configDTGServicioCmps.objeto.row($(this).parents('tr')).data();
                   // $hfCodGSCMPS.val(data.idgrpsrvco);
                    $hfIdGSCmps.val(id);
                    configDTSeccion.reload();
                    $Datos_tab.prop('disabled', false);
                    $Datos_tab.removeClass('disabled');
                    $Datos_tab.click();

                })
            },
            init: function () {
                configDTGServicioCmps.eventos.eliminar();
                configDTGServicioCmps.eventos.editar();
                configDTGServicioCmps.eventos.Seccion();
            }
        },
        reload: function () {
            //configDTGServicioCmps.objeto.ajax.reload();
            if (configDTGServicioCmps.objeto == null || configDTGServicioCmps.objeto == "" || configDTGServicioCmps.objeto == undefined) {
                configDTGServicioCmps.objeto = $dtGServicioCmps.DataTable(configDTGServicioCmps.opciones);
                configDTGServicioCmps.eventos.init();
            } else { configDTGServicioCmps.objeto.ajax.reload(); }
        
        },
    };
    var configDTSeccion = {
        objeto: null,
        opciones: {
            filter: false,
            ajax: {
                datatype: "JSON",
                url: "/GrupoServicioCmps/listar-seccion",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idgrpsrvco = $hfIdGSCmps.val();
                  //  data.gdestdo = '';
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
                        tpm += `<button type="button" class="btn btn-primary btn-xs btn-Subseccion" data-id="${data.id}" title="Configurar SubSección"><span><i class="fa fa-cogs"></i></span></button>`;
                        return tpm;
                    }
                },
                {
                    title: "Id Seccion",
                    data: "id",
                    width: '4%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Grupo Servicio",
                    data: "codgsrvco",
                    width: '4%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Grupo Serv. Nombre",
                    data: "dscrpcngs",
                    width: '20%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Código Sección",
                    data: "codsccn",
                    width: '4%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Descripción",
                    data: "dscrpcnsccn",
                    width: '40%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Abreviatura",
                    data: "abrvtra",
                    width: '40%',
                    orderable: false,
                    className: "text-left"
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
                configDTSeccion.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    //$hfIdCfgRed.val(id);
                    fnSeccion.eliminar(id);
                })
            },
            editar: function () {
                configDTSeccion.objeto.on("click", ".btn-editar", function () {
                    var data = configDTSeccion.objeto.row($(this).parents('tr')).data();
                    $hfIdSeccion.val(data.id);
                    $hfIdGSCmps.val(data.idgrpsrvco);
                    var id = $(this).data("id");
                    $titleSeccion.text("Editar Sección");
                    $hfactionSeccion.val("E");
                    //$hfIdCfgRed.val(id);
                    $mdlSeccionCmps.modal("show");
                    fnSeccion.obtener(id);
                })
            },
            SubSeccion: function () {
                configDTSeccion.objeto.on("click", ".btn-Subseccion", function () {
                    var id = $(this).data("id");
                    var data = configDTSeccion.objeto.row($(this).parents('tr')).data();
                    $hfIdSeccion.val(data.id)
                    //$hfIdGSCmps.val(id);
                    configDTSubseccion.reload();
                    $Configuracion_tab.prop('disabled', false);
                    $Configuracion_tab.removeClass('disabled');
                    $Configuracion_tab.click();
                })
            },
            init: function () {
                configDTSeccion.eventos.editar();
                configDTSeccion.eventos.eliminar();
                configDTSeccion.eventos.SubSeccion();
            }
        },
        reload: function () {
            if (configDTSeccion.objeto == null || configDTSeccion.objeto == "" || configDTSeccion.objeto == undefined) {
                configDTSeccion.objeto = $dtSeccionCmps.DataTable(configDTSeccion.opciones);
                configDTSeccion.eventos.init();
            } else { configDTSeccion.objeto.ajax.reload(); }
        }
    };
    var configDTSubseccion = {
        objeto: null,
        opciones: {
            filter: false,
            ajax: {
                datatype: "JSON",
                url: "/GrupoServicioCmps/listar-subseccion",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.idsccn = $hfIdSeccion.val();
                    //  data.gdestdo = '';
                }
            },
            columns: [
                //{
                //    title: "",
                //    data: null, width: '2%',
                //    orderable: false,
                //    class: "text-center",
                //    render: function (data) {
                //        var tpm = "";
                //        tpm += `<button type="button" class="btn btn-primary btn-xs btn-Cpms" data-id="${data.id}" title="Configurar CPMS"><span><i class="fa fa-cogs"></i></span></button>`;
                //        return tpm;
                //    }
                //},
                {
                    title: "Id Subseccion",
                    data: "id",
                    width: '4%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Grupo Servicio",
                    data: "codgsrvco",
                    width: '2%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Grupo Serv. Nombre",
                    data: "dscrpcngs",
                    width: '4%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Código Sección",
                    data: "codsccn",
                    width: '4%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Sección Nombre",
                    data: "dscrpcnsccn",
                    width: '4%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Código Subsección",
                    data: "codsbsccn",
                    width: '10%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Descripción",
                    data: "dscrpcnsbsccn",
                    width: '10%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Abreviatura",
                    data: "abrvtra",
                    width: '4%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "U. Edición",
                    data: "uedcn",
                    width: '16%',
                    orderable: false,
                    className: "text-center d-none"
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
                    width: '10%',
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
                configDTSubseccion.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    fnSubseccion.eliminar(id);
                })
            },
            editar: function () {
                configDTSubseccion.objeto.on("click", ".btn-editar", function () {
                    var data = configDTSubseccion.objeto.row($(this).parents('tr')).data();
                    $hfIdSeccion.val(data.idsccn);
                    $hfIdSubseccion.val(data.id);
                    //$hfIdGSCmps.val(data.idgrpsrvco);
                    var id = $(this).data("id");
                    $titleSubseccion.text("Editar Subsección");
                    $hfactionSubSeccion.val("E");
                    ////$hfIdCfgRed.val(id);
                    $mdlSubSeccion.modal("show");
                    fnSubseccion.obtener(id);
                })
            },
            Cpms: function () {
                configDTSubseccion.objeto.on("click", ".btn-Cpms", function () {
                    //var id = $(this).data("id");
                    //var data = configDTSeccion.objeto.row($(this).parents('tr')).data();
                    //// $hfCodGSCMPS.val(data.idgrpsrvco);
                    //$hfIdGSCmps.val(id);
                    //configDTGCmps.reload();
                    //$Configuracion2_tab.prop('disabled', false);
                    //$Configuracion2_tab.removeClass('disabled');
                    //$Configuracion2_tab.click();
                })
            },
            init: function () {
                configDTSubseccion.eventos.editar();
                configDTSubseccion.eventos.eliminar();
              //  configDTSubseccion.eventos.Cpms();
            }
        },
        reload: function () {
            if (configDTSubseccion.objeto == null || configDTSubseccion.objeto == "" || configDTSubseccion.objeto == undefined) {
                configDTSubseccion.objeto = $dtSubSeccion.DataTable(configDTSubseccion.opciones);
                configDTSubseccion.eventos.init();
            } else { configDTSubseccion.objeto.ajax.reload(); }
        }
    };
    var configDTGCmps = {
        objeto: null,
        opciones: {
            filter: true,
            ajax: {
                dataType: "JSON",
                url: "/GrupoServicioCmps/listarCpms",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    data.gdestdo = "";
                }
            },
            columns: [
                {
                    title: "idCPMS",
                    data: "id",
                    width: '5%',
                    orderable: false,
                    className: "text-center d-none"
                },
                {
                    title: "Código",
                    data: "codigocpms",
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
                    title: "Abreviatura",
                    data: "abrvtra",
                    width: '25%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "TEDEF Clasificación",
                    data: "gdtedef",
                    width: '40%',
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "id grupoServ",
                    data: "idgrpsrvco",
                    orderable: false,
                    className: "text-left d-none"
                },
                {
                    title: "id sccn",
                    data: "idsccn",
                    orderable: false,
                    className: "text-left d-none"
                },
                {
                    title: "id subsccn",
                    data: "idsbsccn",
                    orderable: false,
                    className: "text-left d-none"
                },
                {
                    title: "U. Edición",
                    data: "uedcn", width: '10%',
                    orderable: false
                },
                {
                    title: "F. Edición",
                    data: "cFEDCN", width: '20%',
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
                        //  if (aEdPBeneficio == "True") {
                        tpm += `<button type="button" class="btn btn-info btn-xs btn-editar" data-id="${data.id}" title="Editar"><span><i class="la la-edit"></i></span></button>`;
                        //  }
                        //  if (aElPBeneficio == "True") {
                        tpm += ` <button type="button" title="Cambiar estado" data-id="${data.id}" class="btn btn-danger btn-xs btn-delete"><span><i class="la la-refresh"></i><span></span></span></button>`;
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
                configDTGCmps.objeto.on("click", ".btn-delete", function () {
                    var id = $(this).data("id");
                    fnCpms.eliminar(id)
                })
            },
            editar: function () {
                configDTGCmps.objeto.on("click", ".btn-editar", function () {
                    var id = $(this).data("id");
                    $hfIdCpms.val(id);
                    $hfactionCpms.val("E");
                    $Cpms_tab.removeClass("disabled");
                    $Cpms_tab.click();
                    //$mdlGServCmps.modal("show");
                    fnCpms.obtener(id);

                })
            },
            Seccion: function () {
                configDTGCmps.objeto.on("click", ".btn-Seccion", function () {
                    //var id = $(this).data("id");
                    //var data = configDTGServicioCmps.objeto.row($(this).parents('tr')).data();
                    //// $hfCodGSCMPS.val(data.idgrpsrvco);
                    //$hfIdGSCmps.val(id);
                    //configDTSeccion.reload();
                    //$Datos_tab.prop('disabled', false);
                    //$Datos_tab.removeClass('disabled');
                    //$Datos_tab.click();
                })
            },
            init: function () {
                configDTGCmps.eventos.eliminar();
                configDTGCmps.eventos.editar();
               // configDTGServicioCmps.eventos.Seccion();
            }
        },
        reload: function () {
            //configDTGServicioCmps.objeto.ajax.reload();
            if (configDTGCmps.objeto == null || configDTGCmps.objeto == "" || configDTGCmps.objeto == undefined) {
                configDTGCmps.objeto = $dtCpms.DataTable(configDTGCmps.opciones);
                configDTGCmps.eventos.init();
            } else { configDTGCmps.objeto.ajax.reload(); }

        },
        //init: function () {
        //    configDTGServicioCmps.objeto = $dtGServicioCmps.DataTable(configDTGServicioCmps.opciones);
        //    configDTGServicioCmps.init();
        //}
    };

    //#endregion
    //#region Formularios
    var frmGServicioCmps = {
        index: function () {
            $Datos_tab.prop('disabled', true);
            $Datos_tab.addClass('disabled');
            $Configuracion_tab.prop('disabled', true);
            $Configuracion_tab.addClass('disabled');
        },
        inicio: function () {
            $frmGServicioCmps.AgregarCamposDefectoAuditoria();
            frmGServicioCmps.validacion.reset();
            $frmGServicioCmps.DeshabilitarCamposAuditoria();
        },
        validacion: {
            objeto: $frmGServicioCmps.validate({
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
                    txtCodGSCmps: {
                        required: true,
                    },
                    txtDescripcion: {
                        required: true,
                    },
                    txtAbreviatura: {
                        required: false,
                    },
                }
            }),
            reset: function () {
                frmGServicioCmps.validacion.objeto.resetForm();
            }
        },
        init: function () { frmGServicioCmps.inicio(); }
    }
    var frmSeccionCmps = {
        index: function () {
            $Configuracion_tab.prop('disabled', true);
            $Configuracion_tab.addClass('disabled');
        },
        inicio: function () {
            $frmSeccion.AgregarCamposDefectoAuditoria();
            frmSeccionCmps.validacion.reset();
            $frmSeccion.DeshabilitarCamposAuditoria();
        },
        validacion: {
            objeto: $frmSeccion.validate({
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
                    txtCodSeccion: {
                        required: true,
                    },
                    txtDescripcionSeccion: {
                        required: true,
                    },
                    txtAbreviaturaSeccion: {
                        required: false,
                    },
                }
            }),
            reset: function () {
                frmSeccionCmps.validacion.objeto.resetForm();
            }
        },
        init: function () { frmSeccionCmps.inicio(); }
    }
    var frmSubseccion = {
        index: function () {
            //$Configuracion2_tab.prop('disabled', true);
            //$Configuracion2_tab.addClass('disabled');
        },
        inicio: function () {
            $frmSubseccion.AgregarCamposDefectoAuditoria();
            frmSubseccion.validacion.reset();
            $frmSubseccion.DeshabilitarCamposAuditoria();
        },
        validacion: {
            objeto: $frmSubseccion.validate({
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
                    txtCodSubseccion: {
                        required: true,
                    },
                    txtDscrpcnSubseccion: {
                        required: true,
                    },
                    txtAbrvtraSubseccion: {
                        required: false,
                    },
                }
            }),
            reset: function () {
                frmSubseccion.validacion.objeto.resetForm();
            }
        },
        init: function () { frmSubseccion.inicio(); }
    }
    var frmCmps = {
        index: function () {
            $Cpms_tab.addClass("disabled");
            $listaCpms_tab.click();

        },
        inicio: function () {
            //prueba $frmCpms.AgregarCamposDefectoAuditoria();
            frmCmps.validacion.reset();
            //$frmCpms.DeshabilitarCamposAuditoria();

        },
        validacion: {

            objeto: $frmCpms.validate({
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
                rules: {
                    txtCodigoCpms: {
                        required: true,
                    },
                    txtDscrpcnCpms: {
                        required: true,
                    },
                    txtAbrvtraCpms: {
                        required: true,
                    },
                    cboTedef: {
                        required: true,
                    },
                    cboGSrvcoBusqueda: {
                        required: true,
                    },
                    cboSeccionBusq: {
                        required: true,
                    },
                    cboSubseccionBusq: {
                        required: true,
                    },
                }
            }),
            reset: function () {
                $frmCpms.trigger("reset");
                frmCmps.validacion.objeto.resetForm();
            }
        },
        init: function () { frmCmps.inicio(); }
    }
    //#endregion
    //#region MODALs
    var configModalGrpSrvco = {
        eventos: {
            onHide: function () {
                $mdlGServCmps.on("hidden.bs.modal", function () {
                    configModalGrpSrvco.eventos.reset();
                })
            },
            onShow: function () {
                $mdlGServCmps.on("shown.bs.modal", function () {
                    if ($hfactionGSCmps.val() == "N") {
                        frmGServicioCmps.inicio();
                    }
                })
            },
            reset: function () {
                frmGServicioCmps.validacion.reset();
                $frmGServicioCmps.trigger("reset");
                $frmGServicioCmps.find(":input").attr("disabled", false);
            }
        },
        init: function () {
            this.eventos.onHide();
            this.eventos.onShow();
        }
    }
    var configModalSeccion = {
        eventos: {
            onHide: function () {
                $mdlSeccionCmps.on("hidden.bs.modal", function () {
                    configModalSeccion.eventos.reset();
                })
            },
            onShow: function () {
                $mdlSeccionCmps.on("shown.bs.modal", function () {
                    if ($hfactionSeccion.val() == "N") {
                        frmSeccionCmps.inicio();
                    }
                })
            },
            reset: function () {
                frmSeccionCmps.validacion.reset();
                $frmSeccion.trigger("reset");
                $frmSeccion.find(":input").attr("disabled", false);
            }
        },
        init: function () {
            this.eventos.onHide();
            this.eventos.onShow();
        }
    }
    var configModalSubseccion = {
        eventos: {
            onHide: function () {
                $mdlSubSeccion.on("hidden.bs.modal", function () {
                    configModalSubseccion.eventos.reset();
                })
            },
            onShow: function () {
                $mdlSubSeccion.on("shown.bs.modal", function () {
                    if ($hfactionSubSeccion.val() == "N") {
                        frmSubseccion.inicio();
                    }
                })
            },
            reset: function () {
                frmSubseccion.validacion.reset();
                $frmSubseccion.trigger("reset");
                $frmSubseccion.find(":input").attr("disabled", false);
            }
        },
        init: function () {
            this.eventos.onHide();
            this.eventos.onShow();
        }
    }
    //#endregion
    //#region Funciones
    var fnGServCmps = {
        nuevo: function () {
            $titleGServicioCmps.text("Nuevo Grupo Servicio");
            $hfactionGSCmps.val("N");
            $frmGServicioCmps.trigger("reset");
        },
        insertar: function () {

            $hfIdGSCmps.val($txtIDGSCmps);

            EntidadGServicioCmps = new Object();

           // EntidadGServicioCmps.id = $hfIdGSCmps.val();
            EntidadGServicioCmps.codgsrvco = $txtCodGSCmps.val();
            EntidadGServicioCmps.dscrpcngs = $txtDescripcion.val();
            EntidadGServicioCmps.abrvtra = $txtAbreviatura.val();
            EntidadGServicioCmps.gdestdo = $cboEstado.val();
            $.post('GrupoServicioCmps/insertar', EntidadGServicioCmps)
                .done(function (idGSCmps) {
                    Swal.fire(opcAlert.in).then(function (r) {
                        $hfIdGSCmps.val(idGSCmps);//05.07
                        $mdlGServCmps.modal('hide');
                        configDTGServicioCmps.reload();
                    });
                })
                .always(function () { })
        },
        actualizar: function () {
            EntidadGServicioCmps = new Object();

            EntidadGServicioCmps.id = $hfIdGSCmps.val();
            EntidadGServicioCmps.codgsrvco = $txtCodGSCmps.val();
            EntidadGServicioCmps.dscrpcngs = $txtDescripcion.val();
            EntidadGServicioCmps.abrvtra = $txtAbreviatura.val();
            EntidadGServicioCmps.gdestdo = $cboEstado.val();
            $.post('GrupoServicioCmps/actualizar', EntidadGServicioCmps)
                .done(function (idGSCmps) {
                    Swal.fire(opcAlert.in).then(function (r) {
                        configDTGServicioCmps.reload();
                        $mdlGServCmps.modal('hide');
                    });
                })
                .always(function () { })
        },
        guardar: function () {
            if ($frmGServicioCmps.valid()) {
                if ($hfactionGSCmps.val() == "N") {
                    fnGServCmps.insertar();
                } else {
                    fnGServCmps.actualizar();
                }
            }
        },
        eliminar: function (id) {
            EntidadGServicioCmps = new Object();
            EntidadGServicioCmps.id = id;
            Swal.fire(opcAlert.el).then(function (r) {
                if (r.value) {
                    $.post("GrupoServicioCmps/eliminar", EntidadGServicioCmps)
                        .done(function () {
                            Swal.fire(opcAlert.ac).then(() => {
                                configDTGServicioCmps.reload();
                            });
                        })
                }
            })

        },
        obtener: function (id) {
            var p = { id: id };
            $.get("GrupoServicioCmps/obtener", p)
                .done(function (data) {
                    EntidadGServicioCmps = new Object();
                    EntidadGServicioCmps = data;

                    //$txtId.val(objRed.id);
                    $txtIDGSCmps.val(EntidadGServicioCmps.id);
                    $txtCodGSCmps.val(EntidadGServicioCmps.codgsrvco);
                    $txtDescripcion.val(EntidadGServicioCmps.dscrpcngs);
                    $txtAbreviatura.val(EntidadGServicioCmps.abrvtra);
                    $frmGServicioCmps.AgregarCamposAuditoria(EntidadGServicioCmps);
                })
        }
    }
    var fnSeccion = {
        nuevo: function () {
            $titleSeccion.text("Nueva Sección");
            $hfactionSeccion.val("N");
            $frmSeccion.trigger("reset");
        },
        insertar: function () {

     //05.07       $hfIdGSCmps($txtIDgrpsrvco());
           // $hfIdGSCmps.val($txtIDgrpsrvco);

            EntidadSeccion = new Object();

           // EntidadSeccion.id = $hfIdCfgRed.val();
            EntidadSeccion.idgrpsrvco = $hfIdGSCmps.val();
            EntidadSeccion.codsccn = $txtCodSeccion.val();
            EntidadSeccion.dscrpcnsccn = $txtDescripcionSeccion.val();
            EntidadSeccion.abrvtra = $txtAbreviaturaSeccion.val();
            EntidadSeccion.gdestdo = $cboEstadoSeccion.val();//05.07
            $.post('GrupoServicioCmps/insertar-seccion', EntidadSeccion)
                .done(function (idSeccion) {
                    Swal.fire(opcAlert.in).then(function (r) {
                        $hfIdSeccion.val(idSeccion);
                        $mdlSeccionCmps.modal('hide');
                        configDTSeccion.reload();
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
            EntidadSeccion = new Object();

            EntidadSeccion.id = $hfIdSeccion.val();
            EntidadSeccion.idgrpsrvco = $hfIdGSCmps.val();
            EntidadSeccion.codsccn = $txtCodSeccion.val();
            EntidadSeccion.dscrpcnsccn = $txtDescripcionSeccion.val();
            EntidadSeccion.abrvtra = $txtAbreviaturaSeccion.val();
            EntidadSeccion.gdestdo = $cboEstadoSeccion.val();//05.07
            $.post('GrupoServicioCmps/actualizar-seccion', EntidadSeccion)
                .done(function () {
                    Swal.fire(opcAlert.ac).then(function (r) {
                        $mdlSeccionCmps.modal('hide');
                        configDTSeccion.reload();
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
            if ($frmSeccion.valid()) {
                if ($hfactionSeccion.val() == "N") {
                    fnSeccion.insertar();
                } else {
                    fnSeccion.actualizar();
                }
            }
        },
        eliminar: function (id) {
            EntidadSeccion = new Object();
            EntidadSeccion.id = id;
            Swal.fire(opcAlert.el).then(function (r) {
                if (r.value) {
                    $.post("GrupoServicioCmps/eliminar-seccion", EntidadSeccion)
                        .done(function () {
                            Swal.fire(opcAlert.ac).then(() => {
                                configDTSeccion.reload();
                            });
                        })
                }
            })

        },
        obtener: function (id) {
            var p = { id: id, idgrpsrvco: $hfIdGSCmps.val() }; //$txtIDgrpsrvco.val() };
            $.get("GrupoServicioCmps/obtener-seccion", p)
                .done(function (data) {
                    EntidadSeccion = new Object();
                    EntidadSeccion = data;

                    $txtIDSeccion.val(EntidadSeccion.id);
                    $txtIDgrpsrvco.val(EntidadSeccion.idgrpsrvco);
                    $txtCodSeccion.val(EntidadSeccion.codsccn);
                    $txtDescripcionSeccion.val(EntidadSeccion.dscrpcnsccn);
                    $txtAbreviaturaSeccion.val(EntidadSeccion.abrvtra);
                    $frmSeccion.AgregarCamposAuditoria(EntidadSeccion);
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
    var fnSubseccion = {
        nuevo: function () {
            $titleSubseccion.text("Nueva Subsección");
            $hfactionSubSeccion.val("N");
            $frmSubseccion.trigger("reset");
        },
        insertar: function () {
            //$hfIdSubseccion($txtIDSubseccion());

            EntidadSubseccion = new Object();

            // EntidadSeccion.id = $hfIdCfgRed.val();
            EntidadSubseccion.idsccn = $hfIdSeccion.val();
            EntidadSubseccion.codsbsccn = $txtCodSubseccion.val();
            EntidadSubseccion.dscrpcnsbsccn = $txtDscrpcnSubseccion.val();
            EntidadSubseccion.abrvtra = $txtAbrvtraSubseccion.val();
            EntidadSubseccion.gdestdo = $cboEstadoSubseccion.val();
            $.post('GrupoServicioCmps/insertar-subseccion', EntidadSubseccion)
                .done(function (idSubseccion) {
                    Swal.fire(opcAlert.in).then(function (r) {
                        $hfIdSubseccion.val(idSubseccion);
                        $mdlSubSeccion.modal('hide');
                        configDTSubseccion.reload();
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
            EntidadSubseccion = new Object();

            EntidadSubseccion.id = $hfIdSubseccion.val();
            EntidadSubseccion.idsccn = $hfIdSeccion.val();
            EntidadSubseccion.codsbsccn = $txtCodSubseccion.val();
            EntidadSubseccion.dscrpcnsbsccn = $txtDscrpcnSubseccion.val();
            EntidadSubseccion.abrvtra = $txtAbrvtraSubseccion.val();
            EntidadSubseccion.gdestdo = $cboEstadoSubseccion.val();
            $.post('GrupoServicioCmps/actualizar-subseccion', EntidadSubseccion)
                .done(function () {
                    Swal.fire(opcAlert.ac).then(function (r) {
                        $mdlSubSeccion.modal('hide');
                        configDTSubseccion.reload();
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
            if ($frmSubseccion.valid()) {
                if ($hfactionSubSeccion.val() == "N") {
                    fnSubseccion.insertar();
                } else {
                    fnSubseccion.actualizar();
                }
            }
        },
        eliminar: function (id) {
            EntidadSubseccion = new Object();
            EntidadSubseccion.id = id;
            Swal.fire(opcAlert.el).then(function (r) {
                if (r.value) {
                    $.post("GrupoServicioCmps/eliminar-subseccion", EntidadSubseccion)
                        .done(function () {
                            Swal.fire(opcAlert.ac).then(() => {
                                configDTSubseccion.reload();
                            });
                        })
                }
            })

        },
        obtener: function (id) {
            var p = { id: id, idsccn : $hfIdSeccion.val() }; //$txtIDgrpsrvco.val() };
            $.get("GrupoServicioCmps/obtener-subseccion", p)
                .done(function (data) {
                    EntidadSubseccion = new Object();
                    EntidadSubseccion = data;

                    $txtIDSubseccion.val(EntidadSubseccion.id);
                    $txtIDsccn.val(EntidadSubseccion.idsccn);
                    $txtCodSubseccion.val(EntidadSubseccion.codsbsccn);
                    $txtDscrpcnSubseccion.val(EntidadSubseccion.dscrpcnsbsccn);
                    $txtAbrvtraSubseccion.val(EntidadSubseccion.abrvtra);
                    $frmSubseccion.AgregarCamposAuditoria(EntidadSubseccion);
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
    var fnCpms = {
        nuevoCpms: function () {           
        },
        insertar: function() {
            $hfIdCpms.val($txtIDcpms);

            EntidadCpms = new Object();

            // EntidadGServicioCmps.id = $hfIdGSCmps.val();
            EntidadCpms.codigocpms = $txtCodigoCpms.val();
            EntidadCpms.dscrpcn = $txtDscrpcnCpms.val();
            EntidadCpms.abrvtra = $txtAbrvtraCpms.val();
            EntidadCpms.gdtedef = $cboTedef.val();
            EntidadCpms.idgrpsrvco = $cboGSrvcoBusq.val();
            EntidadCpms.idsccn = $cboSeccionBusq.val();
            EntidadCpms.idsbsccn = $cboSubseccionBusq.val();
            EntidadCpms.gdestdo = $cboEstadoCpms.val();
            $.post('GrupoServicioCmps/insertarCpms', EntidadCpms)
                .done(function (idCmps) {
                    Swal.fire(opcAlert.in).then(function (r) {
                       // $mdlGServCmps.modal('hide');
                        configDTGCmps.reload();
                        $listaCpms_tab.click();
                        $Cpms_tab.addClass("disabled");
                    });
                })
                .always(function () { })
        
        },
        actualizar: function () {

            EntidadCpms = new Object();

            EntidadCpms.id = $hfIdCpms.val();
            EntidadCpms.codigocpms = $txtCodigoCpms.val();
            EntidadCpms.dscrpcn = $txtDscrpcnCpms.val();
            EntidadCpms.abrvtra = $txtAbrvtraCpms.val();
            EntidadCpms.gdtedef = $cboTedef.val();
            EntidadCpms.idgrpsrvco = $cboGSrvcoBusq.val();
            EntidadCpms.idsccn = $cboSeccionBusq.val();
            EntidadCpms.idsbsccn = $cboSubseccionBusq.val();
            EntidadCpms.gdestdo = $cboEstadoCpms.val();
            $.post('GrupoServicioCmps/actualizarCpms', EntidadCpms)
                .done(function () {
                    Swal.fire(opcAlert.in).then(function (r) {
                        configDTGCmps.reload();
                        $listaCpms_tab.click();
                        $Cpms_tab.addClass("disabled");
                    });
                })
                .always(function () { })
        },
        guardar: function () {
            if ($frmCpms.valid()) {
                if ($hfactionCpms.val() == "N") {
                    fnCpms.insertar();
                } else {
                    fnCpms.actualizar();
                }
            }
        },
        eliminar: function (id) {
            EntidadCpms = new Object();
            EntidadCpms.id = id;
            Swal.fire(opcAlert.el).then(function (r) {
                if (r.value) {
                    $.post("GrupoServicioCmps/eliminarCpms", EntidadCpms)
                        .done(function () {
                            Swal.fire(opcAlert.ac).then(() => {
                                configDTGCmps.reload();
                            });
                        })
                }
            })

        },
        obtener: function (id) {
            var p = { id: id };
            $.get("GrupoServicioCmps/obtenerCpms", p)
                .done(function (data) {

                    EntidadCpms = new Object();
                    EntidadCpms = data;

                    $txtIDcpms.val(EntidadCpms.id);
                    $txtCodigoCpms.val(EntidadCpms.codigocpms);
                    $txtDscrpcnCpms.val(EntidadCpms.dscrpcn);
                    $txtAbrvtraCpms.val(EntidadCpms.abrvtra);
                    $cboTedef.val(EntidadCpms.gdtedef);

                    configCboGrpServicio.selected(EntidadCpms.idgrpsrvco);
                    configCboSeccion.selected(EntidadCpms.idsccn, EntidadCpms.idgrpsrvco);
                    configCboSubseccion.selected(EntidadCpms.idsccn);
                  //  $cboGSrvcoBusq.val(EntidadCpms.idgrpsrvco);
                  //  $cboSeccionBusq.val(EntidadCpms.idsccn);
                  //  $cboSubseccionBusq.val(EntidadCpms.idsbsccn);
                    $frmCpms.AgregarCamposAuditoria(EntidadCpms);
                })
                .fail().always(function () {
                    $frmCpms.find(":input").attr("disabled", false);
                    $frmCpms.DeshabilitarCamposAuditoria();
                });
        }

    } 

    //#endregion
    //#region Eventos
    var evntGServicioCmps = {
        btnNuevo: function () {
            $btnNuevoGServicioCmps.click(() => {
                fnGServCmps.nuevo();
            });
        },
        btnGuardar: function () {
            $btnGuardarGSCmps.click(() => {
                fnGServCmps.guardar();
            });
        },
        tabGSCmps: function () {
            $Lista_tab.click(function () {
                frmGServicioCmps.index();
            });
        },
        init: function () {
            evntGServicioCmps.btnNuevo();
            evntGServicioCmps.btnGuardar();
            evntGServicioCmps.tabGSCmps();
        }
    }
    var evntSeccion = {
        btnNuevo: function () {
            $btnNuevoSeccionCmps.click(() => {
                fnSeccion.nuevo();
            });
        },
        btnGuardar: function () {
            $btnGrSeccion.click(() => {
                fnSeccion.guardar();
            });
        },
        tabSeccion: function () {
            $Datos_tab.click(function () {
                frmSeccionCmps.index();
            });
        },
        init: function () {
            evntSeccion.btnNuevo();
            evntSeccion.btnGuardar();
            evntSeccion.tabSeccion();
        }

    }
    var evntSubseccion = {
        btnNuevo: function () {
            $btnNuevoSubSeccion.click(() => {
                fnSubseccion.nuevo();
            });
        },
        btnGuardar: function () {
            $btnGrSubseccion.click(() => {
                fnSubseccion.guardar();
            });
        },
        tabSubseccion: function () {
            $Configuracion_tab.click(function () {
                frmSubseccion.index();
            });
        },
        init: function () {
            evntSubseccion.btnNuevo();
            evntSubseccion.btnGuardar();
            evntSubseccion.tabSubseccion();
        }


    }
    var evntCpms = {
        tabCpms: function () {
            $Configuracion2_tab.click(function () {
                frmCmps.index();
            });
        },
        tabListaCpms: function () {
            $listaCpms_tab.click(function () {
                $Cpms_tab.addClass("disabled");
                frmCmps.init();
                configDTGCmps.reload();
            });
        },
        tabCPms: function () {
            $Cpms_tab.click(function () {
                $frmCpms.trigger("reset");
            });
        },
        botonNuevoCpms: function () {
            $btnNuevoCpms.click(function () {
                $hfactionCpms.val("N");
                $Cpms_tab.removeClass("disabled");
                $Cpms_tab.click();
                configCboGrpServicio.reset();
                configCboSeccion.reset();
                configCboSubseccion.reset();
                $frmCpms.AgregarCamposDefectoAuditoria();
                $frmCpms.DeshabilitarCamposAuditoria();
                frmCmps.validacion.reset();
                $cboSeccionBusq.attr("disabled", true);
                $cboSubseccionBusq.attr("disabled", true);
            });
        },
        botonGuardarCpms: function () {
            $btnGrCpms.click(() => {
                fnCpms.guardar();
            });
        },

        init: function () {
            evntCpms.tabCpms();
            evntCpms.tabListaCpms();
            evntCpms.botonNuevoCpms();
            evntCpms.botonGuardarCpms();
           // evntCpms.tabCPms();

        }
    }

    //#endregion


    var IniEstados = {
        init: function () {
            $cboEstado.LlenarSelectEstados();
            $cboEstadoSeccion.LlenarSelectEstados();
            $cboEstadoSubseccion.LlenarSelectEstados();
            $cboEstadoCpms.LlenarSelectEstados();
            $cboTedef.LlenarSelectGD("GDTEDEF");
        }
    }
    return {
        init: function () {
            frmGServicioCmps.index();

            configDTGServicioCmps.reload();
            configDTSeccion.reload();
            configDTSubseccion.reload();
            configDTGCmps.reload();

            evntGServicioCmps.init();
            evntSeccion.init();
            evntSubseccion.init();
            evntCpms.init();
            
            frmGServicioCmps.init();
            frmSeccionCmps.init();
            frmSubseccion.init();
            frmCmps.init();

            configModalGrpSrvco.init();
            configModalSeccion.init();
            configModalSubseccion.init();

            //Combos
            configCboSeccion.init();
            configCboGrpServicio.init();
            configCboSubseccion.init();

            IniEstados.init();
        }
    }



}();
$(() => {
    InitGrupoServicioCmps.init();
})