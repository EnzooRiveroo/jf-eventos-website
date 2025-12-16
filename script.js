particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#64FFDA"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#64FFDA"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#64FFDA",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "repulse": {
                "distance": 100,
                "duration": 0.4
            }
        }
    },
    "retina_detect": true
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const statusMessage = document.getElementById('statusMessage');
    statusMessage.classList.remove('hidden');
    statusMessage.innerHTML = `<span class="text-[#64FFDA]">Enviando mensaje...</span>`;

    setTimeout(() => {
        statusMessage.innerHTML = `<span class="text-green-400"><i class="fas fa-check-circle"></i> ¡Mensaje enviado con éxito! Te contactaremos pronto.</span>`;
        document.getElementById('contactForm').reset();
    }, 2000);
});