import { Product, FirmDetails, CategoryMeta } from "./types";

export const categories: CategoryMeta[] = [
  {
    id: "cij",
    label: "Continuous Inkjet Printers (CIJ)",
    shortLabel: "CIJ Printers",
    description:
      "Non-contact continuous inkjet coders for high-speed primary packaging — text, batch codes, dates and barcodes on plastic, metal, glass, paper and film."
  },
  {
    id: "tij",
    label: "Thermal Inkjet Printers (TIJ)",
    shortLabel: "TIJ Printers",
    description:
      "HP TIJ 2.5 cartridge coders at up to 600 DPI. Maintenance-free — the print head is replaced with every cartridge, so there is nothing to clean or flush."
  },
  {
    id: "handheld",
    label: "Handheld Printers",
    shortLabel: "Handheld",
    description:
      "Battery-powered portable coders for MRP, date and batch marking on cartons, sacks and irregular items away from the production line."
  },
  {
    id: "tto",
    label: "Thermal Transfer Overprinters (TTO)",
    shortLabel: "TTO",
    description:
      "Ribbon-based overprinters for flexible film, laminates, labels and gloss card on flow-wrap and VFFS machines. Supplied and serviced by Jetronix."
  },
  {
    id: "laser",
    label: "CO2 Laser Coding Machines",
    shortLabel: "Laser Coding",
    description:
      "Inkless permanent marking with zero consumables. Ideal for traceability, anti-counterfeiting and anti-channelisation on film, plastic, glass and leather."
  },
  {
    id: "sealing",
    label: "Carton Sealing Machines",
    shortLabel: "Carton Sealing",
    description:
      "End-of-line carton sealers that tape cartons top and bottom in a single pass, ready to integrate with your coding line."
  }
];

// Shared marketing points that the source brochure lists identically for both CIJ models.
const CIJ_KEY_FEATURES = [
  "High-Speed Printing: Prints crisp codes on fast-moving products without slowing your line.",
  "Non-Contact Technology: Marks flat, curved or uneven surfaces safely.",
  "Multi-Line Capability: Prints up to five lines of text, logos and barcodes.",
  "Versatile Substrates: Works on plastic, metal, glass, paper and film.",
  "Low Maintenance: Built for heavy-duty uptime with smart auto-cleaning features."
];

const TIJ_KEY_FEATURES = [
  "High-Resolution Output: Up to 600 DPI for machine-readable barcodes and clear text.",
  "Maintenance-Free Design: The print head is replaced with every cartridge swap — no cleanups.",
  "Smart Touchscreen Interface: Message creation, editing and job selection on an intuitive display.",
  "Versatile Substrates: Prints on cartons, plastics, metals, glass and foils.",
  "Plug And Play: Mounts straight onto an existing conveyor with no compressed air required."
];

const TIJ_SPECS = [
  { label: "Print Technology", value: "HP TIJ 2.5" },
  { label: "Print Resolution", value: "Up to 600 x 600 DPI" },
  { label: "Print Speed", value: "Up to 120 metres per minute" },
  { label: "Ink Types", value: "Water-based, solvent and UV-curable options" },
  { label: "Interfaces", value: "Touchscreen, USB, RS485 / Ethernet" }
];

/** Builds one entry of the JT print-head family — they differ only in head count and height. */
function tijModel(
  id: string,
  name: string,
  heads: string,
  height: string,
  description: string
): Product {
  return {
    id,
    name,
    tagline: `${heads} — ${height} print height.`,
    type: "Thermal Inkjet Printer (TIJ)",
    category: "tij",
    description,
    imagePlaceholder: name,
    image: "tij-inline",
    gallery: ["tij-kit"],
    keyHighlights: [
      `${heads} configuration`,
      `Print height up to ${height}`,
      "Up to 600 x 600 DPI resolution",
      "Print speed up to 120 m/min",
      "Cartridge system — no cleaning, no flushing"
    ],
    features: TIJ_KEY_FEATURES,
    specs: [
      { label: "Print Heads", value: heads },
      { label: "Print Height", value: height },
      ...TIJ_SPECS
    ]
  };
}

