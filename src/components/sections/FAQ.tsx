import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

const faqs = [
  {
    question: "Berapa lama proses pendirian PT?",
    answer: "Proses pendirian PT standar memakan waktu 14-20 hari kerja setelah penandatanganan minuta akta. Untuk paket kilat, bisa selesai lebih cepat tergantung kelengkapan dokumen.",
  },
  {
    question: "Apakah saya harus datang ke kantor notaris?",
    answer: "Tidak wajib. Kami menyediakan layanan tanda tangan sirkuler atau penghadapan via video call (sesuai kebijakan notaris rekanan) untuk memudahkan Anda yang berada di luar kota.",
  },
  {
    question: "Apakah data saya aman?",
    answer: "Sangat aman. Kami menjamin kerahasiaan data klien dan hanya menggunakannya untuk keperluan pengurusan legalitas. Kami bekerja sama dengan Notaris resmi terdaftar.",
  },
  {
    question: "Apa bedanya PT Perorangan dan PT Biasa?",
    answer: "PT Perorangan hanya untuk UMK dengan 1 pendiri, tanggung jawab terbatas pada modal. PT Biasa minimal 2 pendiri, struktur lebih kompleks (Direksi & Komisaris), dan lebih kredibel untuk tender besar.",
  },
  {
    question: "Apakah harga sudah termasuk biaya notaris?",
    answer: "Ya, harga yang tertera sudah ALL-IN termasuk jasa notaris, PNBP Kemenkumham, dan biaya administrasi lainnya. Tidak ada biaya tersembunyi.",
  },
  {
    question: "Bagaimana dokumen dikirim?",
    answer: "Dokumen legalitas yang telah selesai dapat diambil langsung di kantor kami, atau kami kirimkan ke alamat Anda menggunakan jasa kurir terpercaya/ekspedisi yang aman dan berasuransi.",
  },
];

export function FAQ({ lang = 'id' }: { lang?: 'id' | 'en' }) {
  const t = {
    title: lang === 'en' ? 'Frequently Asked Questions' : 'Pertanyaan Umum',
    desc: lang === 'en' ? 'Answers to questions frequently asked by prospective entrepreneurs.' : 'Jawaban untuk hal-hal yang sering ditanyakan calon pengusaha.',
  };

  const currentFaqs = lang === 'en' ? [
    {
      question: "How long does the PT establishment process take?",
      answer: "The standard PT establishment process takes 14-20 working days after signing the deed minutes. For express packages, it can be completed faster depending on document completeness.",
    },
    {
      question: "Do I have to come to the notary's office?",
      answer: "Not necessarily. We provide circular signature services or video call appearances (according to partner notary policies) to make it easier for those outside the city.",
    },
    {
      question: "Is my data safe?",
      answer: "Very safe. We guarantee the confidentiality of client data and only use it for legality processing. We work with officially registered Notaries.",
    },
    {
      question: "What is the difference between an Individual PT and a Regular PT?",
      answer: "An Individual PT is only for Micro and Small Enterprises with 1 founder, liability limited to capital. A Regular PT requires a minimum of 2 founders, a more complex structure (Directors & Commissioners), and is more credible for large tenders.",
    },
    {
      question: "Are notary fees included in the price?",
      answer: "Yes, the listed prices are ALL-IN including notary services, Ministry of Law and Human Rights non-tax state revenue (PNBP), and other administrative costs. There are no hidden fees.",
    },
    {
      question: "How are the documents sent?",
      answer: "Completed legality documents can be picked up directly at our office, or we can send them to your address using trusted/safe and insured courier services.",
    },
  ] : faqs;

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-brown mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600">
            {t.desc}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {currentFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-medium text-brand-brown hover:text-brand-brown-light hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
