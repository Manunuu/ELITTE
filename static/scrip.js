// Obtener el parámetro de la URL que contiene el nombre de usuario
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

// Mostrar el mensaje de bienvenida
if (username) {
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.textContent = `¡Bienvenido ${username}!`;
    welcomeMessage.style.display = 'block';

    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => {
        welcomeMessage.style.display = 'none';

        // Mostrar los botones de fiestas disponibles
        const fiestasButtons = document.querySelector('.buttons:first-child');
        fiestasButtons.style.display = 'flex';

        // Mostrar los botones adicionales en la ventana de inicio
        const inicioButtons = document.querySelector('.buttons:last-child');
        inicioButtons.style.display = 'flex';
    }, 5000);
}

function showFiestas() {
    const fiestasContainer = document.getElementById('fiestasContainer');
    fiestasContainer.style.display = 'block';
}

function goBack() {
    const fiestasContainer = document.getElementById('fiestasContainer');
    fiestasContainer.style.display = 'none';
}

function showReseñas() {
    // Agrega el código para mostrar las reseñas de fiestas pasadas aquí
}

function showQuienesSomos() {
    // Agrega el código para mostrar la información de "Quienes somos" aquí
}

function publicaTuFiesta() {
    // Agrega el código para mostrar el formulario de "Publica tu fiesta" aquí
}