export const products: Product[] = [
  /* ─────────────────────────  CONTINUOUS INKJET (CIJ)  ───────────────────────── */
  {
    id: "s200",
    name: "Jetronix S200",
    tagline: "High-speed continuous inkjet for everyday production lines.",
    type: "Continuous Inkjet Printer (CIJ)",
    category: "cij",
    description:
      "A high-speed Continuous Inkjet printer built for non-contact industrial coding and marking. It prints clear text, batch codes, dates and barcodes on fast production lines across plastic, metal and glass.",
    imagePlaceholder: "S200",
    image: "si220",
    keyHighlights: [
      "Prints up to five lines of text, logos and barcodes",
      "Non-contact marking on flat, curved or uneven surfaces",
      "Works on plastic, metal, glass, paper and film",
      "Smart auto-cleaning for heavy-duty uptime",
      "Stainless steel cabinet with RFID fluid identification"
    ],
    features: CIJ_KEY_FEATURES,
    specs: [
      { label: "Technology", value: "Continuous Inkjet (CIJ)" },
      { label: "Lines of Print", value: "Up to 5 lines" },
      { label: "Print Content", value: "Text, batch codes, dates, logos, barcodes" },
      { label: "Substrates", value: "Plastic, metal, glass, paper, film" },
      { label: "Marking", value: "Non-contact — safe on curved and uneven surfaces" },
      { label: "Maintenance", value: "Smart auto-cleaning" }
    ]
  },
  {
    id: "jx350",
    name: "Jetronix JX350",
    tagline: "Five lines at over 10 metres per second.",
    type: "Continuous Inkjet Printer (CIJ)",
    category: "cij",
    description:
      "The high-output CIJ in the range. A 36 micron nozzle and 5-to-31 drop font matrix hold code quality on conveyors running past 10 metres per second, making it the choice for beverage, dairy and extrusion lines.",
    imagePlaceholder: "JX350",
    image: "jx350",
    keyHighlights: [
      "5 lines of text, bar codes, logos and serial numbers",
      "Character height 1.5 to 12 mm",
      "Font height 5 to 31 drops",
      "36 micron nozzle",
      "Runs on lines past 10 metres per second"
    ],
    features: CIJ_KEY_FEATURES,
    specs: [
      { label: "Technology", value: "Continuous Inkjet (CIJ)" },
      { label: "Lines of Print", value: "5 lines of text, bar codes, logos and serial numbers" },
      { label: "Character Height", value: "1.5 to 12 mm" },
      { label: "Font Height", value: "5 to 31 drops" },
      { label: "Nozzle Size", value: "36 micron" },
      { label: "Line Speed", value: "Past 10 metres per second" },
      { label: "Marking", value: "Non-contact — safe on delicate, curved or uneven surfaces" },
      { label: "Substrates", value: "Plastic, metal, glass, paper, film" }
    ]
  },

  /* ─────────────────────────  THERMAL INKJET (JT SERIES)  ───────────────────────── */
  tijModel(
    "jt120",
    "Jetronix JT120",
    "Single head",
    "12.7 mm",
    "The single-head entry point to the JT series. One HP TIJ 2.5 cartridge covers a 12.7 mm coding band at up to 600 DPI — enough for date, batch and a 2D code on most primary packs."
  ),
  tijModel(
    "jt240",
    "Jetronix JT240",
    "Double head",
    "25 mm",
    "Two stacked print heads double the coding band to 25 mm, for larger declaration blocks on cartons, pouches and sacks without dropping resolution."
  ),
  tijModel(
    "jt360",
    "Jetronix JT360",
    "Three head",
    "36 mm",
    "Three heads give a 36 mm band — the practical middle of the range for shipper cases that carry both a barcode block and human-readable text."
  ),
  tijModel(
    "jt480",
    "Jetronix JT480",
    "Four head",
    "48 mm",
    "A 48 mm coding band across four heads, sized for outer cartons and bulk sacks where the code has to be readable from a distance on the warehouse floor."
  ),
  tijModel(
    "jt600",
    "Jetronix JT600",
    "Five head",
    "60 mm",
    "Five heads printing a 60 mm band, replacing pre-printed labels on large shippers with printed-on-demand address, batch and barcode blocks."
  ),
  tijModel(
    "jt720",
    "Jetronix JT720",
    "Six head",
    "72 mm",
    "The largest configuration in the JT series: six heads covering a 72 mm band for full-panel carton graphics, at the same 600 DPI as the single-head unit."
  ),

  /* ─────────────────────────  HANDHELD  ───────────────────────── */
  {
    id: "jh120",
    name: "Jetronix JH120",
    tagline: "Portable coding with a 12.7 mm print height.",
    type: "Handheld Inkjet Printer",
    category: "handheld",
    description:
      "A handheld coder that prints crisp text, barcodes, QR codes, MRP and dates on cartons, metal, glass and plastic. Fast-drying ink and a touchscreen make it practical for coding wherever stock is stacked, with no conveyor required.",
    imagePlaceholder: "JH120",
    image: "handheld-front",
    gallery: ["handheld-side"],
    keyHighlights: [
      "12.7 mm print height",
      "Sharp printing up to 600 DPI",
      "Prints on wood, plastic, metal and carton — porous and non-porous",
      "Encodes dates, batch numbers, serial numbers, logos and barcodes",
      "Rechargeable battery for true mobility"
    ],
    features: [
      "High-Resolution Output: Sharp printing up to 600 DPI for flawless readability.",
      "Multi-Surface Use: Prints smoothly on porous and non-porous materials.",
      "Smart Coding: Encodes dates, batch numbers, serial numbers, logos and barcodes.",
      "Portable And Lightweight: Ergonomic design with a long-lasting rechargeable battery.",
      "Smudge-Free Results: Quick-drying solvent and water-based ink options."
    ],
    specs: [
      { label: "Print Height", value: "12.7 mm" },
      { label: "Print Resolution", value: "Up to 600 DPI" },
      { label: "Display", value: "Smart touch screen interface" },
      { label: "Ink Support", value: "Fast-drying cartridge system" },
      { label: "Connectivity", value: "USB port for logo and data imports" },
      { label: "Print Content", value: "Text, barcodes, QR codes, MRP, dates" },
      { label: "Substrates", value: "Cartons, metal, glass, plastic, wood" }
    ]
  },
  {
    id: "jh250",
    name: "Jetronix JH250",
    tagline: "Portable coding with a 25 mm print height.",
    type: "Handheld Inkjet Printer",
    category: "handheld",
    description:
      "The wide-band handheld. A 25 mm print height carries larger MRP and date declarations on shippers and sacks, while keeping the same 600 DPI output and battery-powered mobility as the JH120.",
    imagePlaceholder: "JH250",
    image: "handheld-side",
    gallery: ["handheld-front"],
    keyHighlights: [
      "25 mm print height — double the JH120 band",
      "Sharp printing up to 600 DPI",
      "Prints on wood, plastic, metal and carton — porous and non-porous",
      "Encodes dates, batch numbers, serial numbers, logos and barcodes",
      "Rechargeable battery for true mobility"
    ],
    features: [
      "High-Resolution Output: Sharp printing up to 600 DPI for flawless readability.",
      "Multi-Surface Use: Prints smoothly on porous and non-porous materials.",
      "Smart Coding: Encodes dates, batch numbers, serial numbers, logos and barcodes.",
      "Portable And Lightweight: Ergonomic design with a long-lasting rechargeable battery.",
      "Smudge-Free Results: Quick-drying solvent and water-based ink options."
    ],
    specs: [
      { label: "Print Height", value: "25.4 mm" },
      { label: "Print Resolution", value: "Up to 600 DPI" },
      { label: "Display", value: "Smart touch screen interface" },
      { label: "Ink Support", value: "Fast-drying cartridge system" },
      { label: "Connectivity", value: "USB port for logo and data imports" },
      { label: "Print Content", value: "Text, barcodes, QR codes, MRP, dates" },
      { label: "Substrates", value: "Cartons, metal, glass, plastic, wood" }
    ]
  },

  /* ─────────────────────────  TTO (LINX, DISTRIBUTED)  ───────────────────────── */
  ...(
    [
      ["tt550", "Linx TT 550", "32 mm print area, compact cassette"],
      ["tt750", "Linx TT 750", "53 mm print area, the volume workhorse"],
      ["tt1000", "Linx TT 1000", "107 mm print area for full-width film"]
    ] as const
  ).map(([id, name, tagline]): Product => ({
    id,
    name,
    tagline,
    type: "Thermal Transfer Overprinter (TTO)",
    category: "tto",
    distributedBrand: "Linx",
    description:
      "Thermal Transfer Overprinters for flexible packaging — film, plastics, labels, gloss card and other flexible materials. They deliver consistent, error-free best-before dates, batch codes, barcodes, ingredients and logos. Supplied, installed and serviced in India by Jetronix.",
    imagePlaceholder: name,
    image: "tto-linx",
    keyHighlights: [
      "Operates without compressed air — lower installation and running costs",
      "Large ribbon range to match the application and line",
      "Bi-directional stepper motors deliver more prints per ribbon",
      "Push-button ribbon cassette for quick changes",
      "Colour touch screen for hassle-free operation"
    ],
    features: [
      "No Compressed Air: Cuts installation and operating cost while holding print quality.",
      "Optimised Ribbon Usage: Bi-directional stepper motors get more prints from every ribbon.",
      "Fast Ribbon Changes: Lightweight push-button cassette system minimises errors.",
      "User Maintainable: A sensible number of parts that are easy to replace on site.",
      "Electronic Pressure Control: Print quality is easy to set and easy to keep."
    ],
    specs: [
      { label: "Manufacturer", value: "Linx (distributed by Jetronix in India)" },
      { label: "Technology", value: "Thermal transfer overprinting" },
      { label: "Compressed Air", value: "Not required" },
      { label: "Ribbon System", value: "Push-button cassette, bi-directional drive" },
      { label: "Print Control", value: "Electronic pressure control" },
      { label: "Interface", value: "Colour touch screen" },
      { label: "Substrates", value: "Film packaging, plastics, labels, gloss card" }
    ]
  })),

  /* ─────────────────────────  CO2 LASER  ───────────────────────── */
  {
    id: "jlc30-60",
    name: "Jetronix JLC30 / JLC60",
    tagline: "Permanent, consumable-free coding at 1500 characters per second.",
    type: "CO2 Laser Coding Machine",
    category: "laser",
    description:
      "A CO2 laser coder built around a new intelligent vector control algorithm, with the source, controller and screen in one compact structure that mounts on a conveyor line or a punch packing machine. Marks are permanent and high contrast, supporting product tracking, anti-counterfeiting and anti-channelisation.",
    imagePlaceholder: "JLC30/60",
    image: "laser-co2",
    gallery: ["laser-inline"],
    keyHighlights: [
      "Available in 30 W and 60 W",
      "Up to 1500 characters per second",
      "MTBF over 50,000 hours — 24 hour continuous operation",
      "Non-consumable, permanent identification",
      "All-in-one compact structure for easy line integration"
    ],
    features: [
      "Patented Technologies: New intelligent vector control algorithm lifts marking speed.",
      "Low Power Consumption: High frequency output without the power draw.",
      "Built For Uptime: 24 hour continuous operation, MTBF beyond 50,000 hours.",
      "Interference Resistant: Anti-electromagnetic interference design for factory floors.",
      "One-Button Startup: Jumps straight to running mode and reduces daily misoperation."
    ],
    specs: [
      { label: "Model", value: "JLC30 (30 W) / JLC60 (60 W)" },
      { label: "Technology", value: "CO2 laser, intelligent vector control algorithm" },
      { label: "Marking Speed", value: "Up to 1500 characters/second" },
      { label: "Working Life", value: "MTBF more than 50,000 hours" },
      { label: "Operation", value: "24 hours continuous" },
      { label: "Consumables", value: "None — permanent identification" },
      { label: "Substrates", value: "Film, plastic, glass, leather and other materials" },
      { label: "Installation", value: "Conveyor line or punch packing machine" },
      { label: "Startup", value: "One-button, auto-jump to running mode" }
    ]
  },

  /* ─────────────────────────  CARTON SEALING  ───────────────────────── */
  {
    id: "fxj6050",
    name: "Jetronix FXJ 6050",
    tagline: "Semi-automatic carton sealer, top and bottom drive.",
    type: "Carton Sealing Machine",
    category: "sealing",
    description:
      "A semi-automatic carton sealing machine with top and bottom belt drive for industrial packaging lines. Height and width adjust for quick size changeovers, and it runs either standalone or integrated into an existing line alongside your coder.",
    imagePlaceholder: "FXJ 6050",
    keyHighlights: [
      "Seals 25–45 cartons per minute at around 20 m/min",
      "Top and bottom belts driven for straight, consistent sealing",
      "Handles cartons from 180 × 130 mm up to 500 × 600 mm",
      "Adjustable table height, 630–780 mm",
      "Runs standalone or integrated into an existing production line"
    ],
    features: [
      "Wide Application: Household appliances, foodstuffs, medicine and general merchandise.",
      "Fast Changeovers: Adjustable height and width settings for different carton sizes.",
      "Flexible Deployment: Works standalone or inline with your coding equipment.",
      "Tape Options: Runs 48, 60 or 76 mm BOPP, PVC and water-free adhesive tape."
    ],
    specs: [
      { label: "Automation Grade", value: "Semi-automatic" },
      { label: "Drive Type", value: "Top and bottom belts driven" },
      { label: "Power Supply", value: "AC 220V/50Hz or 110V/60Hz (varies by region)" },
      { label: "Power", value: "180 W to 200 W" },
      { label: "Sealing Speed", value: "Approx. 20 m/min (25–45 cartons/min)" },
      { label: "Max. Carton Size (W × H)", value: "500 mm × 600 mm" },
      { label: "Min. Carton Size (W × H)", value: "180 mm × 130 mm" },
      { label: "Adhesive Tape Width", value: "48 mm, 60 mm or 76 mm (optional)" },
      { label: "Adhesive Tape Material", value: "BOPP, PVC, water-free adhesive tape" },
      { label: "Table Height", value: "Adjustable, typically 630–780 mm" },
      { label: "Machine Dimensions (L × W × H)", value: "Approx. 1755 × 800 × 960–1650 mm" },
      { label: "Machine Weight", value: "Approx. 150 kg" },
      { label: "Max. Conveyor Load", value: "30 kg" }
    ]
  }
];

