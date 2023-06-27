// funciones - expresiones

// let vida = 100

// escribir una funciòn que reduzca la vida en un valor determinado

// function recibirGolpe() {
//     vida -= 30
// }

// función anónima

// const recibirGolpe = function() {
//     vida -= 30
// }

// las funciones anónimas son anónimas

// const recibirGolpe = () => {
//     vida -= 30
// }

// función flecha con parámnetro

// const recibirGolpe = (danio) => {
//     vida -= danio

//     if (vida < 0) {
//         vida = 0
//     }
// }


// recibirGolpe(110)
// recibirGolpe(-5)

// console.log(vida)

// función sumar

// const sumar = (a, b) => {
//     return a + b
// }

// función de flecha con sintáxis mejorada

// const sumar = (a, b) => a + b

// const resultado = sumar(5, 8)

// console.log(resultado)

// objetos - desestructuración

// const user = {
//     full_name: "John Doe",
//     age: 30,
//     curso: "ReactJS"
// }

// let nombre = user.nombre
// let edad = user.edad

// sinaxis de la desestructuración
// const {prop1, prop2, ...p} = Obj

// const { nombre, edad } = user

// traer variable y guardarla con otro nombre

// const { full_name: nombre, age: edad } = user

// desestructurar objeto con otro objeto
// desestructura por niveles

// const user = {
//     full_name: "John Doe",
//     age: 30,
//     curso: "ReactJS",
//     phone: {
//         home: 12345,
//         mobile: 4561230
//     }
// }

// const { age, phone: { mobile } } = user

// desestructuración de arrays
// acá la desestructuración funciona por índice del elemento

const usuarios = ["Jorge", "Raul", "Julieta", "Matias"]

// traer los dos primeros
// const [a, b] = usuarios

// traer otros
// const [,, a, b] = usuarios

// arreglo con distinta información

// const arr = [24, "ReactJS", "Joao Moraes"]

// const [edad, curso, nombre] = arr

// console.log(edad)
// console.log(curso)
// console.log(nombre)

// op. ternario

// const temperatura = 30

// if (temperatura > 20) {
//     console.log("Día caluroso")
// } else {
//     console.log("Día fresco")
// }

// op. ternbario
// conbdición ? caso1 : caso2
// siempre se utiliza con las 3 partes

// temperatura >= 20 ? console.log("Día caluroso") : console.log("Día fresco")

// con uso de variable

// let mensaje

// if (temperatura > 20) {
//     mensaje = "Día caluroso"
// } else {
//     mensaje = "Día fresco"
// }

// uso de variable con op. ternario

// const mensaje = temperatura >= 20 ? "Día caluroso" : "Día fresco"
// console.log(mensaje)

// valores falsy: false, 0, '', null, undefined, NaN

// AND &&
console.log( 0 && "Hola mundo" )
// OR ||
console.log( 0 || "Hola mundo" )