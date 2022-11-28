"use strict"
class Programa {
    constructor() {
        this.apikey = "bf1a7b5c5136c085c015a1ed1f2ba907";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "";
        this.ciudad = "";
    }

    cargarDatos() {
        $.ajax({
            dataType: "xml",
            url: this.url,
            method: 'GET',
            success: function (datos) {
                var zonaHoraria = new Date().getTimezoneOffset();

                var amanecer = $('sun', datos).attr("rise");
                var amanecerMiliSeg1970 = Date.parse(amanecer);
                amanecerMiliSeg1970 -= zonaHoraria * 60 * 1000;
                var amanecerLocal = (new Date(amanecerMiliSeg1970)).toLocaleTimeString("es-ES");

                var oscurecer = $('sun', datos).attr("set");
                var oscurecerMiliSeg1970 = Date.parse(oscurecer);
                oscurecerMiliSeg1970 -= zonaHoraria * 60 * 1000;
                var oscurecerLocal = (new Date(oscurecerMiliSeg1970)).toLocaleTimeString("es-ES");

                var horaMedida = $('lastupdate', datos).attr("value");
                var horaMedidaMiliSeg1970 = Date.parse(horaMedida);
                horaMedidaMiliSeg1970 -= zonaHoraria * 60 * 1000;
                var horaMedidaLocal = (new Date(horaMedidaMiliSeg1970)).toLocaleTimeString("es-ES");
                var fechaMedidaLocal = (new Date(horaMedidaMiliSeg1970)).toLocaleDateString("es-ES");

                let datosString = "<ul><li>Latitud: " + $('coord', datos).attr("lat") + " grados</li>";
                datosString += "<li>Longitud: " + $('coord', datos).attr("lon") + " grados</li>";
                datosString += "<li>Temperatura: " + $('temperature', datos).attr("value") + " grados Celsius</li>";
                datosString += "<li>Temperatura máxima: " + $('temperature', datos).attr("max") + " grados Celsius</li>";
                datosString += "<li>Temperatura mínima: " + $('temperature', datos).attr("min") + " grados Celsius</li>";
                datosString += "<li>Presión: " + $('pressure', datos).attr("value") + " hPa</li>";
                datosString += "<li>Humedad: " + $('humidity', datos).attr("value") + "%</li>";
                datosString += "<li>Amanece a las: " + amanecerLocal + "</li>";
                datosString += "<li>Oscurece a las: " + oscurecerLocal + "</li>";
                datosString += "<li>Dirección del viento: " + $('direction', datos).attr("value") + "  grados</li>";
                datosString += "<li>Velocidad del viento: " + $('speed', datos).attr("value") + " metros/segundo</li>";
                datosString += "<li>Hora de la medida: " + horaMedidaLocal + "</li>";
                datosString += "<li>Fecha de la medida: " + fechaMedidaLocal + "</li>";
                datosString += "<li>Descripción: " + $('weather', datos).attr("value") + "</li>";
                datosString += "<li>Icono <img src=https://openweathermap.org/img/w/" + $('weather', datos).attr("icon") + ".png alt='icono del tiempo'/></li>";
                datosString += "<li>Visibilidad: " + $('visibility', datos).attr("value") + " metros</li>";
                datosString += "<li>Nubosidad: " + $('clouds', datos).attr("value") + " %</li></ul>";

                $("h2:contains(" + $('city', datos).attr("name") + ")").after(datosString);
            },
            error: function () {
                $("p").text("Error al obtener los datos");
            }
        });
    }

    mostrarDatos(ciudad) {
        this.seleccionarCiudad(ciudad);
        this.crearElemento("h2", ciudad, "input");
        this.crearElemento("p", "", "h2:contains(" + ciudad + ")");
        this.cargarDatos();
        $("input[value='Mostrar datos de " + ciudad + "']").attr("disabled", "disabled");
    }

    crearElemento(etiqueta, texto, despues) {
        var elemento = document.createElement(etiqueta);
        elemento.innerHTML = texto;
        $(despues).last().after(elemento);
    }

    seleccionarCiudad(ciudad) {
        this.ciudad = ciudad;
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + this.unidades
            + this.idioma + "&APPID=" + this.apikey + "&mode=xml";
    }
}

var programa = new Programa();