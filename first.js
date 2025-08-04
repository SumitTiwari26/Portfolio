// Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all sections and skill categories
        document.querySelectorAll('.section-content, .skill-category').forEach(el => {
            observer.observe(el);
        });

        // Send message function
        function sendMessage() {
            const userEmail = prompt("Please enter your email:");
            const subject = prompt("Please enter the subject:");
            const message = prompt("Please enter your message:");
            
            if (userEmail && subject && message) {
                // Create mailto link
                const mailtoLink = `mailto:sumitvt2004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${userEmail}\n\nMessage:\n${message}`)}`;
                
                // Open email client
                window.location.href = mailtoLink;
                
                alert("Email client opened! Please send the email from your email application.");
            } else {
                alert("Please fill in all fields to send a message.");
            }
        }

        // Dynamic navbar background on scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(8, 8, 8, 1)';
                nav.style.backdropFilter = 'blur(10px)';
                nav.style.padding = '1rem 0';
                nav.style.boxShadow = '0 2px 20px rgba(220, 53, 69, 0.3)';
            } else {
                nav.style.background = 'transparent';
                nav.style.backdropFilter = 'none';
                nav.style.padding = '2rem 0';
                nav.style.boxShadow = 'none';
            }
        });