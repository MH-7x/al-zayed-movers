/**
 * ============================================================================
 *  الأمين نقل اثاث دبي — Al Ameen Furniture Removers
 *  Site-wide JSON-LD schema graph  •  Next.js App Router  •  TypeScript
 * ----------------------------------------------------------------------------
 *  HOW IT WORKS
 *  Every page emits ONE <script type="application/ld+json"> containing ONE
 *  @graph. The graph always carries the site-wide nodes (Organization /
 *  MovingCompany, WebSite) plus a per-page WebPage + BreadcrumbList, and — on
 *  service and location pages — a dedicated Service node.
 *
 *  Place this file at: lib/schema.ts
 * ============================================================================
 */

/* ---------------------------------------------------------------------------
 * 1. SITE CONSTANTS  —  verified business facts
 * ------------------------------------------------------------------------- */

/** No trailing slash. Must match your canonical tags byte-for-byte. */
export const SITE_URL = (
  process.env.SITE_URL ?? "https://alameenmovers.ae"
).replace(/\/$/, "");

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_ID = `${SITE_URL}/#logo`;

/**
 * Social profiles — INTENTIONALLY DISABLED.
 * Each profile is created but NOT yet live. A sameAs array containing URLs
 * that 404 weakens entity confidence instead of building it.
 * ACTION: uncomment each line on the day that profile goes live.
 */
const SAME_AS: string[] = [
  "https://www.facebook.com/alameenmovers",
  "https://www.instagram.com/alameenmovers",
  // "https://www.youtube.com/@alameenmovers",
  "https://www.pinterest.com/alameenmovers",
  // "https://x.com/alameenmovers",
];

/**
 * Service areas. One node per emirate — no duplicates.
 * (Competitor lmovers.ae lists Dubai twice, as both Place and City.)
 */
const AREA_SERVED = [
  { "@type": "City", name: "دبي", alternateName: "Dubai" },
  { "@type": "City", name: "أبوظبي", alternateName: "Abu Dhabi" },
  { "@type": "City", name: "الشارقة", alternateName: "Sharjah" },
  { "@type": "City", name: "عجمان", alternateName: "Ajman" },
  { "@type": "City", name: "رأس الخيمة", alternateName: "Ras Al Khaimah" },
  { "@type": "City", name: "الفجيرة", alternateName: "Fujairah" },
  { "@type": "City", name: "أم القيوين", alternateName: "Umm Al Quwain" },
  { "@type": "City", name: "العين", alternateName: "Al Ain" },
] as const;

/* ---------------------------------------------------------------------------
 * 2. PAGE REGISTRY  —  verified slugs, percent-encoded
 * ------------------------------------------------------------------------- */

export type PageKey =
  | "home"
  | "about"
  | "contact"
  | "houseMoving"
  | "apartmentMoving"
  | "villaMoving"
  | "officeMoving"
  | "packing"
  | "assembly"
  | "storage"
  | "abuDhabi"
  | "sharjah"
  | "ajman"
  | "rasAlKhaimah"
  | "alAin";

type PageKind = "home" | "info" | "service" | "location";

interface PageDef {
  /** Percent-encoded slug, no leading or trailing slash. Empty for home. */
  slug: string;
  /** Label shown as the final breadcrumb crumb (Arabic, matches your <h1>). */
  crumb: string;
  kind: PageKind;
  /** schema.org serviceType — service & location pages only. */
  serviceType?: string;
  /** Narrower areaServed for location pages. Service pages default to Dubai. */
  area?: { "@type": string; name: string; alternateName: string };
}

