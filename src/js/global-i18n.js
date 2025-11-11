// Système de traduction global CORRIGÉ pour la nouvelle structure
class GlobalTranslator {
    constructor() {
        this.currentLang = localStorage.getItem('siteLang') || 'fr';
        this.init();
    }
    
    init() {
        this.updateEntireSite();
    }
    
    // Change toute la langue du site
    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('siteLang', lang);
        this.updateEntireSite();
        document.documentElement.lang = lang;
        this.updateLanguageSelectors();
    }
    
    // Traduit une clé - VERSION CORRIGÉE pour la structure imbriquée
    t(key) {
        // Sépare la clé par les points (ex: "header.home" -> ["header", "home"])
        const keys = key.split('.');
        
        // Navigue dans l'objet translations (ex: translations.fr.header.home)
        let result = translations[this.currentLang];
        
        for (const k of keys) {
            result = result?.[k];
            if (result === undefined) break;
        }
        
        // Si pas trouvé, essaie en français, sinon retourne la clé
        if (result === undefined) {
            result = key.split('.').reduce((obj, k) => obj?.[k], translations['fr']) || key;
        }
        
        return result;
    }
    
    // Met à jour TOUT le site - VERSION CORRIGÉE
    updateEntireSite() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            // Si c'est un tableau (comme les benefits), on le transforme en HTML
            if (Array.isArray(translation)) {
                element.innerHTML = translation.map(item => `<li>${item}</li>`).join('');
            } 
            // Si c'est un objet, on affiche un message d'erreur
            else if (typeof translation === 'object' && translation !== null) {
                console.warn(`La clé "${key}" pointe vers un objet, pas un texte`);
                element.textContent = `[Erreur: ${key} est un objet]`;
            }
            // Sinon, texte normal
            else {
                element.textContent = translation;
            }
        });
        
        // Met à jour aussi les placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.t(key);
        });
    }
    
    // Met à jour les sélecteurs de langue
    updateLanguageSelectors() {
        const headerSelect = document.getElementById('header-lang-select');
        const mobileSelect = document.getElementById('mobile-lang-select');
        if (headerSelect) headerSelect.value = this.currentLang;
        if (mobileSelect) mobileSelect.value = this.currentLang;
    }
    
    // Initialise les écouteurs d'événements pour les sélecteurs
    initLanguageSelectors() {
        const headerSelect = document.getElementById('header-lang-select');
        const mobileSelect = document.getElementById('mobile-lang-select');
        
        if (headerSelect) {
            headerSelect.addEventListener('change', (e) => {
                this.setLanguage(e.target.value);
            });
        }
        
        if (mobileSelect) {
            mobileSelect.addEventListener('change', (e) => {
                this.setLanguage(e.target.value);
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) mobileMenu.classList.add('hidden');
            });
        }
        
        this.updateLanguageSelectors();
    }
}

// Initialisation globale
const globalTranslator = new GlobalTranslator();

// Fonction pour initialiser après le chargement du header
function initHeaderLanguageSelector() {
    globalTranslator.initLanguageSelectors();
}