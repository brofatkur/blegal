import React, { useEffect } from 'react';

export function CekNamaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "B-Legal | Cek Nama Perseroan";
  }, []);

  return (
    <div className="flex-grow flex flex-col items-center justify-center bg-[#fbf8f3] p-6 py-20 min-h-[calc(100vh-64px)]">
      <div className="w-full max-w-xl text-center p-10 border border-[#e6dfd4] rounded-2xl bg-white shadow-[0_4px_24px_rgba(26,22,20,0.08)]">
        <div className="bg-brand-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        </div>
        <h3 className="text-3xl font-serif font-bold text-[#1a1614] mb-4">Cek Nama Perseroan di AHU</h3>
        <p className="text-[#5a5048] mb-6 text-lg">
          Website resmi Administrasi Hukum Umum (AHU) membatasi akses tampilan di dalam aplikasi pihak ketiga untuk alasan keamanan.
        </p>
        <p className="text-[#5a5048] mb-8">
          Silakan klik tombol di bawah ini untuk membuka dan mengecek nama perseroan langsung di halaman resmi AHU pada tab baru.
        </p>
        
        <a 
          href="https://ahu.go.id/sabh/perseroan/pesannama" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#b8893a] hover:bg-[#a37a33] text-white px-8 py-4 rounded-xl text-decoration-none font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          Buka Website AHU <span className="text-xl">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
