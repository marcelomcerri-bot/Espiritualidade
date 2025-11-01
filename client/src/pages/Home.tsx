import { Compass, BookOpen, Heart, TrendingUp, Shield, Sparkles, Flower2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import QuoteCard from "@/components/QuoteCard";
import heroImage from "@assets/generated_images/Peaceful_forest_morning_light_7cfb107a.png";

export default function Home() {
  const features = [
    {
      icon: Compass,
      title: "Descobrir Meu Propósito",
      description: "Questionário baseado em Logoterapia para identificar valores essenciais e propósito de vida através de reflexões profundas.",
      href: "/proposito",
      gradient: "from-primary/10 to-primary/5",
    },
    {
      icon: BookOpen,
      title: "Meu Diário",
      description: "Espaço personalizado para registro de experiências significativas, gratidão e reflexões sobre fontes de sentido na vida.",
      href: "/diario",
      gradient: "from-accent/10 to-accent/5",
    },
    {
      icon: Heart,
      title: "Práticas",
      description: "Catálogo de práticas espirituais como meditação, conexão com a natureza, música contemplativa e exercícios guiados.",
      href: "/praticas",
      gradient: "from-chart-2/10 to-chart-2/5",
    },
    {
      icon: TrendingUp,
      title: "Minha Jornada",
      description: "Visualização da evolução do seu bem-estar espiritual, emocional e mental através de autoavaliações semanais.",
      href: "/jornada",
      gradient: "from-chart-3/10 to-chart-3/5",
    },
    {
      icon: Shield,
      title: "Momento Difícil",
      description: "Ferramentas de apoio em crises com estratégias espirituais, frases de esperança e exercícios de ancoragem existencial.",
      href: "/momento-dificil",
      gradient: "from-chart-4/10 to-chart-4/5",
    },
    {
      icon: Sparkles,
      title: "Meu Mapa de Sentido",
      description: "Visualização interativa dos pilares que trazem propósito à sua vida, mapeando relações, atividades e valores.",
      href: "/mapa-sentido",
      gradient: "from-chart-5/10 to-chart-5/5",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: "brightness(0.65)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />
        
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

      {/* Seminar Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-card">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-5xl font-medium mb-6 text-foreground">
              Cuidado Espiritual na Saúde Mental
            </h2>
            <p className="text-xl text-primary font-medium mb-4">
              Uma Abordagem Científica e Humanizada
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="relative bg-gradient-to-br from-card to-background rounded-3xl p-10 border border-border/50 shadow-xl hover-lift overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <h3 className="relative font-serif text-2xl font-bold mb-6 text-foreground">
                Desenvolvido por Estudantes de <span className="text-primary">Enfermagem</span>
              </h3>
              <p className="relative text-muted-foreground leading-relaxed mb-4">
                Esta plataforma foi criada por discentes do curso de Enfermagem da UFF como parte de seus estudos sobre espiritualidade no campo da saúde. Com dedicação e compromisso acadêmico, buscamos integrar conhecimentos científicos e práticas espirituais para promover bem-estar integral.
              </p>
              <p className="relative text-muted-foreground leading-relaxed">
                A plataforma oferece recursos interativos fundamentados em Logoterapia e estudos fenomenológicos sobre espiritualidade, tornando acessível o conhecimento sobre cuidado espiritual na saúde mental.
              </p>
            </div>
            
            <div className="relative bg-gradient-to-br from-card to-background rounded-3xl p-10 border border-border/50 shadow-xl hover-lift overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <h3 className="relative font-serif text-2xl font-bold mb-6 text-foreground">
                Por Que <span className="text-primary">Cuidado Espiritual</span>?
              </h3>
              <p className="relative text-muted-foreground leading-relaxed mb-6">
                A Organização Mundial da Saúde reconhece desde 2005 a espiritualidade como componente integral da saúde. Pesquisas demonstram que cultivar a dimensão espiritual:
              </p>
              <ul className="relative space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3 group/item">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm mt-0.5 group-hover/item:scale-110 transition-transform">✓</span>
                  <span className="group-hover/item:text-foreground transition-colors">Fortalece a resiliência psicológica</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm mt-0.5 group-hover/item:scale-110 transition-transform">✓</span>
                  <span className="group-hover/item:text-foreground transition-colors">Reduz sintomas de ansiedade e depressão</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm mt-0.5 group-hover/item:scale-110 transition-transform">✓</span>
                  <span className="group-hover/item:text-foreground transition-colors">Promove esperança e equilíbrio emocional</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm mt-0.5 group-hover/item:scale-110 transition-transform">✓</span>
                  <span className="group-hover/item:text-foreground transition-colors">Auxilia na busca por sentido existencial</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="font-serif text-xl font-medium mb-3 text-foreground text-center">
              Base Acadêmica
            </h3>
            <p className="text-muted-foreground leading-relaxed text-center">
              Este projeto é orientado pela <strong className="text-foreground">Profª Eliane Ramos Pereira (UFF)</strong>, 
              especialista em espiritualidade no cuidado em saúde, vinculado à <strong className="text-foreground">Escola de Enfermagem Aurora de Afonso Costa (EEAAC)</strong> 
              da <strong className="text-foreground">Universidade Federal Fluminense</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold tracking-wider uppercase text-primary px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                Ferramentas Interativas
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-6xl font-bold mb-6 text-foreground">
              Recursos para sua <span className="gradient-text">Jornada</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ferramentas baseadas em <strong className="text-foreground">Logoterapia</strong> e estudos científicos sobre espiritualidade na saúde
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="hover-lift"
              >
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <QuoteCard
            text="Quem tem um porquê para viver pode suportar quase qualquer como."
            author="Viktor Frankl, fundador da Logoterapia"
          />
        </div>
      </section>

      {/* Evidence Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-medium mb-6 text-foreground">
                Base Científica Sólida
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Desde 2005, a Organização Mundial da Saúde reconhece a espiritualidade como componente integral da saúde. Estudos mostram que práticas espirituais funcionam como fator de proteção contra ansiedade, depressão e estresse.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Este projeto é fundamentado em evidências científicas, estudos fenomenológicos e de Logoterapia, orientado pela Profª Eliane Ramos Pereira (UFF), especialista em espiritualidade no cuidado em saúde.
              </p>
              <Link href="/referencias">
                <Button variant="outline" size="lg" data-testid="button-ver-referencias">
                  Ver Todas as Referências
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="group p-8 rounded-3xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/30 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <p className="text-5xl font-black text-primary mb-3 group-hover:scale-110 transition-transform">OMS</p>
                <p className="text-sm text-muted-foreground leading-relaxed">Reconhece a espiritualidade na saúde desde 2005</p>
              </div>
              <div className="group p-8 rounded-3xl bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/30 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <p className="text-5xl font-black text-accent mb-3 group-hover:scale-110 transition-transform">EEAAC</p>
                <p className="text-sm text-muted-foreground leading-relaxed">Escola de Enfermagem Aurora de Afonso Costa</p>
              </div>
              <div className="group p-8 rounded-3xl bg-gradient-to-br from-chart-2/15 to-chart-2/5 border border-chart-2/30 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <p className="text-5xl font-black text-chart-2 mb-3 group-hover:scale-110 transition-transform">UFF</p>
                <p className="text-sm text-muted-foreground leading-relaxed">Universidade Federal Fluminense</p>
              </div>
              <div className="group p-8 rounded-3xl bg-gradient-to-br from-chart-3/15 to-chart-3/5 border border-chart-3/30 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <p className="text-5xl font-black text-chart-3 mb-3 group-hover:scale-110 transition-transform">Frankl</p>
                <p className="text-sm text-muted-foreground leading-relaxed">Logoterapia como base teórica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary/15 via-accent/10 to-primary/15 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="glass-effect rounded-3xl p-12 lg:p-16 shadow-2xl border-2">
            <h2 className="font-serif text-4xl lg:text-6xl font-bold mb-8 text-foreground">
              Inicie sua Jornada de <span className="gradient-text">Autoconhecimento</span>
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Explore ferramentas baseadas em ciência para cultivar esperança, encontrar sentido e fortalecer seu bem-estar espiritual.
            </p>
            <Link href="/proposito">
              <Button size="lg" className="text-xl px-16 py-7 bg-gradient-to-r from-primary via-primary/90 to-accent hover:scale-105 shadow-xl hover:shadow-2xl transition-all" data-testid="button-cta-comecar">
                Começar Agora
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
