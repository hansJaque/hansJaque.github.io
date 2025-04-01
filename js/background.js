// Crear el fondo animado con gradientes
const backgroundContainer = document.querySelector('.background-container');

// Crear elementos para los gradientes
function createGradientElements() {
    for (let i = 0; i < 5; i++) {
        const gradientEl = document.createElement('div');
        gradientEl.classList.add('gradient-element');
        backgroundContainer.appendChild(gradientEl);
    }
}

// Inicializar los gradientes
function initGradients() {
    createGradientElements();
    
    const gradients = document.querySelectorAll('.gradient-element');
    
    // Estilos base para los elementos de gradiente
    gsap.set(gradients, {
        position: 'absolute',
        width: 'random(200, 500)',
        height: 'random(200, 500)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        opacity: 0.5,
        background: function(i) {
            const colors = [
                'rgba(108, 99, 255, 0.6)',
                'rgba(255, 101, 132, 0.6)',
                'rgba(67, 206, 162, 0.6)',
                'rgba(240, 147, 43, 0.6)',
                'rgba(83, 82, 237, 0.6)'
            ];
            return colors[i % colors.length];
        },
        x: 'random(0, 100%)' ,
        y: 'random(0, 100%)',
        scale: 0.8
    });
    
    // Animar los gradientes
    gradients.forEach((gradient, i) => {
        gsap.to(gradient, {
            x: 'random(-20%, 120%)',
            y: 'random(-20%, 120%)',
            scale: 'random(0.8, 1.5)',
            opacity: 'random(0.3, 0.7)',
            duration: 'random(15, 30)',
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            delay: i * 2
        });
    });
    
    // Cambiar colores de gradiente al hacer scroll
    ScrollTrigger.create({
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
            const progress = self.progress;
            
            gradients.forEach((gradient, i) => {
                const hue1 = 240 + (progress * 120); // Azul a violeta
                const hue2 = 340 + (progress * 60);  // Rosa a naranja
                const hue3 = 170 - (progress * 100); // Verde a azul
                
                const hues = [hue1, hue2, hue3, (hue1 + hue2) / 2, (hue2 + hue3) / 2];
                const hue = hues[i % hues.length];
                
                gsap.to(gradient, {
                    backgroundColor: `hsla(${hue}, 80%, 60%, 0.6)`,
                    duration: 1
                });
            });
        }
    });
}

// Iniciar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', initGradients);

