"use strict"
class Programa {

    leerArchivo() {
        let archivos = document.getElementsByTagName("input")[0].files;
        let archivo = archivos[0];
        $("h3:contains(Nombre: )").html("Nombre: " + archivo.name);
        $("p:contains(Tamaño: )").html("Tamaño: " + archivo.size + " bytes");
        $("p:contains(Tipo: )").html("Tipo: " + archivo.type);

        let tipo = archivo.type;
        if (tipo == "application/json" || tipo == "text/plain" || tipo == "text/xml") {
            var lector = new FileReader();
            lector.onload = function (evento) {
                document.getElementsByTagName("pre")[0].innerText = lector.result;
            }
            lector.readAsText(archivo);
        } else
            $("pre").html("Error: archivo no válido");

    }

}

var prog = new Programa();