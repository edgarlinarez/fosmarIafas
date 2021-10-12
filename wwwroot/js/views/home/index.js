var inifechayhora = function () {
    var $lblfecha = $("#lblfecha");
    var $lblhora = $("#lblhora");

    function fechayhora() {
        var fecha = new Date();
        var dd = fecha.getDate();
        var mm = fecha.getMonth() + 1;
        var yy = fecha.getFullYear();
        var hh = fecha.getHours();
        var mn = fecha.getMinutes();
        var ap = hh >= 12 ? 'PM' : 'AM';
        if (dd < 10) { dd = '0' + dd; }
        if (mm < 10) { mm = '0' + mm; }
        if (hh < 10) { hh = '0' + hh; }
        if (mn < 10) { mn = '0' + mn; }
        $lblfecha.text(dd + '/' + mm + '/' + yy);
        $lblhora.text(hh + ':' + mn + ' ' + ap);

    }

    var IniInicio = {
        init: function () {
            fechayhora();
        }
    };
    return {
        init: function () {
            IniInicio.init();
        }
    };
}();

$(function () {
    inifechayhora.init();
});