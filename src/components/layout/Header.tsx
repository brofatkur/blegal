import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/Button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img 
            src="https://i.ibb.co.com/pvbhdqQ1/Screenshot-2026-03-02-at-16-18-47-removebg-preview.png" 
            alt="B-Legal Logo" 
            className="h-10 w-auto object-contain" 
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-brand-brown transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button variant="default" size="sm" onClick={() => window.open("https://app.linktochat.id/api/pr/blegal", "_blank")}>
            Consult Now
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t bg-white p-4">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-brand-brown"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full" onClick={() => window.open("https://app.linktochat.id/api/pr/blegal", "_blank")}>
              Consult Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
