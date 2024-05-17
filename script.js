<!-- archivo script.js -->

// Array para almacenar los tickets
const tickets = [];

// Captura el envío del formulario
const ticketForm = document.getElementById('ticketForm');
ticketForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que se recargue la página
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;

    // Crea un objeto de ticket
    const nuevoTicket = {
        nombre,
        descripcion,
        fecha: new Date().toLocaleString(), // Puedes agregar más propiedades si lo deseas
    };

    // Agrega el ticket al array
    tickets.push(nuevoTicket);

    // Limpia el formulario
    document.getElementById('nombre').value = '';
    document.getElementById('descripcion').value = '';

    // Puedes mostrar un mensaje de éxito aquí
});

// Para visualizar los tickets en otra página, puedes redirigir o cargar la información en una nueva página HTML.
// Por ejemplo, crea una página llamada "tickets.html" y muestra los tickets allí.

// Captura el envío del formulario
ticketForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;

    // Crea un objeto de ticket
    const nuevoTicket = {
        nombre,
        descripcion,
        fecha: new Date().toLocaleString(),
    };

    // Agrega el ticket al array
    tickets.push(nuevoTicket);

    // Limpia el formulario
    document.getElementById('nombre').value = '';
    document.getElementById('descripcion').value = '';

    // Muestra una ventana emergente con los datos del ticket
    mostrarVentanaEmergente(nuevoTicket);
});

// Función para mostrar la ventana emergente
function mostrarVentanaEmergente(ticket) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Ticket Creado</h2>
            <p>Nombre: ${ticket.nombre}</p>
            <p>Descripción: ${ticket.descripcion}</p>
            <p>Fecha: ${ticket.fecha}</p>
            <button onclick="cerrarVentanaEmergente()">Cerrar</button>
        </div>
    `;
    document.body.appendChild(modal);
}

// Función para cerrar la ventana emergente
function cerrarVentanaEmergente() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}