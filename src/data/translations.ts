export type Locale = "en" | "ar";

export interface TranslationDictionary {
  brand: {
    name: string;
    nameNative: string;
    tagline: string;
    subtagline: string;
    city: string;
  };
  nav: {
    concept: string;
    showSalt: string;
    courses: string;
    drinks: string;
    creators: string;
    saltLab: string;
    reviews: string;
    contact: string;
    reservation: string;
    giftVoucher: string;
    maitreD: string;
    openingHours: string;
    addressVal: string;
    phoneVal: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    btnReserve: string;
    btnExplore: string;
    oceanRoom: string;
    saltBar: string;
    atmosphereTitle: string;
    arrivalNotice: string;
    scrollDown: string;
  };
  concept: {
    tag: string;
    title: string;
    titleHighlight: string;
    quote: string;
    p1: string;
    p2: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    labNoteTag: string;
    labNoteQuote: string;
    mantra1: string;
    mantra2: string;
    mantra3: string;
  };
  saltShow: {
    tag: string;
    wePresent: string;
    title: string;
    description1: string;
    description2: string;
    btnReserve: string;
    p1Title: string;
    p1Sub: string;
    p1Desc: string;
    p2Title: string;
    p2Sub: string;
    p2Desc: string;
    p3Title: string;
    p3Sub: string;
    p3Desc: string;
    p4Title: string;
    p4Sub: string;
    p4Desc: string;
  };
  coursesSection: {
    tag: string;
    title: string;
    subtitle: string;
    courseOf: string;
    dialogueTag: string;
    ingredientsTag: string;
    wineTag: string;
    chefSecretBtn: string;
    chefSecretHide: string;
    chefQuote: string;
    items: Array<{
      id: number;
      roman: string;
      title: string;
      theme: string;
      dishName: string;
      description: string;
      continents: string[];
      ingredients: string[];
      saltUsed: string;
      winePairing: string;
      image: string;
    }>;
  };
  drinksSection: {
    tag: string;
    title: string;
    subtitle: string;
    description: string;
    pairedFor: string;
    spectrumTitle: string;
    salinity: string;
    sweetness: string;
    acidity: string;
    depth: string;
    sommelierTag: string;
    sommelierNote: string;
    items: Array<{
      id: number;
      roman: string;
      name: string;
      ingredients: string;
      coursePairing: string;
      story: string;
      image: string;
      flavorProfile: { salinity: number; sweetness: number; acidity: number; depth: number };
    }>;
  };
  creatorsSection: {
    tag: string;
    title: string;
    chefRoleBadge: string;
    chefRoleSmall: string;
    chefName: string;
    chefQuote: string;
    chefBio1: string;
    chefBio2: string;
    chefBadge1: string;
    chefBadge2: string;
    teamTitle: string;
    teamSub: string;
    teamSpecialtyLabel: string;
    teamMembers: Array<{
      name: string;
      role: string;
      origin: string;
      bio: string;
      specialty: string;
      image: string;
    }>;
  };
  saltLabSection: {
    tag: string;
    title: string;
    description: string;
    specimen: string;
    textureLabel: string;
    tasteLabel: string;
    serviceLabel: string;
    btnGiftSalt: string;
    salts: Array<{
      id: number;
      name: string;
      origin: string;
      texture: string;
      flavor: string;
      courseUsed: string;
      history: string;
      image: string;
    }>;
  };
  reviewsSection: {
    tag: string;
    title: string;
    btnShare: string;
    favPrefix: string;
    modalTitle: string;
    modalSub: string;
    nameLabel: string;
    cityLabel: string;
    courseLabel: string;
    cocktailLabel: string;
    commentLabel: string;
    commentPlaceholder: string;
    btnSubmit: string;
    btnSubmitting: string;
    successTitle: string;
    successSub: string;
  };
  invitationSection: {
    badge: string;
    subtitle: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    traditionTitle: string;
    traditionDesc: string;
    btnReserve: string;
    statShowTime: string;
    statDaily: string;
    statHours: string;
    statDays: string;
    statAddress: string;
    statAddressVal: string;
    statPhone: string;
  };
  footer: {
    mosaicTitle: string;
    mosaicSub: string;
    mosaicBtn: string;
    aboutText: string;
    locationHeading: string;
    contactHeading: string;
    rightsReserved: string;
    continentsStrip: string;
    portalBtn: string;
  };
  modalReservation: {
    tag: string;
    title: string;
    subtitle: string;
    dayTimeLabel: string;
    dateLabel: string;
    guestsLabel: string;
    atmosphereLabel: string;
    pairingLabel: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    allergiesLabel: string;
    allergiesPlaceholder: string;
    btnSubmit: string;
    btnSubmitting: string;
    guaranteeNote: string;
    confirmedTag: string;
    confirmedTitle: string;
    confirmedSub: string;
    codeLabel: string;
    guestLabel: string;
    partyLabel: string;
    atmosphereResultLabel: string;
    dateTimeResultLabel: string;
    welcomeArrivalTitle: string;
    welcomeArrivalDesc: string;
    btnCalendar: string;
    btnClose: string;
  };
  modalVoucher: {
    tag: string;
    title: string;
    yourName: string;
    yourEmail: string;
    recipientName: string;
    recipientNote: string;
    btnPurchase: string;
    btnPurchasing: string;
    confirmedTag: string;
    confirmedTitle: string;
    voucherLabel: string;
    recipientLabel: string;
    validityNote: string;
  };
}

