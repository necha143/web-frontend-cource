(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const navLinks = document.querySelectorAll('nav ul li a');
        const currentLocation = document.location.pathname;

        navLinks.forEach(link => {
            if (currentLocation.includes(link.getAttribute('href'))) {
                link.classList.add('active');
            }

            link.addEventListener('mouseenter', () => {
                link.style.color = '#f1aa93';
            });
            link.addEventListener('mouseleave', () => {
                link.style.color = 'white';
            });
        });
    });
})();

(function() {
    window.addEventListener('load', function() {
        const timing = window.performance.timing;
        const loadTime = timing.domContentLoadedEventEnd - timing.navigationStart;

        const footer = document.querySelector('footer');
        if (footer) {
            const loadInfo = document.createElement('p');
            loadInfo.textContent = `Page load is 0.${loadTime} Seconds`;
            footer.appendChild(loadInfo);
        }
    });
})();

