document.addEventListener('DOMContentLoaded', () => {
    console.log('Inicializando proyectos - Modo HTML estático');
    
    const projectsSection = document.getElementById('projects');
    if (!projectsSection) {
        console.error('No se encontró la sección de proyectos');
        return;
    }
    
    // Verificar si existe el contenedor de proyectos
    const projectsGrid = projectsSection.querySelector('.projects-grid');
    if (!projectsGrid) {
        console.error('No se encontró el contenedor de proyectos (.projects-grid)');
        return;
    }
    
    // Configurar animaciones para los proyectos definidos en HTML
    const projectCards = projectsSection.querySelectorAll('.project-card');
    console.log(`Número de tarjetas de proyectos encontradas en HTML: ${projectCards.length}`);
    
    // Configurar animaciones
    function setupAnimations() {
        // Inicialmente ocultar las tarjetas
        projectCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease';
        });
        
        // Función para animar las tarjetas cuando sean visibles
        function animateCards() {
            projectCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 200 * index);
            });
        }
        
        // Detectar cuando la sección es visible
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCards();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });
            
            observer.observe(projectsSection);
        } else {
            // Fallback para navegadores que no soportan IntersectionObserver
            animateCards(); // Animar inmediatamente
        }
        
        // Efectos de hover
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px)';
                card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
            });
        });
    }
    
    // Iniciar animaciones
    setupAnimations();
});