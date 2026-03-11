// ============================================================
//  CxC TRAVEL — data.js
//  All destinations, packages, and keyword maps live here.
//  index.html loads this file — never needs editing for new destinations.
//
//  HOW TO ADD A DESTINATION:
//  1. Add an entry to KB below (copy the template)
//  2. Add keywords to DEST_KEYS at the bottom
//  3. Push to GitHub — live in ~30 seconds
//
//  TEMPLATE:
//  mykey: {
//    label:"City Name", emoji:"🌴", region:"Caribbean",
//    vibe:"2-3 sentences on why this place is special.",
//    sell:"Why booking with CxC specifically is the smart move here.",
//    hotels:[{name,tier,price,notes}],
//    restaurants:[{name,cuisine,notes}],
//    activities:[{name,price,notes}],
//    golf:[{name,tier,price,notes}],            // optional
//    allinclusive:[{name,type,price,highlights}], // optional
//    bestFor:["Couples","Golf","Families"],
//    bestTime:"November–April.",
//    travelNote:"Flight/entry info — keep it generic, no specific departure cities."
//  },
// ============================================================

const KB = {

  // ─── CARIBBEAN ──────────────────────────────────────────────

  aruba:{
    label:"Aruba",emoji:"🌴",region:"Caribbean",
    vibe:"Aruba sits outside the hurricane belt and gets nearly 365 sunny days a year — which is genuinely rare in the Caribbean. The water on the southern and western coasts is protected, calm, and so clear you can see the bottom 30 feet down. Eagle Beach is routinely ranked one of the most beautiful beaches in the world, and the island has a safety and ease that makes first-timers feel like veterans.",
    sell:"Jesse and Sam have deep relationships with Aruba's top resorts — that means room category upgrades, resort credits, and early access to adults-only inventory that sells out months ahead. We'll match you to the right property whether you want a quiet boutique escape or a lively all-inclusive beach scene.",
    hotels:[
      {name:"Bucuti & Tara Beach Resort",tier:"Luxury Adults-Only",price:"$450–$700/night",notes:"Consistently rated the #1 hotel in the Caribbean on TripAdvisor. Eco-certified, stunning beachfront on Eagle Beach. Adults only — genuinely romantic and peaceful."},
      {name:"Hyatt Regency Aruba",tier:"Upscale Resort",price:"$350–$550/night",notes:"Casino, multiple pools, great beach location. Excellent for groups who want energy and activities."},
      {name:"Riu Palace Antillas",tier:"Adults-Only All-Inclusive",price:"$300–$500/night",notes:"Premium all-inclusive on Palm Beach. Unlimited premium drinks and dining. Adults-only, oceanfront. Excellent value for what you get."},
      {name:"Manchebo Beach Resort",tier:"Boutique",price:"$280–$450/night",notes:"Yoga-focused, intimate, on the quietest stretch of beach on the island. Perfect for travelers who actually want to decompress."},
      {name:"Divi & Tamarijn Resorts",tier:"Family All-Inclusive",price:"$250–$400/night",notes:"Two resorts, one wristband, five pools, kids programs. The best family all-inclusive value on the island."}
    ],
    restaurants:[
      {name:"Flying Fishbone",cuisine:"Seafood",notes:"Tables literally built over the water. Come for sunset — it's one of the most memorable dining experiences in the Caribbean. Book well ahead."},
      {name:"Gasparito Restaurant",cuisine:"Authentic Aruban",notes:"Set inside a 17th-century cunucu house. Order the Keshi Yena and the fresh-caught fish. The real Aruba."},
      {name:"Screaming Eagle",cuisine:"International Fusion",notes:"Glamorous bed-seating, dramatic lighting, creative cocktails. Great for a special night out."},
      {name:"Zeerovers",cuisine:"Local Seafood",notes:"A local fish market that fries your catch fresh. No tourist menus, no markup — just incredible cheap food. Don't skip it."}
    ],
    activities:[
      {name:"Natural Pool ATV Tour",price:"$80–$120/pp",notes:"Off-road through Arikok National Park to a secret swimming hole carved into volcanic rock. The most unique thing you can do on the island — nothing else like it."},
      {name:"Catamaran Snorkel Cruise",price:"$60–$90/pp",notes:"Sail to two reef sites, snorkel, open bar, great crew. The best way to experience Aruba from the water."},
      {name:"Eagle Beach & Flamingo Visit",price:"Free",notes:"One of the world's most beautiful beaches — and wild flamingos wander nearby. Bring a camera."},
      {name:"Baby Beach Snorkeling",price:"Free",notes:"Calm, shallow lagoon on the southeast tip. Best free snorkeling without needing a boat."}
    ],
    allinclusive:[
      {name:"Riu Palace Antillas",type:"Adults-Only",price:"$300–$500/night",highlights:["Premium open bar 24/7","5 restaurants","Oceanfront Palm Beach"]},
      {name:"Divi & Tamarijn",type:"Family-Friendly",price:"$250–$400/night",highlights:["Two resorts, one wristband","5 pools","Best family AI value"]}
    ],
    bestFor:["Couples","Honeymoon","Adults-only retreats","Beach lovers","First-time Caribbean"],
    bestTime:"January–August is peak and gorgeous. Hurricane-free year-round — you can honestly travel any month.",
    travelNote:"No US passport required for US citizens (passport card OK). Short direct or one-stop flights from major US and Canadian hubs. Very safe, English widely spoken."
  },

  cancun:{
    label:"Cancun / Riviera Maya",emoji:"🌊",region:"Caribbean",
    vibe:"Mexico's Caribbean coast is the world's all-inclusive capital — and for good reason. The water is an electric turquoise that photographs better than any filter. Resorts range from adults-only boutique properties tucked into the Riviera Maya jungle to massive beachfront mega-resorts in Cancun's Hotel Zone. And ancient Mayan ruins — Chichen Itza, Tulum — are right in your backyard.",
    sell:"This is one of Jesse and Sam's strongest markets. We have direct relationships with the top resorts and know exactly which properties deliver the best beach, the best food, and the best service for each type of traveler. Group pricing here can be extraordinary.",
    hotels:[
      {name:"Hyatt Ziva Cancun",tier:"Luxury All-Inclusive",price:"$400–$700/night",notes:"Sits on a narrow peninsula with water on three sides — rooftop infinity pool, 10 restaurants, multiple pools. One of the best AI resorts in Mexico."},
      {name:"Excellence Playa Mujeres",tier:"Adults-Only Luxury",price:"$500–$850/night",notes:"Private peninsula north of Cancun. Golf on-site, 11 restaurants, Preferred Club access. Consistently one of the top adults-only resorts in the world."},
      {name:"Moon Palace Cancun",tier:"Mega Resort / Groups",price:"$350–$600/night",notes:"14 restaurants, waterpark, golf, enough space for 1,000 guests and never feels crowded. Best group rates in Cancun."},
      {name:"Secrets Akumal",tier:"Adults-Only Boutique",price:"$450–$750/night",notes:"Smaller and more intimate than the mega-resorts. Swim-up suites, Preferred Club amenities, consistently top-rated."},
      {name:"Hard Rock Cancun",tier:"Upscale All-Inclusive",price:"$300–$500/night",notes:"Music-themed, lively, unlimited premium drinks, great entertainment. Best for groups who want energy."}
    ],
    restaurants:[
      {name:"Hartwood (Tulum)",cuisine:"Open-Fire Farm-to-Table",notes:"Worth the drive south. Everything cooked over wood fire, menu changes daily by what's available. James Beard buzz. An unforgettable meal."},
      {name:"La Parrilla (Cancun Downtown)",cuisine:"Mexican Grill",notes:"A true Cancun institution. Live mariachi, flaming drinks, incredible mixed grill platters. Go at least once."},
      {name:"La Fisheria",cuisine:"Seafood",notes:"Best fresh seafood in the Hotel Zone. Casual, excellent value, grouper tacos are legendary."}
    ],
    activities:[
      {name:"Chichen Itza Day Trip",price:"$80–$120/pp",notes:"One of the 7 Wonders of the World. Non-negotiable if you have any interest in history or architecture. Go early to beat the heat."},
      {name:"Cenote Ik Kil Swimming",price:"$25/pp",notes:"Sacred Mayan cenote near Chichen Itza. Crystal-clear water, natural waterfall, surreal beauty. Pair it with the ruins."},
      {name:"Xcaret Park",price:"$100–$130/pp",notes:"Underground rivers, Mayan ruins, jungle paths, beach, and a breathtaking Mexican cultural show at night. A full day well spent."},
      {name:"Isla Mujeres Catamaran",price:"$70–$100/pp",notes:"Sail to a beautiful island, snorkel two sites, open bar the whole time. Best single day trip from Cancun."},
      {name:"Tulum Ruins & Beach",price:"$15/pp",notes:"Mayan ruins perched on a cliff above the Caribbean. One of the most dramatic archaeological sites in the Americas. Swim at the beach below the ruins."}
    ],
    allinclusive:[
      {name:"Hyatt Ziva Cancun",type:"Family & Couples",price:"$400–$700/night",highlights:["Ocean on 3 sides","10 restaurants","Rooftop infinity pool"]},
      {name:"Excellence Playa Mujeres",type:"Adults-Only",price:"$500–$850/night",highlights:["Golf on-site","Private peninsula","11 restaurants & bars"]},
      {name:"Moon Palace",type:"Groups & Families",price:"$350–$600/night",highlights:["Largest pool complex in Mexico","Golf on-site","14 restaurants"]}
    ],
    bestFor:["All-Inclusive","Groups","Couples","Families","Cultural travelers"],
    bestTime:"December–April is ideal. Hurricane season runs June–November — great deals exist but travel insurance is essential.",
    travelNote:"Passport required. Flights from most US and Canadian cities range from 2.5 to 5 hours. No visa required for US or Canadian citizens."
  },

  jamaica:{
    label:"Jamaica",emoji:"🎵",region:"Caribbean",
    vibe:"Jamaica hits different. From the moment you land, the energy changes — reggae in the air, lush green mountains dropping into turquoise sea, waterfalls you can climb, and a warmth from the people that no resort brochure can fully capture. Sandals dominates the luxury all-inclusive market here and earns that reputation, but there are also outstanding boutique options for travelers wanting something more intimate.",
    sell:"Jesse and Sam are certified Sandals specialists — which means access to the right property at the best rate, plus insider knowledge on which Sandals location fits which traveler. Royal Plantation if you want the most exclusive; Beaches Negril if you're bringing the family.",
    hotels:[
      {name:"Sandals Royal Plantation",tier:"Ultra-Luxury Adults-Only",price:"$600–$1,100/night",notes:"All-suite, all-butler, all-ocean-view. Just 74 suites. The most exclusive Sandals property on earth — if you want the absolute best, this is it."},
      {name:"Sandals Montego Bay",tier:"Luxury Adults-Only",price:"$400–$800/night",notes:"The original Sandals. Right on the beach in MBJ, great energy, excellent dining and entertainment."},
      {name:"Beaches Negril",tier:"Family All-Inclusive",price:"$400–$700/night",notes:"Gold standard for family Jamaica. Sesame Street characters, full waterpark, dedicated teens club, and 7-Mile Beach outside your door."},
      {name:"Rockhouse Hotel",tier:"Boutique Luxury",price:"$200–$400/night",notes:"Cliffside thatched-roof villas above the Caribbean in Negril. A design icon — not all-inclusive but an extraordinary experience."}
    ],
    restaurants:[
      {name:"Scotchies",cuisine:"Jamaican Jerk BBQ",notes:"The definitive jerk spot in Jamaica. Wood smoke, scotch bonnet, pimento wood. Order the pork and festival. A pilgrimage."},
      {name:"Miss T's Kitchen (Ocho Rios)",cuisine:"Jamaican Home Cooking",notes:"James Beard recognized. Real Jamaican cooking — brown stew chicken, rice and peas, escovitch fish. The genuine article."},
      {name:"The Pelican Grill (Montego Bay)",cuisine:"Jamaican / Seafood",notes:"Montego Bay institution since 1966. Unpretentious, delicious, very local."}
    ],
    activities:[
      {name:"Dunn's River Falls Climb",price:"$30/pp",notes:"You climb the waterfall in a human chain — fun, wet, and completely unforgettable. Don't wear good shoes."},
      {name:"Bob Marley Nine Mile Tour",price:"$60/pp",notes:"Visit Bob Marley's birthplace and mausoleum in the Blue Mountains. Moving and fascinating for any music fan."},
      {name:"Negril 7-Mile Beach",price:"Free",notes:"Consistently ranked one of the world's best beaches. Simply beautiful."},
      {name:"Appleton Estate Rum Tour",price:"$45/pp",notes:"Operating since 1749. Tour the historic distillery, tastings included. The definitive Jamaica rum experience."}
    ],
    bestFor:["Couples","Honeymooners","Families","Sandals fans","Cultural travelers"],
    bestTime:"November–April is peak and perfect. December through March is particularly beautiful.",
    travelNote:"Passport required. Direct flights from many US cities; one stop from most Canadian cities. No visa required for US or Canadian citizens."
  },

  bahamas:{
    label:"The Bahamas",emoji:"🏝️",region:"Caribbean",
    vibe:"700 islands and some of the most vivid blue water on the planet. Nassau for Atlantis's massive resort experience; the Exumas for remote nature and the world-famous swimming pigs; Harbour Island for naturally pink sand beaches that look like they were designed by a photographer. The Bahamas is close, accessible, and endlessly beautiful.",
    sell:"The Bahamas has options at every price point — from Atlantis's family mega-resort to Little Palm Island's ultra-exclusive private-island seclusion. Jesse and Sam match the right island and property to each traveler.",
    hotels:[
      {name:"Atlantis Paradise Island",tier:"Mega Resort",price:"$300–$800/night",notes:"Iconic and unmatched for families — waterpark with 20+ slides, 11 pools, aquarium, casino, and a mile of beach. The ultimate family resort."},
      {name:"SLS Baha Mar",tier:"Luxury",price:"$400–$900/night",notes:"Sleekest resort in Nassau. Casino, multiple pools, great beach, excellent dining. The coolest property in the capital."},
      {name:"Pink Sands Resort (Harbour Island)",tier:"Boutique Luxury",price:"$600–$1,200/night",notes:"On the famous pink sand beach. Just 35 cottages — intimate, romantic, extraordinary."},
      {name:"Grand Isle Resort (Exumas)",tier:"Luxury Villas",price:"$500–$1,500/night",notes:"Private villas over the Exuma Sound, near the swimming pigs. Most Instagram-worthy destination in the Bahamas."}
    ],
    restaurants:[
      {name:"Graycliff Restaurant (Nassau)",cuisine:"Continental Fine Dining",notes:"Historic mansion with a 250,000-bottle wine cellar. One of the most impressive in the Western Hemisphere. Special occasion dining."},
      {name:"Lukka Kairi (Baha Mar)",cuisine:"Caribbean",notes:"Overwater deck, best sunset views in Nassau. Most scenic meal you'll have in the city."},
      {name:"The Landing (Harbour Island)",cuisine:"Bahamian Seafood",notes:"Barefoot-luxury at its best. Fresh catch, great rum cocktails, perfect setting."}
    ],
    activities:[
      {name:"Swimming Pigs (Exumas)",price:"$150–$200/pp",notes:"The famous swimming pigs of Big Major Cay — one of the most unique wildlife experiences in the world. Worth every penny."},
      {name:"Thunderball Grotto Snorkel",price:"$30/pp",notes:"James Bond filming location. Swim through sea caves into an open-top grotto lit from above. Magical."},
      {name:"Atlantis Aquaventure Water Park",price:"Included / $130/day",notes:"One of the best water parks in the world. The Leap of Faith 60-foot slide through a shark tank is not optional."},
      {name:"Pink Sand Beach (Harbour Island)",price:"Free",notes:"Three miles of naturally pink sand — iron in the sand creates a blush tone that's genuinely extraordinary."}
    ],
    bestFor:["Families","Couples","Honeymoon","Adventure","Beach lovers"],
    bestTime:"December–May is ideal.",
    travelNote:"No visa for US or Canadian citizens. Very short flights from the US East Coast — often under 3 hours. No US passport required for cruises to Nassau (passport card OK)."
  },

  puntacana:{
    label:"Punta Cana",emoji:"🌺",region:"Caribbean",
    vibe:"The Dominican Republic delivers 20+ miles of palm-lined beach, world-class all-inclusive resorts, and consistent sunshine — at a price point that genuinely surprises people. This is the best all-inclusive value in the Caribbean, and the top resorts here rival anything in Mexico at a fraction of the cost.",
    sell:"Punta Cana is one of the best values CxC books, full stop. The top properties here offer exceptional food, beautiful beaches, and real luxury for significantly less than comparable resorts in Cancun or Jamaica. We know which resorts deliver and which ones disappoint.",
    hotels:[
      {name:"Excellence El Carmen",tier:"Adults-Only Luxury",price:"$350–$600/night",notes:"Consistently top-5 adults-only all-inclusive in the Caribbean. 10 restaurants, swim-up suites, non-motorized water sports included. Stunning beachfront."},
      {name:"Zoëtry Agua Punta Cana",tier:"Boutique Ultra-Luxury",price:"$400–$700/night",notes:"Small, intimate, genuinely high-end. Butlers, gourmet dining, spa. The Dominican Republic's best luxury AI."},
      {name:"Hard Rock Punta Cana",tier:"Luxury All-Inclusive",price:"$300–$600/night",notes:"Music-themed mega-resort. 13 restaurants, massive casino, spectacular pool complex, outstanding entertainment. Best for groups."},
      {name:"Barceló Bávaro Palace",tier:"Upscale All-Inclusive",price:"$200–$350/night",notes:"Best value luxury all-inclusive in Punta Cana. Great for groups and families, consistently reliable."}
    ],
    restaurants:[
      {name:"La Yola (PUNTACANA Resort)",cuisine:"Caribbean Seafood",notes:"Built on wooden stilts over the water. Beautiful at sunset, excellent seafood, unforgettable setting."},
      {name:"Jellyfish Restaurant",cuisine:"Beachfront Seafood",notes:"Toes literally in the sand. The lobster is exceptional and the vibe is perfectly relaxed."}
    ],
    activities:[
      {name:"Saona Island Day Trip",price:"$80–$120/pp",notes:"Remote paradise island with natural swimming pools and white sand. The best day trip in the Dominican Republic — don't skip it."},
      {name:"Buggy Adventure Tours",price:"$70–$100/pp",notes:"Drive ATVs through sugarcane fields to a local village for merengue, rum, and a cacao demonstration. Fun and genuinely cultural."},
      {name:"Scape Park",price:"$60–$90/pp",notes:"Cenote swimming, zip lines, Indigenous cave, cultural shows. A full day of varied activities."}
    ],
    allinclusive:[
      {name:"Excellence El Carmen",type:"Adults-Only",price:"$350–$600/night",highlights:["10 restaurants","Swim-up suites","Non-motorized water sports"]},
      {name:"Hard Rock Punta Cana",type:"Groups & Families",price:"$300–$600/night",highlights:["13 restaurants","Casino & entertainment","Largest pool complex in DR"]}
    ],
    bestFor:["Best value all-inclusive","Groups","Couples","Families","First-time Caribbean"],
    bestTime:"December–April is perfect. Good deals year-round.",
    travelNote:"Passport required. Direct flights from many US and Canadian cities. No visa required for US or Canadian citizens."
  },

  stlucia:{
    label:"St. Lucia",emoji:"🌋",region:"Caribbean",
    vibe:"St. Lucia is the Caribbean's most dramatic island — twin volcanic peaks called the Pitons rise straight from the sea, rainforest covers the interior, and the resorts on the southwest coast are some of the most romantic in the world. Less crowded and more naturally beautiful than almost any other island, St. Lucia rewards travelers who want something beyond the typical beach resort.",
    sell:"St. Lucia is a specialty destination where local knowledge matters enormously — the right resort on the island is everything, and the wrong one leaves you far from the scenery and activities that make St. Lucia special. Jesse and Sam know exactly where to place each traveler.",
    hotels:[
      {name:"Jade Mountain Resort",tier:"Ultra-Luxury",price:"$1,200–$3,000/night",notes:"Open-wall 'sanctuaries' with a missing fourth wall revealing private infinity pools and direct Pitons views. The most dramatic resort experience in the Caribbean. Bucket list."},
      {name:"Anse Chastanet",tier:"Luxury Boutique",price:"$500–$900/night",notes:"Intimate, adults-preferred resort right on a black sand beach at the base of the Pitons. The most authentic St. Lucia experience."},
      {name:"Sugar Beach (A Viceroy Resort)",tier:"Ultra-Luxury",price:"$800–$2,000/night",notes:"Nestled between the Pitons in a former sugar plantation. White sand beach rare for this coast, extraordinary beauty."},
      {name:"Sandals Grande St. Lucian",tier:"Luxury All-Inclusive Adults",price:"$400–$800/night",notes:"Located on a narrow strip connected to the main island. Overwater bungalows available. Great for couples wanting AI convenience."}
    ],
    restaurants:[
      {name:"Dasheene at Ladera Resort",cuisine:"Caribbean Fine Dining",notes:"Open-sided restaurant with Pitons views. One of the most beautiful settings for dinner in the Caribbean."},
      {name:"The Cliff at Cap (Cap Maison)",cuisine:"Mediterranean / Seafood",notes:"Literally built into a cliff face above the Caribbean. Sunset here is exceptional."},
      {name:"Coal Pot Restaurant (Castries)",cuisine:"Creole Seafood",notes:"Historic waterfront building, local Creole cuisine done properly. The most authentic dining in the capital."}
    ],
    activities:[
      {name:"Pitons Hike (Gros Piton)",price:"$40–$60/pp with guide",notes:"Hike to the summit of Gros Piton for panoramic views of the island and sea. Challenging but extraordinary."},
      {name:"Sulphur Springs Mud Bath",price:"$20/pp",notes:"The world's only drive-in volcano — bathe in volcanic mud, then rinse in mineral springs. Bizarre and wonderful."},
      {name:"Snorkeling at Anse Chastanet",price:"$40–$60/pp",notes:"Some of the best shore snorkeling in the Caribbean — coral reef starts right at the beach."},
      {name:"Rainforest Zip Line",price:"$80–$100/pp",notes:"Fly through the rainforest canopy on a series of zip lines. Great views, great rush."}
    ],
    bestFor:["Couples","Honeymoon","Romance seekers","Nature lovers","Luxury travelers"],
    bestTime:"December–May is dry season and perfect.",
    travelNote:"Passport required. Flights connect through major US hubs, typically 4–7 hours total. No visa for US or Canadian citizens."
  },

  turksandcaicos:{
    label:"Turks & Caicos",emoji:"🐢",region:"Caribbean",
    vibe:"Grace Bay Beach in Providenciales is consistently ranked the #1 beach in the world — not the Caribbean, the world. Twelve miles of powder-white sand, water that shifts from teal to azure to deep blue, and a relaxed luxury vibe that never feels overrun. Turks & Caicos is the Caribbean for travelers who want the very best beach without the crowds.",
    sell:"Turks & Caicos is a premium destination where choosing the right property and time of year makes a big difference. Jesse and Sam know the Grace Bay resorts inside and out and can find genuine value in a place that looks expensive on the surface.",
    hotels:[
      {name:"COMO Parrot Cay",tier:"Ultra-Luxury Private Island",price:"$1,500–$4,000/night",notes:"Private island accessible only by boat. 72 rooms, COMO Shambhala spa, one of the most exclusive resort experiences in the Caribbean."},
      {name:"Grace Bay Club",tier:"Ultra-Luxury",price:"$700–$2,000/night",notes:"No children under 12 in the hotel; all-suite, most with private plunge pools. The most refined adult experience on Grace Bay."},
      {name:"Seven Stars Resort",tier:"Luxury",price:"$500–$1,200/night",notes:"All-suite resort directly on Grace Bay. Some of the largest suites in the Caribbean at competitive prices for the standard."},
      {name:"Beaches Turks & Caicos",tier:"Family All-Inclusive",price:"$400–$800/night",notes:"The gold standard family all-inclusive in TCI. On Grace Bay Beach, kids clubs, waterpark, Sesame Street. The best family option on the island."}
    ],
    restaurants:[
      {name:"Grace's Cottage",cuisine:"Caribbean Fine Dining",notes:"Outdoor dining under century-old trees. The most romantic restaurant on the island."},
      {name:"Coyaba Restaurant",cuisine:"Fusion Caribbean",notes:"Consistently rated the best restaurant in Turks & Caicos. Locally caught seafood, outstanding wine list."},
      {name:"Da Conch Shack",cuisine:"Local Seafood",notes:"Feet in the sand, freshest conch in the Caribbean. Don't miss the cracked conch and Turks Head beer."}
    ],
    activities:[
      {name:"Snorkeling / Diving Smith's Reef",price:"$30–$50/pp",notes:"One of the best shore snorkeling reefs in the Caribbean. Right from the beach."},
      {name:"Half Moon Bay Island Excursion",price:"$80–$120/pp",notes:"Remote uninhabited island accessible by boat — pristine beach, clear water, few people."},
      {name:"Whale Watching (Jan–April)",price:"$90–$130/pp",notes:"Humpback whales migrate through the Turks Island Passage. Exceptional sightings."},
      {name:"Kitesurfing Lessons",price:"$100–$150/pp",notes:"Long Bay Beach has world-class consistent wind. Top kitesurfing destination in the Caribbean."}
    ],
    bestFor:["Couples","Honeymoon","Ultra-luxury","Beach lovers","Snorkelers & divers"],
    bestTime:"December–April is ideal. Low season (May–Nov) brings deals and light crowds.",
    travelNote:"Passport required. Flights connect through major US hubs — most travelers are 3–5 hours door-to-door. No visa for US or Canadian citizens."
  },

  // ─── USA ────────────────────────────────────────────────────

  lasvegas:{
    label:"Las Vegas",emoji:"🎰",region:"Southwest USA",
    vibe:"Las Vegas is sensory overload in the best way — world-class dining from James Beard chefs, shows no other city can match, every major sport, Formula 1 on the Strip, and nightlife that runs until dawn. But it's also legitimately great for golfers (Shadow Creek, Cascata), for food travelers who want restaurants unavailable anywhere else, and for groups where the challenge is keeping everyone entertained — Vegas solves that problem effortlessly.",
    sell:"Groups are Jesse and Sam's specialty, and Las Vegas is the ultimate group destination. We know which Strip hotels have the best pools, which restaurants need reservations months ahead, and how to structure a multi-night trip that keeps everyone engaged regardless of what they're into.",
    hotels:[
      {name:"Wynn Las Vegas",tier:"Ultra-Luxury",price:"$300–$800/night",notes:"The most consistently excellent hotel on the Strip. Stunning rooms, incredible pool, best golf resort course in Nevada, and restaurants that would succeed in any city in the world."},
      {name:"The Venetian Resort",tier:"Luxury",price:"$200–$500/night",notes:"All suites are 700+ sq ft — you'll never feel cramped. The Grand Canal Shoppes and food hall are exceptional, and the location puts you at the center of everything."},
      {name:"Bellagio",tier:"Luxury",price:"$200–$500/night",notes:"The icon. Fountain show, Picasso restaurant, gallery, and a prime location. Request a fountain-view room."},
      {name:"The Cosmopolitan",tier:"Upscale",price:"$180–$400/night",notes:"Best vibe on the Strip. Private terraces overlooking the Bellagio fountain are one of the great hotel perks in Las Vegas."},
      {name:"Resorts World Las Vegas",tier:"Luxury",price:"$150–$400/night",notes:"Newest mega-resort — three hotels in one. Incredible pool deck and some of the best new restaurants Vegas has opened in years."}
    ],
    golf:[
      {name:"Shadow Creek Golf Club",tier:"World-Class / Bucket List",price:"$500–$600/round",notes:"Tom Fazio masterpiece, MGM hotel guests only, Rolls Royce pickup from your hotel. Consistently Top-10 in America. The definition of a bucket-list round."},
      {name:"Cascata Golf Club",tier:"Elite",price:"$250–$400/round",notes:"600-foot waterfall, dramatic Red Rock Canyon backdrop, Tom Fazio design. Top-100 US course."},
      {name:"Wolf Creek Golf Club",tier:"Elite",price:"$150–$250/round",notes:"45 minutes outside Vegas, carved into red Mojave Desert rock. Dramatic and completely unique."}
    ],
    restaurants:[
      {name:"Joël Robuchon (MGM Grand)",cuisine:"French Fine Dining",notes:"Arguably the best restaurant in America. The 16-course tasting menu is a multi-hour event. Plan this for the special night of the trip."},
      {name:"CUT by Wolfgang Puck (Palazzo)",cuisine:"Steakhouse",notes:"Best steakhouse in Las Vegas. James Beard winner. The American Wagyu is extraordinary."},
      {name:"Lotus of Siam (East of Strip)",cuisine:"Thai",notes:"Off-Strip, easy to miss, widely considered the best Thai restaurant in America. Northern Thai dishes are the move."},
      {name:"Eggslut (Cosmopolitan)",cuisine:"Breakfast / Brunch",notes:"Always a line, always worth it. Best breakfast in Vegas — order The Slut."}
    ],
    activities:[
      {name:"The Sphere",price:"$100–$300/pp",notes:"The most technologically immersive entertainment venue ever built. Whatever is showing — go. Nothing else is like it."},
      {name:"Grand Canyon Helicopter Tour",price:"$300–$550/pp",notes:"Fly out, land inside the canyon, champagne toast. One of the great single-day experiences available from any American city."},
      {name:"High Roller at Dusk",price:"$30–$40/pp",notes:"500-foot Ferris wheel. Get the open-bar happy hour pod. Best views of the Strip at sunset."},
      {name:"F1 Las Vegas Grand Prix",price:"$500+/pp",notes:"November annually. Formula 1 at 200mph through the Strip. The fastest-growing event in American sports."}
    ],
    bestFor:["Groups","Bachelor/Bachelorette","Golf trips","Sports events","Foodies"],
    bestTime:"October–April is ideal. Summer deals are significant but the desert heat is extreme.",
    travelNote:"Direct flights from most major US and Canadian airports. No passport needed. Well-connected hub airport (LAS)."
  },

  orlando:{
    label:"Orlando / Disney",emoji:"✨",region:"Florida",
    vibe:"The world's theme park capital just got bigger. Universal's Epic Universe opened in 2025 alongside Disney World's four parks, EPCOT, and Hollywood Studios — and Orlando is also seriously good for golfers, with Bay Hill hosting a PGA Tour event every March. This is a city that rewards planning, and the difference between a well-organized Orlando trip and a chaotic one is enormous.",
    sell:"Disney and Universal trips need real strategic planning — FastPasses, dining reservations months ahead, park hopper strategies. Jesse and Sam manage this for you, including access to Disney's authorized travel agent programs that come with perks unavailable when booking direct.",
    hotels:[
      {name:"Disney's Grand Floridian Resort",tier:"Luxury Disney",price:"$600–$1,200/night",notes:"The flagship Disney resort. Victorian grandeur, monorail access to Magic Kingdom, five-star service. The most magical place to stay on Disney property."},
      {name:"Loews Portofino Bay (Universal)",tier:"Upscale",price:"$250–$500/night",notes:"Italian village resort connected to Universal by boat. Free Express Pass included — saves 2+ hours of queue time per day."},
      {name:"Four Seasons Orlando",tier:"Ultra-Luxury",price:"$500–$1,000/night",notes:"Private waterpark, 5 restaurants, golf, world-class spa — inside Disney World. For travelers who want luxury and theme parks simultaneously."},
      {name:"Rosen Shingle Creek",tier:"Golf Resort / Mid-Range",price:"$150–$300/night",notes:"On-site 18-hole course, great pools, excellent value. Best base for golf-plus-parks trips."}
    ],
    activities:[
      {name:"Magic Kingdom",price:"$109–$189/pp",notes:"Fireworks over Cinderella Castle is one of the iconic American travel experiences. Best with young kids but genuinely moves everyone."},
      {name:"Universal's Epic Universe",price:"$109–$189/pp",notes:"Opened 2025 — the largest Universal park ever built. Harry Potter and Nintendo worlds are jaw-dropping. Don't miss it."},
      {name:"EPCOT Food & Wine Festival",price:"Park admission + food",notes:"August through November. Walk around the world eating food and drinking from 30+ countries. One of the best recurring events in American theme parks."},
      {name:"Kennedy Space Center",price:"$75/pp",notes:"One of America's most impressive and moving attractions. The Saturn V rocket will stop you cold."}
    ],
    golf:[
      {name:"Bay Hill Club",tier:"Elite",price:"$150–$250/round",notes:"Arnold Palmer's personal course. Host of the Arnold Palmer Invitational (PGA Tour) each March."},
      {name:"Reunion Resort Golf",tier:"Luxury",price:"$100–$200/round",notes:"Three courses designed by Nicklaus, Watson, and Palmer."}
    ],
    bestFor:["Families","Disney fans","Golf groups","Couples","Theme park lovers"],
    bestTime:"January–April and September–November. Avoid summer school breaks for shorter lines.",
    travelNote:"Direct flights from most US and Canadian cities. MCO (Orlando) is one of the best-connected airports in North America."
  },

  miami:{
    label:"Miami",emoji:"🌆",region:"Florida",
    vibe:"Miami is unlike anywhere else in North America — the energy of a Latin American capital fused with Art Deco architecture, world-class food, and some of the most beautiful oceanfront real estate on the continent. South Beach at night, the murals of Wynwood, the Cuban culture of Little Havana, and a waterfront dining scene that keeps improving make this a city that never gets old.",
    sell:"Miami rewards local knowledge enormously. Jesse and Sam know which South Beach hotels face the ocean versus the street, which Wynwood restaurants need reservations months ahead, and how to build an itinerary that captures both the energy and the quiet beauty of this city.",
    hotels:[
      {name:"Faena Hotel Miami Beach",tier:"Ultra-Luxury",price:"$600–$1,500/night",notes:"The most dramatic hotel in Miami. Damien Hirst artwork, gold-leafed details, and a rooftop pool that has to be seen. Worth splurging for a special trip."},
      {name:"1 Hotel South Beach",tier:"Luxury Eco",price:"$400–$900/night",notes:"Best pool on South Beach, legendary rooftop bar, sustainability focus without sacrificing an ounce of luxury. Consistently the coolest hotel on the beach."},
      {name:"Fontainebleau Miami Beach",tier:"Luxury Resort",price:"$300–$700/night",notes:"Iconic since 1954, fully renovated. Massive pool scene, LIV nightclub, and a location at the center of everything."},
      {name:"The Setai Miami Beach",tier:"Ultra-Luxury Serene",price:"$700–$1,500/night",notes:"Three pools, Asian-inspired design, the most peaceful luxury hotel on South Beach. For travelers who want Miami but need quiet."}
    ],
    restaurants:[
      {name:"KYU (Wynwood)",cuisine:"Asian Wood-Fire BBQ",notes:"James Beard nominee. Wood-fired Asian BBQ in a cool Wynwood space. Best restaurant in Miami right now — book weeks ahead."},
      {name:"Versailles (Little Havana)",cuisine:"Cuban",notes:"The soul of Cuban Miami since 1971. Ropa vieja, Cuban sandwich, café cubano. A cultural institution."},
      {name:"Joe's Stone Crab (South Beach)",cuisine:"Seafood",notes:"Open October–May only. Miami institution since 1913. Stone crab claws with mustard sauce — the reason this place has a 90-minute wait."}
    ],
    activities:[
      {name:"Wynwood Walls Art Walk",price:"Free",notes:"World's largest open-air street art museum. The entire neighborhood transformed into an outdoor gallery — extraordinary."},
      {name:"Everglades Airboat Tour",price:"$35–$55/pp",notes:"30 minutes west of the city. Airboat through alligator-filled wilderness. Genuinely exciting."},
      {name:"Little Havana Walking Tour",price:"$20–$30/pp",notes:"Domino Park, cigar rolling, café cubano, live music, vibrant culture. The most uniquely Miami experience you can have."}
    ],
    bestFor:["Nightlife","Foodies","Art & culture","Groups","Couples"],
    bestTime:"November–April is perfect. Summer is humid and rainy but prices drop significantly.",
    travelNote:"Direct flights from most US and Canadian cities. MIA (Miami International) is a major hub with excellent connections."
  },

  nashville:{
    label:"Nashville",emoji:"🎸",region:"Southeast USA",
    vibe:"Nashville has become one of America's greatest city destinations. Live music on Lower Broadway that starts at noon and runs to 3am, a food scene that would compete with any city in the country, whiskey distilleries across the region, and an infectious energy that makes everyone want to stay another day. It's the rare city that works perfectly for bachelorette parties, birthday weekends, corporate retreats, and couples alike.",
    sell:"Nashville group trips are among CxC's most popular bookings. We know the right hotels for groups, the restaurants that need reservations months in advance, and how to build an itinerary that keeps everyone together and happy from day one to checkout.",
    hotels:[
      {name:"Thompson Nashville",tier:"Luxury Boutique",price:"$300–$600/night",notes:"Consistently rated the best hotel in Nashville. Rooftop bar with panoramic city views, excellent restaurant. The coolest property in the city."},
      {name:"JW Marriott Nashville",tier:"Luxury",price:"$250–$500/night",notes:"Rooftop pool with Broadway views, great room sizes for groups, central location. Excellent for large groups."},
      {name:"Noelle Nashville",tier:"Boutique Upscale",price:"$250–$500/night",notes:"Art-forward, historic downtown hotel. Beautiful rooms, great bar scene."},
      {name:"Graduate Nashville",tier:"Mid-Range",price:"$150–$300/night",notes:"Fun, quirky design near Vanderbilt. Popular for bachelorette parties for good reason — great common spaces and atmosphere."}
    ],
    restaurants:[
      {name:"Prince's Hot Chicken",cuisine:"Nashville Hot Chicken",notes:"The inventor of the dish and still the best. Order medium unless you have serious heat tolerance — and even then."},
      {name:"Husk Nashville",cuisine:"Southern Fine Dining",notes:"James Beard Award-winning restaurant. One of the most important Southern restaurants in America."},
      {name:"Rolf & Daughters",cuisine:"Wood-Fired Italian",notes:"Best pasta in Nashville. Excellent wine list. Book ahead."},
      {name:"Butchertown Hall",cuisine:"Texas BBQ / Beer Hall",notes:"Texas-style BBQ, massive beer list, long communal tables. The ideal group dinner spot."}
    ],
    activities:[
      {name:"Lower Broadway Music Crawl",price:"Free (drinks only)",notes:"Live music from noon to 3am. Walk from honky-tonk to honky-tonk — Robert's Western World is the essential stop."},
      {name:"Ryman Auditorium Tour or Show",price:"$25 tour / $40–$150 show",notes:"The Mother Church of Country Music. Acoustics are genuinely extraordinary. See a show if anything is scheduled."},
      {name:"Tennessee Whiskey Trail",price:"$30–$60/pp",notes:"Jack Daniel's, George Dickel, Corsair — excellent distillery visits within 90 minutes of the city."},
      {name:"Johnny Cash Museum",price:"$20/pp",notes:"Comprehensive and moving tribute to the Man in Black. Worth 2 hours even for non-fans."}
    ],
    bestFor:["Bachelor/Bachelorette","Birthday weekends","Groups","Music fans","Foodies"],
    bestTime:"April–May and September–October for ideal weather. CMA Fest in June is incredible but very crowded.",
    travelNote:"Direct flights from most US and Canadian cities. BNA (Nashville) is a well-connected mid-size airport with a famously efficient terminal."
  },

  neworleans:{
    label:"New Orleans",emoji:"🎺",region:"Southeast USA",
    vibe:"No American city eats, drinks, or celebrates like New Orleans. A collision of French, Spanish, African, and Caribbean cultures produced food unlike anything else — Creole gumbo, beignets at 2am, oysters at Commander's Palace — alongside jazz that spills from clubs onto the street, above-ground cemetery tours, and a spirit of celebration that never turns off.",
    sell:"New Orleans rewards the traveler who goes deeper than Bourbon Street. Jesse and Sam know the restaurants that matter, the neighborhoods worth exploring, and how to time a trip around events like Mardi Gras, Jazz Fest, or the French Quarter Festival.",
    hotels:[
      {name:"Roosevelt New Orleans (Waldorf Astoria)",tier:"Ultra-Luxury",price:"$350–$700/night",notes:"The most storied hotel in New Orleans. The Sazerac Bar is where the cocktail was invented. You cannot stay anywhere more authentically New Orleans."},
      {name:"Hotel Monteleone",tier:"Historic Luxury",price:"$250–$500/night",notes:"Literary landmark on Royal Street — Tennessee Williams, Truman Capote, Hemingway all stayed here. The revolving Carousel Bar is an institution."},
      {name:"Ace Hotel New Orleans",tier:"Boutique Upscale",price:"$200–$400/night",notes:"Music-focused, cool design, rooftop pool. The most contemporary option in the French Quarter area."}
    ],
    restaurants:[
      {name:"Commander's Palace",cuisine:"Creole Fine Dining",notes:"The most important restaurant in New Orleans. James Beard Institution Award. The jazz brunch on weekends is a religious experience."},
      {name:"Dooky Chase's",cuisine:"Creole Soul Food",notes:"Civil rights history and legendary gumbo in the same room. A cultural treasure everyone should visit."},
      {name:"Café Du Monde",cuisine:"Beignets & Coffee",notes:"Open 24 hours, 365 days, since 1862. Powdered sugar beignets and café au lait by the river. Non-negotiable."},
      {name:"Brennan's",cuisine:"NOLA Brunch",notes:"Birthplace of Bananas Foster. The definitive New Orleans brunch experience."}
    ],
    activities:[
      {name:"Frenchmen Street Live Jazz",price:"Free–$10 cover",notes:"The authentic New Orleans music scene. Three blocks of live music venues going until 4am. Far better than Bourbon Street."},
      {name:"Swamp Tour",price:"$25–$40/pp",notes:"30 minutes from the city. Alligators, cypress trees, Spanish moss. A completely different world."},
      {name:"Cemetery Tour (St. Louis No. 1)",price:"$20–$30/pp",notes:"Above-ground tombs, voodoo history, fascinating stories. Eerie and genuinely unforgettable."},
      {name:"Mardi Gras Parades (Feb/March)",price:"Free parades",notes:"The greatest free street party in America. Jesse and Sam can plan a Mardi Gras trip that goes far beyond Bourbon Street."}
    ],
    bestFor:["Foodies","Music lovers","Groups","Cultural travelers","Festival goers"],
    bestTime:"October–May is ideal. Mardi Gras and Jazz Fest are the bucket-list events.",
    travelNote:"Direct flights from most US cities. MSY (New Orleans) airport is close to downtown — about 30 minutes."
  },

  charleston:{
    label:"Charleston, SC",emoji:"🌸",region:"Southeast USA",
    vibe:"America's most beautiful city — pastel antebellum mansions on cobblestone streets, a harbor framed by Fort Sumter, and a restaurant scene that's been redefining Southern cooking for a decade. Charleston has the elegance of a European city with the warmth of Southern hospitality, and the beach is just 20 minutes away.",
    sell:"Charleston is a perfect long weekend — short flights from most of North America, food worth planning around, and the right mix of history, beaches, and nightlife. Jesse and Sam know exactly how to structure a Charleston trip that hits every high note.",
    hotels:[
      {name:"Belmond Charleston Place",tier:"Luxury",price:"$300–$600/night",notes:"The grande dame of Charleston. Rooftop pool, right on King Street, impeccable service. The most iconic hotel in the city."},
      {name:"Zero George Street",tier:"Boutique Luxury",price:"$350–$600/night",notes:"Five restored 19th-century buildings around a private courtyard. The most beautiful boutique hotel in Charleston."},
      {name:"The Dewberry Charleston",tier:"Boutique Luxury",price:"$300–$600/night",notes:"Mid-century modern inside a historic federal building. Lively bar scene, distinctly cool atmosphere."}
    ],
    restaurants:[
      {name:"Husk",cuisine:"Southern Fine Dining",notes:"Sean Brock's celebrated monument to Southern ingredients. The most important restaurant in Charleston. Book 4–6 weeks ahead."},
      {name:"FIG",cuisine:"Southern / Mediterranean",notes:"James Beard Award winner. Farm-to-table before it was trendy, still among the best in the city."},
      {name:"The Ordinary",cuisine:"Oyster Bar & Seafood",notes:"Grand hall, incredible raw bar, best oysters in the South. The atmosphere alone is worth the visit."}
    ],
    activities:[
      {name:"Rainbow Row & Historic District Walk",price:"Free",notes:"The most photographed street in America. Easy, beautiful, and very Charleston."},
      {name:"Fort Sumter Boat Tour",price:"$25/pp",notes:"Short boat ride to where the Civil War began. Brief visit, fascinating history."},
      {name:"Isle of Palms Beach",price:"Free",notes:"20 minutes from downtown. Clean, beautiful, and much less crowded than most East Coast beaches."}
    ],
    golf:[
      {name:"Kiawah Ocean Course",tier:"World-Class",price:"$250–$400/round",notes:"Host of the 2021 PGA Championship. One of the most demanding and beautiful seaside courses in America."}
    ],
    bestFor:["Couples","Foodies","History lovers","Golf","Romantic weekends"],
    bestTime:"March–May and September–November. Summers are hot and humid.",
    travelNote:"Direct flights from most East Coast and Southeast US cities. CHS (Charleston) is a small, easy airport."
  },

  keys:{
    label:"Florida Keys",emoji:"🐠",region:"Florida",
    vibe:"A 125-mile chain of islands connected by a single road stretching into the sea. The Florida Keys have their own identity — laid-back, colorful, tropical, and home to the best sport fishing on the East Coast, world-class diving on the only living coral reef in the continental US, and the nightly sunset ritual at Mallory Square that feels like a genuine community celebration.",
    sell:"The Keys range from budget fishing lodges to ultra-luxury private island resorts. Little Palm Island is one of the most romantic resorts in the Americas and requires planning well in advance — Jesse and Sam know how to get you in.",
    hotels:[
      {name:"Little Palm Island Resort",tier:"Ultra-Luxury Private Island",price:"$1,500–$3,000/night",notes:"Private island by boat or seaplane only. 30 bungalows. No children under 16. The most romantic property in Florida and among the most romantic in the Americas. Plan months ahead."},
      {name:"Cheeca Lodge & Spa (Islamorada)",tier:"Luxury Resort",price:"$400–$700/night",notes:"The iconic Keys resort. Private pier, saltwater lagoon, fishing packages. The definitive Keys experience."},
      {name:"Bungalows Key Largo",tier:"Adults-Only All-Inclusive",price:"$400–$700/night",notes:"Adults-only AI in Key Largo. Overwater hammocks, kayaks, paddleboards, spa — and all meals and drinks included. Exceptional value."}
    ],
    restaurants:[
      {name:"Louie's Backyard (Key West)",cuisine:"New American",notes:"Deck over the water at sunset. The most celebrated dinner in Key West — book well ahead."},
      {name:"Blue Heaven (Key West)",cuisine:"Caribbean / Eclectic",notes:"Roosters wander between tables in an open-air courtyard. Completely magical."},
      {name:"Marker 88 (Islamorada)",cuisine:"Upscale Seafood",notes:"Long bayside deck, beautiful sunsets, consistently excellent since 1967."}
    ],
    activities:[
      {name:"John Pennekamp Coral Reef Snorkel",price:"$30/pp",notes:"America's first underwater park. Snorkel a living coral reef — the only one in the continental US. Right in Key Largo."},
      {name:"Sunset at Mallory Square (Key West)",price:"Free",notes:"Every evening. Street performers, crowds, live music — a genuine community celebration of another day."},
      {name:"Deep Sea Fishing Charter",price:"$100–$200/pp half-day",notes:"Islamorada is literally called the Sport Fishing Capital of the World. If you fish, this is a pilgrimage."}
    ],
    bestFor:["Couples","Honeymoon","Divers","Fishermen","Adults-only"],
    bestTime:"November–April. Perfect weather, clear water.",
    travelNote:"Fly into Miami or Fort Lauderdale and drive the Overseas Highway — one of the great scenic drives in America, roughly 3–4 hours to Key West."
  },

  // ─── GOLF DESTINATIONS ──────────────────────────────────────

  scottsdale:{
    label:"Scottsdale / Phoenix",emoji:"🌵",region:"Golf",
    vibe:"Scottsdale is the golf capital of the world — 200+ courses, perfect winter sunshine, and a food and spa scene that gives golfers' travel companions their own reasons to love the trip. The desert courses here — Troon North, TPC Scottsdale, We-Ko-Pa — are among the best public courses in America, full stop.",
    sell:"Golf group trips are one of CxC's biggest specialties. Jesse and Sam know the Scottsdale courses inside and out, have relationships with the top resorts, and build multi-course itineraries with guaranteed tee times, group transport, and hotel packages that beat booking independently.",
    hotels:[
      {name:"The Phoenician",tier:"Ultra-Luxury",price:"$500–$1,200/night",notes:"27-hole golf, Camelback Mountain backdrop, award-winning spa, 6 restaurants. The most complete luxury resort in Scottsdale."},
      {name:"Four Seasons at Troon North",tier:"Ultra-Luxury",price:"$500–$1,000/night",notes:"Perched in the desert at Pinnacle Peak with direct access to Troon North. Most dramatic resort setting in Arizona."},
      {name:"Fairmont Scottsdale Princess",tier:"Luxury Resort",price:"$350–$700/night",notes:"Home of the Waste Management Phoenix Open. TPC Scottsdale on-site, multiple pools, excellent group rates."},
      {name:"The Boulders Resort",tier:"Luxury",price:"$300–$650/night",notes:"Built into massive granite boulders. Two Jay Morrish courses and one of the most unique resort settings in the country."}
    ],
    golf:[
      {name:"TPC Scottsdale (Stadium Course)",tier:"World-Class",price:"$200–$350/round",notes:"Host of the Waste Management Phoenix Open. The 16th hole — 20,000 fans in a bowl around the green — is the most famous in American golf."},
      {name:"Troon North (Monument Course)",tier:"Elite",price:"$175–$295/round",notes:"Golf Digest Top-100. Carved into the McDowell Mountains. Arguably the most beautiful course in Scottsdale."},
      {name:"We-Ko-Pa Golf Club (Saguaro)",tier:"Elite",price:"$150–$250/round",notes:"Tribally owned, no homes on the course. Pure desert golf consistently rated among the best public courses in the country."},
      {name:"Grayhawk Golf Club (Talon)",tier:"Upscale",price:"$100–$180/round",notes:"Tom Fazio design. The most popular course for visiting golfers — great conditions, challenging, and fun."},
      {name:"The Boulders (South Course)",tier:"Upscale",price:"$100–$175/round",notes:"Golf through giant granite boulders. Completely unique in the game."}
    ],
    activities:[
      {name:"Hot Air Balloon at Sunrise",price:"$180–$220/pp",notes:"Float over saguaro cacti at sunrise with a champagne landing toast. One of the Southwest's great experiences."},
      {name:"Camelback Mountain Hike",price:"Free",notes:"Most iconic hike in Phoenix. Strenuous but the panoramic views are worth it."},
      {name:"Old Town Scottsdale Bar Crawl",price:"Free",notes:"Vibrant restaurant and bar scene, Western art galleries, walkable nightlife."}
    ],
    bestFor:["Golfers","Golf groups","Spa seekers","Winter escape","Groups"],
    bestTime:"October–April is ideal (70–80°F). May–September is punishing desert heat.",
    travelNote:"Direct flights from most US and Canadian cities into PHX (Phoenix Sky Harbor). Easy cab/rideshare to Scottsdale."
  },

  myrtlebeach:{
    label:"Myrtle Beach",emoji:"⛳",region:"Golf",
    vibe:"Over 100 courses within 60 miles makes the Grand Strand the most golf-dense destination in America. Every price point, a laid-back beach town atmosphere, and group hotel rates that make the East Coast's most accessible major golf trip surprisingly affordable — especially for groups that want to play 4 rounds in 4 days without breaking the bank.",
    sell:"Jesse and Sam have put together more Myrtle Beach golf trips than they can count. We know which courses are worth it, how to bundle tee times with hotel packages for genuine savings, and how to build a 3–4 night itinerary that plays multiple rounds without rushing.",
    hotels:[
      {name:"Myrtle Beach Marriott (Grande Dunes)",tier:"Luxury Resort",price:"$200–$400/night",notes:"Best resort hotel in the area. Full spa, Grande Dunes Marina course access, and great group rates."},
      {name:"Embassy Suites Oceanfront",tier:"Mid-Range",price:"$150–$280/night",notes:"All-suite, free breakfast, oceanfront. Outstanding value for golf groups needing a solid base."},
      {name:"Kingston Plantation",tier:"Condo Resort",price:"$150–$350/night",notes:"Full kitchen suites — ideal for groups who want to cook some meals and save on food budgets."}
    ],
    golf:[
      {name:"Caledonian Golf & Fish Club",tier:"Elite",price:"$80–$130/round",notes:"Scottish links-style course most golfers agree is the best in the Grand Strand. Genuine links character."},
      {name:"TPC Myrtle Beach",tier:"Elite",price:"$100–$150/round",notes:"Tom Fazio design. Top-50 public course in the US."},
      {name:"Barefoot Resort (Fazio Course)",tier:"Elite",price:"$80–$130/round",notes:"Four courses on one resort — the Fazio is the standout, consistently among the best in the area."},
      {name:"Pawleys Plantation",tier:"Upscale",price:"$60–$100/round",notes:"Jack Nicklaus design with a stunning salt marsh setting. One of the most scenic rounds available."},
      {name:"Legends Golf Complex",tier:"Mid-Range",price:"$50–$90/round",notes:"27 holes across three courses. Great value, great conditions, very popular with visiting groups."}
    ],
    restaurants:[
      {name:"Sea Captain's House",cuisine:"Seafood",notes:"Myrtle Beach institution since 1954. Oceanfront, she-crab soup is legendary. The right dinner after a long day on the course."}
    ],
    bestFor:["Golf groups","East Coast golf trips","Budget-conscious golf","Multiple rounds in a week"],
    bestTime:"March–May and September–November. Perfect golf weather and no summer crowds.",
    travelNote:"Direct flights available to MYR (Myrtle Beach) from many East Coast cities. Also a reasonable drive from the entire Southeast and Northeast."
  },

  pebblebeach:{
    label:"Pebble Beach / Monterey",emoji:"🌊",region:"Golf",
    vibe:"Golf's holiest ground. The Monterey Peninsula is home to a collection of courses — Pebble Beach, Cypress Point, Spyglass Hill — that are collectively unmatched anywhere in the world. Pebble Beach Golf Links has hosted more US Opens than any other course. Holes 6 through 10 along the Pacific cliffs are the most beautiful sequence in golf anywhere. This is a bucket-list trip.",
    sell:"Pebble Beach requires advance planning — tee times at Pebble book 18 months ahead for resort guests. Jesse and Sam have secured tee times for clients and know exactly how to structure a Monterey Peninsula trip to play multiple legendary courses in 3–4 days.",
    hotels:[
      {name:"The Lodge at Pebble Beach",tier:"Iconic / Bucket List",price:"$800–$2,500/night",notes:"THE home of golf. Rooms overlook the 18th fairway. You walk out the front door and are on the first tee. The single most golf-specific bucket-list hotel stay in the world."},
      {name:"The Inn at Spanish Bay",tier:"Ultra-Luxury",price:"$600–$1,500/night",notes:"Links-style course on-site, bagpiper at sunset every evening, spectacular Pacific views."},
      {name:"Hyatt Regency Monterey",tier:"Mid-Range",price:"$200–$400/round",notes:"Good value base for Peninsula golf. Old Del Monte Golf Course on-site."}
    ],
    golf:[
      {name:"Pebble Beach Golf Links",tier:"Bucket List / Iconic",price:"$550–$625/round",notes:"#1 public course in America, arguably the most famous in the world. 7 US Opens held here. The cliff holes along the Pacific are golf at its absolute most beautiful."},
      {name:"Spyglass Hill Golf Course",tier:"Elite",price:"$300–$400/round",notes:"Starts in the Del Monte Forest and finishes along the ocean. Among the hardest public courses in America."},
      {name:"Poppy Hills Golf Course",tier:"Upscale",price:"$100–$175/round",notes:"Best value on the Pebble Beach Company properties. Play this one to warm up."}
    ],
    restaurants:[
      {name:"Stillwater Bar & Grill (The Lodge)",cuisine:"California Seafood",notes:"Views of the 18th green and Pacific. Dungeness crab, fresh local catch. The most scenic restaurant in American golf."},
      {name:"Aubergine (Carmel)",cuisine:"Michelin Fine Dining",notes:"Michelin-starred, stunning wine cave. One of the best restaurants in California. Reserve months ahead."}
    ],
    activities:[
      {name:"17-Mile Drive",price:"$12/car",notes:"Lone Cypress, Seal Rock, stunning coastline. Non-negotiable — take this before or after your round."},
      {name:"Carmel-by-the-Sea",price:"Free",notes:"Most charming small town in California. Wine tasting rooms, art galleries, world-class restaurants."},
      {name:"Big Sur Coastal Drive",price:"Free",notes:"One of the great scenic drives on earth. Bixby Creek Bridge, McWay Falls — 1.5 hours south."}
    ],
    bestFor:["Serious golfers","Bucket-list golf trips","Couples","Wine & food lovers"],
    bestTime:"April–October. Morning coastal fog burns off by midday.",
    travelNote:"Fly into SFO (San Francisco) or SJC (San Jose) and drive 2 hours south along the coast — scenic in its own right."
  },

  pinehurst:{
    label:"Pinehurst / NC Sandhills",emoji:"🌲",region:"Golf",
    vibe:"The cradle of American golf. Pinehurst #2 has hosted more USGA championships than any course on earth and Donald Ross's design — crowned fairways, native wiregrass rough, no water hazards — remains as relevant today as 1907. The Village of Pinehurst itself is a charming walkable resort community unlike anything else in American golf.",
    sell:"Pinehurst is a golf pilgrimage and Jesse and Sam can build the definitive itinerary — combining No. 2, No. 4, and Pine Needles for a multi-day experience that serious golfers talk about for years.",
    hotels:[
      {name:"The Carolina Hotel (Pinehurst Resort)",tier:"Historic Luxury",price:"$300–$700/night",notes:"The grande dame of Pinehurst. Stay here and walk to every course on the resort. Impeccably maintained and genuinely historic."},
      {name:"The Holly Inn (Pinehurst Resort)",tier:"Boutique Historic",price:"$250–$500/night",notes:"Oldest inn in the Village of Pinehurst. Charming, intimate, great dining on-site."},
      {name:"Pine Needles Lodge",tier:"Classic Golf Resort",price:"$200–$400/night",notes:"Donald Ross course on-site, host of three US Women's Opens. Unpretentious golf lodge atmosphere."}
    ],
    golf:[
      {name:"Pinehurst No. 2",tier:"Bucket List / Iconic",price:"$200–$450/round",notes:"Donald Ross masterpiece. Host of more USGA events than any course in the world. Crowned fairways and native wiregrass rough — not what most golfers expect until they experience it."},
      {name:"Pinehurst No. 4",tier:"Elite",price:"$175–$300/round",notes:"Gil Hanse redesign, host of the 2024 US Open. Modern, dramatic, challenging."},
      {name:"Pinehurst No. 8",tier:"Elite",price:"$150–$250/round",notes:"Rees Jones design. Most visually dramatic course on the resort with panoramic Sandhills views."},
      {name:"Pine Needles Golf Course",tier:"Elite Value",price:"$100–$200/round",notes:"Donald Ross gem next door. Three US Women's Opens. Great alternative at a fraction of the resort price."}
    ],
    restaurants:[
      {name:"1895 Grille (Carolina Hotel)",cuisine:"Southern Fine Dining",notes:"Refined Southern cuisine in the historic hotel. Best dinner in Pinehurst."},
      {name:"Dugan's Pub (Village)",cuisine:"American Bar",notes:"Classic golf 19th-hole atmosphere. The right place to recap the round."}
    ],
    bestFor:["Serious golfers","Golf history buffs","Golf groups","Bucket-list trips"],
    bestTime:"March–May and September–November. Perfect Sandhills weather.",
    travelNote:"Fly into RDU (Raleigh-Durham) and drive 75 minutes, or CLT (Charlotte) for a similar drive. Short enough for a long weekend."
  },

  // ─── INTERNATIONAL ──────────────────────────────────────────

  paris:{
    label:"Paris",emoji:"🗼",region:"Europe",
    vibe:"Arguably the world's greatest city. Nowhere on earth concentrates so much art, architecture, food, and beauty in one place. The Louvre, Musée d'Orsay, Notre Dame's restoration, Versailles 30 minutes away — and a restaurant scene that defined fine dining for 200 years and keeps reinventing it.",
    sell:"International travel rewards real expertise. Jesse and Sam know the Paris neighborhoods, the hotels worth the premium, and which restaurants need reservations made before you book your flights. We make Europe feel manageable and effortless.",
    hotels:[
      {name:"Le Bristol Paris",tier:"Palace Hotel",price:"$1,200–$4,000/night",notes:"One of Paris's six Palace-rated hotels. The garden is the most beautiful in Paris. The 3-Michelin-star restaurant Epicure is a reason to visit on its own."},
      {name:"Hôtel du Louvre (Hyatt Unbound)",tier:"Luxury",price:"$400–$800/night",notes:"Directly across from the Louvre with dome views. Excellent location value."},
      {name:"Pavillon de la Reine (Le Marais)",tier:"Boutique Luxury",price:"$400–$700/night",notes:"Hidden behind a private courtyard in the Marais. Quiet, romantic, completely beautiful."},
      {name:"citizenM Paris",tier:"Design / Value",price:"$150–$250/night",notes:"Excellent design, great locations. Best value for travelers who want style without the palace price."}
    ],
    restaurants:[
      {name:"Guy Savoy",cuisine:"Grand French Cuisine",notes:"3 Michelin stars. One of the 10 best restaurants in the world. Reserve 2–3 months ahead."},
      {name:"Septime",cuisine:"Neo-Bistro",notes:"One of the world's most exciting restaurants. Book by phone 3 weeks ahead at 8am Paris time — the effort is worth it."},
      {name:"L'Ami Jean",cuisine:"Basque Bistro",notes:"Loud, packed, extraordinary. One of Paris's most beloved institutions."},
      {name:"Breizh Café (Le Marais)",cuisine:"Crêpes & Galettes",notes:"Best crêpes in Paris. Sourced from Brittany, beautifully executed. A perfect Marais lunch."}
    ],
    activities:[
      {name:"Eiffel Tower Summit at Sunset",price:"$30–$35/pp",notes:"Book the top floor online 2+ months ahead. At sunset it's genuinely transcendent. Don't go without a reservation."},
      {name:"Louvre with Private Guide",price:"$20 entry + $100–$200 guide",notes:"3 hours with a private guide is infinitely better than wandering the world's largest museum alone."},
      {name:"Versailles Day Trip",price:"$25–$30/pp",notes:"30 minutes by train. Hall of Mirrors, the Grand Canal, gardens. Plan a full day."},
      {name:"Musée d'Orsay",price:"$18/pp",notes:"Greatest Impressionist collection in the world. Monet, Van Gogh, Renoir, Degas. Not optional."},
      {name:"Seine River Dinner Cruise",price:"$80–$150/pp",notes:"Paris at night from the water. The Eiffel Tower sparkles every hour on the hour. Impossibly romantic."}
    ],
    bestFor:["Couples","Honeymooners","Art lovers","Foodies","First Europe trip"],
    bestTime:"April–June and September–October are perfect. August is peaceful (locals leave); July is hot and crowded.",
    travelNote:"Passport required. Direct transatlantic flights from most major US and Canadian hubs. Paris CDG is a major international gateway."
  },

  italy:{
    label:"Italy",emoji:"🍕",region:"Europe",
    vibe:"Italy is the most rewarding country in the world for travelers. The food alone justifies the trip — each region has a cuisine unlike the others. Art and architecture span 3,000 years of Western civilization. And the landscapes, from Amalfi cliffs to Tuscan hills to Venetian canals, are so beautiful they feel fictional.",
    sell:"Italy's iconic destinations require serious planning — restaurant reservations months ahead, private tour access to skip the Colosseum queues, Amalfi hotels that book a year in advance. Jesse and Sam manage all of this for you so Italy feels effortless.",
    hotels:[
      {name:"Hotel de Russie (Rome)",tier:"Luxury",price:"$600–$1,200/night",notes:"Best location in Rome — steps from the Spanish Steps, a stunning private garden courtyard, Michelin-starred dining."},
      {name:"J.K. Place Firenze (Florence)",tier:"Boutique Luxury",price:"$500–$1,000/night",notes:"Like staying in a private Florentine palace. 20 rooms, steps from the Duomo and Uffizi."},
      {name:"Il San Pietro di Positano",tier:"Ultra-Luxury",price:"$800–$2,000/night",notes:"Clinging to cliffs above Positano, private elevator from the road. Italy's most romantic hotel. Book a year ahead."},
      {name:"Belmond Villa San Michele (Florence)",tier:"Ultra-Luxury",price:"$800–$2,000/night",notes:"Former Franciscan monastery on a hillside above Florence. Facade attributed to Michelangelo. The most spectacular views in Tuscany."}
    ],
    restaurants:[
      {name:"La Pergola (Rome)",cuisine:"Italian Fine Dining",notes:"Rome's only 3-Michelin-star restaurant with city views. The most celebrated dinner in Rome."},
      {name:"Buca Mario (Florence)",cuisine:"Florentine Trattoria",notes:"Open since 1886. The 40-day dry-aged Florentine T-bone (bistecca) is one of the great meat dishes in the world."},
      {name:"Lo Scoglio (Amalfi Coast)",cuisine:"Coastal Italian",notes:"The most famous pasta on the Amalfi Coast — spaghetti with zucchini and mint. Worth the boat trip."},
      {name:"Il Latini (Florence)",cuisine:"Tuscan Communal Dining",notes:"Shared tables, no menu, communal wine — extraordinary Tuscan food appearing for two hours."}
    ],
    activities:[
      {name:"Colosseum Private Tour with Underground",price:"$80–$150/pp",notes:"Book a private guide with underground and arena floor access well in advance. The difference from the general queue is extraordinary."},
      {name:"Vatican Museums & Sistine Chapel",price:"$35–$60/pp",notes:"Book the earliest possible entry. Michelangelo's ceiling is one of humanity's great achievements."},
      {name:"Amalfi Coast by Private Boat",price:"$300–$500/boat half-day",notes:"Private boat from Positano or Sorrento. Grottos, private beaches, sea caves. The only way to see the coast as it deserves."},
      {name:"Tuscan Wine Tour from Florence",price:"$80–$150/pp",notes:"Day trip into Chianti Classico. Vineyard visits, olive oil, local lunch. The quintessential Tuscany experience."},
      {name:"Cooking Class in Florence",price:"$100–$200/pp",notes:"Learning to make pasta by hand in a Florentine kitchen. Hands-on, delicious, and the best souvenir from Italy."}
    ],
    bestFor:["Foodies","History lovers","Couples","Honeymooners","Wine lovers","Art travelers"],
    bestTime:"April–June and September–October. August is very hot and crowded in cities.",
    travelNote:"Passport required. Transatlantic flights to Rome (FCO) or Milan (MXP) from major US and Canadian hubs. No visa for US or Canadian citizens (under 90 days)."
  },

  greece:{
    label:"Greece",emoji:"🏛️",region:"Europe",
    vibe:"Ancient history and breathtaking island beauty in one country. The Acropolis and 2,500 years of Western civilization in Athens, the world-famous caldera views of Santorini, Mykonos's legendary nightlife and whitewashed windmills, and the clearest blue water in the Mediterranean. Greece continues to surprise even experienced travelers.",
    sell:"Greece requires knowing which island is right for which traveler — Santorini for romance, Mykonos for energy, Crete for variety, Corfu for nature. Jesse and Sam have helped dozens of clients navigate island hopping and know which hotels, boats, and experiences are worth the premium.",
    hotels:[
      {name:"Canaves Oia Epitome (Santorini)",tier:"Ultra-Luxury",price:"$800–$2,500/night",notes:"Best hotel in Santorini. Cliff-edge infinity pool over the caldera. Adults-only. Every room has a private plunge pool and caldera views. Bucket list."},
      {name:"Vedema Resort (Santorini)",tier:"Luxury Boutique",price:"$400–$900/night",notes:"15th-century winery village inland from Oia. Quieter, stunning interiors, pool carved from volcanic rock."},
      {name:"Belvedere Hotel (Mykonos)",tier:"Luxury Boutique",price:"$400–$1,000/night",notes:"Best hotel in Mykonos Town. Iconic white-washed design, great pool, close to everything."},
      {name:"Hotel Grande Bretagne (Athens)",tier:"Historic Luxury",price:"$350–$700/night",notes:"Direct Acropolis views, opened 1874. The most storied hotel in Greece."}
    ],
    restaurants:[
      {name:"Selene (Santorini)",cuisine:"Modern Greek Fine Dining",notes:"The finest restaurant in Santorini. Tasting menus of exceptional local ingredients."},
      {name:"Funky Gourmet (Athens)",cuisine:"Modern Greek",notes:"Two Michelin stars. The most creative cooking in Greece. Athens is having a serious food moment."},
      {name:"Nikolas Taverna (Mykonos)",cuisine:"Traditional Greek",notes:"Best traditional fish taverna in Mykonos. Waterfront, grilled fish from the Aegean that morning."}
    ],
    activities:[
      {name:"Santorini Caldera Sunset (Oia)",price:"Free",notes:"One of the most photographed sunsets in the world. Arrive early in Oia to secure a good spot."},
      {name:"Acropolis & Parthenon (Athens)",price:"$20/pp",notes:"2,500 years of Western civilization on one hill. Book the earliest entry to beat heat and crowds."},
      {name:"Santorini Sailing Catamaran",price:"$100–$180/pp",notes:"Sail the caldera, visit volcanic hot springs, snorkel, barbecue lunch on deck. Best day trip in Santorini."},
      {name:"Island Hopping by Ferry",price:"$30–$80 per trip",notes:"Santorini to Mykonos to Crete — fast ferries run regularly and island hopping is part of the Greece experience."}
    ],
    bestFor:["Couples","Honeymooners","Foodies","History lovers","Island lovers"],
    bestTime:"May–June and September–October. July–August is peak but very hot and crowded.",
    travelNote:"Passport required. Fly into Athens (ATH) and connect to islands by short flight or ferry. No visa for US or Canadian citizens."
  },

  spain:{
    label:"Spain",emoji:"💃",region:"Europe",
    vibe:"Europe's most exuberant country. Gaudí's impossible architecture in Barcelona, flamenco in its birthplace in Seville, the Prado in Madrid, and San Sebastián — which many chefs consider the greatest food city in the world per capita. Spain combines culture, beauty, and a quality of life that makes every traveler want to stay longer.",
    sell:"Spain trips reward serious planning — the right restaurants in San Sebastián require reservations a year ahead, Gaudí's Sagrada Família sells out weeks in advance, and knowing which Barcelona neighborhood to base yourself in makes a real difference. Jesse and Sam handle all of this.",
    hotels:[
      {name:"Hotel Arts Barcelona",tier:"Luxury",price:"$400–$800/night",notes:"Beachfront Ritz-Carlton skyscraper. Best pool in Barcelona, great access to beach and Gothic Quarter."},
      {name:"Mandarin Oriental Barcelona",tier:"Ultra-Luxury",price:"$500–$1,200/night",notes:"On the iconic Passeig de Gràcia boulevard. Rooftop pool, superb spa, Michelin-starred restaurant."},
      {name:"Alfonso XIII Seville",tier:"Historic Palace",price:"$300–$700/night",notes:"Moorish-revival palace built for the 1929 World's Fair. The most beautiful hotel in Seville."},
      {name:"Hotel María Cristina (San Sebastián)",tier:"Luxury Historic",price:"$350–$700/night",notes:"Belle Époque landmark in the culinary capital of Spain. The only place to stay in San Sebastián."}
    ],
    restaurants:[
      {name:"Asador Etxebarri (Basque Country)",cuisine:"World-Class Wood Grill",notes:"Frequently rated the #1 restaurant in the world. Everything cooked over embers from specific woods. 30 min from San Sebastián. Book a year ahead."},
      {name:"Tickets (Barcelona)",cuisine:"Avant-Garde Tapas",notes:"Albert Adrià's playful tapas bar. One of the most fun dining experiences in Europe. Reserve online months ahead."},
      {name:"La Boqueria Market (Barcelona)",cuisine:"Market Food",notes:"Europe's most famous food market. Get jamón ibérico, Galician oysters, and fresh juice. Don't miss the side stalls."}
    ],
    activities:[
      {name:"Sagrada Família (Barcelona)",price:"$30/pp",notes:"Gaudí's unfinished masterpiece — construction began 1882, continues today. One of the most extraordinary buildings ever conceived. Book weeks ahead."},
      {name:"Flamenco Show (Seville)",price:"$30–$60/pp",notes:"Flamenco in its birthplace. Raw, powerful, unforgettable."},
      {name:"San Sebastián Pintxos Crawl",price:"$30–$50/pp",notes:"Bar hop through the Old Town eating one or two pintxos at each stop. Best value eating anywhere in Europe."},
      {name:"Alhambra Palace (Granada)",price:"$20/pp",notes:"UNESCO World Heritage Moorish palace and fortress. One of the great architectural wonders of the world. Book 3 months ahead."}
    ],
    bestFor:["Foodies","Architecture lovers","Couples","Cultural travelers","Groups"],
    bestTime:"April–June and September–October. Spain is good almost year-round.",
    travelNote:"Passport required. Direct transatlantic flights to Madrid (MAD) and Barcelona (BCN) from many US and Canadian cities."
  },

  portugal:{
    label:"Portugal",emoji:"🐟",region:"Europe",
    vibe:"Europe's most rewarding value destination. World-class food and wine at significantly less than France, extraordinary Moorish tiles and architecture, dramatic Atlantic coastline, the Douro Valley wine country stretching up terraced hillsides, and a warmth from the people that makes Portugal feel instantly like home.",
    sell:"Portugal is having its moment and prices are rising — but it still represents the best value in Western Europe. Jesse and Sam know the Lisbon neighborhoods, the Douro wine estates, and the Algarve beach hotels worth the splurge.",
    hotels:[
      {name:"Bairro Alto Hotel (Lisbon)",tier:"Luxury Boutique",price:"$350–$700/night",notes:"Best boutique hotel in Lisbon. Rooftop bar with the city's best 360° panorama."},
      {name:"Six Senses Douro Valley",tier:"Luxury Wellness",price:"$600–$1,400/night",notes:"Vineyard views, world-class spa, and a wine country setting unlike anything else in Europe."},
      {name:"The Yeatman (Porto)",tier:"Luxury Wine Hotel",price:"$350–$700/night",notes:"Wine-dedicated luxury hotel with views over Porto's rooftops and the Douro River. Every room has a private terrace."},
      {name:"Belmond Reid's Palace (Madeira)",tier:"Ultra-Luxury",price:"$500–$1,200/night",notes:"Clifftop palace hotel since 1891 — Churchill and royalty have stayed here. The most iconic hotel in Portugal."}
    ],
    restaurants:[
      {name:"Belcanto (Lisbon)",cuisine:"Modern Portuguese",notes:"Two Michelin stars. Chef José Avillez reinvents Portuguese classics with extraordinary results. Reserve 3–4 weeks ahead."},
      {name:"Time Out Market (Lisbon)",cuisine:"Best of Lisbon",notes:"30 of Lisbon's best chefs under one roof in a beautiful covered market. The best food hall in Europe."},
      {name:"The Yeatman Restaurant (Porto)",cuisine:"Fine Dining / Portuguese",notes:"Two Michelin stars and the best wine list in Portugal. Hard to beat."}
    ],
    activities:[
      {name:"Sintra Palace Day Trip",price:"$10–$20/pp",notes:"Fairy-tale hilltop palaces 30 minutes from Lisbon. UNESCO World Heritage. Two palaces worth visiting on the same day."},
      {name:"Douro Valley Wine Tour",price:"$80–$150/pp",notes:"Boat along the Douro past vineyard terraces, visit two estates, wine and olive oil tasting with lunch."},
      {name:"Fado Show (Alfama, Lisbon)",price:"$25–$60/pp",notes:"Portugal's soulful folk music in a small restaurant in the ancient Alfama neighborhood. Intimate and moving."},
      {name:"Pastéis de Belém",price:"$2/pastry",notes:"The original custard tart bakery since 1837. Always a line. Worth it every time."}
    ],
    bestFor:["Foodies","Wine lovers","Value-conscious luxury travelers","History lovers","Couples"],
    bestTime:"March–May and September–October. Great weather without peak summer crowds.",
    travelNote:"Passport required. Direct flights from many US and Canadian cities to Lisbon (LIS). No visa for US or Canadian citizens."
  },

  hawaii:{
    label:"Hawaii",emoji:"🌺",region:"Hawaii / Pacific",
    vibe:"America's paradise — no passport required. Each island has its own personality: Maui for romance and luxury, Oahu for urban energy and Pearl Harbor, Big Island for volcanic drama, Kauai for raw untamed beauty. There is simply nothing else like Hawaii available to North American travelers, and the distances involved mean your clients are committing to a serious trip — worth doing right.",
    sell:"Hawaii looks easy to book but there are massive differences in resort quality, beach access, and value by island and property. Jesse and Sam know which Maui resort has the best beach versus best pool, why certain Kauai properties are worth the premium, and how to structure island-hopping.",
    hotels:[
      {name:"Four Seasons Maui at Wailea",tier:"Ultra-Luxury",price:"$800–$2,500/night",notes:"The finest hotel in Hawaii, universally agreed upon. Perfect beach, flawless service, world-class spa. The correct answer if budget is flexible."},
      {name:"Andaz Maui at Wailea",tier:"Luxury Boutique",price:"$500–$1,200/night",notes:"Best pool complex in Maui — a stunning lagoon system. Excellent restaurant, great beach access."},
      {name:"Grand Hyatt Kauai Resort & Spa",tier:"Luxury Resort",price:"$400–$800/night",notes:"Sprawling lagoon system, beautiful beach at Poipu. Kauai's most comprehensive resort experience."},
      {name:"Turtle Bay Resort (Oahu North Shore)",tier:"Upscale",price:"$350–$700/night",notes:"On the legendary North Shore. Big wave surf in winter, tropical paradise year-round. The most authentic Hawaii experience on Oahu."}
    ],
    restaurants:[
      {name:"Mama's Fish House (Maui)",cuisine:"Hawaii Regional Seafood",notes:"One of the most beloved restaurants in America. Reserve 3–4 months ahead. Fish caught that morning, fishermen listed on the menu by name."},
      {name:"MW Restaurant (Honolulu)",cuisine:"Hawaii Regional",notes:"James Beard nominated. Best local cooking in Honolulu combining Japanese, Chinese, Korean, and Hawaiian traditions."},
      {name:"Merriman's Maui",cuisine:"Hawaii Regional Farm-to-Table",notes:"Peter Merriman pioneered Hawaii Regional cuisine in 1988. Ocean view, exceptional local ingredients."}
    ],
    activities:[
      {name:"Road to Hana (Maui)",price:"Rental car",notes:"60 miles, 600+ curves, waterfalls, bamboo forests, black sand beaches. The essential Maui day — start early."},
      {name:"Hawaii Volcanoes National Park (Big Island)",price:"$35/car",notes:"Walk across a lava field, stand at an active caldera rim, watch lava glow at night. Nowhere else on earth offers this."},
      {name:"Na Pali Coast Helicopter (Kauai)",price:"$250–$350/pp",notes:"4,000-foot fluted green cliffs dropping into the Pacific. The most dramatic helicopter tour in America."},
      {name:"Sunrise at Haleakala (Maui)",price:"$30/car — reservation required",notes:"Drive to 10,000 feet, watch the sunrise above the clouds at 5am. Spiritual, extraordinary, not to be missed."},
      {name:"Old Lahaina Luau",price:"$120–$200/pp",notes:"Traditional Hawaiian feast, fire dancers, traditional music. The best luau experience in Hawaii."}
    ],
    golf:[
      {name:"Kapalua Plantation Course (Maui)",tier:"Elite",price:"$250–$350/round",notes:"PGA Tour season opener in January. Sweeping ocean views on every hole."},
      {name:"Princeville Makai Course (Kauai)",tier:"Elite",price:"$200–$300/round",notes:"Ocean views on nearly every hole on Kauai's dramatic North Shore."},
      {name:"Mauna Kea Golf Course (Big Island)",tier:"Elite",price:"$250–$350/round",notes:"Robert Trent Jones Sr. classic carved into the lava. Iconic 3rd hole across a volcanic bay."}
    ],
    bestFor:["Couples","Honeymooners","Families","Adventure travelers","Golf groups"],
    bestTime:"April–May and September–November are sweet spots — less crowded and slightly cheaper than peak.",
    travelNote:"No passport required for US citizens. Direct flights from US West Coast (5–6 hours); one stop from East Coast (9–11 hours total). Canadian citizens need a passport."
  },

  cruises:{
    label:"Cruises",emoji:"🚢",region:"All Oceans",
    vibe:"All-inclusive value, waking up somewhere new every morning without repacking, and the modern mega-ships — especially Royal Caribbean's Icon-class — that are genuine destination resorts in their own right. Cruising is the most efficient way to see multiple destinations, and for groups the value versus coordinating separate hotels and transfers can be extraordinary.",
    sell:"Jesse and Sam book cruises across all major lines and know which ships offer the best value, which cabins are worth the upgrade, and which itineraries are genuinely excellent. Cruise pricing is complex and volatile — let the experts get you the right deal.",
    ports:[
      {name:"Baltimore, MD",ships:"Royal Caribbean",note:"Drive-to departure for much of the East Coast — no flight needed! Bermuda, Caribbean, and Bahamas routes available."},
      {name:"Port Canaveral (Orlando area)",ships:"Disney, Royal Caribbean, Carnival",note:"Best for Disney Cruise Line. Easily combined with Universal Studios or Walt Disney World."},
      {name:"Miami (PortMiami)",ships:"All major lines",note:"World's busiest cruise port. Caribbean departures year-round on every major line."},
      {name:"New York (Cape Liberty, Bayonne NJ)",ships:"Norwegian, Royal Caribbean, Carnival",note:"Drive-to for the Northeast corridor. Transatlantic and Caribbean departures."},
      {name:"Tampa, FL",ships:"Carnival, Royal Caribbean, Norwegian",note:"Great for Western Caribbean routes. Easy drive from Florida."},
      {name:"Seattle / Vancouver",ships:"Holland America, Princess, Norwegian, RC",note:"Gateway to Alaska cruises — glaciers, fjords, and incredible wildlife. Some of the most spectacular cruising anywhere."},
      {name:"Barcelona / Rome (Civitavecchia)",ships:"MSC, Celebrity, Royal Caribbean, Viking",note:"Mediterranean departures. Italy, Greece, Spain, France, Croatia in one trip."}
    ],
    lines:[
      {name:"Royal Caribbean",best:"Groups & families",notes:"Most amenities of any line — surf simulators, Broadway shows, waterparks, rock climbing. Icon of the Seas is the largest ship ever built."},
      {name:"Disney Cruise Line",best:"Families with kids",notes:"Character experiences at sea, exceptional kids programming, Pixar and Marvel entertainment. More expensive but genuinely exceptional."},
      {name:"Celebrity Cruises",best:"Couples & foodies",notes:"A meaningful step above Royal Caribbean in food quality and service. Le Voyage by Daniel Boulud is outstanding."},
      {name:"Carnival",best:"Budget & large groups",notes:"Most affordable major line. Great for large friend groups and first-time cruisers."},
      {name:"Norwegian (NCL)",best:"Adults wanting flexibility",notes:"No formal dress codes, no assigned dining times — total freedom. Great for groups who want to do their own thing."},
      {name:"Viking Ocean Cruises",best:"Luxury couples & cultural travelers",notes:"No children under 18. All-inclusive including excursions. The most cultural and refined cruise experience available."}
    ],
    activities:[
      {name:"Alaska Cruise (7–14 nights)",price:"From $899/pp",notes:"Glaciers calving into the sea, orca sightings, bald eagles, dramatic fjords. Departs Seattle or Vancouver."},
      {name:"Mediterranean Cruise (7–14 nights)",price:"From $1,200/pp",notes:"Rome, Athens, Barcelona, French Riviera — multiple countries in one trip without repacking."},
      {name:"Caribbean 7-Night",price:"From $699/pp",notes:"Multiple island stops — Jamaica, Cozumel, Grand Cayman, Nassau depending on itinerary."}
    ],
    bestFor:["First-time international travelers","Large groups","Families","All-inclusive value seekers"],
    bestTime:"Caribbean year-round. Alaska: May–September. Mediterranean: April–October.",
    travelNote:"No additional passport required for closed-loop Caribbean cruises from US ports. All other itineraries require a valid passport."
  },


  // ─── MEXICO / CABO ──────────────────────────────────────────

  cabo:{
    label:"Cabo San Lucas",emoji:"🌵",region:"Mexico",
    vibe:"Where the Pacific meets the Sea of Cortez at the southern tip of Baja California — dramatic desert cliffs, the iconic El Arco rock arch, world-class sport fishing, and a resort strip that ranges from spring break party energy to genuine ultra-luxury seclusion. Cabo has reinvented itself as one of Mexico's most complete destinations.",
    sell:"Cabo is one of the best winter escapes from North America — short flights, no time zone shock, and resorts that rival the finest in the world. Jesse and Sam know which side of the peninsula fits which traveler: the party corridor or the quieter East Cape.",
    hotels:[
      {name:"One&Only Palmilla",tier:"Ultra-Luxury",price:"$900–$3,000/night",notes:"The original Cabo luxury resort, built in 1956, still the gold standard. Stunning chapel, private beach, Jack Nicklaus golf. The most romantic resort in Cabo."},
      {name:"Las Ventanas al Paraíso (Rosewood)",tier:"Ultra-Luxury",price:"$1,000–$3,500/night",notes:"Consistently ranked among the top 10 resort hotels in the world. Butlers, telescope in every room to stargaze, private beach. Extraordinary."},
      {name:"Nobu Hotel Los Cabos",tier:"Luxury",price:"$500–$1,200/night",notes:"Nobu's flagship Mexico resort. Stunning beach club, Nobu restaurant on-site, adults-oriented and beautifully designed."},
      {name:"Hyatt Ziva Los Cabos",tier:"Luxury All-Inclusive",price:"$350–$700/night",notes:"Best all-inclusive in Cabo. Multiple pools, great beach access, kids and adults both well-served."},
      {name:"Riu Palace Cabo",tier:"All-Inclusive",price:"$250–$500/night",notes:"Reliable, fun, great value. Strong pool scene, solid food, good location on Medano Beach."}
    ],
    golf:[
      {name:"Diamante (El Cardonal Course)",tier:"World-Class",price:"$350–$500/round",notes:"Tiger Woods' first solo design. Cabo's most dramatic course — desert meets ocean dunes. Extraordinary."},
      {name:"Quivira Golf Club",tier:"Elite",price:"$250–$400/round",notes:"Jack Nicklaus design. Cliffside holes over the Pacific with views of El Arco. One of the most visually stunning courses in Mexico."},
      {name:"Palmilla Golf Club",tier:"Elite",price:"$200–$350/round",notes:"Jack Nicklaus design at One&Only Palmilla. Desert and ocean views, beautifully maintained."},
      {name:"Cabo del Sol (Ocean Course)",tier:"Upscale",price:"$150–$250/round",notes:"Jack Nicklaus design with seven holes on the Sea of Cortez. Classic Cabo golf."}
    ],
    restaurants:[
      {name:"Nobu Los Cabos",cuisine:"Japanese Fusion",notes:"Nobu Matsuhisa's flagship Cabo restaurant. The black cod miso and new-style sashimi are as good as any Nobu in the world."},
      {name:"El Farallon (Pueblo Bonito Sunset Beach)",cuisine:"Cliff-Edge Seafood",notes:"Carved into a cliff 50 feet above the Pacific. Fishermen bring the catch up by basket. The most dramatic restaurant setting in Cabo."},
      {name:"Acre Baja",cuisine:"Farm-to-Table Mexican",notes:"Set in a mango orchard in San José del Cabo. Cocktail and restaurant of the moment for the past several years."}
    ],
    activities:[
      {name:"El Arco & Lover's Beach by Boat",price:"$20–$30/pp",notes:"Glass-bottom boat to the iconic arch where Pacific meets Sea of Cortez. Non-negotiable first day activity."},
      {name:"Sport Fishing Charter",price:"$400–$800/boat",notes:"Cabo is one of the great sport fishing destinations in the world. Marlin, dorado, tuna — the Baja waters are exceptional."},
      {name:"ATV Desert Safari",price:"$80–$120/pp",notes:"Drive through the Baja desert to a secluded beach. Fun, dusty, beautiful."},
      {name:"San José del Cabo Art District",price:"Free",notes:"Thursday evening gallery walks through the colonial town center. Great food, art, and a completely different energy from the strip."}
    ],
    bestFor:["Golf","Couples","Groups","Luxury travelers","Sport fishing"],
    bestTime:"October–May is perfect. June–September is hot and hurricane season.",
    travelNote:"Passport required. Short flights from most US and Canadian West Coast cities; one stop from the East Coast. No visa for US or Canadian citizens."
  },

  puertorico:{
    label:"Puerto Rico",emoji:"🇵🇷",region:"Caribbean",
    vibe:"A US territory with a soul entirely its own — Old San Juan's 500-year-old Spanish colonial forts painted in pastels, bioluminescent bays that glow electric blue at night, El Yunque rainforest (the only tropical rainforest in the US National Forest system), and a food scene that New York chefs are paying attention to. No passport required for US citizens.",
    sell:"Puerto Rico is massively underrated by US travelers who don't realize they can have a genuine Caribbean experience with no passport, no currency exchange, and flights from most US cities under 4 hours. Jesse and Sam know the island well beyond the resort corridor.",
    hotels:[
      {name:"El San Juan Hotel",tier:"Luxury",price:"$400–$900/night",notes:"The storied grande dame of Puerto Rico, completely renovated. On Isla Verde Beach, legendary casino, one of the best lobbies in the Caribbean."},
      {name:"Dorado Beach (Ritz-Carlton Reserve)",tier:"Ultra-Luxury",price:"$1,500–$4,000/night",notes:"On the site of the historic Rockefeller estate. Private beach, Robert Trent Jones Sr. golf courses, extraordinary service. One of the Caribbean's finest resorts."},
      {name:"La Concha Renaissance",tier:"Upscale",price:"$300–$600/night",notes:"On Condado Beach, great rooftop pool, lively bar scene. Excellent access to San Juan's restaurant corridor."},
      {name:"Hacienda Tamarindo (Vieques)",tier:"Boutique",price:"$200–$400/night",notes:"On the island of Vieques — quieter, more remote, bioluminescent bay right nearby."}
    ],
    restaurants:[
      {name:"Mofongo (Old San Juan)",cuisine:"Puerto Rican",notes:"Mofongo — mashed plantains stuffed with seafood or pork — is Puerto Rico's signature dish. Every restaurant has a version; Old San Juan has the best."},
      {name:"Cocina Abierta / José Enrique",cuisine:"Modern Puerto Rican",notes:"James Beard nominated, no written menu, changes daily. The most celebrated chef on the island. Reserve well ahead."},
      {name:"La Factoria (Old San Juan)",cuisine:"Cocktail Bar / Small Plates",notes:"Named one of the 50 best bars in the world. Multiple hidden rooms. The cocktail culture in Old San Juan is extraordinary."}
    ],
    activities:[
      {name:"Old San Juan Walking Tour",price:"Free–$20/pp",notes:"Six square blocks of 16th-century Spanish colonial architecture, El Morro and San Cristóbal forts, cobblestone streets. Completely unique in the Caribbean."},
      {name:"Bioluminescent Bay (Vieques)",price:"$45–$65/pp",notes:"Kayak or boat through water that glows electric blue when disturbed. One of the most magical natural phenomena in the Western Hemisphere."},
      {name:"El Yunque Rainforest Hike",price:"$2/car entry",notes:"The only tropical rainforest managed by the US Forest Service. Waterfalls, tree frogs, endemic parrots."},
      {name:"Culebra Island Day Trip",price:"$50–$80/pp by ferry",notes:"Flamenco Beach on Culebra is consistently rated a top-5 beach in the world. Worth the ferry."}
    ],
    bestFor:["Couples","Cultural travelers","Foodies","Families","No-passport Caribbean"],
    bestTime:"December–April is ideal. Hurricane season June–November.",
    travelNote:"No passport required for US citizens — it's a US territory. Direct flights from most major US cities, often under 4 hours. US dollars accepted everywhere."
  },

  barbados:{
    label:"Barbados",emoji:"🏏",region:"Caribbean",
    vibe:"The most refined island in the Caribbean — impeccably maintained, genuinely friendly, with a British colonial elegance that sets it apart from anywhere else in the region. The West Coast (Platinum Coast) has the calmest, clearest water in the Caribbean. Barbados also has the most sophisticated food scene of any Caribbean island outside of Puerto Rico.",
    sell:"Barbados attracts a discerning traveler who has been to Cancun and Jamaica and wants something more authentic and elegant. Jesse and Sam know the West Coast properties well and can match the right villa or hotel to each traveler.",
    hotels:[
      {name:"Sandy Lane Hotel",tier:"Ultra-Luxury",price:"$1,200–$5,000/night",notes:"The most prestigious hotel in the Caribbean. Golf, spa, impeccable service. Where celebrities and royalty go. The definition of Caribbean luxury."},
      {name:"Coral Reef Club",tier:"Luxury Boutique",price:"$600–$1,200/night",notes:"Family-owned for 60 years. Intimate, lush gardens, on the Platinum Coast. One of the most beloved hotels in the Caribbean."},
      {name:"Cobblers Cove",tier:"Luxury Boutique",price:"$500–$900/night",notes:"16 suites, British elegance, on a quiet stretch of the Platinum Coast. Incredibly romantic."},
      {name:"Turtle Beach by Elegant Hotels",tier:"All-Inclusive Family",price:"$350–$600/night",notes:"Best family all-inclusive in Barbados. South Coast location, turtles nest on the beach."}
    ],
    restaurants:[
      {name:"The Cliff Restaurant",cuisine:"International Fine Dining",notes:"Built into a coral cliff over the sea. Torch-lit at night, extraordinary seafood, the most dramatic setting in Barbados."},
      {name:"Oistins Fish Fry (Friday Night)",cuisine:"Barbadian / Street Food",notes:"Every Friday night, the fishing village of Oistins becomes a giant street party. Grilled flying fish, rum punch, live music. Non-negotiable."},
      {name:"Cin Cin by the Sea",cuisine:"Mediterranean Seafood",notes:"Best restaurant on the Platinum Coast. Consistent, beautiful setting over the water, great wine list."}
    ],
    activities:[
      {name:"Catamaran Snorkel & Turtle Swim",price:"$70–$100/pp",notes:"Sail the West Coast, snorkel a shipwreck, swim with sea turtles that gather around the boat. Best day on the water in the Caribbean."},
      {name:"Harrison's Cave",price:"$30/pp",notes:"Tram through a crystallized limestone cavern with streams and waterfalls underground. Unique in the Caribbean."},
      {name:"Rum Distillery Tour (Mount Gay)",price:"$35–$60/pp",notes:"Mount Gay has been distilling rum since 1703 — the oldest commercial rum distillery in the world. The Reserve Cask tour is excellent."},
      {name:"East Coast Surf (Bathsheba)",price:"Free",notes:"The rugged Atlantic side of Barbados. Dramatic boulders, crashing surf, completely different feel from the resort coast. Great for a scenic drive."}
    ],
    bestFor:["Couples","Luxury travelers","Foodies","Cultural travelers","Adults-only"],
    bestTime:"December–May is perfect. June–November is hurricane season (lower risk than many islands).",
    travelNote:"Passport required. Direct flights from major East Coast US and Canadian cities. No visa for US or Canadian citizens."
  },

  usvi:{
    label:"US Virgin Islands",emoji:"🌺",region:"Caribbean",
    vibe:"St. Thomas for shopping and resort life, St. John for one of the most beautiful national parks in the US (two-thirds of the island is protected land), and St. Croix for history, diving, and a laid-back authenticity the other islands sometimes lack. No passport needed for US citizens — yet it feels genuinely foreign and exotic.",
    sell:"The USVI is a wildly underused destination for US travelers who want the Caribbean without the passport. Jesse and Sam particularly love St. John — Trunk Bay is in the running for the most beautiful beach in the world and most people have never heard of it.",
    hotels:[
      {name:"Caneel Bay (St. John)",tier:"Luxury",price:"$500–$1,200/night",notes:"Laurance Rockefeller's original eco-resort on St. John, just reopened after renovations. Seven beaches on the property, inside the national park."},
      {name:"The Ritz-Carlton St. Thomas",tier:"Luxury",price:"$500–$1,000/night",notes:"On a private peninsula with panoramic St. Thomas harbor views. Full marina, great pool, reliable luxury."},
      {name:"Frenchman's Reef Marriott (St. Thomas)",tier:"Upscale",price:"$300–$600/night",notes:"Great views, full resort amenities, ferry access to St. John. Best mid-range resort in the USVI."},
      {name:"Carambola Beach Resort (St. Croix)",tier:"Mid-Range",price:"$200–$400/night",notes:"Quiet, authentic, on a beautiful beach. Best base for exploring St. Croix."}
    ],
    restaurants:[
      {name:"Asolare (St. John)",cuisine:"Asian Fusion",notes:"Hillside restaurant above Cruz Bay. Best sunset views and best food on St. John."},
      {name:"Banana Tree Grille (St. Thomas)",cuisine:"Caribbean / American",notes:"Harbor views, great lobster, reliable and scenic. A St. Thomas institution."},
      {name:"Tutto Bene (St. Croix)",cuisine:"Italian",notes:"Surprise gem — outstanding homemade pasta in Christiansted. St. Croix's best restaurant."}
    ],
    activities:[
      {name:"Trunk Bay Snorkel Trail (St. John)",price:"$5/pp",notes:"Underwater snorkel trail in the national park. One of the most beautiful bays anywhere. Don't miss it."},
      {name:"Coki Beach Snorkel (St. Thomas)",price:"Free",notes:"Reef right from the beach, tame fish, easy snorkeling. Best accessible snorkeling on St. Thomas."},
      {name:"St. John Island Jeep Tour",price:"$80–$120/pp",notes:"Open-air jeep through the national park to remote beaches and overlooks. The best way to see St. John."},
      {name:"Buck Island National Monument (St. Croix)",price:"$50–$70/pp",notes:"Federally protected island with an underwater snorkel trail around a pristine reef. Extraordinary."}
    ],
    bestFor:["Couples","Families","Nature lovers","No-passport Caribbean","Snorkelers & divers"],
    bestTime:"December–April is ideal.",
    travelNote:"No passport required for US citizens. Flights connect through major US hubs. US dollars accepted, US cell service works."
  },

  costarica:{
    label:"Costa Rica",emoji:"🐒",region:"Central America",
    vibe:"Pura Vida — the pure life. Costa Rica has more biodiversity per square mile than almost anywhere on earth, and has protected 25% of its land in national parks. Ziplining through cloud forest, watching sea turtles nest, surfing world-class breaks, soaking in volcanic hot springs beside Arenal Volcano, and wildlife that includes sloths, toucans, howler monkeys, and sea turtles. An adventure traveler's paradise that's also very accessible.",
    sell:"Costa Rica works beautifully as a two-center trip — Arenal Volcano area plus a Pacific beach like Manuel Antonio or Tamarindo — and Jesse and Sam know how to structure the logistics so the transfers are smooth and the time isn't wasted moving around.",
    hotels:[
      {name:"Nayara Springs (Arenal)",tier:"Ultra-Luxury",price:"$800–$2,000/night",notes:"Private spring-fed plunge pools fed by volcanic hot springs in each villa, views of Arenal Volcano. Consistently rated the best hotel in Central America."},
      {name:"Tabacón Thermal Resort (Arenal)",tier:"Luxury",price:"$400–$800/night",notes:"Natural hot springs running through the jungle from the volcano. Spectacular thermal pools, great wildlife viewing at dawn."},
      {name:"Andaz Costa Rica (Guanacaste)",tier:"Luxury",price:"$400–$800/night",notes:"On the Papagayo Peninsula, private beach, incredible infinity pool, great base for the dry Pacific northwest coast."},
      {name:"El Silencio Lodge (Cloud Forest)",tier:"Boutique Luxury",price:"$300–$600/night",notes:"Intimate cloud forest lodge in the Central Valley. Private waterfalls, bridges through forest, extraordinary birding."}
    ],
    restaurants:[
      {name:"Bachiche (San José)",cuisine:"Peruvian-Inspired",notes:"Best restaurant in San José. Creative Peruvian-influenced cooking."},
      {name:"El Novillo del Arenal",cuisine:"Costa Rican Grill",notes:"Open-air restaurant with Arenal Volcano views. The wood-grilled beef and casado are the right meal after a day outdoors."},
      {name:"La Cantina (Manuel Antonio)",cuisine:"Seafood / Local",notes:"Best spot in Manuel Antonio for fresh ceviche and local fish. Casual, great quality."}
    ],
    activities:[
      {name:"Arenal Volcano Hike & Hot Springs",price:"$50–$80/pp",notes:"Hike the lava fields, spot wildlife, finish soaking in volcanic hot springs. The quintessential Costa Rica day."},
      {name:"Cloud Forest Ziplining (Monteverde)",price:"$50–$80/pp",notes:"The original zipline destination in Central America. Flying through cloud forest canopy over hidden valleys."},
      {name:"Manuel Antonio Wildlife & Beach",price:"$20/car entry",notes:"Sloths in trees over the path, monkeys on the beach, white-faced capuchins everywhere. Beach and wildlife in one national park."},
      {name:"Sea Turtle Nesting Tour (Tortuguero)",price:"$30–$50/pp",notes:"July–October, giant leatherback and green sea turtles nest by the hundreds on Tortuguero's black sand beach. A humbling natural event."},
      {name:"White Water Rafting (Pacuare River)",price:"$80–$120/pp",notes:"Class III–IV rapids through pristine jungle. One of the top 10 white water runs in the world."}
    ],
    bestFor:["Adventure travelers","Nature lovers","Couples","Honeymoon","Wildlife enthusiasts"],
    bestTime:"December–April (dry season) on the Pacific side. Caribbean side is different — May–September is actually drier.",
    travelNote:"Passport required. Flights from most US and Canadian cities with one stop, typically 5–7 hours total. No visa for US or Canadian citizens under 90 days."
  },

  // ─── USA ADDITIONS ──────────────────────────────────────────

  nyc:{
    label:"New York City",emoji:"🗽",region:"Northeast USA",
    vibe:"The greatest city in America and arguably the world — more art, more food, more theater, more energy per square block than anywhere else. The Met, MoMA, Broadway, Central Park, the High Line, the West Village at night, a pizza slice at 2am — New York is inexhaustible and rewards every kind of traveler.",
    sell:"New York hotel pricing is complex and varies enormously by neighborhood, season, and timing. Jesse and Sam know which Midtown properties are overpriced tourist traps and which ones deliver real value, and which boutique downtown hotels are worth the extra distance.",
    hotels:[
      {name:"The Mark Hotel (Upper East Side)",tier:"Ultra-Luxury",price:"$900–$3,000/night",notes:"The finest hotel in New York, steps from the Met. Jean-Georges restaurant downstairs. Extraordinary service."},
      {name:"Eleven Madison Park Area / NoMad Hotel",tier:"Luxury Boutique",price:"$400–$900/night",notes:"Beautiful Beaux-Arts building in the Flatiron District. The NoMad Restaurant was a city icon."},
      {name:"1 Hotel Brooklyn Bridge",tier:"Luxury Eco",price:"$400–$800/night",notes:"Brooklyn waterfront with the most dramatic Manhattan views from any hotel in the city. Rooftop bar and pool."},
      {name:"Graduate Roosevelt Island",tier:"Mid-Range Smart",price:"$200–$400/night",notes:"Aerial tram access only, unique island setting, midtown views for much less than Manhattan pricing."}
    ],
    restaurants:[
      {name:"Le Bernardin",cuisine:"French Seafood Fine Dining",notes:"Three Michelin stars for over 30 years. The finest seafood restaurant in America. Chef Eric Ripert's magnum opus. Reserve 4–6 weeks ahead."},
      {name:"Katz's Delicatessen",cuisine:"Jewish Deli",notes:"Since 1888. The pastrami on rye is a New York cultural artifact. Cash only, long line, worth every minute."},
      {name:"Di Fara Pizza (Brooklyn)",cuisine:"Pizza",notes:"Dominic DeMarco made every pizza himself for 50 years until recently. Still the most legendary pizza in New York."},
      {name:"Carbone (Greenwich Village)",cuisine:"Italian-American",notes:"The hottest table in New York for five years running. The spicy rigatoni vodka is worth any wait."}
    ],
    activities:[
      {name:"Metropolitan Museum of Art",price:"$30/pp",notes:"One of the three greatest art museums in the world. Give it a full day minimum. The Egyptian Temple of Dendur alone is extraordinary."},
      {name:"High Line & Chelsea Galleries",price:"Free",notes:"Elevated park built on a disused railway. Walk from Meatpacking to Hudson Yards — the best 1.5-mile walk in New York."},
      {name:"Brooklyn Bridge Walk",price:"Free",notes:"Walk from Manhattan to Brooklyn, then eat your way through DUMBO and Brooklyn Heights."},
      {name:"Broadway Show",price:"$80–$300/pp",notes:"The best theater in the world. Book through TDF or TKTS for last-minute discounts. Don't skip this."},
      {name:"Central Park Bike Ride",price:"$15–$20/hour rental",notes:"6 miles of car-free roads through the greatest urban park in America."}
    ],
    bestFor:["Cultural travelers","Foodies","Theater lovers","First-time US visitors","Groups"],
    bestTime:"April–June and September–November are perfect. December is magical but expensive and cold. Summer is hot and humid.",
    travelNote:"No passport needed for US citizens. Extensive direct flights from everywhere. Three major airports (JFK, LGA, EWR). Subway gets you everywhere."
  },

  napa:{
    label:"Napa Valley / Sonoma",emoji:"🍷",region:"California",
    vibe:"The Napa Valley is 30 miles of vine-covered hills that produce some of the best wine in the world, with Michelin-starred restaurants and luxury hotels that make it one of the most complete luxury destinations in North America. Sonoma County next door is larger, wilder, less polished, and increasingly home to some of California's most interesting winemakers.",
    sell:"A Napa trip done right — the right wineries in the right order, restaurant reservations made before you book flights, the right hotel to anchor the experience — is extraordinary. Jesse and Sam know which iconic wineries are worth the reservation fees and which newer producers are the secret worth finding.",
    hotels:[
      {name:"Meadowood Napa Valley",tier:"Ultra-Luxury",price:"$900–$3,000/night",notes:"The most storied resort in Napa. Three-Michelin-star restaurant on-site. Golf, tennis, croquet, spa. Rebuilding after 2020 fire — confirming reopening before booking."},
      {name:"Auberge du Soleil (Rutherford)",tier:"Ultra-Luxury",price:"$900–$2,500/night",notes:"Hillside resort with arguably the best views in Napa. The Michelin-starred restaurant terrace at sunset is one of the great American dining experiences."},
      {name:"Carneros Resort & Spa",tier:"Luxury",price:"$500–$1,200/night",notes:"Private cottages on the quieter Carneros end of the valley. Great spa, farm-to-table restaurant, beautiful pool."},
      {name:"Las Alcobas (St. Helena)",tier:"Luxury",price:"$500–$1,000/night",notes:"In the heart of St. Helena's wine country. Modern luxury, excellent restaurant, perfect walking access."}
    ],
    restaurants:[
      {name:"The French Laundry (Yountville)",cuisine:"American Fine Dining",notes:"Thomas Keller's three-Michelin-star masterpiece. Reservations open exactly 2 months ahead at 10am and disappear in seconds. The tasting menu is one of the great American meals."},
      {name:"Ad Hoc + Addendum (Yountville)",cuisine:"American Comfort",notes:"Thomas Keller's casual restaurant — fried chicken on Thursdays is a local institution. Much easier to get into than French Laundry."},
      {name:"Charter Oak (St. Helena)",cuisine:"California Wood-Fire",notes:"Wood-fire cooking, seasonal California produce. One of the best meals in Napa at a sane price point."},
      {name:"The Girl & The Fig (Sonoma)",cuisine:"Provençal / California",notes:"The anchor of Sonoma Plaza dining. Beautiful French-influenced food and outstanding local wine list."}
    ],
    activities:[
      {name:"Opus One Winery Tour",price:"$75–$150/pp",notes:"The most iconic Napa winery. Reserve ahead. The architecture alone is extraordinary."},
      {name:"Hot Air Balloon over the Vines",price:"$220–$280/pp",notes:"Float over the valley at sunrise. One of the great Napa experiences, especially in September during harvest."},
      {name:"Yountville Restaurant Crawl",price:"Varies",notes:"Yountville has more Michelin stars per capita than any city in North America. Walk from Bouchon to Ad Hoc to Redd."},
      {name:"Castello di Amorosa Castle Winery",price:"$45–$75/pp",notes:"A 13th-century Tuscan castle winery built from imported Italian materials. Unique in Napa."}
    ],
    bestFor:["Couples","Wine lovers","Foodies","Honeymoon","Special occasions"],
    bestTime:"September–October is harvest season — most exciting and most expensive. April–June is beautiful and less crowded.",
    travelNote:"Fly into SFO (San Francisco) or OAK (Oakland) and drive about 1 hour north. No passport needed for US citizens."
  },

  sedona:{
    label:"Sedona, Arizona",emoji:"🔴",region:"Southwest USA",
    vibe:"Red sandstone buttes and mesas rising from the high desert, turning impossible shades of orange and red at sunrise and sunset. Sedona is simultaneously one of America's most beautiful landscapes and one of its best wellness destinations — world-class spas, excellent hiking, extraordinary stargazing, and a New Age vortex energy that even skeptics find oddly peaceful.",
    sell:"Sedona is a perfect pairing with Scottsdale or the Grand Canyon for a Southwest Arizona trip. Jesse and Sam often build 7-night Arizona trips that combine Sedona's nature and spa scene with Scottsdale's golf and dining.",
    hotels:[
      {name:"Enchantment Resort",tier:"Ultra-Luxury",price:"$600–$1,500/night",notes:"Nestled in Boynton Canyon — the most dramatic resort setting in Arizona. The Mii Amo spa is one of the best destination spas in North America."},
      {name:"L'Auberge de Sedona",tier:"Luxury",price:"$500–$1,200/night",notes:"On Oak Creek, luxury cottages under the sycamores beside a babbling creek. The most romantic hotel in Sedona."},
      {name:"Amara Resort & Spa",tier:"Upscale",price:"$300–$600/night",notes:"Great location in Uptown Sedona, infinity pool with red rock views, reliable luxury at more accessible pricing."}
    ],
    restaurants:[
      {name:"Elote Cafe",cuisine:"Mexican",notes:"Sedona's most beloved restaurant. The corn dish (elote) with lime, mayo, cotija, and chile is extraordinary. Usually a wait."},
      {name:"Mariposa Latin Inspired Grill",cuisine:"Latin American",notes:"Perched on the hillside with sweeping red rock views. The best special-occasion dinner in Sedona."},
      {name:"Dahl & Di Luca",cuisine:"Italian",notes:"Cozy Italian in Uptown. Reliable, well-executed, excellent wine list."}
    ],
    activities:[
      {name:"Cathedral Rock Hike",price:"$5/car",notes:"Moderate hike to the iconic Cathedral Rock formation. The view from the top with Oak Creek below is one of the most beautiful in Arizona."},
      {name:"Pink Jeep Tour",price:"$90–$130/pp",notes:"Open-air 4x4 tour through the red rocks on trails that regular vehicles can't access. The best way to see the backcountry."},
      {name:"Vortex Tour",price:"$50–$80/pp",notes:"Visit the four energy vortexes Sedona is famous for. Guided or self-guided — Bell Rock, Cathedral Rock, Airport Mesa, Boynton Canyon."},
      {name:"Stargazing at Red Rock State Park",price:"$7/car",notes:"Far from major cities, the dark skies over Sedona are extraordinary. Spring and fall ranger programs are excellent."}
    ],
    bestFor:["Couples","Wellness seekers","Hikers","Spiritual travelers","Romantic weekends"],
    bestTime:"March–May and September–November. Summer is hot but dry and manageable.",
    travelNote:"Fly into PHX (Phoenix) and drive about 2 hours north, or flag FLG (Flagstaff) for a shorter drive. Can pair with Grand Canyon (1.5 hours) or Scottsdale golf."
  },

  colorado:{
    label:"Colorado Ski (Aspen / Vail)",emoji:"⛷️",region:"Mountain USA",
    vibe:"Aspen is the world's most glamorous ski resort — celebrity-spotting at Ajax, world-class restaurants and nightlife, and a genuine mountain town authenticity that Vail can't quite match. Vail is larger, with the most skiable acreage in the US, and the Back Bowls are unlike anywhere else in North America. Both have summer seasons with hiking, mountain biking, and music festivals that rival the winter.",
    sell:"Colorado ski trips require booking way ahead — the best lodging in Aspen and Vail fills by October for peak weeks. Jesse and Sam know the right properties for different groups and budgets, and how to avoid the Christmas week pricing spike.",
    hotels:[
      {name:"The Little Nell (Aspen)",tier:"Ultra-Luxury Ski-In/Out",price:"$1,000–$5,000/night",notes:"The only ski-in/ski-out hotel in Aspen. Two Michelin-starred restaurant. The best hotel in Colorado."},
      {name:"Hotel Jerome (Aspen)",tier:"Luxury Historic",price:"$600–$2,500/night",notes:"Opened 1889, completely renovated. The J-Bar is Aspen's living room. A perfect combination of history and luxury."},
      {name:"Park Hyatt Beaver Creek",tier:"Luxury Ski-In/Out",price:"$500–$1,500/night",notes:"Ski-in/ski-out in Beaver Creek, 15 minutes from Vail. Better value than Vail Village, stunning location."},
      {name:"Sonnenalp Hotel (Vail)",tier:"Luxury",price:"$600–$2,000/night",notes:"Bavarian-style hotel in Vail Village. Ski-out access, excellent spa, great group gathering spaces."}
    ],
    restaurants:[
      {name:"Element 47 (The Little Nell)",cuisine:"Fine Dining",notes:"One of the best wine programs in the country. The tasting menu after a powder day is hard to beat."},
      {name:"Cache Cache (Aspen)",cuisine:"French Bistro",notes:"Aspen institution for 30 years. The best bistro food in the mountains, great people-watching bar."},
      {name:"Sweet Basil (Vail)",cuisine:"Contemporary American",notes:"Vail's best restaurant for 40 years. Consistently excellent, great wine, the right spot for a special mountain dinner."}
    ],
    activities:[
      {name:"Skiing Ajax Mountain (Aspen)",price:"$200–$250/day",notes:"Four distinct mountains in Aspen Snowmass, but Ajax is the iconic run. The bell at the top is a rite of passage."},
      {name:"Vail Back Bowls",price:"$200–$250/day",notes:"3,000 acres of back-country style terrain accessible from the main mountain. On a powder day, nothing in North America compares."},
      {name:"Aspen Food & Wine Classic (June)",price:"$1,200+/pp weekend",notes:"One of the greatest food and wine festivals in the world. Three days in a tent city with the best chefs and sommeliers alive."},
      {name:"Maroon Bells Hike (Summer)",price:"$16/shuttle",notes:"The most photographed mountain scene in North America. Two 14,000+ foot peaks reflected in Maroon Lake."}
    ],
    bestFor:["Skiers","Luxury winter escapes","Couples","Foodies","Groups"],
    bestTime:"December–March for skiing. Peak powder: January–February. Summer June–August is spectacular.",
    travelNote:"Fly into ASE (Aspen) directly or EGE (Eagle-Vail) for Vail, or DEN (Denver) with a 3–4 hour drive. Book early — the best lodging fills months ahead."
  },

  savannah:{
    label:"Savannah, Georgia",emoji:"🦚",region:"Southeast USA",
    vibe:"America's most haunted and most beautiful city — 22 moss-draped Spanish oak squares laid out in a perfect 18th-century grid, antebellum mansions dripping with wisteria, world-class Southern food, ghost tours every night, and a warmth and ease that makes visitors want to stay forever. Savannah and Charleston together make the greatest Southern cultural road trip in America.",
    sell:"Savannah is one of the most underrated city destinations in the US — extraordinary food, beautiful architecture, and a pace of life that immediately slows you down. Jesse and Sam love pairing it with Charleston for a perfect Southern itinerary.",
    hotels:[
      {name:"The Gastonian",tier:"Luxury Boutique",price:"$300–$600/night",notes:"Two connected 1868 mansions in the historic district. The most elegant B&B in Savannah. Genuine antebellum character."},
      {name:"Perry Lane Hotel",tier:"Boutique Upscale",price:"$250–$500/night",notes:"Best modern hotel in Savannah. Rooftop bar, great location, local art throughout."},
      {name:"Mansion on Forsyth Park",tier:"Luxury",price:"$300–$600/night",notes:"On the great Forsyth Park, Victorian mansion converted to a hotel. Spa, great restaurant, beautiful common spaces."}
    ],
    restaurants:[
      {name:"The Grey",cuisine:"Southern / American",notes:"In a restored 1938 Greyhound bus terminal. The most celebrated restaurant in Savannah. Chef Mashama Bailey won the James Beard Award."},
      {name:"Mrs. Wilkes' Dining Room",cuisine:"Southern Family Style",notes:"Communal tables, cash only, traditional Southern boarding house cooking. Fried chicken, collard greens, biscuits. Lines form before opening."},
      {name:"The Collins Quarter",cuisine:"Australian / Brunch",notes:"The best brunch in Savannah. Lavender latte has become the city's signature drink."}
    ],
    activities:[
      {name:"Historic District Walking Tour",price:"$25–$35/pp",notes:"The squares, the mansions, the moss — 2 hours with a good guide transforms how you see the city."},
      {name:"Midnight in the Garden of Good and Evil Tour",price:"$20–$30/pp",notes:"Walk the locations from the famous book and film. The book is worth reading before you come."},
      {name:"Ghost Tour at Night",price:"$25–$35/pp",notes:"Savannah is consistently rated the most haunted city in America. The evening ghost tours are atmospheric and genuinely eerie."},
      {name:"Tybee Island Beach",price:"Free",notes:"18 miles east of Savannah. Unpretentious, low-key, great seafood shacks. The perfect contrast to the historic district."}
    ],
    bestFor:["Couples","History lovers","Foodies","Cultural travelers","Ghost enthusiasts"],
    bestTime:"March–May and October–November are perfect. Summers are steamy.",
    travelNote:"Fly into SAV (Savannah/Hilton Head) — small, easy airport. Also a reasonable drive from Atlanta (4 hours) or Charleston (2 hours)."
  },

  // ─── GOLF ADDITIONS ─────────────────────────────────────────

  bandondunes:{
    label:"Bandon Dunes, Oregon",emoji:"🌊",region:"Golf",
    vibe:"The greatest golf destination in America outside of Pebble Beach, and for serious golfers possibly better. Five courses carved into the Oregon coastal dunes — Bandon Dunes, Pacific Dunes, Bandon Trails, Old Macdonald, and Sheep Ranch — all different in character and all spectacular. This is walking-only, caddies-only, pure golf. No cart paths, no distractions. The Pacific roars below.",
    sell:"Bandon Dunes is a pilgrimage trip for any golfer who takes the game seriously. Jesse and Sam have put together Bandon trips for groups ranging from 4 to 20 players and know exactly how to structure a 4-day, 4-course itinerary that doesn't leave anyone burned out.",
    hotels:[
      {name:"Bandon Dunes Lodge (On-Site)",tier:"Golf Resort",price:"$300–$700/night",notes:"Stay on the property — that's the only right answer. Multiple lodge options from dorm-style to private rooms with ocean views. Package rates include unlimited golf on all 5 courses."},
      {name:"The Inn at Face Rock (Bandon Town)",tier:"Mid-Range",price:"$150–$300/night",notes:"If the lodge is full, this is the closest alternative in Bandon town. Comfortable, convenient."}
    ],
    golf:[
      {name:"Pacific Dunes",tier:"World #1 Public",price:"Included in resort package",notes:"Consistently ranked the #1 or #2 public course in the world. Tom Doak design. Native fescue, ocean views on 10 holes, utterly natural. A true masterpiece."},
      {name:"Bandon Dunes (Original)",tier:"World Top-10 Public",price:"Included in resort package",notes:"David McLay Kidd's original course. Links-style along the cliffs. What started it all."},
      {name:"Sheep Ranch",tier:"Elite",price:"Included in resort package",notes:"Most remote and most dramatic course. Perched on a headland with the ocean on three sides. The most unique golf experience in America."},
      {name:"Old Macdonald",tier:"Elite",price:"Included in resort package",notes:"Tom Doak/Jim Urbina tribute to C.B. Macdonald. Giant greens, bold architecture, endlessly strategic."}
    ],
    restaurants:[
      {name:"Gallery Restaurant (On-Site)",cuisine:"Pacific Northwest",notes:"The resort's main dining room. Local seafood, Oregon wines, great after a round."},
      {name:"The Bunker Bar (On-Site)",cuisine:"Burgers & Beer",notes:"On-site 19th hole. The right place to replay every shot from the round."}
    ],
    activities:[
      {name:"Golf, Golf, Golf",price:"Unlimited with resort stay",notes:"The whole point. Play all 5 courses over 4 days — Pacific Dunes twice if possible."}
    ],
    bestFor:["Serious golfers","Golf groups","Bucket-list golf","Walking golf purists"],
    bestTime:"May–October. Oregon coast weather is unpredictable — pack layers regardless of season.",
    travelNote:"Fly into RDM (Redmond, OR) or MFR (Medford) and drive 2.5–3 hours, or EUG (Eugene) for a 2.5-hour drive. The remoteness is part of the appeal."
  },

  irelandscotland:{
    label:"Ireland & Scotland Golf",emoji:"🍀",region:"Golf / International",
    vibe:"Where golf was born. Ballybunion, Lahinch, Royal County Down, St Andrews, Carnoustie, Turnberry — links courses carved into the coastal dunes by the sea and wind over centuries. Playing golf in Ireland and Scotland is walking onto the set of the game's entire history, and no trip changes how a golfer thinks about the sport more than this one.",
    sell:"Ireland and Scotland golf trips are complex to plan well — the best courses book years in advance, the routing between courses matters enormously, and knowing which accommodation near each course is worth it makes the difference between a great trip and a legendary one. Jesse and Sam have built these itineraries and know every detail.",
    hotels:[
      {name:"Old Course Hotel (St Andrews)",tier:"Luxury",price:"$600–$1,500/night",notes:"Overlooking the 17th Road Hole at St Andrews. The most famous golf hotel view in the world."},
      {name:"Adare Manor (Ireland)",tier:"Ultra-Luxury",price:"$800–$2,500/night",notes:"Gothic Revival castle in County Limerick. Host of the 2027 Ryder Cup. New Tom Fazio course on-site. Ireland's finest hotel."},
      {name:"Trump Turnberry (Scotland)",tier:"Luxury",price:"$400–$900/night",notes:"Lighthouse hotel overlooking Ailsa Craig and the Firth of Clyde. Turnberry course is one of the great links."},
      {name:"Ashford Castle (Ireland)",tier:"Ultra-Luxury",price:"$700–$2,000/night",notes:"Medieval castle on the shores of Lough Corrib. The most romantic luxury hotel in Ireland."}
    ],
    golf:[
      {name:"St Andrews Old Course (Scotland)",tier:"Bucket List / Iconic",price:"£220–£290/round (ballot system)",notes:"The home of golf. The Swilcan Bridge, the Road Hole, the Valley of Sin — every shot resonates with 600 years of history. Access via ballot system — book through Jesse and Sam."},
      {name:"Royal County Down (Northern Ireland)",tier:"World #1",price:"£250–£375/round",notes:"Consistently ranked the #1 golf course in the world. Mourne Mountains backdrop, gorse-lined fairways, blind shots — extraordinary."},
      {name:"Ballybunion (Old Course, Ireland)",tier:"World Top-5",price:"€175–€250/round",notes:"Tom Watson's favorite course in the world. Cliff-edge holes over the Atlantic in County Kerry."},
      {name:"Carnoustie (Scotland)",tier:"World Top-10",price:"£200–£270/round",notes:"Most demanding Open Championship venue. Barry Burn crosses the 18th hole twice — one of the most nerve-wracking finishing holes in golf."},
      {name:"Lahinch (Ireland)",tier:"Elite",price:"€130–€180/round",notes:"The 'St Andrews of Ireland.' Goats on the course predict weather. Blind holes, massive dunes, pure joy."}
    ],
    restaurants:[
      {name:"Chapter One (Dublin)",cuisine:"Modern Irish",notes:"Michelin-starred. The best restaurant in Dublin. Perfect first-night dinner before heading to the courses."},
      {name:"The Seafood Shack (Ullapool, Scotland)",cuisine:"Fresh Seafood",notes:"Tiny shack on the Scottish west coast. Langoustines fresh off the boat. Unforgettable."}
    ],
    bestFor:["Serious golfers","Bucket-list golf","Golf history buffs","Cultural travelers"],
    bestTime:"May–September for best weather. June and July have nearly 18 hours of daylight — you can play 36 holes without rushing.",
    travelNote:"Passport required. Fly into Dublin (DUB) for Ireland or Edinburgh (EDI) / Glasgow (GLA) for Scotland. Car rental essential — driving on the left."
  },

  // ─── INTERNATIONAL ADDITIONS ────────────────────────────────

  iceland:{
    label:"Iceland",emoji:"🌋",region:"Europe / Adventure",
    vibe:"The most otherworldly destination on earth — volcanoes and glaciers, geysers and black sand beaches, the Northern Lights in winter and the Midnight Sun in summer. Iceland is where you go when every other landscape feels familiar. The Golden Circle, the South Coast, the Westfjords, soaking in the Blue Lagoon after a day on the Ring Road — there is nowhere else like it.",
    sell:"Iceland rewards proper planning enormously. The Northern Lights require being in the right place at the right time, the best glacier hikes need guide arrangements, and the Ring Road itinerary matters for maximizing the landscape. Jesse and Sam handle all of this.",
    hotels:[
      {name:"The Retreat at Blue Lagoon",tier:"Ultra-Luxury",price:"$900–$3,000/night",notes:"The most dramatic hotel in Iceland — built into a lava field, private lagoon access, spa, silence. A true bucket-list stay."},
      {name:"Ion Adventure Hotel (Golden Circle)",tier:"Boutique Luxury",price:"$400–$800/night",notes:"Glass wall rooms facing the aurora borealis. The best hotel for Northern Lights viewing."},
      {name:"Fosshotel Glacier Lagoon",tier:"Mid-Range",price:"$300–$500/night",notes:"Right at the Jökulsárlón Glacier Lagoon. Perfect base for the South Coast. The icebergs calve right outside."},
      {name:"Hotel Borg (Reykjavik)",tier:"Luxury Historic",price:"$300–$600/night",notes:"Art Deco landmark on the main square of Reykjavik. The most elegant hotel in the capital."}
    ],
    restaurants:[
      {name:"Dill Restaurant (Reykjavik)",cuisine:"New Nordic / Icelandic",notes:"Michelin-starred. The most exciting food in Iceland using only local ingredients — skyr, Arctic char, lamb, seabird eggs."},
      {name:"Pylsuvagninn Hot Dog Stand (Reykjavik)",cuisine:"Icelandic Hot Dog",notes:"Bill Clinton made this cart famous. The Icelandic hot dog with all toppings is a national institution. First stop in Reykjavik."},
      {name:"Matur og Drykkur (Reykjavik)",cuisine:"Traditional Icelandic",notes:"Head chef reinventing traditional Icelandic recipes — smoked trout, hákarl in new forms, langoustine. Fascinating."}
    ],
    activities:[
      {name:"Northern Lights Tour (Oct–March)",price:"$60–$100/pp",notes:"Super Jeep tour away from light pollution. No guarantee — but having a knowledgeable guide maximizes the chance significantly."},
      {name:"Glacier Hike (Sólheimajökull)",price:"$80–$120/pp",notes:"Crampons and ice axe, guided walk across a glacier tongue. The color of the ice is extraordinary."},
      {name:"Blue Lagoon Geothermal Spa",price:"$60–$200/pp",notes:"Milky blue silica water at 38°C in a lava field. The most famous tourist experience in Iceland — worth it."},
      {name:"Golden Circle Day Tour",price:"$60–$100/pp",notes:"Þingvellir (where tectonic plates meet), Geysir (the original geyser), Gullfoss waterfall. The essential Iceland day."},
      {name:"Jökulsárlón Glacier Lagoon",price:"$60–$90/pp boat tour",notes:"Icebergs floating from the glacier into the sea. Diamond Beach next door has ice chunks on black sand. Otherworldly."}
    ],
    bestFor:["Adventure travelers","Nature lovers","Couples","Bucket-list travelers","Photography enthusiasts"],
    bestTime:"Northern Lights: October–March (dark nights). Midnight Sun: May–August. Ring Road: June–September.",
    travelNote:"Passport required. Direct flights from several US and Canadian cities, typically 5–7 hours. No visa for US or Canadian citizens. Car rental is essential for exploring beyond Reykjavik."
  },

  japan:{
    label:"Japan",emoji:"🗾",region:"Asia",
    vibe:"Japan is the most polished travel destination on earth — everything works, everything is beautiful, and the food is extraordinary at every level from a ¥500 ramen shop to a 3-Michelin-star kaiseki. Tokyo is the greatest city in the world by many measures. Kyoto is the most graceful. Osaka eats better than anywhere. The Japanese Alps, bullet trains, cherry blossoms in April, ryokan hot springs in the snow — Japan delivers.",
    sell:"Japan requires proper planning more than almost any destination — the best ryokan stays book a year ahead, the bullet train passes need purchasing before you leave home, and knowing the right neighborhoods saves days of confusion. Jesse and Sam have built Japan itineraries and know what works.",
    hotels:[
      {name:"Aman Tokyo",tier:"Ultra-Luxury",price:"$1,500–$5,000/night",notes:"33rd floor of a Tokyo tower. The most extraordinary hotel lobby in Japan — 30-foot wooden ceiling panels, paper lanterns, Mount Fuji on clear days. Flawless."},
      {name:"Hiiragiya Honkan (Kyoto)",tier:"Ultra-Luxury Ryokan",price:"$800–$3,000/night",notes:"A traditional Kyoto ryokan since 1818. Kaiseki dinner, yukata, tatami rooms, private garden. The definitive Kyoto experience."},
      {name:"The Okura Tokyo",tier:"Luxury",price:"$400–$900/night",notes:"Midcentury modern masterpiece rebuilt in 2019. The most storied luxury hotel in Tokyo."},
      {name:"Nishiyama Onsen Keiunkan (Yamanashi)",tier:"Boutique / Historic",price:"$500–$1,500/night",notes:"The oldest hotel in the world (founded 705 AD). Hot spring baths, incredible kaiseki, near Mt. Fuji."}
    ],
    restaurants:[
      {name:"Sukiyabashi Jiro (Tokyo)",cuisine:"Sushi",notes:"The 10-seat sushi counter from Jiro Dreams of Sushi. Three Michelin stars. One of the great dining experiences on earth. Reserve through your hotel concierge — virtually impossible otherwise."},
      {name:"Kikunoi (Kyoto)",cuisine:"Kaiseki",notes:"Three Michelin stars. Traditional multi-course kaiseki celebrating seasonal Japanese ingredients. The definitive Kyoto dining experience."},
      {name:"Ichiran Ramen",cuisine:"Tonkotsu Ramen",notes:"Individual booths, solo eating, the most focused ramen experience in Japan. Best 11pm meal after a day of sightseeing."},
      {name:"Tsukiji Outer Market (Tokyo)",cuisine:"Fresh Seafood / Breakfast",notes:"The famous fish market moved but the outer market remains. Best tuna sashimi breakfast in the world. Go before 9am."}
    ],
    activities:[
      {name:"Fushimi Inari Shrine (Kyoto)",price:"Free",notes:"Thousands of vermillion torii gates winding up a mountain. Go at dawn to avoid crowds. One of the most visually extraordinary sites in Asia."},
      {name:"Shinkansen Bullet Train",price:"$150–$300 per route",notes:"Tokyo to Kyoto in 2.5 hours at 200mph. The Japan Rail Pass is essential for multi-city trips."},
      {name:"Hiroshima & Miyajima Island",price:"$50–$80/pp day trip",notes:"The Peace Memorial Museum is among the most moving sites in the world. Miyajima's floating torii gate is iconic."},
      {name:"Robot Restaurant (Tokyo)",price:"$80/pp",notes:"Robots, lights, drums, laser shows. Absolutely absurd and purely Japanese. Go once."},
      {name:"Cherry Blossom Viewing (Hanami)",price:"Free",notes:"Late March–early April. Maruyama Park in Kyoto and Shinjuku Gyoen in Tokyo. A national obsession and genuinely beautiful."}
    ],
    bestFor:["Cultural travelers","Foodies","Adventure travelers","Unique experiences","Photographers"],
    bestTime:"March–May (cherry blossoms) and October–November (fall foliage). Both are extraordinary.",
    travelNote:"Passport required. Direct flights from major US and Canadian West Coast cities. One stop from East Coast, typically 14–16 hours total. No visa for US or Canadian citizens under 90 days."
  },

  bali:{
    label:"Bali, Indonesia",emoji:"🌸",region:"Asia / Pacific",
    vibe:"The most spiritually distinctive travel destination in Southeast Asia — Hindu temples draped in incense smoke, tiered rice terraces carved into hillsides, world-class surf on the Bukit Peninsula, and a luxury villa scene where you can have a private pool, a butler, and a chef for what a motel room costs in North America. Ubud for culture and yoga; Seminyak for beach clubs and design; Canggu for surf and digital nomads.",
    sell:"Bali is a destination where the right villa or resort changes everything — the difference between a $200/night private pool villa and a $600/night hotel is stark in Bali's favor. Jesse and Sam know which villa rental companies are trustworthy and which properties deliver.",
    hotels:[
      {name:"Amandari (Ubud)",tier:"Ultra-Luxury",price:"$800–$2,500/night",notes:"Perched on the edge of the Ayung River gorge. Individual Balinese-style pavilions, stunning infinity pool, extraordinary silence. One of the greatest Aman properties."},
      {name:"Four Seasons Bali at Sayan (Ubud)",tier:"Ultra-Luxury",price:"$600–$2,000/night",notes:"Cantilevered over a river valley. Voted the world's best hotel multiple years. The Wantilan villa with plunge pool is a life experience."},
      {name:"COMO Uma Canggu",tier:"Luxury Boutique",price:"$400–$800/night",notes:"Canggu's best hotel. Beach club on a surf beach, excellent COMO Shambhala spa, great surf access."},
      {name:"Alaya Resort Ubud",tier:"Boutique Upscale",price:"$200–$400/night",notes:"Best value luxury in Ubud. Walking distance to the Monkey Forest and the market."}
    ],
    restaurants:[
      {name:"Locavore (Ubud)",cuisine:"Modern Indonesian Fine Dining",notes:"World's 50 Best restaurant. Indonesian ingredients in extraordinary combinations. Reserve 3–4 weeks ahead."},
      {name:"Merah Putih (Seminyak)",cuisine:"Modern Indonesian",notes:"Most beautiful restaurant in Seminyak. The rijsttafel (rice table) is the right order."},
      {name:"La Favela (Seminyak)",cuisine:"Bar / International",notes:"Art-filled bar and restaurant in a jungle-like setting. Best late-night atmosphere in Bali."}
    ],
    activities:[
      {name:"Tanah Lot Temple at Sunset",price:"$3/pp",notes:"Dramatic sea temple perched on a rock offshore. The most photographed sunset in Bali — arrive 90 minutes before sunset for position."},
      {name:"Tegallalang Rice Terrace (Ubud)",price:"$2 entry",notes:"Iconic tiered rice terraces. Go in the morning before tour buses. The swing over the valley is worth it."},
      {name:"Sacred Monkey Forest (Ubud)",price:"$5/pp",notes:"Ancient Hindu temple complex with 700 long-tailed macaques wandering freely. Strange and wonderful."},
      {name:"Nusa Penida Day Trip",price:"$50–$80/pp",notes:"Island off Bali's southeast coast. Kelingking Beach's T-Rex shaped cliff is Bali's most dramatic photo. Clear water snorkeling with manta rays."},
      {name:"Surf Lessons (Kuta / Canggu)",price:"$25–$40/pp",notes:"Bali's gentle beach break waves make it one of the world's best beginner surf destinations."}
    ],
    bestFor:["Couples","Honeymooners","Yoga & wellness","Adventure travelers","Budget luxury"],
    bestTime:"May–September is dry season. April and October are shoulder months with good weather and fewer crowds.",
    travelNote:"Passport required. Flights connect through Singapore, Hong Kong, or Tokyo — typically 20–24 hours from North America. Visa on arrival available for US and Canadian citizens."
  },

  croatia:{
    label:"Croatia",emoji:"⛵",region:"Europe",
    vibe:"The Adriatic's crown jewel — Dubrovnik's medieval walled city is one of the most dramatic urban landscapes in Europe, the Dalmatian islands are the Mediterranean at its most beautiful, and Split's Diocletian's Palace (where a Roman emperor retired) is still a living city with restaurants and bars inside 1,700-year-old walls. The food is excellent, the wine is distinctive, and the sailing between islands is one of the great travel experiences.",
    sell:"Croatia is increasingly on the radar and prices are rising, but it remains significantly better value than Italy or France. Jesse and Sam know the right islands to visit for different travelers and how to time the trip around the shoulder seasons.",
    hotels:[
      {name:"Hotel Excelsior (Dubrovnik)",tier:"Luxury",price:"$400–$900/night",notes:"Stunning Adriatic views just outside the old city walls. The most elegant hotel in Dubrovnik."},
      {name:"Villa Dubrovnik",tier:"Luxury Boutique",price:"$500–$1,200/night",notes:"Clinging to the cliff just outside the old city. Private boat service, extraordinary views, intimate and romantic."},
      {name:"Vestibul Palace (Split)",tier:"Boutique Luxury",price:"$300–$600/night",notes:"Seven rooms inside Diocletian's Palace walls. Sleeping inside a 1,700-year-old Roman palace. Extraordinary."},
      {name:"Lešić Dimitri Palace (Korčula Island)",tier:"Boutique Ultra-Luxury",price:"$400–$1,500/night",notes:"Five heritage residences on Marco Polo's home island. The most romantic island hotel in Croatia."}
    ],
    restaurants:[
      {name:"Proto (Dubrovnik)",cuisine:"Dalmatian Seafood",notes:"Oldest restaurant in Dubrovnik, consistently the best. The grilled Adriatic fish and black risotto are definitive."},
      {name:"Konoba Fetivi (Split)",cuisine:"Dalmatian Traditional",notes:"Inside the palace walls. The dalmatian lamb and white wine-steamed clams are extraordinary."},
      {name:"Pelegrini (Šibenik)",cuisine:"Modern Croatian Fine Dining",notes:"Michelin-starred. The most exciting restaurant in Croatia, in a stunning medieval tower overlooking the sea."}
    ],
    activities:[
      {name:"Dubrovnik Old City Walk & City Walls",price:"$15/pp walls",notes:"Walking the 1.2-mile medieval walls ringing the old city is the essential Dubrovnik experience. Go at 8am before the crowds."},
      {name:"Sailing the Dalmatian Islands",price:"$200–$500/person for 7-day sail",notes:"Chartering a sailboat or joining a flotilla from Split through Hvar, Vis, Korčula, and Mljet. The greatest way to experience Croatia."},
      {name:"Hvar Island Day Trip",price:"$30–$50/pp ferry",notes:"The most glamorous island in Croatia. Walk the lavender fields to the hilltop fortress, then Hvar Town at sunset."},
      {name:"Plitvice Lakes National Park",price:"$15–$30/pp",notes:"UNESCO World Heritage lakes and waterfalls connected by wooden boardwalks. The most beautiful national park in Europe."}
    ],
    bestFor:["Couples","Sailing lovers","Cultural travelers","Foodies","Honeymoon"],
    bestTime:"May–June and September–October. July–August is peak and very crowded in Dubrovnik.",
    travelNote:"Passport required. Fly into Dubrovnik (DBV) or Split (SPU) from major European hubs — typically 10–13 hours from North America with one stop. No visa for US or Canadian citizens."
  },

  thailand:{
    label:"Thailand",emoji:"🏯",region:"Asia",
    vibe:"Southeast Asia's most complete destination — Bangkok's electric energy and world-class street food, Chiang Mai's ancient temples and night markets, and the islands: Phuket for resort life, Koh Samui for a quieter beach, the Phi Phi Islands for jaw-dropping limestone cliffs rising from impossibly clear turquoise water. Thailand is also where North American travelers get the most luxury for their dollar anywhere in the world.",
    sell:"Thailand works beautifully as a two-or-three-center trip — Bangkok plus islands is the classic, or Bangkok plus Chiang Mai plus beach. Jesse and Sam know which island resorts deliver and which ones look great in photos but disappoint in person.",
    hotels:[
      {name:"Mandarin Oriental Bangkok",tier:"Ultra-Luxury",price:"$400–$1,200/night",notes:"The greatest hotel in Asia for generations. On the Chao Phraya River, exceptional service, Authors' Lounge afternoon tea is legendary. A true bucket-list hotel."},
      {name:"Rosewood Bangkok",tier:"Luxury",price:"$300–$700/night",notes:"Best new luxury hotel in Bangkok. Rooftop bar with 360° skyline views."},
      {name:"Soneva Kiri (Koh Kood)",tier:"Ultra-Luxury",price:"$1,500–$6,000/night",notes:"Private island, treehouse dining, no shoes anywhere, butler for every villa. The most extraordinary island resort in Thailand."},
      {name:"Six Senses Yao Noi (Phang Nga Bay)",tier:"Ultra-Luxury",price:"$800–$2,500/night",notes:"Private island with James Bond Island views across the bay. The most dramatic luxury island setting in Asia."},
      {name:"COMO Point Yamu (Phuket)",tier:"Luxury",price:"$400–$900/night",notes:"Stunning architecture on a private headland. The best-designed hotel in Phuket."}
    ],
    restaurants:[
      {name:"Jay Fai (Bangkok)",cuisine:"Thai Street Food",notes:"The only street food vendor with a Michelin star. Jay Fai herself cooks everything in ski goggles over extreme heat. The crab omelette is extraordinary. Queue for 3+ hours or book online."},
      {name:"Nahm (Bangkok)",cuisine:"Classic Thai Royal Cuisine",notes:"David Thompson's meticulously researched traditional Thai recipes. One of the most important Thai restaurants anywhere."},
      {name:"Ginger Farm Kitchen (Chiang Mai)",cuisine:"Northern Thai",notes:"Farm-to-table Northern Thai cooking using their own organic farm. The best food in Chiang Mai."}
    ],
    activities:[
      {name:"Wat Phra Kaew (Bangkok)",price:"$15/pp",notes:"The Temple of the Emerald Buddha inside the Grand Palace complex. The most important Buddhist temple in Thailand and architecturally extraordinary."},
      {name:"Floating Market Day Trip (Bangkok)",price:"$30–$60/pp",notes:"Damnoen Saduak or Amphawa for a more authentic experience. Boats of food vendors on the canals. Very Thai."},
      {name:"Phi Phi Islands Snorkel Tour",price:"$50–$80/pp",notes:"Turquoise water between limestone walls, coral reefs, and the Maya Bay of The Beach fame. Visually extraordinary."},
      {name:"Thai Cooking Class (Chiang Mai)",price:"$30–$50/pp",notes:"Market visit, then cook 5 dishes yourself. The best culinary education available for the price anywhere in Asia."},
      {name:"Elephant Sanctuary (Chiang Mai)",price:"$80–$120/pp",notes:"Ethical rescue sanctuaries where elephants roam freely. Feed, bathe, and walk with elephants. Life-changing — only book ethical no-riding sanctuaries."}
    ],
    bestFor:["Value luxury","Foodies","Cultural travelers","Adventure travelers","Couples"],
    bestTime:"November–April is cool and dry — perfect. May–October is monsoon season with heavy rain (though islands like Koh Samui have reversed seasons).",
    travelNote:"Passport required. Flights from North America typically 18–22 hours with one stop. No visa required for US or Canadian citizens under 30 days."
  },

  dubai:{
    label:"Dubai, UAE",emoji:"🏙️",region:"Middle East",
    vibe:"The world's most ambitious city — the tallest building on earth, the world's largest mall, man-made islands shaped like palm trees, and hotels so over-the-top they become attractions in their own right. But Dubai is also genuinely great for food, for shopping, for family travel with kids who want to do everything, and as a stopover hub between Europe and Asia. More surprisingly, the older Dubai Creek area and the Al Fahidi district reveal a genuinely interesting history beneath the spectacle.",
    sell:"Dubai is a stopover destination as much as a destination in itself — flights from North America to Southeast Asia or India often route through Dubai, and adding 2–3 nights costs relatively little extra while delivering extraordinary experiences.",
    hotels:[
      {name:"Burj Al Arab",tier:"Ultra-Luxury",price:"$2,000–$25,000/night",notes:"The world's most famous hotel — designed as a sail, on its own island. Only guests can visit the interior. All-suite, butler service. A true once-in-a-lifetime stay."},
      {name:"Atlantis The Palm",tier:"Luxury Resort",price:"$400–$2,000/night",notes:"Palm Island mega-resort with Aquaventure waterpark (huge for families), private beach, extraordinary aquarium."},
      {name:"One&Only The Palm",tier:"Ultra-Luxury",price:"$600–$1,800/night",notes:"On Palm Island, One&Only's most beautiful urban resort. Adult vibe, private beach, excellent restaurants."},
      {name:"Four Seasons DIFC",tier:"Luxury",price:"$400–$900/night",notes:"Best location in the financial district. Rooftop pool, excellent restaurants within walking distance."}
    ],
    restaurants:[
      {name:"Nobu Dubai (Atlantis)",cuisine:"Japanese Fusion",notes:"The most reliably excellent restaurant in Dubai — consistent Nobu quality with a very Dubai setting."},
      {name:"Al Hadheerah (Bab Al Shams Desert Resort)",cuisine:"Traditional Emirati",notes:"Outdoor desert setting with live music, camel rides, and traditional Emirati cuisine under the stars. The most memorable meal in Dubai."},
      {name:"Zuma Dubai (DIFC)",cuisine:"Japanese Robatayaki",notes:"The Dubai outpost of the global brand. Still one of the best meals in the city."}
    ],
    activities:[
      {name:"Burj Khalifa At The Top (148th Floor)",price:"$50–$150/pp",notes:"World's tallest building observation deck. The views across Dubai and the desert are genuinely extraordinary."},
      {name:"Dubai Desert Safari",price:"$60–$120/pp",notes:"Dune bashing, camel riding, falconry demonstration, traditional dinner under the stars. The essential Dubai non-city experience."},
      {name:"Dubai Frame",price:"$15/pp",notes:"150-meter picture frame with Old Dubai on one side, New Dubai on the other. Best way to understand the city's transformation."},
      {name:"Al Fahidi Historical Neighborhood",price:"Free",notes:"The old wind-tower district showing what Dubai looked like before the oil wealth. A beautiful and necessary contrast."}
    ],
    bestFor:["Luxury travelers","Families","Stopovers","Groups","Shopping enthusiasts"],
    bestTime:"November–March is perfect (25–30°C). April–October is extremely hot.",
    travelNote:"Passport required. Direct flights from many North American cities. No visa required for US or Canadian citizens (visa on arrival or pre-approval). Alcohol is available in licensed venues."
  },

  morocco:{
    label:"Morocco",emoji:"🕌",region:"Africa / Middle East",
    vibe:"The most accessible exotic destination in the world — just across the Strait of Gibraltar from Spain but a world away in culture, color, and sensory experience. Marrakech's medina is an assault on the senses in the best way: souks selling spices and leather, the Djemaa el-Fna square alive every evening, riads hidden behind unmarked doors that open into secret gardens. Fez's medina is larger and older, virtually unchanged since the 13th century.",
    sell:"Morocco trips reward good planning enormously — the best riads in Marrakech and Fez book up fast, and knowing how to navigate the medina safely and enjoyably requires local knowledge. Jesse and Sam can pair Morocco with Spain for an extraordinary two-country itinerary.",
    hotels:[
      {name:"Royal Mansour Marrakech",tier:"Ultra-Luxury",price:"$1,500–$8,000/night",notes:"Built by the King of Morocco with 53 private riads and the most extraordinary craftwork in the country. The finest hotel in North Africa."},
      {name:"La Mamounia (Marrakech)",tier:"Ultra-Luxury",price:"$800–$3,000/night",notes:"The most famous hotel in Africa, open since 1923. Winston Churchill's favorite hotel. Gardens, hammam, extraordinary restoration."},
      {name:"Riad Fes (Fez)",tier:"Luxury Boutique",price:"$300–$700/night",notes:"The finest riad in Fez's medina. Rooftop views, excellent restaurant, beautiful tilework and gardens."},
      {name:"Kasbah Tamadot (Atlas Mountains)",tier:"Ultra-Luxury",price:"$500–$2,000/night",notes:"Richard Branson's Moroccan property in the High Atlas. Mountain views, pool, Berber village walks."}
    ],
    restaurants:[
      {name:"Nomad (Marrakech)",cuisine:"Modern Moroccan",notes:"Rooftop terrace overlooking the spice market. Modern interpretations of Moroccan classics. Best meal in Marrakech."},
      {name:"Dar Zitoun (Fez)",cuisine:"Traditional Moroccan",notes:"Inside a traditional riad. The seven-vegetable couscous on Friday is extraordinary. The most authentic Moroccan dining experience."},
      {name:"Café Arabe (Marrakech)",cuisine:"Moroccan / Italian",notes:"Beautiful rooftop in the medina. Excellent cocktails (Morocco is more liberal than many Muslim countries about alcohol in tourist venues)."}
    ],
    activities:[
      {name:"Djemaa el-Fna Square at Night",price:"Free",notes:"The great square of Marrakech comes alive at dusk — snake charmers, storytellers, Gnawa musicians, food stalls. One of the great public spaces on earth."},
      {name:"Marrakech Medina Souk Walk",price:"Free + purchases",notes:"Get lost in the tanneries, spice markets, and lantern souks. Go with a guide for the first time — the medina is genuinely disorienting."},
      {name:"Sahara Desert Camp (Merzouga)",price:"$150–$300/pp",notes:"Camel trek to a luxury desert camp, sleep under the Milky Way with no light pollution anywhere. One of the great overnight experiences in travel."},
      {name:"Fez Medina Walking Tour",price:"$30–$50/pp guide",notes:"The world's largest car-free medieval city. 9,000 streets, many dead ends, 1,200 years old. Don't go without a guide."}
    ],
    bestFor:["Cultural travelers","Adventure travelers","Foodies","Couples","Unique experiences"],
    bestTime:"March–May and September–November. July–August is extremely hot in Marrakech.",
    travelNote:"Passport required. Direct flights from some US and Canadian cities (New York, Montreal) to Casablanca (CMN), or via Paris/London. No visa for US or Canadian citizens under 90 days."
  },

  peru:{
    label:"Peru & Machu Picchu",emoji:"🏔️",region:"South America",
    vibe:"Machu Picchu is one of the handful of sites in the world that lives up to any level of expectation — a 15th-century Inca citadel perched on a cloud-wrapped ridge in the Andes, accessible only by train or by foot on the Inca Trail. But Peru is much more than Machu Picchu: Lima has become one of the world's great food cities, the Sacred Valley has extraordinary Inca ruins with almost no crowds, and the Amazon Basin is accessible from Iquitos.",
    sell:"Peru trips require advance planning — Machu Picchu entry tickets are capped and sell out months ahead, the Inca Trail requires permits booked a year in advance, and the right hotels in Cusco and the Sacred Valley make the altitude adjustment much more comfortable. Jesse and Sam handle all of it.",
    hotels:[
      {name:"Belmond Sanctuary Lodge (Machu Picchu)",tier:"Ultra-Luxury",price:"$1,500–$4,000/night",notes:"The only hotel at the entrance to Machu Picchu. Guests enter the ruins before anyone else in the morning and after everyone leaves at night. Worth every penny."},
      {name:"Belmond Palacio Nazarenas (Cusco)",tier:"Ultra-Luxury",price:"$700–$2,000/night",notes:"Converted 16th-century convent in the heart of Cusco. Outdoor heated pool — extraordinary at 11,000 feet altitude."},
      {name:"Inkaterra Hacienda Urubamba (Sacred Valley)",tier:"Luxury",price:"$500–$1,200/night",notes:"Hacienda-style lodge in the Sacred Valley. Organic farm, Andean cooking, stunning mountain views. Best way to acclimatize before Cusco."},
      {name:"Miraflores Park Hotel (Lima)",tier:"Luxury",price:"$300–$600/night",notes:"Clifftop hotel overlooking the Pacific in Lima's best neighborhood. Perfect base for the city's extraordinary restaurant scene."}
    ],
    restaurants:[
      {name:"Central (Lima)",cuisine:"Peruvian Fine Dining",notes:"Frequently ranked #1 restaurant in the world. Chef Virgilio Martínez serves ingredients from every altitude in Peru. Reserve 3–4 months ahead."},
      {name:"Maido (Lima)",cuisine:"Nikkei (Japanese-Peruvian)",notes:"Chef Mitsuharu Tsumura's extraordinary fusion. Top 5 in the world most years. Lima is genuinely one of the world's great food cities."},
      {name:"Chicha (Cusco)",cuisine:"Peruvian Andean",notes:"Gastón Acurio's Cusco restaurant celebrating Andean ingredients. The best meal in Cusco."}
    ],
    activities:[
      {name:"Machu Picchu at Sunrise",price:"$50–$60 entry + $25 Huayna Picchu",notes:"Enter at 6am before the crowds. The mist lifts off the ruins to reveal them gradually. Nothing on earth is quite like this first view."},
      {name:"Sacred Valley Tour (Pisac & Ollantaytambo)",price:"$60–$100/pp",notes:"The Inca ruins of the Sacred Valley are extraordinary and almost entirely crowd-free compared to Machu Picchu."},
      {name:"Inca Trail Trek (4 days)",price:"$600–$1,000/pp all-in",notes:"The world's most famous trek. Permits sell out 10–12 months ahead. Arrive at the Sun Gate above Machu Picchu at dawn — the greatest moment in hiking."},
      {name:"Amazon Lodge (Iquitos or Puerto Maldonado)",price:"$200–$400/pp per night all-in",notes:"Two nights in a jungle lodge — caimans, pink dolphins, giant otters, macaws. A completely different Peru."}
    ],
    bestFor:["Adventure travelers","Cultural travelers","Bucket-list experiences","History lovers","Foodies"],
    bestTime:"May–September (dry season) is ideal. June–August is peak but best weather for Machu Picchu.",
    travelNote:"Passport required. Fly into Lima (LIM) — one stop from most US and Canadian cities. Machu Picchu entry tickets must be booked well in advance. Altitude (Cusco at 11,200 feet) requires acclimatization — plan 1–2 days in Sacred Valley first."
  },

  london:{
    label:"London",emoji:"🇬🇧",region:"Europe",
    vibe:"One of the world's great cities — extraordinary museums (almost all free), the best theater outside Broadway, a food scene that has genuinely overtaken Paris in energy, neighborhoods that each feel like a different city (Mayfair, Shoreditch, Notting Hill, South Bank), and a historic density that makes every street interesting. London is where you can eat at a Michelin-starred restaurant at lunch, see a West End show in the evening, and have a pint in a 400-year-old pub at midnight.",
    sell:"London hotel pricing is complex and the right neighborhood matters enormously. Jesse and Sam know which Mayfair properties are worth the premium, which Soho boutique hotels punch above their price, and how to time theater bookings months ahead.",
    hotels:[
      {name:"Claridge's (Mayfair)",tier:"Ultra-Luxury",price:"$700–$3,000/night",notes:"The most storied hotel in London. Art Deco masterpiece, the highest level of traditional British service. Where royalty and heads of state stay."},
      {name:"The Ned (City of London)",tier:"Luxury",price:"$400–$900/night",notes:"Converted 1920s bank with nine restaurants, rooftop pool, and membership club access. Most exciting hotel opening of the last decade."},
      {name:"Ham Yard Hotel (Soho)",tier:"Boutique Luxury",price:"$350–$700/night",notes:"Firmdale Hotels' most vibrant property. Basement bowling alley, rooftop terrace, right in the heart of Soho."},
      {name:"The Hoxton (Shoreditch)",tier:"Boutique Mid-Range",price:"$200–$400/night",notes:"Best value design hotel in London. Great lobby bar, central Shoreditch location, excellent breakfast."}
    ],
    restaurants:[
      {name:"The Wolseley",cuisine:"Viennese Café / British",notes:"Grand café on Piccadilly. Breakfast here is one of the great London rituals. The best eggs benedict in the city."},
      {name:"St. John (Smithfield)",cuisine:"Nose-to-Tail British",notes:"Fergus Henderson's famous restaurant that launched the offal revival. Roast bone marrow with parsley salad is iconic."},
      {name:"Dishoom (Multiple Locations)",cuisine:"Bombay Café / Indian",notes:"The best Indian food in London, inspired by the Irani cafés of Bombay. The bacon naan roll at breakfast is extraordinary."},
      {name:"Brat (Shoreditch)",cuisine:"Basque / Wood Fire",notes:"Tomos Parry's wood-fire restaurant. Consistently the most exciting cooking in London right now."}
    ],
    activities:[
      {name:"British Museum",price:"Free",notes:"One of the greatest collections in the world — the Rosetta Stone, the Elgin Marbles, Egyptian mummies. Give it a full day."},
      {name:"West End Show",price:"$50–$200/pp",notes:"The best theater in the English-speaking world outside of Broadway. Book 2–3 months ahead for popular shows."},
      {name:"National Gallery (Trafalgar Square)",price:"Free",notes:"Van Gogh's Sunflowers, Turner's Fighting Temeraire, Vermeer, Rembrandt. One of the finest collections in the world, free."},
      {name:"Borough Market",price:"Free to browse",notes:"London's greatest food market under London Bridge. The best cheeses, charcuterie, bread, and street food in the city."},
      {name:"Tower of London & Tower Bridge",price:"$30–$35/pp",notes:"1,000 years of history, the Crown Jewels, Beefeaters. Essential on a first visit."}
    ],
    bestFor:["Cultural travelers","Theater lovers","Foodies","History lovers","First Europe trip"],
    bestTime:"April–June and September–October. Christmas is magical. Summers are increasingly warm.",
    travelNote:"Passport required. Direct transatlantic flights from most major US and Canadian cities. Heathrow (LHR) is the main hub. No visa required for US or Canadian citizens under 6 months."
  },

  amsterdam:{
    label:"Amsterdam",emoji:"🚲",region:"Europe",
    vibe:"One of Europe's most livable and lovable cities — 17th-century canal houses reflected in the water, the world's greatest collection of Rembrandt and Van Gogh, a cycling culture that makes the city feel intimate and human, and a food scene that has been quietly improving for a decade. Amsterdam also makes a brilliant gateway for day trips to Bruges, Brussels, and the tulip fields of the Keukenhof.",
    sell:"Amsterdam is an excellent entry point for a broader Netherlands/Belgium trip and works particularly well as part of a Europe itinerary. Jesse and Sam know the canal belt hotels worth the premium and which museums need advance booking.",
    hotels:[
      {name:"Waldorf Astoria Amsterdam",tier:"Ultra-Luxury",price:"$600–$2,000/night",notes:"Six connected 17th-century canal palaces. The most beautiful hotel in Amsterdam. Canal views from every room."},
      {name:"Pulitzer Amsterdam",tier:"Luxury",price:"$400–$900/night",notes:"25 connected historic canal houses. Labyrinthine corridors, art-filled spaces, right in the Jordaan neighborhood."},
      {name:"Hotel V Nesplein",tier:"Boutique Upscale",price:"$200–$400/night",notes:"Best design boutique hotel in Amsterdam. Central location, great bar, excellent value for the standard."}
    ],
    restaurants:[
      {name:"Restaurant De Kas",cuisine:"Dutch Farm-to-Table",notes:"In a 1926 greenhouse on the edge of the city. Everything grown in their own greenhouse and farm. One of the most beautiful restaurant spaces in Europe."},
      {name:"Rijks (Rijksmuseum)",cuisine:"Modern Dutch",notes:"Michelin-starred restaurant inside the Rijksmuseum. Dutch ingredients, beautiful setting, worth planning lunch around a museum visit."},
      {name:"Brouwerij 't IJ (Windmill Brewery)",cuisine:"Dutch Beer & Bar Food",notes:"Craft brewery inside a functioning windmill. The best Dutch beer in the city."}
    ],
    activities:[
      {name:"Rijksmuseum",price:"$25/pp",notes:"Rembrandt's Night Watch, Vermeer's Milkmaid, and the greatest collection of Dutch Golden Age painting anywhere. Book ahead."},
      {name:"Van Gogh Museum",price:"$22/pp",notes:"The world's largest collection of Van Gogh's work. Book months ahead — it sells out regularly."},
      {name:"Canal Boat Tour",price:"$20–$30/pp",notes:"See the city from the water at your own pace. Evening boat tours are magical with the bridges lit up."},
      {name:"Anne Frank House",price:"$16/pp",notes:"Deeply moving. Book online only — months ahead. No same-day tickets."},
      {name:"Keukenhof Tulip Gardens Day Trip (March–May)",price:"$20/pp",notes:"7 million tulips in bloom across 79 acres. One of the great seasonal spectacles in Europe. 45 minutes from Amsterdam."}
    ],
    bestFor:["Cultural travelers","Couples","Art lovers","History lovers","Cycling enthusiasts"],
    bestTime:"April–May (tulips + spring) and September–October. Christmas markets in December are lovely.",
    travelNote:"Passport required. Direct transatlantic flights to AMS (Amsterdam Schiphol) from many US and Canadian cities. One of Europe's major hub airports."
  },

  // ─── NEW DESTINATIONS ADDED ───────────────────────────────

  anguilla:{
    label:"Anguilla",emoji:"🏖️",region:"Caribbean",
    vibe:"Anguilla is all about calm turquoise water, upscale villas, and some of the best beaches in the Caribbean. It feels refined and low-key rather than flashy, which is exactly why luxury travelers love it.",
    sell:"CxC can match clients with the right beachfront resort or villa and help plan a true laid-back luxury trip built around beaches, boat days, and great dining.",
    hotels:[
      {name:"Cap Juluca, A Belmond Hotel",tier:"Ultra-Luxury",price:"$900–$2,500/night",notes:"Iconic whitewashed villas directly on Maundays Bay. One of the most beautiful beachfront stays in the Caribbean."},
      {name:"Four Seasons Resort Anguilla",tier:"Luxury Resort",price:"$800–$2,000/night",notes:"Expansive suites, villas, and excellent pools overlooking Barnes Bay and Meads Bay."},
      {name:"Zemi Beach House",tier:"Luxury Boutique",price:"$500–$1,100/night",notes:"Stylish beachfront resort with a standout spa and a quieter atmosphere."}
    ],
    restaurants:[
      {name:"Blanchards",cuisine:"Caribbean / Seafood",notes:"One of Anguilla's signature restaurants with consistently excellent food."},
      {name:"Sharky's",cuisine:"Caribbean Fusion",notes:"Creative local dishes in a casual setting loved by repeat visitors."}
    ],
    activities:[
      {name:"Shoal Bay Beach Day",price:"Free",notes:"Arguably the island's most famous beach with clear water and soft white sand."},
      {name:"Private Boat Charter",price:"$150–$300/pp",notes:"Best way to reach secluded coves, snorkel spots, and offshore cays."}
    ],
    bestFor:["Luxury travel","Couples","Beach lovers"],
    bestTime:"December–April.",
    travelNote:"Typically accessed via St. Maarten ferry or regional flight connection."
  },

  antigua:{
    label:"Antigua",emoji:"⛵",region:"Caribbean",
    vibe:"Antigua is famous for having 365 beaches, one for every day of the year. It mixes classic Caribbean sand-and-sea beauty with sailing culture, upscale resorts, and a relaxed British-influenced island character.",
    sell:"CxC helps travelers choose the right side of the island, because beach conditions, vibe, and resort style can vary a lot from one bay to the next.",
    hotels:[
      {name:"Jumby Bay Island",tier:"Ultra-Luxury",price:"$2,000–$4,500/night",notes:"Private island luxury with villas, white sand beaches, and exceptional service."},
      {name:"Hermitage Bay",tier:"Luxury Boutique",price:"$1,000–$2,200/night",notes:"Adults-only style atmosphere with hillside suites and beautiful sunsets."},
      {name:"Sandals Grande Antigua",tier:"Adults-Only All-Inclusive",price:"$500–$900/night",notes:"Popular beachfront all-inclusive on Dickenson Bay with strong value for couples."}
    ],
    restaurants:[
      {name:"Catherine's Café",cuisine:"French / Caribbean",notes:"Beachfront favorite with excellent seafood and a polished atmosphere."},
      {name:"Sheer Rocks",cuisine:"Mediterranean",notes:"Cliffside restaurant with private day beds and one of the island's best views."}
    ],
    activities:[
      {name:"Shirley Heights Sunset",price:"$10–$15",notes:"Iconic Sunday sunset party with panoramic harbor views and live music."},
      {name:"Catamaran Sail",price:"$90–$150/pp",notes:"A classic Antigua day trip with snorkeling and multiple beach stops."}
    ],
    bestFor:["Couples","Sailing","Beach vacations"],
    bestTime:"December–April.",
    travelNote:"Direct flights available from select US cities with more options through Caribbean hubs."
  },

  bermuda:{
    label:"Bermuda",emoji:"🌸",region:"Atlantic / Caribbean",
    vibe:"Bermuda blends British charm, pink sand beaches, pastel towns, and a polished island feel that is completely its own. It feels more refined and structured than many Caribbean islands while still delivering beautiful water and resort relaxation.",
    sell:"Bermuda works especially well for East Coast clients looking for a quick premium island escape without a long flight. CxC can match them to the right beach or harbor-side property.",
    hotels:[
      {name:"Rosewood Bermuda",tier:"Luxury",price:"$700–$1,500/night",notes:"Beautiful resort in Tucker's Point with golf, spa, and a polished upscale feel."},
      {name:"Hamilton Princess",tier:"Historic Luxury",price:"$500–$1,100/night",notes:"Iconic pink hotel in Hamilton with marina views and strong dining."},
      {name:"Cambridge Beaches",tier:"Boutique Resort",price:"$450–$900/night",notes:"Adults-oriented atmosphere with secluded coves and cottage-style rooms."}
    ],
    restaurants:[
      {name:"The Waterlot",cuisine:"Steakhouse",notes:"One of Bermuda's classic special occasion restaurants."},
      {name:"Mickey's Beach Bistro",cuisine:"Seafood",notes:"Right on the sand with a casual but scenic setup."}
    ],
    activities:[
      {name:"Horseshoe Bay Beach",price:"Free",notes:"The island's most famous beach with pink sand and turquoise water."},
      {name:"Crystal Caves",price:"$25–$35/pp",notes:"Underground cave system with crystal clear water and dramatic formations."}
    ],
    bestFor:["Quick island getaways","Couples","East Coast travelers"],
    bestTime:"May–October.",
    travelNote:"Very easy nonstop access from the US East Coast and no long-haul island transfer required."
  },

  curacao:{
    label:"Curaçao",emoji:"🎨",region:"Caribbean",
    vibe:"Curaçao combines Dutch-Caribbean architecture, colorful waterfront streets, great diving, and a drier climate than many neighboring islands. Willemstad feels lively and cultural while the island's western beaches feel remote and peaceful.",
    sell:"CxC can build Curaçao trips that go beyond just a resort stay by mixing beach time, local culture, snorkeling, and easy island exploring.",
    hotels:[
      {name:"Baoase Luxury Resort",tier:"Ultra-Luxury",price:"$900–$2,000/night",notes:"Private-villa feel with one of the island's most exclusive beachfront settings."},
      {name:"Sandals Royal Curaçao",tier:"Adults-Only All-Inclusive",price:"$500–$950/night",notes:"Newer all-inclusive property with strong appeal for couples."},
      {name:"Avila Beach Hotel",tier:"Upscale",price:"$250–$500/night",notes:"Historic beachfront stay close to Willemstad with solid value."}
    ],
    restaurants:[
      {name:"Fort Nassau",cuisine:"International",notes:"Hilltop restaurant with beautiful views over Willemstad."},
      {name:"Plasa Bieu",cuisine:"Local",notes:"A true local food hall experience for traditional island dishes."}
    ],
    activities:[
      {name:"Klein Curaçao Day Trip",price:"$120–$180/pp",notes:"Boat excursion to a tiny offshore island with pristine beaches and snorkeling."},
      {name:"Willemstad Walking Tour",price:"Free–$30/pp",notes:"Explore the colorful historic core and floating bridge."}
    ],
    bestFor:["Couples","Divers","Culture + beach trips"],
    bestTime:"January–September.",
    travelNote:"Outside the main hurricane belt and accessible from several US gateways."
  },

  caymanislands:{
    label:"Cayman Islands",emoji:"🐠",region:"Caribbean",
    vibe:"The Cayman Islands are known for luxury beach stays, world-class diving, and some of the clearest water in the Caribbean. Grand Cayman in particular feels polished, safe, and very easy for US travelers.",
    sell:"CxC helps clients find the right balance between Seven Mile Beach luxury and more active experiences like snorkeling, stingray tours, and food-focused itineraries.",
    hotels:[
      {name:"The Ritz-Carlton, Grand Cayman",tier:"Ultra-Luxury",price:"$900–$2,200/night",notes:"Top-tier luxury directly on Seven Mile Beach with golf, spa, and exceptional service."},
      {name:"Kimpton Seafire Resort",tier:"Luxury",price:"$700–$1,500/night",notes:"Modern beachfront favorite with a younger, stylish vibe."},
      {name:"Westin Grand Cayman",tier:"Upscale Resort",price:"$500–$1,000/night",notes:"Reliable beachfront resort with broad appeal for families and couples."}
    ],
    restaurants:[
      {name:"Blue by Eric Ripert",cuisine:"Seafood Fine Dining",notes:"One of the Caribbean's most acclaimed restaurants."},
      {name:"Coccoloba",cuisine:"Mexican / Beachfront",notes:"Fun beachside restaurant ideal for relaxed lunches or sunset dinner."}
    ],
    activities:[
      {name:"Stingray City",price:"$60–$100/pp",notes:"Stand in shallow clear water while friendly stingrays swim around you."},
      {name:"Seven Mile Beach",price:"Free",notes:"One of the Caribbean's signature beaches with calm clear water."}
    ],
    bestFor:["Luxury travel","Families","Divers"],
    bestTime:"December–April.",
    travelNote:"Grand Cayman has strong nonstop service from many major US cities."
  },

  grenada:{
    label:"Grenada",emoji:"🌿",region:"Caribbean",
    vibe:"Known as the Spice Isle, Grenada offers waterfalls, lush hills, friendly local culture, and quieter beaches than the better-known Caribbean hotspots. It feels authentic and relaxed without sacrificing beauty.",
    sell:"CxC can position Grenada as a quieter Caribbean alternative for travelers who want nature, great food, and a more local island feel.",
    hotels:[
      {name:"Silversands Grenada",tier:"Ultra-Luxury",price:"$800–$1,800/night",notes:"Modern beachfront luxury with one of the Caribbean's longest pools."},
      {name:"Spice Island Beach Resort",tier:"Luxury All-Inclusive",price:"$900–$1,700/night",notes:"Family-owned beachfront all-inclusive with a refined feel."},
      {name:"Calabash Luxury Boutique Hotel",tier:"Luxury Boutique",price:"$700–$1,300/night",notes:"Intimate and service-focused with excellent dining."}
    ],
    restaurants:[
      {name:"BB's Crabback",cuisine:"Caribbean",notes:"Well-loved local restaurant serving fresh island flavors."},
      {name:"The Beach Club",cuisine:"International",notes:"Stylish seaside dining with polished service."}
    ],
    activities:[
      {name:"Grand Anse Beach",price:"Free",notes:"The island's signature beach with calm water and plenty of room to spread out."},
      {name:"Seven Sisters Waterfalls",price:"$5–$15",notes:"Popular inland hike ending at scenic falls and natural pools."}
    ],
    bestFor:["Couples","Nature lovers","Quieter Caribbean trips"],
    bestTime:"January–May.",
    travelNote:"Accessible via connecting flights from major Caribbean gateways and select nonstops."
  },

  stbarths:{
    label:"St. Barts",emoji:"🍾",region:"Caribbean",
    vibe:"St. Barts is the Caribbean's luxury playground — chic beach clubs, designer boutiques, hillside villas, and a distinctly French atmosphere. It is stylish, exclusive, and built for travelers who want a refined island experience.",
    sell:"CxC can help secure the right hotel or villa and guide clients toward the restaurants and beach clubs that define the St. Barts experience.",
    hotels:[
      {name:"Cheval Blanc St-Barth",tier:"Ultra-Luxury",price:"$1,800–$4,500/night",notes:"One of the Caribbean's most elite beachfront stays."},
      {name:"Eden Rock",tier:"Luxury Iconic",price:"$1,500–$4,000/night",notes:"Famous property perched above the sand at St. Jean."},
      {name:"Le Barthelemy Hotel & Spa",tier:"Luxury Boutique",price:"$1,000–$2,500/night",notes:"Stylish and quieter with a great beachfront setting."}
    ],
    restaurants:[
      {name:"Bonito",cuisine:"French / Latin",notes:"One of the island's signature dinner spots with harbor views."},
      {name:"Shellona",cuisine:"Mediterranean",notes:"Beach club dining directly on Shell Beach."}
    ],
    activities:[
      {name:"St. Jean Beach Club Day",price:"Varies",notes:"Classic St. Barts beach day with upscale lunch and calm water."},
      {name:"Gustavia Shopping",price:"Varies",notes:"Luxury boutiques and harborfront strolling in the island's stylish capital."}
    ],
    bestFor:["Luxury travelers","Couples","Beach clubs"],
    bestTime:"December–April.",
    travelNote:"Usually reached via connection through St. Maarten or San Juan."
  },

  saintmartin:{
    label:"St. Martin / St. Maarten",emoji:"✈️",region:"Caribbean",
    vibe:"One island split between French and Dutch sides, St. Martin blends beach life, nightlife, shopping, and surprisingly strong dining. It is one of the Caribbean's most flexible islands for travelers who want options.",
    sell:"CxC can match travelers to the quieter French side or the more active Dutch side depending on whether they want dining, nightlife, or resort convenience.",
    hotels:[
      {name:"Belmond La Samanna",tier:"Ultra-Luxury",price:"$900–$2,200/night",notes:"Legendary cliffside beachfront luxury on the French side."},
      {name:"Sonesta Ocean Point",tier:"Adults-Only All-Inclusive",price:"$450–$800/night",notes:"Convenient all-inclusive option near the airport and nightlife."},
      {name:"Secrets St. Martin",tier:"Adults-Only",price:"$500–$900/night",notes:"Polished resort option for couples seeking easier planning."}
    ],
    restaurants:[
      {name:"L'Auberge Gourmande",cuisine:"French",notes:"One of Grand Case's most respected restaurants."},
      {name:"Ocean 82",cuisine:"Seafood / French",notes:"Beautiful sunset dining in Grand Case."}
    ],
    activities:[
      {name:"Maho Beach Plane Spotting",price:"Free",notes:"Watch jets fly dramatically low over the beach near the runway."},
      {name:"Anguilla or St. Barts Day Trip",price:"$100–$250/pp",notes:"Easy launch point for nearby island-hopping."}
    ],
    bestFor:["Groups","Couples","Island-hopping"],
    bestTime:"December–April.",
    travelNote:"SXM is one of the Caribbean's easiest airports for connecting and regional travel."
  },

  tulum:{
    label:"Tulum",emoji:"🌴",region:"Mexico",
    vibe:"Tulum blends boho luxury, jungle hotels, beach clubs, cenotes, and dramatic Mayan ruins on the coast. It feels more boutique and design-focused than Cancun, with stronger emphasis on wellness and style.",
    sell:"CxC helps travelers choose between beach zone luxury, town value, and nearby resort areas depending on budget and travel style.",
    hotels:[
      {name:"La Valise Tulum",tier:"Luxury Boutique",price:"$700–$1,500/night",notes:"Iconic barefoot luxury directly on the beach."},
      {name:"Nomade Tulum",tier:"Upscale Boutique",price:"$500–$1,100/night",notes:"Wellness-forward property with a strong design vibe."},
      {name:"Conrad Tulum Riviera Maya",tier:"Luxury Resort",price:"$400–$800/night",notes:"Resort-style comfort with a polished feel and better road access."}
    ],
    restaurants:[
      {name:"Hartwood",cuisine:"Wood-Fired / Mexican",notes:"One of the most famous restaurants in Tulum."},
      {name:"Arca",cuisine:"Modern Mexican",notes:"Stylish jungle dining with a strong cocktail program."}
    ],
    activities:[
      {name:"Tulum Ruins",price:"$10–$20",notes:"Dramatic coastal Mayan site overlooking the Caribbean."},
      {name:"Cenote Swim",price:"$10–$30",notes:"Dozens of nearby cenotes offer some of the region's best freshwater swimming."}
    ],
    bestFor:["Couples","Wellness travel","Boutique beach trips"],
    bestTime:"December–April.",
    travelNote:"Typically reached via Cancun airport and a 1.5–2 hour transfer south."
  },

  playadelcarmen:{
    label:"Playa del Carmen",emoji:"🌞",region:"Mexico",
    vibe:"Playa del Carmen offers a more walkable and flexible Riviera Maya experience than Cancun, with beaches, resorts, nightlife, ferries to Cozumel, and easy access to cenotes and ruins. It can work for budget travelers, families, and upscale clients alike.",
    sell:"CxC can position Playa as a great base for travelers who want resort amenities plus a lively town and easy excursions.",
    hotels:[
      {name:"Fairmont Mayakoba",tier:"Luxury",price:"$500–$1,200/night",notes:"Beautiful resort within a gated eco-luxury area with canals and golf."},
      {name:"Hilton Playa del Carmen",tier:"Adults-Only All-Inclusive",price:"$350–$700/night",notes:"Popular all-inclusive right in town with strong convenience."},
      {name:"Mahekal Beach Resort",tier:"Boutique Upscale",price:"$300–$650/night",notes:"Laid-back beachfront option with bungalow-style rooms."}
    ],
    restaurants:[
      {name:"Alux",cuisine:"International",notes:"Unique dining experience inside a cave setting."},
      {name:"Trujillos",cuisine:"Mexican",notes:"Stylish local favorite with elevated regional dishes."}
    ],
    activities:[
      {name:"Ferry to Cozumel",price:"$25–$40 roundtrip",notes:"Easy day trip for snorkeling, beach clubs, or scuba diving."},
      {name:"Xcaret or Xplor",price:"$120–$180/pp",notes:"Popular eco-park and adventure park options nearby."}
    ],
    bestFor:["Families","Couples","Flexible Mexico trips"],
    bestTime:"December–April.",
    travelNote:"Easy access from Cancun airport with a straightforward transfer."
  },

  puertovallarta:{
    label:"Puerto Vallarta",emoji:"🌅",region:"Mexico",
    vibe:"Puerto Vallarta combines Pacific coastline, classic Mexican charm, a walkable old town, and resort zones that range from value-friendly to luxury. It feels more authentically urban and scenic than some all-inclusive-heavy beach destinations.",
    sell:"CxC can build trips here around beach time, food, romantic old-town stays, or nearby Riviera Nayarit luxury resorts.",
    hotels:[
      {name:"Hotel Mousai",tier:"Luxury Adults-Only",price:"$500–$1,100/night",notes:"Sleek hillside resort with standout views and upscale dining."},
      {name:"Grand Velas Riviera Nayarit",tier:"Luxury All-Inclusive",price:"$700–$1,500/night",notes:"One of Mexico's premier all-inclusive resorts."},
      {name:"Hyatt Ziva Puerto Vallarta",tier:"All-Inclusive",price:"$350–$750/night",notes:"Family-friendly beachfront resort with a protected cove beach."}
    ],
    restaurants:[
      {name:"Cafe des Artistes",cuisine:"Fine Dining",notes:"Flagship special occasion restaurant in Puerto Vallarta."},
      {name:"La Palapa",cuisine:"Seafood / Mexican",notes:"Classic beachfront dining in the Romantic Zone."}
    ],
    activities:[
      {name:"Malecon Walk",price:"Free",notes:"Oceanfront boardwalk lined with sculptures, bars, and restaurants."},
      {name:"Marietas Islands Tour",price:"$90–$150/pp",notes:"Boat trip for snorkeling and dramatic island scenery."}
    ],
    bestFor:["Couples","Families","Food + beach trips"],
    bestTime:"November–April.",
    travelNote:"Direct flights available from many US cities to PVR."
  },

  rome:{
    label:"Rome",emoji:"🏛️",region:"Europe",
    vibe:"Rome layers 2,000 years of history into everyday life — ancient ruins, piazzas, fountains, incredible churches, and some of the most memorable simple food in Europe. It feels grand, chaotic, and unforgettable all at once.",
    sell:"CxC can structure Rome so clients stay in the right neighborhood and avoid wasting valuable time on long lines and inefficient sightseeing.",
    hotels:[
      {name:"Hotel de Russie",tier:"Luxury",price:"$700–$1,500/night",notes:"Elegant classic luxury between the Spanish Steps and Piazza del Popolo."},
      {name:"Hassler Roma",tier:"Ultra-Luxury",price:"$900–$1,800/night",notes:"Iconic stay at the top of the Spanish Steps."},
      {name:"Singer Palace Hotel",tier:"Boutique Luxury",price:"$450–$850/night",notes:"Smaller luxury stay with a great rooftop and central location."}
    ],
    restaurants:[
      {name:"Roscioli",cuisine:"Roman / Italian",notes:"One of the city's best-known spots for pasta, cured meats, and wine."},
      {name:"Armando al Pantheon",cuisine:"Roman",notes:"A classic for authentic Roman dishes near the Pantheon."}
    ],
    activities:[
      {name:"Colosseum & Forum",price:"$25–$60",notes:"Essential first-time Rome sightseeing with layers of ancient history."},
      {name:"Trevi Fountain + Historic Center Walk",price:"Free",notes:"Easy way to take in the city's most iconic landmarks and atmosphere."}
    ],
    bestFor:["History lovers","Couples","First Europe trips"],
    bestTime:"April–June, September–October.",
    travelNote:"Rome is a major international gateway and easy starting point for Italy itineraries."
  },

  florence:{
    label:"Florence",emoji:"🎨",region:"Europe",
    vibe:"Florence is compact, beautiful, and packed with Renaissance art, Tuscan food, and postcard city views. It feels more intimate than Rome and works especially well for travelers who want art, food, and easy walkability.",
    sell:"CxC often uses Florence as the cultural and culinary heart of an Italy itinerary, with easy day trips into Tuscany added around it.",
    hotels:[
      {name:"Hotel Lungarno",tier:"Luxury",price:"$500–$1,000/night",notes:"Elegant riverside hotel tied to the Ferragamo family with excellent views."},
      {name:"Four Seasons Firenze",tier:"Ultra-Luxury",price:"$900–$1,800/night",notes:"One of the most impressive urban resorts in Europe."},
      {name:"Hotel Brunelleschi",tier:"Luxury Boutique",price:"$350–$750/night",notes:"Historic property in a fantastic central location."}
    ],
    restaurants:[
      {name:"Buca Mario",cuisine:"Tuscan",notes:"Beloved classic for Florentine steak and Tuscan comfort food."},
      {name:"La Giostra",cuisine:"Italian",notes:"Romantic and very popular, especially for couples."}
    ],
    activities:[
      {name:"Uffizi Gallery",price:"$25–$40",notes:"A must for Renaissance art lovers."},
      {name:"Piazzale Michelangelo Sunset",price:"Free",notes:"Best panoramic city view in Florence."}
    ],
    bestFor:["Art lovers","Couples","Foodies"],
    bestTime:"April–June, September–October.",
    travelNote:"Easy train connections from Rome, Venice, Milan, and throughout Tuscany."
  },

  amalficoast:{
    label:"Amalfi Coast",emoji:"🚤",region:"Europe",
    vibe:"The Amalfi Coast is one of the world's great scenic destinations — cliffside villages, lemon groves, beach clubs, winding roads, and sunlit water below. Positano, Amalfi, and Ravello each have a different feel but all are deeply romantic.",
    sell:"CxC helps travelers choose the right base town and plan around ferry schedules, private transfers, and the intense seasonality of the coast.",
    hotels:[
      {name:"Le Sirenuse",tier:"Luxury Iconic",price:"$1,200–$2,500/night",notes:"Positano's most famous luxury hotel with postcard views."},
      {name:"Il San Pietro di Positano",tier:"Ultra-Luxury",price:"$1,500–$3,000/night",notes:"Legendary cliffside luxury and one of Italy's most special hotels."},
      {name:"Hotel Santa Caterina",tier:"Luxury",price:"$900–$1,800/night",notes:"Beautiful family-run stay near Amalfi with dramatic sea views."}
    ],
    restaurants:[
      {name:"La Sponda",cuisine:"Italian Fine Dining",notes:"Candlelit Positano dinner experience at Le Sirenuse."},
      {name:"Lo Scoglio",cuisine:"Coastal Italian",notes:"Famous seaside restaurant known for simple outstanding ingredients."}
    ],
    activities:[
      {name:"Private Boat Day",price:"$300–$800/pp depending on group",notes:"Best way to experience the coastline and avoid traffic-heavy roads."},
      {name:"Ravello Visit",price:"Free–$20",notes:"Elegant hilltop town with gardens and sweeping coastal views."}
    ],
    bestFor:["Honeymoon","Luxury travel","Romantic trips"],
    bestTime:"May–June, September.",
    travelNote:"Typically reached via Naples with private transfer or ferry connections."
  },

  barcelona:{
    label:"Barcelona",emoji:"🏖️",region:"Europe",
    vibe:"Barcelona combines beach access, incredible architecture, tapas culture, and one of Europe's most energetic urban atmospheres. Gaudí's work gives the city a look unlike anywhere else in the world.",
    sell:"CxC can help clients balance the Gothic Quarter, Eixample, and beachfront areas depending on whether they prioritize culture, nightlife, or easier resort-style access.",
    hotels:[
      {name:"Mandarin Oriental Barcelona",tier:"Ultra-Luxury",price:"$700–$1,500/night",notes:"Top-tier luxury on Passeig de Gracia."},
      {name:"Hotel Arts Barcelona",tier:"Luxury",price:"$500–$1,000/night",notes:"Strong choice for beach access and full-service resort feel."},
      {name:"Majestic Hotel & Spa",tier:"Luxury Historic",price:"$400–$800/night",notes:"Classic Barcelona luxury in a prime central location."}
    ],
    restaurants:[
      {name:"Disfrutar",cuisine:"Modern Spanish",notes:"One of the most celebrated fine-dining restaurants in the world."},
      {name:"El Xampanyet",cuisine:"Tapas",notes:"Beloved classic tapas spot with a lively old-school feel."}
    ],
    activities:[
      {name:"Sagrada Familia",price:"$30–$50",notes:"The city's defining landmark and one of Europe's most extraordinary churches."},
      {name:"Park Guell",price:"$10–$20",notes:"Gaudí's colorful hilltop park with city views."}
    ],
    bestFor:["Couples","Groups","Food + culture trips"],
    bestTime:"April–June, September–October.",
    travelNote:"Barcelona is easy to combine with Madrid, the Costa Brava, or southern France."
  },

  madrid:{
    label:"Madrid",emoji:"🏟️",region:"Europe",
    vibe:"Madrid is elegant, energetic, and easier to live in than many capital cities. It offers world-class museums, late-night dining culture, grand boulevards, and easy train access to other parts of Spain.",
    sell:"CxC often uses Madrid as either the cultural core of a Spain itinerary or as the best flight gateway before moving clients onward by high-speed rail.",
    hotels:[
      {name:"Rosewood Villa Magna",tier:"Luxury",price:"$700–$1,400/night",notes:"Polished luxury in Salamanca, one of Madrid's best neighborhoods."},
      {name:"Mandarin Oriental Ritz",tier:"Ultra-Luxury",price:"$800–$1,600/night",notes:"Classic landmark hotel near the Prado."},
      {name:"Only YOU Boutique Hotel",tier:"Boutique Upscale",price:"$250–$500/night",notes:"Stylish and lively with strong value for the location."}
    ],
    restaurants:[
      {name:"Sobrino de Botin",cuisine:"Spanish",notes:"Claimed to be the oldest restaurant in the world and known for roast suckling pig."},
      {name:"Sala de Despiece",cuisine:"Modern Spanish",notes:"Creative and energetic small-plates dining."}
    ],
    activities:[
      {name:"Prado Museum",price:"$20–$30",notes:"One of Europe's essential art museums."},
      {name:"Retiro Park",price:"Free",notes:"Beautiful urban park perfect for a slower afternoon."}
    ],
    bestFor:["Art lovers","City breaks","Spain itineraries"],
    bestTime:"March–May, September–October.",
    travelNote:"Major rail hub with excellent AVE train access across Spain."
  },

  dublin:{
    label:"Dublin",emoji:"🍀",region:"Europe",
    vibe:"Dublin is compact, friendly, and easy to enjoy with lively pubs, literary history, Georgian architecture, and a strong sense of personality. It also serves as an easy launch point for wider Ireland itineraries.",
    sell:"CxC can position Dublin as both a city break and the start of a longer Ireland trip into the countryside, coast, or golf routes.",
    hotels:[
      {name:"The Shelbourne",tier:"Luxury Historic",price:"$500–$1,000/night",notes:"One of Dublin's most iconic addresses overlooking St. Stephen's Green."},
      {name:"The Merrion",tier:"Luxury",price:"$600–$1,200/night",notes:"Elegant townhouse luxury with excellent service."},
      {name:"The Dean Dublin",tier:"Boutique",price:"$250–$450/night",notes:"Stylish and lively with a younger feel."}
    ],
    restaurants:[
      {name:"Chapter One",cuisine:"Fine Dining",notes:"One of Dublin's flagship restaurants."},
      {name:"The Winding Stair",cuisine:"Irish",notes:"Charming modern Irish dining along the river."}
    ],
    activities:[
      {name:"Guinness Storehouse",price:"$30–$40",notes:"Popular interactive attraction ending with panoramic city views."},
      {name:"Temple Bar + Pub Crawl",price:"Free–$30/pp",notes:"Easy way to experience Dublin's nightlife and pub culture."}
    ],
    bestFor:["City breaks","Groups","Ireland first-timers"],
    bestTime:"May–September.",
    travelNote:"Strong nonstop service from the US East Coast and preclearance for many US-bound return flights."
  },

  edinburgh:{
    label:"Edinburgh",emoji:"🏰",region:"Europe",
    vibe:"Edinburgh feels dramatic and atmospheric with its castle on the hill, winding closes, Georgian elegance, and festival energy. It is one of Europe's most beautiful and most distinctive small capitals.",
    sell:"CxC can pair Edinburgh with Highlands touring, golf, whisky experiences, or a London connection depending on the client's goals.",
    hotels:[
      {name:"The Balmoral",tier:"Luxury Iconic",price:"$600–$1,200/night",notes:"Landmark luxury hotel right at the edge of the Old and New Towns."},
      {name:"Gleneagles Townhouse",tier:"Luxury Boutique",price:"$500–$900/night",notes:"Stylish newer option with strong food and design."},
      {name:"The Witchery",tier:"Boutique Historic",price:"$600–$1,100/night",notes:"Dramatic Gothic stay near the castle with unforgettable atmosphere."}
    ],
    restaurants:[
      {name:"The Kitchin",cuisine:"Scottish Fine Dining",notes:"One of Edinburgh's best-known upscale restaurants."},
      {name:"Scran & Scallie",cuisine:"Gastropub",notes:"Excellent elevated Scottish comfort food."}
    ],
    activities:[
      {name:"Edinburgh Castle",price:"$25–$35",notes:"The city's defining landmark with major historical significance."},
      {name:"Royal Mile Walk",price:"Free",notes:"Classic first-day stroll through the heart of Old Town."}
    ],
    bestFor:["History lovers","Couples","Culture trips"],
    bestTime:"May–September.",
    travelNote:"Easy rail and flight connections through the UK and Europe."
  },

  switzerland:{
    label:"Swiss Alps",emoji:"🏔️",region:"Europe",
    vibe:"Switzerland delivers alpine villages, scenic train rides, crystal lakes, and dramatic mountain peaks in a polished, easy-to-navigate package. It works year-round for skiing, hiking, luxury wellness, and iconic scenery.",
    sell:"CxC can help choose the right Swiss base — Zermatt, Interlaken, Lucerne, or St. Moritz — because each one creates a very different trip.",
    hotels:[
      {name:"Badrutt's Palace",tier:"Ultra-Luxury",price:"$900–$2,500/night",notes:"Legendary luxury in St. Moritz with year-round prestige appeal."},
      {name:"The Omnia",tier:"Luxury Boutique",price:"$700–$1,500/night",notes:"Modern hillside luxury in Zermatt."},
      {name:"Victoria Jungfrau",tier:"Luxury",price:"$500–$1,100/night",notes:"Grand hotel in Interlaken with an excellent spa and mountain access."}
    ],
    restaurants:[
      {name:"Chez Vrony",cuisine:"Swiss Alpine",notes:"Mountain dining with Matterhorn views near Zermatt."},
      {name:"Cà d'Oro",cuisine:"Fine Dining",notes:"Upscale option in St. Moritz for a polished evening out."}
    ],
    activities:[
      {name:"Glacier Express",price:"$180–$300",notes:"One of the world's great scenic rail journeys."},
      {name:"Gornergrat Railway",price:"$80–$140",notes:"Easy way to get stunning Matterhorn views from Zermatt."}
    ],
    bestFor:["Luxury travel","Scenic rail trips","Mountain lovers"],
    bestTime:"December–March for ski, June–September for hiking and scenery.",
    travelNote:"Swiss rail makes multi-city travel extremely efficient and tourist-friendly."
  },

  prague:{
    label:"Prague",emoji:"🕰️",region:"Europe",
    vibe:"Prague feels like a fairy-tale city with Gothic spires, baroque squares, riverside views, and a lively café and beer culture. It offers major visual impact at a better value than many Western European capitals.",
    sell:"CxC can pair Prague with Vienna or Budapest for a strong Central Europe itinerary that feels polished without becoming overly expensive.",
    hotels:[
      {name:"Four Seasons Prague",tier:"Luxury",price:"$500–$1,000/night",notes:"Top-tier riverfront luxury steps from Old Town."},
      {name:"Augustine",tier:"Luxury Boutique",price:"$350–$700/night",notes:"Beautiful property built around a historic monastery setting."},
      {name:"BoHo Prague",tier:"Boutique Upscale",price:"$220–$450/night",notes:"Stylish value-oriented luxury near the center."}
    ],
    restaurants:[
      {name:"Field",cuisine:"Modern Czech",notes:"Fine dining that highlights local ingredients and technique."},
      {name:"Lokál",cuisine:"Czech",notes:"Reliable classic spot for beer and traditional dishes."}
    ],
    activities:[
      {name:"Charles Bridge Sunrise Walk",price:"Free",notes:"The best time to experience the city's most famous bridge."},
      {name:"Prague Castle",price:"$15–$30",notes:"Large historic complex with panoramic views over the city."}
    ],
    bestFor:["Couples","Value-conscious Europe trips","History lovers"],
    bestTime:"April–June, September–October.",
    travelNote:"Easy to combine with Vienna, Budapest, or Munich by rail."
  },

  vienna:{
    label:"Vienna",emoji:"🎼",region:"Europe",
    vibe:"Vienna is elegant, grand, and deeply cultural with imperial palaces, coffeehouse tradition, classical music, and one of Europe's most livable urban atmospheres. It feels refined without being overwhelming.",
    sell:"CxC can position Vienna as a polished cultural stop within a broader Central Europe itinerary or as a city break focused on music, museums, and luxury hotels.",
    hotels:[
      {name:"Hotel Sacher",tier:"Luxury Historic",price:"$600–$1,200/night",notes:"Iconic grand hotel known for old-world service and the original sachertorte."},
      {name:"Park Hyatt Vienna",tier:"Luxury",price:"$500–$1,000/night",notes:"Elegant modern luxury in a restored bank building."},
      {name:"The Guesthouse Vienna",tier:"Boutique Upscale",price:"$300–$600/night",notes:"Great central location with strong value for the standard."}
    ],
    restaurants:[
      {name:"Steirereck",cuisine:"Modern Austrian",notes:"One of Vienna's most celebrated fine-dining experiences."},
      {name:"Figlmuller",cuisine:"Austrian",notes:"Famous for giant schnitzel and classic local dishes."}
    ],
    activities:[
      {name:"Schonbrunn Palace",price:"$25–$40",notes:"Essential imperial Vienna sightseeing."},
      {name:"Vienna State Opera",price:"$20–$250",notes:"A great anchor activity for a polished city itinerary."}
    ],
    bestFor:["Culture trips","Couples","Central Europe itineraries"],
    bestTime:"April–June, September–December.",
    travelNote:"Well connected by air and rail, especially for multi-city Europe trips."
  },

  chicago:{
    label:"Chicago",emoji:"🌆",region:"Midwest USA",
    vibe:"Chicago offers skyline views, standout food, lakefront energy, great museums, and a more approachable feel than New York. It excels for long weekends, sports trips, and food-focused city breaks.",
    sell:"CxC can build Chicago stays around restaurants, architecture, sports, and neighborhood exploration instead of just a generic downtown hotel booking.",
    hotels:[
      {name:"The Peninsula Chicago",tier:"Ultra-Luxury",price:"$700–$1,400/night",notes:"One of the city's best luxury hotels in a prime Mag Mile location."},
      {name:"The Langham",tier:"Luxury",price:"$500–$1,000/night",notes:"Riverfront luxury with great views and polished service."},
      {name:"Pendry Chicago",tier:"Upscale",price:"$300–$650/night",notes:"Stylish stay with strong location and a younger feel."}
    ],
    restaurants:[
      {name:"Alinea",cuisine:"Fine Dining",notes:"One of the most famous tasting-menu restaurants in America."},
      {name:"Au Cheval",cuisine:"American",notes:"Known for one of the country's most famous burgers."}
    ],
    activities:[
      {name:"Architecture River Cruise",price:"$40–$70",notes:"One of the best city tours in the US."},
      {name:"Millennium Park + Riverwalk",price:"Free",notes:"Easy downtown sightseeing and skyline experience."}
    ],
    bestFor:["Foodies","Groups","Long weekends"],
    bestTime:"May–October.",
    travelNote:"Major flight hub with excellent domestic access from almost everywhere in the US."
  },

  sandiego:{
    label:"San Diego",emoji:"☀️",region:"California",
    vibe:"San Diego blends perfect weather, beaches, neighborhoods with personality, golf, and a laid-back SoCal pace. It works equally well for families, couples, and guys trips built around golf or sports.",
    sell:"CxC can combine beach time, downtown energy, golf, and resort stays in a way that makes San Diego feel much more complete than a simple hotel booking.",
    hotels:[
      {name:"Hotel del Coronado",tier:"Historic Luxury",price:"$600–$1,300/night",notes:"Legendary beachfront resort on Coronado Island."},
      {name:"Pendry San Diego",tier:"Luxury",price:"$350–$800/night",notes:"Great choice for nightlife and downtown convenience in the Gaslamp."},
      {name:"Park Hyatt Aviara",tier:"Luxury Resort",price:"$500–$1,100/night",notes:"Top resort option with golf and spa in North County."}
    ],
    restaurants:[
      {name:"Herb & Wood",cuisine:"American / Italian",notes:"One of the city's best-known upscale restaurants."},
      {name:"George's at the Cove",cuisine:"Seafood / California",notes:"Great views in La Jolla with polished but approachable dining."}
    ],
    activities:[
      {name:"La Jolla Cove",price:"Free",notes:"Classic San Diego ocean views, sea lions, and snorkeling opportunities."},
      {name:"Torrey Pines",price:"Varies",notes:"Whether hiking or golfing, this area is one of San Diego's signature experiences."}
    ],
    bestFor:["Families","Golf trips","Beach + city combos"],
    bestTime:"March–October.",
    travelNote:"Very easy West Coast flight access and a great add-on with Southern California itineraries."
  },

  austin:{
    label:"Austin",emoji:"🎶",region:"Texas",
    vibe:"Austin combines live music, great food, warm-weather energy, and a casual stylish atmosphere that works especially well for groups and long weekends. It is one of the easiest fun-city trips in the US.",
    sell:"CxC can package Austin around music, food, Formula 1, bachelor parties, or a more polished couple's weekend depending on the client.",
    hotels:[
      {name:"Commodore Perry Estate",tier:"Luxury Boutique",price:"$700–$1,500/night",notes:"One of the most refined stays in Texas with estate-style grounds."},
      {name:"The Proper Hotel",tier:"Luxury",price:"$350–$700/night",notes:"Stylish downtown favorite with a strong rooftop and design vibe."},
      {name:"Fairmont Austin",tier:"Upscale",price:"$250–$500/night",notes:"Large full-service option with strong location for events and conventions."}
    ],
    restaurants:[
      {name:"Franklin Barbecue",cuisine:"BBQ",notes:"The city's most famous food stop and worth planning around."},
      {name:"Uchi",cuisine:"Japanese",notes:"Beloved Austin staple for elevated sushi and small plates."}
    ],
    activities:[
      {name:"South Congress + Live Music",price:"Free–Varies",notes:"Best way to experience Austin's signature energy and local scene."},
      {name:"Lake Travis Boat Day",price:"$80–$200/pp",notes:"Popular warm-weather group activity just outside the city."}
    ],
    bestFor:["Groups","Bachelor/Bachelorette","Food + music trips"],
    bestTime:"March–May, October–November.",
    travelNote:"Great domestic air access and easy to combine with Hill Country stays."
  },

  parkcity:{
    label:"Park City",emoji:"🎿",region:"Mountain USA",
    vibe:"Park City combines upscale mountain-town charm, skiing, walkable historic streets, and easy access from Salt Lake City. It is one of the easiest premium ski destinations in North America.",
    sell:"CxC can package Park City as either a ski trip, a Sundance-style winter getaway, or a summer mountain escape with much easier logistics than many Colorado resorts.",
    hotels:[
      {name:"Montage Deer Valley",tier:"Ultra-Luxury",price:"$900–$2,000/night",notes:"Top luxury ski-in/ski-out option in Deer Valley."},
      {name:"Stein Eriksen Lodge",tier:"Luxury",price:"$700–$1,500/night",notes:"Classic high-end Deer Valley property."},
      {name:"Pendry Park City",tier:"Luxury",price:"$500–$1,100/night",notes:"Stylish newer ski resort option with strong amenities."}
    ],
    restaurants:[
      {name:"Riverhorse on Main",cuisine:"Fine Dining",notes:"One of Park City's most established upscale restaurants."},
      {name:"Handle",cuisine:"American",notes:"Great downtown option with a lively atmosphere."}
    ],
    activities:[
      {name:"Deer Valley or Park City Skiing",price:"$200–$300/day",notes:"Main draw in winter with excellent terrain and mountain service."},
      {name:"Main Street Park City",price:"Free",notes:"Walkable historic core with shops, bars, and restaurants."}
    ],
    bestFor:["Skiers","Luxury winter trips","Couples"],
    bestTime:"December–March for ski, June–September for mountain weather.",
    travelNote:"Extremely easy transfer from Salt Lake City airport, usually under an hour."
  },

  jacksonhole:{
    label:"Jackson Hole",emoji:"🦬",region:"Mountain USA",
    vibe:"Jackson Hole pairs rugged western scenery with luxury lodges, wildlife, and one of the most iconic mountain settings in the US. It works for skiing in winter and national-park-focused trips in summer.",
    sell:"CxC can build Jackson Hole around Grand Teton and Yellowstone, making it a much stronger adventure-luxury trip than just booking a mountain hotel alone.",
    hotels:[
      {name:"Amangani",tier:"Ultra-Luxury",price:"$1,500–$3,500/night",notes:"One of the most exclusive mountain resorts in America with sweeping valley views."},
      {name:"Four Seasons Jackson Hole",tier:"Luxury",price:"$900–$2,000/night",notes:"Premier ski-in/ski-out option in Teton Village."},
      {name:"Hotel Jackson",tier:"Luxury Boutique",price:"$500–$1,000/night",notes:"Polished boutique stay right in town."}
    ],
    restaurants:[
      {name:"Snake River Grill",cuisine:"American",notes:"A long-standing Jackson favorite for upscale dining."},
      {name:"Glorietta",cuisine:"Italian",notes:"Stylish wood-fired spot popular with both visitors and locals."}
    ],
    activities:[
      {name:"Grand Teton National Park",price:"$35/car",notes:"One of America's most dramatic mountain park experiences."},
      {name:"Ski Jackson Hole",price:"$180–$250/day",notes:"Famous for steep terrain and strong snow conditions."}
    ],
    bestFor:["Adventure luxury","Ski trips","National park travel"],
    bestTime:"December–March for ski, June–September for parks.",
    travelNote:"Best paired with a rental car if the trip includes parks or multiple activity zones."
  },

  asheville:{
    label:"Asheville",emoji:"🌄",region:"Southeast USA",
    vibe:"Asheville blends Blue Ridge scenery, breweries, mountain cabins, artsy neighborhoods, and a laid-back creative energy. It is ideal for travelers who want a short drive-friendly getaway with food and views.",
    sell:"CxC can package Asheville as a romantic long weekend, a mountain cabin trip, or a scenic stop in a larger Southeast itinerary.",
    hotels:[
      {name:"The Omni Grove Park Inn",tier:"Historic Luxury",price:"$350–$700/night",notes:"Classic mountain resort with a famous spa and broad views."},
      {name:"The Foundry",tier:"Boutique Upscale",price:"$220–$450/night",notes:"Well-located downtown boutique hotel with a cool industrial feel."},
      {name:"Biltmore Village Inn",tier:"Boutique",price:"$250–$450/night",notes:"Charming smaller stay near Biltmore and village shops."}
    ],
    restaurants:[
      {name:"Curate",cuisine:"Spanish Tapas",notes:"One of Asheville's best-known restaurants and still a favorite."},
      {name:"Rhubarb",cuisine:"American",notes:"Farm-focused downtown dining with strong seasonal menus."}
    ],
    activities:[
      {name:"Biltmore Estate",price:"$80–$150",notes:"Massive historic estate and one of the region's major attractions."},
      {name:"Blue Ridge Parkway Drive",price:"Free",notes:"One of the best scenic drives in the eastern US."}
    ],
    bestFor:["Long weekends","Couples","Mountain escapes"],
    bestTime:"April–June, September–November.",
    travelNote:"Drive-friendly for much of the Southeast and Mid-Atlantic, with a small regional airport as well."
  },

  maldives:{
    label:"Maldives",emoji:"🐚",region:"Indian Ocean",
    vibe:"The Maldives is the ultimate overwater-villa destination — impossibly clear water, tiny private islands, marine life everywhere, and a level of seclusion few places can match. It is built for bucket-list luxury.",
    sell:"CxC helps travelers choose the right island because transfer type, reef quality, food standards, and villa style vary massively from resort to resort.",
    hotels:[
      {name:"Soneva Jani",tier:"Ultra-Luxury",price:"$2,500–$6,000/night",notes:"Iconic overwater villas with slides into the lagoon."},
      {name:"Gili Lankanfushi",tier:"Ultra-Luxury",price:"$1,800–$4,000/night",notes:"Barefoot luxury favorite with exceptional service."},
      {name:"Waldorf Astoria Maldives Ithaafushi",tier:"Ultra-Luxury",price:"$2,000–$5,000/night",notes:"Polished luxury with expansive villas and premium dining."}
    ],
    restaurants:[
      {name:"Underwater Dining Experiences",cuisine:"Fine Dining",notes:"Several resorts offer signature underwater or overwater specialty restaurants."},
      {name:"Resort Signature Dining",cuisine:"International",notes:"Dining is highly resort-dependent, making property choice especially important here."}
    ],
    activities:[
      {name:"Snorkeling with Manta Rays",price:"$100–$250/pp",notes:"One of the Maldives' most special marine experiences."},
      {name:"Sunset Dolphin Cruise",price:"$80–$150/pp",notes:"Classic romantic add-on for many island stays."}
    ],
    bestFor:["Honeymoon","Bucket-list luxury","Overwater villas"],
    bestTime:"November–April.",
    travelNote:"Usually reached via long-haul flights to Male followed by speedboat or seaplane transfer."
  },

  borabora:{
    label:"Bora Bora",emoji:"🛶",region:"French Polynesia",
    vibe:"Bora Bora is one of the world's most iconic tropical destinations with a blue lagoon, overwater bungalows, and a dramatic volcanic peak rising from the center of the island. It is one of the best pure romance destinations on the planet.",
    sell:"CxC can help compare Bora Bora against the Maldives or Hawaii depending on budget, flight tolerance, and the type of luxury clients want.",
    hotels:[
      {name:"Four Seasons Bora Bora",tier:"Ultra-Luxury",price:"$1,800–$4,500/night",notes:"One of the world's most famous overwater bungalow resorts."},
      {name:"St. Regis Bora Bora",tier:"Ultra-Luxury",price:"$1,700–$4,200/night",notes:"Large villas and strong service in a classic Bora Bora setting."},
      {name:"Conrad Bora Bora Nui",tier:"Luxury",price:"$1,200–$2,800/night",notes:"Beautiful hillside and lagoon views with good activity options."}
    ],
    restaurants:[
      {name:"Bloody Mary's",cuisine:"Seafood / Polynesian",notes:"The island's best-known casual icon."},
      {name:"Resort Fine Dining",cuisine:"International",notes:"Most high-end dining is centered within the major resorts."}
    ],
    activities:[
      {name:"Lagoon Snorkel Tour",price:"$120–$220/pp",notes:"Classic Bora Bora experience with reef, rays, and crystal-clear water."},
      {name:"Mt. Otemanu Viewpoints",price:"Varies",notes:"The volcanic peak creates some of the South Pacific's best scenery."}
    ],
    bestFor:["Honeymoon","Luxury travel","Romance"],
    bestTime:"May–October.",
    travelNote:"Reached via Tahiti with onward regional flight to Bora Bora."
  },

  fiji:{
    label:"Fiji",emoji:"🌺",region:"South Pacific",
    vibe:"Fiji offers warm hospitality, crystal-clear water, private island resorts, and a more relaxed, friendly feel than many other far-flung tropical destinations. It is excellent for both luxury couples and families depending on the island chosen.",
    sell:"CxC can guide clients toward the right island group or private-island resort because Fiji is more spread out and varied than many travelers expect.",
    hotels:[
      {name:"Likuliku Lagoon Resort",tier:"Luxury Adults-Only",price:"$1,000–$2,200/night",notes:"One of Fiji's best-known luxury escapes with overwater bures."},
      {name:"Kokomo Private Island",tier:"Ultra-Luxury",price:"$2,500–$6,000/night",notes:"High-end private-island experience with incredible diving and villas."},
      {name:"Jean-Michel Cousteau Resort",tier:"Luxury Family-Friendly",price:"$800–$1,600/night",notes:"Excellent for families and soft-adventure travel."}
    ],
    restaurants:[
      {name:"Resort Dining",cuisine:"International / Pacific",notes:"Dining is typically centered around the individual resort experience."}
    ],
    activities:[
      {name:"Snorkeling and Diving",price:"$60–$200/pp",notes:"Fiji is one of the top South Pacific destinations for coral reefs and marine life."},
      {name:"Island Hopping",price:"Varies",notes:"Boat access allows travelers to experience different islands and beaches."}
    ],
    bestFor:["Luxury travel","Families","Diving"],
    bestTime:"May–October.",
    travelNote:"Long-haul travel from North America, usually via Los Angeles or other Pacific gateways."
  },

  singapore:{
    label:"Singapore",emoji:"🌃",region:"Asia",
    vibe:"Singapore is polished, efficient, modern, and food-obsessed. It works brilliantly as both a destination and a stopover, blending luxury hotels, skyline views, hawker food, and neighborhoods with distinct cultural identities.",
    sell:"CxC can position Singapore as an easy high-value stopover on the way to Bali, Thailand, Japan, or Australia while still giving clients a complete premium city experience.",
    hotels:[
      {name:"Marina Bay Sands",tier:"Luxury Iconic",price:"$600–$1,400/night",notes:"One of the world's most recognizable hotels with its rooftop infinity pool."},
      {name:"Raffles Singapore",tier:"Ultra-Luxury Historic",price:"$1,000–$2,000/night",notes:"Legendary colonial-era luxury hotel and birthplace of the Singapore Sling."},
      {name:"Capella Singapore",tier:"Luxury Resort",price:"$900–$1,800/night",notes:"A more secluded resort-like option on Sentosa."}
    ],
    restaurants:[
      {name:"Lau Pa Sat",cuisine:"Hawker Food",notes:"Great introduction to Singapore's famous food culture."},
      {name:"Odette",cuisine:"Fine Dining",notes:"One of Asia's most acclaimed restaurants."}
    ],
    activities:[
      {name:"Gardens by the Bay",price:"$20–$40",notes:"One of Singapore's signature futuristic attractions."},
      {name:"Marina Bay Night Views",price:"Free–$30",notes:"Simple but essential skyline experience."}
    ],
    bestFor:["Stopovers","Luxury city trips","Foodies"],
    bestTime:"Year-round.",
    travelNote:"Major global hub and one of the easiest Asian cities for English-speaking travelers."
  },

  phuket:{
    label:"Phuket",emoji:"🌴",region:"Asia",
    vibe:"Phuket offers beach resorts, island-hopping, nightlife, and easy access to some of southern Thailand's most dramatic scenery. It can be high-energy or very relaxed depending on where you stay.",
    sell:"CxC helps travelers avoid the wrong part of Phuket for their style and can pair it with quieter islands or Bangkok for a more balanced Thailand itinerary.",
    hotels:[
      {name:"Amanpuri",tier:"Ultra-Luxury",price:"$1,200–$3,000/night",notes:"Legendary Phuket luxury with private pavilions and a secluded feel."},
      {name:"Rosewood Phuket",tier:"Luxury",price:"$900–$2,000/night",notes:"High-end beachfront resort with polished modern style."},
      {name:"The Nai Harn",tier:"Upscale",price:"$300–$700/night",notes:"Well-loved resort near one of Phuket's prettiest beaches."}
    ],
    restaurants:[
      {name:"Blue Elephant",cuisine:"Thai",notes:"A polished classic for elevated Thai cuisine."},
      {name:"One Chun",cuisine:"Southern Thai",notes:"Popular local-style favorite in Phuket Town."}
    ],
    activities:[
      {name:"Phi Phi Islands Day Trip",price:"$60–$120/pp",notes:"One of the most common and visually spectacular excursions from Phuket."},
      {name:"Old Phuket Town",price:"Free",notes:"Colorful streets, cafés, and a different side of the island beyond the beaches."}
    ],
    bestFor:["Beach vacations","Groups","Thailand add-ons"],
    bestTime:"November–April.",
    travelNote:"Easy domestic and regional air connections make Phuket a strong beach ending for Southeast Asia trips."
  },

  vietnam:{
    label:"Vietnam",emoji:"🛵",region:"Asia",
    vibe:"Vietnam offers incredible value, unforgettable food, dramatic scenery, and a huge range of experiences from Hanoi's old quarter to Ha Long Bay cruises to Hoi An lantern nights and beach resorts in Da Nang. It feels energetic, layered, and deeply rewarding.",
    sell:"CxC can make Vietnam feel far more approachable by structuring flights, internal transfers, and a realistic route that balances cities, scenery, and beach time.",
    hotels:[
      {name:"Capella Hanoi",tier:"Luxury",price:"$500–$1,200/night",notes:"One of the most polished luxury stays in the capital."},
      {name:"Four Seasons The Nam Hai",tier:"Ultra-Luxury",price:"$700–$1,800/night",notes:"One of Southeast Asia's best beachfront resorts near Hoi An."},
      {name:"Park Hyatt Saigon",tier:"Luxury Historic",price:"$350–$800/night",notes:"Classic luxury base in Ho Chi Minh City."}
    ],
    restaurants:[
      {name:"Morning Glory",cuisine:"Vietnamese",notes:"Hoi An favorite for regional specialties."},
      {name:"Anan Saigon",cuisine:"Modern Vietnamese",notes:"One of the country's most talked-about restaurants."}
    ],
    activities:[
      {name:"Ha Long Bay Cruise",price:"$150–$400/pp",notes:"Classic scenic overnight or day cruise among limestone karsts."},
      {name:"Hoi An Old Town",price:"Free–$10",notes:"One of Southeast Asia's most charming historic districts."}
    ],
    bestFor:["Foodies","Adventure travelers","Value-conscious luxury"],
    bestTime:"Varies by region, but February–April is a strong general window.",
    travelNote:"Best planned as a multi-stop itinerary because the country stretches north to south with different climates."
  },

  seychelles:{
    label:"Seychelles",emoji:"🌴",region:"Indian Ocean",
    vibe:"Seychelles is pure barefoot luxury — giant granite boulders, calm turquoise water, and beaches that look almost unreal in person. It feels more remote, more polished, and more private than most tropical destinations, which is exactly why it stands out for high-end travelers.",
    sell:"CxC can match clients to the right island and resort combo, because the Seychelles works best when flights, ferries, and hotel pairings are planned together instead of booked piece by piece.",
    hotels:[
      {name:"Four Seasons Resort Seychelles",tier:"Ultra-Luxury",price:"$1,200–$3,000/night",notes:"Hillside villas with private plunge pools and dramatic Indian Ocean views."},
      {name:"North Island",tier:"Ultra-Luxury Private Island",price:"$5,000+/night",notes:"One of the most exclusive island resorts in the world and a true bucket-list honeymoon stay."},
      {name:"Constance Ephelia",tier:"Luxury Resort",price:"$500–$1,100/night",notes:"Large resort with multiple beaches, strong value for the destination, and broad appeal."}
    ],
    restaurants:[
      {name:"Del Place",cuisine:"Creole Seafood",notes:"Beautiful waterside restaurant known for fresh local seafood and sunset views."},
      {name:"Cyann",cuisine:"Fine Dining",notes:"Upscale island dining with polished service and strong seafood-focused menus."}
    ],
    activities:[
      {name:"Anse Source d'Argent",price:"Free–$15",notes:"One of the world's most photographed beaches with giant granite boulders and shallow clear water."},
      {name:"Island Hopping by Boat",price:"$120–$250/pp",notes:"A classic Seychelles experience that lets travelers combine beaches, snorkeling, and multiple islands."}
    ],
    bestFor:["Honeymoon","Luxury travel","Beach lovers"],
    bestTime:"April–May and October–November.",
    travelNote:"Usually reached through international hubs in the Middle East or Europe, with inter-island ferries or short flights often required."
  },

  tahiti:{
    label:"Tahiti & Moorea",emoji:"🌺",region:"South Pacific",
    vibe:"Tahiti and Moorea offer lush volcanic scenery, warm lagoons, and a French Polynesian atmosphere that feels both tropical and refined. Moorea in particular is stunning for overwater bungalows, calm water, and a slower pace than many better-known honeymoon destinations.",
    sell:"CxC can structure Tahiti and Moorea together the right way, helping clients avoid awkward transfers and match the right island with the right style of resort stay.",
    hotels:[
      {name:"Hilton Moorea Lagoon Resort & Spa",tier:"Luxury",price:"$600–$1,200/night",notes:"Popular overwater bungalow option with easy access and beautiful lagoon views."},
      {name:"Sofitel Kia Ora Moorea Beach Resort",tier:"Luxury",price:"$550–$1,100/night",notes:"Elegant beachfront and overwater stay with great views across the lagoon."},
      {name:"InterContinental Tahiti Resort & Spa",tier:"Upscale Resort",price:"$350–$700/night",notes:"Convenient first or last night stay near the international airport with lagoon views."}
    ],
    restaurants:[
      {name:"Le Mayflower",cuisine:"French Polynesian",notes:"Polished resort dining with strong seafood and French influence."},
      {name:"Snack Mahana",cuisine:"Local Seafood",notes:"Casual favorite known for poisson cru and a relaxed island setting."}
    ],
    activities:[
      {name:"Lagoon Excursion",price:"$100–$180/pp",notes:"Classic full-day outing with snorkeling, rays, and dramatic mountain views from the water."},
      {name:"Belvedere Lookout",price:"Free",notes:"One of Moorea's best panoramic viewpoints and easy to build into a scenic island day."}
    ],
    bestFor:["Couples","Honeymoon","Scenic island escapes"],
    bestTime:"May–October.",
    travelNote:"International arrivals are typically through Tahiti, with Moorea reached by short ferry or quick regional flight."
  },

  venice:{
    label:"Venice",emoji:"🛶",region:"Europe",
    vibe:"Venice feels unlike anywhere else in the world — canals instead of roads, grand palaces rising from the water, and a dreamlike atmosphere that gets even better early in the morning or after sunset. It is romantic, visually unforgettable, and ideal for a slower style of travel.",
    sell:"CxC helps clients stay in the right part of Venice and avoid wasting time on poor logistics, especially when combining the city with the rest of Italy.",
    hotels:[
      {name:"Aman Venice",tier:"Ultra-Luxury",price:"$1,400–$3,500/night",notes:"One of Venice's most exclusive hotels inside a historic Grand Canal palace."},
      {name:"Gritti Palace",tier:"Luxury Iconic",price:"$1,000–$2,500/night",notes:"Classic Venetian luxury with one of the most recognizable waterfront settings in the city."},
      {name:"Ca' Sagredo Hotel",tier:"Luxury Historic",price:"$450–$900/night",notes:"A great option for travelers wanting palace-style character with strong Grand Canal atmosphere."}
    ],
    restaurants:[
      {name:"Osteria alle Testiere",cuisine:"Seafood",notes:"Small and highly respected seafood restaurant that rewards booking ahead."},
      {name:"Ristorante Quadri",cuisine:"Fine Dining",notes:"Elegant Michelin-starred dining overlooking Piazza San Marco."}
    ],
    activities:[
      {name:"Grand Canal Vaporetto Ride",price:"$10–$20",notes:"The best first introduction to Venice and much more useful than an expensive gondola for orientation."},
      {name:"St. Mark's Basilica & Doge's Palace",price:"$25–$50",notes:"The city's essential historic core and a must for first-time visitors."}
    ],
    bestFor:["Couples","Honeymoon","Italy itineraries"],
    bestTime:"April–June and September–October.",
    travelNote:"Best reached by rail or regional flight, and easiest when paired with Florence, Milan, or the Dolomites."
  },

  milan:{
    label:"Milan",emoji:"👜",region:"Europe",
    vibe:"Milan is Italy's polished fashion and business capital, but it is also a great city for food, design, and luxury hotels. It works especially well as a gateway to Lake Como, northern Italy, or a shorter upscale city stay.",
    sell:"CxC can turn Milan from a simple arrival city into a strong luxury stop with dining, shopping, and easy onward access to northern Italy." ,
    hotels:[
      {name:"Bulgari Hotel Milano",tier:"Ultra-Luxury",price:"$1,000–$2,000/night",notes:"One of Milan's most refined luxury stays with a quiet garden setting."},
      {name:"Park Hyatt Milan",tier:"Luxury",price:"$700–$1,400/night",notes:"Excellent central location steps from the Duomo and Galleria."},
      {name:"Portrait Milano",tier:"Luxury",price:"$800–$1,600/night",notes:"Stylish newer luxury property with strong fashion-world appeal."}
    ],
    restaurants:[
      {name:"Cracco",cuisine:"Modern Italian",notes:"Flagship fine-dining option in a landmark central setting."},
      {name:"Luini",cuisine:"Italian Street Food",notes:"Famous quick stop for panzerotti and a true Milan classic."}
    ],
    activities:[
      {name:"Duomo Rooftop",price:"$20–$35",notes:"One of the best city viewpoints in Italy with dramatic cathedral detail."},
      {name:"Galleria Vittorio Emanuele II",price:"Free",notes:"Historic arcade ideal for shopping, photos, and soaking in central Milan."}
    ],
    bestFor:["Luxury travel","Shopping","Northern Italy itineraries"],
    bestTime:"April–June and September–October.",
    travelNote:"Excellent international gateway and one of the easiest launch points for Lake Como and northern Italy rail routes."
  },

  lakecomo:{
    label:"Lake Como",emoji:"🚤",region:"Europe",
    vibe:"Lake Como is all about polished lakeside luxury, dramatic mountain scenery, elegant villas, and timeless Italian glamour. It feels peaceful, upscale, and especially strong for couples and special occasion trips.",
    sell:"CxC can help clients choose the right base town and hotel, which matters a lot here because ferry access, views, and atmosphere vary meaningfully from one part of the lake to another.",
    hotels:[
      {name:"Grand Hotel Tremezzo",tier:"Luxury Iconic",price:"$1,000–$2,500/night",notes:"One of the lake's most famous hotels with a classic glamorous feel and standout floating pool."},
      {name:"Passalacqua",tier:"Ultra-Luxury",price:"$1,800–$4,000/night",notes:"Exceptionally high-end villa hotel and one of the top luxury stays in Europe."},
      {name:"Villa d'Este",tier:"Ultra-Luxury Historic",price:"$1,200–$3,000/night",notes:"Legendary lakeside property with formal gardens and classic old-world prestige."}
    ],
    restaurants:[
      {name:"La Terrazza Gualtiero Marchesi",cuisine:"Fine Dining",notes:"Elegant special occasion dining with polished lakefront atmosphere."},
      {name:"Mistral",cuisine:"Italian Fine Dining",notes:"Refined Michelin-starred option with strong views and a romantic feel."}
    ],
    activities:[
      {name:"Private Boat on Lake Como",price:"$200–$600/pp depending on group",notes:"The best way to experience the villas, shoreline towns, and scenery."},
      {name:"Bellagio & Varenna Ferry Day",price:"$20–$40",notes:"Easy way to experience the lake's most famous towns in one day."}
    ],
    bestFor:["Couples","Luxury travel","Honeymoon"],
    bestTime:"May–September.",
    travelNote:"Usually reached from Milan with private transfer or rail plus short onward transit."
  },

  budapest:{
    label:"Budapest",emoji:"🌉",region:"Europe",
    vibe:"Budapest blends grand architecture, thermal baths, riverside views, and strong nightlife into one of Europe's most rewarding city breaks. It feels elegant but still offers better value than many Western European capitals.",
    sell:"CxC can build Budapest as a standout city stay or pair it with Vienna and Prague for a polished multi-city Central Europe trip.",
    hotels:[
      {name:"Four Seasons Gresham Palace",tier:"Luxury",price:"$600–$1,200/night",notes:"Iconic luxury hotel on the Danube with one of the city's best locations."},
      {name:"Matild Palace",tier:"Luxury",price:"$450–$900/night",notes:"Beautiful restored palace stay with a strong design feel."},
      {name:"Aria Hotel Budapest",tier:"Boutique Luxury",price:"$350–$700/night",notes:"Music-themed luxury property with rooftop views and strong value for the standard."}
    ],
    restaurants:[
      {name:"Stand",cuisine:"Modern Hungarian",notes:"One of Budapest's most acclaimed fine-dining options."},
      {name:"Mazel Tov",cuisine:"Mediterranean",notes:"Lively courtyard favorite in the Jewish Quarter."}
    ],
    activities:[
      {name:"Széchenyi Thermal Baths",price:"$25–$40",notes:"One of the city's signature experiences and a must for first-time visitors."},
      {name:"Danube River Cruise",price:"$20–$50",notes:"A great way to see Budapest's bridges and illuminated skyline."}
    ],
    bestFor:["Couples","Value-conscious Europe trips","City breaks"],
    bestTime:"April–June and September–October.",
    travelNote:"Budapest works especially well as part of a multi-city Central Europe rail itinerary."
  },

  munich:{
    label:"Munich",emoji:"🍺",region:"Europe",
    vibe:"Munich combines Bavarian tradition, polished city design, beer halls, and easy access to castles and the Alps. It works well for both cultural city travelers and those wanting a gateway into southern Germany or Austria.",
    sell:"CxC can position Munich as more than just Oktoberfest by pairing it with day trips, luxury hotels, and scenic onward routes into Bavaria or the Alps.",
    hotels:[
      {name:"Hotel Bayerischer Hof",tier:"Luxury Historic",price:"$500–$1,100/night",notes:"One of Munich's classic grand hotels with long-standing prestige."},
      {name:"Mandarin Oriental Munich",tier:"Luxury",price:"$700–$1,400/night",notes:"Elegant smaller luxury option in the heart of the city."},
      {name:"Sofitel Munich Bayerpost",tier:"Upscale",price:"$300–$600/night",notes:"Convenient and polished option near major rail connections."}
    ],
    restaurants:[
      {name:"Tantris",cuisine:"Fine Dining",notes:"Legendary Munich restaurant known for high-end tasting menus."},
      {name:"Hofbräuhaus",cuisine:"Bavarian",notes:"Touristy but iconic and still worth experiencing once."}
    ],
    activities:[
      {name:"Marienplatz & Old Town",price:"Free",notes:"The easiest way to take in Munich's historic center and atmosphere."},
      {name:"Neuschwanstein Day Trip",price:"$40–$100",notes:"A classic excursion to one of Germany's most famous castles."}
    ],
    bestFor:["Groups","Beer + culture trips","Germany itineraries"],
    bestTime:"May–October, with late September for Oktoberfest.",
    travelNote:"Excellent gateway for Bavaria, Austria, and alpine add-ons by train or private transfer."
  },

  vancouver:{
    label:"Vancouver",emoji:"🌲",region:"Canada",
    vibe:"Vancouver offers a rare mix of urban polish, water views, mountains, and easy outdoor access. It feels cleaner, calmer, and more scenic than most major North American cities while still delivering strong food and hotel options.",
    sell:"CxC can use Vancouver as either a premium city stay or the perfect gateway to Whistler, Victoria, and Alaska cruise departures.",
    hotels:[
      {name:"Fairmont Pacific Rim",tier:"Luxury",price:"$500–$1,000/night",notes:"One of Vancouver's best luxury stays with a prime waterfront location."},
      {name:"Rosewood Hotel Georgia",tier:"Luxury Historic",price:"$450–$900/night",notes:"Classic downtown luxury with strong service and style."},
      {name:"JW Marriott Parq Vancouver",tier:"Upscale",price:"$300–$600/night",notes:"Modern full-service option with easy downtown access."}
    ],
    restaurants:[
      {name:"Miku",cuisine:"Japanese",notes:"Best known for upscale sushi and waterfront dining."},
      {name:"Published on Main",cuisine:"Modern Canadian",notes:"Creative dining option that reflects the city's current food scene."}
    ],
    activities:[
      {name:"Stanley Park Seawall",price:"Free",notes:"One of the city's signature experiences and an easy first-day activity."},
      {name:"Capilano Suspension Bridge",price:"$50–$80",notes:"Popular scenic attraction combining forest views and suspension walkways."}
    ],
    bestFor:["City + nature trips","Cruise add-ons","Couples"],
    bestTime:"May–September.",
    travelNote:"A strong international gateway and an excellent pairing with Whistler or Alaska cruises."
  },

  banff:{
    label:"Banff",emoji:"🏔️",region:"Canada",
    vibe:"Banff is one of North America's most visually spectacular destinations, with turquoise lakes, mountain peaks, luxury lodges, and easy access to the Canadian Rockies. It feels cinematic in both summer and winter.",
    sell:"CxC can build Banff trips around scenic drives, luxury stays, and lake experiences while helping clients avoid wasting time on poor routing or sold-out high-demand activities.",
    hotels:[
      {name:"Fairmont Banff Springs",tier:"Luxury Iconic",price:"$500–$1,100/night",notes:"Castle-like landmark resort and the best-known hotel in Banff."},
      {name:"Rimrock Resort Hotel",tier:"Luxury",price:"$350–$700/night",notes:"Scenic mountainside hotel with a more polished, quieter feel."},
      {name:"Fairmont Chateau Lake Louise",tier:"Luxury Iconic",price:"$700–$1,500/night",notes:"Bucket-list stay right on one of the most famous lakes in the world."}
    ],
    restaurants:[
      {name:"Eden",cuisine:"Fine Dining",notes:"Refined mountain dining experience ideal for a special evening."},
      {name:"Sky Bistro",cuisine:"Canadian",notes:"A memorable dining option paired with panoramic mountain views."}
    ],
    activities:[
      {name:"Lake Louise & Moraine Lake",price:"Free–$50 transit",notes:"The defining scenic experiences of the Banff area and absolute must-sees."},
      {name:"Banff Gondola",price:"$50–$80",notes:"Easy mountain-top views and a good year-round anchor activity."}
    ],
    bestFor:["Scenic travel","Couples","Adventure + luxury"],
    bestTime:"June–September for lakes and hiking, December–March for winter scenery and ski.",
    travelNote:"Usually reached via Calgary with a scenic transfer into the Rockies."
  },

  quebeccity:{
    label:"Quebec City",emoji:"❄️",region:"Canada",
    vibe:"Quebec City feels more European than almost anywhere else in North America, with cobblestone streets, fortified walls, French-speaking culture, and a charming old town that is especially strong in winter and holiday season.",
    sell:"CxC can position Quebec City as a romantic city break, a winter holiday escape, or part of a longer eastern Canada itinerary.",
    hotels:[
      {name:"Fairmont Le Château Frontenac",tier:"Luxury Iconic",price:"$400–$900/night",notes:"The signature hotel of Quebec City and one of Canada's most recognizable properties."},
      {name:"Auberge Saint-Antoine",tier:"Boutique Luxury",price:"$300–$650/night",notes:"Beautiful historic boutique stay in Old Quebec with excellent service."},
      {name:"Le Capitole Hotel",tier:"Upscale",price:"$250–$500/night",notes:"Strong central option with modern rooms and easy walkability."}
    ],
    restaurants:[
      {name:"Chez Muffy",cuisine:"French-Canadian",notes:"Polished restaurant with a warm historic setting."},
      {name:"Le Continental",cuisine:"Classic French",notes:"Old-school special occasion dining with tableside preparation."}
    ],
    activities:[
      {name:"Old Quebec Walk",price:"Free",notes:"The best way to take in the city's atmosphere, architecture, and charm."},
      {name:"Montmorency Falls",price:"$10–$25",notes:"Popular nearby natural attraction that works well as a short excursion."}
    ],
    bestFor:["Romantic trips","Winter getaways","Culture lovers"],
    bestTime:"June–October and December for holiday atmosphere.",
    travelNote:"Easy to pair with Montreal or as a standalone long weekend from the Northeast."
  },

  alaska:{
    label:"Alaska",emoji:"🧊",region:"USA / Adventure",
    vibe:"Alaska is about glaciers, wildlife, dramatic fjords, and huge landscapes that feel genuinely untamed. It works as a cruise, a rail-and-lodge trip, or a more active land adventure depending on the traveler.",
    sell:"CxC can guide clients toward the right style of Alaska trip, because cruise itineraries, lodge stays, and land packages deliver very different experiences even within the same destination.",
    hotels:[
      {name:"Alyeska Resort",tier:"Upscale Resort",price:"$300–$700/night",notes:"Popular luxury-leaning base south of Anchorage with strong scenery and adventure access."},
      {name:"Hotel Captain Cook",tier:"Luxury",price:"$250–$500/night",notes:"Classic Anchorage stay often used as a polished starting or ending point."},
      {name:"Tutka Bay Lodge",tier:"Luxury Wilderness Lodge",price:"$1,000+/night",notes:"Remote high-end lodge experience for travelers seeking a more immersive Alaska trip."}
    ],
    restaurants:[
      {name:"Crow's Nest",cuisine:"Fine Dining",notes:"Anchorage favorite with skyline and mountain views."},
      {name:"The Bake Shop",cuisine:"Casual Alaskan",notes:"Well-known stop near Seward for hearty comfort food."}
    ],
    activities:[
      {name:"Glacier Cruise",price:"$120–$250/pp",notes:"One of the best ways to experience Alaska's fjords, ice, and wildlife."},
      {name:"Denali Flightseeing",price:"$250–$500/pp",notes:"Bucket-list scenic flight opportunity if weather cooperates."}
    ],
    bestFor:["Adventure travel","Nature lovers","Bucket-list trips"],
    bestTime:"June–August.",
    travelNote:"Most visitors route through Anchorage, Juneau, or cruise gateways like Seattle or Vancouver."
  },

  yosemite:{
    label:"Yosemite",emoji:"🌲",region:"California",
    vibe:"Yosemite is one of America's iconic national parks, with granite cliffs, waterfalls, giant sequoias, and a scale that feels almost impossible in person. It works for both scenic luxury and active outdoor travel.",
    sell:"CxC can help structure Yosemite with the right lodging and pacing, especially because in-park stays and peak season access can become difficult without planning well ahead.",
    hotels:[
      {name:"The Ahwahnee",tier:"Historic Luxury",price:"$500–$1,100/night",notes:"The park's most famous lodge and the best-known in-park luxury stay."},
      {name:"Tenaya at Yosemite",tier:"Upscale Resort",price:"$250–$500/night",notes:"Reliable resort option outside the park with broad family and couple appeal."},
      {name:"Rush Creek Lodge",tier:"Upscale",price:"$300–$650/night",notes:"Strong base near the park with a more modern lodge feel."}
    ],
    restaurants:[
      {name:"The Ahwahnee Dining Room",cuisine:"American",notes:"Classic setting and one of the most recognizable dining rooms in the national park system."},
      {name:"Mountain Room",cuisine:"American",notes:"Good option with views near Yosemite Valley."}
    ],
    activities:[
      {name:"Tunnel View",price:"Free",notes:"One of the most famous viewpoints in the US and an easy must-do stop."},
      {name:"Yosemite Valley Day",price:"$35/car",notes:"The core park experience with waterfalls, valley views, and iconic landmarks."}
    ],
    bestFor:["Nature lovers","Families","National park trips"],
    bestTime:"May–October.",
    travelNote:"Often paired with San Francisco, Napa, or a California road trip."
  },

  zion:{
    label:"Zion National Park",emoji:"🧡",region:"Southwest USA",
    vibe:"Zion delivers massive red canyon walls, dramatic hikes, and one of the most visually striking desert landscapes in the US. It works especially well for active travelers and Southwest road trips.",
    sell:"CxC can position Zion as the outdoor centerpiece of a bigger Southwest itinerary with proper pacing and strong nearby lodging instead of a rushed one-night stop.",
    hotels:[
      {name:"Amangiri",tier:"Ultra-Luxury",price:"$3,000+/night",notes:"One of the most exclusive desert resorts in the world, often paired with Zion and southern Utah."},
      {name:"Cliffrose Springdale",tier:"Upscale",price:"$250–$500/night",notes:"Great location near the park entrance with resort-style comforts."},
      {name:"Cable Mountain Lodge",tier:"Mid-Range",price:"$220–$450/night",notes:"Excellent convenience for park-focused travelers who want walkable access."}
    ],
    restaurants:[
      {name:"King's Landing Bistro",cuisine:"American",notes:"Reliable Springdale dinner option after a day in the park."},
      {name:"Oscar's Cafe",cuisine:"Casual",notes:"Popular spot for relaxed meals and strong portions."}
    ],
    activities:[
      {name:"Zion Canyon Shuttle Day",price:"$35/car park entry",notes:"The standard way to experience the park's main scenic corridor."},
      {name:"The Narrows or Angels Landing",price:"Permit/gear varies",notes:"Two of Zion's best-known adventure hikes, with Angels Landing requiring advance permit planning."}
    ],
    bestFor:["Adventure travelers","Hikers","Southwest road trips"],
    bestTime:"March–May and September–November.",
    travelNote:"Often paired with Las Vegas, Bryce Canyon, or Scottsdale-style Southwest itineraries."
  },

  santabarbara:{
    label:"Santa Barbara",emoji:"🌴",region:"California",
    vibe:"Santa Barbara blends wine-country sophistication, ocean views, Spanish-style architecture, and an easy California pace. It feels upscale without trying too hard and works very well for romantic weekends and food-and-wine trips.",
    sell:"CxC can use Santa Barbara as either a standalone long weekend or part of a larger Southern California coastal itinerary with the right hotel and wine-country add-ons.",
    hotels:[
      {name:"Rosewood Miramar Beach",tier:"Ultra-Luxury",price:"$1,200–$2,800/night",notes:"Top luxury option directly on the sand in nearby Montecito."},
      {name:"Hotel Californian",tier:"Luxury",price:"$500–$1,000/night",notes:"Stylish downtown luxury near the waterfront and Funk Zone."},
      {name:"El Encanto",tier:"Luxury Boutique",price:"$700–$1,500/night",notes:"Romantic hillside property with gardens and city/ocean views."}
    ],
    restaurants:[
      {name:"Bouchon",cuisine:"California / French",notes:"Longtime favorite for polished but relaxed dining."},
      {name:"The Lark",cuisine:"American",notes:"Popular Funk Zone restaurant ideal for a lively evening out."}
    ],
    activities:[
      {name:"Santa Ynez Wine Tasting",price:"$50–$150/pp",notes:"Easy wine-country add-on that gives the trip much more range."},
      {name:"State Street + Waterfront",price:"Free",notes:"A relaxed way to enjoy the city's main shopping and beach areas."}
    ],
    bestFor:["Couples","Wine lovers","California coastal trips"],
    bestTime:"March–June and September–November.",
    travelNote:"Easy pairing with Los Angeles, the Central Coast, or a longer California coastal route."
  },

  seattle:{
    label:"Seattle",emoji:"☕",region:"Pacific Northwest",
    vibe:"Seattle combines waterfront scenery, coffee culture, strong food, and easy mountain and island access. It feels urban but outdoorsy at the same time, which gives it a very different personality than most major US cities.",
    sell:"CxC can build Seattle as a city break, a cruise add-on, or the gateway to a broader Pacific Northwest trip with ferries, islands, and national parks.",
    hotels:[
      {name:"Four Seasons Seattle",tier:"Luxury",price:"$500–$1,000/night",notes:"Top luxury choice with prime downtown and waterfront access."},
      {name:"Thompson Seattle",tier:"Luxury Boutique",price:"$350–$700/night",notes:"Stylish stay near Pike Place with strong city and water views."},
      {name:"Fairmont Olympic Hotel",tier:"Historic Luxury",price:"$300–$650/night",notes:"Classic Seattle grand hotel with a timeless feel."}
    ],
    restaurants:[
      {name:"Canlis",cuisine:"Fine Dining",notes:"Seattle's iconic high-end restaurant with long-standing prestige."},
      {name:"The Pink Door",cuisine:"Italian",notes:"Beloved Pike Place-adjacent spot with strong atmosphere."}
    ],
    activities:[
      {name:"Pike Place Market",price:"Free",notes:"The essential first stop for food, atmosphere, and city energy."},
      {name:"Bainbridge Ferry",price:"$10–$20",notes:"Easy scenic outing that shows off Seattle's waterfront and mountain setting."}
    ],
    bestFor:["City breaks","Cruise add-ons","Food + scenery trips"],
    bestTime:"May–September.",
    travelNote:"Strong air access and a common gateway for Alaska cruise departures."
  },

  sanfrancisco:{
    label:"San Francisco",emoji:"🌉",region:"California",
    vibe:"San Francisco delivers iconic scenery, dense neighborhoods, major food appeal, and a sense of personality that still feels distinct in the US. It works well as both a cultural city trip and a launch point for Napa, Carmel, or Yosemite.",
    sell:"CxC can use San Francisco as an anchor for a broader Northern California itinerary rather than just a stand-alone hotel booking.",
    hotels:[
      {name:"The St. Regis San Francisco",tier:"Luxury",price:"$500–$1,100/night",notes:"Polished luxury option close to downtown museums and dining."},
      {name:"Fairmont San Francisco",tier:"Historic Luxury",price:"$400–$900/night",notes:"Classic Nob Hill stay with strong city views and old-school presence."},
      {name:"Hotel Nikko",tier:"Upscale",price:"$250–$500/night",notes:"Reliable modern option with strong location value."}
    ],
    restaurants:[
      {name:"Atelier Crenn",cuisine:"Fine Dining",notes:"One of California's most acclaimed tasting menu experiences."},
      {name:"Swan Oyster Depot",cuisine:"Seafood",notes:"Legendary casual seafood stop worth the wait."}
    ],
    activities:[
      {name:"Golden Gate + Sausalito Day",price:"Free–$40",notes:"Classic San Francisco experience with easy photo and ferry opportunities."},
      {name:"Alcatraz",price:"$40–$60",notes:"Popular must-book-in-advance sight for first-time visitors."}
    ],
    bestFor:["City breaks","Foodies","California itineraries"],
    bestTime:"April–June and September–October.",
    travelNote:"Excellent pairing with Napa, Carmel, Yosemite, or Highway 1 trips."
  },

  losangeles:{
    label:"Los Angeles",emoji:"🎬",region:"California",
    vibe:"Los Angeles is sprawling, sunny, and full of distinct neighborhoods — beach cities, Hollywood, Beverly Hills, arts districts, and great dining across the city. It works best when the trip is structured intentionally rather than treated like one compact downtown destination.",
    sell:"CxC helps clients choose the right area to stay, which matters enormously in LA because the wrong hotel location can waste hours in transit.",
    hotels:[
      {name:"Beverly Hills Hotel",tier:"Luxury Iconic",price:"$1,000–$2,500/night",notes:"Classic Hollywood luxury and one of LA's most famous addresses."},
      {name:"Pendry West Hollywood",tier:"Luxury",price:"$500–$1,000/night",notes:"Stylish modern option with strong nightlife and dining access."},
      {name:"Shutters on the Beach",tier:"Luxury Beachfront",price:"$900–$1,800/night",notes:"A top Santa Monica choice for coastal luxury."}
    ],
    restaurants:[
      {name:"Bestia",cuisine:"Italian",notes:"One of LA's best-known reservation-worthy restaurants."},
      {name:"Gjelina",cuisine:"California",notes:"Venice staple that works well for stylish brunch or dinner."}
    ],
    activities:[
      {name:"Santa Monica + Venice",price:"Free",notes:"Classic coastal LA day with beach, shopping, and people-watching."},
      {name:"Getty Center",price:"Free parking extra",notes:"Great art and one of the city's best scenic cultural stops."}
    ],
    bestFor:["Luxury travel","Families","California combo trips"],
    bestTime:"March–June and September–November.",
    travelNote:"Choosing the right neighborhood is critical because LA travel times can be substantial."
  },

  washingtondc:{
    label:"Washington, DC",emoji:"🏛️",region:"Mid-Atlantic USA",
    vibe:"Washington, DC offers monuments, museums, walkable neighborhoods, and a stronger food scene than many travelers expect. It works well for both quick cultural getaways and more polished city weekends.",
    sell:"CxC can make DC feel less like a school trip and more like a real city stay by building around the right neighborhoods, dining, and seasonal timing.",
    hotels:[
      {name:"The Jefferson",tier:"Luxury Boutique",price:"$500–$1,000/night",notes:"One of the city's most refined luxury stays with a quiet polished feel."},
      {name:"Rosewood Washington, DC",tier:"Luxury",price:"$500–$1,100/night",notes:"Georgetown-based option with strong style and location."},
      {name:"Riggs Washington DC",tier:"Upscale",price:"$300–$650/night",notes:"Stylish historic bank conversion with broad appeal."}
    ],
    restaurants:[
      {name:"Rose's Luxury",cuisine:"American",notes:"One of the city's signature reservation-worthy dining experiences."},
      {name:"Old Ebbitt Grill",cuisine:"American Seafood",notes:"Classic DC institution and a reliable stop near the Mall."}
    ],
    activities:[
      {name:"National Mall Museums",price:"Free",notes:"The biggest cultural advantage of DC and easy to build into multiple days."},
      {name:"Georgetown Walk",price:"Free",notes:"Great neighborhood for dining, shopping, and a less formal side of the city."}
    ],
    bestFor:["Culture trips","Long weekends","History lovers"],
    bestTime:"March–May and September–November.",
    travelNote:"Very easy East Coast access by air or rail and especially good for short premium city breaks."
  },

  boston:{
    label:"Boston",emoji:"⚓",region:"Northeast USA",
    vibe:"Boston combines walkable history, polished neighborhoods, strong sports culture, and an excellent dining scene. It works especially well as a smart long weekend destination with minimal wasted time getting around.",
    sell:"CxC can build Boston around food, neighborhoods, Fenway, and seasonal New England add-ons rather than treating it like a one-note historic city.",
    hotels:[
      {name:"The Newbury Boston",tier:"Luxury",price:"$500–$1,000/night",notes:"One of Boston's most polished luxury options overlooking the Public Garden."},
      {name:"Raffles Boston",tier:"Luxury",price:"$600–$1,200/night",notes:"High-end newer addition with a strong modern luxury feel."},
      {name:"XV Beacon",tier:"Boutique Luxury",price:"$400–$800/night",notes:"Elegant smaller stay with strong location and service."}
    ],
    restaurants:[
      {name:"Neptune Oyster",cuisine:"Seafood",notes:"One of the city's most famous seafood spots and worth the wait."},
      {name:"Mamma Maria",cuisine:"Italian",notes:"Classic North End special occasion restaurant."}
    ],
    activities:[
      {name:"Freedom Trail",price:"Free–$20 guided",notes:"A simple anchor activity for first-time visitors that connects the city's historic core."},
      {name:"Fenway Park",price:"$20–$80",notes:"Strong draw for sports-focused trips and Boston weekend energy."}
    ],
    bestFor:["Long weekends","History lovers","Sports trips"],
    bestTime:"May–October.",
    travelNote:"Easy to pair with Cape Cod, Newport, or other New England add-ons."
  },

  newportri:{
    label:"Newport, Rhode Island",emoji:"⛵",region:"New England",
    vibe:"Newport blends Gilded Age mansions, sailboat-filled harbors, coastal elegance, and one of the strongest summer atmospheres in the Northeast. It works especially well for romantic weekends and upscale East Coast escapes.",
    sell:"CxC can position Newport as a polished coastal getaway with the right mix of waterfront hotel, dining, and nearby New England charm.",
    hotels:[
      {name:"The Chanler at Cliff Walk",tier:"Luxury Boutique",price:"$700–$1,500/night",notes:"One of Newport's most romantic and exclusive stays directly on the Cliff Walk."},
      {name:"Castle Hill Inn",tier:"Luxury",price:"$900–$2,000/night",notes:"Classic waterfront luxury with a true New England feel."},
      {name:"Hotel Viking",tier:"Upscale Historic",price:"$300–$650/night",notes:"Reliable central option with strong walkability."}
    ],
    restaurants:[
      {name:"The Mooring",cuisine:"Seafood",notes:"Classic harbor dining and a Newport staple."},
      {name:"White Horse Tavern",cuisine:"American",notes:"Historic and atmospheric restaurant with major character."}
    ],
    activities:[
      {name:"Cliff Walk",price:"Free",notes:"A signature Newport experience with mansions on one side and ocean views on the other."},
      {name:"Mansion Tour",price:"$20–$40",notes:"The Breakers and other estates are essential to understanding the destination."}
    ],
    bestFor:["Couples","Summer weekends","Coastal luxury"],
    bestTime:"May–October.",
    travelNote:"Works best as a drive trip or an add-on from Boston, Providence, or other New England stops."
  },

  aspen:{
    label:"Aspen",emoji:"🏔️",region:"Mountain USA",
    vibe:"Aspen combines true luxury, serious ski access, strong dining, and a mountain town atmosphere that still feels exclusive and polished. It is one of the best high-end winter destinations in North America and still works beautifully in summer.",
    sell:"CxC can build Aspen around ski, food, summer festivals, or a premium long weekend and help clients understand the big differences between town stays and Snowmass-style lodging.",
    hotels:[
      {name:"The Little Nell",tier:"Ultra-Luxury",price:"$1,200–$4,000/night",notes:"Aspen's flagship luxury hotel and the only ski-in/ski-out stay at the base of Ajax."},
      {name:"Hotel Jerome",tier:"Luxury Historic",price:"$800–$2,500/night",notes:"One of the most iconic mountain hotels in the country."},
      {name:"W Aspen",tier:"Luxury",price:"$600–$1,400/night",notes:"Lively newer luxury option with strong location and rooftop scene."}
    ],
    restaurants:[
      {name:"Matsuhisa Aspen",cuisine:"Japanese",notes:"A signature upscale dining option in town."},
      {name:"Cache Cache",cuisine:"French Bistro",notes:"Longtime Aspen favorite for polished mountain dining."}
    ],
    activities:[
      {name:"Aspen Mountain Ski Day",price:"$200–$300/day",notes:"The core winter experience for many travelers and groups."},
      {name:"Maroon Bells",price:"$16 shuttle or permit varies",notes:"One of the most beautiful summer and fall scenic experiences in the Rockies."}
    ],
    bestFor:["Luxury winter trips","Skiers","Mountain foodies"],
    bestTime:"December–March for ski, June–September for summer mountain season.",
    travelNote:"Best planned early because peak dates and top lodging book quickly."
  }


}; // ── END KB ──────────────────────────────────────────────────────────────────


