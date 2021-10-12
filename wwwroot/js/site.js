jQuery.extend(jQuery.validator.messages, {
    required: "Campo requerido.",
    maxlength: jQuery.validator.format("Por favor, no ingresar más de {0} caracteres."),
    max: jQuery.validator.format("Por favor, ingresar un valor menor o igual a {0}."),
    min: jQuery.validator.format("Por favor, ingresar un valor mayor o igual a {0}."),
    equalTo: jQuery.validator.format("Por favor, escriba lo mismo."),
    //email: jQuery.validator.format("Debes ingresar un correo electrónico válido."),
    text: jQuery.validator.format("Debes ingresar un correo electrónico válido."),
    digits: "Por favor solo ingresar dígitos",
    number: "Por favor ingresar un número válido.",
    minlength: "Por favor ingresar al menos {0} carácteres.",
});

/*$.validator.addMethod("alfanumerico", function (value, element) {
    return (/^[0-9a-zA-Z\sáéíóúñÑÁÉÍÓÚüÜ ]+$/).test(value);

}, "Por favor ingresar caracteres alfanumericos.");*/

$.validator.addMethod("longitudexacta", function (value, element, param) {
    return this.optional(element) || value.length == param;
}, $.validator.format("Por favor ingresar {0} caracteres."));

$.validator.addMethod("sololetras", function (value, element) {
    return (/^[a-zA-Z\sáéíóúñÑÁÉÍÓÚäëïöüÄËÏÖÜ]+$/).test(value);
    // --or leave a space here ^^
}, "Por favor ingresar solo letras.");

//$.validator.addMethod("sololetrasyespacios", function (value, element) {
//    return (/^[a-zA-Z\sáéíóúñÑÁÉÍÓÚäëïöüÄËÏÖÜ ]+$/).test(value);
//}, "Por favor ingresar solo letras y espacios.");

$.validator.addMethod("solonumeros", function (value, element) {
    return (/^[0-9]+$/).test(value);
}, "Por favor ingresar solo números.");

function validaFechasIngresadas() {
    var $sitMil = $('#cboSMilitar');
    var $fIngreso = $('#txtFIngreso');
    var $fDisponibilidad = $('#txtFDisponibilidad');
    var $fTermino = $('#txtFTermino');
    var $fBaja = $('#txtFBaja');

    if ($sitMil.val() == 1 || $sitMil.val() == 3) {
        //EVALUO SI TIENE FECHA DE DISPONIBILIDAD
        if ($fDisponibilidad.val() && ($fDisponibilidad.val()).length > 0) {
            if (!$fTermino.val() && ($fTermino.val()).length == 0) {
                //TERMINO DISPONIOBILIDAD
                $fTermino.addClass("error");
                $fTermino.attr('required', true);

            } else {
                $fDisponibilidad.removeClass("error");
                $fDisponibilidad.attr('required', false);
                $fTermino.removeClass("error");
                $fTermino.attr('required', false);
            }
        } else {
            if ($fTermino.val() && ($fTermino.val()).length > 0) {
                //TERMINO DISPONIOBILIDAD
                $fDisponibilidad.addClass("error");
                $fDisponibilidad.attr('required', true);
            } else {
                $fDisponibilidad.removeClass("error");
                $fDisponibilidad.attr('required', false);
                $fTermino.removeClass("error");
                $fTermino.attr('required', false);
            }
        }
    }


    var fIngreso = $('#txtFIngreso').val();
    var fDisponibilidad = $('#txtFDisponibilidad').val();
    var fTerminoDisp = $('#txtFTermino').val();
    var fBaja = $('#txtFBaja').val();
    var sitMil = $('#cboSMilitar').val();
    $cboPensionable = $("#cboPensionable");
}

function FechasCorrectas() {
    var $fIngreso = $('#txtFIngreso');
    var $fDisponibilidad = $('#txtFDisponibilidad');
    var $fTermino = $('#txtFTermino');
    var $fBaja = $('#txtFBaja');

    if ($fIngreso.hasClass("error") ||
        $fDisponibilidad.hasClass("error") ||
        $fTermino.hasClass("error") ||
        $fBaja.hasClass("error")) {
        return false;
    }
    if ($('#mgrd0').text() ||
        $('#mgrd1').text() ||
        $('#mgrd2').text() ||
        $('#mgrd3').text()) {
        return false;
    }
    return true;
}

