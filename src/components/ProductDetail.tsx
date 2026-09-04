import React from "react";
import { motion } from "motion/react";
import { products, categories } from "../data";
import { Product } from "../types";
import { FileText, ArrowRight, Phone, ChevronRight, Printer } from "lucide-react";

interface ProductDetailProps {
  product: Product;
  /** Jump to the B2B quote sheet with this machine preselected. */
  onRequestQuote?: (productId: string) => void;
  onNavigateToProduct: (productId?: string, category?: string) => void;
}

export default function ProductDetail({ product, onRequestQuote, onNavigateToProduct }: ProductDetailProps) {
  const category = categories.find((c) => c.id === product.category);
  const siblings = products.filter((p) => p.category === product.category && p.id !== product.id);

  return (
    <section
      id={`product-page-${product.id}`}
      className="py-16 bg-slate-50 border-t border-slate-200"
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <nav className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-6">
          <button
            onClick={() => onNavigateToProduct()}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            Products
          </button>
          {category && (
            <>
              <ChevronRight className="w-3 h-3" />
              <button
                onClick={() => onNavigateToProduct(undefined, category.id)}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                {category.shortLabel}
              </button>
            </>
          )}
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-700">{product.name}</span>
        </nav>

        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-lg shadow-slate-200/40"
          id={`product-content-${product.id}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="flex items-start justify-center">
              {product.image ? (
                <picture>
                  <source srcSet={`/products/${product.image}.webp`} type="image/webp" />
                  <img
                    src={`/products/${product.image}.jpg`}
                    alt={product.name}
                    className="max-h-[340px] w-auto object-contain"
                  />
                </picture>
              ) : (
                <div className="w-full h-48 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-300">
                  <Printer className="w-12 h-12" />
                </div>
              )}
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200/50 px-3 py-1.5 rounded-lg inline-block">
                {product.type}
              </span>
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 leading-tight">
                {product.name}
              </h1>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                {product.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  id={`quote-btn-${product.id}`}
                  onClick={() => onRequestQuote?.(product.id)}
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
            <h2 className="font-display font-bold text-sm uppercase tracking-wider text-slate-900 mb-4">
              Product Specifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8" id="spec-sheet-table">
              {product.specs.map((row, idx) => (
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

        {/* The rest of the range this machine belongs to */}
        {siblings.length > 0 && category && (
          <div className="mt-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <h2 className="font-display font-bold text-sm uppercase tracking-wider text-slate-900">
                More in {category.shortLabel}
              </h2>
              <button
                onClick={() => onNavigateToProduct(undefined, category.id)}
                className="text-[10px] font-extrabold uppercase tracking-wider text-[#2564AF] hover:gap-2.5 inline-flex items-center gap-1.5 transition-all cursor-pointer"
              >
                View the range
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {siblings.map((p) => (
                <button
                  key={p.id}
                  onClick={() => onNavigateToProduct(p.id)}
                  className="text-left bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-blue-300 transition-all cursor-pointer"
                >
                  <span className="block font-bold text-xs text-slate-900 leading-snug">{p.name}</span>
                  <span className="block text-[10px] mt-1.5 uppercase tracking-wider font-mono text-slate-400">
                    {p.type}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
