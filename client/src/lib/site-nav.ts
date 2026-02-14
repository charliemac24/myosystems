export type NavItem = {
  label: string;
  href: string;
};

export const GLOBAL_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/products/attendance-monitoring-sms" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];