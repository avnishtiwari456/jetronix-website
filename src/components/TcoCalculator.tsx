import React, { useState } from "react";
import { motion } from "motion/react";
import { Calculator, ArrowUpRight, TrendingUp, Sparkles, AlertCircle, Droplets, Landmark, Landmark as GovIcon, Percent, FileCheck, CheckCircle2, IndianRupee } from "lucide-react";

export default function TcoCalculator() {
  const [hoursPerDay, setHoursPerDay] = useState<number>(16);
  const [daysPerYear, setDaysPerYear] = useState<number>(300);
  const [lines, setLines] = useState<number>(3);
  const [solventPrice, setSolventPrice] = useState<number>(650); // ₹ per Liter

  // GST & Finance Estimator State
  const [customPricePerPrinter, setCustomPricePerPrinter] = useState<number>(180000); // ₹1,80,000 standard
  const [gstRate, setGstRate] = useState<number>(18); // 18% standard industrial machinery GST in India
  const [claimIitc, setClaimIitc] = useState<boolean>(true); // Claims GST as Input Tax Credit
  const [applyMsmeSubsidy, setApplyMsmeSubsidy] = useState<boolean>(true); // 15% CLCSS MSME capital subsidy in India

  // Standard CIJ uses ~6ml of makeup solvent per hour of active operation
  // Jetronix Si220 equipped with eco-recovery uses only ~3.1ml per hour (48.3% saving)
  const standardConsumptionPerHour = 0.006; // Liters
  const jetronixConsumptionPerHour = 0.0031; // Liters
  const savingsPerHourPerLine = standardConsumptionPerHour - jetronixConsumptionPerHour; // 0.0029 Liters

  // Calculations
  const totalHoursYearly = hoursPerDay * daysPerYear;
  const standardSolventYearly = totalHoursYearly * lines * standardConsumptionPerHour;
  const jetronixSolventYearly = totalHoursYearly * lines * jetronixConsumptionPerHour;
  
  const solventSavedLiters = totalHoursYearly * lines * savingsPerHourPerLine;
  const standardCostYearly = standardSolventYearly * solventPrice;
  const jetronixCostYearly = jetronixSolventYearly * solventPrice;
  
  const savingsRupees = standardCostYearly - jetronixCostYearly;
  
  // Eco Metric: 1 Liter of evaporating solvent releases ~0.84kg of VOCs (volatile organic compounds)
  const vocAvoidedKg = solventSavedLiters * 0.84;

  // Payback period computation (Assuming a printer cost of ₹1,80,000 per line)
  const estimatedCapitalInvestment = lines * customPricePerPrinter;
  const paybackMonths = savingsRupees > 0 
    ? Math.min(48, Math.round((estimatedCapitalInvestment / savingsRupees) * 12)) 
    : 0;

  // GST & Financing calculations
  const basePriceMachinery = estimatedCapitalInvestment;
  const gstComponent = (basePriceMachinery * gstRate) / 100;
  const totalInvoiceBilling = basePriceMachinery + gstComponent;
  const claimableItcValue = claimIitc ? gstComponent : 0;
  
  // MSME Subsidy Calculation (CLCSS offers 15% on plant & machinery for tech upgradation)
  const msmeSubsidyValue = applyMsmeSubsidy ? (basePriceMachinery * 0.15) : 0;
  const netEffectiveInvestmentOutflow = totalInvoiceBilling - claimableItcValue - msmeSubsidyValue;

  return (
    <section id="calculator" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-200/50 px-4 py-2 rounded-full inline-flex items-center gap-1.5 font-mono">
            <Calculator className="w-4 h-4 text-blue-600" /> ROI & GST PORTAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 mt-4 leading-tight">
            Financial & Fluid Optimization Portal
          </h2>
          <p className="text-slate-600 mt-3 text-sm font-light leading-relaxed">
            Jetronix Active Condenser recovers up to 48.3% of solvent vapours. Use the sliders below to calculate your annual savings, check capital ROI, and compute your claimable B2B GST tax credits.
          </p>
        </div>

        {/* SECTION 1: FLUID SAVINGS CALCULATOR */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-100/50 mb-14" id="solvent-savings-widget">
          <div className="border-b border-slate-100 pb-5 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-blue-600 text-[10px] font-mono font-bold uppercase tracking-widest block">Phase 1</span>
              <h3 className="text-xl font-display font-extrabold text-slate-900 flex items-center gap-2 mt-0.5">
                <Droplets className="w-5 h-5 text-blue-600" /> Annual Makeup Solvent Calculator
              </h3>
            </div>
            <span className="text-slate-400 font-mono text-[10px] bg-slate-100 px-3 py-1 rounded">BASELINE TEMP: 25°C</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left panel: Controls / Inputs */}
            <div className="lg:col-span-5 space-y-6" id="calculator-inputs">
              
              {/* Slider 1: Hours per day */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-600 uppercase tracking-wide">Daily Production Hours</span>
                  <span className="text-blue-600 font-mono bg-blue-50 px-2.5 py-1 rounded-md text-xs border border-blue-100">{hoursPerDay} Hrs / Day</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="24"
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[9px] text-slate-400 font-bold uppercase font-mono">
                  <span>Single Shift (8h)</span>
                  <span>Continuous (24h)</span>
                </div>
              </div>

              {/* Slider 2: Days per year */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-600 uppercase tracking-wide">Annual Production Days</span>
                  <span className="text-blue-600 font-mono bg-blue-50 px-2.5 py-1 rounded-md text-xs border border-blue-100">{daysPerYear} Days / Yr</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="365"
                  value={daysPerYear}
                  onChange={(e) => setDaysPerYear(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[9px] text-slate-400 font-bold uppercase font-mono">
                  <span>Seasonal (100d)</span>
                  <span>Full Year (365d)</span>
                </div>
              </div>

              {/* Slider 3: Packaging Lines */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-600 uppercase tracking-wide">Active CIJ Printer Lines</span>
                  <span className="text-blue-600 font-mono bg-blue-50 px-2.5 py-1 rounded-md text-xs border border-blue-100">{lines} {lines === 1 ? "Printer" : "Printers"}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={lines}
                  onChange={(e) => setLines(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[9px] text-slate-400 font-bold uppercase font-mono">
                  <span>1 Printer</span>
                  <span>12 Printers</span>
                </div>
              </div>

              {/* Slider 4: Solvent Price */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-600 uppercase tracking-wide">Average Solvent Cost</span>
                  <span className="text-blue-600 font-mono bg-blue-50 px-2.5 py-1 rounded-md text-xs border border-blue-100">₹{solventPrice} / Liter</span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="1200"
                  step="25"
                  value={solventPrice}
                  onChange={(e) => setSolventPrice(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[9px] text-slate-400 font-bold uppercase font-mono">
                  <span>Economy (₹300)</span>
                  <span>Premium (₹1200)</span>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 flex gap-2.5">
                <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <p className="text-[10px] text-slate-500 leading-relaxed">
                  Jetronix calculations reflect active refrigeration condensation loops on solvent vapours. Standard printers lose ~6ml of makeup solvent per operational hour due to escaping steam.
                </p>
              </div>
            </div>

            {/* Right panel: Results / Savings output display */}
            <div className="lg:col-span-7 bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 text-white flex flex-col justify-between relative overflow-hidden" id="calculator-results">
              {/* Ambient blue glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-5">
                  <div>
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block font-mono">Annual Solvent Savings</span>
                    <h4 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1">
                      ₹{savingsRupees.toLocaleString("en-IN")}
                    </h4>
                  </div>
                  <span className="bg-blue-500/10 border border-blue-50/25 text-sky-400 rounded-xl px-3 py-1.5 text-[10px] font-bold flex items-center gap-1 uppercase font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" /> High Uptime
                  </span>
                </div>

                {/* Dynamic Comparison progress bars */}
                <div className="space-y-6 py-6" id="comparison-bars">
                  {/* Standard CIJ cost */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                      <span>Standard CIJ Fluid Cost</span>
                      <span className="font-mono text-slate-200">₹{standardCostYearly.toLocaleString("en-IN")} / yr</span>
                    </div>
                    <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden p-[1px]">
                      <div className="bg-gradient-to-r from-red-600 to-orange-500 h-full rounded-full" />
                    </div>
                    <div className="text-[9px] text-slate-500 font-mono text-right font-bold">
                      EST. INK+SOLVENT LOSS: {Math.round(standardSolventYearly)} LTRS / YEAR
                    </div>
                  </div>

                  {/* Jetronix cost */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-blue-400 uppercase tracking-wider">
                      <span>Jetronix Solvent Recovery Loop</span>
                      <span className="font-mono text-white">₹{jetronixCostYearly.toLocaleString("en-IN")} / yr</span>
                    </div>
                    <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden p-[1px]">
                      <div className="bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400 h-full rounded-full" style={{ width: "52%" }} />
                    </div>
                    <div className="text-[9px] text-sky-400 font-mono font-bold flex justify-between uppercase">
                      <span>🔥 VOC CAPTURE RECLAIM: 48.3%</span>
                      <span>EST. CONSUMPTION: {Math.round(jetronixSolventYearly)} LTRS / YEAR</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Extra industrial metric boxes */}
              <div className="grid grid-cols-3 gap-3 border-t border-slate-800 pt-6 mt-4" id="savings-metrics-grid">
                <div className="bg-slate-850/40 p-3 rounded-xl border border-slate-800 text-center">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono">VOC Curbed</span>
                  <span className="text-base font-mono font-bold text-sky-400 block mt-0.5">
                    {Math.round(vocAvoidedKg)} kg
                  </span>
                  <span className="text-[8px] text-slate-500 block">Carbon Equivalent</span>
                </div>

                <div className="bg-slate-850/40 p-3 rounded-xl border border-slate-800 text-center">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono">Saved Fluid</span>
                  <span className="text-base font-mono font-bold text-blue-400 block mt-0.5">
                    {Math.round(solventSavedLiters)} L
                  </span>
                  <span className="text-[8px] text-slate-500 block">Volume Retained</span>
                </div>

                <div className="bg-slate-850/40 p-3 rounded-xl border border-slate-800 text-center">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono">Fluid Payback</span>
                  <span className="text-base font-mono font-bold text-yellow-400 block mt-0.5 font-sans">
                    {paybackMonths} Mo
                  </span>
                  <span className="text-[8px] text-slate-500 block">CapEx Payback</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* SECTION 2: INDIAN B2B GST & CAPITAL SUBSIDY CALCULATOR - Highly Proper & Unique */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-100/50" id="gst-finance-widget">
          <div className="border-b border-slate-100 pb-5 mb-8">
            <span className="text-blue-600 text-[10px] font-mono font-bold uppercase tracking-widest block">Phase 2</span>
            <h3 className="text-xl font-display font-extrabold text-slate-900 flex items-center gap-2 mt-0.5">
              <Landmark className="w-5 h-5 text-blue-600" /> B2B Indian GST & Capital Subsidy Estimator
            </h3>
            <p className="text-xs text-slate-500 mt-1 font-light leading-relaxed">
              Industrial machinery (CIJ coders) falls under the <strong>18% GST Bracket</strong> in India. If your business possesses a valid GSTIN (like our Indore & Jaipur nodes), you can claim 100% of this GST component back as <strong>Input Tax Credit (ITC)</strong>! Check your net financial outflows below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Controls panel */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Est. printer baseline price */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-600 uppercase tracking-wide">Est. Baseline Price Per Printer</span>
                  <span className="text-blue-600 font-mono bg-blue-50 px-2.5 py-1 rounded-md text-xs border border-blue-100">₹{customPricePerPrinter.toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range"
                  min="130000"
                  max="280000"
                  step="5000"
                  value={customPricePerPrinter}
                  onChange={(e) => setCustomPricePerPrinter(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[9px] text-slate-400 font-bold uppercase font-mono">
                  <span>Entry Core (₹1.3L)</span>
                  <span>Flagship Premium (₹2.8L)</span>
                </div>
              </div>

              {/* GST rate selector */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wide block">Applicable GST Tariff</span>
                <div className="grid grid-cols-3 gap-2">
                  {[12, 18, 28].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => setGstRate(rate)}
                      className={`py-2 text-xs font-mono font-bold border rounded-xl transition-all cursor-pointer ${
                        gstRate === rate
                          ? "bg-slate-900 border-slate-900 text-white shadow-md shadow-slate-900/10"
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {rate}% {rate === 18 ? "(Machinery)" : ""}
                    </button>
                  ))}
                </div>
              </div>

              {/* Checkboxes for Tax Claims & Subsidies */}
              <div className="space-y-3.5 pt-2">
                <label className="flex items-start gap-3 cursor-pointer group bg-slate-50/70 p-3 rounded-xl border border-slate-150">
                  <input
                    type="checkbox"
                    checked={claimIitc}
                    onChange={(e) => setClaimIitc(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600 bg-slate-100 border-slate-300 focus:ring-blue-500 mt-0.5 accent-blue-600"
                  />
                  <div className="text-left">
                    <span className="text-xs font-bold text-slate-800 block uppercase tracking-wider group-hover:text-blue-600 transition-colors">Claim GST Input Tax Credit (ITC)</span>
                    <span className="text-[10px] text-slate-400 mt-0.5 block leading-relaxed font-light">
                      Must possess a registered active GSTIN. Claim 100% of GST billing back to reduce net cash impact.
                    </span>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group bg-slate-50/70 p-3 rounded-xl border border-slate-150">
                  <input
                    type="checkbox"
                    checked={applyMsmeSubsidy}
                    onChange={(e) => setApplyMsmeSubsidy(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600 bg-slate-100 border-slate-300 focus:ring-blue-500 mt-0.5 accent-blue-600"
                  />
                  <div className="text-left">
                    <span className="text-xs font-bold text-slate-800 block uppercase tracking-wider group-hover:text-blue-600 transition-colors">Apply MSME Tech-Upgradation Subsidy</span>
                    <span className="text-[10px] text-slate-400 mt-0.5 block leading-relaxed font-light">
                      Credit Linked Capital Subsidy Scheme (CLCSS) offers 15% upfront capital subsidy for qualified small scale upgrades.
                    </span>
                  </div>
                </label>
              </div>

            </div>

            {/* Invoice Breakdown outputs */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between" id="invoice-breakdown-panel">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono border-b border-slate-200 pb-3 mb-4">
                  Tax Invoice Outflow & Claims Ledger ({lines} {lines === 1 ? "Unit" : "Units"})
                </h4>

                <div className="space-y-3.5 text-xs text-slate-700 font-medium">
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500 font-bold">Base Capital Cost (Excl. GST)</span>
                    <span className="font-mono text-slate-900 font-bold">₹{basePriceMachinery.toLocaleString("en-IN")}.00</span>
                  </div>

                  <div className="flex justify-between py-1 text-blue-700">
                    <span className="font-bold flex items-center gap-1">Add: SGST/CGST ({gstRate}%)</span>
                    <span className="font-mono font-extrabold">+ ₹{gstComponent.toLocaleString("en-IN")}.00</span>
                  </div>

                  <div className="flex justify-between py-2 border-t border-b border-slate-200 text-sm">
                    <span className="font-bold text-slate-900 uppercase">Gross Invoice Billing Value</span>
                    <span className="font-mono font-extrabold text-slate-900">₹{totalInvoiceBilling.toLocaleString("en-IN")}.00</span>
                  </div>

                  {claimIitc && (
                    <div className="flex justify-between py-1 text-blue-700 bg-blue-50 px-3 py-2 rounded-lg border border-blue-100">
                      <span className="font-bold flex items-center gap-1">✔ Tax Claimable Input Tax Credit (ITC)</span>
                      <span className="font-mono font-extrabold">- ₹{claimableItcValue.toLocaleString("en-IN")}.00</span>
                    </div>
                  )}

                  {applyMsmeSubsidy && (
                    <div className="flex justify-between py-1 text-purple-700 bg-purple-50 px-3 py-2 rounded-lg border border-purple-100">
                      <span className="font-bold flex items-center gap-1">🎁 Claimable CLCSS MSME Capital Subsidy (15%)</span>
                      <span className="font-mono font-extrabold">- ₹{msmeSubsidyValue.toLocaleString("en-IN")}.00</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Net out of pocket cash outlay */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 border border-slate-850">
                <div className="text-center sm:text-left">
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider font-mono">Net Effective Capital Outflow</span>
                  <div className="text-2xl font-display font-extrabold mt-0.5 text-white flex items-center gap-1 justify-center sm:justify-start">
                    <IndianRupee className="w-5 h-5 text-sky-400 shrink-0" />
                    <span>₹{netEffectiveInvestmentOutflow.toLocaleString("en-IN")}.00</span>
                  </div>
                  <span className="text-[9px] text-slate-400 block mt-0.5">Post tax claims & government grants</span>
                </div>

                <div className="flex flex-col gap-1.5 shrink-0 text-center sm:text-right font-mono text-[9px] text-slate-400">
                  <span className="bg-blue-500/10 border border-blue-50/20 text-sky-400 font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide">
                    Claim Savings of ₹{(claimableItcValue + msmeSubsidyValue).toLocaleString("en-IN")}!
                  </span>
                  <span>Invoice GST is 100% offset</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
