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
            $("*", document.body).each(function () {
                var etiquetaPadre = $(this).parent().get(0).tagName;
                $(this).prepend(document.createTextNode("Elemento padre: <" + etiquetaPadre + "> tipo de elemento: <"
                    + $(this).get(0).tagName + "> valor: "));
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

        $("table").before("La tabla tiene " + filas + " filas y " + columnas + " columnas");
    }
}

var programa = new Programa();