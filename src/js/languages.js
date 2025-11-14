const translations = {
    fr: {
        /** ===== COMPOSENT HEADER ===== */
        'header': {
            'home': 'Accueil',
            'about': 'À propos',
            'therapeute': 'Thérapeute',           
            'services': 'Soins',
            'servicesDropdown': {
                'acupuncture': 'Acupuncture',
                'acupunctureLift': 'Acupuncture Lift',
                'moxibustion': 'Moxibustion',
                'ventouses': 'Ventouses',
                'tuina': 'Massage Tui Na',
                'phytotherapie': 'Phytothérapie',
                'nutrition': 'Nutrition MTC'
            },
            'vitality': 'Vitalité',
            'tarifs': 'Tarifs',           
            'blog': 'Blog',
            'faq': 'FAQ',
            'contact': 'Contact',            
        },

        /** ===== PAGE ACCUEIL ===== */
        'home': {
            'title': 'Bienvenue chez Qingning Santé Genève',
            'subtitle': 'Centre de Thérapie de Médecine Traditionnelle Chinoise en Suisse',
            'paragraph': 'Votre santé, notre tradition',
            // CARROUSEL COMPLET EN FRANCAIS
            'carousel': {
                'acupuncture': {
                    'title': 'Acupuncture',
                    'paragraph': `L'acupuncture traditionnelle stimule des points spécifiques du corps à l'aide d'aiguilles stérilisées et à usage unique. Cette stimulation provoque une réaction naturelle de l'organisme, favorisant l'auto-régulation, la circulation du Qi et la libération des blocages.`,
                    'link': `Plus d'information sur l'acupuncture`
                },
                'moxibustion': {
                    'title': 'Moxibustion',
                    'paragraph': `La moxibustion utilise la chaleur du moxa - traditionnellement de l'armoise séchée, parfois associée à d'autres plantes - appliquée sur des points précis ou des zones du corps. Elle peut se faire avec des rouleaux, sur l'aiguille ou directement sur la peau.`,
                    'link': `Pour en savoir plus sur la moxibustion`
                },
                'ventouses': {
                    'title': 'Ventouses',
                    'paragraph': `Les ventouses, chauffées ou non, créent une suction sur la peau pour activer la circulation sanguine et lymphatique. Elles délogent les stagnations et sont particulièrement utiles pour la récupération et la prévention des blessures.`,
                    'link': `Rejoindre la page des soins aux ventouses`
                },
                'tuina': {
                    'title': 'Tui Na',
                    'paragraph': `Le Tui Na est un massage thérapeutique chinois combinant pressions, manipulations, étirements et mobilisations articulaires. Chaque technique est choisie selon la zone du corps, le déséquilibre et la constitution individuelle.`,
                    'link': `Pour en savoir plus sur le Tui Na`
                },
                'phytotherapie': {
                    'title': 'Phytothérapie',
                    'paragraph': `La pharmacopée chinoise est composée de plantes médicinales naturelles combinées en formules adaptées à chaque patient. Chaque prescription est personnalisée pour traiter les causes profondes des déséquilibres, tout en minimisant les effets secondaires.`,
                    'link': `En savoir plus sur la phytothérapie`
                },
                'nutrition': {
                    'title': 'Diététique chinoise',
                    'paragraph': `Chaque aliment possède des propriétés spécifiques. La diététique chinoise s'adapte à la constitution et à la situation de chaque personne, préventivement ou de façon thérapeutique. Il ne s'agit pas d'un régime, mais d'un rééquilibrage alimentaire pour soutenir la santé.`,
                    'link': `Plus d'information sur les types d'alimentation à adopter`
                }
            },
            // Introduction
            'introduction': {
                'title': 'Introduction',
                'paragraph': `Découvrez l'équilibre retrouvé grâce à la sagesse millénaire de la Médecine Traditionnelle Chinoise. Au cabinet d'acupuncture Qingning Santé, nous unissons tradition authentique et approche moderne pour votre bien-être global.`
            },
            // Expertise
            'expertise': {
                'title': 'Notre expertise en acupuncture et MTC',
                'paragraph': `Situé au cœur du Quartier de l'Étang à Genève, Qingning Santé bénéficie d'un partenariat exclusif avec la prestigieuse Clinique Qingning en Chine, référence internationale en Médecine Traditionnelle Chinoise. Nos thérapeutes certifiés cumulent plus de 40 ans d'expérience combinée en acupuncture et médecine chinoise.`
            },
            // Séances
            'session': {
                'title': 'Votre séance d\'acupuncture à Genève',
                'intro': 'Dans notre espace calme et lumineux, nous vous accompagnons pour :',
                'benefits': [
                    'Rééquilibrer votre énergie vitale (Qi)',
                    'Stimuler vos capacités naturelles d\'auto-guérison',
                    'Retrouver sérénité et vitalité',
                    'Apaiser les douleurs chroniques'
                ]
            },
            // Localisation
            'location': {
                'title': 'Localisation pratique',
                'paragraph': `À quelques minutes de Châtelaine et Vernier, notre centre d'acupuncture accueille les habitants de toute la région genevoise. Accessible et convivial, nous vous proposons des soins personnalisés en Médecine Traditionnelle Chinoise.`
            },
            // Certification (assurance complémentaire)
            'certification': {
                'title': 'Le centre et nos thérapeutes sont certifiés',
                'paragraph': `Nous sommes agréés ASCA, RME, vous permettant de vous faire rembourser votre séance ! Renseignez-vous auprès de votre assurance complémentaire !`
            },
            // Reserver
            'cta': {
                'title': 'Première séance découverte : bilan énergétique personnalisé offert !',
                'subtitle': '(Offre réservée aux nouveaux patients — réservez dès maintenant votre consultation d\'acupuncture)',
                'button': 'Réserver ma séance découverte'
            }
        },

        /** ===== PAGE À PROPOS ===== */
        'about': {
            'title': `Qingning Santé : L'excellence genevoise en acupuncture et médecine chinoise`,
            'subtitle': `Notre philosophie : équilibre, clarté et vitalité`,
            'section1': {
              
              'bloc1-paragraph': `Chez Qingning Santé Genève, nous croyons que la santé naît de l'équilibre entre le corps et l'esprit. Le mot "Qingning" signifie pure clarté et sérénité, symboles de notre approche thérapeutique fondée sur la médecine traditionnelle chinoise (MTC). `,
              'bloc2-paragraph': `En chinois, Qingning évoque aussi le citron vert, symbole de fraîcheur et d'énergie vitale. Son parfum réveille les sens, sa saveur purifie et rééquilibre. À son image, notre pratique d'acupuncture nourrit la vie avec simplicité et profondeur : elle apaise quand l'esprit s'agite et revitalise quand le corps s'épuise.`,
              'bloc3-paragraph': `Notre mission : vous offrir un espace lumineux et apaisant, où chacun retrouve harmonie, clarté et élan vital grâce à une approche personnalisée.`
            },
            'section2': {
              'subtitle': `Notre histoire : une rencontre entre la Suisse et la Chine`,
              'bloc1-paragraph': `Qingning Santé Genève est né d'une rencontre humaine et culturelle entre la Suisse et la Chine. Le Dr Bo Wang, fondateur de la Clinique Qingning en Chine, a vécu plusieurs années à Neuchâtel. Touché par la culture helvétique et son art de vivre, il a souhaité créer un lien durable entre ses racines chinoises et la Suisse.`,
              'bloc2-paragraph': `C'est alors qu'il rencontre Mme Yongyan Sui, passionnée par la médecine traditionnelle chinoise et fondatrice de Qingning Santé Genève. De cette collaboration est né un centre unique : un pont vivant entre tradition chinoise et mode de vie occidental, où l'acupuncture et les soins énergétiques s'adaptent à chacun.`
            },
            'section3': {
                'subtitle': `Notre engagement pour votre santé`,
                'commitment1': {
                    'bold': `Authenticité :`,
                    'text': `utilisation de techniques ancestrales validées par des millénaires de pratique`
                },
                'commitment2': {
                    'bold': `Excellence :`, 
                    'text': `formation continue et collaboration avec des experts en Chine`
                },
                'commitment3': {
                    'bold': `Personnalisation :`,
                    'text': `soins adaptés à votre constitution, votre environnement et votre rythme de vie`
                },
                'commitment4': {
                    'bold': `Résultats durables :`,
                    'text': `approche holistique visant les causes profondes des déséquilibres`
                }
            },
            'section4': {
              'subtitle': `Acupuncture et MTC : une approche globale du bien-être`,
              'paragraph': `La médecine traditionnelle chinoise considère l'être humain dans sa globalité. Au-delà des symptômes, nous cherchons à comprendre les déséquilibres énergétiques qui affectent votre santé. Notre approche combine acupuncture, phytothérapie, diététique et conseils en hygiène de vie pour un bien-être durable.`
            }
        },

        /** ===== PAGE THÉRAPEUTE ===== */
        'therapeute': {
            'section1': {
                'title': 'Notre Équipe',
                'subtitle': `L'expérience et l'écoute`,
                'bloc1-paragraph': `Nos thérapeutes, formés en Chine et en Europe, allient plus de 40 ans d'expérience clinique et une écoute attentive. Chaque séance est un dialogue, où la tradition rencontre vos besoins personnels. Nous adaptons les méthodes ancestrales de la MTC à votre mode de vie genevois, pour un soin efficace et respectueux.`
            },
            'section2': {
                'title': 'Dr Liqiang Deng',
                'subtitle': `Expertise et Excellence en Médecine Traditionnelle Chinoise`,
                'bloc1-paragraph': `Le Dr Liqiang Deng est un praticien émérite en Médecine Traditionnelle Chinoise (MTC), diplômé de la prestigieuse Université de Médecine Traditionnelle Chinoise du Tianjin (Chine). Avec plus de 40 années de pratique clinique, il a acquis une expérience approfondie tant en Chine que sur la scène internationale, notamment en Suisse, où il exerce et continue de transmettre son savoir. Au cours de sa carrière, le Dr Deng a travaillé dans des hôpitaux et centres spécialisés en MTC, développant une maîtrise reconnue des principales disciplines : acupuncture, phytothérapie, massages thérapeutiques (Tui Na) et rééquilibrage énergétique.`,
                'bloc2-paragraph': `Sa formation rigoureuse et sa longue pratique lui permettent d'allier savoir traditionnel et approches contemporaines, offrant des soins personnalisés, précis et efficaces. Le Dr Deng met un point d'honneur à adopter une approche globale, qui vise non seulement à traiter les déséquilibres physiques mais aussi à améliorer le bien-être émotionnel et à prévenir les maladies. Sa philosophie de soin repose sur la recherche de l'harmonie et de l'équilibre, principes fondamentaux de la médecine traditionnelle chinoise.`
            },
            'section3': {
                'title': 'Yongyan Sui',
                'subtitle': `Médecine Traditionnelle Chinoise & Nutrition`,
                'bloc1-paragraph': `Yongyan Sui est praticienne formée en gestion de santé en Médecine Traditionnelle Chinoise au sein de la clinique Qingning de Shenyang (Chine). Membre du Comité professionnel d'endocrinologie de la Fédération Mondiale de Médecine Chinoise, elle associe l'expertise de la médecine traditionnelle chinoise à une approche scientifique de la nutrition. Diplômée en nutrition par l'École Suisse de Santé et de Réhabilitation (ESSR), Yongyan Sui développe une pratique unique qui relie médecine chinoise et nutrition thérapeutique, permettant d'optimiser la santé globale et de renforcer l'équilibre du corps et de l'esprit.`,
                'bloc2-paragraph': `Elle est spécialisée dans la prise en charge des maladies liées aux émotions (stress, anxiété, déséquilibres hormonaux), ainsi que dans le soutien du système digestif. Ses soins personnalisés visent à rétablir l'harmonie entre l'alimentation, les émotions et l'énergie vitale, pour améliorer la santé globale et la qualité de vie.`
            }
        },

        /** ===== PAGES DE SOINS ===== */
        'health': {
          'title': `Nos Soins`,
          'subtitle': `Une approche globale`,
            'section1': {
                'title': 'La Médecine Traditionnelle Chinoise : 3000 ans de sagesse au service de votre équilibre',
                'paragraph': `La médecine traditionnelle chinoise (MTC), pratiquée depuis plus de 3000 ans, repose sur une vision globale du corps et de la santé. Reconnue par l'Organisation mondiale de la santé (OMS), elle considère chaque individu dans sa globalité — physique, émotionnelle et énergétique — pour restaurer l'harmonie naturelle du corps.`,
            },
            'section2': {
                'title': `Une approche fondée sur la capacité d'autoguérison du corps`,
                'paragraph': `Au cœur de la médecine chinoise se trouve la puissante force d'autoguérison présente en chacun de nous. Les différentes méthodes de soins — acupuncture, massage Tui Na, moxibustion et phytothérapie chinoise — agissent sur des points énergétiques précis afin de stimuler la circulation du Qi (énergie vitale) et de rétablir l'équilibre intérieur.`
            },
            'section3': {
                'title': `Harmoniser le Yin et le Yang pour une santé durable`,
                'paragraph': `L'objectif essentiel de la médecine chinoise est de réharmoniser le Yin et le Yang, ces deux forces complémentaires qui gouvernent notre énergie vitale. Quand elles sont en équilibre, le corps fonctionne harmonieusement, l'énergie circule librement et la santé s'épanouit naturellement.`
            },
            'section4': {
                'title': `Une pratique millénaire adaptée à la vie moderne`,
                'paragraph': `Chez Qingning Santé Genève, nous unissons la sagesse ancestrale de la médecine chinoise et l'approche moderne du bien-être occidental. Nos soins sont conçus pour s'intégrer à votre quotidien, en offrant des thérapies naturelles, douces et efficaces, respectueuses du rythme de votre corps.`
            },
            'section5': {
                'title': `Bien plus qu'une médecine : un art de vivre`,
                'paragraph': `La médecine traditionnelle chinoise est avant tout un art de relier le corps, l'esprit et les saisons. Nos thérapeutes spécialisés combinent diagnostic énergétique précis, prévention et soins individualisés, afin que chaque séance devienne un moment profond de rééquilibrage et de reconnexion à soi.`
            }
        },

        /** ===== PAGE D'ACUPUNCTURE ===== */
        'acupuncture': {
          'title': `Acupuncture`,
          'subtitle': `Équilibrez votre énergie vitale`,
            'section1': {
                'title': `Qu'est-ce que l'acupuncture ?`,
                'paragraph': `L'acupuncture est une pierre angulaire de la Médecine Traditionnelle Chinoise. Cette technique millénaire consiste à stimuler des points précis du corps à l'aide de fines aiguilles stériles à usage unique, presque imperceptibles. En favorisant la circulation du Qi (énergie vitale) et du sang, l'acupuncture aide à rétablir l'équilibre interne, apaiser la douleur et harmoniser les fonctions des organes.`,
            },
            "section2": {
                "title": "Les bienfaits de l'acupuncture :",
                "benefit1": "Soulagement des douleurs chroniques (dos, articulations, migraines)",
                "benefit2": "Réduction du stress et de l'anxiété",
                "benefit3": "Amélioration de la qualité du sommeil", 
                "benefit4": "Régulation des troubles digestifs",
                "benefit5": "Renforcement du système immunitaire",
                "benefit6": "Soutien dans les troubles hormonaux"
  },
            'section3': {
                'title': `Notre approche en acupuncture`,
                'paragraph': `Chaque séance d'acupuncture chez Qingning Santé commence par un bilan énergétique complet selon les principes de la MTC. Nous déterminons les déséquilibres spécifiques et adaptons le traitement d'acupuncture à votre condition unique.`
            },
            'section4': {
                'title': `Comment ça marche ?`,
                'paragraph': `Contrairement aux idées reçues, l'acupuncture est généralement très bien tolérée. Les aiguilles utilisées sont extrêmement fines - jusqu'à 10 fois plus fines qu'une aiguille standard - rendant la sensation souvent imperceptible. La plupart de nos patients décrivent une sensation de détente profonde pendant et après la séance d'acupuncture.`
            }
        },

        /** ===== PAGE D'ACUPUNCTURE LIFT ===== */
        'acupunctureLift': {
          'title': `Acupuncture LIFT`,
          'subtitle': `Beauté naturelle et équilibre intérieur`,
            'section1': {
                'title': `Qu'est-ce que l'acupuncture LIFT ?`,
                'paragraph': `L'acupuncture LIFT, aussi appelée lifting par acupuncture, s'inspire des principes de la Médecine Traditionnelle Chinoise pour stimuler les muscles et le tissu conjonctif du visage. En agissant sur les méridiens énergétiques, elle améliore la circulation du Qi et du sang, favorise la production naturelle de collagène et redonne vitalité à la peau. C'est une méthode douce, non invasive et profondément relaxante, qui traite à la fois la beauté extérieure et l'équilibre intérieur.`,
            },
            "section2": {
                "title": "Les bienfaits de l'acupuncture LIFT :",
                "benefit1": "Lisse les rides et ridules naturellement",
                "benefit2": "Redonne éclat, fermeté et élasticité à la peau",
                "benefit3": "Détend les traits du visage en réduisant le stress", 
                "benefit4": "Stimule la circulation et le renouvellement cellulaire",
                "benefit5": "Améliore le sommeil et le bien-être général"
  },
            'section3': {
                'title': `Notre approche à Qingning Santé`,
                'paragraph': `Chaque séance commence par un diagnostic énergétique personnalisé, permettant de comprendre les déséquilibres internes susceptibles d'affecter la peau et le vieillissement.
Le protocole d'acupuncture LIFT est ensuite adapté à vos besoins — qu'il s'agisse de revitaliser, tonifier ou apaiser. Des conseils complémentaires en nutrition, soins de la peau et hygiène de vie peuvent être proposés pour prolonger les effets du traitement.`
            },
            'section4': {
                'title': `Comment ça marche ?`,
                'paragraph': `L'acupuncture LIFT ne se limite pas à une action esthétique : elle agit aussi sur la santé globale. Les fines aiguilles utilisées sont insérées délicatement, provoquant une stimulation subtile qui réveille les fonctions naturelles de la peau sans douleur ni inflammation. Les résultats apparaissent progressivement, offrant un effet rajeunissant naturel et durable.`
            }
        },

        /** ===== PAGE DE MOXIBUSTION ===== */
        'moxibustion': {
          'title': `Moxibustion`,
          'subtitle': `La chaleur thérapeutique qui régénère`,
            'section1': {
                'title': `La moxibustion, qu'est-ce que c'est ?`,
                'paragraph': `La moxibustion est une technique ancestrale de la Médecine Traditionnelle Chinoise utilisant la chaleur douce et pénétrante d'un bâton d'armoise (moxa) appliqué près des points d'acupuncture. Cette chaleur thérapeutique pénètre en profondeur, réchauffe les méridiens et revitalise l'énergie vitale.`,
            },
            "section2": {
                "title": "Indications principales de la moxibustion :",
                "benefit1": `Douleurs articulaires et musculaires d'origine "froide"`,
                "benefit2": "Renforcement du système immunitaire",
                "benefit3": "Fatigue chronique et manque d'énergie", 
                "benefit4": "Troubles circulatoires",
                "benefit5": "Préparation saisonnière (particulièrement en automne/hiver)",
                "benefit6": "Soutien dans les conditions de faiblesse générale"
  },
            'section3': {
                'title': `Notre expertise en moxibustion :`,
                'paragraph': `Chez Qingning Santé, nous maîtrisons les différentes techniques de moxibustion - directe, indirecte, avec aiguilles - et sélectionnons la plus adaptée à votre condition énergétique.`
            },
            'section4': {
                'title': `Quand
          l'utilisons-nous ?`,
                'paragraph': `La moxibustion est particulièrement indiquée pour les déséquilibres de type "froid" ou "vide" en MTC. La chaleur de l'armoise (artemisia vulgaris) tonifie le Yang et fait circuler le Qi et le sang dans les méridiens, réchauffant l'organisme en profondeur.`
            }
        },

        /** ===== PAGE DE VENTOUSES ===== */
        'ventouses': {
          'title': `Ventouses`,
          'subtitle': `Libérez les tensions, revitalisez votre corps`,
            'section1': {
                'title': `La technique des ventouses`,
                'paragraph': `Les ventouses thérapeutiques utilisent des récipients en verre ou en silicone créant un effet de succion sur la peau. Cette méthode, pratiquée depuis l'antiquité en Médecine Traditionnelle Chinoise, favorise la circulation sanguine et lymphatique, libère les tensions musculaires profondes et aide à éliminer les stagnations d'énergie.`,
            },
            "section2": {
                "title": "Applications des ventouses :",
                "benefit1": `Douleurs musculaires et tensions dorsales`,
                "benefit2": "Fatigue et sensation de lourdeur",
                "benefit3": "Rhumes et états grippaux débutants", 
                "benefit4": "Cellulite et problèmes de circulation sanguine",
                "benefit5": "Détente profonde et bien-être général"
  },
            'section3': {
                'title': `Notre approche à Qingning Santé`,
                'paragraph': `Chaque séance commence par un diagnostic énergétique personnalisé, permettant de comprendre les déséquilibres internes susceptibles d'affecter la peau et le vieillissement. Le protocole d'acupuncture LIFT est ensuite adapté à vos besoins — qu'il s'agisse de revitaliser, tonifier ou apaiser. Des conseils complémentaires en nutrition, soins de la peau et hygiène de vie peuvent être proposés pour prolonger les effets du traitement.`
            },
            'section4': {
                'title': `Comment ça marche ?`,
                'paragraph': `L'acupuncture LIFT ne se limite pas à une action esthétique : elle agit aussi sur la santé globale. Les fines aiguilles utilisées sont insérées délicatement, provoquant une stimulation subtile qui réveille les fonctions naturelles de la peau sans douleur ni inflammation. Les résultats apparaissent progressivement, offrant un effet rajeunissant naturel et durable.`
            }
        },

        /** ===== PAGE DE MASSAGE TUI NA ===== */
        'tuina': {
          'title': `Massage Tui Na`,
          'subtitle': `La thérapie manuelle énergétique`,
            'section1': {
                'title': `Le Tui Na, massage thérapeutique chinois :`,
                'paragraph': `Le Tui Na est bien plus qu'un simple massage - c'est une véritable thérapie manuelle de la Médecine Traditionnelle Chinoise. Cette technique combine pressions, pétrissages, étirements et mobilisations articulaires pour stimuler la circulation du Qi, détendre les muscles et rééquilibrer les organes internes.`,
            },
            "section2": {
                "title": "Bienfaits du massage Tui Na :",
                "benefit1": `Soulagement des douleurs articulaires et musculaires`,
                "benefit2": "Réduction du stress et des tensions nerveuses",
                "benefit3": "Amélioration des troubles digestifs", 
                "benefit4": "Augmentation de la vitalité et réduction de la fatigue",
                "benefit5": "Meilleure mobilité articulaire",
                "benefit6": "Équilibrage énergétique global"
  },
            'section3': {
                'title': `Notre pratique du Tui Na :`,
                'paragraph': `Nos thérapeutes certifiés adaptent chaque séance de massage Tui Na à votre constitution et déséquilibres énergétiques spécifiques.`
            },
            'section4': {
                'title': `Le massage Tui Na, qu'est ce que c'est ?`,
                'paragraph': `"Tui Na" signifie littéralement "pousser" et "saisir" - ces deux actions fondamentales représentent l'essence de cette technique qui travaille autant sur la structure musculo-squelettique que sur la circulation énergétique.`
            }
        },

        /** ===== PAGE DE PHYTOTHERAPIE CHINOISE ===== */
        'phytotherapie': {
          'title': `Phytothérapie chinoise`,
          'subtitle': `La sagesse des plantes au service de votre santé`,
            'section1': {
                'title': `La phytothérapie en MTC :`,
                'paragraph': `La phytothérapie chinoise utilise des plantes médicinales soigneusement sélectionnées et combinées en formules synergiques. Chaque préparation est personnalisée pour répondre aux besoins énergétiques spécifiques du patient, en travaillant sur la racine du déséquilibre plutôt que sur les seuls symptômes.`,
            },
            "section2": {
                "title": "Domaines d'application :",
                "benefit1": `Troubles chroniques et conditions de faiblesse`,
                "benefit2": "Fatigue persistante et baisse d'énergie",
                "benefit3": "Déséquilibres hormonaux et cycles menstruels", 
                "benefit4": "Soutien immunitaire et prévention",
                "benefit5": "Troubles digestifs fonctionnels",
                "benefit6": "Gestion du stress et équilibre émotionnel"
  },
            'section3': {
                'title': `Notre approche en phytothérapie :`,
                'paragraph': `Nous proposons des formules de phytothérapie chinoise sous différentes formes - décoctions, poudres, granules - toujours de la plus haute qualité et issues de sources contrôlées.`
            },
            'section4': {
                'title': `Quels sont les points forts de la phytothérapie chinoise ?`,
                'paragraph': `Les formules de phytothérapie chinoise sont conçues selon une logique complexe où chaque plante a un rôle spécifique - certaines ciblent le symptôme principal, d'autres renforcent l'organisme, d'autres encore équilibrent les effets des premières. Cette approche systémique explique l'efficacité et la sécurité de la phytothérapie chinoise traditionnelle.`
            }
        },

        /** ===== PAGE DE NUTRITION MTC ===== */
        'nutrition': {
          'title': `Nutrition selon la médecine traditionnelle chinoise`,
          'subtitle': `L'alimentation comme médecine préventive`,
            'section1': {
                'title': `La diététique en Médecine Chinoise :`,
                'paragraph': `En MTC, l'alimentation est considérée comme le premier remède. Nos recommandations nutritionnelles tiennent compte des saisons, de votre constitution individuelle et de votre état énergétique actuel. Le but : renforcer les organes, soutenir la digestion et prévenir les déséquilibres avant qu'ils n'apparaissent.`,
            },
            "section2": {
                "title": "Applications de la nutrition en MTC :",
                "benefit1": `Prévention santé et renforcement de l'immunité`,
                "benefit2": "Troubles digestifs fonctionnels",
                "benefit3": "Fatigue et manque d'énergie vital", 
                "benefit4": "Prise ou perte de poids harmonieuse",
                "benefit5": "Adaptation aux changements saisonniers",
                "benefit6": "Soutien dans les conditions chroniques"
  },
            'section3': {
                'title': `Notre accompagnement en nutrition :`,
                'subtitle': `Nous proposons des consultations spécifiques en diététique chinoise incluant :`,
                "benefit1": `Bilan de votre constitution énergétique`,
                "benefit2": "Analyse de vos habitudes alimentaires",
                "benefit3": "Recommandations personnalisées selon les saisons", 
                "benefit4": "Conseils pratiques pour une transition en douceur"
            },
            'section4': {
                'title': `Comment fonctionne la nutrition selon la médecine traditionnelle chinoise ?`,
                'paragraph': `Selon la Médecine Chinoise, chaque aliment possède une nature (froide, fraîche, neutre, tiède, chaude) et une saveur (acide, amer, doux, piquant, salé) qui influencent spécifiquement l'énergie des organes. Une alimentation adaptée à votre constitution et à la saison est un pilier fondamental de la santé durable.`
            }
        },

        /** ===== PAGE DE VITALITÉ ===== */
        'vitality': {
            'section1': {
                'title': `Santé, vitalité et pathologie`,
                'subtitle': `Maladies fréquemment traitées en médecine chinoise`,
                'paragraph': `La médecine traditionnelle chinoise (MTC) - acupuncture, phytothérapie, diététique, massage Tui Na, Qi Gong - offre une approche globale et naturelle pour soulager un large éventail de troubles, qu'ils soient aigus, chroniques ou fonctionnels. Au cabinet Qingning Santé, situé dans le quartier de l'Étang à Genève, chaque soin est personnalisé selon un bilan énergétique précis afin de rétablir l'équilibre du corps et de l'esprit.`,
            },
            "section2": {
                /* CARDS VISIBLES SANS FLIPS */
                "surpoids": {
                    "title": `Surpoids & Équilibre Métabolique`,
                    "paragraph": `Rétablir l'équilibre métabolique par une approche holistique...`
                },
                "stress": {
                    "title": `Stress & Épuisement Professionnel`,
                    "paragraph": `Retrouver l'équilibre nerveux et une vitalité durable...`
                },
                "douleurs": {
                    "title": `Douleurs Articulaires & Musculaires`,
                    "paragraph": `Soulagement profond et durable des douleurs...`
                },
                "feminine": {
                    "title": `Santé Féminine & Fertilité`,
                    "paragraph": `Accompagnement à chaque étape de la vie féminine...`
                },
                "digestif": {
                    "title": `Troubles Digestifs & Intestinaux`,
                    "paragraph": `Retrouver un confort digestif durable...`
                },
                "allergies": {
                    "title": `Allergies & Problèmes Respiratoires`,
                    "paragraph": `Renforcer votre terrain pour respirer librement...`
                },
                "peau": {
                    "title": `Problèmes de Peau`,
                    "paragraph": `Traiter les causes internes des affections cutanées récurrentes...`
                },
                "oncologique": {
                    "title": `Soutien Oncologique`,
                    "paragraph": `Accompagnement bienveillant pendant les traitements...`
                },
                "masculine": {
                    "title": `Santé Masculine & Vitalité`,
                    "paragraph": `Approche holistique pour la vitalité masculine...`
                },
                "plus": "En savoir plus →"
            },
            /* CARDS VISIBLES QUAND ON LES FLIPS */
            "articles": {
                "surpoids": {
                    "title": `Surpoids & Équilibre Métabolique`,
                    "philosophy": {
                        "title": `Notre philosophie :`,
                        "paragraph": `Nous comprenons que la perte de poids est un défi profondément personnel, souvent lié au rythme de vie moderne, au stress et à un métabolisme fragilisé. Notre approche va au-delà des régimes : nous travaillons à rééquilibrer votre corps dans son ensemble pour des résultats qui durent.`
                    },
                    "western": {
                        "title": `Vision médecine occidentale :`,
                        "paragraph": `Le surpoids résulte d'un déséquilibre entre les apports caloriques et la dépente énergétique, influencé par le métabolisme basal, l'activité physique, et divers facteurs hormonaux et génétiques.`
                    },
                    "chinese": {
                        "title": `Vision Médecine Traditionnelle Chinoise :`,
                        "paragraph": `Le surpoids est souvent lié à un déséquilibre de la Rate qui ne transforme pas correctement les liquides, créant de l'humidité et des glaires. Le Foie, quand à lui, peut voir son Qi stagner, especially sous l'effet du stress, perturbant ainsi la digestion et le métabolisme des graisses.`
                    },
                    "qingning": {
                        "title": `Notre approche Qingning Santé :`,
                        "solution1": `Bilan énergétique personnalisé pour identifier votre constitution et vos déséquilibres`,
                        "solution2": `Acupuncture spécifique pour réguler l'appétit, booster le métabolisme et apaiser les fringales émotionnelles`,
                        "solution3": `Phytothérapie sur mesure pour drainer l'humidité et soutenir les fonctions digestives`,
                        "solution4": `Conseils en diététique énergétique adaptés à votre mode de vie`
                    }
                },
                "stress": {
                    "title": `Stress & Épuisement Professionnel`,
                    "philosophy": {
                        "title": `Notre philosophie :`,
                        "paragraph": `Dans un monde où les sollicitations et les exigences sont constantes, l'épuisement guette. Nous offrons un sanctuaire et des solutions concrètes pour retrouver un équilibre nerveux profond et une vitalité durable, loin de solutions simplement symptomatiques.`
                    },
                    "western": {
                        "title": `Vision médecine occidentale :`,
                        "paragraph": `Le burn-out est un syndrome d'épuisement professionnel caractérisé par une fatigue intense, une diminution de l'efficacité au travail, et souvent du cynisme. Il résulte d'un stress chronique non géré.`
                    },
                    "chinese": {
                        "title": `Vision Médecine Traditionnelle Chinoise :`,
                        "paragraph": `Le stress épuise le Qi, affecte l'Esprit (Shen) logé dans le Cœur, et peut bloquer la libre circulation du Qi du Foie, menant à de l'irritabilité. L'épuisement profond touche l'énergie vitale des Reins.`
                    },
                    "qingning": {
                        "title": `Notre approche Qingning Santé :`,
                        "solution1": `Protocole acupuncture anti-stress avec des points pour calmer l'esprit et recharger l'énergie`,
                        "solution2": `Plantes adaptogènes pour augmenter la résistance au stress et améliorer la qualité du sommeil`,
                        "solution3": `Massage Tui Na relaxant pour libérer les tensions physiques accumulées`,
                        "solution4": `Conseils en gestion du stress et en hygiène de vie`
                    }
                },
                "douleurs": {
                    "title": `Douleurs Articulaires & Musculaires`,
                    "philosophy": {
                        "title": `Notre philosophie :`,
                        "paragraph": `Que votre douleur soit liée à une position statique, au stress ou à une pratique sportive, nous en recherchons l'origine énergétique pour un soulagement profond et durable, en complément des approches conventionnelles.`
                    },
                    "western": {
                        "title": `Vision médecine occidentale :`,
                        "paragraph": `Les douleurs musculo-squelettiques peuvent avoir diverses origines : inflammatoires (arthrite), mécaniques (arthrose), ou liées à des lésions des tissus mous (tendinites).`
                    },
                    "chinese": {
                        "title": `Vision Médecine Traditionnelle Chinoise :`,
                        "paragraph": `La douleur est une stagnation de Qi et de Sang dans les méridiens. Elle peut être causée par des facteurs externes (Vent, Froid, Humidité) ou internes (faiblesse de l'énergie des Reins ou du Foie).`
                    },
                    "qingning": {
                        "title": `Notre approche Qingning Santé :`,
                        "solution1": `Acupuncture analgésique ciblée pour débloquer les méridiens et soulager la douleur`,
                        "solution2": `Ventouses pour décongestionner les zones douloureuses et améliorer la circulation`,
                        "solution3": `Moxibustion pour chasser le Froid et l'Humidité des articulations`,
                        "solution4": `Plan de traitement personnalisé incluant des exercices d'entretien`
                    }
                },
                "feminine": {
                    "title": `Santé Féminine & Fertilité`,
                    "philosophy": {
                        "title": `Notre philosophie :`,
                        "paragraph": `Nous accompagnons la femme à chaque étape de sa vie, de la puberté à la ménopause, avec une approche douce et respectueuse de son cyclicité naturelle. Notre expertise en fertilité en fait un complément précieux aux parcours de PMA.`
                    },
                    "western": {
                        "title": `Vision médecine occidentale :`,
                        "paragraph": `De nombreux troubles gynécologiques (SPM, endométriose, troubles du cycle) sont liés à des déséquilibres hormonaux. La fertilité peut être impactée par de multiples facteurs (ovariens, tubaires, hormonaux...).`
                    },
                    "chinese": {
                        "title": `Vision Médecine Traditionnelle Chinoise :`,
                        "paragraph": `La santé féminine repose sur l'équilibre du Qi et du Sang, et la libre circulation de l'énergie dans le méridien du Foie. Les Reins, qui stockent l'essence vitale, sont fondamentaux pour la fertilité et un cycle harmonieux.`
                    },
                    "qingning": {
                        "title": `Notre approche Qingning Santé :`,
                        "solution1": `Acupuncture cyclique pour réguler les hormones naturellement et apaiser les douleurs`,
                        "solution2": `Phytothérapie hormonale pour nourrir le Sang et équilibrer le terrain`,
                        "solution3": `Soutien à la fertilité et accompagnement en PMA pour optimiser les chances de conception`,
                        "solution4": `Suivi spécifique pour la ménopause, la préparation à l'accouchement et le post-partum`
                    }
                },
                "digestif": {
                    "title": `Troubles Digestifs & Intestinaux`,
                    "philosophy": {
                        "title": `Notre philosophie :`,
                        "paragraph": `Ballonnements, reflux, intestin irritable... Ces maux modernes signalent souvent un système digestif en souffrance. Nous aidons à retrouver un confort durable en agissant sur les causes profondes, bien au-delà des symptômes.`
                    },
                    "western": {
                        "title": `Vision médecine occidentale :`,
                        "paragraph": `Les troubles fonctionnels digestifs (comme le syndrome de l'intestin irritable) sont souvent liés à une hypersensibilité viscérale et à des perturbations du microbiote intestinal.`
                    },
                    "chinese": {
                        "title": `Vision Médecine Traditionnelle Chinoise :`,
                        "paragraph": `Une digestion harmonieuse dépend de la capacité de la Rate à transformer les aliments et de l'Estomac à faire descendre l'énergie. Le stress (stagnation du Qi du Foie) peut directement "attaquer" la Rate et l'Estomac, perturbant la digestion.`
                    },
                    "qingning": {
                        "title": `Notre approche Qingning Santé :`,
                        "solution1": `Acupuncture régulatrice pour harmoniser l'Estomac, renforcer la Rate et calmer les spasmes`,
                        "solution2": `Probiotiques naturels et phytothérapie pour restaurer l'équilibre de la flore intestinale et apaiser l'inflammation`,
                        "solution3": `Conseils alimentaires individualisés basés sur la diététique chinoise`,
                        "solution4": `Gestion du stress pour agir sur un facteur déclenchant majeur`
                    }
                },
                "allergies": {
                    "title": `Allergies & Problèmes Respiratoires`,
                    "philosophy": {
                        "title": `Notre philosophie :`,
                        "paragraph": `Nous ne traitons pas seulement la crise allergique ou l'infection ; nous renforçons votre terrain pour que vous soyez globalement moins sensible aux agressions et que vous puissiez respirer librement, quelle que soit la saison.`
                    },
                    "western": {
                        "title": `Vision médecine occidentale :`,
                        "paragraph": `Les allergies sont une réaction excessive du système immunitaire à des substances normalement inoffensives (pollens, acariens...). L'asthme est une inflammation chronique des bronches.`
                    },
                    "chinese": {
                        "title": `Vision Médecine Traditionnelle Chinoise :`,
                        "paragraph": `Les Poumons gèrent la respiration et diffusent l'énergie défensive (Wei Qi) à la surface du corps. Si le Wei Qi est faible, les "facteurs pathogènes" (comme le Vent) pénètrent plus facilement, causant éternuements, écoulement nasal...`
                    },
                    "qingning": {
                        "title": `Notre approche Qingning Santé :`,
                        "solution1": `Acupuncture préventive pour renforcer le Wei Qi avant la saison des allergies`,
                        "solution2": `Traitement aigu pour dégager le nez et les sinus, calmer la toux`,
                        "solution3": `Plantes pour fortifier les Poumons et assécher l'humidité`,
                        "solution4": `Conseils pour renforcer l'immunité et identifier les facteurs aggravants`
                    }
                },
                "peau": {
                    "title": `Problèmes de Peau`,
                    "philosophy": {
                        "title": `Notre philosophie :`,
                        "paragraph": `L'état de votre peau est le reflet de votre équilibre interne. Notre approche est particulièrement indiquée pour les problèmes de peau récurrents ou résistants, en travaillant sur les causes profondes, de l'intérieur.`
                    },
                    "western": {
                        "title": `Vision médecine occidentale :`,
                        "paragraph": `L'eczéma, le psoriasis ou l'acné sont des affections inflammatoires de la peau, souvent influencées par la génétique, le système immunitaire, les hormones ou l'environnement.`
                    },
                    "chinese": {
                        "title": `Vision Médecine Traditionnelle Chinoise :`,
                        "paragraph": `La peau est liée au Poumon et au Gros Intestin. L'eczéma avec suintement évoque de l'Humidité-Chaleur. Le psoriasis, des squames sèches, peut indiquer une sécheresse du Sang. L'acné est souvent liée à de la Chaleur dans le Poumon et l'Estomac.`
                    },
                    "qingning": {
                        "title": `Notre approche Qingning Santé :`,
                        "solution1": `Acupuncture purifiante pour éliminer la Chaleur et refroidir le Sang`,
                        "solution2": `Décoctions de plantes pour drainer l'Humidité, detoxifier et nourrir la peau`,
                        "solution3": `Réglage alimentaire pour éviter les aliments générateurs de Chaleur ou d'Humidité`,
                        "solution4": `Approche globale incluant la gestion du stress, facteur aggravant majeur`
                    }
                },
                "oncologique": {
                    "title": `Soutien Oncologique`,
                    "philosophy": {
                        "title": `Notre philosophie :`,
                        "paragraph": `Nous proposons un accompagnement bienveillant et personnalisé pour mieux traverser l'épreuve de la maladie et des traitements. Notre objectif est d'améliorer votre qualité de vie et de soutenir votre vitalité, en parfaite complémentarité avec votre suivi médical.`
                    },
                    "western": {
                        "title": `Vision médecine occidentale :`,
                        "paragraph": `Les traitements comme la chimiothérapie et la radiothérapie, bien que nécessaires, endommagent aussi les cellules saines, entraînant fatigue, nausées, baisse d'immunité...`
                    },
                    "chinese": {
                        "title": `Vision Médecine Traditionnelle Chinoise :`,
                        "paragraph": `La maladie et ses traitements épuisent profondément le Qi et le Sang, et blessent l'énergie vitale des Reins. Ils peuvent aussi générer ce que la MTC appelle des "toxines".`
                    },
                    "qingning": {
                        "title": `Notre approche Qingning Santé :`,
                        "solution1": `Acupuncture douce pour réduire les nausées, la fatigue et certaines douleurs`,
                        "solution2": `Phytothérapie tonifiante et sécuritaire pour soutenir la production de globules sanguins et renforcer l'immunité`,
                        "solution3": `Soutien émotionnel pour aider à traverser cette période difficile`,
                        "solution4": `Collaboration étroite avec votre oncologue pour une approche parfaitement intégrative`
                    }
                },
                "masculine": {
                    "title": `Santé Masculine & Vitalité`,
                    "philosophy": {
                        "title": `Notre philosophie :`,
                        "paragraph": `Nous abordons avec discrétion et une réelle expertise les questions de vitalité, de performance et de fertilité. Notre approche holistique considère l'homme dans sa globalité, pour des résultats qui restaurent confiance et bien-être.`
                    },
                    "western": {
                        "title": `Vision médecine occidentale :`,
                        "paragraph": `Les troubles de l'érection ou la baisse de libido peuvent être liés à des facteurs vasculaires, hormonaux (baisse de testostérone), neurologiques ou psychologiques (stress, anxiété).`
                    },
                    "chinese": {
                        "title": `Vision Médecine Traditionnelle Chinoise :`,
                        "paragraph": `La vitalité masculine est gouvernée par l'énergie des Reins, qui est la source du Jing (l'essence vitale). Une stagnation du Qi du Foie, souvent due au stress, peut également perturber la fonction érectile.`
                    },
                    "qingning": {
                        "title": `Notre approche Qingning Santé :`,
                        "solution1": `Acupuncture tonifiante pour renforcer l'énergie des Reins et améliorer la circulation`,
                        "solution2": `Plantes aphrodisiaques et toniques pour augmenter la vitalité et améliorer la qualité spermatique`,
                        "solution3": `Gestion du stress et de la fatigue, facteurs clés sous-estimés`,
                        "solution4": `Conseils en hygiène de vie pour une santé masculine optimale à long terme`
                    }
                }               
            }
        },

        /** ===== PAGE DE TARIFS ===== */
        'tarifs': {
            'section1': {
                'title': 'Investissez dans votre bien-être',
                'paragraph': 'Votre santé est le plus beau des voyages. Nous vous accompagnons à chaque étape.',
                'badge': 'Remboursé par la plupart des assurances'
            },
            'section2': {
                'title': 'Remboursé par la plupart des assurances',
                'paragraph': 'La médecine traditionnelle chinoise est remboursée par la plupart des assurances complémentaires. Pensez à vérifier les conditions auprès de votre assureur avant votre première consultation.'
            },
            'section3': {
                'seance1': {
                    'icone': 'Recommandé',
                    'title': 'Première séance - Diagnostic initial',
                    'prix': 'CHF 170.-',
                    'duree': 'Durée : 60-75 minutes',
                    'etape1': 'Bilan énergétique complet selon les principes de la MTC',
                    'etape2': 'Dialogue approfondi pour établir votre histoire de santé',
                    'etape3': 'Plan de traitement personnalisé adapté à vos besoins',
                    'etape4': 'Explications détaillées sur votre équilibre énergétique',
                    'booker': 'Réserver ma première séance'
                },
                'seance2': {
                    'icone': 'Soin complet',
                    'title': 'Séances suivantes - Traitement',
                    'prix': 'CHF 150.-',
                    'duree': 'Durée : 45-60 minutes',
                    'etape1': 'Combinaison de techniques selon votre état énergétique',
                    'etape2': 'Acupuncture, Tui Na, ventouses ou moxibustion',
                    'etape3': 'Conseils personnalisés en nutrition et hygiène de vie',
                    'etape4': 'Approche adaptée à vos objectifs de santé',
                    'booker': 'Continuer mon traitement'
                }
            },
            'section4': {
                'title': `Votre parcours vers l'équilibre`,
                'paragraph': 'Un accompagnement structuré pour des résultats durables',
                'diagnosticTitle': 'Diagnostic',
                'diagnosticParagraph': 'Bilan énergétique complet et compréhension de vos besoins',
                'traitementTitle': 'Traitement',
                'traitementParagraph': 'Cure de 10 à 20 séances pour un rééquilibrage profond',
                'maintienTitle': 'Maintien',
                'maintienParagraph': `Séances d'entretien pour préserver votre équilibre`,
            },
            'section5': {
                'title': 'Prêt à retrouver votre équilibre naturel ?',
                'paragraph': 'Rejoignez les nombreux patients qui ont déjà transformé leur santé avec notre approche holistique.',
                'appeler': 'Nous appeler',
                'ecrire': 'Nous écrire'
            }
        },

        /** ===== PAGE DE BLOG ===== */
        'blog': {
            'section1': {
                'title': 'Le Blog de Qingning Santé',
                'paragraph': 'Découvrez les secrets de la médecine chinoise pour une santé rayonnante',
                'lireArtComplet': `Lire l'article complet`,
            },
            'section2': {
                'title': 'Nos derniers articles',
                'paragraph': 'Des conseils pratiques pour votre bien-être au quotidien',
                'winter': {
                    'title': `Renforcer votre énergie en hiver`,
                    'time': `5 minutes`,
                    'paragraph': `Imaginez votre corps comme un lac gelé en hiver : la surface semble immobile, mais en profondeur, la vie continue doucement...`,
                    'bold1': `Alimentation réchauffante`,
                    'text1': ` - Soupes mijotées et racines`,
                    'bold2': `Repos qualité`,
                    'text2': ` - Chaque minute de sommeil avant minuit compte`
                },
                'qi': {
                    'title': `Le Qi : l'énergie vitale qui circule en vous`,
                    'time': `4 minutes`,
                    'paragraph': `Le Qi est invisible, mais vous le ressentez chaque matin : l'énergie qui vous fait sortir du lit, sourire, respirer...`,
                    'bold1': `Rôle du Qi`,
                    'text1': ` - Nourrit vos organes comme un jardinier`,
                    'bold2': `Déséquilibres`,
                    'text2': ` - Fatigue, tensions, digestion difficile`
                },
                'season': {
                    'title': `Les saisons en Médecine Chinoise`,
                    'time': `6 minutes`,
                    'paragraph': `L'homme est un reflet de la nature. Les saisons ne sont pas que des repères sur un calendrier...`,
                    'bold1': `Printemps`,
                    'text1': ` - Foie / Bois - Créativité`,
                    'bold2': `Été`,
                    'text2': ` - Cœur / Feu - Passion`
                },
                'stress': {
                    'title': `Stress et émotions`,
                    'time': `5 minutes`,
                    'paragraph': `Saviez-vous que vos émotions ont un organe attitré ? En Médecine Chinoise, colère, joie, soucis, tristesse et peur ne sont pas que des sentiments...`,
                    'bold1': `Colère`,
                    'text1': ` - Foie`,
                    'bold2': `Tristesse`,
                    'text2': ` - Poumons`
                },
                'nutrition': {
                    'title': `Nutrition chinoise`,
                    'time': `4 minutes`,
                    'paragraph': `Votre Rate et votre Estomac sont comme le moteur de votre énergie vitale. Une digestion efficace est la base de toute vitalité...`,
                    'bold1': `Aliments chauds`,
                    'text1': ` - Facilite la digestion`,
                    'bold2': `Heures régulières`,
                    'text2': ` - Respecte votre horloge biologique`
                }
            },
            'modal': {
                'winter': {
                    'title': `Renforcer votre énergie en hiver : 5 conseils de la MTC`,
                    'paragraph': `Imaginez votre corps comme un lac gelé en hiver : la surface semble immobile, mais en profondeur, la vie continue doucement. L'hiver est la saison de conservation, de repos, et de préparation à l'énergie du printemps.`,
                    'advice1': {
                        'title': `Conseil 1 : Adoptez une alimentation réchauffante`,
                        'text': `Pensez à votre estomac comme à un petit feu : pour qu'il brûle correctement, privilégiez les soupes mijotées, les racines et légumineuses. Les crudités glacées ou les aliments froids éteignent ce feu.`
                    },
                    'advice2': {
                        'title': `Conseil 2 : Repos et sommeil de qualité`,
                        'text': `En hiver, la nature se couche tôt et vous devriez faire pareil. Éteignez vos écrans, ralentissez vos gestes, et laissez le corps se régénérer. Chaque minute de sommeil avant minuit est une goutte d'énergie précieuse pour vos Reins.`
                    },
                    'advice3': {
                        'title': `Conseil 3 : Protégez vos Reins et votre bas du dos`,
                        'text': `Votre bas du dos est le coffre-fort de votre énergie. Une écharpe, un gilet chaud ou même une bouillotte peuvent transformer votre quotidien.`
                    },
                    'advice4': {
                        'title': `Conseil 4 : Pratiquez le Qi Gong ou la méditation`,
                        'text': `Quelques mouvements doux ou respirations conscientes sont comme un vent léger qui fait circuler l'eau sous la glace du lac. Laissez l'énergie circuler sans forcer.`
                    },
                    'advice5': {
                        'title': `Conseil 5 : Respiration profonde et gestion du stress`,
                        'text': `Respirez comme si vous aspiriez la chaleur du soleil d'hiver. Inspirez la force, expirez les tensions. Même quelques minutes suffisent à réveiller votre Qi.`
                    },
                    'footer': {
                        'text': `L'hiver est un trésor caché : en prenant soin de votre énergie maintenant, vous préparez un printemps radieux !`,
                        'button': `Découvrir nos séances de Qi Gong d'hiver`
                    }
                },
                'qi': {
                    'title': `Le Qi : l'énergie vitale qui circule en vous`,
                    'paragraph': `Le Qi est invisible, mais vous le ressentez chaque matin : l'énergie qui vous fait sortir du lit, sourire, respirer. C'est le souffle vital qui anime vos organes, votre esprit et vos émotions.`,
                    'role': {
                        'title': `Le rôle du Qi`,
                        'text': `Imaginez un jardinier qui arrose ses plantes tous les jours : le Qi nourrit vos organes, renforce vos défenses naturelles et équilibre vos émotions. Quand il circule librement, vous êtes en pleine forme.`
                    },
                    'desequilibre': {
                        'title': `Les déséquilibres`,
                        'text': `Fatigue, tensions, digestion difficile ou émotions instables... ce sont autant de signaux que votre énergie vitale est en déséquilibre. L'écouter, c'est comme ajuster les voiles d'un bateau avant la tempête.`
                    },
                    'comment': {
                        'title': `Comment faire circuler le Qi`,
                        'text': `Respirez profondément, pratiquez le Qi Gong, laissez les aiguilles de l'acupuncture stimuler vos points vitaux, ou adaptez votre alimentation. Chaque geste simple devient un souffle qui libère et harmonise votre énergie.`
                    },
                    'footer': {
                        'text': `Le Qi n'est pas seulement un concept : c'est la clé pour une santé globale, un corps vivant et un esprit clair.`,
                        'button': `En savoir plus sur les soins énergétiques`
                    }
                },
                'season': {
                    'title': `Les saisons en Médecine Chinoise - Vivre en harmonie avec la nature`,
                    'paragraph': `L'homme est un reflet de la nature. Les saisons ne sont pas que des repères sur un calendrier : elles rythment notre énergie et notre santé. Vivre en harmonie avec elles, c'est danser avec le monde plutôt que lutter contre lui.`,
                    'fiveSeasons': {
                        'title': `Les 5 saisons et leurs correspondances`,
                        'spring': {
                            'bold': `Printemps (Foie / Bois)`,
                            'text': ` : le monde s'éveille, les bourgeons poussent, votre créativité aussi.`
                        },
                        'summer': {
                            'bold': `Été (Cœur / Feu)`,
                            'text': ` : tout s'étend, l'énergie explose dans vos relations et vos passions.`
                        },
                        'indianSummer': {
                            'bold': `Été indien (Rate / Terre)`,
                            'text': ` : transition douce, digestion et équilibre intérieur.`
                        },
                        'automn': {
                            'bold': `Automne (Poumon / Métal)`,
                            'text': ` : le temps des feuilles mortes invite à l'introspection.`
                        },
                        'winter': {
                            'bold': `Hiver (Rein / Eau)`,
                            'text': ` : tout se met en pause, se conserve, se régénère.`
                        }
                    },
                    'principes': {
                        'title': `Principes pour vivre chaque saison`,
                        'text': `Adaptez votre alimentation, votre activité et vos émotions selon le rythme naturel : une promenade printanière, des soirées méditatives en automne, des plats mijotés en hiver... chaque saison a ses codes pour soutenir votre Qi.`
                    },
                    'footer': {
                        'text': `Se laisser guider par les saisons, c'est rester en santé toute l'année et vivre en harmonie avec le monde naturel.`,
                        'button': `Découvrir nos conseils saisonniers`
                    }
                },
                'stress': {
                    'title': `Stress et émotions - L'équilibre du corps et de l'esprit`,
                    'paragraph': `Saviez-vous que vos émotions ont un organe attitré ? En Médecine Chinoise, colère, joie, soucis, tristesse et peur ne sont pas que des sentiments : ce sont des messages de votre corps.`,
                    'emotion': {
                        'title': `Les émotions et leurs organes associés`,
                        'colere': {
                            'bold': `Colère`,
                            'text': ` - Foie`
                        },
                        'joie': {
                            'bold': `Joie`,
                            'text': ` - Coeur`
                        },
                        'soucis': {
                            'bold': `Soucis`,
                            'text': ` - Rate`
                        },
                        'tristesse': {
                            'bold': `Tristesse`,
                            'text': ` - Poumons`
                        },
                        'peur': {
                            'bold': `Peur`,
                            'text': ` - Reins`
                        }
                    },
                    'impact': {
                        'title': `Impact du stress`,
                        'text': `Le stress bloque le Qi, perturbe votre sommeil et votre digestion. C'est comme un bouchon qui empêche l'eau de circuler dans un ruisseau : tout devient stagnant et froid.`
                    },
                    'techniques': {
                        'title': `Techniques pour équilibrer`,
                        'text': `Respirez profondément, pratiquez la méditation, laissez l'acupuncture stimuler votre énergie, utilisez des plantes apaisantes. Chaque geste rétablit la circulation de votre Qi et apaise vos émotions.`
                    },
                    'footer': {
                        'text': `Écouter vos émotions, c'est comprendre votre corps et prévenir la maladie. Chaque souffle conscient est un pas vers l'équilibre intérieur.`,
                        'button': `Réserver une séance de relaxation énergétique`
                    }
                },
                'nutrition': {
                    'title': `Nutrition chinoise - 5 habitudes pour une digestion optimale`,
                    'paragraph': `Votre Rate et votre Estomac sont comme le moteur de votre énergie vitale. Une digestion efficace est la base de toute vitalité : imaginez votre Qi comme une rivière qui prend sa source dans votre ventre.`,
                    'habit1': {
                        'bold': `Habitude 1 : Privilégier le chaud et le cuit`,
                        'text': `Les plats cuits facilitent la digestion et évitent l'humidité interne qui peut ralentir votre Qi. Une soupe fumante en hiver, c'est comme un rayon de soleil pour votre énergie.`
                    },
                    'habit2': {
                        'bold': `Habitude 2 : Manger à heures régulières`,
                        'text': `Respectez votre horloge biologique. Chaque repas pris au bon moment nourrit votre Qi comme on remplit un réservoir d'essence.`
                    },
                    'habit3': {
                        'bold': `Habitude 3 : Mastiquer et manger en pleine conscience`,
                        'text': `Savourer chaque bouchée, respirer avant d'avaler, limiter le stress... c'est un massage doux pour votre énergie interne.`
                    },
                    'habit4': {
                        'bold': `Habitude 4 : Éviter l'excès de sucre et de produits industriels`,
                        'text': `Ces aliments perturbent la Rate et la production de Qi. Préférez les aliments naturels et de saison pour soutenir votre vitalité.`
                    },
                    'habit5': {
                        'bold': `Habitude 5 : Choisir des aliments de saison`,
                        'text': `Une énergie en harmonie avec la nature est une énergie durable. L'hiver invite aux soupes et aux légumes racines, l'été aux fruits juteux et rafraîchissants.`
                    },
                    'footer': {
                        'text': `Une digestion optimale, c'est une rivière de Qi qui circule librement et vous nourrit à chaque instant.`,
                        'button': `Télécharger notre guide de recettes saisonnières`
                    }
                }
            }
        },

        /** ===== PAGE DE FAQ ===== */
        'faq': {
            'section1': {
                'title': `Vos questions, nos réponses`,
                'paragraph': `Tout ce que vous avez toujours voulu savoir sur la médecine chinoise et votre bien-être`
            },
            'section2': {
                'title': `Questions Fréquentes`,
                'paragraph': `Les réponses à vos interrogations les plus courantes`,
                'question1': {
                    'ask': `Combien de temps dure une séance ?`,
                    'respond': `En moyenne 60 minutes, incluant :`,
                    'li1': `l'entretien personnalisé,`,
                    'li2': `le diagnostic énergétique,`,
                    'li3': `et le traitement.`
                },
                'question2': {
                    'ask': `Est-ce que l'acupuncture fait mal ?`,
                    'respond': `Non. Les aiguilles utilisées sont très fines et leur insertion provoque au maximum une légère sensation, comparable à une piqûre de moustique. Nous privilégions toujours une stimulation douce et confortable, adaptée à votre sensibilité.`
                },
                'question3': {
                    'ask': `Combien de séances sont nécessaires ?`,
                    'respond1': `Cela dépend du type de problème et depuis combien de temps il est présent.`,
                    'respond2': `En général, les troubles récents peuvent s'améliorer en quelques séances, parfois dès la première. Les problèmes plus anciens ou chroniques demandent souvent un suivi plus long.`,
                    'respond3': `Un cycle de plusieurs semaines peut être utile, puis une séance mensuelle aide à maintenir l'équilibre et à éviter les rechutes.`
                },
                'question4': {
                    'ask': `Pourquoi choisir l'acupuncture ?`,
                    'respond': `L'acupuncture agit en profondeur sur les blocages énergétiques, favorise la circulation de l'énergie et aide le corps à retrouver son équilibre naturel. Elle peut être complémentaire à d'autres approches (physiothérapie, ostéopathie, massage) pour optimiser les résultats.`
                },
                'question5': {
                    'ask': `Quelles mesures d'hygiène sont appliquées ?`,
                    'respond': `Toutes les aiguilles sont stériles et à usage unique.`
                },
                'question6': {
                    'ask': `À partir de quel âge peut-on recevoir des séances ?`,
                    'respond': `L'acupuncture peut être pratiquée dès l'enfance. Pour un confort optimal, nous recommandons généralement d'attendre 4 à 5 ans, sauf indication particulière et avec l'accord des parents.`
                },
                'question7': {
                    'ask': `Est-ce remboursé par l'assurance ?`,
                    'respond': `En Suisse, de nombreuses assurances complémentaires remboursent tout ou partie des séances d'acupuncture. Chaque patient est invité à vérifier directement auprès de sa caisse maladie les modalités de remboursement.`
                }
            },
            'section3': {
                'title': `Une question spécifique ?`,
                'paragraph': `Nous sommes là pour vous répondre personnellement`,
                'button1': `Nous appeler`,
                'button2': `Nous écrire`
            }
        },

        /** ===== PAGE DE CONTACT ===== */
        'contact': {
            'section1': {
                'title': `Votre chemin vers l'équilibre commence ici`,
                'paragraph': `Prenez rendez-vous pour une consultation personnalisée en médecine chinoise`
            },
            'section2': {
                'cardContact': {
                    'title': `Qingning Santé Genève`,
                    'paragraph': `Retrouvez équilibre et sérénité près de Châtelaine et Vernier`,
                    'center': `Notre centre`,
                    'spaces': `Spaces 4e étage, Place Casa Bamba 1`,
                    'etang': `Quartier de l'Étang, Genève`,
                    'phone': `Téléphone`,
                    'email': `Email`,
                    'rdv': `Prendre rendez-vous en ligne`,
                    'reserve': `Réservation simple et sécurisée via Onedoc`
                },
                'horaire': {
                    'title': `Horaires d'ouverture`,
                    'paragraph': `Des créaux adaptés à votre emploi du temps`,
                    'week': `Lundi - Vendredi`,
                    'saturday': `Samedi`,
                    'sunday': `Dimanche`,
                    'close': `Fermé`,
                    'urgent': `Besoin d'un rendez-vous urgent ?`,
                    'call': `Appelez-nous directement, nous ferons notre possible pour vous accommoder.`
                }
            },
            'section3': {
                'title': `Accès à Qingning Santé Genève`,
                'paragraph': `Notre centre est facilement accessible depuis tout Genève`,
                'bus': {
                    'title': `En transports publics`,
                    'bold1': `Tram 18 ou 14`,
                    'text1': ` - Arrêt Avanchet-Étang (3 min à pied)`,
                    'bold2': `Bus 28`,
                    'text2': ` - Arrêt Vernier, Étang Place (2-3 min à pied)`
                },
                'voiture': {
                    'title': `En voiture`,
                    'text1': `Sortie d'autoroute `,
                    'bold1': `Genève-Vernier`,
                    'bold2': `Parking public`,
                    'text2': ` disponible à proximité`
                },
                'velo': {
                    'title': `À pied ou à vélo`,
                    'text1': `Accessible depuis `,
                    'bold1': `Châtelaine et Vernier`,
                    'text2': `Idéal pour les `,
                    'bold2': `habitants du quartier`
                }
            },
            'section4': {
                'title': `Prêt à retrouver votre équilibre ?`,
                'paragraph': `Réservez votre consultation dès aujourd'hui et faites le premier pas vers une santé optimale`,
                'button1': `Prendre rendez-vous`,
                'button2': `Nous appeler`,
                'span': `Réponse rapide garantie sous 24h`
            }
        }
    },

    en: {
        /** ===== HEADER COMPONENT ===== */
        'header': {
            'home': 'Home',
            'about': 'About',
            'therapeute': 'Practitioner',
            'services': 'Treatments',
            'servicesDropdown': {
                'acupuncture': 'Acupuncture',
                'acupunctureLift': 'Acupuncture Lift',
                'moxibustion': 'Moxibustion',
                'ventouses': 'Cupping',
                'tuina': 'Tui Na Massage',
                'phytotherapie': 'Phytotherapy',
                'nutrition': 'TCM Nutrition'
            },
            'vitality': 'Vitality',
            'tarifs': 'Prices',
            'blog': 'Blog',
            'faq': 'FAQ',
            'contact': 'Contact',
        },

        /** ===== HOME PAGE ===== */
        'home': {
            'title': 'Welcome to Qingning Santé Geneva',
            'subtitle': 'Traditional Chinese Medicine Therapy Center in Switzerland', 
            'paragraph': 'Your Health, Our Tradition',
            
            // CARROUSEL COMPLETE IN ENGLISH
            'carousel': {
                'acupuncture': {
                    'title': 'Acupuncture',
                    'paragraph': `Traditional acupuncture stimulates specific points on the body using sterilized, single-use needles. This stimulation triggers a natural response in the body, promoting self-regulation, Qi circulation, and the release of blockages.`,
                    'link': `More information about acupuncture`
                },
                'moxibustion': {
                    'title': 'Moxibustion',
                    'paragraph': `Moxibustion uses the heat of moxa - traditionally dried mugwort, sometimes combined with other plants - applied to specific points or areas of the body. It can be done with rolls, on the needle, or directly on the skin.`,
                    'link': `Learn more about moxibustion`
                },
                'ventouses': {
                    'title': 'Cupping Therapy',
                    'paragraph': `Cupping, whether heated or not, creates suction on the skin to activate blood and lymphatic circulation. It helps release stagnations and is particularly useful for recovery and injury prevention.`,
                    'link': `Visit our cupping therapy page`
                },
                'tuina': {
                    'title': 'Tui Na',
                    'paragraph': `Tui Na is a Chinese therapeutic massage combining pressures, manipulations, stretches, and joint mobilizations. Each technique is chosen according to the body area, imbalance, and individual constitution.`,
                    'link': `Learn more about Tui Na`
                },
                'phytotherapie': {
                    'title': 'Chinese Phytotherapy',
                    'paragraph': `Chinese pharmacopoeia consists of natural medicinal plants combined into formulas tailored to each patient. Each prescription is personalized to treat the root causes of imbalances while minimizing side effects.`,
                    'link': `Learn more about Chinese phytotherapy`
                },
                'nutrition': {
                    'title': 'Chinese Dietetics',
                    'paragraph': `Each food has specific properties. Chinese dietetics adapts to each person's constitution and situation, whether preventively or therapeutically. It's not about dieting, but about dietary rebalancing to support health.`,
                    'link': `More information about dietary approaches to adopt`
                }
            },
            // Introduction
            'introduction': {
                'title': 'Introduction',
                'paragraph': `Rediscover balance through the millennial wisdom of Traditional Chinese Medicine. At Qingning Santé acupuncture practice, we unite authentic tradition and modern approach for your overall well-being.`
            },
            // Expertise
            'expertise': {
                'title': 'Our expertise in acupuncture and TCM',
                'paragraph': `Located in the heart of the Étang district in Geneva, Qingning Santé benefits from an exclusive partnership with the prestigious Qingning Clinic in China, an international reference in Traditional Chinese Medicine. Our certified practitioners cumulate over 40 years of combined experience in acupuncture and Chinese medicine.`
            },
            // Séances
            'session': {
                'title': 'Your acupuncture session in Geneva',
                'intro': 'In our calm and bright space, we accompany you to:',
                'benefits': [
                    'Rebalance your vital energy (Qi)',
                    'Stimulate your natural self-healing abilities',
                    'Regain serenity and vitality',
                    'Soothe chronic pain'
                ]
            },
            // Localisation
            'location': {
                'title': 'Convenient location',
                'paragraph': `Just a few minutes from Châtelaine and Vernier, our acupuncture center welcomes residents from throughout the Geneva region. Accessible and friendly, we offer personalized care in Traditional Chinese Medicine.`
            },
            // Certification (assurance complémentaire)
            'certification': {
                'title': 'The center and our practitioners are certified',
                'paragraph': `We are accredited by ASCA, RME, allowing you to get reimbursed for your session! Check with your complementary insurance!`
            },
            // Reserver
            'cta': {
                'title': 'First discovery session: personalized energy assessment offered!',
                'subtitle': '(Offer reserved for new patients — book your acupuncture consultation now)',
                'button': 'Book my discovery session'
            }
        },
        /** ===== ABOUT PAGE ===== */
        'about': {
            'title': `Qingning Health: Geneva Excellence in Acupuncture and Chinese Medicine`,
            'subtitle': `Our Philosophy: Balance, Clarity and Vitality`,
            'section1': {
                'bloc1-paragraph': `At Qingning Health Geneva, we believe that health stems from the balance between body and mind. The word "Qingning" means pure clarity and serenity, symbols of our therapeutic approach based on traditional Chinese medicine (TCM).`,
                'bloc2-paragraph': `In Chinese, Qingning also evokes the lime, a symbol of freshness and vital energy. Its fragrance awakens the senses, its flavor purifies and rebalances. Like the lime, our acupuncture practice nourishes life with simplicity and depth: it calms when the mind is restless and revitalizes when the body is exhausted.`,
                'bloc3-paragraph': `Our mission: to offer you a bright and soothing space where everyone can rediscover harmony, clarity and vital energy through a personalized approach.`
            },
            'section2': {
                'subtitle': `Our Story: A Meeting Between Switzerland and China`,
                'bloc1-paragraph': `Qingning Health Geneva was born from a human and cultural encounter between Switzerland and China. Dr. Bo Wang, founder of the Qingning Clinic in China, lived for several years in Neuchâtel. Touched by Swiss culture and its art of living, he wanted to create a lasting connection between his Chinese roots and Switzerland.`,
                'bloc2-paragraph': `It was then that he met Ms. Yongyan Sui, passionate about traditional Chinese medicine and founder of Qingning Health Geneva. From this collaboration was born a unique center: a living bridge between Chinese tradition and Western lifestyle, where acupuncture and energy treatments adapt to each individual.`
            },
            'section3': {
                'subtitle': `Our Commitment to Your Health`,
                'commitment1': {
                    'bold': `Authenticity :`,
                    'text': `using ancestral techniques validated by millennia of practice`
                },
                'commitment2': {
                    'bold': `Excellence :`, 
                    'text': `continuous training and collaboration with experts in China`
                },
                'commitment3': {
                    'bold': `Personalization :`,
                    'text': `care adapted to your constitution, your environment and your lifestyle`
                },
                'commitment4': {
                    'bold': `Sustainable Results :`,
                    'text': `holistic approach targeting the root causes of imbalances`
                }
            },
            'section4': {
                'subtitle': `Acupuncture and TCM: A Holistic Approach to Well-being`,
                'paragraph': `Traditional Chinese medicine considers the human being in their entirety. Beyond symptoms, we seek to understand the energy imbalances that affect your health. Our approach combines acupuncture, herbal medicine, dietetics and lifestyle advice for lasting well-being.`
            }
        },
        /** ===== THERAPEUTES PAGE ===== */
        'therapeute': {
            'section1': {
                'title': 'Our Team',
                'subtitle': 'Experience and Listening',
                'bloc1-paragraph': `Our practitioners, trained in China and Europe, combine over 40 years of clinical experience with attentive listening. Each session is a dialogue where tradition meets your personal needs. We adapt the ancestral methods of TCM to your Geneva lifestyle, for effective and respectful care.`
            },
            'section2': {
                'title': 'Dr Liqiang Deng',
                'subtitle': 'Expertise and Excellence in Traditional Chinese Medicine',
                'bloc1-paragraph': `Dr. Liqiang Deng is an eminent practitioner of Traditional Chinese Medicine (TCM), graduated from the prestigious Tianjin University of Traditional Chinese Medicine (China). With over 40 years of clinical practice, he has gained extensive experience both in China and internationally, particularly in Switzerland, where he practices and continues to share his knowledge. Throughout his career, Dr. Deng has worked in hospitals and specialized TCM centers, developing recognized mastery in key disciplines: acupuncture, herbal medicine, therapeutic massage (Tui Na), and energy rebalancing.`,
                'bloc2-paragraph': `His rigorous training and long practice allow him to combine traditional knowledge with contemporary approaches, offering personalized, precise, and effective treatments. Dr. Deng places great importance on adopting a holistic approach that aims not only to treat physical imbalances but also to improve emotional well-being and prevent diseases. His care philosophy is based on the pursuit of harmony and balance, fundamental principles of traditional Chinese medicine.`
            },
            'section3': {
                'title': 'Yongyan Sui',
                'subtitle': 'Traditional Chinese Medicine & Nutrition',
                'bloc1-paragraph': `Yongyan Sui is a practitioner trained in health management in Traditional Chinese Medicine at the Qingning Clinic in Shenyang (China). A member of the Professional Endocrinology Committee of the World Federation of Chinese Medicine, she combines TCM expertise with a scientific approach to nutrition. Graduated in nutrition from the Swiss School of Health and Rehabilitation (ESSR), Yongyan Sui develops a unique practice that links Chinese medicine and therapeutic nutrition, optimizing overall health and strengthening the balance of body and mind.`,
                'bloc2-paragraph': `She specializes in managing emotion-related conditions (stress, anxiety, hormonal imbalances), as well as supporting the digestive system. Her personalized treatments aim to restore harmony between diet, emotions, and vital energy, to improve overall health and quality of life.`
            }
        },

        /** ===== HEALTH SERVICES PAGES ===== */
        'health': {
            'title': `Our Treatments`,
            'subtitle': `A Holistic Approach`,
            'section1': {
                'title': 'Traditional Chinese Medicine: 3000 years of wisdom for your balance',
                'paragraph': `Traditional Chinese Medicine (TCM), practiced for over 3000 years, is based on a holistic vision of the body and health. Recognized by the World Health Organization (WHO), it considers each individual in their entirety — physical, emotional and energetic — to restore the body\'s natural harmony.`,
            },
            'section2': {
                'title': `An approach based on the body's self-healing capacity`,
                'paragraph': `At the heart of Chinese medicine lies the powerful self-healing force present in each of us. The different treatment methods — acupuncture, Tui Na massage, moxibustion and Chinese herbal medicine — act on specific energy points to stimulate the circulation of Qi (vital energy) and restore inner balance.`
            },
            'section3': {
                'title': `Harmonizing Yin and Yang for lasting health`,
                'paragraph': `The essential goal of Chinese medicine is to reharmonize Yin and Yang, these two complementary forces that govern our vital energy. When they are in balance, the body functions harmoniously, energy flows freely and health flourishes naturally.`
            },
            'section4': {
                'title': `A millennial practice adapted to modern life`,
                'paragraph': `At Qingning Health Geneva, we unite the ancestral wisdom of Chinese medicine with the modern Western approach to well-being. Our treatments are designed to integrate into your daily life, offering natural, gentle and effective therapies that respect your body's rhythm.`
            },
            'section5': {
                'title': `More than medicine: a way of life`,
                'paragraph': `Traditional Chinese medicine is above all an art of connecting body, mind and seasons. Our specialized therapists combine precise energy diagnosis, prevention and individualized care, so that each session becomes a profound moment of rebalancing and reconnection with oneself.`
            }
        },

        /** ===== ACUPUNCTURE PAGE ===== */
        'acupuncture': {
          'title': `Acupuncture`,
          'subtitle': `Balance Your Vital Energy`,
            'section1': {
                'title': `What is Acupuncture?`,
                'paragraph': `Acupuncture is a cornerstone of Traditional Chinese Medicine. This ancient technique involves stimulating specific points on the body using sterile, single-use fine needles that are almost imperceptible. By promoting the circulation of Qi (vital energy) and blood, acupuncture helps restore internal balance, soothe pain, and harmonize organ functions.`,
            },
            "section2": {
                "title": "Benefits of Acupuncture:",
                "benefit1": "Relief from chronic pain (back, joints, migraines)",
                "benefit2": "Reduction of stress and anxiety",
                "benefit3": "Improvement in sleep quality", 
                "benefit4": "Regulation of digestive disorders",
                "benefit5": "Strengthening of the immune system",
                "benefit6": "Support for hormonal imbalances"
            },
            'section3': {
                'title': `Our Acupuncture Approach`,
                'paragraph': `Each acupuncture session at Qingning Santé begins with a complete energy assessment according to TCM principles. We identify specific imbalances and tailor the acupuncture treatment to your unique condition.`
            },
            'section4': {
                'title': `How Does It Work?`,
                'paragraph': `Contrary to common misconceptions, acupuncture is generally very well tolerated. The needles used are extremely fine - up to 10 times thinner than a standard needle - making the sensation often imperceptible. Most of our patients describe a feeling of deep relaxation during and after the acupuncture session.`
            }
        },
        
        /** ===== ACUPUNCTURE LIFT PAGE ===== */
        'acupunctureLift': {
          'title': `Acupuncture`,
          'subtitle': `Natural beauty and inner balance`,
            'section1': {
                'title': `What is LIFT Acupuncture?`,
                'paragraph': `LIFT acupuncture, also called acupuncture facelift, draws inspiration from Traditional Chinese Medicine principles to stimulate facial muscles and connective tissue. By acting on energy meridians, it improves Qi and blood circulation, promotes natural collagen production, and revitalizes the skin. It's a gentle, non-invasive, and deeply relaxing method that addresses both external beauty and inner balance.`,
            },
            "section2": {
                "title": "Benefits of LIFT Acupuncture:",
                "benefit1": "Smooths wrinkles and fine lines naturally",
                "benefit2": "Restores radiance, firmness and elasticity to the skin",
                "benefit3": "Relaxes facial features by reducing stress", 
                "benefit4": "Stimulates circulation and cellular renewal",
                "benefit5": "Improves sleep and overall well-being"
            },
            'section3': {
                'title': `Our Approach at Qingning Santé`,
                'paragraph': `Each session begins with a personalized energy diagnosis to understand internal imbalances that may affect skin and aging. The LIFT acupuncture protocol is then tailored to your needs - whether to revitalize, tone, or soothe. Complementary advice on nutrition, skincare, and lifestyle may be provided to extend the treatment effects.`
            },
            'section4': {
                'title': `How Does It Work?`,
                'paragraph': `LIFT acupuncture is not limited to aesthetic action: it also works on overall health. The fine needles used are gently inserted, creating subtle stimulation that awakens the skin's natural functions without pain or inflammation. Results appear gradually, offering a natural and long-lasting rejuvenating effect.`
            }
        },

        /** ===== MOXIBUSTION PAGE ===== */
        'moxibustion': {
          'title': `Moxibustion`,
          'subtitle': `Therapeutic heat that regenerates`,
            'section1': {
                'title': `What is moxibustion?`,
                'paragraph': `Moxibustion is an ancestral technique of Traditional Chinese Medicine using the gentle, penetrating heat of a mugwort stick (moxa) applied near acupuncture points. This therapeutic heat penetrates deeply, warms the meridians and revitalizes vital energy.`,
            },
            "section2": {
                "title": "Main indications for moxibustion:",
                "benefit1": `Joint and muscle pain of "cold" origin`,
                "benefit2": "Strengthening the immune system",
                "benefit3": "Chronic fatigue and lack of energy", 
                "benefit4": "Circulatory disorders",
                "benefit5": "Seasonal preparation (particularly in autumn/winter)",
                "benefit6": "Support for conditions of general weakness"
            },
            'section3': {
                'title': `Our moxibustion expertise:`,
                'paragraph': `At Qingning Santé, we master the different moxibustion techniques - direct, indirect, with needles - and select the one most suited to your energy condition.`
            },
            'section4': {
                'title': `When do we use it ?`,
                'paragraph': `Moxibustion is particularly indicated for "cold" or "deficiency" type imbalances in TCM. The heat of mugwort (artemisia vulgaris) tonifies Yang and circulates Qi and blood in the meridians, warming the body deeply.`
            }
        },

        /** ===== PAGE VENTOUSES ===== */
        'ventouses': {
          'title': `Cupping`,
          'subtitle': `Release tensions, revitalize your body`,
            'section1': {
                'title': `Cupping technique`,
                'paragraph': `Therapeutic cupping uses glass or silicone containers creating a suction effect on the skin. This method, practiced since antiquity in Traditional Chinese Medicine, promotes blood and lymphatic circulation, releases deep muscle tensions and helps eliminate energy stagnations.`,
            },
            "section2": {
                "title": "Cupping applications:",
                "benefit1": `Muscle pain and back tensions`,
                "benefit2": "Fatigue and feeling of heaviness",
                "benefit3": "Colds and early flu states", 
                "benefit4": "Cellulite and blood circulation problems",
                "benefit5": "Deep relaxation and general well-being"
            },
            'section3': {
                'title': `Our approach at Qingning Santé`,
                'paragraph': `Each session begins with a personalized energy diagnosis to understand internal imbalances that may affect skin and aging. The LIFT acupuncture protocol is then tailored to your needs - whether to revitalize, tone, or soothe. Complementary advice on nutrition, skincare and lifestyle may be provided to extend the treatment effects.`
            },
            'section4': {
                'title': `How does it work?`,
                'paragraph': `LIFT acupuncture is not limited to aesthetic action: it also works on overall health. The fine needles used are gently inserted, creating subtle stimulation that awakens the skin's natural functions without pain or inflammation. Results appear gradually, offering a natural and long-lasting rejuvenating effect.`
            }
        },

        /** ===== TUI NA MASSAGE PAGE ===== */
        'tuina': {
          'title': `Tui Na Massage`,
          'subtitle': `Energetic manual therapy`,
            'section1': {
                'title': `Tui Na, Chinese therapeutic massage:`,
                'paragraph': `Tui Na is much more than just a massage - it's a true manual therapy of Traditional Chinese Medicine. This technique combines pressures, kneading, stretching and joint mobilizations to stimulate Qi circulation, relax muscles and rebalance internal organs.`,
            },
            "section2": {
                "title": "Benefits of Tui Na massage:",
                "benefit1": `Relief from joint and muscle pain`,
                "benefit2": "Reduction of stress and nervous tensions",
                "benefit3": "Improvement of digestive disorders", 
                "benefit4": "Increased vitality and reduced fatigue",
                "benefit5": "Better joint mobility",
                "benefit6": "Overall energy balancing"
            },
            'section3': {
                'title': `Our Tui Na practice:`,
                'paragraph': `Our certified therapists adapt each Tui Na massage session to your specific constitution and energy imbalances.`
            },
            'section4': {
                'title': `What is Tui Na massage?`,
                'paragraph': `"Tui Na" literally means "push" and "grasp" - these two fundamental actions represent the essence of this technique that works both on the musculoskeletal structure and energy circulation.`
            }
        },

        /** ===== CHINESE PHYTOTHERAPY PAGE ===== */
        'phytotherapie': {
          'title': `Chinese Phytotherapy`,
          'subtitle': `The wisdom of plants for your health`,
            'section1': {
                'title': `Phytotherapy in TCM:`,
                'paragraph': `Chinese phytotherapy uses carefully selected medicinal plants combined in synergistic formulas. Each preparation is personalized to meet the patient's specific energy needs, working on the root of the imbalance rather than just the symptoms.`,
            },
            "section2": {
                "title": "Areas of application:",
                "benefit1": `Chronic disorders and weakness conditions`,
                "benefit2": "Persistent fatigue and low energy",
                "benefit3": "Hormonal imbalances and menstrual cycles", 
                "benefit4": "Immune support and prevention",
                "benefit5": "Functional digestive disorders",
                "benefit6": "Stress management and emotional balance"
            },
            'section3': {
                'title': `Our phytotherapy approach:`,
                'paragraph': `We offer Chinese phytotherapy formulas in different forms - decoctions, powders, granules - always of the highest quality and from controlled sources.`
            },
            'section4': {
                'title': `What are the strengths of Chinese phytotherapy?`,
                'paragraph': `Chinese phytotherapy formulas are designed according to a complex logic where each plant has a specific role - some target the main symptom, others strengthen the body, while others balance the effects of the first ones. This systemic approach explains the effectiveness and safety of traditional Chinese phytotherapy.`
            }
        },

        /** ===== TCM NUTRITION PAGE ===== */
        'nutrition': {
          'title': `Nutrition according to traditional Chinese medicine`,
          'subtitle': `Food as preventive medicine`,
            'section1': {
                'title': `Dietetics in Chinese Medicine:`,
                'paragraph': `In TCM, food is considered the first remedy. Our nutritional recommendations take into account the seasons, your individual constitution and your current energy state. The goal: strengthen organs, support digestion and prevent imbalances before they appear.`,
            },
            "section2": {
                "title": "Applications of nutrition in TCM:",
                "benefit1": `Health prevention and immunity strengthening`,
                "benefit2": "Functional digestive disorders",
                "benefit3": "Fatigue and lack of vital energy", 
                "benefit4": "Harmonious weight gain or loss",
                "benefit5": "Adaptation to seasonal changes",
                "benefit6": "Support in chronic conditions"
            },
            'section3': {
                'title': `Our nutrition support:`,
                'subtitle': `We offer specific consultations in Chinese dietetics including:`,
                "benefit1": `Assessment of your energy constitution`,
                "benefit2": "Analysis of your eating habits",
                "benefit3": "Personalized recommendations according to seasons", 
                "benefit4": "Practical advice for a smooth transition"
            },
            'section4': {
                'title': `How does nutrition work according to traditional Chinese medicine?`,
                'paragraph': `According to Chinese Medicine, each food has a nature (cold, cool, neutral, warm, hot) and a flavor (sour, bitter, sweet, spicy, salty) that specifically influence organ energy. A diet adapted to your constitution and the season is a fundamental pillar of sustainable health.`
            }
        },

        /** ===== VITALITY PAGE ===== */
        'vitality': {
            'section1': {
                'title': `Health, Vitality and Pathology`,
                'subtitle': `Frequently Treated Conditions in Chinese Medicine`,
                'paragraph': `Traditional Chinese Medicine (TCM) - acupuncture, phytotherapy, dietetics, Tui Na massage, Qi Gong - offers a global and natural approach to relieve a wide range of disorders, whether acute, chronic or functional. At Qingning Santé, located in the Étang district of Geneva, each treatment is personalized according to a precise energy assessment to restore the balance of body and mind.`,
            },
            "section2": {
                /* CARDS VISIBLES SANS FLIPS */
                "surpoids": {
                    "title": `Overweight & Metabolic Balance`,
                    "paragraph": `Restoring metabolic balance through a holistic approach...`
                },
                "stress": {
                    "title": `Stress & Professional Burnout`,
                    "paragraph": `Regaining nervous balance and lasting vitality...`
                },
                "douleurs": {
                    "title": `Joint & Muscle Pain`,
                    "paragraph": `Deep and lasting pain relief...`
                },
                "feminine": {
                    "title": `Women's Health & Fertility`,
                    "paragraph": `Support at every stage of a woman's life...`
                },
                "digestif": {
                    "title": `Digestive & Intestinal Disorders`,
                    "paragraph": `Regaining lasting digestive comfort...`
                },
                "allergies": {
                    "title": `Allergies & Respiratory Problems`,
                    "paragraph": `Strengthening your terrain to breathe freely...`
                },
                "peau": {
                    "title": `Skin Problems`,
                    "paragraph": `Treating the internal causes of recurrent skin conditions...`
                },
                "oncologique": {
                    "title": `Oncological Support`,
                    "paragraph": `Compassionate support during treatments...`
                },
                "masculine": {
                    "title": `Men's Health & Vitality`,
                    "paragraph": `Holistic approach for male vitality...`
                },
                "plus": "Learn more →"
            },
            /* CARDS VISIBLES QUAND ON LES FLIPS */
            "articles": {
                "surpoids": {
                    "title": `Overweight & Metabolic Balance`,
                    "philosophy": {
                        "title": `Our Philosophy:`,
                        "paragraph": `We understand that weight loss is a deeply personal challenge, often related to modern lifestyle, stress and a weakened metabolism. Our approach goes beyond diets: we work to rebalance your body as a whole for lasting results.`
                    },
                    "western": {
                        "title": `Western Medicine Perspective:`,
                        "paragraph": `Overweight results from an imbalance between caloric intake and energy expenditure, influenced by basal metabolism, physical activity, and various hormonal and genetic factors.`
                    },
                    "chinese": {
                        "title": `Traditional Chinese Medicine Perspective:`,
                        "paragraph": `Overweight is often linked to a Spleen imbalance that doesn't properly transform fluids, creating dampness and phlegm. The Liver, on the other hand, can have stagnant Qi, especially under stress, thus disrupting digestion and fat metabolism.`
                    },
                    "qingning": {
                        "title": `Our Qingning Santé Approach:`,
                        "solution1": `Personalized energy assessment to identify your constitution and imbalances`,
                        "solution2": `Specific acupuncture to regulate appetite, boost metabolism and soothe emotional cravings`,
                        "solution3": `Customized phytotherapy to drain dampness and support digestive functions`,
                        "solution4": `Energetic dietetics advice adapted to your lifestyle`
                    }
                },
                "stress": {
                    "title": `Stress & Professional Burnout`,
                    "philosophy": {
                        "title": `Our Philosophy:`,
                        "paragraph": `In a world where demands and requirements are constant, exhaustion lurks. We offer a sanctuary and concrete solutions to regain deep nervous balance and lasting vitality, far from merely symptomatic solutions.`
                    },
                    "western": {
                        "title": `Western Medicine Perspective:`,
                        "paragraph": `Burn-out is a professional exhaustion syndrome characterized by intense fatigue, decreased work efficiency, and often cynicism. It results from unmanaged chronic stress.`
                    },
                    "chinese": {
                        "title": `Traditional Chinese Medicine Perspective:`,
                        "paragraph": `Stress depletes Qi, affects the Spirit (Shen) housed in the Heart, and can block the free circulation of Liver Qi, leading to irritability. Deep exhaustion affects the vital energy of the Kidneys.`
                    },
                    "qingning": {
                        "title": `Our Qingning Santé Approach:`,
                        "solution1": `Anti-stress acupuncture protocol with points to calm the mind and recharge energy`,
                        "solution2": `Adaptogenic plants to increase stress resistance and improve sleep quality`,
                        "solution3": `Relaxing Tui Na massage to release accumulated physical tensions`,
                        "solution4": `Stress management and lifestyle advice`
                    }
                },
                "douleurs": {
                    "title": `Joint & Muscle Pain`,
                    "philosophy": {
                        "title": `Our Philosophy:`,
                        "paragraph": `Whether your pain is related to a static position, stress or sports practice, we seek its energetic origin for deep and lasting relief, in addition to conventional approaches.`
                    },
                    "western": {
                        "title": `Western Medicine Perspective:`,
                        "paragraph": `Musculoskeletal pain can have various origins: inflammatory (arthritis), mechanical (osteoarthritis), or related to soft tissue injuries (tendinitis).`
                    },
                    "chinese": {
                        "title": `Traditional Chinese Medicine Perspective:`,
                        "paragraph": `Pain is a stagnation of Qi and Blood in the meridians. It can be caused by external factors (Wind, Cold, Dampness) or internal factors (weakness of Kidney or Liver energy).`
                    },
                    "qingning": {
                        "title": `Our Qingning Santé Approach:`,
                        "solution1": `Targeted analgesic acupuncture to unblock meridians and relieve pain`,
                        "solution2": `Cupping to decongest painful areas and improve circulation`,
                        "solution3": `Moxibustion to drive out Cold and Dampness from joints`,
                        "solution4": `Personalized treatment plan including maintenance exercises`
                    }
                },
                "feminine": {
                    "title": `Women's Health & Fertility`,
                    "philosophy": {
                        "title": `Our Philosophy:`,
                        "paragraph": `We accompany women at every stage of their lives, from puberty to menopause, with a gentle approach respectful of their natural cyclicity. Our fertility expertise makes it a valuable complement to ART pathways.`
                    },
                    "western": {
                        "title": `Western Medicine Perspective:`,
                        "paragraph": `Many gynecological disorders (PMS, endometriosis, cycle disorders) are linked to hormonal imbalances. Fertility can be affected by multiple factors (ovarian, tubal, hormonal...).`
                    },
                    "chinese": {
                        "title": `Traditional Chinese Medicine Perspective:`,
                        "paragraph": `Women's health relies on the balance of Qi and Blood, and the free circulation of energy in the Liver meridian. The Kidneys, which store vital essence, are fundamental for fertility and a harmonious cycle.`
                    },
                    "qingning": {
                        "title": `Our Qingning Santé Approach:`,
                        "solution1": `Cyclic acupuncture to naturally regulate hormones and soothe pain`,
                        "solution2": `Hormonal phytotherapy to nourish Blood and balance the terrain`,
                        "solution3": `Fertility support and ART accompaniment to optimize conception chances`,
                        "solution4": `Specific follow-up for menopause, birth preparation and post-partum`
                    }
                },
                "digestif": {
                    "title": `Digestive & Intestinal Disorders`,
                    "philosophy": {
                        "title": `Our Philosophy:`,
                        "paragraph": `Bloating, reflux, irritable bowel... These modern ailments often signal a suffering digestive system. We help regain lasting comfort by acting on root causes, well beyond symptoms.`
                    },
                    "western": {
                        "title": `Western Medicine Perspective:`,
                        "paragraph": `Functional digestive disorders (like irritable bowel syndrome) are often linked to visceral hypersensitivity and disturbances of the intestinal microbiota.`
                    },
                    "chinese": {
                        "title": `Traditional Chinese Medicine Perspective:`,
                        "paragraph": `Harmonious digestion depends on the Spleen's ability to transform food and the Stomach's ability to descend energy. Stress (Liver Qi stagnation) can directly "attack" the Spleen and Stomach, disrupting digestion.`
                    },
                    "qingning": {
                        "title": `Our Qingning Santé Approach:`,
                        "solution1": `Regulating acupuncture to harmonize Stomach, strengthen Spleen and calm spasms`,
                        "solution2": `Natural probiotics and phytotherapy to restore intestinal flora balance and soothe inflammation`,
                        "solution3": `Individualized dietary advice based on Chinese dietetics`,
                        "solution4": `Stress management to act on a major triggering factor`
                    }
                },
                "allergies": {
                    "title": `Allergies & Respiratory Problems`,
                    "philosophy": {
                        "title": `Our Philosophy:`,
                        "paragraph": `We don't just treat allergic crises or infections; we strengthen your terrain so you're globally less sensitive to aggressions and can breathe freely, whatever the season.`
                    },
                    "western": {
                        "title": `Western Medicine Perspective:`,
                        "paragraph": `Allergies are an excessive reaction of the immune system to normally harmless substances (pollens, dust mites...). Asthma is a chronic inflammation of the bronchi.`
                    },
                    "chinese": {
                        "title": `Traditional Chinese Medicine Perspective:`,
                        "paragraph": `The Lungs manage breathing and diffuse defensive energy (Wei Qi) to the body's surface. If Wei Qi is weak, "pathogenic factors" (like Wind) penetrate more easily, causing sneezing, runny nose...`
                    },
                    "qingning": {
                        "title": `Our Qingning Santé Approach:`,
                        "solution1": `Preventive acupuncture to strengthen Wei Qi before allergy season`,
                        "solution2": `Acute treatment to clear nose and sinuses, calm cough`,
                        "solution3": `Plants to fortify Lungs and dry dampness`,
                        "solution4": `Advice to strengthen immunity and identify aggravating factors`
                    }
                },
                "peau": {
                    "title": `Skin Problems`,
                    "philosophy": {
                        "title": `Our Philosophy:`,
                        "paragraph": `The state of your skin reflects your internal balance. Our approach is particularly indicated for recurrent or resistant skin problems, working on root causes, from the inside.`
                    },
                    "western": {
                        "title": `Western Medicine Perspective:`,
                        "paragraph": `Eczema, psoriasis or acne are inflammatory skin conditions, often influenced by genetics, immune system, hormones or environment.`
                    },
                    "chinese": {
                        "title": `Traditional Chinese Medicine Perspective:`,
                        "paragraph": `The skin is linked to the Lung and Large Intestine. Oozing eczema suggests Dampness-Heat. Psoriasis with dry scales may indicate Blood dryness. Acne is often related to Heat in the Lung and Stomach.`
                    },
                    "qingning": {
                        "title": `Our Qingning Santé Approach:`,
                        "solution1": `Purifying acupuncture to eliminate Heat and cool Blood`,
                        "solution2": `Plant decoctions to drain Dampness, detoxify and nourish skin`,
                        "solution3": `Dietary adjustment to avoid Heat or Dampness generating foods`,
                        "solution4": `Global approach including stress management, a major aggravating factor`
                    }
                },
                "oncologique": {
                    "title": `Oncological Support`,
                    "philosophy": {
                        "title": `Our Philosophy:`,
                        "paragraph": `We offer compassionate and personalized support to better navigate the ordeal of illness and treatments. Our goal is to improve your quality of life and support your vitality, in perfect complementarity with your medical follow-up.`
                    },
                    "western": {
                        "title": `Western Medicine Perspective:`,
                        "paragraph": `Treatments like chemotherapy and radiotherapy, although necessary, also damage healthy cells, causing fatigue, nausea, lowered immunity...`
                    },
                    "chinese": {
                        "title": `Traditional Chinese Medicine Perspective:`,
                        "paragraph": `The disease and its treatments deeply exhaust Qi and Blood, and injure the vital energy of the Kidneys. They can also generate what TCM calls "toxins".`
                    },
                    "qingning": {
                        "title": `Our Qingning Santé Approach:`,
                        "solution1": `Gentle acupuncture to reduce nausea, fatigue and certain pains`,
                        "solution2": `Toning and safe phytotherapy to support blood cell production and strengthen immunity`,
                        "solution3": `Emotional support to help through this difficult period`,
                        "solution4": `Close collaboration with your oncologist for a perfectly integrative approach`
                    }
                },
                "masculine": {
                    "title": `Men's Health & Vitality`,
                    "philosophy": {
                        "title": `Our Philosophy:`,
                        "paragraph": `We approach vitality, performance and fertility issues with discretion and real expertise. Our holistic approach considers man in his entirety, for results that restore confidence and well-being.`
                    },
                    "western": {
                        "title": `Western Medicine Perspective:`,
                        "paragraph": `Erectile disorders or decreased libido can be linked to vascular, hormonal (low testosterone), neurological or psychological factors (stress, anxiety).`
                    },
                    "chinese": {
                        "title": `Traditional Chinese Medicine Perspective:`,
                        "paragraph": `Male vitality is governed by Kidney energy, which is the source of Jing (vital essence). A stagnation of Liver Qi, often due to stress, can also disrupt erectile function.`
                    },
                    "qingning": {
                        "title": `Our Qingning Santé Approach:`,
                        "solution1": `Toning acupuncture to strengthen Kidney energy and improve circulation`,
                        "solution2": `Aphrodisiac and tonic plants to increase vitality and improve sperm quality`,
                        "solution3": `Stress and fatigue management, underestimated key factors`,
                        "solution4": `Lifestyle advice for optimal long-term men's health`
                    }
                }               
            }
        },

        /** ===== PRICING PAGE ===== */
        'tarifs': {
            'section1': {
                'title': 'Invest in Your Well-being',
                'paragraph': 'Your health is the most beautiful journey. We accompany you at every step.',
                'badge': 'Reimbursed by most insurance plans'
            },
            'section2': {
                'title': 'Reimbursed by Most Insurance Plans',
                'paragraph': 'Traditional Chinese medicine is reimbursed by most complementary insurance plans. Remember to check the conditions with your insurer before your first consultation.'
            },
            'section3': {
                'seance1': {
                    'icone': 'Recommended',
                    'title': 'First Session - Initial Diagnosis',
                    'prix': 'CHF 170.-',
                    'duree': 'Duration: 60-75 minutes',
                    'etape1': 'Complete energy assessment according to TCM principles',
                    'etape2': 'In-depth dialogue to establish your health history',
                    'etape3': 'Personalized treatment plan adapted to your needs',
                    'etape4': 'Detailed explanations about your energy balance',
                    'booker': 'Book My First Session'
                },
                'seance2': {
                    'icone': 'Complete Care',
                    'title': 'Follow-up Sessions - Treatment',
                    'prix': 'CHF 150.-',
                    'duree': 'Duration: 45-60 minutes',
                    'etape1': 'Combination of techniques according to your energy state',
                    'etape2': 'Acupuncture, Tui Na, cupping or moxibustion',
                    'etape3': 'Personalized nutrition and lifestyle advice',
                    'etape4': 'Approach adapted to your health goals',
                    'booker': 'Continue My Treatment'
                }
            },
            'section4': {
                'title': 'Your Journey Towards Balance',
                'paragraph': 'Structured support for lasting results',
                'diagnosticTitle': 'Diagnosis',
                'diagnosticParagraph': 'Complete energy assessment and understanding of your needs',
                'traitementTitle': 'Treatment',
                'traitementParagraph': '10 to 20 session course for deep rebalancing',
                'maintienTitle': 'Maintenance',
                'maintienParagraph': 'Maintenance sessions to preserve your balance',
            },
            'section5': {
                'title': 'Ready to Rediscover Your Natural Balance?',
                'paragraph': 'Join the many patients who have already transformed their health with our holistic approach.',
                'appeler': 'Call Us',
                'ecrire': 'Write to Us'
            }
        },

        /** ===== BLOG PAGE ===== */
        'blog': {
            'section1': {
                'title': 'Qingning Santé Blog',
                'paragraph': 'Discover the secrets of Chinese medicine for radiant health',
                'lireArtComplet': `Read full article`,
            },
            'section2': {
                'title': 'Our latest articles',
                'paragraph': 'Practical advice for your daily well-being',
                'winter': {
                    'title': `Boost Your Energy in Winter`,
                    'time': `5 minutes`,
                    'paragraph': `Imagine your body as a frozen lake in winter: the surface seems still, but deep down, life continues gently...`,
                    'bold1': `Warming nutrition`,
                    'text1': ` - Simmered soups and root vegetables`,
                    'bold2': `Quality rest`,
                    'text2': ` - Every minute of sleep before midnight counts`
                },
                'qi': {
                    'title': `Qi: The Vital Energy Flowing Within You`,
                    'time': `4 minutes`,
                    'paragraph': `Qi is invisible, but you feel it every morning: the energy that gets you out of bed, makes you smile, breathe...`,
                    'bold1': `Role of Qi`,
                    'text1': ` - Nourishes your organs like a gardener`,
                    'bold2': `Imbalances`,
                    'text2': ` - Fatigue, tension, digestive issues`
                },
                'season': {
                    'title': `Seasons in Chinese Medicine`,
                    'time': `6 minutes`,
                    'paragraph': `Humans reflect nature. Seasons are not just calendar markers...`,
                    'bold1': `Spring`,
                    'text1': ` - Liver / Wood - Creativity`,
                    'bold2': `Summer`,
                    'text2': ` - Heart / Fire - Passion`
                },
                'stress': {
                    'title': `Stress and Emotions`,
                    'time': `5 minutes`,
                    'paragraph': `Did you know your emotions have assigned organs? In Chinese Medicine, anger, joy, worry, sadness and fear are not just feelings...`,
                    'bold1': `Anger`,
                    'text1': ` - Liver`,
                    'bold2': `Sadness`,
                    'text2': ` - Lungs`
                },
                'nutrition': {
                    'title': `Chinese Nutrition`,
                    'time': `4 minutes`,
                    'paragraph': `Your Spleen and Stomach are like the engine of your vital energy. Efficient digestion is the foundation of all vitality...`,
                    'bold1': `Warm foods`,
                    'text1': ` - Facilitates digestion`,
                    'bold2': `Regular hours`,
                    'text2': ` - Respects your biological clock`
                }
            },
            'modal': {
                'winter': {
                    'title': `Boost Your Energy in Winter: 5 TCM Tips`,
                    'paragraph': `Imagine your body as a frozen lake in winter: the surface seems still, but deep down, life continues gently. Winter is the season of conservation, rest, and preparation for spring energy.`,
                    'advice1': {
                        'title': `Tip 1: Adopt Warming Nutrition`,
                        'text': `Think of your stomach as a small fire: to burn properly, favor simmered soups, root vegetables and legumes. Icy raw foods or cold foods extinguish this fire.`
                    },
                    'advice2': {
                        'title': `Tip 2: Quality Rest and Sleep`,
                        'text': `In winter, nature goes to bed early and you should too. Turn off your screens, slow your movements, and let your body regenerate. Every minute of sleep before midnight is a precious drop of energy for your Kidneys.`
                    },
                    'advice3': {
                        'title': `Tip 3: Protect Your Kidneys and Lower Back`,
                        'text': `Your lower back is the safe of your energy. A scarf, warm vest or even a hot water bottle can transform your daily life.`
                    },
                    'advice4': {
                        'title': `Tip 4: Practice Qi Gong or Meditation`,
                        'text': `A few gentle movements or conscious breaths are like a light wind circulating water under the lake's ice. Let energy circulate without forcing.`
                    },
                    'advice5': {
                        'title': `Tip 5: Deep Breathing and Stress Management`,
                        'text': `Breathe as if inhaling winter sun warmth. Inhale strength, exhale tensions. Even a few minutes are enough to awaken your Qi.`
                    },
                    'footer': {
                        'text': `Winter is a hidden treasure: by taking care of your energy now, you prepare for a radiant spring!`,
                        'button': `Discover our Winter Qi Gong sessions`
                    }
                },
                'qi': {
                    'title': `Qi: The Vital Energy Flowing Within You`,
                    'paragraph': `Qi is invisible, but you feel it every morning: the energy that gets you out of bed, makes you smile, breathe. It's the vital breath that animates your organs, your mind and your emotions.`,
                    'role': {
                        'title': `The Role of Qi`,
                        'text': `Imagine a gardener watering plants every day: Qi nourishes your organs, strengthens your natural defenses and balances your emotions. When it circulates freely, you're in great shape.`
                    },
                    'desequilibre': {
                        'title': `Imbalances`,
                        'text': `Fatigue, tension, digestive issues or unstable emotions... these are all signals that your vital energy is imbalanced. Listening to it is like adjusting sails before a storm.`
                    },
                    'comment': {
                        'title': `How to Circulate Qi`,
                        'text': `Breathe deeply, practice Qi Gong, let acupuncture needles stimulate your vital points, or adapt your diet. Every simple gesture becomes a breath that releases and harmonizes your energy.`
                    },
                    'footer': {
                        'text': `Qi is not just a concept: it's the key to overall health, a living body and a clear mind.`,
                        'button': `Learn more about energy treatments`
                    }
                },
                'season': {
                    'title': `Seasons in Chinese Medicine - Living in Harmony with Nature`,
                    'paragraph': `Humans reflect nature. Seasons are not just calendar markers: they rhythm our energy and health. Living in harmony with them is dancing with the world rather than fighting against it.`,
                    'fiveSeasons': {
                        "title": "The 5 seasons and their correspondences",
                        'spring': {
                            'bold': `Spring (Liver / Wood)`,
                            'text': `: the world awakens, buds grow, your creativity too.`
                        },
                        'summer': {
                            'bold': `Summer (Heart / Fire)`,
                            'text': `: everything expands, energy explodes in your relationships and passions.`
                        },
                        'indianSummer': {
                            'bold': `Indian Summer (Spleen / Earth)`,
                            'text': `: gentle transition, digestion and inner balance.`
                        },
                        'automn': {
                            'bold': `Autumn (Lung / Metal)`,
                            'text': `: the time of fallen leaves invites introspection.`
                        },
                        'winter': {
                            'bold': `Winter (Kidney / Water)`,
                            'text': `: everything pauses, conserves, regenerates.`
                        }
                    },
                    'principes': {
                        'title': `Principles for Living Each Season`,
                        'text': `Adapt your diet, activity and emotions according to natural rhythm: a spring walk, meditative autumn evenings, simmered winter dishes... each season has its codes to support your Qi.`
                    },
                    'footer': {
                        'text': `Letting yourself be guided by seasons means staying healthy all year and living in harmony with the natural world.`,
                        'button': `Discover our seasonal advice`
                    }
                },
                'stress': {
                    'title': `Stress and Emotions - Body and Mind Balance`,
                    'paragraph': `Did you know your emotions have assigned organs? In Chinese Medicine, anger, joy, worry, sadness and fear are not just feelings: they're messages from your body.`,
                    'emotion': {
                        'title': `Emotions and their associated organs`,
                        'colere': {
                            'bold': `Anger`,
                            'text': ` - Liver`
                        },
                        'joie': {
                            'bold': `Joy`,
                            'text': ` - Heart`
                        },
                        'soucis': {
                            'bold': `Worry`,
                            'text': ` - Spleen`
                        },
                        'tristesse': {
                            'bold': `Sadness`,
                            'text': ` - Lungs`
                        },
                        'peur': {
                            'bold': `Fear`,
                            'text': ` - Kidneys`
                        }
                    },
                    'impact': {
                        'title': `Stress Impact`,
                        'text': `Stress blocks Qi, disrupts your sleep and digestion. It's like a cork preventing water from circulating in a stream: everything becomes stagnant and cold.`
                    },
                    'techniques': {
                        'title': `Balancing Techniques`,
                        'text': `Breathe deeply, practice meditation, let acupuncture stimulate your energy, use soothing plants. Every gesture restores your Qi circulation and soothes your emotions.`
                    },
                    'footer': {
                        'text': `Listening to your emotions means understanding your body and preventing illness. Every conscious breath is a step toward inner balance.`,
                        'button': `Book an energy relaxation session`
                    }
                },
                'nutrition': {
                    'title': `Chinese Nutrition - 5 Habits for Optimal Digestion`,
                    'paragraph': `Your Spleen and Stomach are like the engine of your vital energy. Efficient digestion is the foundation of all vitality: imagine your Qi as a river originating in your belly.`,
                    'habit1': {
                        'bold': `Habit 1: Prefer Warm and Cooked Foods`,
                        'text': `Cooked dishes facilitate digestion and avoid internal dampness that can slow your Qi. A steaming soup in winter is like a ray of sunshine for your energy.`
                    },
                    'habit2': {
                        'bold': `Habit 2: Eat at Regular Times`,
                        'text': `Respect your biological clock. Every meal eaten at the right time nourishes your Qi like filling a fuel tank.`
                    },
                    'habit3': {
                        'bold': `Habit 3: Chew and Eat Mindfully`,
                        'text': `Savor each bite, breathe before swallowing, limit stress... it's a gentle massage for your internal energy.`
                    },
                    'habit4': {
                        'bold': `Habit 4: Avoid Excess Sugar and Processed Foods`,
                        'text': `These foods disturb the Spleen and Qi production. Prefer natural, seasonal foods to support your vitality.`
                    },
                    'habit5': {
                        'bold': `Habit 5: Choose Seasonal Foods`,
                        'text': `Energy in harmony with nature is sustainable energy. Winter invites soups and root vegetables, summer juicy refreshing fruits.`
                    },
                    'footer': {
                        'text': `Optimal digestion means a river of Qi flowing freely and nourishing you every moment.`,
                        'button': `Download our seasonal recipe guide`
                    }
                }
            }
        },

        /** ===== FAQ PAGE ===== */
        'faq': {
            'section1': {
                'title': `Your Questions, Our Answers`,
                'paragraph': `Everything you've always wanted to know about Chinese medicine and your well-being`
            },
            'section2': {
                'title': `Frequently Asked Questions`,
                'paragraph': `Answers to your most common questions`,
                'question1': {
                    'ask': `How long does a session last?`,
                    'respond': `On average 60 minutes, including:`,
                    'li1': `personal consultation,`,
                    'li2': `energy diagnosis,`,
                    'li3': `and treatment.`
                },
                'question2': {
                    'ask': `Does acupuncture hurt?`,
                    'respond': `No. The needles used are very fine and their insertion causes at most a slight sensation, comparable to a mosquito bite. We always prioritize gentle and comfortable stimulation, adapted to your sensitivity.`
                },
                'question3': {
                    'ask': `How many sessions are needed?`,
                    'respond1': `It depends on the type of problem and how long it has been present.`,
                    'respond2': `Generally, recent issues can improve in a few sessions, sometimes from the first one. Older or chronic problems often require longer follow-up.`,
                    'respond3': `A cycle of several weeks may be useful, then a monthly session helps maintain balance and prevent relapses.`
                },
                'question4': {
                    'ask': `Why choose acupuncture?`,
                    'respond': `Acupuncture works deeply on energy blockages, promotes energy circulation and helps the body regain its natural balance. It can complement other approaches (physiotherapy, osteopathy, massage) to optimize results.`
                },
                'question5': {
                    'ask': `What hygiene measures are applied?`,
                    'respond': `All needles are sterile and single-use.`
                },
                'question6': {
                    'ask': `From what age can one receive sessions?`,
                    'respond': `Acupuncture can be practiced from childhood. For optimal comfort, we generally recommend waiting until 4-5 years old, unless otherwise indicated and with parental consent.`
                },
                'question7': {
                    'ask': `Is it covered by insurance?`,
                    'respond': `In Switzerland, many supplementary insurance policies cover all or part of acupuncture sessions. Each patient is invited to check directly with their health insurance provider for reimbursement details.`
                }
            },
            'section3': {
                'title': `A specific question?`,
                'paragraph': `We are here to answer you personally`,
                'button1': `Call us`,
                'button2': `Write to us`
            }
        },

        /** ===== CONTACT PAGE ===== */
        'contact': {
            'section1': {
                'title': `Your Path to Balance Starts Here`,
                'paragraph': `Book an appointment for a personalized Chinese medicine consultation`
            },
            'section2': {
                'cardContact': {
                    'title': `Qingning Santé Geneva`,
                    'paragraph': `Rediscover balance and serenity near Châtelaine and Vernier`,
                    'center': `Our center`,
                    'spaces': `Spaces 4th floor, Place Casa Bamba 1`,
                    'etang': `Étang neighborhood, Geneva`,
                    'phone': `Phone`,
                    'email': `Email`,
                    'rdv': `Book appointment online`,
                    'reserve': `Simple and secure booking via Onedoc`
                },
                'horaire': {
                    'title': `Opening Hours`,
                    'paragraph': `Time slots adapted to your schedule`,
                    'week': `Monday - Friday`,
                    'saturday': `Saturday`,
                    'sunday': `Sunday`,
                    'close': `Closed`,
                    'urgent': `Need an urgent appointment?`,
                    'call': `Call us directly, we'll do our best to accommodate you.`
                }
            },
            'section3': {
                'title': `Access to Qingning Santé Geneva`,
                'paragraph': `Our center is easily accessible from all of Geneva`,
                'bus': {
                    'title': `By public transport`,
                    'bold1': `Tram 18 or 14`,
                    'text1': ` - Avanchet-Étang stop (3 min walk)`,
                    'bold2': `Bus 28`,
                    'text2': ` - Vernier, Étang Place stop (2-3 min walk)`
                },
                'voiture': {
                    'title': `By car`,
                    'text1': `Highway exit `,
                    'bold1': `Geneva-Vernier`,
                    'bold2': `Public parking`,
                    'text2': ` available nearby`
                },
                'velo': {
                    'title': `On foot or by bike`,
                    'text1': `Accessible from `,
                    'bold1': `Châtelaine and Vernier`,
                    'text2': `Ideal for `,
                    'bold2': `neighborhood residents`
                }
            },
            'section4': {
                'title': `Ready to rediscover your balance?`,
                'paragraph': `Book your consultation today and take the first step towards optimal health`,
                'button1': `Book an appointment`,
                'button2': `Call us`,
                'span': `Quick response guaranteed within 24h`
            }
        }
    },

    zh: {
        /** ===== HEADER COMPONENT ===== */
        'header': {
            'home': '首页',
            'about': '关于我们',
            'therapeute': '治疗师',
            'services': '治疗服务',
            'servicesDropdown': {
                'acupuncture': '针灸',
                'acupunctureLift': '针灸提升',
                'moxibustion': '艾灸',
                'ventouses': '拔罐',
                'tuina': '推拿按摩',
                'phytotherapie': '中药疗法',
                'nutrition': '中医营养'
            },
            'vitality': '活力养生',
            'tarifs': '价格',
            'blog': '博客',
            'faq': '常见问题',
            'contact': '联系我们',
        },
        /** ===== HOME PAGE ===== */
        'home': {
            'title': '欢迎来到日内瓦青宁健康',
            'subtitle': '瑞士传统中医治疗中心',
            'paragraph': '您的健康，我们的传统',
            
            // CARROUSEL COMPLET EN CHINOIS
            'carousel': {
                'acupuncture': {
                    'title': '针灸',
                    'paragraph': `传统针灸使用消毒的一次性针刺激身体特定穴位。这种刺激引发身体的自然反应，促进自我调节、气血循环和疏通经络。`,
                    'link': `了解更多关于针灸的信息`
                },
                'moxibustion': {
                    'title': '艾灸',
                    'paragraph': `艾灸使用艾草的热量 - 传统上是干燥的艾叶，有时与其他植物结合 - 应用于身体的特定穴位或区域。可以通过艾条、在针上或直接在皮肤上进行。`,
                    'link': `了解更多关于艾灸的信息`
                },
                'ventouses': {
                    'title': '拔罐疗法',
                    'paragraph': `拔罐无论是否加热，都会在皮肤上产生吸力以激活血液和淋巴循环。它有助于释放瘀滞，特别适用于恢复和预防损伤。`,
                    'link': `访问我们的拔罐疗法页面`
                },
                'tuina': {
                    'title': '推拿',
                    'paragraph': `推拿是一种结合按压、手法、拉伸和关节活动的中国治疗性按摩。每种技术都根据身体部位、不平衡状况和个人体质选择。`,
                    'link': `了解更多关于推拿的信息`
                },
                'phytotherapie': {
                    'title': '中药疗法',
                    'paragraph': `中药由天然药用植物组成，根据每位患者的情况配制成方剂。每个处方都是个性化的，旨在治疗不平衡的根本原因，同时最大限度地减少副作用。`,
                    'link': `了解更多关于中药疗法的信息`
                },
                'nutrition': {
                    'title': '中医饮食',
                    'paragraph': `每种食物都有特定的性质。中医饮食根据每个人的体质和情况调整，无论是预防性还是治疗性的。这不是节食，而是通过饮食重新平衡来支持健康。`,
                    'link': `了解更多关于饮食方法的信息`
                }
            },

            // Introduction
            'introduction': {
                'title': '简介',
                'paragraph': `通过千年中医智慧重新发现平衡。在青宁健康针灸诊所，我们将正宗传统与现代方法相结合，为您的整体健康服务。`
            },
            // Expertise
            'expertise': {
                'title': '我们的针灸和中医专业知识',
                'paragraph': `青宁健康位于日内瓦Étang区中心，与享有国际声誉的中国青岛诊所独家合作。我们认证的治疗师在针灸和中医领域拥有超过40年的综合经验。`
            },
            // Séances
            'session': {
                'title': '您在日内瓦的针灸疗程',
                'intro': '在我们宁静明亮的空间中，我们陪伴您：',
                'benefits': [
                    '重新平衡您的生命能量（气）',
                    '激发您自然的自愈能力',
                    '重获宁静与活力',
                    '缓解慢性疼痛'
                ]
            },
            // Localisation
            'location': {
                'title': '便利的位置',
                'paragraph': `距离Châtelaine和Vernier仅几分钟路程，我们的针灸中心欢迎整个日内瓦地区的居民。我们提供便捷友好的个性化中医护理服务。`
            },
            // Certification (assurance complémentaire)
            'certification': {
                'title': '中心和我们的治疗师均获得认证',
                'paragraph': `我们获得ASCA、RME认证，您可以通过补充保险报销治疗费用！请向您的保险公司咨询！`
            },
            // Reserver
            'cta': {
                'title': '首次体验疗程：个性化能量评估免费！',
                'subtitle': '（此优惠仅限新患者 — 立即预约您的针灸咨询）',
                'button': '预约我的体验疗程'
            }
        },
        /** ===== ABOUT PAGE ===== */
        'about': {
            'title': `清宁健康：日内瓦卓越的针灸与中医服务`,
            'subtitle': `我们的理念：平衡、清明与活力`,
            'section1': {
                'bloc1-paragraph': `在日内瓦清宁健康，我们相信健康源于身心的平衡。"清宁"二字意味着纯净清明与宁静祥和，这象征着我们在中医基础上的治疗方法。`,
                'bloc2-paragraph': `在中文中，"清宁"也让人联想到青柠，象征着清新与生命活力。它的香气唤醒感官，它的味道净化身心、恢复平衡。如同青柠一般，我们的针灸疗法以简约而深刻的方式滋养生命：当心灵躁动时它能安抚，当身体疲惫时它能重焕活力。`,
                'bloc3-paragraph': `我们的使命：为您提供一个明亮而舒适的空间，让每个人都能通过个性化的方式重获和谐、清明与生命活力。`
            },
            'section2': {
                'subtitle': `我们的故事：瑞士与中国的相遇`,
                'bloc1-paragraph': `日内瓦清宁健康源于瑞士与中国之间的人文交流。清宁诊所中国创始人王博医生曾在纳沙泰尔生活多年。深受瑞士文化及其生活艺术的触动，他希望在中华根源与瑞士之间建立持久的联系。`,
                'bloc2-paragraph': `就在那时，他遇见了对中医充满热情的门店创始人随永艳女士。这次合作催生了一个独特的中心：一座连接中国传统与西方生活方式的桥梁，在这里，针灸与能量调理服务能够适应每个人的需求。`
            },
            'section3': {
                'subtitle': `我们对您健康的承诺`,
                'commitment1': {
                    'bold': `真实性：`,
                    'text': `使用经过数千年实践验证的传统技术`
                },
                'commitment2': {
                    'bold': `卓越性：`, 
                    'text': `持续培训并与中国专家合作`
                },
                'commitment3': {
                    'bold': `个性化：`,
                    'text': `根据您的体质、环境和生活节奏定制护理方案`
                },
                'commitment4': {
                    'bold': `持久效果：`,
                    'text': `针对失衡根本原因的整体方法`
                }
            },
            'section4': {
                'subtitle': `针灸与中医：全方位的健康之道`,
                'paragraph': `中医将人视为一个整体。除了症状之外，我们更致力于理解影响您健康的能量失衡问题。我们的方法结合了针灸、中药、饮食调理和生活建议，以实现持久的健康状态。`
            }
        },
        /** ===== THERAPEUTES PAGE ===== */
        'therapeute': {
            'section1': {
                'title': '我们的团队',
                'subtitle': '经验与倾听',
                'bloc1-paragraph': `我们的医师在中国和欧洲接受培训，融合了超过40年的临床经验与专注的倾听。每次诊疗都是一场对话，让传统医学与您的个人需求相遇。我们将中医的传统方法融入您的日内瓦生活方式，提供有效且尊重的治疗方案。`
            },
            'section2': {
                'title': '邓立强医生',
                'subtitle': '传统中医的专业与卓越',
                'bloc1-paragraph': `邓立强医生是传统中医领域的杰出医师，毕业于中国著名的天津中医药大学。拥有超过40年的临床实践经验，他在中国和国际舞台（特别是在瑞士）积累了丰富的经验，在此执业并持续传授他的知识。在职业生涯中，邓医生曾在多家医院和专业中医中心工作，在主要学科领域形成了公认的精湛技艺：针灸、中药、推拿治疗和能量平衡调理。`,
                'bloc2-paragraph': `他严谨的培训和长期的实践使他能够将传统智慧与现代方法相结合，提供个性化、精准且有效的治疗。邓医生特别重视采用整体疗法，不仅旨在治疗身体失衡，还致力于改善情绪健康并预防疾病。他的治疗理念基于对和谐与平衡的追求，这是传统中医的基本原则。`
            },
            'section3': {
                'title': '随永艳',
                'subtitle': '中医与营养学',
                'bloc1-paragraph': `随永艳是在沈阳清宁诊所接受中医健康管理培训的医师。作为世界中医学会联合会内分泌专业委员会的成员，她将中医专业知识与科学的营养学方法相结合。毕业于瑞士健康与康复学院营养学专业，随永艳开创了一种独特的实践，将中医与治疗性营养联系起来，优化整体健康并强化身心平衡。`,
                'bloc2-paragraph': `她专长于处理与情绪相关的病症（压力、焦虑、荷尔蒙失衡），以及支持消化系统健康。她的个性化治疗旨在恢复饮食、情绪与生命能量之间的和谐，以改善整体健康和生活质量。`
            }
        },

        /** ===== HEALTH SERVICES PAGES ===== */
        'health': {
            'title': `我们的治疗服务`,
            'subtitle': `整体疗法之道`,
            'section1': {
                'title': '传统中医：三千年智慧，守护您的身心平衡',
                'paragraph': `传统中医拥有超过3000年的实践历史，基于对人体与健康的整体观念。获得世界卫生组织认可，中医将每个人视为一个整体——包括身体、情绪和能量层面——以恢复身体的自然和谐。`
            },
            'section2': {
                'title': `基于人体自愈能力的疗法`,
                'paragraph': `中医的核心在于我们每个人体内存在的强大自愈力量。不同的治疗方法——针灸、推拿按摩、艾灸和中药——作用于特定的能量穴位，以刺激气（生命能量）的循环并恢复内在平衡。`
            },
            'section3': {
                'title': `调和阴阳，实现持久健康`,
                'paragraph': `中医的根本目标是重新调和阴阳，这两股互补的力量主宰着我们的生命能量。当阴阳平衡时，身体和谐运作，能量自由流动，健康自然蓬勃发展。`
            },
            'section4': {
                'title': `千年智慧融入现代生活`,
                'paragraph': `在日内瓦清宁健康，我们融合中医的古老智慧与现代西方的健康理念。我们的治疗方案旨在融入您的日常生活，提供自然、温和且有效的疗法，尊重您身体的自然节奏。`
            },
            'section5': {
                'title': `不仅是医学：更是一种生活方式`,
                'paragraph': `传统中医本质上是一门连接身体、心灵与季节的艺术。我们的专业治疗师结合精准的能量诊断、预防和个性化护理，让每次诊疗都成为一次深刻的重新平衡与自我连接的体验。`
            }
        },

        /** ===== ACUPUNCTURE PAGE ===== */
        'acupuncture': {
          'title': `针灸`,
          'subtitle': `平衡您的生命能量`,
            'section1': {
                'title': `什么是针灸？`,
                'paragraph': `针灸是传统中医的基石。这种古老技术使用几乎无法察觉的一次性无菌细针刺激身体特定穴位。通过促进气血循环，针灸帮助恢复内在平衡、缓解疼痛并调和器官功能。`,
            },
            "section2": {
                "title": "针灸的好处：",
                "benefit1": "缓解慢性疼痛（背部、关节、偏头痛）",
                "benefit2": "减轻压力和焦虑",
                "benefit3": "改善睡眠质量", 
                "benefit4": "调节消化系统紊乱",
                "benefit5": "增强免疫系统",
                "benefit6": "支持荷尔蒙失衡"
            },
            'section3': {
                'title': `我们的针灸方法`,
                'paragraph': `在青宁健康的每次针灸疗程都从根据中医原则的完整能量评估开始。我们识别特定失衡并为您的独特状况定制针灸治疗。`
            },
            'section4': {
                'title': `它是如何工作的？`,
                'paragraph': `与常见误解相反，针灸通常耐受性很好。使用的针极其细薄 - 比标准针细达10倍 - 使感觉常常无法察觉。我们的大多数患者在针灸期间和之后都描述深度放松的感觉。`
            }
        },

        /** ===== ACUPUNCTURE PAGE LIFT ===== */
        'acupunctureLift': {
          'title': `针灸`,
          'subtitle': `自然美丽与内在平衡`,
            'section1': {
                'title': `什么是LIFT针灸？`,
                'paragraph': `LIFT针灸，又称针灸提升，借鉴传统中医原理来刺激面部肌肉和结缔组织。通过作用于能量经络，它能改善气血循环，促进天然胶原蛋白生成，重焕肌肤活力。这是一种温和、非侵入性且深度放松的方法，同时解决外在美和内在平衡。`,
            },
            "section2": {
                "title": "LIFT针灸的好处：",
                "benefit1": "自然平滑皱纹和细纹",
                "benefit2": "恢复肌肤光泽、紧致和弹性",
                "benefit3": "通过减轻压力放松面部特征", 
                "benefit4": "刺激血液循环和细胞更新",
                "benefit5": "改善睡眠和整体健康"
            },
            'section3': {
                'title': `我们在青宁健康的独特方法`,
                'paragraph': `每次疗程都以个性化的能量诊断开始，了解可能影响皮肤和老化的内部失衡。然后根据您的需求定制LIFT针灸方案——无论是 revitalize、紧致还是舒缓。我们可能会提供营养、护肤和生活方式的补充建议，以延长治疗效果。`
            },
            'section4': {
                'title': `它是如何工作的？`,
                'paragraph': `LIFT针灸不仅限于美学作用：它还对整体健康起作用。使用的细针被轻柔插入，产生微妙的刺激，唤醒皮肤的自然功能，无疼痛或炎症。效果逐渐显现，提供自然而持久的年轻化效果。`
            }
        },

        /** ===== PAGE MOXIBUSTION ===== */
        'moxibustion': {
          'title': `艾灸`,
          'subtitle': `再生治疗热量`,
            'section1': {
                'title': `什么是艾灸？`,
                'paragraph': `艾灸是一种传统中医古老技术，使用艾条温和而穿透性的热量施于穴位附近。这种治疗热量深入渗透，温暖经络并重焕生命能量。`,
            },
            "section2": {
                "title": "艾灸的主要适应症：",
                "benefit1": `"寒性"起源的关节和肌肉疼痛`,
                "benefit2": "增强免疫系统",
                "benefit3": "慢性疲劳和精力不足", 
                "benefit4": "循环系统紊乱",
                "benefit5": "季节性调理（特别是在秋冬季）",
                "benefit6": "全身虚弱状况的支持"
            },
            'section3': {
                'title': `我们的艾灸专业经验：`,
                'paragraph': `在青宁健康，我们掌握不同的艾灸技术 - 直接灸、间接灸、温针灸 - 并选择最适合您能量状况的方法。`
            },
            'section4': {
                'title': `何时使用此方法？`,
                'paragraph': `艾灸特别适用于中医中的"寒"或"虚"类型失衡。艾草的热量补阳，促进经络中气血循环，深层温暖身体。`
            }
        },

        /** ===== PAGE VENTOUSES ===== */
        'ventouses': {
          'title': `拔罐`,
          'subtitle': `释放紧张，恢复身体活力`,
            'section1': {
                'title': `拔罐技术`,
                'paragraph': `治疗性拔罐使用玻璃或硅胶罐在皮肤上产生吸力效果。这种自古在传统中医中实践的方法，促进血液和淋巴循环，释放深层肌肉紧张，并帮助消除能量停滞。`,
            },
            "section2": {
                "title": "拔罐的应用：",
                "benefit1": `肌肉疼痛和背部紧张`,
                "benefit2": "疲劳和沉重感",
                "benefit3": "感冒和早期流感状态", 
                "benefit4": "橘皮组织和血液循环问题",
                "benefit5": "深度放松和整体健康"
            },
            'section3': {
                'title': `我们在青宁健康的独特方法`,
                'paragraph': `每次疗程都以个性化的能量诊断开始，了解可能影响皮肤和老化的内部失衡。然后根据您的需求定制LIFT针灸方案——无论是恢复活力、紧致还是舒缓。可能会提供营养、护肤和生活方式的补充建议，以延长治疗效果。`
            },
            'section4': {
                'title': `它是如何工作的？`,
                'paragraph': `LIFT针灸不仅限于美学作用：它还对整体健康起作用。使用的细针被轻柔插入，产生微妙的刺激，唤醒皮肤的自然功能，无疼痛或炎症。效果逐渐显现，提供自然而持久的年轻化效果。`
            }
        },

        /** ===== PAGE MASSAGE TUI NA ===== */
        'tuina': {
          'title': `推拿按摩`,
          'subtitle': `能量手法治疗`,
            'section1': {
                'title': `推拿，中国治疗性按摩：`,
                'paragraph': `推拿远不止是一种简单的按摩——它是传统中医真正的手法治疗。这种技术结合按压、揉捏、拉伸和关节活动来刺激气血循环、放松肌肉并重新平衡内部器官。`,
            },
            "section2": {
                "title": "推拿按摩的好处：",
                "benefit1": `缓解关节和肌肉疼痛`,
                "benefit2": "减轻压力和神经紧张",
                "benefit3": "改善消化系统紊乱", 
                "benefit4": "增加活力并减少疲劳",
                "benefit5": "更好的关节活动度",
                "benefit6": "整体能量平衡"
            },
            'section3': {
                'title': `我们的推拿实践：`,
                'paragraph': `我们认证的治疗师根据您特定的体质和能量失衡来调整每次推拿按摩疗程。`
            },
            'section4': {
                'title': `什么是推拿按摩？`,
                'paragraph': `"推拿"字面意思是"推"和"拿"——这两个基本动作代表了这种技术的精髓，既作用于肌肉骨骼结构，也作用于能量循环。`
            }
        },

        /** ===== PHYTOTHERAPIE PAGE ===== */
        'phytotherapie': {
          'title': `中药`,
          'subtitle': `植物智慧为您的健康服务`,
            'section1': {
                'title': `中医草药治疗：`,
                'paragraph': `中药使用精心挑选的药用植物，以协同配方组合。每种制剂都根据患者特定的能量需求个性化定制，针对失衡的根本原因而不仅仅是症状。`,
            },
            "section2": {
                "title": "应用领域：",
                "benefit1": `慢性疾病和虚弱状况`,
                "benefit2": "持续性疲劳和精力低下",
                "benefit3": "荷尔蒙失衡和月经周期", 
                "benefit4": "免疫支持和预防",
                "benefit5": "功能性消化系统紊乱",
                "benefit6": "压力管理和情绪平衡"
            },
            'section3': {
                'title': `我们的草药治疗方法：`,
                'paragraph': `我们提供不同形式的中药配方——汤剂、粉末、颗粒——始终保证最高质量并来自受控来源。`
            },
            'section4': {
                'title': `中药的优势是什么？`,
                'paragraph': `中药配方按照复杂逻辑设计，每种草药都有特定作用——有些针对主要症状，有些增强体质，还有些平衡前者的效果。这种系统方法解释了传统中药的有效性和安全性。`
            }
        },

        /** ===== TCM NUTRITION PAGE ===== */
        'nutrition': {
          'title': `传统中医营养学`,
          'subtitle': `饮食作为预防医学`,
            'section1': {
                'title': `中医饮食疗法：`,
                'paragraph': `在中医中，食物被认为是第一药物。我们的营养建议考虑季节、您的个人体质和当前能量状态。目标：强化器官、支持消化并在失衡出现之前预防它们。`,
            },
            "section2": {
                "title": "中医营养的应用：",
                "benefit1": `健康预防和免疫增强`,
                "benefit2": "功能性消化系统紊乱",
                "benefit3": "疲劳和生命力不足", 
                "benefit4": "和谐的体重增加或减少",
                "benefit5": "适应季节变化",
                "benefit6": "慢性病状况的支持"
            },
            'section3': {
                'title': `我们的营养指导：`,
                'subtitle': `我们提供中医饮食疗法的具体咨询包括：`,
                "benefit1": `您的能量体质评估`,
                "benefit2": "您的饮食习惯分析",
                "benefit3": "根据季节的个性化建议", 
                "benefit4": "平稳过渡的实用建议"
            },
            'section4': {
                'title': `传统中医营养学如何运作？`,
                'paragraph': `根据中医理论，每种食物都有性质（寒、凉、平、温、热）和味道（酸、苦、甘、辛、咸），这些特性会具体影响器官能量。适合您体质和季节的饮食是可持续健康的基本支柱。`
            }
        },

        /** ===== 活力健康页面 ===== */
        'vitality': {
            'section1': {
                'title': `健康、活力与病理`,
                'subtitle': `中医常见治疗疾病`,
                'paragraph': `传统中医（TCM）- 针灸、草药、饮食疗法、推拿按摩、气功 - 提供全面自然的方法来缓解各种急慢性或功能性障碍。在日内瓦Étang区的青宁健康诊所，每次治疗都根据精确的能量评估进行个性化定制，以恢复身心平衡。`,
            },
            "section2": {
                /* CARDS VISIBLES SANS FLIPS */
                "surpoids": {
                    "title": `超重与代谢平衡`,
                    "paragraph": `通过整体方法恢复代谢平衡...`
                },
                "stress": {
                    "title": `压力与职业倦怠`,
                    "paragraph": `恢复神经平衡和持久活力...`
                },
                "douleurs": {
                    "title": `关节与肌肉疼痛`,
                    "paragraph": `深度持久的疼痛缓解...`
                },
                "feminine": {
                    "title": `女性健康与生育`,
                    "paragraph": `陪伴女性生命每个阶段...`
                },
                "digestif": {
                    "title": `消化系统与肠道紊乱`,
                    "paragraph": `恢复持久的消化舒适...`
                },
                "allergies": {
                    "title": `过敏与呼吸问题`,
                    "paragraph": `强化体质自由呼吸...`
                },
                "peau": {
                    "title": `皮肤问题`,
                    "paragraph": `治疗复发性皮肤问题的内在原因...`
                },
                "oncologique": {
                    "title": `肿瘤支持`,
                    "paragraph": `治疗期间的关怀陪伴...`
                },
                "masculine": {
                    "title": `男性健康与活力`,
                    "paragraph": `男性活力的整体方法...`
                },
                "plus": "了解更多 →"
            },
            /* CARDS VISIBLES QUAND ON LES FLIPS */
            "articles": {
                "surpoids": {
                    "title": `超重与代谢平衡`,
                    "philosophy": {
                        "title": `我们的理念：`,
                        "paragraph": `我们理解减肥是深刻的个人挑战，通常与现代生活节奏、压力和脆弱的新陈代谢有关。我们的方法超越饮食：我们致力于重新平衡您的整个身体以获得持久效果。`
                    },
                    "western": {
                        "title": `西方医学观点：`,
                        "paragraph": `超重源于热量摄入与能量消耗之间的不平衡，受基础代谢、体力活动及各种激素和遗传因素影响。`
                    },
                    "chinese": {
                        "title": `传统中医观点：`,
                        "paragraph": `超重常与脾脏失衡有关，脾不能正常转化液体，产生湿气和痰浊。肝脏则可能因气滞，特别是在压力下，从而扰乱消化和脂肪代谢。`
                    },
                    "qingning": {
                        "title": `我们的青宁健康方法：`,
                        "solution1": `个性化能量评估以识别您的体质和失衡`,
                        "solution2": `特定针灸调节食欲、促进代谢和缓解情绪性饥饿`,
                        "solution3": `定制草药疗法排除湿气和支持消化功能`,
                        "solution4": `根据您生活方式的能量饮食建议`
                    }
                },
                "stress": {
                    "title": `压力与职业倦怠`,
                    "philosophy": {
                        "title": `我们的理念：`,
                        "paragraph": `在需求和要求不断的世界中，精疲力尽潜伏着。我们提供避风港和具体解决方案，以恢复深层神经平衡和持久活力，远离仅对症治疗。`
                    },
                    "western": {
                        "title": `西方医学观点：`,
                        "paragraph": `职业倦怠是一种以极度疲劳、工作效率下降和常常愤世嫉俗为特征的综合征。它源于未管理的慢性压力。`
                    },
                    "chinese": {
                        "title": `传统中医观点：`,
                        "paragraph": `压力耗气，影响藏于心脏的神灵，并可能阻滞肝气自由流通，导致烦躁。深度衰竭影响肾的精气。`
                    },
                    "qingning": {
                        "title": `我们的青宁健康方法：`,
                        "solution1": `抗压针灸方案，用穴位镇静心神和补充能量`,
                        "solution2": `适应原植物增加抗压能力和改善睡眠质量`,
                        "solution3": `放松推拿按摩释放累积的身体紧张`,
                        "solution4": `压力管理和生活方式建议`
                    }
                },
                "douleurs": {
                    "title": `关节与肌肉疼痛`,
                    "philosophy": {
                        "title": `我们的理念：`,
                        "paragraph": `无论您的疼痛与静态姿势、压力还是运动实践相关，我们寻找其能量根源以获得深度持久缓解，作为常规方法的补充。`
                    },
                    "western": {
                        "title": `西方医学观点：`,
                        "paragraph": `肌肉骨骼疼痛可有多种起源：炎症性（关节炎）、机械性（骨关节炎）或与软组织损伤相关（肌腱炎）。`
                    },
                    "chinese": {
                        "title": `传统中医观点：`,
                        "paragraph": `疼痛是经络中气血停滞。可由外部因素（风、寒、湿）或内部因素（肾或肝能量虚弱）引起。`
                    },
                    "qingning": {
                        "title": `我们的青宁健康方法：`,
                        "solution1": `针对性镇痛针灸疏通经络缓解疼痛`,
                        "solution2": `拔罐疏通疼痛区域改善循环`,
                        "solution3": `艾灸驱散关节寒湿`,
                        "solution4": `个性化治疗计划包括维护锻炼`
                    }
                },
                "feminine": {
                    "title": `女性健康与生育`,
                    "philosophy": {
                        "title": `我们的理念：`,
                        "paragraph": `我们从青春期到更年期陪伴女性每个生命阶段，以温和方法尊重其自然周期性。我们的生育专业知识使其成为辅助生殖途径的宝贵补充。`
                    },
                    "western": {
                        "title": `西方医学观点：`,
                        "paragraph": `许多妇科疾病（经前综合征、子宫内膜异位症、月经周期紊乱）与激素失衡有关。生育能力可受多种因素影响（卵巢、输卵管、激素等）。`
                    },
                    "chinese": {
                        "title": `传统中医观点：`,
                        "paragraph": `女性健康依赖于气血平衡和肝经能量自由流通。储存精气的肾脏对生育能力和和谐周期至关重要。`
                    },
                    "qingning": {
                        "title": `我们的青宁健康方法：`,
                        "solution1": `周期针灸自然调节激素和缓解疼痛`,
                        "solution2": `激素草药疗法滋养血液平衡体质`,
                        "solution3": `生育支持和辅助生殖陪伴优化受孕机会`,
                        "solution4": `更年期、分娩准备和产后的具体随访`
                    }
                },
                "digestif": {
                    "title": `消化系统与肠道紊乱`,
                    "philosophy": {
                        "title": `我们的理念：`,
                        "paragraph": `腹胀、反流、肠易激...这些现代病痛常预示消化系统不适。我们通过作用于根本原因帮助恢复持久舒适，远超症状治疗。`
                    },
                    "western": {
                        "title": `西方医学观点：`,
                        "paragraph": `功能性消化障碍（如肠易激综合征）常与内脏过敏和肠道微生物群紊乱有关。`
                    },
                    "chinese": {
                        "title": `传统中医观点：`,
                        "paragraph": `和谐消化依赖于脾转化食物和胃下降能量的能力。压力（肝气郁滞）可直接"攻击"脾胃，扰乱消化。`
                    },
                    "qingning": {
                        "title": `我们的青宁健康方法：`,
                        "solution1": `调节针灸调和胃、强健脾和缓解痉挛`,
                        "solution2": `天然益生菌和草药疗法恢复肠道菌群平衡和舒缓炎症`,
                        "solution3": `基于中医饮食学的个性化饮食建议`,
                        "solution4": `压力管理作用于主要触发因素`
                    }
                },
                "allergies": {
                    "title": `过敏与呼吸问题`,
                    "philosophy": {
                        "title": `我们的理念：`,
                        "paragraph": `我们不仅治疗过敏危机或感染；我们强化您的体质使您整体上对侵袭更不敏感，能自由呼吸，无论季节如何。`
                    },
                    "western": {
                        "title": `西方医学观点：`,
                        "paragraph": `过敏是免疫系统对通常无害物质（花粉、尘螨等）的过度反应。哮喘是支气管的慢性炎症。`
                    },
                    "chinese": {
                        "title": `传统中医观点：`,
                        "paragraph": `肺管理呼吸并散布卫气于体表。如卫气弱，"病邪"（如风邪）更易侵入，导致打喷嚏、流鼻涕...`
                    },
                    "qingning": {
                        "title": `我们的青宁健康方法：`,
                        "solution1": `预防性针灸在过敏季节前强化卫气`,
                        "solution2": `急性治疗清理鼻腔鼻窦、镇静咳嗽`,
                        "solution3": `强健肺脏和燥湿的植物`,
                        "solution4": `增强免疫力和识别加重因素的建议`
                    }
                },
                "peau": {
                    "title": `皮肤问题`,
                    "philosophy": {
                        "title": `我们的理念：`,
                        "paragraph": `您的皮肤状态反映内在平衡。我们的方法特别适用于复发性或顽固性皮肤问题，从内部作用于根本原因。`
                    },
                    "western": {
                        "title": `西方医学观点：`,
                        "paragraph": `湿疹、牛皮癣或痤疮是炎症性皮肤病，常受遗传、免疫系统、激素或环境影响。`
                    },
                    "chinese": {
                        "title": `传统中医观点：`,
                        "paragraph": `皮肤与肺和大肠相连。渗液湿疹提示湿热。干燥鳞屑牛皮癣可能指示血燥。痤疮常与肺胃热有关。`
                    },
                    "qingning": {
                        "title": `我们的青宁健康方法：`,
                        "solution1": `净化针灸清除热邪凉血`,
                        "solution2": `植物煎剂排水湿、解毒和滋养皮肤`,
                        "solution3": `饮食调整避免产热或湿食物`,
                        "solution4": `整体方法包括压力管理，主要加重因素`
                    }
                },
                "oncologique": {
                    "title": `肿瘤支持`,
                    "philosophy": {
                        "title": `我们的理念：`,
                        "paragraph": `我们提供关怀和个性化支持以更好度过疾病和治疗考验。我们的目标是改善您的生活质量和支持活力，与医疗随访完美互补。`
                    },
                    "western": {
                        "title": `西方医学观点：`,
                        "paragraph": `如化疗和放疗等治疗，虽必要，也损伤健康细胞，导致疲劳、恶心、免疫力下降...`
                    },
                    "chinese": {
                        "title": `传统中医观点：`,
                        "paragraph": `疾病及其治疗深度耗竭气血，损伤肾精气。它们也可产生中医所称的"毒素"。`
                    },
                    "qingning": {
                        "title": `我们的青宁健康方法：`,
                        "solution1": `温和针灸减轻恶心、疲劳和某些疼痛`,
                        "solution2": `补益安全草药疗法支持血细胞生产和强化免疫`,
                        "solution3": `情感支持帮助度过困难时期`,
                        "solution4": `与您的肿瘤医生紧密合作实现完美整合方法`
                    }
                },
                "masculine": {
                    "title": `男性健康与活力`,
                    "philosophy": {
                        "title": `我们的理念：`,
                        "paragraph": `我们以谨慎和真正专业知识处理活力、表现和生育问题。我们的整体方法考虑男性的完整性，以获得恢复信心和福祉的结果。`
                    },
                    "western": {
                        "title": `西方医学观点：`,
                        "paragraph": `勃起障碍或性欲下降可与血管、激素（低睾酮）、神经或心理因素（压力、焦虑）相关。`
                    },
                    "chinese": {
                        "title": `传统中医观点：`,
                        "paragraph": `男性活力受肾气主宰，是精（生命精华）的源泉。肝气郁滞，常因压力，也可扰乱勃起功能。`
                    },
                    "qingning": {
                        "title": `我们的青宁健康方法：`,
                        "solution1": `补益针灸强化肾气和改善循环`,
                        "solution2": `壮阳补益植物增加活力和改善精子质量`,
                        "solution3": `压力和疲劳管理，被低估的关键因素`,
                        "solution4": `生活方式建议实现长期最佳男性健康`
                    }
                }               
            }
        },

        /** ===== PRICING PAGE ===== */
        'tarifs': {
            'section1': {
                'title': '投资您的健康福祉',
                'paragraph': '健康是最美的旅程。我们在每一步陪伴您。',
                'badge': '大多数保险计划可报销'
            },
            'section2': {
                'title': '大多数保险计划可报销',
                'paragraph': '传统中医得到大多数补充保险计划的报销。请在首次咨询前向您的保险公司核实条件。'
            },
            'section3': {
                'seance1': {
                    'icone': '推荐',
                    'title': '首次疗程 - 初步诊断',
                    'prix': '170瑞士法郎',
                    'duree': '时长：60-75分钟',
                    'etape1': '根据中医原则的完整能量评估',
                    'etape2': '深入对话建立您的健康史',
                    'etape3': '适应您需求的个性化治疗计划',
                    'etape4': '关于您能量平衡的详细解释',
                    'booker': '预约首次疗程'
                },
                'seance2': {
                    'icone': '全面护理',
                    'title': '后续疗程 - 治疗',
                    'prix': '150瑞士法郎',
                    'duree': '时长：45-60分钟',
                    'etape1': '根据您能量状态的技术组合',
                    'etape2': '针灸、推拿、拔罐或艾灸',
                    'etape3': '个性化营养和生活方式建议',
                    'etape4': '适应您健康目标的方法',
                    'booker': '继续我的治疗'
                }
            },
            'section4': {
                'title': '您的平衡之旅',
                'paragraph': '结构化支持实现持久效果',
                'diagnosticTitle': '诊断',
                'diagnosticParagraph': '完整能量评估和理解您的需求',
                'traitementTitle': '治疗',
                'traitementParagraph': '10至20次疗程实现深度重新平衡',
                'maintienTitle': '维护',
                'maintienParagraph': '维护疗程保持您的平衡',
            },
            'section5': {
                'title': '准备好重新发现您的自然平衡吗？',
                'paragraph': '加入众多已通过我们整体方法改变健康的患者行列。',
                'appeler': '致电我们',
                'ecrire': '写信给我们'
            }
        },

        /** ===== BLOG PAGE ===== */
        'blog': {
            'section1': {
                'title': '青宁健康博客',
                'paragraph': '探索中医秘密，拥抱健康光彩',
                'lireArtComplet': `阅读完整文章`,
            },
            'section2': {
                'title': '最新文章',
                'paragraph': '日常健康的实用建议',
                'winter': {
                    'title': `冬季增强能量`,
                    'time': `5分钟`,
                    'paragraph': `想象您的身体如冬季冰封的湖泊：表面静止，深处生命悄然延续...`,
                    'bold1': `温热饮食`,
                    'text1': ` - 炖汤和根茎蔬菜`,
                    'bold2': `优质休息`,
                    'text2': ` - 午夜前每分钟睡眠都珍贵`
                },
                'qi': {
                    'title': `气：流动的生命能量`,
                    'time': `4分钟`,
                    'paragraph': `气虽无形，但您每天早晨都能感受：让您起床、微笑、呼吸的能量...`,
                    'bold1': `气的作用`,
                    'text1': ` - 如园丁滋养器官`,
                    'bold2': `失衡表现`,
                    'text2': ` - 疲劳、紧张、消化问题`
                },
                'season': {
                    'title': `中医四季养生`,
                    'time': `6分钟`,
                    'paragraph': `人如自然缩影。季节不仅是日历标记...`,
                    'bold1': `春季`,
                    'text1': ` - 肝/木 - 创造力`,
                    'bold2': `夏季`,
                    'text2': ` - 心/火 - 激情`
                },
                'stress': {
                    'title': `压力与情绪`,
                    'time': `5分钟`,
                    'paragraph': `您知道情绪有专属器官吗？在中医中，怒、喜、思、悲、恐不仅是感受...`,
                    'bold1': `怒`,
                    'text1': ` - 肝`,
                    'bold2': `悲`,
                    'text2': ` - 肺`
                },
                'nutrition': {
                    'title': `中医营养`,
                    'time': `4分钟`,
                    'paragraph': `您的脾胃如生命能量的引擎。高效消化是所有活力的基础...`,
                    'bold1': `温热食物`,
                    'text1': ` - 促进消化`,
                    'bold2': `规律时间`,
                    'text2': ` - 尊重生物钟`
                }
            },
            'modal': {
                'winter': {
                    'title': `冬季增强能量：5个中医建议`,
                    'paragraph': `想象您的身体如冬季冰封的湖泊：表面静止，深处生命悄然延续。冬季是收藏、休息和为春季能量准备的季节。`,
                    'advice1': {
                        'title': `建议1：采用温热饮食`,
                        'text': `将胃想象为小火：为正常燃烧，优选炖汤、根茎蔬菜和豆类。冰冷生食会熄灭这团火。`
                    },
                    'advice2': {
                        'title': `建议2：优质休息睡眠`,
                        'text': `冬季自然早眠，您也应如此。关闭屏幕，放慢动作，让身体再生。午夜前每分钟睡眠都是肾精的宝贵能量。`
                    },
                    'advice3': {
                        'title': `建议3：保护肾和腰部`,
                        'text': `您的腰部是能量保险箱。围巾、保暖背心或热水袋都能改变您的日常生活。`
                    },
                    'advice4': {
                        'title': `建议4：练习气功或冥想`,
                        'text': `几个温和动作或意识呼吸如轻风循环冰下湖水。让能量自然流动不强迫。`
                    },
                    'advice5': {
                        'title': `建议5：深呼吸与压力管理`,
                        'text': `呼吸如吸入冬日阳光温暖。吸气力量，呼气紧张。即使几分钟也足以唤醒您的气。`
                    },
                    'footer': {
                        'text': `冬季是隐藏宝藏：现在照顾能量，为灿烂春季做准备！`,
                        'button': `发现我们的冬季气功课程`
                    }
                },
                'qi': {
                    'title': `气：流动的生命能量`,
                    'paragraph': `气虽无形，但您每天早晨都能感受：让您起床、微笑、呼吸的能量。这是激活器官、心灵和情感的生机。`,
                    'role': {
                        'title': `气的作用`,
                        'text': `想象园丁每日浇灌植物：气滋养器官，增强自然防御并平衡情绪。当自由循环时，您状态极佳。`
                    },
                    'desequilibre': {
                        'title': `失衡表现`,
                        'text': `疲劳、紧张、消化问题或情绪不稳...这些都是生命能量失衡的信号。倾听它如风暴前调整船帆。`
                    },
                    'comment': {
                        'title': `如何促进气循环`,
                        'text': `深呼吸、练习气功、让针灸刺激穴位，或调整饮食。每个简单动作都成为释放和谐能量的呼吸。`
                    },
                    'footer': {
                        'text': `气不仅是概念：它是整体健康、鲜活身体和清晰心灵的关键。`,
                        'button': `了解更多能量治疗`
                    }
                },
                'season': {
                    'title': `中医四季养生 - 与自然和谐共处`,
                    'paragraph': `人如自然缩影。季节不仅是日历标记：它们调节我们能量和健康。与之和谐共处是与世界共舞而非抗争。`,
                    'fiveSeasons': {
                        "title": "五季及其对应关系",
                        'spring': {
                            'bold': `春季（肝/木）`,
                            'text': `：世界苏醒，萌芽生长，您的创造力也是。`
                        },
                        'summer': {
                            'bold': `夏季（心/火）`,
                            'text': `：万物扩展，能量在关系和激情中爆发。`
                        },
                        'indianSummer': {
                            'bold': `长夏（脾/土）`,
                            'text': `：温和过渡，消化和内在平衡。`
                        },
                        'automn': {
                            'bold': `秋季（肺/金）`,
                            'text': `：落叶时节邀请内省。`
                        },
                        'winter': {
                            'bold': `冬季（肾/水）`,
                            'text': `：万物暂停、收藏、再生。`
                        }
                    },
                    'principes': {
                        'title': `每季生活原则`,
                        'text': `根据自然节奏调整饮食、活动和情绪：春日散步、秋夜冥想、冬日炖菜...每季都有支持您气的密码。`
                    },
                    'footer': {
                        'text': `顺季而行意味全年健康并与自然世界和谐共处。`,
                        'button': `发现我们的季节建议`
                    }
                },
                'stress': {
                    'title': `压力与情绪 - 身心平衡`,
                    'paragraph': `您知道情绪有专属器官吗？在中医中，怒、喜、思、悲、恐不仅是感受：它们是身体的信息。`,
                    'emotion': {
                        'title': `情绪及其相关脏腑`,
                        'colere': {
                            'bold': `怒`,
                            'text': ` - 肝`
                        },
                        'joie': {
                            'bold': `喜`,
                            'text': ` - 心`
                        },
                        'soucis': {
                            'bold': `思`,
                            'text': ` - 脾`
                        },
                        'tristesse': {
                            'bold': `悲`,
                            'text': ` - 肺`
                        },
                        'peur': {
                            'bold': `恐`,
                            'text': ` - 肾`
                        }
                    },
                    'impact': {
                        'title': `压力影响`,
                        'text': `压力阻滞气，扰乱睡眠和消化。如塞子阻止溪水循环：一切变得停滞寒冷。`
                    },
                    'techniques': {
                        'title': `平衡技巧`,
                        'text': `深呼吸、练习冥想、让针灸刺激能量、使用舒缓植物。每个动作恢复气循环并安抚情绪。`
                    },
                    'footer': {
                        'text': `倾听情绪意味理解身体预防疾病。每个意识呼吸都是迈向内在平衡的一步。`,
                        'button': `预约能量放松疗程`
                    }
                },
                'nutrition': {
                    'title': `中医营养 - 5个优化消化习惯`,
                    'paragraph': `您的脾胃如生命能量的引擎。高效消化是所有活力的基础：想象您的气如源自腹部的河流。`,
                    'habit1': {
                        'bold': `习惯1：优选温热熟食`,
                        'text': `熟食促进消化避免可能减慢气的内湿。冬日热汤如能量的阳光。`
                    },
                    'habit2': {
                        'bold': `习惯2：规律时间进食`,
                        'text': `尊重生物钟。适时用餐如加满油箱滋养您的气。`
                    },
                    'habit3': {
                        'bold': `习惯3：细嚼慢咽正念饮食`,
                        'text': `品味每口、吞咽前呼吸、限制压力...这是对内能量的温柔按摩。`
                    },
                    'habit4': {
                        'bold': `习惯4：避免过量糖和加工食品`,
                        'text': `这些食物扰乱脾和气生产。优选天然时令食物支持活力。`
                    },
                    'habit5': {
                        'bold': `习惯5：选择时令食物`,
                        'text': `与自然和谐的能量是可持续能量。冬季宜汤和根菜，夏季多汁清爽水果。`
                    },
                    'footer': {
                        'text': `优化消化意味自由流动的气河时刻滋养您。`,
                        'button': `下载我们的时令食谱指南`
                    }
                }
            }
        },

        /** ===== FAQ PAGE ===== */
        'faq': {
            'section1': {
                'title': `您的问题，我们的答案`,
                'paragraph': `关于中医和您的健康，您一直想知道的一切`
            },
            'section2': {
                'title': `常见问题`,
                'paragraph': `您最常见问题的答案`,
                'question1': {
                    'ask': `一次疗程持续多长时间？`,
                    'respond': `平均60分钟，包括：`,
                    'li1': `个性化咨询，`,
                    'li2': `能量诊断，`,
                    'li3': `和治疗。`
                },
                'question2': {
                    'ask': `针灸会痛吗？`,
                    'respond': `不会。使用的针非常细，插入时最多会引起轻微感觉，类似于蚊子叮咬。我们始终优先考虑温和舒适的刺激，适应您的敏感度。`
                },
                'question3': {
                    'ask': `需要多少次疗程？`,
                    'respond1': `这取决于问题的类型和存在的时间长短。`,
                    'respond2': `一般来说，近期问题可以在几次疗程中改善，有时从第一次就开始见效。较旧或慢性问题通常需要更长的随访。`,
                    'respond3': `几周的周期可能有用，然后每月一次的疗程有助于保持平衡并预防复发。`
                },
                'question4': {
                    'ask': `为什么选择针灸？`,
                    'respond': `针灸深入作用于能量阻塞，促进能量循环，帮助身体恢复自然平衡。它可以补充其他方法（物理治疗、整骨疗法、按摩）以优化结果。`
                },
                'question5': {
                    'ask': `采取了哪些卫生措施？`,
                    'respond': `所有针都是无菌且一次性使用的。`
                },
                'question6': {
                    'ask': `从几岁可以接受治疗？`,
                    'respond': `针灸可以从儿童时期开始实践。为了最佳舒适度，我们通常建议等到4-5岁，除非有特殊指示并得到家长同意。`
                },
                'question7': {
                    'ask': `保险会报销吗？`,
                    'respond': `在瑞士，许多补充保险会报销针灸疗程的全部或部分费用。每位患者都被邀请直接向其健康保险公司核实报销详情。`
                }
            },
            'section3': {
                'title': `有具体问题？`,
                'paragraph': `我们在此为您亲自解答`,
                'button1': `致电我们`,
                'button2': `写信给我们`
            }
        },

        /** ===== 联系页面 ===== */
        'contact': {
            'section1': {
                'title': `您的平衡之路从这里开始`,
                'paragraph': `预约个性化中医咨询`
            },
            'section2': {
                'cardContact': {
                    'title': `日内瓦清宁健康`,
                    'paragraph': `在沙泰莱恩和韦尔尼耶附近重获平衡与宁静`,
                    'center': `我们的中心`,
                    'spaces': `Spaces 4楼, Casa Bamba广场1号`,
                    'etang': `日内瓦池塘区`,
                    'phone': `电话`,
                    'email': `邮箱`,
                    'rdv': `在线预约`,
                    'reserve': `通过Onedoc简单安全地预订`
                },
                'horaire': {
                    'title': `营业时间`,
                    'paragraph': `适合您日程的时间段`,
                    'week': `周一 - 周五`,
                    'saturday': `周六`,
                    'sunday': `周日`,
                    'close': `休息`,
                    'urgent': `需要紧急预约？`,
                    'call': `直接致电我们，我们将尽力为您安排。`
                }
            },
            'section3': {
                'title': `前往日内瓦清宁健康`,
                'paragraph': `我们的中心从日内瓦各地都很容易到达`,
                'bus': {
                    'title': `公共交通`,
                    'bold1': `电车18或14路`,
                    'text1': ` - Avanchet-Étang站（步行3分钟）`,
                    'bold2': `巴士28路`,
                    'text2': ` - Vernier, Étang Place站（步行2-3分钟）`
                },
                'voiture': {
                    'title': `自驾`,
                    'text1': `高速公路出口 `,
                    'bold1': `日内瓦-韦尔尼耶`,
                    'bold2': `公共停车场`,
                    'text2': ` 附近有`
                },
                'velo': {
                    'title': `步行或自行车`,
                    'text1': `可从 `,
                    'bold1': `沙泰莱恩和韦尔尼耶`,
                    'text2': `到达，适合 `,
                    'bold2': `附近居民`
                }
            },
            'section4': {
                'title': `准备好重获平衡了吗？`,
                'paragraph': `今天预约您的咨询，迈出通往最佳健康的第一步`,
                'button1': `预约咨询`,
                'button2': `致电我们`,
                'span': `保证24小时内快速回复`
            }
        }
    }
};

