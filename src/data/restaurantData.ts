export interface CourseItem {
  id: number;
  numberRoman: string;
  title: string;
  theme: string;
  dishName: string;
  description: string;
  continents: string[];
  keyIngredients: string[];
  saltUsed: string;
  image: string;
  winePairing: string;
}

export interface CocktailItem {
  id: number;
  numberRoman: string;
  name: string;
  ingredients: string;
  flavorProfile: {
    salinity: number;
    sweetness: number;
    acidity: number;
    depth: number;
  };
  coursePairing: string;
  image: string;
  story: string;
}

export interface TeamMember {
  name: string;
  role: string;
  origin: string;
  image: string;
  bio: string;
  specialty: string;
}

export interface SaltVariety {
  id: number;
  name: string;
  origin: string;
  texture: string;
  flavor: string;
  image: string;
  courseUsed: string;
  history: string;
}

export const COURSES: CourseItem[] = [
  {
    id: 1,
    numberRoman: "Course I",
    title: "Fresh Breeze",
    theme: "Lightness - Birth of a dialogue",
    dishName: "Tuna with pomegranate and Egyptian dukkah",
    description:
      "Mediterranean tuna marinated in lemon juice, garnished with pomegranate grains and Georgian tkemali sauce.",
    continents: ["Mediterranean", "Egypt", "Georgia"],
    keyIngredients: ["Bluefin Mediterranean tuna", "Egyptian dukkah spice blend", "Wild pomegranate", "Georgian tkemali"],
    saltUsed: "Siwa Oasis Sun-Dried Salt Flakes",
    image: "/images/course-1.webp",
    winePairing: "Tsinandali Estate White 2021 (Kakheti, Georgia)",
  },
  {
    id: 2,
    numberRoman: "Course II",
    title: "Mystery of the Depths",
    theme: "Mystery - Fiery Palette",
    dishName: "Denis fish in Egyptian tagine with harissa",
    description:
      "Spicy red pepper sauce, cherry tomatoes and olives slow-cooked in traditional terracotta with wild sea denis.",
    continents: ["Egypt", "Mediterranean"],
    keyIngredients: ["Wild sea denis (dorade)", "House-smoked harissa", "Confit cherry tomatoes", "Kalamata olives"],
    saltUsed: "Smoked Cyprus Black Sea Salt",
    image: "/images/course-2.webp",
    winePairing: "Khvanchkara Amber Qvevri 2020",
  },
  {
    id: 3,
    numberRoman: "Course III",
    title: "The Heat of the Surf",
    theme: "Energy - Synthesis of Elements",
    dishName: "Georgian trout on the vine with smoked aubergine",
    description:
      "Grilled mountain trout wrapped in vine leaves, accompanied by smoky aubergine mousse and wild mint yoghurt, served on a searing salt slab.",
    continents: ["Georgia", "Mediterranean"],
    keyIngredients: ["Caucasus river trout", "Vine leaves", "Ember-smoked aubergine", "Cultured mint buffalo yoghurt"],
    saltUsed: "Ancient Himalayan Pink Salt Slab (seared at 300°C)",
    image: "/images/course-3.webp",
    winePairing: "Saperavi Reserve 2019 (Mukuzani)",
  },
  {
    id: 4,
    numberRoman: "Course IV",
    title: "Pier of Three Cultures",
    theme: "Unity - Earth and Sea",
    dishName: "Mussels in Georgian lobio with date crumble",
    description:
      "White beans stewed with mountain herbs and tender Mediterranean mussels in white wine, sprinkled with Egyptian spiced date crumble.",
    continents: ["Georgia", "Egypt", "Mediterranean"],
    keyIngredients: ["Mediterranean rock mussels", "Georgian white lobio beans", "Dried oasis dates", "Coriander & blue fenugreek"],
    saltUsed: "Dead Sea Mineral Flakes",
    image: "/images/course-4.webp",
    winePairing: "Chhaveri Rosé Qvevri 2022",
  },
  {
    id: 5,
    numberRoman: "Course V",
    title: "Sunset over the Ocean",
    theme: "Finale of a symphony",
    dishName: "Date mousse with lemon sorbet and caramel figs",
    description:
      "Silken Egyptian date mousse paired with crisp lemon sorbet, crunchy caramelised figs and delicate Fleur de Sel crystals.",
    continents: ["Egypt", "Mediterranean"],
    keyIngredients: ["Medjool date cream", "Menton lemon sorbet", "Sun-ripened caramel figs", "Crispy almond tulle"],
    saltUsed: "Brittany Fleur de Sel with sea salt caramel",
    image: "/images/course-5.webp",
    winePairing: "Georgian Icewine Saperavi or Cha-Cha Digestif",
  },
];

