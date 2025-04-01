// Animaciones para el header
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const logo = header.querySelector('.logo');
    const navLinks = header.querySelectorAll('.nav-links li');
    
    // Función para mejorar el texto del hero y añadir elemento visual
    const enhanceHeroSection = () => {
        const homeSection = document.querySelector('#home');
        if (!homeSection) return;
        
        // Obtener el contenedor actual
        const container = homeSection.querySelector('.container');
        if (!container) return;
        
        // Obtener elementos de texto
        const heading = container.querySelector('h1');
        const subheading = container.querySelector('h2');
        const paragraph = container.querySelector('p');
        
      
        
        // Convertir la estructura actual a un diseño de grid
        homeSection.style.display = 'grid';
        homeSection.style.gridTemplateColumns = '1fr 1fr';
        homeSection.style.alignItems = 'center';
        homeSection.style.gap = '30px';
        homeSection.style.padding = '0 5%';
        
        // Añadir clase para el contenido
        container.classList.add('hero-content');
        container.style.zIndex = '2';
        
        // Añadir estilos mejorados para el texto
        const textStyle = document.createElement('style');
        textStyle.textContent = `
            #home .container h1 {
                font-size: 3.5rem;
                font-weight: 800;
                color: var(--light-text);
                margin-bottom: 0.5rem;
                letter-spacing: -0.5px;
                text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            }
            
            #home .container h2 {
                font-size: 2.5rem;
                font-weight: 700;
                color: var(--light-text);
                margin-bottom: 1.5rem;
                letter-spacing: -0.3px;
            }
            
            #home .container p {
                font-size: 1.2rem;
                line-height: 1.6;
                color: rgba(255, 255, 255, 0.9);
                max-width: 500px;
                margin-bottom: 2rem;
                text-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            
            .char {
                display: inline-block;
                opacity: 1;
                transform: translateY(0);
            }
            
            .word {
                display: inline-block;
                margin-right: 0.25em;
            }
            
            .hero-visual {
                position: relative;
                height: 100%;
                min-height: 400px;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1;
            }
            
            .floating-shape {
                position: absolute;
                border-radius: 50%;
                filter: blur(15px);
                opacity: 0.6;
                z-index: -1;
            }
            
            .shape1 {
                width: 200px;
                height: 200px;
                background: var(--primary-color);
                top: 20%;
                right: 10%;
            }
            
            .shape2 {
                width: 150px;
                height: 150px;
                background: var(--secondary-color);
                bottom: 30%;
                right: 20%;
            }
            
            .shape3 {
                width: 100px;
                height: 100px;
                background: var(--accent-color, #43cea2);
                top: 40%;
                right: 30%;
            }
            
            .code-container {
                background: rgba(30, 30, 30, 0.8);
                border-radius: 10px;
                padding: 20px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                font-family: 'Fira Code', monospace;
                font-size: 14px;
                line-height: 1.5;
                color: #f8f8f2;
                max-width: 400px;
                transform: rotate(-2deg);
            }
            
            .code-container .highlight {
                color: var(--primary-color);
                font-weight: bold;
            }
            
            .tech-circles {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
            }
            
            .tech-circle {
                position: absolute;
                padding: 10px 15px;
                background: rgba(42, 42, 42, 0.8);
                color: var(--light-text);
                border-radius: 30px;
                font-weight: 600;
                font-size: 14px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            }
            
            .html {
                top: 20%;
                left: 10%;
                background: rgba(227, 79, 38, 0.2);
            }
            
            .css {
                top: 70%;
                left: 15%;
                background: rgba(38, 77, 228, 0.2);
            }
            
            .js {
                top: 30%;
                right: 5%;
                background: rgba(247, 223, 30, 0.2);
            }
            
            .react {
                top: 80%;
                right: 15%;
                background: rgba(97, 218, 251, 0.2);
            }
            
            @media screen and (max-width: 768px) {
                #home {
                    grid-template-columns: 1fr !important;
                }
                
                #home .container h1 {
                    font-size: 2.5rem;
                }
                
                #home .container h2 {
                    font-size: 1.8rem;
                }
                
                #home .container p {
                    font-size: 1rem;
                }
                
                .hero-visual {
                    min-height: 300px;
                    order: 2;
                }
            }
        `;
        document.head.appendChild(textStyle);
        
        // Procesar el texto para animación
        if (heading) {
            const headingText = heading.textContent.trim();
            heading.innerHTML = '';
            
            headingText.split(' ').forEach(word => {
                const wordSpan = document.createElement('span');
                wordSpan.classList.add('word');
                
                word.split('').forEach(char => {
                    const charSpan = document.createElement('span');
                    charSpan.classList.add('char');
                    charSpan.style.opacity = '1'; // Asegurar que sea visible desde el principio
                    charSpan.style.transform = 'translateY(0)'; // Posición inicial correcta
                    charSpan.textContent = char;
                    wordSpan.appendChild(charSpan);
                });
                
                heading.appendChild(wordSpan);
                // Añadir espacio después de cada palabra excepto la última
                if (word !== headingText.split(' ').pop()) {
                    heading.appendChild(document.createTextNode(' '));
                }
            });
        }
        
        // Procesar el subtítulo para animación de caracteres individuales
        if (subheading) {
            const subheadingText = subheading.textContent.trim();
            subheading.innerHTML = '';
            
            subheadingText.split(' ').forEach(word => {
                const wordSpan = document.createElement('span');
                wordSpan.classList.add('word');
                
                word.split('').forEach(char => {
                    const charSpan = document.createElement('span');
                    charSpan.classList.add('char');
                    charSpan.style.opacity = '1'; // Asegurar que sea visible desde el principio
                    charSpan.style.transform = 'translateY(0)'; // Posición inicial correcta
                    charSpan.textContent = char;
                    wordSpan.appendChild(charSpan);
                });
                
                subheading.appendChild(wordSpan);
                // Añadir espacio después de cada palabra excepto la última
                if (word !== subheadingText.split(' ').pop()) {
                    subheading.appendChild(document.createTextNode(' '));
                }
            });
        }
        
        // Crear y añadir el elemento visual
        const visualContainer = document.createElement('div');
        visualContainer.classList.add('hero-visual');
        
        visualContainer.innerHTML = `
            <div class="floating-shape shape1"></div>
            <div class="floating-shape shape2"></div>
            <div class="floating-shape shape3"></div>
            <div class="code-container">
                <pre><code id="typing-code">
def <span class="highlight">refill_coffee</span>():
        if coffe.empty:
            coffe.refill()
        else:
            print("Todavía tienes café 🚀")

    def <span class="highlight">drink_coffee</span>(self):
        if not self.empty:
            print("Bebiendo café... 🔥")
            self.empty = True
        else:
            print("La taza está vacía.😴")
            refill_coffee()
                </code></pre>
            </div>
            <div class="tech-circles">
                <div class="tech-circle html">HTML</div>
                <div class="tech-circle css">CSS</div>
                <div class="tech-circle js">JS</div>
            </div>
        `;
        
        // Añadir el elemento visual al hero section
        homeSection.appendChild(visualContainer);
        
        // Animar elementos con GSAP
        const headingChars = heading ? heading.querySelectorAll('.char') : [];
        const subheadingChars = subheading ? subheading.querySelectorAll('.char') : [];
        const shapes = visualContainer.querySelectorAll('.floating-shape');
        const codeContainer = visualContainer.querySelector('.code-container');
        const techCircles = visualContainer.querySelectorAll('.tech-circle');
        
        // Añadir efecto de escritura de código
        const codeElement = visualContainer.querySelector('#typing-code');
        const originalCode = codeElement.innerHTML;
        codeElement.innerHTML = '';
        
        // Crear una timeline para la animación de escritura
        const typingTimeline = gsap.timeline({delay: 0.8});
        
        // Función para animar la escritura del código
        const typeCode = () => {
            const codeLines = originalCode.split('\n');
            let currentHTML = '';
            let lineIndex = 0;
            let charIndex = 0;
            
            // Ocultar todo el código primero
            codeElement.innerHTML = '';
            
            // Crear intervalo para simular escritura
            const typingInterval = setInterval(() => {
                if (lineIndex < codeLines.length) {
                    const currentLine = codeLines[lineIndex];
                    
                    if (charIndex < currentLine.length) {
                        // Añadir siguiente carácter
                        currentHTML += currentLine[charIndex];
                        codeElement.innerHTML = currentHTML;
                        charIndex++;
                    } else {
                        // Pasar a la siguiente línea
                        currentHTML += '\n';
                        lineIndex++;
                        charIndex = 0;
                    }
                } else {
                    // Terminar la animación
                    clearInterval(typingInterval);
                    
                    // Asegurarse de que el código final tenga el formato correcto con los spans
                    codeElement.innerHTML = originalCode;
                }
            }, 15); // Velocidad de escritura (ms por carácter)
        };
        
        // Iniciar la animación de escritura
        typingTimeline.call(typeCode);
        
        // Timeline para animación de texto
        const textTimeline = gsap.timeline();
        
        // Animar caracteres del título
        if (headingChars.length > 0) {
            textTimeline.from(headingChars, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.03,
                ease: 'back.out(1.7)'
            });
        }
        
        // Animar caracteres del subtítulo
        if (subheadingChars.length > 0) {
            textTimeline.from(subheadingChars, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.02,
                ease: 'back.out(1.7)'
            }, '-=0.5');
        }
        
        // Animar párrafo
        if (paragraph) {
            textTimeline.from(paragraph, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power2.out'
            }, '-=0.3');
        }
        
        // Animar formas flotantes
        shapes.forEach((shape, index) => {
            gsap.to(shape, {
                x: Math.random() * 30 - 15,
                y: Math.random() * 30 - 15,
                scale: 0.9 + Math.random() * 0.3,
                opacity: 0.5 + Math.random() * 0.3,
                duration: 3 + index,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        });
        
        // Animar contenedor de código
        gsap.from(codeContainer, {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: 'back.out(1.7)'
        });
        
        gsap.to(codeContainer, {
            y: 10,
            rotation: 2,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
        
        // Animar círculos de tecnologías
        techCircles.forEach((circle, index) => {
            gsap.from(circle, {
                scale: 0,
                opacity: 0,
                duration: 0.5,
                delay: 1 + (index * 0.2),
                ease: 'back.out(1.7)'
            });
            
            gsap.to(circle, {
                y: -10 + Math.random() * 20,
                duration: 2 + Math.random() * 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        });
        // Añadir efectos de hover a los caracteres
        headingChars.forEach(char => {
            char.addEventListener('mouseenter', () => {
                gsap.to(char, {
                    y: -5,
                    scale: 1.2,
                    color: 'var(--primary-color)',
                    duration: 0.3,
                    ease: 'back.out(1.7)'
                });
            });
            
            char.addEventListener('mouseleave', () => {
                gsap.to(char, {
                    y: 0,
                    scale: 1,
                    color: 'var(--light-text)', // Volver al color original
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
        
        subheadingChars.forEach(char => {
            char.addEventListener('mouseenter', () => {
                gsap.to(char, {
                    y: -5,
                    scale: 1.2,
                    color: 'var(--secondary-color)',
                    duration: 0.3,
                    ease: 'back.out(1.7)'
                });
            });
            
            char.addEventListener('mouseleave', () => {
                gsap.to(char, {
                    y: 0,
                    scale: 1,
                    color: 'var(--light-text)', // Volver al color original
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    };
    
    // Ejecutar la función para mejorar la sección de inicio
    setTimeout(enhanceHeroSection, 100);
    
    // Animación inicial del header
    const headerTimeline = gsap.timeline();
    
    headerTimeline
        .from(header, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        })
        .from(logo, {
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: 'back.out(1.7)'
        }, '-=0.5')
        .from(navLinks, {
            y: -20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: 'power2.out'
        }, '-=0.5');
    
    // Cambiar estilo del header al hacer scroll
    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: {className: 'scrolled', targets: header}
    });
    
    
});