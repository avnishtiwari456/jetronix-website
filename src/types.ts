export type ProductCategory =
  | "cij"
  | "other-inkjet"
  | "tij"
  | "handheld"
  | "laser"
  | "tto"
  | "conveyor"
  | "winder";

/** A single label/value row in a product's specification table. */
export interface SpecRow {
  label: string;
  value: string;
}

export interface CategoryMeta {
  id: ProductCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  type: string;
  category: ProductCategory;
  /** Photo basename in /public/products (without extension). Omit if no photo exists. */
  image?: string;
  /** The manufacturer's specification table, reproduced as published. */
  specs: SpecRow[];
}

export interface FirmDetails {
  name: string;
  address: string;
  contactPerson: string;
  gstNo: string;
  phone: string;
  email: string;
  city: string;
}

export interface QuoteRequest {
  id: string;
  customerName: string;
  companyName: string;
  email: string;
  phone: string;
  selectedProduct: string;
  estimatedVolume: string;
  industry: string;
  message: string;
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
}
