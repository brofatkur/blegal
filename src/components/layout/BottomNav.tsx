import { Home, Briefcase, DollarSign, MessageCircle } from "lucide-react";

export function BottomNav() {
  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Services", href: "#services", icon: Briefcase },
    { name: "Price", href: "#pricing", icon: DollarSign },
    { name: "Chat", href: "https://wa.me/62811392146", icon: MessageCircle, external: true },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden pb-2">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-brand-brown active:text-brand-brown transition-colors"
            >
              <Icon className="h-5 w-5 mb-1" />
              <span className="text-[10px] font-medium">{item.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
