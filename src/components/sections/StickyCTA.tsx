import { MessageCircle } from "lucide-react";
import { Button } from "../ui/Button";

export function StickyCTA() {
  return (
    <div className="fixed bottom-20 right-4 z-40 md:bottom-8 md:right-8">
      <Button
        className="rounded-full h-14 w-14 shadow-lg bg-[#25D366] hover:bg-[#128C7E] text-white p-0 flex items-center justify-center animate-bounce"
        onClick={() => window.open("https://app.linktochat.id/api/pr/blegal", "_blank")}
      >
        <MessageCircle className="h-8 w-8" />
      </Button>
    </div>
  );
}
