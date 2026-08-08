import React, { useEffect } from 'react';

export function CekKbliPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "B-Legal | Cek KBLI 2025";
  }, []);

  return (
    <div className="w-full h-[calc(100vh-64px)]">
      <iframe
        src="https://brofatkur.github.io/blegal-kbli/"
        className="w-full h-full border-0"
        title="Cek KBLI B-Legal"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
