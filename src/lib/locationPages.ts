import type { Metadata } from "next";
import { ogImage, site } from "@/lib/site";

export type LocationPage = {
  slug: string;
  flag: string;
  city: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  highlights: string[];
};

export const locationPages: LocationPage[] = [
  {
    slug: "local-seo-london",
    flag: "🇬🇧",
    city: "London",
    region: "London, United Kingdom",
    metaTitle: "Local SEO Expert in London, UK | Zubaida Digital",
    metaDescription:
      "Rank higher in Google Maps and local search across London. Google Business Profile optimization and local SEO for UK businesses by Zubaida Digital.",
    h1: "Local SEO Expert in London, United Kingdom",
    intro:
      "London is one of the most competitive local markets in the world, with thousands of businesses fighting for the same Google Maps 3-pack spots. Zubaida Digital helps London-based businesses — from local shops and clinics to service providers — optimize their Google Business Profile, build authentic local SEO signals, and turn nearby searches into paying customers.",
    highlights: [
      "Google Business Profile setup & optimization for London businesses",
      "Local keyword targeting for UK boroughs and postcodes",
      "Citation building and review management to boost local trust",
      "Ongoing local SEO support tailored to the UK market",
    ],
  },
  {
    slug: "local-seo-dubai",
    flag: "🇦🇪",
    city: "Dubai",
    region: "Dubai, United Arab Emirates",
    metaTitle: "Local SEO Expert in Dubai, UAE | Zubaida Digital",
    metaDescription:
      "Get found by customers searching in Dubai. Local SEO, GMB optimization and digital marketing for UAE businesses from Zubaida Digital.",
    h1: "Local SEO Expert in Dubai, UAE",
    intro:
      "Dubai's business landscape moves fast, and so does the competition for visibility on Google Maps and local search. Zubaida Digital works with businesses across Dubai to sharpen their Google Business Profile, strengthen local search rankings, and connect with customers actively searching for their services in the UAE. From car lift and transport companies to salons, clinics, car detailing studios and e-commerce brands, we turn Dubai searches into calls, bookings and sales.",
    highlights: [
      "Google Maps ranking optimization for Dubai-based businesses",
      "Local SEO strategy built for the UAE's bilingual (Arabic/English) audience",
      "Social media marketing to build brand presence across the Gulf",
      "E-commerce and lead-generation support for growing UAE brands",
    ],
  },
  {
    slug: "local-seo-saudi-arabia",
    flag: "🇸🇦",
    city: "Saudi Arabia",
    region: "Riyadh, Jeddah & Dammam, Saudi Arabia",
    metaTitle: "Local SEO Expert in Saudi Arabia (Riyadh, Jeddah) | Zubaida Digital",
    metaDescription:
      "Local SEO and Google Business Profile optimization for businesses in Riyadh, Jeddah, and Dammam. Get discovered by local customers with Zubaida Digital.",
    h1: "Local SEO Expert in Saudi Arabia",
    intro:
      "As Saudi Arabia's local business landscape grows alongside Vision 2030, standing out in local search matters more than ever. Zubaida Digital helps businesses in Riyadh, Jeddah, and Dammam optimize their Google Business Profile, build local SEO authority, and capture customers searching for their products and services nearby.",
    highlights: [
      "Google Business Profile optimization for Riyadh, Jeddah & Dammam",
      "Local SEO strategy built for Saudi Arabia's growing digital market",
      "Reputation and review management to build local trust",
      "Social media & content marketing tailored to the Saudi audience",
    ],
  },
  {
    slug: "local-seo-pakistan",
    flag: "🇵🇰",
    city: "Pakistan",
    region: "Karachi, Lahore, Islamabad & across Pakistan",
    metaTitle: "Local SEO Expert in Pakistan | Zubaida Digital",
    metaDescription:
      "Local SEO expert in Pakistan — Google Business Profile optimization and local SEO for businesses in Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad and across Pakistan, by Zubaida Digital.",
    h1: "Local SEO Expert in Pakistan",
    intro:
      "Many local businesses across Pakistan are still missing out on customers who search for them on Google every day. Zubaida Digital helps businesses in Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar and cities all over Pakistan — including Bhakkar and Gujjar Khan — claim and optimize their Google Business Profile, build genuine local SEO, and start showing up where it matters most: local search and Google Maps. Pick your city from the list below for its own dedicated page. From shops and clinics to car wash, detailing and home services, we build the local signals — accurate categories, real photos, genuine reviews and consistent listings — that turn 'near me' searches into phone calls.",
    highlights: [
      "Dedicated city pages for Karachi, Lahore, Islamabad & 17 more Pakistani cities",
      "Google Business Profile setup for businesses across Pakistan",
      "Local SEO for smaller cities and towns, not just metros",
      "Affordable digital marketing built for growing local businesses",
    ],
  },
  {
    slug: "local-seo-canada",
    flag: "🇨🇦",
    city: "Canada",
    region: "Toronto, Vancouver & across Canada",
    metaTitle: "Local SEO Expert in Canada | Zubaida Digital",
    metaDescription:
      "Rank in Google Maps and local search across Canada. Google Business Profile optimization and local SEO for Canadian businesses by Zubaida Digital.",
    h1: "Local SEO Expert in Canada",
    intro:
      "Canadian customers find local businesses through Google Maps and 'near me' searches every day, and the businesses in the Maps 3-pack take most of the calls. Zubaida Digital helps businesses across Canada — from Toronto, Vancouver and Calgary to Montreal and smaller towns — optimize their Google Business Profile, build strong local SEO signals, and turn nearby searches into paying customers. Everything is done online, so we can support your business wherever in Canada you are based.",
    highlights: [
      "Google Business Profile setup & optimization for Canadian businesses",
      "Local keyword targeting for Canadian cities and neighbourhoods",
      "Citation building and review management to boost local trust",
      "Local SEO strategy suited to English and French speaking audiences",
    ],
  },
  {
    slug: "local-seo-uk",
    flag: "🇬🇧",
    city: "United Kingdom",
    region: "London, Manchester, Birmingham & nationwide",
    metaTitle: "Local SEO Expert in the UK | Zubaida Digital",
    metaDescription:
      "Local SEO and Google Business Profile optimization for businesses across the UK — London, Manchester, Birmingham, Leeds and beyond, by Zubaida Digital.",
    h1: "Local SEO Expert in the United Kingdom",
    intro:
      "Across the United Kingdom, customers search Google before they visit a shop, book a service or choose a tradesperson — and most pick from the first few local results. Zubaida Digital helps UK businesses in London, Manchester, Birmingham, Leeds, Glasgow and towns across England, Scotland and Wales optimize their Google Business Profile, strengthen their local SEO, and get found ahead of competitors. Our service is fully online, so your business gets capital-city expertise wherever in the UK you are based.",
    highlights: [
      "Google Business Profile setup & optimization for businesses UK-wide",
      "Local keyword targeting for UK cities, boroughs and postcodes",
      "Citation building and review management to build local trust",
      "Local SEO support for smaller cities and towns, not just London",
    ],
  },
  {
    slug: "local-seo-usa",
    flag: "🇺🇸",
    city: "United States",
    region: "New York, Los Angeles, Chicago & nationwide",
    metaTitle: "Local SEO Expert in the USA | Zubaida Digital",
    metaDescription:
      "Rank in Google Maps and local search across the USA. Google Business Profile optimization and local SEO for American businesses by Zubaida Digital.",
    h1: "Local SEO Expert in the United States",
    intro:
      "The United States is the biggest local search market in the world — billions of 'near me' searches every month, and fierce competition for the Google Maps 3-pack in every city. Zubaida Digital helps US businesses optimize their Google Business Profile, build genuine local SEO authority, and turn local searches into calls, bookings and sales. We work fully online with businesses in New York, Los Angeles, Chicago, Houston and every state in between, so distance and time zones never get in the way.",
    highlights: [
      "Google Business Profile setup & optimization for US businesses",
      "Local keyword targeting for US cities and neighbourhoods",
      "Citation building on major US directories and review management",
      "Social media & e-commerce growth support for American brands",
    ],
  },
  {
    slug: "local-seo-karachi",
    flag: "🇵🇰",
    city: "Karachi",
    region: "Karachi, Sindh, Pakistan",
    metaTitle: "Local SEO Expert in Karachi | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Karachi? Zubaida Digital helps Karachi businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Karachi, Sindh, Pakistan",
    intro:
      "Karachi is Pakistan's largest city and its business capital — and one of the most competitive local search markets in the country. From Clifton and DHA to Gulshan, Nazimabad and Saddar, thousands of restaurants, clinics, salons, car services and shops are fighting for the same Google Maps 3-pack spots. Zubaida Digital helps Karachi businesses optimize their Google Business Profile, rank for the searches their customers actually type, and turn 'near me' searches into calls and bookings.",
    highlights: [
      "Google Business Profile setup & optimization for Karachi businesses",
      "Local keyword targeting for Karachi areas — Clifton, DHA, Gulshan, PECHS & more",
      "Review and citation building to grow trust in a crowded market",
      "Local SEO for English, Urdu and Roman Urdu search behaviour",
    ],
  },
  {
    slug: "local-seo-lahore",
    flag: "🇵🇰",
    city: "Lahore",
    region: "Lahore, Punjab, Pakistan",
    metaTitle: "Local SEO Expert in Lahore | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Lahore? Zubaida Digital helps Lahore businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Lahore, Punjab, Pakistan",
    intro:
      "Lahore is Pakistan's cultural capital and one of its biggest IT and business hubs — and its customers search Google before they buy anything. Businesses in DHA, Gulberg, Johar Town, Model Town and Bahria Town compete hard for local visibility. Zubaida Digital helps Lahore businesses claim the Google Maps 3-pack with optimized Google Business Profiles, strong local signals and genuine reviews, so nearby searches turn into customers.",
    highlights: [
      "Google Business Profile optimization for Lahore businesses",
      "Area-level keyword targeting — DHA, Gulberg, Johar Town, Model Town & more",
      "Food, retail, clinic and education-sector local SEO experience",
      "Review management that builds real local trust",
    ],
  },
  {
    slug: "local-seo-islamabad",
    flag: "🇵🇰",
    city: "Islamabad",
    region: "Islamabad, Pakistan",
    metaTitle: "Local SEO Expert in Islamabad | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Islamabad? Zubaida Digital helps Islamabad businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Islamabad, Pakistan",
    intro:
      "Islamabad's customers research carefully before they spend — and they start on Google. The capital's clinics, cafes, professional services, startups and salons across the F and G sectors, Blue Area and Bahria Town compete for a high-income audience that reads reviews and compares profiles. Zubaida Digital helps Islamabad businesses look established and rank at the top of local search with complete Google Business Profiles and strong local SEO.",
    highlights: [
      "Google Business Profile optimization for Islamabad sectors & Blue Area",
      "Local SEO for clinics, cafes, professional services and startups",
      "Review strategy for a research-driven, high-income audience",
      "Clean, trustworthy profiles that convert searches into enquiries",
    ],
  },
  {
    slug: "local-seo-rawalpindi",
    flag: "🇵🇰",
    city: "Rawalpindi",
    region: "Rawalpindi, Punjab, Pakistan",
    metaTitle: "Local SEO Expert in Rawalpindi | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Rawalpindi? Zubaida Digital helps Rawalpindi businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Rawalpindi, Punjab, Pakistan",
    intro:
      "Rawalpindi is Islamabad's twin city — but its local market is denser, older and far less optimized online. From Saddar and Commercial Market to Bahria Town and DHA, thousands of shops and services still rely on foot traffic while their customers search on Google. That gap is an opportunity: Zubaida Digital helps Rawalpindi businesses get found first with optimized Google Business Profiles and local SEO built for the city's bazaars and housing societies alike.",
    highlights: [
      "Google Business Profile setup & optimization for Rawalpindi businesses",
      "Targeting for Saddar, Commercial Market, Bahria Town & DHA areas",
      "Low-competition local keywords most competitors have missed",
      "Affordable local SEO built for shops and service businesses",
    ],
  },
  {
    slug: "local-seo-faisalabad",
    flag: "🇵🇰",
    city: "Faisalabad",
    region: "Faisalabad, Punjab, Pakistan",
    metaTitle: "Local SEO Expert in Faisalabad | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Faisalabad? Zubaida Digital helps Faisalabad businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Faisalabad, Punjab, Pakistan",
    intro:
      "Faisalabad powers Pakistan's textile industry, but its thousands of local businesses — clinics, wedding services, restaurants, retailers and the factories' own showrooms — are mostly invisible on Google. Customers in Eden Gardens, Madina Town, Gulberg and Peoples Colony search locally every day. Zubaida Digital helps Faisalabad businesses show up in those searches with optimized Google Business Profiles and practical local SEO.",
    highlights: [
      "Google Business Profile optimization for Faisalabad businesses",
      "Local SEO for textile, retail, clinic and wedding-service businesses",
      "Area targeting — Eden Gardens, Madina Town, Gulberg & more",
      "Profiles and reviews that turn local searches into visits",
    ],
  },
  {
    slug: "local-seo-multan",
    flag: "🇵🇰",
    city: "Multan",
    region: "Multan, Punjab, Pakistan",
    metaTitle: "Local SEO Expert in Multan | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Multan? Zubaida Digital helps Multan businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Multan, Punjab, Pakistan",
    intro:
      "Multan is South Punjab's commercial center, and its digital market is wide open. Businesses along Bosan Road, in Gulgasht Colony and around the old city serve customers from across the region — but very few have optimized their Google presence. Zubaida Digital helps Multan businesses get ahead of that curve with Google Business Profile optimization and local SEO that brings in calls from Multan and the towns around it.",
    highlights: [
      "Google Business Profile setup & optimization for Multan businesses",
      "First-mover advantage in a low-competition local market",
      "Targeting for Bosan Road, Gulgasht, Cantt & surrounding towns",
      "Local SEO for clinics, retail, food and service businesses",
    ],
  },
  {
    slug: "local-seo-peshawar",
    flag: "🇵🇰",
    city: "Peshawar",
    region: "Peshawar, Khyber Pakhtunkhwa, Pakistan",
    metaTitle: "Local SEO Expert in Peshawar | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Peshawar? Zubaida Digital helps Peshawar businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Peshawar, Khyber Pakhtunkhwa, Pakistan",
    intro:
      "Peshawar is Khyber Pakhtunkhwa's capital and a historic trade hub — and its customers now find clinics, food, education services and shops through Google, just like everywhere else. Businesses in University Town, Hayatabad and the old city compete for those searches. Zubaida Digital helps Peshawar businesses build a strong local presence with optimized Google Business Profiles, accurate listings and genuine reviews.",
    highlights: [
      "Google Business Profile optimization for Peshawar businesses",
      "Targeting for University Town, Hayatabad, Saddar & the old city",
      "Local SEO for clinics, education, food and retail businesses",
      "Review building that grows trust with local customers",
    ],
  },
  {
    slug: "local-seo-hyderabad-pakistan",
    flag: "🇵🇰",
    city: "Hyderabad",
    region: "Hyderabad, Sindh, Pakistan",
    metaTitle: "Local SEO Expert in Hyderabad | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Hyderabad? Zubaida Digital helps Hyderabad businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Hyderabad, Sindh, Pakistan",
    intro:
      "Hyderabad is Sindh's second city — a busy market of retailers, clinics, food businesses and services across Latifabad, Qasimabad and Saddar. Most of these businesses have never optimized their Google presence, so local search results are there for the taking. Zubaida Digital helps Hyderabad businesses claim them with complete Google Business Profiles and focused local SEO.",
    highlights: [
      "Google Business Profile optimization for Hyderabad businesses",
      "Targeting for Latifabad, Qasimabad, Saddar & Hirabad",
      "Low-competition local keywords with real search demand",
      "Local SEO priced for growing Sindh businesses",
    ],
  },
  {
    slug: "local-seo-sialkot",
    flag: "🇵🇰",
    city: "Sialkot",
    region: "Sialkot, Punjab, Pakistan",
    metaTitle: "Local SEO Expert in Sialkot | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Sialkot? Zubaida Digital helps Sialkot businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Sialkot, Punjab, Pakistan",
    intro:
      "Sialkot makes products the whole world buys — sports goods, surgical instruments, gloves and apparel. Its exporters need to look credible when international buyers search for them, and its local clinics, retailers and services need local customers too. Zubaida Digital helps Sialkot businesses on both fronts: a strong Google Business Profile and local SEO that builds trust at home and abroad.",
    highlights: [
      "Google Business Profile optimization for Sialkot exporters & local businesses",
      "Credibility signals international buyers check before they enquire",
      "Local SEO for clinics, retail and services across Sialkot",
      "Profiles in clear English that represent your business properly",
    ],
  },
  {
    slug: "local-seo-gujranwala",
    flag: "🇵🇰",
    city: "Gujranwala",
    region: "Gujranwala, Punjab, Pakistan",
    metaTitle: "Local SEO Expert in Gujranwala | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Gujranwala? Zubaida Digital helps Gujranwala businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Gujranwala, Punjab, Pakistan",
    intro:
      "Gujranwala is one of Pakistan's great industrial cities — ceramics, fans, steel, rice and a huge local services market around Satellite Town, Model City and G.T. Road. Yet most of its businesses are hard to find on Google. Zubaida Digital helps Gujranwala companies and local services fix that with optimized Google Business Profiles and local SEO that brings in buyers and customers.",
    highlights: [
      "Google Business Profile setup & optimization for Gujranwala businesses",
      "Local SEO for manufacturers, traders and local services",
      "Targeting for Satellite Town, Model City, G.T. Road & Wapda Town",
      "Review and citation building for lasting local rankings",
    ],
  },
  {
    slug: "local-seo-quetta",
    flag: "🇵🇰",
    city: "Quetta",
    region: "Quetta, Balochistan, Pakistan",
    metaTitle: "Local SEO Expert in Quetta | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Quetta? Zubaida Digital helps Quetta businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Quetta, Balochistan, Pakistan",
    intro:
      "Quetta is Balochistan's capital and its largest market — and digitally, it is almost untouched. Businesses on Jinnah Road, in Satellite Town and around the university serve the whole province, yet very few appear properly on Google. Zubaida Digital helps Quetta businesses become the default choice in local search with optimized Google Business Profiles and local SEO built early, before competitors wake up.",
    highlights: [
      "Google Business Profile optimization for Quetta businesses",
      "Early-mover rankings in Balochistan's least competitive market",
      "Local SEO for retail, clinics, education and food businesses",
      "Province-wide visibility from one strong profile",
    ],
  },
  {
    slug: "local-seo-bahawalpur",
    flag: "🇵🇰",
    city: "Bahawalpur",
    region: "Bahawalpur, Punjab, Pakistan",
    metaTitle: "Local SEO Expert in Bahawalpur | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Bahawalpur? Zubaida Digital helps Bahawalpur businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Bahawalpur, Punjab, Pakistan",
    intro:
      "Bahawalpur is a historic city with a fast-growing education, health and retail sector — and a young population that searches Google for everything. Local businesses here compete mostly offline, which leaves Google Maps and local search open. Zubaida Digital helps Bahawalpur businesses take those spots with optimized Google Business Profiles and practical local SEO.",
    highlights: [
      "Google Business Profile optimization for Bahawalpur businesses",
      "Local SEO for clinics, academies, retail and food businesses",
      "Targeting for Satellite Town, Model Town & University Chowk area",
      "Affordable plans for growing local businesses",
    ],
  },
  {
    slug: "local-seo-sukkur",
    flag: "🇵🇰",
    city: "Sukkur",
    region: "Sukkur, Sindh, Pakistan",
    metaTitle: "Local SEO Expert in Sukkur | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Sukkur? Zubaida Digital helps Sukkur businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Sukkur, Sindh, Pakistan",
    intro:
      "Sukkur is upper Sindh's trade gateway — a city of merchants, services and travellers passing over the Indus. Its businesses serve Sukkur, Rohri and the surrounding districts, but most are invisible in local search. Zubaida Digital helps Sukkur businesses get discovered with complete Google Business Profiles and local SEO aimed at the whole region they serve.",
    highlights: [
      "Google Business Profile setup & optimization for Sukkur businesses",
      "Regional targeting — Sukkur, Rohri & nearby districts",
      "Local SEO for trade, retail, clinics and food businesses",
      "Low-competition keywords with steady local demand",
    ],
  },
  {
    slug: "local-seo-abbottabad",
    flag: "🇵🇰",
    city: "Abbottabad",
    region: "Abbottabad, Khyber Pakhtunkhwa, Pakistan",
    metaTitle: "Local SEO Expert in Abbottabad | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Abbottabad? Zubaida Digital helps Abbottabad businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Abbottabad, Khyber Pakhtunkhwa, Pakistan",
    intro:
      "Abbottabad is the gateway to Pakistan's northern tourism — travellers search Google for hotels, guest houses, restaurants and services here every season, on top of a strong local market of clinics, schools and shops. Zubaida Digital helps Abbottabad businesses capture both audiences with optimized Google Business Profiles and local SEO that shows up when visitors and locals search.",
    highlights: [
      "Google Business Profile optimization for Abbottabad hotels & businesses",
      "Tourism-season visibility for guest houses, food and services",
      "Local SEO for clinics, education and retail in Abbottabad",
      "Photo and review strategies that win traveller trust",
    ],
  },
  {
    slug: "local-seo-mardan",
    flag: "🇵🇰",
    city: "Mardan",
    region: "Mardan, Khyber Pakhtunkhwa, Pakistan",
    metaTitle: "Local SEO Expert in Mardan | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Mardan? Zubaida Digital helps Mardan businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Mardan, Khyber Pakhtunkhwa, Pakistan",
    intro:
      "Mardan is Khyber Pakhtunkhwa's second city — a growing market of traders, clinics, education services and retailers serving a wide rural catchment. Online competition is still minimal, so local search is open ground. Zubaida Digital helps Mardan businesses claim it with optimized Google Business Profiles and local SEO that reaches customers across the district.",
    highlights: [
      "Google Business Profile optimization for Mardan businesses",
      "District-wide reach from one strong local profile",
      "Local SEO for clinics, academies, retail and food businesses",
      "Early rankings in a low-competition market",
    ],
  },
  {
    slug: "local-seo-rahim-yar-khan",
    flag: "🇵🇰",
    city: "Rahim Yar Khan",
    region: "Rahim Yar Khan, Punjab, Pakistan",
    metaTitle: "Local SEO Expert in Rahim Yar Khan | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Rahim Yar Khan? Zubaida Digital helps Rahim Yar Khan businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Rahim Yar Khan, Punjab, Pakistan",
    intro:
      "Rahim Yar Khan anchors South Punjab's agriculture and industry — cotton, sugar, fertilizer and a growing services sector. Its businesses serve a huge district, yet local search here is barely contested. Zubaida Digital helps Rahim Yar Khan businesses get found by the customers across the district with optimized Google Business Profiles and focused local SEO.",
    highlights: [
      "Google Business Profile setup & optimization for Rahim Yar Khan businesses",
      "Local SEO for agri-industry, trade, clinics and services",
      "District-wide service-area targeting from one profile",
      "Fast rankings in an uncrowded local market",
    ],
  },
  {
    slug: "local-seo-sheikhupura",
    flag: "🇵🇰",
    city: "Sheikhupura",
    region: "Sheikhupura, Punjab, Pakistan",
    metaTitle: "Local SEO Expert in Sheikhupura | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Sheikhupura? Zubaida Digital helps Sheikhupura businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Sheikhupura, Punjab, Pakistan",
    intro:
      "Sheikhupura sits in Lahore's industrial shadow — factories, warehouses and a full local services market of its own. Many of its customers actually search from both Sheikhupura and Lahore. Zubaida Digital helps Sheikhupura businesses appear in both with optimized Google Business Profiles and local SEO that covers the areas they really serve.",
    highlights: [
      "Google Business Profile optimization for Sheikhupura businesses",
      "Dual-market targeting — Sheikhupura & nearby Lahore searches",
      "Local SEO for industry, trade and local services",
      "Citation and review building for durable rankings",
    ],
  },
  {
    slug: "local-seo-larkana",
    flag: "🇵🇰",
    city: "Larkana",
    region: "Larkana, Sindh, Pakistan",
    metaTitle: "Local SEO Expert in Larkana | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Larkana? Zubaida Digital helps Larkana businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Larkana, Sindh, Pakistan",
    intro:
      "Larkana is interior Sindh's hub for agriculture, education and health services — and like most of interior Sindh, its businesses are barely present on Google. That makes local search an open opportunity for the clinics, schools, retailers and services that move first. Zubaida Digital helps Larkana businesses take the top local spots with optimized Google Business Profiles and local SEO.",
    highlights: [
      "Google Business Profile optimization for Larkana businesses",
      "Local SEO for clinics, education, retail and services",
      "First-mover advantage in interior Sindh's open market",
      "Profiles built to serve the whole district",
    ],
  },
  {
    slug: "local-seo-kasur",
    flag: "🇵🇰",
    city: "Kasur",
    region: "Kasur, Punjab, Pakistan",
    metaTitle: "Local SEO Expert in Kasur | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Kasur? Zubaida Digital helps Kasur businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Kasur, Punjab, Pakistan",
    intro:
      "Kasur is famous across Pakistan for its food — and sits close enough to Lahore that its businesses serve two markets at once. Restaurants, food brands, leather businesses and local services here can all win searches they currently miss. Zubaida Digital helps Kasur businesses get visible with optimized Google Business Profiles and local SEO aimed at Kasur and Lahore-side customers alike.",
    highlights: [
      "Google Business Profile optimization for Kasur food & local businesses",
      "Food-business SEO — the searches Kasur is famous for",
      "Dual reach into Kasur and nearby Lahore demand",
      "Review strategies that turn visitors into regulars",
    ],
  },
  {
    slug: "local-seo-dera-ghazi-khan",
    flag: "🇵🇰",
    city: "Dera Ghazi Khan",
    region: "Dera Ghazi Khan, Punjab, Pakistan",
    metaTitle: "Local SEO Expert in Dera Ghazi Khan | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Dera Ghazi Khan? Zubaida Digital helps Dera Ghazi Khan businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Dera Ghazi Khan, Punjab, Pakistan",
    intro:
      "Dera Ghazi Khan is South Punjab's crossroads — where Punjab, Sindh and Balochistan routes meet, serving traders, travellers and a wide rural district. Its businesses face almost no online competition. Zubaida Digital helps Dera Ghazi Khan businesses become the visible choice in local search with optimized Google Business Profiles and practical local SEO.",
    highlights: [
      "Google Business Profile setup & optimization for D.G. Khan businesses",
      "Crossroads-market targeting for traders and travellers",
      "Local SEO for retail, clinics, food and services",
      "Low-competition rankings that are quick to win",
    ],
  },
  {
    slug: "local-seo-australia",
    flag: "🇦🇺",
    city: "Australia",
    region: "Sydney, Melbourne, Brisbane & across Australia",
    metaTitle: "Local SEO Expert in Australia | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Australia? Zubaida Digital helps Australia businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Sydney, Melbourne, Brisbane & across Australia",
    intro:
      "Australia's local businesses — tradies, dentists, cafes, clinics and retailers — live or die by Google Maps. Customers search 'near me' for everything, and the businesses in the Maps 3-pack take the overwhelming share of calls. Zubaida Digital works remotely with Australian businesses in Sydney, Melbourne, Brisbane, Perth and beyond, optimizing Google Business Profiles and building the local SEO signals that win those searches — with clear reporting that fits your time zone.",
    highlights: [
      "Google Business Profile setup & optimization for Australian businesses",
      "Suburb-level keyword targeting for Sydney, Melbourne, Brisbane & Perth",
      "Citation building on Australian directories and review management",
      "Remote delivery with reporting scheduled around AEST/AEDT",
    ],
  },
  {
    slug: "local-seo-new-zealand",
    flag: "🇳🇿",
    city: "New Zealand",
    region: "Auckland, Wellington, Christchurch & across New Zealand",
    metaTitle: "Local SEO Expert in New Zealand | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in New Zealand? Zubaida Digital helps New Zealand businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Auckland, Wellington, Christchurch & across New Zealand",
    intro:
      "New Zealand runs on small businesses — and their customers find them on Google. Outside Auckland, local search competition is often surprisingly light, which means a well-optimized business can own its local market. Zubaida Digital helps Kiwi businesses in Auckland, Wellington, Christchurch, Hamilton and regional towns optimize their Google Business Profile and rank where their customers are searching.",
    highlights: [
      "Google Business Profile optimization for New Zealand businesses",
      "Town and suburb targeting across Auckland, Wellington & Christchurch",
      "Big opportunity in low-competition regional markets",
      "Review and citation building for lasting local trust",
    ],
  },
  {
    slug: "local-seo-ireland",
    flag: "🇮🇪",
    city: "Ireland",
    region: "Dublin, Cork, Galway & across Ireland",
    metaTitle: "Local SEO Expert in Ireland | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Ireland? Zubaida Digital helps Ireland businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Dublin, Cork, Galway & across Ireland",
    intro:
      "Ireland's businesses — from Dublin's service companies to Cork and Galway's retailers, clinics and trades — are found through Google first. Zubaida Digital helps Irish businesses optimize their Google Business Profile, build genuine local SEO and turn nearby searches into enquiries. Everything is delivered online, so your business gets capital-city expertise wherever in Ireland you are based.",
    highlights: [
      "Google Business Profile setup & optimization for Irish businesses",
      "Local keyword targeting for Dublin, Cork, Galway & Irish towns",
      "Citation building and review management for local trust",
      "Local SEO for trades, clinics, retail and professional services",
    ],
  },
  {
    slug: "local-seo-germany",
    flag: "🇩🇪",
    city: "Germany",
    region: "Berlin, Munich, Hamburg & across Germany",
    metaTitle: "Local SEO Expert in Germany | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Germany? Zubaida Digital helps Germany businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Berlin, Munich, Hamburg & across Germany",
    intro:
      "Germany's international businesses — English-speaking clinics, expat services, tech startups, restaurants and relocation companies in Berlin, Munich and Hamburg — compete for customers who search in English. Zubaida Digital helps those businesses optimize their Google Business Profile and rank in English-language local search across Germany, with clear communication and reporting in English throughout.",
    highlights: [
      "Google Business Profile optimization for businesses in Germany",
      "English-language local SEO for international & expat-facing businesses",
      "Local targeting for Berlin, Munich, Hamburg & Frankfurt",
      "Review and citation building to grow local trust",
    ],
  },
  {
    slug: "local-seo-netherlands",
    flag: "🇳🇱",
    city: "Netherlands",
    region: "Amsterdam, Rotterdam & across the Netherlands",
    metaTitle: "Local SEO Expert in Netherlands | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Netherlands? Zubaida Digital helps Netherlands businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Amsterdam, Rotterdam & across the Netherlands",
    intro:
      "The Netherlands has the highest English proficiency in Europe — and a huge international business community in Amsterdam, Rotterdam, Utrecht and Eindhoven whose customers search in English. Zubaida Digital helps Dutch and international businesses in the Netherlands optimize their Google Business Profile, build local SEO authority and win those searches, all handled in English.",
    highlights: [
      "Google Business Profile optimization for businesses in the Netherlands",
      "English-language local SEO for international businesses",
      "Targeting for Amsterdam, Rotterdam, Utrecht & Eindhoven",
      "Citation building and review management for local trust",
    ],
  },
  {
    slug: "local-seo-singapore",
    flag: "🇸🇬",
    city: "Singapore",
    region: "Singapore",
    metaTitle: "Local SEO Expert in Singapore | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Singapore? Zubaida Digital helps Singapore businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Singapore",
    intro:
      "Singapore is one of the most competitive local search markets in Asia — a single city where F&B outlets, clinics, tuition centers, salons and service companies fight for the same Maps spots. Zubaida Digital helps Singapore businesses optimize their Google Business Profile, target neighbourhood-level keywords from Orchard to Tampines, and turn high-intent local searches into bookings and sales.",
    highlights: [
      "Google Business Profile optimization for Singapore businesses",
      "Neighbourhood-level targeting — Orchard, Tampines, Jurong, Woodlands & more",
      "Local SEO for F&B, clinics, tuition and service businesses",
      "Review management in a market where ratings decide everything",
    ],
  },
  {
    slug: "local-seo-uae",
    flag: "🇦🇪",
    city: "United Arab Emirates",
    region: "Dubai, Abu Dhabi, Sharjah & across the UAE",
    metaTitle: "Local SEO Expert in the UAE | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in the UAE? Zubaida Digital helps United Arab Emirates businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Dubai, Abu Dhabi, Sharjah & across the UAE",
    intro:
      "The United Arab Emirates is one of the fastest-moving business markets in the world — and Zubaida Digital already works with UAE businesses in transport, tourism and local services. From Dubai and Abu Dhabi to Sharjah and the Northern Emirates, we help companies optimize their Google Business Profile, rank in local search and turn the UAE's bilingual, mobile-first customers into calls and bookings.",
    highlights: [
      "Google Business Profile optimization for businesses across the UAE",
      "Proven experience with UAE transport, tourism & service brands",
      "Local SEO for the UAE's bilingual Arabic/English audience",
      "Coverage beyond Dubai — Abu Dhabi, Sharjah & the Northern Emirates",
    ],
  },
  {
    slug: "local-seo-manchester",
    flag: "🇬🇧",
    city: "Manchester",
    region: "Manchester, United Kingdom",
    metaTitle: "Local SEO Expert in Manchester | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Manchester? Zubaida Digital helps Manchester businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Manchester, United Kingdom",
    intro:
      "Manchester is the Northern Powerhouse — thousands of independent shops, clinics, salons, trades and professional services competing across the city center, Salford, Didsbury and Chorlton. Zubaida Digital already supports UK businesses in the motor trade and local services, and we bring that same hands-on local SEO to Manchester: optimized Google Business Profiles, borough-level keyword targeting and reviews that build real trust.",
    highlights: [
      "Google Business Profile optimization for Manchester businesses",
      "Targeting for the city center, Salford, Didsbury, Chorlton & Stockport",
      "Local SEO for trades, clinics, salons and professional services",
      "UK experience with motor-trade and local service businesses",
    ],
  },
  {
    slug: "local-seo-birmingham",
    flag: "🇬🇧",
    city: "Birmingham",
    region: "Birmingham, United Kingdom",
    metaTitle: "Local SEO Expert in Birmingham | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Birmingham? Zubaida Digital helps Birmingham businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Birmingham, United Kingdom",
    intro:
      "Birmingham is the UK's second city, with one of the country's biggest small-business communities — from the Jewellery Quarter and Digbeth to Edgbaston, Solihull and Sutton Coldfield. Zubaida Digital helps Birmingham businesses get chosen on Google with optimized Business Profiles, area-level local SEO and review strategies built for the West Midlands market.",
    highlights: [
      "Google Business Profile setup & optimization for Birmingham businesses",
      "Area targeting — Jewellery Quarter, Digbeth, Edgbaston, Solihull & more",
      "Local SEO for trades, food, clinics and professional services",
      "Review management that builds West Midlands trust",
    ],
  },
  {
    slug: "local-seo-leeds",
    flag: "🇬🇧",
    city: "Leeds",
    region: "Leeds, United Kingdom",
    metaTitle: "Local SEO Expert in Leeds | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Leeds? Zubaida Digital helps Leeds businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Leeds, United Kingdom",
    intro:
      "Leeds is Yorkshire's business engine — professional services, retailers, clinics and trades serving the city center, Headingley, Horsforth, Roundhay and beyond. Its customers compare Google profiles before they choose. Zubaida Digital helps Leeds businesses win that comparison with optimized Google Business Profiles, strong local SEO and genuine reviews.",
    highlights: [
      "Google Business Profile optimization for Leeds businesses",
      "Targeting for the city center, Headingley, Horsforth & Roundhay",
      "Local SEO for professional services, retail, clinics and trades",
      "Citation building and review management for Yorkshire businesses",
    ],
  },
  {
    slug: "local-seo-glasgow",
    flag: "🇬🇧",
    city: "Glasgow",
    region: "Glasgow, United Kingdom",
    metaTitle: "Local SEO Expert in Glasgow | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Glasgow? Zubaida Digital helps Glasgow businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Glasgow, United Kingdom",
    intro:
      "Glasgow is Scotland's largest city and one of its most competitive local markets — businesses across the City Centre, West End, Southside and East End all fighting for the same Google searches. Zubaida Digital helps Glasgow businesses stand out with optimized Google Business Profiles, neighbourhood-level local SEO and reviews that turn searchers into customers.",
    highlights: [
      "Google Business Profile optimization for Glasgow businesses",
      "Neighbourhood targeting — West End, Southside, East End & City Centre",
      "Local SEO for trades, hospitality, clinics and retail",
      "Review strategies built for a competitive Scottish market",
    ],
  },
  {
    slug: "local-seo-new-york",
    flag: "🇺🇸",
    city: "New York",
    region: "New York City, United States",
    metaTitle: "Local SEO Expert in New York | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in New York? Zubaida Digital helps New York businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in New York City, United States",
    intro:
      "New York is the most competitive local search market on earth — five boroughs, hundreds of neighbourhoods, and customers who choose from the top three results and move on. Zubaida Digital helps New York businesses in Manhattan, Brooklyn, Queens, the Bronx and Staten Island optimize their Google Business Profile, target neighbourhood-level keywords and win the searches that bring in calls and bookings.",
    highlights: [
      "Google Business Profile optimization for New York businesses",
      "Neighbourhood-level targeting across all five boroughs",
      "Local SEO for clinics, restaurants, salons, law firms & services",
      "Review management in the world's toughest local market",
    ],
  },
  {
    slug: "local-seo-los-angeles",
    flag: "🇺🇸",
    city: "Los Angeles",
    region: "Los Angeles, United States",
    metaTitle: "Local SEO Expert in Los Angeles | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Los Angeles? Zubaida Digital helps Los Angeles businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Los Angeles, United States",
    intro:
      "Los Angeles is a city of neighbourhoods — and local SEO here is won neighbourhood by neighbourhood, from Downtown and Hollywood to Santa Monica, Pasadena and the Valley. Zubaida Digital helps LA businesses optimize their Google Business Profile, target the areas they actually serve and turn local searches into calls, bookings and sales.",
    highlights: [
      "Google Business Profile optimization for Los Angeles businesses",
      "Neighbourhood targeting — Downtown, Hollywood, Santa Monica & more",
      "Local SEO for clinics, med spas, restaurants and services",
      "Service-area setup for businesses covering greater LA",
    ],
  },
  {
    slug: "local-seo-chicago",
    flag: "🇺🇸",
    city: "Chicago",
    region: "Chicago, United States",
    metaTitle: "Local SEO Expert in Chicago | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Chicago? Zubaida Digital helps Chicago businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Chicago, United States",
    intro:
      "Chicago's businesses — from the Loop and River North to Logan Square, Pilsen and the suburbs — serve customers who start every search on Google. Zubaida Digital helps Chicago businesses optimize their Google Business Profile, build strong local SEO and take the Maps spots that drive calls and foot traffic across Chicagoland.",
    highlights: [
      "Google Business Profile setup & optimization for Chicago businesses",
      "Targeting for the Loop, River North, Logan Square & the suburbs",
      "Local SEO for restaurants, clinics, trades and services",
      "Citation building on major US directories and review management",
    ],
  },
  {
    slug: "local-seo-houston",
    flag: "🇺🇸",
    city: "Houston",
    region: "Houston, United States",
    metaTitle: "Local SEO Expert in Houston | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Houston? Zubaida Digital helps Houston businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Houston, United States",
    intro:
      "Houston is one of America's fastest-growing cities — and its sprawling neighbourhoods, from Downtown and the Heights to Katy, Sugar Land and Pearland, are served by businesses customers find on Google Maps. Zubaida Digital helps Houston businesses optimize their Google Business Profile and local SEO so growth in the city turns into growth in their customer base.",
    highlights: [
      "Google Business Profile optimization for Houston businesses",
      "Targeting for Downtown, the Heights, Katy, Sugar Land & Pearland",
      "Local SEO for home services, clinics, restaurants and retail",
      "Service-area configuration for Houston's wide coverage zones",
    ],
  },
  {
    slug: "local-seo-toronto",
    flag: "🇨🇦",
    city: "Toronto",
    region: "Toronto, Canada",
    metaTitle: "Local SEO Expert in Toronto | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Toronto? Zubaida Digital helps Toronto businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Toronto, Canada",
    intro:
      "Toronto is Canada's largest city and one of its most diverse — businesses compete across Downtown, North York, Scarborough, Etobicoke and the wider GTA for customers who search in many languages but choose on Google. Zubaida Digital helps Toronto businesses optimize their Google Business Profile, target neighbourhood and GTA-level keywords, and turn local searches into calls and bookings.",
    highlights: [
      "Google Business Profile optimization for Toronto & GTA businesses",
      "Neighbourhood targeting — Downtown, North York, Scarborough & Etobicoke",
      "Local SEO for clinics, restaurants, services and retail",
      "Experience with multilingual, multicultural customer bases",
    ],
  },
  {
    slug: "local-seo-vancouver",
    flag: "🇨🇦",
    city: "Vancouver",
    region: "Vancouver, Canada",
    metaTitle: "Local SEO Expert in Vancouver | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Vancouver? Zubaida Digital helps Vancouver businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Vancouver, Canada",
    intro:
      "Vancouver's customers are some of Canada's most active local searchers — choosing clinics, restaurants, salons and services across Downtown, Kitsilano, Burnaby, Richmond and Surrey from their phones. Zubaida Digital helps Vancouver and Metro Vancouver businesses optimize their Google Business Profile and local SEO to win those searches.",
    highlights: [
      "Google Business Profile optimization for Vancouver businesses",
      "Targeting for Downtown, Kitsilano, Burnaby, Richmond & Surrey",
      "Local SEO for clinics, hospitality, retail and services",
      "Review management for a highly mobile-first audience",
    ],
  },
  {
    slug: "local-seo-sydney",
    flag: "🇦🇺",
    city: "Sydney",
    region: "Sydney, Australia",
    metaTitle: "Local SEO Expert in Sydney | Zubaida Digital",
    metaDescription:
      "Looking for a local SEO expert in Sydney? Zubaida Digital helps Sydney businesses rank in Google Maps and local search with Google Business Profile optimization, citations and reviews. Chat on WhatsApp for a free consultation.",
    h1: "Local SEO Expert in Sydney, Australia",
    intro:
      "Sydney is Australia's largest and most competitive local market — tradies, dentists, cafes, clinics and services fighting suburb by suburb, from the CBD and Inner West to Parramatta, the North Shore and the Shire. Zubaida Digital works remotely with Sydney businesses to optimize Google Business Profiles, target suburb-level keywords and win the 'near me' searches that fill appointment books.",
    highlights: [
      "Google Business Profile optimization for Sydney businesses",
      "Suburb-level targeting — CBD, Inner West, Parramatta, North Shore & more",
      "Local SEO for tradies, dentists, cafes, clinics and services",
      "Remote delivery with reporting on Sydney time (AEST/AEDT)",
    ],
  },
];

