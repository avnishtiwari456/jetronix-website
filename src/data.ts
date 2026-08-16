import { Product, FirmDetails, CategoryMeta } from "./types";

export const categories: CategoryMeta[] = [
  {
    id: "cij",
    label: "Continuous Inkjet Printers",
    shortLabel: "CIJ Printers",
    description:
      "Non-contact continuous inkjet coders for high-speed primary packaging — bottles, cans, pouches, cables and extrusion lines running 24/7."
  },
  {
    id: "tij",
    label: "Thermal Inkjet Printers",
    shortLabel: "Thermal Inkjet",
    description:
      "Aluminium-body online TIJ units with capacitive touch panels, sized for conveyor-mounted date, batch and QR coding. Cartridge-based, so no make-up solvent and no filters."
  },
  {
    id: "other-inkjet",
    label: "Other Industrial Inkjet (JT Series)",
    shortLabel: "Other Inkjet",
    description:
      "The JT series of substrate-specialty coders — from headless embedded units to four-head carton coders printing a 4-inch block."
  },
  {
    id: "handheld",
    label: "Handheld Batch Coding Machines",
    shortLabel: "Handheld Coders",
    description:
      "Battery-powered portable inkjet coders for MRP, date and batch marking on cartons, bags and irregular items away from the line."
  },
  {
    id: "laser",
    label: "Laser Marking Machines",
    shortLabel: "Laser Marking",
    description:
      "Inkless permanent marking on metals, plastics and coated surfaces. Zero consumables, zero smudging, tamper-evident traceability."
  },
  {
    id: "tto",
    label: "TTO Printers & Ribbons",
    shortLabel: "TTO",
    description:
      "Thermal transfer overprinters and matched ribbons for flexible film, laminates and label webs on flow-wrap and VFFS machines."
  },
  {
    id: "conveyor",
    label: "Conveyor Systems",
    shortLabel: "Conveyors",
    description:
      "Coding-line conveyors built to hold registration under the printhead — belt and roller formats, customisable to your plant layout."
  },
  {
    id: "winder",
    label: "Winder & Rewinding Machines",
    shortLabel: "Winders",
    description:
      "Tension-controlled rewinders for label, foil and film rolls — inspect, code and re-roll without deforming the web."
  }
];

