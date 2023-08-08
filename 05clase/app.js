class Persona{
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad   = edad;
        this.calle  = calle;
    }

    saludar(){
        //let msj = "Hola soy "+this.nombre+" y los estoy saludando!"
        //return msj
        return "Hola soy "+this.nombre+" y los estoy saludando!"
    }

    descripcion(){
        //let msj = "Nombre: "+this.nombre+"\nEdad: "+this.edad+"\nCalle: "+this.calle
        //return msj
        return "Nombre: "+this.nombre+"\tEdad: "+this.edad+"\tCalle: "+this.calle
    }
}

let rta = ""
let listaPersonas = ""
do{

    let nombre = prompt("Ingrese su nombre")
    let edad = Number(prompt("Ingrese su edad"))
    let calle = prompt("Ingrese su calle")

    let objeto_persona = new Persona(nombre, edad, calle)

    listaPersonas = listaPersonas + objeto_persona.descripcion() + "\n"
    //listaPersonas = listaPersonas + "Nombre: "+objeto_persona.nombre+"\tEdad: "+objeto_persona.edad+"\tCalle: "+objeto_persona.calle+"\n"

    alert(listaPersonas)

    rta = prompt("¿Desea cargar otra persona? (Escriba 'ESC' para salir)")
}while(rta != 'ESC')