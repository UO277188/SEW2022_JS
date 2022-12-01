"use strict"
class AplicacionDibujo {
    constructor() {
        this.pintar = false;
        this.inicialX = 0;
        this.inicialY = 0;
    }

    cargar() {
        this.canvas = document.getElementsByTagName("canvas")[0];
        this.ctx = this.canvas.getContext("2d");
        this.ctx.lineWidth = 15;
        this.ctx.lineCap = "round";
        this.ctx.strokeStyle = "black";
        this.ctx.lineJoin = "round";
    }

    pulsar(evento) {
        this.pintar = true;
        this.inicialX = evento.offsetX;
        this.inicialY = evento.offsetY;
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
