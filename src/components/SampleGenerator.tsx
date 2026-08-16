import React, { useState } from "react";
import { motion } from "motion/react";
import { substrates } from "../data";
import { Sliders, RefreshCw, Layers, ShieldCheck, Mail, Type, AlignJustify } from "lucide-react";

interface SampleGeneratorProps {
  onRequestPhysicalSample: (sampleDetails: string) => void;
}

export default function SampleGenerator({ onRequestPhysicalSample }: SampleGeneratorProps) {
  const [selectedSubstrateId, setSelectedSubstrateId] = useState<string>("fmcg_plastic");
  const activeSubstrate = substrates.find((s) => s.id === selectedSubstrateId) || substrates[0];

  const [printText, setPrintText] = useState<string>(activeSubstrate.defaultText);
  const [fontSize, setFontSize] = useState<number>(14);
  const [lineSpacing, setLineSpacing] = useState<number>(1.2);

  const colors = [
    { name: "Industrial Jet Black", class: "text-slate-950", hex: "#020617" },
    { name: "High-Contrast Opaque White", class: "text-slate-100 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]", hex: "#f1f5f9" },
    { name: "High-Visibility Pigmented Yellow", class: "text-yellow-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]", hex: "#eab308" },
    { name: "Aqueous Royal Blue", class: "text-blue-600", hex: "#2563eb" },
    { name: "Heat-Resistant Crimson Red", class: "text-red-600", hex: "#dc2626" },
    { name: "Invisible UV Ink (Cyan Glow)", class: "text-cyan-400 animate-pulse drop-shadow-[0_0_2px_rgba(34,211,238,0.8)]", hex: "#22d3ee" }
  ];

  const [activeColor, setActiveColor] = useState(colors[2]); // Yellow default high contrast

  const handleSubstrateChange = (id: string) => {
    setSelectedSubstrateId(id);
    const selected = substrates.find((s) => s.id === id);
    if (selected) {
      setPrintText(selected.defaultText);
      // Automatically adjust default ink matching for premium feel
      if (id === "cable_wire") {
        setActiveColor(colors[1]); // White for dark wire
        setFontSize(15);
      } else if (id === "beverage_can") {
        setActiveColor(colors[2]); // Yellow for bottom of can
        setFontSize(12);
      } else {
        setActiveColor(colors[0]); // Black standard for box, pharma, bottle
        setFontSize(14);
      }
    }
  };

  const handleReset = () => {
    setPrintText(activeSubstrate.defaultText);
    setFontSize(14);
    setLineSpacing(1.2);
  };

  const handlePhysicalRequest = () => {
    const details = `Product Packaging: ${activeSubstrate.name}\nInk Choice: ${activeColor.name}\nSample Printed Text:\n${printText}\nFont Height: ${fontSize}px`;
    onRequestPhysicalSample(details);
  };

  return (
    <section id="samples" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-200/50 px-4 py-2 rounded-full inline-flex items-center gap-1.5 font-mono">
            <Layers className="w-4 h-4 text-blue-600" /> LIVE SIMULATOR
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 mt-4 leading-tight">
            Virtual Print Sample Simulator
          </h2>
          <p className="text-slate-600 mt-3 text-base font-light leading-relaxed">
            Continuous Inkjet printing outputs modular dot-matrix codes. Select your substrate packing material, customize your batch info, and preview the print output.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch" id="simulator-container">
          
          {/* Left Panel: Inputs & Adjusters */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between" id="simulator-controls">
            <div className="space-y-6">
              <h3 className="text-base font-display font-bold text-slate-900 mb-2 flex items-center gap-2 border-b border-slate-100 pb-3">
                <Sliders className="w-5 h-5 text-blue-600" /> Print Rig Controller
              </h3>

              {/* Substrate Selector */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">1. Select Target Substrate</label>
                <div className="grid grid-cols-1 gap-2.5" id="substrate-options">
                  {substrates.map((s) => (
                    <button
                      key={s.id}
                      id={`substrate-btn-${s.id}`}
                      onClick={() => handleSubstrateChange(s.id)}
                      className={`text-left px-4 py-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-between cursor-pointer ${
                        selectedSubstrateId === s.id
                          ? "bg-blue-50 border-blue-500 text-blue-700 shadow-sm"
                          : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      <span className="uppercase tracking-wide">{s.name}</span>
                      <span className="text-[9px] bg-slate-100 text-slate-500 font-extrabold px-2 py-0.5 rounded uppercase font-mono">
                        {s.id.split("_")[1]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Text Input */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">2. Customize Code Lines</label>
                  <button onClick={handleReset} className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer font-mono">
                    <RefreshCw className="w-3.5 h-3.5" /> RESET
                  </button>
                </div>
                <textarea
                  value={printText}
                  onChange={(e) => setPrintText(e.target.value)}
                  maxLength={120}
                  rows={3}
                  id="print-text-area"
                  placeholder="Enter batch text code..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 leading-relaxed"
                />
                <span className="text-[9px] text-slate-400 block text-right font-mono font-bold">
                  {printText.length} / 120 CHARACTERS
                </span>
              </div>

              {/* Advanced font height & spacing adjustments */}
              <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                <div className="space-y-1.5">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <Type className="w-3.5 h-3.5 text-slate-400" /> Print Height
                  </span>
                  <input
                    type="range"
                    min="10"
                    max="18"
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                  />
                  <div className="text-[9px] text-slate-500 font-mono text-right">{fontSize}px</div>
                </div>
                <div className="space-y-1.5">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <AlignJustify className="w-3.5 h-3.5 text-slate-400" /> Line Gap
                  </span>
                  <input
                    type="range"
                    min="1"
                    max="1.8"
                    step="0.1"
                    value={lineSpacing}
                    onChange={(e) => setLineSpacing(Number(e.target.value))}
                    className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                  />
                  <div className="text-[9px] text-slate-500 font-mono text-right">{lineSpacing}x</div>
                </div>
              </div>

              {/* Ink Color Selector */}
              <div className="space-y-2 border-t border-slate-100 pt-4">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">3. Select Fluid Ink Chemistry</label>
                <div className="flex flex-wrap gap-2.5" id="ink-color-buttons">
                  {colors.map((c) => (
                    <button
                      key={c.name}
                      id={`ink-color-${c.name.split(" ").join("-").toLowerCase()}`}
                      onClick={() => setActiveColor(c)}
                      style={{ backgroundColor: c.hex === "#f1f5f9" ? "#cbd5e1" : c.hex }}
                      title={c.name}
                      className={`w-9 h-9 rounded-full border-2 transition-all relative cursor-pointer ${
                        activeColor.name === c.name
                          ? "ring-4 ring-blue-500/20 border-blue-600 scale-110"
                          : "border-white shadow shadow-slate-300 hover:scale-105"
                      }`}
                    >
                      {activeColor.name === c.name && (
                        <span className="absolute inset-0 m-auto w-2.5 h-2.5 rounded-full bg-blue-500" />
                      )}
                    </button>
                  ))}
                </div>
                <span className="text-[10px] text-blue-700 font-bold uppercase tracking-wider block pt-1.5">
                  Chemistry: {activeColor.name}
                </span>
              </div>
            </div>

            {/* B2B request CTA */}
            <button
              onClick={handlePhysicalRequest}
              id="request-physical-sample"
              className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/10 cursor-pointer transition-all hover:scale-[1.01] hover:shadow-xl mt-6 uppercase text-xs tracking-wider"
            >
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>Request Real Physical Sample Print</span>
            </button>
          </div>

          {/* Right Panel: Packaging Canvas Visualization */}
          <div className="lg:col-span-7 bg-[#0b0f19] border border-slate-800 rounded-3xl p-6 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden" id="simulator-canvas">
            {/* Ambient grid overlay */}
            <div className="absolute inset-0 tech-grid opacity-25 pointer-events-none" />

            <div>
              <div className="flex justify-between items-center border-b border-slate-800/80 pb-4">
                <span className="text-[10px] font-mono text-slate-500 font-bold tracking-wider">CANVAS PROJECTION // LASER PRINT FOCUS</span>
                <span className="text-xs text-sky-400 font-mono flex items-center gap-1.5 bg-blue-500/10 border border-blue-50/25 px-3 py-1 rounded-lg uppercase font-bold text-[9px] tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  Conduit Jet Stream
                </span>
              </div>

              {/* Substrate specific packaging sketches */}
              <div className="flex justify-center items-center h-[300px] sm:h-[350px] relative" id="substrate-canvas-stage">
                
                {/* 1. PET Plastic Bottle SVG representation */}
                {selectedSubstrateId === "fmcg_plastic" && (
                  <div className="relative flex flex-col justify-center items-center" id="svg-substrate-bottle">
                    <svg className="w-32 h-auto text-slate-700/50" viewBox="0 0 100 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Bottle Outline */}
                      <path d="M40 20 H60 V40 H30 Q15 65 20 90 L25 200 Q25 210 35 210 H65 Q75 210 75 200 L80 90 Q85 65 70 40 H40" stroke="currentColor" strokeWidth="2.5" fill="#1e293b" fillOpacity="0.3" />
                      {/* Fluid line level */}
                      <path d="M22 100 Q50 104 78 100 L75 200 H25 L22 100" fill="#38bdf8" fillOpacity="0.15" />
                      {/* Bottle ridges */}
                      <line x1="23" y1="120" x2="77" y2="120" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="24" y1="150" x2="76" y2="150" stroke="currentColor" strokeWidth="1.5" />
                      {/* Bottle Cap */}
                      <rect x="38" y="10" width="24" height="10" rx="1.5" fill="#3b82f6" />
                    </svg>
                    
                    {/* Floating print projection sheet */}
                    <div className="absolute top-[52%] max-w-[130px] text-center" id="bottle-print-area">
                      <div className={`dot-matrix select-none font-bold whitespace-pre-wrap ${activeColor.class}`} style={{ fontSize: `${fontSize}px`, lineHeight: lineSpacing }}>
                        {printText || "NO TEXT"}
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Metal Can Bottom representation */}
                {selectedSubstrateId === "beverage_can" && (
                  <div className="relative flex flex-col justify-center items-center" id="svg-substrate-can">
                    <div className="w-56 h-56 rounded-full bg-gradient-to-b from-slate-800 to-slate-950 border-4 border-slate-700 shadow-2xl flex items-center justify-center relative overflow-hidden">
                      {/* Concave bottom rim rings (standard aluminum can bottom) */}
                      <div className="w-44 h-44 rounded-full border-[6px] border-slate-700/70 bg-gradient-to-tr from-slate-900 to-slate-950 shadow-inner flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full border-4 border-slate-850 bg-slate-950 flex items-center justify-center">
                          {/* Inner dome stamp */}
                          <div className="text-center p-3">
                            <div className={`dot-matrix select-none font-bold whitespace-pre-wrap leading-tight text-center ${activeColor.class}`} style={{ fontSize: `${fontSize - 1}px`, lineHeight: lineSpacing }}>
                              {printText || "NO TEXT"}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-2 left-2 text-[8px] text-slate-500 font-mono font-bold uppercase tracking-wider">Concave Can Dome</div>
                    </div>
                  </div>
                )}

                {/* 3. Blister Pack Foil representation */}
                {selectedSubstrateId === "pharma_blister" && (
                  <div className="relative flex flex-col justify-center items-center" id="svg-substrate-blister">
                    <div className="w-64 h-52 bg-slate-800/60 rounded-2xl border-2 border-slate-700 p-4 relative flex flex-col justify-between shadow-lg">
                      {/* Silver foil textured background rings */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900/40 pointer-events-none" />
                      {/* Pill slots visualizer */}
                      <div className="grid grid-cols-4 gap-3 relative z-10 opacity-30">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div key={i} className="h-8 rounded-full bg-slate-950 border border-slate-700 shadow-inner" />
                        ))}
                      </div>

                      {/* Printed expiration on foil seal side */}
                      <div className="text-left mt-4 pl-2 relative z-20">
                        <div className={`dot-matrix select-none font-bold whitespace-pre-wrap ${activeColor.class}`} style={{ fontSize: `${fontSize}px`, lineHeight: lineSpacing }}>
                          {printText || "NO TEXT"}
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 text-[8px] text-slate-500 font-mono font-bold uppercase tracking-wider">Foil seal backing</div>
                    </div>
                  </div>
                )}

                {/* 4. PVC Cable representation */}
                {selectedSubstrateId === "cable_wire" && (
                  <div className="relative flex flex-col justify-center items-center w-full" id="svg-substrate-cable">
                    {/* Thick black industrial cable wrapping across stage */}
                    <div className="w-full h-20 bg-slate-950 border-y-4 border-slate-800 relative shadow-2xl flex items-center px-6 overflow-hidden">
                      {/* Coaxial metal wire stripe reflection effect */}
                      <div className="absolute top-1/4 left-0 w-full h-2 bg-white/5 pointer-events-none" />
                      {/* Repeated meter ticks */}
                      <div className="absolute bottom-1 left-4 w-full flex justify-between px-6 text-[8px] text-slate-600 font-mono">
                        <span>| | 124 M</span>
                        <span>| | 125 M</span>
                        <span>| | 126 M</span>
                      </div>

                      <div className="relative z-10 w-full text-center">
                        <div className={`dot-matrix select-none font-bold whitespace-pre-wrap tracking-wider ${activeColor.class}`} style={{ fontSize: `${fontSize + 1}px`, lineHeight: lineSpacing }}>
                          {printText || "NO TEXT"}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. Corrugated Box representation */}
                {selectedSubstrateId === "carton_box" && (
                  <div className="relative flex flex-col justify-center items-center" id="svg-substrate-box">
                    <div className="w-64 h-52 bg-[#92623a]/15 rounded-2xl border-2 border-[#92623a]/30 p-5 relative shadow-inner overflow-hidden flex flex-col justify-between">
                      {/* Cardboard sealing tape */}
                      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-[#7a4e28]/10 border-x border-[#7a4e28]/20" />
                      
                      {/* Package barcode vector print mock */}
                      <div className="flex items-center gap-2 opacity-25">
                        <div className="h-8 w-24 bg-slate-400 flex gap-1 px-1 py-0.5 items-stretch">
                          {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="bg-slate-950" style={{ width: i % 3 === 0 ? "3px" : "1px" }} />
                          ))}
                        </div>
                        <div className="w-10 h-10 border border-slate-400 rounded-sm" />
                      </div>

                      {/* Printed shipping block text */}
                      <div className="text-left relative z-10">
                        <div className={`dot-matrix select-none font-bold whitespace-pre-wrap ${activeColor.class}`} style={{ fontSize: `${fontSize - 1}px`, lineHeight: lineSpacing }}>
                          {printText || "NO TEXT"}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Substrate specific details summary footer */}
            <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row gap-4 justify-between items-center text-xs text-slate-400">
              <div>
                <span className="font-bold text-slate-300 block uppercase tracking-wider text-[10px] font-mono">Recommended Chemistry:</span>
                <span className="text-blue-400 mt-1 block font-mono font-semibold">{activeSubstrate.recommendedInk}</span>
              </div>
              <div className="text-right">
                <span className="font-bold text-slate-300 block uppercase tracking-wider text-[10px] font-mono">Auto-configured Model:</span>
                <span className="text-blue-400 mt-1 block font-mono font-semibold">
                  {selectedSubstrateId === "cable_wire" ? "Jetronix S200PLUS (Pigment Heavy)" : "Jetronix Si220 (Standard Core)"}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
