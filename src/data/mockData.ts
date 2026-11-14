import { ServiceItem, ThemeItem, GalleryItem, PortfolioProject, TestimonialItem, BlogPost } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_teepee_slumber_1794212993402.jpg';
export const LOGO_IMAGE = '/assets/aistudio/logo_3d275c4a.jpg';

// Authentic Services strictly listed on paradiseslumbers.ky
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'indoor-teepee',
    title: 'Indoor Glamping Slumber Parties',
    subtitle: 'Signature Sleepovers',
    tagline: "Cayman's first and only luxury indoor glamping experience, delivered, styled, and packed away.",
    image: HERO_IMAGE,
    priceStartingAt: 275,
    duration: 'Overnight rental (Next-morning packdown included)',
    recommendedGuests: '2 to 8+ Campers',
    overview: "We transform your living room or celebration space into an enchanting indoor glamping wonderland. Each guest enjoys their own handcrafted wooden A-frame teepee, hypo-allergenic camping mattress with waterproof protector and fitted sheet, theme-matching blankets and decorative cushions, fairy lights, and personalized breakfast tray table with battery-operated lantern. We deliver, assemble, and style everything, then return the next morning to pack it all away... leaving parents completely stress-free!",
    inclusions: [
      'Overnight hire of handcrafted wooden A-frame tents',
      'Hypo-allergenic camping mattresses with waterproof protectors & fitted sheets',
      'Theme-matching plush blankets and decorative scatter cushions',
      'Warm LED fairy lights and ambient battery-operated lanterns',
      'Breakfast tray tables with LED tealight candles',
      'Lightboard with personalized custom messaging',
      '4ft themed candy table with cake stand and display accessories',
      'White-glove delivery, assembly, styling, and next-morning pack-down'
    ],
    features: [
      '100% Steam-sanitized linens',
      'Safe low-voltage LED illumination',
      'Authentic bespoke themes',
      'Zero-hassle island setup & takedown'
    ],
    bestFor: 'Birthdays, Bestie Milestones, Tween Celebrations, Family Sleepovers',
    packages: [
      {
        name: '2 People (1 Host + 1 Guest)',
        price: 275,
        description: 'Perfect for best friend duos or intimate sibling sleepovers.',
        includes: ['2 Handcrafted A-frame teepees', '2 Hypo-allergenic mattresses & bedding', 'Breakfast trays & lanterns', 'Custom lightboard & delivery']
      },
      {
        name: '3 People (1 Host + 2 Guests)',
        price: 395,
        description: 'Ideal for small bestie trios and close family celebrations.',
        includes: ['3 Handcrafted A-frame teepees', '3 Complete bedding sets & cushions', 'Breakfast trays & lanterns', '4ft candy table display']
      },
      {
        name: '4 People (1 Host + 3 Guests) - Most Popular',
        price: 495,
        description: 'Our most requested party size for unforgettable birthday sleepovers.',
        includes: ['4 Handcrafted A-frame teepees', 'Full theme bedding & styling accessories', 'Breakfast trays & lanterns', 'Lightboard + 4ft candy table']
      },
      {
        name: '5 People (1 Host + 4 Guests)',
        price: 595,
        description: 'Complete glamping slumber experience for five campers.',
        includes: ['5 Handcrafted A-frame teepees', 'Complete luxury linen & cushion setups', 'Breakfast trays & lanterns', 'Full setup & next-day packdown']
      },
      {
        name: '6 People (1 Host + 5 Guests)',
        price: 670,
        description: 'Spacious and festive celebration for 6 campers.',
        includes: ['6 Handcrafted A-frame teepees', 'Theme blankets & decorative pillows', 'Breakfast trays & lanterns', '4ft candy table & cake stand']
      },
      {
        name: '7 People (1 Host + 6 Guests)',
        price: 765,
        description: 'Grand slumber party setup for 7 campers.',
        includes: ['7 Handcrafted A-frame teepees', 'Luxe bedding & thematic accents', 'Breakfast trays & lanterns', 'Customized lightboard greeting']
      },
      {
        name: '8 People (1 Host + 7 Guests) - Grand Party',
        price: 820,
        description: 'The ultimate slumber experience for larger milestone celebrations.',
        includes: ['8 Handcrafted A-frame teepees', 'Complete themed setup for all 8 campers', 'Breakfast trays, lanterns & candy table', 'Island-wide setup & takedown']
      }
    ]
  },
  {
    id: 'custom-tents',
    title: 'Custom Made Tents (To Keep at Home)',
    subtitle: 'Permanent Bedroom Fixtures',
    tagline: 'Handcrafted custom A-frame tents built to permanently keep in children’s bedrooms and playrooms.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80',
    priceStartingAt: 195,
    duration: 'Permanent purchase (Made-to-order)',
    recommendedGuests: 'Individual & sibling bedrooms',
    overview: 'Looking to bring the magical glamping aesthetic permanently into your child’s daily life? We handcraft custom A-frame tents tailored to your nursery, playroom, or bedroom dimensions. Built with durable natural timber frames, removable and washable premium fabrics, and tailored tie-backs.',
    inclusions: [
      'Handcrafted natural pine timber A-frame structure',
      'Removable, machine-washable heavy canvas drapery',
      'Custom fabric tiebacks in your choice of color palette',
      'Safe non-slip silicone floor protectors',
      'Delivered and assembled in your Cayman residence'
    ],
    features: [
      'Durable solid wood construction',
      'Custom sizing for any room',
      'Washable textiles',
      'Perfect cozy reading or play nook'
    ],
    bestFor: 'Nursery Decor, Bedroom Play Nooks, Reading Corners, Unique Gifts',
    packages: [
      {
        name: 'Classic Bedroom A-Frame Tent',
        price: 195,
        description: 'Standard size timber tent tailored to children bedrooms.',
        includes: ['Handcrafted timber frame', 'Washable cotton canvas', 'Fabric tiebacks', 'Home delivery in Grand Cayman']
      },
      {
        name: 'Deluxe Reading Nook Package',
        price: 295,
        description: 'Custom tent bundled with floor cushion, fairy light strand, and scatter pillows.',
        includes: ['Custom timber tent', 'Fitted floor cushion', '3 Accent pillows', 'Warm battery-operated fairy lights']
      }
    ]
  },
  {
    id: 'interior-design',
    title: 'Kids Interior Design Makeovers',
    subtitle: 'By Candice Hall',
    tagline: 'Full transformation and styling of children’s bedrooms or play spaces (Free Consultation).',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    priceStartingAt: 0,
    duration: 'Full design consultation & execution',
    recommendedGuests: 'Children & Teen Bedrooms',
    overview: 'Our signature kids interior design service by designer Candice Hall transforms children’s bedrooms and play spaces from top to bottom. From creative space planning and custom sleep nooks to color curation, wallpaper accents, and functional storage that sparks imagination.',
    inclusions: [
      'Complimentary initial in-home design consultation in Grand Cayman',
      'Custom 2D/3D mood boards and room layout proposals',
      'Paint color curation, wallpaper selection, and textile sourcing',
      'Furniture and lighting selection with local delivery coordination',
      'Turnkey room styling, installation, and final reveal'
    ],
    features: [
      'Led by renowned designer Candice Hall',
      'Tailored to child age and personality',
      'Functional storage integration',
      'Free initial consultation'
    ],
    bestFor: 'Nursery transitions, Tween bedroom upgrades, Playrooms, Study spaces',
    packages: [
      {
        name: 'Complimentary In-Home Consultation',
        price: 0,
        description: 'Meet with designer Candice Hall to assess your space and discuss your vision.',
        includes: ['1-Hour home walk-through', 'Spatial assessment', 'Initial theme & palette ideas', 'No obligation estimate']
      },
      {
        name: 'Full Room Design & Transformation',
        price: 450,
        description: 'Comprehensive design package including mood boards, sourcing, and on-site styling.',
        includes: ['Custom design concept', 'Shopping list & sourcing', 'Paint & wallpaper coordination', 'Final room styling day']
      }
    ]
  },
  {
    id: 'event-planning',
    title: 'Full-Service Party Planning & Styling',
    subtitle: 'For Parties With or Without Tents',
    tagline: 'Short on time? Let us handle catering, balloon arches, tableware, and all party decor.',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=80',
    priceStartingAt: 250,
    duration: 'Full celebration coordination',
    recommendedGuests: 'Any guest count',
    overview: 'For parties without tents or for busy parents short on time, we provide end-to-end party planning and styling. We manage themed balloon installations, custom celebration cakes, grazing charcuterie, party tableware, and coordinate with trusted island partners so you can relax.',
    inclusions: [
      'Full event theme curation and design plan',
      'Balloon garland and backdrop installations',
      'Tableware, napkins, cutlery, and custom place settings',
      'Catering coordination (cakes, cupcakes, candy tables, charcuterie)',
      'Delivery, setup, and post-party breakdown'
    ],
    features: [
      'Turnkey peace of mind',
      'Trusted local vendor network',
      'Customized to your budget',
      'Island-wide service'
    ],
    bestFor: 'Milestone birthdays, Pool parties, Family celebrations, Baby showers',
    packages: [
      {
        name: 'Essential Party Styling Bundle',
        price: 250,
        description: 'Focal balloon garland, themed tableware, and party decor setup.',
        includes: ['8ft Balloon garland', 'Tableware for up to 10 guests', 'Centerpiece styling', 'Setup & takedown']
      },
      {
        name: 'The Ultimate Celebration Suite',
        price: 480,
        description: 'Grand balloon backdrop, customized cake, candy table, and tableware.',
        includes: ['Focal backdrop & balloon arch', 'Themed celebration cake', 'Candy table setup with jars', 'Tableware for 15 guests']
      }
    ]
  }
];

