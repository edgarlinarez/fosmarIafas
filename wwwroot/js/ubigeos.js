//PAIS: PERU -> 169
//DEPT: LIMA -> 15
//PROV: LIMA -> 1501
//DIST: LIMA CERCADO -> 150101


function LlenarSelectDepartamento(options) {
    var eDefault = {
        codDepartamento: '',
        codProvincia: '',
        codUbigeo: '',
        codPais: '169',
        controles: {
            departamento: $(".select-departamento"),
            provincia: $(".select-provincia"),
            distrito: $(".select-distrito")
        },
    }
    var settings = $.extend(eDefault, options);
    var $departamento = settings.controles.departamento;

    $provincia = settings.controles.provincia;
    $distrito = settings.controles.distrito;

    var $ubigeo = $(JSON.parse(localStorage.getItem('ubigeo')));

    //EliminarOpcionesProvincia();
    //EliminarOpcionesDistrito();

    $departamento.append($("<option />").val('').text("Cargando..."));
    $departamento.attr("disabled", true);
    //$provincia.append($("<option />").val('').text("Cargando..."));
    //$provincia.attr("disabled", true);
    //$distrito.append($("<option />").val('').text("Cargando..."));
    //$distrito.attr("disabled", true);

    $.each($ubigeo, function (key, item) {
        $departamento.append($("<option />").val(item["cdgo"]).text(item["dscrpcn"]));
    });
    if (!(!settings.codDepartamento)) {
        $departamento.val(settings.codDepartamento);
    } else {
        $departamento.val("");
    }

    $departamento.children('option[value=""]').text("Seleccione");
    $departamento.attr("disabled", false);
    EventoCambioSelectDepartamento(settings);
};
function LlenarSelectProvincia(options) {
    var eDefault = {
        codDepartamento: '',
        codProvincia: '',
        codUbigeo: '',
        codPais: '169',
        controles: {
            departamento: $(".select-departamento"),
            provincia: $(".select-provincia"),
            distrito: $(".select-distrito")
        },
    }
    var settings = $.extend(eDefault, options);
    var $provincia = settings.controles.provincia;
    var $distrito = settings.controles.distrito;
    EliminarOpcionesProvincia(settings);
    EliminarOpcionesDistrito(settings);
    if (settings.codDepartamento) {
        $provincia.append($("<option />").val('').text("Cargando..."));
        $.get(`/obtener-provincias?codigoDpto=${settings.codDepartamento}`)
            .done(function (data) {
                $.each(data, function (key, item) {
                    $provincia.append($("<option />").val(item["cdgo"]).text(item["dscrpcn"]));
                });
                if (!(!settings.codProvincia)) {
                    $provincia.val(settings.codProvincia);
                } else {
                    $provincia.val("");
                }
                //$distrito.val("");
                //$distrito.prop("disabled", false);
                EventoCambioSelectProvincia(settings);
                $provincia.children('option[value=""]').text("Seleccione");
                $provincia.attr("disabled", false);
            });
    } else {
        $provincia.append($("<option />").val('').text("Seleccione"));
        $provincia.val("");
        $provincia.attr("disabled", true);
    }
    $distrito.append($("<option />").val('').text("Seleccione"));
    $distrito.val("");
    $distrito.attr("disabled", true);
};
function LlenarSelectDistrito(options) {
    var eDefault = {
        codDepartamento: '',
        codProvincia: '',
        codUbigeo: '',
        codPais: '169',
        controles: {
            departamento: $(".select-departamento"),
            provincia: $(".select-provincia"),
            distrito: $(".select-distrito")
        },
    }
    var settings = $.extend(eDefault, options);
    var $distrito = settings.controles.distrito;

    EliminarOpcionesDistrito(settings);
    $distrito.prop("disabled", true);
    $distrito.append($("<option />").val('').text("Cargando..."));

    var urldistrito = "";
    $distrito.val("");
    urldistrito = `/obtener-distritos?codigoProvincia=${settings.codProvincia}&cps=${settings.codPais}`;
    if ((settings.codPais != 51 && settings.codPais != 169) ||
        (settings.codPais == 51 || settings.codPais == 169 && settings.codProvincia != "")) {
        $.get(urldistrito).done(function (data) {
            $.each(data, function (key, item) {
                $distrito.append($("<option />").val(item["cdgo"]).text(item["dscrpcn"]));
            });

            var seleccionar = data.find(element => element.cdgo == settings.codUbigeo);
            if (seleccionar != undefined && seleccionar != 0 && seleccionar != "") {
                // esta linea importante para darle el ms necesario para cargar el select
                $distrito.val(settings.codUbigeo);
            } else {
                $distrito.val("");
            }
            $distrito.children('option[value=""]').text("Seleccione");
            $distrito.prop("disabled", false);
        });
    }
    else {
        $distrito.children('option[value=""]').text("Seleccione");
        $distrito.prop("disabled", true);
    }
};




