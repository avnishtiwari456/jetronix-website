import React, { useState } from "react";
import { motion } from "motion/react";
import { categories } from "../data";
import { 
  Award, ShieldCheck, Zap, ArrowRight, Building, Clock, 
  RefreshCw, FileText, Settings, Sparkles, Cpu, 
  Layers, CheckCircle, Flame, Minimize, Maximize, Printer, Sliders,
  HelpCircle as QuestionIcon, Plus, Eye, AlertCircle, Phone, Mail, MapPin,
  ChevronDown, GlassWater, UtensilsCrossed, Dna, Cigarette, Factory, Scissors,
  Gauge, HelpCircle
} from "lucide-react";

interface HomeOverviewProps {
  onNavigate: (page: string) => void;
  onNavigateToProduct: (productId?: string, category?: string) => void;
  onExploreProducts: () => void;
  onOpenCalculator: () => void;
}

const featuredProducts = [
  {
    id: "s200",
    categoryId: "cij",
    name: "Jetronix S200",
    category: "Continuous Inkjet (CIJ)",
    type: "Workhorse Primary Coder",
    desc: "High-speed continuous inkjet for non-contact coding on fast production lines. Prints text, batch codes, dates and barcodes on plastic, metal and glass.",
    image: "/products/si220.jpg",
    imageWebp: "/products/si220.webp",
    specs: {
      speed: "Up to 5 lines of print",
      resolution: "Non-contact dot matrix",
      ink: "Smart auto-cleaning",
      substrates: "Plastic, Metal, Glass, Paper, Film"
    },
    badge: "Bestseller"
  },
  {
    id: "jx350",
    categoryId: "cij",
    name: "Jetronix JX350",
    category: "Continuous Inkjet (CIJ)",
    type: "High-Speed Line Coder",
    desc: "A 36 micron nozzle and 5-to-31 drop font matrix hold code quality on conveyors running past 10 metres per second.",
    image: "/products/jx350.jpg",
    imageWebp: "/products/jx350.webp",
    specs: {
      speed: "Past 10 m/sec",
      resolution: "1.5 - 12 mm characters",
      ink: "36 micron nozzle",
      substrates: "Plastic, Metal, Glass, Cables"
    },
    badge: "High Speed"
  },
  {
    id: "jt240",
    categoryId: "tij",
    name: "Jetronix JT240",
    category: "Thermal Inkjet (TIJ)",
    type: "Double-Head Cartridge Coder",
    desc: "HP TIJ 2.5 cartridge coding at up to 600 DPI. The print head is replaced with every cartridge, so there is nothing to clean or flush.",
    image: "/products/tij-inline.jpg",
    imageWebp: "/products/tij-inline.webp",
    specs: {
      speed: "Up to 120 m/min",
      resolution: "600 x 600 DPI",
      ink: "Water, solvent & UV-curable",
      substrates: "Cartons, Plastics, Metals, Foils"
    },
    badge: "Maintenance-Free"
  },
  {
    id: "jh250",
    categoryId: "handheld",
    name: "Jetronix JH250",
    category: "Handheld Printer",
    type: "Portable MRP & Date Coder",
    desc: "Battery-powered handheld coding with a 25 mm print band. Codes stacked cartons and sacks wherever they are, with no conveyor required.",
    image: "/products/handheld-front.jpg",
    imageWebp: "/products/handheld-front.webp",
    specs: {
      speed: "Rechargeable, all shift",
      resolution: "Up to 600 DPI",
      ink: "Fast-drying cartridge",
      substrates: "Carton, Metal, Glass, Wood"
    },
    badge: "Portable"
  },
  {
    id: "jlc60",
    categoryId: "laser",
    name: "Jetronix JLC60",
    category: "CO2 Laser Coding",
    type: "60 W Permanent Inkless Marker",
    desc: "Marks up to 1500 characters per second with no consumables at all. Permanent, high-contrast codes for traceability and anti-counterfeiting.",
    image: "/products/laser-co2.jpg",
    imageWebp: "/products/laser-co2.webp",
    specs: {
      speed: "1500 characters/sec",
      resolution: "Permanent laser etch",
      ink: "None - zero consumables",
      substrates: "Film, Plastic, Glass, Leather"
    },
    badge: "Zero Consumables"
  },
  {
    id: "tt750",
    categoryId: "tto",
    name: "Linx TT 750",
    category: "Thermal Transfer (TTO)",
    type: "Flexible Packaging Overprinter",
    desc: "Thermal transfer overprinting on film, labels and gloss card without compressed air. Supplied, installed and serviced across India by Jetronix.",
    image: "/products/tto-linx.jpg",
    imageWebp: "/products/tto-linx.webp",
    specs: {
      speed: "No compressed air",
      resolution: "Electronic pressure control",
      ink: "Wax/Resin thermal ribbons",
      substrates: "Film, Labels, Gloss Card"
    },
    badge: "Linx Distributed"
  }
];

