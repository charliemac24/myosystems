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
    monthlyPrice: "?7,500",
    studentLimit: "up to 100 students",
    includedSms: "4,500 SMS credits",
    excessSms: "?1.50 per SMS",
    setupFee: "?5,000 one-time",
  },
  {
    name: "Standard",
    monthlyPrice: "?10,500",
    studentLimit: "up to 250 students",
    includedSms: "12,000 SMS credits",
    excessSms: "?1.50 per SMS",
    setupFee: "?7,500 one-time",
    featured: true,
  },
  {
    name: "Pro",
    monthlyPrice: "?14,500",
    studentLimit: "up to 400 students",
    includedSms: "20,000 SMS credits",
    excessSms: "?1.50 per SMS",
    setupFee: "?10,000 one-time",
  },
];

export const pricingFeatureList = [
  "Attendance logging",
  "Real-time SMS alerts",
  "Admin dashboard",
  "Filterable records and reporting",
];