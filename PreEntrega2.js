
let nameUser = prompt("Indicanos tu nombre para reservar turno en LOLA STORES")

// Objeto para turnos
function Turno(hora, disponible) {
    this.hora = hora;
    this.disponible = disponible;
  }
  
  // Array para turnos
  let turnos = [
    new Turno('09:00', true),
    new Turno('10:00', true),
    new Turno('11:00', true),
    new Turno('12:00', true),
    new Turno('13:00', true)
  ];
  
  // Función de orden superior para reservar un turno
  function reservarTurno(turno) {
    return function() {
      if (turno.disponible) {
        turno.disponible = false;
        alert(`¡Turno reservado con éxito para ${nameUser}!`);
      } else {
        alert('Lo siento, este turno ya está reservado. Por favor, elija otro.');
      }
    };
  }
  
  // Mostrar lista de turnos
  function mostrarTurnos() {
    let listaTurnos = 'Horarios Disponibles:\n';
    turnos.forEach(function(turno, indice) {
      listaTurnos += (indice + 1) + '. ' + turno.hora + ' - ' + (turno.disponible ? 'Disponible' : 'No disponible') + '\n';
    });
    alert(listaTurnos);
  }
  
  // Selección del turno
  function seleccionarTurno() {
    let seleccion = prompt('Ingrese el número del turno que desea reservar:');
    let indice = parseInt(seleccion) - 1;
  
    if (isNaN(indice) || indice < 0 || indice >= turnos.length) {
      alert('La opción que seleccionaste es inválida. Inténtalo de nuevo.');
    } else {
      let turno = turnos[indice];
      reservarTurno(turno)();
      mostrarTurnos();
    }
  }
  
  // Inicio del simulador
  alert(`Bienvenid@ ${nameUser} a nuestro sistema de reservas :)`);
  
  while (true) {
    mostrarTurnos();
    seleccionarTurno();
  
    let continuar = confirm('¿Desea reservar algún otro turno?');
    if (!continuar) {
      break;
    }
  }
  
  alert('¡Gracias por tu reserva, te esperamos!');
  