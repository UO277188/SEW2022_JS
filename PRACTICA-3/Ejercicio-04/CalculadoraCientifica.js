class CalculadoraCientifica extends CalculadoraMilan {
    exponencial = false;
    hiperbolicas = false;
    grados = true;

    constructor() {
        super();
        document.addEventListener('keydown', (event) => {
            var digitos = new RegExp('^[0-9]+$');
            if (digitos.test(event.key)) {
                this.digitos(Number(event.key));
            } else if (event.key == "+") {
                this.suma();
            } else if (event.key == "-") {
                this.resta();
            } else if (event.key == "*") {
                this.multiplicacion();
            } else if (event.key == "/") {
                this.division();
            } else if (event.key == "%") {
                this.modulo();
            } else if (event.key == "r") {
                this.raiz();
            } else if (event.key == "e") {
                this.exp();
            } else if (event.key == "s") {
                this.sin();
            } else if (event.key == "c") {
                this.cos();
            } else if (event.key == "t") {
                this.tan();
            } else if (event.key == "^") {
                this.elevar();
            } else if (event.key == "l") {
                this.log();
            } else if (event.key == "\"") {
                this.cuadrado();
            } else if (event.key == "p") {
                this.diezElevadoA();
            } else if (event.key == ".") {
                this.punto();
            } else if (event.key == "p") {
                this.pi();
            } else if (event.key == "f") {
                this.factorial();
            } else if (event.key == ",") {
                this.masMenos();
            } else if (event.key == "\(") {
                this.parentesisAbrir();
            } else if (event.key == "\)") {
                this.parentesisCerrar();

                // primera fila
            } else if (event.key == "d") {
                this.deg();
            } else if (event.key == "h") {
                this.hyp();
            } else if (event.key == "F") {
                this.fe();

                // memoria
            } else if (event.key == "m") {
                this.mrc();
            } else if (event.key == "g") {
                this.ms();
            } else if (event.key == "b") {
                this.mc();
            } else if (event.key == "n") {
                this.mMas();
            } else if (event.key == "b") {
                this.mMenos();

                // tecla enter
            } else if (event.keyCode == 13) {
                this.igual();
                // tecla retroceso
            } else if (event.keyCode == 8) {
                this.retroceso();
                // tecla suprimir
            } else if (event.keyCode == 46) {
                this.borrar();
            }
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
        if (this.hiperbolicas) {
            this.hiperbolicas = false;
            var botonSin = document.querySelector("[value=sinh]");
            botonSin.setAttribute("value", "sin");

            var botonCos = document.querySelector("[value=cosh]");
            botonCos.setAttribute("value", "cos");

            var botonTan = document.querySelector("[value=tanh]");
            botonTan.setAttribute("value", "tan");

        } else {
            this.hiperbolicas = true;
            var botonSin = document.querySelector("[value=sin]");
            botonSin.setAttribute("value", "sinh");

            var botonCos = document.querySelector("[value=cos]");
            botonCos.setAttribute("value", "cosh");

            var botonTan = document.querySelector("[value=tan]");
            botonTan.setAttribute("value", "tanh");
        }
    }

    fe() {
        if (this.exponencial) {
            var result = Number(this.operacion);
            document.getElementsByTagName("input")[0].value = result;
            this.operacion = result + "";
            this.exponencial = false;
        } else {
            var result = Number(this.operacion).toExponential();
            document.getElementsByTagName("input")[0].value = result;
            this.operacion = result + "";
            this.exponencial = true;
        }
    }

    mc() {
        this.memoria = 0;
    }

    ms() {
        this.memoria = this.operacion;
    }

    cuadrado() {
        var result = eval(this.operacion * this.operacion);
        document.getElementsByTagName("input")[0].value = result;
        this.operacion = result + "";
    }

    elevar() {
        if (super.hayOperador()) {
            this.operacion = this.operacion.slice(0, -1);
        }
        this.operacion += "**";
    }

    sin() {
        if (this.grados)
            var numero = Number(this.operacion) * Math.PI / 180;
        else
            var numero = Number(this.operacion);

        if (this.hiperbolicas) {
            var result = Math.round(Math.sinh(numero));
            document.getElementsByTagName("input")[0].value = result;
            this.operacion = result + "";

        } else {
            var result = Math.round(Math.sin(numero));
            document.getElementsByTagName("input")[0].value = result;
            this.operacion = result + "";
        }
    }

    cos() {
        if (this.grados)
            var numero = Number(this.operacion) * Math.PI / 180;
        else
            var numero = Number(this.operacion);

        if (this.hiperbolicas) {
            var result = Math.round(Math.cosh(numero));
            document.getElementsByTagName("input")[0].value = result;
            this.operacion = result + "";

        } else {
            var result = Math.round(Math.cos(numero));
            document.getElementsByTagName("input")[0].value = result;
            this.operacion = result + "";
        }
    }

    tan() {
        if (this.grados)
            var numero = Number(this.operacion) * Math.PI / 180;
        else
            var numero = Number(this.operacion);

        if (this.hiperbolicas) {
            var result = Math.round(Math.tanh(numero));
            document.getElementsByTagName("input")[0].value = result;
            this.operacion = result + "";

        } else {
            var result = Math.round(Math.tan(numero));
            document.getElementsByTagName("input")[0].value = result;
            this.operacion = result + "";
        }
    }

    raiz() {
        var result = Math.sqrt(this.operacion);
        document.getElementsByTagName("input")[0].value = result;
        this.operacion = result + "";
    }

    diezElevadoA() {
        var result = Math.pow(10, this.operacion);
        document.getElementsByTagName("input")[0].value = result;
        this.operacion = result + "";
    }

    log() {
        var result = Math.log(this.operacion);
        document.getElementsByTagName("input")[0].value = result;
        this.operacion = result + "";
    }

    exp() {
        var result = Math.exp(Number(this.operacion));
        document.getElementsByTagName("input")[0].value = result;
        this.operacion = result + "";
    }

    modulo() {
        if (super.hayOperador()) {
            this.operacion = this.operacion.slice(0, -1);
        }
        this.operacion += "%";
    }

    retroceso() {
        if (this.operacion != "") {
            this.operacion = this.operacion.slice(0, -1);
            document.getElementsByTagName("input")[0].value = this.operacion;
        }
    }

    pi() {
        super.digitos(Math.PI);
    }

    factorial() {
        var result = this.factorialRecursivo(this.operacion);
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
    }

    parentesisAbrir() {
        this.operacion += "(";
        document.getElementsByTagName("input")[0].value = this.operacion;
    }

    parentesisCerrar() {
        document.getElementsByTagName("input")[0].value += ")";
        this.operacion += ")";
    }
}

var calc = new CalculadoraCientifica();