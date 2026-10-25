export interface SpaceItem {
  id: string;
  name: string;
  category: 'interior' | 'exterior' | 'comu';
  capacity: string;
  surface: string;
  description: string;
  details: string[];
  imageUrl: string;
  features: string[];
}

export interface AccommodationOption {
  id: string;
  title: string;
  subtitle: string;
  capacity: string;
  bedrooms: string;
  surface: string;
  description: string;
  amenities: string[];
  images: string[];
  idealFor: string;
  isDemoNote: string;
}

export interface CelebrationDetail {
  id: string;
  title: string;
  tagline: string;
  capacity: string;
  recommendedSpaces: string[];
  description: string;
  servicesIncluded: string[];
  curatedAddons: string[];
  imageUrl: string;
}

export interface CorporateProgram {
  id: string;
  title: string;
  target: string;
  capacity: string;
  description: string;
  spacesIncluded: string[];
  equipmentDemo: string[];
  format: string;
  imageUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'reserva' | 'arribada' | 'espais' | 'politiques';
}

// DADES DE DEMO DE MAS DE L'ALZINA (Concept)
export const FINCA_INFO = {
  name: "Mas de l'Alzina",
  descriptor: "Private stays, celebrations & retreats",
  location: "Vall d'Albaida / Interior de València (Ubicació conceptual)",
  hectares: "18 hectàrees d'oliveres centenàries, ametlers i bosc mediterrani",
  restorationYear: "Restauració 2021 — 2023 amb tècniques de calç viva i fusta d'origen responsable",
  roomsTotal: "7 suites independents amb bany complet privat",
  maxSleepingCapacity: "Fins a 16 hostes en estada completa",
  maxEventCapacity: "Fins a 65 persones en exteriors condicionats (festa de dia)",
  noticeDisclaimer: "Projecte conceptual de portfolio per a experiències d'hospitalitat rural. No representa una empresa o establiment obert al públic.",
  demoContact: {
    email: "hola@masdelalzina-demo.test",
    phone: "+34 960 00 00 00 (Demo)",
    hours: "Atenció a sol·licituds: Dilluns a Divendres, 09:00 - 18:00h"
  }
};

