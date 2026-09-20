import React from "react";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";
import { companyAddress, socialLinks } from "../data";
import { 
  CheckCircle2, 
  ChevronRight, MapPin, Facebook, Linkedin, Instagram, Youtube, Globe
} from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
  onNavigateToProduct: (productId?: string, category?: string) => void;
}

// Each entry resolves to a real catalogue destination — a product or a category.
const footerProductLinks: { label: string; productId?: string; category?: string }[] = [
  { label: "Jetronix S200 CIJ Printer", productId: "s200" },
  { label: "Jetronix JX350 High-Speed CIJ", productId: "jx350" },
  { label: "JT Series Thermal Inkjet", category: "tij" },
  { label: "JH120 / JH250 Handheld", category: "handheld" },
  { label: "JLC30 / JLC60 CO2 Lasers", category: "laser" },
  { label: "TTO Overprinters", category: "tto" }
];

/** Maps a social entry's `icon` name to the glyph that draws it. */
const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: Linkedin,
  whatsapp: WhatsAppIcon,
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube
};

export default function Footer({ onNavigate, onNavigateToProduct }: FooterProps) {
  return (
    <footer className="bg-[#050b14] text-slate-300 pt-16 pb-10 border-t border-slate-900/60 relative overflow-hidden" id="global-footer">
      
      {/* Dynamic tech ambient grid on background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a50_1px,transparent_1px),linear-gradient(to_bottom,#0f172a50_1px,transparent_1px)] bg-[size:32px_32px] opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[250px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* MAIN THREE-COLUMN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8 pb-12 border-b border-slate-900">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-6">
            <div className="flex items-center justify-start gap-2.5">
              <Logo isDarkBackground={true} className="h-10 w-auto" />
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed font-sans font-light max-w-sm">
              Jetronix Technology India LLP specialises in supply-chain Continuous Inkjet (CIJ) printing, advanced solvent vapor condensation reclaimers, and high-performance pigmented coding inks for heavy manufacturing environments.
            </p>

            <p className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed font-light max-w-sm">
              <MapPin className="w-4 h-4 text-[#2564AF] shrink-0 mt-0.5" />
              <span>{companyAddress}</span>
            </p>

            {/* Premium Social Connections */}
            <div className="space-y-2.5 pt-1">
              <div className="text-[10px] font-mono tracking-widest text-slate-500 font-bold uppercase">Connect With Us</div>
              <div className="flex flex-wrap items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = socialIcons[social.icon] ?? Globe;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                      aria-label={social.label}
                      className="p-2.5 bg-[#091220] hover:bg-[#2564AF] text-slate-400 hover:text-white rounded-xl border border-slate-800/60 hover:border-[#2564AF] transition-all duration-200"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Column 2: Industrial Systems */}
          <div className="space-y-4 w-fit md:mx-auto">
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


          {/* Column 4: Quality & Quick Actions */}
          <div className="space-y-4">
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
                  <span className="font-bold text-slate-200 block">International Standards</span>
                  <span className="text-[10px] text-slate-400 font-light block leading-relaxed">Calibrated for international manufacturing tolerances</span>
                </div>
              </div>
            </div>
          </div>

        </div>



      </div>
    </footer>
  );
}
