const contenedor = document.getElementById("contenedor")
const fechas = []
let parrafo = ""

const anio = 2024
let mes = 8
let dia = 31
let textoFecha = ""

for(let i=1; i <= dia; i++) {
    let fechaDia = `${i}/${mes}/${anio}`
    for(let j=0; j <= 22; j++){
        console.log(fechaDia)
        fechas.push(fechaDia)
    }
}

for(let i=0; i < fechas.length; i++){
    parrafo += `<p>${fechas[i]}</p>`
}

contenedor.innerHTML = parrafo

