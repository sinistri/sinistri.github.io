document.addEventListener("DOMContentLoaded", function() {
  const carouselInner = document.querySelector(".carousel-inner");
  const slides = carouselInner.querySelectorAll("img");
  const totalSlides = slides.length;
  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }, 3000);

  function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * 250}px)`;
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('user-form');
    const modal = document.getElementById('myModal');
    const modalText = document.getElementById('modal-text');
    const confirmBtn = document.getElementById('confirm-btn');
    const cancelBtn = document.getElementById('cancel-btn');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const id = document.getElementById('id').value;
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;

        modalText.innerHTML = `
            <p><strong>ID:</strong> ${id}</p>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Apellido:</strong> ${apellido}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Email:</strong> ${email}</p>
        `;

        modal.style.display = 'block';
    });

    confirmBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        form.submit();
    });

    cancelBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});