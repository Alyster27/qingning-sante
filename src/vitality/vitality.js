// Données des articles
const articles = {
    'surpoids': {
        title: `<h4 class="text-xl font-bold text-gray-800 mb-3" data-i18n="vitality.articles.surpoids.title"></h4>`,
        content: `
          <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2" data-i18n="vitality.articles.surpoids.philosophy.title"></h4>
              <p data-i18n="vitality.articles.surpoids.philosophy.paragraph"></p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2" data-i18n="vitality.articles.surpoids.western.title"></h4>
                <p data-i18n="vitality.articles.surpoids.western.paragraph"></p>
              </div>

              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2" data-i18n="vitality.articles.surpoids.chinese.title"></h4>
                <p data-i18n="vitality.articles.surpoids.chinese.paragraph"></p>
              </div>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-3" data-i18n="vitality.articles.surpoids.qingning.title"></h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.surpoids.qingning.solution1"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.surpoids.qingning.solution2"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.surpoids.qingning.solution3"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.surpoids.qingning.solution4"></span>
                </li>
              </ul>
            </div>
          </div>
        `
    },
    'stress': {
        title: `<h4 class="text-xl font-bold text-gray-800 mb-3" data-i18n="vitality.articles.stress.title"></h4>`,
        content: `
          <div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2" data-i18n="vitality.articles.surpoids.philosophy.title"></h4>
              <p data-i18n="vitality.articles.surpoids.philosophy.paragraph"></p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2" data-i18n="vitality.articles.surpoids.western.title"></h4>
                <p data-i18n="vitality.articles.surpoids.western.paragraph"></p>
              </div>

              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2" data-i18n="vitality.articles.surpoids.chinese.title"></h4>
                <p data-i18n="vitality.articles.surpoids.chinese.paragraph"></p>
              </div>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-3" data-i18n="vitality.articles.surpoids.qingning.title"></h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.surpoids.qingning.solution1"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.surpoids.qingning.solution2"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.surpoids.qingning.solution3"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.surpoids.qingning.solution4"></span>
                </li>
              </ul>
            </div>
          </div>
        `
    },
    'douleurs': {
        title: `<h4 class="text-xl font-bold text-gray-800 mb-3" data-i18n="vitality.articles.douleurs.title"></h4>`,
        content: `
          <div class="space-y-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2" data-i18n="vitality.articles.douleurs.philosophy.title"></h4>
              <p data-i18n="vitality.articles.douleurs.philosophy.paragraph"></p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2" data-i18n="vitality.articles.douleurs.western.title"></h4>
                <p data-i18n="vitality.articles.douleurs.western.paragraph"></p>
              </div>

              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2" data-i18n="vitality.articles.douleurs.chinese.title"></h4>
                <p data-i18n="vitality.articles.douleurs.chinese.paragraph"></p>
              </div>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-3" data-i18n="vitality.articles.douleurs.qingning.title"></h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.douleurs.qingning.solution1"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.douleurs.qingning.solution2"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.douleurs.qingning.solution3"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.douleurs.qingning.solution4"></span>
                </li>
              </ul>
            </div>
          </div>
        `
    },
    'feminine': {
        title: `<h4 class="text-xl font-bold text-gray-800 mb-3" data-i18n="vitality.articles.feminine.title"></h4>`,
        content: `
          <div class="space-y-6">
            <div class="bg-pink-50 p-4 rounded-lg">
              <h4 class="font-bold text-pink-800 mb-2" data-i18n="vitality.articles.feminine.philosophy.title"></h4>
              <p data-i18n="vitality.articles.feminine.philosophy.paragraph"></p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2" data-i18n="vitality.articles.feminine.western.title"></h4>
                <p data-i18n="vitality.articles.feminine.western.paragraph"></p>
              </div>

              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2" data-i18n="vitality.articles.feminine.chinese.title"></h4>
                <p data-i18n="vitality.articles.feminine.chinese.paragraph"></p>
              </div>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-3" data-i18n="vitality.articles.feminine.qingning.title"></h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.feminine.qingning.solution1"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.feminine.qingning.solution2"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.feminine.qingning.solution3"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.feminine.qingning.solution4"></span>
                </li>
              </ul>
            </div>
          </div>
        `
    },
    'digestif': {
        title: `<h4 class="text-xl font-bold text-gray-800 mb-3" data-i18n="vitality.articles.digestif.title"></h4>`,
        content: `
          <div class="space-y-6">
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2" data-i18n="vitality.articles.digestif.philosophy.title"></h4>
              <p data-i18n="vitality.articles.digestif.philosophy.paragraph"></p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2" data-i18n="vitality.articles.digestif.western.title"></h4>
                <p data-i18n="vitality.articles.digestif.western.paragraph"></p>
              </div>

              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2" data-i18n="vitality.articles.digestif.chinese.title"></h4>
                <p data-i18n="vitality.articles.digestif.chinese.paragraph"></p>
              </div>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-3" data-i18n="vitality.articles.digestif.qingning.title"></h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.digestif.qingning.solution1"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.digestif.qingning.solution2"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.digestif.qingning.solution3"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.digestif.qingning.solution4"></span>
                </li>
              </ul>
            </div>
          </div>
        `
    },
    'allergies': {
        title: `<h4 class="text-xl font-bold text-gray-800 mb-3" data-i18n="vitality.articles.allergies.title"></h4>`,
        content: `
          <div class="space-y-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2" data-i18n="vitality.articles.allergies.philosophy.title"></h4>
              <p data-i18n="vitality.articles.allergies.philosophy.paragraph"></p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2" data-i18n="vitality.articles.allergies.western.title"></h4>
                <p data-i18n="vitality.articles.allergies.western.paragraph"></p>
              </div>

              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2" data-i18n="vitality.articles.allergies.chinese.title"></h4>
                <p data-i18n="vitality.articles.allergies.chinese.paragraph"></p>
              </div>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-3" data-i18n="vitality.articles.allergies.qingning.title"></h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.allergies.qingning.solution1"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.allergies.qingning.solution2"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.allergies.qingning.solution3"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.allergies.qingning.solution4"></span>
                </li>
              </ul>
            </div>
          </div>
        `
    },

    'peau': {
        title: `<h4 class="text-xl font-bold text-gray-800 mb-3" data-i18n="vitality.articles.peau.title"></h4>`,
        content: `
          <div class="space-y-6">
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2" data-i18n="vitality.articles.peau.philosophy.title"></h4>
              <p data-i18n="vitality.articles.peau.philosophy.paragraph"></p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2" data-i18n="vitality.articles.peau.western.title"></h4>
                <p data-i18n="vitality.articles.peau.western.paragraph"></p>
              </div>

              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2" data-i18n="vitality.articles.peau.chinese.title"></h4>
                <p data-i18n="vitality.articles.peau.chinese.paragraph"></p>
              </div>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-3" data-i18n="vitality.articles.peau.qingning.title"></h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.peau.qingning.solution1"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.peau.qingning.solution2"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.peau.qingning.solution3"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.peau.qingning.solution4"></span>
                </li>
              </ul>
            </div>
          </div>
        `
    },
    'oncologique': {
        title: `<h4 class="text-xl font-bold text-gray-800 mb-3" data-i18n="vitality.articles.oncologique.title"></h4>`,
        content: `
          <div class="space-y-6">
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2" data-i18n="vitality.articles.oncologique.philosophy.title"></h4>
              <p data-i18n="vitality.articles.oncologique.philosophy.paragraph"></p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2" data-i18n="vitality.articles.oncologique.western.title"></h4>
                <p data-i18n="vitality.articles.oncologique.philosophy.paragraph"></p>
              </div>

              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2" data-i18n="vitality.articles.oncologique.chinese.title"></h4>
                <p data-i18n="vitality.articles.oncologique.chinese.paragraph"></p>
              </div>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-3" data-i18n="vitality.articles.oncologique.qingning.title"></h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.oncologique.qingning.solution1"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.oncologique.qingning.solution2"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.oncologique.qingning.solution3"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.oncologique.qingning.solution4"></span>
                </li>
              </ul>
            </div>
          </div>
        `
    },
    'masculine': {
        title: `<h4 class="text-xl font-bold text-gray-800 mb-3" data-i18n="vitality.articles.masculine.title"></h4>`,
        content: `
          <div class="space-y-6">
            <div class="bg-cyan-50 p-4 rounded-lg">
              <h4 class="font-bold text-cyan-800 mb-2" data-i18n="vitality.articles.masculine.philosophy.title"></h4>
              <p data-i18n="vitality.articles.masculine.philosophy.paragraph"></p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2" data-i18n="vitality.articles.masculine.western.title"></h4>
                <p data-i18n="vitality.articles.masculine.western.paragraph"></p>
              </div>

              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2" data-i18n="vitality.articles.masculine.chinese.title"></h4>
                <p data-i18n="vitality.articles.masculine.chinese.paragraph"></p>
              </div>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-3" data-i18n="vitality.articles.masculine.qingning.title"></h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.masculine.qingning.solution1"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.masculine.qingning.solution2"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.masculine.qingning.solution3"></span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2">•</span>
                  <span data-i18n="vitality.articles.masculine.qingning.solution4"></span>
                </li>
              </ul>
            </div>
          </div>
        `
    }
};

function openModal(articleId) {
    const article = articles[articleId];
    if (article) {
        document.getElementById('modal-title').innerHTML = article.title;
        document.getElementById('modal-content').innerHTML = article.content;
        document.getElementById('modal').classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        // FORCER LA MISE À JOUR DES TRADUCTIONS AVEC TON SYSTÈME
        setTimeout(() => {
            if (typeof globalTranslator !== 'undefined') {
                globalTranslator.updateEntireSite();
            }
        }, 100);
    }
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Fermer le modal avec ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
});