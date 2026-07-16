import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const pricingItems = [
  {
    name: "Pendirian CV",
    price: "5.900.000",
    description: "Cocok untuk UMKM & Kontraktor",
    features: [
      "Pengecekan & Pemesanan Nama",
      "Akta Pendirian Notaris",
      "SK Kemenkumham",
      "NPWP Badan",
      "NIB (Nomor Induk Berusaha)",
      "Draft Surat Izin Usaha",
    ],
    highlight: false,
  },
  {
    name: "Pendirian PT",
    price: "7.700.000",
    description: "Bebas Modal Berapa Saja",
    features: [
      "Pengecekan Nama PT",
      "Akta Pendirian Notaris",
      "SK Pengesahan Kemenkumham",
      "NPWP Badan & SKT",
      "NIB Perorangan/Badan",
      "BNRI (Berita Negara)",
      "Bonus diskon 50% untuk Virtual Office"
    ],
    highlight: true,
  },
  {
    name: "Pendirian PT PMA",
    price: "24.900.000",
    originalPrice: "29.000.000",
    description: "Penanaman Modal Asing",
    features: [
      "Izin Prinsip BKPM",
      "Akta Pendirian Bahasa Inggris & Indo",
      "SK Kemenkumham",
      "NPWP PMA",
      "NIB & Izin Usaha OSS",
      "Bonus Virtual Office"
    ],
    highlight: false,
    discount: "14%",
  },
];

export function PricingTable({ lang = 'id' }: { lang?: 'id' | 'en' }) {
  const t = {
    title: lang === 'en' ? 'Best Legal Investment' : 'Investasi Legalitas Terbaik',
    desc: lang === 'en' ? 'Transparent pricing, no hidden fees. All packages include government fees and notary services.' : 'Harga transparan, tanpa biaya tersembunyi. Semua paket sudah termasuk biaya PNBP pemerintah dan jasa notaris.',
    promo: lang === 'en' ? 'PROMO 10%' : 'PROMO 10%',
    promoText: lang === 'en' ? ' — Special price! Claim and negotiate directly on WhatsApp.' : ' — Harga spesial! Silahkan klaim dan nego langsung di WhatsApp.',
    mostPopular: lang === 'en' ? 'Most Popular' : 'Paling Laris',
    saveText: lang === 'en' ? 'Save' : 'Hemat',
    btn: lang === 'en' ? 'Consult via WhatsApp' : 'Konsultasi via WhatsApp',
    otherServices: lang === 'en' ? 'Other Services:' : 'Layanan Lainnya:',
    ptPerorangan: lang === 'en' ? 'Individual PT' : 'PT Perorangan',
    firma: lang === 'en' ? 'Firm' : 'Firma',
    yayasan: lang === 'en' ? 'Foundation' : 'Yayasan',
    koperasi: lang === 'en' ? 'Cooperative' : 'Koperasi',
    nibOnly: lang === 'en' ? 'NIB Only' : 'NIB Only',
    npwpOnly: lang === 'en' ? 'NPWP Only' : 'NPWP Only',
  };

  const currentPricingItems = lang === 'en' ? [
    {
      name: "CV Establishment",
      price: "5.900.000",
      description: "Ideal for SMEs & Contractors",
      features: [
        "Name Checking & Reservation",
        "Notary Deed of Establishment",
        "Ministry Approval (SK)",
        "Corporate Tax ID (NPWP)",
        "Business ID (NIB)",
        "Draft Business License",
      ],
      highlight: false,
    },
    {
      name: "PT Establishment",
      price: "7.700.000",
      description: "No Capital Restrictions",
      features: [
        "PT Name Checking",
        "Notary Deed of Establishment",
        "Ministry Ratification (SK)",
        "Corporate Tax ID & SKT",
        "Individual/Corporate NIB",
        "State Gazette (BNRI)",
        "Bonus 50% discount for Virtual Office"
      ],
      highlight: true,
    },
    {
      name: "PT PMA Establishment",
      price: "24.900.000",
      originalPrice: "29.000.000",
      description: "Foreign Direct Investment",
      features: [
        "Investment Board (BKPM) Principle License",
        "Establishment Deed in English & Indo",
        "Ministry Approval (SK)",
        "PMA Tax ID (NPWP)",
        "NIB & OSS Business License",
        "Bonus Virtual Office"
      ],
      highlight: false,
      discount: "14%",
    },
  ] : pricingItems;

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-brown mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            {t.desc}
          </p>
          <div className="inline-block bg-brand-gold/10 border border-brand-gold/30 rounded-lg px-6 py-3">
            <p className="text-brand-brown font-semibold">
              <span className="text-red-600 font-bold">{t.promo}</span>{t.promoText}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 max-w-6xl mx-auto gap-8">
          {currentPricingItems.map((item, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 border ${
                item.highlight 
                  ? "border-brand-gold bg-brand-cream/30 shadow-xl scale-105 z-10" 
                  : "border-gray-200 bg-white shadow-sm hover:shadow-md"
              } transition-all duration-300 flex flex-col`}
            >
              {item.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-brown text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  {t.mostPopular}
                </div>
              )}

              {/* @ts-ignore */}
              {item.discount && (
                <div className="absolute -top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                  {/* @ts-ignore */}
                  {t.saveText} {item.discount}
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-serif font-bold text-brand-brown mb-2">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{item.description}</p>
                
                {/* @ts-ignore */}
                {item.originalPrice && (
                  <div className="flex items-baseline gap-1 text-gray-400 line-through mb-1">
                    <span className="text-xs">Rp</span>
                    {/* @ts-ignore */}
                    <span className="text-lg font-semibold">{item.originalPrice}</span>
                  </div>
                )}
                
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-gray-500">Rp</span>
                  <span className="text-3xl font-bold text-brand-brown">{item.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {item.features.map((feature, idx) => {
                  const isBonus = feature.toLowerCase().includes("bonus");
                  return (
                    <li key={idx} className={`flex items-start gap-3 text-sm ${isBonus ? 'text-brand-brown font-semibold bg-brand-gold/10 p-2 rounded-lg' : 'text-gray-600'}`}>
                      <Check className={`h-4 w-4 shrink-0 mt-0.5 ${isBonus ? 'text-brand-brown' : 'text-brand-gold'}`} />
                      <span>{feature}</span>
                    </li>
                  );
                })}
              </ul>

              <Button 
                className={`w-full ${
                  item.highlight 
                    ? "bg-brand-brown hover:bg-brand-brown-light text-white" 
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
                onClick={() => window.open(`https://app.linktochat.id/api/pr/blegal`, "_blank")}
              >
                {t.btn}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">{t.otherServices}</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-brand-brown">
            <span className="bg-gray-100 px-4 py-2 rounded-full">{t.ptPerorangan}: Rp 3.000.000</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full">{t.firma}: Rp 5.000.000</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full">{t.yayasan}: Rp 6.000.000</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full">{t.koperasi}: Rp 15.000.000</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full">{t.nibOnly}: Rp 3.000.000</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full">{t.npwpOnly}: Rp 1.000.000</span>
          </div>
        </div>
      </div>
    </section>
  );
}
