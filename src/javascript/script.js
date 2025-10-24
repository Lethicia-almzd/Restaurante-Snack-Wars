
$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-x');
    });

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        const alvo = $(this.getAttribute('href'));
        if (alvo.length) {
            $('html, body').animate({
                scrollTop: alvo.offset().top
            }, 800);
        }

        if ($('#mobile_menu').hasClass('active')) {
            $('#mobile_menu').removeClass('active');
            $('#mobile_btn').find('i').removeClass('fa-x');
        }
    });
});

function mostrarAoRolar(selector) {
    const elementos = document.querySelectorAll(selector);
    const alturaJanela = window.innerHeight;

    elementos.forEach(el => {
        const posicao = el.getBoundingClientRect().top;
        if (posicao < alturaJanela - 50) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', () => {
    mostrarAoRolar('.dish');
    mostrarAoRolar('.feedback'); 
});

window.addEventListener('resize', () => {
    mostrarAoRolar('.dish');
    mostrarAoRolar('.feedback');
});

document.addEventListener('DOMContentLoaded', () => {
    mostrarAoRolar('.dish');
    mostrarAoRolar('.feedback');
});
