const Proceso = require('./proceso')
const Lista = require('./lista')

//let lista = new Lista

/*
let proceso1 = new Proceso
let proceso2 = new Proceso
let proceso3 = new Proceso
let proceso4 = new Proceso
let proceso5 = new Proceso
let proceso6 = new Proceso

lista.agregar(proceso1)
lista.agregar(proceso2)
lista.agregar(proceso3)
lista.agregar(proceso4)
*/

/*
console.log(proceso1.duracion)
console.log(proceso2.duracion)
console.log(proceso3.duracion)
console.log(proceso4.duracion)

console.log(proceso1.siguiente.duracion)
console.log(proceso2.siguiente.duracion)
console.log(proceso3.siguiente.duracion)
console.log(proceso4.siguiente.duracion)

console.log(proceso1.anterior.duracion)
console.log(proceso2.anterior.duracion)
console.log(proceso3.anterior.duracion)
console.log(proceso4.anterior.duracion)
*/

let lista = new Lista
//let proceso1 = new Proceso
//console.log(proceso1.duracion)
//console.log(lista)


for (let i = 0; i<300; i++){
    let proceso = new Proceso
    let probabilidad = Math.floor(Math.random() * 100)
    if (probabilidad < 40){
        lista.agregar(proceso)
        //console.log(proceso)   
    }
}