export const jointVentures: FirmDetails[] = [
  {
    name: "RUNICHA ENTERPRISES",
    address: "119, Jagdish Niwas Shubham place near sch. No.51, Indore, Madhya Pradesh - 452006",
    contactPerson: "Tarun Chouhan",
    gstNo: "23ANKPC2385F1ZA",
    phone: "+91 95222 99975",
    email: "Tarun.chouhan@runichaenterprises.com",
    city: "Indore"
  },
  {
    name: "BEST CODE TECHNOLOGY INDIA",
    address: "Plot No.111 Tirupati Vihar-A, Macheda, Jaipur, Rajasthan - 302013",
    contactPerson: "Akash Singh Rathore",
    gstNo: "08AXEPSS1147H1ZE",
    phone: "+91 98281 06099",
    email: "sales.bestcode@gmail.com",
    city: "Jaipur"
  }
];

export const substrates = [
  { id: "fmcg_plastic", name: "FMCG Plastic (PET/HDPE/PP)", defaultText: "MFG: 24/05/2026\nEXP: 23/05/2028\nB.NO: AB12345", recommendedInk: "Fast-dry Dye-Based Black", SvgBackground: "bottle" },
  { id: "beverage_can", name: "Aluminum / Metal Can", defaultText: "EXP: 11/04/2026\nBATCH: AB123\nNET: 500ML", recommendedInk: "Adhesive Dye-Based Blue/Black", SvgBackground: "can" },
  { id: "pharma_blister", name: "Pharma Blister Foil", defaultText: "M.R.P. 250.00\nMFG: 12/04/2026\nEXP: 11/04/2028", recommendedInk: "Pharma-Grade Fast-Dry Black/Red", SvgBackground: "blister" },
  { id: "cable_wire", name: "Dark PVC Cable / Wire", defaultText: "JETRONIX JX350   24/05/2026   0562 METERS", recommendedInk: "High-Contrast Opaque Pigment White/Yellow", SvgBackground: "cable" },
  { id: "carton_box", name: "Corrugated Cardboard", defaultText: "LOT NO: A1B2C3\nMFG: 2026/05/24\nQTY: 48 PCS", recommendedInk: "Standard Dye-Based Dark Black", SvgBackground: "box" }
];