// ─── KEYWORD MAPS ───────────────────────────────────────────────────────────

const DEST_KEYS={
  aruba:       ["aruba","eagle beach"],
  cancun:      ["cancun","riviera maya","playa del carmen","tulum","mayan","xcaret","mexico beach"],
  jamaica:     ["jamaica","montego bay","negril","ocho rios","sandals","beaches negril"],
  bahamas:     ["bahamas","nassau","exumas","harbour island","paradise island","atlantis"],
  puntacana:   ["punta cana","puntacana","dominican republic","bavaro","excellence el carmen"],
  stlucia:     ["st lucia","saint lucia","st. lucia","pitons","jade mountain","anse chastanet"],
  turksandcaicos:["turks","turks and caicos","turks & caicos","grace bay","providenciales","provo"],
  lasvegas:    ["las vegas","vegas","the strip","sin city","nevada"],
  orlando:     ["orlando","disney world","walt disney","universal orlando","magic kingdom","epic universe","epcot","florida theme park"],
  miami:       ["miami","south beach","brickell","wynwood","little havana","miami beach"],
  nashville:   ["nashville","tennessee","lower broadway","honky tonk","music city","country music"],
  keys:        ["florida keys","key west","key largo","islamorada","the keys"],
  neworleans:  ["new orleans","nola","bourbon street","mardi gras","french quarter","louisiana"],
  charleston:  ["charleston","south carolina","kiawah","rainbow row"],
  scottsdale:  ["scottsdale","phoenix","arizona","desert golf","camelback","troon north"],
  myrtlebeach: ["myrtle beach","grand strand","myrtle","carolina golf","pawleys"],
  pebblebeach: ["pebble beach","monterey","carmel","spyglass","17 mile"],
  pinehurst:   ["pinehurst","sandhills","north carolina golf"],
  paris:       ["paris","france","eiffel","louvre","versailles"],
  italy:       ["italy","rome","florence","amalfi","positano","tuscany","venice","colosseum","vatican","italian"],
  greece:      ["greece","santorini","mykonos","athens","greek islands","aegean","crete","oia"],
  spain:       ["spain","barcelona","madrid","seville","san sebastian","sagrada familia","spanish"],
  portugal:    ["portugal","lisbon","porto","algarve","douro","portuguese"],
  hawaii:      ["hawaii","maui","oahu","kauai","big island","honolulu","waikiki","haleakala","hana","lahaina"],
  cruises:     ["cruise","cruises","cruise ship","carnival cruise","royal caribbean","disney cruise","norwegian cruise","celebrity cruise","cruise line","alaska cruise","mediterranean cruise","cruise vacation"],
  cabo:        ["cabo","cabo san lucas","los cabos","baja california","baja mexico"],
  puertorico:  ["puerto rico","san juan","old san juan","vieques","culebra","puerto rican"],
  barbados:    ["barbados","bridgetown","platinum coast","oistins","sandy lane"],
  usvi:        ["us virgin islands","usvi","st thomas","st john","st croix","saint thomas","virgin islands"],
  costarica:   ["costa rica","arenal","manuel antonio","monteverde","tamarindo","guanacaste","pura vida"],
  nyc:         ["new york","nyc","new york city","manhattan","brooklyn","times square","central park"],
  napa:        ["napa","napa valley","sonoma","wine country","napa wine"],
  sedona:      ["sedona","red rocks","sedona arizona","boynton canyon","oak creek"],
  colorado:    ["aspen","vail","colorado ski","breckenridge","telluride","snowmass","beaver creek","colorado mountains"],
  savannah:    ["savannah","savannah georgia","forsyth park","tybee island"],
  bandondunes: ["bandon dunes","bandon","oregon golf","pacific dunes","bandon trails","sheep ranch golf","bandon oregon"],
  irelandscotland:["ireland golf","scotland golf","st andrews","st. andrews","old course","royal county down","ballybunion","carnoustie","lahinch","irish golf","scottish golf","links golf"],
  iceland:     ["iceland","reykjavik","northern lights","blue lagoon","aurora borealis","ring road","icelandic"],
  japan:       ["japan","tokyo","kyoto","osaka","hiroshima","mount fuji","shinkansen","japanese vacation"],
  bali:        ["bali","ubud","seminyak","canggu","kuta","nusa penida","balinese","indonesia"],
  croatia:     ["croatia","dubrovnik","split","hvar","dalmatian coast","adriatic","croatian"],
  thailand:    ["thailand","bangkok","chiang mai","phuket","koh samui","phi phi","thai vacation"],
  dubai:       ["dubai","uae","united arab emirates","burj khalifa","palm jumeirah","abu dhabi"],
  morocco:     ["morocco","marrakech","fez","casablanca","sahara desert","moroccan","atlas mountains"],
  peru:        ["peru","machu picchu","cusco","lima peru","sacred valley","inca trail","peruvian"],
  london:      ["london","england","uk travel","british","soho london","mayfair","west end london"],
  amsterdam:   ["amsterdam","netherlands","dutch","holland","van gogh museum","rijksmuseum"]
  ,anguilla:    ["anguilla","shoal bay","cap juluca"],
  antigua:      ["antigua","shirley heights","jumby bay","antigua beaches"],
  bermuda:      ["bermuda","horseshoe bay","hamilton bermuda"],
  curacao:      ["curacao","curaçao","willemstad","klein curacao"],
  caymanislands:["cayman","cayman islands","grand cayman","seven mile beach","stingray city"],
  grenada:      ["grenada","spice isle","grand anse"],
  stbarths:     ["st barts","st. barts","st barth","saint barthelemy","gustavia"],
  saintmartin:  ["st martin","st. martin","st maarten","st. maarten","maho beach","grand case"],
  tulum:        ["tulum","tulum beach","tulum ruins","cenotes tulum"],
  playadelcarmen:["playa del carmen","playa","cozumel ferry","mayakoba"],
  puertovallarta:["puerto vallarta","pv mexico","riviera nayarit","romantic zone"],
  rome:         ["rome","roma","colosseum","trevi fountain","vatican city"],
  florence:     ["florence","firenze","uffizi","piazzale michelangelo","tuscan city"],
  amalficoast:  ["amalfi coast","positano","amalfi","ravello","sorrento coast"],
  barcelona:    ["barcelona","sagrada familia","park guell","barca city"],
  madrid:       ["madrid","prado","retiro park","spain capital"],
  dublin:       ["dublin","guinness","temple bar","ireland capital"],
  edinburgh:    ["edinburgh","edinburgh castle","royal mile","scotland capital"],
  switzerland:  ["switzerland","swiss alps","zermatt","interlaken","st moritz","matterhorn"],
  prague:       ["prague","charles bridge","prague castle","czech republic"],
  vienna:       ["vienna","schonbrunn","austria capital","vienna opera"],
  chicago:      ["chicago","millennium park","mag mile","river cruise chicago"],
  sandiego:     ["san diego","la jolla","coronado","torrey pines","gaslamp"],
  austin:       ["austin","south congress","lake travis","austin texas"],
  parkcity:     ["park city","deer valley","park city ski","utah ski"],
  jacksonhole:  ["jackson hole","grand teton","teton village","wyoming ski"],
  asheville:    ["asheville","biltmore","blue ridge parkway","asheville nc"],
  maldives:     ["maldives","overwater villa","male airport","maldives honeymoon"],
  borabora:     ["bora bora","french polynesia","otemanu","overwater bungalow"],
  fiji:         ["fiji","south pacific","fiji resort","fiji island"],
  singapore:    ["singapore","marina bay sands","raffles singapore","gardens by the bay"],
  phuket:       ["phuket","phuket thailand","phi phi","old phuket town"],
  vietnam:      ["vietnam","ha long bay","hoi an","hanoi","saigon"],

  seychelles:  ["seychelles","anse source d'argent","mahe","praslin"],
  tahiti:      ["tahiti","moorea","french polynesia","papeete"],
  venice:      ["venice","venezia","st marks","grand canal venice"],
  milan:       ["milan","milano","duomo milan","galleria vittorio emanuele"],
  lakecomo:    ["lake como","como","bellagio italy","varenna","menaggio"],
  budapest:    ["budapest","danube budapest","szechenyi baths","hungary capital"],
  munich:      ["munich","muenchen","oktoberfest","marienplatz"],
  vancouver:   ["vancouver","stanley park","british columbia city","capilano"],
  banff:       ["banff","lake louise","moraine lake","canadian rockies"],
  quebeccity:  ["quebec city","old quebec","chateau frontenac","quebec canada"],
  alaska:      ["alaska","denali","anchorage","alaska glacier","inside passage"],
  yosemite:    ["yosemite","half dome","el capitan","yosemite valley"],
  zion:        ["zion","zion national park","angels landing","the narrows"],
  santabarbara:["santa barbara","montecito","santa ynez","funk zone"],
  seattle:     ["seattle","pike place","bainbridge ferry","space needle"],
  sanfrancisco:["san francisco","sf","golden gate","alcatraz","fishermans wharf"],
  losangeles:  ["los angeles","la","santa monica","beverly hills","west hollywood"],
  washingtondc:["washington dc","dc","national mall","georgetown dc","smithsonian"],
  boston:      ["boston","fenway","freedom trail","back bay boston"],
  newportri:   ["newport","newport ri","cliff walk","rhode island coast"],
  aspen:       ["aspen","aspen colorado","maroon bells","ajax mountain"]

};

