export function TrustBar() {
  return (
    <section className="bg-brand-brown-light py-8 border-b border-white/10">
      <div className="container mx-auto px-4">
        <p className="text-center text-brand-gold text-sm font-medium mb-6 uppercase tracking-widest">
          Dipercaya oleh Partner & Klien
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholder Logos - In a real app, use actual SVGs */}
          <div className="text-white font-serif font-bold text-xl">Kemenkumham</div>
          <div className="text-white font-serif font-bold text-xl">OSS RBA</div>
          <div className="text-white font-serif font-bold text-xl">DJP Online</div>
          <div className="text-white font-serif font-bold text-xl">INSW</div>
        </div>
      </div>
    </section>
  );
}