export const matchmakerQuestions = [
  {
    id: "material",
    question: "Select your product's packaging material (substrate):",
    options: [
      { value: "plastic", label: "PET / Plastic Bottles or Pouches" },
      { value: "metal", label: "Metal Cans, Aluminum Foil, or Tin Plates" },
      { value: "glass", label: "Pharma Vials or Glass Beverage Bottles" },
      { value: "cable", label: "PVC / PE Casing, Wires, and Cables" },
      { value: "cardboard", label: "Cartons, Paper Bags, or Cardboard Boxes" }
    ]
  },
  {
    id: "color",
    question: "What is the color of your packaging surface?",
    options: [
      { value: "light", label: "Light-colored / White / Transparent" },
      { value: "dark", label: "Dark-colored / Black / Deep Blue" }
    ]
  },
  {
    id: "speed",
    question: "What is your production line speed?",
    options: [
      { value: "standard", label: "Standard (Up to 150 meters/min)" },
      { value: "fast", label: "Fast Speed (150 - 400 meters/min)" },
      { value: "ultra", label: "Extreme Speed (400 - 750+ meters/min)" }
    ]
  },
  {
    id: "environment",
    question: "What is the environment of your production plant?",
    options: [
      { value: "dry", label: "Standard Dry / Climate Controlled" },
      { value: "dusty", label: "Dusty / Cement / Timber / Construction" },
      { value: "wet", label: "Condensation / Wet / Cold Dairy / Beverage Bottling" }
    ]
  }
];
