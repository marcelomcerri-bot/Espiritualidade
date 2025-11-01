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
    { name: "Mensagem da Alma", href: "/mensagem-alma" },
    { name: "Aprenda Mais", href: "/aprenda" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover-elevate rounded-lg px-3 py-2 transition-all mr-6">
            <Heart className="w-6 h-6 text-primary" />
            <span className="font-serif text-xl font-medium text-foreground">
              Bem-Estar Espiritual
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
              >
                <Button
                  variant={location === item.href ? "default" : "ghost"}
                  size="sm"
                  className={`transition-all duration-300 ${
                    location === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                  data-testid={`link-${item.name.toLowerCase().replace(" ", "-")}`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <Link href="/momento-dificil">
              <Button 
                variant={location === "/momento-dificil" ? "default" : "outline"} 
                size="sm" 
                data-testid="button-momento-dificil"
              >
                Momento Difícil
              </Button>
            </Link>
            <Link href="/sobre">
              <Button 
                variant={location === "/sobre" ? "default" : "outline"} 
                size="sm" 
                data-testid="button-sobre"
              >
                Sobre
              </Button>
            </Link>
            <Link href="/referencias">
              <Button 
                variant={location === "/referencias" ? "default" : "outline"} 
                size="sm" 
                data-testid="button-referencias"
              >
                Referências
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover-elevate rounded-md"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
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
                className={`block px-4 py-2 rounded-md text-sm font-medium hover-elevate ${
                  location === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground"
                }`}
                data-testid={`link-mobile-${item.name.toLowerCase().replace(" ", "-")}`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Link href="/momento-dificil">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="button-mobile-momento-dificil"
                >
                  Momento Difícil
                </Button>
              </Link>
              <Link href="/sobre">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="button-mobile-sobre"
                >
                  Sobre
                </Button>
              </Link>
              <Link href="/referencias">
                <Button
                  variant="default"
                  className="w-full"
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
