import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const isEn = location.pathname === '/en';

  const enNavItems = [
    { name: "Services", href: "/en#services" },
    { name: "Pricing", href: "/en#pricing" },
    { name: "FAQ", href: "/en#faq" },
    { name: "Check RDTR", href: "/cek-kbli-terbaru" },
    { name: "Check KBLI", href: "/cek-kbli" },
    { name: "Check Company Name", href: "/cek-nama-pt" },
    { name: "PMA (Foreign Co.)", href: "/pma" },
  ];

  const idNavItems = [
    { name: "Layanan", href: "/#services" },
    { name: "Harga", href: "/#pricing" },
    { name: "FAQ", href: "/#faq" },
    { name: "Cek RDTR", href: "/cek-kbli-terbaru" },
    { name: "Cek KBLI", href: "/cek-kbli" },
    { name: "Cek Nama PT", href: "/cek-nama-pt" },
    { name: "PMA (Asing)", href: "/pma" },
  ];

  const navItems = isEn ? enNavItems : idNavItems;

  const toggleLanguage = () => {
    if (isEn) {
      navigate("/");
    } else {
      navigate("/en");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={isEn ? "/en" : "/"} className="flex items-center gap-2">
          <img 
            src="https://i.ibb.co.com/pvbhdqQ1/Screenshot-2026-03-02-at-16-18-47-removebg-preview.png" 
            alt="B-Legal Logo" 
            className="h-10 w-auto object-contain" 
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-medium text-gray-600 hover:text-brand-brown transition-colors"
            >
              {item.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-4 border-l border-gray-200 pl-4 ml-2">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-brand-brown transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span>{isEn ? "EN" : "ID"}</span>
            </button>
            <Button variant="default" size="sm" onClick={() => window.open("https://app.linktochat.id/api/pr/blegal", "_blank")}>
              Consult Now
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm font-medium text-gray-600"
          >
            <Globe className="h-4 w-4" />
            <span>{isEn ? "EN" : "ID"}</span>
          </button>
          <button
            className="p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t bg-white p-4">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-gray-600 hover:text-brand-brown"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full mt-2" onClick={() => window.open("https://app.linktochat.id/api/pr/blegal", "_blank")}>
              Consult Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
