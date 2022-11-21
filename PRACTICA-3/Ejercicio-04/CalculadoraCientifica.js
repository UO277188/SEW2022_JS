"use strict"
class CalculadoraCientifica extends CalculadoraMilan {
    constructor() {
        super();

        this.hiperbolicas = false;
        this.inversas = false;
        this.grados = true;

        document.addEventListener('keydown', (event) => {
            if (event.key == "%")
                this.modulo();
            else if (event.key == "e")
                this.exp();
            else if (event.key == "s")
                this.sin();
            else if (event.key == "c")
                this.cos();
            else if (event.key == "t")
                this.tan();
            else if (event.key == "^")
                this.elevar();
            else if (event.key == "l")
                this.log();
            else if (event.key == "\"")
                this.cuadrado();
            else if (event.key == "E")
                this.diezElevadoA();
            else if (event.key == "P")
                this.pi();
            else if (event.key == "f")
                this.factorial();
            else if (event.key == "\(")
                this.parentesisAbrir();
            else if (event.key == "\)")
                this.parentesisCerrar();

            else if (event.key == "d")
                this.deg();
            else if (event.key == "h")
                this.hyp();
            else if (event.key == "F")
                this.fe();
            else if (event.key == "i")
                this.inversas();

            // memoria
            else if (event.key == "v")
                this.ms();
            else if (event.key == "V")
                this.mc();

            // tecla retroceso
            else if (event.key == 'Backspace')
                this.retroceso();

        })
    }

    deg() {
        if (this.grados) {
            this.grados = false;
            var boton = document.querySelector("[value=DEG]");
            boton.setAttribute("value", "RAD");
        } else {
            this.grados = true;
            var boton = document.querySelector("[value=RAD]");
            boton.setAttribute("value", "DEG");
        }
    }

    hyp() {
        if (this.inversas)
            return;

        var boton;

        if (this.hiperbolicas) {
            this.hiperbolicas = false;
            boton = document.querySelector("[value=sinh]");
            boton.setAttribute("value", "sin");

            boton = document.querySelector("[value=cosh]");
            boton.setAttribute("value", "cos");

            boton = document.querySelector("[value=tanh]");
            boton.setAttribute("value", "tan");

        } else {
            this.hiperbolicas = true;
            boton = document.querySelector("[value=sin]");
            boton.setAttribute("value", "sinh");

            boton = document.querySelector("[value=cos]");
            boton.setAttribute("value", "cosh");

            boton = document.querySelector("[value=tan]");
            boton.setAttribute("value", "tanh");
        }
    }

    fe() {
        var result = Number(this.operacion).toExponential();
        document.getElementsByTagName("input")[0].value = result;
        this.pantalla = result + "";
        this.operacion = result + "";
        this.exponencial = true;
    }

    mc() {
        this.memoria = 0;
    }

    ms() {
        this.memoria = this.operacion;
    }

    cuadrado() {
        var result = eval(eval(this.operacion) * eval(this.operacion));
        document.getElementsByTagName("input")[0].value = result;
        this.operacion = result + "";
        this.pantalla = result + "";
    }

