import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ai, MODEL_NAME } from "@/lib/gemini";
import { Send, Loader2, Bot } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAskAI = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResponse("");
    try {
      const prompt = `
        Anda adalah asisten legal AI dari B-Legal (PT Bonanza Tujuh Samudera).
        Tugas Anda adalah membantu pengguna dengan pertanyaan seputar pendirian badan usaha (PT, CV, Yayasan) di Indonesia.
        
        Pertanyaan pengguna: "${query}"
        
        Panduan jawaban:
        1. Jawab dengan singkat, padat, dan profesional.
        2. Jika pengguna bertanya tentang ketersediaan nama PT, jelaskan bahwa nama PT harus 3 kata (untuk PT biasa) dan tidak boleh menggunakan bahasa asing (untuk PMDN). Berikan simulasi pengecekan sederhana, tapi tegaskan bahwa pengecekan resmi harus melalui sistem AHU.
        3. Jika pengguna bertanya tentang modal, jelaskan kategori modal dasar (Kecil < 1M, Menengah 1-5M, Besar > 10M).
        4. Arahkan pengguna untuk konsultasi lebih lanjut ke WhatsApp B-Legal jika butuh bantuan detail.
        5. Gunakan bahasa Indonesia yang baik dan sopan.
      `;

      const result = await ai.models.generateContent({
        model: MODEL_NAME,
        contents: prompt,
      });
      const text = result.text;
      setResponse(text || "Maaf, saya tidak dapat memberikan jawaban saat ini.");
    } catch (error) {
      console.error("AI Error:", error);
      setResponse("Maaf, terjadi kesalahan saat memproses pertanyaan Anda. Silakan coba lagi atau hubungi kami via WhatsApp.");
    } finally {
      setLoading(false);
    }
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
              <span className="text-brand-gold text-sm font-medium tracking-wide">Partner Legalitas Terpercaya #1 di Bali</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-serif font-bold leading-tight drop-shadow-lg text-white">
              Legalitas Bisnis <br/>
              <span className="text-brand-gold relative inline-block">
                Tanpa Ribet
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-gold opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>, <br/>
              <span className="text-brand-gold">Fokus Cuan!</span>
            </h1>
            
            <p className="text-lg text-gray-100 max-w-xl leading-relaxed font-light">
              Urus pendirian PT, CV, Yayasan, dan perizinan bisnis Anda dengan cepat, aman, dan terpercaya bersama B-Legal. Kami urus dokumennya, Anda fokus kembangkan bisnisnya.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="bg-brand-gold text-brand-brown hover:bg-white hover:text-brand-brown font-bold px-8 h-12 shadow-lg shadow-brand-gold/20 transition-all hover:scale-105" onClick={() => window.open("https://wa.me/62811392146", "_blank")}>
                Konsultasi Gratis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-brown h-12 px-8 backdrop-blur-sm bg-white/5" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                Lihat Layanan
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
                <p className="text-white font-bold">1,000+ Pengusaha</p>
                <p className="text-gray-300 text-xs">Telah mempercayakan legalitasnya</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image & AI Assistant */}
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
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
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
                  <p className="text-xs md:text-sm text-gray-600 font-medium">Bisnis Sukses</p>
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
                <p className="text-sm font-bold text-gray-800">Konsultan Tersertifikasi</p>
              </motion.div>

               {/* Badge 3: Experience (Bottom Right) */}
               <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="absolute bottom-32 -right-2 md:-right-6 bg-white p-3 rounded-xl shadow-xl z-20 border border-gray-100 text-center"
              >
                <div className="flex justify-center gap-1 mb-1">
                   {[1,2,3,4,5].map(i => (
                     <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#D4AF37" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                   ))}
                </div>
                <p className="text-lg font-bold text-brand-brown leading-none">+10 Tahun</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Pengalaman</p>
              </motion.div>
            </motion.div>

            {/* AI Assistant Card - Floating Overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="absolute -bottom-12 left-0 right-0 z-30 mx-4"
            >
              <div className="bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl max-w-md mx-auto ring-1 ring-black/5">
                <div className="flex items-center gap-3 mb-3 border-b border-gray-100 pb-3">
                  <div className="p-1.5 bg-brand-gold rounded-lg shadow-sm">
                    <Bot className="h-5 w-5 text-brand-brown" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold text-sm">AI Legal Assistant</h3>
                    <p className="text-[10px] text-gray-500">Online • Siap membantu</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-3 min-h-[80px] max-h-[120px] overflow-y-auto text-sm text-gray-700">
                    {response ? (
                      <div className="prose prose-sm max-w-none">
                        <p>{response}</p>
                      </div>
                    ) : (
                      <p className="text-gray-500 italic text-xs">
                        "Halo! Saya asisten AI B-Legal. Cek syarat PT atau ketersediaan nama di sini."
                      </p>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
                      placeholder="Tanya legalitas..."
                      className="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                    />
                    <Button 
                      onClick={handleAskAI} 
                      disabled={loading}
                      size="sm"
                      className="bg-brand-gold text-brand-brown hover:bg-brand-gold-light"
                    >
                      {loading ? <Loader2 className="h-3 w-3 animate-spin" /> : <Send className="h-3 w-3" />}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
