"use strict";
class Pila {
    constructor() {
        this.pila = new Array();
    }

    apilar(valor) {
        this.pila.push(valor);
    }

    desapilar() {
        return (this.pila.pop());
    }

    borrar() {
        this.pila = new Array();
    }

    tamaño() {
        return this.pila.length;
    }

    mostrar() {
        if (this.pila.length > 0) {
            var stringPila = "";
            for (var i in this.pila)
                stringPila += this.pila[i] + "\n";
            return stringPila;
        }
        return "";
    }
}

class CalculadoraRPN {
    constructor() {
        this.pila = new Pila();
        this.digito = "";

        document.addEventListener('keydown', (event) => {
            var digitos = new RegExp('^[0-9]+$');
            if (digitos.test(event.key))
                this.digitos(event.key);
            else if (event.key == "+")
                this.suma();
            else if (event.key == "-")
                this.resta();
            else if (event.key == "*")
                this.multiplicacion();
            else if (event.key == "/")
                this.division();

            else if (event.key == "s")
                this.sen();
            else if (event.key == "c")
                this.cos();
            else if (event.key == "t")
                this.tan();
            else if (event.key == "S")
                this.asen();
            else if (event.key == "C")
                this.acos();
            else if (event.key == "T")
                this.atan();

            else if (event.key == ".")
                this.punto();
            else if (event.key == 'b')
                this.borrar();

            // tecla enter
            else if (event.key == 'Enter')
                this.enter();
            // tecla retroceso
            else if (event.key == 'Backspace')
                this.retroceso();

        })
    }

    digitos(numero) {
        this.digito += numero;
        document.getElementsByTagName("input")[0].value = this.digito;
    }

    punto() {
        var lastChar = this.digito.slice(-1);
        if (lastChar != "." && this.digito != "") {
            this.digito += ".";
            document.getElementsByTagName("input")[0].value = this.digito;
        }
    }

    suma() {
        if (this.pila.tamaño() <= 1)
            return;
        try {
            var num1 = Number(this.pila.desapilar());
            var num2 = Number(this.pila.desapilar());
            this.pila.apilar(Number(num2 + num1));
            this.digito = "";
            document.getElementsByTagName("textarea")[0].innerHTML = this.pila.mostrar();
        } catch (error) {
            this.borrar();
        }
    }

    resta() {
        if (this.pila.tamaño() <= 1)
            return;
        try {
            var num1 = Number(this.pila.desapilar());
            var num2 = Number(this.pila.desapilar());
            this.pila.apilar(Number(num2 - num1));
            this.digito = "";
            document.getElementsByTagName("textarea")[0].innerHTML = this.pila.mostrar();
        } catch (error) {
            this.borrar();
        }
    }

    multiplicacion() {
        if (this.pila.tamaño() <= 1)
            return;
        try {
            var num1 = Number(this.pila.desapilar());
            var num2 = Number(this.pila.desapilar());
            this.pila.apilar(Number(num2 * num1));
            this.digito = "";
            document.getElementsByTagName("textarea")[0].innerHTML = this.pila.mostrar();
        } catch (error) {
            this.borrar();
        }
    }

    division() {
        if (this.pila.tamaño() <= 1)
            return;
        try {
            var num1 = Number(this.pila.desapilar());
            var num2 = Number(this.pila.desapilar());
            this.pila.apilar(Number(num2 / num1));
            this.digito = "";
            document.getElementsByTagName("textarea")[0].innerHTML = this.pila.mostrar();
        } catch (error) {
            this.borrar();
        }
    }

    sen() {
        if (this.pila.tamaño() == 0)
            return;
        try {
            var num = Number(this.pila.desapilar());
            this.pila.apilar(Math.sin(num).toFixed(3));
            this.digito = "";
            document.getElementsByTagName("textarea")[0].innerHTML = this.pila.mostrar();
        } catch (error) {
            this.borrar();
        }
    }

    cos() {
        if (this.pila.tamaño() == 0)
            return;
        try {
            var num = Number(this.pila.desapilar());
            this.pila.apilar(Math.cos(num).toFixed(3));
            this.digito = "";
            document.getElementsByTagName("textarea")[0].innerHTML = this.pila.mostrar();
        } catch (error) {
            this.borrar();
        }
    }

    tan() {
        if (this.pila.tamaño() == 0)
            return;
        try {
            var num = Number(this.pila.desapilar());
            this.pila.apilar(Math.tan(num).toFixed(3));
            this.digito = "";
            document.getElementsByTagName("textarea")[0].innerHTML = this.pila.mostrar();
        } catch (error) {
            this.borrar();
        }
    }

    asen() {
        if (this.pila.tamaño() == 0)
            return;
        try {
            var num = Number(this.pila.desapilar());
            this.pila.apilar(Math.asin(num).toFixed(3));
            this.digito = "";
            document.getElementsByTagName("textarea")[0].innerHTML = this.pila.mostrar();
        } catch (error) {
            this.borrar();
        }
    }

    acos() {
        if (this.pila.tamaño() == 0)
            return;
        try {
            var num = Number(this.pila.desapilar());
            this.pila.apilar(Math.acos(num).toFixed(3));
            this.digito = "";
            document.getElementsByTagName("textarea")[0].innerHTML = this.pila.mostrar();
        } catch (error) {
            this.borrar();
        }
    }

    atan() {
        if (this.pila.tamaño() == 0)
            return;
        try {
            var num = Number(this.pila.desapilar());
            this.pila.apilar(Math.atan(num).toFixed(3));
            this.digito = "";
            document.getElementsByTagName("textarea")[0].innerHTML = this.pila.mostrar();
        } catch (error) {
            this.borrar();
        }
    }

    borrar() {
        this.digito = "";
        this.pila.borrar();
        document.getElementsByTagName("textarea")[0].innerHTML = this.pila.mostrar();
        document.getElementsByTagName("input")[0].value = "";
    }

    retroceso() {
        this.digito = this.digito.slice(0, -1);
        document.getElementsByTagName("input")[0].value = this.digito;
    }

    enter() {
        this.pila.apilar(Number(this.digito));
        this.digito = "";
        var textArea = document.getElementsByTagName("textarea")[0];
        textArea.innerHTML = this.pila.mostrar();
        document.getElementsByTagName("input")[0].value = "";
        textArea.scrollTop = textArea.scrollHeight;
    }
}
