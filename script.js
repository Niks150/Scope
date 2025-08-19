
        // GSAP Initialization
        gsap.registerPlugin(ScrollTrigger);

        // Mouse movement spotlight effect
        document.addEventListener('mousemove', (e) => {
            const spotlight = document.querySelector('.spotlight');
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            
            spotlight.style.setProperty('--x', x + '%');
            spotlight.style.setProperty('--y', y + '%');
        });

        // Hero animations
        gsap.timeline()
            .from('.scope-text', {
                duration: 1.5,
                y: 100,
                opacity: 0,
                ease: 'power4.out'
            })
            .from('.tagline', {
                duration: 1,
                y: 50,
                opacity: 0,
                ease: 'power3.out'
            }, '-=0.8')
            .from('.cta-button', {
                duration: 1,
                y: 30,
                opacity: 0,
                ease: 'back.out(1.7)'
            }, '-=0.5');

        // Section title animations
        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.fromTo(title, 
                {
                    opacity: 0,
                    y: 80,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: title,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Card animations
        gsap.utils.toArray('.card').forEach((card, index) => {
            gsap.fromTo(card,
                {
                    opacity: 0,
                    y: 60,
                    rotateX: -15
                },
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    duration: 1,
                    delay: index * 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Stats counter animation
        gsap.utils.toArray('.stat-number').forEach(stat => {
            const endValue = stat.textContent;
            gsap.fromTo(stat,
                {
                    textContent: 0
                },
                {
                    textContent: endValue,
                    duration: 2,
                    ease: 'power2.out',
                    snap: { textContent: 1 },
                    scrollTrigger: {
                        trigger: stat,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });

        // Floating elements animation
        gsap.utils.toArray('.floating-element').forEach(element => {
            gsap.to(element, {
                x: 'random(-100, 100)',
                y: 'random(-100, 100)',
                rotation: 'random(0, 360)',
                duration: 'random(3, 6)',
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        });

        // Smooth scroll behavior for CTA button
        document.querySelector('.cta-button').addEventListener('click', () => {
            gsap.to(window, {
                duration: 1.5,
                scrollTo: '.section:first-of-type',
                ease: 'power2.inOut'
            });
        });

        // Parallax effect for hero background
        gsap.to('.hero::before', {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: 'none'
        });

        // Scroll-based spotlight intensity
        ScrollTrigger.create({
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            onUpdate: self => {
                const spotlight = document.querySelector('.spotlight');
                const intensity = 1 - self.progress * 0.5;
                spotlight.style.opacity = intensity;
            }
        });
    