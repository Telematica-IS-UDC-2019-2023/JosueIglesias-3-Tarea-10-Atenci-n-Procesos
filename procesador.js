const Proceso = require('./proceso')
const Lista = require('./lista')

let lista = new Lista

let t = null
let SinProcesos = 0
let procesosAtendidos = 0
let ciclosTotales = 0
let ciclosEjecutados = 0
let procesosTotales = 0
for (let i = 0; i<300; i++){
    let proceso = new Proceso
    let probabilidad = Math.floor(Math.random() * 100)
    if (probabilidad < 40){
        if(lista.inicio == null){
            lista.agregar(proceso)
            ciclosTotales += proceso.duracion
            procesosTotales ++
            t = lista.inicio
        } else{
            lista.agregar(proceso)
            procesosTotales ++
            ciclosTotales += proceso.duracion 
        }
    }
    if(lista.inicio != null){
        t.duracion--
        ciclosEjecutados++
        if (t.duracion === 0){
            lista.eliminar(t)
            procesosAtendidos++
        }
        t=t.siguiente
    } else {
        SinProcesos ++
    }
} 

console.log('Procesos atendidos: ' + procesosAtendidos)
console.log('Procesos pendientes: ' + (procesosTotales-procesosAtendidos))
console.log('Ciclos sin procesos: ' + SinProcesos)
console.log('Ciclos pendientes: '+ (ciclosTotales-ciclosEjecutados))
