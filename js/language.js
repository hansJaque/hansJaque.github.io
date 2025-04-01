// Language Translation System
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing language system');
    
    // Language toggle button
    const languageToggle = document.getElementById('languageToggle');
    const langText = languageToggle.querySelector('.lang-text');
    
    // Default language is Spanish
    let currentLang = 'es';
    
    // Translations object
    const translations = {
        // Navigation
        'nav': {
            'home': {
                'es': 'Inicio',
                'en': 'Home'
            },
            'about': {
                'es': 'Sobre Mi',
                'en': 'About Me'
            },
            'projects': {
                'es': 'Proyectos',
                'en': 'Projects'
            },
            'skills': {
                'es': 'Habilidades',
                'en': 'Skills'
            },
            'contact': {
                'es': 'Contacto',
                'en': 'Contact'
            }
        },
        
        // Home section
        'home': {
            'subtitle': {
                'es': 'Full Stack developer',
                'en': 'Full Stack developer'
            },
            'greeting': {
                'es': 'Hola, soy Hans',
                'en': 'Hi, I\'m Hans'
            }
        },
        
        // About section
        'about': {
            'title': {
                'es': 'Sobre Mi',
                'en': 'About Me'
            },
            'p1': {
                'es': 'Soy un desarrollador fullstack Java con experiencia en crear aplicaciones web y backend escalables. Me encanta trabajar con Java y Spring Boot.',
                'en': 'Hi, I am a fullstack Java developer with experience in creating scalable web and backend applications. I love working with Java and Spring Boot.'
            },
            'p2': {
                'es': 'También tengo experiencia con bases de datos SQL y NoSQL, integración de APIs y despliegue en la nube con AWS, GCP o Azure.',
                'en': 'I also have experience with SQL and NoSQL databases, API integration and cloud deployment with AWS, GCP or Azure.'
            },
            'p3': {
                'es': 'Siempre estoy aprendiendo nuevas tecnologías y buscando formas de mejorar mis habilidades.',
                'en': 'I am always learning new technologies and looking for ways to improve my skills.'
            }
        },
        
        // Projects section
        'projects': {
            'title': {
                'es': 'Proyectos',
                'en': 'Projects'
            },
            'featured': {
                'es': 'destacado',
                'en': 'highlight'
            },
            'project1': {
                'title': {
                    'es': 'Red Social(v1)',
                    'en': 'Social Network(v1)',
                },
                'description': {
                    'es': 'Red social desarrollada con tecnologías modernas que permite a los usuarios conectarse, compartir contenido y comunicarse en tiempo real.',
                    'en': 'Social network developed with modern technologies that allows users to connect, share content and communicate in real time.'
                },
                'demo': {
                    'es': 'Ver Codigo',
                    'en': 'View Code'
                },
                'code': {
                    'es': 'Ver Código',
                    'en': 'View Code'
                }
            },
            // Add translations for other projects
        },
        
        // Skills section
        'skills': {
            'title': {
                'es': 'Mis Habilidades',
                'en': 'My Skills'
            },
            'frontend': {
                'es': 'Frontend',
                'en': 'Frontend'
            },
            'backend': {
                'es': 'Backend',
                'en': 'Backend'
            },
            'databases': {
                'es': 'Bases de Datos',
                'en': 'Databases'
            },
            'devops': {
                'es': 'DevOps & Herramientas',
                'en': 'DevOps & Tools'
            }
        },
        
        // Contact section
        'contact': {
            'title': {
                'es': 'Contacto',
                'en': 'Contact'
            },
            'intro': {
                'es': '¿Interesado en trabajar juntos? ¡Contáctame!',
                'en': 'Interested in working together? Contact me!'
            },
            'name': {
                'es': 'Nombre',
                'en': 'Name'
            },
            'message': {
                'es': 'Mensaje',
                'en': 'Message'
            },
            'send': {
                'es': 'Enviar Mensaje',
                'en': 'Send Message'
            }
        },
        
        // Footer
        'footer': {
            'copyright': {
                'es': '© 2025 Hans Jaque. Todos los derechos reservados.',
                'en': '© 2025 Hans Jaque. All rights reserved.'
            }
        }
    };
    
    // Function to update text content based on selected language
    function updateLanguage(lang) {
        currentLang = lang;
        langText.textContent = lang.toUpperCase();
        
        // Update navigation
        document.querySelectorAll('.nav-links a').forEach((link, index) => {
            const key = Object.keys(translations.nav)[index];
            link.textContent = translations.nav[key][lang];
        });
        
        // Update home section
        const subtitleElement = document.querySelector('.subtitle');
        if (subtitleElement) {
            subtitleElement.textContent = translations.home.subtitle[lang];
        }
        
        // Corregir el selector para el título principal
        const mainTitle = document.querySelector('.title h1') || document.querySelector('h1');
        if (mainTitle) {
            mainTitle.textContent = translations.home.greeting[lang];
        }
        
        // Update about section
        const aboutTitle = document.querySelector('#about .section-title');
        if (aboutTitle) {
            aboutTitle.textContent = translations.about.title[lang];
        }
        
        const aboutParagraphs = document.querySelectorAll('#about .about-text p');
        if (aboutParagraphs.length >= 3) {
            aboutParagraphs[0].textContent = translations.about.p1[lang];
            aboutParagraphs[1].textContent = translations.about.p2[lang];
            aboutParagraphs[2].textContent = translations.about.p3[lang];
        }
        
        // Update projects section
        document.querySelector('#projects .section-title').textContent = translations.projects.title[lang];
        document.querySelector('.project-featured').textContent = translations.projects.featured[lang];
        
        // Update project 1
        const project1 = document.querySelectorAll('.project-card')[0];
        project1.querySelector('h3').textContent = translations.projects.project1.title[lang];
        project1.querySelector('p').textContent = translations.projects.project1.description[lang];
        const project1Links = project1.querySelectorAll('.project-link');
        project1Links[0].textContent = translations.projects.project1.demo[lang];
        project1Links[1].textContent = translations.projects.project1.code[lang];
        
        // Update skills section
        document.querySelector('#skills .section-title').textContent = translations.skills.title[lang];
        const skillCategories = document.querySelectorAll('.skill-category h3');
        skillCategories[0].textContent = translations.skills.frontend[lang];
        skillCategories[1].textContent = translations.skills.backend[lang];
        skillCategories[2].textContent = translations.skills.databases[lang];
        skillCategories[3].textContent = translations.skills.devops[lang];
        
        // Update contact section
        document.querySelector('#contact .section-title').textContent = translations.contact.title[lang];
        document.querySelector('.contact-info p').textContent = translations.contact.intro[lang];
        document.querySelector('label[for="name"]').textContent = translations.contact.name[lang];
        document.querySelector('label[for="message"]').textContent = translations.contact.message[lang];
        document.querySelector('.submit-btn').textContent = translations.contact.send[lang];
        
        // Update footer
        document.querySelector('footer p').textContent = translations.footer.copyright[lang];
    }
    
    // Toggle language when button is clicked
    languageToggle.addEventListener('click', () => {
        const newLang = currentLang === 'es' ? 'en' : 'es';
        updateLanguage(newLang);
    });
});