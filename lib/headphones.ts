export type Headphone = {
  slug: string;
  brand: string;
  model: string;
  type: string;
  connection: string;
  impedance?: string;
  weight?: string;
  battery?: string;
  bestFor: string[];
  watchFor: string[];
  sourceUrl: string;
  sourceLabel: string;
  checkedAt: string;
};

export const headphones: Headphone[] = [
  {
    slug: "sennheiser-momentum-4-wireless",
    brand: "Sennheiser",
    model: "MOMENTUM 4 Wireless",
    type: "Wireless over-ear, adaptive ANC",
    connection: "Bluetooth 5.2; SBC, AAC, aptX, aptX Adaptive",
    impedance: "470 Ω active / 60 Ω passive",
    battery: "Up to 60 hours via Bluetooth with ANC (manufacturer test conditions)",
    bestFor: ["Long battery life", "Travel", "Wireless music"],
    watchFor: ["Codec availability depends on the source device", "Battery figure is a manufacturer test result"],
    sourceUrl: "https://support.sennheiser-hearing.com/hc/en-se/articles/37791406604189-MOMENTUM-4-Wireless-Specifications",
    sourceLabel: "Sennheiser official specifications",
    checkedAt: "2026-09-01",
  },
  {
    slug: "beyerdynamic-dt-770-pro-x",
    brand: "beyerdynamic",
    model: "DT 770 PRO X",
    type: "Closed-back studio headphones",
    connection: "Wired; detachable mini-XLR cable",
    impedance: "48 Ω",
    weight: "305 g without cable",
    bestFor: ["Recording", "Monitoring", "Wired listening"],
    watchFor: ["No Bluetooth", "No active noise cancelling"],
    sourceUrl: "https://global.beyerdynamic.com/p/dt-770-pro-x",
    sourceLabel: "beyerdynamic official technical data",
    checkedAt: "2026-09-01",
  },
  {
    slug: "beyerdynamic-dt-770-pro-x-limited-edition",
    brand: "beyerdynamic",
    model: "DT 770 PRO X Limited Edition",
    type: "Closed-back studio headphones",
    connection: "Wired; detachable 3 m cable; 3.5 mm plug + 6.35 mm adapter",
    impedance: "48 Ω",
    weight: "305 g without cable",
    bestFor: ["Studio monitoring", "Closed-back isolation", "Wired listening"],
    watchFor: ["No Bluetooth", "Limited-edition model; retail availability can vary"],
    sourceUrl: "https://europe.beyerdynamic.com/p/dt-770-pro-x-limited-edition-b-stock",
    sourceLabel: "beyerdynamic official technical data",
    checkedAt: "2026-09-01",
  },
];

export const getHeadphone = (slug: string) => headphones.find((item) => item.slug === slug);
