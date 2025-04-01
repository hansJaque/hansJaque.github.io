// Animaciones para la sección About - Versión optimizada
document.addEventListener('DOMContentLoaded', () => {
    console.log('Inicializando sección About - Versión con animaciones corregidas');
    
    // Elementos principales
    const aboutSection = document.getElementById('about');
    if (!aboutSection) {
        console.error('No se encontró la sección About');
        return;
    }
    
    const aboutContent = aboutSection.querySelector('.about-content');
    const aboutText = aboutSection.querySelector('.about-text');
    const aboutImage = aboutSection.querySelector('.about-image');
    const sectionTitle = aboutSection.querySelector('.section-title');
    const paragraphs = aboutText ? aboutText.querySelectorAll('p') : [];
    
    // Verificar elementos críticos
    if (!aboutContent || !aboutText) {
        console.error('Elementos críticos no encontrados en la sección About');
        return;
    }
    
    // Preparar texto para animación similar al header
    function prepareTextAnimation() {
        // Procesar cada párrafo
        paragraphs.forEach(paragraph => {
            const originalText = paragraph.textContent;
            paragraph.innerHTML = '';
            
            // Dividir en palabras
            const words = originalText.split(' ');
            
            words.forEach((word, index) => {
                const wordSpan = document.createElement('span');
                wordSpan.className = 'word';
                
                // Crear span para cada letra
                [...word].forEach(char => {
                    const charSpan = document.createElement('span');
                    charSpan.className = 'char';
                    charSpan.textContent = char;
                    wordSpan.appendChild(charSpan);
                });
                
                paragraph.appendChild(wordSpan);
                
                // Añadir espacio después de cada palabra excepto la última
                if (index < words.length - 1) {
                    paragraph.appendChild(document.createTextNode(' '));
                }
            });
        });
    }
    
    // Configurar animaciones
    function setupAnimations() {
        // Verificar si GSAP está disponible
        if (typeof gsap === 'undefined') {
            console.error('GSAP no está disponible. Las animaciones no funcionarán correctamente.');
            return;
        }
        
        // Crear timeline principal
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutSection,
                start: "top 75%",
                toggleActions: "play none none none"
            }
        });
        
        // Animación del título
        if (sectionTitle) {
            tl.from(sectionTitle, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            });
        }
        
        // Animación de los caracteres de texto (estilo header)
        const allChars = aboutText.querySelectorAll('.char');
        
        // Animación de la imagen - iniciando al mismo tiempo que el texto
        if (aboutImage) {
            tl.from(aboutImage, {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.4"); // Ajustado para que comience junto con el texto
        }
        
        if (allChars.length > 0) {
            tl.from(allChars, {
                opacity: 0,
                y: 20,
                stagger: 0.01,
                duration: 0.5,
                ease: "power2.out"
            }, "-=1"); // Ajustado para que se ejecute al mismo tiempo que la imagen
        }
        
        // Animación de flotación para la imagen
        if (aboutImage) {
            const imageContainer = aboutImage.querySelector('.image-container');
            if (imageContainer) {
                // Añadir clase para el marco animado
                imageContainer.classList.add('animated-border');
                
                // Animación de flotación suave
                gsap.to(imageContainer, {
                    y: 8,
                    duration: 3.5,
                    ease: 'sine.inOut',
                    repeat: -1,
                    yoyo: true,
                    delay: 0.5
                });
                
                // Eliminamos todo el código del efecto 3D (mousemove y mouseleave)
            }
        }
    }
    
    // Inicializar
    prepareTextAnimation();
    setupAnimations();
});