    elevar() {
        if (super.hayOperador()) {
            this.operacion = this.operacion.slice(0, -1);
        }
        this.operacion += "**";
        this.pantalla += "^";
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    sin() {
        if (this.grados)
            var numero = Number(eval(this.operacion)) * Math.PI / 180;
        else
            var numero = Number(eval(this.operacion));

        if (this.hiperbolicas) {
            var result = (Math.sinh(numero));
            document.getElementsByTagName("input")[0].value = result;
            this.operacion = result + "";
            this.pantalla = result + "";

        } else if (this.inversas) {
            var result = (Math.asin(numero));
            document.getElementsByTagName("input")[0].value = result;
            this.operacion = result + "";
            this.pantalla = result + "";

        } else {
            var result = (Math.sin(numero));
            document.getElementsByTagName("input")[0].value = result;
            this.operacion = result + "";
            this.pantalla = result + "";
        }
    }

    cos() {
        if (this.grados)
            var numero = Number(eval(this.operacion)) * Math.PI / 180;
        else
            var numero = Number(eval(this.operacion));

        if (this.hiperbolicas) {
            var result = (Math.cosh(numero));
            document.getElementsByTagName("input")[0].value = result;
            this.operacion = result + "";
            this.pantalla = result + "";

        } else if (this.inversas) {
            var result = (Math.acos(numero));
            document.getElementsByTagName("input")[0].value = result;
            this.operacion = result + "";
            this.pantalla = result + "";

        } else {
            var result = (Math.cos(numero));
            document.getElementsByTagName("input")[0].value = result;
            this.operacion = result + "";
            this.pantalla = result + "";
        }
    }

    tan() {
        if (this.grados)
            var numero = Number(eval(this.operacion)) * Math.PI / 180;
        else
            var numero = Number(eval(this.operacion));

        if (this.hiperbolicas) {
            var result = (Math.tanh(numero));
            document.getElementsByTagName("input")[0].value = result;
            this.operacion = result + "";
            this.pantalla = result + "";

        } else if (this.inversas) {
            var result = (Math.acos(numero));
            document.getElementsByTagName("input")[0].value = result;
            this.operacion = result + "";
            this.pantalla = result + "";

        } else {
            var result = (Math.tan(numero));
            document.getElementsByTagName("input")[0].value = result;
            this.operacion = result + "";
            this.pantalla = result + "";
        }
    }

    raiz() {
        var result = Math.sqrt(eval(this.operacion));
        document.getElementsByTagName("input")[0].value = result;
        this.operacion = result + "";
        this.pantalla = result + "";
    }

    diezElevadoA() {
        var result = Math.pow(10, eval(this.operacion));
        document.getElementsByTagName("input")[0].value = result;
        this.operacion = result + "";
        this.pantalla = result + "";
    }

    log() {
        var result = Math.log(eval(this.operacion));
        document.getElementsByTagName("input")[0].value = result;
        this.operacion = result + "";
        this.pantalla = result + "";
    }

    exp() {
        var result = Math.exp(Number(this.operacion));
        document.getElementsByTagName("input")[0].value = result;
        this.operacion = result + "";
        this.pantalla = result + "";
    }

    modulo() {
        this.compruebaOperador();

        this.operacion += "%";
        this.pantalla += "%";
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    inv() {
        if (this.hiperbolicas)
            return;

        var boton;

        if (this.inversas) {
            this.inversas = false;
            boton = document.querySelector("[value=asin]");
            boton.setAttribute("value", "sin");

            boton = document.querySelector("[value=acos]");
            boton.setAttribute("value", "cos");

            boton = document.querySelector("[value=atan]");
            boton.setAttribute("value", "tan");

        } else {
            this.inversas = true;
            boton = document.querySelector("[value=sin]");
            boton.setAttribute("value", "asin");

            boton = document.querySelector("[value=cos]");
            boton.setAttribute("value", "acos");

            boton = document.querySelector("[value=tan]");
            boton.setAttribute("value", "atan");
        }
    }

    retroceso() {
        if (this.operacion != "") {
            this.operacion = this.operacion.slice(0, -1);
            document.getElementsByTagName("input")[0].value = this.operacion;
            this.pantalla = this.operacion;
        }
    }

    pi() {
        super.digitos(Math.PI);
    }

    factorial() {
        var result = this.factorialRecursivo(eval(this.operacion));
        document.getElementsByTagName("input")[0].value = result;
        this.operacion = result + "";
        this.pantalla = eval(this.operacion) + "";
    }

    factorialRecursivo(n) {
        return (n != 1) ? n * this.factorialRecursivo(n - 1) : 1;
    }

    masMenos() {
        var result = eval(-eval(this.operacion));
        document.getElementsByTagName("input")[0].value = result;
        this.operacion = result + "";
        this.pantalla = result + "";
    }

    parentesisAbrir() {
        this.operacion += "(";
        this.pantalla += "(";
        document.getElementsByTagName("input")[0].value = this.operacion;
    }

    parentesisCerrar() {
        document.getElementsByTagName("input")[0].value += ")";
        this.operacion += ")";
        this.pantalla += ")";
    }
}

var calc = new CalculadoraCientifica();