import { Building, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function BofficePromo({ lang = 'id' }: { lang?: 'id' | 'en' }) {
  const t = {
    partner: lang === 'en' ? 'Official Partner' : 'Partner Resmi',
    title: lang === 'en' ? 'Need a Prestigious Business Address in Bali?' : 'Butuh Alamat Bisnis Prestisius di Bali?',
    desc: lang === 'en' ? 'Complete your business legality with a Virtual Office & Private Office in a strategic location. Complete facilities, affordable prices.' : 'Lengkapi legalitas bisnis Anda dengan Virtual Office & Private Office di lokasi strategis. Fasilitas lengkap, harga terjangkau.',
    loc: lang === 'en' ? 'Strategic Location in Kuta & Denpasar' : 'Lokasi Strategis di Kuta & Denpasar',
    fac: lang === 'en' ? 'Meeting Room & Receptionist Facilities' : 'Fasilitas Meeting Room & Resepsionis',
    discount: lang === 'en' ? '50% discount exclusively for B-Legal clients!' : 'Diskon 50% khusus untuk klien B-Legal!',
    btn: lang === 'en' ? 'View Office Packages' : 'Lihat Paket Office',
    price: lang === 'en' ? 'Virtual Office starts from Rp 5.9M/year' : 'Virtual Office mulai Rp 5,9jt/tahun',
  };

  return (
    <section className="py-20 bg-brand-brown text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold text-xs font-medium border border-brand-gold/20">
              <Building className="h-3 w-3" />
              <span>{t.partner}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
              {t.title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t.desc}
            </p>
            <ul className="space-y-2 text-sm text-gray-300 inline-block text-left">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-gold" />
                <span>{t.loc}</span>
              </li>
              <li className="flex items-center gap-2">
                <Building className="h-4 w-4 text-brand-gold" />
                <span>{t.fac}</span>
              </li>
              <li className="flex items-center gap-2 mt-2 bg-brand-gold/20 text-brand-gold px-3 py-1.5 rounded-md font-medium border border-brand-gold/30">
                <span className="text-lg">🎉</span>
                <span>{t.discount}</span>
              </li>
            </ul>
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-brand-gold text-brand-brown hover:bg-white w-full md:w-auto font-semibold"
                onClick={() => window.open("https://boffice.co.id/", "_blank")}
              >
                {t.btn} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer" onClick={() => window.open("https://boffice.co.id/", "_blank")}>
               {/* Placeholder for office image */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
               <img 
                src="https://i.ibb.co.com/21h0KSwS/Gemini-Generated-Image-xlaldmxlaldmxlal-1.png" 
                alt="Boffice Virtual Office" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
               />
               <div className="absolute bottom-4 left-4 z-20">
                 <p className="text-brand-gold font-serif font-bold text-xl">Boffice Bali</p>
                 <p className="text-white text-sm">{t.price}</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