export const translations: Record<Locale, TranslationDictionary> = {
  en: {
    brand: {
      name: "Mina Al-Bahr",
      nameNative: "ميناء البحر",
      tagline: "Culinary Odyssey by the sea",
      subtagline: "Gastronomic Laboratory • Nice",
      city: "Promenade du Soleil, Nice",
    },
    nav: {
      concept: "Concept",
      showSalt: "Show Salt",
      courses: "5 Courses",
      drinks: "Drinks",
      creators: "Creators",
      saltLab: "Salt Lab",
      reviews: "Reviews",
      contact: "Contact",
      reservation: "Reservation",
      giftVoucher: "Gift Voucher",
      maitreD: "Maitre d' Portal",
      openingHours: "18:00 - 00:00 (Tue - Sun)",
      addressVal: "Promenade du Soleil, 12 Nice, France",
      phoneVal: "+33 (4) 93 12 34 56",
    },
    hero: {
      badge: "Nice • French Riviera • Gastronomic Laboratory",
      titleLine1: "Culinary Odyssey",
      titleLine2: "by the sea",
      description:
        "Where Egypt, Georgia and the Mediterranean speak the language of fish and salt. A multi-sensory 5-course voyage orchestrated along the sun-drenched Promenade du Soleil.",
      btnReserve: "Reserve a Table",
      btnExplore: "Explore The 5 Courses",
      oceanRoom: "The Ocean Room",
      saltBar: "THE Salt Bar",
      atmosphereTitle: "Atmospheres:",
      arrivalNotice: "Arrival: 15 mins prior for welcome aperitif overlooking the sea",
      scrollDown: "Scroll down",
    },
    concept: {
      tag: "Concept & Philosophy",
      title: "What is",
      titleHighlight: "Mina Al-Bahr?",
      quote:
        "“A gastronomic laboratory where haute cuisine serves as a language of dialogue between continents.”",
      p1: "Here Georgian khinkali acquires the crunch of Canarian chips, and Mediterranean tuna tartare ‘comes to life’ under the smoke of Egyptian spices.",
      p2: "No rigid preliminary menus, but deliberate culinary revelations. This is how we challenge the expected, while preserving the immaculate refinement of every detail.",
      pillar1Title: "Three Continents",
      pillar1Desc: "Egypt, Georgia & the Mediterranean unified through fish and salt.",
      pillar2Title: "Living Fire & Slabs",
      pillar2Desc: "Hot Himalayan crystal slabs and slow terracotta tagines.",
      pillar3Title: "Secret Surprises",
      pillar3Desc: "No spoiled courses. An unfolding story where you are protagonist.",
      labNoteTag: "Laboratory Note",
      labNoteQuote: "“Salt is not a seasoning. It is the geographic memory of the ocean.”",
      mantra1: "Magic of fusion cuisine",
      mantra2: "No preliminary menus",
      mantra3: "Wonderful surprises await you all",
    },
    saltShow: {
      tag: "The Central Performance",
      wePresent: "We present to you",
      title: "Immersive Gastronomic Show",
      description1:
        "5 courses where Egypt, Georgia and the Mediterranean speak the language of fish and salt. From oysters with smoky spices to trout on pink Himalayan salt.",
      description2:
        "Each course is a wave of flavour enhanced by signature wines and cocktails. We don't reveal all our secrets. Reservation a table for a taste of the sea.",
      btnReserve: "Reserve a Table For The Show",
      p1Title: "Stories",
      p1Sub: "Silk Road & Salt Caravans",
      p1Desc: "Stories of the silk road, salt caravans and fishing villages preserved across centuries.",
      p2Title: "ART",
      p2Sub: "Mineral Slabs & Crystals",
      p2Desc: "Serving on glowing salt slabs, decor made of crystals from the Himalayas and the Dead Sea.",
      p3Title: "LEGACY",
      p3Sub: "Ancient Preserved Recipes",
      p3Desc: "Recipes preserved as salt — Georgian adzhika, Egyptian dukkah, and wild Provencal herbs.",
      p4Title: "Taste",
      p4Sub: "The Mineral Palette",
      p4Desc: "Playing with salty accents: marinated olives, fermented cheeses, and sea salt caramel.",
    },
    coursesSection: {
      tag: "Haute Cuisine Odyssey",
      title: "The 5 Courses of Salt",
      subtitle: "A continuum across coastal civilizations",
      courseOf: "Course",
      dialogueTag: "Continental Dialogue",
      ingredientsTag: "Signature Ingredients & Salt",
      wineTag: "Curated Wine Pairing",
      chefSecretBtn: "Read Chef's Secret Notes",
      chefSecretHide: "Hide Chef Story",
      chefQuote:
        "“For this course, the salinity is calibrated to match the natural mineral fat of the fish. We never add salt to mask; we add salt to unlock the hidden memories of the coastline.”",
      items: [
        {
          id: 1,
          roman: "Course I",
          title: "Fresh Breeze",
          theme: "Lightness - Birth of a dialogue",
          dishName: "Tuna with pomegranate and Egyptian dukkah",
          description:
            "Mediterranean tuna marinated in lemon juice, garnished with pomegranate grains and Georgian tkemali sauce.",
          continents: ["Mediterranean", "Egypt", "Georgia"],
          ingredients: ["Bluefin Mediterranean tuna", "Egyptian dukkah spice blend", "Wild pomegranate", "Georgian tkemali"],
          saltUsed: "Siwa Oasis Sun-Dried Salt Flakes",
          winePairing: "Tsinandali Estate White 2021 (Kakheti, Georgia)",
          image: "/images/course-1.webp",
        },
        {
          id: 2,
          roman: "Course II",
          title: "Mystery of the Depths",
          theme: "Mystery - Fiery Palette",
          dishName: "Denis fish in Egyptian tagine with harissa",
          description:
            "Spicy red pepper sauce, cherry tomatoes and olives slow-cooked in traditional terracotta with wild sea denis.",
          continents: ["Egypt", "Mediterranean"],
          ingredients: ["Wild sea denis (dorade)", "House-smoked harissa", "Confit cherry tomatoes", "Kalamata olives"],
          saltUsed: "Smoked Cyprus Black Sea Salt",
          winePairing: "Khvanchkara Amber Qvevri 2020",
          image: "/images/course-2.webp",
        },
        {
          id: 3,
          roman: "Course III",
          title: "The Heat of the Surf",
          theme: "Energy - Synthesis of Elements",
          dishName: "Georgian trout on the vine with smoked aubergine",
          description:
            "Grilled mountain trout wrapped in vine leaves, accompanied by smoky aubergine mousse and wild mint yoghurt, served on a searing salt slab.",
          continents: ["Georgia", "Mediterranean"],
          ingredients: ["Caucasus river trout", "Vine leaves", "Ember-smoked aubergine", "Cultured mint buffalo yoghurt"],
          saltUsed: "Ancient Himalayan Pink Salt Slab (seared at 300°C)",
          winePairing: "Saperavi Reserve 2019 (Mukuzani)",
          image: "/images/course-3.webp",
        },
        {
          id: 4,
          roman: "Course IV",
          title: "Pier of Three Cultures",
          theme: "Unity - Earth and Sea",
          dishName: "Mussels in Georgian lobio with date crumble",
          description:
            "White beans stewed with mountain herbs and tender Mediterranean mussels in white wine, sprinkled with Egyptian spiced date crumble.",
          continents: ["Georgia", "Egypt", "Mediterranean"],
          ingredients: ["Mediterranean rock mussels", "Georgian white lobio beans", "Dried oasis dates", "Coriander & blue fenugreek"],
          saltUsed: "Dead Sea Mineral Flakes",
          winePairing: "Chhaveri Rosé Qvevri 2022",
          image: "/images/course-4.webp",
        },
        {
          id: 5,
          roman: "Course V",
          title: "Sunset over the Ocean",
          theme: "Finale of a symphony",
          dishName: "Date mousse with lemon sorbet and caramel figs",
          description:
            "Silken Egyptian date mousse paired with crisp lemon sorbet, crunchy caramelised figs and delicate Fleur de Sel crystals.",
          continents: ["Egypt", "Mediterranean"],
          ingredients: ["Medjool date cream", "Menton lemon sorbet", "Sun-ripened caramel figs", "Crispy almond tulle"],
          saltUsed: "Brittany Fleur de Sel with sea salt caramel",
          winePairing: "Georgian Icewine Saperavi or Cha-Cha Digestif",
          image: "/images/course-5.webp",
        },
      ],
    },
    drinksSection: {
      tag: "Liquid Alchemy",
      title: "Drinks & Cocktail Pairings",
      subtitle: "Each course paired with Georgian wines & sea-inspired cocktails",
      description:
        "Our drinks don’t just accompany — they tell the story deeper. Crafted to harmonize: From smoky oysters to saffron-kissed desserts, every sip dances with the sea’s rhythm.",
      pairedFor: "Paired for",
      spectrumTitle: "Flavor Harmony Spectrum",
      salinity: "Salinity",
      sweetness: "Sweetness",
      acidity: "Acidity",
      depth: "Depth",
      sommelierTag: "Sommelier Note:",
      sommelierNote:
        "Also available as part of our ancient Qvevri Georgian wine flight, fermented in buried clay vessels according to 8,000-year-old Caucasian tradition.",
      items: [
        {
          id: 1,
          roman: "I",
          name: "Batumi Wave Cocktail",
          ingredients: "Georgian chacha, cucumber liqueur, mint, pink salt",
          coursePairing: "Course I - Fresh Breeze Tuna",
          story: "Inspired by the cool morning spray of the Black Sea meeting the green Caucasus mountain air.",
          image: "/images/drink-1.webp",
          flavorProfile: { salinity: 75, sweetness: 40, acidity: 65, depth: 80 },
        },
        {
          id: 2,
          roman: "II",
          name: "Lilac Mist Cocktail",
          ingredients: "Georgian chacha, lilac syrup, lemon juice, salt",
          coursePairing: "Course II - Mystery of the Depths Tagine",
          story: "Botanical florals dance with sharp citrus and sea minerals to temper fiery Egyptian harissa.",
          image: "/images/drink-2.webp",
          flavorProfile: { salinity: 60, sweetness: 55, acidity: 70, depth: 75 },
        },
        {
          id: 3,
          roman: "III",
          name: "Desert Whispe Cocktail",
          ingredients: "Whiskey, date syrup, rosemary, lemon ash",
          coursePairing: "Course III - Georgian Trout on the Vine",
          story: "Rich smoky embers evoking ancient Bedouin night camps across the red dunes.",
          image: "/images/drink-3.webp",
          flavorProfile: { salinity: 50, sweetness: 65, acidity: 45, depth: 95 },
        },
        {
          id: 4,
          roman: "IV",
          name: "Red Sea Cocktail",
          ingredients: "Gin, hibiscus, lime juice, tonic with black salt crystals",
          coursePairing: "Course IV - Pier of Three Cultures Mussels",
          story: "A crimson infusion reminiscent of Egyptian karkadeh colliding with coastal Mediterranean tonic.",
          image: "/images/drink-4.webp",
          flavorProfile: { salinity: 80, sweetness: 50, acidity: 85, depth: 70 },
        },
        {
          id: 5,
          roman: "V",
          name: "Gold of the Pharaohs",
          ingredients: "Rum, sea salt caramel, saffron, orange bitters",
          coursePairing: "Course V - Sunset over the Ocean Date Mousse",
          story: "Liquid luxury: fragrant Persian saffron and golden caramel balanced by oceanic salt.",
          image: "/images/drink-5.webp",
          flavorProfile: { salinity: 65, sweetness: 85, acidity: 35, depth: 90 },
        },
      ],
    },
    creatorsSection: {
      tag: "Creators & Alchemists",
      title: "The Author of the Gastronomic Show",
      chefRoleBadge: "Executive Chef & Storyteller",
      chefRoleSmall: "Storyteller & Master",
      chefName: "Chef Adrian Soleris",
      chefQuote: "“I don't just cook. I script with fish and salt.”",
      chefBio1:
        "Soleris isn't just the chief. He's a storyteller. His set ‘Salt’ begins with an Egyptian dukkah hidden in Georgian bread and ends with a dessert where date syrup dances with lemon sorbet.",
      chefBio2:
        "He believes that salt is the memory of the earth, and so in each dish he adds a pinch of crystals from the places where he once dropped anchor.",
      chefBadge1: "3 Continents Dialogue",
      chefBadge2: "Live Seared Himalayan Slabs",
      teamTitle: "The Chef Team",
      teamSub: "Masters from Georgia, Egypt, Italy, and Greece converging on the French Riviera to enact the Salt Odyssey.",
      teamSpecialtyLabel: "Specialty:",
      teamMembers: [
        {
          name: "Nino Tsiklauri",
          role: "Dough Alchemist",
          origin: "Georgia",
          bio: "Master of ancient Georgian wild grain doughs and stone-baked flatbreads that cradle sacred spices.",
          specialty: "Sourdough Fermentation & Toné Oven Artistry",
          image: "/images/nino.webp",
        },
        {
          name: "Amir El-Masih",
          role: "Fire & Spice Sage",
          origin: "Egypt",
          bio: "Hailing from Alexandria, Amir orchestrates smoky terracotta tagines and authentic Alexandria dukkah roasts.",
          specialty: "Ancient Spice Grinding & Hearth Fire Roasting",
          image: "/images/amir.webp",
        },
        {
          name: "Luca De Sanctis",
          role: "Seafood Virtuoso",
          origin: "Italy",
          bio: "Raised on the Ligurian coastline, Luca treats each sea catch with minimalist reverence and immaculate precision.",
          specialty: "Crudo Marination & Mediterranean Wild Catch",
          image: "/images/luca.webp",
        },
        {
          name: "Sofia Martino",
          role: "Dessert Sorceress",
          origin: "Greece",
          bio: "Transforms dates, wild mountain honey, Menton citrus and salinity into ethereal symphonies of sweetness.",
          specialty: "Botanical Sorbet & Salt Caramel Confectionery",
          image: "/images/sofia.webp",
        },
        {
          name: "David Bagrationi",
          role: "Fermentation Maestro",
          origin: "Georgia",
          bio: "Custodian of 8,000-year-old Qvevri clay vessel winemaking and lacto-fermented sea herbs.",
          specialty: "Qvevri Amber Wines & Wild Herb Ferments",
          image: "/images/david.webp",
        },
      ],
    },
    saltLabSection: {
      tag: "Elemental Alchemy",
      title: "The 7 Salts of the Earth",
      description:
        "“Salt is the memory of the earth.” Explore the 7 rare mineral varieties harvested across three continents that anchor every dish and cocktail at Mina Al-Bahr.",
      specimen: "Mineral Specimen",
      textureLabel: "Mineral Texture",
      tasteLabel: "Taste Profile",
      serviceLabel: "Mina Al-Bahr Service",
      btnGiftSalt: "Gift Salt Set",
      salts: [
        {
          id: 1,
          name: "Siwa Oasis Mineral Salt",
          origin: "Siwa Oasis, Western Egyptian Desert",
          texture: "Delicate translucent crystals with soft crunch",
          flavor: "Earthy sweetness with mineral undertones",
          image: "/images/salt-1.webp",
          courseUsed: "Course I - Fresh Breeze Tuna",
          history: "Harvested from natural brine lakes formed in the deep Sahara where caravans traded salt for gold.",
        },
        {
          id: 2,
          name: "Svaneti Mountain Herb Salt",
          origin: "Svaneti Caucasus Mountains, Georgia",
          texture: "Coarse aromatic salt ground with blue fenugreek & chili",
          flavor: "Intensely herbal, warm garlic notes and wild mountain zest",
          image: "/images/salt-2.webp",
          courseUsed: "Course III - Trout on the Vine",
          history: "Ancient Svaneti recipe preserved for millennia in stone towers to sustain high-altitude travelers.",
        },
        {
          id: 3,
          name: "Himalayan Pink Salt Slab",
          origin: "Khewra Salt Range, Foothills of the Himalayas",
          texture: "Solid crystalline mineral slab heated to 300°C",
          flavor: "Pure elemental mineral infusion without harshness",
          image: "/images/salt-3.webp",
          courseUsed: "Course III - Hot Salt Sear",
          history: "Formed 250 million years ago from prehistoric seabed evaporates beneath tectonic pressure.",
        },
        {
          id: 4,
          name: "Dead Sea Flake Salt",
          origin: "Dead Sea Basin, Rift Valley",
          texture: "Pyramidal geometric flakes",
          flavor: "High magnesium density, sharp initial punch fading into umami",
          image: "/images/salt-4.webp",
          courseUsed: "Course IV - Lobio Mussels",
          history: "Collected at 430 meters below sea level where salinity reaches nearly ten times the open ocean.",
        },
        {
          id: 5,
          name: "Smoked Cyprus Pyramid Salt",
          origin: "Larnaca, Cyprus",
          texture: "Hollow architectural pyramids",
          flavor: "Wood-smoked oak embers with gentle crunch",
          image: "/images/salt-5.webp",
          courseUsed: "Course II - Denis Fish Tagine",
          history: "Evaporated in coastal salt pans and cold-smoked over aged Mediterranean beechwood chips.",
        },
        {
          id: 6,
          name: "Brittany Fleur de Sel",
          origin: "Guérande, Atlantic Coast of France",
          texture: "Velvety moist 'flower of salt'",
          flavor: "Subtle violet aroma and delicate melt",
          image: "/images/salt-6.webp",
          courseUsed: "Course V - Sunset Date Mousse",
          history: "Skimmed by hand from the surface of salt marshes using traditional wooden lousses.",
        },
        {
          id: 7,
          name: "Hawaiian Black Lava Salt",
          origin: "Molokai Island",
          texture: "Jet black volcanic crystals",
          flavor: "Slightly sulfurous, deep smoky undertones",
          image: "/images/salt-7.webp",
          courseUsed: "Red Sea Cocktail Rim",
          history: "Infused with activated coconut shell charcoal, known for its dramatic contrast and detoxifying character.",
        },
      ],
    },
    reviewsSection: {
      tag: "Guest Chronicles",
      title: "Impressions of the Sea",
      btnShare: "Share Your Journey",
      favPrefix: "Favorite:",
      modalTitle: "Chronicle Your Odyssey",
      modalSub: "Inscribe your sensory impressions into our guestbook.",
      nameLabel: "Your Name",
      cityLabel: "City / Country",
      courseLabel: "Favorite Course",
      cocktailLabel: "Favorite Cocktail",
      commentLabel: "Your Impression & Sensory Notes",
      commentPlaceholder: "Describe the dialogue between salt, fish, and wine...",
      btnSubmit: "Publish Impression",
      btnSubmitting: "Inscribing...",
      successTitle: "Thank You",
      successSub: "Your impression has been inscribed into our guestbook.",
    },
    invitationSection: {
      badge: "Exclusive Seating",
      subtitle: "Invitation",
      titleLine1: "We Invite You To Our",
      titleLine2: "Gastronomic Show",
      description:
        "Step into a world where Egyptian mystique, Georgian warmth, and Mediterranean elegance collide in a symphony of flavors. Leave the expected behind—here, every meal is an unfolding story, and you are the protagonist.",
      traditionTitle: "Seaside Welcome Tradition",
      traditionDesc:
        "We are preparing an unforgettable journey across the three seas for you. Please arrive 15 minutes before the start — you will be greeted with an aperitif overlooking the Mediterranean Sea.",
      btnReserve: "Reserve Your Journey",
      statShowTime: "Show Time",
      statDaily: "19:30 • Daily Grand Service",
      statHours: "Hours",
      statDays: "18:00 - 00:00 (Tue — Sun)",
      statAddress: "Address",
      statAddressVal: "Promenade du Soleil, 12 Nice",
      statPhone: "+33 (4) 93 12 34 56",
    },
    footer: {
      mosaicTitle: "The Journey Awaits",
      mosaicSub: "A dialogue between continents.",
      mosaicBtn: "Book Table",
      aboutText:
        "A gastronomic laboratory where haute cuisine serves as a language of dialogue between continents. 5 courses where Egypt, Georgia and the Mediterranean speak the language of fish and salt.",
      locationHeading: "Location & Hours",
      contactHeading: "Direct Contact",
      rightsReserved: "All rights reserved. Mina Al-Bahr Culinary Odyssey.",
      continentsStrip: "Nice • Mediterranean • Alexandria • Tbilisi",
      portalBtn: "Maitre d' Registry Access",
    },
    modalReservation: {
      tag: "Seaside Gastronomic Show",
      title: "Fill out the form & we'll book the best seat for you",
      subtitle: "5 courses across Egypt, Georgia & Mediterranean. Promenade du Soleil, Nice.",
      dayTimeLabel: "What day and time are you interested in?",
      dateLabel: "Date",
      guestsLabel: "Total guests",
      atmosphereLabel: "Atmosphere",
      pairingLabel: "Beverage Pairing Journey",
      nameLabel: "Name",
      phoneLabel: "Telephone",
      emailLabel: "Email",
      allergiesLabel: "Presence of allergies",
      allergiesPlaceholder: "presence of allergies (e.g. shellfish, nuts, none)",
      btnSubmit: "Reserve Your Journey",
      btnSubmitting: "Securing Your Seat...",
      guaranteeNote: "Guaranteed immediate confirmation. No cancellation fee up to 24 hours prior.",
      confirmedTag: "Table Reserved",
      confirmedTitle: "Your Journey Is Awaited",
      confirmedSub: "Welcome to Mina Al-Bahr. A confirmation has been stored and your table is prepared.",
      codeLabel: "Confirmation Code",
      guestLabel: "Guest:",
      partyLabel: "Party Size:",
      atmosphereResultLabel: "Atmosphere:",
      dateTimeResultLabel: "Date & Seating:",
      welcomeArrivalTitle: "Seaside Arrival:",
      welcomeArrivalDesc:
        "Please arrive 15 minutes before start. You will be greeted with our welcome sea-mist aperitif on the terrace overlooking the Mediterranean.",
      btnCalendar: "Add to Calendar (.ics)",
      btnClose: "Close",
    },
    modalVoucher: {
      tag: "Gift The Odyssey",
      title: "Exclusive Experiences & Salt Box",
      yourName: "Your Name",
      yourEmail: "Your Email",
      recipientName: "Recipient Name",
      recipientNote: "Personalized Note",
      btnPurchase: "Purchase Voucher",
      btnPurchasing: "Issuing...",
      confirmedTag: "Gift Certificate Issued",
      confirmedTitle: "An Extraordinary Gift of Salt & Sea",
      voucherLabel: "Voucher Certificate",
      recipientLabel: "Recipient:",
      validityNote: "Redeemable at Mina Al-Bahr, Promenade du Soleil, Nice. Valid for 12 months.",
    },
  },
  ar: {
    brand: {
      name: "ميناء البحر",
      nameNative: "Mina Al-Bahr",
      tagline: "أوديسة الطهي على شاطئ البحر",
      subtagline: "مختبر فن الطهو الراقي • نيس",
      city: "بروميناد دو سولي، نيس",
    },
    nav: {
      concept: "المفهوم",
      showSalt: "عرض الملح",
      courses: "الأطباق الخمسة",
      drinks: "المشروبات",
      creators: "المبدعون",
      saltLab: "مختبر الملح",
      reviews: "آراء الضيوف",
      contact: "اتصل بنا",
      reservation: "حجز طاولة",
      giftVoucher: "قسيمة هدية",
      maitreD: "بوابة مدير الصالة",
      openingHours: "١٨:٠٠ - ٠٠:٠٠ (الثلاثاء - الأحد)",
      addressVal: "بروميناد دو سولي، ١٢ نيس، فرنسا",
      phoneVal: "+33 (4) 93 12 34 56",
    },
    hero: {
      badge: "نيس • الريفيرا الفرنسية • مختبر الطهي الرفيع",
      titleLine1: "أوديسة الطهي",
      titleLine2: "على شاطئ البحر",
      description:
        "حيث تلتقي مصر وجورجيا والبحر الأبيض المتوسط في لغة واحدة قوامها السمك الطازج والملح النادر. رحلة من ٥ أطباق ساحرة تُعزف على كورنيش بروميناد دو سولي في نيس.",
      btnReserve: "احجز طاولتك الآن",
      btnExplore: "استكشف الأطباق الخمسة",
      oceanRoom: "قاعة المحيط",
      saltBar: "بار الملح الأسطوري",
      atmosphereTitle: "الأجواء المتاحة:",
      arrivalNotice: "يرجى الحضور قبل ١٥ دقيقة للاستمتاع بمشروب الترحيب المطل على البحر",
      scrollDown: "مرر للأسفل",
    },
    concept: {
      tag: "المفهوم والفلسفة",
      title: "ما هو مطعم",
      titleHighlight: "ميناء البحر؟",
      quote: "«مختبر تذوق استثنائي حيث يغدو فن الطهو الرفيع لغة حوار راقية بين القارات الثلاث.»",
      p1: "هنا تكتسب الخينكالي الجورجية قرمشة رقائق جزر الكناري، وتنبض تارتار التونة المتوسطية بالحياة تحت أريج التوابل المصرية الفاخرة.",
      p2: "لا توجد قوائم طعام رتيبة، بل مفاجآت ذوقية مدهشة ومدروسة بعناية. هكذا نتحدى المألوف مع الحفاظ على أعلى معايير الأناقة والفخامة في كل تفصيل.",
      pillar1Title: "حوار القارات الثلاث",
      pillar1Desc: "مصر وجورجيا والمتوسط تلتقي في سيمفونية السمك والملح.",
      pillar2Title: "النار الحية وألواح الكريستال",
      pillar2Desc: "ألواح ملح الهيمالايا المتوهجة وطواجن الفخار المصرية الأصيلة.",
      pillar3Title: "مفاجآت غير متوقعة",
      pillar3Desc: "لا نكشف كل أسرارنا دفعة واحدة، بل تعيش القصة كبطل الحكاية.",
      labNoteTag: "ملاحظة من المختبر",
      labNoteQuote: "«الملح ليس مجرد بهار؛ إنه الذاكرة الجغرافية الأزلية للمحيطات.»",
      mantra1: "سحر فن الطهي الاندماجي",
      mantra2: "لا توجد قوائم مسبقة مكررة",
      mantra3: "مفاجآت باهرة بانتظاركم جميعاً",
    },
    saltShow: {
      tag: "العرض المركزي الساحر",
      wePresent: "نقدم لحضراتكم",
      title: "عرض التذوق المسرحي الغامر",
      description1:
        "٥ أطباق تتحدث فيها مصر وجورجيا والبحر الأبيض المتوسط لغة السمك والملح. من المحار المتبل بالدخان إلى سمك التراوت على ألواح ملح الهيمالايا الوردي.",
      description2:
        "كل طبق هو موجة من النكهات المتناغمة مع أفخر المشروبات التراثية. نحتفظ بأسرارنا لنفاجئك.. احجز طاولتك لتتذوق نبض البحر.",
      btnReserve: "احجز طاولة للعرض المسرحي",
      p1Title: "حكايات",
      p1Sub: "طريق الحرير وقوافل الملح",
      p1Desc: "قصص طريق الحرير وقوافل قواطع الملح وقرى الصيادين عبر مئات السنين.",
      p2Title: "فن",
      p2Sub: "ألواح المعادن والبلورات",
      p2Desc: "تقديم على ألواح الملح الساخنة، وديكور مصنوع من بلورات الهيمالايا والبحر الميت.",
      p3Title: "إرث",
      p3Sub: "وصفات محفوظة بالملح",
      p3Desc: "وصفات تتوارثها الأجيال — الأجيكا الجورجية، الدقة الإسكندرانية، وأعشاب بروفانس البرية.",
      p4Title: "مذاق",
      p4Sub: "لوحة النكهات المعدنية",
      p4Desc: "نغمات متباينة: زيتون متبل، أجبان معتقة مخمرة، وكراميل ملح البحر الفاخر.",
    },
    coursesSection: {
      tag: "أوديسة فن الطهو الرفيع",
      title: "أطباق الملح الخمسة",
      subtitle: "حوار النكهات عبر حضارات السواحل",
      courseOf: "الطبق",
      dialogueTag: "حوار القارات",
      ingredientsTag: "المكونات الأساسية ونوع الملح",
      wineTag: "المشروب المتناغم الموصى به",
      chefSecretBtn: "اقرأ أسرار الشيف الخاصة",
      chefSecretHide: "إخفاء ملاحظات الشيف",
      chefQuote:
        "«في هذا الطبق، تمت معايرة الملوحة بدقة متناهية لتنسجم مع الدهون الطبيعية للسمك. نحن لا نستخدم الملح لنخفي النكهة، بل لنحرر ذاكرة الساحل الدفينة.»",
      items: [
        {
          id: 1,
          roman: "الطبق الأول",
          title: "نسيم عليل",
          theme: "الخفة — ولادة الحوار",
          dishName: "تونة البحر الأبيض المتوسط مع الرمان والدقة المصرية",
          description:
            "تونة متوسطية متبلة بعصير الليمون الطازج، مزينة بحبات الرمان الجبلي وصوص التكيمالي الجورجي الشهير.",
          continents: ["البحر المتوسط", "مصر", "جورجيا"],
          ingredients: ["تونة زرقاء متوسطية", "خلطة الدقة الإسكندرانية", "رمان بري", "صلصة تكيمالي الجورجية"],
          saltUsed: "رقائق ملح واحة سيوة المجفف تحت شمس الصحراء",
          winePairing: "تسيناندالي الأبيض التراثي ٢٠٢١ (كاخيتي، جورجيا)",
          image: "/images/course-1.webp",
        },
        {
          id: 2,
          roman: "الطبق الثاني",
          title: "أسرار الأعماق",
          theme: "الغموض — لوحة اللهب المتوقدة",
          dishName: "سمك الدنيس في الطاجن المصري مع الهريسة المدخنة",
          description:
            "صلصة الفلفل الأحمر الحار، طماطم كرزية كونفيه وزيتون كالاماتا مطهو ببطء في فخار الطاجن التقليدي مع سمك الدنيس البحري.",
          continents: ["مصر", "البحر المتوسط"],
          ingredients: ["سمك دنيس بحري طازج", "هريسة مدخنة خاصة", "طماطم كرزية مكرملة", "زيتون كالاماتا معتق"],
          saltUsed: "ملح البحر الأسود القبرصي المدخن",
          winePairing: "خفانتشكارا العنبري كفيفري ٢٠٢٠",
          image: "/images/course-2.webp",
        },
        {
          id: 3,
          roman: "الطبق الثالث",
          title: "لهيب الأمواج",
          theme: "الطاقة — اندماج العناصر",
          dishName: "تراوت جورجي ملفوف بورق العنب مع موس الباذنجان المدخن",
          description:
            "سمك تراوت جبلي مشوي ومغلف بأوراق العنب، مصحوب بموس باذنجان مشوي على الجمر مع زبادي بالنعناع البري، يُقدم على لوح ملح متقد الحرارة.",
          continents: ["جورجيا", "البحر المتوسط"],
          ingredients: ["تراوت أنهار القوقاز", "أوراق عنب غضة", "باذنجان مدخن على الجمر", "زبادي جاموسي بالنعناع البري"],
          saltUsed: "لوح ملح الهيمالايا الوردي المعتق (مسخن لدرجة ٣٠٠ مئوية)",
          winePairing: "سابيرافي ريزيرف ٢٠١٩ (موكوزاني)",
          image: "/images/course-3.webp",
        },
        {
          id: 4,
          roman: "الطبق الرابع",
          title: "رصيف الحضارات الثلاث",
          theme: "الوحدة — عناق الأرض والبحر",
          dishName: "بلح البحر مع اللوبيا الجورجية وفتات التمر",
          description:
            "فاصولياء بيضاء مطهوة بأعشاب الجبال مع بلح البحر المتوسطي المطهو بنعومة، تعلوه لمسة من فتات التمر الواحاتي بالتوابل الشرقية.",
          continents: ["جورجيا", "مصر", "البحر المتوسط"],
          ingredients: ["بلح بحر صخري متوسطي", "لوبيا جورجية بيضاء", "تمور الواحات المجففة", "كزبرة وحلبة زرقاء"],
          saltUsed: "رقائق ملح البحر الميت المعدنية النادرة",
          winePairing: "تشخافيري روزيه كفيفري ٢٠٢٢",
          image: "/images/course-4.webp",
        },
        {
          id: 5,
          roman: "الطبق الخامس",
          title: "غروب فوق المحيط",
          theme: "خاتمة السيمفونية الذوقية",
          dishName: "موس التمر الفاخر مع سوربيه الليمون والتين المكرمل",
          description:
            "موس ناعم كالحرير من تمر المجدول مع سوربيه ليمون مينتون المنعش، وقطع التين المكرمل المقرمشة مع بلورات زهرة الملح.",
          continents: ["مصر", "البحر المتوسط"],
          ingredients: ["كريمة تمر المجدول الفاخر", "سوربيه ليمون مينتون الفرنسي", "تين مكرمل تحت الشمس", "تول مقرمش باللوز"],
          saltUsed: "فلور دي سيل بريتاني مع كراميل ملح البحر",
          winePairing: "آيس واين سابيرافي أو هاضم التشا-تشا العطري",
          image: "/images/course-5.webp",
        },
      ],
    },
    drinksSection: {
      tag: "خيمياء المشروبات",
      title: "المشروبات وتوليفات الكوكتيل",
      subtitle: "كل طبق متناغم مع نبيذ جورجي معتق وكوكتيلات مستوحاة من البحر",
      description:
        "مشروباتنا لا ترافق الأطباق فحسب — بل تروي فصول القصة بعمق. صُممت لتحقيق التناغم التام: من المحار المدخن وحتى الحلويات المعطرة بالزعفران.",
      pairedFor: "صُمم خصيصاً لـ",
      spectrumTitle: "طيف التناغم والانسجام الذوقي",
      salinity: "الملوحة",
      sweetness: "الحلاوة",
      acidity: "الحموضة",
      depth: "العمق",
      sommelierTag: "ملاحظة السقاة:",
      sommelierNote:
        "متوفر أيضاً ضمن باقة نبيذ الكفيفري الجورجي المعتّق في جرار فخارية مدفونة تحت الأرض وفق تقاليد تعود لـ ٨ آلاف عام.",
      items: [
        {
          id: 1,
          roman: "١",
          name: "كوكتيل موجة باتومي",
          ingredients: "تشا-تشا جورجية، ليكير الخيار، نعناع طازج، ملح وردي",
          coursePairing: "الطبق الأول — تونة نسيم عليل",
          story: "مستوحى من رذاذ الصباح المنعش للبحر الأسود حين يلتقي بهواء جبال القوقاز النقي.",
          image: "/images/drink-1.webp",
          flavorProfile: { salinity: 75, sweetness: 40, acidity: 65, depth: 80 },
        },
        {
          id: 2,
          roman: "٢",
          name: "كوكتيل ضباب الليلك",
          ingredients: "تشا-تشا جورجية، سيروب أزهار الليلك، عصير ليمون، ملح بحري",
          coursePairing: "الطبق الثاني — طاجن أسرار الأعماق",
          story: "أزهار عطرية تتراقص مع الحمضيات اللاذعة ومعادن البحر لترويض حدة الهريسة المصرية النارية.",
          image: "/images/drink-2.webp",
          flavorProfile: { salinity: 60, sweetness: 55, acidity: 70, depth: 75 },
        },
        {
          id: 3,
          roman: "٣",
          name: "كوكتيل همس الصحراء",
          ingredients: "ويسكي معتق، شراب التمر، إكليل الجبل، رماد الليمون المجفف",
          coursePairing: "الطبق الثالث — تراوت جورجي على الجمر",
          story: "نفحات دخانية عميقة تستحضر ليالي خيام البدو العريقة فوق كثبان الرمال الحمراء.",
          image: "/images/drink-3.webp",
          flavorProfile: { salinity: 50, sweetness: 65, acidity: 45, depth: 95 },
        },
        {
          id: 4,
          roman: "٤",
          name: "كوكتيل البحر الأحمر",
          ingredients: "جين فاخر، كركديه مصري، عصير ليمون، تونك مع بلورات الملح الأسود",
          coursePairing: "الطبق الرابع — بلح بحر رصيف الحضارات",
          story: "نقع قرمزي يستحضر الكركديه الإسكندراني الأصيل ممتزجاً مع انتعاش تونك الساحل المتوسطي.",
          image: "/images/drink-4.webp",
          flavorProfile: { salinity: 80, sweetness: 50, acidity: 85, depth: 70 },
        },
        {
          id: 5,
          roman: "٥",
          name: "كوكتيل ذهب الفراعنة",
          ingredients: "روم معتق، كراميل ملح البحر، زعفران خالص، مريات البرتقال",
          coursePairing: "الطبق الخامس — موس تمر غروب المحيط",
          story: "فخامة سائلة: زعفران شرقي عبق وكراميل ذهبي متوازن مع نقاء ملح المحيط.",
          image: "/images/drink-5.webp",
          flavorProfile: { salinity: 65, sweetness: 85, acidity: 35, depth: 90 },
        },
      ],
    },
    creatorsSection: {
      tag: "المبدعون والخيميائيون",
      title: "صانع ومؤلف العرض الذوقي",
      chefRoleBadge: "الشيف التنفيذي وراوي القصص",
      chefRoleSmall: "سارد الحكايات وأستاذ النكهات",
      chefName: "الشيف أدريان سوليريس",
      chefQuote: "«أنا لا أطبخ وحسب، بل أكتب حكايات آسرة بالسمك والملح.»",
      chefBio1:
        "سوليريس ليس مجرد رئيس طهاة، بل هو حكواتي النكهات. تبدأ قائمته ‘الملح’ بدقة مصرية مخبأة داخل خبز جورجي، وتنتهي بحلوى يتمايل فيها شراب التمر مع سوربيه الليمون المنعش.",
      chefBio2:
        "إنه يؤمن إيماناً راسخاً بأن الملح هو ذاكرة الأرض الحية؛ لذا يضيف في كل طبق قبضة من البلورات المجمعة من المراسي التي ألقى فيها مرساته يوماً ما.",
      chefBadge1: "حوار القارات الثلاث",
      chefBadge2: "ألواح الهيمالايا المشوية مباشرة",
      teamTitle: "فريق الطهاة الدولي",
      teamSub: "نخبة من أساتذة الطهو من جورجيا ومصر وإيطاليا واليونان يجتمعون في الريفيرا الفرنسية لعزف أوديسة الملح.",
      teamSpecialtyLabel: "التخصص الدقيق:",
      teamMembers: [
        {
          name: "نينو تسيكلاوري",
          role: "خيميائية العجين",
          origin: "جورجيا",
          bio: "خبيرة العجائن المخمرة القديمة وخبز التونيه الحجري الذي يحتضن التوابل المقدسة.",
          specialty: "تخمير العجين الطبيعي وفنون فرن التونيه الحجري",
          image: "/images/nino.webp",
        },
        {
          name: "أمير المسيح",
          role: "حكيم النار والتوابل",
          origin: "مصر",
          bio: "ابن الإسكندرية البار، يقود طواجن الفخار المدخنة وطحن الدقة الإسكندرانية الأصيلة.",
          specialty: "طحن التوابل التراثية والشواء على نار الحطب",
          image: "/images/amir.webp",
        },
        {
          name: "لوكا دي سانتيس",
          role: "عازف المأكولات البحرية",
          origin: "إيطاليا",
          bio: "ترعرع على سواحل ليغوريا، يتعامل مع صيد البحر بقدسية ودقة استثنائية متناهية.",
          specialty: "تتبيل الكرودو الطازج وصيد البحر الأبيض المتوسط",
          image: "/images/luca.webp",
        },
        {
          name: "صوفيا مارتينو",
          role: "ساحرة الحلويات",
          origin: "اليونان",
          bio: "تحول التمور وعسل الجبال البري وحمضيات مينتون مع الملح إلى سيمفونية حلاوة خالدة.",
          specialty: "السوربيه النباتي وحلويات كراميل الملح البحري",
          image: "/images/sofia.webp",
        },
        {
          name: "ديفيد باجراتيوني",
          role: "مايسترو التخمير",
          origin: "جورجيا",
          bio: "حارس تقاليد صناعة نبيذ الكفيفري الفخاري منذ ٨ آلاف عام وتخمير أعشاب البحر.",
          specialty: "نبيذ الكفيفري العنبري وتخمير الأعشاب البرية",
          image: "/images/david.webp",
        },
      ],
    },
    saltLabSection: {
      tag: "خيمياء العناصر",
      title: "أملاح الأرض السبعة النادرة",
      description:
        "«الملح هو ذاكرة الأرض الحية.» استكشف الأصناف المعدنية السبعة النادرة المحصودة عبر ٣ قارات والتي تؤصل كل طبق وكوكتيل في مطعم ميناء البحر.",
      specimen: "عينة معدنية رقم",
      textureLabel: "القوام المعدني",
      tasteLabel: "بصمة المذاق",
      serviceLabel: "تقديم ميناء البحر",
      btnGiftSalt: "إهداء صندوق الملح",
      salts: [
        {
          id: 1,
          name: "ملح واحة سيوة المعدني",
          origin: "واحة سيوة، الصحراء الغربية المصرية",
          texture: "بلورات شفافة رقيقة ذات قرمشة ناعمة",
          flavor: "حلاوة ترابية مع نفحات معدنية منعشة",
          image: "/images/salt-1.webp",
          courseUsed: "الطبق الأول — تونة نسيم عليل",
          history: "محصود من بحيرات الملح الطبيعية في أعماق الصحراء حيث كانت قوافل التجارة تقايض الملح بالذهب الخالص.",
        },
        {
          id: 2,
          name: "ملح سفانيتي بالأعشاب الجبلية",
          origin: "جبال سفانيتي في القوقاز، جورجيا",
          texture: "ملح خشن عطري مطحون مع الحلبة الزرقاء والشطة الجبلية",
          flavor: "عطري للغاية، مع نفحات ثوم دافئة وحيوية جبلية",
          image: "/images/salt-2.webp",
          courseUsed: "الطبق الثالث — تراوت على الجمر",
          history: "وصفة سفانيتية ضاربة في القدم حُفظت في أبراج الحصون الحجرية لتغذية قوافل المسافرين في المرتفعات.",
        },
        {
          id: 3,
          name: "لوح ملح الهيمالايا الوردي",
          origin: "سلسلة جبال خيورا، سفوح الهيمالايا",
          texture: "لوح صخري بلوري صلب مسخن حتى ٣٠٠ درجة مئوية",
          flavor: "تشريب معدني نقي دون أي حدة أو مرارة",
          image: "/images/salt-3.webp",
          courseUsed: "الطبق الثالث — شواء الملح الحي",
          history: "تشكل قبل ٢٥٠ مليون عام من قيعان بحار ما قبل التاريخ تحت تأثير الضغط التكتوني الهائل.",
        },
        {
          id: 4,
          name: "رقائق ملح البحر الميت",
          origin: "حوض البحر الميت، وادي الصدع العظيم",
          texture: "رقائق هندسية هرمية الشكل",
          flavor: "غني بالماغنيسيوم الطبيعي، بنكهة أولية قوية تتبعها أومامي ساحرة",
          image: "/images/salt-4.webp",
          courseUsed: "الطبق الرابع — بلح البحر واللوبيا",
          history: "يُجمع على انخفاض ٤٣٠ متراً تحت مستوى سطح البحر حيث تبلغ الملوحة عشرة أضعاف مياه المحيط المفتوح.",
        },
        {
          id: 5,
          name: "أهرامات ملح قبرص المدخن",
          origin: "لارنكا، قبرص",
          texture: "أهرامات معمارية مفرغة فائقة الهشاشة",
          flavor: "أريج جمر خشب البلوط المدخن مع قرمشة لطيفة",
          image: "/images/salt-5.webp",
          courseUsed: "الطبق الثاني — طاجن سمك الدنيس",
          history: "يتبخر في ملاحات الساحل ويُدخن على البارد فوق رقائق خشب الزان المتوسطي المعتق.",
        },
        {
          id: 6,
          name: "زهرة ملح بريتاني (فلور دي سيل)",
          origin: "غيراند، ساحل الأطلسي في فرنسا",
          texture: "«زهرة ملح» مخملية رطبة تذوب فوراً",
          flavor: "أريج خفيف يشبه أزهار البنفسج وذوبان راقٍ",
          image: "/images/salt-6.webp",
          courseUsed: "الطبق الخامس — موس التمر والكراميل",
          history: "تُقشط يدوياً بعناية بالغة من على سطح مستنقعات الملح باستخدام مجارف خشبية تقليدية.",
        },
        {
          id: 7,
          name: "ملح الحمم البركانية السوداء",
          origin: "جزيرة مولوكاي، هاواي",
          texture: "بلورات بركانية فاحمة السواد",
          flavor: "نكهة كبريتية رقيقة مع نفحات دخانية عميقة",
          image: "/images/salt-7.webp",
          courseUsed: "حافة كأس كوكتيل البحر الأحمر",
          history: "معالج بفحم قشور جوز الهند النشط، ويشتهر بتباينه البصري الدرامي وخصائصه المنقية للجسم.",
        },
      ],
    },
    reviewsSection: {
      tag: "سجلات الضيوف",
      title: "انطباعات على رمال البحر",
      btnShare: "شاركنا تجربتك",
      favPrefix: "المفضل:",
      modalTitle: "سجل انطباعك في كتاب الضيوف",
      modalSub: "اكتب تجربتك الحسية لتخلد في سجلات المطعم.",
      nameLabel: "الاسم الكريم",
      cityLabel: "المدينة / الدولة",
      courseLabel: "الطبق المفضل لديك",
      cocktailLabel: "الكوكتيل المفضل",
      commentLabel: "انطباعك وملاحظاتك الحسية",
      commentPlaceholder: "صف لنا حوار الملح والسمك وأجواء البحر الساحرة...",
      btnSubmit: "نشر الانطباع",
      btnSubmitting: "جاري التسجيل...",
      successTitle: "شكراً جزيلاً",
      successSub: "تم تدوين انطباعك الثمين في سجل ضيوف ميناء البحر.",
    },
    invitationSection: {
      badge: "جلسات استثنائية حصرية",
      subtitle: "دعوة خاصة",
      titleLine1: "نتشرف بدعوتكم إلى",
      titleLine2: "عرض التذوق الحي",
      description:
        "ادخل إلى عالم يلتقي فيه سحر مصر ودفء جورجيا وأناقة البحر الأبيض المتوسط في تناغم فريد. اترك التوقعات جانباً — هنا كل وجبة هي رواية تتكشف فصولها، وأنت بطلها الحقيقي.",
      traditionTitle: "طقس الترحيب البحري الأصيل",
      traditionDesc:
        "نحن نعد رحلة لا تُنسى عبر البحار الثلاثة من أجلك. يرجى الحضور قبل ١٥ دقيقة من البداية — سيتم استقبالك بمشروب ترحيبي فاخر مع إطلالة بانورامية على زرقة البحر الأبيض المتوسط.",
      btnReserve: "احجز رحلتك الاستثنائية",
      statShowTime: "موعد العرض الرئيسي",
      statDaily: "١٩:٣٠ • العرض اليومي الأكبر",
      statHours: "أوقات العمل",
      statDays: "١٨:٠٠ - ٠٠:٠٠ (الثلاثاء — الأحد)",
      statAddress: "العنوان",
      statAddressVal: "بروميناد دو سولي، ١٢ نيس",
      statPhone: "+33 (4) 93 12 34 56",
    },
    footer: {
      mosaicTitle: "الرحلة بانتظاركم",
      mosaicSub: "حوار الحضارات على موائد البحر.",
      mosaicBtn: "احجز الآن",
      aboutText:
        "مختبر فن الطهو الرفيع حيث تلتقي مصر وجورجيا والمتوسط بلغة السمك الطازج وأندر أملاح الأرض. ٥ أطباق تحبس الأنفاس على كورنيش نيس الساحر.",
      locationHeading: "الموقع وساعات العمل",
      contactHeading: "الاتصال المباشر",
      rightsReserved: "جميع الحقوق محفوظة. مطعم ميناء البحر — أوديسة الطهي.",
      continentsStrip: "نيس • البحر المتوسط • الإسكندرية • تبليسي",
      portalBtn: "دخول بوابة مدير الصالة",
    },
    modalReservation: {
      tag: "عرض الطهو المسرحي على البحر",
      title: "املأ الاستمارة وسنقوم بحجز أفضل طاولة لك",
      subtitle: "٥ أطباق تجمع مصر وجورجيا والمتوسط. بروميناد دو سولي، نيس.",
      dayTimeLabel: "ما هو التوقيت والجلسة التي تفضلها؟",
      dateLabel: "التاريخ",
      guestsLabel: "عدد الضيوف",
      atmosphereLabel: "الأجواء والقاعة",
      pairingLabel: "رحلة المشروبات المتناغمة",
      nameLabel: "الاسم بالكامل",
      phoneLabel: "رقم الهاتف",
      emailLabel: "البريد الإلكتروني",
      allergiesLabel: "هل توجد حساسية من أي مكون؟",
      allergiesPlaceholder: "مثل: قشريات، مكسرات، غلوتين، لا يوجد",
      btnSubmit: "تأكيد حجز الرحلة",
      btnSubmitting: "جاري تأكيد مقعدك...",
      guaranteeNote: "تأكيد فوري ومضمون مع إمكانية الإلغاء المجاني حتى ٢٤ ساعة قبل الموعد.",
      confirmedTag: "تم تأكيد الحجز بنجاح",
      confirmedTitle: "طاولتك بانتظارك في ميناء البحر",
      confirmedSub: "أهلاً بك في ميناء البحر. تم تسجيل بيانات حجزك وإعداد طاولتك بعناية فائقة.",
      codeLabel: "رمز الحجز الخاص بك",
      guestLabel: "الضيف الكريم:",
      partyLabel: "عدد الأفراد:",
      atmosphereResultLabel: "القاعة:",
      dateTimeResultLabel: "الموعد والجلسة:",
      welcomeArrivalTitle: "تعليمات الوصول:",
      welcomeArrivalDesc:
        "يرجى التواجد قبل ١٥ دقيقة للاستمتاع برذاذ البحر ومشروب الاستقبال المميز على الشرفة المطلة على الريفيرا.",
      btnCalendar: "إضافة إلى التقويم (.ics)",
      btnClose: "إغلاق",
    },
    modalVoucher: {
      tag: "إهداء أوديسة البحر",
      title: "تجارب حصرية وصندوق الأملاح النادرة",
      yourName: "اسمك الكريم",
      yourEmail: "بريدك الإلكتروني",
      recipientName: "اسم الشخص المهدى إليه",
      recipientNote: "رسالة شخصية للإهداء",
      btnPurchase: "شراء القسيمة",
      btnPurchasing: "جاري الإصدار...",
      confirmedTag: "تم إصدار قسيمة الهدية",
      confirmedTitle: "هدية استثنائية من كنوز الملح والبحر",
      voucherLabel: "رقم القسيمة الإلكترونية",
      recipientLabel: "إلى:",
      validityNote: "صالحة للاستخدام في مطعم ميناء البحر، نيس، فرنسا. صالحة لمدة ١٢ شهراً.",
    },
  },
};
