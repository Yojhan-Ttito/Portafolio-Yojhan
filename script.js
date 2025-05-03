
    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const isMobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

            if (isMobile) {
                const elements = document.querySelectorAll('.glass-card::before, .hero-image-container::before, .hero-image-container::after');
                elements.forEach(el => {
                    if (el) el.style.display = 'none';
                });

                document.documentElement.style.setProperty('--transition', 'all 0.2s ease');
            }

            if (!isMobile && typeof AOS !== 'undefined') {
                AOS.init({
                    duration: 800,
                    easing: 'ease-out',
                    once: true,
                    mirror: false,
                    disable: 'mobile'
                });
            }

            const options = {
                strings: [
                    'Desarrollador Web',
                    'Ingeniero de Sistemas',
                    'Analista de Datos'
                ],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 3000,
                loop: true
            };

            const typedElement = document.getElementById('typed-text');
            if (typedElement && typeof Typed !== 'undefined') {
                new Typed('#typed-text', options);
            }

            const navbar = document.querySelector('.navbar');
            const navLinks = document.querySelectorAll('.nav-link');
            const sections = document.querySelectorAll('section');
            const scrollTopBtn = document.getElementById('scrollTop');

            let ticking = false;

            function setActiveNavItem() {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        const scrollPosition = window.scrollY + 100;

                        sections.forEach(section => {
                            const sectionTop = section.offsetTop;
                            const sectionHeight = section.offsetHeight;
                            const sectionId = section.getAttribute('id');

                            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                                navLinks.forEach(link => {
                                    link.classList.remove('active');
                                    if (link.getAttribute('href') === '#' + sectionId) {
                                        link.classList.add('active');
                                    }
                                });
                            }
                        });

                        if (window.scrollY > 50) {
                            navbar.classList.add('scrolled');
                        } else {
                            navbar.classList.remove('scrolled');
                        }

                        if (window.scrollY > 300) {
                            scrollTopBtn.classList.add('active');
                        } else {
                            scrollTopBtn.classList.remove('active');
                        }

                        ticking = false;
                    });

                    ticking = true;
                }
            }

            window.addEventListener('scroll', setActiveNavItem, { passive: true });
            setActiveNavItem();

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;

                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                            inline: 'nearest'
                        });


                        const navbarToggler = document.querySelector('.navbar-toggler');
                        const navbarCollapse = document.querySelector('.navbar-collapse');
                        if (window.getComputedStyle(navbarToggler).display !== 'none') {
                            navbarCollapse.classList.remove('show');
                        }
                    }
                });
            });

            if (scrollTopBtn) {
                scrollTopBtn.addEventListener('click', function () {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            }

            if (!isMobile) {
                const cards = document.querySelectorAll('.glass-card');
                cards.forEach(card => {
                    card.addEventListener('mouseenter', function () {
                        this.style.transform = 'translateY(-10px)';
                    });

                    card.addEventListener('mouseleave', function () {
                        this.style.transform = 'translateY(0)';
                    });
                });
            }

            if ('IntersectionObserver' in window) {
                const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const section = entry.target;
                            section.classList.add('visible');

                            const animatedElements = section.querySelectorAll('[data-aos]');
                            animatedElements.forEach(el => {
                                el.classList.add('aos-animate');
                            });

                            observer.unobserve(section);
                        }
                    });
                }, { threshold: 0.1 });

                document.querySelectorAll('section').forEach(section => {
                    lazyLoadObserver.observe(section);
                });
            }
        });
    </script>
