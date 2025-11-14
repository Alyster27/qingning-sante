// Charge le header sur toutes les pages
async function loadFooter() {
    try {
        const response = await fetch('/src/components/footer.html');
        const headerHTML = await response.text();
        document.getElementById('footer-container').innerHTML = headerHTML;
        
        // Initialise le sélecteur de langue après chargement du header
        setTimeout(() => {
            if (typeof initHeaderLanguageSelector === 'function') {
                initHeaderLanguageSelector();
            }
        }, 100);
        
    } catch (error) {
        console.error('Erreur chargement footer:', error);
    }
}

// Charge le header au démarrage
document.addEventListener('DOMContentLoaded', loadFooter);