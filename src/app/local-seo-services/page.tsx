import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getServicePage, servicePageMetadata } from "@/lib/servicePages";

const service = getServicePage("local-seo-services")!;

export const metadata = servicePageMetadata(service);

export default function Page() {
  return <ServicePageTemplate service={service} />;
}