export const products: Product[] = [
  /* ─────────────────────────  CONTINUOUS INKJET (CIJ)  ───────────────────────── */
  {
    id: "s200plus",
    name: "Jetronix S200PLUS Series",
    tagline: "Reliable Coding. Maximum Uptime.",
    type: "Continuous Inkjet Printer (CIJ)",
    category: "cij",
    description:
      "Designed for high quality printing and improving production line efficiency. Its independent structure and 304 stainless steel chassis ensure stable, reliable operation in harsh industrial environments and optimize daily productivity.",
    imagePlaceholder: "S200PLUS",
    keyHighlights: [
      "High Speed & High Precision printing",
      "Independent structure design ensures extreme stability",
      "Robust 304 Stainless Steel IP55 dust-tight cabinet",
      "Full connectivity: USB, RS232, and Ethernet",
      "Supports 1-5 lines of high-contrast printing"
    ],
    features: [
      "HIGH QUALITY PRINTING: Sharp and clear characters, barcodes, and logos.",
      "RELIABLE & STABLE: Built to handle fluctuations, vibrating lines, and 24/7 cycles.",
      "EASY OPERATION: User-friendly menu, responsive touchscreen calibration.",
      "LOW MAINTENANCE: Automatic internal flushing mechanism with self-cleaning fluidics.",
      "RUGGED CABINET: 304 Stainless steel chassis designed for hot, cold, or dusty factories."
    ],
    specs: [
      { label: "Lines of Print", value: "1 - 5 Lines" },
      { label: "Print Height", value: "2 - 20 mm" },
      { label: "Line Speed", value: "Up to 768 m/min" },
      { label: "Nozzle Options", value: "60µm / 50µm / 75µm / 85µm" },
      { label: "Cabinet", value: "304 Stainless Steel" },
      { label: "IP Rating", value: "IP55" }
    ],
    techSpecs: {
      printHead: "Dual nozzle-seal ready, length 240mm, width 65mm",
      printHeight: "2 - 20 mm",
      nozzle: "60µm (Standard), 50µm (Fine), 75µm (Pigmented), 85µm (Heavy)",
      printingLines: "1 - 5 Lines",
      printSpeed: "Up to 768 m/min (under 5x5 font matrix)",
      characterHeight: "1 - 10 mm",
      counter: "Up to 10 independent counters",
      inkColor: "Black, Red, Blue, Green, White (Opaque), Invisible (UV)",
      inkType: "Dye-Based, Pigment-Based",
      font: "5x5, 7x5, 7x6, 10x8, 9x9, 16x16, 24x24 matrix",
      barcode: "EAN13, EAN8, CODE39, CODE128, QR Code, DataMatrix (DM)",
      input: "Photoelectric Sensor, Shaft Encoder, Alarm Output, One-key start/stop"
    },
    machineSpecs: {
      operatingSystem: "Embedded Linux OS",
      displayScreen: "10.1 inch Color Touch Screen with Graphic Interface",
      interface: "USB, RS232, Ethernet RJ45",
      protectionLevel: "IP55 dust and splash rating",
      powerSupply: "AC 100-240V, 50/60Hz, automatically adaptable",
      ratedPower: "150 W",
      machineMaterial: "Industrial Grade 304 Stainless Steel"
    }
  },
  {
    id: "si220",
    name: "Jetronix Si220 Series",
    tagline: "Print High Quality Marks on Any Surface",
    type: "Continuous Inkjet Printer (CIJ)",
    category: "cij",
    description:
      "Reliable, versatile, and engineered for high-uptime. The Si220 is equipped with advanced RFID intelligent fluid identification and an integrated solvent recovery system to minimize organic vapor emissions and slash operational costs.",
    imagePlaceholder: "Si220",
    keyHighlights: [
      "Prints up to 5 lines of Alphanumeric and logos",
      "RFID cartridge detection prevents ink-solvent mismatch",
      "Auto-flushing clean-start technology prevents nozzle clogging",
      "Integrated eco-solvent recovery drops solvent consumption by 50%",
      "Engineered for 24/7 operation with minimum user intervention"
    ],
    features: [
      "INTELLIGENT CARTRIDGES: RFID checks prevent catastrophic wrong fluid fills.",
      "AUTO-FLUSHING: Cleans printing head instantly on shutdown for instant reboot.",
      "ECO-SOLVENT SYSTEM: Condenses and reuses solvent vapors, saving fluid costs.",
      "VERSATILE MARKING: High contrast print on FMCG plastics, metals, glass, or cables.",
      "IP55 HOUSING: Tough fully enclosed stainless steel build resistant to splashes."
    ],
    specs: [
      { label: "Lines of Print", value: "1 - 5 Lines" },
      { label: "Print Height", value: "1.5 - 20 mm" },
      { label: "Line Speed", value: "Up to 680 m/min" },
      { label: "Nozzle Options", value: "60µm / 75µm" },
      { label: "Cabinet", value: "304 Stainless Steel" },
      { label: "IP Rating", value: "IP55" }
    ],
    techSpecs: {
      printHead: "Sealed auto-flushing nozzle, length 240mm, width 65mm",
      printHeight: "1.5 - 20 mm",
      nozzle: "60µm (Standard), 75µm (Pigmented)",
      printingLines: "1 - 5 Lines",
      printSpeed: "Up to 680 m/min (under 5x5 font matrix)",
      characterHeight: "1 - 12 mm",
      counter: "Up to 10 independent counters",
      inkColor: "Black, Red, Blue, Yellow, White (Opaque), Invisible (UV)",
      inkType: "Dye-Based, Pigment-Based",
      font: "5x5, 7x5, 7x6, 10x8, 9x9, 16x16, 24x24, 32x32 matrix",
      barcode: "EAN13, EAN8, CODE39, CODE128, QR Code, DataMatrix (DM)",
      input: "Photoelectric Trigger, Speed Encoder, Stack Light Alarm, One-key flush"
    },
    machineSpecs: {
      operatingSystem: "Embedded Real-Time OS",
      displayScreen: "10.1 inch Color Touch Screen with Responsive Fluid Controls",
      interface: "USB, RS232, Ethernet RJ45",
      protectionLevel: "IP55 dust and splash rating",
      powerSupply: "AC 100-240V, 50/60Hz, auto-switching",
      ratedPower: "150 W",
      machineMaterial: "Industrial Grade 304 Stainless Steel"
    }
  },
  {
    id: "j5150",
    name: "Jetronix Inkjet Printer 5150",
    tagline: "Steady coding for mid-volume production lines.",
    type: "Continuous Inkjet Printer (CIJ)",
    category: "cij",
    description:
      "A three-line continuous inkjet coder built around a 10.1-inch capacitive touch screen and a long-life capsule filter. The J5150 suits plants that need dependable date, batch and MRP marking without paying for five-line capability they will never use.",
    imagePlaceholder: "J5150",
    keyHighlights: [
      "Up to 3 lines of print with 5 to 25 dot font heights",
      "10.1 inch capacitive touch screen interface",
      "SmartFlush automatic nozzle cleaning on shutdown",
      "Capsule filter rated up to 4000 hours / 12 months",
      "2.7 metre conduit reaches awkward printhead mounting points"
    ],
    features: [
      "MID-RANGE CAPACITY: Three print lines cover date, batch and MRP in one pass.",
      "SMARTFLUSH: Nozzle is flushed and sealed automatically at every shutdown.",
      "LONG FILTER LIFE: Capsule filter runs up to 4000 hours before replacement.",
      "MEK INK RANGE: Runs standard MEK black and special black formulations.",
      "IP55 CABINET: Powder coated steel enclosure resists dust and splash."
    ],
    specs: [
      { label: "Lines of Print", value: "1 to 3" },
      { label: "Character Height", value: "3 – 12 mm" },
      { label: "Font Height", value: "5 to 25 dots" },
      { label: "Nozzle / Drop Size", value: "75 µm, Macrodrop only" },
      { label: "Display", value: '10.1" Capacitive touch screen' },
      { label: "Line Speed", value: "Up to 6.9 m/sec" },
      { label: "Cabinet Material", value: "Powder coated steel" },
      { label: "Weight (incl. printhead)", value: "18 kg" },
      { label: "Cabinet Connections", value: "Photocell (1), Mains connector (1)" },
      { label: "PCB Connections", value: "Photocell (1), Encoder (1), Alarms (3), USB (1), SD card" },
      { label: "IP Rating", value: "IP55" },
      { label: "Conduit Length", value: "2.7 metre" },
      { label: "SmartFlush", value: "Yes" },
      { label: "Inks", value: "MEK black and Special black" },
      { label: "Filter Type / Expiry", value: "Capsule / up to 4000 hours or 12 months" }
    ]
  },
  {
    id: "j5200",
    name: "Jetronix Inkjet Printer 5200",
    tagline: "Compact two-line coder for everyday packaging.",
    type: "Continuous Inkjet Printer (CIJ)",
    category: "cij",
    description:
      "An entry-tier continuous inkjet printer for lines that need clean, legible codes without complex configuration. Two print lines, macro drop generation and a powder coated IP55 cabinet make it a straightforward fit for cartoning, bottling and pouch filling.",
    imagePlaceholder: "J5200",
    keyHighlights: [
      "1 to 2 lines of print at 3 – 12 mm character height",
      "Macro 75µ drop size for strong contrast on porous surfaces",
      "ciPrecisionPlus droplet placement control",
      "SD, USB, RS232 and Ethernet all standard",
      "SmartFlush keeps the nozzle clear between shifts"
    ],
    features: [
      "SIMPLE SETUP: Two-line message building with minimal operator training.",
      "MACRO DROP: 75µ drops give bold, readable codes on absorbent packaging.",
      "FULL CONNECTIVITY: SD, USB, RS232 and Ethernet fitted as standard.",
      "SMARTFLUSH: Automatic nozzle flush prevents clogging after idle periods.",
      "IP55 CABINET: Powder coated steel body suited to general factory floors."
    ],
    specs: [
      { label: "Lines of Print", value: "1 to 2" },
      { label: "Character Height", value: "3 – 12 mm" },
      { label: "Font Height", value: "5 to 16 dots" },
      { label: "Drop Size", value: "Macro (75µ)" },
      { label: "ciPrecisionPlus", value: "Yes" },
      { label: "Line Speed", value: "Up to 6.9 m/sec" },
      { label: "SD, USB, RS232 and Ethernet", value: "Yes" },
      { label: "Input (photocell / encoder / message select)", value: "1 / 1 / 0" },
      { label: "Outputs (programmable alarms / relay)", value: "3 / 1" },
      { label: "SmartFlush", value: "Yes" },
      { label: "Cabinet", value: "Powder Coated Steel" },
      { label: "IP Rating", value: "IP55" },
      { label: "Weight (incl. printhead)", value: "18.0 kg" }
    ]
  },
  {
    id: "j5500",
    name: "Jetronix Inkjet Printer 5500",
    tagline: "Five-line coding at full line speed.",
    type: "Continuous Inkjet Printer (CIJ)",
    category: "cij",
    description:
      "The five-line workhorse of the range. Dual drop sizes, PixelPlus resolution enhancement and a stainless steel cabinet let the J5500 hold code quality at 9.8 m/sec on beverage, dairy and personal care lines.",
    imagePlaceholder: "J5500",
    keyHighlights: [
      "Up to 5 lines of print from 1.5 mm character height",
      "Normal (60µ) and Macro (75µ) drop sizes selectable",
      "PixelPlus and ciPrecisionPlus for crisp small characters",
      "Line speed up to 9.8 m/sec",
      "Stainless steel IP55 cabinet with ciLink networking"
    ],
    features: [
      "FIVE-LINE MESSAGES: Fit date, batch, MRP, barcode and plant code in one code block.",
      "DUAL DROP SIZE: Switch between 60µ precision and 75µ contrast per product.",
      "PIXELPLUS: Resolution enhancement keeps small fonts legible at speed.",
      "CILINK NETWORKING: Push messages to multiple printers from one source.",
      "STAINLESS CABINET: Washdown-tolerant IP55 stainless steel enclosure."
    ],
    specs: [
      { label: "Lines of Print", value: "1 to 5" },
      { label: "Character Height", value: "1.5 – 12 mm" },
      { label: "Font Height", value: "5 to 31 dots" },
      { label: "Drop Size", value: "Normal (60µ), Macro (75µ)" },
      { label: "PixelPlus", value: "Yes" },
      { label: "ciPrecisionPlus", value: "Yes" },
      { label: "Line Speed", value: "Up to 9.8 m/sec" },
      { label: "ciLink", value: "Yes" },
      { label: "SD, USB, RS232 and Ethernet", value: "Yes" },
      { label: "Input (photocell / encoder / message select)", value: "2 / 1 / 8" },
      { label: "Outputs (programmable alarms / relay)", value: "3 / 1" },
      { label: "SmartFlush", value: "Yes" },
      { label: "Cabinet", value: "Stainless Steel" },
      { label: "IP Rating", value: "IP55" },
      { label: "Weight (incl. printhead)", value: "18.0 kg" }
    ]
  },
  {
    id: "j5500pro",
    name: "Jetronix Industrial Inkjet Printer 5500 Pro",
    tagline: "IP65 washdown build for the wettest lines.",
    type: "Continuous Inkjet Printer (CIJ)",
    category: "cij",
    description:
      "The J5500 platform in a sealed IP65 stainless steel cabinet. Specified for dairy, beverage, cold-fill and any plant where the coder is hosed down along with the rest of the line.",
    imagePlaceholder: "J5500 PRO",
    keyHighlights: [
      "IP65 sealed stainless steel cabinet for washdown areas",
      "Up to 5 lines of print from 1.5 mm character height",
      "Normal (60µ) and Macro (75µ) drop sizes selectable",
      "Line speed up to 9.8 m/sec with PixelPlus enhancement",
      "ciLink networking and full SD / USB / RS232 / Ethernet set"
    ],
    features: [
      "IP65 SEALING: Survives direct washdown and heavy condensation environments.",
      "FIVE-LINE MESSAGES: Full traceability block on a single print pass.",
      "DUAL DROP SIZE: 60µ for fine detail, 75µ for contrast on tough substrates.",
      "PIXELPLUS: Keeps 1.5 mm characters readable at full line speed.",
      "CILINK NETWORKING: Central message management across multiple coders."
    ],
    specs: [
      { label: "Lines of Print", value: "1 to 5" },
      { label: "Character Height", value: "1.5 – 12 mm" },
      { label: "Font Height", value: "5 to 31 dots" },
      { label: "Drop Size", value: "Normal (60µ), Macro (75µ)" },
      { label: "PixelPlus", value: "Yes" },
      { label: "ciPrecisionPlus", value: "Yes" },
      { label: "Line Speed", value: "Up to 9.8 m/sec" },
      { label: "ciLink", value: "Yes" },
      { label: "SD, USB, RS232 and Ethernet", value: "Yes" },
      { label: "Input (photocell / encoder / message select)", value: "2 / 1 / 8" },
      { label: "Outputs (programmable alarms / relay)", value: "3 / 1" },
      { label: "SmartFlush", value: "Yes" },
      { label: "Cabinet", value: "Stainless Steel" },
      { label: "IP Rating", value: "IP65" },
      { label: "Weight (incl. printhead)", value: "18.73 kg" }
    ]
  },
  {
    id: "j5500-auto",
    name: "Jetronix Automatic Batch Coding Machine 5500",
    tagline: "Coding that runs itself once the line starts.",
    type: "Automatic Batch Coding System",
    category: "cij",
    description:
      "A J5500-based coding station configured for lights-out operation. Message selection, product detection and alarm handling are driven by the line PLC, so operators set the batch once and the system codes every unit without further intervention.",
    imagePlaceholder: "J5500 AUTO",
    keyHighlights: [
      "Print resolution up to 600 dpi",
      "Seamless integration with automated production lines",
      "8 programmable inputs for PLC-driven message selection",
      "Line speed up to 11 m/s at 5 drop and 50 dpi",
      "12 months manufacturer's warranty as standard"
    ],
    features: [
      "LINE INTEGRATION: Message select and start/stop driven directly by the PLC.",
      "HIGH RESOLUTION: 600 dpi output for barcodes and 2D codes.",
      "SOFTWARE COMPATIBLE: Works with industry-standard batch coding software.",
      "TOUCH CONTROL: Touch screen display for setup and diagnostics.",
      "STAINLESS CABINET: IP55 stainless steel build for continuous plant duty."
    ],
    specs: [
      { label: "Print Resolution", value: "Up to 600 dpi" },
      { label: "Batch Coding Speed", value: "Up to 30 m/min" },
      { label: "Integration", value: "Seamless integration with automated production lines" },
      { label: "Connectivity", value: "USB, Ethernet, and serial port options" },
      { label: "Control Interface", value: "Touch screen display with user-friendly controls" },
      { label: "Software", value: "Compatible with industry-standard batch coding software" },
      { label: "Operating Temperature", value: "10°C – 40°C" },
      { label: "Assumed usage (hours/year)", value: "3,000 to 8,500" },
      { label: "Lines of Print", value: "1 – 5 lines" },
      { label: "Character Height", value: "1.5 mm to 12 mm" },
      { label: "Font Height", value: "5 to 31 dots" },
      { label: "Line speed at 5 drop and 50 dpi", value: "Up to 11 m/s" },
      { label: "Inputs (photocell / shaft encoder / programmable)", value: "2 / 1 / 8" },
      { label: "Cabinet", value: "Stainless Steel" },
      { label: "IP Rating", value: "IP55" },
      { label: "Weight (incl. printhead)", value: "18 kg" },
      { label: "Warranty", value: "12 months manufacturer's warranty as standard" }
    ]
  },
  {
    id: "j-digital-bc",
    name: "Jetronix Digital Batch Coding Inkjet Printer",
    tagline: "Adjustable drop volume for mixed substrates.",
    type: "Digital Batch Coding Inkjet Printer",
    category: "cij",
    description:
      "A digitally metered coder with drop volume adjustable from 20 to 80 picolitres. Plants running several substrate types on the same line can tune ink laydown per product instead of compromising on one fixed setting.",
    imagePlaceholder: "J-DIGITAL",
    keyHighlights: [
      "Drop volume adjustable from 20 to 80 picolitres",
      "Print resolution up to 600 dpi",
      "Up to 5 lines of print at 1.5 – 12 mm",
      "Digital panel with live status indicators",
      "Stainless steel IP55 cabinet"
    ],
    features: [
      "ADJUSTABLE DROPS: 20–80 pl range tunes ink use to each substrate.",
      "HIGH RESOLUTION: 600 dpi keeps 2D codes scannable first time.",
      "STATUS PANEL: Digital indicators surface fluid and fault states at a glance.",
      "MULTI-SUBSTRATE: Optimised for digital batch coding across varied materials.",
      "STAINLESS CABINET: IP55 stainless steel enclosure for plant conditions."
    ],
    specs: [
      { label: "Print Resolution", value: "Up to 600 dpi" },
      { label: "Print Speed", value: "~25 m/min" },
      { label: "Drop Volume", value: "Adjustable 20–80 picolitres" },
      { label: "Connectivity", value: "USB, Ethernet" },
      { label: "Control Interface", value: "Digital panel with status indicators" },
      { label: "Application", value: "Optimized for digital batch coding on various substrates" },
      { label: "Operating Temperature", value: "10°C – 40°C" },
      { label: "Assumed usage (hours/year)", value: "3,000 to 8,500" },
      { label: "Lines of Print", value: "1 – 5 lines" },
      { label: "Character Height", value: "1.5 mm to 12 mm" },
      { label: "Font Height", value: "5 to 31 dots" },
      { label: "Line speed at 5 drop and 50 dpi", value: "Up to 11 m/s" },
      { label: "Inputs (photocell / shaft encoder / programmable)", value: "2 / 1 / 8" },
      { label: "Cabinet", value: "Stainless Steel" },
      { label: "IP Rating", value: "IP55" },
      { label: "Weight (incl. printhead)", value: "18 kg" },
      { label: "Warranty", value: "12 months manufacturer's warranty as standard" }
    ]
  },
  {
    id: "j-industrial-cij",
    name: "Jetronix Industrial Inkjet Printer",
    tagline: "Built for continuous industrial duty.",
    type: "Industrial Inkjet Printer",
    category: "cij",
    description:
      "A base-configuration industrial coder for plants that want the essentials done well: 600 dpi output, 25–30 m/min throughput and a build specified for continuous running. Connectivity can be customised to match existing plant infrastructure.",
    imagePlaceholder: "J-IND",
    keyHighlights: [
      "Print resolution up to 600 dpi",
      "Print speed 25–30 m/min",
      "Robust construction for continuous industrial use",
      "USB and Ethernet with customisation options",
      "Versatile across inkjet and batch coding applications"
    ],
    features: [
      "CONTINUOUS DUTY: Constructed to run without scheduled cool-down periods.",
      "HIGH RESOLUTION: 600 dpi output for text, barcodes and 2D codes.",
      "CUSTOM CONNECTIVITY: USB and Ethernet, extendable to plant requirements.",
      "APPLICATION RANGE: Handles general inkjet and batch coding duties."
    ],
    specs: [
      { label: "Print Resolution", value: "Up to 600 dpi" },
      { label: "Print Speed", value: "25–30 m/min" },
      { label: "Build", value: "Robust construction for continuous industrial use" },
      { label: "Connectivity", value: "USB, Ethernet (with customization options)" },
      { label: "Features", value: "Versatile for various inkjet and batch coding applications" }
    ]
  },
  {
    id: "j-inkjet-bcm",
    name: "Inkjet Batch Coding Machine",
    tagline: "Fast, repeatable coding to a fixed quality standard.",
    type: "Inkjet Batch Coding Machine",
    category: "cij",
    description:
      "A five-line batch coding machine on a stainless steel IP55 chassis, specified where code consistency is audited. Touchscreen control keeps changeovers quick between SKUs.",
    imagePlaceholder: "J-BCM",
    keyHighlights: [
      "Up to 5 lines of print at 1.5 – 12 mm",
      "Print resolution up to 600 dpi",
      "Line speed up to 11 m/s at 5 drop and 50 dpi",
      "Touchscreen display with user-friendly controls",
      "Stainless steel IP55 cabinet, 12 months warranty"
    ],
    features: [
      "AUDIT-READY CODES: Consistent output that holds up to quality inspection.",
      "QUICK CHANGEOVER: Touchscreen message recall between SKUs.",
      "CUSTOM CONNECTIVITY: USB and Ethernet, extendable to plant requirements.",
      "CONTINUOUS DUTY: Robust construction for uninterrupted industrial use.",
      "STAINLESS CABINET: IP55 stainless steel enclosure."
    ],
    specs: [
      { label: "Print Resolution", value: "Up to 600 dpi" },
      { label: "Print Speed", value: "25–30 m/min" },
      { label: "Build", value: "Robust construction for continuous industrial use" },
      { label: "Connectivity", value: "USB, Ethernet (with customization options)" },
      { label: "Control Interface", value: "Touchscreen display with user-friendly controls" },
      { label: "Operating Temperature", value: "10°C – 40°C" },
      { label: "Assumed usage (hours/year)", value: "3,000 to 8,500" },
      { label: "Lines of Print", value: "1 – 5 lines" },
      { label: "Character Height", value: "1.5 mm to 12 mm" },
      { label: "Font Height", value: "5 to 31 dots" },
      { label: "Line speed at 5 drop and 50 dpi", value: "Up to 11 m/s" },
      { label: "Inputs (photocell / shaft encoder / programmable)", value: "2 / 1 / 8" },
      { label: "Cabinet", value: "Stainless Steel" },
      { label: "IP Rating", value: "IP55" },
      { label: "Weight (incl. printhead)", value: "18 kg" },
      { label: "Warranty", value: "12 months manufacturer's warranty as standard" }
    ]
  },
  {
    id: "j-cij-bcm",
    name: "Jetronix Inkjet Batch Coding Machine",
    tagline: "Extended 15 mm character height for large packs.",
    type: "Inkjet Batch Coding Machine",
    category: "cij",
    description:
      "A high-demand batch coder that pushes character height to 15 mm — useful on shippers, sacks and bulk containers where a 12 mm code is too small to read from a distance. Supports multiple data formats on one message.",
    imagePlaceholder: "J-CIJ-BCM",
    keyHighlights: [
      "Character height up to 15 mm for large-format packs",
      "Supports multiple data formats in one message",
      "Print speed around 30 m/min at 600 dpi",
      "USB, Ethernet and serial integration",
      "Stainless steel IP55 cabinet, 12 months warranty"
    ],
    features: [
      "LARGE CHARACTERS: 15 mm height reads clearly on shippers and bulk sacks.",
      "MULTI-FORMAT: Date, batch, counter, barcode and 2D data in one block.",
      "SERIAL INTEGRATION: USB, Ethernet and serial connections to line systems.",
      "HIGH DEMAND: Sized for high-speed batch coding in industrial settings.",
      "STAINLESS CABINET: IP55 stainless steel enclosure."
    ],
    specs: [
      { label: "Print Resolution", value: "Up to 600 dpi" },
      { label: "Print Speed", value: "~30 m/min" },
      { label: "Batch Coding Capacity", value: "Supports multiple data formats" },
      { label: "Connectivity", value: "USB, Ethernet, serial integration" },
      { label: "Control Interface", value: "Touchscreen display with user-friendly controls" },
      { label: "Application", value: "Designed for high-speed batch coding in industrial settings" },
      { label: "Operating Temperature", value: "10°C – 40°C" },
      { label: "Assumed usage (hours/year)", value: "3,000 to 8,500" },
      { label: "Lines of Print", value: "1 – 5 lines" },
      { label: "Character Height", value: "1.5 mm to 15 mm" },
      { label: "Font Height", value: "5 to 31 dots" },
      { label: "Line speed at 5 drop and 50 dpi", value: "Up to 11 m/s" },
      { label: "Inputs (photocell / shaft encoder / programmable)", value: "2 / 1 / 8" },
      { label: "Cabinet", value: "Stainless Steel" },
      { label: "IP Rating", value: "IP55" },
      { label: "Weight (incl. printhead)", value: "18 kg" },
      { label: "Warranty", value: "12 months manufacturer's warranty as standard" }
    ]
  },
  {
    id: "j-industrial-hv",
    name: "Industrial Inkjet Printer",
    tagline: "High-volume coding across every packaging format.",
    type: "Industrial Inkjet Printer",
    category: "cij",
    description:
      "The high-volume configuration of the industrial platform, specified for plants coding around the clock. Five print lines, 600 dpi resolution and eight programmable inputs cover the full range of packaging applications on one machine.",
    imagePlaceholder: "J-IND-HV",
    keyHighlights: [
      "Engineered for high-volume continuous production",
      "Up to 5 lines of print at 1.5 – 12 mm",
      "Line speed up to 11 m/s at 5 drop and 50 dpi",
      "8 programmable inputs plus photocell and shaft encoder",
      "Stainless steel IP55 cabinet, 12 months warranty"
    ],
    features: [
      "HIGH VOLUME: Specified for plants coding around the clock.",
      "DURABLE CODES: 600 dpi output that survives handling and transit.",
      "PROGRAMMABLE I/O: Eight inputs for line-driven message and mode selection.",
      "TOUCH CONTROL: Touchscreen display with user-friendly controls.",
      "STAINLESS CABINET: IP55 stainless steel enclosure."
    ],
    specs: [
      { label: "Print Resolution", value: "Up to 600 dpi" },
      { label: "Print Speed", value: "25–30 m/min" },
      { label: "Build", value: "Robust construction for continuous industrial use" },
      { label: "Connectivity", value: "USB, Ethernet (with customization options)" },
      { label: "Control Interface", value: "Touchscreen display with user-friendly controls" },
      { label: "Operating Temperature", value: "10°C – 40°C" },
      { label: "Assumed usage (hours/year)", value: "3,000 to 8,500" },
      { label: "Lines of Print", value: "1 – 5 lines" },
      { label: "Character Height", value: "1.5 mm to 12 mm" },
      { label: "Font Height", value: "5 to 31 dots" },
      { label: "Line speed at 5 drop and 50 dpi", value: "Up to 11 m/s" },
      { label: "Inputs (photocell / shaft encoder / programmable)", value: "2 / 1 / 8" },
      { label: "Cabinet", value: "Stainless Steel" },
      { label: "IP Rating", value: "IP55" },
      { label: "Weight (incl. printhead)", value: "18 kg" },
      { label: "Warranty", value: "12 months manufacturer's warranty as standard" }
    ]
  },

  /* ─────────────────────────  THERMAL INKJET (CT SERIES)  ───────────────────────── */
  {
    id: "jt2030",
    name: "JT2030 Jetronix TIJ Printer",
    tagline: "Headless thermal coder for embedded installs.",
    type: "Thermal Inkjet Printer (TIJ)",
    category: "other-inkjet",
    description:
      "A compact integrated-printhead TIJ unit with no onboard display, configured over browser access or RS485. Ideal where the coder sits inside a machine guard and is driven entirely from the line HMI.",
    imagePlaceholder: "CT2030",
    keyHighlights: [
      "Integrated printhead in a 120.6 x 86.1 x 90 mm body",
      "S-Head and H-Head printhead variants available",
      "Maximum print height 1 inch",
      "Inbuilt photocell plus one external input",
      "Bracketry included in the box"
    ],
    features: [
      "EMBEDDED FIT: No display needed — configure via browser or line HMI.",
      "INTEGRATED HEAD: Printhead and controller in one compact housing.",
      "HEAD OPTIONS: S-Head and H-Head variants for different ink chemistries.",
      "PRO UPGRADE: Adds database lookup and remote communication capability.",
      "WIDE LANGUAGE SET: English, German, Korean, Russian, Chinese and many more."
    ],
    specs: [
      { label: "Display", value: "–" },
      { label: "Keyboard", value: "–" },
      { label: "Browser Access", value: "Optional" },
      { label: "Bracketry", value: "Bracketry included" },
      { label: "Dimensions (L x W x H)", value: "120.6 x 86.1 x 90 mm" },
      { label: "Printhead", value: "Integrated" },
      { label: "Printhead Type", value: "S-Head / H-Head" },
      { label: "Maximum Print Height", value: '1"' },
      { label: "Photocell", value: "1x inbuilt, 1x external" },
      { label: "Alarm Beacon Outputs", value: "3" },
      { label: "Spare digital I/O", value: "1 input, 1 output" },
      { label: "TCP/IP", value: "Optional" },
      { label: "USB Ports", value: "2" },
      { label: "RS232 / RS485 Ports", value: "RS485" },
      { label: "Pro Upgrade Available", value: "Adds database and remote communication" },
      { label: "Power Supply", value: "100-240 VAC" }
    ]
  },
  {
    id: "jt2050",
    name: "JT2050 Jetronix TIJ Printer",
    tagline: "Same compact body, with an onboard display.",
    type: "Thermal Inkjet Printer (TIJ)",
    category: "other-inkjet",
    description:
      "The CT2050 adds a 3.5-inch LCD to the compact integrated-printhead platform, so operators can check status and swap messages at the machine without opening a browser session.",
    imagePlaceholder: "CT2050",
    keyHighlights: [
      '3.5" LCD display for at-machine operation',
      "Integrated printhead in a 120.6 x 86.1 x 90 mm body",
      "S-Head and H-Head printhead variants available",
      "Maximum print height 1 inch",
      "Inbuilt photocell plus one external input"
    ],
    features: [
      "ONBOARD DISPLAY: 3.5 inch LCD for status checks and message changes.",
      "INTEGRATED HEAD: Printhead and controller in one compact housing.",
      "HEAD OPTIONS: S-Head and H-Head variants for different ink chemistries.",
      "PRO UPGRADE: Adds database lookup and remote communication capability.",
      "BRACKETRY INCLUDED: Mounting hardware supplied with the unit."
    ],
    specs: [
      { label: "Display", value: '3.5" LCD Display' },
      { label: "Keyboard", value: "–" },
      { label: "Browser Access", value: "Optional" },
      { label: "Bracketry", value: "Bracketry included" },
      { label: "Dimensions (L x W x H)", value: "120.6 x 86.1 x 90 mm" },
      { label: "Printhead", value: "Integrated" },
      { label: "Printhead Type", value: "S-Head / H-Head" },
      { label: "Maximum Print Height", value: '1"' },
      { label: "Photocell", value: "1x inbuilt, 1x external" },
      { label: "Alarm Beacon Outputs", value: "3" },
      { label: "Spare digital I/O", value: "1 input, 1 output" },
      { label: "TCP/IP", value: "Optional" },
      { label: "USB Ports", value: "2" },
      { label: "RS232 / RS485 Ports", value: "RS485" },
      { label: "Pro Upgrade Available", value: "Adds database and remote communication" },
      { label: "Power Supply", value: "100-240 VAC" }
    ]
  },
  {
    id: "jt2200",
    name: "JT2200 Box Coder Inkjet Printer",
    tagline: "Two printheads, 2-inch codes on shipping cases.",
    type: "Box Coder / Thermal Inkjet Printer",
    category: "other-inkjet",
    description:
      "A case-coding controller driving up to two printheads at a 2-inch print height, operated from a 7-inch capacitive touchscreen. Replaces pre-printed shipper labels with printed-on-demand address, batch and barcode blocks.",
    imagePlaceholder: "CT2200",
    keyHighlights: [
      '7" capacitive touchscreen control',
      "Drives up to 2 printheads",
      "Maximum print height 2 inches",
      "S-, H- and T-Heads available separately",
      "3 alarm beacon outputs plus spare digital I/O"
    ],
    features: [
      "CASE CODING: 2 inch print height replaces pre-printed shipper labels.",
      "DUAL HEAD: Code two panels of the same case in one pass.",
      "7-INCH TOUCH: Capacitive touchscreen message building at the line.",
      "HEAD CHOICE: S-, H- and T-Heads ordered to suit substrate and ink.",
      "PRO UPGRADE: Adds database lookup and remote communication capability."
    ],
    specs: [
      { label: "Display", value: '7" capacitive touchscreen' },
      { label: "Keyboard", value: "–" },
      { label: "Browser Access", value: "Optional" },
      { label: "Bracketry", value: "Bracketry purchased separately" },
      { label: "Dimensions (L x W x H)", value: "242 x 158 x 58 mm" },
      { label: "Printhead", value: "Up to 2 printheads" },
      { label: "Printhead Type", value: "S-, H- & T-Heads available separately" },
      { label: "Maximum Print Height", value: '2"' },
      { label: "Photocell", value: "1x external" },
      { label: "Alarm Beacon Outputs", value: "3" },
      { label: "Spare digital I/O", value: "1 input, 1 output" },
      { label: "TCP/IP", value: "Optional" },
      { label: "USB Ports", value: "2" },
      { label: "RS232 / RS485 Ports", value: "RS232" },
      { label: "Pro Upgrade Available", value: "Adds database and remote communication" },
      { label: "Power Supply", value: "100-240 VAC" }
    ]
  },
  {
    id: "jt2400",
    name: "JT2400 Carton Coding Inkjet Printer",
    tagline: "Four printheads, 4-inch codes on cartons.",
    type: "Carton Coder / Thermal Inkjet Printer",
    category: "other-inkjet",
    description:
      "The largest of the CT series: up to four printheads stacked to a 4-inch print height, run from a 10-inch touchscreen. Built for outer cartons, sacks and display packs that carry full graphics and barcode blocks.",
    imagePlaceholder: "CT2400",
    keyHighlights: [
      '10" capacitive touchscreen control',
      "Drives up to 4 printheads",
      "Maximum print height 4 inches",
      "S-, H- and T-Heads available separately",
      "3 alarm beacon outputs plus spare digital I/O"
    ],
    features: [
      "LARGE FORMAT: 4 inch print height covers full carton graphics blocks.",
      "FOUR HEADS: Stack heads for height or spread across multiple panels.",
      "10-INCH TOUCH: Large capacitive screen for complex message layout.",
      "HEAD CHOICE: S-, H- and T-Heads ordered to suit substrate and ink.",
      "PRO UPGRADE: Adds database lookup and remote communication capability."
    ],
    specs: [
      { label: "Display", value: '10" capacitive touchscreen' },
      { label: "Keyboard", value: "–" },
      { label: "Browser Access", value: "Optional" },
      { label: "Bracketry", value: "Bracketry purchased separately" },
      { label: "Dimensions (L x W x H)", value: "320 x 208 x 56 mm" },
      { label: "Printhead", value: "Up to 4 printheads" },
      { label: "Printhead Type", value: "S-, H- & T-Heads available separately" },
      { label: "Maximum Print Height", value: '4"' },
      { label: "Photocell", value: "1x external" },
      { label: "Alarm Beacon Outputs", value: "3" },
      { label: "Spare digital I/O", value: "1 input, 1 output" },
      { label: "TCP/IP", value: "Optional" },
      { label: "USB Ports", value: "2" },
      { label: "RS232 / RS485 Ports", value: "RS232" },
      { label: "Pro Upgrade Available", value: "Adds database and remote communication" },
      { label: "Power Supply", value: "100-240 VAC" }
    ]
  },

  /* ─────────────────────────  ONLINE THERMAL INKJET  ───────────────────────── */
  {
    id: "tij-7in-127",
    name: "Thermal Inkjet Printer 7 Inch Display 12.7mm",
    tagline: "Big screen, compact code height.",
    type: "Thermal Inkjet Printer (TIJ)",
    category: "tij",
    description:
      "A conveyor-mounted thermal inkjet coder pairing a 7-inch operator display with a 12.7 mm coding band. Maintenance-free cartridge operation means no filters, no make-up solvent and no scheduled service window.",
    imagePlaceholder: "TIJ-7-12.7",
    keyHighlights: [
      "7-inch display for intuitive at-line operation",
      "12.7 mm coding area at up to 600 dpi",
      "1 to 4 rows of print, 1–200 characters",
      "Prints text, logos, barcodes and QR codes",
      "Maintenance free cartridge system"
    ],
    features: [
      "MAINTENANCE FREE: Cartridge system needs no filters or make-up solvent.",
      "LARGE DISPLAY: 7-inch panel with real-time status readout.",
      "MULTI-ROW: Up to 4 rows and 200 characters per message.",
      "WIDE SUBSTRATE RANGE: Metal, glass, wood, carton and pouches.",
      "CODE SUPPORT: Graphics, logos, barcodes and QR codes built in."
    ],
    specs: [
      { label: "Control Panel", value: "7-inch display for intuitive operation" },
      { label: "Coding Area Height", value: "12.7 mm" },
      { label: "Print Resolution", value: "Up to 600 dpi" },
      { label: "Connectivity", value: "USB, Ethernet" },
      { label: "Number of Lines", value: "1-4 rows" },
      { label: "Font Selection", value: "Simplified, traditional, numeral, Chinese character, graphics (logo), barcode, QR code etc" },
      { label: "Information Length", value: "1-200 characters" },
      { label: "Ink", value: "Uses ink cartridge" },
      { label: "Printing Material", value: "Metal, glass, wood, carton, pouches etc" },
      { label: "Speed", value: "40 m/min" },
      { label: "Maintenance", value: "Maintenance free" },
      { label: "Nozzle Size", value: "86 x 110 x 60 mm" },
      { label: "Warranty", value: "6 Months" }
    ]
  },
  {
    id: "tij-5in-127",
    name: "Online Thermal Inkjet Printer 5 Inch 12.7mm",
    tagline: "Compact aluminium coder for tight line space.",
    type: "Online Thermal Inkjet Printer",
    category: "tij",
    description:
      "A 5-inch capacitive-screen TIJ unit in an aluminium body, running Linux with 3 GB of onboard message storage. The smallest footprint in the online range, for lines where there is no room for a full cabinet.",
    imagePlaceholder: "TIJ-5-12.7",
    keyHighlights: [
      "5-inch capacitive screen in an aluminium body",
      "12.7 mm coding height at up to 600 dpi",
      "Print speed up to 60 m/min",
      "3 GB free storage for messages and logos",
      "42 ml cartridge capacity"
    ],
    features: [
      "COMPACT FOOTPRINT: Fits lines with no space for a full coder cabinet.",
      "ALUMINIUM BODY: Light but rigid, resists plant knocks and vibration.",
      "HIGH SPEED: 60 m/min throughput from a TIJ thermal foaming nozzle.",
      "ONBOARD STORAGE: 3 GB free space for message and graphic libraries.",
      "COUNTER RANGE: Serial counters from 1 to 50 digits."
    ],
    specs: [
      { label: "Print Width", value: "5 inches" },
      { label: "Coding Area Height", value: "12.7 mm" },
      { label: "Print Resolution", value: "Up to 600 dpi" },
      { label: "Connectivity", value: "USB, Ethernet" },
      { label: "Screen Size", value: "5 inch capacitive screen" },
      { label: "Machine Material", value: "Aluminium body" },
      { label: "Information Storage", value: "3 GB free space" },
      { label: "Product Nozzle", value: "TIJ thermal foaming nozzle" },
      { label: "Count No", value: "1 to 50 digits" },
      { label: "Print Speed", value: "60 m/min" },
      { label: "Operating System", value: "Linux 3.4" },
      { label: "Cartridge Capacity", value: "42 ml" },
      { label: "Warranty", value: "6 Months" }
    ]
  },
  {
    id: "tij-7in-25",
    name: "Online Thermal Inkjet Printer 7 Inch 25mm",
    tagline: "25 mm coding band for larger packs.",
    type: "Online Thermal Inkjet Printer",
    category: "tij",
    description:
      "The widest coding band in the online TIJ range at 25 mm, driven from a 7-inch capacitive screen. Suited to sacks, shippers and larger cartons where a 12.7 mm code would be lost on the panel.",
    imagePlaceholder: "TIJ-7-25",
    keyHighlights: [
      "25 mm coding height — double the standard band",
      "7-inch capacitive screen in an aluminium body",
      "Print speed up to 60 m/min at 600 dpi",
      "3 GB free storage for messages and logos",
      "42 ml cartridge capacity"
    ],
    features: [
      "WIDE BAND: 25 mm coding height for large packaging panels.",
      "ALUMINIUM BODY: Light but rigid, resists plant knocks and vibration.",
      "HIGH SPEED: 60 m/min throughput from a TIJ thermal foaming nozzle.",
      "ONBOARD STORAGE: 3 GB free space for message and graphic libraries.",
      "COUNTER RANGE: Serial counters from 1 to 50 digits."
    ],
    specs: [
      { label: "Print Width", value: "7 inches" },
      { label: "Coding Area Height", value: "25 mm" },
      { label: "Print Resolution", value: "Up to 600 dpi" },
      { label: "Connectivity", value: "USB, Ethernet" },
      { label: "Screen Size", value: "7 inch capacitive screen" },
      { label: "Machine Material", value: "Aluminium body" },
      { label: "Information Storage", value: "3 GB free space" },
      { label: "Product Nozzle", value: "TIJ thermal foaming nozzle" },
      { label: "Count No", value: "1 to 50 digits" },
      { label: "Print Speed", value: "60 m/min" },
      { label: "Operating System", value: "Linux 3.4" },
      { label: "Cartridge Capacity", value: "42 ml" },
      { label: "Warranty", value: "6 Months" }
    ]
  },

  /* ─────────────────────────  HANDHELD BATCH CODERS  ───────────────────────── */
  {
    id: "handy-mrp-25",
    name: "Date MRP Handy Inkjet Printer 25mm",
    tagline: "Walk-up MRP and date coding, 25 mm band.",
    type: "Handheld Batch Coding Machine",
    category: "handheld",
    description:
      "A battery-powered handheld coder configured for Indian MRP and date marking regulations, with a 25 mm print band for clear declaration blocks. Codes cartons and sacks wherever they are stacked, with no conveyor required.",
    imagePlaceholder: "HANDY-MRP-25",
    keyHighlights: [
      "25 mm coding area optimised for date and MRP blocks",
      "Rechargeable battery lasting more than 10 hours",
      "4.3 inch screen with English, Chinese and Arabic",
      "Prints text, time, serial no, logo, QR, barcode and DM code",
      "Metal body, semi-automatic operation"
    ],
    features: [
      "NO CONVEYOR NEEDED: Code stacked cartons and sacks in place.",
      "REGULATORY FIT: 25 mm band sized for MRP and date declarations.",
      "ALL-SHIFT BATTERY: Over 10 hours of runtime per charge.",
      "CODE SUPPORT: Variable QR, barcode and DM code alongside text.",
      "METAL BODY: Survives handling in warehouse and dispatch areas."
    ],
    specs: [
      { label: "Product Type", value: "Hand Printer" },
      { label: "Print Resolution", value: "Up to 600 dpi" },
      { label: "Print Speed", value: "~20 m/min" },
      { label: "Coding Area", value: "25 mm (optimized for date and MRP printing)" },
      { label: "Connectivity", value: "USB, Ethernet" },
      { label: "Material", value: "Metal Body" },
      { label: "Automation Grade", value: "Semi-Automatic" },
      { label: "Voltage", value: "Rechargeable Battery" },
      { label: "Battery Life", value: "More than 10 hours" },
      { label: "Ink Color", value: "Black ink cartridge supplied with machine" },
      { label: "Screen", value: "4.3 inches" },
      { label: "Language", value: "English, Chinese, Arabic" },
      { label: "Print Distance", value: "2-5 mm from nozzle to object" },
      { label: "Print Content", value: "Text, Time, Serial No, Logo, QR Code (Variable), Barcode, DM code" },
      { label: "Warranty", value: "6 Months" }
    ]
  },
  {
    id: "handy-12-7",
    name: "Handy Printer – Batch Code Machine 12.7mm",
    tagline: "Pocketable coder for fast batch marking.",
    type: "Handheld Batch Coding Machine",
    category: "handheld",
    description:
      "The compact handheld in the range, with a 12.7 mm coding band and USB-only connectivity. Built for quick batch and traceability marks where a full line coder would be overkill.",
    imagePlaceholder: "HANDY-12.7",
    keyHighlights: [
      "12.7 mm coding area at up to 600 dpi",
      "Compact and easy to install or carry",
      "Rechargeable battery lasting more than 10 hours",
      "4.3 inch screen with English, Chinese and Arabic",
      "Prints text, time, serial no, logo, QR, barcode and DM code"
    ],
    features: [
      "COMPACT DESIGN: Easy to carry between stations and stores.",
      "FAST MARKING: ~20 m/min for quick batch runs.",
      "ALL-SHIFT BATTERY: Over 10 hours of runtime per charge.",
      "CODE SUPPORT: Variable QR, barcode and DM code alongside text.",
      "METAL BODY: Semi-automatic operation in a durable metal housing."
    ],
    specs: [
      { label: "Product Type", value: "Hand Printer" },
      { label: "Print Resolution", value: "Up to 600 dpi" },
      { label: "Print Speed", value: "~20 m/min" },
      { label: "Coding Area", value: "12.7 mm" },
      { label: "Connectivity", value: "USB" },
      { label: "Design", value: "Compact and easy to install" },
      { label: "Material", value: "Metal Body" },
      { label: "Automation Grade", value: "Semi-Automatic" },
      { label: "Voltage", value: "Rechargeable Battery" },
      { label: "Battery Life", value: "More than 10 hours" },
      { label: "Ink Color", value: "Black ink cartridge supplied with machine" },
      { label: "Screen", value: "4.3 inches" },
      { label: "Language", value: "English, Chinese, Arabic" },
      { label: "Print Distance", value: "2-5 mm from nozzle to object" },
      { label: "Print Content", value: "Text, Time, Serial No, Logo, QR Code (Variable), Barcode, DM code" },
      { label: "Warranty", value: "6 Months" }
    ]
  },
  {
    id: "handy-metal-12-7",
    name: "Metal Body Handy Inkjet Printer 12.7mm",
    tagline: "BE250 — the fastest handheld in the range.",
    type: "Handheld Batch Coding Machine",
    category: "handheld",
    description:
      "Model BE250 in a reinforced metal body, running at roughly 40 m/min — double the speed of the standard handhelds. For dispatch areas that code high volumes by hand.",
    imagePlaceholder: "BE250",
    keyHighlights: [
      "Model BE250 with reinforced metal construction",
      "Print speed ~40 m/min, fastest in the handheld range",
      "12.7 mm coding area at up to 600 dpi",
      "Rechargeable battery lasting more than 10 hours",
      "4.3 inch screen with English, Chinese and Arabic"
    ],
    features: [
      "FASTEST HANDHELD: ~40 m/min for high-volume manual coding.",
      "REINFORCED BODY: Compact metal build for enhanced durability.",
      "ALL-SHIFT BATTERY: Over 10 hours of runtime per charge.",
      "CODE SUPPORT: Variable QR, barcode and DM code alongside text.",
      "SIMPLE CONNECTIVITY: USB transfer for messages and logos."
    ],
    specs: [
      { label: "Model", value: "BE250 (Metal Body)" },
      { label: "Product Type", value: "Hand Printer" },
      { label: "Print Resolution", value: "Up to 600 dpi" },
      { label: "Print Speed", value: "~40 m/min" },
      { label: "Coding Area", value: "12.7 mm" },
      { label: "Connectivity", value: "USB" },
      { label: "Construction", value: "Compact metal body for enhanced durability" },
      { label: "Material", value: "Metal Body" },
      { label: "Automation Grade", value: "Semi-Automatic" },
      { label: "Voltage", value: "Rechargeable Battery" },
      { label: "Battery Life", value: "More than 10 hours" },
      { label: "Ink Color", value: "Black ink cartridge supplied with machine" },
      { label: "Screen", value: "4.3 inches" },
      { label: "Language", value: "English, Chinese, Arabic" },
      { label: "Print Distance", value: "2-5 mm from nozzle to object" },
      { label: "Print Content", value: "Text, Time, Serial No, Logo, QR Code (Variable), Barcode, DM code" },
      { label: "Warranty", value: "6 Months" }
    ]
  },
  {
    id: "handy-metal-25",
    name: "Metal Body Handy Inkjet Printer 25mm",
    tagline: "Rugged 25 mm handheld for mixed packaging.",
    type: "Handheld Batch Coding Machine",
    category: "handheld",
    description:
      "A rugged metal-bodied handheld with the wider 25 mm coding band, for plants that mark a mix of pack sizes and need one portable unit to cover all of them.",
    imagePlaceholder: "HANDY-METAL-25",
    keyHighlights: [
      "25 mm coding area at up to 600 dpi",
      "Rugged metal design for industrial use",
      "Rechargeable battery lasting more than 10 hours",
      "4.3 inch screen with English, Chinese and Arabic",
      "Prints text, time, serial no, logo, QR, barcode and DM code"
    ],
    features: [
      "WIDE BAND: 25 mm coding height covers larger declaration blocks.",
      "RUGGED DESIGN: Metal construction for daily industrial handling.",
      "ALL-SHIFT BATTERY: Over 10 hours of runtime per charge.",
      "CODE SUPPORT: Variable QR, barcode and DM code alongside text.",
      "MIXED PACKAGING: One unit covers varied pack sizes and materials."
    ],
    specs: [
      { label: "Product Type", value: "Hand Printer" },
      { label: "Print Resolution", value: "Up to 600 dpi" },
      { label: "Print Speed", value: "~20 m/min" },
      { label: "Coding Area", value: "25 mm" },
      { label: "Connectivity", value: "USB" },
      { label: "Construction", value: "Rugged metal design for industrial use" },
      { label: "Material", value: "Metal Body" },
      { label: "Automation Grade", value: "Semi-Automatic" },
      { label: "Voltage", value: "Rechargeable Battery" },
      { label: "Battery Life", value: "More than 10 hours" },
      { label: "Ink Color", value: "Black ink cartridge supplied with machine" },
      { label: "Screen", value: "4.3 inches" },
      { label: "Language", value: "English, Chinese, Arabic" },
      { label: "Print Distance", value: "2-5 mm from nozzle to object" },
      { label: "Print Content", value: "Text, Time, Serial No, Logo, QR Code (Variable), Barcode, DM code" },
      { label: "Warranty", value: "6 Months" }
    ]
  },

  /* ─────────────────────────  LASER MARKING  ───────────────────────── */
  {
    id: "laser-cc30f",
    name: "Metal Laser Marking Machine (CC-30F)",
    tagline: "Permanent engraving on metal, no consumables.",
    type: "Laser Marking Machine",
    category: "laser",
    description:
      "A metal-focused laser marker engraving to 0.01–0.03 mm depth at 6000 mm/s. Codes cannot be wiped, solvent-cleaned or relabelled, which makes it the right choice for parts that need permanent traceability.",
    imagePlaceholder: "CC-30F",
    keyHighlights: [
      "Model CC-30F for the metal industry",
      "Marking speed up to 6000 mm/s",
      "Marking depth 0.01–0.03 mm, repeat accuracy ±0.002",
      "100 x 100 mm marking range",
      "20,000 hour working life"
    ],
    features: [
      "ZERO CONSUMABLES: No ink, no solvent, no cartridge spend over its life.",
      "PERMANENT MARKS: Engraved codes cannot be wiped or relabelled.",
      "HIGH ACCURACY: ±0.002 repeat accuracy across the marking field.",
      "LONG LIFE: 20,000 hours of rated source life.",
      "FLEXIBLE CONTROL: Linux or Windows with SD, USB 2.0 and comms interfaces."
    ],
    specs: [
      { label: "Model", value: "CC-30F" },
      { label: "Laser Frequency", value: "20~80 KHz" },
      { label: "Marking Speed", value: "6000 mm/s" },
      { label: "Marking Depth", value: "0.01~0.03 mm" },
      { label: "Usage / Application", value: "Metal industry" },
      { label: "Marking Range", value: "100 x 100 mm" },
      { label: "Automation Grade", value: "Semi-Automatic" },
      { label: "Operating System", value: "Linux or Windows" },
      { label: "Control Interface", value: "SD / USB 2.0 / Communication" },
      { label: "Repeat Accuracy", value: "±0.002" },
      { label: "Working Life", value: "20,000 hours" },
      { label: "Total Weight", value: "About 75 kg" }
    ]
  },
  {
    id: "laser-sf30w",
    name: "Fibre Laser Marking Machine (SF-30W)",
    tagline: "Fibre source, 7000 mm/s, 25 kg footprint.",
    type: "Fibre Laser Marking Machine",
    category: "laser",
    description:
      "A 30 W fibre laser marking at 7000 mm/s and up to 1 mm depth, in a 25 kg package light enough to relocate between cells. Marks metals, plastics and coated industrial materials from one Windows-driven controller.",
    imagePlaceholder: "SF-30W",
    keyHighlights: [
      "Model SF-30W with fibre laser source",
      "Marking speed up to 7000 mm/s — fastest in the range",
      "Marking depth up to 1.0 mm",
      "100 x 100 mm marking range, ±0.002 repeat accuracy",
      "25 kg total weight, 10,000 hour working life"
    ],
    features: [
      "FIBRE SOURCE: Stable beam quality across metals and engineering plastics.",
      "HIGHEST SPEED: 7000 mm/s for high cycle-rate marking cells.",
      "DEEP MARKING: Up to 1.0 mm depth for structural part identification.",
      "PORTABLE: 25 kg total weight, movable between production cells.",
      "STANDARD USB: Windows control over a standard USB interface."
    ],
    specs: [
      { label: "Model", value: "SF-30W" },
      { label: "Laser Frequency", value: "30~60 KHz" },
      { label: "Marking Speed", value: "7000 mm/s" },
      { label: "Marking Depth", value: "≤1.0 mm" },
      { label: "Usage / Application", value: "Industry" },
      { label: "Marking Range", value: "100 x 100 mm" },
      { label: "Laser Device Type", value: "Fiber Laser source" },
      { label: "Operating System", value: "Windows" },
      { label: "Control Interface", value: "Standard USB" },
      { label: "Repeat Accuracy", value: "±0.002" },
      { label: "Working Life", value: "10,000 hours" },
      { label: "Total Weight", value: "25 kg" }
    ]
  },

  /* ─────────────────────────  TTO  ───────────────────────── */
  {
    id: "tto-24x30",
    name: "TTO Printer 24 x 30 mm",
    tagline: "Thermal transfer coding on flexible film.",
    type: "Thermal Transfer Overprinter (TTO)",
    category: "tto",
    description:
      "A thermal transfer overprinter for flow-wrap, VFFS and label web applications, printing a 24 x 30 mm block at 300 dpi. Produces the sharpest small-text and 2D codes of any technology in the range.",
    imagePlaceholder: "TTO-24x30",
    keyHighlights: [
      "Print resolution up to 300 dpi",
      "24 x 30 mm print area",
      "Print speed around 20 m/min",
      "USB and Ethernet connectivity",
      "Supports a range of thermal transfer ribbons"
    ],
    features: [
      "SHARPEST CODES: 300 dpi thermal transfer for fine text and 2D codes.",
      "FILM APPLICATIONS: Designed for flow-wrap, VFFS and label webs.",
      "RIBBON FLEXIBILITY: Runs a range of thermal transfer ribbon grades.",
      "NETWORKED: USB and Ethernet for message management."
    ],
    specs: [
      { label: "Print Resolution", value: "Up to 300 dpi" },
      { label: "Print Speed", value: "~20 m/min" },
      { label: "Print Area", value: "24 x 30 mm" },
      { label: "Connectivity", value: "USB, Ethernet" },
      { label: "Compatibility", value: "Supports various thermal transfer ribbons" }
    ]
  },
  {
    id: "tto-ribbon-33x500",
    name: "TTO Ribbon for TTO Printer 33 x 500 mm",
    tagline: "Matched ribbon stock for TTO printers.",
    type: "Consumable — Thermal Transfer Ribbon",
    category: "tto",
    description:
      "High-durability thermal transfer ribbon in the 33 x 500 mm format, matched to the TTO printer range. Holds colour density and print quality consistently through high-volume runs.",
    imagePlaceholder: "RIBBON-33x500",
    keyHighlights: [
      "33 x 500 mm ribbon format",
      "High-durability thermal transfer material",
      "Engineered for optimal performance with TTO printers",
      "Consistent colour and print quality under high-volume conditions"
    ],
    features: [
      "MATCHED STOCK: Formulated for the Jetronix TTO printer range.",
      "HIGH DURABILITY: Resists scuffing and smudging after printing.",
      "CONSISTENT DENSITY: Holds colour and quality through long runs."
    ],
    specs: [
      { label: "Ribbon Size", value: "33 x 500 mm" },
      { label: "Material", value: "High-durability thermal transfer ribbon" },
      { label: "Application", value: "Engineered for optimal performance with TTO printers" },
      { label: "Features", value: "Consistent color and print quality under high-volume conditions" }
    ]
  },

  /* ─────────────────────────  CONVEYORS  ───────────────────────── */
  {
    id: "conveyor-hd-ms",
    name: "Heavy Duty MS Powder Coated Conveyor System",
    tagline: "High load-bearing frame for heavy coding lines.",
    type: "Conveyor System",
    category: "conveyor",
    description:
      "A mild steel powder coated conveyor built for the heaviest coding duties. The anti-slip, corrosion resistant surface holds product registration under the printhead even with heavy or unstable packs.",
    imagePlaceholder: "CONV-HD-MS",
    keyHighlights: [
      "Mild steel construction with powder coating",
      "High load-bearing design for industrial applications",
      "Customisable length and width to your layout",
      "Anti-slip surface holds registration under the printhead",
      "Corrosion resistant finish"
    ],
    features: [
      "HEAVY LOADS: High load-bearing frame for the heaviest coding duties.",
      "ANTI-SLIP SURFACE: Product stays registered as it passes the printhead.",
      "CORROSION RESISTANT: Powder coated finish for damp plant conditions.",
      "MADE TO SIZE: Length and width built to your line layout."
    ],
    specs: [
      { label: "Construction", value: "Mild Steel with powder coating" },
      { label: "Load Capacity", value: "High load-bearing design for industrial applications" },
      { label: "Dimensions", value: "Customizable (length and width based on requirements)" },
      { label: "Features", value: "Anti-slip surface, corrosion resistant" }
    ]
  },
  {
    id: "conveyor-batch-coding",
    name: "Batch Coding Conveyor Systems",
    tagline: "Synchronised movement for precision coding.",
    type: "Conveyor System",
    category: "conveyor",
    description:
      "A stainless steel flat belt conveyor engineered to integrate directly with batch coding machines. Modular construction keeps installation and later reconfiguration straightforward.",
    imagePlaceholder: "CONV-BATCH",
    keyHighlights: [
      "Engineered to integrate seamlessly with batch coding machines",
      "Stainless steel flat belt at up to 60 m/min",
      "Sturdy steel frame, optimised for light to medium loads",
      "Modular design for easy installation and maintenance",
      "Made in India"
    ],
    features: [
      "CODER INTEGRATION: Designed around batch coding machine mounting.",
      "SYNCHRONISED SPEED: Belt speed matched to printhead trigger timing.",
      "MODULAR BUILD: Sections add or reconfigure without a rebuild.",
      "STAINLESS BELT: Suited to food and pharma plant hygiene requirements."
    ],
    specs: [
      { label: "Design", value: "Engineered to integrate seamlessly with batch coding machines" },
      { label: "Construction", value: "Sturdy steel frame" },
      { label: "Load Capacity", value: "Optimized for light to medium loads" },
      { label: "Features", value: "Modular design for easy installation and maintenance" },
      { label: "Application / Usage", value: "Industries" },
      { label: "Conveyor Type", value: "Belt" },
      { label: "Material", value: "Stainless Steel" },
      { label: "Speed", value: "60 m/min" },
      { label: "Type of Belt Conveyor", value: "Flat belt conveyor" },
      { label: "Country of Origin", value: "Made in India" }
    ]
  },
  {
    id: "conveyor-simple",
    name: "Simple Conveyor Systems for Batch Coding",
    tagline: "Straightforward transport for light lines.",
    type: "Conveyor System",
    category: "conveyor",
    description:
      "A no-frills stainless steel belt conveyor for light to medium production lines. Sized to the customer's layout and priced for plants adding their first inline coder.",
    imagePlaceholder: "CONV-SIMPLE",
    keyHighlights: [
      "Durable steel build, customisable to production needs",
      "Stainless steel flat belt at up to 60 m/min",
      "Suitable for light to medium production lines",
      "Easy integration with batch coding operations",
      "Made in India"
    ],
    features: [
      "ENTRY LEVEL: Sensible first conveyor for plants adding inline coding.",
      "MADE TO SIZE: Dimensions customised to your production needs.",
      "EASY INTEGRATION: Straightforward mounting for batch coding machines.",
      "STAINLESS BELT: Suited to food and pharma plant hygiene requirements."
    ],
    specs: [
      { label: "Construction", value: "Durable steel build" },
      { label: "Dimensions", value: "Customizable to meet production needs" },
      { label: "Features", value: "Designed for ease of integration with batch coding operations" },
      { label: "Application", value: "Suitable for light to medium production lines" },
      { label: "Conveyor Type", value: "Belt" },
      { label: "Material", value: "Stainless Steel" },
      { label: "Speed", value: "60 m/min" },
      { label: "Type of Belt Conveyor", value: "Flat belt conveyor" },
      { label: "Country of Origin", value: "Made in India" }
    ]
  },
  {
    id: "conveyor-roller",
    name: "Roller Conveyor Systems",
    tagline: "Roller transport for cases and cartons.",
    type: "Conveyor System",
    category: "conveyor",
    description:
      "A stainless steel roller conveyor rated to 200 tons, running 8-foot sections with 2-inch rollers. The right transport where flat-bottomed cases and cartons need to move with minimal drive maintenance.",
    imagePlaceholder: "CONV-ROLLER",
    keyHighlights: [
      "Roller-based mechanism with steel rollers on a robust frame",
      "8 foot section length, 200 ton capacity",
      "Stainless steel rollers, 2 inch diameter",
      "Ideal for small to medium packages",
      "Low maintenance and high durability"
    ],
    features: [
      "ROLLER TRANSPORT: Best fit for flat-bottomed cases and cartons.",
      "LOW MAINTENANCE: Far fewer wear parts than a driven belt system.",
      "HIGH CAPACITY: 200 ton rating across the section.",
      "STAINLESS ROLLERS: 2 inch stainless rollers resist plant corrosion."
    ],
    specs: [
      { label: "Design", value: "Roller-based mechanism" },
      { label: "Construction", value: "Steel rollers with a robust frame" },
      { label: "Load Capacity", value: "Ideal for small to medium packages" },
      { label: "Features", value: "Low maintenance and high durability" },
      { label: "Belt Thickness", value: "10 mm" },
      { label: "Length", value: "8 feet" },
      { label: "Capacity", value: "200 ton" },
      { label: "Roller Material", value: "Stainless Steel" },
      { label: "Roller Diameter", value: "2 inch" }
    ]
  },

  /* ─────────────────────────  WINDERS  ───────────────────────── */
  {
    id: "winder-hd-auto",
    name: "Heavy Duty Automatic Rewinding Machine",
    tagline: "3HP fully automatic rewinding with tension control.",
    type: "Winder / Rewinding Machine",
    category: "winder",
    description:
      "A 3HP fully automatic rewinder for heavy industrial rolls, with closed-loop tension control and integrated safety sensors. Keeps web tension constant so labels and foil re-roll without stretch or telescoping.",
    imagePlaceholder: "WINDER-HD",
    keyHighlights: [
      "High-speed, fully automatic operation",
      "3HP motor on 380V, 50Hz supply",
      "Closed-loop tension control with integrated safety sensors",
      "Digital control panel with preset functions",
      "Designed for heavy-duty industrial rolls"
    ],
    features: [
      "TENSION CONTROL: Constant web tension prevents stretch and telescoping.",
      "FULLY AUTOMATIC: Runs unattended once the preset is selected.",
      "SAFETY SENSORS: Integrated sensors stop the drive on fault conditions.",
      "PRESET RECALL: Digital panel stores settings per roll specification.",
      "HEAVY DUTY: 3HP drive sized for large industrial roll diameters."
    ],
    specs: [
      { label: "Rewinding Speed", value: "High-speed, fully automatic operation" },
      { label: "Load Capacity", value: "Designed for heavy-duty industrial rolls" },
      { label: "Control Interface", value: "Digital control panel with preset functions" },
      { label: "Features", value: "Tension control, integrated safety sensors" },
      { label: "Dimensions", value: "Varies based on model and roll size" },
      { label: "Motor Power", value: "3 HP" },
      { label: "Voltage", value: "380 V" },
      { label: "Material", value: "Mild Steel" },
      { label: "Automation Grade", value: "Automatic" },
      { label: "Frequency", value: "50 Hz" },
      { label: "Rewind Diameter", value: "50 mm" }
    ]
  },
  {
    id: "winder-medium-central",
    name: "Medium Central Rewinding Machine",
    tagline: "Central rewind for medium-duty label work.",
    type: "Winder / Rewinding Machine",
    category: "winder",
    description:
      "A medium-duty central rewinder running 10–50 m/min with regulator speed control. Sized for label and film inspection work where a full automatic heavy-duty machine would be over-specified.",
    imagePlaceholder: "WINDER-MED",
    keyHighlights: [
      "Rewinding speed 10–50 m/min",
      "Load capacity up to 10 kg",
      "Regulator-based speed control",
      "Central rewinder configuration",
      "Suitable for medium-duty applications"
    ],
    features: [
      "CENTRAL REWIND: Core-driven winding for consistent roll formation.",
      "VARIABLE SPEED: Regulator control across the 10–50 m/min range.",
      "MEDIUM DUTY: Right-sized for label and film inspection work.",
      "SIMPLE OPERATION: Minimal setup, no programming required."
    ],
    specs: [
      { label: "Rewinding Speed", value: "10-50 m/min" },
      { label: "Load Capacity", value: "Up to 10 kg, suitable for medium-duty applications" },
      { label: "Control Interface", value: "Regulator" },
      { label: "Features", value: "Central rewinder machine" }
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
  { id: "cable_wire", name: "Dark PVC Cable / Wire", defaultText: "JETRONIX Si220   24/05/2026   0562 METERS", recommendedInk: "High-Contrast Opaque Pigment White/Yellow", SvgBackground: "cable" },
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
