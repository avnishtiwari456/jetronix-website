import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
  ChevronLeft, ChevronRight, Sparkles, Check
} from "lucide-react";

interface HeroProps {
  onNavigateToProduct: (productId?: string, category?: string) => void;
}

const slideBackgrounds = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1920&q=80"
];

/** The machine each hero slide is about, opened in the catalogue when clicked. */
const slideProductShots: {
  productId?: string; category: string; image: string; imageWebp?: string; productName: string; productType: string;
}[] = [
  {
    category: "cij",
    image: "/products/cij-range.jpg",
    productName: "Jetronix S200 / JX350",
    productType: "Continuous Inkjet Printers (CIJ)"
  },
  {
    productId: "jt240",
    category: "tij",
    image: "/products/tij-inline.jpg",
    imageWebp: "/products/tij-inline.webp",
    productName: "Jetronix JT240",
    productType: "Thermal Inkjet Printer (TIJ)"
  },
  {
    productId: "jlc60",
    category: "laser",
    image: "/products/laser-inline.jpg",
    imageWebp: "/products/laser-inline.webp",
    productName: "Jetronix JLC60",
    productType: "CO2 Laser Coding Machine"
  },
  {
    productId: "jh250",
    category: "handheld",
    image: "/products/handheld-inuse.jpg",
    imageWebp: "/products/handheld-inuse.webp",
    productName: "Jetronix JH250",
    productType: "Handheld Inkjet Printer"
  }
];

const slideTitles = [
  {
    category: "Continuous Inkjet (CIJ)",
    badge: "01 / 04",
    title: "Jetronix S200 / JX350",
    desc: "Explore our range of industrial continuous inkjet printers (CIJ) engineered specifically for non-clogging batch coding, expiry date marking, MRP, and dynamic QR/GS1-128 barcode printing. Built for 24/7 non-stop plant runtimes.",
    spec1: "Sapphire nozzle: non-clogging core",
    spec2: "IP55 dust & water robust enclosure"
  },
  {
    category: "Thermal Inkjet (TIJ)",
    badge: "02 / 04",
    title: "Jetronix JT240",
    desc: "Explore our range of Thermal Inkjet Printers (TIJ) for crisp and efficient print quality. Featuring cartridge-swapping ease with zero printhead maintenance—ideal for pharmaceutical, food package cartoning, and flexible foil lines.",
    spec1: "600 DPI sharp dynamic barcoding",
    spec2: "Cartridge swapping under 10 seconds"
  },
  {
    category: "CO2 Laser Marking",
    badge: "03 / 04",
    title: "Jetronix JLC60",
    desc: "The JLC60 burns the code straight into film, plastic, glass and leather at up to 1500 characters a second. Intelligent vector control holds the mark clean through 24-hour running, with no ink, no solvent and no cartridge to change.",
    spec1: "Up to 1500 characters per second",
    spec2: "Zero consumables - MTBF over 50,000 hours"
  },
  {
    category: "Handheld Printer",
    badge: "04 / 04",
    title: "Jetronix JH250",
    desc: "The JH250 puts a 600 DPI coder in one hand - text, barcodes, QR codes, MRP and dates straight onto cartons, metal, glass, plastic and wood. A smart touch screen sets the message and a USB port loads your logo, with no line integration to arrange.",
    spec1: "25.4 mm print height at up to 600 DPI",
    spec2: "Fast-drying cartridge, USB logo import"
  }
];

export default function Hero({ onNavigateToProduct }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const slidesCount = slideTitles.length;

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
  const productShot = slideProductShots[activeSlide];

  return (
    <section 
      id="hero-slider" 
      className="w-full relative bg-sky-600 text-white overflow-hidden flex flex-col justify-between py-10 md:py-14 min-h-[640px] lg:min-h-[720px] select-none"
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
        <div className="absolute inset-0 bg-gradient-to-r from-sky-700/90 via-sky-600/75 to-sky-500/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-sky-700 via-sky-600/20 to-sky-600/60 z-10" />
      </div>

      {/* Subtle Tech Pattern Overlay */}
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none z-10" />

      {/* Floating Left Navigation Arrow */}
      <button
        onClick={() => {
          prevSlide();
          setIsPlaying(false);
        }}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-sky-700/60 hover:bg-[#2564AF] border border-white/20 hover:border-blue-400 p-3 md:p-4 rounded-full text-white transition-all duration-200 cursor-pointer z-30 shadow-2xl backdrop-blur-md hover:scale-105 active:scale-95"
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
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-sky-700/60 hover:bg-[#2564AF] border border-white/20 hover:border-blue-400 p-3 md:p-4 rounded-full text-white transition-all duration-200 cursor-pointer z-30 shadow-2xl backdrop-blur-md hover:scale-105 active:scale-95"
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
                  
                  
                  {/* Description */}
                  <p className="text-white text-xs sm:text-sm leading-relaxed font-sans font-normal mt-3 max-w-xl drop-shadow-sm">
                    {currentSlideInfo.desc}
                  </p>
                </motion.div>
            </div>

            {/* Feature Spec Highlights */}
            <div className="py-2.5 border-y border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl text-left">
              <div className="flex items-center gap-2 text-xs text-white font-medium">
                <span className="w-4 h-4 rounded-full bg-blue-600/30 border border-blue-400/50 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-white" />
                </span>
                <span>{currentSlideInfo.spec1}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white font-medium">
                <span className="w-4 h-4 rounded-full bg-blue-600/30 border border-blue-400/50 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-white" />
                </span>
                <span>{currentSlideInfo.spec2}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Product Shot for the Slide on Screen */}
          <div className="lg:col-span-5 flex justify-center items-center">
            
            <div
              role="link"
              tabIndex={0}
              onClick={() => onNavigateToProduct(productShot.productId, productShot.category)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onNavigateToProduct(productShot.productId, productShot.category);
                }
              }}
              aria-label={`View ${productShot.productName} specifications`}
              className="w-full max-w-[420px] aspect-[4/3.2] rounded-2xl relative overflow-hidden bg-gradient-to-b from-white via-white to-slate-100 border border-white/25 shadow-2xl ring-1 ring-black/5 cursor-pointer transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >

              {/* Product shot for the slide on screen */}
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <picture>
                  {productShot.imageWebp && (
                    <source srcSet={productShot.imageWebp} type="image/webp" />
                  )}
                  <img
                    src={productShot.image}
                    alt={productShot.productName}
                    className="w-full h-full object-contain object-center p-5 pb-16"
                  />
                </picture>
              </motion.div>

              {/* Keeps the caption readable over both the white-out shots and the in-plant one */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-sky-900/95 via-sky-800/80 to-transparent pointer-events-none" />


              <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                <span className="text-white/90 font-mono text-[9px] font-bold uppercase tracking-widest block">
                  {productShot.productType}
                </span>
                <h4 className="text-white text-base sm:text-lg font-black tracking-tight leading-tight uppercase">
                  {productShot.productName}
                </h4>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Bottom Category Tab Navigator Bar */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 pt-4">
        <div className="grid grid-cols-4 gap-2 bg-sky-700/70 p-2 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
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