export const PAGES: Record<PageKey, PageDef> = {
  home: {
    slug: "",
    crumb: "الرئيسية",
    kind: "home",
  },

  /* ---- Company ---------------------------------------------------------- */
  about: {
    slug: "%D9%85%D9%86-%D9%86%D8%AD%D9%86",
    crumb: "من نحن",
    kind: "info",
  },
  contact: {
    slug: "%D8%A7%D8%AA%D8%B5%D9%84-%D8%A8%D9%86%D8%A7",
    crumb: "اتصل بنا",
    kind: "info",
  },

  /* ---- Services (Dubai) ------------------------------------------------- */
  houseMoving: {
    slug: "%D9%86%D9%82%D9%84-%D8%A7%D8%AB%D8%A7%D8%AB-%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84-%D9%81%D9%8A-%D8%AF%D8%A8%D9%8A",
    crumb: "نقل اثاث المنزل في دبي",
    kind: "service",
    serviceType: "نقل اثاث المنزل",
  },
  apartmentMoving: {
    slug: "%D9%86%D9%82%D9%84-%D8%A7%D8%AB%D8%A7%D8%AB-%D8%A7%D9%84%D8%B4%D9%82%D9%82-%D9%81%D9%8A-%D8%AF%D8%A8%D9%8A",
    crumb: "نقل اثاث الشقق في دبي",
    kind: "service",
    serviceType: "نقل اثاث الشقق",
  },
  villaMoving: {
    slug: "%D9%86%D9%82%D9%84-%D8%A7%D8%AB%D8%A7%D8%AB-%D8%A7%D9%84%D9%81%D9%84%D9%84-%D9%81%D9%8A-%D8%AF%D8%A8%D9%8A",
    crumb: "نقل اثاث الفلل في دبي",
    kind: "service",
    serviceType: "نقل اثاث الفلل",
  },
  officeMoving: {
    slug: "%D9%86%D9%82%D9%84-%D8%A7%D8%AB%D8%A7%D8%AB-%D8%A7%D9%84%D9%85%D9%83%D8%A7%D8%AA%D8%A8-%D9%81%D9%8A-%D8%AF%D8%A8%D9%8A",
    crumb: "نقل اثاث المكاتب في دبي",
    kind: "service",
    serviceType: "نقل اثاث المكاتب",
  },
  packing: {
    slug: "%D8%AA%D8%BA%D9%84%D9%8A%D9%81-%D8%A7%D8%AB%D8%A7%D8%AB-%D9%81%D9%8A-%D8%AF%D8%A8%D9%8A",
    crumb: "تغليف اثاث في دبي",
    kind: "service",
    serviceType: "تغليف وتعبئة الاثاث",
  },
  assembly: {
    slug: "%D9%81%D9%83-%D9%88%D8%AA%D8%B1%D9%83%D9%8A%D8%A8-%D8%A7%D8%AB%D8%A7%D8%AB-%D9%81%D9%8A-%D8%AF%D8%A8%D9%8A",
    crumb: "فك وتركيب اثاث في دبي",
    kind: "service",
    serviceType: "فك وتركيب الاثاث",
  },
  storage: {
    slug: "%D8%AA%D8%AE%D8%B2%D9%8A%D9%86-%D8%A7%D8%AB%D8%A7%D8%AB-%D9%81%D9%8A-%D8%AF%D8%A8%D9%8A",
    crumb: "تخزين اثاث في دبي",
    kind: "service",
    serviceType: "تخزين الاثاث",
  },

  /* ---- Locations -------------------------------------------------------- */
  abuDhabi: {
    slug: "%D9%86%D9%82%D9%84-%D8%A7%D8%AB%D8%A7%D8%AB-%D8%A7%D8%A8%D9%88%D8%B8%D8%A8%D9%8A",
    crumb: "نقل اثاث ابوظبي",
    kind: "location",
    serviceType: "نقل اثاث",
    area: { "@type": "City", name: "أبوظبي", alternateName: "Abu Dhabi" },
  },
  sharjah: {
    slug: "%D9%86%D9%82%D9%84-%D8%A3%D8%AB%D8%A7%D8%AB-%D8%A7%D9%84%D8%B4%D8%A7%D8%B1%D9%82%D8%A9",
    crumb: "نقل أثاث الشارقة",
    kind: "location",
    serviceType: "نقل اثاث",
    area: { "@type": "City", name: "الشارقة", alternateName: "Sharjah" },
  },
  ajman: {
    slug: "%D9%86%D9%82%D9%84-%D8%A7%D8%AB%D8%A7%D8%AB-%D8%B9%D8%AC%D9%85%D8%A7%D9%86",
    crumb: "نقل اثاث عجمان",
    kind: "location",
    serviceType: "نقل اثاث",
    area: { "@type": "City", name: "عجمان", alternateName: "Ajman" },
  },
  rasAlKhaimah: {
    slug: "%D9%86%D9%82%D9%84-%D8%A7%D8%AB%D8%A7%D8%AB-%D8%B1%D8%A7%D8%B3-%D8%A7%D9%84%D8%AE%D9%8A%D9%85%D8%A9",
    crumb: "نقل اثاث راس الخيمة",
    kind: "location",
    serviceType: "نقل اثاث",
    area: {
      "@type": "City",
      name: "رأس الخيمة",
      alternateName: "Ras Al Khaimah",
    },
  },
  alAin: {
    slug: "%D9%86%D9%82%D9%84-%D8%A7%D8%AB%D8%A7%D8%AB-%D8%A7%D9%84%D8%B9%D9%8A%D9%86",
    crumb: "نقل اثاث العين",
    kind: "location",
    serviceType: "نقل اثاث",
    area: { "@type": "City", name: "العين", alternateName: "Al Ain" },
  },
};

