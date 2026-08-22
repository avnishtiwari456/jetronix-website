import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { 
  ChevronLeft, ChevronRight, Play, Cpu, Sparkles, Check, 
  Zap, Settings, HelpCircle, Layers, RefreshCw, Barcode, Flame
} from "lucide-react";

interface HeroProps {
  onExploreProducts: () => void;
  onOpenCalculator: () => void;
}

const slideBackgrounds = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1920&q=80"
];

const slideTitles = [
  {
    category: "Continuous Inkjet (CIJ)",
    badge: "01 / 04",
    title: "High-Performance Industrial Inkjet Printers",
    subtitle: "Flagship Continuous Inkjet Systems for Heavy Production",
    desc: "Explore our range of industrial continuous inkjet printers (CIJ) engineered specifically for non-clogging batch coding, expiry date marking, MRP, and dynamic QR/GS1-128 barcode printing. Built for 24/7 non-stop plant runtimes.",
    spec1: "Sapphire nozzle: non-clogging core",
    spec2: "IP55 dust & water robust enclosure"
  },
  {
    category: "Thermal Inkjet (TIJ)",
    badge: "02 / 04",
    title: "Reliable Thermal Inkjet Printers",
    subtitle: "High-Resolution Cartridge Systems for Fast Integration",
    desc: "Explore our range of Thermal Inkjet Printers (TIJ) for crisp and efficient print quality. Featuring cartridge-swapping ease with zero printhead maintenance—ideal for pharmaceutical, food package cartoning, and flexible foil lines.",
    spec1: "600 DPI sharp dynamic barcoding",
    spec2: "Cartridge swapping under 10 seconds"
  },
  {
    category: "Substrates Print Showroom",
    badge: "03 / 04",
    title: "Printing Samples Showcase",
    subtitle: "Certified Micro-Precision Print Results on Metal, Glass & Board",
    desc: "See the uncompromised, high-contrast prints achieved with our advanced marking machines. Witness real physical samples from our satisfied clients across pharmaceuticals, beverages, and heavy wire extrusion plants.",
    spec1: "Tested on 12 manufacturing substrates",
    spec2: "100% readable GS1 DataMatrix check"
  },
  {
    category: "Premium Fluids & Solvents",
    badge: "04 / 04",
    title: "Premium Inks for Every Application",
    subtitle: "1-Second Fast Dry MEK Fluids & Genuine OEM Replacements",
    desc: "Experience superior ink adhesion and lightning-fast dry-times on diverse, glossy, or oily substrates. Stocked locally in our Indore and Jaipur hubs for immediate SLA dispatch.",
    spec1: "MEK / Alcohol Base certified fast-dry",
    spec2: "Zero sediment formulation filters"
  }
];