export const SPACES: SpaceItem[] = [
  {
    id: "pati-dels-tarongers",
    name: "El Pati dels Tarongers",
    category: "exterior",
    capacity: "Fins a 60 persones (còctel / àpat llarg)",
    surface: "220 m²",
    description: "Pati empedrat d'estil claustral amb brollador central de pedra calcària, ombra natural de parres i arrels d'ametlers.",
    details: [
      "Paviment de fang cuit artesanal i còdols de riu",
      "Il·luminació càlida regulable oculta entre fullatge",
      "Connexió a la cuina d'estiu i accés directe al porxo"
    ],
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    features: ["Ombra natural", "Font de pedra", "Cuina exterior contigua", "Il·luminació de nit"]
  },
  {
    id: "gran-sala-dels-arcs",
    name: "La Sala dels Arcs",
    category: "interior",
    capacity: "Fins a 45 persones en taula única o 30 en format taller",
    surface: "140 m²",
    description: "L'antic celler de la finca, recuperat amb voltes de canó de maó massís, obertures a dos vents i una xemeneia de ferro forjat.",
    details: [
      "Voltes restaurades del segle XVIII",
      "Paviment continu de microciment de to sorra",
      "Aïllament tèrmic passiu i ventilació creuada natural"
    ],
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    features: ["Climatització invisible", "Xemeneia oberta", "Llum natural de matí", "Format modular"]
  },
  {
    id: "porxo-de-solponent",
    name: "Porxo de Solponent & Bassa Natural",
    category: "exterior",
    capacity: "Fins a 35 persones en relax / sopar informal",
    surface: "180 m² coberts + 300 m² prat",
    description: "Estructura lleugera de bigues de fusta recuperada davant l'antiga bassa de reg, transformada en piscina d'aigua salina integrada en el bancal.",
    details: [
      "Vistes panoràmiques cap a la serra i la posta de sol",
      "Hamacas de cotó orgànic i pèrgola de canya autòctona",
      "Integració visual sense elements metàl·lics agressius"
    ],
    imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    features: ["Piscina salina", "Vistes a la serra", "Posta de sol directa", "Pèrgola tradicional"]
  },
  {
    id: "cuina-del-mas",
    name: "La Cuina del Mas & Taula de Fusta",
    category: "comu",
    capacity: "16 comensals en taula corrida de noguera",
    surface: "75 m²",
    description: "Cor neuràlgic de la casa. Dissenyada com a cuina oberta amb taulell de pedra calcària de Buixcarró i llar de foc per cuinar a foc lent.",
    details: [
      "Illa de treball de 4 metres lineals",
      "Forn de llenya tradicional conservat",
      "Equipament professional discret sense trencar l'estètica"
    ],
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    features: ["Forn tradicional", "Taula corrida de roure", "Nevera gran capacitat", "Llar de foc activa"]
  },
  {
    id: "l-era-i-l-olivar",
    name: "L'Era & Olivar Centenari",
    category: "exterior",
    capacity: "Fins a 65 persones en còctel de vespre",
    surface: "650 m² d'espai obert",
    description: "Antiga era de batre circular al capdamunt del bancal superior, envoltada per 40 oliveres d'oli morrut i herbes aromàtiques.",
    details: [
      "Espai ideal per a benvingudes, concerts acústics o ioga matinal",
      "Panoràmica de 360 graus sobre tota la vall",
      "Sòl de terra compactada tradicional respectuosa"
    ],
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    features: ["Vistes 360°", "Vegetació aromàtica", "Brisa constant", "Privacitat total"]
  }
];

export const ACCOMMODATIONS: AccommodationOption[] = [
  {
    id: "reserva-integra",
    title: "Lloguer Íntegre de la Finca",
    subtitle: "Privacitat absoluta per a grups, famílies i retirs",
    capacity: "Fins a 14 - 16 persones",
    bedrooms: "7 suites independents amb bany privat",
    surface: "620 m² interiors + 18 ha de terreny",
    description: "L'ús exclusiu de tots els espais interiors, habitacions, cuina, menjadors, porxos i bassa d'aigua salina. Sense altres hostes ni interferències externes.",
    amenities: [
      "7 suites amb llit king-size o doble convertible",
      "Llençols de lli rentat i tovalloles de cotó orgànic",
      "Climatització ecològica per terra radiant i aerotèrmia",
      "Ús privat de la bassa salina i jardins",
      "Cuina completament equipada per a autogestió o xef privat",
      "Neteja inicial i final de cortesia (estades >3 nits amb repàs)",
      "Aparcament privat ombrejat per a 12 vehicles"
    ],
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    idealFor: "Vacances familiars tranquil·les, aniversaris significatius o retirs de concentració",
    isDemoNote: "Model de preu orientatiu en demo per a pressupostos a mida (mínim 2 o 3 nits segons temporada)."
  },
  {
    id: "suite-l-almassera",
    title: "Suite L'Almàssera (Master Suite)",
    subtitle: "Antic espai de premsa amb terrassa privada a l'olivar",
    capacity: "2 persones",
    bedrooms: "1 llit King de 180x200cm",
    surface: "58 m²",
    description: "Habitació principal situada a l'ala sud, conservant la pedra original de molí com a element arquitectònic escultòric i bany obert amb banyera exempta.",
    amenities: [
      "Banyera exempta de pedra reconstituïda amb vistes a la vall",
      "Dutxa arran de terra amb efecte pluja",
      "Terrassa privada de 24 m² orientada al sud",
      "Zona d'estar amb butaques de fusta de castanyer i escriptori",
      "Cafetera d'extracció lenta i selecció d'infusions locals"
    ],
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
    ],
    idealFor: "Parelles o anfitrions de grup que busquen màxima intimitat",
    isDemoNote: "Disponible preferentment dins del paquet d'ús íntegre o estades individuals en dates seleccionades."
  },
  {
    id: "suites-dels-bancals",
    title: "Suites dels Bancals (1 a 4)",
    subtitle: "Dormitoris dobles amb accés directe al jardí d'aromàtiques",
    capacity: "2 persones cadascuna (fins a 8 persones)",
    bedrooms: "Llit doble convertible a 2 individuals",
    surface: "32 m² cadascuna",
    description: "Habitacions lluminoses en planta baixa amb obertura de fusta de mobila envellida directa a un passadís enjardinat de lavanda i romer.",
    amenities: [
      "Bany privat amb rajoles de ceràmica artesanal de Manises",
      "Llum natural suau i aïllament acústic complet",
      "Armaris encastats d'obra revestits de fusta clara",
      "Sòl de fang tractat amb cera d'abelles natural"
    ],
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
    ],
    idealFor: "Familiars, convidats o membres d'equip de treball",
    isDemoNote: "Totes les habitacions tenen bany privat i accés exterior independent."
  }
];

