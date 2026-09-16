import LocationPageTemplate from "@/components/LocationPageTemplate";
import { getLocationPage, locationMetadata } from "@/lib/locationPages";

const location = getLocationPage("local-seo-dubai")!;

export const metadata = locationMetadata(location);

export default function Page() {
  return <LocationPageTemplate location={location} />;
}
