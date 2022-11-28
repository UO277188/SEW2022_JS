"use strict"
class Programa {
    constructor() {
        this.apikey = "2f6c153acca6460b87a4f3d98f27d1d4";
        this.unidadesPeso = "&units=metric";
        this.url = "";
    }

    obtenerPrecio() {
        this.configurarURL();
        this.cargarDatos();
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
                let onzas = $("input[type='number']").val();
                let precio = onzas / datos.rates.XAG;

                let parrafoPrecio = $('h2').next('p');
                if(parrafoPrecio.length==0) {
                    var elemento = document.createElement('p');
                    elemento.innerHTML = precio;
                    $('h2').after(elemento);
                }else {
                    parrafoPrecio.html(precio);
                }
            },
            error: function () {
                $("p").text("Error al obtener los datos");
            }
        });
    }
}

var programa = new Programa();