export default function HomeOverview({ onNavigate, onNavigateToProduct, onExploreProducts, onOpenCalculator }: HomeOverviewProps) {
  
  // Interactive States
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [activeBlogTab, setActiveBlogTab] = useState<string>("All");
  const [activeProductFilter, setActiveProductFilter] = useState<string>("All");
  const [isCorporateReadMore, setIsCorporateReadMore] = useState<boolean>(false);
  const [activeArticleModal, setActiveArticleModal] = useState<string | null>(null);

  // Redesigned Technologies List with icons and rich specs
  const technologies = [
    { 
      name: "Automation", 
      icon: Sliders,
      desc: "Synchronized conveyor encoder integrations, automated alert triggers & multi-line print management.",
      speed: "Encoder matched",
      ink: "N/A",
      specs: "Supports Modbus TCP, EtherNet/IP & OPC UA protocols."
    },
    { 
      name: "Case and Pallet Labelling", 
      icon: Layers,
      desc: "High velocity label printing with high-accuracy apply arms directly onto moving corrugated shippers and wrapped pallets.",
      speed: "Up to 120 cartons/min",
      ink: "Thermal Transfer Ribbons",
      specs: "Integrated GS1-128 barcode check."
    },
    { 
      name: "Code Verification", 
      icon: ShieldCheck,
      desc: "Vision camera systems verifying print presence, text readability & 2D DataMatrix compliance with auto-reject logic.",
      speed: "Up to 1000 items/min",
      ink: "N/A",
      specs: "99.99% inspection accuracy SLA."
    },
    { 
      name: "CO2 Lasers", 
      icon: Zap,
      desc: "High power laser marking systems engraving pristine, permanent batch codes on paperboards, glass bottles, and PET films.",
      speed: "Up to 800 m/min",
      ink: "Inkless (Permanent ablation)",
      specs: "Wave band options: 10.6µm, 10.2µm & 9.3µm."
    },
    { 
      name: "Continuous Inkjet Printing", 
      icon: Cpu,
      desc: "Industrial workhorse models like the Jetronix S200 firing fine droplets continuously onto any curved, uneven or high-speed substrates.",
      speed: "Up to 768 m/min",
      ink: "Certified MEK/Ethanol bases",
      specs: "Nozzle size: 60µm & 70µm options."
    },
    { 
      name: "Digital Printing", 
      icon: Printer,
      desc: "High resolution monochrome print bars and full color web presses for variable barcodes, serial codes, and high-quality labels.",
      speed: "Up to 300 m/min",
      ink: "UV curable & water-based",
      specs: "600 DPI physical print density."
    },
    { 
      name: "Fibre Lasers", 
      icon: Flame,
      desc: "Precision ultra-fine lasers engineered to mark bare metals, high-density plastics, extruded cables, and electronics components.",
      speed: "High speed engraving",
      ink: "Inkless",
      specs: "Life cycle up to 100,000 hours."
    },
    { 
      name: "Large Character Printing", 
      icon: Maximize,
      desc: "Piezzo-electric drop-on-demand ink heads firing large messages and high-contrast outer box graphics directly onto brown shippers.",
      speed: "Up to 200 m/min",
      ink: "Oil-based black & pigments",
      specs: "Print height up to 70mm per head."
    },
    { 
      name: "Thermal Inkjet Printing", 
      icon: RefreshCw,
      desc: "High resolution cartridge printers perfect for clean pharmaceutical blistering foil paths, folding cartons, and surgical packs.",
      speed: "Up to 300 m/min",
      ink: "Fast dry water & solvent cartridges",
      specs: "Supports dynamic GS1 2D DataMatrix."
    },
    { 
      name: "Thermal Transfer Overprinters", 
      icon: RefreshCw,
      desc: "Ribbon-saving overprinters producing premium high contrast date codes on flexible packaging baggers, pillow packs, and flow wrappers.",
      speed: "Up to 1000 mm/sec",
      ink: "Wax/Resin high-density ribbon",
      specs: "300 DPI high-speed printheads."
    }
  ];

  // Redesigned Industries with specialized icons and visual colors
  const industries = [
    { 
      name: "Beverage", 
      icon: GlassWater,
      color: "from-sky-500/10 to-blue-500/5 text-sky-600 border-sky-100 hover:border-sky-300 hover:shadow-sky-500/10",
      activeBg: "bg-sky-50/70 border-sky-500 text-sky-700 shadow-sky-500/10",
      accentColor: "#0284c7",
      desc: "FMCG aluminum cans, PET bottling lines, glass beer bottles & tetrapaks with fast-dry high-contrast inks.",
      speed: "120,000 cans/hour",
      bestTech: "Continuous Inkjet (S200) & CO2 Lasers"
    },
    { 
      name: "Food", 
      icon: UtensilsCrossed,
      color: "from-amber-500/10 to-orange-500/5 text-amber-600 border-amber-100 hover:border-amber-300 hover:shadow-amber-500/10",
      activeBg: "bg-amber-50/70 border-amber-500 text-amber-700 shadow-amber-500/10",
      accentColor: "#d97706",
      desc: "Flexible packaging poly bags, standup pouches, frozen food cartons, and egg marking with food-grade certified inks.",
      speed: "Multi-row high velocity wrappers",
      bestTech: "Thermal Transfer Overprinters & Continuous Inkjet"
    },
    { 
      name: "Life Sciences", 
      icon: Dna,
      color: "from-emerald-500/10 to-teal-500/5 text-emerald-600 border-emerald-100 hover:border-emerald-300 hover:shadow-emerald-500/10",
      activeBg: "bg-emerald-50/70 border-emerald-500 text-emerald-700 shadow-emerald-500/10",
      accentColor: "#059669",
      desc: "Pharma vials, glass bottles, blister foil paths, surgical packs and medical device serialization with 2D DataMatrix verification.",
      speed: "High-accuracy static/dynamic",
      bestTech: "Thermal Inkjet & Vision Verification"
    },
    { 
      name: "Tobacco", 
      icon: Cigarette,
      color: "from-red-500/10 to-rose-500/5 text-rose-600 border-rose-100 hover:border-rose-300 hover:shadow-rose-500/10",
      activeBg: "bg-rose-50/70 border-rose-500 text-rose-700 shadow-rose-500/10",
      accentColor: "#e11d48",
      desc: "High velocity cigarette pack and master shipper outer box stamping, tracking tax stamps & anti-counterfeiting tracking.",
      speed: "1,000 packs/min",
      bestTech: "High Speed CO2 Lasers & Fibre Lasers"
    },
    { 
      name: "Industrial", 
      icon: Factory,
      color: "from-blue-600/10 to-indigo-600/5 text-blue-600 border-blue-100 hover:border-blue-300 hover:shadow-blue-500/10",
      activeBg: "bg-blue-50/70 border-blue-600 text-blue-700 shadow-blue-600/10",
      accentColor: "#2563eb",
      desc: "Extruded power cables, dark rubber hoses, PVC conduits, steel pipes, automotive parts and aerospace assembly tracking.",
      speed: "Continuous wire lines",
      bestTech: "Continuous Inkjet (Opaque Pigments) & Fibre Lasers"
    },
    { 
      name: "Beauty & Grooming", 
      icon: Scissors,
      color: "from-purple-500/10 to-violet-500/5 text-purple-600 border-purple-100 hover:border-purple-300 hover:shadow-purple-500/10",
      activeBg: "bg-purple-50/70 border-purple-500 text-purple-700 shadow-purple-500/10",
      accentColor: "#9333ea",
      desc: "Glass perfume containers, shampoo plastic bottles, cosmetic cream jars, metal makeup tubes & cardboard retail boxes.",
      speed: "High-end visual alignment",
      bestTech: "CO2 Lasers & Continuous Inkjet"
    }
  ];

  // News, Blogs, and Case studies
  const blogPosts = [
    {
      id: "b1",
      category: "Blog",
      title: "Printing Reliable 2D Codes for GS1-Compliant Labels and Packaging",
      desc: "How Indian manufacturers can implement secure, high-contrast 2D DataMatrix codes to adhere to the latest CGST, SGST tax standards and export regulations.",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
      date: "June 24, 2026"
    },
    {
      id: "b2",
      category: "Blog",
      title: "Why Certified Inks Are the Better Choice in Digital Inkjet Printing",
      desc: "Avoid nozzle-clogging and print degradation. We analyze viscosity metrics of original solvent bases against third-party duplicate inks to prove the true cost of ownership.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      date: "May 18, 2026"
    },
    {
      id: "b3",
      category: "News",
      title: "Runicha and Best Code hold joint engineering summit in Jaipur",
      desc: "Announcing key engineering milestones under our joint venture with Runicha Enterprises. Central India and Rajasthan workshops merge capacities to guarantee a 4-hour field response SLA.",
      img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80",
      date: "April 10, 2026"
    },
    {
      id: "b4",
      category: "Case Studies",
      title: "Pharma Giant slashes downtime by 40% using automated TIJ Cartridge Systems",
      desc: "A major pharmaceutical bottling line in Indore Manesar successfully deployed 12 thermal inkjet heads with vision inspect cameras to guarantee zero misprints on blister paths.",
      img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
      date: "March 29, 2026"
    },
    {
      id: "b5",
      category: "News",
      title: "Vapor Reclamation Systems: Compliance guidelines for the Eco-Safety standards",
      desc: "New guidelines published for manufacturing hubs to adopt active solvent recycling, reducing organic VOC emissions on high-speed continuous beverage lines.",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
      date: "February 15, 2026"
    }
  ];

  const filteredPosts = activeBlogTab === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeBlogTab);

  return (
    <div className="space-y-24 pb-24 bg-[#f8fafc]" id="home-overview-container">
      
      {/* SECTION 1: Jetronix Product Portfolio */}
      <section className="bg-slate-50 border-y border-slate-200/60 py-16 px-4 md:px-8" id="jetronix-product-portfolio">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Header Block */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-slate-200/80 pb-6">
            <div className="text-center md:text-left space-y-2">
              <span className="text-[#2564AF] text-[10px] font-bold uppercase tracking-widest font-mono bg-blue-100/60 border border-blue-200 px-3.5 py-1.5 rounded-full">
                Jetronix Industrial Portfolio
              </span>
              <h3 className="text-3xl font-black text-[#122540] uppercase tracking-tight mt-2">
                Our Core Coding Range
              </h3>
              <p className="text-slate-500 text-xs md:text-sm font-medium max-w-2xl leading-relaxed">
                Explore the complete Jetronix lineup of professional primary packaging printers, inkless laser engravers, and large-character carton coders.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="bg-white p-1 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap gap-1 text-xs font-bold justify-center" id="product-pills-bar">
              {[
                { label: "All Products", filter: "All" },
                ...categories.map((c) => ({ label: c.shortLabel, filter: c.id })),
              ].map((pill) => {
                const isActive = activeProductFilter === pill.filter;
                return (
                  <button
                    key={pill.filter}
                    onClick={() => setActiveProductFilter(pill.filter)}
                    className={`px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-200 select-none uppercase tracking-wider text-[10px] ${
                      isActive 
                        ? "bg-[#2564AF] text-white shadow-md shadow-blue-500/10" 
                        : "text-slate-600 hover:text-[#122540] hover:bg-slate-50"
                    }`}
                  >
                    {pill.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(() => {
              const displayProducts = activeProductFilter === "All"
                ? featuredProducts
                : featuredProducts.filter((p) => p.categoryId === activeProductFilter);

              return displayProducts.map((prod) => (
                <motion.div
                  key={prod.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image & Badges Overlay - the whole shot opens that product in the catalogue */}
                  <div
                    role="link"
                    tabIndex={0}
                    onClick={() => onNavigateToProduct(prod.id, prod.categoryId)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onNavigateToProduct(prod.id, prod.categoryId);
                      }
                    }}
                    aria-label={`View ${prod.name} specifications`}
                    className="relative h-48 w-full bg-slate-50 overflow-hidden group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2564AF]"
                  >
                    {prod.image ? (
                      <picture>
                        <source srcSet={prod.imageWebp} type="image/webp" />
                        <img
                          src={prod.image}
                          alt={prod.name}
                          loading="lazy"
                          className="w-full h-full object-contain p-4 pb-10 group-hover:scale-105 transition-transform duration-500"
                        />
                      </picture>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-300">
                        <Printer className="w-14 h-14" />
                      </div>
                    )}
                    {/* Keeps the white-out product shots readable behind the overlaid label */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
                    
                    {/* Top Right: Distinct Badge */}
                    <div className="absolute top-4 right-4 bg-blue-600/90 border border-blue-400 text-white font-mono text-[8px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                      {prod.badge}
                    </div>

                    {/* Bottom Left Overlay info */}
                    <div className="absolute bottom-4 left-4 text-left">
                      <span className="text-sky-400 font-mono text-[9px] font-bold uppercase tracking-widest">{prod.category}</span>
                      <h4 className="text-white text-lg font-black tracking-tight leading-tight uppercase">{prod.name}</h4>
                    </div>
                  </div>

                  {/* Body description */}
                  <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider font-mono">
                        {prod.type}
                      </div>
                      <p className="text-slate-600 text-xs leading-relaxed font-light">
                        {prod.desc}
                      </p>
                    </div>

                    {/* Detailed Spec Sheet */}
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-left space-y-2 font-mono text-[10px]">
                      <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                        <span className="text-slate-400 uppercase font-bold">Line Speed:</span>
                        <span className="text-slate-800 font-bold">{prod.specs.speed}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                        <span className="text-slate-400 uppercase font-bold">Resolution:</span>
                        <span className="text-slate-800 font-bold">{prod.specs.resolution}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                        <span className="text-slate-400 uppercase font-bold">Ink Base:</span>
                        <span className="text-slate-800 font-bold text-right max-w-[60%] leading-snug">{prod.specs.ink}</span>
                      </div>
                      <div className="flex justify-between pt-0.5">
                        <span className="text-slate-400 uppercase font-bold">Substrates:</span>
                        <span className="text-slate-800 font-bold text-right max-w-[60%] leading-snug">{prod.specs.substrates}</span>
                      </div>
                    </div>

                    {/* Call to Actions */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <button
                        onClick={() => onNavigateToProduct(prod.id, prod.categoryId)}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-[10px] font-extrabold uppercase py-3 rounded-xl transition-all cursor-pointer text-center"
                      >
                        Specs & Blueprints
                      </button>

                      <button
                        onClick={() => {
                          onNavigate("contact");
                        }}
                        className="bg-[#2564AF] hover:bg-blue-700 text-white text-[10px] font-extrabold uppercase py-3 rounded-xl transition-all cursor-pointer text-center"
                      >
                        SLA Quote Desk
                      </button>
                    </div>

                  </div>
                </motion.div>
              ));
            })()}
          </div>

        </div>
      </section>

      {/* SECTION 2: Joint Venture Overview (Partners) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12" id="jv-overview">
        <div className="bg-gradient-to-br from-[#122540] to-slate-900 rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl border border-blue-900/30">
          
          {/* Cyber accents & layout grids */}
          <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
          <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-[#2564AF]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-10 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#3b82f6] font-mono text-[10px] font-extrabold uppercase tracking-widest bg-slate-950/60 border border-blue-500/20 px-4 py-2 rounded-full inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4 animate-pulse text-sky-400" /> INDO-GERMAN JOINT VENTURE ALLIANCE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tight leading-none text-white">
                Runicha Enterprises & <br />
                <span className="text-[#3b82f6] bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
                  Best Code Technology India
                </span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Jetronix is built on a rock-solid partnership between <strong>Runicha Enterprises</strong> (Central India's leading coding specialist based in Indore) and <strong>Best Code Technology India</strong> (North India's premier high-accuracy fluidics team based in Jaipur). Together, we deliver robust Continuous Inkjet hardware integrated with world-class ink chemistries and unmatched local service networks.
              </p>

              {/* Service Commitments Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-slate-950/60 border border-slate-800/85 p-5 rounded-2xl hover:border-blue-500/30 transition-all duration-300">
                  <Clock className="w-6 h-6 text-blue-400 mb-3" />
                  <span className="font-extrabold text-xs block text-slate-100 uppercase tracking-wider font-mono">4-Hour On-Site SLA</span>
                  <span className="text-[11px] text-slate-400 mt-1.5 block leading-relaxed font-light">Rapid field dispatch in MP & Rajasthan</span>
                </div>
                <div className="bg-slate-950/60 border border-slate-800/85 p-5 rounded-2xl hover:border-blue-500/30 transition-all duration-300">
                  <RefreshCw className="w-6 h-6 text-sky-400 mb-3 animate-spin" style={{ animationDuration: "15s" }} />
                  <span className="font-extrabold text-xs block text-slate-100 uppercase tracking-wider font-mono">100% Spares Ready</span>
                  <span className="text-[11px] text-slate-400 mt-1.5 block leading-relaxed font-light">Nozzles, electronics, filters fully stocked</span>
                </div>
                <div className="bg-slate-950/60 border border-slate-800/85 p-5 rounded-2xl hover:border-blue-500/30 transition-all duration-300">
                  <ShieldCheck className="w-6 h-6 text-indigo-400 mb-3" />
                  <span className="font-extrabold text-xs block text-slate-100 uppercase tracking-wider font-mono">GST Input Claim</span>
                  <span className="text-[11px] text-slate-400 mt-1.5 block leading-relaxed font-light">Full tax compliance under CGST/SGST/IGST</span>
                </div>
              </div>
            </div>

            {/* Right node statistics/visual cards */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Indore Node Card */}
              <div className="bg-slate-950/80 border border-blue-900/20 p-6 rounded-2xl flex items-start gap-4 hover:border-blue-500/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all">
                  <Building className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <span className="text-[9px] text-[#3b82f6] font-mono uppercase font-bold tracking-widest block">Indore Node Workshop</span>
                  <span className="font-extrabold text-sm block mt-1 text-slate-100">Runicha Enterprises, MP</span>
                  <span className="text-xs text-slate-400 leading-relaxed block mt-1 font-light">Specialized ink blending lab & hydraulic calibration rigs.</span>
                </div>
              </div>

              {/* Jaipur Node Card */}
              <div className="bg-slate-950/80 border border-blue-900/20 p-6 rounded-2xl flex items-start gap-4 hover:border-blue-500/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-sky-600/10 border border-sky-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all">
                  <Building className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <span className="text-[9px] text-sky-400 font-mono uppercase font-bold tracking-widest block">Jaipur Node Workshop</span>
                  <span className="font-extrabold text-sm block mt-1 text-slate-100">Best Code Technology, Rajasthan</span>
                  <span className="text-xs text-slate-400 leading-relaxed block mt-1 font-light">Advanced controller testing & automated conduit assembly.</span>
                </div>
              </div>

              {/* Special fluid recommendation block */}
              <div className="bg-[#2564AF]/10 border border-[#2564AF]/30 p-5 rounded-2xl text-center backdrop-blur-sm">
                <span className="text-xs text-sky-300 font-semibold leading-relaxed font-sans block">
                  Need a customized ink chemistry formulation?
                </span>
                <button
                  onClick={() => onNavigate("partners")}
                  className="text-xs text-[#3b82f6] font-extrabold hover:underline inline-flex items-center gap-1.5 mt-2.5 cursor-pointer font-mono uppercase tracking-wider"
                >
                  Configure Custom Chemistries &raquo;
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Technologies Section (Redesigned & Premium) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" id="home-technologies">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#2564AF] font-mono text-[10px] font-black uppercase tracking-widest bg-blue-50 border border-blue-200/50 px-4 py-2 rounded-full inline-block">
            ⚡ INDUSTRIAL HARDWARE MATRIX
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#122540] mt-4 tracking-tight font-sans leading-none">
            Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2564AF] to-sky-400 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-xs md:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Talk to us to find the right solution for your industry's printing and marking requirements. Click a tech circle to inspect technical blueprints.
          </p>
        </div>

        {/* Premium Cybernetic Circular Grid (Fully Responsive) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 justify-center max-w-6xl mx-auto">
          {technologies.map((tech, idx) => {
            const IconComp = tech.icon;
            const isSelected = selectedTech === tech.name;
            return (
              <motion.div 
                key={idx} 
                className="flex flex-col items-center group"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => setSelectedTech(isSelected ? null : tech.name)}
                  className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full border flex items-center justify-center cursor-pointer transition-all duration-300 relative ${
                    isSelected 
                      ? "bg-[#122540] border-[#2564AF] shadow-2xl shadow-blue-900/30 ring-4 ring-[#2564AF]/20" 
                      : "bg-white border-slate-200/80 hover:border-[#2564AF] hover:shadow-xl shadow-md shadow-slate-100"
                  }`}
                  id={`tech-btn-${idx}`}
                >
                  {/* Glowing halo indicator */}
                  <span className={`absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 opacity-0 blur transition-opacity duration-300 group-hover:opacity-10 ${isSelected ? "opacity-20" : ""}`} />

                  {/* Outer delicate dashed ring */}
                  <div className={`absolute inset-2 rounded-full border border-dashed transition-all ${
                    isSelected 
                      ? "border-sky-400/30 animate-spin" 
                      : "border-slate-100 group-hover:border-blue-200"
                  }`} style={{ animationDuration: "30s" }} />

                  {/* Inner ring circle */}
                  <div className={`absolute inset-4 rounded-full border transition-all ${
                    isSelected ? "border-sky-400/20 bg-slate-900/40" : "border-slate-50 bg-slate-50/50 group-hover:bg-blue-50/20"
                  }`} />

                  {/* Icon Component */}
                  <IconComp className={`w-8 h-8 relative z-10 transition-transform duration-300 group-hover:scale-110 ${
                    isSelected ? "text-sky-400" : "text-slate-600 group-hover:text-[#2564AF]"
                  }`} />
                </button>
                
                <button
                  onClick={() => setSelectedTech(isSelected ? null : tech.name)}
                  className={`text-[10px] md:text-xs font-black mt-4 hover:text-[#2564AF] transition-colors text-center max-w-[150px] leading-snug uppercase tracking-widest ${
                    isSelected ? "text-[#2564AF]" : "text-[#122540]"
                  }`}
                >
                  {tech.name}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Blue-Print Spec panel */}
          {selectedTech && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="mt-14 bg-gradient-to-br from-[#0c1626] to-slate-950 border border-blue-900/30 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl"
              id="tech-blueprint-panel"
            >
              {/* Technical CAD Grid Overlays */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              
              {(() => {
                const techObj = technologies.find(t => t.name === selectedTech);
                if (!techObj) return null;
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                    
                    {/* Left blueprint info block */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="p-2 bg-blue-600/20 border border-blue-500/30 rounded-xl text-sky-400 shrink-0">
                          <Cpu className="w-5 h-5 text-sky-400" />
                        </span>
                        <div>
                          <span className="text-[9px] text-sky-400 font-mono uppercase font-black tracking-widest block">ENGINEERING BLUEPRINT ACTIVE</span>
                          <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none mt-0.5">{techObj.name} Blueprint</h4>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">{techObj.desc}</p>
                      
                      <div className="bg-slate-900/80 p-4 rounded-xl border border-blue-950/80 text-xs text-sky-300 font-mono flex items-start sm:items-center gap-2">
                        <span className="text-slate-500 shrink-0 select-none">⚙️ [SPEC_ENG]:</span> 
                        <span className="font-semibold">{techObj.specs}</span>
                      </div>
                    </div>

                    {/* Right hardware metrics block */}
                    <div className="lg:col-span-4 bg-slate-900/90 border border-blue-950 p-6 rounded-2xl flex flex-col justify-between h-full space-y-4 shadow-xl">
                      <div className="space-y-4">
                        <div>
                          <span className="text-[9px] text-slate-500 font-bold uppercase block tracking-widest font-mono">Max Line Velocity</span>
                          <div className="flex items-center gap-2 mt-1">
                            <Gauge className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm sm:text-base font-black text-slate-100">{techObj.speed}</span>
                          </div>
                        </div>
                        <div className="border-t border-blue-950/80 pt-3">
                          <span className="text-[9px] text-slate-500 font-bold uppercase block tracking-widest font-mono">Compatible Fluid System</span>
                          <span className="text-xs text-sky-400 font-black mt-1 block">{techObj.ink}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => onNavigate("products")}
                        className="w-full bg-[#2564AF] hover:bg-blue-600 text-white text-xs font-black py-3 rounded-xl text-center mt-2 uppercase tracking-widest cursor-pointer shadow-md shadow-blue-500/10 transition-all"
                      >
                        Browse Models
                      </button>
                    </div>

                  </div>
                );
              })()}
            </motion.div>
          )}
      </section>

      {/* SECTION 4: Knowledge, Blog & News grid (Redesigned & Premium Editorial) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" id="knowledge-blog">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-slate-200 pb-6 mb-12 gap-6">
          <div className="text-center md:text-left">
            <span className="text-[#2564AF] text-[9px] font-black uppercase tracking-widest font-mono bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full">
              Jetronix Editorial
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#122540] uppercase tracking-tight mt-3">
              B2B Knowledge Hub
            </h3>
          </div>
          
          {/* Custom Category pills bar with animated background sliding */}
          <div className="bg-slate-100 p-1 rounded-2xl border border-slate-200/70 flex flex-wrap gap-1 text-xs font-bold justify-center" id="blog-pills-bar">
            {["All", "News", "Blog", "Case Studies"].map((tab) => {
              const isActive = activeBlogTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveBlogTab(tab)}
                  className={`px-4 py-2 rounded-xl transition-all relative font-mono text-[10px] font-extrabold uppercase tracking-widest cursor-pointer z-10 ${
                    isActive ? "text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeBlogPill"
                      className="absolute inset-0 bg-[#122540] rounded-xl -z-10 shadow-md shadow-slate-900/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span>{tab}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Elegant Editorial Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div 
              key={post.id}
              className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Floating tags & Zoomable Cover image */}
                <div className="relative h-56 bg-slate-100 overflow-hidden">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent pointer-events-none" />
                  
                  {/* Styled Badge */}
                  <span className={`absolute top-4 left-4 text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-md border ${
                    post.category === "News" 
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
                      : post.category === "Blog" 
                      ? "bg-indigo-50 text-indigo-700 border-indigo-200" 
                      : "bg-amber-50 text-amber-700 border-amber-200"
                  }`}>
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3.5">
                  <span className="text-[9px] text-[#2564AF] font-mono uppercase font-black tracking-widest flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {post.date}
                  </span>
                  <h4 className="font-sans font-black text-[#122540] group-hover:text-[#2564AF] transition-colors leading-snug line-clamp-2 text-sm sm:text-base">
                    {post.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 font-light">
                    {post.desc}
                  </p>
                </div>
              </div>

              {/* Verified Badge Footer */}
              <div className="px-6 py-4 border-t border-slate-50 bg-slate-50/50 mt-4 flex justify-between items-center text-xs">
                <span className="text-[9px] text-slate-400 uppercase font-mono tracking-widest font-bold">✓ B2B Verified</span>
                <button 
                  onClick={() => setActiveArticleModal(post.title)}
                  className="text-[#2564AF] font-black hover:underline cursor-pointer flex items-center gap-1 uppercase tracking-widest font-mono text-[9px]"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: Industries Section (Bento-Style Cards & Interactive Gauges) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" id="home-industries">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#2564AF] font-mono text-[10px] font-black uppercase tracking-widest bg-blue-50 border border-blue-200/50 px-4 py-2 rounded-full inline-block">
            🏭 SYSTEM FIELD APPLICATIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#122540] mt-4 tracking-tight font-sans leading-none">
            Industries
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2564AF] to-sky-400 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-xs md:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Select an industry below to reveal tailored coding machinery speeds, substrate parameters, and specialized German ink-chemistries.
          </p>
        </div>

        {/* Premium Bento-Style Industry Selection Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {industries.map((ind, idx) => {
            const IconComp = ind.icon;
            const isSelected = selectedIndustry === ind.name;
            return (
              <motion.div 
                key={idx} 
                className="flex flex-col items-center group"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => setSelectedIndustry(isSelected ? null : ind.name)}
                  className={`w-24 h-24 sm:w-28 sm:h-28 rounded-3xl border flex items-center justify-center cursor-pointer transition-all duration-300 relative bg-gradient-to-br ${
                    isSelected 
                      ? ind.activeBg + " border-2 scale-105 shadow-xl shadow-slate-200" 
                      : ind.color + " bg-white hover:scale-105 hover:shadow-xl shadow-md shadow-slate-100"
                  }`}
                  id={`industry-btn-${idx}`}
                >
                  {/* Orbit active outline */}
                  <div className={`absolute inset-2 rounded-2xl border border-dashed transition-all opacity-40 ${
                    isSelected ? "border-current animate-spin" : "border-slate-100 group-hover:border-current"
                  }`} style={{ animationDuration: "35s" }} />

                  {/* Clean lucide industrial icon */}
                  <IconComp className="w-8 h-8 relative z-10 transition-transform group-hover:scale-110 duration-300" />
                </button>
                
                <button
                  onClick={() => setSelectedIndustry(isSelected ? null : ind.name)}
                  className={`text-[10px] md:text-xs font-black mt-4 hover:text-[#2564AF] transition-colors text-center max-w-[130px] leading-snug uppercase tracking-widest ${
                    isSelected ? "text-[#2564AF]" : "text-[#122540]"
                  }`}
                >
                  {ind.name}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Industry filter report dashboard */}
          {selectedIndustry && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="mt-14 bg-gradient-to-br from-[#122540] to-slate-900 border border-blue-900/30 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl"
              id="industry-report-panel"
            >
              <div className="absolute inset-0 tech-grid opacity-5 pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#2564AF]/15 rounded-full blur-3xl pointer-events-none" />
              
              {(() => {
                const indObj = industries.find(i => i.name === selectedIndustry);
                if (!indObj) return null;
                const IndIcon = indObj.icon;
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                    
                    {/* Left details panel */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="p-2.5 bg-blue-600/20 border border-blue-500/30 rounded-xl text-sky-400 shrink-0">
                          <IndIcon className="w-5 h-5 text-sky-400" />
                        </span>
                        <div>
                          <span className="text-[9px] text-sky-400 font-mono uppercase font-black tracking-widest block">FIELD INTEGRITY REPORT</span>
                          <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none mt-0.5">{indObj.name} Packaging Segment</h4>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">{indObj.desc}</p>
                      
                      <div className="bg-slate-950/60 p-4 rounded-xl border border-blue-900/20 text-xs text-sky-300 font-mono flex items-start sm:items-center gap-2">
                        <span className="text-slate-500 shrink-0 select-none">📊 [LINE_SPEED]:</span> 
                        <span className="font-semibold text-slate-200">{indObj.speed}</span>
                      </div>
                    </div>

                    {/* Right hardware selector card */}
                    <div className="lg:col-span-4 bg-slate-950/80 border border-blue-900/20 p-6 rounded-2xl flex flex-col justify-between h-full space-y-4 shadow-xl">
                      <div>
                        <span className="text-[9px] text-slate-500 font-bold uppercase block tracking-widest font-mono">Best Matched Hardware</span>
                        <span className="text-xs font-black text-sky-300 mt-1 block leading-relaxed">{indObj.bestTech}</span>
                      </div>
                      <button 
                        onClick={() => onNavigate("lab")}
                        className="w-full bg-[#2564AF] hover:bg-blue-600 text-white text-xs font-black py-3 rounded-xl text-center mt-2 uppercase tracking-widest cursor-pointer shadow-md shadow-blue-500/10 transition-all"
                      >
                        Launch Matching Lab
                      </button>
                    </div>

                  </div>
                );
              })()}
            </motion.div>
          )}
      </section>

      {/* SECTION 6: Industrial Printers, Coders and Markers (Premium Corporate block) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" id="corporate-text-block">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel: Deep Corporate Info card with expandable blueprint accordion */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between">
            {/* Top colored accent line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-[#2564AF] to-sky-400" />
            
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[#2564AF] font-mono text-[9px] font-black uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1 rounded-lg inline-block">
                  Jetronix India Division
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#122540] tracking-tight uppercase leading-snug">
                  Industrial Printers, <br />Coders and Markers
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Jetronix Printech India LLP is an industrial coding and marking specialist, built on the joint venture of Runicha Enterprises (Indore) and Best Code Technology India (Jaipur). Specialising in digital printing and traceability solutions (such as industrial coders) for sectors as diverse as food, beverage, life sciences, packaging, cleaning, personal care, building and construction.
              </p>

              {/* Sub features list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex gap-2.5">
                  <span className="w-5 h-5 bg-blue-50 text-[#2564AF] rounded-lg flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <h5 className="text-xs font-black text-[#122540] uppercase tracking-wider">Global Standards</h5>
                    <p className="text-[11px] text-slate-400 font-light mt-0.5 leading-snug">Engineered with original German fluidics configurations.</p>
                  </div>
                </div>

                <div className="flex gap-2.5">
                  <span className="w-5 h-5 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <h5 className="text-xs font-black text-[#122540] uppercase tracking-wider">Full Traceability</h5>
                    <p className="text-[11px] text-slate-400 font-light mt-0.5 leading-snug">Supports dynamic GS1 2D DataMatrix compliance.</p>
                  </div>
                </div>

                <div className="flex gap-2.5">
                  <span className="w-5 h-5 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border border-sky-100">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <h5 className="text-xs font-black text-[#122540] uppercase tracking-wider">Multi-Sector</h5>
                    <p className="text-[11px] text-slate-400 font-light mt-0.5 leading-snug">Food, Beverage, Pharma, Cable & Steel conduits.</p>
                  </div>
                </div>

                <div className="flex gap-2.5">
                  <span className="w-5 h-5 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border border-indigo-100">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <h5 className="text-xs font-black text-[#122540] uppercase tracking-wider">Eco Vapor Control</h5>
                    <p className="text-[11px] text-slate-400 font-light mt-0.5 leading-snug">Integrated solvent condenser reducing emissions.</p>
                  </div>
                </div>
              </div>

              {/* Accordion list */}
                {isCorporateReadMore && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 border-t border-slate-100 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-500 leading-relaxed font-light text-left">
                      <div className="space-y-2">
                        <span className="font-extrabold text-[#122540] uppercase block tracking-wider font-mono text-[9px] text-[#2564AF]">Dual-Workshop Support Grid</span>
                        <p className="leading-relaxed">
                          With our dual workshops located strategically in <strong>Indore (Runicha Enterprises)</strong> and <strong>Jaipur (Best Code Technology)</strong>, we provide end-to-end local hardware and chemical fluid servicing. Our engineers undergo comprehensive certifications directly from original German guidelines to assemble, test, and troubleshoot continuous inkjet (CIJ), thermal transfer overprinters (TTO), and high-velocity CO2 laser cabinets.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <span className="font-extrabold text-[#122540] uppercase block tracking-wider font-mono text-[9px] text-[#2564AF]">Solvent Condenser & Eco Standards</span>
                        <p className="leading-relaxed">
                          By engineering a state-of-the-art solvent condenser loop integrated into our flagship continuous inkjet printers, we have successfully assisted dozens of primary distilleries and cable extruders in Rajasthan and Madhya Pradesh to slash standard organic compound vapor emissions by up to 48%, achieving significant raw fluid purchase budget savings while remaining strictly compliant with national eco protection standards.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
            </div>

            <button
              onClick={() => setIsCorporateReadMore(!isCorporateReadMore)}
              className="bg-white border-2 border-[#122540] text-[#122540] hover:bg-[#122540] hover:text-white px-8 py-3 rounded-xl font-black text-[10px] uppercase mt-8 transition-all tracking-widest cursor-pointer hover:shadow-lg hover:shadow-slate-200 self-start"
            >
              {isCorporateReadMore ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* Right panel: Live Technical Metrics Blueprint card (extremely unique layout) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#122540] to-slate-900 text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl border border-blue-900/40 flex flex-col justify-between">
            {/* Tech grid backgrounds */}
            <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-[#2564AF]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between border-b border-blue-950 pb-4">
                <span className="text-sky-400 font-mono text-[9px] font-black uppercase tracking-widest block">JOINT VENTURE PERFORMANCE</span>
                <span className="bg-[#2564AF]/20 text-sky-300 border border-blue-500/30 font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">Verified</span>
              </div>

              {/* Dynamic Number metrics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1 bg-slate-950/40 border border-slate-800/80 p-4 rounded-2xl">
                  <span className="text-2xl sm:text-3xl font-black text-white font-mono block">10,000+</span>
                  <span className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">Active Print Engines</span>
                </div>
                
                <div className="space-y-1 bg-slate-950/40 border border-slate-800/80 p-4 rounded-2xl">
                  <span className="text-2xl sm:text-3xl font-black text-white font-mono block">30+ Yrs</span>
                  <span className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">Industrial Heritage</span>
                </div>

                <div className="space-y-1 bg-slate-950/40 border border-slate-800/80 p-4 rounded-2xl">
                  <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono block">4 Hours</span>
                  <span className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">On-Site Service SLA</span>
                </div>

                <div className="space-y-1 bg-slate-950/40 border border-slate-800/80 p-4 rounded-2xl">
                  <span className="text-2xl sm:text-3xl font-black text-sky-400 font-mono block">100%</span>
                  <span className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">Original Fluids Stock</span>
                </div>
              </div>

              {/* Micro diagnostic checkbox elements */}
              <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-2xl space-y-2 text-xs">
                <div className="text-[9px] text-[#3b82f6] font-extrabold uppercase tracking-widest font-mono border-b border-slate-800 pb-2 mb-2 flex justify-between">
                  <span>Standard Diagnostic Checks</span>
                  <span className="text-emerald-400">ONLINE</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400 text-[10px]">✓</span>
                  <span className="font-mono text-[10px]">60µm/70µm Nozzle Calibration Calibration Rigs Active</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400 text-[10px]">✓</span>
                  <span className="font-mono text-[10px]">Fully Certified German Inks & Solvent Chemistry</span>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-blue-950 pt-4 relative z-10 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onNavigate("calculator")}
                className="flex-1 bg-[#2564AF] hover:bg-blue-600 text-white font-black text-xs uppercase py-3 rounded-xl tracking-widest text-center transition-all cursor-pointer shadow-md"
              >
                Cost Calculator
              </button>
              <button
                onClick={() => onNavigate("lab")}
                className="flex-1 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 font-semibold text-xs uppercase py-3 rounded-xl text-center transition-all cursor-pointer"
              >
                Sample Lab
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 7: Get In Touch (Asymmetric Quick Hotline & Callback Dashboard) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" id="get-in-touch-section">
        <div className="bg-gradient-to-br from-slate-950 via-[#122540] to-slate-950 text-white rounded-3xl p-6 sm:p-12 relative overflow-hidden shadow-2xl border border-blue-900/30">
          
          <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#2564AF]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Info Panel */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#2564AF]/20 border border-blue-500/30 text-sky-400 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping inline-block" /> Live Callback Desk
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-black tracking-tight leading-none text-white uppercase">
                Need More <br className="hidden sm:inline" />Information?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed font-light">
                Contact us about our innovative and award-winning printing and marking solutions. Our regional engineers in Indore and Jaipur respond to callback sheets in under 4 hours.
              </p>
              
              <div className="pt-2">
                <button
                  onClick={() => onNavigate("contact")}
                  className="bg-[#2564AF] hover:bg-blue-600 text-white font-black text-xs uppercase px-8 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105 cursor-pointer tracking-widest border border-blue-400/20"
                >
                  Get In Touch Form
                </button>
              </div>
            </div>

            {/* Right Hotlines Console */}
            <div className="lg:col-span-6 bg-slate-950/60 border border-slate-800/80 p-5 sm:p-6 rounded-2xl space-y-4 shadow-xl">
              <span className="text-[9px] text-sky-400 font-mono uppercase font-black tracking-widest block border-b border-slate-800 pb-2">
                ⚡ Regional Direct Transmission Nodes
              </span>

              {/* Node 1: Indore */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-extrabold text-slate-300 uppercase tracking-wide">Central Hub — Runicha Enterprises (Indore)</span>
                  <span className="text-[10px] text-slate-500 font-mono font-bold select-none">MP Hub</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a 
                    href="tel:+919522299975"
                    className="flex-1 min-w-[140px] flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-[#122540] hover:bg-slate-800 text-white font-mono text-[10px] font-bold transition-all shadow-sm border border-blue-900/30 cursor-pointer"
                  >
                    <span>📞 +91 95222 99975</span>
                  </a>
                  <a 
                    href="mailto:indore.support@jetronixindia.com"
                    className="flex-1 min-w-[140px] flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-300 font-mono text-[10px] font-bold transition-all shadow-sm border border-slate-800 cursor-pointer"
                  >
                    <span>✉️ Email support</span>
                  </a>
                </div>
              </div>

              {/* Node 2: Jaipur */}
              <div className="space-y-2 border-t border-slate-900 pt-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-extrabold text-slate-300 uppercase tracking-wide">North Hub — Best Code Technology (Jaipur)</span>
                  <span className="text-[10px] text-slate-500 font-mono font-bold select-none">Raj Hub</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a 
                    href="tel:+919828106099"
                    className="flex-1 min-w-[140px] flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-[#122540] hover:bg-slate-800 text-white font-mono text-[10px] font-bold transition-all shadow-sm border border-blue-900/30 cursor-pointer"
                  >
                    <span>📞 +91 98281 06099</span>
                  </a>
                  <a 
                    href="https://wa.me/919828106099"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-[10px] font-bold transition-all shadow-sm cursor-pointer"
                  >
                    <span>💬 WhatsApp Live Desk</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Elegant Article/Paper Modal Dialog (avoiding iframe-breaking window.alerts) */}
        {activeArticleModal && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-slate-200 shadow-2xl relative space-y-5 text-left"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <span className="text-[9px] text-[#2564AF] font-mono uppercase font-black tracking-widest block">JETRONIX KNOWLEDGE BASE</span>
                  <h4 className="font-sans font-black text-slate-900 leading-snug text-base sm:text-lg">
                    {activeArticleModal}
                  </h4>
                </div>
                <button 
                  onClick={() => setActiveArticleModal(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all font-bold cursor-pointer text-xs"
                  title="Close Dialog"
                >
                  &times; Close
                </button>
              </div>

              <div className="text-xs text-slate-500 space-y-3 leading-relaxed font-light">
                <p>
                  You are attempting to access high-density technical specifications, chemical MSDS sheets, or regulatory guidance paperwork regarding <strong>"{activeArticleModal}"</strong>.
                </p>
                <p>
                  To adhere to Indo-German joint-venture protocols and maintain corporate data security, these files require active clearance validation.
                </p>
                <p className="bg-blue-50 border border-blue-200/50 p-3 rounded-xl text-[11px] text-[#2564AF] font-semibold flex items-start gap-2 leading-normal">
                  <span className="shrink-0 mt-0.5">ℹ️</span>
                  <span>Please submit a formal request via our <strong>Partners Quote & SLA Support Sheet</strong>. Our coordinators in either Indore or Jaipur will dispatch the requested PDF dossiers immediately.</span>
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => {
                    setActiveArticleModal(null);
                    onNavigate("contact");
                  }}
                  className="flex-1 bg-[#2564AF] hover:bg-blue-600 text-white font-black text-xs uppercase py-3 rounded-xl tracking-widest text-center transition-all cursor-pointer shadow-md"
                >
                  Contact Partners Desk
                </button>
                <button
                  onClick={() => setActiveArticleModal(null)}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase py-3 rounded-xl text-center transition-all cursor-pointer"
                >
                  Keep Browsing
                </button>
              </div>
            </motion.div>
          </div>
        )}

    </div>
  );
}
