import React, { useEffect } from 'react';

export function CekKbliPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "B-Legal | Cek KBLI 2025";
  }, []);

  return (
    <div className="flex-grow flex flex-col w-full min-h-[calc(100vh-64px)] bg-[#fbf8f3]">
      <div className="bg-brand-brown text-white py-8 px-4 text-center shrink-0">
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-2">Cek KBLI 2025</h1>
        <p className="text-sm text-gray-200">Klasifikasi Baku Lapangan Usaha Indonesia (KBLI) 2025</p>
      </div>
      
      <div className="flex-grow w-full max-w-7xl mx-auto p-4 md:p-8 flex flex-col">
        <div className="w-full flex-grow bg-white border border-[#e6dfd4] rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(26,22,20,0.08)] flex flex-col min-h-[700px]">
          <iframe
            src="https://brofatkur.github.io/blegal-kbli/"
            className="w-full flex-grow border-0 min-h-[650px]"
            title="Cek KBLI B-Legal"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="p-5 bg-gray-50 border-t border-[#e6dfd4] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#5a5048]">
            <span className="text-center sm:text-left">Tampilan kurang optimal? Buka KBLI di tab baru.</span>
            <a 
              href="https://brofatkur.github.io/blegal-kbli/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#b8893a] hover:bg-[#a37a33] text-white px-6 py-3 rounded-lg text-decoration-none font-bold transition-colors whitespace-nowrap shadow-md inline-flex items-center gap-2"
            >
              Buka di Tab Baru &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
