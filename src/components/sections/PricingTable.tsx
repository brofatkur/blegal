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
    name: "Pendirian PT (Modal < 1M)",
    price: "9.700.000",
    description: "Paket Best Seller untuk Startup",
    features: [
      "Pengecekan Nama PT",
      "Akta Pendirian Notaris",
      "SK Pengesahan Kemenkumham",
      "NPWP Badan & SKT",
      "NIB Perorangan/Badan",
      "BNRI (Berita Negara)",
      "Gratis Konsultasi Pajak Awal",
    ],
    highlight: true,
  },
  {
    name: "Pendirian PT (Modal > 1M)",
    price: "14.000.000",
    description: "Untuk Bisnis Skala Menengah",
    features: [
      "Semua fasilitas PT < 1M",
      "Prioritas Pengerjaan",
      "Konsultasi Struktur Modal",
      "Drafting Perjanjian Pemegang Saham",
      "Layanan Antar Dokumen (Bali Area)",
    ],
    highlight: false,
  },
  {
    name: "Pendirian PT PMA",
    price: "29.000.000",
    description: "Penanaman Modal Asing",
    features: [
      "Izin Prinsip BKPM",
      "Akta Pendirian Bahasa Inggris & Indo",
      "SK Kemenkumham",
      "NPWP PMA",
      "NIB & Izin Usaha OSS",
      "Konsultasi Laporan LKPM",
    ],
    highlight: false,
    discount: "20%",
  },
];

export function PricingTable() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-brown mb-4">
            Investasi Legalitas Terbaik
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Harga transparan, tanpa biaya tersembunyi. Semua paket sudah termasuk biaya PNBP pemerintah dan jasa notaris.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingItems.map((item, index) => (
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
                  Most Popular
                </div>
              )}

              {/* @ts-ignore */}
              {item.discount && (
                <div className="absolute -top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                  {/* @ts-ignore */}
                  Hemat {item.discount}
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-serif font-bold text-brand-brown mb-2">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{item.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-gray-500">Rp</span>
                  <span className="text-3xl font-bold text-brand-brown">{item.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  item.highlight 
                    ? "bg-brand-brown hover:bg-brand-brown-light text-white" 
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
                onClick={() => window.open(`https://wa.me/62811392146?text=Halo%20B-Legal,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(item.name)}`, "_blank")}
              >
                Konsultasi via WhatsApp
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">Layanan Lainnya:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-brand-brown">
            <span className="bg-gray-100 px-4 py-2 rounded-full">PT Perorangan: Rp 3.000.000</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full">Yayasan: Rp 6.000.000</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full">Koperasi: Rp 15.000.000</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full">NIB Only: Rp 3.000.000</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full">NPWP Only: Rp 1.000.000</span>
          </div>
        </div>
      </div>
    </section>
  );
}
