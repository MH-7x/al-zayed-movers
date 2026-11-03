import type { Metadata } from "next";

interface MetadataArgs {
  /** Unique <title> for the page. */
  title: string;
  /** Unique meta description for the page. */
  desc: string;
  /** Route path, leading slash, no trailing slash. Use "/" for the homepage. */
  path: string;
  /** Page-specific social image; falls back to DEFAULT_OG_IMAGE. */
  image?: {
    /** Public path, e.g. "/images/house-movers-dubai.jpg". */
    path: string;
    /** Defaults to the page title. */
    alt?: string;
  };
}

const siteUrl = process.env.SITE_URL?.replace(/\/$/, "");

const DEFAULT_OG_IMAGE = "/الزايد-نقل-اثاث-دبي.jpg";
export function MetadataTemplate({
  title,
  desc,
  path,
  image,
}: MetadataArgs): Metadata {
  // Without a configured origin, keep canonicals relative instead of guessing.
  const canonical = path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;
  const ogImage = {
    url: `${siteUrl}${image?.path ?? DEFAULT_OG_IMAGE}`,
    alt: image?.alt ?? title,
  };

  return {
    ...(siteUrl && { metadataBase: new URL(siteUrl) }),
    title,
    description: desc,
    alternates: { canonical },
    openGraph: {
      title,
      description: desc,
      url: canonical,
      siteName: "شركة الزايد نقل اثاث",
      locale: "ar_AE",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}
