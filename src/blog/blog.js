// Données des articles
    const articles = {
      'hiver': {
        title: 'Renforcer votre énergie en hiver : 5 conseils de la MTC',
        content: `
          <div class="space-y-6">
            <img src="/src/assets/images/blog/blog-winter-article.webp" alt="Énergie hivernale" class="w-full h-64 object-cover rounded-lg">
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <p class="text-blue-800 italic">Imaginez votre corps comme un lac gelé en hiver : la surface semble immobile, mais en profondeur, la vie continue doucement. L'hiver est la saison de conservation, de repos, et de préparation à l'énergie du printemps.</p>
            </div>

            <div class="space-y-4">
              <div class="bg-green-50 p-4 rounded-lg">
                <h3 class="font-bold text-green-800 mb-2">Conseil 1 : Adoptez une alimentation réchauffante</h3>
                <p>Pensez à votre estomac comme à un petit feu : pour qu'il brûle correctement, privilégiez les soupes mijotées, les racines et légumineuses. Les crudités glacées ou les aliments froids éteignent ce feu.</p>
              </div>

              <div class="bg-purple-50 p-4 rounded-lg">
                <h3 class="font-bold text-purple-800 mb-2">Conseil 2 : Repos et sommeil de qualité</h3>
                <p>En hiver, la nature se couche tôt et vous devriez faire pareil. Éteignez vos écrans, ralentissez vos gestes, et laissez le corps se régénérer. Chaque minute de sommeil avant minuit est une goutte d'énergie précieuse pour vos Reins.</p>
              </div>

              <div class="bg-orange-50 p-4 rounded-lg">
                <h3 class="font-bold text-orange-800 mb-2">Conseil 3 : Protégez vos Reins et votre bas du dos</h3>
                <p>Votre bas du dos est le coffre-fort de votre énergie. Une écharpe, un gilet chaud ou même une bouillotte peuvent transformer votre quotidien.</p>
              </div>

              <div class="bg-pink-50 p-4 rounded-lg">
                <h3 class="font-bold text-pink-800 mb-2">Conseil 4 : Pratiquez le Qi Gong ou la méditation</h3>
                <p>Quelques mouvements doux ou respirations conscientes sont comme un vent léger qui fait circuler l'eau sous la glace du lac. Laissez l'énergie circuler sans forcer.</p>
              </div>

              <div class="bg-indigo-50 p-4 rounded-lg">
                <h3 class="font-bold text-indigo-800 mb-2">Conseil 5 : Respiration profonde et gestion du stress</h3>
                <p>Respirez comme si vous aspiriez la chaleur du soleil d'hiver. Inspirez la force, expirez les tensions. Même quelques minutes suffisent à réveiller votre Qi.</p>
              </div>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg text-center">
              <p class="font-semibold">L'hiver est un trésor caché : en prenant soin de votre énergie maintenant, vous préparez un printemps radieux !</p>
              <button class="mt-4 bg-[#2E5D35] hover:bg-[#4A7C59] text-white font-bold py-2 px-6 rounded-lg">
                Découvrir nos séances de Qi Gong d'hiver
              </button>
            </div>
          </div>
        `
      },
      'qi': {
        title: 'Le Qi : l\'énergie vitale qui circule en vous',
        content: `
          <div class="space-y-6">
            <img src="/src/assets/images/blog/blog-qi-article.webp" alt="Énergie Qi" class="w-full h-64 object-cover rounded-lg">
            
            <div class="bg-green-50 p-4 rounded-lg">
              <p class="text-green-800 italic">Le Qi est invisible, mais vous le ressentez chaque matin : l'énergie qui vous fait sortir du lit, sourire, respirer. C'est le souffle vital qui anime vos organes, votre esprit et vos émotions.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h3 class="font-bold text-blue-800 mb-2">Le rôle du Qi</h3>
                <p>Imaginez un jardinier qui arrose ses plantes tous les jours : le Qi nourrit vos organes, renforce vos défenses naturelles et équilibre vos émotions. Quand il circule librement, vous êtes en pleine forme.</p>
              </div>

              <div class="bg-orange-50 p-4 rounded-lg">
                <h3 class="font-bold text-orange-800 mb-2">Les déséquilibres</h3>
                <p>Fatigue, tensions, digestion difficile ou émotions instables... ce sont autant de signaux que votre énergie vitale est en déséquilibre. L'écouter, c'est comme ajuster les voiles d'un bateau avant la tempête.</p>
              </div>
            </div>

            <div class="bg-purple-50 p-4 rounded-lg">
              <h3 class="font-bold text-purple-800 mb-2">Comment faire circuler le Qi</h3>
              <p>Respirez profondément, pratiquez le Qi Gong, laissez les aiguilles de l'acupuncture stimuler vos points vitaux, ou adaptez votre alimentation. Chaque geste simple devient un souffle qui libère et harmonise votre énergie.</p>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg text-center">
              <p class="font-semibold">Le Qi n'est pas seulement un concept : c'est la clé pour une santé globale, un corps vivant et un esprit clair.</p>
              <button class="mt-4 bg-[#2E5D35] hover:bg-[#4A7C59] text-white font-bold py-2 px-6 rounded-lg">
                En savoir plus sur les soins énergétiques
              </button>
            </div>
          </div>
        `
      },
      'saisons': {
        title: 'Les saisons en Médecine Chinoise - Vivre en harmonie avec la nature',
        content: `
          <div class="space-y-6">
            <img src="/src/assets/images/blog/blog-season-article.webp" alt="Saisons MTC" class="w-full h-64 object-cover rounded-lg">
            
            <div class="bg-green-50 p-4 rounded-lg">
              <p class="text-green-800 italic">L'homme est un reflet de la nature. Les saisons ne sont pas que des repères sur un calendrier : elles rythment notre énergie et notre santé. Vivre en harmonie avec elles, c'est danser avec le monde plutôt que lutter contre lui.</p>
            </div>

            <div class="bg-blue-50 p-4 rounded-lg">
              <h3 class="font-bold text-blue-800 mb-2">Les 5 saisons et leurs correspondances</h3>
              <div class="space-y-2">
                <div class="flex items-start">
                  <span class="text-[#2E5D35] mr-2 mt-1">•</span>
                  <span><strong>Printemps (Foie / Bois)</strong> : le monde s'éveille, les bourgeons poussent, votre créativité aussi.</span>
                </div>
                <div class="flex items-start">
                  <span class="text-[#2E5D35] mr-2 mt-1">•</span>
                  <span><strong>Été (Cœur / Feu)</strong> : tout s'étend, l'énergie explose dans vos relations et vos passions.</span>
                </div>
                <div class="flex items-start">
                  <span class="text-[#2E5D35] mr-2 mt-1">•</span>
                  <span><strong>Été indien (Rate / Terre)</strong> : transition douce, digestion et équilibre intérieur.</span>
                </div>
                <div class="flex items-start">
                  <span class="text-[#2E5D35] mr-2 mt-1">•</span>
                  <span><strong>Automne (Poumon / Métal)</strong> : le temps des feuilles mortes invite à l'introspection.</span>
                </div>
                <div class="flex items-start">
                  <span class="text-[#2E5D35] mr-2 mt-1">•</span>
                  <span><strong>Hiver (Rein / Eau)</strong> : tout se met en pause, se conserve, se régénère.</span>
                </div>
              </div>
            </div>

            <div class="bg-orange-50 p-4 rounded-lg">
              <h3 class="font-bold text-orange-800 mb-2">Principes pour vivre chaque saison</h3>
              <p>Adaptez votre alimentation, votre activité et vos émotions selon le rythme naturel : une promenade printanière, des soirées méditatives en automne, des plats mijotés en hiver... chaque saison a ses codes pour soutenir votre Qi.</p>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg text-center">
              <p class="font-semibold">Se laisser guider par les saisons, c'est rester en santé toute l'année et vivre en harmonie avec le monde naturel.</p>
              <button class="mt-4 bg-[#2E5D35] hover:bg-[#4A7C59] text-white font-bold py-2 px-6 rounded-lg">
                Découvrir nos conseils saisonniers
              </button>
            </div>
          </div>
        `
      },
      'stress': {
        title: 'Stress et émotions - L\'équilibre du corps et de l\'esprit',
        content: `
          <div class="space-y-6">
            <img src="/src/assets/images/blog/blog-stress-article.webp" alt="Équilibre émotionnel" class="w-full h-64 object-cover rounded-lg">
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <p class="text-blue-800 italic">Saviez-vous que vos émotions ont un organe attitré ? En Médecine Chinoise, colère, joie, soucis, tristesse et peur ne sont pas que des sentiments : ce sont des messages de votre corps.</p>
            </div>

            <div class="bg-green-50 p-4 rounded-lg">
              <h3 class="font-bold text-green-800 mb-2">Les émotions et leurs organes associés</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <div class="flex items-start">
                    <span class="text-[#2E5D35] mr-2 mt-1">•</span>
                    <span><strong>Colère</strong> - Foie</span>
                  </div>
                  <div class="flex items-start">
                    <span class="text-[#2E5D35] mr-2 mt-1">•</span>
                    <span><strong>Joie</strong> - Cœur</span>
                  </div>
                  <div class="flex items-start">
                    <span class="text-[#2E5D35] mr-2 mt-1">•</span>
                    <span><strong>Soucis</strong> - Rate</span>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex items-start">
                    <span class="text-[#2E5D35] mr-2 mt-1">•</span>
                    <span><strong>Tristesse</strong> - Poumons</span>
                  </div>
                  <div class="flex items-start">
                    <span class="text-[#2E5D35] mr-2 mt-1">•</span>
                    <span><strong>Peur</strong> - Reins</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-purple-50 p-4 rounded-lg">
              <h3 class="font-bold text-purple-800 mb-2">Impact du stress</h3>
              <p>Le stress bloque le Qi, perturbe votre sommeil et votre digestion. C'est comme un bouchon qui empêche l'eau de circuler dans un ruisseau : tout devient stagnant et froid.</p>
            </div>

            <div class="bg-orange-50 p-4 rounded-lg">
              <h3 class="font-bold text-orange-800 mb-2">Techniques pour équilibrer</h3>
              <p>Respirez profondément, pratiquez la méditation, laissez l'acupuncture stimuler votre énergie, utilisez des plantes apaisantes. Chaque geste rétablit la circulation de votre Qi et apaise vos émotions.</p>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg text-center">
              <p class="font-semibold">Écouter vos émotions, c'est comprendre votre corps et prévenir la maladie. Chaque souffle conscient est un pas vers l'équilibre intérieur.</p>
              <button class="mt-4 bg-[#2E5D35] hover:bg-[#4A7C59] text-white font-bold py-2 px-6 rounded-lg">
                Réserver une séance de relaxation énergétique
              </button>
            </div>
          </div>
        `
      },
      'nutrition': {
        title: 'Nutrition chinoise - 5 habitudes pour une digestion optimale',
        content: `
          <div class="space-y-6">
            <img src="/src/assets/images/blog/blog-nutrition-article.webp" alt="Nutrition MTC" class="w-full h-64 object-cover rounded-lg">
            
            <div class="bg-green-50 p-4 rounded-lg">
              <p class="text-green-800 italic">Votre Rate et votre Estomac sont comme le moteur de votre énergie vitale. Une digestion efficace est la base de toute vitalité : imaginez votre Qi comme une rivière qui prend sa source dans votre ventre.</p>
            </div>

            <div class="space-y-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h3 class="font-bold text-blue-800 mb-2">Habitude 1 : Privilégier le chaud et le cuit</h3>
                <p>Les plats cuits facilitent la digestion et évitent l'humidité interne qui peut ralentir votre Qi. Une soupe fumante en hiver, c'est comme un rayon de soleil pour votre énergie.</p>
              </div>

              <div class="bg-purple-50 p-4 rounded-lg">
                <h3 class="font-bold text-purple-800 mb-2">Habitude 2 : Manger à heures régulières</h3>
                <p>Respectez votre horloge biologique. Chaque repas pris au bon moment nourrit votre Qi comme on remplit un réservoir d'essence.</p>
              </div>

              <div class="bg-orange-50 p-4 rounded-lg">
                <h3 class="font-bold text-orange-800 mb-2">Habitude 3 : Mastiquer et manger en pleine conscience</h3>
                <p>Savourer chaque bouchée, respirer avant d'avaler, limiter le stress... c'est un massage doux pour votre énergie interne.</p>
              </div>

              <div class="bg-pink-50 p-4 rounded-lg">
                <h3 class="font-bold text-pink-800 mb-2">Habitude 4 : Éviter l'excès de sucre et de produits industriels</h3>
                <p>Ces aliments perturbent la Rate et la production de Qi. Préférez les aliments naturels et de saison pour soutenir votre vitalité.</p>
              </div>

              <div class="bg-indigo-50 p-4 rounded-lg">
                <h3 class="font-bold text-indigo-800 mb-2">Habitude 5 : Choisir des aliments de saison</h3>
                <p>Une énergie en harmonie avec la nature est une énergie durable. L'hiver invite aux soupes et aux légumes racines, l'été aux fruits juteux et rafraîchissants.</p>
              </div>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg text-center">
              <p class="font-semibold">Une digestion optimale, c'est une rivière de Qi qui circule librement et vous nourrit à chaque instant.</p>
              <button class="mt-4 bg-[#2E5D35] hover:bg-[#4A7C59] text-white font-bold py-2 px-6 rounded-lg">
                Télécharger notre guide de recettes saisonnières
              </button>
            </div>
          </div>
        `
      }
    };

    function openArticle(articleId) {
      const article = articles[articleId];
      if (article) {
        document.getElementById('modal-title').textContent = article.title;
        document.getElementById('modal-content').innerHTML = article.content;
        document.getElementById('article-modal').classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeArticle() {
      document.getElementById('article-modal').classList.add('hidden');
      document.body.style.overflow = 'auto';
    }

    // Fermer le modal avec ESC
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeArticle();
    });