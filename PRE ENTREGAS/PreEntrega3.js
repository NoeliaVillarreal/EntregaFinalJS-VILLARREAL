// Referencias al html
const nombreInput = document.getElementById('nombre');
const fechaInput = document.getElementById('fecha');
const horaInput = document.getElementById('hora');
const turnosLista = document.getElementById('turnos');

// Almacenamiento local
let turnos = JSON.parse(localStorage.getItem('turnos')) || [];

// Función para mostrar los turnos
function mostrarTurnos() {
  // Limpiar la lista de turnos
  turnosLista.innerHTML = '';
  
  // Recorrer el array de turnos y crear los elementos
  for (let i = 0; i < turnos.length; i++) {
    const turno = turnos[i];
    const li = document.createElement('li');
    li.textContent = `Nombre: ${turno.nombre} - Fecha: ${turno.fecha} - Hora: ${turno.hora}`;
    turnosLista.appendChild(li);
  }
}

// Función para reservar un turno
function reservarTurno() {
  const nombre = nombreInput.value;
  const fecha = fechaInput.value;
  const hora = horaInput.value;
  
  // Validar que se hayan ingresado nombre, fecha y hora
  if (nombre === '' || fecha === '' || hora === '') {
    alert('Por favor ingresa tu nombre, la fecha y la hora del turno.');
    return;
  }
  
  // Crear un objeto turno
  const turno = {
    nombre,
    fecha,
    hora
  };
  
  // Agregar el turno al array de turnos
  turnos.push(turno);
  
  // Guardar los turnos en el almacenamiento 
  localStorage.setItem('turnos', JSON.stringify(turnos));
  
  // Mostrar los turnos actualizados
  mostrarTurnos();
  
  // Limpiar datos
  nombreInput.value = '';
  fechaInput.value = '';
  horaInput.value = '';
}

// Ejecuccion
mostrarTurnos();