// Añadir estrellas/partículas al fondo
function createStars() {
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars-container');
    backgroundContainer.appendChild(starsContainer);
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Posicionar aleatoriamente
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 3 + 2;
        
        gsap.set(star, {
            position: 'absolute',
            left: `${x}%`,
            top: `${y}%`,
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '50%'
        });
        
        starsContainer.appendChild(star);
        
        // Animar el brillo
        gsap.to(star, {
            opacity: 0.2,
            duration: duration,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }
}

// Iniciar estrellas
document.addEventListener('DOMContentLoaded', createStars);

// Añadir fragmentos de código flotantes
function createCodeFragments() {
    const codeContainer = document.createElement('div');
    codeContainer.classList.add('code-fragments-container');
    backgroundContainer.appendChild(codeContainer);
    
    // Fragmentos de código para mostrar
    const codeSnippets = [
        '&lt;div class="container"&gt;',
        'function animate() {',
        'const app = new App();',
        '.then(data => {',
        'return response.json();',
        'import React from "react";',
        '@keyframes float {',
        'grid-template-columns:',
        'addEventListener("click",',
        'transform: rotate(45deg);',
        'npm install --save',
        'git commit -m "Fix"',
        '&lt;/body&gt;&lt;/html&gt;',
        'const [state, setState]',
        'export default class',
        '&lt;script src="main.js"&gt;',
        'border-radius: 50%;',
        'useEffect(() => {',
        'async function getData()',
        'margin: 0 auto;'
    ];
    
    // Crear fragmentos de código
    const fragments = [];
    
    for (let i = 0; i < 15; i++) {
        const codeFragment = document.createElement('div');
        codeFragment.classList.add('code-fragment');
        
        // Seleccionar un fragmento aleatorio
        const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        codeFragment.innerHTML = randomSnippet;
        
        // Posicionar aleatoriamente
        const startX = Math.random() * 100;
        const startY = Math.random() > 0.5 ? -10 : 110; // Empezar arriba o abajo
        const size = Math.random() * 0.5 + 0.8; // Tamaño entre 0.8 y 1.3
        const duration = Math.random() * 20 + 30; // Entre 30 y 50 segundos
        const delay = Math.random() * 15; // Retraso aleatorio
        
        gsap.set(codeFragment, {
            position: 'absolute',
            left: `${startX}%`,
            top: `${startY}%`,
            opacity: 0.15,
            scale: size,
            color: 'rgba(108, 99, 255, 0.7)',
            fontFamily: 'monospace',
            fontSize: '14px',
            textShadow: '0 0 5px rgba(108, 99, 255, 0.5)',
            zIndex: -1
        });
        
        codeContainer.appendChild(codeFragment);
        
        // Guardar la animación para poder modificarla después
        const animation = gsap.to(codeFragment, {
            top: startY > 50 ? -10 : 110, // Si empieza abajo, va arriba y viceversa
            duration: duration,
            delay: delay,
            repeat: -1,
            ease: 'none',
            paused: true, // Inicialmente pausada
            onRepeat: () => {
                // Cambiar el fragmento de código en cada repetición
                const newSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
                codeFragment.innerHTML = newSnippet;
                
                // Cambiar posición horizontal aleatoriamente
                gsap.to(codeFragment, {
                    left: `${Math.random() * 100}%`,
                    duration: 0.1
                });
            }
        });
        
        // Animar opacidad y rotación
        gsap.to(codeFragment, {
            opacity: 0.3,
            rotation: Math.random() * 10 - 5,
            duration: Math.random() * 4 + 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
        
        // Guardar referencia al fragmento y su animación
        fragments.push({
            element: codeFragment,
            animation: animation,
            direction: startY > 50 ? -1 : 1, // -1 sube, 1 baja
            baseSpeed: 1 // Velocidad base
        });
        
        // Iniciar la animación
        animation.play();
    }
    
    // Variables para controlar el scroll
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollDirection = 0; // 0 sin scroll, -1 arriba, 1 abajo
    let scrollTimeout;
    
    // Función para manejar el evento de scroll
    function handleScroll() {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        
        // Determinar dirección del scroll
        if (st > lastScrollTop) {
            scrollDirection = 1; // hacia abajo
        } else if (st < lastScrollTop) {
            scrollDirection = -1; // hacia arriba
        }
        
        lastScrollTop = st;
        
        // Actualizar velocidad y dirección de los fragmentos
        fragments.forEach(fragment => {
            // Cuando se scrollea hacia abajo, los fragmentos suben
            // Cuando se scrollea hacia arriba, los fragmentos bajan
            if (scrollDirection === 1) { // scroll hacia abajo
                // Hacer que todos los fragmentos suban
                if (fragment.direction === 1) { // si el fragmento va hacia abajo
                    // Invertir dirección
                    fragment.direction = -1;
                    
                    // Cambiar animación para ir hacia arriba
                    fragment.animation.reverse();
                }
                
                // Acelerar los fragmentos que ya van hacia arriba
                fragment.animation.timeScale(fragment.baseSpeed * 2);
            } else if (scrollDirection === -1) { // scroll hacia arriba
                // Hacer que todos los fragmentos bajen
                if (fragment.direction === -1) { // si el fragmento va hacia arriba
                    // Invertir dirección
                    fragment.direction = 1;
                    
                    // Cambiar animación para ir hacia abajo
                    fragment.animation.reverse();
                }
                
                // Acelerar los fragmentos que ya van hacia abajo
                fragment.animation.timeScale(fragment.baseSpeed * 2);
            }
            
            // Se eliminó la rotación para efecto visual
        });
        
        // Restablecer después de un tiempo sin scroll
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            fragments.forEach(fragment => {
                // Volver a la velocidad normal
                fragment.animation.timeScale(fragment.baseSpeed);
                
                // No es necesario restablecer la rotación ya que se eliminó
            });
            
            scrollDirection = 0;
        }, 150);
    }
    
    // Añadir evento de scroll
    window.addEventListener('scroll', handleScroll);
    
    // Guardar la escala base para cada fragmento
    fragments.forEach(fragment => {
        const computedStyle = window.getComputedStyle(fragment.element);
        const transform = computedStyle.getPropertyValue('transform');
        const matrix = new DOMMatrix(transform);
        fragment.baseScale = matrix.m11; // Escala en el eje X
    });
}

// Iniciar fragmentos de código
document.addEventListener('DOMContentLoaded', createCodeFragments);

// Añadir estilos CSS para el fondo
const style = document.createElement('style');
style.textContent = `
    .gradient-element {
        will-change: transform, opacity, background-color;
    }
    
    .stars-container {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
    }
    
    .star {
        will-change: opacity;
    }
    
    .code-fragments-container {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow: hidden;
        pointer-events: none;
    }
    
    .code-fragment {
        will-change: transform, opacity;
        white-space: nowrap;
        filter: blur(0.5px);
    }
`;
document.head.appendChild(style);