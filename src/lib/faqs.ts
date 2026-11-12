export type Faq = { question: string; answer: string };

const faqs: Record<string, Faq[]> = {
  home: [
    {
      question: "What does Zubaida Digital do?",
      answer:
        "Zubaida Digital is a local SEO and digital marketing agency. We help local businesses get more customers from Google with Google Business Profile optimization, local SEO, social media marketing, and e-commerce growth.",
    },
    {
      question: "Which areas does Zubaida Digital serve?",
      answer:
        "We work with businesses in Pakistan, Dubai and the UAE, London and the UK, and Saudi Arabia (Riyadh, Jeddah and Dammam). All work is done online, so your business can be in any city in these markets.",
    },
    {
      question: "How can local SEO help my business get more customers?",
      answer:
        "When people nearby search for your service, local SEO helps your business appear in Google Maps and the top local results. That visibility turns into more calls, direction requests, bookings and sales from customers who are ready to buy.",
    },
    {
      question: "Do you optimize Google Business Profiles?",
      answer:
        "Yes. We set up, verify and fully optimize Google Business Profiles — categories, services, photos, posts and reviews — so your business can rank in the Google Maps 3-pack and stand out against competitors.",
    },
    {
      question: "How much does local SEO cost?",
      answer:
        "The cost depends on your market, your competition and how much work your online presence needs. Book a free consultation or message us on WhatsApp and we will review your current presence and give you a clear quote before you commit to anything.",
    },
    {
      question: "How do I get started with Zubaida Digital?",
      answer:
        "Message us on WhatsApp at 0313 0071224 or book a free consultation on our booking page. We will look at your current Google presence and tell you exactly what to fix first.",
    },
  ],
  "google-business-profile-optimization": [
    {
      question: "What is Google Business Profile optimization?",
      answer:
        "It is the process of completing and improving your Google Business Profile — categories, services, description, photos, posts, and Q&A — so Google can match your business to nearby searches and show it in Google Maps and the local 3-pack.",
    },
    {
      question: "Can you help if my Google Business Profile is unverified or suspended?",
      answer:
        "Yes. We handle new profile setup and verification, and we help fix common suspension and edit issues so your listing can start appearing in local results again.",
    },
    {
      question: "How long does it take to rank in Google Maps?",
      answer:
        "Rankings depend on your competition, category, and location, so we don't promise fixed timelines. Most profile improvements are live within days, and ranking gains build over the following weeks as Google re-evaluates your listing.",
    },
  ],
  "local-seo-services": [
    {
      question: "What is included in your local SEO services?",
      answer:
        "On-page optimization, a technical SEO audit, keyword research for your city and services, local citation building, and Google Business Profile support — all aimed at ranking you for searches your nearby customers actually make.",
    },
    {
      question: "What is the difference between local SEO and regular SEO?",
      answer:
        "Regular SEO aims to rank a website broadly, while local SEO focuses on searches with local intent, such as 'near me' or a city name, and relies heavily on your Google Business Profile, reviews, and consistent business listings.",
    },
    {
      question: "Do you offer local SEO for small businesses?",
      answer:
        "Yes. We work with small local businesses as well as growing brands, and tailor the plan to your market, budget, and goals.",
    },
  ],
  "social-media-marketing": [
    {
      question: "Which social media platforms do you manage?",
      answer:
        "We plan and run campaigns on Meta (Facebook and Instagram), TikTok, Pinterest, and YouTube, and choose the mix that fits where your customers spend their time.",
    },
    {
      question: "Do you create the content as well as run the ads?",
      answer:
        "Yes. We build content calendars, produce on-brand posts, and set up and optimize paid campaigns so organic and paid efforts work together.",
    },
    {
      question: "How do you measure social media results?",
      answer:
        "We track reach, engagement, leads, and sales attributed to each channel, and adjust the strategy monthly based on what is actually performing.",
    },
  ],
  "ecommerce-marketing": [
    {
      question: "What does e-commerce marketing include?",
      answer:
        "Storefront and product page optimization, paid and organic traffic campaigns, retargeting, email and abandoned-cart flows, and reporting focused on sales growth and customer acquisition cost.",
    },
    {
      question: "Which e-commerce platforms do you work with?",
      answer:
        "We focus on the marketing side of your store — traffic, conversion, and retention — so the approach applies across the popular storefront platforms. Contact us with your platform and we'll confirm the fit.",
    },
    {
      question: "How can you lower my customer acquisition cost?",
      answer:
        "By improving conversion rates on your store, tightening ad targeting, and retaining customers through email and retargeting, so each sale costs less to win.",
    },
  ],
  "content-marketing-reputation-management": [
    {
      question: "What is online reputation management?",
      answer:
        "It is monitoring and improving how your business appears online — encouraging genuine customer reviews, responding professionally to feedback, and publishing trustworthy content so people see you as a credible choice.",
    },
    {
      question: "Can you remove negative reviews?",
      answer:
        "We can't delete honest reviews. We help you respond well, report reviews that break platform policies, and build a steady stream of genuine positive reviews that reflects your real service.",
    },
    {
      question: "What kind of content do you create?",
      answer:
        "Website copy, blog and service content, case studies, testimonials, FAQs, and social posts — all written to build trust and support your search visibility.",
    },
  ],
  "business-growth-strategy": [
    {
      question: "What is a business growth strategy?",
      answer:
        "A data-driven plan that aligns your channels — local SEO, social media, ads, and content — around measurable goals such as leads, bookings, or sales, with a clear roadmap for each stage.",
    },
    {
      question: "Do you help with lead generation?",
      answer:
        "Yes. We design lead generation systems that turn traffic into qualified enquiries, including landing pages, tracking, and follow-up processes.",
    },
    {
      question: "Who is business development and strategy for?",
      answer:
        "Local businesses, online stores, and service providers who already spend on marketing, or plan to, and want every channel working toward one clear goal.",
    },
  ],
  "local-seo-london": [
    {
      question: "Do you offer local SEO for businesses in London?",
      answer:
        "Yes. We optimize Google Business Profiles and local search visibility for London businesses, including targeting boroughs, neighbourhoods, and postcodes.",
    },
    {
      question: "Why is local SEO important in London?",
      answer:
        "London has thousands of businesses competing for the same searches, so a well-optimized Google Business Profile and strong local signals are what get you into the Maps 3-pack ahead of competitors.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps.",
    },
    {
      question: "How long does local SEO take to show results in London?",
      answer:
        "Most businesses start seeing movement in a few weeks, with stronger Maps and local rankings building over the following months. Competitive London categories take longer, which is why consistent profile activity and reviews matter.",
    },
    {
      question: "Do you work with businesses outside London in the UK?",
      answer:
        "Yes. Everything is done online, so we support businesses across the UK, not only in London.",
    },
  ],
  "local-seo-dubai": [
    {
      question: "Do you offer local SEO in Dubai and the UAE?",
      answer:
        "Yes. We help Dubai and UAE businesses rank in Google Maps and local search, with strategy suited to an English and Arabic speaking audience.",
    },
    {
      question: "Can you help with Google Business Profile for a Dubai business?",
      answer:
        "Yes. We set up, verify, and optimize your listing so customers searching in Dubai can find and contact you.",
    },
    {
      question: "Do you also run social media and e-commerce marketing in the UAE?",
      answer:
        "Yes. Alongside local SEO we offer social media marketing, e-commerce growth, and lead generation for UAE brands.",
    },
    {
      question: "How long does it take to rank in Google Maps in Dubai?",
      answer:
        "A new or unoptimized profile usually needs a few weeks of consistent work before rankings move, and competitive Dubai categories build over months. The businesses that win are the ones with complete profiles, regular posts and a steady flow of genuine reviews.",
    },
    {
      question: "Can you help a new business in Dubai get its first customers from Google?",
      answer:
        "Yes. We set up your Google Business Profile correctly from day one, build your local SEO foundation, and promote your services so nearby customers can find and contact you.",
    },
  ],
  "local-seo-saudi-arabia": [
    {
      question: "Which Saudi cities do you support?",
      answer:
        "We work with businesses in Riyadh, Jeddah, and Dammam, and can support other Saudi cities on request.",
    },
    {
      question: "Do you offer Google Business Profile optimization in Saudi Arabia?",
      answer:
        "Yes. We optimize your listing so customers searching nearby in Google Maps and local search can find your business.",
    },
    {
      question: "Can you manage reviews and reputation for a Saudi business?",
      answer:
        "Yes. We help you collect genuine reviews and respond to feedback so your business builds trust in local search.",
    },
    {
      question: "Do you offer social media marketing for Saudi businesses?",
      answer:
        "Yes. Alongside local SEO we run social media and content marketing tailored to the Saudi audience, so your brand stays visible between searches.",
    },
    {
      question: "How do I get started if my business is in Saudi Arabia?",
      answer:
        "Message us on WhatsApp or book a free consultation. We will review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-pakistan": [
    {
      question: "Do you offer local SEO in Pakistan?",
      answer:
        "Yes. We help businesses across Pakistan, including Bhakkar and Gujjar Khan, get found on Google Maps and local search.",
    },
    {
      question: "Is local SEO useful for businesses in smaller cities and towns?",
      answer:
        "Very much. Many local businesses in smaller cities are still missing from Google Maps, so a well-optimized profile can bring in customers your competitors aren't reaching.",
    },
    {
      question: "How do I contact Zubaida Digital in Pakistan?",
      answer:
        "Call or WhatsApp 0313 0071224 or 0370 1167119, or book a free consultation on our booking page.",
    },
    {
      question: "Can you help my business appear on Google Maps if it is not listed yet?",
      answer:
        "Yes. We create and verify your Google Business Profile from scratch, add the right categories, services and photos, and set it up so customers in your city can find and call you.",
    },
    {
      question: "How much does local SEO cost in Pakistan?",
      answer:
        "It depends on your city, your category and how much competition you face. Our packages are built to be affordable for growing local businesses — book a free consultation and we will give you a clear quote for your business.",
    },
  ],
  "local-seo-canada": [
    {
      question: "Do you offer local SEO for businesses in Canada?",
      answer:
        "Yes. We help businesses across Canada, including Toronto, Vancouver, Calgary and Montreal, get found on Google Maps and local search. Everything is done online, so we can work with you wherever in Canada you are based.",
    },
    {
      question: "Can you help with Google Business Profile for a Canadian business?",
      answer:
        "Yes. We set up, verify and optimize your listing with the right categories, services and photos, so customers searching nearby in Canada can find and contact you.",
    },
    {
      question: "Do you work with businesses in smaller Canadian cities and towns?",
      answer:
        "Yes, and smaller markets are often a big opportunity: competition for the Maps 3-pack is lower, so a well-optimized profile can start bringing in customers sooner.",
    },
    {
      question: "Can you support businesses that serve English and French speaking customers?",
      answer:
        "Yes. We tailor local SEO and content strategy for English and French speaking audiences, which matters for businesses serving Quebec and bilingual communities.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-uk": [
    {
      question: "Do you offer local SEO across the UK, not just London?",
      answer:
        "Yes. We work with businesses across England, Scotland and Wales — including Manchester, Birmingham, Leeds and Glasgow — and everything is done online.",
    },
    {
      question: "Which UK cities do you cover?",
      answer:
        "Any city or town in the UK. London, Manchester, Birmingham, Leeds and Glasgow are common starting points, but our online service covers the whole country, including smaller towns where competition is lower.",
    },
    {
      question: "Can you help if my business is not on Google Maps yet?",
      answer:
        "Yes. We create and verify your Google Business Profile from scratch, add the right categories, services and photos, and set it up so customers in your area can find and call you.",
    },
    {
      question: "How long does local SEO take to show results in the UK?",
      answer:
        "Most businesses start seeing movement within a few weeks, with stronger rankings building over the following months. Competitive cities take longer, which is why consistent profile activity and genuine reviews matter.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps.",
    },
  ],
  "local-seo-usa": [
    {
      question: "Do you offer local SEO for businesses in the USA?",
      answer:
        "Yes. We work with businesses in every US state, fully online — from New York and Los Angeles to Chicago, Houston and smaller cities and towns.",
    },
    {
      question: "Can you help with Google Business Profile for a US business?",
      answer:
        "Yes. We set up, verify and optimize your listing so your business can compete for the Google Maps 3-pack and turn 'near me' searches into calls and bookings.",
    },
    {
      question: "Which US cities do you support?",
      answer:
        "All of them. New York, Los Angeles, Chicago and Houston are examples, not limits — if your customers search for you on Google, we can build your local presence.",
    },
    {
      question: "Do you build citations and manage reviews for US businesses?",
      answer:
        "Yes. We build consistent listings on major US directories and help you collect genuine reviews and respond to feedback, which builds the trust signals local rankings depend on.",
    },
    {
      question: "How do I get started from the USA?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
};

export function getFaqs(slug: string): Faq[] {
  return faqs[slug] ?? [];
}
