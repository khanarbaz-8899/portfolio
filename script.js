            // Select all the navigation links
            const navLinks = document.querySelectorAll('.navbtn');
        
            navLinks.forEach(link => {
                link.addEventListener('click', function (event) {
                    // Prevent the default action (jumping)
                    event.preventDefault();
        
                    // Get the target section
                    const targetSection = document.querySelector(this.getAttribute('href'));
        
                    // Scroll to the section
                    targetSection.scrollIntoView({
                        behavior: 'smooth', // Smooth scrolling
                        block: 'start', // Scroll to the top of the section
                    });
                });
            });