const CAT_KEYS={
  hotels:      ["hotel","hotels","stay","resort","resorts","where to stay","accommodation","lodge","inn","place to stay","best hotel"],
  restaurants: ["restaurant","restaurants","eat","food","dinner","lunch","dining","where to eat","best food","best restaurant"],
  activities:  ["things to do","activity","activities","tour","tours","excursion","explore","visit","see","attraction","sightseeing","what to do","must see","must do"],
  golf:        ["golf","golfing","course","courses","tee time","round of golf","golf trip","play golf"]
};


// ─── PACKAGES ───────────────────────────────────────────────────────────────

const PACKAGES=[
  {id:"ky-golf",cat:"Golf",name:"Kentucky Golf Trail Experience",meta:"Lexington, KY  ·  3 nights / 2 rounds",
   highlights:["18 holes at The Woodford Club","18 holes at Greenbrier Golf & Country Club","Woodford Reserve Distillery tour","Luxury Lexington lodging"],
   priceLabel:"from $960/pp",teaser:"Two premier Kentucky courses paired with world-class bourbon country."},
  {id:"desert-golf",cat:"Golf",name:"Desert Golf Getaway",meta:"Scottsdale · Las Vegas · St. George  ·  4 days",
   highlights:["5 tiers — value to ultra-luxury","TPC Scottsdale, Shadow Creek, Black Desert & more","Group pricing available","Fully customizable itinerary"],
   priceLabel:"from $428/pp",teaser:"Sun-drenched fairways across Arizona, Nevada & Utah."},
  {id:"pinehurst-golf",cat:"Golf",name:"Pinehurst Golf Pilgrimage",meta:"Pinehurst, NC  ·  3 nights / 3 rounds",
   highlights:["Round on legendary Pinehurst No. 2","Pinehurst No. 4 (2024 US Open host)","Stay at The Carolina Hotel","Short drive from major East Coast cities"],
   priceLabel:"from $750/pp",teaser:"More USGA championships here than anywhere on earth. A true golf pilgrimage."},
  {id:"aruba-ai",cat:"All-Inclusive",name:"Aruba All-Inclusive Escape",meta:"Aruba  ·  5–7 nights",
   highlights:["Riu Palace Antillas or Bucuti & Tara","Adults-only properties available","Hurricane-free year-round","Eagle Beach — one of the world's best"],
   priceLabel:"from $300/night",teaser:"Perfect weather 365 days a year. Outside the hurricane belt entirely."},
  {id:"cancun-ai",cat:"All-Inclusive",name:"Cancun / Riviera Maya",meta:"Mexico  ·  5–7 nights",
   highlights:["Hyatt Ziva, Excellence, Moon Palace & more","Mayan ruins day trips available","Adults-only or family options","Best AI value in the Caribbean"],
   priceLabel:"from $350/night",teaser:"World-class resorts, turquoise water, ancient ruins nearby."},
  {id:"group-nashville",cat:"Group Travel",name:"Nashville Group Getaway",meta:"Nashville, TN  ·  3–4 nights",
   highlights:["Live music on Lower Broadway every night","Thompson Nashville & JW Marriott options","Whiskey trail & distillery tours","Perfect for bachelorette, birthday, corporate"],
   priceLabel:"from $150/night",teaser:"America's best city for groups. Music, food, nightlife — all walkable."},
  {id:"cruise-package",cat:"Cruise",name:"Caribbean Cruise Package",meta:"Multiple ports  ·  7 nights",
   highlights:["Royal Caribbean, Carnival, Celebrity & more","Drive-to ports — no flight needed","All-inclusive pricing options","Family & adults-only ships available"],
   priceLabel:"from $699/pp",teaser:"Jesse & Sam find you the best ship, itinerary, and price for your group."},
  {id:"europe-honeymoon",cat:"International",name:"Italy & Greece Honeymoon",meta:"Rome · Amalfi Coast · Santorini  ·  10–14 nights",
   highlights:["Rome & Colosseum private guided tour","Amalfi Coast — Il San Pietro di Positano","Santorini caldera-view suite","All flights, transfers & hotels handled by CxC"],
   priceLabel:"from $4,500/pp",teaser:"The most romantic honeymoon route in Europe. We handle every detail."}
];
