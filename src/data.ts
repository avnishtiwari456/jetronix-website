import { Product, FirmDetails, CategoryMeta, ProductCategory, SpecRow, ChannelPartner } from "./types";

export const categories: CategoryMeta[] = [
  { id: "cij", label: "Jetronix Industrial Inkjet", shortLabel: "CIJ Printers",
    description: "Continuous non-contact inkjet printers for high-speed production lines." },
  { id: "tij", label: "Thermal Inkjet Printers", shortLabel: "Thermal Inkjet",
    description: "HP TIJ 2.5 cartridge coders from single head up to six heads." },
  { id: "handheld", label: "Batch Coding Machines", shortLabel: "Handheld",
    description: "Portable battery-powered coders for date, MRP and batch marking." },
  { id: "laser", label: "Laser Marking Machines", shortLabel: "Laser Marking",
    description: "Permanent inkless marking with zero consumables." },
  { id: "tto", label: "TTO Printers", shortLabel: "TTO",
    description: "Thermal transfer overprinters for film, labels and flexible packaging." },
  { id: "conveyor", label: "Coding Conveyors", shortLabel: "Conveyors",
    description: "MS and SS belt conveyors that carry the product past the coder at a set speed." }
];

type Row = [string, string];

/** Specs are reproduced exactly as published on the manufacturer's datasheet. */
function make(
  id: string, name: string, category: ProductCategory, type: string,
  tagline: string, image: string | undefined, rows: Row[],
  description?: string[]
): Product {
  const specs: SpecRow[] = rows.map(([label, value]) => ({ label, value }));
  return { id, name, category, type, tagline, image, description, specs };
}

