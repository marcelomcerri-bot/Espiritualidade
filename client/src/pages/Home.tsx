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
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: "brightness(0.7)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-2xl animate-fade-in">
            <div className="w-20 h-20 mb-8 flex items-center justify-center">
              <Flower2 className="w-16 h-16 text-primary opacity-80 animate-float" />
            </div>
            <h1 className="font-serif text-5xl lg:text-7xl font-light mb-6 text-foreground leading-tight">
              Descubra o <span className="text-primary">Sentido</span> e o <span className="text-primary">Propósito</span> da Vida
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8">
              Plataforma baseada em evidências científicas e Logoterapia para fortalecer seu bem-estar através do cuidado espiritual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/proposito">
                <Button size="lg" className="text-lg px-8" data-testid="button-hero-comecar">
                  Começar Minha Jornada
                </Button>
              </Link>
              <Link href="/aprenda">
                <Button size="lg" variant="outline" className="text-lg px-8" data-testid="button-hero-aprenda">
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
            <div className="bg-card rounded-2xl p-8 border border-card-border">
              <h3 className="font-serif text-2xl font-medium mb-4 text-foreground">
                Desenvolvido por Estudantes de Enfermagem
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Esta plataforma foi criada por discentes do curso de Enfermagem da UFF como parte de seus estudos sobre espiritualidade no campo da saúde. Com dedicação e compromisso acadêmico, buscamos integrar conhecimentos científicos e práticas espirituais para promover bem-estar integral.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A plataforma oferece recursos interativos fundamentados em Logoterapia e estudos fenomenológicos sobre espiritualidade, tornando acessível o conhecimento sobre cuidado espiritual na saúde mental.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-card-border">
              <h3 className="font-serif text-2xl font-medium mb-4 text-foreground">
                Por Que Cuidado Espiritual?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A Organização Mundial da Saúde reconhece desde 2005 a espiritualidade como componente integral da saúde. Pesquisas demonstram que cultivar a dimensão espiritual:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Fortalece a resiliência psicológica</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Reduz sintomas de ansiedade e depressão</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Promove esperança e equilíbrio emocional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Auxilia na busca por sentido existencial</span>
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
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-5xl font-medium mb-4 text-foreground">
              Ferramentas para sua Jornada
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recursos interativos baseados em Logoterapia e estudos sobre espiritualidade no campo da saúde
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
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
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-card-border">
                <p className="text-4xl font-bold text-primary mb-2">OMS</p>
                <p className="text-sm text-muted-foreground">Reconhece a espiritualidade na saúde desde 2005</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-card-border">
                <p className="text-4xl font-bold text-accent-foreground mb-2">EEAAC</p>
                <p className="text-sm text-muted-foreground">Escola de Enfermagem Aurora de Afonso Costa</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-chart-2/10 to-chart-2/5 border border-card-border">
                <p className="text-4xl font-bold text-chart-2 mb-2">UFF</p>
                <p className="text-sm text-muted-foreground">Universidade Federal Fluminense</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-chart-3/10 to-chart-3/5 border border-card-border">
                <p className="text-4xl font-bold text-chart-3 mb-2">Frankl</p>
                <p className="text-sm text-muted-foreground">Logoterapia como base teórica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl font-medium mb-6 text-foreground">
            Inicie sua Jornada de Autoconhecimento
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Explore ferramentas baseadas em ciência para cultivar esperança, encontrar sentido e fortalecer seu bem-estar.
          </p>
          <Link href="/proposito">
            <Button size="lg" className="text-lg px-12" data-testid="button-cta-comecar">
              Começar Agora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
