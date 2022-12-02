"use strict"
class AplicacionDibujo {
    constructor() {
        this.pintar = false;
        this.inicialX = 0;
        this.inicialY = 0;

        document.addEventListener('keydown', (event) => {
            if (event.key == "n")
                this.color("black");
            else if (event.key == "r")
                this.color("red");
            else if (event.key == "a")
                this.color("blue");
            else if (event.key == "v")
                this.color("green");
            else if (event.key == "p")
                this.pantallaCompleta();
        });
    }

    cargar() {
        this.canvas = document.getElementsByTagName("canvas")[0];
        this.ctx = this.canvas.getContext("2d");
        this.ctx.lineWidth = 15;
        this.ctx.lineCap = "round";
        this.ctx.strokeStyle = "black";
        this.ctx.lineJoin = "round";

        this.canvas.tabIndex = 1000;    // para poder utilizar eventos onkey en canvas
    }

    pulsar(evento) {
        this.pintar = true;
        this.inicialX = evento.offsetX;
        this.inicialY = evento.offsetY;
    }

    pulsarTeclado(evento) {
        if (evento.key == "d")
            this.pulsar(evento);
    }

    soltar() {
        this.pintar = false;
        this.ctx.save();
    }

    mover(evento) {
        this.dibujar(evento.offsetX, evento.offsetY);
    }

    dibujar(cursorX, cursorY) {
        if (!this.pintar) return;
        this.ctx.beginPath();
        this.ctx.moveTo(this.inicialX, this.inicialY);
        this.ctx.lineTo(cursorX, cursorY);
        this.ctx.stroke();

        this.inicialX = cursorX;
        this.inicialY = cursorY;
    }

    color(color) {
        this.ctx.strokeStyle = color;
    }

    pantallaCompleta() {
        if (this.canvas.requestFullscreen) {
            this.canvas.requestFullscreen();
        }
    }

    cargarImagen(evento) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var img = new Image();
            img.onload = function () {
                let canvas = document.getElementsByTagName("canvas")[0];
                let ctx = canvas.getContext("2d");
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(evento.target.files[0]);
    }
}

var app = new AplicacionDibujo();
