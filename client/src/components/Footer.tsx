import { Heart, Mail, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-card via-background to-card border-t border-border/50 mt-16 sm:mt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 group">
              <div className="relative">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full" />
              </div>
              <span className="font-serif text-base sm:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
                <Link href="/sobre" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-prof">
                  Corpo Docente
                </Link>
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

        <div className="border-t border-border/30 pt-6 sm:pt-8">
          <div className="bg-card/50 rounded-lg p-4 sm:p-6 mb-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 text-center sm:text-left">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground mb-1">
                  Desenvolvido por acadêmicos de enfermagem da UFF
                </p>
                <p className="text-xs text-muted-foreground">
                  Disciplina: Espiritualidade no Campo da Saúde
                </p>
              </div>
              <div className="flex-1 sm:text-right">
                <p className="text-xs text-muted-foreground mb-1">
                  © 2025 • Projeto acadêmico sem fins lucrativos
                </p>
                <p className="text-xs text-muted-foreground">
                  Conteúdo baseado em evidências científicas
                </p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-border/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-center sm:text-left">
              <p className="text-xs text-muted-foreground">
                UFF - Escola de Enfermagem Aurora de Afonso Costa
              </p>
              <p className="text-xs text-muted-foreground">
                Orientação: Profª Drª Eliane Ramos Pereira, Profª Drª Rose Mary C. R. A. Silva e Profª Drª Diva C. M. R. Leão
              </p>
            </div>
          </div>
          <div className="p-3 sm:p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900">
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              <strong className="text-foreground">Importante:</strong> Todas as práticas e recursos apresentados têm caráter educativo e informativo. Este conteúdo não substitui orientação médica, psicológica ou espiritual formal. Em caso de sofrimento emocional ou crise, procure um profissional de saúde qualificado.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