// Authentic Themes strictly listed on paradiseslumbers.ky
export const THEMES_DATA: ThemeItem[] = [
  {
    id: 'candyland',
    title: 'CandyLand',
    subtitle: 'Sweet Bonbon Magic',
    category: 'Sweets & Treats',
    headline: 'A Sweet Wonderland of Lollipops & Pastel Bonbons.',
    narrative: 'Step into a whimsical confectionery world of pastel pinks, mint greens, oversized lollipop cushions, sprinkle bed runners, and candy table jars.',
    exploreHighlight: 'White A-frame tents dressed in pastel candy streamers with giant lollipop and swirl cushions.',
    stayHighlight: 'Cotton-soft candy pastel duvets, sprinkle pillowcases, and bed trays with sweet lanterns.',
    vibeHighlight: 'Lollipop Swirls, Pastel Bonbons & Sweet Tooth Dreams',
    palette: ['#F7C5CC', '#B5E2FA', '#FFE17D', '#FAF9F6', '#000000'],
    paletteNames: ['Bubblegum Pink', 'Mint Cyan', 'Lemon Drop', 'Soft White', 'Pure Black'],
    image: './assets/aistudio/4.jpeg',
    popularFor: 'Sweet birthdays, candy lovers, colorful sleepovers, and joyful celebrations.',
    decorElements: ['Lollipop accent cushions', 'Sprinkle bed runners', 'Candy jar lanterns', 'Pastel bunting'],
    tentStyle: 'Handcrafted timber A-frames with pastel pink and mint drapery',
    beddingStyle: 'Pastel bonbon duvets with sugar-swirl plush pillows and breakfast trays',
    lightingType: 'Warm LED fairy lights with candy-glow tealight lanterns'
  },
  {
    id: 'unicorns',
    title: 'Dark Unicorns',
    subtitle: 'Golden Horn Fairytale Fantasy',
    category: 'Fantasy & Magic',
    headline: 'Where Fairytales Come Alive Beneath Starlit Canopies.',
    narrative: 'A dreamy sanctuary of soft rainbow ombré textiles, golden glitter unicorn horns, floral mane crowns, plush cloud cushions, and sparkling fairy lights.',
    exploreHighlight: 'A-frame teepees crowned with golden unicorn horns and pastel floral wreaths.',
    stayHighlight: 'Hypoallergenic mattresses with soft rainbow duvets and plush unicorn sleep masks.',
    vibeHighlight: 'Golden Horns, Pastel Rainbows & Enchanted Dreams',
    palette: ['#F9B4D0', '#EDC9FF', '#D4AF37', '#FAF9F6', '#000000'],
    paletteNames: ['Unicorn Rose', 'Magic Lilac', 'Gilded Gold', 'Soft White', 'Pure Black'],
    image: './assets/aistudio/7.jfif',
    popularFor: 'Fairy tale dreamers, rainbow fantasy birthdays, and enchanted sleepovers.',
    decorElements: ['Golden unicorn horns', 'Pastel floral mane crowns', 'Star plush cushions', 'Fairy light canopies'],
    tentStyle: 'Ivory timber A-frames draped in pastel tulle with golden unicorn finials',
    beddingStyle: 'Ombre rainbow duvets with metallic star pillows and wooden breakfast trays',
    lightingType: 'Twinkling warm micro-LED fairy lights and unicorn bedside nightlamps'
  },
  {
    id: 'fortnite',
    title: 'Olivia Rodrigo',
    subtitle: 'Battle Royale Gamer Oasis',
    category: 'Gaming & Action',
    headline: 'Drop In and Claim Your Victory Royale.',
    narrative: 'The ultimate battle camp for gamers: camouflage textiles, Loot Llama pillows, supply drop crates, blue shield potion LED bottles, and Victory Royale banners.',
    exploreHighlight: 'Camouflage and tactical navy teepees with gaming pennants and supply crates.',
    stayHighlight: 'Cozy gamer sleep setup with loot llama cushions and gaming snack breakfast trays.',
    vibeHighlight: 'Victory Royale, Loot Drop Crates & Battle Camp Fun',
    palette: ['#2E4057', '#1D2D44', '#048A81', '#FAF9F6', '#000000'],
    paletteNames: ['Tactical Navy', 'Battle Slate', 'Shield Cyan', 'Soft White', 'Pure Black'],
    image: './assets/aistudio/3w.jpeg',
    popularFor: 'Gamer birthdays, co-op sleepovers, Fortnite fans, and active celebrations.',
    decorElements: ['Loot Llama plush cushions', 'Shield potion drink bottles', 'Supply drop crates', 'Victory Royale signs'],
    tentStyle: 'Tactical navy and camouflage teepees with battle bus accents',
    beddingStyle: 'Charcoal and blue quilts with gamer controllers and breakfast trays',
    lightingType: 'Blue shield-glow LED bars and neon gaming desk lamps'
  },
  {
    id: 'frozen',
    title: 'Indian Teepee Tent',
    subtitle: 'Winter Kingdom Elegance',
    category: 'Winter & Royalty',
    headline: 'Step into an Ice Castle of Shimmering Snowflakes.',
    narrative: 'Frosted winter wonder brought to sunny Grand Cayman: glistening glacier-blue organza, silver sequin snowflakes, plush Olaf companions, and crystalline fairy lights.',
    exploreHighlight: 'Glacier-blue organza draped teepees accented with silver snowflake garlands.',
    stayHighlight: 'Crisp white and ice-blue duvets with frosted sequin cushions and silver lanterns.',
    vibeHighlight: 'Glacier Blue, Silver Snowflakes & Frozen Royalty',
    palette: ['#A0C4E2', '#D8ECF8', '#C0C0C0', '#FAF9F6', '#000000'],
    paletteNames: ['Glacier Blue', 'Frosted Ice', 'Silver Shimmer', 'Soft White', 'Pure Black'],
    image: './assets/aistudio/2w.jpeg',
    popularFor: 'Frozen movie fans, winter birthdays, princess slumber parties, and royal celebrations.',
    decorElements: ['Silver snowflake garlands', 'Olaf plush cushions', 'Glacier organza drapes', 'Crystal lanterns'],
    tentStyle: 'Ice blue and white two-tone A-frames with snowflake tiebacks',
    beddingStyle: 'Snow-white sheets with frost-blue duvets and sequin throw pillows',
    lightingType: 'Cascading cool white starlight fairy strings and silver lanterns'
  },
  
  {
    id: 'pirates',
    title: 'Pirates',
    subtitle: 'Cayman Pirate Cove Adventure',
    category: 'Island Adventure',
    headline: 'Sail the Seven Seas and Unearth Hidden Treasure.',
    narrative: 'Authentic Grand Cayman pirate lore: nautical timber teepees, weathered treasure map table runners, brass lanterns, Jolly Roger flags, and chocolate doubloons.',
    exploreHighlight: 'Nautical canvas teepees with natural jute rope rigging and pirate skull flags.',
    stayHighlight: 'Striped ocean-breeze bedding with pirate treasure chest breakfast trays.',
    vibeHighlight: 'Treasure Maps, Nautical Rigging & Pirate Gold',
    palette: ['#1F2421', '#8C1D40', '#D4AF37', '#FAF9F6', '#000000'],
    paletteNames: ['Ship Charcoal', 'Crimson Velvet', 'Pirate Gold', 'Soft White', 'Pure Black'],
    image: './assets/aistudio/222222.jpg',
    popularFor: 'Cayman pirate week celebrations, adventure seekers, and nautical birthday sleepovers.',
    decorElements: ['Treasure chest trays', 'Parchment treasure maps', 'Jolly Roger bunting', 'Nautical compasses'],
    tentStyle: 'Natural cotton canvas teepees trimmed with maritime rope and skull flags',
    beddingStyle: 'Navy and white striped sheets with crimson velvet accent blankets',
    lightingType: 'Warm ship-lantern ambient glows with brass cage lights'
  },
  {
    id: 'glow-party',
    title: 'Glow In Dark',
    subtitle: 'Ultraviolet Neon Party Energy',
    category: 'Cosmic & Neon',
    headline: 'Turn Down the Lights and Ignite the Glow.',
    narrative: 'Electrifying blacklight setups featuring UV reactive neon streamers, glow-in-the-dark galaxy blankets, fluorescent chalkboard trays, and glowing star ceiling constellations.',
    exploreHighlight: 'Blacklight-responsive teepees equipped with safe UV illumination and neon pennants.',
    stayHighlight: 'Glow-in-the-dark star quilts with fluorescent neon green and pink cushions.',
    vibeHighlight: 'UV Blacklight, Neon Streamers & Luminous Stars',
    palette: ['#00FF87', '#60EFFF', '#FF007F', '#FAF9F6', '#000000'],
    paletteNames: ['Electric Lime', 'UV Cyan', 'Neon Magenta', 'Soft White', 'Pure Black'],
    image: './assets/aistudio/glow.jpeg',
    popularFor: 'High-energy dance sleepovers, tween night parties, and gaming celebrations.',
    decorElements: ['UV reactive neon bunting', 'Glowstick favor bracelets', 'Fluorescent trays', 'Star constellations'],
    tentStyle: 'Crisp white or charcoal teepees piped with neon reactive fluorescent trim',
    beddingStyle: 'Glow constellation quilts with neon reactive accent pillows',
    lightingType: 'Safe high-efficiency UV blacklight tube arrays and neon strobe lamps'
  },
  {
    id: 'enchanted-forest',
    title: 'Enchanted Forest',
    subtitle: 'Botanical Woodland Harmony',
    category: 'Botanical & Nature',
    headline: 'Breathe in Fresh Eucalyptus & Woodland Magic.',
    narrative: 'A tranquil woodland haven dressed in real eucalyptus garlands, woven botanical ivy vines, velvet sage pillows, timber breakfast trays, and warm amber terrarium lights.',
    exploreHighlight: 'Natural timber A-frames draped in lush forest greenery and woodland floral posies.',
    stayHighlight: 'Laundered organic cotton sheets with rich sage velvet throws and linen cushions.',
    vibeHighlight: 'Woodland Greenery, Fresh Eucalyptus & Amber Glow',
    palette: ['#3A5A40', '#588157', '#A3B18A', '#FAF9F6', '#000000'],
    paletteNames: ['Deep Forest', 'Botanical Sage', 'Eucalyptus Pale', 'Soft White', 'Pure Black'],
    image: './assets/aistudio/2e.jfif',
    popularFor: 'Nature lovers, botanical birthdays, relaxing slumber retreats, and woodland themes.',
    decorElements: ['Silk eucalyptus vines', 'Mini terrarium lanterns', 'Botanical floral headbands', 'Wooden name placards'],
    tentStyle: 'Handcrafted timber frames wrapped in flowing ivory cotton and green vines',
    beddingStyle: 'Botanical sage velvet throws with crisp white sheets and floral cushions',
    lightingType: 'Warm amber micro-fairy light branches and brass terrarium lanterns'
  },
  {
    id: 'harley-quinn',
    title: 'Harley Quinn',
    subtitle: 'Comic Pop-Art Rebellion',
    category: 'Comic & Pop',
    headline: 'Bold, Rebellious and Full of Comic Flair.',
    narrative: 'Split two-tone red and royal blue teepee drapery, diamond harlequin patterns, pop-art comic cushions, and playful VIP camper props.',
    exploreHighlight: 'Two-tone split crimson and cobalt A-frames with comic diamond bunting.',
    stayHighlight: 'Harlequin pattern bedding with metallic accent cushions and custom name tags.',
    vibeHighlight: 'Split Red & Blue, Harlequin Diamonds & Pop Comic Fun',
    palette: ['#C70039', '#0A192F', '#FFD700', '#FAF9F6', '#000000'],
    paletteNames: ['Harley Crimson', 'Comic Cobalt', 'Pop Gold', 'Soft White', 'Pure Black'],
    image: './assets/aistudio/rrr.jfif',
    popularFor: 'DC comic fans, tween girl squad sleepovers, bold birthday milestones.',
    decorElements: ['Harlequin diamond pillows', 'Two-tone satin sleep masks', 'Comic prop signs', 'Split bed runners'],
    tentStyle: 'Signature half-red half-blue teepees with black tieback ropes',
    beddingStyle: 'Split color velvet blankets with comic quote pillows and breakfast trays',
    lightingType: 'Red and blue dual-color LED string lights and pop-art mood lamps'
  },
  {
    id: 'dark-unicorn',
    title: 'Dark Unicorn',
    subtitle: 'Midnight Celestial Glamour',
    category: 'Cosmic & Glam',
    headline: 'Midnight Purple & Holographic Starlight.',
    narrative: 'A dramatic, ultra-chic twist on fantasy: rich midnight navy, royal plum velvet, holographic iridescent unicorn horns, and nebula starlight projections.',
    exploreHighlight: 'Midnight navy canvas teepees with holographic unicorn horns and celestial stars.',
    stayHighlight: 'Plush royal plum velvet bedding with iridescent silver sequins and cloud cushions.',
    vibeHighlight: 'Midnight Indigo, Holographic Horns & Stardust',
    palette: ['#1E1638', '#50337A', '#8F5EBF', '#FAF9F6', '#000000'],
    paletteNames: ['Midnight Navy', 'Royal Plum', 'Violet Shimmer', 'Soft White', 'Pure Black'],
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80',
    popularFor: 'Bold dreamers, older tweens and teens, celestial parties, and stylish slumber nights.',
    decorElements: ['Holographic unicorn horns', 'Iridescent sequin pillows', 'Midnight celestial banners', 'Plum velvet throws'],
    tentStyle: 'Midnight navy A-frames with royal plum drapery and silver star tiebacks',
    beddingStyle: 'Plum velvet blankets with starlight holographic cushions and bed trays',
    lightingType: 'Violet starlight projections and warm amber crystal lanterns'
  },
  {
    id: 'enchanted-forest',
    title: 'Enchanted Forest',
    subtitle: 'Woodland Botanical Haven',
    category: 'Nature & Whimsy',
    headline: 'Earthy Greenery, Fairy Vines & Starlit Woods.',
    narrative: 'Step into an organic woodland fantasy with emerald velvet throws, trailing ivy garlands, warm wood accents, and glowing fairy-lit canopies.',
    exploreHighlight: 'Timber teepees entwined with lush eucalyptus vines, woodland mushrooms, and fairy lanterns.',
    stayHighlight: 'Forest green velvet duvets with botanical leaf cushions and wooden breakfast trays.',
    vibeHighlight: 'Eucalyptus Garlands, Emerald Velvet & Starlit Forest',
    palette: ['#2D4A3E', '#5A7755', '#D4AF37', '#FAF9F6', '#000000'],
    paletteNames: ['Forest Green', 'Sage Herb', 'Warm Gold', 'Soft White', 'Pure Black'],
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80',
    popularFor: 'Nature lovers, botanical sleepovers, cozy autumn birthdays, and serene campouts.',
    decorElements: ['Trailing ivy vines', 'Fairy light garlands', 'Woodland creature cushions', 'Rustic lantern sets'],
    tentStyle: 'Natural timber A-frames draped in sage muslin and trailing eucalyptus',
    beddingStyle: 'Emerald velvet quilts with botanical print pillows and breakfast trays',
    lightingType: 'Warm amber fairy lights and mossy glowing terrarium lanterns'
  },
  {
    id: 'fuchsia-garden',
    title: 'Fuchsia Garden',
    subtitle: 'Vibrant Floral Paradise',
    category: 'Floral & Glam',
    headline: 'Bold Hot Pink Petals & Luxe Garden Bloom.',
    narrative: 'A bright, lively burst of fuchsia florals, magenta velvet pillows, gold accents, and sweet garden party vibes under fairy-lit blossoms.',
    exploreHighlight: 'Crisp white teepees draped in cascading fuchsia and magenta floral garlands.',
    stayHighlight: 'Vibrant pink duvets, embroidered peony cushions, and custom floral breakfast trays.',
    vibeHighlight: 'Hot Pink Blooms, Peony Garlands & Garden Glam',
    palette: ['#C7007D', '#E8C5C8', '#5A7755', '#FAF9F6', '#000000'],
    paletteNames: ['Fuchsia Bloom', 'Petal Blush', 'Garden Green', 'Soft White', 'Pure Black'],
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=80',
    popularFor: 'Girl squads, milestone birthdays, summer garden parties, and floral lovers.',
    decorElements: ['Fuchsia peony garlands', 'Silk ribbon streamers', 'Gold floral lanterns', 'Plush pink cushions'],
    tentStyle: 'Ivory A-frames with cascading hot pink flower swags',
    beddingStyle: 'Bright fuchsia and blush bedding with petal accent pillows',
    lightingType: 'Twinkling floral fairy lights and warm white bedside lanterns'
  },
  {
    id: 'lilo-and-stitch',
    title: 'Lilo & Stitch',
    subtitle: 'Hawaiian Island Ohana',
    category: 'Island & Fun',
    headline: 'Tropical Island Palms & Stitch Mischief.',
    narrative: 'Bring the spirit of Aloha to your sleepover with Hawaiian floral leis, tropical monstera leaves, bright ocean blue linens, and cute Stitch plushies.',
    exploreHighlight: 'Tropical palm-draped teepees with hibiscus garlands and ukulele accents.',
    stayHighlight: 'Ocean blue duvets with tropical floral print pillows and pineapple lanterns.',
    vibeHighlight: 'Aloha Spirit, Ocean Blue & Tropical Ohana',
    palette: ['#0077B6', '#FF6B6B', '#5A7755', '#FAF9F6', '#000000'],
    paletteNames: ['Ocean Stitch', 'Coral Hibiscus', 'Palm Green', 'Soft White', 'Pure Black'],
    image: './assets/aistudio/rrr.jfif',
    popularFor: 'Disney lovers, tropical island birthdays, summer sleepovers, and BFF parties.',
    decorElements: ['Tropical palm leaves', 'Hawaiian flower leis', 'Stitch themed accents', 'Pineapple lanterns'],
    tentStyle: 'Tropical wood A-frames with sea-blue canvas and palm leaf finials',
    beddingStyle: 'Aquamarine duvets with hibiscus floral scatter cushions',
    lightingType: 'Warm yellow fairy lights with tropical palm leaf projections'
  },
  {
    id: 'butterfly-fantasy',
    title: 'Butterfly Fantasy',
    subtitle: 'Fluttering Pastel Magic',
    category: 'Fantasy & Whimsy',
    headline: 'Delicate 3D Butterfly Wings & Lavender Hues.',
    narrative: 'A whimsical sanctuary filled with 3D fluttering butterflies, lilac and lavender textiles, sparkling fairy lights, and dreamy cloud pillows.',
    exploreHighlight: 'Teepees adorned with fluttering metallic gold and pastel butterfly garlands.',
    stayHighlight: 'Soft lavender duvets with butterfly wing pillows and pastel breakfast trays.',
    vibeHighlight: 'Fluttering Wings, Soft Lavender & Golden Shimmer',
    palette: ['#9D8DF1', '#E8C5C8', '#B8E0D2', '#FAF9F6', '#000000'],
    paletteNames: ['Lavender Wings', 'Blush Flutter', 'Mint Breeze', 'Soft White', 'Pure Black'],
    image: './assets/aistudio/butter.jgeg',
    popularFor: 'Dreamy spring birthdays, gentle sleepovers, and young fairy tale fans.',
    decorElements: ['3D metallic butterfly clips', 'Lavender tulle canopies', 'Floral wreaths', 'Sparkle fairy lights'],
    tentStyle: 'Ivory A-frames draped in soft lavender tulle with butterfly accents',
    beddingStyle: 'Pastel lilac duvets with metallic butterfly cushions',
    lightingType: 'Soft purple and warm white micro-LED fairy lights'
  },
  {
    id: 'glow-in-the-dark-gamer',
    title: 'Glow in the Dark',
    subtitle: 'Neon Cyber Gaming Lounge',
    category: 'Gaming & High-Tech',
    headline: 'Fluorescent Neon Glow & Controller Battles.',
    narrative: 'The ultimate esports sleepover with UV reactive neon cushions, glowing game controller pillows, blacklight lamps, and cyber grid bunting.',
    exploreHighlight: 'Matte black teepees with fluorescent neon green, cyan, and magenta trim that glows under UV light.',
    stayHighlight: 'Cyber grid duvets, LED gamer glasses, and illuminated snack breakfast trays.',
    vibeHighlight: 'Neon Glow, Blacklight Vibes & Esports Gaming',
    palette: ['#00FF66', '#00F0FF', '#FF0055', '#121212', '#FAF9F6'],
    paletteNames: ['Neon Green', 'Cyber Cyan', 'Neon Magenta', 'Blackout', 'Soft White'],
    image: './assets/aistudio/g0.jfif',
    popularFor: 'Gamer boys & girls, esports birthday parties, neon sleepovers, and arcade nights.',
    decorElements: ['UV reactive cushions', 'Neon game controller pillows', 'Blacklight glow tubes', 'Gamer lightboards'],
    tentStyle: 'Midnight black A-frames with fluorescent reactive neon trims',
    beddingStyle: 'Grid pattern duvets with glowing controller cushions and snack trays',
    lightingType: 'UV blacklights and color-shifting RGB LED lightbars'
  },
  {
    id: 'black-and-white',
    title: 'Gamer',
    subtitle: 'Silver Trimmings & Monochrome Chic',
    category: 'Monochrome & Luxe',
    headline: 'Timeless High-Contrast Silver & Black Luxe.',
    narrative: 'Sleek, sophisticated, and modern: clean black-and-white stripes, metallic silver trimmings, plush faux fur, and sparkling crystal fairy lights.',
    exploreHighlight: 'Crisp white canvas teepees accented with black grosgrain ribbon and silver tiebacks.',
    stayHighlight: 'Striped monochrome duvets, silver sequin pillows, and chic white breakfast trays.',
    vibeHighlight: 'Monochrome Stripes, Silver Sparkle & Teen Chic',
    palette: ['#000000', '#555555', '#C0C0C0', '#FAF9F6', '#E8C5C8'],
    paletteNames: ['Pure Black', 'Slate Grey', 'Metallic Silver', 'Soft White', 'Subtle Blush'],
    image: './assets/aistudio/ccc.jfif',
    popularFor: 'Teen sleepovers, chic tween birthday parties, Parisian themes, and modern slumber aesthetics.',
    decorElements: ['Black-and-white striped pillows', 'Silver sequin accents', 'Monochrome bunting', 'Crystal lanterns'],
    tentStyle: 'Classic white teepees bordered with sleek black fabric and silver star finials',
    beddingStyle: 'Monochrome duvets with metallic silver pillows and breakfast trays',
    lightingType: 'Crisp cool white and warm fairy lights with silver lanterns'
  },
  {
    id: 'olivia-rodrigo',
    title: 'Posh Polka Dots',
    subtitle: 'Pop Star Purple & Punk Pop',
    category: 'Music & Teen Pop',
    headline: 'Lavender Grunge, Butterfly Decals & Pop Star Anthems.',
    narrative: 'Inspired by Sour & Guts albums: deep purple and lilac textiles, vintage cassette accents, glitter stars, microphone props, and edgy butterfly stickers.',
    exploreHighlight: 'Purple A-frame teepees decked in silver tinsel, butterfly decals, and Sour sticker bunting.',
    stayHighlight: 'Deep purple duvets with pop-star quote cushions and VIP backstage breakfast trays.',
    vibeHighlight: 'Vampire Purple, Butterfly Stickers & Pop Punk Vibes',
    palette: ['#7B2CBF', '#9D4EDD', '#C77DFF', '#FAF9F6', '#000000'],
    paletteNames: ['Guts Violet', 'Sour Lavender', 'Pop Lilac', 'Soft White', 'Pure Black'],
    image: './assets/aistudio/2e.jfif',
    popularFor: 'Music lovers, tween and teen sing-along sleepovers, karaoke birthdays, and pop star fans.',
    decorElements: ['Purple butterfly clips', 'Silver tinsel garlands', 'Vintage cassette props', 'Microphone bed favors'],
    tentStyle: 'Deep violet teepees with silver star canopies and butterfly bunting',
    beddingStyle: 'Lavender duvets with pop lyric pillows and VIP badge breakfast trays',
    lightingType: 'Purple starlight projector and neon music note wall lights'
  },
  {
    id: 'all-white-faux-fur',
    title: 'All White',
    subtitle: 'Cozy Winter Cloud Haven',
    category: 'Winter Luxe',
    headline: 'Snowy White Textures, Shaggy Fur & Golden Warmth.',
    narrative: 'An ethereal sanctuary of pure ivory, ultra-plush shaggy faux fur rugs, cream cable-knit throws, and warm golden starlight illumination.',
    exploreHighlight: 'Snow-white canvas teepees draped in cascading white faux fur with starlight crowns.',
    stayHighlight: 'Cloud-soft white duvets, shaggy faux-fur cushions, and natural blonde wood breakfast trays.',
    vibeHighlight: 'Snowy White Fur, Cable Knit Throws & Golden Warmth',
    palette: ['#FFFFFF', '#FAF9F6', '#E5E0D8', '#C5A059', '#384C37'],
    paletteNames: ['Pure White', 'Warm Ivory', 'Cashmere Cream', 'Champagne Gold', 'Sage Accent'],
    image: './assets/aistudio/aall.jfif',
    popularFor: 'Luxury tween sleepovers, spa nights, holiday winter wonderlands, and serene aesthetic lovers.',
    decorElements: ['Shaggy faux-fur bed runners', 'Cream cable knit pillows', 'Golden fairy lights', 'Blonde wood trays'],
    tentStyle: 'Pure white timber teepees with thick faux fur tiebacks and star finials',
    beddingStyle: 'Ivory quilted duvets with cloud pillows and plush fur throws',
    lightingType: 'Warm 2200K amber micro-fairy lights and frosted glass lanterns'
  },
    {
    id: 'harry-potter',
    title: 'Glow in the Dark',
    subtitle: 'Hogwarts Wizarding Academy',
    category: 'Magic & Adventure',
    headline: 'Board the Hogwarts Express for a Night of Magic.',
    narrative: 'Immerse in wizarding wonder with house crest banners, floating candle lanterns, golden snitch pillows, aged spellbooks, and custom acceptance letters.',
    exploreHighlight: 'Hogwarts Great Hall inspired teepees with rich burgundy and navy house drapery.',
    stayHighlight: 'Velvet house crest blankets with golden snitch cushions and wand favors.',
    vibeHighlight: 'Floating Candles, House Crests & Wizarding Mystery',
    palette: ['#740001', '#D3A625', '#0E1A40', '#FAF9F6', '#000000'],
    paletteNames: ['Gryffindor Crimson', 'Snitch Gold', 'Ravenclaw Navy', 'Soft White', 'Pure Black'],
    image: './assets/aistudio/w3.jpeg',
    popularFor: 'Harry Potter fans, book lovers, fantasy sleepovers, and magical milestones.',
    decorElements: ['Hogwarts house banners', 'Golden snitch bed trays', 'Aged spellbook props', 'Floating candle lights'],
    tentStyle: 'Rich crimson and navy timber A-frames with house crest emblems',
    beddingStyle: 'Cozy velvet blankets with golden snitch cushions and breakfast trays',
    lightingType: 'Warm amber suspended floating candle lanterns and potion bottle lamps'
  },
  
  {
    id: 'custom-theme',
    title: 'Lilo and Stitch',
    subtitle: '3-Month Lead Time',
    tagline: 'Dreaming of a unique concept? We design and handcraft custom themes from scratch.',
    category: 'Bespoke Order',
    headline: 'Your Vision, Handcrafted Exclusively for You.',
    narrative: 'Have a specific movie, character, book, or color aesthetic in mind? With a 3-month lead time, our team designs custom fabrics, themed cushions, bespoke lightboard phrases, and custom favors tailored exclusively to your celebration.',
    exploreHighlight: 'Fully bespoke A-frame teepee setups designed around your exact vision.',
    stayHighlight: 'Custom textiles, bespoke bedding, and unique theme favors made to order.',
    vibeHighlight: 'Completely Bespoke, One-of-a-Kind & Handcrafted',
    palette: ['#222222', '#666666', '#D4AF37', '#FAF9F6', '#000000'],
    paletteNames: ['Bespoke Charcoal', 'Studio Silver', 'Gold Accent', 'Soft White', 'Pure Black'],
    image: './assets/aistudio/rrr.jfif',
    popularFor: 'Milestone birthdays, unique hobbies, bespoke holiday celebrations, and VIP events.',
    decorElements: ['Custom printed textiles', 'Tailored theme bunting', 'Bespoke name boards', 'Unique favor bundles'],
    tentStyle: 'Handcrafted timber frames with custom tailored drapery',
    beddingStyle: 'Custom coordinated linens and pillows designed for your event',
    lightingType: 'Specialized lighting chosen to complement your custom theme'
  },
  {
    id: 'christmas-holiday',
    title: 'Christmas',
    subtitle: 'Seasonal Starlight Wonder',
    category: 'Holiday Festive',
    headline: 'Crimson Velvet, Pine Green & Starlight Cheer.',
    narrative: 'Transform your living room into Santa’s cozy North Pole workshop with deep crimson blankets, tartan plaids, evergreen garland swags, and festive stockings.',
    exploreHighlight: 'Festive red and ivory teepees adorned with frosted pine cone garlands and jingle bells.',
    stayHighlight: 'Cozy plaid and velvet duvets with snowflake cushions and holiday breakfast trays.',
    vibeHighlight: 'Holiday Tartan, Pine Garlands & Christmas Starlight',
    palette: ['#B22222', '#2E5A36', '#D4AF37', '#FAF9F6', '#000000'],
    paletteNames: ['Holiday Crimson', 'Pine Green', 'Gilded Star', 'Soft White', 'Pure Black'],
    image: './assets/aistudio/chr.jpeg',
    popularFor: 'December holiday sleepovers, Christmas Eve traditions, winter birthdays, and festive family fun.',
    decorElements: ['Frosted evergreen garlands', 'Personalized holiday stockings', 'Tartan blankets', 'Snowflake pillows'],
    tentStyle: 'Ivory A-frames draped in holiday pine swags and red velvet ribbons',
    beddingStyle: 'Crimson and tartan duvets with embroidered snowflake cushions',
    lightingType: 'Warm twinkle fairy lights and holiday lantern tealights'
  },
];

