/* EJEMPLOS:
Algoritmo unicamente para acceso de estudiantes de esta comision 54925. Si no son de esta comision deberia darle un mensaje de que no tiene acceso.
Salbo que quien consulte, sea Maria de la comision 54123. Ella si puede tener acceso.
Aca se puede implementar el uso de toLoweCase */

const estaComision = 54925
let comisionUser = parseInt(prompt("Decime tu numero de comision"))
if (estaComision === comisionUser){
    alert("Por ahora llevamos visto Variables y condicionales")
} else if (comisionUser === 54123){
    let nombreUser = prompt("Como es tu nombre?").loLowerCase()
    if ((nombreUser = "maria") || (nombreUser == "maría")){
        alert("Maria, por ahora llevamos visto Variables y condicionales en la comision 54925")
    } else{
        alert("No tenes acceso a esta informacion")
    }
}else{
    alert("No tenes acceso a esta informacion")
}


/* EJEMPLO 2:
 Crear un Script que evalue las notas de un estudiante. 
 Pedir de a una nota. Si la nota es mayor a 4 pasa de instancia (le pedimos una nueva nota), si es menor a cuatro, termina el proceso.
 Acumular en una variable las notas que se vayan ingresando a cada instancia para que, si se validan las 3 notas, calcular el promedio y mostrarlo.
 Plus: se puede evaluar el promedio e informar si promociona (>=7), da final (<=4) o recursa.
 El promedio es la suma de las 3 notas dividido entre 3. */

 let primerNota = parseInt(prompt("Cual fue tu primer nota?"))
 if (primerNota >=4){
    let segundaNota = parseInt(prompt("Bien! Aprobaste, cual fue tu segunda nota?"))
    if (segundaNota >=4) {
    let terceraNota = parseInt(prompt("Bien! Aprobaste, cual fue tu tercer nota?"))
    let promedioNotas = (primerNota+segundaNota+terceraNota)/3
    }
 } else{
    alert("Desaprobaste, no podes promocionar")
 }

/* OTRA FORMA */

let sumaNota = 0
let nombre = prompt("Ingrese nota 1er trimeste")

if (notaAlumno >=4){
    sumaNota += notaAlumno;
    notaAlumno = parseInt(prompt("Ingrese nota 2do trimestre"))
    if (notaAlumno >=4){ 
        sumaNota += notaAlumno;
        notaAlumno = parseInt(prompt("Ingrese nota 3er trimestre"))
        if (notaAlumno >=4){
            sumaNota += notaAlumno;
            let promedio = sumaNota / 3
            alert (`${nombre} obtuvo una nota promedio de ${promedio}`)
        }else{
            alert("Se quedo afuera en el 3er trimestre")
        }
    }else{
        alert("Se quedo afuera en el 2do trimestre")
    }
}else{
    alert("Se quedo afuera en el 1er trimestre")
}