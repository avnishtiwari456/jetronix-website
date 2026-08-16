export interface TechnicalSpecs {
  printHead: string;
  printHeight: string;
  nozzle: string;
  printingLines: string;
  printSpeed: string;
  characterHeight: string;
  counter: string;
  inkColor: string;
  inkType: string;
  font: string;
  barcode: string;
  input: string;
}

export interface MachineSpecs {
  operatingSystem: string;
  displayScreen: string;
  interface: string;
  protectionLevel: string;
  powerSupply: string;
  ratedPower: string;
  machineMaterial: string;
}

export type ProductCategory =
  | "cij"
  | "tij"
  | "other-inkjet"
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
  description: string;
  type: string;
  category: ProductCategory;
  imagePlaceholder: string;
  features: string[];
  keyHighlights: string[];
  /** Flat spec table — every product has one, shapes vary by category. */
  specs: SpecRow[];
  /** Detailed CIJ parameter cards. Only the flagship printers carry these. */
  techSpecs?: TechnicalSpecs;
  machineSpecs?: MachineSpecs;
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
  estimatedVolume: string; // e.g., <10k, 10k-50k, 50k-200k, 200k+
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
