"use strict";
class MapaKML {

    getMapaDinamicoMapBox() {
        let apiKey = "pk.eyJ1IjoidW8yNzcxODgiLCJhIjoiY2xiMHUzbjI4MDBhMTN4b2puYTR1dXlxNSJ9.6-0ol9W73UtV6B8K6gS9Ew";

        var ubicacion = document.getElementsByTagName("section")[0];
        ubicacion.innerHTML = "<h2>Mapa</h2>";

        mapboxgl.accessToken = apiKey;
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-5.851298, 43.354826],
            zoom: 6
        });

        this.añadirMarcadores(map);
    }

    añadirMarcadores(map) {
        var lector = new FileReader();
        lector.onload = function (evento) {
            let archivo = $.parseJSON(lector.result);
            for (let i = 0; i < archivo.features.length; i++) {
                let longitud = archivo.features[i].geometry.coordinates[0];
                let latitud = archivo.features[i].geometry.coordinates[1];
                const marker = new mapboxgl.Marker()
                    .setLngLat([longitud, latitud])
                    .setPopup(new mapboxgl.Popup().setHTML("<p>" + archivo.features[i].properties.description + "</p>"))
                    .addTo(map);
            };
        }
        lector.readAsText(document.getElementsByTagName("input")[0].files[0]);


    }
}

var mapa = new MapaKML();