/* TIPOS DE DATOS */

/* Tipos booleanos */
let vivo:boolean = true;
let muerto:boolean = false;
let neutral:boolean;

/* Tipo number */
let numero:number = 10;
let otroNumero:number = 3.2;

/* Tipo string */
let nombre:string = "Ronald";
let apellido:string = "Orellana";
let fullname:string = `${nombre} ${apellido}`;

/* Arreglos y tuplas */

/* Arreglo */
let nombres:string[] = ["Ronald", "Jose", "Angel"];

/* Tuplas */
let arreglo:[boolean, string] = [true, "Hola"];

/* Enums */
enum Roles {Admin, User, Guest};

let usuario:Roles = Roles.Admin;
console.log(usuario);


/* TIPOS DE VALORES */

/* Void, undefined, null */
//Void
function saludar():void{
    alert("Hola");
}

//Undefined
let identificacion:undefined = undefined;

//Null
let identificacion2:null = null;

//Never
function cicloInfinito():never{
    //se detiene al encontrar un error
    throw new Error('Hay un error');

    console.log('Esto de aquí ya no importa');
}

/* CAST DE UN TIPO DE VALOR A OTRO */

//Any

//Cuando no le asignamos a la variable el tipo de dato, por defecto el lo
//toma como tipo Any
let saludo = "Hola mundo";
let saludo2:any = "Esto es lo mismo que la línea de arriba";
//TypeScript al no saber que tipo de dato tenemos en la variable
//Ya no nos sugiere ningun metodo al momento de querer trabajar saludo.

/* Casteo de variables */

(<string>saludo); //esto no cambia el tipo de dato, solo le dice como queremos trabajar la variable

/* FUNCIONES */

function saludarPersona(nombre:string){
    return 'Hola ' + nombre;
}

saludarPersona("Ronald");

function alertar(){
    alert("Esto es una alerta");
}

let miFuncion:() => void; //variable de tipo funcion que no devuelve nada

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
function crearPersona(nombre:string, apellido?:string){
    return {
        nombre: nombre,
        apellido: apellido
    }
}

let persona = crearPersona('Ronald');


/* OBJETOS */

let persona2 = {
    nombre:"Ron",
    edad:21
}

let persona23: {nombre:string, edad:number, decirEdad:() => string} = {
    nombre:"Ron",
    edad:21,
    decirEdad(){
        return "Mi edad es " + this.edad;
    }
}

/* OBJETOS PERSONALIZADOS */
//tipo
type Persona = {
    nombre:string;
    edad:number;
    altura:number;
    decirNombre:() => string;
}

//objeto
let persona4:Persona = {
    nombre: "Ronald",
    edad: 32,
    altura: 175,
    decirNombre(){
        return this.nombre;
    }
}

/* UNION DE TIPOS */
//acepta cualquiera de los tres tipos de datos,
//inicialmente estará null a futuro podemos asignarle un nombre como
// 'puppy'
let nombreMascota:string | undefined | null;

console.log(typeof nombreMascota);