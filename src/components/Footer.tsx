import React from "react";
import Logo from "./Logo";
import { 
  ShieldCheck, Award, Phone, Mail, MapPin, CheckCircle2, 
  ChevronRight, Facebook, Twitter, Linkedin, Instagram, Youtube, Globe
} from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
  onNavigateToProduct: (productId?: string, category?: string) => void;
}

// Each entry resolves to a real catalogue destination — a product or a category.
const footerProductLinks: { label: string; productId?: string; category?: string }[] = [
  { label: "Jetronix Inkjet Printer 5500", productId: "jx5500" },
  { label: "Jetronix 5500 Pro (IP65)", productId: "jx5500pro" },
  { label: "Continuous Inkjet Printers", category: "cij" },
  { label: "Thermal Inkjet Printers", category: "tij" },
  { label: "Laser Marking Machines", category: "laser" },
  { label: "Conveyors & Rewinders", category: "conveyor" }
];

export default function Footer({ onNavigate, onNavigateToProduct }: FooterProps) {
  return (
    <footer className="bg-[#050b14] text-slate-300 pt-16 pb-10 border-t border-slate-900/60 relative overflow-hidden" id="global-footer">
      
      {/* Dynamic tech ambient grid on background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a50_1px,transparent_1px),linear-gradient(to_bottom,#0f172a50_1px,transparent_1px)] bg-[size:32px_32px] opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[250px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* MAIN FOUR-COLUMN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-900">
          
          {/* Column 1: Brand & Socials (col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center justify-start gap-2.5">
              <Logo isDarkBackground={true} className="h-10 w-auto" />
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed font-sans font-light max-w-sm">
              Jetronix India is an elite industrial joint venture of <strong>Runicha Enterprises (Indore)</strong> and <strong>Best Code Technology India (Jaipur)</strong>. We specialize in supply-chain Continuous Inkjet (CIJ) printing, advanced solvent vapor condensation reclaimers, and high-performance pigmented coding inks for heavy manufacturing environments.
            </p>

            {/* Premium Social Connections */}
            <div className="space-y-2.5 pt-1">
              <div className="text-[10px] font-mono tracking-widest text-slate-500 font-bold uppercase">Connect With Us</div>
              <div className="flex items-center gap-2">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#091220] hover:bg-[#2564AF] text-slate-400 hover:text-white rounded-xl border border-slate-800/60 hover:border-[#2564AF] transition-all duration-200" title="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#091220] hover:bg-[#2564AF] text-slate-400 hover:text-white rounded-xl border border-slate-800/60 hover:border-[#2564AF] transition-all duration-200" title="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#091220] hover:bg-[#2564AF] text-slate-400 hover:text-white rounded-xl border border-slate-800/60 hover:border-[#2564AF] transition-all duration-200" title="Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#091220] hover:bg-[#2564AF] text-slate-400 hover:text-white rounded-xl border border-slate-800/60 hover:border-[#2564AF] transition-all duration-200" title="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#091220] hover:bg-[#2564AF] text-slate-400 hover:text-white rounded-xl border border-slate-800/60 hover:border-[#2564AF] transition-all duration-200" title="YouTube">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quality Badges */}
            <div className="flex flex-wrap gap-2 text-[9px] font-mono font-bold pt-1">
              <span className="flex items-center gap-1.5 bg-[#08101b] border border-slate-800 px-2.5 py-1.5 rounded-lg text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2564AF]" /> ISO 9001:2015 CERTIFIED
              </span>
              <span className="flex items-center gap-1.5 bg-[#08101b] border border-slate-800 px-2.5 py-1.5 rounded-lg text-slate-400">
                <Award className="w-3.5 h-3.5 text-amber-500" /> CE COMPLIANT CHASSIS
              </span>
            </div>
          </div>

          {/* Column 2: Industrial Systems (col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans font-black text-xs text-white uppercase tracking-widest font-mono border-b border-slate-900 pb-2.5">
              Industrial Products
            </h4>
            <ul className="space-y-3 text-xs font-medium">
              {footerProductLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigateToProduct(link.productId, link.category)}
                    className="text-slate-400 hover:text-white transition-all text-left flex items-center gap-1.5 group cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#2564AF] group-hover:translate-x-0.5 transition-transform" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Interactive Portals (col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans font-black text-xs text-white uppercase tracking-widest font-mono border-b border-slate-900 pb-2.5">
              Interactive Tools
            </h4>
            <ul className="space-y-3 text-xs font-medium">
              <li>
                <button 
                  onClick={() => onNavigate("calculator")} 
                  className="text-slate-400 hover:text-white transition-all text-left flex items-center gap-1.5 group cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#2564AF] group-hover:translate-x-0.5 transition-transform" />
                  <span>ROI & Solvent Savings Estimator</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("lab")} 
                  className="text-slate-400 hover:text-white transition-all text-left flex items-center gap-1.5 group cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#2564AF] group-hover:translate-x-0.5 transition-transform" />
                  <span>Substrate Virtual Print Lab</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("advisor")} 
                  className="text-slate-400 hover:text-white transition-all text-left flex items-center gap-1.5 group cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#2564AF] group-hover:translate-x-0.5 transition-transform" />
                  <span>AI B2B Technical Advisor</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("partners")} 
                  className="text-slate-400 hover:text-white transition-all text-left flex items-center gap-1.5 group cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#2564AF] group-hover:translate-x-0.5 transition-transform" />
                  <span>B2B Partners Portal & SLAs</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("home")} 
                  className="text-slate-400 hover:text-white transition-all text-left flex items-center gap-1.5 group cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#2564AF] group-hover:translate-x-0.5 transition-transform" />
                  <span>Indo-German JV Compliance</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("contact")} 
                  className="text-emerald-400 hover:text-white font-extrabold transition-all text-left flex items-center gap-1.5 group cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                  <span>Contact Us (Indore & Jaipur Nodes)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Quality & Quick Actions (col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans font-black text-xs text-white uppercase tracking-widest font-mono border-b border-slate-900 pb-2.5">
              Standards
            </h4>
            <div className="bg-[#091220]/60 border border-slate-900 p-4 rounded-2xl space-y-3.5">
              <div className="flex items-start gap-2.5 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-200 block">MSME Registered</span>
                  <span className="text-[10px] text-slate-400 font-light block leading-relaxed">Official Government of India Small Enterprise Hub Certification</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-xs">
                <Globe className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-200 block">Indo-German</span>
                  <span className="text-[10px] text-slate-400 font-light block leading-relaxed">Calibrated for international manufacturing tolerances</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* MID FOOTER: Support Hub Contact Details (Runicha & BestCode Grid Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-10 border-b border-slate-900">
          
          {/* Card 1: Indore Node */}
          <div className="bg-[#091220]/40 p-5 rounded-2xl border border-slate-900 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-slate-800 hover:shadow-lg transition-all group">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2564AF]" />
                <span className="font-extrabold text-slate-200 text-xs tracking-wide uppercase">Runicha Enterprises (Central Node Hub)</span>
              </div>
              <span className="text-[10px] text-slate-400 block leading-relaxed font-sans font-light flex items-start gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>Jagdish Niwas Shubham Place, Scheme No 54, Indore, Madhya Pradesh - 452010</span>
              </span>
            </div>
            <a 
              href="tel:+919522299975" 
              className="bg-[#050b14] border border-slate-800 hover:border-[#2564AF] hover:bg-[#2564AF] text-slate-300 hover:text-white px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 shrink-0 hover:shadow-md"
            >
              <Phone className="w-3.5 h-3.5 text-[#2564AF] group-hover:text-white" /> 
              <span>+91 95222 99975</span>
            </a>
          </div>

          {/* Card 2: Jaipur Node */}
          <div className="bg-[#091220]/40 p-5 rounded-2xl border border-slate-900 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-slate-800 hover:shadow-lg transition-all group">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2564AF]" />
                <span className="font-extrabold text-slate-200 text-xs tracking-wide uppercase">Best Code Technology (North Node Hub)</span>
              </div>
              <span className="text-[10px] text-slate-400 block leading-relaxed font-sans font-light flex items-start gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>Tirupati Vihar-A, Macheda, Jaipur, Rajasthan - 302013</span>
              </span>
            </div>
            <a 
              href="tel:+919828106099" 
              className="bg-[#050b14] border border-slate-800 hover:border-[#2564AF] hover:bg-[#2564AF] text-slate-300 hover:text-white px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 shrink-0 hover:shadow-md"
            >
              <Phone className="w-3.5 h-3.5 text-[#2564AF] group-hover:text-white" /> 
              <span>+91 98281 06099</span>
            </a>
          </div>

        </div>

        {/* BOTTOM SUB-FOOTER: Copyrights, GSTIN registries & Partnership acknowledgements */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 font-mono gap-4">
          <div className="space-y-1 text-center md:text-left">
            <span>&copy; {new Date().getFullYear()} JETRONIX INDIA JOINT VENTURE. All rights reserved.</span>
            <p className="text-[9px] text-slate-600 font-light block leading-normal max-w-2xl">
              Authorized joint venture collaboration of Runicha Enterprises (Indore) and Best Code Technology India (Jaipur). All industrial trademarks, hardware licenses, and registered brand names are properties of their respective owners.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center sm:items-end md:items-center text-[9px] sm:text-[10px]">
            <span className="text-slate-600 bg-[#08101b] border border-slate-900 px-3 py-1.5 rounded-lg text-center">
              GSTIN: 23ANKPC2385F1ZA (Indore Node) &bull; 08AXEPSS1147H1ZE (Jaipur Node)
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
