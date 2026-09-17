import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getServicePage, servicePageMetadata } from "@/lib/servicePages";

const service = getServicePage("business-growth-strategy")!;

export const metadata = servicePageMetadata(service);

export default function Page() {
  return <ServicePageTemplate service={service} />;
}
