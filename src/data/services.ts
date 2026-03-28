export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  category: "exterior" | "interior" | "specialty";
}

export const services: Service[] = [
  {
    slug: "carpentry",
    title: "Carpentry",
    shortDescription: "Custom woodwork, trim, framing, and structural repairs.",
    description:
      "From custom shelving to structural framing, our carpentry work is precise and built to last. We handle trim work, crown molding, baseboards, door frames, and custom built-ins.",
    icon: "Hammer",
    category: "interior",
  },
  {
    slug: "roof-repairs",
    title: "Roof Repairs & New Roofs",
    shortDescription: "Leak repair, shingle replacement, and full roof installs.",
    description:
      "Whether it's a small leak or a full re-roof, we diagnose the issue fast and fix it right. We work with asphalt shingles, flat roofing, and metal roofs across Westchester and the Bronx.",
    icon: "Home",
    category: "exterior",
  },
  {
    slug: "copper-work",
    title: "Copper Work",
    shortDescription: "Copper flashing, gutters, and decorative installations.",
    description:
      "Specialty copper work including flashing, gutter systems, chimney caps, and decorative elements. Copper adds lasting beauty and weather resistance to any home.",
    icon: "Sparkles",
    category: "exterior",
  },
  {
    slug: "decks-patios",
    title: "Decks & Patios",
    shortDescription: "New builds, repairs, staining, and waterproofing.",
    description:
      "We build, repair, and refinish decks and patios. From pressure-treated lumber to composite decking, we create outdoor spaces that hold up through New York winters.",
    icon: "Fence",
    category: "exterior",
  },
  {
    slug: "chimney-repairs",
    title: "Chimney Repairs",
    shortDescription: "Repointing, cap replacement, and structural repair.",
    description:
      "Cracked mortar, missing caps, water damage — chimney problems get worse fast. We handle repointing, cap replacement, flashing repair, and full chimney rebuilds.",
    icon: "Flame",
    category: "exterior",
  },
  {
    slug: "siding",
    title: "All Siding Types",
    shortDescription: "Vinyl, wood, fiber cement — install and repair.",
    description:
      "We install and repair all siding types including vinyl, wood, fiber cement, and engineered wood. Proper siding protects your home from the elements and boosts curb appeal.",
    icon: "LayoutPanelLeft",
    category: "exterior",
  },
  {
    slug: "painting",
    title: "Exterior & Interior Painting",
    shortDescription: "Full prep, prime, and paint — inside and out.",
    description:
      "Clean lines, proper prep, and premium paint. We handle interior rooms, exterior facades, trim, decks, and accent walls. Every job includes surface prep, priming, and two coats.",
    icon: "Paintbrush",
    category: "interior",
  },
  {
    slug: "masonry",
    title: "Masonry",
    shortDescription: "Brick, stone, and block — new builds and repairs.",
    description:
      "Brick walls, stone veneers, retaining walls, walkways, and structural block work. We handle both new construction and repair of existing masonry on homes across the tristate area.",
    icon: "Blocks",
    category: "exterior",
  },
  {
    slug: "gutter-cleaning",
    title: "Gutter Cleaning",
    shortDescription: "Full cleanout, flush, and downspout clearing.",
    description:
      "Clogged gutters cause roof leaks, foundation damage, and ice dams. We clean them out completely, flush the downspouts, and check for damage while we're up there.",
    icon: "Droplets",
    category: "exterior",
  },
  {
    slug: "yard-cleanup",
    title: "Yard Cleanup",
    shortDescription: "Debris removal, trimming, and seasonal cleanup.",
    description:
      "Storm debris, overgrown lots, fall leaves, spring prep — we get your yard back in shape. Includes hauling, trimming, and basic landscaping cleanup.",
    icon: "TreePine",
    category: "exterior",
  },
  {
    slug: "power-washing",
    title: "Power Washing",
    shortDescription: "Driveways, decks, siding, and concrete surfaces.",
    description:
      "Years of grime removed in hours. We power wash driveways, sidewalks, decks, patios, siding, and fences. Makes everything look brand new without the replacement cost.",
    icon: "Waves",
    category: "exterior",
  },
  {
    slug: "electrical",
    title: "Electrical Work",
    shortDescription: "Outlets, switches, panels, and light fixtures.",
    description:
      "From adding outlets and upgrading switches to light fixture installs and panel work. We handle residential electrical safely and to code.",
    icon: "Zap",
    category: "interior",
  },
  {
    slug: "plumbing",
    title: "Plumbing",
    shortDescription: "Faucets, pipes, toilets, and water heaters.",
    description:
      "Leaky faucets, running toilets, pipe repairs, water heater issues, and fixture installs. We diagnose fast and fix it right the first time.",
    icon: "Wrench",
    category: "interior",
  },
  {
    slug: "bathroom-kitchen-renovations",
    title: "Bathroom & Kitchen Renovations",
    shortDescription: "Full remodels from demo to finish.",
    description:
      "Complete bathroom and kitchen renovations including demo, plumbing, electrical, tile, fixtures, cabinetry, and countertops. We manage the whole project start to finish.",
    icon: "Bath",
    category: "interior",
  },
  {
    slug: "snow-removal",
    title: "Snow Removal",
    shortDescription: "Driveways, walkways, and commercial lots.",
    description:
      "When the snow hits Westchester and the Bronx, we're out there clearing driveways, walkways, parking lots, and stoops. Available 24/7 during storms.",
    icon: "Snowflake",
    category: "exterior",
  },
  {
    slug: "furniture-assembly",
    title: "Furniture Assembly",
    shortDescription: "IKEA specialist — beds, desks, shelving, and more.",
    description:
      "Save yourself the headache. We assemble IKEA, Wayfair, Amazon, and any flat-pack furniture quickly and correctly. Beds, desks, bookshelves, dressers — you name it.",
    icon: "Package",
    category: "interior",
  },
  {
    slug: "tv-mounting",
    title: "TV Mounting",
    shortDescription: "Wall mount, wire concealment, and setup.",
    description:
      "Professional TV mounting with hidden wires and clean finish. We mount to drywall, brick, concrete, and stone. We bring the hardware — you pick the spot.",
    icon: "Monitor",
    category: "interior",
  },
  {
    slug: "ac-installation",
    title: "AC Installation",
    shortDescription: "Window units, mini-splits, and through-wall AC.",
    description:
      "Beat the New York heat. We install window AC units, through-wall units, and mini-split systems. Includes mounting brackets, sealing, and electrical connections.",
    icon: "Wind",
    category: "interior",
  },
  {
    slug: "light-fixtures",
    title: "Light Fixtures",
    shortDescription: "Chandeliers, sconces, recessed, and outdoor lighting.",
    description:
      "From swapping out old fixtures to installing chandeliers, pendants, recessed lights, and outdoor security lighting. We handle the wiring and make sure everything is safe.",
    icon: "Lightbulb",
    category: "interior",
  },
  {
    slug: "shelving",
    title: "Shelving",
    shortDescription: "Floating shelves, closet systems, and garage storage.",
    description:
      "Custom and pre-built shelving for any room. Floating shelves, pantry shelving, closet organizers, and garage storage systems. Properly anchored to hold real weight.",
    icon: "BookOpen",
    category: "interior",
  },
  {
    slug: "tile-repair",
    title: "Tile Repair",
    shortDescription: "Cracked, loose, or missing tiles — fixed fast.",
    description:
      "Cracked bathroom tiles, loose kitchen backsplash, missing grout — we repair and replace tile work to match your existing design. Floors, walls, and backsplashes.",
    icon: "Grid3x3",
    category: "interior",
  },
  {
    slug: "faucet-sink-installation",
    title: "Faucet & Sink Installation",
    shortDescription: "New installs, upgrades, and replacements.",
    description:
      "Kitchen sinks, bathroom vanities, utility sinks, and faucet upgrades. We handle the plumbing connections and make sure everything drains properly.",
    icon: "GlassWater",
    category: "interior",
  },
  {
    slug: "drywall-repair",
    title: "Drywall Repair",
    shortDescription: "Holes, cracks, water damage — patched seamlessly.",
    description:
      "From small nail holes to large water-damaged sections, we patch, tape, mud, sand, and prime drywall to a smooth finish ready for paint.",
    icon: "Square",
    category: "interior",
  },
  {
    slug: "door-hardware",
    title: "Door Hardware",
    shortDescription: "Locks, handles, hinges, and door adjustments.",
    description:
      "New locks, deadbolts, lever handles, hinges, door closers, and adjustments for doors that stick or don't close right. We install hardware on interior and exterior doors.",
    icon: "DoorOpen",
    category: "interior",
  },
  {
    slug: "caulking-grout",
    title: "Caulking & Grout Work",
    shortDescription: "Sealing showers, tubs, windows, and tile joints.",
    description:
      "Old caulking cracks and grout crumbles — letting water in where it shouldn't be. We remove the old, clean the surface, and apply fresh caulk and grout that seals tight.",
    icon: "PenTool",
    category: "interior",
  },
];

export const serviceCategories = [
  { key: "exterior" as const, label: "Exterior" },
  { key: "interior" as const, label: "Interior" },
  { key: "specialty" as const, label: "Specialty" },
];
