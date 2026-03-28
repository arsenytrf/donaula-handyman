export interface Review {
  author: string;
  initial: string;
  quote: string;
  project: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    author: "Maria S.",
    initial: "M",
    quote:
      "John completely redid our bathroom — tile, fixtures, everything. He showed up when he said he would and the work was flawless. Worth every penny.",
    project: "Bathroom Renovation — White Plains",
    rating: 5,
  },
  {
    author: "David K.",
    initial: "D",
    quote:
      "Had a roof leak during a storm and John was out the next morning. Patched the leak, replaced damaged shingles, and checked the whole roof while he was up there. Fast and thorough.",
    project: "Emergency Roof Repair — Yonkers",
    rating: 5,
  },
  {
    author: "Teresa L.",
    initial: "T",
    quote:
      "We've used DONAULA for three different projects now — deck, painting, and gutter cleaning. Consistent quality every time. He's our go-to.",
    project: "Multiple Projects — Scarsdale",
    rating: 5,
  },
  {
    author: "Robert P.",
    initial: "R",
    quote:
      "Mounted four TVs, assembled all our IKEA furniture, and installed shelving in the garage. All in one day. The man works fast without cutting corners.",
    project: "TV Mounting & Assembly — Bronx",
    rating: 5,
  },
  {
    author: "Angela C.",
    initial: "A",
    quote:
      "Kitchen renovation came out better than what I'd seen from contractors charging double. John takes pride in his work — you can see it in every detail.",
    project: "Kitchen Remodel — New Rochelle",
    rating: 5,
  },
  {
    author: "James W.",
    initial: "J",
    quote:
      "Snow removal at 5 AM so we could get to work. AC install in summer. Gutter cleaning in fall. This is the kind of handyman you keep on speed dial.",
    project: "Year-Round Service — Mount Vernon",
    rating: 5,
  },
  {
    author: "Linda H.",
    initial: "L",
    quote:
      "The copper work on our chimney is beautiful. Nobody else in the area even offered to do copper — John did it and it looks incredible.",
    project: "Copper Chimney Work — Tarrytown",
    rating: 5,
  },
  {
    author: "Michael B.",
    initial: "M",
    quote:
      "Had damage to our siding after a tree branch fell. John repaired the siding, power washed the whole house, and painted the trim. Looks better than before the damage.",
    project: "Siding Repair & Paint — Mamaroneck",
    rating: 5,
  },
];

export const row1Reviews = reviews.slice(0, 4);
export const row2Reviews = reviews.slice(4, 8);
