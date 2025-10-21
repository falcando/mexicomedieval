// Language toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved language preference
    const savedLang = localStorage.getItem('siteLang') || 'es';
    if (savedLang === 'en') {
        // In a real scenario, we would redirect to the English version
        console.log('Redirecting to English version');
    }

    // Set up language toggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const currentLang = localStorage.getItem('siteLang') || 'es';
            const newLang = currentLang === 'es' ? 'en' : 'es';
            localStorage.setItem('siteLang', newLang);
            // In a real scenario, we would redirect to the other language version
            console.log(`Switching to ${newLang} version`);
        });
    }

    // Initialize tooltips for icons
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Simple search functionality (would be enhanced with lunr.js in production)
document.getElementById('searchForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    alert(`Buscar: ${query}\nEsta funcionalidad se implementará completamente con lunr.js`);
});