export default function Hero({ onExploreProducts, onOpenCalculator }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  
  // Slide 2 interactive state: Custom print text simulation
  const [customPrintText, setCustomPrintText] = useState<string>("BATCH # 415");

  // Slide 4 interactive state: Active substrate sample
  const [activeSubstrate, setActiveSubstrate] = useState<string>("carton");

  const slidesCount = 5;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slidesCount);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  };

  // Auto slide rotation
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 9000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentSlideInfo = slideTitles[activeSlide];

  return (
    <section 
      id="hero-slider" 
      className="w-full relative bg-slate-950 text-white overflow-hidden flex flex-col justify-between py-10 md:py-14 min-h-[640px] lg:min-h-[720px] select-none"
    >
      {/* Dynamic Full-Bleed Slide Background Image */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.85, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slideBackgrounds[activeSlide]})` }}
          />

        {/* High-Legibility Dark Scrim Overlay (Ensures text stands out while full background image stays vivid) */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/60 z-10" />
      </div>

      {/* Subtle Tech Pattern Overlay */}
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none z-10" />

      {/* Floating Left Navigation Arrow */}
      <button
        onClick={() => {
          prevSlide();
          setIsPlaying(false);
        }}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-slate-950/60 hover:bg-[#2564AF] border border-white/20 hover:border-blue-400 p-3 md:p-4 rounded-full text-white transition-all duration-200 cursor-pointer z-30 shadow-2xl backdrop-blur-md hover:scale-105 active:scale-95"
        id="hero-arrow-prev"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Floating Right Navigation Arrow */}
      <button
        onClick={() => {
          nextSlide();
          setIsPlaying(false);
        }}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-slate-950/60 hover:bg-[#2564AF] border border-white/20 hover:border-blue-400 p-3 md:p-4 rounded-full text-white transition-all duration-200 cursor-pointer z-30 shadow-2xl backdrop-blur-md hover:scale-105 active:scale-95"
        id="hero-arrow-next"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 flex-grow flex items-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full px-6 md:px-12 py-4">
          
          {/* Left Column: Title, Subtitle, Description, Checklist & Action Buttons */}
          <div className="lg:col-span-7 space-y-5 text-left flex flex-col justify-center">
            
            {/* Top Category Badge & Counter */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full inline-flex items-center gap-2 bg-blue-950/80 border border-blue-500/40 text-sky-400 shadow-md backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <span>{currentSlideInfo.badge}</span>
                <span className="text-white/40">|</span>
                <span>{currentSlideInfo.category}</span>
              </span>
            </div>

            {/* Dynamic Title and Description */}
            <div className="space-y-3">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                >
                  {/* Main Title */}
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] uppercase font-display drop-shadow-md">
                    {currentSlideInfo.title}
                  </h1>
                  
                  {/* Subtitle */}
                  <h3 className="text-xs sm:text-sm md:text-base font-extrabold text-sky-400 tracking-wide font-sans mt-2.5 drop-shadow">
                    {currentSlideInfo.subtitle}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-sans font-normal mt-3 max-w-xl drop-shadow-sm">
                    {currentSlideInfo.desc}
                  </p>
                </motion.div>
            </div>

            {/* Feature Spec Highlights */}
            <div className="py-2.5 border-y border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl text-left">
              <div className="flex items-center gap-2 text-xs text-slate-100 font-medium">
                <span className="w-4 h-4 rounded-full bg-blue-600/30 border border-blue-400/50 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-sky-300" />
                </span>
                <span>{currentSlideInfo.spec1}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-100 font-medium">
                <span className="w-4 h-4 rounded-full bg-blue-600/30 border border-blue-400/50 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-sky-300" />
                </span>
                <span>{currentSlideInfo.spec2}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-2 bg-[#2564AF] hover:bg-blue-600 text-white font-black px-7 py-3 rounded-xl shadow-xl transition-all duration-200 cursor-pointer text-xs uppercase tracking-wider border border-blue-400/30 hover:shadow-blue-500/25 active:scale-98"
              >
                <span>{activeSlide === 2 ? "View All Samples" : "Explore All Products"}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-900 border border-white/20 hover:border-white/40 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer text-xs uppercase tracking-wider backdrop-blur-md active:scale-98"
              >
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Calculate B2B ROI</span>
              </button>
            </div>

          </div>

          {/* Right Column: Floating Frosted Interactive Device / Preview Card */}
          <div className="lg:col-span-5 flex justify-center items-center">
            
            <div className="w-full max-w-[420px] aspect-[4/3.2] rounded-2xl relative overflow-hidden bg-slate-900/65 border border-white/20 p-5 shadow-2xl flex flex-col justify-between backdrop-blur-md">
                
                {/* 1. Continuous Inkjet (CIJ) Interactive Mockup */}
                {activeSlide === 0 && (
                  <motion.div
                    key="cij-model"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                      <span className="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-widest flex items-center gap-1.5">
                        <Cpu className="w-4 h-4 animate-spin text-sky-400" style={{ animationDuration: '6s' }} /> Active CIJ Diagnostic
                      </span>
                      <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[8px] font-mono font-bold px-2 py-0.5 rounded-full uppercase">
                        ONLINE
                      </span>
                    </div>

                    <div className="flex-grow flex items-center justify-center py-2 relative">
                      <div className="w-36 h-48 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 rounded-xl relative border border-slate-200 shadow-xl flex flex-col items-center p-3">
                        <div className="w-full h-20 bg-slate-900 rounded-lg border-2 border-slate-600 p-1.5 flex flex-col justify-between">
                          <div className="flex justify-between items-center text-[7px] font-mono text-slate-400">
                            <span>S200-PLUS</span>
                            <span className="text-emerald-400 font-bold animate-pulse">READY</span>
                          </div>
                          <div className="text-[9px] font-mono text-sky-400 tracking-wider text-center bg-slate-950 rounded py-1 border border-slate-800/80">
                            <span className="animate-pulse">MFG: 05/07/26</span>
                            <br />
                            <span className="text-amber-400">EXP: 04/07/29</span>
                          </div>
                        </div>

                        <div className="absolute top-[-8px] left-6 w-5 h-2 bg-yellow-500 rounded-t border-t border-slate-300" />
                        <div className="absolute top-[-8px] right-6 w-5 h-2 bg-slate-800 rounded-t border-t border-slate-300" />

                        <div className="mt-4 bg-red-600 px-3 py-0.5 rounded text-[7px] font-bold tracking-widest text-white shadow">
                          JETRONIX
                        </div>

                        <div className="flex gap-2 mt-auto">
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-md shadow-emerald-500/40 animate-pulse" />
                          <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                          <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                        </div>
                      </div>

                      <div className="absolute right-10 bottom-10 flex flex-col items-center">
                        <div className="w-2 h-14 bg-gradient-to-r from-slate-800 to-slate-950 rounded-full border border-slate-700/50" />
                        <div className="w-6 h-8 bg-slate-800 border-2 border-slate-500 rounded flex items-center justify-center shadow-lg">
                          <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-2 text-[9px] font-mono text-slate-300">
                      <div>
                        <span className="text-slate-400 block">PRESSURE</span>
                        <span className="font-bold text-sky-400">4.2 BAR</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">VISCOSITY</span>
                        <span className="font-bold text-emerald-400">5.8 mPa·s</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">INK TEMP</span>
                        <span className="font-bold text-amber-400">22.4 °C</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 2. Thermal Inkjet (TIJ) Interactive Mockup */}
                {activeSlide === 1 && (
                  <motion.div
                    key="tij-model"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                      <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                        <Barcode className="w-4 h-4 text-emerald-400" /> TIJ Real-time Print Simulation
                      </span>
                      <span className="bg-sky-500/20 border border-sky-500/40 text-sky-400 text-[8px] font-mono font-bold px-2 py-0.5 rounded-full uppercase">
                        600 DPI
                      </span>
                    </div>

                    <div className="flex-grow flex flex-col items-center justify-center gap-3">
                      <div className="w-full max-w-[280px] bg-white rounded-lg p-3.5 shadow-xl flex flex-col gap-1.5">
                        <div className="flex justify-between items-center text-[7px] text-slate-500 font-mono">
                          <span>CARTON_SUBSTRATE_1A</span>
                          <span className="text-[#2564AF] font-bold">INKJET MARKED</span>
                        </div>
                        <div className="bg-slate-50 rounded border border-slate-100 p-2.5 min-h-[50px] flex flex-col justify-center items-center text-slate-900 relative overflow-hidden">
                          <div className="text-center font-mono font-extrabold text-[12px] md:text-[14px] text-slate-800 tracking-wider dot-matrix uppercase select-none">
                            {customPrintText || "BATCH # 415"}
                          </div>
                          <div className="text-[8px] font-mono text-slate-500 mt-1">
                            MFG: 05/07/2026 | EXP: 04/07/2029
                          </div>
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-red-500 opacity-60 fluid-animate" />
                        </div>
                      </div>

                      <div className="w-full max-w-[280px] space-y-1.5">
                        <label className="text-[9px] font-mono text-slate-300 block uppercase tracking-wider">
                          Type Custom Batch Code to Preview:
                        </label>
                        <input
                          type="text"
                          value={customPrintText}
                          onChange={(e) => setCustomPrintText(e.target.value.slice(0, 18))}
                          placeholder="e.g. BATCH # 415"
                          className="w-full bg-slate-950/80 border border-white/20 rounded-xl px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#2564AF] focus:ring-1 focus:ring-[#2564AF]/40 font-mono"
                        />
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-2 text-[9px] font-mono text-slate-300 flex justify-between items-center">
                      <span>CARTRIDGE FLUID STATUS:</span>
                      <span className="font-extrabold text-emerald-400">89% (MEK SOLVENT)</span>
                    </div>
                  </motion.div>
                )}

                {/* 4. Printing Samples Showcase Interactive Mockup */}
                {activeSlide === 2 && (
                  <motion.div
                    key="samples-model"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                      <span className="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-widest flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-sky-400" /> Interactive Substrate Lab
                      </span>
                      <span className="bg-sky-500/20 border border-sky-500/40 text-sky-400 text-[8px] font-mono font-bold px-2 py-0.5 rounded-full uppercase">
                        SAMPLES
                      </span>
                    </div>

                    <div className="flex-grow flex flex-col items-center justify-center gap-3">
                      <div className="w-52 aspect-[4/2.8] rounded-xl relative overflow-hidden flex flex-col items-center justify-center p-3 shadow-xl border border-white/20">
                        {activeSubstrate === "carton" && (
                          <div className="absolute inset-0 bg-[#e2d5c3] flex flex-col justify-between p-3 text-slate-800">
                            <div className="text-[7px] font-mono text-slate-600 font-extrabold uppercase">BROWN CORRUGATED CARDBOARD</div>
                            <div className="text-center bg-white/30 p-2.5 rounded border border-black/10 font-mono">
                              <div className="text-xs font-black tracking-wide text-black dot-matrix">
                                BATCH: {customPrintText || "JX-415"}
                              </div>
                              <div className="text-[7px] font-bold text-slate-800 mt-0.5">
                                MFG: 05/07/2026 | EXP: 04/07/2029
                              </div>
                            </div>
                            <div className="text-[7px] font-mono text-slate-600 text-right leading-none">HIGH ABSORBENCY OK</div>
                          </div>
                        )}

                        {activeSubstrate === "can" && (
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-400 via-slate-200 to-slate-500 flex flex-col justify-between p-3 text-slate-900">
                            <div className="text-[7px] font-mono text-slate-700 font-extrabold uppercase">ALUMINUM CAN BOTTOM</div>
                            <div className="text-center p-2 font-mono">
                              <div className="text-[11px] font-black tracking-widest text-blue-900 select-none scale-y-110">
                                {customPrintText || "BATCH # 415"}
                              </div>
                              <div className="text-[6.5px] font-bold text-slate-800 tracking-wider">
                                05/07/2026-07:40
                              </div>
                            </div>
                            <div className="text-[7px] font-mono text-slate-700 text-right leading-none">NON-POROUS QUICKDRY OK</div>
                          </div>
                        )}

                        {activeSubstrate === "cable" && (
                          <div className="absolute inset-0 bg-slate-900 flex flex-col justify-center items-center p-4">
                            <div className="text-[7px] font-mono text-slate-400 font-extrabold uppercase absolute top-2 left-3">EXTRUDED BLACK CABLE</div>
                            <div className="w-full h-8 bg-black rounded-lg border-y border-slate-700 flex items-center px-4 relative shadow-inner">
                              <span className="text-[9px] font-mono font-bold text-yellow-400 tracking-widest leading-none block select-none">
                                ... JETRONIX CIJ {customPrintText || "BATCH # 415"} 05/07/2026 ...
                              </span>
                            </div>
                            <div className="text-[7px] font-mono text-slate-400 absolute bottom-2 right-3">IP66 DUST RESISTANT</div>
                          </div>
                        )}
                      </div>

                      <div className="flex gap-2 bg-slate-950/80 p-1 rounded-xl border border-white/10">
                        {["carton", "can", "cable"].map((sub) => (
                          <button
                            key={sub}
                            onClick={() => setActiveSubstrate(sub)}
                            className={`px-3 py-1 text-[8px] font-mono font-bold rounded-lg transition-all uppercase tracking-wider cursor-pointer ${
                              activeSubstrate === sub 
                                ? "bg-sky-500 text-slate-950 shadow-md" 
                                : "text-slate-400 hover:text-white"
                            }`}
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-2 text-[9px] font-mono text-slate-300 flex justify-between items-center">
                      <span>INK FORMULATION USED:</span>
                      <span className="text-emerald-400 font-bold uppercase">
                        {activeSubstrate === "carton" ? "Water-Based Black" : activeSubstrate === "can" ? "MEK Blue Solvent" : "Pigmented Yellow"}
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* 5. Premium Inks lineup Interactive Mockup */}
                {activeSlide === 3 && (
                  <motion.div
                    key="inks-model"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                      <span className="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-widest flex items-center gap-1.5">
                        <Flame className="w-4 h-4 text-sky-400" /> Premium Certified Solvents
                      </span>
                      <span className="bg-sky-500/20 border border-sky-500/40 text-sky-400 text-[8px] font-mono font-bold px-2 py-0.5 rounded-full uppercase">
                        100% OEM
                      </span>
                    </div>

                    <div className="flex-grow flex items-center justify-center gap-6 py-2">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-24 bg-slate-900 border-2 border-slate-700 rounded-t-lg rounded-b-xl relative shadow-xl flex flex-col items-center justify-between p-1">
                          <div className="w-5 h-4 bg-yellow-500 rounded-sm border-b border-slate-800" />
                          <div className="w-full bg-yellow-500 text-[6px] font-sans font-extrabold text-slate-900 text-center py-2.5 rounded-sm select-none">
                            MEK-60
                          </div>
                          <div className="w-full h-8 bg-slate-950 rounded-b-lg border-t border-slate-800 flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                          </div>
                        </div>
                        <span className="text-[8px] font-mono text-slate-300 mt-1.5">BLACK INK</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-10 h-24 bg-slate-100 border-2 border-slate-300 rounded-t-lg rounded-b-xl relative shadow-xl flex flex-col items-center justify-between p-1">
                          <div className="w-5 h-4 bg-slate-400 rounded-sm border-b border-slate-200" />
                          <div className="w-full bg-slate-800 text-[6px] font-sans font-extrabold text-white text-center py-2.5 rounded-sm select-none">
                            MC-320
                          </div>
                          <div className="w-full h-10 bg-sky-100/30 rounded-b-lg border-t border-slate-200 flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          </div>
                        </div>
                        <span className="text-[8px] font-mono text-slate-300 mt-1.5">SOLVENT</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-10 h-24 bg-slate-900 border-2 border-slate-700 rounded-t-lg rounded-b-xl relative shadow-xl flex flex-col items-center justify-between p-1">
                          <div className="w-5 h-4 bg-yellow-500 rounded-sm border-b border-slate-800" />
                          <div className="w-full bg-yellow-500 text-[6px] font-sans font-extrabold text-slate-900 text-center py-2.5 rounded-sm select-none">
                            YL-100
                          </div>
                          <div className="w-full h-8 bg-yellow-600 rounded-b-lg border-t border-slate-800 flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                          </div>
                        </div>
                        <span className="text-[8px] font-mono text-slate-300 mt-1.5">YELLOW INK</span>
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-2 text-[9px] font-mono text-slate-300 flex justify-between items-center">
                      <span>DRYING TIME RATINGS:</span>
                      <span className="text-emerald-400 font-bold">1 SECOND (ULTRA-FAST)</span>
                    </div>
                  </motion.div>
                )}

            </div>

          </div>

        </div>
      </div>

      {/* Bottom Category Tab Navigator Bar */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 pt-4">
        <div className="grid grid-cols-5 gap-2 bg-slate-950/70 p-2 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
          {slideTitles.map((slide, idx) => {
            const isActive = activeSlide === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveSlide(idx);
                  setIsPlaying(false);
                }}
                className={`relative p-2 md:p-3 rounded-xl transition-all duration-200 text-left flex flex-col justify-between overflow-hidden cursor-pointer ${
                  isActive 
                    ? "bg-[#2564AF] text-white shadow-lg shadow-blue-600/30 border border-blue-400/40" 
                    : "hover:bg-white/10 text-slate-300 border border-transparent"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[8px] md:text-[9px] font-mono font-extrabold ${isActive ? "text-sky-200" : "text-slate-400"}`}>
                    0{idx + 1}
                  </span>
                  {isActive && <Sparkles className="w-3 h-3 text-sky-300 animate-pulse hidden sm:block" />}
                </div>

                <div className="text-[9px] md:text-[11px] font-extrabold uppercase tracking-wide mt-1 leading-tight break-words">
                  {slide.category.split(" ")[0]} {slide.category.split(" ")[1] || ""}
                </div>

                {/* Animated active progress indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeSlideIndicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-sky-300 rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

    </section>
  );
}
