// ============================================================
//  CxC TRAVEL — DATA FILE
//  Edit this file to add destinations, packages, and keywords.
//  The app (index.html) loads this automatically.
// ============================================================

// ─── HOW TO ADD A DESTINATION ────────────────────────────────
// 1. Add a new entry to KB below following the same format
// 2. Add keywords to DEST_KEYS so the chatbot can detect it
// 3. That's it — the chatbot will answer questions about it automatically
//
// REQUIRED fields:  label, emoji, vibe
// OPTIONAL fields:  hotels, restaurants, activities, golf,
//                   allinclusive, bestFor, bestTime, flight
//
// TEMPLATE — copy and paste this to add a new destination:
//
// mykey: {
//   label: "City Name",
//   emoji: "🌴",
//   vibe: "One paragraph describing the destination vibe and why people go.",
//   hotels: [
//     { name: "Hotel Name", tier: "Luxury", price: "$300–$500/night", notes: "Why it's great." },
//   ],
//   restaurants: [
//     { name: "Restaurant Name", cuisine: "Type of food", notes: "Why it's great." },
//   ],
//   activities: [
//     { name: "Activity Name", price: "$50/pp", notes: "Why it's great." },
//   ],
//   golf: [  // optional — only include if destination has notable golf
//     { name: "Course Name", tier: "Elite", price: "$150–$250/round", notes: "Why it's great." },
//   ],
//   allinclusive: [  // optional — only include if notable AI resorts exist
//     { name: "Resort Name", type: "Adults-Only", price: "$300–$500/night", highlights: ["Highlight 1", "Highlight 2"] },
//   ],
//   bestFor: ["Couples", "Families", "Golf", "Foodies"],
//   bestTime: "November–April.",
//   flight: "~X hours from Pittsburgh."
// },
// ─────────────────────────────────────────────────────────────

