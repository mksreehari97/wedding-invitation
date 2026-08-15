document.addEventListener("DOMContentLoaded", () => {
    
    const loader = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const navbar = document.getElementById('navbar');
    const heroSection = document.querySelector('.hero');

    // --- Loading Screen Logic ---
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        
        setTimeout(() => {
            loader.style.display = "none";
            mainContent.classList.remove('hidden');
            
            setTimeout(() => {
                mainContent.classList.add('visible');
            }, 50);

        }, 1000); 
    }, 3000);

    // --- Sticky Navbar Logic ---
    window.addEventListener('scroll', () => {
        // Trigger color change exactly when scrolled past the hero section
        const scrollTriggerPoint = heroSection ? heroSection.offsetHeight - 80 : 50;

        if (window.scrollY > scrollTriggerPoint) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Countdown Timer Logic ---
    // Target date set to August 30, 2026 at 10:00 AM
    const targetDate = new Date("August 30, 2026 10:00:00").getTime();

    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // If the date has passed
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("days").innerText = "00";
            document.getElementById("hours").innerText = "00";
            document.getElementById("minutes").innerText = "00";
            document.getElementById("seconds").innerText = "00";
            return;
        }

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display results with leading zeros if necessary
        document.getElementById("days").innerText = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
        
    }, 1000); // Update every 1 second

});
