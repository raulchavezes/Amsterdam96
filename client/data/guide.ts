// =============================================================================
// Amsterdam 96 — Welcome Guide content
// -----------------------------------------------------------------------------
// All copy/data for the guide lives here so page components stay presentational.
// Content is transcribed from the Figma "Airbnb Location Guide" (Amsterdam 96).
// To reuse this guide for another stay, edit the values in this file.
// =============================================================================

export const property = {
  name: "Amsterdam 96",
  tagline: "Your guide for a unique CDMX experience",
  guests: "Zak & Althea",
  address: "Av. Amsterdam 96, Condesa",
  fullAddress: "Av. Amsterdam 96, Condesa, Cuauhtémoc, Mexico City",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+Amsterdam+96,+Condesa,+Cuauht%C3%A9moc,+Mexico+City",
};

export const contact = {
  name: "Raul Chavez",
  // International format without "+" for wa.me deep links.
  whatsapp: "5215555555555",
  whatsappUrl: "https://wa.me/5215555555555",
};

// -- Wi-Fi networks (Internet setup screen + Wi-Fi modal) ---------------------
export const wifi = {
  primary: { name: "Bunker2", password: "Urugu@@@y" },
  support: { name: "FernetBranca5", password: "Branca1845" },
};

// -- Apartment access (How to get in) -----------------------------------------
export const apartmentAccess = {
  code: "0417",
  steps: [
    {
      step: "Step 1",
      title: "",
      caption: "Find the apartment #6 at the 2nd floor upstairs.",
    },
    {
      step: "Step 2",
      title: "",
      caption: "Locate the electric lock and tap it to activate it.",
    },
    {
      step: "Step 3",
      title: "",
      caption:
        "Tap on the 3 or 4 random numbers on the screen to active the full keyboard.",
    },
    {
      step: "Step 4",
      title: "",
      caption:
        "Once the keyboard is full active tap 0147 + Lock icon on the lower right. You’re ready to open the door!",
    },
  ],
  building: {
    intro: [
      {
        title: "Street Door",
        caption: "There is an building entrance door",
      },
      {
        title: "Building door",
        caption: "Once inside the premise there is a building door",
      },
    ],
    note:
      "Please make sure the doors are always closed behind yourself and try to close them gently since they can be very loud when slamming them. There is a set of keys for this doors upon your arrival in keybox hanging from the gate and the code is 0417 Feel free to leave the keybox and use it again when leaving the apartment to put the keys back in.",
    keyboxNote:
      "Feel free to leave the keybox and use it again when leaving the apartment to put the keys back in.",
  },
};

// -- The basics & apartment cards (home menu) ----------------------------------
export const basicsCards = [
  { label: "Mexico Basics", to: "/mexico-basics" },
  { label: "Landing in CDMX", to: "/landing" },
];

export const apartmentCards = [
  { label: "House basics", to: "/house-basics" },
  { label: "Internet setup", to: "/internet" },
];

export const apartmentPhotos = [
  "Living room",
  "Dining room",
  "Master bedroom",
  "Bedroom 2",
  "Hallway",
  "Kitchen",
];

// -- Neighborhood & city list (home menu) --------------------------------------
export const neighborhoodLinks = [
  { label: "Transportation and getting around", to: "/getting-around" },
  { label: "Working from Condesa", to: "/working" },
  { label: "Food, Drinks & Groceries", to: "/food" },
  { label: "Cash, ATMS & Money Exchange", to: "/cash" },
  { label: "Wander-Worthy spots", to: "/coming-soon", disabled: true },
  { label: "Museums", to: "/coming-soon", disabled: true },
  { label: "Restaurants", to: "/coming-soon", disabled: true },
  { label: "Markets", to: "/coming-soon", disabled: true },
  { label: "Exercise and Fitness", to: "/coming-soon", disabled: true },
  { label: "Day & Weekend Trips", to: "/coming-soon", disabled: true },
];

