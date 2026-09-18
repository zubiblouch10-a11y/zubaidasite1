import Image from "next/image";

export default function SiteBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-bg" aria-hidden="true">
      <Image
        src="/founder.jpg"
        alt="Zubaida, founder of Zubaida Digital, digital marketing and local SEO specialist"
        fill
        quality={40}
        sizes="100vw"
        className="scale-110 object-cover object-[78%_18%] opacity-0 blur-md saturate-[1.1] dark:opacity-[0.55]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-bg/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent to-bg" />
    </div>
  );
}
