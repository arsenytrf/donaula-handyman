export const basePath = "/donaula-handyman";

export const company = {
  name: "DONAULA Handyman",
  shortName: "DONAULA",
  tagline: "I don't have the best price, I have the best work.",
  description:
    "Full-service handyman covering the Bronx, all of Westchester County, Rockland County, and Connecticut. $2 million insurance coverage. Available 24/7.",
  phone: "(914) 806-0532",
  phoneLink: "tel:+19148060532",
  email: "donaulahandyman@gmail.com",
  contactPerson: "John",
  insurance: "$2 Million Coverage",
  hours: "24/7 Availability",
  hoursStructured: [
    { days: "Monday–Sunday", open: "24 Hours", close: "24 Hours" },
  ],
  pricing: {
    model: "Project-based or hourly rates",
    materials: "Materials charged separately",
  },
  areasServed: [
    "Bronx",
    "Scarsdale",
    "White Plains",
    "Yonkers",
    "New Rochelle",
    "Mount Vernon",
    "Tarrytown",
    "Mamaroneck",
    "Ossining",
    "Peekskill",
    "Rockland County",
    "Connecticut",
  ],
  serviceRegion: "Bronx, All Westchester County, Rockland County, Connecticut",
  socials: {
    google: "#",
    yelp: "#",
  },
  formAction: "https://formspree.io/f/placeholder",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193171.35513498!2d-73.8786!3d40.8568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28b553a697cb1%3A0x556e43a78ff15c77!2sWestchester%20County%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
} as const;