export const products: Product[] = [
  /* ═══════════  JETRONIX OWN RANGE (from the Jetronix product brochure)  ═══════════ */

  make("s200", "Jetronix S200", "cij", "Continuous Inkjet Printer (CIJ)",
    "High-speed continuous inkjet for non-contact coding on fast production lines.",
    "si220", [
    ["Technology", "Continuous Inkjet (CIJ), small character"],
    ["Nozzle Specifications", "40, 50, 60, 75 and 85 micron"],
    ["Printing Height", "2 - 20 mm"],
    ["Printing Distance", "3 - 30 mm"],
    ["Printing Lines", "1 - 5 lines"],
    ["Printing Speed", "Up to 768 m/min"],
    ["Counters", "More than 20 independent counters"],
    ["Fonts", "5x6L, 7x6L, 7x10L, 9x8L, 9x11L, 11x11L/B, 16x16L/B, 24x24L/B and 32x32L/B"],
    ["Print Content", "Text, time, date and Julian year, shift, serial number, dynamic barcode and QR code, dynamic serial data and dynamic database; further content can be added as required"],
    ["Ink Colours", "Black, red, blue, green, white and invisible"],
    ["Ink Types", "High adhesion, migration resistant, permeable, food grade and oil resistant"],
    ["Printing Material", "Carton, plastic, metal, building material, pipe, stone, cable, glass, electronic components, auto parts, industrial packaging, medical, food and garment"],
    ["Marking", "Non-contact - safe on curved and uneven surfaces"],
    ["Operating System", "Embedded Linux secure operating system"],
    ["Display", "10.1-inch colour industrial touch screen"],
    ["Communication Interface", "Network port, USB and RS232"],
    ["External Interface", "Optical sensor, encoder, reverse and upside-down control, signal light alarm output, serial number output control, external print information selection"],
    ["Protection Level", "IP55"],
    ["Power Supply", "110 - 240 V AC input"],
    ["Rated Power", "150 W"],
    ["Memory", "256 MB"],
    ["Machine Material", "304 stainless steel"],
    ["Machine Size", "447 x 242 x 650 mm (length x width x height)"],
    ["Print Head Conduit", "3 m or 6 m"],
    ["Working Environment", "0 - 45 C, humidity 30 - 70% RH"],
    ["Net Weight", "30 kg"],
    ["Main Hardware", "TI AM3358 industrial-grade CPU with Xilinx Spartan-6 industrial-grade FPGA"],
    ["Certification", "RoHS, CE and BIS"],
    ["Languages", "More than 40 languages including English, Chinese, Arabic, Danish, German, Russian, French, Spanish and Korean"]
  ], [
    "The S200 Plus is a small-character continuous inkjet printer built for production lines that run all day. The print head is an independent structure and the chassis is 304 stainless steel, so it keeps working in the heat, dust and washdown of a real plant rather than only on a clean bench.",
    "The nozzle valve seals directly on the nozzle hole, which is what stops ink leaking during stop-start running, and a double-head pump keeps the ink system stable over long shifts. The white-ink machine adds a double mixing system so the pigment does not settle out between runs.",
    "It prints one to five lines at a character height of 2 to 20 mm, from 3 to 30 mm away from the product, at line speeds up to 768 m/min. Dates, Julian dates, shift codes, serial numbers, barcodes, QR codes and database-driven data all print directly, and more than twenty independent counters run at once.",
    "A 10.1-inch industrial touch screen runs an embedded Linux system on a TI AM3358 processor with a Xilinx FPGA. Network, USB and RS232 are standard, along with optical sensor, encoder, reverse and upside-down printing, alarm output and serial number output. The cabinet is rated IP55 and certified to RoHS, CE and BIS."
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
    ["Printing Height", "2 - 20 mm"],
    ["Printing Distance", "3 - 30 mm"],
    ["Counters", "More than 20 independent counters"],
    ["Print Content", "Text, time, date and Julian year, shift, serial number, dynamic barcode and QR code, dynamic serial data and dynamic database"],
    ["Ink Colours", "Black, red, blue, green, white and invisible"],
    ["Ink Types", "High adhesion, migration resistant, permeable, food grade and oil resistant"],
    ["Marking", "Non-contact - safe on delicate, curved or uneven surfaces"],
    ["Substrates", "Plastic, metal, glass, paper, film"],
    ["Operating System", "Embedded Linux secure operating system"],
    ["Display", "10.1-inch colour industrial touch screen"],
    ["Communication Interface", "Network port, USB and RS232"],
    ["External Interface", "Optical sensor, encoder, reverse and upside-down control, signal light alarm output, serial number output control, external print information selection"],
    ["Protection Level", "IP55"],
    ["Power Supply", "110 - 240 V AC input"],
    ["Rated Power", "150 W"],
    ["Memory", "256 MB"],
    ["Machine Material", "304 stainless steel"],
    ["Machine Size", "447 x 242 x 650 mm (length x width x height)"],
    ["Print Head Conduit", "3 m or 6 m"],
    ["Working Environment", "0 - 45 C, humidity 30 - 70% RH"],
    ["Net Weight", "30 kg"],
    ["Main Hardware", "TI AM3358 industrial-grade CPU with Xilinx Spartan-6 industrial-grade FPGA"],
    ["Certification", "RoHS, CE and BIS"],
    ["Languages", "More than 40 languages including English, Chinese, Arabic, Danish, German, Russian, French, Spanish and Korean"]
  ], [
    "The JX350 is the high-speed machine in the continuous inkjet range, laying five lines of text, barcodes, logos and serial numbers onto product moving past at more than 10 metres per second. A 36 micron nozzle keeps the character crisp at that speed, with a character height from 1.5 to 12 mm.",
    "Printing is non-contact, so curved, delicate and uneven surfaces take a code as cleanly as flat board, and the head can sit anywhere from 3 to 30 mm off the product.",
    "Dates, Julian dates, shift codes, serial numbers, barcodes, QR codes and database-driven data print directly, with more than twenty independent counters running at once. Inks run from food grade through to high-adhesion and migration-resistant grades, in black, red, blue, green, white and invisible.",
    "The cabinet is 304 stainless steel rated IP55, with a 10.1-inch industrial touch screen on an embedded Linux system. Network, USB and RS232 are standard, alongside optical sensor, encoder, reverse and upside-down printing, alarm output and serial number output."
  ]),

  make("jt120", "Jetronix JT120", "tij", "Thermal Inkjet Printer (TIJ)",
    "Single head, 12.7 mm print height.",
    "tij-inline", [
    ["Print Heads", "Single head"],
    ["Print Height", "12.7 mm"],
    ["Print Technology", "Thermal inkjet, TIJ 2.5"],
    ["Cartridge", "12.7 mm and 25.4 mm, convertible by changing the print head plate"],
    ["Cartridge Protection", "RFID"],
    ["Print Resolution", "Up to 600 x 600 dpi, with 300 and 150 dpi selectable for higher speed"],
    ["Print Speed", "Up to 120 m/min at 300 x 600 dpi; 40 m/min at 300 x 300 dpi on the 7-inch controller"],
    ["Throw Distance", "2 - 5 mm"],
    ["Print Density", "5 levels"],
    ["Print Direction", "Left to right, and left to right mirrored"],
    ["Message Height", "Per head: 1 line 12.7 mm, 2 lines 5.92 mm, 3 lines 3.89 mm, 4 lines 2.54 mm, 6 lines 1.69 mm"],
    ["Message Length", "Up to 1 metre, 150 characters per line"],
    ["Messages Stored", "100"],
    ["Print Content", "Text, numbers, date and time, expiry and Julian dates, batch numbers, shift codes, counters, logos, barcodes, QR codes, GS1 codes and variable database data"],
    ["Barcode Symbologies", "Code 39, Code 128, UPCA, UPCE, EAN8, EAN13, EAN14, ITF14, INT25, Code 93, Data Matrix, PDF417, Micro QR, the GS1 DataBar family, GS1-128, GS1-DM, GS1-QR and Aztec"],
    ["Image Formats", "JPG, PNG, BMP, CSS and WEB"],
    ["Fonts", "Windows True Type; any font can be uploaded to the controller"],
    ["PC Software", "MS Excel, MS Access and SQL 2000 / 2005 / 2008"],
    ["Variable Data", "CSV, TXT, XLS and XLSX"],
    ["Ink Types", "Water-based, solvent-based for non-porous surfaces such as plastic, metal and glass, and UV inks"],
    ["Ink Colours", "Black, red, green, blue and white"],
    ["Ink Management", "Automatic ink-type recognition, automatic nozzle switching and cleaning, and an ink consumption calculator"],
    ["Substrates", "Paper, carton board, corrugated boxes, plastic pouches, films, glass, metal, stone, pipe, cable, fibre and aluminium foil"],
    ["Display", "7-inch or 10-inch colour capacitive touch screen"],
    ["Operating System", "Customised Android, quad-core 1.5 GHz with 3 GB storage on the 10-inch controller"],
    ["Connectivity", "USB 2.0 and 3.0, RS232, Gigabit Ethernet, Bluetooth 5.0, photoelectric sensor and encoder interface for conveyor synchronisation"],
    ["Sensors", "PNP and NPN"],
    ["User Management", "3 levels"],
    ["Languages", "Over 20 operating languages, and more can be added"],
    ["Build", "Aluminium alloy and stainless steel body"],
    ["Power Supply", "AC 100 - 240 V, 50/60 Hz; adapter DC 32 V / 5 A"],
    ["Operating Environment", "5 - 50 C, up to 90% humidity, non-condensing"],
    ["Warranty", "1 year"]
  ], [
    "The Jetronix JT120 drives a single print head from one controller for a 12.7 mm coding height. It mounts above the line and prints as the product passes, so nothing touches the pack and curved, uneven or delicate surfaces take a code as cleanly as flat board.",
    "The same head takes the 12.7 mm and the 25.4 mm cartridge - changing the print head plate is all it needs - so the coding height can grow with the job instead of calling for a second printer. A single cartridge prints one 12.7 mm line, or splits the message into as many as six lines at 1.69 mm each, and a message can run a full metre at 150 characters per line.",
    "Resolution goes to 600 x 600 dpi where the code has to scan, and drops to 300 or 150 dpi when line speed matters more than detail. Dates, Julian dates, batch numbers, shift codes, counters, logos, barcodes, QR and GS1 codes all print directly, and variable data comes straight from Excel, CSV or a database.",
    "The controller reads the cartridge and sets itself up: it recognises whether the ink is water- or solvent-based, adjusts the print parameters to match, switches and cleans the nozzles on its own to stretch cartridge life, and keeps a running count of ink used. Cartridges are RFID-protected and three levels of user access keep settings safe on the shop floor.",
    "A photoelectric sensor triggers the print and an encoder input holds the code in register when the conveyor changes speed. USB, RS232, Gigabit Ethernet and Bluetooth 5.0 are all on the controller, and both PNP and NPN sensors connect directly."
  ]),

  make("jt240", "Jetronix JT240", "tij", "Thermal Inkjet Printer (TIJ)",
    "Double head, 25 mm print height.",
    "tij-inline", [
    ["Print Heads", "Double head"],
    ["Print Height", "25 mm"],
    ["Print Technology", "Thermal inkjet, TIJ 2.5"],
    ["Cartridge", "12.7 mm and 25.4 mm, convertible by changing the print head plate"],
    ["Cartridge Protection", "RFID"],
    ["Print Resolution", "Up to 600 x 600 dpi, with 300 and 150 dpi selectable for higher speed"],
    ["Print Speed", "Up to 120 m/min at 300 x 600 dpi; 40 m/min at 300 x 300 dpi on the 7-inch controller"],
    ["Throw Distance", "2 - 5 mm"],
    ["Print Density", "5 levels"],
    ["Print Direction", "Left to right, and left to right mirrored"],
    ["Message Height", "Per head: 1 line 12.7 mm, 2 lines 5.92 mm, 3 lines 3.89 mm, 4 lines 2.54 mm, 6 lines 1.69 mm"],
    ["Message Length", "Up to 1 metre, 150 characters per line"],
    ["Messages Stored", "100"],
    ["Print Content", "Text, numbers, date and time, expiry and Julian dates, batch numbers, shift codes, counters, logos, barcodes, QR codes, GS1 codes and variable database data"],
    ["Barcode Symbologies", "Code 39, Code 128, UPCA, UPCE, EAN8, EAN13, EAN14, ITF14, INT25, Code 93, Data Matrix, PDF417, Micro QR, the GS1 DataBar family, GS1-128, GS1-DM, GS1-QR and Aztec"],
    ["Image Formats", "JPG, PNG, BMP, CSS and WEB"],
    ["Fonts", "Windows True Type; any font can be uploaded to the controller"],
    ["PC Software", "MS Excel, MS Access and SQL 2000 / 2005 / 2008"],
    ["Variable Data", "CSV, TXT, XLS and XLSX"],
    ["Ink Types", "Water-based, solvent-based for non-porous surfaces such as plastic, metal and glass, and UV inks"],
    ["Ink Colours", "Black, red, green, blue and white"],
    ["Ink Management", "Automatic ink-type recognition, automatic nozzle switching and cleaning, and an ink consumption calculator"],
    ["Substrates", "Paper, carton board, corrugated boxes, plastic pouches, films, glass, metal, stone, pipe, cable, fibre and aluminium foil"],
    ["Display", "7-inch or 10-inch colour capacitive touch screen"],
    ["Operating System", "Customised Android, quad-core 1.5 GHz with 3 GB storage on the 10-inch controller"],
    ["Connectivity", "USB 2.0 and 3.0, RS232, Gigabit Ethernet, Bluetooth 5.0, photoelectric sensor and encoder interface for conveyor synchronisation"],
    ["Sensors", "PNP and NPN"],
    ["User Management", "3 levels"],
    ["Languages", "Over 20 operating languages, and more can be added"],
    ["Build", "Aluminium alloy and stainless steel body"],
    ["Power Supply", "AC 100 - 240 V, 50/60 Hz; adapter DC 32 V / 5 A"],
    ["Operating Environment", "5 - 50 C, up to 90% humidity, non-condensing"],
    ["Warranty", "1 year"]
  ], [
    "The Jetronix JT240 drives two print heads from one controller for a 25 mm coding height. It mounts above the line and prints as the product passes, so nothing touches the pack and curved, uneven or delicate surfaces take a code as cleanly as flat board.",
    "The same head takes the 12.7 mm and the 25.4 mm cartridge - changing the print head plate is all it needs - so the coding height can grow with the job instead of calling for a second printer. A single cartridge prints one 12.7 mm line, or splits the message into as many as six lines at 1.69 mm each, and a message can run a full metre at 150 characters per line.",
    "Resolution goes to 600 x 600 dpi where the code has to scan, and drops to 300 or 150 dpi when line speed matters more than detail. Dates, Julian dates, batch numbers, shift codes, counters, logos, barcodes, QR and GS1 codes all print directly, and variable data comes straight from Excel, CSV or a database.",
    "The controller reads the cartridge and sets itself up: it recognises whether the ink is water- or solvent-based, adjusts the print parameters to match, switches and cleans the nozzles on its own to stretch cartridge life, and keeps a running count of ink used. Cartridges are RFID-protected and three levels of user access keep settings safe on the shop floor.",
    "A photoelectric sensor triggers the print and an encoder input holds the code in register when the conveyor changes speed. USB, RS232, Gigabit Ethernet and Bluetooth 5.0 are all on the controller, and both PNP and NPN sensors connect directly."
  ]),

  make("jt360", "Jetronix JT360", "tij", "Thermal Inkjet Printer (TIJ)",
    "Three head, 36 mm print height.",
    "tij-inline", [
    ["Print Heads", "Three head"],
    ["Print Height", "36 mm"],
    ["Print Technology", "Thermal inkjet, TIJ 2.5"],
    ["Cartridge", "12.7 mm and 25.4 mm, convertible by changing the print head plate"],
    ["Cartridge Protection", "RFID"],
    ["Print Resolution", "Up to 600 x 600 dpi, with 300 and 150 dpi selectable for higher speed"],
    ["Print Speed", "Up to 120 m/min at 300 x 600 dpi; 40 m/min at 300 x 300 dpi on the 7-inch controller"],
    ["Throw Distance", "2 - 5 mm"],
    ["Print Density", "5 levels"],
    ["Print Direction", "Left to right, and left to right mirrored"],
    ["Message Height", "Per head: 1 line 12.7 mm, 2 lines 5.92 mm, 3 lines 3.89 mm, 4 lines 2.54 mm, 6 lines 1.69 mm"],
    ["Message Length", "Up to 1 metre, 150 characters per line"],
    ["Messages Stored", "100"],
    ["Print Content", "Text, numbers, date and time, expiry and Julian dates, batch numbers, shift codes, counters, logos, barcodes, QR codes, GS1 codes and variable database data"],
    ["Barcode Symbologies", "Code 39, Code 128, UPCA, UPCE, EAN8, EAN13, EAN14, ITF14, INT25, Code 93, Data Matrix, PDF417, Micro QR, the GS1 DataBar family, GS1-128, GS1-DM, GS1-QR and Aztec"],
    ["Image Formats", "JPG, PNG, BMP, CSS and WEB"],
    ["Fonts", "Windows True Type; any font can be uploaded to the controller"],
    ["PC Software", "MS Excel, MS Access and SQL 2000 / 2005 / 2008"],
    ["Variable Data", "CSV, TXT, XLS and XLSX"],
    ["Ink Types", "Water-based, solvent-based for non-porous surfaces such as plastic, metal and glass, and UV inks"],
    ["Ink Colours", "Black, red, green, blue and white"],
    ["Ink Management", "Automatic ink-type recognition, automatic nozzle switching and cleaning, and an ink consumption calculator"],
    ["Substrates", "Paper, carton board, corrugated boxes, plastic pouches, films, glass, metal, stone, pipe, cable, fibre and aluminium foil"],
    ["Display", "7-inch or 10-inch colour capacitive touch screen"],
    ["Operating System", "Customised Android, quad-core 1.5 GHz with 3 GB storage on the 10-inch controller"],
    ["Connectivity", "USB 2.0 and 3.0, RS232, Gigabit Ethernet, Bluetooth 5.0, photoelectric sensor and encoder interface for conveyor synchronisation"],
    ["Sensors", "PNP and NPN"],
    ["User Management", "3 levels"],
    ["Languages", "Over 20 operating languages, and more can be added"],
    ["Build", "Aluminium alloy and stainless steel body"],
    ["Power Supply", "AC 100 - 240 V, 50/60 Hz; adapter DC 32 V / 5 A"],
    ["Operating Environment", "5 - 50 C, up to 90% humidity, non-condensing"],
    ["Warranty", "1 year"]
  ], [
    "The Jetronix JT360 drives three print heads from one controller for a 36 mm coding height. It mounts above the line and prints as the product passes, so nothing touches the pack and curved, uneven or delicate surfaces take a code as cleanly as flat board.",
    "The same head takes the 12.7 mm and the 25.4 mm cartridge - changing the print head plate is all it needs - so the coding height can grow with the job instead of calling for a second printer. A single cartridge prints one 12.7 mm line, or splits the message into as many as six lines at 1.69 mm each, and a message can run a full metre at 150 characters per line.",
    "Resolution goes to 600 x 600 dpi where the code has to scan, and drops to 300 or 150 dpi when line speed matters more than detail. Dates, Julian dates, batch numbers, shift codes, counters, logos, barcodes, QR and GS1 codes all print directly, and variable data comes straight from Excel, CSV or a database.",
    "The controller reads the cartridge and sets itself up: it recognises whether the ink is water- or solvent-based, adjusts the print parameters to match, switches and cleans the nozzles on its own to stretch cartridge life, and keeps a running count of ink used. Cartridges are RFID-protected and three levels of user access keep settings safe on the shop floor.",
    "A photoelectric sensor triggers the print and an encoder input holds the code in register when the conveyor changes speed. USB, RS232, Gigabit Ethernet and Bluetooth 5.0 are all on the controller, and both PNP and NPN sensors connect directly."
  ]),

  make("jt480", "Jetronix JT480", "tij", "Thermal Inkjet Printer (TIJ)",
    "Four head, 48 mm print height.",
    "tij-kit", [
    ["Print Heads", "Four head"],
    ["Print Height", "48 mm"],
    ["Print Technology", "Thermal inkjet, TIJ 2.5"],
    ["Cartridge", "12.7 mm and 25.4 mm, convertible by changing the print head plate"],
    ["Cartridge Protection", "RFID"],
    ["Print Resolution", "Up to 600 x 600 dpi, with 300 and 150 dpi selectable for higher speed"],
    ["Print Speed", "Up to 120 m/min at 300 x 600 dpi; 40 m/min at 300 x 300 dpi on the 7-inch controller"],
    ["Throw Distance", "2 - 5 mm"],
    ["Print Density", "5 levels"],
    ["Print Direction", "Left to right, and left to right mirrored"],
    ["Message Height", "Per head: 1 line 12.7 mm, 2 lines 5.92 mm, 3 lines 3.89 mm, 4 lines 2.54 mm, 6 lines 1.69 mm"],
    ["Message Length", "Up to 1 metre, 150 characters per line"],
    ["Messages Stored", "100"],
    ["Print Content", "Text, numbers, date and time, expiry and Julian dates, batch numbers, shift codes, counters, logos, barcodes, QR codes, GS1 codes and variable database data"],
    ["Barcode Symbologies", "Code 39, Code 128, UPCA, UPCE, EAN8, EAN13, EAN14, ITF14, INT25, Code 93, Data Matrix, PDF417, Micro QR, the GS1 DataBar family, GS1-128, GS1-DM, GS1-QR and Aztec"],
    ["Image Formats", "JPG, PNG, BMP, CSS and WEB"],
    ["Fonts", "Windows True Type; any font can be uploaded to the controller"],
    ["PC Software", "MS Excel, MS Access and SQL 2000 / 2005 / 2008"],
    ["Variable Data", "CSV, TXT, XLS and XLSX"],
    ["Ink Types", "Water-based, solvent-based for non-porous surfaces such as plastic, metal and glass, and UV inks"],
    ["Ink Colours", "Black, red, green, blue and white"],
    ["Ink Management", "Automatic ink-type recognition, automatic nozzle switching and cleaning, and an ink consumption calculator"],
    ["Substrates", "Paper, carton board, corrugated boxes, plastic pouches, films, glass, metal, stone, pipe, cable, fibre and aluminium foil"],
    ["Display", "7-inch or 10-inch colour capacitive touch screen"],
    ["Operating System", "Customised Android, quad-core 1.5 GHz with 3 GB storage on the 10-inch controller"],
    ["Connectivity", "USB 2.0 and 3.0, RS232, Gigabit Ethernet, Bluetooth 5.0, photoelectric sensor and encoder interface for conveyor synchronisation"],
    ["Sensors", "PNP and NPN"],
    ["User Management", "3 levels"],
    ["Languages", "Over 20 operating languages, and more can be added"],
    ["Build", "Aluminium alloy and stainless steel body"],
    ["Power Supply", "AC 100 - 240 V, 50/60 Hz; adapter DC 32 V / 5 A"],
    ["Operating Environment", "5 - 50 C, up to 90% humidity, non-condensing"],
    ["Warranty", "1 year"]
  ], [
    "The Jetronix JT480 drives four print heads from one controller for a 48 mm coding height. It mounts above the line and prints as the product passes, so nothing touches the pack and curved, uneven or delicate surfaces take a code as cleanly as flat board.",
    "The same head takes the 12.7 mm and the 25.4 mm cartridge - changing the print head plate is all it needs - so the coding height can grow with the job instead of calling for a second printer. A single cartridge prints one 12.7 mm line, or splits the message into as many as six lines at 1.69 mm each, and a message can run a full metre at 150 characters per line.",
    "Resolution goes to 600 x 600 dpi where the code has to scan, and drops to 300 or 150 dpi when line speed matters more than detail. Dates, Julian dates, batch numbers, shift codes, counters, logos, barcodes, QR and GS1 codes all print directly, and variable data comes straight from Excel, CSV or a database.",
    "The controller reads the cartridge and sets itself up: it recognises whether the ink is water- or solvent-based, adjusts the print parameters to match, switches and cleans the nozzles on its own to stretch cartridge life, and keeps a running count of ink used. Cartridges are RFID-protected and three levels of user access keep settings safe on the shop floor.",
    "A photoelectric sensor triggers the print and an encoder input holds the code in register when the conveyor changes speed. USB, RS232, Gigabit Ethernet and Bluetooth 5.0 are all on the controller, and both PNP and NPN sensors connect directly."
  ]),

  make("jt600", "Jetronix JT600", "tij", "Thermal Inkjet Printer (TIJ)",
    "Five head, 60 mm print height.",
    "tij-kit", [
    ["Print Heads", "Five head"],
    ["Print Height", "60 mm"],
    ["Print Technology", "Thermal inkjet, TIJ 2.5"],
    ["Cartridge", "12.7 mm and 25.4 mm, convertible by changing the print head plate"],
    ["Cartridge Protection", "RFID"],
    ["Print Resolution", "Up to 600 x 600 dpi, with 300 and 150 dpi selectable for higher speed"],
    ["Print Speed", "Up to 120 m/min at 300 x 600 dpi; 40 m/min at 300 x 300 dpi on the 7-inch controller"],
    ["Throw Distance", "2 - 5 mm"],
    ["Print Density", "5 levels"],
    ["Print Direction", "Left to right, and left to right mirrored"],
    ["Message Height", "Per head: 1 line 12.7 mm, 2 lines 5.92 mm, 3 lines 3.89 mm, 4 lines 2.54 mm, 6 lines 1.69 mm"],
    ["Message Length", "Up to 1 metre, 150 characters per line"],
    ["Messages Stored", "100"],
    ["Print Content", "Text, numbers, date and time, expiry and Julian dates, batch numbers, shift codes, counters, logos, barcodes, QR codes, GS1 codes and variable database data"],
    ["Barcode Symbologies", "Code 39, Code 128, UPCA, UPCE, EAN8, EAN13, EAN14, ITF14, INT25, Code 93, Data Matrix, PDF417, Micro QR, the GS1 DataBar family, GS1-128, GS1-DM, GS1-QR and Aztec"],
    ["Image Formats", "JPG, PNG, BMP, CSS and WEB"],
    ["Fonts", "Windows True Type; any font can be uploaded to the controller"],
    ["PC Software", "MS Excel, MS Access and SQL 2000 / 2005 / 2008"],
    ["Variable Data", "CSV, TXT, XLS and XLSX"],
    ["Ink Types", "Water-based, solvent-based for non-porous surfaces such as plastic, metal and glass, and UV inks"],
    ["Ink Colours", "Black, red, green, blue and white"],
    ["Ink Management", "Automatic ink-type recognition, automatic nozzle switching and cleaning, and an ink consumption calculator"],
    ["Substrates", "Paper, carton board, corrugated boxes, plastic pouches, films, glass, metal, stone, pipe, cable, fibre and aluminium foil"],
    ["Display", "7-inch or 10-inch colour capacitive touch screen"],
    ["Operating System", "Customised Android, quad-core 1.5 GHz with 3 GB storage on the 10-inch controller"],
    ["Connectivity", "USB 2.0 and 3.0, RS232, Gigabit Ethernet, Bluetooth 5.0, photoelectric sensor and encoder interface for conveyor synchronisation"],
    ["Sensors", "PNP and NPN"],
    ["User Management", "3 levels"],
    ["Languages", "Over 20 operating languages, and more can be added"],
    ["Build", "Aluminium alloy and stainless steel body"],
    ["Power Supply", "AC 100 - 240 V, 50/60 Hz; adapter DC 32 V / 5 A"],
    ["Operating Environment", "5 - 50 C, up to 90% humidity, non-condensing"],
    ["Warranty", "1 year"]
  ], [
    "The Jetronix JT600 drives five print heads from one controller for a 60 mm coding height. It mounts above the line and prints as the product passes, so nothing touches the pack and curved, uneven or delicate surfaces take a code as cleanly as flat board.",
    "The same head takes the 12.7 mm and the 25.4 mm cartridge - changing the print head plate is all it needs - so the coding height can grow with the job instead of calling for a second printer. A single cartridge prints one 12.7 mm line, or splits the message into as many as six lines at 1.69 mm each, and a message can run a full metre at 150 characters per line.",
    "Resolution goes to 600 x 600 dpi where the code has to scan, and drops to 300 or 150 dpi when line speed matters more than detail. Dates, Julian dates, batch numbers, shift codes, counters, logos, barcodes, QR and GS1 codes all print directly, and variable data comes straight from Excel, CSV or a database.",
    "The controller reads the cartridge and sets itself up: it recognises whether the ink is water- or solvent-based, adjusts the print parameters to match, switches and cleans the nozzles on its own to stretch cartridge life, and keeps a running count of ink used. Cartridges are RFID-protected and three levels of user access keep settings safe on the shop floor.",
    "A photoelectric sensor triggers the print and an encoder input holds the code in register when the conveyor changes speed. USB, RS232, Gigabit Ethernet and Bluetooth 5.0 are all on the controller, and both PNP and NPN sensors connect directly."
  ]),

  make("jt720", "Jetronix JT720", "tij", "Thermal Inkjet Printer (TIJ)",
    "Six head, 72 mm print height.",
    "tij-kit", [
    ["Print Heads", "Six head"],
    ["Print Height", "72 mm"],
    ["Print Technology", "Thermal inkjet, TIJ 2.5"],
    ["Cartridge", "12.7 mm and 25.4 mm, convertible by changing the print head plate"],
    ["Cartridge Protection", "RFID"],
    ["Print Resolution", "Up to 600 x 600 dpi, with 300 and 150 dpi selectable for higher speed"],
    ["Print Speed", "Up to 120 m/min at 300 x 600 dpi; 40 m/min at 300 x 300 dpi on the 7-inch controller"],
    ["Throw Distance", "2 - 5 mm"],
    ["Print Density", "5 levels"],
    ["Print Direction", "Left to right, and left to right mirrored"],
    ["Message Height", "Per head: 1 line 12.7 mm, 2 lines 5.92 mm, 3 lines 3.89 mm, 4 lines 2.54 mm, 6 lines 1.69 mm"],
    ["Message Length", "Up to 1 metre, 150 characters per line"],
    ["Messages Stored", "100"],
    ["Print Content", "Text, numbers, date and time, expiry and Julian dates, batch numbers, shift codes, counters, logos, barcodes, QR codes, GS1 codes and variable database data"],
    ["Barcode Symbologies", "Code 39, Code 128, UPCA, UPCE, EAN8, EAN13, EAN14, ITF14, INT25, Code 93, Data Matrix, PDF417, Micro QR, the GS1 DataBar family, GS1-128, GS1-DM, GS1-QR and Aztec"],
    ["Image Formats", "JPG, PNG, BMP, CSS and WEB"],
    ["Fonts", "Windows True Type; any font can be uploaded to the controller"],
    ["PC Software", "MS Excel, MS Access and SQL 2000 / 2005 / 2008"],
    ["Variable Data", "CSV, TXT, XLS and XLSX"],
    ["Ink Types", "Water-based, solvent-based for non-porous surfaces such as plastic, metal and glass, and UV inks"],
    ["Ink Colours", "Black, red, green, blue and white"],
    ["Ink Management", "Automatic ink-type recognition, automatic nozzle switching and cleaning, and an ink consumption calculator"],
    ["Substrates", "Paper, carton board, corrugated boxes, plastic pouches, films, glass, metal, stone, pipe, cable, fibre and aluminium foil"],
    ["Display", "7-inch or 10-inch colour capacitive touch screen"],
    ["Operating System", "Customised Android, quad-core 1.5 GHz with 3 GB storage on the 10-inch controller"],
    ["Connectivity", "USB 2.0 and 3.0, RS232, Gigabit Ethernet, Bluetooth 5.0, photoelectric sensor and encoder interface for conveyor synchronisation"],
    ["Sensors", "PNP and NPN"],
    ["User Management", "3 levels"],
    ["Languages", "Over 20 operating languages, and more can be added"],
    ["Build", "Aluminium alloy and stainless steel body"],
    ["Power Supply", "AC 100 - 240 V, 50/60 Hz; adapter DC 32 V / 5 A"],
    ["Operating Environment", "5 - 50 C, up to 90% humidity, non-condensing"],
    ["Warranty", "1 year"]
  ], [
    "The Jetronix JT720 drives six print heads from one controller for a 72 mm coding height. It mounts above the line and prints as the product passes, so nothing touches the pack and curved, uneven or delicate surfaces take a code as cleanly as flat board.",
    "The same head takes the 12.7 mm and the 25.4 mm cartridge - changing the print head plate is all it needs - so the coding height can grow with the job instead of calling for a second printer. A single cartridge prints one 12.7 mm line, or splits the message into as many as six lines at 1.69 mm each, and a message can run a full metre at 150 characters per line.",
    "Resolution goes to 600 x 600 dpi where the code has to scan, and drops to 300 or 150 dpi when line speed matters more than detail. Dates, Julian dates, batch numbers, shift codes, counters, logos, barcodes, QR and GS1 codes all print directly, and variable data comes straight from Excel, CSV or a database.",
    "The controller reads the cartridge and sets itself up: it recognises whether the ink is water- or solvent-based, adjusts the print parameters to match, switches and cleans the nozzles on its own to stretch cartridge life, and keeps a running count of ink used. Cartridges are RFID-protected and three levels of user access keep settings safe on the shop floor.",
    "A photoelectric sensor triggers the print and an encoder input holds the code in register when the conveyor changes speed. USB, RS232, Gigabit Ethernet and Bluetooth 5.0 are all on the controller, and both PNP and NPN sensors connect directly."
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
    "handheld-inuse", [
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

  make("jlc30", "Jetronix JLC30", "laser", "CO2 Laser Coding Machine",
    "30 W CO2 laser for permanent, consumable-free coding.",
    "laser-co2", [
    ["Model", "JLC30"],
    ["Laser Power", "30 W"],
    ["Technology", "CO2 laser, intelligent vector control algorithm"],
    ["Marking Speed", "Up to 1500 characters/second"],
    ["Working Life", "MTBF more than 50,000 hours"],
    ["Operation", "24 hours continuous"],
    ["Consumables", "None - permanent identification"],
    ["Substrates", "Film, plastic, glass, leather and other materials"],
    ["Installation", "Conveyor line or punch packing machine"],
    ["Startup", "One-button, auto-jump to running mode"]
  ]),

  make("jlc60", "Jetronix JLC60", "laser", "CO2 Laser Coding Machine",
    "60 W CO2 laser for deeper marks and tougher substrates.",
    "laser-inline", [
    ["Model", "JLC60"],
    ["Laser Power", "60 W"],
    ["Technology", "CO2 laser, intelligent vector control algorithm"],
    ["Marking Speed", "Up to 1500 characters/second"],
    ["Working Life", "MTBF more than 50,000 hours"],
    ["Operation", "24 hours continuous"],
    ["Consumables", "None - permanent identification"],
    ["Substrates", "Film, plastic, glass, leather and other materials"],
    ["Installation", "Conveyor line or punch packing machine"],
    ["Startup", "One-button, auto-jump to running mode"]
  ]),

  make("jcv200", "Jetronix Coding Conveyor", "conveyor", "MS / SS Coding Conveyor",
    "Carries the product past the printhead at a set speed, in 450 mm and 750 mm frame widths.",
    "conveyor", [
    ["Frame Material", "Mild steel 2 mm, powder coated; stainless steel on request"],
    ["Conveyor Size", "Width 450 or 750 mm x Length 1200 mm x Height 750 mm; 7 ft length on the carton drop build"],
    ["Belt Size", "Width 300 or 600 mm x Length 2400 mm x Thickness 2 mm"],
    ["Belt", "PVC black belt; imported Korean belt on the 7 ft build"],
    ["Motor", "Abron 0.25 HP; 0.5 HP single phase on the 7 ft build"],
    ["Gearbox", "Abron 0.25 or 0.5 HP"],
    ["Drive", "Crompton / Delta 0.5 HP"],
    ["Speed Control", "AC variable speed"],
    ["Speed Range", "5 to 30 metres per minute"],
    ["Throughput", "Up to 100 pieces per minute on the carton drop build"],
    ["Control Panel", "Panel support for the drive, supplied with complete fitting"],
    ["Belt Adjustment", "Adjustable from both sides"],
    ["Height Adjustment", "Plus or minus 50 mm"],
    ["Guides", "One side fixed guide as standard; both sides fixed on the carton drop build"],
    ["Carton Drop Option", "Automatic carton drop for cartons 50 mm to 355 mm, with fanner attachment for product tension"],
    ["Construction", "Modular design with bolted construction"],
    ["Load", "0.5 kW"],
    ["Pairs With", "CIJ, TIJ and laser coders"]
  ], [
    "The coding conveyor carries the product past the printhead at a steady, set speed, which is what a CIJ, TIJ or laser coder needs to lay a clean code. It is built in two standard frame widths: 450 mm on a 300 mm belt for pouches, bottles and small cartons, and 750 mm on a 600 mm belt for shippers and wider packs.",
    "A 0.25 HP Abron motor drives through the gearbox, and a Crompton or Delta variable-speed drive sets the belt anywhere between 5 and 30 metres per minute, so the line is matched to the coder rather than the other way round. The drive panel is supplied supported and fitted.",
    "The belt adjusts for tracking from both sides and the frame height moves 50 mm up or down, which is what sets the throw distance under the printhead. A fixed guide holds the product square as it passes the code position.",
    "A seven-foot automatic carton drop build is available for production runs: cartons feed themselves rather than being placed by an operator, it takes carton sizes from 50 mm to 355 mm at up to 100 pieces a minute, and a fanner attachment holds tension on the stack so pieces arrive singly instead of overlapping. It runs a 0.5 HP single-phase drive train on an imported Korean belt, with fixed guides on both sides.",
    "Construction throughout is modular and bolted rather than welded, so sections can be changed or extended later. The standard build is 2 mm mild steel, powder coated, with stainless steel available where the line calls for a washdown finish."
  ]),

  /* ═══════════  DISTRIBUTED RANGE (manufacturer datasheets)  ═══════════ */

];

export const jointVentures: FirmDetails[] = [
  {
    name: "RUNICHA ENTERPRISES",
    address: "119, Jagdish Niwas Shubham place near sch. No.51, Indore, Madhya Pradesh - 452006",
    contactPerson: "Tarun Chouhan",
    phone: "+91 95222 99975",
    email: "Tarun.chouhan@runichaenterprises.com",
    city: "Indore"
  },
  {
    name: "BEST CODE TECHNOLOGY INDIA",
    address: "Plot No.111 Tirupati Vihar-A, Macheda, Jaipur, Rajasthan - 302013",
    contactPerson: "Akash Singh Rathore",
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

/** Regional channel partners, as supplied by the company. */
export const channelPartners: ChannelPartner[] = [
  { name: "Jetronix Technology India LLP", region: "Delhi & UP", phone: "7726806099" },
  { name: "Runicha Enterprises", region: "Central India", phone: "9522299975" },
  { name: "Sky Tronics Corp", region: "Rajasthan & Gujarat", phone: "9828106099" },
  { name: "Jet Printing", region: "Himachal & Uttarakhand", phone: "8949210310" }
];

/** The company's own WhatsApp number, not a partner's. */
export const companyPhone = "7726806099";

/** Registered office, as supplied by the company. */
export const companyAddress =
  "G24-26, Ground Floor, Arg North Avenue, Road No. 9, VKI Area, Jaipur - 302013";

/**
 * The company's social profiles, as supplied. `icon` names the glyph the
 * footer draws; "whatsapp" uses the in-house WhatsApp mark.
 */
export const socialLinks: { label: string; icon: string; url: string }[] = [
  {
    label: "LinkedIn",
    icon: "linkedin",
    // Supplied as a LinkedIn settings URL, which only opens for the account
    // owner. Swap in the public company page URL once it exists.
    url: "https://www.linkedin.com/public-profile/settings/"
  },
  {
    label: "WhatsApp Channel",
    icon: "whatsapp",
    url: "https://whatsapp.com/channel/0029VbDfETRHAdNTchYWZY1z"
  },
  {
    label: "Instagram",
    icon: "instagram",
    url: "https://www.instagram.com/jetronix_printech_india_llp"
  },
  {
    label: "Facebook",
    icon: "facebook",
    url: "https://www.facebook.com/share/1DyPQRoMqR/"
  },
  {
    label: "YouTube",
    icon: "youtube",
    url: "https://youtube.com/@jetronix_printech_india_llp"
  }
];

/**
 * Customers, as supplied by the company. Drop a logo file into
 * public/clients and name it here; until then the strip shows the name.
 */
export const customers: { name: string; logo?: string }[] = [
  { name: "Emami Agrotech", logo: "emami-agrotech.png" },
  { name: "ITC Ltd", logo: "itc.png" },
  { name: "Shyam Dhani Industries Ltd", logo: "shyam-dhani.jpg" },
  { name: "Patanjali", logo: "patanjali.svg" },
  { name: "Cipla", logo: "cipla.svg" },
  { name: "Glenmark", logo: "glenmark.png" },
  { name: "Rubicon Pharma", logo: "rubicon-pharma.png" },
  { name: "H&H", logo: "hh.jpg" },
  { name: "Omsons Marketing", logo: "omsons.jpg" },
  { name: "KRM Aqua Blues", logo: "krm-aqua-blues.jpg" },
  { name: "Bisleri International", logo: "bisleri.png" },
  { name: "Rail Neer", logo: "rail-neer.jpg" },
  { name: "Mehta Cosmetics", logo: "mehta-cosmetics.jpg" },
  { name: "Parivar Healthcare Pvt Ltd", logo: "parivar-healthcare.jpg" },
  { name: "Oswal Soap", logo: "oswal-soap.png" }
];
