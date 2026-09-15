import { site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink(`Hi ${site.name}, I have a quick question.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7"
    >
      <span className="animate-wa-ping absolute inset-0 rounded-full" aria-hidden="true" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-neon-green)] text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,0.6)] transition hover:scale-110">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
    </a>
  );
}
