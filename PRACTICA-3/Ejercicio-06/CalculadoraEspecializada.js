"use strict"
class CalculadoraEspecializada extends CalculadoraRPN {
    constructor() {
        super();
        document.addEventListener('keydown', (event) => {
            if (event.key == "e")
                this.calcularEnergiaDispositivoConIVA();
            if (event.key == "G")
                this.energia("gas");
            if (event.key == "O")
                this.energia("solar");
            if (event.key == "E")
                this.energia("eolica");
            if (event.key == "N")
                this.energia("nuclear");
        });
    }

    energia(tipo) {
        if (tipo == "gas")
            this.digitos(Number(0.1503));
        else if (tipo == "solar")
            this.digitos(Number(0.343));
        else if (tipo == "eolica")
            this.digitos(Number(0.06));
        else if (tipo == "nuclear")
            this.digitos(Number(0.04));
    }

    calcularEnergiaDispositivoConIVA() {
        if (this.pila.tamaño() < 5)
            return;
        try {
            var precioEnergia = this.pila.desapilar();
            var iva = Number(this.pila.desapilar());
            var consumoKW = Number(this.pila.desapilar());
            var horas = Number(this.pila.desapilar());
            var dias = Number(this.pila.desapilar());

            var total = dias * horas * consumoKW * precioEnergia;

            this.pila.apilar(Number(total + total * iva / 100));
            this.digito = "";
            document.getElementsByTagName("textarea")[0].innerHTML = this.pila.mostrar();
            document.getElementsByTagName("input")[0].value = "";

        } catch (error) {
            this.borrar();
            document.getElementsByTagName("textarea")[0].innerHTML = this.pila.mostrar();
            document.getElementsByTagName("input")[0].value = "";
        }
    }

}

var calc = new CalculadoraEspecializada();