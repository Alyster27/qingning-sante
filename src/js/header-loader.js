// Charge le header sur toutes les pages
async function loadHeader() {
    console.log('🔄 Chargement du header...');

    try {
        const response = await fetch('/src/components/header.html');
        const headerHTML = await response.text();
        document.getElementById('header-container').innerHTML = headerHTML;
        
        initMobileMenu();
        
        if (window.globalTranslator && window.globalTranslator.initLanguageSelectors) {
            window.globalTranslator.initLanguageSelectors();
        }
        
    } catch (error) {
        console.error('❌ Erreur chargement header:', error);
    }
}

function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', loadHeader);