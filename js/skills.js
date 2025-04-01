// Animaciones para la sección Skills
document.addEventListener('DOMContentLoaded', () => {
    console.log('Inicializando sección de habilidades - Versión reconstruida');
    
    // Elementos principales
    const skillsSection = document.getElementById('skills');
    const skillCategories = document.querySelectorAll('.skill-category');
    const skillBars = document.querySelectorAll('.skill-progress');
    
    console.log(`Número de categorías encontradas: ${skillCategories.length}`);
    console.log(`Número de barras de progreso encontradas: ${skillBars.length}`);
    
    // Asegurar que las barras de progreso inicien en 0%
    skillBars.forEach(bar => {
        bar.style.width = '0%';
    });
    
    // Añadir porcentajes a las barras
    function setupSkillPercentages() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach(item => {
            const skillName = item.querySelector('.skill-name');
            const progress = item.querySelector('.skill-progress').getAttribute('data-progress');
            
            // Crear y añadir el porcentaje
            const percentageElement = document.createElement('span');
            percentageElement.classList.add('skill-percentage');
            percentageElement.textContent = `${progress}%`;
            skillName.appendChild(percentageElement);
        });
    }
    
    // Animar las barras de progreso
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            
            if (typeof gsap !== 'undefined') {
                gsap.to(bar, {
                    width: `${progress}%`,
                    duration: 1.5,
                    ease: "power2.out",
                    delay: 0.2
                });
            } else {
                bar.style.transition = 'width 1.5s ease-out';
                bar.style.width = `${progress}%`;
            }
        });
    }
    
    // Animar la entrada de las categorías
    function animateCategories() {
        if (typeof gsap !== 'undefined') {
            gsap.from(skillCategories, {
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "back.out(1.7)"
            });
        } else {
            skillCategories.forEach((category, index) => {
                category.style.opacity = '0';
                category.style.transform = 'translateY(50px)';
                
                setTimeout(() => {
                    category.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    category.style.opacity = '1';
                    category.style.transform = 'translateY(0)';
                }, 200 * index);
            });
        }
    }
    
    // Configurar la detección de scroll
    function setupScrollDetection() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        console.log('Sección de habilidades visible');
                        animateCategories();
                        animateSkillBars();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });
            
            observer.observe(skillsSection);
        } else {
            // Fallback para navegadores que no soportan IntersectionObserver
            let animated = false;
            
            function checkScroll() {
                if (!animated) {
                    const rect = skillsSection.getBoundingClientRect();
                    const isVisible = (rect.top <= window.innerHeight * 0.8) && (rect.bottom >= 0);
                    
                    if (isVisible) {
                        animateCategories();
                        animateSkillBars();
                        animated = true;
                        window.removeEventListener('scroll', checkScroll);
                    }
                }
            }
            
            window.addEventListener('scroll', checkScroll);
            // Comprobar también al cargar la página
            checkScroll();
        }
    }
    
    // Inicializar
    setupSkillPercentages();
    setupScrollDetection();
});