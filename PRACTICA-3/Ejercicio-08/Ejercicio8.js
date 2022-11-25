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
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function (datos) {
                let datosString = "<ul><li>Latitud: " + datos.coord.lat + " grados</li>";
                datosString += "<li>Longitud: " + datos.coord.lon + " grados</li>";
                datosString += "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
                datosString += "<li>Temperatura máxima: " + datos.main.temp_max + " grados Celsius</li>";
                datosString += "<li>Temperatura mínima: " + datos.main.temp_min + " grados Celsius</li>";
                datosString += "<li>Presión: " + datos.main.pressure + " hPa</li>";
                datosString += "<li>Humedad: " + datos.main.humidity + "%</li>";
                datosString += "<li>Amanece a las: " + new Date(datos.sys.sunrise * 1000).toLocaleTimeString() + "</li>";
                datosString += "<li>Oscurece a las: " + new Date(datos.sys.sunset * 1000).toLocaleTimeString() + "</li>";
                datosString += "<li>Dirección del viento: " + datos.wind.deg + "  grados</li>";
                datosString += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                datosString += "<li>Hora de la medida: " + new Date(datos.dt * 1000).toLocaleTimeString() + "</li>";
                datosString += "<li>Fecha de la medida: " + new Date(datos.dt * 1000).toLocaleDateString() + "</li>";
                datosString += "<li>Descripción: " + datos.weather[0].description + "</li>";
                datosString += "<li>Icono <img src=https://openweathermap.org/img/w/" + datos.weather[0].icon + ".png alt='icono del tiempo'/></li>";
                datosString += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                datosString += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";

                $("h2:contains(" + datos.name + ")").after(datosString);
            },
            error: function () {
                $("p").text("Error al obtener los datos");
            }
        });
    }

    mostrarDatos(ciudad) {
        this.seleccionarCiudad(ciudad);
        this.crearElemento("h2", ciudad, "input");
        this.crearElemento("p", "", "h2");
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
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad
            + this.unidades + this.idioma + "&APPID=" + this.apikey;
    }
}

var programa = new Programa();