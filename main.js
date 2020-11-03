"use strict";
/* TIPOS DE DATOS */
/* Tipos booleanos */
var vivo = true;
var muerto = false;
var neutral;
/* Tipo number */
var numero = 10;
var otroNumero = 3.2;
/* Tipo string */
var nombre = "Ronald";
var apellido = "Orellana";
var fullname = nombre + " " + apellido;
/* Arreglos y tuplas */
/* Arreglo */
var nombres = ["Ronald", "Jose", "Angel"];
/* Tuplas */
var arreglo = [true, "Hola"];
/* Enums */
var Roles;
(function (Roles) {
    Roles[Roles["Admin"] = 0] = "Admin";
    Roles[Roles["User"] = 1] = "User";
    Roles[Roles["Guest"] = 2] = "Guest";
})(Roles || (Roles = {}));
;
var usuario = Roles.Admin;
console.log(usuario);
/* TIPOS DE VALORES */
/* Void, undefined, null */
//Void
function saludar() {
    alert("Hola");
}
//Undefined
var identificacion = undefined;
//Null
var identificacion2 = null;
//Never
function cicloInfinito() {
    //se detiene al encontrar un error
    throw new Error('Hay un error');
    console.log('Esto de aquí ya no importa');
}
/* CAST DE UN TIPO DE VALOR A OTRO */
//Any
//Cuando no le asignamos a la variable el tipo de dato, por defecto el lo
//toma como tipo Any
var saludo = "Hola mundo";
var saludo2 = "Esto es lo mismo que la línea de arriba";
//TypeScript al no saber que tipo de dato tenemos en la variable
//Ya no nos sugiere ningun metodo al momento de querer trabajar saludo.
/* Casteo de variables */
saludo; //esto no cambia el tipo de dato, solo le dice como queremos trabajar la variable
/* FUNCIONES */
function saludarPersona(nombre) {
    return 'Hola ' + nombre;
}
saludarPersona("Ronald");
function alertar() {
    alert("Esto es una alerta");
}
var miFuncion; //variable de tipo funcion que no devuelve nada
miFuncion = alertar; //asignadole el valor de la funcion alertar()
/* FUNCIONES CON PARAMETROS */
//parametros obligatorios
/*function crearPersona(nombre:string, apellido:string){
    return {
        nombre: nombre,
        apellido: apellido
    }
}

let persona = crearPersona('Ronald', 'Orellana');*/
//parametros opcionales
//colocando el signo de interrogación en el parametro opcional estamos diciendole
//a TypeScript que pueden o no enviarle el apellido
function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    };
}
var persona = crearPersona('Ronald');
/* OBJETOS */
var persona2 = {
    nombre: "Ron",
    edad: 21
};
var persona23 = {
    nombre: "Ron",
    edad: 21,
    decirEdad: function () {
        return "Mi edad es " + this.edad;
    }
};
//objeto
var persona4 = {
    nombre: "Ronald",
    edad: 32,
    altura: 175,
    decirNombre: function () {
        return this.nombre;
    }
};
/* UNION DE TIPOS */
//acepta cualquiera de los tres tipos de datos,
//inicialmente estará null a futuro podemos asignarle un nombre como
// 'puppy'
var nombreMascota;
console.log(typeof nombreMascota);
