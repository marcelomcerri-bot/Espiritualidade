import { Compass, BookOpen, Heart, TrendingUp, Shield, Sparkles, Flower2, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FeatureCard from "@/components/FeatureCard";
import QuoteCard from "@/components/QuoteCard";
import heroImage from "@assets/generated_images/Peaceful_forest_morning_light_7cfb107a.png";
import { useIsMobile } from "@/hooks/use-mobile";

const features = [
  {
    icon: Compass,
    title: "Descobrir Meu Propósito",
    shortTitle: "Propósito",
    description: "Questionário baseado em Logoterapia para identificar valores essenciais e propósito de vida através de reflexões profundas.",
    shortDesc: "Encontre seu sentido de vida",
    href: "/proposito",
    gradient: "from-primary/10 to-primary/5",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: BookOpen,
    title: "Meu Diário",
    shortTitle: "Diário",
    description: "Espaço personalizado para registro de experiências significativas, gratidão e reflexões sobre fontes de sentido na vida.",
    shortDesc: "Registre suas reflexões",
    href: "/diario",
    gradient: "from-accent/10 to-accent/5",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Heart,
    title: "Práticas",
    shortTitle: "Práticas",
    description: "Catálogo de práticas espirituais como meditação, conexão com a natureza, música contemplativa e exercícios guiados.",
    shortDesc: "Meditação e exercícios",
    href: "/praticas",
    gradient: "from-chart-2/10 to-chart-2/5",
    color: "text-chart-2",
    bg: "bg-chart-2/10",
  },
  {
    icon: TrendingUp,
    title: "Minha Jornada",
    shortTitle: "Jornada",
    description: "Visualização da evolução do seu bem-estar espiritual, emocional e mental através de autoavaliações semanais.",
    shortDesc: "Acompanhe seu progresso",
    href: "/jornada",
    gradient: "from-chart-3/10 to-chart-3/5",
    color: "text-chart-3",
    bg: "bg-chart-3/10",
  },
  {
    icon: Shield,
    title: "Momento Difícil",
    shortTitle: "Apoio",
    description: "Ferramentas de apoio em crises com estratégias espirituais, frases de esperança e exercícios de ancoragem existencial.",
    shortDesc: "Ajuda em momentos difíceis",
    href: "/momento-dificil",
    gradient: "from-chart-4/10 to-chart-4/5",
    color: "text-destructive",
    bg: "bg-destructive/10",
  },
  {
    icon: Sparkles,
    title: "Meu Mapa de Sentido",
    shortTitle: "Mapa",
    description: "Visualização interativa dos pilares que trazem propósito à sua vida, mapeando relações, atividades e valores.",
    shortDesc: "Visualize seus valores",
    href: "/mapa-sentido",
    gradient: "from-chart-5/10 to-chart-5/5",
    color: "text-chart-5",
    bg: "bg-chart-5/10",
  },
];

function MobileHome() {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 py-6 space-y-6">
        <div className="text-center space-y-2">
          <Flower2 className="w-12 h-12 text-primary mx-auto" />
          <h1 className="font-serif text-2xl font-bold text-foreground">
            Olá, bem-vindo
          </h1>
          <p className="text-sm text-muted-foreground">
            Cultive seu bem-estar espiritual
          </p>
        </div>

        <Link href="/proposito">
          <Card className="p-4 bg-gradient-to-r from-primary/20 to-primary/10 border-primary/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Compass className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Comece Agora</p>
                  <p className="text-xs text-muted-foreground">Descubra seu propósito</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-primary" />
            </div>
          </Card>
        </Link>

        <div className="space-y-3">
          <h2 className="font-semibold text-foreground px-1">Recursos</h2>
          <div className="grid grid-cols-2 gap-3">
            {features.slice(0, 4).map((feature) => {
              const Icon = feature.icon;
              return (
                <Link key={feature.href} href={feature.href}>
                  <Card className="p-4 h-full hover-elevate">
                    <div className={`w-10 h-10 rounded-lg ${feature.bg} flex items-center justify-center mb-3`}>
                      <Icon className={`w-5 h-5 ${feature.color}`} />
                    </div>
                    <p className="font-medium text-sm text-foreground">{feature.shortTitle}</p>
                    <p className="text-xs text-muted-foreground mt-1">{feature.shortDesc}</p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="font-semibold text-foreground px-1">Mais Ferramentas</h2>
          <div className="space-y-2">
            {features.slice(4).map((feature) => {
              const Icon = feature.icon;
              return (
                <Link key={feature.href} href={feature.href}>
                  <Card className="p-3 hover-elevate">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg ${feature.bg} flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${feature.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm text-foreground">{feature.shortTitle}</p>
                        <p className="text-xs text-muted-foreground">{feature.shortDesc}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        <Card className="p-4 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
          <p className="text-sm italic text-muted-foreground text-center">
            "Quem tem um porquê para viver pode suportar quase qualquer como."
          </p>
          <p className="text-xs text-primary text-center mt-2 font-medium">
            Viktor Frankl
          </p>
        </Card>

        <div className="text-center py-4">
          <p className="text-xs text-muted-foreground">
            Desenvolvido por estudantes de Enfermagem UFF
          </p>
        </div>
      </div>
    </div>
  );
}

function DesktopHome() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: "brightness(0.5)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/98 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 w-full">
          <div className="max-w-3xl">
            <div className="relative w-24 h-24 mb-10 flex items-center justify-center animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl rounded-full animate-pulse-glow" />
              <Flower2 className="relative w-20 h-20 text-primary animate-float drop-shadow-lg" />
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
              <span className="text-foreground">Descubra o </span>
              <span className="gradient-text">Sentido</span>
              <br />
              <span className="text-foreground">e o </span>
              <span className="gradient-text">Propósito</span>
              <br />
              <span className="text-foreground">da Vida</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Plataforma baseada em <strong className="text-foreground">evidências científicas</strong> e <strong className="text-foreground">Logoterapia</strong> para fortalecer seu bem-estar através do cuidado espiritual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <Link href="/proposito">
                <Button size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all hover-lift" data-testid="button-hero-comecar">
                  Começar Minha Jornada
                </Button>
              </Link>
              <Link href="/aprenda">
                <Button size="lg" variant="outline" className="text-lg px-10 py-6 glass-effect hover-lift" data-testid="button-hero-aprenda">
                  Conheça a Ciência
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider uppercase text-primary px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              Ferramentas Interativas
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mt-6 mb-4 text-foreground">
              Recursos para sua <span className="gradient-text">Jornada</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ferramentas baseadas em Logoterapia e estudos científicos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="hover-lift">
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <QuoteCard
            text="Quem tem um porquê para viver pode suportar quase qualquer como."
            author="Viktor Frankl, fundador da Logoterapia"
          />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Comece sua Jornada Agora
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore ferramentas baseadas em ciência para cultivar esperança e fortalecer seu bem-estar.
          </p>
          <Link href="/proposito">
            <Button size="lg" className="text-lg px-12 py-6 bg-gradient-to-r from-primary to-accent shadow-xl" data-testid="button-cta-comecar">
              Começar Agora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  const isMobile = useIsMobile();
  
  return isMobile ? <MobileHome /> : <DesktopHome />;
}