export const CELEBRATIONS: CelebrationDetail[] = [
  {
    id: "dinars-familia",
    title: "Trobades & Celebracions Familiars",
    tagline: "Taules llargues sota l'ombra de les moreres i converses sense pressa",
    capacity: "D'entre 12 i 50 persones",
    recommendedSpaces: ["El Pati dels Tarongers", "La Sala dels Arcs", "Cuina del Mas"],
    description: "Creiem en les celebracions de ritme lent: un aniversari assenyalat, un retrobament familiar o una benvinguda íntima on el menjar, el vi de la terra i el paisatge conviden a allargar la sobretaula.",
    servicesIncluded: [
      "Exclusivitat de l'espai exterior i sala coberta per al dia acordat",
      "Mobiliari rústic elegant: taules de fusta massissa i cadires de boga",
      "Coordina amb el teu servei de càtering de confiança o recomanacions locals",
      "Equip de so ambiental discret per a música de fons"
    ],
    curatedAddons: [
      "Recomanació de cellers biològics de proximitat",
      "Lloguer de vaixella artesanal de fang i estovalles de lli",
      "Servei de coordinació in situ durant el muntatge"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "enllacos-intims",
    title: "Enllaços Íntims & Bodes en Petit Comitè",
    tagline: "Una cerimònia serena amb les persones veritablement essencials",
    capacity: "Màxim 55 - 60 convidats",
    recommendedSpaces: ["L'Era & Olivar", "El Pati dels Tarongers", "Porxo de Solponent"],
    description: "Allunyats del concepte de gran saló de bodes industrial, a Mas de l'Alzina acollim enllaços basats en l'autenticitat, la llum natural de l'horabaixa i el respecte pel silenci del camp.",
    servicesIncluded: [
      "Cap de setmana complet amb allotjament per a 16 familiars directes",
      "Espai d'era per a la cerimònia simbòlica a l'aire lliure",
      "Assessorament en distribució d'espais i proveïdors sensibles amb l'entorn",
      "Temps folgat de muntatge el dia anterior sense presses"
    ],
    curatedAddons: [
      "Decoració floral basada exclusivament en flora silvestre de temporada",
      "Il·luminació de microfocs i garlandes càlides d'antiga fira",
      "Espai de barra lliure acústica fins a l'hora establerta per normativa acústica rural"
    ],
    imageUrl: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80"
  }
];

export const CORPORATE_PROGRAMS: CorporateProgram[] = [
  {
    id: "retiro-estrategia",
    title: "Retir Estratègic & Comitès de Direcció",
    target: "Consells d'administració, equips fundadors i líders d'àrea",
    capacity: "De 6 a 16 participants",
    format: "Residencial de 2 a 4 dies",
    description: "Desconnectar del soroll operatiu quotidià per debatre decisions de futur, plans estratègics o canvis d'etapa en un entorn que afavoreix la claredat mental.",
    spacesIncluded: ["La Sala dels Arcs (Sala de sessions)", "Porxo de Solponent (Breakouts)", "Totes les 7 suites"],
    equipmentDemo: [
      "Pantalla d'alta definició de 65'' oculta en fusteria",
      "Pissarres blanques mòbils i material de treball en paper reciclat",
      "Connexió Wi-Fi de demo distribuïda a tot el mas",
      "Estació contínua de cafè d'especialitat, te i fruita fresca de l'hort"
    ],
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "jornada-cohesio",
    title: "Jornades de Treball & Cohesió d'Equip",
    target: "Departaments en creixement, equips de producte i disseny",
    capacity: "De 10 a 25 participants",
    format: "Jornada de dia complet (09:00h - 18:30h) o 1 nit",
    description: "Dinàmiques de cocreació combinades amb una cuina compartida o una caminada pel paratge natural per reforçar els vincles humans de l'equip.",
    spacesIncluded: ["El Pati dels Tarongers", "La Cuina del Mas", "Espai exterior de l'Era"],
    equipmentDemo: [
      "Disposició flexible de taules per a sessions en subgrups",
      "Opció de taller de cuina tradicional o tast d'oli propi de la finca",
      "Àrees a l'aire lliure per a converses 'walk and talk'",
      "Alimentació saludable acordada amb cuiners locals"
    ],
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Com funciona el procés de reserva?",
    answer: "Totes les peticions es gestionen mitjançant el nostre formulari de sol·licitud o correu. Com que la finca s'ofereix en exclusiva per a cada grup, revisem manualment la idoneïtat de les dates i les necessitats específiques abans d'emetre una proposta formal amb pressupost personalitzat.",
    category: "reserva"
  },
  {
    question: "És possible llogar habitacions soltes?",
    answer: "Habitualment Mas de l'Alzina es lloga en règim d'exclusivitat íntegra per garantir la privacitat del grup. No obstant això, en dates assenyalades d'entretemps (primavera i tardor) podem habilitar estades individuals d'estil 'Bed & Architecture'. Consulta'ns les teves dates concretes.",
    category: "reserva"
  },
  {
    question: "Quin tipus d'esdeveniments es poden celebrar?",
    answer: "Acollim celebracions d'escala humana: trobades familiars, aniversaris, bodes íntimes i retirs corporatius fins a un màxim recomanat de 60 persones a l'aire lliure. No admetem festes multitudinàries amb música electrònica amplificada d'alta potència ni despedides de solter/a, per tal de respectar l'entorn natural de la vall.",
    category: "espais"
  },
  {
    question: "Com s'arriba a la finca i com és l'accés?",
    answer: "La finca es troba a uns 55 minuts de València ciutat i 1h 10min d'Alacant. L'accés final es fa mitjançant un camí rural asfaltat accessible per a qualsevol vehicle estàndard o minibús de fins a 25 places. Disposem d'aparcament privat a l'entrada.",
    category: "arribada"
  },
  {
    question: "Quin és l'horari de check-in i check-out?",
    answer: "Per a estades privades, el check-in habitual és a partir de les 16:00h i el check-out fins a les 11:30h (ampliable a 'late check-out' els diumenges segons disponibilitat prèvia). Per a jornades d'empresa o celebracions de dia s'acorden horaris especials a mida.",
    category: "politiques"
  },
  {
    question: "Teniu servei de restauració propi?",
    answer: "Oferim esmorzar mediterrani d'arrel local inclòs en la majoria d'estades corporatives i privades. Per a dinars i sopars de grup, col·laborem amb una xarxa seleccionada de cuiners privats que cuinen in situ amb producte de la nostra horta i productors del poble, o bé facilitem l'accés a serveis de càtering externs homologats.",
    category: "espais"
  }
];

