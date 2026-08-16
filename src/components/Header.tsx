import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";
import { 
  Menu, X, Phone, Layers, Calculator, ShieldCheck, MessageSquare, 
  Briefcase, Compass, Clock, MapPin, Activity, HelpCircle, FileText,
  ChevronDown, Check, Sliders, Play, Award, Zap,
  GlassWater, UtensilsCrossed, Dna, Cigarette, Factory, Sparkles, Printer, Cpu, RefreshCw,
  Settings, ChevronRight
} from "lucide-react";

import { products as catalogue, categories as catalogueCategories } from "../data";
import { ProductCategory } from "../types";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onNavigateToProduct: (productId?: string, category?: string) => void;
  activeQuoteRef?: string | null;
}

interface ProductSubItem {
  id: string;
  name: string;
  desc: string;
  badge?: string;
}

interface SubCategoryItem {
  id: string;
  name: string;
  shortDesc: string;
  iconName: string;
  items: ProductSubItem[];
}

const CATEGORY_ICONS: Record<ProductCategory, string> = {
  cij: "Cpu",
  tij: "Zap",
  handheld: "Sliders",
  tto: "Printer",
  laser: "Sparkles",
  sealing: "Factory"
};

const CATEGORY_BADGES: Record<ProductCategory, string> = {
  cij: "CIJ",
  tij: "TIJ",
  handheld: "HANDHELD",
  tto: "TTO",
  laser: "LASER",
  sealing: "SEALER"
};

// Derived from the catalogue so every menu entry links to a product that actually exists.
const productCategoriesDerived: SubCategoryItem[] = catalogueCategories.map((cat) => ({
  id: cat.id,
  name: cat.label,
  shortDesc: cat.shortLabel,
  iconName: CATEGORY_ICONS[cat.id],
  items: catalogue
    .filter((p) => p.category === cat.id)
    .map((p) => ({
      id: p.id,
      name: p.name,
      desc: p.tagline,
      badge: p.distributedBrand ? p.distributedBrand.toUpperCase() : CATEGORY_BADGES[cat.id]
    }))
}));

const productCategories: SubCategoryItem[] = productCategoriesDerived;

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case "Cpu": return Cpu;
    case "Printer": return Printer;
    case "Zap": return Zap;
    case "Sliders": return Sliders;
    case "Layers": return Layers;
    case "Activity": return Activity;
    case "Sparkles": return Sparkles;
    case "Factory": return Factory;
    case "RefreshCw": return RefreshCw;
    default: return Settings;
  }
};

