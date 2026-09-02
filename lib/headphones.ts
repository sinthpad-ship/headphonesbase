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
    slug: "sony-wh-1000xm6",
    brand: "Sony",
    model: "WH-1000XM6",
    type: "Wireless closed-back over-ear, active noise cancelling",
    connection: "Bluetooth; multipoint; detachable 3.5 mm analogue cable",
    impedance: "48 Ω powered / 16 Ω passive (1 kHz, wired)",
    weight: "Approx. 254 g (8.96 oz)",
    battery: "Up to 30 hours with noise cancelling on (manufacturer figure)",
    bestFor: ["Travel", "Commuting", "Calls", "Wireless music"],
    watchFor: ["Battery life varies with settings and usage", "Wireless codec support depends on the source device"],
    sourceUrl: "https://www.sony.com/electronics/support/wireless-headphones-bluetooth-headphones/wh-1000xm6/specifications",
    sourceLabel: "Sony official specifications",
    checkedAt: "2026-09-02",
  },
  {
    slug: "bose-quietcomfort-ultra-headphones-2nd-gen",
    brand: "Bose",
    model: "QuietComfort Ultra Headphones (2nd Gen)",
    type: "Wireless over-ear, active noise cancelling",
    connection: "Bluetooth multipoint",
    battery: "Up to 30 hours (manufacturer figure)",
    bestFor: ["Travel", "Noise cancelling", "Comfort", "Wireless listening"],
    watchFor: ["Battery result depends on listening mode and usage", "No live retailer price is shown on HeadphonesBase"],
    sourceUrl: "https://www.bose.com/c/headphones",
    sourceLabel: "Bose official headphones specifications",
    checkedAt: "2026-09-02",
  },
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
    checkedAt: "2026-09-02",
  },
  {
    slug: "sennheiser-hd-600",
    brand: "Sennheiser",
    model: "HD 600",
    type: "Open-back dynamic audiophile headphones",
    connection: "Wired; detachable 3 m cable; 6.3 mm with 3.5 mm adapter",
    impedance: "300 Ω",
    weight: "260 g",
    bestFor: ["Critical listening", "Home audio", "Reference listening"],
    watchFor: ["Open-back design leaks sound and provides little isolation", "High impedance can benefit from a capable headphone amplifier"],
    sourceUrl: "https://support.sennheiser-hearing.com/hc/en-dk/articles/38292415494173-HD-600-Specifications",
    sourceLabel: "Sennheiser official specifications",
    checkedAt: "2026-09-02",
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
    checkedAt: "2026-09-02",
  },
  {
    slug: "beyerdynamic-dt-990-pro-x",
    brand: "beyerdynamic",
    model: "DT 990 PRO X",
    type: "Open-back studio headphones",
    connection: "Wired; detachable mini-XLR cable",
    impedance: "48 Ω",
    weight: "292 g without cable",
    bestFor: ["Critical listening", "Editing", "Studio monitoring"],
    watchFor: ["Open-back design leaks sound", "Not intended for isolation or commuting"],
    sourceUrl: "https://europe.beyerdynamic.com/p/dt-990-pro-x",
    sourceLabel: "beyerdynamic official technical data",
    checkedAt: "2026-09-02",
  },
  {
    slug: "audio-technica-ath-m50x",
    brand: "Audio-Technica",
    model: "ATH-M50x",
    type: "Closed-back professional monitor headphones",
    connection: "Wired; three detachable cables included",
    impedance: "38 Ω",
    weight: "285 g without cable and connector",
    bestFor: ["Studio monitoring", "Recording", "DJ use", "Wired listening"],
    watchFor: ["No Bluetooth", "No active noise cancelling"],
    sourceUrl: "https://docs.audio-technica.com/eu/ATH-M50x%20datasheet%20%28FR%29.pdf",
    sourceLabel: "Audio-Technica official datasheet",
    checkedAt: "2026-09-02",
  },
];

export const getHeadphone = (slug: string) => headphones.find((item) => item.slug === slug);
