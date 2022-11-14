class CalculadoraMilan {
    constructor() {
        this.operacion = "";
        this.pantalla = "";
        this.memoria = 0;

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
            else if (event.key == ".")
                this.punto();
            else if (event.key == "m")
                this.mrc();
            else if (event.key == "n")
                this.mMas();
            else if (event.key == "b")
                this.mMenos();
            // tecla enter
            else if (event.key == 'Enter')
                this.igual();
            // tecla retroceso
            else if (event.key == 'Backspace')
                this.borrar();
            else if (event.key == "p")
                this.porcentaje();
            else if (event.key == "r")
                this.raiz();
            else if (event.key == "s")
                this.masMenos();

        })
    }

    digitos(numero) {
        this.pantalla += Number(numero);
        this.operacion += Number(numero);
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    punto() {
        if (!(this.pantalla.endsWith(".") || this.hayOperador())) {
            this.pantalla += ".";
            this.operacion += ".";
        }
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    suma() {
        this.compruebaOperador();

        this.pantalla += "+";
        this.operacion += "+";
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    resta() {
        this.compruebaOperador();

        this.pantalla += "-";
        this.operacion += "-";
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    multiplicacion() {
        this.compruebaOperador();

        this.pantalla += "*";
        this.operacion += "*";
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    division() {
        this.compruebaOperador();

        this.pantalla += "/";
        this.operacion += "/";
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    mrc() {
        this.pantalla += this.memoria;
        this.operacion += this.memoria;
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    mMenos() {
        this.memoria -= Number(eval(this.operacion));
    }

    mMas() {
        this.memoria += Number(eval(this.operacion));
    }

    borrar() {
        this.pantalla = "";
        this.operacion = "";
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    igual() {
        if (this.hayOperador()) {
            document.getElementsByTagName("input")[0].value = "SYNTAX ERROR";
            this.pantalla = "";
            this.operacion = "";
        } else {
            try {
                document.getElementsByTagName("input")[0].value = eval(this.operacion);
                this.pantalla = eval(this.operacion) + "";
                this.operacion = eval(this.operacion);
            } catch (error) {
                document.getElementsByTagName("input")[0].value = "ERROR";
                this.pantalla = "";
                this.operacion = "";
            }
        }
    }

    porcentaje() {
        this.compruebaOperador();
        this.pantalla += "%";
        this.operacion += "/100";
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    raiz() {
        this.compruebaOperador();
        let numbers = this.pantalla.split(/\D/);
        let lastNumber = numbers[numbers.length - 1];
        let numberSize = numbers[numbers.length - 1].length;

        this.pantalla += "√";
        this.operacion = this.operacion.slice(0, this.operacion.length - numberSize);
        this.operacion += Math.sqrt(Number(lastNumber));
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    masMenos() {
        if (this.hayOperador()) {
            document.getElementsByTagName("input")[0].value = "SYNTAX ERROR";
            this.pantalla = "";
            this.operacion = "";
        } else {
            try {
                document.getElementsByTagName("input")[0].value = eval(this.operacion);
                this.pantalla = eval(-eval(this.operacion));
                this.operacion = eval(-eval(this.operacion));
            } catch (error) {
                document.getElementsByTagName("input")[0].value = "ERROR";
                this.pantalla = "";
                this.operacion = "";
            }
        }
    }

    compruebaOperador() {
        if (this.hayOperador()) {
            this.pantalla = this.pantalla.slice(0, -1);
            this.operacion = this.operacion.slice(0, -1);
        }

        if (this.pantalla == "") {
            this.pantalla += Number(0);
            this.operacion += Number(0);
        }
    }

    hayOperador() {
        return (this.pantalla.endsWith("+") || this.pantalla.endsWith("-") || this.pantalla.endsWith("*")
            || this.pantalla.endsWith("/") || this.pantalla.endsWith("."))
    }
}

var calc = new CalculadoraMilan();