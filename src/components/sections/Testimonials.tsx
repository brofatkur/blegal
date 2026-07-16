import { Star, User } from "lucide-react";

export function Testimonials({ lang = 'id' }: { lang?: 'id' | 'en' }) {
  const t = {
    title: lang === 'en' ? 'What They Say' : 'Apa Kata Mereka?',
    subtitle: lang === 'en' ? 'Based on Google Reviews' : 'Berdasarkan ulasan pelanggan di Google Reviews',
  };

  const reviews = lang === 'en' ? [
    {
      name: "Budi Santoso",
      role: "Tech Startup Founder",
      content: "Very fast and professional service. My PT was completed in 3 working days. Highly recommended!",
      rating: 5,
    },
    {
      name: "Siti Aminah",
      role: "Online Boutique Owner",
      content: "Initially confused whether to establish a CV or PT, but after consulting I understood perfectly. Thank you B-Legal!",
      rating: 5,
    },
    {
      name: "Andi Wijaya",
      role: "Contractor",
      content: "Transparent pricing, no hidden costs. The documents are complete and well organized.",
      rating: 5,
    },
  ] : [
    {
      name: "Budi Santoso",
      role: "Founder Startup Teknologi",
      content: "Pelayanan sangat cepat dan profesional. PT saya selesai dalam waktu 3 hari kerja. Sangat recommended!",
      rating: 5,
    },
    {
      name: "Siti Aminah",
      role: "Pemilik Butik Online",
      content: "Awalnya bingung mau bikin CV atau PT, tapi setelah konsultasi jadi paham. Terima kasih B-Legal!",
      rating: 5,
    },
    {
      name: "Andi Wijaya",
      role: "Kontraktor",
      content: "Harga transparan, tidak ada biaya tambahan di tengah jalan. Dokumen lengkap dan rapi.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-brown mb-4">
            {t.title}
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 text-brand-gold fill-brand-gold" />
              ))}
            </div>
            <span className="text-xl font-bold text-gray-900">4.9/5.0</span>
          </div>
          <p className="text-sm text-gray-500">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-brand-gold fill-brand-gold" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{review.content}"</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-brand-brown/10 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-brand-brown" />
                </div>
                <div>
                  <p className="font-semibold text-brand-brown text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
             <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-4 shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="h-8 w-8" referrerPolicy="no-referrer" />
                <div>
                    <p className="font-bold text-gray-900">Google Reviews</p>
                    <div className="flex items-center gap-1">
                        <span className="text-sm font-medium">4.9</span>
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-3 w-3 text-brand-gold fill-brand-gold" />
                            ))}
                        </div>
                    </div>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
}
