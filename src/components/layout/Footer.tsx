import { MapPin, Phone, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-brown text-white py-12 pb-24 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://i.ibb.co.com/pvbhdqQ1/Screenshot-2026-03-02-at-16-18-47-removebg-preview.png" 
                alt="B-Legal Logo" 
                className="h-12 w-auto object-contain brightness-0 invert" 
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-gray-300 text-sm mb-4">
              PT Bonanza Tujuh Samudera
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Partner legal terpercaya untuk pendirian badan usaha dan perizinan bisnis Anda. Profesional, cepat, dan aman.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-brand-gold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-gold shrink-0" />
                <span>Jalan Dewi Sartika Nomor 2, Kuta, Badung, Bali, Indonesia, 80361</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-gold shrink-0" />
                <a href="https://wa.me/62811392146" className="hover:text-white transition-colors">0811392146</a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-brand-gold shrink-0" />
                <a href="https://blegal.co.id" className="hover:text-white transition-colors">blegal.co.id</a>
              </li>
            </ul>
          </div>

          {/* Google Maps */}
          <div className="h-full min-h-[200px] rounded-lg overflow-hidden border border-white/10 shadow-lg">
            <iframe 
              width="100%" 
              height="100%" 
              className="w-full h-full min-h-[200px]"
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jalan%20Dewi%20Sartika%20Nomor%202,%20Kuta,%20Badung,%20Bali,%20Indonesia,%2080361+(B-Legal)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Lokasi Kantor B-Legal"
            >
            </iframe>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} PT Bonanza Tujuh Samudera. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
