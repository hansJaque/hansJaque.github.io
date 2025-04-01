// Animaciones para la sección de contacto - Versión simplificada
document.addEventListener('DOMContentLoaded', () => {
    console.log('Inicializando sección de Contacto - Versión simplificada');
    
    // Elementos principales
    const contactSection = document.getElementById('contact');
    if (!contactSection) {
        console.error('No se encontró la sección de Contacto');
        return;
    }
    
    const contactInfo = contactSection.querySelector('.contact-info');
    const contactForm = contactSection.querySelector('.contact-form');
    const sectionTitle = contactSection.querySelector('.section-title');
    
    // Verificar si GSAP está disponible
    if (typeof gsap === 'undefined') {
        console.error('GSAP no está disponible');
        return;
    }
    
    // Crear timeline para las animaciones
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: contactSection,
            start: 'top 70%',
            toggleActions: 'play none none none'
        }
    });
    
    // Animación del título
    if (sectionTitle) {
        tl.from(sectionTitle, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    }
    
    // Animar elementos principales
    if (contactInfo) {
        tl.from(contactInfo, {
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.4');
    }
    
    if (contactForm) {
        tl.from(contactForm, {
            x: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.6');
    }
    
    // Efectos de hover para los elementos de contacto
    const contactItems = contactSection.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        const icon = item.querySelector('.contact-icon');
        if (!icon) return;
        
        item.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                scale: 1.2,
                color: 'var(--secondary-color)',
                duration: 0.3
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                scale: 1,
                color: 'var(--primary-color)',
                duration: 0.3
            });
        });
    });
    
    // Validación básica del formulario
    const form = contactSection.querySelector('#contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            if (!submitBtn) return;
            
            // Animar botón
            gsap.to(submitBtn, {
                scale: 0.95,
                duration: 0.1,
                onComplete: () => {
                    gsap.to(submitBtn, {
                        scale: 1,
                        duration: 0.3
                    });
                }
            });
            
            // Simulación de envío
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            
            setTimeout(() => {
                form.reset();
                submitBtn.textContent = '¡Mensaje Enviado!';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                }, 2000);
            }, 1500);
        });
    }
});