// -- Mexico Basics -------------------------------------------------------------
export const mexicoBasics = {
  subtitle: "Let’s start with the basics",
  facts: [
    { label: "Language", value: "Spanish" },
    { label: "Currency", value: "Mexican Peso, 20 MX=$ 1 USD" },
    { label: "Phone Code", value: "+52" },
    { label: "Time Zone", value: "UTC -6" },
    { label: "Electricity Voltage", value: "110 Volts 60Hz" },
    { label: "Electricity Plug", value: "Type A and B" },
    { label: "Drives on the", value: "Right" },
    { label: "Government", value: "Democratic republic" },
    { label: "Religion", value: "Catholic 83%" },
  ],
  cityFactsTitle: "Some Mexico City facts",
  cityFacts: [
    "Mexico City was the 2nd most populated city of the world for many years. However, according to a 2014 UN report, it is now the 4th largest city (Tokyo, Delhi and Shanghai are the top 3).",
    "“Chilango” is the Mexican slang demonym for residents of Mexico City.",
    "There are 4 UNESCO World Heritage sites: the Historic Center, Xochimilco (a borough known for its canals and artificial islands), UNAM’s Campus C.U. (Mexico’s largest public university) and Luis Barragan’s House and Studio (a prominent Mexican architect).",
    "The central square of the city, commonly known as “Zócalo”, is the second largest of the world.",
    "Mexico City has the largest number of museums in the Americas and the second largest number in the world, after London (more than Madrid, New York or Paris!). It has 186 officially recognized museums and more than 200 if those with no official recognition are included.",
    "Bosque de Chapultepec is the biggest city park in America -- it is twice the size of New York’s Central Park!",
    "The city has won over 400 Guinness Records. A few of the most notable ones are: The Biggest Flower Carpet in the World, The Largest Group of People Dancing “Thriller,” The Largest Group of Naked People in Public, The Biggest Vintage Cars Parade, The Largest Group of People Kissing.",
  ],
};

// -- Landing in CDMX -----------------------------------------------------------
export const landing = {
  covidTitle: "Covid information at the moment",
  covidText:
    "No PCR test upon arrival neither obligatory quarentine is needed to enter Mexico",
  gettingInTitle: "Getting into the apartment",
  gettingInText:
    "We highly recommend using apps like Uber, Didi or Cabify to request your transport, rather than flagging cabs off the street. This way, you’re guaranteed a licensed driver, you can input your destination (for those with minimal Spanish), and you can calculate the price ahead of time. If using Uber you will need to identify if you are arriving at terminal 1 or 2, plus identify the gate number that you are at for requesting your ride. It should take around 30 minutes to get from the airport to the apartment at Condesa, in traffic is light - it could take up to 2 hours on heavy traffic.",
  shareTitle: "Don’t forget to share your arriving hour",
  shareText:
    "Share with me you arriving hour so myself or a host can welcome you at the apartment when you arrive. Don’t hesitate to message me if you have any other doubt.",
};

