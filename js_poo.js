
// propiedades y objetos anidados

let persona = {

    nombre: "Miguel",
    apellido: "Pérez",
    edad: 32,
    "padre persona": {
        nombre: "Luis",
        apellido: "Pérez",
        edad: 61
    },

    setName(name){
        this.nombre = name
    }

} 

// Llamadas a las propiedades: Notación de punto y corchetes / creación de nuevas propiedades



// Funciones propias de objetos
    // for in
    for (const key in persona) {
        console.log(key)
    }

    // if(in)
    if(["padre persona"] in persona){
        console.log("Hola")
    } else {
        console.log("No")
    }
    
    // Object.freeze
    Object.freeze(persona)
    console.log(persona.apellido = "hola")

    // object.hasOwnProperty("")
    console.log(persona.hasOwnProperty("apellido"))

    // Object.key / Object.values
    console.log(Object.keys(persona))
    console.log(Object.values(persona))



// métodos en objetos

let alumno = {

    nombre: "Pablo",
    clase: "1ºA",
    nota_media: 6.8,

    getName(){
        return this.nombre
    },

    setName(nuevoNombre){
        this.nombre = nuevoNombre
    }
}

alumno.setName("Miguel")

console.log(alumno.getName())


// 1. Dado un objeto haz un método que salude por nombre y apellido
let niño = {
    nombre: "Jose",
    apellido: "Hernández"
}

// 2. Dado el objeto anterior haz dos métodos más que permitan obtener el nombre y el apellido



// 3. Con el mismo objeto anterior haz dos métodos que permitan cambiar el nombre y el apellido



// 4. Ahora haz que al mismo objeto no se le pueda cambiar ninguna propiedad


 
// 5. Haz una función que reciba un objeto como parámetro y devuelva todas sus propiedades en un array



// 6. Haz una función que reciba un objeto como parámetro y devuelva todos sus valores en un array



// 7. Haz una función que tome como parámetros un objeto y un string que será el nombre de una propiedad. La función debe devolver true si se encuentra la propiedad dentro del objeto y false si no es así
