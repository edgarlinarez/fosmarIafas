var initContratante = function () {

    let $FormContratante = $("#FormularioContratante");
    let $btnNuevoContratante = $("#btnNuevoCntrtnt");
    let $tab_DatosGenerales = $("#DatosGenerales-tab");
    let $tab_Lista = $("#Lista-tab");
    let $codContratante = $("#codContratante")

    //VAR FORMULARIO
    let $contratante = $("#idContratante");
    let $tipDocument = $("#cboTipoDocumento");
    let $numDocument = $("#txtDocumento");
    let $numCIP = $("#txtCIP");
    let $apellPaterno = $("#txtAPaterno");
    let $apellMaterno = $("#txtAMaterno");
    let $apellCasada = $("#txtACasada");
    let $primerNomb = $("#txtPNombre");
    let $segundoNomb = $("#txtSNombre");
    let $fechaNac = $("#txtFNacimiento");
    let $edoCivil = $("#cboECivil");
    let $sexo = $("#cboSexo");
    let $telefono = $("#txtTelefono");
    let $email = $("#txtEmail");
    let $direccion = $("#txtAddress");
    let $departamento = $("#cboPDepartamento");
    let $provincia = $("#cboPProvincia");
    let $distrito = $("#cboPDistrito");
    //INFO ADICIONAL
    let $encabezado = $("#cboEncabezado");
    let $procedencia = $("#cboProcedencia");
    let $alias1 = $("#txtAlias1");
    let $alias2 = $("#txtAlias2");
    let $alerta = $("#CboAlert");

    //BOTONES                 
    var $btnBuscarContr = $(".btn-BContra");
    let $btnGuardarContr = $("#btnGrabarContratante");


    var tablaPersona = {
        objeto: null,
        opciones: {
            filter: false,
            ajax: {
                dataType: "JSON",
                url: "",
                type: "GET",
                data: function (data) {
                    delete data.columns;
                    //TODAVIA NO CONFIGURO ESTO
                    data.gdtprsna = $cboTPersonaNJ.val();
                    data.tipoDocumento = $cbo_TipoDocumento.val();
                    data.NumDocumento = $txtNumDocumento.val();
                    data.buscarNombreApellido = $txtNombreRazon.val();
                    data.estado = 'A';
                    //
                },
                error: function (xhr, error, thrown) {

                }
            },
            columns: [
                {
                    title: "Tipo Persona",
                    data: "gdtprsna",
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Nombres y apellidos /Razón",
                    data: "datos",
                    orderable: false,
                    className: "text-left"
                },
                {
                    title: "Tipo Documento",
                    data: "gddcmnto",
                    width: '2%',
                    orderable: false,
                    className: "text-center"
                },
                {
                    title: "Nro. Documento",
                    data: "ndcmnto",
                    width: '2%',
                    orderable: false,
                    className: "text-center"
                }
            ],
            columnDefs: [
                {
                    targets: "_all",
                    className: 'text-center'    
                }
            ]
        },
        eventos: function () {
            tablaPersona.objeto.on("click", "tr", function () {
                var data = tablaPersona.objeto.row(this).data();
            })
        },
        reload: function () {
            this.objeto.ajax.reload();
        },
        inicializador: function () {
            
        }
    }

    var funcionesContratante = {
        NuevoContratante: function () {
            $tab_DatosGenerales.removeClass("disabled");
            $FormContratante.trigger("reset");
            $FormContratante.AgregarCamposDefectoAuditoria();
            $FormContratante.DeshabilitarCamposAuditoria();
            $tab_DatosGenerales.click();
        }
    }

    var eventosIncrustados = {
        botonNuevoContratante: function () {
            $btnNuevoContratante.on("click", function () {
                funcionesContratante.NuevoContratante();
            });
        },
        botonBuscarContratante: function () {
            $btnBuscarContr.click(function () {
                
            })    
        },
        tap_listaContratante: function () {
            $tab_Lista.on("click", function () {
                $tab_DatosGenerales.addClass("disabled");
                $tab_Lista.removeClass("disabled");
                $codContratante.val("");
            });    
        },
        init: function () {
            eventosIncrustados.botonNuevoContratante();
            eventosIncrustados.tap_listaContratante();
            eventosIncrustados.botonBuscarContratante();
        }
    }

    return {
        inicializar: function () {
            eventosIncrustados.init();
        }
    }
}();
$(function () {
    initContratante.inicializar();
});