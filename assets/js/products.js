// Sero'1s SS (Shop) - Centralized Product Data (Expanded Inventory)
// Brand Owner: Sir Christian Birot
// Slogan: "You Get What You Pay For."

const PRODUCTS = [
    {
        id: 'road-cervelo-s5',
        name: 'Cervélo S5 Carnelian 2026',
        brand: 'Cervélo',
        model: 'S5 SRAM Force AXS',
        category: 'road-bikes',
        subcategory: 'Aerodynamic Performance',
        price: 485000,
        image: 'assets/images/Cervelo-S5-Carnelian-2026-SRAM-Force-AXS-1.webp',
        shortDesc: 'Uncompromising aerodynamic speed with integrated cockpit and SRAM Force AXS electronic shifting.',
        description: 'The Cervélo S5 Carnelian 2026 is engineered for pure speed. Featuring an advanced aerodynamic carbon frame, V-stem design, Reserve carbon wheelset, and SRAM Force eTap AXS wireless electronic groupset. Designed for competitive racers and high-speed solo breakaways.',
        specs: {
            'Frame Material': 'All-Carbon Cervélo S5 Carbon',
            'Frame Size': '51cm, 54cm, 56cm',
            'Groupset': 'SRAM Force AXS 12-Speed Wireless',
            'Wheelset': 'Reserve 50/65 Tubeless Ready Carbon',
            'Brake Type': 'SRAM Force Hydraulic Disc',
            'Intended Style': 'Racing / Aero Road'
        },
        availability: 'In Stock (Showroom & Inquiry)',
        intendedUse: 'Competitive road racing, criteriums, and high-speed training.'
    },
    {
        id: 'road-trek-madone-gen8',
        name: 'Trek Madone Gen 8 SLR',
        brand: 'Trek',
        model: 'Madone Gen 8',
        category: 'road-bikes',
        subcategory: 'Lightweight Climbing & Aero',
        price: 520000,
        image: 'assets/images/Trek-Madone-Gen-8-1.jpg',
        shortDesc: 'The ultimate race machine combining lightweight climbing prowess with legendary Madone aerodynamics.',
        description: 'Trek Madone Gen 8 blurs the line between lightweight climbing bikes and aerodynamic race rigs. Crafted from 900 Series OCLV Carbon with IsoFlow technology for vibration dampening and maximum power transfer.',
        specs: {
            'Frame Material': '900 Series OCLV Carbon',
            'Frame Size': '50cm, 52cm, 54cm, 56cm',
            'Groupset': 'Shimano Dura-Ace Di2 12-Speed',
            'Wheelset': 'Bontrager Aeolus RSL 51 Carbon',
            'Brake Type': 'Shimano Dura-Ace Hydraulic Disc',
            'Intended Style': 'All-Around Racing / Climbing'
        },
        availability: 'Low Stock (Inquire Now)',
        intendedUse: 'Elite road racing, steep climbs, and Grand Tour performance.'
    },
    {
        id: 'road-cannondale-synapse',
        name: 'Cannondale Synapse Carbon 2',
        brand: 'Cannondale',
        model: 'Synapse Carbon 2',
        category: 'road-bikes',
        subcategory: 'Endurance',
        price: 215000,
        image: 'assets/images/C26_Synapse_CollectionPage_D_3.jpg',
        shortDesc: 'All-road comfort meets responsive handling for epic endurance rides and Gran Fondos.',
        description: 'Engineered for long days in the saddle. The Cannondale Synapse features SmartSense radar and lights integration, comfortable compliance tuned carbon layups, and clearance for wider tires.',
        specs: {
            'Frame Material': 'BallisTec Carbon Construction',
            'Frame Size': '48cm, 51cm, 54cm, 56cm, 58cm',
            'Groupset': 'Shimano Ultegra Di2 12-Speed',
            'Wheelset': 'Fulcrum Racing 400 DB',
            'Brake Type': 'Shimano Ultegra Hydraulic Disc',
            'Intended Style': 'Endurance / Gran Fondo'
        },
        availability: 'In Stock',
        intendedUse: 'Long-distance endurance training, sportive riding, and varied road conditions.'
    },
    {
        id: 'road-specialized-allez',
        name: 'Specialized Allez Comp 2026',
        brand: 'Specialized',
        model: 'Allez Comp Shimano 105',
        category: 'road-bikes',
        subcategory: 'Racing / Entry Elite',
        price: 98500,
        image: 'assets/images/2026-specialized-allez-comp-shimano-105-road-bike-1000x1000.jpg',
        shortDesc: 'Light, fast, and reliable E5 premium aluminum road bike equipped with dependable Shimano 105.',
        description: 'The Specialized Allez Comp redefines what it means to be an entry-level performance road bike. Premium E5 aluminum frame paired with full carbon fork and Shimano 105 mechanical shifting.',
        specs: {
            'Frame Material': 'E5 Premium Aluminum, Fully Manipulated Tubing',
            'Frame Size': '49cm, 52cm, 54cm, 56cm, 58cm',
            'Groupset': 'Shimano 105 12-Speed Mechanical',
            'Wheelset': 'Axis Elite Tubeless Ready',
            'Brake Type': 'Shimano 105 Hydraulic Disc',
            'Intended Style': 'Training / Sport / Commuting'
        },
        availability: 'In Stock',
        intendedUse: 'Everyday training, fitness cycling, and aspiring racers.'
    },
    {
        id: 'track-dsnv-tyo',
        name: 'DOSNOVENTA Tokyo Fixed Gear',
        brand: 'Dosnoventa',
        model: 'DSNV TYO Track',
        category: 'track-bikes',
        subcategory: 'Velodrome / Urban Fixed',
        price: 175000,
        image: 'assets/images/DSNV_TYO_Black_B_01_Drop.webp',
        shortDesc: 'Handmade Italian craftsmanship meets aggressive urban geometry and track heritage.',
        description: 'Dosnoventa Tokyo is built for uncompromising urban riders and velodrome purists. Columbus Airplane tubing ensures ultra-stiff responsiveness and featherlight weight.',
        specs: {
            'Frame Material': 'Columbus Airplane Triple Butted Alloy',
            'Frame Size': '50cm, 52cm, 54cm, 56cm',
            'Groupset': 'SRAM Omnium Track Crankset 48T',
            'Wheelset': 'H Plus Son Archetype to Miche Primato',
            'Brake Type': 'Drilled for front brake (Optional street setup)',
            'Intended Style': 'Track / Fixed Gear Urban'
        },
        availability: 'In Stock (Limited Edition)',
        intendedUse: 'Velodrome training, criterium fixed gear, and urban riding.'
    },
    {
        id: 'track-y1rs-mondiale',
        name: 'Cinelli Vigorelli Track Mondiale',
        brand: 'Cinelli',
        model: 'Y1Rs Vigorelli Mondiale',
        category: 'track-bikes',
        subcategory: 'Velodrome / Track Racing',
        price: 142000,
        image: 'assets/images/Y1Rs-Mondiale-fondo-nero-prospettiva-anteriore.webp',
        shortDesc: 'Born on the boards of the velodrome. Razor-sharp handling and dedicated track geometry.',
        description: 'The Cinelli Vigorelli Track Mondiale is the weapon of choice for fixed-gear criterium racers worldwide. Columbus Custom tubing with high bottom bracket and short wheelbase.',
        specs: {
            'Frame Material': 'Columbus Custom Alloy Tubing',
            'Frame Size': 'XS (47), S (50), M (53), L (56)',
            'Groupset': 'Miche Pistard 2.0 Track Crankset',
            'Wheelset': 'Vision Team 35 Track Clincher',
            'Brake Type': 'Track specific (No brake holes standard)',
            'Intended Style': 'Velodrome / Fixed Crit'
        },
        availability: 'In Stock',
        intendedUse: 'Velodrome racing and sanctioned fixed-gear crit events.'
    },
    {
        id: 'track-columbus-pista-pro',
        name: 'Sero\'1s Pista Pro Custom Track',
        brand: 'Sero\'1s SS Custom',
        model: 'Pista Pro Special Edition',
        category: 'track-bikes',
        subcategory: 'Urban Fixed Pursuit',
        price: 110000,
        image: 'assets/images/867b1c1f-f21e-42c7-bbbd-bbf256c28c2b_1800x1800_80e3a868-ad28-485f-bd7b-08e7c063a46e.webp',
        shortDesc: 'A sleek matte black urban pursuit track machine equipped with deep section wheels and drop bars.',
        description: 'Designed in collaboration with urban messengers and track racers. Aerodynamic hydroformed aluminum tubing paired with carbon bladed fork for maximum steering precision.',
        specs: {
            'Frame Material': '6061 Hydroformed Double-Butted Aluminum',
            'Frame Size': '52cm, 54cm, 56cm',
            'Groupset': 'Sugino Messenger Crank 46T / 16T Fixed Cog',
            'Wheelset': '45mm Carbon Composite Clincher',
            'Brake Type': 'Front Caliper Brake Included',
            'Intended Style': 'Urban Fixed / Track Training'
        },
        availability: 'In Stock',
        intendedUse: 'Urban commuting, fixed-gear training, and street criteriums.'
    },
    {
        id: 'kit-dura-ace-pressure',
        name: 'Sero\'1s Pro Aero Jersey & Bib Kit',
        brand: 'Sero\'1s SS Custom',
        model: 'Pro Series Pink Bullet Edition',
        category: 'racing-kits',
        subcategory: 'Jerseys & Bib Shorts',
        price: 7800,
        image: 'assets/images/pressure2_pinkbullet_dura-ace_825ca242-6184-4d4b-ad6b-9d9275e01e39.webp',
        shortDesc: 'Aerodynamic race-fit jersey and high-density pad bib shorts designed for tropical humidity.',
        description: 'Engineered for elite riders in the Philippine climate. Ultra-breathable mesh side panels, cold-black sun-reflecting fabrics, and multi-density ergonomic chamois for 6+ hours in the saddle.',
        specs: {
            'Material': 'Italian Lycra & Breathable Micro-Mesh',
            'Sizes Available': 'XS, S, M, L, XL, XXL',
            'Chamois': 'Elastic Interface High-Density Pad',
            'Pockets': '3 Reinforced Rear Pockets + Zipper Valuables Pocket',
            'Intended Use': 'Road Racing & Intense Training'
        },
        availability: 'In Stock',
        intendedUse: 'Warm-weather training, racing, and endurance cycling.'
    },
    {
        id: 'kit-yvb-helmet-shoes',
        name: 'Sero\'1s Elite Aero Helmet & Carbon Shoes',
        brand: 'Sero\'1s SS',
        model: 'YVB24I Pro Carbon Bundle',
        category: 'racing-kits',
        subcategory: 'Helmets & Shoes',
        price: 18500,
        image: 'assets/images/YVB24I-ZN_Ph-scaled.jpg',
        shortDesc: 'MIPS-equipped aerodynamic helmet paired with ultra-stiff carbon sole cycling shoes.',
        description: 'Complete your race setup with our top-tier protective and power-transfer bundle. Superior ventilation helmet with MIPS safety and dual-dial carbon-soled shoes.',
        specs: {
            'Helmet Cert': 'CE EN 1078 / MIPS Brain Protection',
            'Shoes Outsole': 'Full UD Carbon Fiber Stiffness Index 12',
            'Closure': 'Dual Boa® Fit System',
            'Weight': 'Helmet: 240g | Shoes: 230g (per shoe)',
            'Intended Use': 'Racing & Performance Riding'
        },
        availability: 'In Stock',
        intendedUse: 'Road cycling, track racing, and high-performance training.'
    },
    {
        id: 'comp-carbon-wheelset',
        name: 'Sero\'1s Carbon 50mm Wheelset',
        brand: 'Sero\'1s SS',
        model: 'Carbon 50 Clincher/Tubeless',
        category: 'components',
        subcategory: 'Wheels & Wheelsets',
        price: 45000,
        image: 'assets/images/C1609271159C.jpg',
        shortDesc: 'Stiff, lightweight 50mm carbon fiber rim brake/disc wheelset with ceramic bearings.',
        description: 'High-performance 50mm depth carbon clincher wheels designed to slice through crosswinds while maintaining rapid acceleration on climbs. Sapim CX-Ray spokes and smooth ceramic hubs.',
        specs: {
            'Rim Depth': '50mm aerodynamic profile, 28mm external width',
            'Hubs': 'CNC Machined Alloy with Ceramic Bearings',
            'Spokes': 'Sapim CX-Ray Straight Pull (24h/24h)',
            'Weight': '1,420g per pair',
            'Compatibility': 'Shimano/SRAM 11-12s or XDR'
        },
        availability: 'In Stock',
        intendedUse: 'Road bikes and criterium racing.'
    },
    {
        id: 'comp-accessories-bundle',
        name: 'Cycling Computer & Titanium Tool Kit',
        brand: 'Sero\'1s SS',
        model: 'Tech & Maintenance Pro Set',
        category: 'components',
        subcategory: 'Accessories & Tools',
        price: 9500,
        image: 'assets/images/images.jpg',
        shortDesc: 'GPS cycling computer with cadence/speed sensors and compact grade-5 titanium multi-tool.',
        description: 'Essential electronics and portable tools for every serious cyclist. GPS route navigation, live telemetry, and lightweight titanium tools for roadside mechanical adjustments.',
        specs: {
            'Computer': '2.8" Color Screen, ANT+/BLE, 30-hour battery',
            'Sensors': 'Dual-band Speed & Cadence included',
            'Tools': 'Grade-5 Titanium 12-function multi-tool with chain breaker',
            'Intended Use': 'Training data tracking & mechanical repair'
        },
        availability: 'In Stock',
        intendedUse: 'Daily training logging and bicycle maintenance.'
    }
];