function EventoCambioSelectDepartamento(options) {
    var eDefault = {
        codDepartamento: '',
        codProvincia: '',
        codUbigeo: '',
        codPais: '169',
        controles: {
            departamento: $(".select-departamento"),
            provincia: $(".select-provincia"),
            distrito: $(".select-distrito")
        },
    }
    var settings = $.extend(eDefault, options);

    var $departamento = settings.controles.departamento;
    var $distrito = settings.controles.distrito;
    var $provincia = settings.controles.provincia;

    $departamento.unbind('change');
    $departamento.on("change", function () {
        //$distrito.val("").prop("disabled", true);
        //$provincia.val("").prop("disabled", true);
        var codigoDepartamento = $(this).val();
        var opts = {
            codDepartamento: codigoDepartamento,
            controles: {
                departamento: settings.controles.departamento,
                provincia: settings.controles.provincia,
                distrito: settings.controles.distrito
            },
        }
        if (codigoDepartamento) {
            LlenarSelectProvincia(opts);
        } else {
            settings.controles.provincia.val("");
            settings.controles.provincia.attr("disabled", true);
            settings.controles.distrito.val("");
            settings.controles.distrito.attr("disabled", true);
        }
    });
};
function EventoCambioSelectProvincia(options) {
    var eDefault = {
        codDepartamento: '',
        codProvincia: '',
        codUbigeo: '',
        codPais: '169',
        controles: {
            departamento: $(".select-departamento"),
            provincia: $(".select-provincia"),
            distrito: $(".select-distrito")
        },
    }
    var settings = $.extend(eDefault, options);
    var $provincia = settings.controles.provincia;
    var $distrito = settings.controles.distrito;
    $provincia.unbind('change');
    $provincia.on("change", function () {
        var codigoProvincia = $(this).val();
        settings.codProvincia = codigoProvincia;
        if (codigoProvincia) {
            LlenarSelectDistrito(settings);
        } else {
            $distrito.val("");
            $distrito.attr("disabled", true);
        }
    });
};


function EliminarOpcionesProvincia(options) {
    var eDefault = {
        codDepartamento: '',
        codProvincia: '',
        codUbigeo: '',
        codPais: '169',
        controles: {
            departamento: $(".select-departamento"),
            provincia: $(".select-provincia"),
            distrito: $(".select-distrito")
        },
    }
    var settings = $.extend(eDefault, options);
    settings.controles.provincia.empty();
};
function EliminarOpcionesDistrito(options) {
    var eDefault = {
        codDepartamento: '',
        codProvincia: '',
        codUbigeo: '',
        codPais: '169',
        controles: {
            departamento: $(".select-departamento"),
            provincia: $(".select-provincia"),
            distrito: $(".select-distrito")
        },
    }
    var settings = $.extend(eDefault, options);
    settings.controles.distrito.empty();
};


function cargarUbigeo(options) {
    var eDefault = {
        codDepartamento: '',
        codProvincia: '',
        codUbigeo: '',
        codPais: '169',
        controles: {
            departamento: $(".select-departamento"),
            provincia: $(".select-provincia"),
            distrito: $(".select-distrito")
        },
    }
    var settings = $.extend(eDefault, options);
    $departamento = settings.controles.departamento;


    var storageUbigeo;
    if (settings.refresh) {
        storageUbigeo = null;
        $departamento.empty();
    } else {
        storageUbigeo = JSON.parse(localStorage.getItem('ubigeo'));
    }

    if (storageUbigeo != null && storageUbigeo != undefined) {
        LlenarSelectDepartamento(settings);
    } else {
        $.get(`/obtener-departamentos?cps=${settings.codPais}`)
            .done(function (data) {
                var datos = JSON.stringify(data);
                localStorage.setItem("ubigeo", datos);
                LlenarSelectDepartamento(settings);
            });
    }
}
function cargarUbigeos(options) {
    var eDefault = {
        codDepartamento: '',
        codProvincia: '',
        codUbigeo: '',
        codPais: '169',
        controles: {
            departamento: $(".select-departamento"),
            provincia: $(".select-provincia"),
            distrito: $(".select-distrito")
        },
    }
    var settings = $.extend(eDefault, options);
    if (settings.codUbigeo) {
        var codigoDepartamento = settings.codUbigeo.substring(0, 2);
        var codigoProvincia = settings.codUbigeo.substring(0, 4);
        settings.codDepartamento = codigoDepartamento;
        settings.codProvincia = codigoProvincia;
    }

    LlenarSelectDepartamento(settings);

    LlenarSelectProvincia(settings);
    LlenarSelectDistrito(settings);
}


var cargarPaises = () => {
    var storagePais = JSON.parse(localStorage.getItem('paises'));
    /*if (storagePais != null && storagePais != undefined) {
        localStorage.setItem("paises", JSON.stringify(storagePais));
    }
    else {*/
    $.get("/obtener-paises")
        .done(function (data) {
            var datos = JSON.stringify(data);
            localStorage.setItem("paises", datos);
        });
    //}
}



cargarPaises();