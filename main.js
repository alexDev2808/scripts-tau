const tablaFechas = document.getElementById("t-fechas")
const inputFInicial = document.getElementById("fechaInicial")
const inputFFinal = document.getElementById("fechaFinal")
const btnGenerar = document.getElementById("btn-generar")
const toggleReps = document.getElementById("toggleReps")
const containerReps = document.getElementById("container-reps")
const inputNumReps = document.getElementById("numReps")

let isOn = false

function generarFechas({diaInicio, diaFin, mes, anio, numReps}) {
    const fechas = []
    let texto = ""

    for(let i=diaInicio; i <= diaFin; i++) {
        let fechaDia = `${i}/${mes}/${anio}`
        for(let j=0; j < numReps; j++){
            fechas.push(fechaDia)
        }
    }
    
    for(let i=0; i < fechas.length; i++){
        texto += `<tr>
                    <td>${fechas[i]}</td>
                  </tr>`
    }
    
    tablaFechas.innerHTML = texto
}

btnGenerar.addEventListener("click", () => {
    const fechaInicio = inputFInicial.value.split("-")
    const fechaFin = inputFFinal.value.split("-")
    const numReps = inputNumReps.value ? parseInt(inputNumReps.value) : 1

    const diaInicio = parseInt(fechaInicio[2], 10)
    const mes = parseInt(fechaInicio[1],10)
    const anio = parseInt(fechaInicio[0],10)
    const diaFin = parseInt(fechaFin[2],10)

    const datos = { diaInicio, diaFin, mes, anio, numReps }
    
    generarFechas(datos)

    
})

toggleReps.addEventListener("click", () => {
    isOn = !isOn
    
    if(isOn){
        containerReps.classList.remove("d-none")
    } else {
        inputNumReps.value = 1
        containerReps.classList.add("d-none")
    }
})