export function getLocationPage(slug: string): LocationPage | undefined {
  return locationPages.find((location) => location.slug === slug);
}

export function locationMetadata(location: LocationPage): Metadata {
  return {
    title: { absolute: location.metaTitle },
    description: location.metaDescription,
    alternates: {
      canonical: `/${location.slug}`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      type: "website",
      url: `/${location.slug}`,
      siteName: site.name,
      locale: "en_US",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDescription,
      images: [ogImage.url],
    },
  };
}

// Country page -> its city pages, shown as a dedicated "cities" section
// on the country page so visitors can actually find the city locations.
export const locationChildren: Record<string, string[]> = {
  "local-seo-pakistan": [
    "local-seo-karachi",
    "local-seo-lahore",
    "local-seo-islamabad",
    "local-seo-rawalpindi",
    "local-seo-faisalabad",
    "local-seo-multan",
    "local-seo-peshawar",
    "local-seo-hyderabad-pakistan",
    "local-seo-sialkot",
    "local-seo-gujranwala",
    "local-seo-quetta",
    "local-seo-bahawalpur",
    "local-seo-sukkur",
    "local-seo-abbottabad",
    "local-seo-mardan",
    "local-seo-rahim-yar-khan",
    "local-seo-sheikhupura",
    "local-seo-larkana",
    "local-seo-kasur",
    "local-seo-dera-ghazi-khan",
  ],
  "local-seo-uk": [
    "local-seo-london",
    "local-seo-manchester",
    "local-seo-birmingham",
    "local-seo-leeds",
    "local-seo-glasgow",
  ],
  "local-seo-usa": [
    "local-seo-new-york",
    "local-seo-los-angeles",
    "local-seo-chicago",
    "local-seo-houston",
  ],
  "local-seo-canada": ["local-seo-toronto", "local-seo-vancouver"],
  "local-seo-australia": ["local-seo-sydney"],
  "local-seo-uae": ["local-seo-dubai"],
};
