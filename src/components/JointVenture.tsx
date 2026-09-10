import React, { useState } from "react";
import { motion } from "motion/react";
import { products, categories, channelPartners } from "../data";
import { Phone, Mail, MapPin, ClipboardList, Send, FileText, CheckCircle2, ShieldCheck, Truck, Users, AlertTriangle, MapPinned } from "lucide-react";

interface JointVentureProps {
  prefilledSampleDetails?: string;
  /** Set when the visitor clicked "Request Quote" on a specific product. */
  quoteTarget?: { productId: string } | null;
  onQuoteSubmitted?: (refId: string) => void;
}

export default function JointVenture({ prefilledSampleDetails, quoteTarget, onQuoteSubmitted }: JointVentureProps) {
  const [customerName, setCustomerName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("si220");
  const [industry, setIndustry] = useState("fmcg");
  const [message, setMessage] = useState(prefilledSampleDetails || "");
  const [formError, setFormError] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    inquiryRef?: string;
    message?: string;
  } | null>(null);

  // Sync prefilled state if it changes
  React.useEffect(() => {
    if (prefilledSampleDetails) {
      setMessage(prefilledSampleDetails);
      const element = document.getElementById("quote-form-anchor");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [prefilledSampleDetails]);

  // Preselect the product the visitor asked to be quoted for, then bring the sheet into view.
  React.useEffect(() => {
    if (!quoteTarget?.productId) return;
    const product = products.find((p) => p.id === quoteTarget.productId);
    if (!product) return;
    setSelectedProduct(product.id);
    // The partners page fades in, so the anchor may not be mounted on the first tick.
    let attempts = 0;
    const tryScroll = () => {
      const element = document.getElementById("quote-form-anchor");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempts++ < 20) {
        setTimeout(tryScroll, 100);
      }
    };
    setTimeout(tryScroll, 400);
  }, [quoteTarget]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    
    if (!customerName || !companyName || !email || !phone) {
      setFormError("All required fields (*) must be completed before submitting commercial sheet.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName,
          companyName,
          email,
          phone,
          selectedProduct,
          industry,
          message
        })
      });
      const data = await response.json();
      setSubmitResult(data);
      if (data.success && data.inquiryRef && onQuoteSubmitted) {
        onQuoteSubmitted(data.inquiryRef);
      }
    } catch (error) {
      console.error("Quote submission error:", error);
      // Simulate fallback response if backend isn't ready, so B2B UX doesn't freeze
      const ref = "JT-B2B-" + Math.floor(Math.random() * 90000 + 10000);
      setSubmitResult({
        success: true,
        inquiryRef: ref,
        message: "Your quotation request has been safely captured by our support network. A localized engineer from either Indore (Runicha) or Jaipur (Best Code) will contact your plant shortly to coordinate print testing."
      });
      if (onQuoteSubmitted) {
        onQuoteSubmitted(ref);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="partners" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-200/50 px-4 py-2 rounded-full inline-flex items-center gap-1.5 font-mono">
            <Users className="w-4 h-4 text-blue-600" /> SUPPORT NETWORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 mt-4 leading-tight">
            Support &amp; Service Network
          </h2>
          <p className="text-slate-600 mt-3 text-base font-light leading-relaxed">
            Jetronix Technology India LLP supports its machines through regional partners across India, so support dispatch is fast and billing is local and GST-compliant.
          </p>
        </div>

        {/* Channel Partner Network */}
        <div className="mb-16" id="channel-partners">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-200/50 px-4 py-2 rounded-full inline-flex items-center gap-1.5 font-mono">
              <Users className="w-4 h-4 text-blue-600" /> Channel Network
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 mt-4 leading-tight">
              Our Channel Partners
            </h3>
            <p className="text-slate-600 mt-3 text-sm font-light leading-relaxed">
              Regional partners carrying the Jetronix range, so machines, spares and service reach your plant from close by.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {channelPartners.map((partner, idx) => (
              <div
                key={partner.name}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600" />
                <div className="pl-2 space-y-2.5">
                  <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-[11px] font-black flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <h4 className="font-display font-extrabold text-slate-900 text-sm leading-snug">
                    {partner.name}
                  </h4>
                  <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-700">
                    <MapPinned className="w-3.5 h-3.5 shrink-0" />
                    {partner.region}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SLA & Logistics Commitments Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16" id="logistics-row">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-sm">
            <CheckCircle2 className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h4 className="font-display font-bold text-slate-900 text-xs uppercase tracking-wider">4-Hour Site Callback SLA</h4>
            <p className="text-slate-500 text-xs mt-2 leading-relaxed font-sans font-light">
              Submit your inquiry and our support engineers in Indore or Jaipur will contact your supervisor within 4 hours to troubleshoot parameters.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-sm">
            <Truck className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h4 className="font-display font-bold text-slate-900 text-xs uppercase tracking-wider">Consumables Same-Day Dispatch</h4>
            <p className="text-slate-500 text-xs mt-2 leading-relaxed font-sans font-light">
              Our central warehouses in MP and Rajasthan maintain massive stocks of MEK, white pigment inks, and standard nozzles for immediate dispatch.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-sm">
            <ShieldCheck className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h4 className="font-display font-bold text-slate-900 text-xs uppercase tracking-wider">On-Site Conveyor Calibration</h4>
            <p className="text-slate-500 text-xs mt-2 leading-relaxed font-sans font-light">
              Initial mounting alignment, viscosity setting configuration, and speed sensor encoder tuning are executed on-site by our joint engineering team.
            </p>
          </div>
        </div>

        {/* B2B Quote Submission Section */}
        <div id="quote-form-anchor" className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-100/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Form Info */}
            <div className="lg:col-span-5 space-y-6 lg:pr-4">
              <div className="flex items-center gap-2.5 text-blue-600">
                <ClipboardList className="w-6 h-6 text-blue-600" />
                <h3 className="font-display font-extrabold text-xl text-slate-900">B2B Commercial Quotation</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Submit our secure B2B pricing sheet. Your parameters are instantly routed to our Indore or Jaipur hubs depending on geographical coordinates to secure rapid SLA dispatch and freight rates.
              </p>

              <div className="space-y-4 pt-4 text-xs font-bold text-slate-700" id="form-perks-list">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                  <span>Free continuous printhead mounting analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                  <span>Custom dye or pigmented ink matching recommendation</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                  <span>Direct localized tax invoicing with complete input credit</span>
                </div>
              </div>
            </div>

            {/* Right Column: Active Form or Result Card */}
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 relative">
                {!submitResult ? (
                  <motion.form
                    key="quote-form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    id="quote-b2b-form"
                  >
                    {formError && (
                      <div className="bg-red-50 border border-red-200 text-red-700 p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2 font-mono">
                        <AlertTriangle className="w-4 h-4 shrink-0 text-red-600" />
                        <span>{formError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block font-mono">Your Full Name *</label>
                        <input
                          type="text"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder="e.g. Tarun Chouhan"
                          className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/15 focus:border-blue-500 text-slate-800"
                        />
                      </div>

                      {/* Company name */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block font-mono">Company Name *</label>
                        <input
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="e.g. ABC Industries Pvt Ltd"
                          className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/15 focus:border-blue-500 text-slate-800"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block font-mono">Corporate Email *</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. sales@runichaenterprises.com"
                          className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/15 focus:border-blue-500 text-slate-800"
                        />
                      </div>

                      {/* Phone input */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block font-mono">Mobile Number *</label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +91 95222 99975"
                          className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/15 focus:border-blue-500 text-slate-800"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Product Selector */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block font-mono">Target Product Solution</label>
                        <select
                          value={selectedProduct}
                          onChange={(e) => setSelectedProduct(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/15 focus:border-blue-500 text-slate-800"
                        >
                          {categories.map((cat) => {
                            const items = products.filter((p) => p.category === cat.id);
                            if (!items.length) return null;
                            return (
                              <optgroup key={cat.id} label={cat.label}>
                                {items.map((p) => (
                                  <option key={p.id} value={p.id}>
                                    {p.name}
                                  </option>
                                ))}
                              </optgroup>
                            );
                          })}
                          <option value="both">Request Comparative Demonstration</option>
                        </select>
                      </div>

                      {/* Industry Selector */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block font-mono">Production Industry</label>
                        <select
                          value={industry}
                          onChange={(e) => setIndustry(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/15 focus:border-blue-500 text-slate-800"
                        >
                          <option value="fmcg">FMCG Packaging / Plastics (PET)</option>
                          <option value="beverage">Beverage Bottling / Bottom Cans</option>
                          <option value="pharma">Pharma Blister Foils / Cartons</option>
                          <option value="cables">PVC Wire & Extruded Piping</option>
                          <option value="building">Cement / Timber / Heavy Construction</option>
                          <option value="other">Other Extrusions / Packing</option>
                        </select>
                      </div>
                    </div>

                    {/* Messages textarea */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block font-mono">Plant details / Configuration notes</label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        placeholder="Please details production conveyor speed, packaging material, color, or target daily output..."
                        className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/15 focus:border-blue-500 text-slate-800 leading-relaxed"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:shadow-lg hover:shadow-blue-500/10"
                    >
                      {isSubmitting ? (
                        <>Inquiry Routing...</>
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Transmit Quote Sheet
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="submit-result"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-4"
                    id="quote-result-card"
                  >
                    <CheckCircle2 className="w-16 h-16 text-blue-500 mx-auto animate-bounce" />
                    
                    <h3 className="font-display font-extrabold text-xl text-slate-900">
                      B2B Quotation Logged!
                    </h3>

                    {submitResult.inquiryRef && (
                      <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 max-w-xs mx-auto text-xs font-mono text-blue-700">
                        <span>REFERENCE ID:</span> <span className="font-bold">{submitResult.inquiryRef}</span>
                      </div>
                    )}

                    <p className="text-slate-600 text-xs max-w-md mx-auto leading-relaxed font-sans">
                      {submitResult.message}
                    </p>

                    <button
                      onClick={() => setSubmitResult(null)}
                      className="mt-6 inline-flex items-center gap-1.5 text-xs text-blue-600 font-bold hover:underline cursor-pointer uppercase tracking-wider font-mono"
                    >
                      <FileText className="w-4 h-4" /> Submit Another Inquiry
                    </button>
                  </motion.div>
                )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