// -- House Basics --------------------------------------------------------------
export const houseBasics = {
  sections: [
    {
      title: "Hola Alexa",
      text:
        "We have set a couple of Alexas to help you with anything during your stay. Just shout “Alexa...” and ask anything, from playing music, finding mexican recipies even turn on/off the terrace lights. Some handy Alexa requests: “Alexa prender / apagar terraza” - Turn on/off terrace lights “Alexa buenas noches” - Turn off all lights “Alexa Sala en 20” - Dim the light of the room",
    },
    {
      title: "Hot Water Heater & electricity",
      text:
        "To get hot water there is a boiler on the kitchen, all you need to do is turn on the switch beside to it to start heating the water. It should take around 15-20 minutes to get hot water. It’s really important that it’s TURN OFF if you are going to use any domestic appliance. Electricity in the city of Mexico, especially in La Condesa, is somewhat unstable. To avoid a short circuit it is best to keep the boiler off when not in use.",
    },
    {
      title: "Security",
      text:
        "The premise is quite secure, but is important to make sure that all doors are keep closed at all times, from the apartment and from the shared areas. Be sure the private terrace door is closed when leaving the apartment, key is next to the door on a woven basket. There are 2 gates to enter the building, make sure they are always closed when you used them. Please be mindful about close them gently, since they can be really loud if you slam them. Try to avoid tailgating.",
    },
    {
      title: "Building rules",
      text:
        "Music and loud noise should be off at 10pm during weekdays and weekends. Smoking is not allowed inside the apartment, neither on shared areas. You can smoke on the private terrace. smoke on shared areas make sure you take your cigarette butt into the trash.",
    },
    {
      title: "Housekeeping, garbage and laundry",
      text:
        "Once a week on Fridays Fabiola help us with a deep cleaning of the apartment, she arrives around 9AM. If you want extra cleaning service, I can help you to schedule something with her. Also you can use Homely app to schedule; easy and secure. Garbage recollection happens 3 times a week, on Mondays, Wednesday and Fridays. On Fridays Fabiola will help you to take the trash out and on Mondays and Wednesdays Mrs. Teo (from the front apartment) will only pick up any garbage that you have on the front door from inside the apartment. Please do not put any garbage outside the apartment door. You will find 2 bins on the kitchen, one small for organic waste and one big for general waste. For laundry you can use the washer/dryer machine on the terrace. For fabric detergent and softener, I recommend going to Re (A Granel), a refill store with nice biodegradable supplies for personal and cleaning stuff, just couple streets away.",
    },
  ],
  questionTitle: "Any question?",
  questionText: "Don’t hesitate to message me if you have any doubt",
};

// -- Internet setup ------------------------------------------------------------
export const internet = {
  networks: [
    { label: "Wi Fi Network", value: "Bunker2" },
    { label: "Password", value: "Urugu@@@y" },
    { label: "Support Wi Fi Network", value: "FernetBranca5" },
    { label: "Password", value: "Branca1845" },
  ],
  sections: [
    {
      title: "Internet Speed",
      text: "Up to 200 Mbps",
    },
    {
      title: "Ethernet",
      text:
        "If you want to boost your connection by Ethernet, you can connect yourself by Ethernet cable from the Smart Wi-Fi Modem on the desk on Bedroom 2.",
    },
    {
      title: "SIM Card + Mobile Data",
      text:
        "You can get a SIM Card at any Oxxo, Circle K or Seven Eleven grocery store. No passport or ID needed to get one. You can top-up more credit at the store or do it online. We recommend Telcel SIM cards, since it’s easier to top-up online. Some USA mobile companies have coverage upon Mexico, check with your local company if they have this service. If you’re planning on getting a local SIM card, check that your phone is “open” or “unlocked” and can accept other SIM cards from other companies.",
    },
  ],
};

// -- Getting around ------------------------------------------------------------
export const gettingAround = {
  intro:
    "Getting around in a new city can be a challenge. Be patient, and remember that it is always going to take 25% longer than you expect. Give yourself that time, and enjoy getting a little lost sometimes—you might discover something amazing.",
  sections: [
    {
      title: "Walking",
      text:
        "As you will see, our neighborhood is super walkable! It’s generally safe to walk around, but like any city in the world, you should always be aware of your surroundings, especially late at night. Stick to busy, luminated, and well-traversed areas and don’t be afraid to ask for help.",
    },
    {
      title: "Uber & Taxi",
      text:
        "In Mexico City, you can take a taxi or an Uber to get almost anywhere at a really good price. We highly recommend using apps like Uber, Didi or Cabify to request your transport, rather than flagging cabs off the street. This way, you’re guaranteed a licensed driver, you can input your destination (for those with minimal Spanish), and you can calculate the price ahead of time. Plus is more safe.",
    },
    {
      title: "Scooters",
      text:
        "If you are feeling adventurous and want to try a scooter, you should explore a platform called Econduce. The information is only in Spanish, though, so to take the test online you’ll have to use your Spanish skills, or you can schedule an appointment to take the test in person. This is very fun if you already have experience with scooters, but otherwise Mexico City can be a kind of overwhelming place to learn!",
    },
    {
      title: "Biking",
      text:
        "It is very easy and quicker to get to nearby places by bike, so biking is a great transportation option. In addition to regular rentals, there are also a couple public bike services, like EcoBici, which is an on-demand service where you can register yourself for temporary service.",
    },
    {
      title: "Metro + Metro Bus",
      text:
        "There are several public transportation options available, including a metro, a metrobus system and city buses. The Metro and MetroBus are easy to use. For information, maps and metro routes consult the metro website. *Not recommended during Covid Pandemic",
    },
  ],
};