// Authentic Add-On Extras strictly listed on paradiseslumbers.ky
export const ADD_ONS_DATA = [
  { id: 'adopt-blue-iguana', name: 'Adopt a Blue Iguana', price: 35, description: 'Supports local Grand Cayman conservation, includes official adoption certificate & plush toy' },
  { id: 'balloon-arches', name: 'Balloon Arches & Displays', price: 95, description: 'Spectacular organic balloon arch customized to your exact party theme palette' },
  { id: 'pancakes-kit', name: 'Gourmet Pancake Breakfast Stack', price: 35, description: 'Fluffy golden pancakes with warm maple syrup, fresh berries, whipped cream, and toppings for morning campers' },
  { id: 'celebration-cake', name: 'Themed Celebration Cake', price: 75, description: 'Handcrafted custom birthday cake decorated to perfectly match your slumber theme' },
  { id: 'candy-table-treats', name: 'Candy Table Treats & Refills', price: 45, description: 'Assorted premium candies, gummies, lollipops, and display jars for your 4ft candy table' },
  { id: 'graze-girl-boards', name: 'Graze Girl Charcuterie Boards', price: 65, description: 'Artisanal sweet or savory grazing boards crafted locally by Graze Girl Grand Cayman' },
  { id: 'fresh-flowers', name: 'Fresh Flower Displays', price: 45, description: 'Fresh tropical and seasonal Cayman floral arrangements and botanical bed tray posies' },
  { id: 'glow-party-exp', name: 'Glow Party Experience', price: 40, description: 'UV blacklight illumination, fluorescent body markers, neon glowsticks, and reactive wristbands' },
  { id: 'party-pinata', name: 'Party Pinata', price: 45, description: 'Themed celebration piñata loaded with allergy-conscious sweets and treats' },
  { id: 'tableware-decor', name: 'Tableware & Decor Kit', price: 30, description: 'Coordinated party plates, cups, napkins, cutlery, and matching celebratory table styling' },
  { id: 'spa-pamper-pkg', name: 'Spa Pamper Package', price: 35, description: 'Nail polishes, nail files, nourishing hand & foot scrubs, and body moisturizers for all campers' }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Seven Mile Beach Slumber Oasis',
    category: 'Teepees',
    image:'./assets/aistudio/3w.jpeg',
    span: 'featured',
    caption: 'A 5-teepee bespoke slumber party at a Seven Mile Beach villa with handcrafted timber A-frames and candy table.',
    location: 'Seven Mile Beach, Grand Cayman',
    tags: ['Indoor Slumbers', 'Seven Mile Beach', 'A-Frame Tents']
  },
  {
    id: 'gal-2',
    title: 'Dreaming of Unicorns Celebration',
    category: 'Decor & Details',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
    span: 'tall',
    caption: 'Golden unicorn horn teepee finials, rainbow tulle, and floral mane garlands.',
    location: 'Governors Harbour, Grand Cayman',
    tags: ['Unicorn Theme', 'Fairy Lights', 'Custom Styling']
  },
  {
    id: 'gal-3',
    title: 'Glow-In-The-Dark UV Experience',
    category: 'Teepees',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80',
    span: 'wide',
    caption: 'Safe UV blacklight arrays illuminating fluorescent reactive teepee trims and star blankets.',
    location: 'Camana Bay, Grand Cayman',
    tags: ['Glow Party', 'Blacklight', 'Tween Birthday']
  },
  {
    id: 'gal-4',
    title: 'Harry Potter Hogwarts Great Hall',
    category: 'Teepees',
    image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?auto=format&fit=crop&w=1000&q=80',
    span: 'wide',
    caption: 'Floating amber candle lanterns and house crest blankets for a 6-sleeper wizard birthday.',
    location: 'South Sound, Grand Cayman',
    tags: ['Harry Potter', 'Floating Candles', 'Hogwarts']
  },
  {
    id: 'gal-5',
    title: 'Personalized Breakfast Tray Details',
    category: 'Decor & Details',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80',
    span: 'small',
    caption: 'Handcrafted timber breakfast bed trays with battery-powered lanterns and custom lightboard.',
    location: 'Savannah, Grand Cayman',
    tags: ['Breakfast Trays', 'Lightboard', 'Handcrafted']
  },
  {
    id: 'gal-6',
    title: 'Kids Interior Design by Candice Hall',
    category: 'Decor & Details',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    span: 'small',
    caption: 'Permanent children bedroom makeover with custom built-in reading teepee.',
    location: 'Cayman Kai, Grand Cayman',
    tags: ['Interior Design', 'Candice Hall', 'Bedroom Makeover']
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-1',
    title: "Maya's 10th Birthday Enchanted Forest Slumber",
    client: 'The Henderson Family',
    theme: 'Enchanted Forest',
    service: 'Indoor Glamping Slumber Parties',
    location: 'Vista Del Mar, Grand Cayman',
    guestCount: 6,
    image: HERO_IMAGE,
    story: 'Maya wanted a fairytale woodland birthday that felt grown-up yet magical. We styled 6 A-frame teepees with eucalyptus wreaths, velvet sage pillows, timber breakfast trays, and a 4ft candy table with cake stand.',
    highlight: '6 Handcrafted A-Frames + 4ft Candy Table',
    decorHighlights: ['Handcrafted wooden name placards', 'Fairy-lit eucalyptus garlands', 'Green thumb succulent pots', 'Next-morning packdown'],
    quote: 'Paradise Slumbers took care of everything from setup to next-day packdown. The girls gasped when they walked in!'
  },
  {
    id: 'proj-2',
    title: 'Harry Potter Wizarding Milestone Sleepover',
    client: 'The Miller Family',
    theme: 'Harry Potter',
    service: 'Indoor Glamping Slumber Parties',
    location: 'Seven Mile Beach, Grand Cayman',
    guestCount: 5,
    image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?auto=format&fit=crop&w=1000&q=80',
    story: 'An immersive Hogwarts sleepover with floating candle lanterns, house crest blankets, golden snitch bed trays, and personalized acceptance letters.',
    highlight: 'Floating Candles + Themed Cake Add-on',
    decorHighlights: ['Floating candle lighting', 'Acceptance letter scrolls', 'Golden snitch bed trays', 'Laundered hypoallergenic duvets'],
    quote: 'Our son called it the best birthday of his life. Zero stress for parents: they handled the full teardown next morning!'
  },
  {
    id: 'proj-3',
    title: 'Nursery Bedroom Transformation by Candice Hall',
    client: 'The McLaughlin Family',
    theme: 'Kids Interior Design',
    service: 'Kids Interior Design Makeovers',
    location: 'South Sound, Grand Cayman',
    guestCount: 2,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    story: 'Candice Hall reimagined an unused guest room into an enchanting children’s bedroom with handcrafted A-frame reading tent and bespoke shelving.',
    highlight: 'Full Room Design + Custom Made A-Frame Tent',
    decorHighlights: ['Permanent timber A-frame tent', 'Custom color curation', 'Organic washable textiles', 'Integrated toy storage'],
    quote: 'Candice is an absolute visionary. Our daughter spends hours reading in her bespoke tent!'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Sarah McLaughlin',
    location: 'Seven Mile Beach, Grand Cayman',
    eventType: '4-Person Birthday Slumber Party',
    rating: 5,
    review: 'Paradise Slumbers made my daughter’s 9th birthday utterly unforgettable! The A-frame teepees, fluffy bedding, and little lanterns were gorgeous. Best part? They arrived the next morning and packed everything away in less than an hour. Zero laundry for me!',
    date: '2 weeks ago',
    verified: true
  },
  {
    id: 'test-2',
    name: 'David and Amanda Rivers',
    location: 'South Sound, Grand Cayman',
    eventType: 'Dreaming of Unicorns Theme',
    rating: 5,
    review: 'Hands down the easiest party we have ever hosted in Grand Cayman. The unicorn theme was breathtaking and all the bedding was freshly laundered and smelled wonderful. Every detail from the breakfast trays to the lightboard was pure perfection.',
    date: '1 month ago',
    verified: true
  },
  {
    id: 'test-3',
    name: 'Emma Bodden',
    location: 'Governors Harbour, Grand Cayman',
    eventType: 'Glow-In-The-Dark Tween Slumber',
    rating: 5,
    review: 'The UV blacklight glow party blew all the kids away! The neon details, glow blankets, and personalized chalkboards were so cool. Professional, punctual, and extraordinarily kind island service.',
    date: '2 months ago',
    verified: true
  },
  {
    id: 'test-4',
    name: 'Jessica Ebanks',
    location: 'Camana Bay, Grand Cayman',
    eventType: 'Kids Interior Design Makeover',
    rating: 5,
    review: 'Candice Hall transformed our daughter’s nursery into a dreamy wonderland with a custom A-frame tent we get to keep forever. The craftsmanship is world-class. Highly recommended!',
    date: '3 months ago',
    verified: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'How to Host the Ultimate Indoor Slumber Party in Grand Cayman',
    slug: 'ultimate-indoor-slumber-party-guide-cayman',
    readTime: '4 min read',
    category: 'Party Planning',
    date: 'March 2026',
    excerpt: 'Expert room space measurements, theme selection tips, and how our white-glove setup leaves parents completely stress-free.',
    author: 'Paradise Slumbers Concierge',
    image: HERO_IMAGE,
    tags: ['Sleepover Guide', 'Grand Cayman', 'Indoor Glamping'],
    content: [
      'Slumber parties have come a long way from sleeping bags on hard floors. In the Cayman Islands, parents are embracing the luxury indoor glamping trend, bringing boutique comfort and Pinterest-worthy decor directly into the home.',
      '1. Assess Your Room Space: Each A-frame teepee with its hypo-allergenic mattress and breakfast tray occupies approximately 3.5 ft wide by 6.5 ft long. We recommend an open living room or playroom area where furniture can be easily shifted aside.',
      '2. Curate a Cohesive Theme: Whether your child dreams of CandyLand sweets, Hogwarts wizardry, or Glowing neon blacklights, cohesive styling makes celebrations feel truly magical.',
      '3. White-Glove Peace of Mind: When booking with Paradise Slumbers, all linens are laundered in hypoallergenic detergents, surfaces are steam-sanitized, and we handle both delivery setup and next-morning pack-down so parents can relax.'
    ]
  },
  {
    id: 'blog-2',
    title: 'Kids Interior Design: Why Custom Bedroom A-Frame Tents Are Trending',
    slug: 'kids-interior-design-custom-tents-candice-hall',
    readTime: '3 min read',
    category: 'Interior Design',
    date: 'February 2026',
    excerpt: 'Designer Candice Hall shares how permanent A-frame tents create cozy reading nooks and inspire imaginative play in children’s bedrooms.',
    author: 'Candice Hall, Lead Designer',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    tags: ['Interior Design', 'Candice Hall', 'Custom Tents'],
    content: [
      'Children need spaces that feel cozy, personal, and safe. A dedicated indoor tent provides a peaceful retreat for reading, daydreaming, or quiet play.',
      '1. Custom Sizing: Every bedroom is unique. Tailoring timber frames to specific room dimensions ensures the structure complements existing furniture without crowding.',
      '2. Natural Materials: Solid pine timber and washable cotton canvas ensure the tent stands up to years of play while remaining beautiful.',
      '3. Free Consultations: We offer free initial in-home design consultations across Grand Cayman to explore your room’s potential.'
    ]
  },
  {
    id: 'blog-3',
    title: 'Top Slumber Party Themes Trending for Cayman Celebrations This Year',
    slug: 'top-slumber-party-themes-trending-cayman',
    readTime: '5 min read',
    category: 'Theme Trends',
    date: 'January 2026',
    excerpt: 'Discover why CandyLand, Dreaming of Unicorns, and Glow-In-The-Dark are topping wishlists for Cayman birthday sleepovers.',
    author: 'Styling Department',
    image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=1000&q=80',
    tags: ['Themes', 'Trends', 'Birthday Ideas'],
    content: [
      'Every celebration begins with a creative spark. At Paradise Slumbers, our themed packages include everything from blankets and cushions to custom LED lightboards.',
      'Theme 1: CandyLand - A delightful pastel bonbon wonderland loved by younger dreamers.',
      'Theme 2: Dreaming of Unicorns - Golden glitter horns and pastel rainbow duvets create an enchanting kingdom.',
      'Theme 3: Glow-In-The-Dark - High-energy UV blacklights, neon streamers, and star blankets perfect for tweens.'
    ]
  }
];

