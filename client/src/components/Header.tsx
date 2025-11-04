import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Descobrir Propósito", href: "/proposito" },
    { name: "Meu Diário", href: "/diario" },
    { name: "Práticas", href: "/praticas" },
    { name: "Minha Jornada", href: "/jornada" },
    { name: "Reflexões que Curam", href: "/mensagem-alma" },
    { name: "Aprenda Mais", href: "/aprenda" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-50" />
      <nav className="relative max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 hover-lift rounded-xl px-2 sm:px-3 py-2 transition-all flex-shrink-0 group">
            <div className="relative">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-sm sm:text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Cuidado Espiritual
              </span>
              <span className="font-serif text-[10px] sm:text-xs text-muted-foreground">na Saúde Mental</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
              >
                <Button
                  variant={location === item.href ? "default" : "ghost"}
                  size="sm"
                  className={`transition-all duration-300 font-medium ${
                    location === item.href
                      ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-md hover:shadow-lg"
                      : "text-foreground hover:bg-primary/10 hover:text-primary hover:scale-105"
                  }`}
                  data-testid={`link-${item.name.toLowerCase().replace(" ", "-")}`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <Link href="/momento-dificil">
              <Button 
                variant={location === "/momento-dificil" ? "default" : "outline"} 
                size="sm"
                className="hover-lift font-medium"
                data-testid="button-momento-dificil"
              >
                Momento Difícil
              </Button>
            </Link>
            <Link href="/sobre">
              <Button 
                variant={location === "/sobre" ? "default" : "outline"} 
                size="sm"
                className="hover-lift font-medium"
                data-testid="button-sobre"
              >
                Sobre
              </Button>
            </Link>
            <Link href="/referencias">
              <Button 
                variant={location === "/referencias" ? "default" : "outline"} 
                size="sm"
                className="hover-lift font-medium"
                data-testid="button-referencias"
              >
                Referências
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 hover-elevate rounded-md min-w-[44px] min-h-[44px] flex items-center justify-center"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2 animate-fade-in">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-md text-base font-medium hover-elevate min-h-[48px] flex items-center ${
                  location === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground"
                }`}
                data-testid={`link-mobile-${item.name.toLowerCase().replace(" ", "-")}`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <Link href="/momento-dificil">
                <Button
                  variant="outline"
                  className="w-full text-base min-h-[48px] py-3"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="button-mobile-momento-dificil"
                >
                  Momento Difícil
                </Button>
              </Link>
              <Link href="/sobre">
                <Button
                  variant="outline"
                  className="w-full text-base min-h-[48px] py-3"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="button-mobile-sobre"
                >
                  Sobre
                </Button>
              </Link>
              <Link href="/referencias">
                <Button
                  variant="default"
                  className="w-full text-base min-h-[48px] py-3"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="button-mobile-referencias"
                >
                  Referências
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
