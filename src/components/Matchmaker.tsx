import React, { useState } from "react";
import { motion } from "motion/react";
import { matchmakerQuestions } from "../data";
import { HelpCircle, Check, Award, Compass, ArrowRight, Radio, Activity, CheckCircle } from "lucide-react";

export default function Matchmaker() {
  const [answers, setAnswers] = useState<Record<string, string>>({
    material: "plastic",
    color: "light",
    speed: "standard",
    environment: "dry"
  });

  const handleSelect = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  // Automated expert system rules to recommend specifications
  const getRecommendation = () => {
    const { material, color, speed, environment } = answers;

    let printer = "Jetronix Si220 Series";
    let nozzle = "60µm (Standard Character)";
    let inkBase = "MEK (Methyl Ethyl Ketone) - Ultra Fast Dry";
    let inkColor = "Black (Dye-Based)";
    let recoveryRecommended = "Yes, Essential (Si220 Eco-solvent active condenser will save up to 50% solvent)";
    let contrastRatio = "99.8% (Sharp black dot grids)";
    let uptimeRating = "99.98% (High Stability)";

    // Rule 1: High Contrast on Dark materials
    if (color === "dark") {
      inkColor = "White or Yellow (High Opacity Pigment)";
      nozzle = "75µm (Specialized Pigment Nozzle)";
      contrastRatio = "100% (High contrast pigmented opaque)";
    }

    // Rule 2: Cable PVC or Wire lines are usually fast and dark
    if (material === "cable") {
      printer = "Jetronix S200PLUS Series";
      nozzle = "75µm (Pigmented Nozzle)";
      inkColor = "White or Yellow Pigment";
      contrastRatio = "100% (Armored cabling contrast)";
    }

    // Rule 3: Carton Boxes/Cardboard
    if (material === "cardboard") {
      inkBase = "Water/Ethanol-Based (Porous substrate absorption)";
      nozzle = "60µm or 85µm (Large Character Carton coding)";
      recoveryRecommended = "Optional (Slow evaporation ink base)";
      contrastRatio = "96.4% (Deep black standard dye)";
    }

    // Rule 4: Extreme High Speed lines
    if (speed === "ultra") {
      printer = "Jetronix S200PLUS Series";
      uptimeRating = "99.99% (Reinforced ultra-high-speed sync)";
    }

    // Rule 5: Heavy Dusty Cement / Construction environments
    if (environment === "dusty") {
      printer = "Jetronix S200PLUS Series (Reinforced IP55 Isolated Electronics)";
      uptimeRating = "99.92% (Heavy-dust seal filtration)";
      if (material === "cardboard") {
        nozzle = "85µm (High volume dust-tolerant nozzle)";
      }
    }

    // Rule 6: Glass / Pharma vails
    if (material === "glass") {
      inkBase = "Ethanol-Based or Food-Grade Thermochromic";
      nozzle = "50µm (Micro-Fine Character printing)";
      contrastRatio = "98.8% (Micro-dot readability)";
    }

    return {
      printer,
      nozzle,
      inkBase,
      inkColor,
      recoveryRecommended,
      contrastRatio,
      uptimeRating
    };
  };

  const rec = getRecommendation();

  return (
    <section id="matchmaker" className="py-20 bg-slate-900 text-white tech-grid border-b border-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest bg-blue-950 border border-blue-800 px-4 py-2 rounded-full inline-flex items-center gap-1.5 font-mono">
            <Compass className="w-4 h-4 text-blue-400" /> EXPERT SYSTEM
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-4 leading-tight">
            Substrate & Ink Matchmaker
          </h2>
          <p className="text-slate-400 mt-3 text-base font-light leading-relaxed">
            Unsure which printer, nozzle diameter, or ink base fits your specific packaging conveyor? Complete our 4-step diagnostic below to configure your custom B2B printing setup.
          </p>
        </div>

        {/* Questionnaire & Recommendation columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch" id="matchmaker-layout">
          
          {/* Left Questionnaire Column */}
          <div className="lg:col-span-7 bg-slate-950/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8" id="matchmaker-questions">
            <div className="border-b border-slate-850 pb-4 mb-2 flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-500 animate-pulse" />
              <h3 className="text-xs font-bold uppercase tracking-widest font-mono text-slate-400">Diagnostic Parameters</h3>
            </div>
            
            {matchmakerQuestions.map((q) => (
              <div key={q.id} className="space-y-4" id={`q-block-${q.id}`}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {q.question}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id={`q-grid-${q.id}`}>
                  {q.options.map((opt) => {
                    const isSelected = answers[q.id] === opt.value;
                    return (
                      <button
                        key={opt.value}
                        id={`opt-btn-${q.id}-${opt.value}`}
                        onClick={() => handleSelect(q.id, opt.value)}
                        className={`text-left px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? "bg-blue-600/10 border-blue-500 text-blue-400 shadow-md shadow-blue-500/5 scale-[1.01]"
                            : "border-slate-850 hover:border-slate-700 bg-slate-900/40 text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        <span>{opt.label}</span>
                        {isSelected ? (
                          <Check className="w-4 h-4 text-blue-400 shrink-0" />
                        ) : (
                          <span className="w-3.5 h-3.5 rounded-full border border-slate-800 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Recommendation Result Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-[#0b0f19] rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between relative overflow-hidden" id="matchmaker-results">
            {/* Ambient circle glow */}
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center gap-2.5 text-blue-400 border-b border-slate-800 pb-4">
                <Award className="w-6 h-6 animate-pulse" />
                <h3 className="font-display font-extrabold text-base uppercase tracking-wider">Automated Diagnostic Rig</h3>
              </div>

              {/* Live Signal lights */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-850/80 grid grid-cols-2 gap-3.5 font-mono text-[9px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
                  <span>CONTRAST: {rec.contrastRatio}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span>UPTIME: {rec.uptimeRating}</span>
                </div>
              </div>

              {/* Specifications results listing */}
              <div className="space-y-4 pt-2" id="matchmaker-specs-list font-mono">
                
                <div className="space-y-1 bg-slate-950/40 p-3 rounded-xl border border-slate-850">
                  <span className="text-[9px] font-extrabold text-slate-500 uppercase tracking-widest block font-mono">Recommended Printer Model</span>
                  <span className="text-xs font-bold text-white block uppercase tracking-wide">{rec.printer}</span>
                </div>

                <div className="space-y-1 bg-slate-950/40 p-3 rounded-xl border border-slate-850">
                  <span className="text-[9px] font-extrabold text-slate-500 uppercase tracking-widest block font-mono">Optimal Nozzle Diameter</span>
                  <span className="text-xs font-bold text-blue-400 block font-mono">{rec.nozzle}</span>
                </div>

                <div className="space-y-1 bg-slate-950/40 p-3 rounded-xl border border-slate-850">
                  <span className="text-[9px] font-extrabold text-slate-500 uppercase tracking-widest block font-mono">Recommended Ink Color / Type</span>
                  <span className="text-xs font-bold text-slate-300 block uppercase tracking-wide">{rec.inkColor}</span>
                </div>

                <div className="space-y-1 bg-slate-950/40 p-3 rounded-xl border border-slate-850">
                  <span className="text-[9px] font-extrabold text-slate-500 uppercase tracking-widest block font-mono">Chemical Solvent Base</span>
                  <span className="text-xs font-bold text-slate-300 block font-mono">{rec.inkBase}</span>
                </div>

                <div className="space-y-1 bg-slate-950/40 p-3 rounded-xl border border-slate-850">
                  <span className="text-[9px] font-extrabold text-slate-500 uppercase tracking-widest block font-mono">Solvent Recovery Condenser</span>
                  <span className="text-[11px] text-sky-400 font-bold block uppercase">{rec.recoveryRecommended}</span>
                </div>

              </div>
            </div>

            <div className="pt-6 border-t border-slate-850 mt-6 space-y-4">
              <p className="text-[10px] text-slate-400 font-light leading-relaxed leading-normal">
                This algorithm cross-checks configurations of leading premium brands (Hitachi, Leibinger, Cyklop) and recommends optimized nozzle-fluid pairings backed by localized support SLAs in Indore and Jaipur.
              </p>
              <a
                href="#partners"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Request B2B Quote for this spec</span> 
                <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
