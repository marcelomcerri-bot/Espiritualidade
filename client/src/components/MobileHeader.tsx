import { Heart } from "lucide-react";
import { Link } from "wouter";

interface MobileHeaderProps {
  title?: string;
}

export default function MobileHeader({ title }: MobileHeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border/50 md:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <span className="font-serif text-base font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {title || "Cuidado Integral"}
          </span>
        </Link>
      </div>
    </header>
  );
}