export default function Header({ currentPage, onNavigate, onNavigateToProduct, activeQuoteRef }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [tickerIndex, setTickerIndex] = useState(0);
  const [hoveredCategory, setHoveredCategory] = useState<string>(productCategories[0].id);

  const tickerMessages = [
    "Authorized Distributor of Jetronix & BestCode Systems",
    "Indo-German Joint Venture Logistics & Spare Support Node",
    "SLA Active: 2-Hour इंदौर (Indore) | 4-Hour जयपुर (Jaipur)"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerMessages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Jump to the catalogue with a specific product (or category) already selected.
  const handleProductNavClick = (productId?: string, category?: string) => {
    onNavigateToProduct(productId, category);
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleNavClick = (id: string, anchorId?: string) => {
    onNavigate(id);
    setIsOpen(false);
    setActiveDropdown(null);
    if (anchorId) {
      // The destination page mounts behind a fade transition, so the anchor may not exist yet.
      // Poll briefly instead of guessing a single delay.
      let attempts = 0;
      const tryScroll = () => {
        const element = document.getElementById(anchorId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempts++ < 20) {
          setTimeout(tryScroll, 100);
        }
      };
      setTimeout(tryScroll, 400);
    }
  };

  const sectors = [
    { name: "BEVERAGE", desc: "Bottle & Can High Speed Marking", target: "products", icon: GlassWater, badge: "HIGH-SPEED" },
    { name: "FOOD", desc: "FMCG, Pouches & Carton Codes", target: "products", icon: UtensilsCrossed, badge: "FOOD-GRADE" },
    { name: "LIFE SCIENCES", desc: "Pharma Blister Pack & Serialization", target: "products", icon: Dna, badge: "GS1 DATA" },
    { name: "TOBACCO", desc: "High Velocity Duty Stamp Verification", target: "products", icon: Cigarette, badge: "STAMP" },
    { name: "INDUSTRIAL", desc: "Cable Extrusion, Pipes & Metal Parts", target: "products", icon: Factory, badge: "HEAVY-DUTY" },
    { name: "PERSONAL CARE", desc: "Cosmetic Plastic Bottles & Tubes", target: "products", icon: Sparkles, badge: "AESTHETIC" }
  ];

  const products = [
    { name: "PRODUCT PRINTING", desc: "S200PLUS & Si220 Continuous Inkjet", target: "products", anchor: "product-catalogue", icon: Cpu, badge: "CIJ" },
    { name: "CASE PRINTING & LABELLING", desc: "Outer box character markers & DOD", target: "products", anchor: "product-catalogue", icon: Printer, badge: "Large Char" },
    { name: "PALLET LABELLING", desc: "Print & apply automated pallet taggers", target: "products", anchor: "product-catalogue", icon: Layers, badge: "GS1-128" },
    { name: "CODE VERIFICATION", desc: "Vision inspect & camera rejection loops", target: "lab", icon: ShieldCheck, badge: "VISION" },
    { name: "SECTOR SOLUTIONS", desc: "Engineered customized printheads", target: "products", icon: Settings, badge: "OEM" },
    { name: "CONSUMABLES", desc: "Certified high-contrast fast-dry inks", target: "partners", icon: RefreshCw, badge: "FLUIDS" },
  ];

  const tools = [
    { name: "ROI & GST Calculator", desc: "Analyze solvent savings", target: "calculator", icon: Calculator, badge: "ROI" },
    { name: "AI Tech Advisor", desc: "Gemini-powered specifications", target: "advisor", icon: MessageSquare, badge: "AI CO-PILOT" },
    { name: "Virtual Matchmaker Lab", desc: "Test inks on substrates", target: "lab", icon: ShieldCheck, badge: "LAB" },
  ];

  return (
    <div className="w-full flex flex-col relative z-50 bg-white" id="global-header-wrapper">
      
      {/* 1. Slim Top Bar (Micro-Header) for Distributor Authority & SLA Status */}
      <div className="w-full bg-[#12223c] text-white py-1.5 text-[10px] md:text-xs font-sans tracking-wider font-medium border-b border-blue-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 h-auto sm:h-9">
          
          {/* Active Live Ticker */}
          <div className="flex items-center gap-2 overflow-hidden shrink min-w-0">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            
            <div className="flex items-center gap-1.5 bg-blue-950/50 text-sky-400 px-1.5 py-0.5 rounded text-[8px] font-semibold tracking-widest uppercase shrink-0 border border-blue-800/20">
              <span>LIVE DESK</span>
            </div>

            {/* Ticker Animation */}
            <div className="h-5 flex items-center relative overflow-hidden min-w-[200px] md:min-w-[320px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={tickerIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="text-[9px] md:text-[10px] uppercase font-bold text-slate-200 tracking-wider truncate"
                >
                  {tickerMessages[tickerIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Contact and SLA Details */}
          <div className="flex items-center gap-4 shrink-0 text-[10px] md:text-xs font-semibold text-slate-300">
            <a href="tel:+919522299975" className="hover:text-sky-400 transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-sky-400" />
              <span>SLA Desk: +91 95222 99975</span>
            </a>
            <span className="text-slate-600">|</span>
            <a href="https://wa.me/919828106099" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
              <MessageSquare className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main High-Fidelity Header - Modern, Clean & Beautiful (MB Industrial Concept) */}
      <header className="relative z-40 bg-white border-b border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)]" id="header-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Left: Brand Identity */}
            <div className="flex items-center cursor-pointer group" onClick={() => handleNavClick("home")} id="header-logo">
              <Logo className="h-11 md:h-12 w-auto transition-transform duration-300 group-hover:scale-[1.01]" />
            </div>

            {/* Middle: Minimal, Balanced Navigation Links (as requested in the screenshots) */}
            <nav className="hidden lg:flex space-x-1.5 items-center" id="desktop-nav">
              
              {/* Home */}
              <button
                onClick={() => handleNavClick("home")}
                className={`px-4 py-2 text-[11px] md:text-xs font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer rounded-xl relative group ${
                  currentPage === "home" ? "text-[#2564AF] bg-blue-50/50" : "text-[#12223c] hover:text-[#2564AF] hover:bg-slate-50"
                }`}
              >
                <span>Home</span>
                {currentPage === "home" && (
                  <motion.div 
                    layoutId="activeNavIndicator" 
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#2564AF] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              {/* About Us */}
              <button
                onClick={() => handleNavClick("home", "jv-overview")}
                className="px-4 py-2 text-[11px] md:text-xs font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer rounded-xl text-[#12223c] hover:text-[#2564AF] hover:bg-slate-50"
              >
                <span>About Us</span>
              </button>

              {/* Products (Dropdown hover) */}
              <div 
                className="relative" 
                onMouseEnter={() => setActiveDropdown("products")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick("products")}
                  className={`flex items-center gap-1 px-4 py-2 text-[11px] md:text-xs font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer rounded-xl ${
                    currentPage === "products" || activeDropdown === "products" 
                      ? "text-[#2564AF] bg-blue-50/50" 
                      : "text-[#12223c] hover:text-[#2564AF] hover:bg-slate-50"
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "products" ? "rotate-180 text-[#2564AF]" : ""}`} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === "products" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute left-1/2 -translate-x-[420px] mt-2 w-[840px] bg-white border border-slate-200/80 rounded-2xl shadow-[0_30px_70px_rgba(18,34,58,0.18)] z-50 flex overflow-hidden border-t-4 border-t-[#2564AF] text-slate-800"
                      onMouseEnter={() => setActiveDropdown("products")}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {/* Left Column: Categories List */}
                      <div className="w-[320px] bg-[#f8fafc]/95 backdrop-blur-md border-r border-slate-200/60 py-4 px-3.5 flex flex-col gap-1 shrink-0">
                        <div className="text-[9px] text-slate-400 font-mono tracking-widest font-bold uppercase px-3 pb-2 mb-2 border-b border-slate-200/50">
                          ✓ SYSTEM CATEGORIES
                        </div>
                        {productCategories.map((cat) => {
                          const isActive = hoveredCategory === cat.id;
                          const CategoryIcon = getCategoryIcon(cat.iconName);
                          return (
                            <button
                              key={cat.id}
                              id={`nav-cat-${cat.id}`}
                              onMouseEnter={() => setHoveredCategory(cat.id)}
                              onClick={() => {
                                setHoveredCategory(cat.id);
                                handleProductNavClick(undefined, cat.id);
                              }}
                              className={`w-full text-left px-3 py-2.5 rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-3 border border-transparent group/btn ${
                                isActive 
                                  ? "bg-white shadow-[0_4px_12px_rgba(18,34,58,0.04)] border-l-4 border-l-[#2564AF] border-y-slate-100 border-r-slate-100" 
                                  : "hover:bg-white/60 hover:shadow-sm"
                              }`}
                            >
                              <div className={`p-1.5 rounded-lg shrink-0 transition-colors ${
                                isActive 
                                  ? "bg-blue-50 text-[#2564AF]" 
                                  : "bg-slate-200/60 text-slate-500 group-hover/btn:bg-slate-200 group-hover/btn:text-slate-700"
                              }`}>
                                <CategoryIcon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className={`text-[10px] font-bold uppercase tracking-wider truncate transition-colors ${
                                  isActive ? "text-[#2564AF]" : "text-slate-600 group-hover/btn:text-slate-950"
                                }`}>
                                  {cat.name}
                                </div>
                                <div className="text-[8px] font-semibold text-slate-400 lowercase mt-0.5 tracking-normal group-hover/btn:text-slate-500 line-clamp-1">
                                  {cat.shortDesc}
                                </div>
                              </div>
                              <ChevronRight className={`w-3 h-3 transition-transform ${isActive ? "translate-x-0.5 text-[#2564AF]" : "text-slate-300 opacity-0 group-hover/btn:opacity-100"}`} />
                            </button>
                          );
                        })}
                      </div>

                      {/* Right Column: Dynamic Sub-products list */}
                      <div className="flex-1 bg-white p-6 flex flex-col justify-between min-h-[460px]">
                        <div>
                          {/* Sub-header showing active category name */}
                          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#2564AF] animate-pulse" />
                              <span className="text-[10px] text-slate-400 font-mono tracking-widest font-bold uppercase">
                                JETRONIX PORTFOLIO
                              </span>
                            </div>
                            <span className="text-[8px] font-mono font-bold bg-blue-50 text-[#2564AF] px-2 py-0.5 rounded-full uppercase tracking-wider">
                              {productCategories.find(c => c.id === hoveredCategory)?.items.length || 0} Models
                            </span>
                          </div>

                          <h4 className="text-[11px] font-extrabold text-[#12223c] uppercase tracking-wider mb-3.5">
                            {productCategories.find(c => c.id === hoveredCategory)?.name}
                          </h4>

                          <div className="grid grid-cols-2 gap-2 max-h-[290px] overflow-y-auto pr-1 select-none" id="submenu-products-list">
                            {productCategories.find(c => c.id === hoveredCategory)?.items.map((subItem, idx) => (
                              <div
                                key={idx}
                                id={`nav-product-${subItem.id}`}
                                onClick={() => handleProductNavClick(subItem.id)}
                                className="group/item flex flex-col justify-between p-3 rounded-xl bg-slate-50/40 hover:bg-blue-50/30 border border-slate-100/40 hover:border-blue-100/40 transition-all duration-200 cursor-pointer"
                              >
                                <div>
                                  <div className="flex items-start justify-between gap-1.5">
                                    <span className="text-[10px] font-extrabold text-slate-800 uppercase tracking-wide group-hover/item:text-[#2564AF] transition-colors leading-snug">
                                      {subItem.name}
                                    </span>
                                    {subItem.badge && (
                                      <span className="text-[7px] font-mono font-extrabold bg-slate-100 text-slate-500 group-hover/item:bg-blue-100 group-hover/item:text-[#2564AF] px-1.5 py-0.5 rounded transition-colors shrink-0">
                                        {subItem.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[9px] text-slate-400 font-medium mt-1 leading-normal group-hover/item:text-slate-500 transition-colors line-clamp-2">
                                    {subItem.desc}
                                  </p>
                                </div>
                                
                                <div className="flex items-center gap-1 text-[8px] font-extrabold text-[#2564AF] transition-all mt-3 opacity-0 group-hover/item:opacity-100 translate-y-1 group-hover/item:translate-y-0 duration-150">
                                  <span>Specification Sheet</span>
                                  <ChevronRight className="w-2.5 h-2.5" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Dropdown Footer Area */}
                        <div className="bg-[#12223c] p-3 rounded-xl mt-4 flex items-center justify-between text-white shadow-sm border border-blue-950/20">
                          <div className="flex items-center gap-2">
                            <span className="flex h-1.5 w-1.5 relative shrink-0">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sky-400" />
                            </span>
                            <span className="text-[8px] md:text-[9px] text-slate-300 font-medium font-sans uppercase tracking-wider">
                              SLA Support Desk: <b className="text-white">+91 95222 99975</b>
                            </span>
                          </div>
                          <button
                            onClick={() => handleNavClick("contact")}
                            className="bg-[#2564AF] hover:bg-blue-600 text-white font-extrabold uppercase tracking-widest text-[8px] py-1.5 px-3 rounded-lg flex items-center gap-1 cursor-pointer transition-colors border border-blue-500/10"
                          >
                            <span>Request Quote</span>
                            <ChevronRight className="w-2.5 h-2.5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Samples */}
              <button
                onClick={() => handleNavClick("lab")}
                className={`px-4 py-2 text-[11px] md:text-xs font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer rounded-xl relative group ${
                  currentPage === "lab" ? "text-[#2564AF] bg-blue-50/50" : "text-[#12223c] hover:text-[#2564AF] hover:bg-slate-50"
                }`}
              >
                <span>Samples</span>
                {currentPage === "lab" && (
                  <motion.div 
                    layoutId="activeNavIndicator" 
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#2564AF] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              {/* Interactive Tools Dropdown */}
              <div 
                className="relative" 
                onMouseEnter={() => setActiveDropdown("tools")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-[11px] md:text-xs font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer rounded-xl ${
                    ["calculator", "advisor"].includes(currentPage) || activeDropdown === "tools"
                      ? "text-[#2564AF] bg-blue-50/50" 
                      : "text-[#12223c] hover:text-[#2564AF] hover:bg-slate-50"
                  }`}
                >
                  <span>B2B Tools</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "tools" ? "rotate-180 text-[#2564AF]" : ""}`} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === "tools" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute right-0 mt-2 w-[280px] bg-white border border-slate-200/60 rounded-xl shadow-[0_15px_40px_rgba(18,34,58,0.1)] p-3 z-50 flex flex-col gap-1"
                    >
                      {tools.map((t, idx) => {
                        const Icon = t.icon;
                        return (
                          <div
                            key={idx}
                            onClick={() => handleNavClick(t.target)}
                            className="flex items-center gap-2.5 p-2.5 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors group"
                          >
                            <div className="p-1.5 bg-blue-50 text-[#2564AF] rounded-md group-hover:bg-[#2564AF] group-hover:text-white transition-colors">
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[10px] font-bold text-[#12223c] group-hover:text-[#2564AF] transition-colors">{t.name}</div>
                              <p className="text-[9px] text-slate-400 font-light truncate">{t.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Us */}
              <button
                onClick={() => handleNavClick("contact")}
                className={`px-4 py-2 text-[11px] md:text-xs font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer rounded-xl relative group ${
                  currentPage === "contact" ? "text-[#2564AF] bg-blue-50/50" : "text-[#12223c] hover:text-[#2564AF] hover:bg-slate-50"
                }`}
              >
                <span>Contact Us</span>
                {currentPage === "contact" && (
                  <motion.div 
                    layoutId="activeNavIndicator" 
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#2564AF] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

            </nav>

            {/* Right Side: SLA Alert Banner & Premium Get In Touch Pill Button */}
            <div className="hidden lg:flex items-center gap-4">
              
              {/* Submitted Inquiry Alert */}
              {activeQuoteRef && (
                <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 px-3 py-1.5 rounded-xl text-[9px] font-mono font-bold animate-pulse flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>REF ID: {activeQuoteRef} ACTIVE</span>
                </div>
              )}

              {/* Pill Button from the screenshot */}
              <button 
                onClick={() => handleNavClick("contact")}
                className="bg-[#2564AF] hover:bg-blue-700 text-white px-7 py-3 text-[11px] font-extrabold uppercase tracking-widest rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99]"
              >
                Get In Touch
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex items-center lg:hidden" id="mobile-menu-trigger">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#12223c] hover:text-[#2564AF] p-2 rounded-xl bg-slate-50 border border-slate-100 transition-all"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-slate-100 bg-white shadow-xl relative z-50 overflow-hidden"
            >
              <div className="p-4 space-y-4">
                <div className="flex flex-col gap-1">
                  <button onClick={() => handleNavClick("home")} className="text-left font-bold text-xs uppercase tracking-wider py-2 border-b border-slate-50 text-[#12223c]">
                    Home
                  </button>
                  <button onClick={() => handleNavClick("home", "jv-overview")} className="text-left font-bold text-xs uppercase tracking-wider py-2 border-b border-slate-50 text-[#12223c]">
                    About Us
                  </button>
                  <button onClick={() => handleNavClick("products")} className="text-left font-bold text-xs uppercase tracking-wider py-2 border-b border-slate-50 text-[#12223c]">
                    Products
                  </button>
                  <button onClick={() => handleNavClick("lab")} className="text-left font-bold text-xs uppercase tracking-wider py-2 border-b border-slate-50 text-[#12223c]">
                    Samples
                  </button>
                  <button onClick={() => handleNavClick("calculator")} className="text-left font-bold text-xs uppercase tracking-wider py-2 border-b border-slate-50 text-[#12223c]">
                    ROI Calculator
                  </button>
                  <button onClick={() => handleNavClick("advisor")} className="text-left font-bold text-xs uppercase tracking-wider py-2 border-b border-slate-50 text-[#12223c]">
                    AI Tech Advisor
                  </button>
                  <button onClick={() => handleNavClick("contact")} className="text-left font-bold text-xs uppercase tracking-wider py-2 text-[#12223c]">
                    Contact Us
                  </button>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">B2B SLA Support Desk</div>
                  <div className="text-xs font-bold text-[#12223c]">+91 95222 99975</div>
                  <button 
                    onClick={() => handleNavClick("contact")}
                    className="w-full bg-[#2564AF] text-white py-3 rounded-xl font-bold uppercase text-xs tracking-wider transition-all text-center"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
