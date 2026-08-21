import { Product, FirmDetails, CategoryMeta, ProductCategory, SpecRow } from "./types";

export const categories: CategoryMeta[] = [
  { id: "cij", label: "Jetronix Industrial Inkjet", shortLabel: "CIJ Printers",
    description: "Continuous non-contact inkjet printers for high-speed production lines." },
  { id: "other-inkjet", label: "Other Industrial Inkjet", shortLabel: "JT Series",
    description: "Substrate-specialty coders, from embedded units to four-head carton coders." },
  { id: "tij", label: "Thermal Inkjet Printers", shortLabel: "Thermal Inkjet",
    description: "Cartridge-based thermal inkjet coders with capacitive touch panels." },
  { id: "handheld", label: "Batch Coding Machines", shortLabel: "Handheld",
    description: "Portable battery-powered coders for date, MRP and batch marking." },
  { id: "laser", label: "Laser Marking Machines", shortLabel: "Laser Marking",
    description: "Permanent inkless marking with zero consumables." },
  { id: "tto", label: "TTO Printers", shortLabel: "TTO",
    description: "Thermal transfer overprinters and ribbons for flexible packaging." }
];

type Row = [string, string];

/** Specs are reproduced exactly as published on the manufacturer's datasheet. */
function make(
  id: string, name: string, category: ProductCategory, type: string,
  tagline: string, image: string | undefined, rows: Row[]
): Product {
  const specs: SpecRow[] = rows.map(([label, value]) => ({ label, value }));
  return { id, name, category, type, tagline, image, specs };
}

