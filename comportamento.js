document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Fechar o menu hamburger em mobile após clicar em um link
            if (window.innerWidth <= 992) {
                const navLinks = document.querySelector('.nav-links');
                const hamburger = document.querySelector('.hamburger');
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Menu Hamburger
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Carrossel da Galeria
    const galeriaCarousel = document.querySelector('.galeria-carousel');
    const galeriaPrevBtn = document.querySelector('.carousel-nav .prev');
    const galeriaNextBtn = document.querySelector('.carousel-nav .next');
    let galeriaCurrentIndex = 0;

    function updateGaleriaCarousel() {
        if (galeriaCarousel && galeriaCarousel.children.length > 0) {
            const itemWidth = galeriaCarousel.offsetWidth;
            galeriaCarousel.scrollTo({
                left: galeriaCurrentIndex * itemWidth,
                behavior: 'smooth'
            });
        }
    }

    if (galeriaNextBtn && galeriaPrevBtn && galeriaCarousel) {
        galeriaNextBtn.addEventListener('click', () => {
            const totalItems = galeriaCarousel.children.length;
            galeriaCurrentIndex = (galeriaCurrentIndex + 1) % totalItems;
            updateGaleriaCarousel();
        });

        galeriaPrevBtn.addEventListener('click', () => {
            const totalItems = galeriaCarousel.children.length;
            galeriaCurrentIndex = (galeriaCurrentIndex - 1 + totalItems) % totalItems;
            updateGaleriaCarousel();
        });
    }

    // Carrossel de Depoimentos
    const depoimentosCarousel = document.querySelector('.depoimentos-carousel');
    const depoimentosPrevBtn = document.querySelector('.carousel-nav-depoimentos .prev-depo');
    const depoimentosNextBtn = document.querySelector('.carousel-nav-depoimentos .next-depo');
    let depoimentosCurrentIndex = 0;

    console.log('Depoimentos Carousel:', depoimentosCarousel);
    console.log('Prev Button:', depoimentosPrevBtn);
    console.log('Next Button:', depoimentosNextBtn);

    function updateDepoimentosCarousel() {
        if (depoimentosCarousel && depoimentosCarousel.children.length > 0) {
            const itemWidth = depoimentosCarousel.offsetWidth;
            console.log('Updating depoimentos carousel, index:', depoimentosCurrentIndex, 'width:', itemWidth);
            depoimentosCarousel.scrollTo({
                left: depoimentosCurrentIndex * itemWidth,
                behavior: 'smooth'
            });
        }
    }

    if (depoimentosNextBtn && depoimentosPrevBtn && depoimentosCarousel) {
        console.log('Adding event listeners to depoimentos carousel');
        
        depoimentosNextBtn.addEventListener('click', () => {
            const totalItems = depoimentosCarousel.children.length;
            depoimentosCurrentIndex = (depoimentosCurrentIndex + 1) % totalItems;
            console.log('Next clicked, new index:', depoimentosCurrentIndex);
            updateDepoimentosCarousel();
        });

        depoimentosPrevBtn.addEventListener('click', () => {
            const totalItems = depoimentosCarousel.children.length;
            depoimentosCurrentIndex = (depoimentosCurrentIndex - 1 + totalItems) % totalItems;
            console.log('Prev clicked, new index:', depoimentosCurrentIndex);
            updateDepoimentosCarousel();
        });
    } else {
        console.error('Depoimentos carousel elements not found!');
    }

    // Auto-play para o carousel da galeria (opcional)
    setInterval(() => {
        if (galeriaCarousel && galeriaCarousel.children.length > 1) {
            galeriaCurrentIndex = (galeriaCurrentIndex + 1) % galeriaCarousel.children.length;
            updateGaleriaCarousel();
        }
    }, 5000); // Troca a cada 5 segundos

});