function calcConjuntoFecha(difdia, difmes, difaño, dia1, dia2, mes1, mes2, año1, año2) {

    var tipoMes;

    if (difmes < 0) {
        difaño--;
        difmes = difmes + 12;

    }
    if (difdia < 0) {
        if (difmes <= 0) {
            difaño--;
            difmes = difmes + 11;
        } else {
            difmes--;
        }
        switch (mes1) {
            case "01":
            case "03":
            case "05":
            case "07":
            case "08":
            case "10":
            case "12":
                diaparcial = 31 - dia1;
                difdia = parseInt(dia2) + diaparcial;
                break;
            case "04":
            case "06":
            case "09":
            case "11":
                diaparcial = 30 - dia1
                difdia = parseInt(dia2) + diaparcial;
                break;
            case "02":
                if (año1 == año2 && año1 % 4 == 0) {
                    diaparcial = 29 - dia1;
                } else {
                    diaparcial = 28 - dia1;
                }
                difdia = parseInt(dia2) + diaparcial;

                break;
        }
    }
    switch (parseInt(mes2)) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            tipoMes = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            tipoMes = 30;
            break;
        case 2:
            if (año1 == año2 && año1 % 4 == 0) {
                tipoMes = 29;
            } else {
                tipoMes = 28;
            }
            break;
    }
    var arregloFecha = [difdia, difmes, difaño, tipoMes]

    return (arregloFecha)

}

function calcTimeServ(f1, f2, f3, f4) {

    var fechaCon1 = f1;
    var fechaCon2 = f2;
    var fechaCon3 = f3;
    var fechaCon4 = f4;
    var annioServ;
    var mesServ;
    var diaServ;
    var annioServPart;
    var mesServPart;
    var diaServPart;
    var fCon1, fConAnnio1, fConMes1, fConDia1;
    var fCon2, fConAnnio2, fConMes2, fConDia2;
    var fCon3, fConAnnio3, fConMes3, fConDia3;
    var fCon4, fConAnnio4, fConMes4, fConDia4;
    /*var dia1, dia2;*/

    var factual = new Date();//fecha Hoy

    var annioActual = parseInt(factual.getFullYear());
    var mesActual = parseInt(factual.getMonth()) + 1;
    var diaActual = parseInt(factual.getDate());

    fCon1 = fechaCon1.split("/");
    fConAnnio1 = fCon1[2];
    fConMes1 = fCon1[1];
    fConDia1 = fCon1[0];

    if (fechaCon2) {
        fCon2 = fechaCon2.split("/");
        fConAnnio2 = fCon2[2];
        fConMes2 = fCon2[1];
        fConDia2 = fCon2[0];
    }

    if (fechaCon3) {
        fCon3 = fechaCon3.split("/");
        fConAnnio3 = fCon3[2];
        fConMes3 = fCon3[1];
        fConDia3 = fCon3[0];
    }

    if (fechaCon4) {
        fCon4 = fechaCon4.split("/");
        fConAnnio4 = fCon4[2];
        fConMes4 = fCon4[1];
        fConDia4 = fCon4[0];
    }

    var dia2Per;
    var dia2PerPart;
    var mes2Per;
    var mes2PerPart;
    var año2Per;
    var año2PerPart;
    if (!fechaCon2 && !fechaCon3 && !fechaCon4) { //Ingreso - Actual
        annioServ = annioActual - fConAnnio1;
        mesServ = mesActual - fConMes1;
        diaServ = diaActual - fConDia1;
        dia2Per = diaActual;
        mes2Per = mesActual;
        año2Per = annioActual;
    } else if (!fechaCon3 && !fechaCon4) { //Ingreso - Disponiblidad
        annioServ = fConAnnio2 - fConAnnio1;
        mesServ = fConMes2 - fConMes1;
        diaServ = fConDia2 - fConDia1;
        dia2Per = fConDia2;
        mes2Per = fConMes2;
        año2Per = fConAnnio2;
    } else if (!fechaCon2 && !fechaCon3) { // Ingreso - Retiro
        annioServ = fConAnnio4 - fConAnnio1;
        mesServ = fConMes4 - fConMes1;
        diaServ = fConDia4 - fConDia1;
        dia2Per = fConDia4;
        mes2Per = fConMes4;
        año2Per = fConAnnio4;
    } else if (!fechaCon4) { //Ingreso - Disponibilada - Termino - Acutal
        var annioServ = fConAnnio2 - fConAnnio1;
        var annioServPart = annioActual - fConAnnio3;
        var mesServ = fConMes2 - fConMes1;
        var mesServPart = mesActual - fConMes3;
        var diaServ = fConDia2 - fConDia1;
        var diaServPart = diaActual - fConDia3;
        dia2Per = fConDia2;
        dia2PerPart = diaActual;
        mes2Per = fConMes2;
        mes2PerPart = mesActual;
        año2Per = fConAnnio2;
        año2PerPart = annioActual;
    } else {//Ingreso - Disponibilada - Termino - Retiro
        var annioServ = fConAnnio2 - fConAnnio1;
        var annioServPart = fConAnnio4 - fConAnnio3;
        var mesServ = fConMes2 - fConMes1;
        var mesServPart = fConMes4 - fConMes3;
        var diaServ = fConDia2 - fConDia1;
        var diaServPart = fConDia4 - fConDia3;
        dia2Per = fConDia2;
        dia2PerPart = fConDia4;
        mes2Per = fConMes2;
        mes2PerPart = fConMes4;
        año2Per = fConAnnio2;
        año2PerPart = fConAnnio4;
    }
    var arregloFechaPart1;
    var arregloFechaPart2;
    var arregloFechaFinal;

    if (annioServPart >= 0) {
        arregloFechaPart1 = calcConjuntoFecha(diaServ, mesServ, annioServ, fConDia1, dia2Per, fConMes1, mes2Per, fConAnnio1, año2Per)
        arregloFechaPart2 = calcConjuntoFecha(diaServPart, mesServPart, annioServPart, fConDia3, dia2PerPart, fConMes3, mes2PerPart, fConAnnio3, año2PerPart)

        var añoPart;
        var mesPart;

        añoPart = arregloFechaPart1[2] + arregloFechaPart2[2]
        mesPart = arregloFechaPart1[1] + arregloFechaPart2[1]
        diaPart = arregloFechaPart1[0] + arregloFechaPart2[0]

        if (diaPart >= arregloFechaPart1[3]) {
            mesPart++;
            diaPart = diaPart - arregloFechaPart1[3];
        }

        if (mesPart > 11) {
            añoPart++
            mesPart = mesPart - 12
        }

        arregloFechaFinal = [diaPart, mesPart, añoPart];
    } else {
        arregloFechaFinal = calcConjuntoFecha(diaServ, mesServ, annioServ, fConDia1, dia2Per, fConMes1, mes2Per, fConAnnio1, año2Per)
    }


    return arregloFechaFinal;
}

