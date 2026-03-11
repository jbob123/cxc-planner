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
  cruises:     ["cruise","cruises","cruise ship","carnival cruise","royal caribbean","disney cruise","norwegian cruise","celebrity cruise","cruise line","alaska cruise","mediterranean cruise","cruise vacation"]
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
