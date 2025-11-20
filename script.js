document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA PARA LA BARRA DE NAVEGACIÓN (SHRINK ON SCROLL) ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        // Si el scroll vertical es mayor a 50px, añade la clase 'scrolled'
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            // Si no, la quita
            navbar.classList.remove('scrolled');
        }
    });

    // --- LÓGICA PARA LA SECCIÓN DE CAMPEONES ---
    const championIcons = document.querySelectorAll('.icon-circle');
    const featuredImage = document.querySelector('.champion-image');
    const featuredName = document.querySelector('.champion-details .name');
    const featuredTagline = document.querySelector('.champion-details .tagline');
    const featuredDescription = document.querySelector('.champion-details .description');

    const championData = {
        jinx: {
            name: 'JINX',
            tagline: 'LA BALA PERDIDA',
            description: 'Una tiradora con un estilo despreocupado, siempre lista para disparar con un arsenal de armas y artefactos, no se lo piensa ni un segundo antes de hacer explotar todo a su paso.',
            image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3f125399003cfa89c8599c3376a83fc21c4108de-1660x1628.png?auto=format&fit=fill&q=80&w=512'
        },
        lux: {
            name: 'LUX',
            tagline: 'LA DAMA LUMINOSA',
            description: 'Una maga que manipula la luz, experta en atrapar enemigos, proteger aliados y causar gran daño. Solo su actitud alegre brilla más que su magia.',
            image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7c0f252c4b47f3795a6f42682b9ea869e79660b0-1660x1628.png?auto=format&fit=fill&q=80&w=589'
        },
        zed: {
            name: 'ZED',
            tagline: 'EL MAESTRO DE LAS SOMBRAS',
            description: 'Un asesino mortal que elimina enemigos vulnerables desde las sombras y luego desaparece. Si lo viste, ya perdiste.',
            image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/86dc4e7848c71531b9ddffa9e6030daf31d072f3-1660x1628.png?auto=format&fit=fill&q=80&w=589'
        },
        fortune: {
            name: 'MISS FORTUNE',
            tagline: 'LA CAZARRECOMPENSAS',
            description: 'Una tiradora implacable que maneja sus dos pistolas con tanta elegancia como descaro. Siempre está lista para hacer llover... balas, por supuesto.',
            image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9b221746dbb118fa7c17db4f16ded8d0c025d821-1660x1628.png?auto=format&fit=fill&q=80&w=589'
        },
        blitz: {
            name: 'BLITZCRANK',
            tagline: 'EL GRAN GÓLEM DE VAPOR',
            description: 'Como soporte, Blitzcrank siempre está listo para dar una mano, literalmente. Listos o no, arrastra a los enemigos hacia la pelea e inicia combates.',
            image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/63e041bbe620952148e39f269a40a7f0998a6bb3-1660x1628.png?auto=format&fit=fill&q=80&w=589'
        },
        ziggs: {
            name: 'ZIGGS',
            tagline: 'EL EXPERTO EN HEXTEXPLOSIVOS',
            description: 'Un mago “hexplosivo” que siempre tiene una bomba (o cuatro) bajo la manga. Es experto en explosiones, bombas grandes y trozos de enemigos.',
            image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ebdd6a2f861df755737d51f00cfff2717c40a999-1660x1628.png?auto=format&fit=fill&q=80&w=1178'
        }
    };

    championIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            // Quitar la clase activa de todos los íconos
            championIcons.forEach(i => i.classList.remove('active'));
            // Añadir la clase activa al ícono sobre el que se pasa el ratón
            icon.classList.add('active');

            const champion = icon.dataset.champion;
            if (championData[champion]) {
                const data = championData[champion];
                featuredImage.style.backgroundImage = `url('${data.image}')`;
                featuredName.textContent = data.name;
                featuredTagline.textContent = data.tagline;
                featuredDescription.textContent = data.description;
            }
        });
    });

    // --- LÓGICA PARA EL SLIDER DE OBJETIVOS ---
    const slider = document.querySelector('.cards-container');
    const arrow = document.querySelector('.slide-arrow');
    let currentPosition = 0;
    const cardWidth = 350; // Ancho de la tarjeta
    const gap = 30; // Espacio entre tarjetas
    const totalWidth = cardWidth + gap;

    arrow.addEventListener('click', () => {
        // Mueve al siguiente slide, si no es el último
        if (currentPosition < slider.children.length - 3) { // Asumiendo que se muestran 3 tarjetas
            currentPosition++;
        } else {
            currentPosition = 0; // Vuelve al inicio
        }
        slider.style.transform = `translateX(-${currentPosition * totalWidth}px)`;
    });

    // --- LÓGICA PARA LA SECCIÓN POWER UP ---
    const powerUpItems = document.querySelectorAll('.power-up-item');
    const powerUpTitle = document.querySelector('.ability-detail-box .ability-detail-title');
    const powerUpDescription = document.querySelector('.ability-detail-box .ability-detail-description');

    const powerUpData = {
        experience: {
            title: 'EXPERIENCIA (XP)',
            description: 'Gana experiencia al derribar campeones enemigos, eliminar súbditos o monstruos, y destruir estructuras defensivas. Con suficiente XP, tu campeón sube de nivel, aumentan tus estadísticas base y se desbloquean habilidades más poderosas.'
        },
        gold: {
            title: 'ORO',
            description: 'Obtén oro al eliminar unidades y campeones enemigos, al asistir un asesinato o destruir estructuras defensivas. Luego úsa el oro para comprar objetos que aumenten tus estadísticas.'
        },
        items: {
            title: 'OBJETOS',
            description: 'Compra objetos poderosos en tu base para desatar todo el potencial de tu campeón. Cada objeto se compone de componentes más pequeños que puedes ir construyendo a medida que avanzas. Equípate con objetos que te ayuden a snowballear tu ventaja, defenderte de los enemigos y alcanzar la victoria.'
        }
    };

    powerUpItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            // Quitar la clase activa de todos los ítems
            powerUpItems.forEach(i => i.classList.remove('active'));
            // Añadir la clase activa al ítem actual
            item.classList.add('active');

            const powerup = item.dataset.powerup;
            if (powerUpData[powerup]) {
                // 1. Hacer que el texto se desvanezca
                powerUpTitle.style.opacity = '0';
                powerUpDescription.style.opacity = '0';

                // 2. Esperar a que termine la animación de desvanecimiento
                setTimeout(() => {
                    const data = powerUpData[powerup];
                    // 3. Cambiar el texto
                    powerUpTitle.textContent = data.title;
                    powerUpDescription.textContent = data.description;
                    // 4. Hacer que el nuevo texto aparezca
                    powerUpTitle.style.opacity = '1';
                    powerUpDescription.style.opacity = '1';
                }, 200); // 200ms, igual que la transición en CSS
            }
        });
    });

    // --- LÓGICA PARA CONTROLES Y HABILIDADES ---
    const abilityIcons = document.querySelectorAll('.ability-icon');
    const abilityVideo = document.getElementById('ability-video');
    const abilityVideoSource = document.getElementById('ability-video-source');
    const abilityTitle = document.querySelector('.abilities-image-column .ability-detail-title');
    const abilityDescription = document.querySelector('.abilities-image-column .ability-detail-description');

    // DATOS DE HABILIDADES PARA AHRI
    const abilitiesData = {
        passive: {
            title: 'PASIVA: LADRONA DE ESENCIAS',
            description: 'Cuando Ahri golpea a un objetivo con un conjuro, gana una acumulación de Robo de esencia; al alcanza suficientes acumulaciones, se cura con el siguiente conjuro que impacte a un enemigo.',
            video: 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_P1.webm'
        },
        q: {
            title: 'Q: ORBE DEL ENGAÑO',
            description: 'Ahri lanza y recupera un orbe mágico, lo que causa daño mágico de ida y daño verdadero de vuelta.',
            video: 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_Q1.webm'
        },
        w: {
            title: 'W: FUEGO ZORRUNO',
            description: 'AAhri lanza tres fuegos zorrunos que se fijan en los enemigos cercanos y les causan daño.',
            video: 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_W1.webm'
        },
        e: {
            title: 'E: ENCANTO',
            description: 'Ahri lanza un beso que daña y encanta a un enemigo, detiene sus habilidades de movimiento y lo hace caminar hacia ella sin poder atacarla. El objetivo recibe daño aumentado de Ahri temporalmente.',
            video: 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_E1.webm'
        },
        r: {
            title: 'R: IMPULSO ESPIRITUAL',
            description: 'Ahri se desplaza hacia adelante y dispara rayos de esencia, lo que inflige daño a los enemigos cercanos. Se puede lanzar Impulso Espiritual hasta tres veces antes de que entre en enfriamiento.',
            video: 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_R1.webm'
        }
    };

    function updateAbility(abilityKey) {
        const data = abilitiesData[abilityKey];
        
        abilityVideoSource.src = data.video;
        abilityVideo.load(); // Carga el nuevo video
        abilityVideo.play();

        abilityTitle.textContent = data.title;
        abilityDescription.textContent = data.description;

        abilityIcons.forEach(icon => {
            icon.classList.remove('active');
            if (icon.dataset.ability === abilityKey) {
                icon.classList.add('active');
            }
        });
    }

    abilityIcons.forEach(icon => {
        icon.addEventListener('click', () => { // Cambiado a 'click'
            const abilityKey = icon.dataset.ability;
            updateAbility(abilityKey);
        });
    });

    // Carga la primera habilidad (pasiva) por defecto al cargar la página
    updateAbility('passive');
});