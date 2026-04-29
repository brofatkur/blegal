import { Home, Briefcase, DollarSign, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function BottomNav() {
  const navItems = [
    { name: "Home", href: "/#home", icon: Home },
    { name: "Services", href: "/#services", icon: Briefcase },
    { name: "Price", href: "/#pricing", icon: DollarSign },
    { name: "Chat", href: "https://app.linktochat.id/api/pr/blegal", icon: MessageCircle, external: true },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden pb-2">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          
          if (item.external) {
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-brand-brown active:text-brand-brown transition-colors"
              >
                <Icon className="h-5 w-5 mb-1" />
                <span className="text-[10px] font-medium">{item.name}</span>
              </a>
            );
          }

          return (
            <Link
              key={item.name}
              to={item.href}
              className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-brand-brown active:text-brand-brown transition-colors"
            >
              <Icon className="h-5 w-5 mb-1" />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
