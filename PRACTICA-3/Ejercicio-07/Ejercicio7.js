"use strict"
class Programa {
    constructor() {
        this.recorrido = false;
    }

    mostrarParrafos() {
        $("p").show();
    }

    ocultarParrafos() {
        $("p").hide();
    }

    modificarParrafos() {
        $("p").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    }

    añadirElementosH2() {
        $("table").after("<h2>Nuevo elemento h2</h2>");
        $("h2:contains('Nuevo elemento h2')").after("<p>Párrafo del nuevo elemento h2</p>");
    }

    eliminarElementosH2() {
        $("h2:contains('Nuevo elemento h2')").remove();
        $("p:contains('Párrafo del nuevo elemento h2')").remove();
    }

    recorrerDOM() {
        if (this.recorrido == false) {
            $('table').after('<section><h2>Recorrido</h2></section>');
            $("*", document.body).each(function () {
                var etiquetaPadre = $(this).parent().get(0).tagName;
                $("h2:contains('Recorrido')").after('<p>' + "Elemento padre: " + etiquetaPadre + " tipo de elemento: "
                    + $(this).get(0).tagName + '</p>');
            });

            this.recorrido = true;
        }
    }

    sumarFilasColumnas() {
        var filas = 0;
        var columnas = 0;
        $("th").each(function () {
            columnas++;
        });
        $("tr").each(function () {
            filas++;
        });

        $("table").before("<p>La tabla tiene " + filas + " filas y " + columnas + " columnas" + "</p>");
    }
}

var programa = new Programa();