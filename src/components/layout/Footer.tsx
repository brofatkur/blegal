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

          {/* Legal / Social Proof */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-brand-gold mb-4">Legalitas Partner</h3>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <p className="text-sm text-gray-300 font-medium mb-1">Notaris Resmi</p>
              <p className="text-brand-gold font-serif font-semibold">Bella Kharisma, S.H., M.Kn.</p>
              <p className="text-xs text-gray-400 mt-1">SK AHU-00080.AH.02.01.TAHUN 2025</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} PT Bonanza Tujuh Samudera. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