function mayorFechaActual(valFecha, fecAdd, factual) {
    fechaCon = fecAdd;//fecha Consultada   
    var fCon = fechaCon.split("/");
    var fConAnnio = fCon[2];
    var fConMes = fCon[1];
    var fConDia = fCon[0];


    var annioActual;
    var mesActual;
    var diaActual;
    if (factual) {
        var actualSplit = factual.split("/");
        annioActual = actualSplit[2];
        mesActual = actualSplit[1];
        diaActual = actualSplit[0];
    } else {
        factual = new Date();//fecha Hoy
        annioActual = parseInt(factual.getFullYear());
        mesActual = parseInt(factual.getMonth()) + 1;
        diaActual = parseInt(factual.getDate());
    }

    var annioServ = annioActual - fConAnnio;
    var mesServ = mesActual - fConMes;

    if (mesServ < 0 || (mesServ === 0 && diaActual < fConDia)) {
        annioServ--;
    }
    if (annioServ < 0) {
        valFecha = true;
    }
    return valFecha;
}

$.extend($.fn.dataTable.defaults, {
    searching: true,
    dom: "<'top'if>rt<'bottom'pl><'clear'>",
    language: {
        "sProcessing": "<div class='m-blockui' style='display: inline; background: none; box-shadow: none;'><span>Cargando datos...</span><span><div class='m-loader  m-loader--brand m-loader--lg'></div></span></div>",
        "sLengthMenu": "Mostrar _MENU_ registros",
        "sZeroRecords": "No se encontraron resultados",
        "sEmptyTable": "Ningún dato disponible en esta tabla",
        "sInfo": "Mostrando _START_ - _END_ de _TOTAL_ registros",
        "sInfoEmpty": "Mostrando 0 - 0 de 0 registros",
        "sInfoFiltered": "(filtrado de _MAX_ registros)",
        "sInfoPostFix": "",
        "sSearch": "Buscar:",
        "sUrl": "",
        "pagingType": "simple_numbers",
        "sInfoThousands": ",",
        "sLoadingRecords": "Cargando...",
        "oPaginate": {
            "sFirst": "<i class='la la-angle-double-left'></i>",
            "sLast": "<i class='la la-angle-double-right'></i>",
            "sNext": "<i class='la la-angle-right'></i>",
            "sPrevious": "<i class='la la-angle-left'></i>"
        },
        "oAria": {
            "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        }
    },
    lengthMenu: [10, 25, 50],
    lengthChange: true,
    orderMulti: false,
    pagingType: "full_numbers",
    processing: true,
    responsive: true,
    serverSide: true,
    info: true,
    order: [],
    filter: true,
    pageLength: 10,
    paging: true,
    fixedColumns: true
});

//VALIDACIONES INPUTS

var funcionFechas2 = {
    validarFechaMayor: function (valorBool2, fecha1, fecha2) {
        fecha1.setHours(0, 0, 0, 0);
        fecha2.setHours(0, 0, 0, 0);
        if (fecha1.getTime() == fecha2.getTime() || fecha1 > fecha2) {
            valorBool2 = true;
        } else {
            valorBool2 = false;
        }
        return valorBool2;
    }
}

function FuncionAlfanumerico(e) {
    var keyCode = e.keyCode || e.which;
    var regex = /^[0-9a-zA-Z\sáéíóúñÑÁÉÍÓÚäëïöüÄËÏÖÜ ]+$/;
    var isValid = regex.test(String.fromCharCode(keyCode));
    return isValid;
}

function validarEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

function validarPJNDocumento(doc) {
    if ($txtPJNDocumento.val() == "") {
        return true
    } else {
        var regex = /20[0-9]/;
        return regex.test(doc) ? true : false;
    }
}

function validarRuc20(doc) {
    if (doc == "") {
        return true
    } else {
        var digitos = doc.split("");
        if (digitos[0] == 2 && digitos[1] == 0) {
            var regex = /20[0-9]/;
            return regex.test(doc) ? true : false;
        } else {
            return false;
        }
    }
}

function validarRuc10(doc) {

    if ($("#cboDocumento").find('option:selected').val() == 8) {
        if (doc == "") {
            return true
        } else {
            var digitos = doc.split("");
            if (digitos[0] == 1 && digitos[1] == 0) {
                var regex = /10[0-9]/;
                return regex.test(doc) ? true : false;
            } else {
                return false;
            }
        }
    } else {
        return true;
    }
    
}

jQuery.validator.addMethod("ruc_10", function (value, element) {
    return this.optional(element) || validarRuc10(value);
}, "El documento debe iniciar en 10.");

jQuery.validator.addMethod("ruc_20", function (value, element) {
    return this.optional(element) || validarRuc20(value);
}, "El documento debe iniciar en 20.");

$(".validoEmail").keypress(function (e) {
    return validarEmail(e)
});

$(".alfanumerico").keypress(function (e) {//LETRAS NUMEROS Y ESPACIO
    return FuncionAlfanumerico(e);
});

$(".alfaNumCharEsp").keypress(function (e) {//LETRAS NUMEROS CARACTERES ESPECIFICOS Y ESPACIO
    var keyCode = e.keyCode || e.which;
    var regex = /^[A-Za-z0-9\-_()., \sáéíóúñÑÁÉÍÓÚäëïöüÄËÏÖÜ]+$/;
    var isValid = regex.test(String.fromCharCode(keyCode));
    return isValid;
});

$(".formatopaginaWeb").keypress(function (e) {//LETRAS NUMEROS CARACTERES ESPECIFICOS Y ESPACIO
    var keyCode = e.keyCode || e.which;
    var regex = /^[A-Za-z0-9\.\sáéíóúñÑÁÉÍÓÚäëïöüÄËÏÖÜ]+$/;
    var isValid = regex.test(String.fromCharCode(keyCode));
    return isValid;
});

$('.formatoFechas').bind('keypress', function (event) {
    var thisVal = $(this).val();
    var regex = new RegExp("^[0-9/]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }

    var leng = thisVal.length;
    var reg = new RegExp(/^(((0[13578]|1[02])\-(0[1-9]|[12]\d|3[01])\-((19|[2-9]\d)\d{2}))|((0[13456789]|1[012])\-(0[1-9]|[12]\d|30)\-((19|[2-9]\d)\d{2}))|(02\-(0[1-9]|1\d|2[0-8])\-((19|[2-9]\d)\d{2}))|(02\-29\-((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g);
    if (leng == 10) {
        var isValid = reg.test(thisVal);
        return isValid;
    }
});

$(".sololetras").bind('keypress', function (event) {//LETRAS
    var regex = new RegExp("^[a-zA-Z\sáéíóúñÑÁÉÍÓÚäëïöüÄËÏÖÜ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

$(".sololetrasyespacios").bind('keypress', function (event) {//LETRAS Y ESPACIOS
    var regex = new RegExp("^[a-zA-Z\sáéíóúñÑÁÉÍÓÚäëïöüÄËÏÖÜ ]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

$(".numeroDecimal").change(function () {
    $(this).val(parseFloat($(this).val()).toFixed(2));
});

function FuncionSoloNumeros(event) {
    var regex = new RegExp("^[0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
}

$(".solonumeros").bind('keypress', function (event) {//NUMEROS
    FuncionSoloNumeros(event)
});

$('.text-uppercase').on("change", function () {
    if ($(this).val()){
        $(this).val($(this).val().trim());
    }    
});

$(".text-uppercase").blur("keypress", function () {
    $input = $(this);
    $input.val($input.val().toUpperCase());
});

$(".numeroCaracteres").on('keyup', function () {//CANTIDAD DE CARACTERES USADOS
    var limit = 1000;
    $("#txtDireccionEmp").attr('maxlength', limit);
    var init = $(this).val().length;

    if (init < limit) {
        init++;
        $('.caracteres').text(init + "/1000");
    }
});

jQuery.fn.extend({
    agregarLoading: function () {
        this.html(
            '<div class="loaderbody"><div class="loader-div"><div class="loader-wheel"></div><div class="loader-text"></div></div></div>'
        );
    },
    addLoader: function () {
        this.attr("disabled", true);
        return this.append('<span id="btn-loader" class="spinner-border spinner-border-sm"></span>');
    },
    removeLoader: function () {
        this.attr("disabled", false);
        return this.find("#btn-loader").remove();
    },
    AgregarCamposDefectoAuditoria: function () {
        var $this = this;
        $.ajax({
            url: '/obtener-datos-usuario-logueado',
            type: "Get"
        })
            .done(function (result) {
                $this.find("[name='ID']").val("");
                $this.find("[name='UEDCN']").val(result.uedcn);
                $this.find("[name='UCRCN']").val(result.ucrcn);
                $this.find("[name='GDESTDO']").val("A");
                $this.find("[name='cFCRCN']").val(result.cFCRCN);
                $this.find("[name='cFEDCN']").val(result.cFEDCN);
                $this.find("[name='cFESTDO']").val(result.cFESTDO);
            });
    },
    AgregarCamposAuditoria: function (result) {
        this.find("[name='ID']").val(result.id);
        this.find("[name='ID-d']").val(result.id);
        this.find("[name='UEDCN']").val(result.uedcn);
        this.find("[name='UCRCN']").val(result.ucrcn);
        this.find("[name='GDESTDO']").val(result.gdestdo);
        this.find("[name='cFCRCN']").val(result.cFCRCN);
        this.find("[name='cFEDCN']").val(result.cFEDCN);
        this.find("[name='cFESTDO']").val(result.cFESTDO);
    },
    DeshabilitarCamposAuditoria: function () {
        this.find("[name='ID-d']").attr("disabled", true);
        this.find("[name='UEDCN']").attr("disabled", true);
        this.find("[name='UCRCN']").attr("disabled", true);
        this.find("[name='cFCRCN']").attr("disabled", true);
        this.find("[name='cFEDCN']").attr("disabled", true);
        this.find("[name='cFESTDO']").attr("disabled", true);
    },
    LlenarSelectEstados: function () {
        var $this = this;
        $this.LlenarSelectGD("GDESTDO");
    },
    LlenarSelectGrupoDatos: function (valorgd) {
        var $this = this;
        $.ajax({
            url: '/agrupadatos',
            type: "Get",
            data: { gddescripcion: valorgd }
        })
            .done(function (result) {
                $this.append($("<option />").val('').text("Seleccione"));
                $.each(result, function () {
                    $this.append($("<option />").val(this.vlr1).text(this.nombre));
                });
            });
    },
    LlenarSelectGD: function (cGrupoDto, value, text) {
        var $this = this;
        value = value || "vlR1";
        text = text || "agddtlle";
        var datos = $(JSON.parse(localStorage.getItem('datosCatalogoGD'))).filter(function (i, n) {
            return n.cgdto === cGrupoDto;
        });
        $this.append($("<option />").val('').text("Seleccione"));
        $.each(datos, function (key, item) {
            $this.append($("<option />").val(item[value]).text(item[text]));
        });
    },
    LlenarSelectGDOrdenado: function (cGrupoDto, value, text) {
        function comparando(detalleA, detalleB) {
            let comparison = 0;
            if (detalleA > detalleB) {
                comparison = 1;
            } else if (detalleA < detalleB) {
                comparison = -1;
            }
            return comparison;
        }
        function compare(a, b) {
            ///////////////////COMPARAR POR abreviacion
            const detalleA = a.agddtlle.toUpperCase();
            const detalleB = b.agddtlle.toUpperCase();
            return comparando(detalleA, detalleB);
        }
        function compareDesc(a, b) {
            ///////////////////COMPARAR POR DESCRIPCION
            const detalleA = a.dgddtlle.toUpperCase();
            const detalleB = b.dgddtlle.toUpperCase();
            return comparando(detalleA, detalleB);
        }
        var $this = this;
        value = value || "vlR1";
        text = text || "agddtlle";
        var datos = $(JSON.parse(localStorage.getItem('datosCatalogoGD'))).filter(function (i, n) {
            return n.cgdto === cGrupoDto;
        });
        var newdatos = (text == "agddtlle") ? datos.sort(compare) : datos.sort(compareDesc);
        $this.append($("<option />").val('').text("Seleccione"));
        $.each(newdatos, function (key, item) {
            $this.append($("<option />").val(item[value]).text(item[text]));
        });
    },


    //AGREGAR ORDENAR COMBOS
    LlenarSelectGDFiltrado: function (cGrupoDto, noAgregar, agregar, value, text) {
        function comparando(detalleA, detalleB) {
            let comparison = 0;
            if (detalleA > detalleB) {
                comparison = 1;
            } else if (detalleA < detalleB) {
                comparison = -1;
            }
            return comparison;
        }
        function compare(a, b) {
            ///////////////////COMPARAR POR abreviacion
            const detalleA = a.agddtlle.toUpperCase();
            const detalleB = b.agddtlle.toUpperCase();
            return comparando(detalleA, detalleB);
        }
        function compareDesc(a, b) {
            ///////////////////COMPARAR POR DESCRIPCION
            const detalleA = a.dgddtlle.toUpperCase();
            const detalleB = b.dgddtlle.toUpperCase();
            return comparando(detalleA, detalleB);
        }
        var $this = this;
        value = value || "vlR1";
        text = text || "agddtlle";
        var nuevoNoAgregar = [];
        var datos = $(JSON.parse(localStorage.getItem('datosCatalogoGD'))).filter(function (i, n) {
            if (agregar != undefined && agregar != null) {
                nuevoNoAgregar = noAgregar.filter(function (e) {
                    return e != agregar
                });
            } else {
                nuevoNoAgregar = noAgregar;
            }
            return n.cgdto === cGrupoDto && jQuery.inArray(n.vlR1, nuevoNoAgregar) == -1;
        });
        var newdatos = (text == "agddtlle") ? datos.sort(compare) : datos.sort(compareDesc);
        $this.append($("<option />").val('').text("Seleccione"));
        $.each(newdatos, function (key, item) {
            $this.append($("<option />").val(item[value]).text(item[text]));
        });
    },
    LlenarSelectGrupoDato: function (cGrupoDto, value, text) {
        var $this = this;
        value = value || "vlR1";
        text = text || "agddtlle";
        $.get("obtenerGrupoDatos", { cgdto: cGrupoDto })
            .done(function (data) {
                $this.append($("<option />").val('').text("Seleccione"));
                $.each(data, function (key, item) {
                    $this.append($("<option />").val(item[value]).text(item[text]));
                });
            });
    },
    LlenarSelectPais: function () {
        var $this = this;
        var value = "cps";
        var text = "dprvnca";
        var datos = $(JSON.parse(localStorage.getItem('paises')));
        /*.filter(function (i, n) {
        return n.cgdto === cGrupoDto;
    });*/
        $this.append($("<option />").val('').text("Seleccione"));
        $.each(datos, function (key, item) {
            $this.append($("<option />").val(item[value]).text(item[text]));
        });
    },
    maxlengthDocumento: function (options) {
        this.on("change", function () {
            let config = options;
            let objAfectado = document.getElementById(config.obj);
            objAfectado.value = '';
            var vlor = this.value;
            var datos = $(JSON.parse(localStorage.getItem('datosCatalogoGD'))).filter(function (i, n) {
                return n.cgdto === "GDDCMNTO" && n.vlR1 == vlor;
            });
            if (datos[0]) {
                objAfectado.minLength = 0;
                objAfectado.maxLength = 0;
                objAfectado.maxLength = datos[0].vlR2;
                objAfectado.minLength = datos[0].vlR2;
            }

            if (vlor == 3) {//SI es pasaporte permitir letras
                objAfectado.classList.add("alfanumerico");
                objAfectado.classList.remove("solonumeros");
                $("#" + config.obj).unbind('keypress');
                $("#" + config.obj).keypress(function (e) {//LETRAS NUMEROS Y ESPACIO
                    return FuncionAlfanumerico(e);
                });
            } else {
                objAfectado.classList.add("solonumeros");
                objAfectado.classList.remove("alfanumerico");
                $("#" + config.obj).unbind('keypress');
                $("#" + config.obj).keypress(function (e) {//LETRAS NUMEROS Y ESPACIO
                    return FuncionSoloNumeros(e);
                });
            }
        });
    }

});

var cargarCatalogoGD = () => {
    $.get("../../obtenercatalogoGD")
        .done(function (data) {
            var datos = JSON.stringify(data);
            localStorage.setItem("datosCatalogoGD", datos);
        });
}
cargarCatalogoGD();




function parseXML(xmlString) {
    var parser = new DOMParser();
    // Parse a simple Invalid XML source to get namespace of <parsererror>:
    var docError = parser.parseFromString('INVALID', 'text/xml');
    var parsererrorNS = docError.getElementsByTagName("parsererror")[0].namespaceURI;
    // Parse xmlString:
    // (XMLDocument object)
    var doc = parser.parseFromString(xmlString, 'text/xml');
    if (doc.getElementsByTagNameNS(parsererrorNS, 'parsererror').length > 0) {
        throw new Error('Error parsing XML');
    }
    return doc;
}

function sXMLToJson(cadena) {
    var json = xmlToJson.parse(cadena);
    //console.log(json);
    return json;
};
function isObjEmpty(obj) {
    return Object.keys(obj).length === 0;
}

$('.collapsed').on('click', function () {
    $this = $(this);

    if ($this.hasClass("mostrarA")) {
        this.nextElementSibling.classList.remove('show');
        this.classList.remove('mostrarA')
    } else {
        this.nextElementSibling.classList.add('show');
        this.classList.add('mostrarA')
    }
});


/*---------VALIDACION DECIMALES----------------*/
var value_befort = "";
$(document).on('keypress', '.decimales', function (event) {
    var value_befort_key = $(this).val();
    var re = /^[0-9]*(\.[0-9]{0,4})?$/;
    var OK = re.exec(value_befort_key);
    if (!OK) {
        return false;
    } else {
        value_befort = value_befort_key;
        return true;
    }
});
$(document).on('keyup', '.decimales', function (event) {
    var value_after = $(this).val();
    var re = /^[0-9]*(\.[0-9]{0,4})?$/;
    var OK = re.exec(value_after);
    if (!OK) {
        value_befort = value_befort;
        $(this).val(value_befort);
        return false;
    } else {
        value_befort = value_after;
        return true;
    }
});
$(document).on('blur', '.decimales', function (event) {
    var value_after = $(this).val();
    var re = /^[0-9]*(\.[0-9]{0,4})?$/;
    var OK = re.exec(value_after);
    if (!OK) {
        value_befort = value_befort;
        $(this).val(value_befort);
        return false;
    } else {
        value_befort = value_after;
        return true;
    }
});
/*----------------------------------------*/

/*DESACTIVAR EL AUTOCOMPLETE DEL NAVEGADOR*/
$(":input").attr("autocomplete", "off");
/*----------------------------------------*/

/*FORMATO DE COMAS EN NÚMEROS*/

function FormatoComas(data) {
    if (data != "") {
        data = parseFloat(data);
        var numero = data.toFixed(2);
        var parts = numero.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        var costo = parts.join(".");
        return costo;
    } else {
        return "";
    }
}
/*----------------------------------------*/
