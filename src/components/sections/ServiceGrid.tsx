import { Building2, FileText, Users, Scale, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Pendirian PT",
    description: "Badan usaha berbadan hukum, perlindungan aset pribadi, dan kredibilitas tinggi.",
    icon: Building2,
    features: ["SK Kemenkumham", "Akta Notaris", "NIB & NPWP"],
  },
  {
    title: "Pendirian CV",
    description: "Solusi badan usaha untuk modal menengah dengan proses yang sesuai dengan regulasi dan ketentuan.",
    icon: Users,
    features: ["Akta Pendirian", "SK Terdaftar", "NIB & NPWP"],
  },
  {
    title: "Yayasan",
    description: "Badan hukum untuk kegiatan sosial, keagamaan, dan kemanusiaan.",
    icon: Scale,
    features: ["Akta Notaris", "SK Kemenkumham", "Izin Operasional"],
  },
  {
    title: "Perizinan (NIB & OSS)",
    description: "Urus Nomor Induk Berusaha (NIB) dan izin operasional via sistem OSS RBA.",
    icon: FileText,
    features: ["NIB RBA", "Sertifikat Standar", "Izin Lokasi"],
  },
];

export function ServiceGrid({ lang = 'id' }: { lang?: 'id' | 'en' }) {
  const t = {
    title: lang === 'en' ? 'Comprehensive Legal Services' : 'Layanan Legalitas Terlengkap',
    desc: lang === 'en' ? 'We provide end-to-legal business solutions. Focus on growing your business, let us handle the paperwork.' : 'Kami menyediakan solusi legalitas bisnis dari hulu ke hilir. Fokus kembangkan bisnis Anda, biarkan kami yang urus dokumennya.',
    btn: lang === 'en' ? 'Consult Now' : 'Konsultasi Sekarang'
  };

  const currentServices = lang === 'en' ? [
    {
      title: "PT Establishment",
      description: "Legal entity with limited liability, personal asset protection, and high credibility.",
      icon: Building2,
      features: ["Ministry Approval (SK)", "Notary Deed", "NIB & Tax ID (NPWP)"],
    },
    {
      title: "CV Establishment",
      description: "Business entity solution for medium capital with efficient processing according to regulations.",
      icon: Users,
      features: ["Deed of Establishment", "Registered SK", "NIB & Tax ID (NPWP)"],
    },
    {
      title: "Foundation (Yayasan)",
      description: "Legal entity for social, religious, and humanitarian activities.",
      icon: Scale,
      features: ["Notary Deed", "Ministry Approval", "Operational License"],
    },
    {
      title: "Licenses (NIB & OSS)",
      description: "Process your Business Identification Number (NIB) and operational licenses via OSS RBA.",
      icon: FileText,
      features: ["NIB RBA", "Standard Certificate", "Location Permit"],
    }
  ] : services;

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-brown mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-brand-brown/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors">
                  <Icon className="h-6 w-6 text-brand-brown group-hover:text-brand-brown-light" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-brand-brown mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-500">
                      <CheckCircle2 className="h-3 w-3 text-brand-gold mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => window.open(`https://app.linktochat.id/api/pr/blegal`, "_blank")}
                  className="text-brand-brown font-bold text-sm hover:text-brand-gold transition-colors flex items-center gap-2 group/btn"
                >
                  {t.btn}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
