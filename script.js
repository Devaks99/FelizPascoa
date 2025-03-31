document.addEventListener('DOMContentLoaded', () => {
    // Configuração das partículas
    tsParticles.load("tsparticles", {
        particles: {
            number: { 
                value: 30,  // Aumentado para melhor visibilidade
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: { 
                value: ["#ffffff", "#e6f7ff", "#ccebff"] 
            },
            shape: { 
                type: "circle" 
            },
            opacity: { 
                value: 0.7,  // Aumentado
                random: false 
            },
            size: { 
                value: 15, 
                random: true 
            },
            move: {
                enable: true,
                speed: 2,  // Aumentado
                direction: "bottom",
                straight: false,  // Permitir movimento natural
                out_mode: "bounce",  // Alterado para "bounce"
                bounce: true
            }
        },
        interactivity: { 
            events: { 
                onhover: { 
                    enable: false 
                }, 
                onclick: { 
                    enable: false 
                } 
            } 
        },
        retina_detect: true,
        background: {
            color: "transparent"  // Importante para não cobrir o gradiente
        }
    }).catch(error => {
        console.error("Erro ao carregar partículas:", error);
    });
});

    // Elementos DOM
    const egg = document.querySelector('.egg');
    const btnQuebrar = document.querySelector('.btn-quebrar');
    const mensagemDiv = document.querySelector('.mensagem');


    // Animação de quebra do ovo
    btnQuebrar.addEventListener('click', () => {
        document.querySelector('.egg-top').classList.add('quebrado');
        
        setTimeout(() => {
           document.querySelector('.egg').style.display = 'none';
            btnQuebrar.style.display = 'none';
            mensagemDiv.classList.add('visible');
            
             // Efeitos novos
        startConfetti();
        startFallingElements();

            // Animação de texto digitado
       new Typed('#mensagem-digitada', {
            strings: [
                'Que esta Páscoa traga muitas alegrias, ^500<br> chocolates e renovação para a sua vida! ^1000\n\nUm coelhinho carregando bênçãos ^500\n chegou até você! 🐰🥚'
            ],
            typeSpeed: 40,
            backSpeed: 0,
            showCursor: false,
            smartBackspace: false
        });
    }, 1000);
    });


    // Efeito Parallax suave
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        egg.style.transform = `translateY(${scrolled * 0.3}px)`;
    });


function startConfetti() {
    const count = 200;
    const defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
}

function createFallingElement(emoji, className) {
    const element = document.createElement('div');
    element.className = `falling-element ${className}`;
    element.textContent = emoji;
    element.style.left = Math.random() * window.innerWidth + 'px';
    element.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(element);

    setTimeout(() => element.remove(), 5000);
}

function startFallingElements() {
    const elements = [
        { emoji: '🥚', class: 'egg-fall' },
        { emoji: '🍫', class: 'chocolate-fall' },
        { emoji: '🎉', class: 'egg-fall' }
    ];

    setInterval(() => {
        const element = elements[Math.floor(Math.random() * elements.length)];
        createFallingElement(element.emoji, element.class);
    }, 300);
}