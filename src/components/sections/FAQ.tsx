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

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-brown mb-4">
            Pertanyaan Umum
          </h2>
          <p className="text-gray-600">
            Jawaban untuk hal-hal yang sering ditanyakan calon pengusaha.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
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
