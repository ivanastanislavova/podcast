
const corazones = document.querySelectorAll('.corazon');
const comentarios = document.querySelectorAll('.comentarios');
console.log(corazones);
corazones.forEach((corazon) => {
    corazon.addEventListener('click', function () {
        this.classList.toggle('like');
    });
});

comentarios.forEach((comentario) => {
    comentario.addEventListener('click', function () {
        this.classList.toggle('like');
    });
});

const video = document.getElementById('video');
const playpausebtn = document.getElementById('playpausebtn');
const fullscreenbtn = document.getElementById('fullscreenbtn');
const volumen = document.getElementById('volumen');

playpausebtn.addEventListener('click', function() {
    if (video.paused || video.ended) {
        video.play();
        playpausebtn.textContent = 'Pausar';
    } else {
        video.pause();
        playpausebtn.textContent = 'Reproducir';
    }
});

fullscreenbtn.addEventListener('click', function() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
    }
});

volumen.addEventListener('input', function() {
    video.volume = volumen.value;
});

const imagen = document.getElementById('imagen');
const popup = document.getElementById('popup');
const body = document.getElementById('body');

imagen.addEventListener('click', () => {
    popup.style.display = 'block';
    body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
});

function cerrarPopup() {
    popup.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.barra-navegacion ul li a');
    const barra = document.querySelector('.barra');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Mueve la barra hacia el enlace seleccionado
            const offsetLeft = this.parentElement.offsetLeft;
            const offsetWidth = this.parentElement.offsetWidth;
            barra.style.left = offsetLeft + 'px';
            barra.style.width = offsetWidth + 'px';
            console.log('offsetLeft: ' + offsetLeft);
            // Agrega o remueve la clase 'active' según el enlace seleccionado
            links.forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });


});



