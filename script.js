document.addEventListener('DOMContentLoaded', () => {
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
            
              // Mostrar coelho após a mensagem
        setTimeout(() => {
            document.querySelector('.coelho-animado').style.display = 'block';
        }, 1500); // Tempo para aparecer após a mensagem

        
            // Efeitos novos
            startConfetti();
            startFallingElements();

            new Typed('#mensagem-digitada', {
                strings: [
                    'Que esta Páscoa traga muitas alegrias, ^500<br> chocolates e renovação para a sua vida! ^1000\n\nUm coelhinho carregando bênçãos ^500\n chegou até você!'
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
});