/** Absolute, canonical URL for a page key. Home has no trailing slash. */
export function pageUrl(key: PageKey): string {
  const { slug } = PAGES[key];
  return slug ? `${SITE_URL}/${slug}` : SITE_URL;
}

/** Turn a site-relative image path into an absolute, URL-safe URL. */
function absoluteImage(src: string): string {
  // Encode spaces and non-ASCII (Arabic) characters. Characters that are
  // already percent-encoded are left alone — no double-encoding.
  const enc = src
    .replace(/ /g, "%20")
    .replace(/[^\x00-\x7F]/g, (ch) => encodeURIComponent(ch));
  if (/^https?:\/\//i.test(enc)) return enc;
  return `${SITE_URL}${enc.startsWith("/") ? "" : "/"}${enc}`;
}

/* ---------------------------------------------------------------------------
 * 3. SITE-WIDE NODES
 * ------------------------------------------------------------------------- */

/**
 * ONE business node, typed MovingCompany.
 * MovingCompany is a subtype of LocalBusiness, which is a subtype of
 * Organization — so this single node legitimately acts as both the local
 * business AND the site publisher. Emitting a separate Organization alongside
 * it (what lmovers.ae does) creates two competing entities for one company.
 */
const organizationNode = {
  "@type": "MovingCompany",
  "@id": ORG_ID,
  name: "شركة الأمين نقل اثاث",
  legalName: "الأمين نقل اثاث",
  alternateName: ["Al Ameen Furniture Removers", "Al Ameen Movers "],
  url: SITE_URL,
  logo: { "@id": LOGO_ID },
  image: { "@id": LOGO_ID },
  telephone: "+971556461731",
  email: "alameenmovers.ae@gmail.com",
  foundingDate: "2013",
  priceRange: "AED 400+",
  currenciesAccepted: "AED",
  paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: "B17 Owned by Al Nasr Sports Club - Office No. 1, Oud Metha",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.2396194,
    longitude: 55.3086152,
  },
  areaServed: AREA_SERVED,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971556461731",
    contactType: "customer service",
    areaServed: "AE",
    availableLanguage: ["ar", "en"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "خدمات نقل الاثاث في دبي والإمارات",
    itemListElement: (
      [
        "houseMoving",
        "apartmentMoving",
        "villaMoving",
        "officeMoving",
        "packing",
        "assembly",
        "storage",
      ] as PageKey[]
    ).map((key) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        "@id": `${pageUrl(key)}/#service`,
        name: PAGES[key].crumb,
        url: pageUrl(key),
      },
    })),
  },
  ...(SAME_AS.length > 0 ? { sameAs: SAME_AS } : {}),
};

const logoNode = {
  "@type": "ImageObject",
  "@id": LOGO_ID,
  url: `${SITE_URL}/logo-sqaure.png`,
  contentUrl: `${SITE_URL}/logo-sqaure.png`,
  caption: "الأمين نقل اثاث دبي",
  inLanguage: "ar-AE",
};

