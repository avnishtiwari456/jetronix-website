import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HomeOverview from "./components/HomeOverview";
import ProductSection from "./components/ProductSection";
import ProductDetail from "./components/ProductDetail";
import TcoCalculator from "./components/TcoCalculator";
import SampleGenerator from "./components/SampleGenerator";
import Matchmaker from "./components/Matchmaker";
import JointVenture from "./components/JointVenture";
import AiAdvisor from "./components/AiAdvisor";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { ChevronUp, Activity, CheckCircle2 } from "lucide-react";
import { products } from "./data";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [prefilledSample, setPrefilledSample] = useState<string>("");
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [activeQuoteRef, setActiveQuoteRef] = useState<string | null>(null);
  const [routeSegment, setRouteSegment] = useState<string>("");
  const [quoteTarget, setQuoteTarget] = useState<{ productId: string } | null>(null);

  // Monitor scroll height to show Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hash-based client router
  useEffect(() => {
    const handleHashChange = () => {
      const raw = window.location.hash.replace("#", "");
      const [pageId, segment = ""] = raw.split("/");
      const validPages = ["home", "about", "products", "calculator", "lab", "advisor", "partners", "contact"];

      setCurrentPage(validPages.includes(pageId) ? pageId : "home");
      setRouteSegment(segment);
      
      // Auto-scroll back to top smoothly on page transition
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (pageId: string) => {
    window.location.hash = pageId;
  };

  // Every machine and every range has its own address: #products, #products/cij, #products/jx350.
  const handleNavigateToProduct = (productId?: string, category?: string) => {
    const target = productId || category;
    handleNavigate(target ? `products/${target}` : "products");
  };

  // "Request Quote" on a product card jumps to the B2B quote sheet with that product preselected.
  // A fresh object each call so repeat clicks still re-trigger the form's scroll-into-view.
  const handleRequestQuote = (productId: string) => {
    setQuoteTarget({ productId });
    handleNavigate("partners");
  };

  // Prefill the B2B quote sheet and switch context to the joint-venture partners hub
  const handleRequestPhysicalSample = (sampleDetails: string) => {
    setPrefilledSample(sampleDetails);
    handleNavigate("partners");
  };

  // Capture active quote ref ID to show dynamic global confirmation badge in header
  const handleQuoteSubmitted = (refId: string) => {
    setActiveQuoteRef(refId);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col justify-between" id="app-wrapper">
      
      {/* 1. Global High-Tech Navigation Hub */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onNavigateToProduct={handleNavigateToProduct}
        activeQuoteRef={activeQuoteRef}
      />

      {/* 2. Main Page Render Stage (With Mount/Unmount Fade Transitions) */}
      <main className="flex-grow">
          {currentPage === "home" && (
            <motion.div
              key="home-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <Hero 
                onNavigateToProduct={handleNavigateToProduct}
                onExploreProducts={() => handleNavigate("products")}
                onOpenCalculator={() => handleNavigate("calculator")}
              />
              <HomeOverview 
                onNavigate={handleNavigate}
                onNavigateToProduct={handleNavigateToProduct}
                onExploreProducts={() => handleNavigate("products")}
                onOpenCalculator={() => handleNavigate("calculator")}
              />
            </motion.div>
          )}

          {currentPage === "products" && (() => {
            // A segment is either one machine or one range; anything else is the full catalogue.
            const product = products.find((p) => p.id === routeSegment);
            return (
              <motion.div
                key={`products-${routeSegment || "all"}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                {product ? (
                  <ProductDetail
                    product={product}
                    onRequestQuote={handleRequestQuote}
                    onNavigateToProduct={handleNavigateToProduct}
                  />
                ) : (
                  <ProductSection
                    category={routeSegment}
                    onNavigateToProduct={handleNavigateToProduct}
                  />
                )}
              </motion.div>
            );
          })()}

          {currentPage === "calculator" && (
            <motion.div
              key="calculator-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <TcoCalculator />
            </motion.div>
          )}

          {currentPage === "lab" && (
            <motion.div
              key="lab-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              <SampleGenerator onRequestPhysicalSample={handleRequestPhysicalSample} />
              <Matchmaker />
            </motion.div>
          )}

          {currentPage === "advisor" && (
            <motion.div
              key="advisor-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <AiAdvisor />
            </motion.div>
          )}

          {currentPage === "partners" && (
            <motion.div
              key="partners-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <JointVenture
                prefilledSampleDetails={prefilledSample}
                quoteTarget={quoteTarget}
                onQuoteSubmitted={handleQuoteSubmitted}
              />
            </motion.div>
          )}

          {currentPage === "about" && (
            <motion.div
              key="about-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <AboutUs onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentPage === "contact" && (
            <motion.div
              key="contact-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <ContactUs />
            </motion.div>
          )}
      </main>

      {/* 3. Global Redesigned Interactive B2B Footer */}
      <Footer onNavigate={handleNavigate} onNavigateToProduct={handleNavigateToProduct} />

      {/* Floating Smooth Scroll-to-Top Action Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 bg-slate-900 hover:bg-blue-600 border border-slate-800 text-white p-3 rounded-full shadow-xl transition-all cursor-pointer transform hover:scale-105 active:scale-95"
          title="Return to Top"
          id="btn-scroll-top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
