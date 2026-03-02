import { MessageSquare, FileCheck, ShieldCheck } from "lucide-react";

export function Workflow() {
  const steps = [
    {
      icon: MessageSquare,
      title: "1. Konsultasi Gratis",
      description: "Diskusikan kebutuhan bisnis Anda dengan tim ahli kami. Kami akan merekomendasikan badan usaha yang paling tepat.",
    },
    {
      icon: FileCheck,
      title: "2. Kirim Data Digital",
      description: "Cukup kirimkan foto KTP, NPWP, dan data pendukung lainnya via WhatsApp atau Email. Tanpa perlu datang ke kantor.",
    },
    {
      icon: ShieldCheck,
      title: "3. Dokumen Jadi",
      description: "Kami proses legalitas Anda hingga tuntas. Dokumen fisik akan dikirimkan ke alamat Anda dengan aman.",
    },
  ];

  return (
    <section className="py-20 bg-brand-brown text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-gold mb-4">
            3 Langkah Mudah
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Proses pendirian badan usaha tidak pernah semudah ini. Hemat waktu, tenaga, dan biaya.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-brand-gold/30 -z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-brand-brown border-4 border-brand-gold rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="h-10 w-10 text-brand-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
