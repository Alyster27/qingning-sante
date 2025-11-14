// Charge le header sur toutes les pages
async function loadHeader() {
    try {
        const response = await fetch('/src/components/header.html');
        const headerHTML = await response.text();
        document.getElementById('header-container').innerHTML = headerHTML;
        
        initMobileMenu();
        
    } catch (error) {
        console.error('❌ Erreur chargement header:', error);
    }
}

function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (!mobileMenuButton || !mobileMenu) return;

    // Toggle menu mobile
    mobileMenuButton.addEventListener('click', function () {
        const isHidden = mobileMenu.classList.contains('hidden');

        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });

    // Fermer le menu en cliquant sur un lien
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            document.body.style.overflow = '';
        });
    });
}

document.addEventListener('DOMContentLoaded', loadHeader);