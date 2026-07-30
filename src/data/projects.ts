export type ContentBlock =
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "image";
      src: string;
      caption?: string;
    }
  | {
      type: "video";
      src: string;
      caption?: string;
    };

export type Footnote = {
  number: number;
  text: string;
};

export type Project = {
  id: number;
  slug?: string;
  title: string;
  client?: string;
  director?: string;
  year: number;
  videos?: string[];
  images?: string[];
  description?: string;
  descriptionFr?: string;
  category?: string;
  content?: ContentBlock[];
  contentFr?: ContentBlock[];
  sections?: { title: string; content: ContentBlock[] }[];
  sectionsFr?: { title: string; content: ContentBlock[] }[];
  footnotes?: Footnote[];
  footnotesFr?: Footnote[];
  screenings?: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "especes-pionnieres",
    title: "Espèces Pionnières",
    director: "Jack Farman",
    year: 2024,
    videos: [
      "/videos/Part_I_(faire_oeuvre_faire_ecosysteme).mp4",
      "/videos/Part_II_(exposome).mp4",
      "/videos/Part_III_(eaux_et_pays).mp4",
    ],
    images: [
      "/images/Pioneer_Species_Part_I_-_Image_A.webp",
      "/images/Pioneer_Species_Part_I_-_Image_B.webp",
      "/images/Pioneer_Species_Part_I_-_Image_C.webp",
      "/images/Pioneer_Species_Part_II_-_Image_A.webp",
      "/images/Pioneer_Species_Part_II_-_Image_B.webp",
      "/images/Pioneer_Species_Part_II_-_Image_C.webp",
      "/images/Pioneer_Species_Part_II_-_Image_D.webp",
      "/images/Pioneer_Species_Part_III_-_Image_A.webp",
      "/images/Pioneer_Species_Part_III_-_Image_B.webp",
    ],
    description:
      "A three-part film series exploring regeneration, care, and more-than-human relations across the outskirts of Paris and a sown forest in Vendée.",
    category: "Film Practice",
    sections: [
      {
        title: "Part I",
        content: [
          {
            type: "paragraph",
            text: "Pioneer Species is a triptych of films set across the outskirts of Paris and a sown forest in Vendée, following communities as they engage with plants, soil, and water under environmental constraint. Moving between a future metro line, a forest, an urban farm, and the buried traces of a river, the films follow how care takes shape through the relations between species and territory, and how those relations can themselves generate new forms of attention, collective action, and connection between humans and the more-than-human world.",
          },
          {
            type: "paragraph",
            text: "Pioneer species are what makes life possible again in damaged ground. Ecologically, they are the first organisms to colonize barren or disturbed land, and are often mobilized deliberately in regenerative projects¹. In transforming the conditions of a place, they become figures of alterity, opening it to forms of life it could no longer sustain. In cities, where soil and plant life have long been segmented and sealed off, they suggest what regeneration might still look like.",
          },
          {
            type: "paragraph",
            text: "In Nanterre, where a new metro line for the Grand Paris is being built, inhabitants are imagining a neighborhood where they can breathe and coexist with other human and non-human life. A hundred residents have each taken on the care of a pioneer species tree, a Paulownia tomentosa, to be planted at the future metro stations once the line opens.",
          },
          {
            type: "paragraph",
            text: "Their urgency is for future generations: how can a neighborhood build resilience, and how can care and life take root when urban living tends to fragment relations, between neighbors and between humans and the world around them?",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_I_-_Image_A.webp",
            caption:
              "Top: old metro line in Paris and its outskirts, Trame Verte. Extract from Pioneer Species (Part I), Jack Farman, 2024.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_I_-_Image_C.webp",
            caption:
              "Middle: An inhabitant watering the plants in Paris. Extract from Pioneer Species (Part I), Jack Farman, 2024.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_I_-_Image_B.webp",
            caption:
              "Bottom: Humanoid sculpture by Fabrice Hyber in Vendée. Extract from Pioneer Species (Part I), Jack Farman, 2024.",
          },
          {
            type: "paragraph",
            text: "Across this triptych, I trace the analogy between ecological and territorial transformation to reveal a more-than-human ecosystem at work. In trying to grow a forest within their future neighborhood, the inhabitants are learning how plants can take hold in a mineralized urban environment². The process draws out care for these plants, and in turn makes visible new forms of interaction between residents as they shape their surroundings together.",
          },
          {
            type: "paragraph",
            text: "In weekly gatherings at the community garden, inhabitants discuss how plants respond to soil, deposits, and water, and how trees take hold and endure in the urban environment. Larger questions surface: what forms of care does a neighborhood in transformation need? What is an ecosystem in which plants and humans are equally agents of daily life? What is natural, and what is cultural?",
          },
        ],
      },
      {
        title: "Part II",
        content: [
          {
            type: "paragraph",
            text: "Researching the tree-planting initiative around the future metro stations led me to ask a broader question: what role do trees play in an ecosystem? To explore this, I filmed a sown forest in Vendée that has grown over thirty years, offering a counterpoint to the mineralized city, where planted trees have, over time, built the conditions for species to coexist. The forest is not separate from the imagination that conceived it, but an extension of it, and the work in turn bears the traces of that entanglement. Scattered through the trees are large-scale sculptures that act as agents of perception: a wooden humanoid fountain surrounded by different plant species, for instance, makes visible how plants live socially, among themselves. What remains is the mark of a continuous, reciprocal process of shaping between the forest and the hand that sowed it.",
          },
          {
            type: "paragraph",
            text: "Where the first film treated the relations between species and territory as a potential act of creation (for plants in a given soil, for humans building their future neighborhood), the second follows what happens once pioneer species have already begun regenerating life: the ongoing negotiation of that relation, which keeps making new life possible. I set this film a year later, at an urban farm on the outskirts of Paris, in Aubervilliers, called Zone Sensible, where pioneer species have made the soil hospitable to agriculture again.",
          },
          {
            type: "paragraph",
            text: "Here, inhabitants deposit food waste onto a compost platform. Matter decomposes; the relation between species and territory here takes the form of movement: the act of leaving one's home to return waste to the soil, so that it might one day yield food again. Sustaining the cycle means letting go of accumulation.",
          },
          {
            type: "paragraph",
            text: "Bees accompany this same movement, and are essential characters in the film, embodying the relation between life and death, and how the relations between species and territory sustain that cycle. A bee's world is the space where she lays her larvae, who become the next generation of workers gathering nectar and building the hive. She lives only forty-five days, and dies in the accumulation of that labor.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_II_-_Image_A.webp",
            caption:
              "Transporting compost across the Zone Sensible farm, Aubervilliers. Extract from Pioneer Species (Part II), Jack Farman, 2025.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_II_-_Image_B.webp",
            caption:
              "Food waste deposit at the Zone Sensible farm, Aubervilliers. Extract from Pioneer Species (Part II), Jack Farman, 2025.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_II_-_Image_C.webp",
            caption:
              "Compost maturing at the Zone Sensible farm, Aubervilliers. Extract from Pioneer Species (Part II), Jack Farman, 2025.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_II_-_Image_D.webp",
            caption:
              "Bee hive at the Zone Sensible farm, Aubervilliers. Extract from Pioneer Species (Part II), Jack Farman, 2025.",
          },
        ],
      },
      {
        title: "Part III",
        content: [
          {
            type: "paragraph",
            text: "In the third and final film, I look at the relations between species and territory as a form of commemoration. On the outskirts of Paris, in Saint-Denis, the river La Vieille Mer was buried in the twentieth century to make way for construction and mobility; today there are plans to reopen it. For this fieldwork, I take part in collective gatherings organized around a map of the territory, bringing together local inhabitants of Saint-Denis, many of whom have forgotten the river ever existed, save for a few elders. Larger questions surface: what role does water play in sustaining a territory, and why were these polluted rivers buried in the first place, if not to conceal the toxicity beneath? The gatherings imagine a sponge city, where soil retains water instead of losing it to drains and sewers. After this amnesia, the urgency becomes how to commemorate water, given its foundational role in the creation of life. As inhabitants search for the river and start to understand where rainwater is held or channeled, they arrive at the same need: to make it visible again.",
          },
          {
            type: "paragraph",
            text: "This film also turns to other forms of water management, as how forests and farms retain and circulate water has become an urgent question in its own right⁴. Here too, it is a question of making water visible, and of restoring an awareness of the role it plays in sustaining life. Commemoration matters because it projects water management into the longue durée⁵, a way of remembering built to last rather than to fade.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_III_-_Image_B.webp",
            caption:
              "Top: Mapping the Doulaye river circulation into the forest with Fabrice Hyber. Extract from Pioneer Species (Part III), Jack Farman, 2025.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_III_-_Image_A.webp",
            caption:
              "Bottom: Water distribution in the Doulaye river in Vendée. Extract from Pioneer Species (Part III), Jack Farman, 2026.",
          },
        ],
      },
    ],
    footnotes: [
      {
        number: 1,
        text: "Gilles Clément, Manifeste du Tiers paysage (Paris: Sens & Tonka, 2004). Clément identifies marginal and disturbed territories as refuges for biodiversity, where pioneer species play a central role in spontaneous ecological regeneration.",
      },
      {
        number: 2,
        text: "A mineralized urban environment refers to surfaces dominated by impermeable materials (concrete, asphalt, stone) that suppress soil life, prevent water infiltration, and interrupt ecological cycles. The term designates the condition of most contemporary urban ground, where the living substrate has been sealed off or destroyed.",
      },
      {
        number: 3,
        text: "Montage-at-a-distance is a film editing technique developed by Armenian filmmaker Artavazd Pelechian, in which meaning is generated not through the direct juxtaposition of shots but through their separation and repetition across the film creating resonance and tension between images that never appear side by side.",
      },
      {
        number: 4,
        text: "The concept of the sponge city, developed by landscape architect Kongjian Yu, proposes that urban environments be redesigned to absorb, retain, and naturally filter water, prioritizing green infrastructure over conventional drainage systems.",
      },
      {
        number: 5,
        text: "Longue durée is a concept developed by the French historian Fernand Braudel and the Annales School, describing the study of history over the long term: structural rhythms unfolding across centuries rather than through singular events.",
      },
    ],
    sectionsFr: [
      {
        title: "Partie I",
        content: [
          {
            type: "paragraph",
            text: "Espèces Pionnières est un triptyque de films tourné en périphérie parisienne et dans une forêt semée en Vendée, suivant des communautés engagées avec les plantes, le sol et l'eau, sous contrainte environnementale. D'une future ligne de métro à une forêt, d'une ferme urbaine aux traces enfouies d'une rivière, les films observent comment le soin se façonne à travers les relations entre espèces et le territoire, et comment ces relations peuvent elles-mêmes faire naître de nouvelles formes d'attention, d'action collective et de lien entre l'humain et le vivant.",
          },
          {
            type: "paragraph",
            text: "Sur un sol abîmé, les espèces pionnières rendent la vie de nouveau possible. Ce sont, écologiquement, les premiers organismes à coloniser une terre stérile ou perturbée, et on les mobilise souvent, délibérément, dans des projets de régénération¹. En transformant les conditions d'un lieu, elles en deviennent les figures d'altérité, l'ouvrant à des formes de vie qu'il ne pouvait plus accueillir. En ville, où le sol et le végétal ont longtemps été fragmentés et scellés, elles indiquent ce à quoi la régénération pourrait encore ressembler.",
          },
          {
            type: "paragraph",
            text: "À Nanterre, où se construit une nouvelle ligne de métro du Grand Paris, les habitants imaginent un quartier où respirer et cohabiter avec d'autres formes de vie, humaines et non-humaines. Une centaine d'entre eux se sont chacun engagés à prendre soin d'un arbre pionnier, un Paulownia tomentosa, destiné à être planté aux abords des futures stations.",
          },
          {
            type: "paragraph",
            text: "Leur urgence se joue pour les générations à venir : comment un quartier peut-il se construire une résilience, et comment le soin et la vie peuvent-ils s'enraciner quand la vie urbaine tend à fragmenter les liens, entre voisins, entre l'humain et le monde qui l'entoure ?",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_I_-_Image_A.webp",
            caption:
              "En haut : ancienne ligne de métro à Paris et sa banlieue, Trame Verte. Extrait d'Espèces Pionnières (Partie I), Jack Farman, 2024.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_I_-_Image_C.webp",
            caption:
              "Au milieu : une habitante arrosant les plantes à Paris. Extrait d'Espèces Pionnières (Partie I), Jack Farman, 2024.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_I_-_Image_B.webp",
            caption:
              "En bas : sculpture humanoïde de Fabrice Hyber en Vendée. Extrait d'Espèces Pionnières (Partie I), Jack Farman, 2024.",
          },
          {
            type: "paragraph",
            text: "À travers ce triptyque, je poursuis l'analogie entre transformation écologique et transformation territoriale, pour révéler un écosystème plus-qu'humain à l'œuvre. En cherchant à faire pousser une forêt dans leur futur quartier, les habitants apprennent comment le végétal peut s'implanter en milieu urbain minéralisé². Ce processus fait naître un soin pour ces plantes, et rend du même coup visibles de nouvelles formes d'interaction entre résidents, à mesure qu'ils façonnent ensemble leur environnement.",
          },
          {
            type: "paragraph",
            text: "Lors de rassemblements hebdomadaires au jardin communautaire, les habitants échangent sur la réaction des plantes au sol, aux apports, à l'eau, mais aussi sur la façon dont les arbres s'implantent et persistent en ville. Des questions plus vastes surgissent alors : de quel soin un quartier en transformation a-t-il besoin ? Qu'est-ce qu'un écosystème où plantes et humains sont également agents du quotidien ? Qu'est-ce qui relève du naturel, qu'est-ce qui relève du culturel ?",
          },
        ],
      },
      {
        title: "Partie II",
        content: [
          {
            type: "paragraph",
            text: "En enquêtant sur l'initiative de plantation autour des futures stations de métro, une question plus large s'est imposée à moi : quel rôle les arbres jouent-ils dans un écosystème ? Pour l'explorer, j'ai filmé une forêt semée en Vendée il y a trente ans, elle offre un contrepoint à la ville minéralisée, où les arbres semés ont, avec le temps, créé les conditions d'une coexistence entre espèces. La forêt n'est pas séparée de l'imaginaire qui l'a conçue, mais en est le prolongement, et l'œuvre porte à son tour la trace de cet enchevêtrement. Des sculptures monumentales y sont disséminées, faisant office d'agents de perception : une fontaine humanoïde en bois, entourée d'espèces végétales variées, rend par exemple visible la vie sociale des plantes entre elles. Ce qui demeure, ce sont les marques d'un processus continu de façonnage réciproque entre la forêt et la main qui l'a semée.",
          },
          {
            type: "paragraph",
            text: "Là où le premier film envisageait les relations entre espèces et le territoire comme un acte de création possible (pour les plantes dans un sol donné, pour les habitants bâtissant leur futur quartier), le second observe ce qui se joue une fois que les espèces pionnières ont déjà entamé la régénération : la négociation continue de cette relation, qui rend possible une vie toujours nouvelle. J'ai situé ce film un an plus tard, dans une ferme urbaine de la périphérie parisienne, à Aubervilliers, nommée Zone Sensible, où les espèces pionnières ont rendu le sol de nouveau propice à l'agriculture.",
          },
          {
            type: "paragraph",
            text: "Ici, les habitants déposent leurs déchets alimentaires sur une plateforme de compostage. La matière se décompose ; la relation entre espèces et le territoire prend ici la forme d'un mouvement : quitter son domicile pour rendre ses déchets à la terre, afin qu'elle produise un jour à nouveau de la nourriture. Maintenir ce cycle suppose de renoncer à l'accumulation.",
          },
          {
            type: "paragraph",
            text: "Les abeilles accompagnent ce même mouvement et sont des figures essentielles du film : elles incarnent la relation entre la vie et la mort, et la façon dont les relations entre espèces et le territoire entretiennent ce cycle. Le monde de l'abeille prend forme dans l'espace où elle pond ses larves, qui deviendront à leur tour les ouvrières butinant le nectar et bâtissant la ruche. Elle ne vit que quarante-cinq jours, et meurt dans cette accumulation.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_II_-_Image_A.webp",
            caption:
              "Transport de compost à la ferme Zone Sensible, Aubervilliers. Extrait d'Espèces Pionnières (Partie II), Jack Farman, 2025.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_II_-_Image_B.webp",
            caption:
              "Dépôt de déchets alimentaires à la ferme Zone Sensible, Aubervilliers. Extrait d'Espèces Pionnières (Partie II), Jack Farman, 2025.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_II_-_Image_C.webp",
            caption:
              "Compost en maturation à la ferme Zone Sensible, Aubervilliers. Extrait d'Espèces Pionnières (Partie II), Jack Farman, 2025.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_II_-_Image_D.webp",
            caption:
              "Ruche à la ferme Zone Sensible, Aubervilliers. Extrait d'Espèces Pionnières (Partie II), Jack Farman, 2025.",
          },
        ],
      },
      {
        title: "Partie III",
        content: [
          {
            type: "paragraph",
            text: "Dans ce troisième et dernier film, j'envisage les relations entre espèces et le territoire comme une forme de commémoration. En périphérie de Paris, à Saint-Denis, la rivière la Vieille Mer a été enfouie au XXe siècle pour laisser place à la construction et à la circulation ; sa réouverture est aujourd'hui à l'étude. Pour ce travail de terrain, je participe à des rassemblements organisés autour d'une carte du territoire, réunissant des habitants de Saint-Denis, dont beaucoup ont oublié jusqu'à l'existence de la rivière, hormis quelques anciens. Des questions plus vastes surgissent : quel rôle joue l'eau dans la vie d'un territoire, et pourquoi ces rivières polluées ont-elles été enfouies, sinon pour en dissimuler la toxicité ? Les rassemblements imaginent une ville éponge, où le sol retiendrait l'eau plutôt que de la perdre dans les égouts. Après cette amnésie, l'urgence devient : comment commémorer l'eau, quand son rôle dans la création de la vie est si fondamental ? À mesure que les habitants recherchent la rivière et comprennent où l'eau de pluie est retenue ou canalisée, ils en arrivent à la même nécessité : la rendre de nouveau visible.",
          },
          {
            type: "paragraph",
            text: "Ce film se tourne aussi vers d'autres formes de gestion de l'eau, tant la façon dont les forêts et les fermes la retiennent et la font circuler est devenue, en elle-même, une question urgente⁴. Ici aussi, il est question de rendre l'eau visible, et de restaurer la conscience du rôle qu'elle joue dans le maintien de la vie. La commémoration importe parce qu'elle inscrit la gestion de l'eau dans la longue durée⁵, une mémoire construite pour durer plutôt que pour s'effacer.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_III_-_Image_B.webp",
            caption:
              "En haut : cartographie de la circulation de la Doulaye dans la forêt avec Fabrice Hyber. Extrait d'Espèces Pionnières (Partie III), Jack Farman, 2025.",
          },
          {
            type: "image",
            src: "/images/Pioneer_Species_Part_III_-_Image_A.webp",
            caption:
              "En bas : distribution d'eau dans la rivière Doulaye en Vendée. Extrait d'Espèces Pionnières (Partie III), Jack Farman, 2026.",
          },
        ],
      },
    ],
    footnotesFr: [
      {
        number: 1,
        text: "Gilles Clément, Manifeste du Tiers paysage (Paris : Sens & Tonka, 2004). Clément identifie les territoires marginaux et perturbés comme des refuges pour la biodiversité, où les espèces pionnières jouent un rôle central dans la régénération écologique spontanée.",
      },
      {
        number: 2,
        text: "Un environnement urbain minéralisé désigne des surfaces dominées par des matériaux imperméables (béton, asphalte, pierre) qui suppriment la vie du sol, empêchent l'infiltration de l'eau et interrompent les cycles écologiques. Le terme désigne la condition de la plupart des sols urbains contemporains, où le substrat vivant a été scellé ou détruit.",
      },
      {
        number: 3,
        text: "Le montage-à-distance est une technique de montage cinématographique développée par le réalisateur arménien Artavazd Pelechian, dans laquelle le sens est généré non pas par la juxtaposition directe des plans mais par leur séparation et leur répétition à travers le film, créant résonance et tension entre des images qui n'apparaissent jamais côte à côte.",
      },
      {
        number: 4,
        text: "Le concept de ville éponge, développé par le paysagiste Kongjian Yu, propose que les environnements urbains soient repensés pour absorber, retenir et filtrer naturellement l'eau, en donnant la priorité aux infrastructures vertes par rapport aux systèmes de drainage conventionnels.",
      },
      {
        number: 5,
        text: "La longue durée est un concept développé par l'historien français Fernand Braudel et l'École des Annales, désignant l'étude de l'histoire sur de longues échelles de temps lentes : des rythmes structurels qui se déroulent sur des siècles plutôt qu'à travers des événements singuliers.",
      },
    ],
  },
  {
    id: 2,
    slug: "faire-oeuvre-faire-ecosysteme",
    title: "Faire oeuvre, faire écosystème",
    director: "Jack Farman",
    year: 2024,
    videos: ["/videos/Part_I_(faire_oeuvre_faire_ecosysteme).mp4"],
    images: [
      "/images/Pioneer_Species_Part_I_-_Image_A.webp",
      "/images/Pioneer_Species_Part_I_-_Image_B.webp",
      "/images/Pioneer_Species_Part_I_-_Image_C.webp",
    ],
    description:
      "Part 1 of the Espèces Pionnières trilogy, rooted in urban care and the future metro neighborhood of Nanterre.",
    descriptionFr:
      "Volet 1 de la trilogie, ce premier film raconte l'avenir de la végétalisation du quartier de la ligne de métro de Nanterre.",
    screenings: [
      "Centre Pompidou : Hors-Pistes/Hors Champs 2026, Festival Itinérant à la Vallée en Vendée",
      "La Villette : Le Consulat de la Terre, cycle de conférences avec TVK, 2026",
    ],
    category: "Film Practice",
    content: [
      { type: "heading", text: "Faire oeuvre, faire écosystème" },
      {
        type: "paragraph",
        text: "A film about the growth of care around a pioneer species tree in Nanterre, the future metro line, and new relations between neighbors, plants, and soil.",
      },
      {
        type: "video",
        src: "/videos/Part_I_(faire_oeuvre_faire_ecosysteme).mp4",
        caption: "Faire oeuvre, faire écosystème, directed by Jack Farman.",
      },
    ],
    contentFr: [
      { type: "heading", text: "Faire oeuvre, faire écosystème" },
      {
        type: "paragraph",
        text: "Un film sur le soin qui grandit autour d'un arbre pionnier à Nanterre, la future ligne de métro, et les nouvelles relations entre voisins, plantes et sol.",
      },
      {
        type: "video",
        src: "/videos/Part_I_(faire_oeuvre_faire_ecosysteme).mp4",
        caption: "Faire oeuvre, faire écosystème, réalisé par Jack Farman.",
      },
    ],
  },
  {
    id: 3,
    slug: "exposome",
    title: "Exposome",
    director: "Jack Farman",
    year: 2025,
    videos: ["/videos/Part_II_(exposome).mp4"],
    images: [
      "/images/Pioneer_Species_Part_II_-_Image_A.webp",
      "/images/Pioneer_Species_Part_II_-_Image_B.webp",
      "/images/Pioneer_Species_Part_II_-_Image_C.webp",
      "/images/Pioneer_Species_Part_II_-_Image_D.webp",
    ],
    description:
      "Part 2 of the trilogy, following composting, bees, and soil regeneration at Zone Sensible in Aubervilliers.",
    descriptionFr:
      "Volet 2 de la trilogie, cette deuxième partie raconte les cycles de vie et de mort autour du compostage et d'essaimage dans les fermes urbaines franciliennes.",
    screenings: [
      "Centre Pompidou : Hors-Pistes/Hors Champs 2026, Festival Itinérant à la Vallée en Vendée",
      "La Villette : Le Consulat de la Terre, cycle de conférences avec TVK, 2026",
    ],
    category: "Film Practice",
    content: [
      { type: "heading", text: "Espèces Pionnières Part 2" },
      {
        type: "paragraph",
        text: "A film set on an urban farm, following how pioneer species help soil become productive again, through waste, compost, and a living ecosystem.",
      },
      {
        type: "video",
        src: "/videos/Part_II_(exposome).mp4",
        caption: "Espèces Pionnières Part 2, directed by Jack Farman.",
      },
    ],
    contentFr: [
      { type: "heading", text: "Espèces Pionnières Partie 2" },
      {
        type: "paragraph",
        text: "Un film tourné dans une ferme urbaine, qui suit comment les espèces pionnières aident le sol à redevenir fertile, à travers les déchets, le compost et un écosystème vivant.",
      },
      {
        type: "video",
        src: "/videos/Part_II_(exposome).mp4",
        caption: "Espèces Pionnières Partie 2, réalisé par Jack Farman.",
      },
    ],
  },
  {
    id: 4,
    slug: "eaux-et-pays",
    title: "Eaux et pays",
    director: "Jack Farman",
    year: 2026,
    videos: ["/videos/Part_III_(eaux_et_pays).mp4"],
    images: [
      "/images/eaux_et_pays1.webp",
      "/images/Pioneer_Species_Part_III_-_Image_A.webp",
      "/images/Pioneer_Species_Part_III_-_Image_B.webp",
    ],
    description:
      "Part 3 of the trilogy, examining buried waterways, commemoration, and the visibility of water in Saint-Denis and Vendée.",
    descriptionFr:
      "Volet 3 de la trilogie, cette dernière partie enquête et raconte l'enfouissement de la Vieille Mer, sa visibilité et sa commémoration.",
    screenings: [
      // "Centre Pompidou : Hors-Pistes/Hors Champs 2026, Festival Itinérant à la Vallée en Vendée",
      // "La Villette : Le Consulat de la Terre, cycle de conférences avec TVK, 2026",
    ],
    category: "Film Practice",
    content: [
      { type: "heading", text: "Eaux et pays" },
      {
        type: "paragraph",
        text: "A film about the buried river La Vieille Mer, collective mapping in Saint-Denis, memory, and the care of the territory.",
      },
      {
        type: "video",
        src: "/videos/Part_III_(eaux_et_pays).mp4",
        caption: "Eaux et pays, directed by Jack Farman.",
      },
    ],
    contentFr: [
      { type: "heading", text: "Eaux et pays" },
      {
        type: "paragraph",
        text: "Un film réalisé autour de la rivière enfouie La Vieille Mer, la cartographie collective, la mémoire et le soin du territoire.",
      },
      {
        type: "video",
        src: "/videos/Part_III_(eaux_et_pays).mp4",
        caption: "Eaux et pays, réalisé par Jack Farman.",
      },
    ],
  },
];
