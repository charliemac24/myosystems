export type PricingTier = {
  name: string;
  monthlyPrice: string;
  studentLimit: string;
  includedSms: string;
  excessSms: string;
  setupFee: string;
  featured?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    monthlyPrice: "\u20B17,500",
    studentLimit: "up to 100 students",
    includedSms: "4,500 SMS credits",
    excessSms: "\u20B11.50 per SMS",
    setupFee: "\u20B15,000 one-time",
  },
  {
    name: "Standard",
    monthlyPrice: "\u20B110,500",
    studentLimit: "up to 250 students",
    includedSms: "12,000 SMS credits",
    excessSms: "\u20B11.50 per SMS",
    setupFee: "\u20B17,500 one-time",
    featured: true,
  },
  {
    name: "Pro",
    monthlyPrice: "\u20B114,500",
    studentLimit: "up to 400 students",
    includedSms: "20,000 SMS credits",
    excessSms: "\u20B11.50 per SMS",
    setupFee: "\u20B110,000 one-time",
  },
];

export const pricingFeatureList = [
  "Attendance logging",
  "Real-time SMS alerts",
  "Admin dashboard",
  "Filterable records and reporting",
];