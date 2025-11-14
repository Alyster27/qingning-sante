// Données des articles
    const articles = {
      'hiver': {
        title: '<h2 class="text-2xl font-bold text-gray-800" data-i18n="blog.modal.winter.title"></h2>',
        content: `
          <div class="space-y-6">
            
            <img src="/src/assets/images/blog/blog-winter-article.webp" alt="Énergie hivernale" class="w-full h-64 object-cover rounded-lg">
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <p class="text-blue-800 italic" data-i18n="blog.modal.winter.paragraph"></p>
            </div>

            <div class="space-y-4">
              <div class="bg-green-50 p-4 rounded-lg">
                <h3 class="font-bold text-green-800 mb-2" data-i18n="blog.modal.winter.advice1.title"></h3>
                <p data-i18n="blog.modal.winter.advice1.text"></p>
              </div>

              <div class="bg-purple-50 p-4 rounded-lg">
                <h3 class="font-bold text-purple-800 mb-2" data-i18n="blog.modal.winter.advice2.title"></h3>
                <p data-i18n="blog.modal.winter.advice2.text"></p>
              </div>

              <div class="bg-orange-50 p-4 rounded-lg">
                <h3 class="font-bold text-orange-800 mb-2" data-i18n="blog.modal.winter.advice3.title"></h3>
                <p data-i18n="blog.modal.winter.advice3.text"></p>
              </div>

              <div class="bg-pink-50 p-4 rounded-lg">
                <h3 class="font-bold text-pink-800 mb-2" data-i18n="blog.modal.winter.advice4.title"></h3>
                <p data-i18n="blog.modal.winter.advice4.text"></p>
              </div>

              <div class="bg-indigo-50 p-4 rounded-lg">
                <h3 class="font-bold text-indigo-800 mb-2" data-i18n="blog.modal.winter.advice5.title"></h3>
                <p data-i18n="blog.modal.winter.advice5.text"></p>
              </div>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg text-center">
              <p class="font-semibold" data-i18n="blog.modal.winter.footer.text"></p>
              <button class="mt-4 bg-[#2E5D35] hover:bg-[#4A7C59] text-white font-bold py-2 px-6 rounded-lg" data-i18n="blog.modal.winter.footer.button"></button>
            </div>
          </div>
        `
      },
      'qi': {
        title: '<h2 class="text-2xl font-bold text-gray-800" data-i18n="blog.modal.qi.title"></h2>',
        content: `
          <div class="space-y-6">
            <img src="/src/assets/images/blog/blog-qi-article.webp" alt="Énergie Qi" class="w-full h-64 object-cover rounded-lg">
            
            <div class="bg-green-50 p-4 rounded-lg">
              <p class="text-green-800 italic" data-i18n="blog.modal.qi.paragraph"></p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h3 class="font-bold text-blue-800 mb-2" data-i18n="blog.modal.qi.role.title"></h3>
                <p data-i18n="blog.modal.qi.role.text"></p>
              </div>

              <div class="bg-orange-50 p-4 rounded-lg">
                <h3 class="font-bold text-orange-800 mb-2" data-i18n="blog.modal.qi.desequilibre.title"></h3>
                <p data-i18n="blog.modal.qi.desequilibre.text"></p>
              </div>
            </div>

            <div class="bg-purple-50 p-4 rounded-lg">
              <h3 class="font-bold text-purple-800 mb-2" data-i18n="blog.modal.qi.comment.title"></h3>
              <p data-i18n="blog.modal.qi.comment.text"></p>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg text-center">
              <p class="font-semibold" data-i18n="blog.modal.qi.footer.text"></p>
              <button class="mt-4 bg-[#2E5D35] hover:bg-[#4A7C59] text-white font-bold py-2 px-6 rounded-lg" data-i18n="blog.modal.qi.footer.button"></button>
            </div>
          </div>
        `
      },
      'saisons': {
        title: '<h2 class="text-2xl font-bold text-gray-800" data-i18n="blog.modal.season.title"></h2>',
        content: `
          <div class="space-y-6">
            <img src="/src/assets/images/blog/blog-season-article.webp" alt="Saisons MTC" class="w-full h-64 object-cover rounded-lg">
            
            <div class="bg-green-50 p-4 rounded-lg">
              <p class="text-green-800 italic" data-i18n="blog.modal.season.paragraph"></p>
            </div>

            <div class="bg-blue-50 p-4 rounded-lg">
              <h3 class="font-bold text-blue-800 mb-2" data-i18n="blog.modal.season.fiveSeasons.title">Les 5 saisons et leurs correspondances</h3>
              <div class="space-y-2">
                <div class="flex items-start">
                  <span class="text-[#2E5D35] mr-2">•</span>
                  <span class="font-bold mr-1" data-i18n="blog.modal.season.fiveSeasons.spring.bold"></span>
                  <span data-i18n="blog.modal.season.fiveSeasons.spring.text"></span>
                </div>
                <div class="flex items-start">
                  <span class="text-[#2E5D35] mr-2">•</span>
                  <span class="font-bold mr-1" data-i18n="blog.modal.season.fiveSeasons.summer.bold"></span>
                  <span data-i18n="blog.modal.season.fiveSeasons.summer.text"></span>
                </div>
                <div class="flex items-start">
                  <span class="text-[#2E5D35] mr-2">•</span>
                  <span class="font-bold mr-1" data-i18n="blog.modal.season.fiveSeasons.indianSummer.bold"></span>
                  <span data-i18n="blog.modal.season.fiveSeasons.indianSummer.text"></span>
                </div>
                <div class="flex items-start">
                  <span class="text-[#2E5D35] mr-2">•</span>
                  <span class="font-bold mr-1" data-i18n="blog.modal.season.fiveSeasons.automn.bold"></span>
                  <span data-i18n="blog.modal.season.fiveSeasons.automn.text"></span>
                </div>
                <div class="flex items-start">
                  <span class="text-[#2E5D35] mr-2">•</span>
                  <span class="font-bold mr-1" data-i18n="blog.modal.season.fiveSeasons.winter.bold"></span>
                  <span data-i18n="blog.modal.season.fiveSeasons.winter.text"></span>
                </div>
              </div>
            </div>

            <div class="bg-orange-50 p-4 rounded-lg">
              <h3 class="font-bold text-orange-800 mb-2" data-i18n="blog.modal.season.principes.title"></h3>
              <p data-i18n="blog.modal.season.principes.text"></p>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg text-center">
              <p class="font-semibold" data-i18n="blog.modal.season.footer.text"></p>
              <button class="mt-4 bg-[#2E5D35] hover:bg-[#4A7C59] text-white font-bold py-2 px-6 rounded-lg" data-i18n="blog.modal.season.footer.button"></button>
            </div>
          </div>
        `
      },
      'stress': {
        title: '<h2 class="text-2xl font-bold text-gray-800" data-i18n="blog.modal.stress.title"></h2>',
        content: `
          <div class="space-y-6">
            <img src="/src/assets/images/blog/blog-stress-article.webp" alt="Équilibre émotionnel" class="w-full h-64 object-cover rounded-lg">
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <p class="text-blue-800 italic" data-i18n="blog.modal.stress.paragraph"></p>
            </div>

            <div class="bg-green-50 p-4 rounded-lg">
              <h3 class="font-bold text-green-800 mb-2" data-i18n="blog.modal.stress.emotion.title"></h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <div class="flex items-start">
                    <span class="text-[#2E5D35] mr-2">•</span>
                    <span class="font-bold mr-1" data-i18n="blog.modal.stress.emotion.colere.bold"></span>
                    <span data-i18n="blog.modal.stress.emotion.colere.text"></span>
                  </div>
                  <div class="flex items-start">
                    <span class="text-[#2E5D35] mr-2">•</span>
                    <span class="font-bold mr-1" data-i18n="blog.modal.stress.emotion.joie.bold"></span>
                    <span data-i18n="blog.modal.stress.emotion.joie.text"></span>
                  </div>
                  <div class="flex items-start">
                    <span class="text-[#2E5D35] mr-2">•</span>
                    <span class="font-bold mr-1" data-i18n="blog.modal.stress.emotion.soucis.bold"></span>
                    <span data-i18n="blog.modal.stress.emotion.soucis.text"></span>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex items-start">
                    <span class="text-[#2E5D35] mr-2">•</span>
                    <span class="font-bold mr-1" data-i18n="blog.modal.stress.emotion.tristesse.bold"></span>
                    <span data-i18n="blog.modal.stress.emotion.tristesse.text"></span>
                  </div>
                  <div class="flex items-start">
                    <span class="text-[#2E5D35] mr-2">•</span>
                    <span class="font-bold mr-1" data-i18n="blog.modal.stress.emotion.peur.bold"></span>
                    <span data-i18n="blog.modal.stress.emotion.peur.text"></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-purple-50 p-4 rounded-lg">
              <h3 class="font-bold text-purple-800 mb-2" data-i18n="blog.modal.stress.impact.title"></h3>
              <p data-i18n="blog.modal.stress.impact.text"></p>
            </div>

            <div class="bg-orange-50 p-4 rounded-lg">
              <h3 class="font-bold text-orange-800 mb-2" data-i18n="blog.modal.stress.techniques.title"></h3>
              <p data-i18n="blog.modal.stress.techniques.text"></p>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg text-center">
              <p class="font-semibold" data-i18n="blog.modal.stress.footer.text"></p>
              <button class="mt-4 bg-[#2E5D35] hover:bg-[#4A7C59] text-white font-bold py-2 px-6 rounded-lg" data-i18n="blog.modal.stress.footer.button">
                
              </button>
            </div>
          </div>
        `
      },
      'nutrition': {
        title: '<h2 class="text-2xl font-bold text-gray-800" data-i18n="blog.modal.nutrition.title"></h2>',
        content: `
          <div class="space-y-6">
            <img src="/src/assets/images/blog/blog-nutrition-article.webp" alt="Nutrition MTC" class="w-full h-64 object-cover rounded-lg">
            
            <div class="bg-green-50 p-4 rounded-lg">
              <p class="text-green-800 italic" data-i18n="blog.modal.nutrition.paragraph"></p>
            </div>

            <div class="space-y-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h3 class="font-bold text-blue-800 mb-2" data-i18n="blog.modal.nutrition.habit1.bold"></h3>
                <p data-i18n="blog.modal.nutrition.habit1.text"></p>
              </div>

              <div class="bg-purple-50 p-4 rounded-lg">
                <h3 class="font-bold text-purple-800 mb-2" data-i18n="blog.modal.nutrition.habit2.bold"></h3>
                <p data-i18n="blog.modal.nutrition.habit2.text"></p>
              </div>

              <div class="bg-orange-50 p-4 rounded-lg">
                <h3 class="font-bold text-orange-800 mb-2" data-i18n="blog.modal.nutrition.habit3.bold"></h3>
                <p data-i18n="blog.modal.nutrition.habit3.text"></p>
              </div>

              <div class="bg-pink-50 p-4 rounded-lg">
                <h3 class="font-bold text-pink-800 mb-2" data-i18n="blog.modal.nutrition.habit4.bold"></h3>
                <p data-i18n="blog.modal.nutrition.habit4.text"></p>
              </div>

              <div class="bg-indigo-50 p-4 rounded-lg">
                <h3 class="font-bold text-indigo-800 mb-2" data-i18n="blog.modal.nutrition.habit5.bold"></h3>
                <p data-i18n="blog.modal.nutrition.habit5.text"></p>
              </div>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg text-center">
              <p class="font-semibold" data-i18n="blog.modal.nutrition.footer.text"></p>
              <button class="mt-4 bg-[#2E5D35] hover:bg-[#4A7C59] text-white font-bold py-2 px-6 rounded-lg" data-i18n="blog.modal.nutrition.footer.button"></button>
            </div>
          </div>
        `
      }
    };

    function openArticle(articleId) {
      const article = articles[articleId];
      if (article) {
        document.getElementById('modal-title').innerHTML = article.title;
        document.getElementById('modal-content').innerHTML = article.content;
        document.getElementById('article-modal').classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }

      // FORCER LA MISE À JOUR DES TRADUCTIONS AVEC TON SYSTÈME
        setTimeout(() => {
            if (typeof globalTranslator !== 'undefined') {
                globalTranslator.updateEntireSite();
            }
        }, 100);
    }

    function closeArticle() {
      document.getElementById('article-modal').classList.add('hidden');
      document.body.style.overflow = 'auto';
    }

    // Fermer le modal avec ESC
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeArticle();
    });