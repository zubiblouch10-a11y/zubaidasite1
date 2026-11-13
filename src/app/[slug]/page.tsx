import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationPageTemplate from "@/components/LocationPageTemplate";
import {
  getLocationPage,
  locationMetadata,
  locationPages,
} from "@/lib/locationPages";

// The original seven locations keep their own static routes, which take
// precedence over this dynamic segment. This route serves every additional
// location page (Pakistan cities + worldwide markets) from the same data.
const staticSlugs = new Set([
  "local-seo-london",
  "local-seo-dubai",
  "local-seo-saudi-arabia",
  "local-seo-pakistan",
  "local-seo-canada",
  "local-seo-uk",
  "local-seo-usa",
]);

export const dynamicParams = false;

export function generateStaticParams() {
  return locationPages
    .filter((location) => !staticSlugs.has(location.slug))
    .map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationPage(slug);
  if (!location || staticSlugs.has(slug)) return {};
  return locationMetadata(location);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationPage(slug);
  if (!location || staticSlugs.has(slug)) notFound();
  return <LocationPageTemplate location={location} />;
}
