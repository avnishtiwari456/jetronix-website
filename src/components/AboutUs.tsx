import React from "react";
import { motion } from "motion/react";
import {
  Award, Users, Layers, Wrench, ShieldCheck, Handshake,
  ArrowRight, Phone
} from "lucide-react";

interface AboutUsProps {
  onNavigate: (page: string) => void;
}

/** Headline figures quoted from the company profile. */
const credentials = [
  { icon: Award, value: "12+", label: "Years of industry experience" },
  { icon: Users, value: "850+", label: "Customers across India" },
  { icon: Layers, value: "4", label: "Printing technologies supplied" },
  { icon: Wrench, value: "2", label: "Regional service hubs" },
];

const capabilities = [
  {
    title: "Printing Systems",
    body: "CIJ, TIJ, TTO and Laser printing systems, together with packaging-related solutions for a wide range of industrial applications.",
  },
  {
    title: "Spares & Consumables",
    body: "Comprehensive spares and consumables held for the full range, so a running line is never waiting on a part.",
  },
  {
    title: "Service & Technical Support",
    body: "Genuine technical support from a highly experienced and dedicated technical team, backed by our industry expertise.",
  },
];

const commitments = [
  "High-quality products",
  "Dependable services",
  "Genuine technical support",
  "Cost-effective solutions",
];

export default function AboutUs({ onNavigate }: AboutUsProps) {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-20" id="about-us-page">

      {/* Banner Header Section */}
      <div className="relative bg-gradient-to-br from-[#0c1a30] via-[#122540] to-[#1c3960] text-white py-16 px-4 overflow-hidden border-b border-blue-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] opacity-35" />
        <div className="absolute -bottom-12 right-12 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-12 left-12 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-3.5">
          <span className="inline-flex items-center gap-2 bg-[#2564AF]/20 border border-[#2564AF]/40 text-sky-300 px-4 py-1.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest">
            Jetronix Technology India LLP
          </span>
          <h1 className="text-3xl md:text-5xl font-sans font-black tracking-tight leading-none text-white">
            About Us
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Your Trusted Partner in Industrial Coding &amp; Marking Solutions.
          </p>
        </div>
      </div>

      {/* Credentials strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {credentials.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-lg shadow-slate-200/50 text-center"
              >
                <Icon className="w-6 h-6 text-[#2564AF] mx-auto mb-2.5" />
                <div className="text-2xl md:text-3xl font-black text-[#122540] tracking-tight leading-none">
                  {c.value}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-2 leading-snug">
                  {c.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* The company profile, as written */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-6 md:p-10 shadow-xl shadow-slate-200/50 space-y-5">
            <span className="text-blue-600 text-[10px] font-bold uppercase tracking-widest bg-blue-50 border border-blue-200/50 px-3.5 py-1.5 rounded-full inline-block">
              Who We Are
            </span>

            <p className="text-slate-700 text-sm md:text-[15px] leading-relaxed">
              At <strong className="text-[#122540]">Jetronix Technology India LLP</strong>, we take pride in
              our strong reputation and expertise in the industrial printing, coding, and marking sector,
              backed by <strong className="text-[#122540]">12+ years of industry experience</strong>. With a
              growing customer base of <strong className="text-[#122540]">850+ customers across India</strong>,
              we are rapidly expanding our presence in the industrial coding and marking industry.
            </p>

            <p className="text-slate-700 text-sm md:text-[15px] leading-relaxed">
              Our expertise covers a wide range of industrial printing solutions, including CIJ, TIJ, TTO,
              Laser Printing Systems, and packaging-related solutions, along with comprehensive spares,
              consumables, service, and technical support.
            </p>

            <p className="text-slate-700 text-sm md:text-[15px] leading-relaxed">
              Jetronix Technology India LLP is distinguished by its highly experienced and dedicated technical
              team. Our professionals work together with a strong focus on innovation, reliability, and
              customer satisfaction to deliver the right solutions for diverse industrial applications.
            </p>

            <p className="text-slate-700 text-sm md:text-[15px] leading-relaxed">
              We are committed to providing high-quality products, dependable services, genuine technical
              support, and cost-effective solutions backed by our industry expertise.
            </p>

            <p className="text-slate-700 text-sm md:text-[15px] leading-relaxed">
              Our core objective is to build long-term, trusted relationships with our esteemed customers by
              consistently delivering quality, transparency, and professional service.
            </p>

            <div className="pt-2 border-t border-slate-100">
              <p className="text-[#122540] text-sm md:text-base font-black leading-snug">
                Jetronix Technology India LLP — Your Trusted Partner in Industrial Coding &amp; Marking Solutions.
              </p>
            </div>
          </div>

          {/* What we deliver */}
          <div className="lg:col-span-5 space-y-4">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 md:p-6 shadow-md shadow-slate-200/40"
              >
                <h3 className="text-sm font-black uppercase tracking-wide text-[#122540] mb-2">
                  {cap.title}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-light">
                  {cap.body}
                </p>
              </div>
            ))}

            <div className="bg-gradient-to-br from-[#122540] to-slate-900 rounded-2xl p-6 text-white border border-blue-900/30 shadow-xl">
              <div className="flex items-center gap-2 mb-3.5">
                <ShieldCheck className="w-5 h-5 text-sky-400" />
                <h3 className="text-sm font-black uppercase tracking-wide">Our Commitment</h3>
              </div>
              <ul className="space-y-2">
                {commitments.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Closing call to action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 md:p-10 shadow-xl shadow-slate-200/50 text-center space-y-5">
          <Handshake className="w-8 h-8 text-[#2564AF] mx-auto" />
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-[#122540] leading-tight">
            Long-term relationships, built on quality and transparency
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Tell us about your line and our technical team will recommend the right coder, ink and
            configuration for the job.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <button
              onClick={() => onNavigate("products")}
              className="inline-flex items-center justify-center gap-2 bg-[#2564AF] hover:bg-blue-700 text-white font-black px-7 py-3 rounded-xl shadow-lg transition-all duration-200 cursor-pointer text-xs uppercase tracking-wider"
            >
              <span>Explore Our Range</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer text-xs uppercase tracking-wider"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Talk to Our Team</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