const KB = {

  // ── CARIBBEAN ───────────────────────────────────────────────

  aruba: {
    label: "Aruba", emoji: "🌴",
    vibe: "Aruba is one of the Caribbean's crown jewels — sunny nearly 365 days a year, outside the hurricane belt, powder-white beaches and crystal-clear water. Perfect for couples, beach lovers, and anyone wanting a true island escape.",
    hotels: [
      { name: "Bucuti & Tara Beach Resort", tier: "Luxury", price: "$450–$700/night", notes: "Adults-only, consistently rated #1 in the Caribbean on TripAdvisor. Stunning beachfront." },
      { name: "Hyatt Regency Aruba", tier: "Upscale", price: "$350–$550/night", notes: "Full resort amenities, casino, multiple pools. Great for groups." },
      { name: "Riu Palace Antillas", tier: "All-Inclusive", price: "$300–$500/night", notes: "Adults-only all-inclusive. Premium drinks and dining, oceanfront Palm Beach." },
      { name: "Manchebo Beach Resort", tier: "Boutique", price: "$280–$450/night", notes: "Yoga-focused, quietest beach on the island. Very intimate." },
      { name: "Divi All-Inclusive Resort", tier: "Family AI", price: "$250–$400/night", notes: "Family-friendly all-inclusive. Two resorts, one wristband. 5 pools." }
    ],
    restaurants: [
      { name: "Flying Fishbone", cuisine: "Seafood", notes: "Tables literally over the water at sunset. Most romantic spot on the island." },
      { name: "Gasparito Restaurant", cuisine: "Authentic Aruban", notes: "Set in a 17th century cunucu house. Must try the Keshi Yena." },
      { name: "Screaming Eagle", cuisine: "International Fusion", notes: "Ultra-glamorous bed-seating. Great for a special night out." },
      { name: "Zeerovers", cuisine: "Local Seafood", notes: "Hidden gem — a local fish market that fries your catch. Dirt cheap, delicious." }
    ],
    activities: [
      { name: "Natural Pool ATV Tour", price: "$80–$120/pp", notes: "Off-road to a secret natural pool carved into volcanic rock. Bucket list." },
      { name: "Catamaran Snorkel Cruise", price: "$60–$90/pp", notes: "Sail, snorkel two reef sites, open bar. Best way to see the island." },
      { name: "Eagle Beach", price: "Free", notes: "One of the most beautiful beaches in the world. Don't miss the flamingos nearby." },
      { name: "Baby Beach Snorkeling", price: "Free", notes: "Calm shallow lagoon on the southeast tip. Best free snorkeling on the island." }
    ],
    allinclusive: [
      { name: "Riu Palace Antillas", type: "Adults-Only", price: "$300–$500/night", highlights: ["Premium open bar 24/7", "5 restaurants", "Oceanfront Palm Beach"] },
      { name: "Divi & Tamarijn Resorts", type: "Family-Friendly", price: "$250–$400/night", highlights: ["Two resorts, one wristband", "5 pools", "Great for families"] }
    ],
    bestFor: ["Couples", "Honeymoon", "Beach lovers", "Adults-only retreats"],
    bestTime: "January–August. Hurricane-free year-round.",
    flight: "~5 hours from Pittsburgh, 1 stop through Miami or Charlotte."
  },

  cancun: {
    label: "Cancun / Riviera Maya", emoji: "🌊",
    vibe: "Mexico's Caribbean coast offers world-class all-inclusive resorts, ancient Mayan ruins, cenote swimming, and some of the bluest water you've ever seen. Great for groups, couples, and families.",
    hotels: [
      { name: "Hyatt Ziva Cancun", tier: "Luxury AI", price: "$400–$700/night", notes: "Stunning oceanfront location. Rooftop bar, multiple pools." },
      { name: "Excellence Playa Mujeres", tier: "Adults-Only", price: "$500–$850/night", notes: "Private peninsula. Golf, 11 restaurants." },
      { name: "Moon Palace", tier: "Mega Resort", price: "$350–$600/night", notes: "Best for large groups. Golf, waterpark, 14 restaurants." },
      { name: "Hard Rock Cancun", tier: "Upscale AI", price: "$300–$500/night", notes: "Lively atmosphere, entertainment, unlimited premium drinks." },
      { name: "Secrets Akumal", tier: "Adults Boutique", price: "$450–$750/night", notes: "Swim-up suites, Preferred Club amenities. Consistently top-rated." }
    ],
    restaurants: [
      { name: "Hartwood (Tulum)", cuisine: "Open Fire Farm-to-Table", notes: "Worth the drive to Tulum. James Beard buzz, truly unforgettable." },
      { name: "La Parrilla", cuisine: "Mexican Grill", notes: "Cancun institution downtown. Live mariachi, flaming drinks, incredible food." },
      { name: "La Fisheria", cuisine: "Seafood", notes: "Best fresh seafood in the Hotel Zone. Casual, great value." }
    ],
    activities: [
      { name: "Chichen Itza Day Trip", price: "$80–$120/pp", notes: "One of the 7 Wonders of the World. Absolutely worth it." },
      { name: "Cenote Ik Kil", price: "$25/pp", notes: "Sacred cenote near Chichen Itza. Crystal-clear water, waterfall." },
      { name: "Xcaret Park", price: "$100–$130/pp", notes: "Underground rivers, ruins, cultural show at night." },
      { name: "Isla Mujeres Catamaran", price: "$70–$100/pp", notes: "Snorkel, beach time, open bar. Best day trip from Cancun." },
      { name: "Tulum Ruins & Beach", price: "$15/pp", notes: "Mayan ruins over the Caribbean. Swim at the cliff-base beach below." }
    ],
    allinclusive: [
      { name: "Hyatt Ziva Cancun", type: "Family & Couples", price: "$400–$700/night", highlights: ["Oceanfront tip location", "10 restaurants", "Rooftop infinity pool"] },
      { name: "Excellence Playa Mujeres", type: "Adults-Only", price: "$500–$850/night", highlights: ["Golf on-site", "Private peninsula", "11 restaurants & bars"] },
      { name: "Moon Palace", type: "Mega Resort / Groups", price: "$350–$600/night", highlights: ["Largest pool complex", "Golf on-site", "14 restaurants"] }
    ],
    bestFor: ["All-Inclusive lovers", "Groups", "Couples", "Families", "Cultural trips"],
    bestTime: "December–April. Hurricane season: June–November.",
    flight: "~4.5 hours from Pittsburgh, 1 stop through Atlanta or Charlotte."
  },

  jamaica: {
    label: "Jamaica", emoji: "🎵",
    vibe: "Jamaica hits different — vibrant culture, reggae in the air, lush mountains, waterfalls, and warm people. Great for couples, groups, and anyone seeking Caribbean soul.",
    hotels: [
      { name: "Sandals Royal Plantation", tier: "Ultra-Luxury", price: "$600–$1,100/night", notes: "All-suite, all-butler. Only 74 suites. Most exclusive Sandals property." },
      { name: "Beaches Negril", tier: "Family AI", price: "$400–$700/night", notes: "Best family resort in Jamaica. Sesame Street, waterpark, 7-Mile Beach." },
      { name: "Sandals Montego Bay", tier: "Luxury Adults", price: "$400–$800/night", notes: "Original Sandals property. Right on the beach, great energy." },
      { name: "Rockhouse Hotel", tier: "Boutique", price: "$200–$400/night", notes: "Cliffside thatched-roof villas in Negril. A design icon." }
    ],
    restaurants: [
      { name: "Scotchies", cuisine: "Jamaican BBQ", notes: "The definitive jerk spot in Jamaica. Order the pork and festival." },
      { name: "Miss T's Kitchen", cuisine: "Jamaican Home Cooking", notes: "James Beard recognized. Real Jamaican cooking in Ocho Rios." },
      { name: "The Pelican Grill", cuisine: "Jamaican / Seafood", notes: "Montego Bay institution since 1966. Unpretentious and delicious." }
    ],
    activities: [
      { name: "Dunn's River Falls", price: "$30/pp", notes: "Iconic terraced waterfall you climb. Fun, wet, unforgettable." },
      { name: "Bob Marley Nine Mile Tour", price: "$60/pp", notes: "Visit Bob Marley's birthplace and mausoleum. Moving and fascinating." },
      { name: "Negril 7-Mile Beach", price: "Free", notes: "One of the best beaches in the world." },
      { name: "Appleton Estate Rum Tour", price: "$45/pp", notes: "Most historic rum distillery in Jamaica. Tasting included." }
    ],
    bestFor: ["Couples", "Honeymooners", "Families", "Cultural travelers"],
    bestTime: "November–mid-December and January–April.",
    flight: "~4 hours from Pittsburgh, 1 stop through Atlanta or Charlotte."
  },

  bahamas: {
    label: "The Bahamas", emoji: "🏝️",
    vibe: "700 islands of crystal-clear water, pink-sand beaches, swimming pigs, and the most vivid blue ocean anywhere on earth. Nassau for resort action, Exumas for pure nature, Harbour Island for romance.",
    hotels: [
      { name: "Atlantis Paradise Island", tier: "Mega Resort", price: "$300–$800/night", notes: "Iconic water park, 11 pools, casino, aquarium. Best for families." },
      { name: "SLS Baha Mar", tier: "Luxury", price: "$400–$900/night", notes: "Sleekest resort in Nassau. Casino, multiple pools, great beach." },
      { name: "Pink Sands Resort (Harbour Island)", tier: "Boutique Luxury", price: "$600–$1,200/night", notes: "On the famous pink sand beach. Tiny, intimate, incredibly romantic." },
      { name: "Grand Isle Resort (Exumas)", tier: "Luxury Villas", price: "$500–$1,500/night", notes: "Private villas over the Exuma Sound. Steps from swimming pigs." }
    ],
    restaurants: [
      { name: "Graycliff Restaurant (Nassau)", cuisine: "Continental Fine Dining", notes: "Historic mansion, 250,000-bottle wine cellar. Special occasion dining." },
      { name: "Lukka Kairi (Baha Mar)", cuisine: "Caribbean", notes: "Overwater restaurant, best sunset views in Nassau." },
      { name: "The Landing (Harbour Island)", cuisine: "Bahamian / Seafood", notes: "Laid-back, barefoot-luxury. Freshest fish on the island." }
    ],
    activities: [
      { name: "Swimming Pigs Exuma", price: "$150–$200/pp", notes: "The famous swimming pigs of Big Major Cay. Totally unique and worth it." },
      { name: "Thunderball Grotto Snorkel", price: "$30/pp", notes: "James Bond filming location. Swim through caves into an open-top grotto." },
      { name: "Atlantis Water Park", price: "Resort guests free / $130/pp", notes: "Massive water park with slides, lazy river, wave pool." },
      { name: "Pink Sand Beach (Harbour Island)", price: "Free", notes: "3-mile beach of naturally pink sand. One of the world's most photographed beaches." }
    ],
    bestFor: ["Families", "Couples", "Honeymoon", "Adventure"],
    bestTime: "December–May.",
    flight: "~3 hours from Pittsburgh, 1 stop through Miami or Charlotte."
  },

  puntacana: {
    label: "Punta Cana", emoji: "🌺",
    vibe: "Dominican Republic's beach playground — the best value in the Caribbean for all-inclusive resorts, with 20+ miles of palm-lined beach, warm turquoise water, and non-stop sunshine.",
    hotels: [
      { name: "Excellence El Carmen", tier: "Adults-Only Luxury", price: "$350–$600/night", notes: "Adults-only, swim-up suites, 10 restaurants. Consistently top-rated." },
      { name: "Zoëtry Agua Punta Cana", tier: "Boutique Luxury AI", price: "$400–$700/night", notes: "Small, intimate, ultra-high-end. Butlers, gourmet all-inclusive." },
      { name: "Hard Rock Punta Cana", tier: "Luxury AI", price: "$300–$600/night", notes: "Music-themed mega-resort. 13 restaurants, casino, massive pool complex." },
      { name: "Barceló Bávaro Palace", tier: "Upscale AI", price: "$200–$350/night", notes: "Best value luxury all-inclusive. Great for groups and families." }
    ],
    restaurants: [
      { name: "La Yola (PUNTACANA Resort)", cuisine: "Seafood / Caribbean", notes: "Built over the water on stilts. Beautiful at sunset." },
      { name: "Jellyfish Restaurant", cuisine: "Seafood", notes: "Toes-in-the-sand dining right on the beach. Lobster is exceptional." }
    ],
    activities: [
      { name: "Saona Island Day Trip", price: "$80–$120/pp", notes: "Remote paradise island with natural swimming pools. Best day trip in the DR." },
      { name: "Buggy Adventure Tours", price: "$70–$100/pp", notes: "Drive ATVs through sugarcane fields to a local village." },
      { name: "Scape Park", price: "$60–$90/pp", notes: "Cenote swimming, zip lines, cultural shows. Full day of activities." }
    ],
    allinclusive: [
      { name: "Excellence El Carmen", type: "Adults-Only", price: "$350–$600/night", highlights: ["10 restaurants", "Swim-up suites", "Non-motorized water sports"] },
      { name: "Hard Rock Punta Cana", type: "Family / Groups", price: "$300–$600/night", highlights: ["13 restaurants", "Casino & entertainment", "Massive pool complex"] }
    ],
    bestFor: ["Best value all-inclusive", "Groups", "Couples", "Families"],
    bestTime: "December–April.",
    flight: "~5 hours from Pittsburgh, 1 stop."
  },

  // ── USA ─────────────────────────────────────────────────────

  lasvegas: {
    label: "Las Vegas", emoji: "🎰",
    vibe: "Las Vegas is pure spectacle — world-class dining, jaw-dropping shows, sports, F1, boxing, and nightlife. Something for everyone.",
    hotels: [
      { name: "Wynn Las Vegas", tier: "Ultra-Luxury", price: "$300–$800/night", notes: "Most consistently excellent hotel on the Strip." },
      { name: "The Venetian Resort", tier: "Luxury", price: "$200–$500/night", notes: "All suites 700 sq ft+. Incredible food hall." },
      { name: "Bellagio", tier: "Luxury", price: "$200–$500/night", notes: "The icon. Fountain show, amazing restaurants." },
      { name: "The Cosmopolitan", tier: "Upscale", price: "$180–$400/night", notes: "Best vibe on the Strip. Private terraces overlooking the Bellagio fountain." },
      { name: "Resorts World Las Vegas", tier: "Luxury New", price: "$150–$400/night", notes: "Newest mega-resort. Three hotels in one, incredible pool deck." }
    ],
    golf: [
      { name: "Shadow Creek", tier: "World-Class", price: "$500–$600/round", notes: "Tom Fazio masterpiece. MGM guests only. Rolls Royce pickup. Bucket list." },
      { name: "Cascata Golf Club", tier: "Elite", price: "$250–$400/round", notes: "600-foot waterfall, Red Rock views. Top-100 US course." },
      { name: "Wolf Creek", tier: "Elite", price: "$150–$250/round", notes: "45 min from Vegas. Dramatic canyon course carved into red rock." }
    ],
    activities: [
      { name: "The Sphere", price: "$100–$300/pp", notes: "The most immersive entertainment venue ever built." },
      { name: "F1 Las Vegas Grand Prix", price: "$500+/pp", notes: "November annually. Cars racing down the Strip at 200mph." },
      { name: "Grand Canyon Helicopter", price: "$300–$550/pp", notes: "Fly from Vegas, land in the canyon, champagne toast." },
      { name: "High Roller at Dusk", price: "$30–$40/pp", notes: "500-foot Ferris wheel. Get the open bar pod." },
      { name: "Fremont Street Experience", price: "Free", notes: "Old Vegas free light show. Great bars, totally different vibe." }
    ],
    bestFor: ["Groups", "Bachelor/Bachelorette", "Golf", "Sports events", "Foodies"],
    bestTime: "October–April. Summer has deals but 110°F+.",
    flight: "~5 hours from Pittsburgh, 1 stop."
  },

  orlando: {
    label: "Orlando / Disney", emoji: "✨",
    vibe: "The world's theme park capital — Disney World, Universal's new Epic Universe, world-class golf, incredible dining.",
    hotels: [
      { name: "Disney's Grand Floridian", tier: "Luxury Disney", price: "$600–$1,200/night", notes: "Flagship Disney resort. Monorail to Magic Kingdom." },
      { name: "Loews Portofino Bay", tier: "Upscale Universal", price: "$250–$500/night", notes: "Free Express Pass at Universal included." },
      { name: "Four Seasons Orlando", tier: "Ultra-Luxury", price: "$500–$1,000/night", notes: "Private waterpark, 5 restaurants. Inside Disney World." },
      { name: "Rosen Shingle Creek", tier: "Mid-Range Resort", price: "$150–$300/night", notes: "Great for golf groups. 18-hole course on-site." }
    ],
    activities: [
      { name: "Magic Kingdom", price: "$109–$189/pp", notes: "Fireworks over Cinderella Castle. Best with young kids." },
      { name: "Universal's Epic Universe", price: "$109–$189/pp", notes: "Brand new in 2025 — Harry Potter, Nintendo, and more." },
      { name: "EPCOT Food & Wine Festival", price: "Park admission + food", notes: "August–November. Walk around the world eating and drinking." },
      { name: "Kennedy Space Center", price: "$75/pp", notes: "One of America's most impressive attractions." }
    ],
    golf: [
      { name: "Bay Hill Club", tier: "Elite", price: "$150–$250/round", notes: "Arnold Palmer's personal course. Host of the PGA Tour event each March." },
      { name: "Reunion Resort Golf", tier: "Luxury", price: "$100–$200/round", notes: "Three courses by Nicklaus, Watson, and Palmer." }
    ],
    bestFor: ["Families", "Disney fans", "Theme park lovers", "Golf groups"],
    bestTime: "January–April and September–November.",
    flight: "~2.5 hours direct from Pittsburgh."
  },

  miami: {
    label: "Miami", emoji: "🌆",
    vibe: "Electric city — Art Deco, crystal water, world-class food, nightlife that never stops. Great for groups, foodies, and beach lovers.",
    hotels: [
      { name: "Faena Hotel Miami Beach", tier: "Ultra-Luxury", price: "$600–$1,500/night", notes: "Most dramatic hotel on South Beach." },
      { name: "1 Hotel South Beach", tier: "Luxury Eco", price: "$400–$900/night", notes: "Best pool on South Beach. Legendary rooftop bar." },
      { name: "Fontainebleau Miami Beach", tier: "Luxury Resort", price: "$300–$700/night", notes: "Iconic since 1954. Massive pool scene, LIV nightclub." },
      { name: "The Setai Miami Beach", tier: "Ultra-Luxury", price: "$700–$1,500/night", notes: "Three pools in a row, Asian-inspired, most serene hotel on South Beach." }
    ],
    restaurants: [
      { name: "KYU (Wynwood)", cuisine: "Asian BBQ", notes: "James Beard nominee. Best restaurant in Miami many years running." },
      { name: "Versailles (Little Havana)", cuisine: "Cuban", notes: "The soul of Cuban Miami. A cultural institution." },
      { name: "Joe's Stone Crab", cuisine: "Seafood", notes: "Open Oct–May only. A Miami institution since 1913." }
    ],
    activities: [
      { name: "Wynwood Walls Art Walk", price: "Free", notes: "World's largest open-air street art museum." },
      { name: "Everglades Airboat Tour", price: "$35–$55/pp", notes: "30 min from Miami. Airboat through alligator-filled wilderness." },
      { name: "Little Havana Walking Tour", price: "$20–$30/pp", notes: "Cigars, café cubano, domino park, culture." }
    ],
    bestFor: ["Nightlife", "Foodies", "Art & culture lovers", "Groups", "Couples"],
    bestTime: "November–April.",
    flight: "~2.5–3 hours direct from Pittsburgh."
  },

  nashville: {
    label: "Nashville", emoji: "🎸",
    vibe: "One of America's greatest cities for groups. Live music everywhere, incredible food, buzzing nightlife. Perfect for bachelorettes, birthdays, corporate trips.",
    hotels: [
      { name: "Thompson Nashville", tier: "Luxury Boutique", price: "$300–$600/night", notes: "Best hotel in Nashville. Rooftop bar with city views." },
      { name: "JW Marriott Nashville", tier: "Luxury", price: "$250–$500/night", notes: "Rooftop pool with Broadway views. Great for groups." },
      { name: "Noelle Nashville", tier: "Boutique Upscale", price: "$250–$500/night", notes: "Art-forward, historic downtown hotel." },
      { name: "Graduate Nashville", tier: "Mid-Range", price: "$150–$300/night", notes: "Fun, quirky. Great for bachelorette parties." }
    ],
    restaurants: [
      { name: "Prince's Hot Chicken", cuisine: "Nashville Hot Chicken", notes: "The original. A cultural institution. Order medium at most." },
      { name: "Husk Nashville", cuisine: "Southern Fine Dining", notes: "James Beard Award. Best Southern ingredients." },
      { name: "Rolf & Daughters", cuisine: "Wood-Fired Italian", notes: "Best pasta in Nashville. Great wine list." },
      { name: "Butchertown Hall", cuisine: "Texas BBQ / Beer Hall", notes: "Perfect group spot. Massive beer list." }
    ],
    activities: [
      { name: "Lower Broadway Music Crawl", price: "Free", notes: "Live music starts at noon. Robert's Western World is a must." },
      { name: "Ryman Auditorium Tour", price: "$25 tour", notes: "The Mother Church of Country Music. Magical acoustics." },
      { name: "Jack Daniel's Distillery", price: "$30–$60/pp", notes: "1.5 hours from Nashville. Full whiskey experience." },
      { name: "Johnny Cash Museum", price: "$20/pp", notes: "Comprehensive tribute to the Man in Black. Worth 2 hours." }
    ],
    bestFor: ["Bachelor/Bachelorette", "Groups", "Music fans", "Birthdays"],
    bestTime: "April–May and Sept–Oct. CMA Fest in June is amazing but packed.",
    flight: "~1.5 hours direct. Easiest trip from Pittsburgh."
  },

  keys: {
    label: "Florida Keys", emoji: "🐠",
    vibe: "125 miles of islands stretching into the sea. Laid-back, colorful, and utterly unique — world-class diving, incredible fishing, and the sunset ritual at Mallory Square stays with you forever.",
    hotels: [
      { name: "Cheeca Lodge & Spa", tier: "Luxury Resort", price: "$400–$700/night", notes: "The iconic Keys resort. Private pier, saltwater lagoon, fishing packages." },
      { name: "Little Palm Island Resort", tier: "Ultra-Luxury", price: "$1,500–$3,000/night", notes: "Private island, boat or seaplane only. 30 bungalows. Most romantic place in Florida." },
      { name: "Bungalows Key Largo", tier: "Adults-Only AI", price: "$400–$700/night", notes: "All-inclusive, adults-only. Overwater hammocks, kayaks, paddleboards included." },
      { name: "Baker's Cay Resort", tier: "Upscale", price: "$300–$600/night", notes: "Key Largo. Sprawling waterfront resort, great snorkeling access." }
    ],
    restaurants: [
      { name: "Louie's Backyard (Key West)", cuisine: "New American", notes: "Deck over the water at sunset. THE dinner spot in Key West." },
      { name: "Blue Heaven (Key West)", cuisine: "Caribbean / Eclectic", notes: "Roosters wander between tables. Magical open-air atmosphere." },
      { name: "Marker 88 (Islamorada)", cuisine: "Upscale Seafood", notes: "Long bayside deck, beautiful sunsets. Consistently excellent since 1967." }
    ],
    activities: [
      { name: "John Pennekamp Coral Reef Snorkel", price: "$30/pp", notes: "America's first underwater park. Snorkel a living coral reef." },
      { name: "Sunset at Mallory Square", price: "Free", notes: "Every evening in Key West. Street performers, crowds. Unmissable." },
      { name: "Deep Sea Fishing Charter", price: "$100–$200/pp half-day", notes: "Islamorada is the 'Sport Fishing Capital of the World.'" }
    ],
    bestFor: ["Couples", "Honeymooners", "Divers & snorkelers", "Fishermen"],
    bestTime: "November–April.",
    flight: "Fly to Miami (~2.5 hrs), then drive ~3 hours to Key West."
  },

  neworleans: {
    label: "New Orleans", emoji: "🎺",
    vibe: "America's most unique city — jazz on every corner, legendary Creole food, above-ground cemeteries, and a party spirit that never quits. No city eats and drinks like New Orleans.",
    hotels: [
      { name: "Hotel Monteleone", tier: "Historic Luxury", price: "$250–$500/night", notes: "Literary landmark on Royal Street. The revolving Carousel Bar is iconic." },
      { name: "Roosevelt New Orleans (Waldorf Astoria)", tier: "Ultra-Luxury", price: "$350–$700/night", notes: "Most storied hotel in New Orleans. Sazerac Bar is a must-visit." },
      { name: "Le Pavillon Hotel", tier: "Luxury Historic", price: "$250–$500/night", notes: "Grand historic lobby, legendary peanut butter and jelly bedtime service." },
      { name: "Ace Hotel New Orleans", tier: "Boutique Upscale", price: "$200–$400/night", notes: "Cool, music-focused. Rooftop pool." }
    ],
    restaurants: [
      { name: "Commander's Palace", cuisine: "Creole Fine Dining", notes: "The most important restaurant in New Orleans. James Beard institution." },
      { name: "Dooky Chase's", cuisine: "Creole Soul Food", notes: "Civil rights history, legendary gumbo. A cultural treasure." },
      { name: "Café Du Monde", cuisine: "Beignets & Café au Lait", notes: "Open 24 hours. Powdered sugar beignets by the river. Non-negotiable." },
      { name: "Brennan's", cuisine: "New Orleans Brunch", notes: "Birthplace of Bananas Foster. The classic NOLA brunch experience." }
    ],
    activities: [
      { name: "Bourbon Street at Night", price: "Free", notes: "The full sensory experience of New Orleans." },
      { name: "Frenchmen Street Live Jazz", price: "Free–$10 cover", notes: "The REAL New Orleans music scene. Better than Bourbon Street." },
      { name: "Cemetery Tour", price: "$20–$30/pp", notes: "Above-ground tombs, voodoo history. Fascinating and eerie." },
      { name: "Swamp Tour", price: "$25–$40/pp", notes: "Alligators, cypress trees, bayou wildlife. 30 min from the city." },
      { name: "Mardi Gras (Feb/March)", price: "Free parades", notes: "The greatest free street party in America." }
    ],
    bestFor: ["Foodies", "Music lovers", "Groups", "Cultural travelers", "Events"],
    bestTime: "October–May. Mardi Gras in Feb/March is epic.",
    flight: "~3.5 hours from Pittsburgh, 1 stop."
  },

  charleston: {
    label: "Charleston, SC", emoji: "🌸",
    vibe: "America's most beautiful city — pastel antebellum mansions, cobblestone streets, world-class restaurants, stunning beaches, and Southern hospitality that feels like a different era.",
    hotels: [
      { name: "Belmond Charleston Place", tier: "Luxury", price: "$300–$600/night", notes: "The grande dame of Charleston. Rooftop pool, right on King Street." },
      { name: "Zero George Street", tier: "Boutique Luxury", price: "$350–$600/night", notes: "Five restored 19th-century buildings. Intimate, stunning courtyard." },
      { name: "The Dewberry Charleston", tier: "Boutique Luxury", price: "$300–$600/night", notes: "Mid-century modern in a historic federal building. Lively bar scene." },
      { name: "Wild Dunes Resort (Isle of Palms)", tier: "Beach Resort", price: "$250–$500/night", notes: "Oceanfront on Isle of Palms, 30 min from downtown. Golf and beach." }
    ],
    restaurants: [
      { name: "Husk", cuisine: "Southern Fine Dining", notes: "Sean Brock's flagship. The most celebrated restaurant in Charleston. Book weeks ahead." },
      { name: "FIG", cuisine: "Southern / Mediterranean", notes: "James Beard winner. Farm-to-table before it was everywhere." },
      { name: "The Ordinary", cuisine: "Oyster Bar & Seafood", notes: "Grand hall, incredible raw bar. Best oysters in the South." }
    ],
    activities: [
      { name: "Rainbow Row & Historic District Walk", price: "Free", notes: "The most photographed street in America. Easy walking." },
      { name: "Fort Sumter Boat Tour", price: "$25/pp", notes: "Where the Civil War started. Brief boat ride, fascinating history." },
      { name: "Spoleto Festival USA", price: "$25–$150/pp", notes: "Late May/June. World-class performing arts festival." },
      { name: "Kiawah Island Golf", price: "$150–$350/round", notes: "Kiawah Island's Ocean Course — host of the PGA Championship." }
    ],
    golf: [
      { name: "Kiawah Ocean Course", tier: "World-Class", price: "$250–$400/round", notes: "Host of the 2021 PGA Championship. Stunning oceanfront layout." },
      { name: "TPC Myrtle Beach (nearby)", tier: "Elite", price: "$100–$150/round", notes: "75 minutes away. Worth the drive for serious golfers." }
    ],
    bestFor: ["Couples", "Foodies", "History lovers", "Golf", "Honeymoon"],
    bestTime: "March–May and September–November.",
    flight: "~2 hours from Pittsburgh, 1 stop through Charlotte."
  },

  // ── GOLF DESTINATIONS ────────────────────────────────────────

  scottsdale: {
    label: "Scottsdale / Phoenix", emoji: "🌵",
    vibe: "Golf capital of the world. 200+ courses, perfect winter weather, world-class spas and dining.",
    hotels: [
      { name: "The Phoenician", tier: "Ultra-Luxury", price: "$500–$1,200/night", notes: "27-hole golf, Camelback Mountain backdrop." },
      { name: "Four Seasons at Troon North", tier: "Ultra-Luxury", price: "$500–$1,000/night", notes: "Steps from Troon North Golf Club." },
      { name: "Fairmont Scottsdale Princess", tier: "Luxury", price: "$350–$700/night", notes: "Home of the Waste Management Phoenix Open." },
      { name: "The Boulders Resort", tier: "Luxury", price: "$300–$650/night", notes: "Built into massive granite boulders. Two Jay Morrish golf courses." }
    ],
    golf: [
      { name: "TPC Scottsdale (Stadium Course)", tier: "World-Class", price: "$200–$350/round", notes: "Host of the WM Phoenix Open. The 16th hole is legendary." },
      { name: "Troon North (Monument)", tier: "Elite", price: "$175–$295/round", notes: "Golf Digest Top-100. Carved into the McDowell Mountains." },
      { name: "We-Ko-Pa Golf Club", tier: "Elite", price: "$150–$250/round", notes: "No homes on the course. True desert golf." },
      { name: "Grayhawk (Talon Course)", tier: "Upscale", price: "$100–$180/round", notes: "Tom Fazio design. Most popular course for visiting golfers." },
      { name: "The Boulders (South Course)", tier: "Upscale", price: "$100–$175/round", notes: "Golf through massive granite boulders. Truly unique." }
    ],
    activities: [
      { name: "Hot Air Balloon at Sunrise", price: "$180–$220/pp", notes: "Float over saguaro cacti with champagne toast." },
      { name: "Camelback Mountain Hike", price: "Free", notes: "Most iconic hike in Phoenix. Stunning views." },
      { name: "Old Town Scottsdale", price: "Free", notes: "Western art, galleries, vibrant bar scene." },
      { name: "Taliesin West", price: "$35/pp", notes: "Frank Lloyd Wright's desert masterpiece. Fascinating design tours." }
    ],
    bestFor: ["Golfers", "Spa seekers", "Groups", "Winter escape"],
    bestTime: "October–April. Summer is brutal.",
    flight: "~5 hours from Pittsburgh, 1 stop."
  },

  myrtlebeach: {
    label: "Myrtle Beach", emoji: "⛳",
    vibe: "East Coast golf capital — over 100 courses within 60 miles, the most golf-dense destination in America. Plus beaches, seafood, and easy East Coast access.",
    hotels: [
      { name: "Myrtle Beach Marriott (Grande Dunes)", tier: "Luxury Resort", price: "$200–$400/night", notes: "Best resort in the area. Full spa, Marina course access." },
      { name: "Embassy Suites Oceanfront", tier: "Mid-Range", price: "$150–$280/night", notes: "All-suite, free breakfast, oceanfront. Excellent value for golf groups." },
      { name: "Kingston Plantation", tier: "Condo Resort", price: "$150–$350/night", notes: "Sprawling oceanfront complex. Full kitchen suites, great for groups." }
    ],
    golf: [
      { name: "Caledonian Golf & Fish Club", tier: "Elite", price: "$80–$130/round", notes: "Scottish links-style. Best course in Myrtle Beach." },
      { name: "TPC Myrtle Beach", tier: "Elite", price: "$100–$150/round", notes: "Tom Fazio design. Top-50 public course in US." },
      { name: "Barefoot Resort (Fazio Course)", tier: "Elite", price: "$80–$130/round", notes: "One of four Barefoot courses. Fazio is the best." },
      { name: "Pawleys Plantation", tier: "Upscale", price: "$60–$100/round", notes: "Jack Nicklaus design. Beautiful salt marsh setting." },
      { name: "Legends Golf Complex", tier: "Mid-Range", price: "$50–$90/round", notes: "27 holes designed by multiple legends. Great value." }
    ],
    restaurants: [
      { name: "Sea Captain's House", cuisine: "Seafood", notes: "Myrtle Beach institution since 1954. Oceanfront. She-crab soup is legendary." },
      { name: "Nit Noi Thai Restaurant", cuisine: "Thai", notes: "Best non-seafood meal in Myrtle Beach. A local secret." }
    ],
    activities: [
      { name: "Broadway at the Beach", price: "Free to browse", notes: "Massive outdoor entertainment complex. Restaurants, bars, shops." }
    ],
    bestFor: ["Golf groups", "East Coast golf", "Budget golf"],
    bestTime: "March–May and September–November.",
    flight: "~2 hours from Pittsburgh, 1 stop through Charlotte."
  },

  pebblebeach: {
    label: "Pebble Beach / Monterey", emoji: "🌊",
    vibe: "Golf's holy land. The most beautiful collection of courses anywhere on earth, perched on Monterey Peninsula cliffs above the Pacific.",
    hotels: [
      { name: "The Lodge at Pebble Beach", tier: "Iconic", price: "$800–$2,500/night", notes: "THE home of golf. 18th fairway views, steps from the first tee. Bucket list." },
      { name: "The Inn at Spanish Bay", tier: "Ultra-Luxury", price: "$600–$1,500/night", notes: "Bagpiper at sunset daily. Links-style course on-site." },
      { name: "Hyatt Regency Monterey", tier: "Mid-Range", price: "$200–$400/night", notes: "Good value base. Old Del Monte golf course on-site." }
    ],
    golf: [
      { name: "Pebble Beach Golf Links", tier: "Bucket List", price: "$550–$625/round", notes: "#1 public course in America. Host of 6 US Opens. Holes 6–10 along the Pacific are the most beautiful in golf." },
      { name: "Spyglass Hill", tier: "Elite", price: "$300–$400/round", notes: "Extremely challenging. Starts in forest, finishes on the ocean." },
      { name: "Poppy Hills", tier: "Upscale", price: "$100–$175/round", notes: "Best value on the Pebble Beach property." }
    ],
    restaurants: [
      { name: "Stillwater Bar & Grill", cuisine: "California Seafood", notes: "18th green views. Most scenic dining in American golf." },
      { name: "Aubergine (Carmel)", cuisine: "Michelin Fine Dining", notes: "Michelin-starred. Spectacular wine cave. Reserve months ahead." }
    ],
    activities: [
      { name: "17-Mile Drive", price: "$12/car", notes: "Lone Cypress, stunning coastline. Don't skip it." },
      { name: "Carmel-by-the-Sea", price: "Free", notes: "Most charming small town in California. Wine, art galleries, great food." },
      { name: "Big Sur Coastal Drive", price: "Free", notes: "One of the great drives on earth. Bixby Bridge, McWay Falls." }
    ],
    bestFor: ["Serious golfers", "Bucket-list trips", "Couples"],
    bestTime: "April–October.",
    flight: "Fly to SFO (~5.5 hrs), drive ~2 hours south."
  },

  pinehurst: {
    label: "Pinehurst / NC Sandhills", emoji: "🌲",
    vibe: "The cradle of American golf. Pinehurst #2 has hosted more USGA championships than anywhere on earth. A true golf pilgrimage — peaceful, classic, steeped in history.",
    hotels: [
      { name: "The Carolina Hotel (Pinehurst Resort)", tier: "Historic Luxury", price: "$300–$700/night", notes: "The grande dame. Stay on the resort and walk to every course." },
      { name: "The Holly Inn (Pinehurst Resort)", tier: "Boutique Historic", price: "$250–$500/night", notes: "Oldest inn in the Village of Pinehurst. Charming and intimate." },
      { name: "Pine Needles Lodge", tier: "Classic Golf Resort", price: "$200–$400/night", notes: "Golf Digest Top-100 course on-site. Hosted three US Women's Opens." }
    ],
    golf: [
      { name: "Pinehurst No. 2", tier: "Iconic / Bucket List", price: "$200–$450/round", notes: "Donald Ross masterpiece. Host of more USGA events than anywhere. Crowned fairways, deep native grass rough." },
      { name: "Pinehurst No. 4", tier: "Elite", price: "$175–$300/round", notes: "Gil Hanse redesign. Host of the 2024 US Open." },
      { name: "Pinehurst No. 8", tier: "Elite", price: "$150–$250/round", notes: "Rees Jones. Panoramic views, most visually dramatic at Pinehurst." },
      { name: "Pine Needles Golf Course", tier: "Elite", price: "$100–$200/round", notes: "Donald Ross gem. Three US Women's Opens. Great value vs the resort." }
    ],
    restaurants: [
      { name: "1895 Grille (Carolina Hotel)", cuisine: "Southern Fine Dining", notes: "Refined Southern cuisine in the historic hotel. Best meal in Pinehurst." },
      { name: "Dugan's Pub", cuisine: "American / Bar", notes: "Village of Pinehurst. Classic golf bar atmosphere." }
    ],
    bestFor: ["Serious golfers", "Golf history buffs", "Golf groups"],
    bestTime: "March–May and September–November.",
    flight: "~2 hours from Pittsburgh, 1 stop through Charlotte."
  },

  // ── INTERNATIONAL ────────────────────────────────────────────

  paris: {
    label: "Paris", emoji: "🗼",
    vibe: "Arguably the world's greatest city. Art that defines civilization, food that invented fine dining, and a beauty around every corner.",
    hotels: [
      { name: "Le Bristol Paris", tier: "Palace Hotel", price: "$1,200–$4,000/night", notes: "One of Paris's six Palace-rated hotels. 3-Michelin-star restaurant." },
      { name: "Hôtel du Louvre (Hyatt)", tier: "Luxury", price: "$400–$800/night", notes: "Directly across from the Louvre. Excellent location value." },
      { name: "Pavillon de la Reine (Le Marais)", tier: "Boutique Luxury", price: "$400–$700/night", notes: "Hidden courtyard in Le Marais. Romantic and quiet." },
      { name: "citizenM Paris", tier: "Budget-Smart", price: "$150–$250/night", notes: "Trendy design hotel, great locations. Smart travelers' choice." }
    ],
    restaurants: [
      { name: "Guy Savoy", cuisine: "Grand French", notes: "3 Michelin stars. One of the 10 best restaurants in the world." },
      { name: "Septime", cuisine: "Neo-Bistro", notes: "One of the world's most exciting restaurants. Book weeks ahead." },
      { name: "L'Ami Jean", cuisine: "Basque Bistro", notes: "Legendary old-school Parisian bistro. Loud, fun, extraordinary food." },
      { name: "Breizh Café (Le Marais)", cuisine: "Crêpes", notes: "Best crêpes in Paris. Sourced from Brittany." }
    ],
    activities: [
      { name: "Eiffel Tower Summit at Sunset", price: "$30–$35/pp", notes: "Book the top level online weeks ahead. Transcendent." },
      { name: "Louvre Museum", price: "$20/pp", notes: "Book a guided highlights tour. Don't go without a plan." },
      { name: "Versailles Day Trip", price: "$25–$30/pp", notes: "30 min by RER. Hall of Mirrors is breathtaking." },
      { name: "Musée d'Orsay", price: "$18/pp", notes: "Greatest Impressionist collection in the world. Monet, Renoir, Degas, Van Gogh." },
      { name: "Seine River Dinner Cruise", price: "$80–$150/pp", notes: "Paris at night from the water. Incredibly romantic." }
    ],
    bestFor: ["Couples", "Honeymooners", "Art lovers", "Foodies", "First Europe trip"],
    bestTime: "April–June and September–October.",
    flight: "~9–10 hours from Pittsburgh, 1 stop or direct on Air France."
  },

  italy: {
    label: "Italy", emoji: "🍕",
    vibe: "Food that redefines everything you know about eating, art spanning 3,000 years, and a landscape so beautiful it seems unreal. Rome, Florence, the Amalfi Coast.",
    hotels: [
      { name: "Hotel de Russie (Rome)", tier: "Luxury", price: "$600–$1,200/night", notes: "Best location in Rome. Steps from Spanish Steps." },
      { name: "J.K. Place Firenze", tier: "Boutique Luxury", price: "$500–$1,000/night", notes: "Like staying in a private Florentine palace. Steps from everything." },
      { name: "Il San Pietro (Positano)", tier: "Ultra-Luxury", price: "$800–$2,000/night", notes: "Clinging to cliffs above Positano. Italy's most romantic hotel." },
      { name: "Hotel Hassler (Rome)", tier: "Ultra-Luxury", price: "$700–$1,500/night", notes: "Top of the Spanish Steps. Best views in Rome." }
    ],
    restaurants: [
      { name: "La Pergola (Rome)", cuisine: "Fine Dining", notes: "Rome's only 3-Michelin-star restaurant. Views over the city." },
      { name: "Buca Mario (Florence)", cuisine: "Florentine Trattoria", notes: "Florence's oldest restaurant (1886). Legendary dry-aged bistecca." },
      { name: "Lo Scoglio (Amalfi)", cuisine: "Coastal Italian", notes: "The most famous pasta dish on the Amalfi Coast. Worth a boat ride." },
      { name: "Il Latini (Florence)", cuisine: "Tuscan Communal", notes: "Shared tables, no menu. Most authentic Tuscan dining experience." }
    ],
    activities: [
      { name: "Colosseum & Forum Private Tour", price: "$80–$150/pp", notes: "Book private guide with underground access well in advance." },
      { name: "Vatican Museums & Sistine Chapel", price: "$35–$60/pp", notes: "Book early morning entry. The ceiling defies description." },
      { name: "Amalfi Coast Drive or Ferry", price: "Car hire + ferry", notes: "One of the great drives on earth — or take the ferry, even better." },
      { name: "Tuscan Wine Tour from Florence", price: "$80–$150/pp", notes: "Day trip into Chianti. Wine, olive oil, local cheese." },
      { name: "Cooking Class in Tuscany", price: "$100–$200/pp", notes: "Making pasta in a Florentine farmhouse is unforgettable." }
    ],
    bestFor: ["Foodies", "History lovers", "Couples", "Honeymooners", "Wine lovers"],
    bestTime: "April–June and September–October.",
    flight: "~9–11 hours from Pittsburgh via London or Amsterdam."
  },

  greece: {
    label: "Greece", emoji: "🏛️",
    vibe: "Ancient history meets breathtaking island beauty. Santorini's blue-domed churches and caldera views, Athens and the Acropolis, Mykonos's wild nightlife, and the crystal waters of the Aegean.",
    hotels: [
      { name: "Canaves Oia Epitome (Santorini)", tier: "Ultra-Luxury", price: "$800–$2,500/night", notes: "Best hotel in Santorini. Cliff-edge infinity pool over the caldera. Adults-only." },
      { name: "Vedema Resort (Santorini)", tier: "Luxury Boutique", price: "$400–$900/night", notes: "15th century winery village. Inland, quieter, stunning interiors." },
      { name: "Belvedere Hotel (Mykonos)", tier: "Luxury Boutique", price: "$400–$1,000/night", notes: "Best hotel in Mykonos Town. Stunning pool, iconic white-washed design." },
      { name: "Hotel Grande Bretagne (Athens)", tier: "Historic Luxury", price: "$350–$700/night", notes: "Direct views of the Acropolis. Most storied hotel in Greece." }
    ],
    restaurants: [
      { name: "Selene (Santorini)", cuisine: "Modern Greek", notes: "The finest restaurant in Santorini. Tasting menus of local ingredients." },
      { name: "Funky Gourmet (Athens)", cuisine: "Modern Greek Fine Dining", notes: "Two Michelin stars. The most creative cooking in Greece." },
      { name: "Nikolas Taverna (Mykonos)", cuisine: "Greek Taverna", notes: "Best traditional fish taverna in Mykonos. Waterfront, perfect grilled fish." }
    ],
    activities: [
      { name: "Santorini Caldera Sunset", price: "Free", notes: "Oia at sunset is one of the most photographed moments in the world." },
      { name: "Acropolis & Parthenon", price: "$20/pp", notes: "2,500 years of Western civilization. Book early morning." },
      { name: "Island Hopping by Ferry", price: "$30–$80/trip", notes: "Santorini to Mykonos to Crete — easy and cheap." },
      { name: "Sailing Catamaran (Santorini)", price: "$100–$180/pp", notes: "Sail the caldera, hot springs, snorkel. Best day trip in Santorini." }
    ],
    bestFor: ["Couples", "Honeymooners", "Foodies", "History lovers", "Island lovers"],
    bestTime: "May–June and September–October.",
    flight: "~11–12 hours from Pittsburgh, 1–2 stops."
  },

  spain: {
    label: "Spain", emoji: "💃",
    vibe: "Europe's most vibrant country — Gaudí's wild architecture in Barcelona, flamenco and tapas in Seville, world's best restaurants in San Sebastián, and endless sunshine.",
    hotels: [
      { name: "Hotel Arts Barcelona", tier: "Luxury", price: "$400–$800/night", notes: "Beachfront skyscraper. Best pool in Barcelona, Ritz-Carlton service." },
      { name: "Mandarin Oriental Barcelona", tier: "Ultra-Luxury", price: "$500–$1,200/night", notes: "On the iconic Passeig de Gràcia. Rooftop pool, superb spa." },
      { name: "Alfonso XIII Seville", tier: "Historic Palace", price: "$300–$700/night", notes: "Moorish palace hotel. The most beautiful hotel in Seville." },
      { name: "Hotel María Cristina (San Sebastián)", tier: "Luxury Historic", price: "$350–$700/night", notes: "Belle Époque landmark in Spain's culinary capital." }
    ],
    restaurants: [
      { name: "Asador Etxebarri (Basque Country)", cuisine: "Wood Grill / Avant-Garde", notes: "Often rated #1 restaurant in the world. 30 min from San Sebastián. Book months ahead." },
      { name: "Tickets (Barcelona)", cuisine: "Avant-Garde Tapas", notes: "Albert Adrià's playful tapas bar. Reserve online months ahead." },
      { name: "La Boqueria Market (Barcelona)", cuisine: "Market Food", notes: "Best food market in Europe. Get jamón ibérico, oysters, and fresh juice." }
    ],
    activities: [
      { name: "Sagrada Família (Barcelona)", price: "$30/pp", notes: "Gaudí's unfinished masterpiece. One of the most breathtaking buildings on earth." },
      { name: "Flamenco Show (Seville)", price: "$30–$60/pp", notes: "Authentic flamenco in its birthplace. Powerful, unforgettable." },
      { name: "Camino de Santiago (short section)", price: "Free to walk", notes: "Walk any section of this ancient pilgrimage path. Life-changing." },
      { name: "San Sebastián Pintxos Crawl", price: "$30–$50 pp", notes: "Bar hop eating pintxos (Basque tapas). Best eating city in Europe." }
    ],
    bestFor: ["Foodies", "Art & architecture lovers", "Couples", "Adventurers"],
    bestTime: "April–June and September–October.",
    flight: "~10–12 hours from Pittsburgh, 1 stop."
  },

  portugal: {
    label: "Portugal", emoji: "🐟",
    vibe: "Europe's best kept secret — incredible food and wine at half the price of France, extraordinary history, dramatic Atlantic coastline, and the warmest people in Europe.",
    hotels: [
      { name: "Bairro Alto Hotel (Lisbon)", tier: "Luxury Boutique", price: "$350–$700/night", notes: "Best boutique hotel in Lisbon. Rooftop bar with 360° city views." },
      { name: "Belmond Reid's Palace (Madeira)", tier: "Ultra-Luxury", price: "$500–$1,200/night", notes: "Clifftop palace hotel since 1891. Most iconic hotel in Portugal." },
      { name: "Six Senses Douro Valley", tier: "Luxury Wellness", price: "$600–$1,400/night", notes: "Vineyards, spa, and stunning views of the Douro River wine country." },
      { name: "The Yeatman (Porto)", tier: "Luxury Wine Hotel", price: "$350–$700/night", notes: "Wine-dedicated luxury hotel. Views over Porto's rooftops." }
    ],
    restaurants: [
      { name: "The Yeatman Restaurant (Porto)", cuisine: "Fine Dining / Portuguese", notes: "Two Michelin stars. Best wine list in Portugal." },
      { name: "Belcanto (Lisbon)", cuisine: "Modern Portuguese", notes: "Two Michelin stars. José Avillez reinvents Portuguese classics." },
      { name: "Time Out Market (Lisbon)", cuisine: "Best of Lisbon", notes: "30 of Lisbon's best chefs under one roof. Best food hall in Europe." }
    ],
    activities: [
      { name: "Sintra Palace Day Trip", price: "$10–$20/pp", notes: "Fairy-tale hilltop palaces 30 min from Lisbon. UNESCO World Heritage." },
      { name: "Douro Valley Wine Tour", price: "$80–$150/pp", notes: "Boat along the Douro River past vineyard terraces. Wine tastings included." },
      { name: "Pastéis de Belém (Lisbon)", price: "$2/pastel", notes: "The original custard tart bakery since 1837. Always a line, always worth it." },
      { name: "Fado Show (Lisbon)", price: "$25–$60/pp", notes: "Portugal's soulful folk music. Best heard in Alfama neighborhood." }
    ],
    bestFor: ["Foodies", "Wine lovers", "Budget-conscious luxury", "History lovers"],
    bestTime: "March–May and September–October.",
    flight: "~9–10 hours from Pittsburgh, 1 stop."
  },

  hawaii: {
    label: "Hawaii", emoji: "🌺",
    vibe: "America's paradise — no passport required. Maui for romance, Oahu for action, Big Island for adventure, Kauai for raw beauty.",
    hotels: [
      { name: "Four Seasons Maui at Wailea", tier: "Ultra-Luxury", price: "$800–$2,500/night", notes: "The finest hotel in Hawaii, full stop. Perfect beach, flawless service." },
      { name: "Andaz Maui at Wailea", tier: "Luxury Boutique", price: "$500–$1,200/night", notes: "Best pool complex in Maui, excellent restaurant." },
      { name: "Grand Hyatt Kauai", tier: "Luxury Resort", price: "$400–$800/night", notes: "Sprawling lagoon system, beautiful beach at Poipu." },
      { name: "Outrigger Waikiki Beach Resort", tier: "Mid-Range", price: "$300–$500/night", notes: "Best location on Waikiki right on the beach." }
    ],
    restaurants: [
      { name: "Mama's Fish House (Maui)", cuisine: "Hawaii Regional Seafood", notes: "One of the most beloved restaurants in America. Reserve months in advance." },
      { name: "MW Restaurant (Honolulu)", cuisine: "Hawaii Regional", notes: "James Beard nominated. Best local cooking in Honolulu." },
      { name: "Helena's Hawaiian Food (Honolulu)", cuisine: "Traditional Hawaiian", notes: "James Beard Award winner. 75+ years old. Truly traditional Hawaiian food." }
    ],
    activities: [
      { name: "Road to Hana (Maui)", price: "Car rental", notes: "60 miles, waterfalls, bamboo forests, black sand beaches. Essential." },
      { name: "Hawaii Volcanoes National Park", price: "$35/car", notes: "Walk on a lava field, see an active glowing caldera at night." },
      { name: "Na Pali Coast Helicopter (Kauai)", price: "$250–$350/pp", notes: "4,000-foot cliffs dropping into the sea. Breathtaking." },
      { name: "Sunrise at Haleakala (Maui)", price: "$30/car", notes: "Drive to 10,000 feet, watch the sun rise above the clouds at 3am." },
      { name: "Old Lahaina Luau", price: "$120–$200/pp", notes: "Best luau in the islands. Traditional feast and fire dancers." }
    ],
    golf: [
      { name: "Kapalua Plantation Course (Maui)", tier: "Elite", price: "$250–$350/round", notes: "PGA Tour season opener. Sweeping ocean views." },
      { name: "Princeville Makai Course (Kauai)", tier: "Elite", price: "$200–$300/round", notes: "Ocean views on nearly every hole." }
    ],
    bestFor: ["Couples", "Honeymooners", "Families", "Adventure", "Golf"],
    bestTime: "April–May and September–November.",
    flight: "~10–11 hours from Pittsburgh via LAX or SFO."
  },

  cruises: {
    label: "Cruises", emoji: "🚢",
    vibe: "All-inclusive value, no repacking, wake up somewhere new every day. Jesse & Sam book all major cruise lines and know which ships and itineraries are worth it.",
    ports: [
      { name: "Baltimore, MD", ships: "Royal Caribbean", note: "CLOSEST port to Pittsburgh — just 3 hours drive! No flight needed. Bermuda, Caribbean, Bahamas." },
      { name: "Port Canaveral (Orlando)", ships: "Disney, Royal Caribbean, Carnival", note: "Best for Disney Cruise Line. Combine with Universal/Disney parks." },
      { name: "Miami", ships: "All major lines", note: "World's busiest cruise port. Caribbean year-round." },
      { name: "New York (Bayonne)", ships: "Norwegian, Royal Caribbean, Carnival", note: "4.5 hours from Pittsburgh. Transatlantic and Caribbean routes." },
      { name: "Tampa", ships: "Carnival, Royal Caribbean", note: "Great for Western Caribbean." },
      { name: "Seattle", ships: "Holland America, Princess, Norwegian", note: "Gateway to Alaska cruises. Glaciers, fjords, incredible wildlife." }
    ],
    lines: [
      { name: "Royal Caribbean", best: "Groups & families", notes: "Most amenities — surf simulators, Broadway shows, massive ships." },
      { name: "Disney Cruise Line", best: "Families with kids", notes: "Character experiences at sea. Premium product, worth the price." },
      { name: "Celebrity Cruises", best: "Couples & foodies", notes: "Step above Royal Caribbean. Better food, more refined." },
      { name: "Carnival", best: "Budget & groups", notes: "Most affordable. Great for large friend groups." },
      { name: "Norwegian (NCL)", best: "Adults who want freedom", notes: "No formal dinners, no assigned seating — total flexibility." },
      { name: "Viking Ocean Cruises", best: "Luxury couples", notes: "No kids under 18, all-inclusive pricing. Europe & world cruises." }
    ],
    activities: [
      { name: "Alaska Cruise", price: "From $899/pp", notes: "Glaciers, wildlife, fjords. Seattle departure — 4.5 hours from Pittsburgh." },
      { name: "Mediterranean Cruise", price: "From $1,200/pp", notes: "Italy, Greece, Spain, France in one trip." },
      { name: "Caribbean 7-Night", price: "From $699/pp", notes: "Multiple islands. Baltimore, Miami, or Tampa departure." }
    ],
    bestFor: ["First-time international travelers", "Large groups", "Families", "All-inclusive value"]
  }

}; // end KB


