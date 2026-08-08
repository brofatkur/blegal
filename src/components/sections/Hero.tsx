import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function Hero({ lang = 'id' }: { lang?: 'id' | 'en' }) {
  const t = {
    badge: lang === 'en' ? 'Trusted Legal Partner #1 in Bali' : 'Partner Legalitas Terpercaya #1 di Bali',
    titleLine1: lang === 'en' ? 'Business Legality' : 'Legalitas Bisnis',
    titleLine2: lang === 'en' ? 'Professional' : 'Profesional',
    titleLine3: lang === 'en' ? 'Focus on Business!' : 'Fokus Bisnis!',
    desc: lang === 'en' 
      ? 'Set up your PT, CV, Foundation, and business licenses safely and professionally with B-Legal. We handle the paperwork, you focus on growing your business.' 
      : 'Urus pendirian PT, CV, Yayasan, dan perizinan bisnis Anda dengan aman dan profesional bersama B-Legal. Kami urus dokumennya, Anda fokus kembangkan bisnisnya.',
    btnConsult: lang === 'en' ? 'WhatsApp Consultation' : 'Konsultasi WhatsApp',
    btnServices: lang === 'en' ? 'View Services' : 'Lihat Layanan',
    proofNum: lang === 'en' ? '1,000+ Entrepreneurs' : '1,000+ Pengusaha',
    proofText: lang === 'en' ? 'Have trusted us with their legality' : 'Telah mempercayakan legalitasnya',
    successText: lang === 'en' ? 'Successful Businesses' : 'Bisnis Sukses',
    certifiedText: lang === 'en' ? 'Certified Consultant' : 'Konsultan Tersertifikasi',
    expYear: lang === 'en' ? '+10 Years' : '+10 Tahun',
    expText: lang === 'en' ? 'EXPERIENCE' : 'PENGALAMAN'
  };

  return (
    <section className="relative bg-brand-brown py-20 lg:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/office-meeting/1920/1080?blur=2" 
          alt="Office Background" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-brown via-brand-brown/90 to-brand-brown/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-gold rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/20 border border-brand-gold/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-brand-gold text-sm font-medium tracking-wide">{t.badge}</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-serif font-bold leading-tight drop-shadow-lg text-white">
              {t.titleLine1} <br/>
              <span className="text-brand-gold relative inline-block">
                {t.titleLine2}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-gold opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>, <br/>
              <span className="text-brand-gold">{t.titleLine3}</span>
            </h1>
            
            <p className="text-lg text-gray-100 max-w-xl leading-relaxed font-light">
              {t.desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="bg-brand-gold text-brand-brown hover:bg-white hover:text-brand-brown font-bold px-8 h-12 shadow-lg shadow-brand-gold/20 transition-all hover:scale-105" onClick={() => window.open("https://wa.me/62816570755", "_blank")}>
                {t.btnConsult}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-brown h-12 px-8 backdrop-blur-sm bg-white/5" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                {t.btnServices}
              </Button>
            </div>

            {/* Social Proof Mini */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    alt="User" 
                    className="w-10 h-10 rounded-full border-2 border-brand-brown object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className="text-white font-bold">{t.proofNum}</p>
                <p className="text-gray-300 text-xs">{t.proofText}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <div className="relative lg:h-[600px] flex flex-col items-center justify-end">
            {/* Background Blob */}
            <div className="absolute top-10 inset-x-10 bottom-0 bg-brand-gold/10 rounded-t-full blur-3xl" />

            {/* Professional Woman Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-full max-w-md mx-auto"
            >
              <img 
                src="https://i.ibb.co.com/KcBWDNRD/dreamina-2026-03-03-7297-A-professional-Indonesian-woman-in-her-e.jpg" 
                alt="Professional Legal Consultant" 
                className="w-full h-auto object-cover rounded-3xl shadow-2xl border-4 border-white/10 mask-image-gradient"
                referrerPolicy="no-referrer"
              />

              {/* Badge 1: Success Count (Left) */}
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-1/4 -left-4 md:-left-12 bg-white p-3 md:p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 border border-gray-100"
              >
                <div className="bg-red-500 p-2 md:p-3 rounded-xl text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-brand-brown font-serif">+1,000</p>
                  <p className="text-xs md:text-sm text-gray-600 font-medium">{t.successText}</p>
                </div>
              </motion.div>

              {/* Badge 2: Certified (Top Right) */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute top-10 -right-4 md:-right-8 bg-white py-2 px-4 rounded-full shadow-xl flex items-center gap-2 z-20 border border-gray-100"
              >
                <div className="bg-green-100 p-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <p className="text-sm font-bold text-gray-800">{t.certifiedText}</p>
              </motion.div>

               {/* Badge 3: Experience (Bottom Right) */}
               <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="absolute bottom-10 -right-2 md:-right-6 bg-white p-3 rounded-xl shadow-xl z-20 border border-gray-100 text-center"
              >
                <div className="flex justify-center gap-1 mb-1">
                   {[1,2,3,4,5].map(i => (
                     <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#D4AF37" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                   ))}
                </div>
                <p className="text-lg font-bold text-brand-brown leading-none">{t.expYear}</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">{t.expText}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
