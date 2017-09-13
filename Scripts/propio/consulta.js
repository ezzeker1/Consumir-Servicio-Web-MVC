function Accion() {
    var item = Mapper();
    var tdocumento = $("#IdTDocumento").val();
    var mail = $("#mail").val();
    if (item != "" && mail != "" && tdocumento != "") {
        $("#clickme").attr('disabled', 'disabled');
        $.ajax({
            url: "Cotizacion/Consulta",
            type: "GET",
            data: { item: item, tdocumento: tdocumento, mail: mail },
            success: function (data) {
              
                $("#renderBody").html(data);
                $("#clickme").removeAttr('disabled');
            }
        });
    } else {

        alert("Debe de ingresar el DNI de documento y Email!!!...");

    }
};
function Mapper() {
    var obj = 1;
    obj = $("#dni").val();
    return obj;
};