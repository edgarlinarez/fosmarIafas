$.ajax({
    url: '/obtener-sucursales-usuario-logueado',
    type: "Get"
})
    .done(function (result) {
        $.each(result, function () {
            $(".select-sucursal-header").append($("<option />").val(this.idscrsl).text(this.nscrsl));
        });
    });
$(".select-sucursal-header-1").on("change", function () {
    var id = $(this).val();
    $.ajax({
        url: '/guardar-sucursal-seleccionada',
        type: "POST",
        data: {
            id: id
        }
    })
        .done(function () {
            window.location.reload();
        });
});
