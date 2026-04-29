import React, { useEffect } from 'react';

export function RdtrPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "B-Legal | Cek RDTR Interaktif";
    const metaDesc = document.querySelector('meta[name="description"]');
    const oldDesc = metaDesc?.getAttribute("content");
    if (metaDesc) {
      metaDesc.setAttribute("content", "B-Legal — Cek peruntukan zona tata ruang dan buat polygon SHP untuk keperluan perizinan OSS RBA dengan RDTR Interaktif resmi dari Kementerian ATR/BPN.");
    }
    return () => {
      document.title = "Jasa Pendirian PT, CV & Izin Usaha di Bali | B-Legal";
      if (metaDesc && oldDesc) {
        metaDesc.setAttribute("content", oldDesc);
      }
    };
  }, []);

  return (
    <div className="rdtr-page-wrapper">
      <style dangerouslySetInnerHTML={{__html: `
        .rdtr-page-wrapper {
          --bg: #fbf8f3;
          --surface: #ffffff;
          --ink: #1a1614;
          --ink-soft: #5a5048;
          --accent: #a83232;       /* terracotta merah-bata khas Bali */
          --accent-soft: #e9d5c8;
          --line: #e6dfd4;
          --gold: #b8893a;
          --shadow: 0 4px 24px rgba(26, 22, 20, 0.08);

          font-family: 'Inter', sans-serif;
          background: var(--bg);
          color: var(--ink);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          min-height: calc(100vh - 64px);
        }

        .rdtr-page-wrapper * { box-sizing: border-box; }

        .rdtr-page-wrapper .ornament-strip {
          height: 6px;
          background:
            repeating-linear-gradient(90deg,
              var(--accent) 0 12px,
              var(--gold) 12px 24px,
              var(--ink) 24px 28px,
              var(--gold) 28px 40px);
        }

        .rdtr-page-wrapper .container-custom {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .rdtr-page-wrapper header.page-header {
          padding: 48px 0 32px;
          border-bottom: 1px solid var(--line);
          background: var(--surface);
        }

        .rdtr-page-wrapper .header-top {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
          color: var(--ink-soft);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .rdtr-page-wrapper .header-top .badge {
          background: var(--accent-soft);
          color: var(--accent);
          padding: 4px 10px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 11px;
        }

        .rdtr-page-wrapper h1.rdtr-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(2rem, 4.5vw, 3.25rem);
          font-weight: 600;
          line-height: 1.1;
          letter-spacing: -0.02em;
          max-width: 850px;
          margin-bottom: 20px;
        }

        .rdtr-page-wrapper h1.rdtr-title em {
          font-style: italic;
          color: var(--accent);
          font-weight: 400;
        }

        .rdtr-page-wrapper .lede {
          font-size: 1.125rem;
          color: var(--ink-soft);
          max-width: 720px;
        }

        .rdtr-page-wrapper section.intro {
          padding: 56px 0 32px;
        }

        .rdtr-page-wrapper section.intro .container-custom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }

        @media (max-width: 768px) {
          .rdtr-page-wrapper section.intro .container-custom {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        .rdtr-page-wrapper .intro-text h2.rdtr-subtitle {
          font-family: 'Fraunces', serif;
          font-size: 1.75rem;
          font-weight: 600;
          margin-bottom: 16px;
          letter-spacing: -0.01em;
        }

        .rdtr-page-wrapper .intro-text p { color: var(--ink-soft); margin-bottom: 14px; }
        .rdtr-page-wrapper .intro-text strong { color: var(--ink); }

        .rdtr-page-wrapper .info-card {
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 4px;
          padding: 28px;
          box-shadow: var(--shadow);
          position: relative;
          overflow: hidden;
        }

        .rdtr-page-wrapper .info-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--accent);
        }

        .rdtr-page-wrapper .info-card h3.rdtr-h3 {
          font-family: 'Fraunces', serif;
          font-size: 1.25rem;
          margin-bottom: 16px;
        }

        .rdtr-page-wrapper .info-card ul { list-style: none; padding: 0; margin: 0; }
        .rdtr-page-wrapper .info-card li {
          padding: 10px 0;
          border-bottom: 1px solid var(--line);
          display: flex;
          gap: 12px;
          align-items: flex-start;
          font-size: 0.95rem;
        }
        .rdtr-page-wrapper .info-card li:last-child { border-bottom: none; }
        .rdtr-page-wrapper .info-card li::before {
          content: "→";
          color: var(--accent);
          font-weight: 600;
          flex-shrink: 0;
        }

        .rdtr-page-wrapper section.tool {
          padding: 32px 0 80px;
        }

        .rdtr-page-wrapper .tool-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 20px;
        }

        .rdtr-page-wrapper .tool-header h2.rdtr-subtitle {
          font-family: 'Fraunces', serif;
          font-size: 1.75rem;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .rdtr-page-wrapper .tool-source {
          font-size: 0.85rem;
          color: var(--ink-soft);
          margin-bottom: 0;
        }

        .rdtr-page-wrapper .tool-source a {
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px dotted var(--accent);
        }

        .rdtr-page-wrapper .iframe-wrapper {
          position: relative;
          width: 100%;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 4px;
          overflow: hidden;
          box-shadow: var(--shadow);
        }

        .rdtr-page-wrapper .iframe-wrapper iframe {
          width: 100%;
          height: 80vh;
          min-height: 600px;
          border: none;
          display: block;
        }

        .rdtr-page-wrapper .iframe-fallback {
          padding: 14px 20px;
          background: #fff8e6;
          border-top: 1px solid var(--line);
          font-size: 0.875rem;
          color: var(--ink-soft);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .rdtr-page-wrapper .iframe-fallback a {
          color: var(--accent);
          font-weight: 600;
          text-decoration: none;
        }

        .rdtr-page-wrapper footer.custom-footer {
          background: var(--ink);
          color: #d4cdc2;
          padding: 32px 0;
          font-size: 0.875rem;
        }

        .rdtr-page-wrapper footer.custom-footer .container-custom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .rdtr-page-wrapper footer.custom-footer a { color: #fff; text-decoration: none; }
      `}} />

      <div className="ornament-strip" aria-hidden="true"></div>

      <header className="page-header">
        <div className="container-custom">
          <div className="header-top">
            <span className="badge">B-Legal</span>
            <span>Cek RDTR Interaktif</span>
          </div>
          <h1 className="rdtr-title">RDTR Interaktif &mdash; <em>cek tata ruang sebelum berusaha</em></h1>
          <p className="lede">
            Pastikan lokasi usaha Anda sesuai zonasi sebelum mengurus perizinan.
            Gunakan tool resmi dari Kementerian ATR/BPN untuk mengecek peruntukan
            ruang dan menyiapkan polygon SHP untuk OSS RBA.
          </p>
        </div>
      </header>

      <section className="intro">
        <div className="container-custom">
          <div className="intro-text">
            <h2 className="rdtr-subtitle">Untuk apa tool ini?</h2>
            <p>
              <strong>RDTR Interaktif</strong> adalah aplikasi WebGIS resmi yang dikelola
              oleh Direktorat Jenderal Tata Ruang, Kementerian Agraria dan Tata
              Ruang/BPN. Aplikasi ini menampilkan rencana detail tata ruang yang
              telah disahkan melalui Perda/Perkada dan terintegrasi langsung dengan
              sistem OSS-KKPR.
            </p>
            <p>
              Bagi pelaku usaha di seluruh Indonesia, tool ini membantu Anda mengetahui
              <strong> peruntukan zona</strong>, <strong>kegiatan yang diizinkan</strong>,
              serta menghitung simulasi <strong>KDB, KLB, dan RTH minimal</strong>
              pada lokasi yang dituju. Anda juga dapat membuat polygon SHP yang
              dibutuhkan saat mengajukan NIB.
            </p>
          </div>

          <div className="info-card">
            <h3 className="rdtr-h3">Yang bisa Anda lakukan</h3>
            <ul>
              <li>Cek zonasi dan sub-zona pada titik lokasi tertentu</li>
              <li>Lihat kegiatan yang diizinkan, dibatasi, atau bersyarat (matriks ITBX)</li>
              <li>Simulasi otomatis KDB, KLB, dan luas RTH minimal</li>
              <li>Buat polygon SHP untuk syarat perizinan OSS RBA</li>
              <li>Akses peta dasar resmi yang sama dengan sistem OSS</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="tool">
        <div className="container-custom">
          <div className="tool-header">
            <h2 className="rdtr-subtitle">Tool RDTR Interaktif</h2>
            <p className="tool-source">
              Sumber: <a href="https://gistaru.atrbpn.go.id/rdtrinteraktif/" target="_blank" rel="noopener noreferrer">gistaru.atrbpn.go.id</a> &middot; Kementerian ATR/BPN
            </p>
          </div>

          <div className="iframe-wrapper">
            <iframe
              src="https://gistaru.atrbpn.go.id/rdtrinteraktif/"
              title="RDTR Interaktif - GISTARU Kementerian ATR/BPN"
              loading="lazy"
              allow="geolocation; fullscreen"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>

            <div className="iframe-fallback">
              <span>Tidak bisa berinteraksi dengan peta? Buka aplikasi di tab baru.</span>
              <a href="https://gistaru.atrbpn.go.id/rdtrinteraktif/" target="_blank" rel="noopener noreferrer">
                Buka di tab baru &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="custom-footer">
        <div className="container-custom">
          <div>&copy; {new Date().getFullYear()} B-Legal &middot; Cek RDTR Interaktif</div>
          <div>
            Tool dikembangkan oleh <a href="https://gistaru.atrbpn.go.id/" target="_blank" rel="noopener noreferrer">GISTARU - Kementerian ATR/BPN</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