export const COCKTAILS: CocktailItem[] = [
  {
    id: 1,
    numberRoman: "I",
    name: "Batumi Wave Cocktail",
    ingredients: "Georgian chacha, cucumber liqueur, mint, pink salt",
    flavorProfile: { salinity: 75, sweetness: 40, acidity: 65, depth: 80 },
    coursePairing: "Course I - Fresh Breeze Tuna",
    image: "/images/drink-1.webp",
    story: "Inspired by the cool morning spray of the Black Sea meeting the green Caucasus mountain air.",
  },
  {
    id: 2,
    numberRoman: "II",
    name: "Lilac Mist Cocktail",
    ingredients: "Georgian chacha, lilac syrup, lemon juice, salt",
    flavorProfile: { salinity: 60, sweetness: 55, acidity: 70, depth: 75 },
    coursePairing: "Course II - Mystery of the Depths Tagine",
    image: "/images/drink-2.webp",
    story: "Botanical florals dance with sharp citrus and sea minerals to temper fiery Egyptian harissa.",
  },
  {
    id: 3,
    numberRoman: "III",
    name: "Desert Whispe Cocktail",
    ingredients: "Whiskey, date syrup, rosemary, lemon ash",
    flavorProfile: { salinity: 50, sweetness: 65, acidity: 45, depth: 95 },
    coursePairing: "Course III - Georgian Trout on the Vine",
    image: "/images/drink-3.webp",
    story: "Rich smoky embers evoking ancient Bedouin night camps across the red dunes.",
  },
  {
    id: 4,
    numberRoman: "IV",
    name: "Red Sea Cocktail",
    ingredients: "Gin, hibiscus, lime juice, tonic with black salt crystals",
    flavorProfile: { salinity: 80, sweetness: 50, acidity: 85, depth: 70 },
    coursePairing: "Course IV - Pier of Three Cultures Mussels",
    image: "/images/drink-4.webp",
    story: "A crimson infusion reminiscent of Egyptian karkadeh colliding with coastal Mediterranean tonic.",
  },
  {
    id: 5,
    numberRoman: "V",
    name: "Gold of the Pharaohs",
    ingredients: "Rum, sea salt caramel, saffron, orange bitters",
    flavorProfile: { salinity: 65, sweetness: 85, acidity: 35, depth: 90 },
    coursePairing: "Course V - Sunset over the Ocean Date Mousse",
    image: "/images/drink-5.webp",
    story: "Liquid luxury: fragrant Persian saffron and golden caramel balanced by oceanic salt.",
  },
];

export const TEAM: TeamMember[] = [
  {
    name: "Nino Tsiklauri",
    role: "Dough Alchemist",
    origin: "Georgia",
    image: "/images/nino.webp",
    bio: "Master of ancient Georgian wild grain doughs and stone-baked flatbreads that cradle sacred spices.",
    specialty: "Sourdough Fermentation & Toné Oven Artistry",
  },
  {
    name: "Amir El-Masih",
    role: "Fire & Spice Sage",
    origin: "Egypt",
    image: "/images/amir.webp",
    bio: "Hailing from Alexandria, Amir orchestrates smoky terracotta tagines and authentic Alexandria dukkah roasts.",
    specialty: "Ancient Spice Grinding & Hearth Fire Roasting",
  },
  {
    name: "Luca De Sanctis",
    role: "Seafood Virtuoso",
    origin: "Italy",
    image: "/images/luca.webp",
    bio: "Raised on the Ligurian coastline, Luca treats each sea catch with minimalist reverence and immaculate precision.",
    specialty: "Crudo Marination & Mediterranean Wild Catch",
  },
  {
    name: "Sofia Martino",
    role: "Dessert Sorceress",
    origin: "Greece",
    image: "/images/sofia.webp",
    bio: "Transforms dates, wild mountain honey, Menton citrus and salinity into ethereal symphonies of sweetness.",
    specialty: "Botanical Sorbet & Salt Caramel Confectionery",
  },
  {
    name: "David Bagrationi",
    role: "Fermentation Maestro",
    origin: "Georgia",
    image: "/images/david.webp",
    bio: "Custodian of 8,000-year-old Qvevri clay vessel winemaking and lacto-fermented sea herbs.",
    specialty: "Qvevri Amber Wines & Wild Herb Ferments",
  },
];

export const SALTS: SaltVariety[] = [
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
];
