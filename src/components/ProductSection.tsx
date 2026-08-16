import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { products, categories } from "../data";
import { ProductCategory } from "../types";
import { Check, Settings, Activity, CheckCircle2, ListFilter, FileText, ArrowRight, Phone } from "lucide-react";

interface ProductSectionProps {
  /** Deep-link target set by the header/footer menus. */
  target?: { category?: string; productId?: string } | null;
  /** Jump to the B2B quote sheet with this product preselected. */
  onRequestQuote?: (productId: string) => void;
}

export default function ProductSection({ target, onRequestQuote }: ProductSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");
  const [activeTab, setActiveTab] = useState<string>("s200plus");

  // Apply an incoming deep-link: select the requested product, and the category that holds it.
  useEffect(() => {
    if (!target) return;
    const targeted = target.productId ? products.find((p) => p.id === target.productId) : undefined;
    if (targeted) {
      setActiveCategory(targeted.category);
      setActiveTab(targeted.id);
      return;
    }
    if (target.category) {
      const cat = target.category as ProductCategory;
      const first = products.find((p) => p.category === cat);
      if (first) {
        setActiveCategory(cat);
        setActiveTab(first.id);
      }
    }
  }, [target]);

  const visibleProducts = useMemo(
    () => (activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory)),
    [activeCategory]
  );

  const selectedProduct = visibleProducts.find((p) => p.id === activeTab) || visibleProducts[0] || products[0];

  // Switching category selects that category's first product so the detail panel never goes empty.
  const handleCategoryChange = (cat: ProductCategory | "all") => {
    setActiveCategory(cat);
    const first = cat === "all" ? products[0] : products.find((p) => p.category === cat);
    if (first) setActiveTab(first.id);
  };

  const activeCategoryMeta = categories.find((c) => c.id === activeCategory);

  // Hotspot details for the interactive blueprint
  const hotspots = [
    {
      id: "nozzle",
      title: "Clean-Start Deflector & Nozzle",
      description: "Auto-sealing nozzle technology closes the fluid line hermetically when shutting down. No solvent evaporation, no manual flushing, and absolutely zero nozzle clogging when rebooting.",
      top: "85%",
      left: "65%",
    },
    {
      id: "screen",
      title: "10.1\" Responsive Touch Screen",
      description: "Embedded Linux OS provides a gorgeous graphical user interface. Easily design barcodes, QR codes, expiry dates, batch logs, and customize fonts with standard touch controls.",
      top: "30%",
      left: "50%",
    },
    {
      id: "rfid",
      title: "RFID Intelligent Fluid Lock",
      description: "Smart RFID cartridge detection reads tags on ink and solvent bottles. Safely prevents accidental loading of mismatched fluid formulas, preserving hydraulic pipes and pump gaskets.",
      top: "70%",
      left: "35%",
    },
    {
      id: "cabinet",
      title: "IP55 304 Stainless Steel Chassis",
      description: "Rugged, hermetically isolated cabinet protecting electronic processing boards from wet chemical ink lines. Impervious to heavy vibrations, extreme humidity, and dust storming.",
      top: "60%",
      left: "48%",
    },
    {
      id: "conduit",
      title: "Heavy-Duty Steel Flexible Conduit",
      description: "Stainless steel armored flexible hose protective shielding. Maintains constant high-temperature insulation for consistent viscosity and continuous ink droplet stability.",
      top: "82%",
      left: "22%",
    }
  ];

  const [activeHotspot, setActiveHotspot] = useState<typeof hotspots[0] | null>(hotspots[0]);

  // Competitor comparison data based on Cyklop, Leibinger, Hitachi, and Flexpackpro
  const competitors = [
    {
      feature: "Solvent Recovery Condensation Loop",
      jetronix: "Active integrated solvent condensation system (50% fluid reduction)",
      hitachi: "Optional external module (extra cost)",
      leibinger: "Manual recovery flap (limited retention)",
      cyklop: "Standard passive ventilation (high evaporation)"
    },
    {
      feature: "Auto-Sealing Printing Nozzle",
      jetronix: "Hermetic auto-nozzle sealing (Absolutely 0% clog on startup)",
      hitachi: "Manual solvent rinse required on long shutdowns",
      leibinger: "Hermetic seal nozzle loop (Excellent, but high premium cost)",
      cyklop: "Standard flush (Requires regular operator maintenance)"
    },
    {
      feature: "Intelligent Fluid RFID Identification",
      jetronix: "Dual RFID sensors read bottle chips instantly to block mistakes",
      hitachi: "Visual shape locks only (prone to human bypass errors)",
      leibinger: "Proprietary code keys (expensive cartridge lock-in)",
      cyklop: "Standard labeling checks"
    },
    {
      feature: "GST-Compliant India Support network",
      jetronix: "Indore (Runicha) & Jaipur (Best Code) local teams. SLA under 4h.",
      hitachi: "Distributed corporate agents, slow dispatch response",
      leibinger: "Import agents based in major metros only",
      cyklop: "Importer/distributor channels only"
    },
    {
      feature: "Operational Interface",
      jetronix: "10.1\" Linux Interactive Touchscreen, customizable matrix codes",
      hitachi: "Embedded keypad or older style menu systems",
      leibinger: "Color graphic terminal displays",
      cyklop: "Standard digital button terminals"
    }
  ];

  return (
    <section id="products" className="py-20 bg-slate-50 border-t border-slate-200" style={{ scrollMarginTop: "80px" }}>
      <div id="product-catalogue" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-200/50 px-4 py-2 rounded-full">
            JETRONIX PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 mt-4 leading-tight">
            The Complete Coding &amp; Marking Range
          </h2>
          <p className="text-slate-600 mt-3 text-base font-light leading-relaxed">
            {products.length} machines across continuous inkjet, thermal inkjet, handheld coding, TTO, CO2 laser and carton sealing &mdash; engineered to run 24/7 on bottling, food, pharma, cabling and extrusion lines.
          </p>
        </div>

        {/* Category filter chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-8" id="product-categories">
          <button
            onClick={() => handleCategoryChange("all")}
            className={`px-5 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wider transition-all cursor-pointer border ${
              activeCategory === "all"
                ? "bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/10"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900"
            }`}
          >
            All Products ({products.length})
          </button>
          {categories.map((cat) => {
            const count = products.filter((p) => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                id={`cat-btn-${cat.id}`}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-5 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wider transition-all cursor-pointer border ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/10"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900"
                }`}
              >
                {cat.shortLabel} ({count})
              </button>
            );
          })}
        </div>

        {activeCategoryMeta && (
          <p className="text-center text-sm text-slate-500 font-light max-w-2xl mx-auto mb-8 -mt-2">
            {activeCategoryMeta.description}
          </p>
        )}

        {/* Product picker rail + detail panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-3" id="product-rail">
            <div className="flex items-center gap-2 text-slate-400 mb-3 px-1">
              <ListFilter className="w-4 h-4" />
              <h4 className="text-[10px] font-bold uppercase tracking-widest font-mono">
                {visibleProducts.length} Machines
              </h4>
            </div>
            <div className="space-y-2 lg:max-h-[720px] lg:overflow-y-auto lg:pr-2">
              {visibleProducts.map((p) => (
                <button
                  key={p.id}
                  id={`tab-btn-${p.id}`}
                  onClick={() => setActiveTab(p.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition-all cursor-pointer ${
                    selectedProduct.id === p.id
                      ? "bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/10"
                      : "bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-blue-50/40"
                  }`}
                >
                  <span className="block font-bold text-xs leading-snug">{p.name}</span>
                  <span
                    className={`block text-[10px] mt-1 uppercase tracking-wider font-mono ${
                      selectedProduct.id === p.id ? "text-blue-300" : "text-slate-400"
                    }`}
                  >
                    {p.type}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-9">
        {/* Detailed Product Card view */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 xl:grid-cols-12 gap-10 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl shadow-slate-200/30"
            id={`product-content-${selectedProduct.id}`}
          >
            {/* Left side visual specs & key highlights */}
            <div className="xl:col-span-5 space-y-8">
              {/* Product photography */}
              {selectedProduct.image && (
                <div className="space-y-3">
                  <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex items-center justify-center p-4">
                    <picture>
                      <source srcSet={`/products/${selectedProduct.image}.webp`} type="image/webp" />
                      <img
                        src={`/products/${selectedProduct.image}.jpg`}
                        alt={selectedProduct.name}
                        loading="lazy"
                        className="max-h-[320px] w-auto object-contain"
                      />
                    </picture>
                  </div>
                  {selectedProduct.gallery && selectedProduct.gallery.length > 0 && (
                    <div className="grid grid-cols-3 gap-2">
                      {selectedProduct.gallery.map((g) => (
                        <div key={g} className="bg-white rounded-xl border border-slate-200 p-2 flex items-center justify-center">
                          <picture>
                            <source srcSet={`/products/${g}.webp`} type="image/webp" />
                            <img
                              src={`/products/${g}.jpg`}
                              alt={`${selectedProduct.name} — additional view`}
                              loading="lazy"
                              className="max-h-[90px] w-auto object-contain"
                            />
                          </picture>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200/50 px-3 py-1.5 rounded-lg inline-block">
                  {selectedProduct.type}
                </span>

                {selectedProduct.distributedBrand && (
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg inline-block ml-2">
                    {selectedProduct.distributedBrand} product — supplied &amp; serviced by Jetronix
                  </span>
                )}
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
                  {selectedProduct.name}
                </h3>
                <p className="text-slate-500 font-medium text-sm italic leading-relaxed">
                  &ldquo;{selectedProduct.tagline}&rdquo;
                </p>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  {selectedProduct.description}
                </p>

                {/* Primary CTA — carries this product into the B2B quote sheet */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    id={`quote-btn-${selectedProduct.id}`}
                    onClick={() => onRequestQuote?.(selectedProduct.id)}
                    className="bg-slate-900 hover:bg-blue-600 text-white font-bold uppercase tracking-widest text-[11px] py-3 px-6 rounded-xl flex items-center gap-2 cursor-pointer transition-all shadow-md shadow-slate-900/10 hover:shadow-blue-600/20 active:scale-95"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Get a Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="tel:+919522299975"
                    className="text-slate-600 hover:text-blue-600 font-bold uppercase tracking-widest text-[11px] py-3 px-5 rounded-xl border border-slate-200 hover:border-blue-400 flex items-center gap-2 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Talk to an Engineer</span>
                  </a>
                </div>
              </div>

              {/* Key Highlights checklist */}
              <div className="space-y-3" id="highlights-checklist">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Key Highpoints</h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {selectedProduct.keyHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-slate-700 text-sm font-sans font-medium bg-slate-50 p-2.5 rounded-xl border border-slate-150/50">
                      <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Unique features details */}
              <div className="space-y-3" id="features-highlights">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Industrial Capabilities</h4>
                {selectedProduct.features.map((feat, idx) => {
                  const [title, desc] = feat.split(":");
                  return (
                    <div key={idx} className="bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                      <span className="text-xs font-bold text-blue-700 block uppercase tracking-wider">{title}</span>
                      <span className="text-xs text-slate-500 mt-1 block leading-relaxed font-light">{desc}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right side specifications panels */}
            <div className="xl:col-span-7 space-y-6">

              {/* Manufacturer specification sheet — present on every product */}
              <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-200" id="spec-sheet-card">
                <div className="flex items-center gap-2 mb-5 text-blue-700 border-b border-slate-200 pb-3">
                  <Settings className="w-5 h-5" />
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider">Product Specifications</h4>
                </div>
                <div className="space-y-3 text-xs text-slate-600" id="spec-sheet-table">
                  {selectedProduct.specs.map((row, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between gap-6 py-1.5 border-b border-slate-200/60 last:border-b-0"
                    >
                      <span className="font-bold text-slate-500 shrink-0">{row.label}</span>
                      <span className="font-semibold text-slate-900 text-right">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extended CIJ parameter cards — flagship series only */}
              {selectedProduct.techSpecs && selectedProduct.machineSpecs && (
                <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">

                  {/* Technical parameters card */}
                  <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-200" id="tech-parameters-card">
                    <div className="flex items-center gap-2 mb-5 text-blue-700 border-b border-slate-200 pb-3">
                      <Settings className="w-5 h-5" />
                      <h4 className="font-display font-bold text-xs uppercase tracking-wider">Technical Performance</h4>
                    </div>
                    <div className="space-y-3.5 text-xs text-slate-600" id="tech-specs-table">
                      <div className="flex justify-between py-1">
                        <span className="font-bold text-slate-500">Printing Lines</span>
                        <span className="font-semibold text-slate-900 text-right">{selectedProduct.techSpecs.printingLines}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="font-bold text-slate-500">Print Height</span>
                        <span className="font-semibold text-slate-900 text-right">{selectedProduct.techSpecs.printHeight}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="font-bold text-slate-500">Max Line Speed</span>
                        <span className="font-semibold text-blue-600 text-right font-mono">{selectedProduct.techSpecs.printSpeed}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="font-bold text-slate-500">Available Nozzles</span>
                        <span className="font-semibold text-slate-900 text-right">{selectedProduct.techSpecs.nozzle}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="font-bold text-slate-500">Ink Color Options</span>
                        <span className="font-semibold text-slate-900 text-right">{selectedProduct.techSpecs.inkColor}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="font-bold text-slate-500">Supported Fonts</span>
                        <span className="font-semibold text-slate-900 text-right">{selectedProduct.techSpecs.font}</span>
                      </div>
                      <div className="flex justify-between py-1 pt-2 border-t border-slate-200">
                        <span className="font-bold text-slate-500">2D Codes &amp; Barcodes</span>
                        <span className="font-bold text-blue-600 text-right font-mono text-[10px] uppercase">{selectedProduct.techSpecs.barcode}</span>
                      </div>
                    </div>
                  </div>

                  {/* Machine structural parameters card */}
                  <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-200" id="machine-parameters-card">
                    <div className="flex items-center gap-2 mb-5 text-blue-700 border-b border-slate-200 pb-3">
                      <Activity className="w-5 h-5" />
                      <h4 className="font-display font-bold text-xs uppercase tracking-wider">Hydraulic &amp; Cabinet</h4>
                    </div>
                    <div className="space-y-3.5 text-xs text-slate-600" id="machine-specs-table">
                      <div className="flex justify-between py-1">
                        <span className="font-bold text-slate-500">Control System</span>
                        <span className="font-semibold text-slate-900 text-right">{selectedProduct.machineSpecs.operatingSystem}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="font-bold text-slate-500">Display Terminal</span>
                        <span className="font-semibold text-slate-900 text-right">{selectedProduct.machineSpecs.displayScreen}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="font-bold text-slate-500">Data Interfaces</span>
                        <span className="font-semibold text-slate-900 text-right">{selectedProduct.machineSpecs.interface}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="font-bold text-slate-500">Enclosure Class</span>
                        <span className="font-extrabold text-blue-600 text-right font-mono">{selectedProduct.machineSpecs.protectionLevel}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="font-bold text-slate-500">Universal Power</span>
                        <span className="font-semibold text-slate-900 text-right">{selectedProduct.machineSpecs.powerSupply}</span>
                      </div>
                      <div className="flex justify-between py-1 pt-2 border-t border-slate-200">
                        <span className="font-bold text-slate-500">Cabinet Material</span>
                        <span className="font-bold text-slate-900 text-right uppercase text-[10px] font-mono">{selectedProduct.machineSpecs.machineMaterial}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Closing CTA so the quote sheet is reachable after reading the specs */}
              <div className="bg-slate-900 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-slate-800">
                <div className="min-w-0">
                  <span className="block text-white font-display font-bold text-sm leading-snug">
                    Need pricing for the {selectedProduct.name}?
                  </span>
                  <span className="block text-slate-400 text-xs mt-1 font-light">
                    GST-compliant quote from our Indore or Jaipur node, typically within 2 business hours.
                  </span>
                </div>
                <button
                  id={`quote-btn-bottom-${selectedProduct.id}`}
                  onClick={() => onRequestQuote?.(selectedProduct.id)}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-widest text-[11px] py-3 px-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all shrink-0 active:scale-95"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Line-integration note — only meaningful for the coder families */}
              {["cij", "tij"].includes(selectedProduct.category) && (
                <div className="bg-blue-50 border border-blue-200/50 p-5 rounded-2xl text-xs text-blue-900 leading-relaxed">
                  <span className="font-bold block text-blue-950 mb-1">⚙️ PLC / Conveyor Integration Matrix:</span>
                  All Jetronix printers feature instant input/output connectivity. Supports photoelectric trigger delay, encoder speed tracking, status beacon stack alarms, and direct MODBUS communication, ensuring seamless synchronization with packaging conveyors or rotary fillers.
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
          </div>
        </div>

        {/* Competitor Benchmark Comparison Table */}
        <div className="mt-20" id="competitor-comparison">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">BENCHMARK RATINGS</span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">How Jetronix Compares to Global Competitors</h3>
            <p className="text-sm text-slate-600 mt-2 font-light">
              We analyzed features across premium websites (Hitachi, Leibinger, Cyklop) to craft a superior high-uptime configuration optimized for the Indian manufacturing environment.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-lg shadow-slate-100/50 bg-white">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-900 text-white font-display text-xs uppercase tracking-wider">
                  <th className="p-5 font-bold">Performance Dimension</th>
                  <th className="p-5 font-bold text-blue-400">Jetronix (JX350 Core)</th>
                  <th className="p-5 font-normal text-slate-400">Hitachi Series</th>
                  <th className="p-5 font-normal text-slate-400">Leibinger Series</th>
                  <th className="p-5 font-normal text-slate-400">Cyklop System</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans">
                {competitors.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="p-5 font-bold text-slate-900">{item.feature}</td>
                    <td className="p-5 text-blue-700 bg-blue-50/20 font-semibold text-xs leading-relaxed">
                      <div className="flex gap-2 items-start">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item.jetronix}</span>
                      </div>
                    </td>
                    <td className="p-5 text-slate-600 text-xs leading-relaxed">{item.hitachi}</td>
                    <td className="p-5 text-slate-600 text-xs leading-relaxed">{item.leibinger}</td>
                    <td className="p-5 text-slate-600 text-xs leading-relaxed">{item.cyklop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive Technical Blueprint with Clickable Hotspots */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 text-white relative overflow-hidden" id="interactive-blueprint-container">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Hotspot details/descriptions block */}
            <div className="lg:col-span-5 space-y-6 lg:pr-6">
              <div>
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest block mb-2 font-mono">
                  BLUEPRINT TECHNOLOGY
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold leading-tight">
                  Interactive Hydraulic & Cabinet Schematic
                </h3>
                <p className="text-slate-400 text-sm mt-3 font-light leading-relaxed">
                  Click the pulsing blue hotspot beacons on the vector cabinet drawing to discover how Jetronix delivers industrial grade longevity at localized costs.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {activeHotspot && (
                  <motion.div
                    key={activeHotspot.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="bg-slate-800/80 border border-slate-700/60 p-5 rounded-2xl shadow-inner relative"
                    id={`hotspot-desc-${activeHotspot.id}`}
                  >
                    <div className="absolute -top-3 left-6 bg-blue-600 text-[10px] font-bold uppercase px-3 py-0.5 rounded-full shadow-sm text-white tracking-wider font-mono">
                      Selected Node
                    </div>
                    <h4 className="font-display font-bold text-base text-blue-400 mt-1">
                      {activeHotspot.title}
                    </h4>
                    <p className="text-slate-300 text-sm mt-2.5 font-light leading-relaxed">
                      {activeHotspot.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Blueprint illustration container with hotspots mapped */}
            <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-6 relative flex justify-center items-center h-[350px] sm:h-[450px]" id="blueprint-hotspot-canvas">
              {/* Technical Blueprint Grid line overlay */}
              <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

              {/* Schematic SVG */}
              <svg className="w-full max-w-[280px] sm:max-w-[340px] h-auto text-slate-700" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Cabinet Main Box */}
                <rect x="40" y="30" width="120" height="150" rx="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" fill="#0f172a" fillOpacity="0.5" />
                {/* Horizontal dividing panels */}
                <line x1="40" y1="95" x2="160" y2="95" stroke="currentColor" strokeWidth="1.5" />
                {/* Electronics top partition */}
                <rect x="50" y="40" width="100" height="45" rx="4" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                {/* Screen panel outline */}
                <rect x="60" y="48" width="80" height="28" rx="2" stroke="#0073e6" strokeWidth="1.5" />
                <line x1="60" y1="70" x2="140" y2="70" stroke="#0073e6" strokeWidth="1" />
                
                {/* Bottom Hydraulics Split */}
                {/* Fluid solvent chambers */}
                <rect x="55" y="110" width="35" height="55" rx="3" stroke="currentColor" strokeWidth="1" />
                <rect x="110" y="110" width="35" height="55" rx="3" stroke="currentColor" strokeWidth="1" />
                <text x="65" y="142" fill="currentColor" fontSize="8" className="font-mono">INK</text>
                <text x="116" y="142" fill="currentColor" fontSize="8" className="font-mono">SOLV</text>

                {/* Print Head connection conduit tube */}
                <path d="M140 180 C170 200 130 220 100 220" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                {/* Printhead blocks */}
                <rect x="80" y="210" width="40" height="16" rx="2" stroke="#0073e6" strokeWidth="1.5" fill="#0f172a" />
                {/* Print droplet path */}
                <circle cx="100" cy="223" r="1.5" fill="#38bdf8" />
                <line x1="100" y1="226" x2="100" y2="238" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
              </svg>

              {/* Pulsing Hotspot Markers */}
              {hotspots.map((hs) => (
                <button
                  key={hs.id}
                  id={`hotspot-btn-${hs.id}`}
                  onClick={() => setActiveHotspot(hs)}
                  style={{ top: hs.top, left: hs.left }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                    activeHotspot?.id === hs.id
                      ? "bg-blue-600 text-white ring-4 ring-blue-500/30 scale-110 z-20"
                      : "bg-slate-800 text-blue-400 border border-slate-700 hover:bg-slate-700 hover:text-white hover:scale-105 z-10"
                  }`}
                >
                  <span className="relative flex h-2 w-2">
                    {activeHotspot?.id === hs.id && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    )}
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${activeHotspot?.id === hs.id ? "bg-white" : "bg-blue-500"}`}></span>
                  </span>
                </button>
              ))}

              {/* Helpful alignment labels */}
              <div className="absolute top-3 left-4 text-[10px] text-slate-500 font-mono">
                CAD DIAGRAM: JETRONIX CABINET X-RAY SCHEMATIC
              </div>
              <div className="absolute bottom-3 right-4 text-[10px] text-slate-500 font-mono">
                SCALE: 1:10 // VECTOR GRID
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