// -- Working from Condesa ------------------------------------------------------
export const working = {
  subtitle: "Working from Cafes & Other Spaces",
  places: [
    {
      name: "Caffe Toscano",
      address: "Av Michoacán 30A, Condesa",
      text:
        "Italian-inspired cafe that combines the contemporary with the rustic in a great spot for hanging out, grabbing a drink with friends and getting some work done.",
    },
    {
      name: "Dosis Cafe",
      address: "Av Álvaro Obregón 24B, Roma Nte",
      text: "Industrial style, this chic spot offer great coffee and a toast bar.",
    },
    {
      name: "Tierra Garat",
      address: "Av Nuevo León 122, Condesa",
      text:
        "There are multiple branches of this local chain. Great for early starts and late nights. Extensive coffee and tea menu.",
    },
    {
      name: "Eno",
      address: "Chihuahua 139, Roma Nte",
      text:
        "This pet-friendly restaurant has several locations. It gets busy during peak meal times but is great for a mid morning or afternoon work session.",
    },
    {
      name: "Blend Station",
      address: "Av Tamaulipas 60, Condesa",
      text:
        "Run by self-proclaimed coffee geeks, Blend Station also offers gorgeous smoothie bowls and a great selection of fancy toast (including a couple avocado toast options)",
    },
    {
      name: "El Péndulo",
      address: "Av Nuevo León 115, Condesa",
      text:
        "To really get inspired to be productive, head to this cafe-bookshop to work amongst shelves of books (and check out some of their social initiatives!)",
    },
    {
      name: "Qüentin Café",
      address: "Av Amsterdam 67a, Condesa",
      text:
        "Good coffee, awesome space to get some work done just a couple steps from the apartment",
    },
  ],
  outro: "and many more... Go out and discover your own favorite places",
};

// -- Food, Drinks & Groceries --------------------------------------------------
export const food = {
  sections: [
    {
      title: "Water",
      text:
        "It is not recommended to drink the tap water in Mexico City, you can get water gallon bottles at 7-eleven. Ice at restaurants is generally fine.",
    },
    {
      title: "Supermaket & Groceries store",
      text:
        "There is a Superama Supermarket one street away on Av. Amsterdam, just steps away from the apartment if you need to buy anything. It closes at 10pm Also there is an 24 hours 7-Eleven one street away on the corner of Av. Nuevo Leon. Don’t forget your backpack or tote bags to carry your groceries. There are a couple of tote bags on the kitchen for your use.",
    },
    {
      title: "Rappi, Cornershop & Uber Eats",
      text:
        "You can get anything from Rappi app, and when we mean everything is almost everything. From restaurant delivery, licor store, pharmacy, even cash. I recommend to download it. You can also use Cornershop for groceries delivery, and Uber Eats for restaurant delivery.",
    },
  ],
};

// -- Cash, ATMs & Money Exchange -----------------------------------------------
export const cash = {
  text:
    "Most places nearby accept credit/debit cards, but it’s good to have some cash on hand for other parts of the city, smaller shops or street food. If you are buying from a street vendor then expect to pay always pay cash. You can easily find ATMs to withdraw pesos, and there are tons of ATMs around our apartment. Also you will find two Money Exchange houses just a couple streets away from the apartment at Av. Tamaulipas and Av. Michoacan.",
};
