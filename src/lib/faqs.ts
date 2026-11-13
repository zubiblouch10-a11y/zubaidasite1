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
        "We work with businesses across Pakistan (Karachi, Lahore, Islamabad and more), the UK, USA, Canada, Australia, New Zealand, the UAE, Saudi Arabia, Ireland, Germany, the Netherlands and Singapore. All work is done online, so your business can be in any city in these markets.",
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
  "local-seo-karachi": [
    {
      question: "Do you offer local SEO services in Karachi?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Karachi — including Clifton, DHA, Gulshan-e-Iqbal, North Nazimabad, Saddar and PECHS. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Karachi?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Karachi business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Which Karachi businesses benefit most from local SEO?",
      answer:
        "Any business customers look for nearby: restaurants and cafes, dental and medical clinics, salons, car wash and detailing services, real estate, home services and retail shops. In Karachi the businesses in the Maps 3-pack take most of the calls — local SEO is how you get into that pack.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Karachi?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-lahore": [
    {
      question: "Do you offer local SEO services in Lahore?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Lahore — including DHA, Gulberg, Johar Town, Model Town, Bahria Town and Wapda Town. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Lahore?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Lahore business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Why do Lahore businesses need a local SEO expert?",
      answer:
        "Lahore customers compare options on Google first — ratings, photos and how complete your profile looks decide who gets the call. A local SEO expert makes sure your business shows up first and looks like the obvious choice.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Lahore?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-islamabad": [
    {
      question: "Do you offer local SEO services in Islamabad?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Islamabad — including F-6, F-7, F-11, G-9, Blue Area, Bahria Town and DHA Phase 2. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Islamabad?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Islamabad business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Can local SEO help a new Islamabad business?",
      answer:
        "Yes — new businesses in Islamabad can compete quickly because local rankings depend on how well your profile is optimized, not just how old your business is. A complete profile with the right categories, services and early genuine reviews can reach the Maps pack fast.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Islamabad?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-rawalpindi": [
    {
      question: "Do you offer local SEO services in Rawalpindi?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Rawalpindi — including Saddar, Commercial Market, Bahria Town, DHA, Satellite Town and Chaklala. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Rawalpindi?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Rawalpindi business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Is local SEO worth it for a Rawalpindi shop or service?",
      answer:
        "Yes — Rawalpindi's online competition is low, so a properly optimized profile can rank quickly and keep bringing calls without paid ads. For many local businesses it is the cheapest customer channel they have.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Rawalpindi?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-faisalabad": [
    {
      question: "Do you offer local SEO services in Faisalabad?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Faisalabad — including Eden Gardens, Madina Town, Gulberg, Peoples Colony and D Ground area. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Faisalabad?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Faisalabad business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Can you help Faisalabad manufacturers too?",
      answer:
        "Yes. Alongside local services, we help Faisalabad manufacturers and exporters build a credible Google presence — a complete profile and website signals make it easier for buyers to find and trust your business.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Faisalabad?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-multan": [
    {
      question: "Do you offer local SEO services in Multan?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Multan — including Bosan Road, Gulgasht Colony, Multan Cantt, Old City and Shah Rukn-e-Alam area. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Multan?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Multan business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Is Multan's online competition really low?",
      answer:
        "Compared with Lahore or Karachi, yes — most Multan businesses have incomplete Google profiles. That means a well-optimized business can reach the top local results faster and hold the position.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Multan?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-peshawar": [
    {
      question: "Do you offer local SEO services in Peshawar?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Peshawar — including University Town, Hayatabad, Saddar, Peshawar Cantt and Ring Road. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Peshawar?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Peshawar business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Which Peshawar businesses get the most from local SEO?",
      answer:
        "Clinics and hospitals, academies and education services, restaurants and food outlets, car services and retail shops — any business whose customers are nearby and searching with intent to visit or call.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Peshawar?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-hyderabad-pakistan": [
    {
      question: "Do you offer local SEO services in Hyderabad?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Hyderabad — including Latifabad, Qasimabad, Saddar, Hirabad and Auto Bhan Road. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Hyderabad?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Hyderabad business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Can a small Hyderabad business rank on Google Maps?",
      answer:
        "Yes — Maps rankings are local, so a small business with a complete, well-reviewed profile can outrank bigger competitors nearby. Hyderabad's low online competition makes that even more achievable.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Hyderabad?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-sialkot": [
    {
      question: "Do you offer local SEO services in Sialkot?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Sialkot — including Sialkot Cantt, Sambrial, Daska Road, Kashmir Road and the industrial estates. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Sialkot?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Sialkot business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "How does local SEO help a Sialkot exporter?",
      answer:
        "Buyers vet suppliers on Google before making contact. A verified, complete and well-reviewed profile — matched with consistent listings — makes your factory look established and reachable, which supports every export enquiry.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Sialkot?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-gujranwala": [
    {
      question: "Do you offer local SEO services in Gujranwala?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Gujranwala — including Satellite Town, Model City, Wapda Town, G.T. Road and Civil Lines. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Gujranwala?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Gujranwala business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Do Gujranwala manufacturers need Google profiles?",
      answer:
        "Yes — traders and buyers search Google for suppliers by city and product. A complete profile with your categories, photos and reviews puts your business in front of them instead of a competitor's.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Gujranwala?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-quetta": [
    {
      question: "Do you offer local SEO services in Quetta?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Quetta — including Jinnah Road, Satellite Town, Samungli Road, Brewery Road and Quetta Cantt. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Quetta?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Quetta business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Why start local SEO in Quetta now?",
      answer:
        "Because the first businesses to optimize usually hold the top spots for a long time. In Quetta the cost of ranking is low today — that advantage disappears once competitors start.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Quetta?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-bahawalpur": [
    {
      question: "Do you offer local SEO services in Bahawalpur?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Bahawalpur — including Satellite Town, Model Town, Civil Lines, University Chowk and Yazman Road. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Bahawalpur?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Bahawalpur business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Which Bahawalpur businesses should start first?",
      answer:
        "Clinics, academies and schools, restaurants, salons and retail shops gain the fastest — their customers already search locally, and few competitors have optimized profiles yet.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Bahawalpur?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-sukkur": [
    {
      question: "Do you offer local SEO services in Sukkur?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Sukkur — including New Sukkur, Old Sukkur, Rohri, Military Road and Airport Road. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Sukkur?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Sukkur business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Can one profile cover Sukkur and Rohri customers?",
      answer:
        "Yes — a well-built profile with the right service areas shows up for searches across the Sukkur–Rohri area, so one strong listing can serve both sides of the river.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Sukkur?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-abbottabad": [
    {
      question: "Do you offer local SEO services in Abbottabad?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Abbottabad — including Main Mansehra Road, Supply, Mandian, Jinnahabad and the Galyat route. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Abbottabad?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Abbottabad business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "How do Abbottabad hotels and guest houses get more bookings from Google?",
      answer:
        "Travellers pick from the top Maps results with good photos and recent reviews. An optimized profile with the right categories and a steady flow of genuine reviews puts your property in that shortlist.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Abbottabad?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-mardan": [
    {
      question: "Do you offer local SEO services in Mardan?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Mardan — including Mardan city center, Sheikh Maltoon Town, Nowshera Road and College Chowk area. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Mardan?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Mardan business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Is Mardan too small for local SEO to matter?",
      answer:
        "No — local SEO works best exactly in markets like Mardan, where customers search on mobile and few businesses have optimized. Rankings come faster and cost less to hold.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Mardan?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-rahim-yar-khan": [
    {
      question: "Do you offer local SEO services in Rahim Yar Khan?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Rahim Yar Khan — including Rahim Yar Khan city, Sadiqabad Road, Khanpur Road and the industrial area. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Rahim Yar Khan?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Rahim Yar Khan business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Can local SEO bring customers from outside the city?",
      answer:
        "Yes — service-area settings and the right categories let your profile appear for searches across the district's towns, not just inside Rahim Yar Khan city.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Rahim Yar Khan?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-sheikhupura": [
    {
      question: "Do you offer local SEO services in Sheikhupura?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Sheikhupura — including Sheikhupura city, Civil Lines, Housing Colony, Lahore Road and the industrial estates. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Sheikhupura?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Sheikhupura business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Do Sheikhupura businesses show up in Lahore searches?",
      answer:
        "Businesses near the boundary can — with correct service areas and categories, your profile can appear for relevant searches from both cities, doubling your reach.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Sheikhupura?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-larkana": [
    {
      question: "Do you offer local SEO services in Larkana?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Larkana — including Larkana city, Bakrani Road, VIP Road, Station Road and Empire Road area. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Larkana?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Larkana business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Why is Larkana a good market to start local SEO?",
      answer:
        "Search demand exists — customers use Google daily — but almost no local business has optimized. Early movers rank quickly and tend to stay on top.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Larkana?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-kasur": [
    {
      question: "Do you offer local SEO services in Kasur?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Kasur — including Kasur city, Khara Road, Ferozepur Road and the food street areas. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Kasur?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Kasur business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Can Kasur food businesses really get customers from Google?",
      answer:
        "Yes — people travel to Kasur for its food and search Google on the way. The businesses in the Maps pack with strong photos and reviews take most of those visitors.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Kasur?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-dera-ghazi-khan": [
    {
      question: "Do you offer local SEO services in Dera Ghazi Khan?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Dera Ghazi Khan — including Dera Ghazi Khan city, Jampur Road, Multan Road, Block areas and the bypass. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Dera Ghazi Khan?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Dera Ghazi Khan business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Who searches for Dera Ghazi Khan businesses on Google?",
      answer:
        "Local residents, district villagers coming into the city, and travellers passing through — all of them use Maps to choose where to stop, buy or book.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Dera Ghazi Khan?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-australia": [
    {
      question: "Do you offer local SEO services in Australia?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Australia — including Sydney, Melbourne, Brisbane, Perth, Adelaide and regional towns. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Australia?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Australia business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Can you work with an Australian business remotely?",
      answer:
        "Completely. Local SEO and Google Business Profile management are done online — we optimize your profile, build citations and manage reviews while you run your business, with updates and reports sent on Australian time.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Australia?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-new-zealand": [
    {
      question: "Do you offer local SEO services in New Zealand?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in New Zealand — including Auckland, Wellington, Christchurch, Hamilton, Tauranga and regional towns. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in New Zealand?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your New Zealand business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Is local SEO worth it for a small New Zealand town?",
      answer:
        "Often even more than in a big city — with few optimized competitors, a complete profile with genuine reviews can put a small-town business at the top of every local search that matters.",
    },
    {
      question: "Do you also work with businesses in smaller areas around New Zealand?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-ireland": [
    {
      question: "Do you offer local SEO services in Ireland?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Ireland — including Dublin, Cork, Galway, Limerick, Waterford and towns across Ireland. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Ireland?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Ireland business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Do you work with Irish trades and service businesses?",
      answer:
        "Yes — plumbers, electricians, builders, clinics, salons and retailers are exactly the businesses local SEO helps most, because their customers search with a town or suburb name plus the service.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Ireland?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-germany": [
    {
      question: "Do you offer local SEO services in Germany?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Germany — including Berlin, Munich, Hamburg, Frankfurt, Cologne and Düsseldorf. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Germany?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Germany business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Can you help a business in Germany that serves English-speaking customers?",
      answer:
        "Yes — that is exactly our focus in Germany. We optimize your profile and content for the English searches your international customers actually make, and handle everything with you in English.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Germany?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-netherlands": [
    {
      question: "Do you offer local SEO services in Netherlands?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Netherlands — including Amsterdam, Rotterdam, Utrecht, Eindhoven and The Hague. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Netherlands?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Netherlands business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Do Dutch customers really search in English?",
      answer:
        "Many do — especially in Amsterdam and the international business community. Businesses that optimize for both English and local searches capture demand their competitors miss.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Netherlands?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-singapore": [
    {
      question: "Do you offer local SEO services in Singapore?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Singapore — including Orchard, Tampines, Jurong, Woodlands, Ang Mo Kio and island-wide. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Singapore?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Singapore business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "How competitive is local SEO in Singapore?",
      answer:
        "Very — which is exactly why it pays. In a dense city-state, the businesses in the Maps 3-pack are visible to the whole island; a fully optimized profile is the difference between being found and being invisible.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Singapore?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-uae": [
    {
      question: "Do you offer local SEO services in United Arab Emirates?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in United Arab Emirates — including Dubai, Abu Dhabi, Sharjah, Ajman and the Northern Emirates. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in United Arab Emirates?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your United Arab Emirates business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Do you already work with businesses in the UAE?",
      answer:
        "Yes — we support UAE companies in car lift and transport services, tourism and local services with Google Business Profile management and daily branded posting. That hands-on UAE experience goes into every new client's strategy.",
    },
    {
      question: "Do you also work with businesses in smaller areas around United Arab Emirates?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-manchester": [
    {
      question: "Do you offer local SEO services in Manchester?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Manchester — including Manchester city center, Salford, Didsbury, Chorlton, Altrincham and Stockport. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Manchester?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Manchester business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Can a Manchester business outrank bigger competitors locally?",
      answer:
        "Yes — Maps rankings are earned street by street. A complete profile with the right categories, photos and a steady flow of genuine reviews regularly beats larger competitors in the same area.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Manchester?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-birmingham": [
    {
      question: "Do you offer local SEO services in Birmingham?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Birmingham — including Birmingham city center, Jewellery Quarter, Digbeth, Edgbaston, Solihull and Sutton Coldfield. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Birmingham?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Birmingham business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Which Birmingham businesses benefit most from local SEO?",
      answer:
        "Trades, restaurants and takeaways, clinics, salons, car services and professional firms — any business whose customers search with a Birmingham area name plus the service they need.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Birmingham?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-leeds": [
    {
      question: "Do you offer local SEO services in Leeds?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Leeds — including Leeds city center, Headingley, Horsforth, Roundhay, Chapel Allerton and Morley. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Leeds?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Leeds business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "How fast can a Leeds business see results from local SEO?",
      answer:
        "Profile improvements show in local visibility within weeks in most Leeds areas, with stronger gains as reviews and citations build. We report progress clearly so you can see rankings and calls moving.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Leeds?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-glasgow": [
    {
      question: "Do you offer local SEO services in Glasgow?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Glasgow — including Glasgow City Centre, West End, Southside, East End, Paisley and Clydebank. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Glasgow?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Glasgow business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Do you work with businesses elsewhere in Scotland too?",
      answer:
        "Yes — Glasgow is the largest market, but we support businesses across Scotland, including Edinburgh, Aberdeen and Dundee, all handled online.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Glasgow?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-new-york": [
    {
      question: "Do you offer local SEO services in New York?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in New York — including Manhattan, Brooklyn, Queens, the Bronx, Staten Island and Long Island. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in New York?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your New York business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "How does a small New York business compete in local search?",
      answer:
        "By winning its own neighbourhood first. Maps results are hyper-local, so a fully optimized profile with strong reviews can top the results on your own blocks — no citywide budget required.",
    },
    {
      question: "Do you also work with businesses in smaller areas around New York?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-los-angeles": [
    {
      question: "Do you offer local SEO services in Los Angeles?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Los Angeles — including Downtown LA, Hollywood, Santa Monica, Pasadena, Glendale and the San Fernando Valley. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Los Angeles?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Los Angeles business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Why does LA need neighbourhood-level SEO?",
      answer:
        "Nobody crosses LA for a routine service — customers pick what's near them. Targeting the neighbourhoods you serve puts your business in front of the searches that actually convert.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Los Angeles?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-chicago": [
    {
      question: "Do you offer local SEO services in Chicago?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Chicago — including The Loop, River North, Logan Square, Pilsen, Evanston and Oak Park. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Chicago?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Chicago business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Can you help suburban Chicago businesses too?",
      answer:
        "Yes — suburbs are often the best opportunity in Chicagoland local SEO, with strong search demand and less optimized competition than downtown.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Chicago?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-houston": [
    {
      question: "Do you offer local SEO services in Houston?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Houston — including Downtown Houston, the Heights, Katy, Sugar Land, Pearland and Pasadena. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Houston?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Houston business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Which Houston businesses gain most from local SEO?",
      answer:
        "Home services, medical and dental clinics, restaurants, car services and retailers — any business Houstonians search for by neighbourhood plus service.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Houston?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-toronto": [
    {
      question: "Do you offer local SEO services in Toronto?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Toronto — including Downtown Toronto, North York, Scarborough, Etobicoke, Mississauga and Vaughan. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Toronto?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Toronto business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Do you cover the wider GTA, not just downtown Toronto?",
      answer:
        "Yes — Mississauga, Brampton, Vaughan, Markham and Scarborough are core parts of our Toronto-area targeting, each with its own local search behaviour.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Toronto?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-vancouver": [
    {
      question: "Do you offer local SEO services in Vancouver?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Vancouver — including Downtown Vancouver, Kitsilano, Burnaby, Richmond, Surrey and North Vancouver. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Vancouver?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Vancouver business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Can one strategy cover Vancouver and the suburbs?",
      answer:
        "Yes — we structure profiles and service areas so your business appears across the Metro Vancouver communities you serve, not just your exact address area.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Vancouver?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
  "local-seo-sydney": [
    {
      question: "Do you offer local SEO services in Sydney?",
      answer:
        "Yes. Zubaida Digital works as a local SEO expert for businesses in Sydney — including Sydney CBD, Inner West, Parramatta, North Shore, Sutherland Shire and the Hills District. We optimize your Google Business Profile and local SEO so customers searching nearby find and contact you. Everything is done online, so getting started is simple wherever you are based.",
    },
    {
      question: "Can you optimize my Google Business Profile in Sydney?",
      answer:
        "Yes. We set up, verify and fully optimize your listing — the right categories, services, photos and details — so your Sydney business shows up in Google Maps and the local 3-pack when customers search for what you offer.",
    },
    {
      question: "Why is suburb-level targeting so important in Sydney?",
      answer:
        "Sydneysiders search by suburb, not by city — 'dentist Parramatta' or 'cafe Newtown'. Businesses optimized for the suburbs they serve capture that demand; generic city pages miss it.",
    },
    {
      question: "Do you also work with businesses in smaller areas around Sydney?",
      answer:
        "Yes — and smaller areas are often the biggest opportunity, because competition for the Maps 3-pack is lower. A well-optimized profile in a smaller market can start bringing in customers sooner, and the same work strengthens your presence across the whole region.",
    },
    {
      question: "How do I get started?",
      answer:
        "Message us on WhatsApp or book a free consultation. We'll review your current Google presence and recommend the next steps for your city and category.",
    },
  ],
};

export function getFaqs(slug: string): Faq[] {
  return faqs[slug] ?? [];
}
