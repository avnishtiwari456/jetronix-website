import React, { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { products, categories } from "../data";
import { ProductCategory } from "../types";
import { FileText, ArrowRight, Phone, ListFilter } from "lucide-react";

interface ProductSectionProps {
  /** Deep-link target set by the header/footer menus. */
  target?: { category?: string; productId?: string } | null;
  /** Jump to the B2B quote sheet with this product preselected. */
  onRequestQuote?: (productId: string) => void;
}

export default function ProductSection({ target, onRequestQuote }: ProductSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");
  const [activeTab, setActiveTab] = useState<string>(products[0].id);

  // Apply an incoming deep-link: select the requested product, and the category holding it.
  useEffect(() => {
    if (!target) return;
    const targeted = target.productId ? products.find((p) => p.id === target.productId) : undefined;
    if (targeted) {
      setActiveCategory(targeted.category);
      setActiveTab(targeted.id);
      return;
    }
    if (target.category) {
      const cat = target.category as ProductCategory;
      const first = products.find((p) => p.category === cat);
      if (first) {
        setActiveCategory(cat);
        setActiveTab(first.id);
      }
    }
  }, [target]);

  const visibleProducts = useMemo(
    () => (activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory)),
    [activeCategory]
  );

  const selectedProduct =
    visibleProducts.find((p) => p.id === activeTab) || visibleProducts[0] || products[0];

  const handleCategoryChange = (cat: ProductCategory | "all") => {
    setActiveCategory(cat);
    const first = cat === "all" ? products[0] : products.find((p) => p.category === cat);
    if (first) setActiveTab(first.id);
  };

  const activeCategoryMeta = categories.find((c) => c.id === activeCategory);

  return (
    <section id="products" className="py-16 bg-slate-50 border-t border-slate-200" style={{ scrollMarginTop: "80px" }}>
      <div id="product-catalogue" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-200/50 px-4 py-2 rounded-full">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 mt-4 leading-tight">
            Industrial Coding &amp; Marking Range
          </h2>
          <p className="text-slate-600 mt-3 text-base font-light leading-relaxed">
            {products.length} machines across continuous inkjet, thermal inkjet, handheld coding,
            laser marking, TTO, conveyors and rewinders.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6" id="product-categories">
          <button
            onClick={() => handleCategoryChange("all")}
            className={`px-5 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wider transition-all cursor-pointer border ${
              activeCategory === "all"
                ? "bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/10"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900"
            }`}
          >
            All Products ({products.length})
          </button>
          {categories.map((cat) => {
            const count = products.filter((p) => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                id={`cat-btn-${cat.id}`}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-5 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wider transition-all cursor-pointer border ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/10"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900"
                }`}
              >
                {cat.shortLabel} ({count})
              </button>
            );
          })}
        </div>

        {activeCategoryMeta && (
          <p className="text-center text-sm text-slate-500 font-light max-w-2xl mx-auto mb-8">
            {activeCategoryMeta.description}
          </p>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          <div className="lg:col-span-3" id="product-rail">
            <div className="flex items-center gap-2 text-slate-400 mb-3 px-1">
              <ListFilter className="w-4 h-4" />
              <h4 className="text-[10px] font-bold uppercase tracking-widest font-mono">
                {visibleProducts.length} Machines
              </h4>
            </div>
            <div className="space-y-2 lg:max-h-[640px] lg:overflow-y-auto lg:pr-2">
              {visibleProducts.map((p) => (
                <button
                  key={p.id}
                  id={`tab-btn-${p.id}`}
                  onClick={() => setActiveTab(p.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition-all cursor-pointer ${
                    selectedProduct.id === p.id
                      ? "bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/10"
                      : "bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-blue-50/40"
                  }`}
                >
                  <span className="block font-bold text-xs leading-snug">{p.name}</span>
                  <span
                    className={`block text-[10px] mt-1 uppercase tracking-wider font-mono ${
                      selectedProduct.id === p.id ? "text-blue-300" : "text-slate-400"
                    }`}
                  >
                    {p.type}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-9">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-lg shadow-slate-200/40"
                id={`product-content-${selectedProduct.id}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  <div className="flex items-start justify-center">
                    {selectedProduct.image ? (
                      <picture>
                        <source srcSet={`/products/${selectedProduct.image}.webp`} type="image/webp" />
                        <img
                          src={`/products/${selectedProduct.image}.jpg`}
                          alt={selectedProduct.name}
                          loading="lazy"
                          className="max-h-[340px] w-auto object-contain"
                        />
                      </picture>
                    ) : (
                      <div className="w-full h-48 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-300">
                        <FileText className="w-12 h-12" />
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200/50 px-3 py-1.5 rounded-lg inline-block">
                      {selectedProduct.type}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 leading-tight">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-light">
                      {selectedProduct.tagline}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <button
                        id={`quote-btn-${selectedProduct.id}`}
                        onClick={() => onRequestQuote?.(selectedProduct.id)}
                        className="bg-slate-900 hover:bg-blue-600 text-white font-bold uppercase tracking-widest text-[11px] py-3 px-6 rounded-xl flex items-center gap-2 cursor-pointer transition-all shadow-md shadow-slate-900/10 active:scale-95"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Get a Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <a
                        href="tel:+919522299975"
                        className="text-slate-600 hover:text-blue-600 font-bold uppercase tracking-widest text-[11px] py-3 px-5 rounded-xl border border-slate-200 hover:border-blue-400 flex items-center gap-2 transition-all"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call Us</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-900 mb-4">
                    Product Specifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8" id="spec-sheet-table">
                    {selectedProduct.specs.map((row, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between gap-6 py-2.5 border-b border-slate-100 text-xs"
                      >
                        <span className="font-semibold text-slate-500">{row.label}</span>
                        <span className="font-bold text-slate-900 text-right">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
