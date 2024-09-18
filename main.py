
fechas = []

anio = 2024
mes = 10
diaInicio = 1
diaFin = 31
numInicio = 2
numFin = 30
repeticionesFecha = 9
numReps = 5
textoFecha = ""

subAreas: list = [
    "Planeacion",
    "Procesos",
    "Cambio de Placa",
    "Dado",
    "Maquina",
    "Operaciones",
    "Arranque / C. Planta",
    "Ausentismo",
    "Pruebas"
]

def generarFechas():
    for i in range(diaInicio, diaFin + 1):
        textoFecha = f"{mes}/{i}/{anio}"
        for j in range(1, repeticionesFecha + 1):
            print(f"{textoFecha}")


def generarSubAreas():
    for i in range(diaInicio, diaFin + 1):
        for j in range(0, len(subAreas)):
            print(subAreas[i])

def generarNumeros():
    for i in range(numInicio, numFin + 1):
        for j in range(1, numReps + 1):
            print(j)   

generarFechas()
# generarSubAreas()
# generarNumeros()