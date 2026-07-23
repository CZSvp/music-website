// Inicializar EmailJS
emailjs.init('SERVICE_ID_PLACEHOLDER'); // Se actualizará con tu ID de servicio

// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Manejo del formulario de contacto con EmailJS
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const statusMessage = document.getElementById('statusMessage');
        statusMessage.textContent = 'Enviando...';
        statusMessage.style.color = '#FFD700';
        
        // Datos del formulario
        const templateParams = {
            to_email: 'czstudioorig@gmail.com',
            from_name: document.getElementById('nombre').value,
            from_email: document.getElementById('email').value,
            message: document.getElementById('mensaje').value
        };
        
        // Enviar email
        emailjs.send('SERVICE_ID_PLACEHOLDER', 'TEMPLATE_ID_PLACEHOLDER', templateParams)
            .then(function(response) {
                statusMessage.textContent = '¡Gracias por tu mensaje! Me pondré en contacto pronto.';
                statusMessage.style.color = '#4CAF50';
                contactForm.reset();
                
                // Limpiar mensaje después de 5 segundos
                setTimeout(() => {
                    statusMessage.textContent = '';
                }, 5000);
            }, function(error) {
                statusMessage.textContent = 'Error al enviar el mensaje. Intenta de nuevo.';
                statusMessage.style.color = '#f44336';
                console.error('Error de EmailJS:', error);
            });
    });
}

// Agregar clase activa al navegar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});
