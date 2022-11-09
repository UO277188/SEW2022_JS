class Calculadora {
    constructor() {
        this.pantalla = "";
        this.memoria = "";

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
            else if (event.key === 'Enter')
                this.igual();
            // tecla retroceso
            else if (event.key === 'Backspace')
                this.borrar();

            document.getElementsByTagName("input")[0].value = this.pantalla;
        })
    }

    digitos(numero) {
        this.pantalla += Number(numero);
    }

    punto() {
        if (!(this.pantalla.endsWith(".") || this.hayOperador()))
            this.pantalla += ".";
    }

    suma() {
        if (this.hayOperador())
            this.pantalla = this.pantalla.slice(0, -1);

        if (this.pantalla == "")
            this.pantalla += Number(0);
        this.pantalla += "+";
    }

    resta() {
        if (this.hayOperador())
            this.pantalla = this.pantalla.slice(0, -1);

        this.pantalla += "-";
    }

    multiplicacion() {
        if (this.hayOperador())
            this.pantalla = this.pantalla.slice(0, -1);

        this.pantalla += "*";
    }

    division() {
        if (this.hayOperador())
            this.pantalla = this.pantalla.slice(0, -1);

        this.pantalla += "/";
    }

    mrc() {
        document.getElementsByTagName("input")[0].value = this.memoria;
        this.pantalla = this.memoria;
    }

    mMenos() {
        var valorPantalla = document.getElementsByTagName("input")[0].value;
        this.memoria -= valorPantalla;
        document.getElementsByTagName("input")[0].value = this.memoria;
    }

    mMas() {
        var valorPantalla = document.getElementsByTagName("input")[0].value;
        this.memoria += Number(valorPantalla);
        document.getElementsByTagName("input")[0].value = this.memoria;
    }

    borrar() {
        this.pantalla = "";
        document.getElementsByTagName("input")[0].value = this.pantalla;
    }

    igual() {
        if (this.hayOperador()) {
            document.getElementsByTagName("input")[0].value = "SYNTAX ERROR";
            this.pantalla = "";
        } else {
            try {
                document.getElementsByTagName("input")[0].value = eval(this.pantalla);
                this.pantalla = eval(this.pantalla) + "";
            } catch (error) {
                document.getElementsByTagName("input")[0].value = "ERROR";
                this.pantalla = "";
            }
        }
    }

    porcentaje() {

    }

    raiz() {

    }

    masMenos() {

    }

    hayOperador() {
        return (this.pantalla.endsWith("+") || this.pantalla.endsWith("-") || this.pantalla.endsWith("*")
            || this.pantalla.endsWith("/") || this.pantalla.endsWith("."))
    }
}

var calc = new Calculadora();