// ─── KEYWORD DETECTION ────────────────────────────────────────
// Add keywords for any new destinations you add above.
// Format: destinationKey: ["keyword1", "keyword2", ...]

const DEST_KEYS = {
  aruba:        ["aruba", "eagle beach aruba"],
  cancun:       ["cancun", "riviera maya", "mexico", "playa del carmen", "tulum", "mayan riviera"],
  jamaica:      ["jamaica", "montego bay", "negril", "ocho rios", "sandals"],
  bahamas:      ["bahamas", "nassau", "exumas", "harbour island", "paradise island", "atlantis"],
  puntacana:    ["punta cana", "puntacana", "dominican republic", "dr", "bavaro"],
  lasvegas:     ["las vegas", "vegas", "sin city"],
  orlando:      ["orlando", "disney world", "universal", "magic kingdom", "epic universe", "disney"],
  miami:        ["miami", "south beach", "brickell", "wynwood"],
  nashville:    ["nashville", "tennessee", "broadway nashville", "honky tonk", "music city"],
  keys:         ["florida keys", "key west", "key largo", "islamorada", "the keys"],
  neworleans:   ["new orleans", "nola", "bourbon street", "mardi gras", "french quarter"],
  charleston:   ["charleston", "south carolina", "sc", "kiawah"],
  scottsdale:   ["scottsdale", "phoenix", "arizona", "desert golf"],
  myrtlebeach:  ["myrtle beach", "myrtle", "carolina golf"],
  pebblebeach:  ["pebble beach", "monterey", "carmel", "spyglass"],
  pinehurst:    ["pinehurst", "sandhills", "pinehurst no 2"],
  paris:        ["paris", "france", "eiffel", "louvre", "versailles"],
  italy:        ["italy", "rome", "florence", "amalfi", "positano", "tuscany", "venice", "italian"],
  greece:       ["greece", "santorini", "mykonos", "athens", "greek islands", "aegean"],
  spain:        ["spain", "barcelona", "madrid", "seville", "san sebastian", "spanish"],
  portugal:     ["portugal", "lisbon", "porto", "algarve", "portuguese", "douro"],
  hawaii:       ["hawaii", "maui", "oahu", "kauai", "big island", "honolulu", "waikiki"],
  cruises:      ["cruise", "cruises", "cruise ship", "carnival cruise", "royal caribbean", "disney cruise", "norwegian cruise", "celebrity cruise"]
};

