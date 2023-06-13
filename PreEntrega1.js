/* Se realizara un simulador interactivo basico para la reserva de turnos, la idea es realizarlo para poder reservar citas en el local de Lola Stores Valencia */


// Declaración de variables
const cantidadTurnos = 5;
let turnosDisponibles = cantidadTurnos;
const turnosReservados = [];

// Función para mostrar los turnos disponibles
function mostrarTurnosDisponibles() {
  alert(`Turnos disponibles: ${turnosDisponibles}`);
}

// Función para mostrar los turnos reservados
function mostrarTurnosReservados() {
  alert(`Turnos reservados: ${turnosReservados}`);
  for (let i = 0; i < turnosReservados.length; i++) {
    alert(`- ${turnosReservados[i]}`);
  }
}

// Función para reservar un turno
function reservarTurno() {
  if (turnosDisponibles > 0) {
    const nombre = prompt("Ingrese su nombre para reservar su turno:");
    turnosReservados.push(nombre);
    turnosDisponibles--;
    alert(`¡Turno reservado para ${nombre}!`);
  } else {
    alert("No quedan turnos disponibles.");
  }
}

// Función principal
function simuladorReservaTurnos() {
  let continuar = true;

  while (continuar) {
    const opcion = prompt(
      "Seleccione una opción:\n1. Ver turnos disponibles\n2. Ver turnos reservados\n3. Reservar turno\n4. Salir"
    );

    switch (opcion) {
      case "1":
        mostrarTurnosDisponibles();
        break;
      case "2":
        mostrarTurnosReservados();
        break;
      case "3":
        reservarTurno();
        break;
      case "4":
        continuar = false;
        break;
      default:
        alert("Opción inválida.");
        break;
    }
  }

  alert("Ingrese una opcion");
}


