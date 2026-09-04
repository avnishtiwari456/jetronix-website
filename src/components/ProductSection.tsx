import React from "react";
import { motion } from "motion/react";
import { products, categories } from "../data";
import { ProductCategory } from "../types";
import { FileText, ArrowRight, ChevronRight, Printer } from "lucide-react";

interface ProductSectionProps {
  /** Category id from the URL (#products/cij). Empty string means the full catalogue. */
  category?: string;
  /** Open a product page, or a category listing when only a category is given. */
  onNavigateToProduct: (productId?: string, category?: string) => void;
}

export default function ProductSection({ category, onNavigateToProduct }: ProductSectionProps) {
  const activeCategory = categories.find((c) => c.id === category);
  const visibleProducts = activeCategory
    ? products.filter((p) => p.category === (activeCategory.id as ProductCategory))
    : products;

  return (
    <section id="products" className="py-16 bg-slate-50 border-t border-slate-200" style={{ scrollMarginTop: "80px" }}>
      <div id="product-catalogue" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb - only once we are inside a range */}
        {activeCategory && (
          <nav className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-6">
            <button
              onClick={() => onNavigateToProduct()}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Products
            </button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-700">{activeCategory.shortLabel}</span>
          </nav>
        )}

        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-200/50 px-4 py-2 rounded-full">
            {activeCategory ? activeCategory.shortLabel : "Our Products"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 mt-4 leading-tight">
            {activeCategory ? activeCategory.label : "Industrial Coding & Marking Range"}
          </h2>
          <p className="text-slate-600 mt-3 text-base font-light leading-relaxed">
            {activeCategory
              ? activeCategory.description
              : `${products.length} machines across continuous inkjet, thermal inkjet, handheld coding, laser marking and thermal transfer overprinting.`}
          </p>
        </div>

        {/* Range selector - every entry is a page of its own */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" id="product-categories">
          <button
            onClick={() => onNavigateToProduct()}
            className={`px-5 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wider transition-all cursor-pointer border ${
              !activeCategory
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
                onClick={() => onNavigateToProduct(undefined, cat.id)}
                className={`px-5 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wider transition-all cursor-pointer border ${
                  activeCategory?.id === cat.id
                    ? "bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/10"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900"
                }`}
              >
                {cat.shortLabel} ({count})
              </button>
            );
          })}
        </div>

        {/* Machine grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="product-grid">
          {visibleProducts.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min(idx, 8) * 0.04 }}
            >
              <button
                id={`product-card-${p.id}`}
                onClick={() => onNavigateToProduct(p.id)}
                aria-label={`View ${p.name} specifications`}
                className="w-full h-full text-left bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2564AF]"
              >
                <div className="relative h-44 w-full bg-slate-50 overflow-hidden">
                  {p.image ? (
                    <picture>
                      <source srcSet={`/products/${p.image}.webp`} type="image/webp" />
                      <img
                        src={`/products/${p.image}.jpg`}
                        alt={p.name}
                        loading="lazy"
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                    </picture>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                      <Printer className="w-12 h-12" />
                    </div>
                  )}
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between gap-3 border-t border-slate-100">
                  <div className="space-y-2">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200/50 px-2.5 py-1 rounded-md inline-block">
                      {p.type}
                    </span>
                    <h3 className="text-lg font-display font-extrabold text-slate-900 leading-tight">
                      {p.name}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed font-light">
                      {p.tagline}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#2564AF] group-hover:gap-2.5 transition-all">
                    View Specifications
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {visibleProducts.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            <FileText className="w-10 h-10 mx-auto mb-3" />
            <p className="text-sm">No machines listed in this range yet.</p>
          </div>
        )}

      </div>
    </section>
  );
}
