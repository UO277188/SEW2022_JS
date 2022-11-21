"use strict"
class CalculadoraEspecializada extends CalculadoraRPN {
    constructor(){
        super();
        document.addEventListener('keydown', (event) => { 
            if(event.key=="E")
                this.calcularEnergiaDispositivoConIVA();
        });
    }

    energia(tipo){
        this.pila.apilar(tipo);
        var textArea = document.getElementsByTagName("textarea")[0];
        textArea.innerHTML = this.pila.mostrar();
    }

    calcularEnergiaDispositivoConIVA(){
        if (this.pila.tamaño() < 4)
            return;
        try {
            var energia = this.pila.desapilar();
            var iva = Number(this.pila.desapilar());
            var horas = Number(this.pila.desapilar());
            var dias = Number(this.pila.desapilar());

            var precioEnergia = 0;
            if(energia == "gas")
                precioEnergia = Number(0.1503);
            else if(energia == "solar")
                precioEnergia = Number(0.343);
            else if(energia == "eolica")
                precioEnergia = Number(0.06);
            else if(energia == "nuclear")
                precioEnergia = Number(0.04);

            if(precioEnergia == 0)
                this.borrar();
            else {
                var total = dias * horas * precioEnergia;

                this.pila.apilar(Number(total + total * iva/100));
                this.digito = "";
                document.getElementsByTagName("textarea")[0].innerHTML = this.pila.mostrar();
                document.getElementsByTagName("input")[0].value = "";
            }

            
        } catch (error) {
            this.borrar();
        }
    }

}

var calc = new CalculadoraEspecializada();