/**
 * No SearchAction / potentialAction here on purpose: the site has no
 * /?s= search results page, and declaring an action that doesn't exist is a
 * false statement about the site. Add it only if you ship real site search.
 */
const webSiteNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: "الأمين نقل اثاث دبي",
  publisher: { "@id": ORG_ID },
  inLanguage: "ar-AE",
};

/* ---------------------------------------------------------------------------
 * 4. PER-PAGE GRAPH BUILDER
 * ------------------------------------------------------------------------- */

export interface PageSchemaInput {
  /** Which page this is. */
  page: PageKey;
  /** The page's <title> / H1 — pass your existing metadata value. */
  name: string;
  /** The page's meta description — pass your existing metadata value. */
  description: string;
  /**
   * Hero image for this page: site-relative ("/images/hero-villa.webp") or
   * absolute. Omit it and the page simply carries no image node — the
   * Organization still has its logo. Pass a real, existing file only.
   */
  image?: string;
  /** Optional real pixel dimensions of that image. */
  imageWidth?: number;
  imageHeight?: number;
}

export function buildPageSchema(input: PageSchemaInput) {
  const { page, name, description, image, imageWidth, imageHeight } = input;
  const def = PAGES[page];
  const url = pageUrl(page);
  const WEBPAGE_ID = `${url}/#webpage`;
  const BREADCRUMB_ID = `${url}/#breadcrumb`;
  const SERVICE_ID = `${url}/#service`;
  const PRIMARY_IMAGE_ID = `${url}/#primaryimage`;

  const graph: Record<string, unknown>[] = [
    organizationNode,
    logoNode,
    webSiteNode,
  ];

  /* ---- Optional per-page hero image ----------------------------------- */
  if (image) {
    graph.push({
      "@type": "ImageObject",
      "@id": PRIMARY_IMAGE_ID,
      url: absoluteImage(image),
      contentUrl: absoluteImage(image),
      ...(imageWidth ? { width: imageWidth } : {}),
      ...(imageHeight ? { height: imageHeight } : {}),
      inLanguage: "ar-AE",
    });
  }

  /* ---- WebPage --------------------------------------------------------- */
  const isHome = def.kind === "home";
  const webPage: Record<string, unknown> = {
    "@type": isHome ? ["WebPage", "CollectionPage"] : "WebPage",
    "@id": WEBPAGE_ID,
    url,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    breadcrumb: { "@id": BREADCRUMB_ID },
    inLanguage: "ar-AE",
    ...(image
      ? {
          primaryImageOfPage: { "@id": PRIMARY_IMAGE_ID },
          image: { "@id": PRIMARY_IMAGE_ID },
        }
      : {}),
  };

  if (def.kind === "service" || def.kind === "location") {
    webPage.mainEntity = { "@id": SERVICE_ID };
  }
  graph.push(webPage);

  /* ---- BreadcrumbList (dedicated, per page) ---------------------------- */
  const crumbs: {
    "@type": string;
    position: number;
    name: string;
    item?: string;
  }[] = [
    { "@type": "ListItem", position: 1, name: "الرئيسية", item: SITE_URL },
  ];

  if (!isHome) {
    // No Services / Areas hub pages exist, so breadcrumbs are 2 levels deep.
    // The last crumb carries NO `item` — that is correct per Google's spec.
    crumbs.push({ "@type": "ListItem", position: 2, name: def.crumb });
  }

  graph.push({
    "@type": "BreadcrumbList",
    "@id": BREADCRUMB_ID,
    itemListElement: crumbs,
  });

  /* ---- Service (service + location pages) ------------------------------ */
  if (def.kind === "service" || def.kind === "location") {
    graph.push({
      "@type": "Service",
      "@id": SERVICE_ID,
      name: def.crumb,
      serviceType: def.serviceType,
      url,
      provider: { "@id": ORG_ID },
      areaServed: def.area
        ? [def.area]
        : [{ "@type": "City", name: "دبي", alternateName: "Dubai" }],
      mainEntityOfPage: { "@id": WEBPAGE_ID },
      ...(description ? { description } : {}),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