const CAT_KEYS = {
  hotels:       ["hotel", "hotels", "stay", "resort", "resorts", "where to stay", "accommodation", "lodge", "inn"],
  restaurants:  ["restaurant", "restaurants", "eat", "food", "dinner", "lunch", "dining", "where to eat", "best food"],
  activities:   ["things to do", "do", "activity", "activities", "tour", "tours", "excursion", "explore", "visit", "see", "attraction", "sightseeing"],
  golf:         ["golf", "golfing", "course", "courses", "tee time", "round of golf", "golf trip"]
};

// ─── PACKAGES ─────────────────────────────────────────────────
// Add or edit packages here. They show in the Packages panel.

const PACKAGES = [
  {
    id: "ky-golf",
    cat: "Golf",
    name: "Kentucky Golf Trail Experience",
    meta: "Lexington, KY  ·  3 nights / 2 rounds",
    highlights: [
      "18 holes at The Woodford Club",
      "18 holes at Greenbrier Golf & Country Club",
      "Woodford Reserve Distillery tour",
      "Luxury Lexington lodging"
    ],
    priceFrom: 960,
    priceLabel: "from $960/pp",
    teaser: "Two premier Kentucky courses paired with world-class bourbon country."
  },
  {
    id: "desert-golf",
    cat: "Golf",
    name: "Desert Golf Getaway",
    meta: "Scottsdale · Las Vegas · St. George  ·  4 days",
    highlights: [
      "5 package tiers to choose from",
      "TPC Scottsdale, Shadow Creek, Black Desert & more",
      "Group pricing available",
      "From Scottsdale value to ultra-luxury"
    ],
    priceFrom: 428,
    priceLabel: "from $428/pp",
    teaser: "Sun-drenched fairways across Arizona, Nevada & Utah."
  },
  {
    id: "aruba-ai",
    cat: "All-Inclusive",
    name: "Aruba All-Inclusive Escape",
    meta: "Aruba  ·  5–7 nights",
    highlights: [
      "Riu Palace Antillas or Bucuti & Tara options",
      "Adults-only properties available",
      "Hurricane-free year-round",
      "Eagle Beach — one of the world's best"
    ],
    priceFrom: 300,
    priceLabel: "from $300/night",
    teaser: "Perfect weather 365 days a year. Outside the hurricane belt."
  },
  {
    id: "cancun-ai",
    cat: "All-Inclusive",
    name: "Cancun / Riviera Maya",
    meta: "Mexico  ·  5–7 nights",
    highlights: [
      "Hyatt Ziva, Excellence, Moon Palace & more",
      "Mayan ruins day trips available",
      "Adults-only or family options",
      "Best all-inclusive value in the Caribbean"
    ],
    priceFrom: 350,
    priceLabel: "from $350/night",
    teaser: "World-class resorts, turquoise water, ancient ruins nearby."
  },
  {
    id: "group-nashville",
    cat: "Group Travel",
    name: "Nashville Group Getaway",
    meta: "Nashville, TN  ·  3–4 nights",
    highlights: [
      "Live music on Lower Broadway every night",
      "Thompson Nashville & JW Marriott options",
      "Whiskey trail & distillery tours",
      "Perfect for bachelorette, birthday, corporate"
    ],
    priceFrom: 150,
    priceLabel: "from $150/night",
    teaser: "America's hottest city for groups. Music, food, nightlife."
  },
  {
    id: "cruise-package",
    cat: "Cruise",
    name: "Caribbean Cruise Package",
    meta: "Multiple ports  ·  7 nights",
    highlights: [
      "Royal Caribbean, Carnival, Celebrity & more",
      "Baltimore port — just 3 hrs from Pittsburgh!",
      "All-inclusive pricing available",
      "Family & adults-only ships"
    ],
    priceFrom: 699,
    priceLabel: "from $699/pp",
    teaser: "Jesse & Sam find you the best ship, itinerary, and price."
  },
  {
    id: "pinehurst-golf",
    cat: "Golf",
    name: "Pinehurst Golf Pilgrimage",
    meta: "Pinehurst, NC  ·  3 nights / 3 rounds",
    highlights: [
      "Round on the legendary Pinehurst No. 2",
      "Round on Pinehurst No. 4 (2024 US Open host)",
      "Stay at The Carolina Hotel",
      "3.5 hours from Pittsburgh — drive or fly"
    ],
    priceFrom: 750,
    priceLabel: "from $750/pp",
    teaser: "A true golf pilgrimage. More USGA championships here than anywhere on earth."
  },
  {
    id: "europe-honeymoon",
    cat: "International",
    name: "Europe Honeymoon — Italy & Greece",
    meta: "Rome · Amalfi Coast · Santorini  ·  10–14 nights",
    highlights: [
      "Rome & Colosseum private tour",
      "Amalfi Coast — Il San Pietro di Positano",
      "Santorini caldera-view suite",
      "Flights, transfers, and hotels handled"
    ],
    priceFrom: 4500,
    priceLabel: "from $4,500/pp",
    teaser: "The most romantic honeymoon route in Europe. Jesse & Sam handle every detail."
  }
];
