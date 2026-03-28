export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  services: [
    { label: "Carpentry", href: "/services#carpentry" },
    { label: "Roof Repairs", href: "/services#roof-repairs" },
    { label: "Painting", href: "/services#painting" },
    { label: "Plumbing", href: "/services#plumbing" },
    { label: "Electrical", href: "/services#electrical" },
    { label: "Renovations", href: "/services#bathroom-kitchen-renovations" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Our Work", href: "/#gallery" },
    { label: "Service Areas", href: "/about#service-area" },
  ],
  support: [
    { label: "Get an Estimate", href: "/contact" },
    { label: "FAQ", href: "/contact#faq" },
  ],
};
