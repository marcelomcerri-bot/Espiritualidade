import { Home, Compass, BookOpen, Heart, Sparkles, MoreHorizontal, MessageCircle } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface NavItem {
  name: string;
  href: string;
  icon: typeof Home;
}

const mainNavItems: NavItem[] = [
  { name: "Início", href: "/", icon: Home },
  { name: "Propósito", href: "/proposito", icon: Compass },
  { name: "Diário", href: "/diario", icon: BookOpen },
  { name: "Práticas", href: "/praticas", icon: Sparkles },
  { name: "Mais", href: "#more", icon: MoreHorizontal },
];

const moreNavItems: NavItem[] = [
  { name: "Minha Jornada", href: "/jornada", icon: Compass },
  { name: "Aprenda Mais", href: "/aprenda", icon: BookOpen },
  { name: "Momento Difícil", href: "/momento-dificil", icon: Heart },
  { name: "LUME", href: "/lume", icon: MessageCircle },
  { name: "Sobre", href: "/sobre", icon: Home },
  { name: "Referências", href: "/referencias", icon: BookOpen },
];

export default function MobileNavigation() {
  const [location] = useLocation();
  const [moreOpen, setMoreOpen] = useState(false);

  const isActiveRoute = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  const isMoreActive = moreNavItems.some(item => isActiveRoute(item.href));

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t border-border safe-area-bottom md:hidden">
        <div className="flex items-center justify-around px-2 py-2">
          {mainNavItems.map((item) => {
            const isMore = item.href === "#more";
            const isActive = isMore ? isMoreActive : isActiveRoute(item.href);
            const Icon = item.icon;

            if (isMore) {
              return (
                <button
                  key={item.name}
                  onClick={() => setMoreOpen(true)}
                  className={`flex flex-col items-center justify-center flex-1 py-2 px-1 rounded-lg transition-all ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  data-testid="button-mobile-more"
                >
                  <Icon className={`w-6 h-6 mb-1 ${isActive ? "text-primary" : ""}`} />
                  <span className="text-[10px] font-medium">{item.name}</span>
                </button>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center justify-center flex-1 py-2 px-1 rounded-lg transition-all ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                data-testid={`nav-mobile-${item.name.toLowerCase()}`}
              >
                <Icon className={`w-6 h-6 mb-1 ${isActive ? "text-primary" : ""}`} />
                <span className="text-[10px] font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <Sheet open={moreOpen} onOpenChange={setMoreOpen}>
        <SheetContent side="bottom" className="rounded-t-2xl">
          <SheetHeader className="pb-4">
            <SheetTitle>Mais opções</SheetTitle>
          </SheetHeader>
          <div className="grid grid-cols-3 gap-4 pb-8">
            {moreNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = isActiveRoute(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMoreOpen(false)}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all hover-elevate ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "bg-muted/50 text-muted-foreground"
                  }`}
                  data-testid={`nav-more-${item.name.toLowerCase().replace(" ", "-")}`}
                >
                  <Icon className="w-6 h-6 mb-2" />
                  <span className="text-xs font-medium text-center">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
