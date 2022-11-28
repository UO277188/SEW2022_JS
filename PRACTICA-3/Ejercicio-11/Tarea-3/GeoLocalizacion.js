"use strict";
class GeoLocalización {
    constructor (){
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.errores.bind(this));
    }

    getPosicion(posicion){
        this.error = "Localización encontraada correctamente";
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed;       
    }

    mostrarPosicion(){
        var ubicacion = document.getElementsByTagName("section")[0];
        var datos='<h2>Datos</h2>'; 
        if(this.error==""){
            datos+=
            ubicacion.innerHTML = datos;
            return;
        }
        datos+='<p>'+this.error+'</p>';
        datos+='<p>Longitud: '+this.longitud +' grados</p>'; 
        datos+='<p>Latitud: '+this.latitud +' grados</p>';
        datos+='<p>Precisión de la latitud y longitud: '+ this.precision +' metros</p>';
        datos+='<p>Altitud: '+ this.altitude +' metros</p>';
        datos+='<p>Precisión de la altitud: '+ this.precisionAltitud +' metros</p>'; 
        datos+='<p>Rumbo: '+ this.rumbo +' grados</p>'; 
        datos+='<p>Velocidad: '+ this.velocidad +' metros/segundo</p>';
        ubicacion.innerHTML = datos;
    }

    errores(error){
        switch(error.code) {
            case error.PERMISSION_DENIED:
                this.error = "Permiso de geolocalización rechazado";
                break;
            case error.POSITION_UNAVAILABLE:
                this.error = "La información de geolocalización no está disponible";
                break;
            case error.TIMEOUT:
                this.error = "Petición de geolocalización caducada";
                break;
            case error.UNKNOWN_ERROR:
                this.error = "Se produjo un error al procesar la geolocalización";
                break;
            }
    }

    getMapaEstaticoMapBox(){
        this.url = "https://api.mapbox.com/styles/v1/uo277188/streets-v12/static/{overlay}/+"
        +this.longitud+","+this.latitud+",13,0,60/800x800{@2x};
    }
}

var geolocalizacion = new GeoLocalización();