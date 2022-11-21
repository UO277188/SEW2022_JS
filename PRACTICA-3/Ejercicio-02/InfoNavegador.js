"use strict"
class InfoNavegador {
    nombre = navigator.appName;
    idioma = navigator.language;
    version = navigator.appVersion;
    plataforma = navigator.platform;
    vendedor = navigator.vendor;
    agente = navigator.userAgent;
    javaActivo = navigator.javaEnabled();
}

var infoNavegador = new InfoNavegador();