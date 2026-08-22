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
  const [fontSize, setFontSize] = useState<number>(10); // bottle is the first substrate shown
  const [lineSpacing, setLineSpacing] = useState<number>(1.2);

  const colors = [
    { name: "Industrial Jet Black", class: "text-slate-950", hex: "#020617" },
    { name: "High-Contrast Opaque White", class: "text-white [text-shadow:0_0_3px_rgba(15,23,42,0.9)]", hex: "#ffffff" },
    { name: "High-Visibility Pigmented Yellow", class: "text-yellow-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]", hex: "#eab308" },
    { name: "Aqueous Royal Blue", class: "text-blue-600", hex: "#2563eb" },
    { name: "Heat-Resistant Crimson Red", class: "text-red-600", hex: "#dc2626" },
    { name: "Invisible UV Ink (Cyan Glow)", class: "text-cyan-400 animate-pulse drop-shadow-[0_0_2px_rgba(34,211,238,0.8)]", hex: "#22d3ee" }
  ];

  const [activeColor, setActiveColor] = useState(colors[0]); // Bottle opens first and is light, so black

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
        setActiveColor(colors[0]); // Black reads best on the silver can base
        setFontSize(12);
      } else {
        setActiveColor(colors[0]); // Black standard for box, pharma, bottle
        setFontSize(id === "fmcg_plastic" ? 10 : 14);
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
              <div className="flex justify-center items-center h-[360px] sm:h-[480px] relative" id="substrate-canvas-stage">
                
                {/* 1. PET plastic bottle — light translucent plastic so it reads on the dark stage */}
                {selectedSubstrateId === "fmcg_plastic" && (
                  <div className="relative flex flex-col justify-center items-center" id="svg-substrate-bottle">
                    <svg className="w-40 sm:w-52 h-auto text-slate-300" viewBox="0 0 100 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M40 20 H60 V40 H30 Q15 65 20 90 L25 200 Q25 210 35 210 H65 Q75 210 75 200 L80 90 Q85 65 70 40 H40" stroke="currentColor" strokeWidth="2.5" fill="#e2e8f0" fillOpacity="0.92" />
                      <path d="M22 100 Q50 104 78 100 L75 200 H25 L22 100" fill="#7dd3fc" fillOpacity="0.55" />
                      <line x1="23" y1="110" x2="77" y2="110" stroke="#94a3b8" strokeWidth="1.5" />
                      <line x1="26" y1="195" x2="74" y2="195" stroke="#94a3b8" strokeWidth="1.5" />
                      <rect x="38" y="10" width="24" height="10" rx="1.5" fill="#2563eb" />
                    </svg>

                    {/* Print sits inside the bottle body, never wider than the label panel */}
                    <div className="absolute top-[68%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] sm:w-[100px] px-1 text-center overflow-hidden" id="bottle-print-area">
                      <div className={`dot-matrix select-none font-bold whitespace-pre-wrap break-words ${activeColor.class}`} style={{ fontSize: `${fontSize}px`, lineHeight: lineSpacing }}>
                        {printText || "NO TEXT"}
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Aluminium can base — brushed silver */}
                {selectedSubstrateId === "beverage_can" && (
                  <div className="relative flex flex-col justify-center items-center" id="svg-substrate-can">
                    <div className="w-56 h-56 rounded-full bg-gradient-to-b from-slate-200 to-slate-400 border-4 border-slate-300 shadow-2xl flex items-center justify-center relative overflow-hidden">
                      <div className="w-44 h-44 rounded-full border-[6px] border-slate-400/70 bg-gradient-to-tr from-slate-100 to-slate-300 shadow-inner flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full border-4 border-slate-400 bg-slate-200 flex items-center justify-center overflow-hidden">
                          <div className="text-center px-2 w-full">
                            <div className={`dot-matrix select-none font-bold whitespace-pre-wrap break-words leading-tight text-center ${activeColor.class}`} style={{ fontSize: `${fontSize - 1}px`, lineHeight: lineSpacing }}>
                              {printText || "NO TEXT"}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-3 inset-x-0 text-center text-[8px] text-slate-600 font-mono font-bold uppercase tracking-wider">Concave Can Dome</div>
                    </div>
                  </div>
                )}

                {/* 3. Pharma blister — silver foil backing */}
                {selectedSubstrateId === "pharma_blister" && (
                  <div className="relative flex flex-col justify-center items-center" id="svg-substrate-blister">
                    <div className="w-64 h-52 bg-gradient-to-br from-slate-200 to-slate-400 rounded-2xl border-2 border-slate-300 p-4 relative flex flex-col justify-between shadow-lg overflow-hidden">
                      <div className="grid grid-cols-4 gap-3 relative z-10">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div key={i} className="h-8 rounded-full bg-slate-100 border border-slate-400 shadow-inner" />
                        ))}
                      </div>
                      <div className="text-left mt-4 pl-2 pr-2 relative z-20 overflow-hidden">
                        <div className={`dot-matrix select-none font-bold whitespace-pre-wrap break-words ${activeColor.class}`} style={{ fontSize: `${fontSize}px`, lineHeight: lineSpacing }}>
                          {printText || "NO TEXT"}
                        </div>
                      </div>
                      <div className="absolute top-2 right-3 text-[8px] text-slate-600 font-mono font-bold uppercase tracking-wider">Foil seal backing</div>
                    </div>
                  </div>
                )}

                {/* 4. Dark PVC cable — stays dark on purpose, that is why it needs white pigment ink */}
                {selectedSubstrateId === "cable_wire" && (
                  <div className="relative flex flex-col justify-center items-center w-full" id="svg-substrate-cable">
                    <div className="w-full h-24 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border-y-4 border-slate-600 relative shadow-2xl flex items-center px-6 overflow-hidden">
                      <div className="absolute top-3 left-0 w-full h-2.5 bg-white/20 pointer-events-none" />
                      <div className="absolute bottom-4 left-0 w-full h-1.5 bg-black/40 pointer-events-none" />
                      <div className="absolute bottom-1 left-4 w-full flex justify-between px-6 text-[8px] text-slate-400 font-mono">
                        <span>| | 124 M</span>
                        <span>| | 125 M</span>
                        <span>| | 126 M</span>
                      </div>
                      <div className="relative z-10 w-full text-center overflow-hidden">
                        <div className={`dot-matrix select-none font-bold whitespace-pre-wrap break-words tracking-wider ${activeColor.class}`} style={{ fontSize: `${fontSize + 1}px`, lineHeight: lineSpacing }}>
                          {printText || "NO TEXT"}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. Corrugated carton — opaque kraft board */}
                {selectedSubstrateId === "carton_box" && (
                  <div className="relative flex flex-col justify-center items-center" id="svg-substrate-box">
                    <div className="w-64 h-52 bg-[#c89a63] rounded-2xl border-2 border-[#8a5f34] p-5 relative shadow-lg overflow-hidden flex flex-col justify-between">
                      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-[#b0854f] border-x border-[#8a5f34]" />
                      <div className="flex items-center gap-2 relative z-10">
                        <div className="h-8 w-24 bg-white flex gap-1 px-1 py-0.5 items-stretch border border-slate-400">
                          {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="bg-slate-900" style={{ width: i % 3 === 0 ? "3px" : "1px" }} />
                          ))}
                        </div>
                        <div className="w-10 h-10 border-2 border-slate-700 rounded-sm bg-white/60" />
                      </div>
                      <div className="text-left relative z-10 overflow-hidden">
                        <div className={`dot-matrix select-none font-bold whitespace-pre-wrap break-words ${activeColor.class}`} style={{ fontSize: `${fontSize - 1}px`, lineHeight: lineSpacing }}>
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
                  {selectedSubstrateId === "cable_wire" ? "Jetronix JX350 (Pigment Heavy)" : "Jetronix S200 (Standard Core)"}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
