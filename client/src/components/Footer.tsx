import { Heart, Mail, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-card via-background to-card border-t border-border/50 mt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <Heart className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full" />
              </div>
              <span className="font-serif text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Bem-Estar Espiritual
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Plataforma baseada em evidências científicas e Logoterapia para promover o cuidado espiritual no campo da saúde.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-medium mb-4 text-foreground">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/proposito" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-proposito">
                  Descobrir Propósito
                </Link>
              </li>
              <li>
                <Link href="/praticas" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-praticas">
                  Práticas Espirituais
                </Link>
              </li>
              <li>
                <Link href="/jornada" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-jornada">
                  Minha Jornada
                </Link>
              </li>
              <li>
                <Link href="/momento-dificil" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-momento">
                  Momento Difícil
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-medium mb-4 text-foreground">Acadêmico</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/referencias" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-referencias">
                  Referências ABNT
                </Link>
              </li>
              <li>
                <Link href="/aprenda" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-aprenda">
                  Base Científica
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
            <h3 className="font-serif font-medium mb-4 text-foreground">Projeto</h3>
            <div className="space-y-3 text-sm">
              <p className="text-muted-foreground leading-relaxed">
                Trabalho acadêmico desenvolvido na disciplina de Espiritualidade no Campo da Saúde.
              </p>
              <p className="text-muted-foreground text-xs">
                UFF - Escola de Enfermagem Aurora de Afonso Costa
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-10">
          <div className="glass-effect rounded-2xl p-6 mb-6 max-w-4xl mx-auto">
            <p className="text-sm text-foreground font-medium mb-3 text-center">
              Desenvolvido por acadêmicos de enfermagem da UFF
            </p>
            <p className="text-xs text-muted-foreground text-center mb-4">
              Disciplina: Espiritualidade no Campo da Saúde
            </p>
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              © 2025 • Projeto acadêmico sem fins lucrativos • Conteúdo baseado em evidências científicas
              <br />
              UFF - Escola de Enfermagem Aurora de Afonso Costa • Orientação: Profª Drª Eliane Ramos Pereira
            </p>
          </div>
          <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900 max-w-4xl mx-auto">
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              <strong className="text-foreground">Importante:</strong> Todas as práticas e recursos apresentados têm caráter educativo e informativo. Este conteúdo não substitui orientação médica, psicológica ou espiritual formal. Em caso de sofrimento emocional ou crise, procure um profissional de saúde qualificado.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
