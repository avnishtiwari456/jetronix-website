import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Phone, Mail, MapPin, MessageSquare, Send, Loader2,
  Building2, Check, AlertTriangle
} from "lucide-react";

const EMPTY_FORM = {
  name: "",
  company: "",
  email: "",
  phone: "",
  location: "Indore Node (Central Hub)",
  message: "",
};

export default function ContactUs() {
  const [formData, setFormData] = useState(EMPTY_FORM);

  const [submitted, setSubmitted] = useState(false);
  const [ticketRef, setTicketRef] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const nodes = [
    {
      name: "Runicha Enterprises",
      role: "Central India Regional Hub",
      city: "Indore",
      address: "Jagdish Niwas Shubham Place, Scheme No 54, Indore, Madhya Pradesh - 452010",
      phone: "+91 95222 99975",
      email: "indore.support@jetronixindia.com",
    },
    {
      name: "Best Code Technology",
      role: "North India Regional Hub",
      city: "Jaipur",
      address: "Tirupati Vihar-A, Macheda, Jaipur, Rajasthan - 302013",
      phone: "+91 98281 06099",
      email: "jaipur.support@jetronixindia.com",
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!formData.name.trim() || !formData.company.trim() || !formData.phone.trim()) {
      setFormError("Please fill in your Name, Company Name, and Phone Number.");
      return;
    }
    if (formData.phone.replace(/\D/g, "").length < 10) {
      setFormError("Please enter a valid phone number with at least 10 digits.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        setFormError(result.error || "We could not send your message. Please try again or call us directly.");
        return;
      }

      setTicketRef(result.ticketRef);
      setSubmitted(true);
    } catch {
      setFormError(
        "Network error — your message was not sent. Please check your connection, or reach us on +91 95222 99975."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-20" id="contact-us-page">
      
      {/* Banner Header Section */}
      <div className="relative bg-gradient-to-br from-[#0c1a30] via-[#122540] to-[#1c3960] text-white py-16 px-4 overflow-hidden border-b border-blue-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] opacity-35" />
        <div className="absolute -bottom-12 right-12 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-12 left-12 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-3.5">
          <span className="inline-flex items-center gap-2 bg-[#2564AF]/20 border border-[#2564AF]/40 text-sky-300 px-4 py-1.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest">
            Jetronix Printech India LLP
          </span>
          <h1 className="text-3xl md:text-5xl font-sans font-black tracking-tight leading-none text-white">
            Contact Us
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Reach out to our dedicated support teams. Feel free to submit the contact form below or call/WhatsApp our official regional offices directly.
          </p>
        </div>
      </div>

      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: Clean Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-6 md:p-8 shadow-xl shadow-slate-200/50">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-8 space-y-6"
                >
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-500 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <Check className="w-7 h-7" />
                  </div>
                  
                  <div className="space-y-2">
                    <h2 className="text-xl md:text-2xl font-black text-[#122540] tracking-tight">INQUIRY SENT SUCCESSFULLY</h2>
                    <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting us, <strong className="text-slate-800">{formData.name}</strong>. A technical representative from our <strong className="text-slate-800">{formData.location}</strong> team will review your message shortly.
                    </p>
                  </div>

                  <div className="bg-[#0b1320] text-slate-200 max-w-sm mx-auto p-4.5 rounded-2xl border border-slate-800 font-mono space-y-2 text-left text-xs shadow-md">
                    <div className="text-[10px] text-sky-400 font-extrabold uppercase tracking-widest border-b border-slate-800/80 pb-2 mb-2 flex justify-between">
                      <span>Inquiry Details</span>
                      <span className="text-emerald-400">STATUS: QUEUED</span>
                    </div>
                    <p><span className="text-slate-500">TICKET REF:</span> <span className="font-extrabold text-white">{ticketRef}</span></p>
                    <p><span className="text-slate-500">COMPANY:</span> <span className="text-white">{formData.company}</span></p>
                    <p><span className="text-slate-500">LOCATION:</span> <span className="text-white">{formData.location}</span></p>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormError("");
                      setTicketRef("");
                      setFormData(EMPTY_FORM);
                    }}
                    className="bg-slate-100 hover:bg-slate-200 text-[#122540] text-xs font-black uppercase px-6 py-3 rounded-xl transition-all cursor-pointer"
                  >
                    Submit New Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b pb-4">
                    <h3 className="font-sans font-black text-base text-[#122540] uppercase tracking-wide">Write to Us</h3>
                    <p className="text-xs text-slate-400 font-light mt-1">Please provide your details, and we will get back to you immediately.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Contact Name */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Your Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter contact name"
                        className="w-full text-xs font-semibold border border-slate-200 rounded-xl p-3 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2564AF] transition-all"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Company Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Enter organization/industry name"
                        className="w-full text-xs font-semibold border border-slate-200 rounded-xl p-3 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2564AF] transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="e.g. +91 98281 06099"
                        className="w-full text-xs font-mono font-bold border border-slate-200 rounded-xl p-3 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2564AF] transition-all"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Email Address (Optional)</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="e.g. name@company.com"
                        className="w-full text-xs font-semibold border border-slate-200 rounded-xl p-3 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2564AF] transition-all"
                      />
                    </div>
                  </div>

                  {/* Target Node Destination */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Select Nearest Hub/Office</label>
                    <select 
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full text-xs font-extrabold border border-slate-200 rounded-xl p-3 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2564AF] transition-all"
                    >
                      <option value="Indore Node (Central Hub)">Indore Hub — Runicha Enterprises</option>
                      <option value="Jaipur Node (North Hub)">Jaipur Hub — Best Code Technology</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Your Message / Query Details</label>
                    <textarea 
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Type details about ink supply requirements, printer models, spare parts, or any query here..."
                      className="w-full text-xs font-semibold border border-slate-200 rounded-xl p-3 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2564AF] transition-all resize-none leading-relaxed"
                    />
                  </div>

                  {/* Validation / transport errors */}
                  {formError && (
                    <div
                      role="alert"
                      className="flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-800 rounded-xl p-3.5 text-xs font-semibold leading-relaxed"
                    >
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2564AF] hover:bg-[#122540] disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-black text-xs tracking-widest uppercase py-4 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending…</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
          </div>

          {/* RIGHT SIDE: Firm Addresses & Direct Contacts (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="text-xs uppercase tracking-widest font-black text-slate-400 px-1">
              Registered Corporate Hubs
            </div>

            {/* Loop Office Addresses */}
            {nodes.map((node, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-lg shadow-slate-100 space-y-4"
              >
                {/* Header Info */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-blue-50 text-[#2564AF] rounded-xl border border-blue-100 shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#122540] text-sm tracking-wide leading-tight">{node.name}</h4>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{node.role} • {node.city}</p>
                  </div>
                </div>

                {/* Address block */}
                <div className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span className="font-medium select-all">{node.address}</span>
                </div>

                {/* Fast Transmission Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <a 
                    href={`tel:${node.phone.replace(/[^0-9+]/g, "")}`}
                    className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-[#122540] hover:bg-slate-800 text-white font-mono text-[11px] font-bold transition-all shadow-sm cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-400" />
                    <span>{node.phone}</span>
                  </a>

                  <a 
                    href={`mailto:${node.email}`}
                    className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-[#122540] font-mono text-[11px] font-semibold transition-all cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>Email Support</span>
                  </a>
                </div>
              </div>
            ))}

            {/* Quick WhatsApp Support Callout */}
            <div className="bg-emerald-950/5 border border-emerald-900/10 rounded-3xl p-5 space-y-3.5">
              <div className="flex items-center gap-2">
                <span className="p-1 bg-emerald-50 text-emerald-600 rounded-lg shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </span>
                <span className="font-bold text-xs text-emerald-800 uppercase tracking-wider">WhatsApp Live Desk</span>
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Connect with our product specialist immediately on WhatsApp for instant spare quote and catalog dispatch.
              </p>
              <a 
                href="https://wa.me/919828106099"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all shadow-sm cursor-pointer"
              >
                <span>Chat with Specialist</span>
                <MessageSquare className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