export const products: Product[] = [
  /* ═══════════  JETRONIX OWN RANGE (from the Jetronix product brochure)  ═══════════ */

  make("s200", "Jetronix S200", "cij", "Continuous Inkjet Printer (CIJ)",
    "High-speed continuous inkjet for non-contact coding on fast production lines.",
    "si220", [
    ["Technology", "Continuous Inkjet (CIJ)"],
    ["Lines of Print", "Up to 5 lines"],
    ["Print Content", "Text, batch codes, dates, logos, barcodes"],
    ["Substrates", "Plastic, metal, glass, paper, film"],
    ["Marking", "Non-contact - safe on curved and uneven surfaces"],
    ["Maintenance", "Smart auto-cleaning"]
  ]),

  make("jx350", "Jetronix JX350", "cij", "Continuous Inkjet Printer (CIJ)",
    "Five lines of print on conveyors running past 10 metres per second.",
    "jx350", [
    ["Technology", "Continuous Inkjet (CIJ)"],
    ["Lines of Print", "5 lines of text, bar codes, logos and serial numbers"],
    ["Character Height", "1.5 to 12 mm"],
    ["Font Height", "5 to 31 drops"],
    ["Nozzle Size", "36 micron"],
    ["Line Speed", "Past 10 metres per second"],
    ["Marking", "Non-contact - safe on delicate, curved or uneven surfaces"],
    ["Substrates", "Plastic, metal, glass, paper, film"]
  ]),

  make("jt120", "Jetronix JT120", "tij", "Thermal Inkjet Printer (TIJ)",
    "Single head, 12.7 mm print height.",
    "tij-inline", [
    ["Print Heads", "Single head"],
    ["Print Height", "12.7 mm"],
    ["Print Technology", "HP TIJ 2.5"],
    ["Print Resolution", "Up to 600 x 600 DPI"],
    ["Print Speed", "Up to 120 metres per minute"],
    ["Ink Types", "Water-based, solvent and UV-curable options"],
    ["Interfaces", "Touchscreen, USB, RS485 / Ethernet"]
  ]),

  make("jt240", "Jetronix JT240", "tij", "Thermal Inkjet Printer (TIJ)",
    "Double head, 25 mm print height.",
    "tij-inline", [
    ["Print Heads", "Double head"],
    ["Print Height", "25 mm"],
    ["Print Technology", "HP TIJ 2.5"],
    ["Print Resolution", "Up to 600 x 600 DPI"],
    ["Print Speed", "Up to 120 metres per minute"],
    ["Ink Types", "Water-based, solvent and UV-curable options"],
    ["Interfaces", "Touchscreen, USB, RS485 / Ethernet"]
  ]),

  make("jt360", "Jetronix JT360", "tij", "Thermal Inkjet Printer (TIJ)",
    "Three head, 36 mm print height.",
    "tij-inline", [
    ["Print Heads", "Three head"],
    ["Print Height", "36 mm"],
    ["Print Technology", "HP TIJ 2.5"],
    ["Print Resolution", "Up to 600 x 600 DPI"],
    ["Print Speed", "Up to 120 metres per minute"],
    ["Ink Types", "Water-based, solvent and UV-curable options"],
    ["Interfaces", "Touchscreen, USB, RS485 / Ethernet"]
  ]),

  make("jt480", "Jetronix JT480", "tij", "Thermal Inkjet Printer (TIJ)",
    "Four head, 48 mm print height.",
    "tij-kit", [
    ["Print Heads", "Four head"],
    ["Print Height", "48 mm"],
    ["Print Technology", "HP TIJ 2.5"],
    ["Print Resolution", "Up to 600 x 600 DPI"],
    ["Print Speed", "Up to 120 metres per minute"],
    ["Ink Types", "Water-based, solvent and UV-curable options"],
    ["Interfaces", "Touchscreen, USB, RS485 / Ethernet"]
  ]),

  make("jt600", "Jetronix JT600", "tij", "Thermal Inkjet Printer (TIJ)",
    "Five head, 60 mm print height.",
    "tij-kit", [
    ["Print Heads", "Five head"],
    ["Print Height", "60 mm"],
    ["Print Technology", "HP TIJ 2.5"],
    ["Print Resolution", "Up to 600 x 600 DPI"],
    ["Print Speed", "Up to 120 metres per minute"],
    ["Ink Types", "Water-based, solvent and UV-curable options"],
    ["Interfaces", "Touchscreen, USB, RS485 / Ethernet"]
  ]),

  make("jt720", "Jetronix JT720", "tij", "Thermal Inkjet Printer (TIJ)",
    "Six head, 72 mm print height.",
    "tij-kit", [
    ["Print Heads", "Six head"],
    ["Print Height", "72 mm"],
    ["Print Technology", "HP TIJ 2.5"],
    ["Print Resolution", "Up to 600 x 600 DPI"],
    ["Print Speed", "Up to 120 metres per minute"],
    ["Ink Types", "Water-based, solvent and UV-curable options"],
    ["Interfaces", "Touchscreen, USB, RS485 / Ethernet"]
  ]),

  make("jh120", "Jetronix JH120", "handheld", "Handheld Inkjet Printer",
    "Portable coding with a 12.7 mm print height.",
    "handheld-front", [
    ["Print Height", "12.7 mm"],
    ["Print Resolution", "Up to 600 DPI"],
    ["Display", "Smart touch screen interface"],
    ["Ink Support", "Fast-drying cartridge system"],
    ["Connectivity", "USB port for logo and data imports"],
    ["Print Content", "Text, barcodes, QR codes, MRP, dates"],
    ["Substrates", "Cartons, metal, glass, plastic, wood"]
  ]),

  make("jh250", "Jetronix JH250", "handheld", "Handheld Inkjet Printer",
    "Portable coding with a 25 mm print height.",
    "handheld-side", [
    ["Print Height", "25.4 mm"],
    ["Print Resolution", "Up to 600 DPI"],
    ["Display", "Smart touch screen interface"],
    ["Ink Support", "Fast-drying cartridge system"],
    ["Connectivity", "USB port for logo and data imports"],
    ["Print Content", "Text, barcodes, QR codes, MRP, dates"],
    ["Substrates", "Cartons, metal, glass, plastic, wood"]
  ]),

  make("tt550", "Linx TT 550", "tto", "Thermal Transfer Overprinter (TTO)",
    "Compact cassette overprinter for flexible film packaging.",
    "tto-linx", [
    ["Manufacturer", "Linx (distributed and serviced by Jetronix in India)"],
    ["Technology", "Thermal transfer overprinting"],
    ["Compressed Air", "Not required"],
    ["Ribbon System", "Push-button cassette, bi-directional drive"],
    ["Print Control", "Electronic pressure control"],
    ["Interface", "Colour touch screen"],
    ["Substrates", "Film packaging, plastics, labels, gloss card"]
  ]),

  make("tt750", "Linx TT 750", "tto", "Thermal Transfer Overprinter (TTO)",
    "The volume workhorse of the TTO range.",
    "tto-linx", [
    ["Manufacturer", "Linx (distributed and serviced by Jetronix in India)"],
    ["Technology", "Thermal transfer overprinting"],
    ["Compressed Air", "Not required"],
    ["Ribbon System", "Push-button cassette, bi-directional drive"],
    ["Print Control", "Electronic pressure control"],
    ["Interface", "Colour touch screen"],
    ["Substrates", "Film packaging, plastics, labels, gloss card"]
  ]),

  make("tt1000", "Linx TT 1000", "tto", "Thermal Transfer Overprinter (TTO)",
    "Wide-format overprinter for full-width film.",
    "tto-linx", [
    ["Manufacturer", "Linx (distributed and serviced by Jetronix in India)"],
    ["Technology", "Thermal transfer overprinting"],
    ["Compressed Air", "Not required"],
    ["Ribbon System", "Push-button cassette, bi-directional drive"],
    ["Print Control", "Electronic pressure control"],
    ["Interface", "Colour touch screen"],
    ["Substrates", "Film packaging, plastics, labels, gloss card"]
  ]),

  make("jlc30-60", "Jetronix JLC30 / JLC60", "laser", "CO2 Laser Coding Machine",
    "Permanent, consumable-free coding at 1500 characters per second.",
    "laser-co2", [
    ["Model", "JLC30 (30 W) / JLC60 (60 W)"],
    ["Technology", "CO2 laser, intelligent vector control algorithm"],
    ["Marking Speed", "Up to 1500 characters/second"],
    ["Working Life", "MTBF more than 50,000 hours"],
    ["Operation", "24 hours continuous"],
    ["Consumables", "None - permanent identification"],
    ["Substrates", "Film, plastic, glass, leather and other materials"],
    ["Installation", "Conveyor line or punch packing machine"],
    ["Startup", "One-button, auto-jump to running mode"]
  ]),

  /* ═══════════  DISTRIBUTED RANGE (manufacturer datasheets)  ═══════════ */

  make("jt2030", "JT2030 Jetronix TIJ Printer", "other-inkjet", "Thermal Inkjet Printer (TIJ)",
    "Delivers rapid, high-resolution coding for all your industrial packaging needs, ensuring consistent quality and traceability.",
    "tij-inline", [
    ["Display", "-"],
    ["Keyboard", "-"],
    ["Browser Access", "*"],
    ["Bracketry", "Bracketry included"],
    ["Dimensions (L x W x H)", "120.6 x 86.1 x 90 mm"],
    ["Printhead", "Integrated"],
    ["Printhead Type", "S-Head / H-Head"],
    ["Maximum Print Height", "1″"],
    ["Photocell", "1x inbuilt, 1x external"],
    ["Alarm Beacon Outputs", "3"],
    ["Spare digital I/O", "1 input, 1 output"],
    ["TCP/IP", "*"],
    ["USB Ports", "2"],
    ["RS232 / RS485 Ports", "RS485"],
    ["Pro Upgrade Available*", "*"],
    ["Power Supply", "100-240VAC"]
  ]),

  make("jt2050", "JT2050 Jetronix TIJ Printer", "other-inkjet", "Thermal Inkjet Printer (TIJ)",
    "Delivers rapid, high-resolution coding for all your industrial packaging needs, ensuring consistent quality and traceability.",
    "tij-inline", [
    ["Display", "3.5″ LCD Display"],
    ["Keyboard", "-"],
    ["Browser Access", "*"],
    ["Bracketry", "Bracketry included"],
    ["Dimensions (L x W x H)", "120.6 x 86.1 x 90 mm"],
    ["Printhead", "Integrated"],
    ["Printhead Type", "S-Head / H-Head"],
    ["Maximum Print Height", "1″"],
    ["Photocell", "1x inbuilt, 1x external"],
    ["Alarm Beacon Outputs", "3"],
    ["Spare digital I/O", "1 input, 1 output"],
    ["TCP/IP", "*"],
    ["USB Ports", "2"],
    ["RS232 / RS485 Ports", "RS485"],
    ["Pro Upgrade Available*", "*"],
    ["Power Supply", "100-240VAC"]
  ]),

  make("jt2200", "JT2200 Box Coder Inkjet Printer", "other-inkjet", "Box Coder / Thermal Inkjet Printer",
    "Delivers rapid, high-resolution coding for all your industrial packaging needs, ensuring consistent quality and traceability.",
    "tij-inline", [
    ["Display", "7″ capacitive touchscreen"],
    ["Keyboard", "-"],
    ["Browser Access", "*"],
    ["Bracketry", "Bracketry purchased separately"],
    ["Dimensions (L x W x H)", "242 x 158 x 58 mm"],
    ["Printhead", "Up to 2 printheads"],
    ["Printhead Type", "S-, H- & T-Heads available separately"],
    ["Maximum Print Height", "2″"],
    ["Photocell", "1x external"],
    ["Alarm Beacon Outputs", "3"],
    ["Spare digital I/O", "1 input, 1 output"],
    ["TCP/IP", "*"],
    ["USB Ports", "2"],
    ["RS232 / RS485 Ports", "RS232"],
    ["Pro Upgrade Available*", "*"],
    ["Power Supply", "100-240VAC"]
  ]),

  make("jt2400", "JT2400 Carton Coding Inkjet Printer", "other-inkjet", "Carton Coder / Thermal Inkjet Printer",
    "Delivers rapid, high-resolution coding for all your industrial packaging needs, ensuring consistent quality and traceability.",
    "tij-kit", [
    ["Display", "10″ capacitive touchscreen"],
    ["Keyboard", "-"],
    ["Browser Access", "*"],
    ["Bracketry", "Bracketry purchased separately"],
    ["Dimensions (L x W x H)", "320 x 208 x 56 mm"],
    ["Printhead", "Up to 4 printheads"],
    ["Printhead Type", "S-, H- & T-Heads available separately"],
    ["Maximum Print Height", "4″"],
    ["Photocell", "1x external"],
    ["Alarm Beacon Outputs", "3"],
    ["Spare digital I/O", "1 input, 1 output"],
    ["TCP/IP", "*"],
    ["USB Ports", "2"],
    ["RS232 / RS485 Ports", "RS232"],
    ["Pro Upgrade Available*", "*"],
    ["Power Supply", "100-240VAC"]
  ]),

  make("tij-7in-127", "Thermal Inkjet Printer 7 Inch Display 12.7mm", "tij", "Thermal Inkjet Printer (TIJ)",
    "Provides a user-friendly interface and precise coding for streamlined production efficiency.",
    "tij-kit", [
    ["Control Panel", "7-inch display for intuitive operation"],
    ["Coding Area Height", "12.7 mm"],
    ["Print Resolution", "Up to 600 dpi"],
    ["Connectivity", "USB, Ethernet"],
    ["Application", "User-friendly interface with real-time status display"],
    ["Number of Lines", "1-4 rows"],
    ["Font Selection", "Simplified, traditional, numeral, chinese character, graphics (logo), barcode, QR code etc"],
    ["Information Length", "1-200 characters"],
    ["Ink", "Use ink cartridge"],
    ["Printing Material", "Metal, glass, wood, carton, pouches etc"],
    ["Speed", "40m/min"],
    ["Maintain", "Maintenance free"],
    ["Nozzle Size", "86*110*60mm"],
    ["Warranty", "6 Months"]
  ]),

  make("tij-5in-127", "Online Thermal Inkjet Printer 5 Inch 12.7mm", "tij", "Online Thermal Inkjet Printer",
    "Delivers robust, high-resolution coding performance for diverse industrial applications.",
    "tij-inline", [
    ["Print Width", "5 inches"],
    ["Coding Area Height", "12.7 mm"],
    ["Print Resolution", "Up to 600 dpi"],
    ["Connectivity", "USB, Ethernet"],
    ["Application", "Suitable for high-speed production with compact coding needs"],
    ["Screen Size", "5 inch capacitive screen"],
    ["Machine Material", "Aluminium body"],
    ["Information Storage", "3GB free space"],
    ["Product Nozzle", "TIJ Thermal foaming nozzle"],
    ["Count No", "1 to 50 digits"],
    ["Print Speed", "60m/min"],
    ["Operating System", "Linux 3.4"],
    ["Cartridge Capacity", "42ml"],
    ["Warranty", "6 Months"]
  ]),

  make("tij-7in-25", "Online Thermal Inkjet Printer 7 Inch 25mm", "tij", "Online Thermal Inkjet Printer",
    "Offers precise and consistent thermal coding solutions to meet varied production demands.",
    "tij-kit", [
    ["Print Width", "7 inches"],
    ["Coding Area Height", "25 mm"],
    ["Print Resolution", "Up to 600 dpi"],
    ["Connectivity", "USB, Ethernet"],
    ["Application", "Designed for larger coding areas on packaging"],
    ["Screen Size", "7 inch capacitive screen"],
    ["Machine Material", "Aluminium body"],
    ["Information Storage", "3GB free space"],
    ["Product Nozzle", "TIJ Thermal foaming nozzle"],
    ["Count No", "1 to 50 digits"],
    ["Print Speed", "60m/min"],
    ["Operating System", "Linux 3.4"],
    ["Cartridge Capacity", "42ml"],
    ["Warranty", "6 Months"]
  ]),

  make("handy-mrp-25", "Date MRP Handy Inkjet Printer 25mm", "handheld", "Handheld Batch Coding Machine",
    "Delivers clear, compliant date and MRP printing for seamless production operations.",
    "handheld-front", [
    ["Print Resolution", "Up to 600 dpi"],
    ["Print Speed", "~20 m/min"],
    ["Coding Area", "25 mm (optimized for date and MRP printing)"],
    ["Application", "Tailored for packaging lines requiring date and price coding"],
    ["Connectivity", "USB, Ethernet"],
    ["Product Type", "Hand Printer"],
    ["Material", "Metal Body"],
    ["Automation Grade", "Semi-Automatic"],
    ["Voltage", "Rechargable Battery"],
    ["Battery Life", "More then 10 hours"],
    ["Ink Color", "Black ink cartridge with machine"],
    ["Screen", "4.3 inches"],
    ["Language", "English, Chinese, Arabic"],
    ["Print Distance", "2-5MM From nozzles to objects"],
    ["Print Content", "Text, Time, Serial No, Logo, QR Code (Variable), Barcode, DM code"],
    ["Warranty", "6 Months"]
  ]),

  make("handy-127", "Handy Printer - Batch Code Machine 12.7mm", "handheld", "Handheld Batch Coding Machine",
    "Ensures fast, precise coding to support efficient batch processing and traceability.",
    "handheld-side", [
    ["Print Resolution", "Up to 600 dpi"],
    ["Print Speed", "~20 m/min"],
    ["Coding Area", "12.7 mm"],
    ["Design", "Compact and easy to install"],
    ["Connectivity", "USB"],
    ["Product Type", "Hand Printer"],
    ["Material", "Metal Body"],
    ["Automation Grade", "Semi-Automatic"],
    ["Voltage", "Rechargable Battery"],
    ["Battery Life", "More then 10 hours"],
    ["Ink Color", "Black ink cartridge with machine"],
    ["Screen", "4.3 inches"],
    ["Language", "English, Chinese, Arabic"],
    ["Print Distance", "2-5MM From nozzles to objects"],
    ["Print Content", "Text, Time, Serial No, Logo, QR Code (Variable), Barcode, DM code"],
    ["Warranty", "6 Months"]
  ]),

  make("handy-metal-127", "Metal Body Handy Inkjet Printer 12.7mm", "handheld", "Handheld Batch Coding Machine",
    "Provides compact, high-precision coding ideal for on-the-go batch marking.",
    "handheld-side", [
    ["Print Resolution", "Up to 600 dpi"],
    ["Print Speed", "~40 m/min"],
    ["Coding Area", "12.7 mm"],
    ["Model", "BE250 (Metal Body)"],
    ["Connectivity", "USB"],
    ["Product Type", "Hand Printer"],
    ["Material", "Metal Body"],
    ["Automation Grade", "Semi-Automatic"],
    ["Voltage", "Rechargable Battery"],
    ["Battery Life", "More then 10 hours"],
    ["Ink Color", "Black ink cartridge with machine"],
    ["Screen", "4.3 inches"],
    ["Language", "English, Chinese, Arabic"],
    ["Print Distance", "2-5MM From nozzles to objects"],
    ["Print Content", "Text, Time, Serial No, Logo, QR Code (Variable), Barcode, DM code"],
    ["Warranty", "6 Months"]
  ]),

  make("handy-metal-25", "Metal Body Handy Inkjet Printer 25mm", "handheld", "Handheld Batch Coding Machine",
    "Offers reliable, accurate coding solutions tailored for diverse packaging requirements.",
    "handheld-front", [
    ["Print Resolution", "Up to 600 dpi"],
    ["Print Speed", "~20 m/min"],
    ["Coding Area", "25 mm"],
    ["Construction", "Rugged metal design for industrial use"],
    ["Connectivity", "USB"],
    ["Product Type", "Hand Printer"],
    ["Material", "Metal Body"],
    ["Automation Grade", "Semi-Automatic"],
    ["Voltage", "Rechargable Battery"],
    ["Battery Life", "More then 10 hours"],
    ["Ink Color", "Black ink cartridge with machine"],
    ["Screen", "4.3 inches"],
    ["Language", "English, Chinese, Arabic"],
    ["Print Distance", "2-5MM From nozzles to objects"],
    ["Print Content", "Text, Time, Serial No, Logo, QR Code (Variable), Barcode, DM code"],
    ["Warranty", "6 Months"]
  ]),

  make("laser-cc30f", "Metal Laser Marking Machine", "laser", "Laser Marking Machine",
    "Offers high-precision marking for metal surfaces with durable, clear, and permanent engraving.",
    "laser-co2", [
    ["Model", "CC-30F"],
    ["Laser Frequency", "20~80KHz"],
    ["Marking Speed", "6000 mm/s"],
    ["Marking Depth", "0.01~0.03mm"],
    ["Usage / Application", "Metal industry"],
    ["Marking Range", "100*100mm"],
    ["Automation Grade", "Semi-Automatic"],
    ["Operating System", "Linux or Windows"],
    ["Control Interface", "SD / USB2.0 / Communication"],
    ["Repeat Accuracy", "±0.002"],
    ["Working Life", "20,000 hours"],
    ["Total Weight", "About 75Kg"]
  ]),

  make("laser-sf30w", "Fibre Laser Marking Machine", "laser", "Fibre Laser Marking Machine",
    "Offers laser technology for fast, high-quality marking on metals, plastics, and industrial materials.",
    "laser-inline", [
    ["Model", "SF-30W"],
    ["Laser Frequency", "30~60KHz"],
    ["Marking Speed", "7000 mm/s"],
    ["Marking Depth", "≤1.0mm"],
    ["Usage / Application", "Industry"],
    ["Marking Range", "100*100mm"],
    ["Laser Device Type", "Fiber Laser source"],
    ["Operating System", "Windows"],
    ["Control Interface", "Standard USB"],
    ["Repeat Accuracy", "±0.002"],
    ["Working Life", "10,000 hours"],
    ["Total Weight", "25Kg"]
  ]),

  make("tto-24x30", "TTO Printer 24 x 30 mm", "tto", "Thermal Transfer Overprinter (TTO)",
    "Offers high-resolution thermal transfer printing for durable, precise labeling across various packaging needs.",
    "tto-linx", [
    ["Print Resolution", "Up to 300 dpi"],
    ["Print Speed", "~20 m/min"],
    ["Print Area", "24x30 mm"],
    ["Connectivity", "USB, Ethernet"],
    ["Compatibility", "Supports various thermal transfer ribbons"]
  ]),

  make("tto-ribbon-33x500", "TTO Ribbon for TTO Printer 33 x 500 mm", "tto", "Consumable - Thermal Transfer Ribbon",
    "Offers consistent, high-quality prints with reliable performance for flawless coding.",
    undefined, [
    ["Ribbon Size", "33x500 mm"],
    ["Material", "High-durability thermal transfer ribbon"],
    ["Application", "Engineered for optimal performance with TTO printers"],
    ["Features", "Consistent color and print quality under high-volume conditions"]
  ])

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
  { id: "cable_wire", name: "Dark PVC Cable / Wire", defaultText: "JETRONIX 5500   24/05/2026   0562 METERS", recommendedInk: "High-Contrast Opaque Pigment White/Yellow", SvgBackground: "cable" },
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
