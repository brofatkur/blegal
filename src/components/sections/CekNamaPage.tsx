import React, { useEffect } from 'react';

export function CekNamaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "B-Legal | Cek Nama Perseroan";
  }, []);

  return (
    <div className="flex-grow flex flex-col w-full min-h-[calc(100vh-64px)] bg-[#fbf8f3]">
      <div className="bg-brand-brown text-white py-8 px-4 text-center shrink-0">
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-2">Cek Nama Perseroan di AHU</h1>
        <p className="text-sm text-gray-200">Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia</p>
      </div>
      
      <div className="flex-grow w-full max-w-7xl mx-auto p-4 md:p-8 flex flex-col">
        <div className="w-full flex-grow bg-white border border-[#e6dfd4] rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(26,22,20,0.08)] flex flex-col min-h-[600px]">
          <iframe
            src="https://ahu.go.id/sabh/perseroan/pesannama"
            className="w-full flex-grow border-0 min-h-[500px]"
            title="Cek Nama Perseroan di AHU"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="p-5 bg-gray-50 border-t border-[#e6dfd4] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#5a5048]">
            <span className="text-center sm:text-left">Halaman tidak muncul? (Beberapa website memblokir akses iframe). Klik tombol untuk buka halaman resmi AHU.</span>
            <a 
              href="https://ahu.go.id/sabh/perseroan/pesannama" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#b8893a] hover:bg-[#a37a33] text-white px-6 py-3 rounded-lg text-decoration-none font-bold transition-colors whitespace-nowrap shadow-md inline-flex items-center gap-2"
            >
              Buka Website AHU &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
