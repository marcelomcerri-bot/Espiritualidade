import { Heart, Mail, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-primary" />
              <span className="font-serif text-lg font-medium">
                Bem-Estar Espiritual
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Plataforma baseada em evidências científicas e Logoterapia para promover o cuidado espiritual na saúde mental.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-medium mb-4 text-foreground">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/proposito">
                  <a className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-proposito">
                    Descobrir Propósito
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/praticas">
                  <a className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-praticas">
                    Práticas Espirituais
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/jornada">
                  <a className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-jornada">
                    Minha Jornada
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/momento-dificil">
                  <a className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-momento">
                    Momento Difícil
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-medium mb-4 text-foreground">Acadêmico</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/referencias">
                  <a className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-referencias">
                    Referências ABNT
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/aprenda">
                  <a className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-aprenda">
                    Base Científica
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="https://pesquisadores.uff.br/researcher/eliane-ramos-pereira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  data-testid="link-footer-prof"
                >
                  Prof. Eliane Ramos Pereira
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-medium mb-4 text-foreground">Contato</h3>
            <div className="space-y-3 text-sm">
              <p className="text-muted-foreground">
                Projeto acadêmico desenvolvido para o seminário de Cuidado Espiritual na Saúde Mental.
              </p>
              <a
                href="mailto:contato@example.com"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                data-testid="link-footer-email"
              >
                <Mail className="w-4 h-4" />
                Suporte
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-card-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Desenvolvido com base nas pesquisas da Profª Eliane Ramos Pereira (UFF) sobre espiritualidade e saúde mental.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2025 • Todos os direitos reservados • Conteúdo baseado em evidências científicas
          </p>
        </div>
      </div>
    </footer>
  );
}