export const FAQS = [
  {
    question: 'What are the dimensions of the trifold memory foam mattress?',
    answer: 'Our luxury trifold memory foam camping mattresses measure 75 inches in length by 25 inches in width and 4 inches in thickness (approx 190 cm x 65 cm x 10 cm). They provide plush orthopedic comfort for kids and teens, and each mattress is fitted with a 100% waterproof hypoallergenic zipped protector, fresh cotton fitted sheet, and theme-matching cozy blankets.'
  },
  {
    question: 'How much space do I need for each indoor teepee?',
    answer: 'Each teepee requires approximately 3.5 ft (width) by 6.5 ft (length) including the hypo-allergenic camping mattress and wooden breakfast tray. We can configure them in a straight line, facing each other, or semi-circle depending on your living room layout.'
  },
  {
    question: 'Where do you deliver across the Cayman Islands?',
    answer: 'We provide full island-wide delivery, styling, and takedown across Grand Cayman, including Seven Mile Beach, George Town, South Sound, West Bay, Grand Harbour, Savannah, Bodden Town, East End, and North Side / Rum Point / Cayman Kai.'
  },
  {
    question: 'How are the beds and linens sanitized?',
    answer: 'Hygiene is our highest priority. All mattress covers, sheets, blankets, and pillowcases are freshly laundered using hypoallergenic, baby-safe detergents after every event. Mattresses and timber structures are steam-cleaned and sanitized with non-toxic solutions.'
  },
  {
    question: 'Do guests need to bring their own sleeping pillows?',
    answer: 'For hygiene reasons, we ask that each camper brings their own sleeping pillow. We provide theme-matching decorative cushions, plush blankets, and full duvets.'
  },
  {
    question: 'What is the setup and collection schedule?',
    answer: 'We typically arrive between 1:00 PM and 4:00 PM on the event day to complete setup before guests arrive. We return the following morning between 10:00 AM and 12:00 PM to pack everything away cleanly and efficiently.'
  },
  {
    question: 'Can I mix and match themes among campers?',
    answer: 'Yes! You can mix and match themes across your booking (e.g. 2 Unicorn tents and 2 Harry Potter tents) so each child gets their favorite experience.'
  }
];
