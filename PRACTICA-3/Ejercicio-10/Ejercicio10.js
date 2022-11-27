class Programa {
    constructor() {
        this.apikey = "2f6c153acca6460b87a4f3d98f27d1d4";
        this.unidadesPeso = "&units=metric";
        this.url = "";
    }

    obtenerPrecio() {
        this.configurarURL();
    }

    configurarURL() {
        let fecha = $("input[type='date']").val();
        if (fecha == "")
            fecha = "latest";

        let moneda = $("select[name='moneda']").val();

        this.url = "https://api.metalpriceapi.com/v1/" + fecha
            + "?api_key=" + this.apikey
            + "&base=" + moneda
            + "&currencies=XAG";
    }

    cargarDatos() {
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function (datos) {

            },
            error: function () {
                $("p").text("Error al obtener los datos");
            }
        });
    }
}

var programa = new Programa();