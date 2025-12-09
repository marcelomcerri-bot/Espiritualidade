import { Compass, BookOpen, Heart, TrendingUp, Shield, Sparkles, Flower2, ChevronRight, Star, Leaf, Sun, Moon, ArrowRight, Quote, Award, GraduationCap, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FeatureCard from "@/components/FeatureCard";
import QuoteCard from "@/components/QuoteCard";
import heroImage from "@assets/generated_images/Peaceful_forest_morning_light_7cfb107a.png";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";

const features = [
  {
    icon: Compass,
    title: "Descobrir Meu Propósito",
    description: "Questionário baseado em Logoterapia para identificar valores essenciais e propósito de vida através de reflexões profundas.",
    href: "/proposito",
    gradient: "from-primary/10 to-primary/5",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: BookOpen,
    title: "Meu Diário",
    description: "Espaço personalizado para registro de experiências significativas, gratidão e reflexões sobre fontes de sentido na vida.",
    href: "/diario",
    gradient: "from-accent/10 to-accent/5",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Heart,
    title: "Práticas",
    description: "Catálogo de práticas espirituais como meditação, conexão com a natureza, música contemplativa e exercícios guiados.",
    href: "/praticas",
    gradient: "from-chart-2/10 to-chart-2/5",
    color: "text-chart-2",
    bg: "bg-chart-2/10",
  },
  {
    icon: TrendingUp,
    title: "Minha Jornada",
    description: "Visualização da evolução do seu bem-estar espiritual, emocional e mental através de autoavaliações semanais.",
    href: "/jornada",
    gradient: "from-chart-3/10 to-chart-3/5",
    color: "text-chart-3",
    bg: "bg-chart-3/10",
  },
  {
    icon: Shield,
    title: "Momento Difícil",
    description: "Ferramentas de apoio em crises com estratégias espirituais, frases de esperança e exercícios de ancoragem existencial.",
    href: "/momento-dificil",
    gradient: "from-chart-4/10 to-chart-4/5",
    color: "text-destructive",
    bg: "bg-destructive/10",
  },
  {
    icon: Sparkles,
    title: "Meu Mapa de Sentido",
    description: "Visualização interativa dos pilares que trazem propósito à sua vida, mapeando relações, atividades e valores.",
    href: "/mapa-sentido",
    gradient: "from-chart-5/10 to-chart-5/5",
    color: "text-chart-5",
    bg: "bg-chart-5/10",
  },
];

const inspirationalQuotes = [
  { text: "Quem tem um porquê para viver pode suportar quase qualquer como.", author: "Viktor Frankl" },
  { text: "O sentido da vida é dar sentido à vida.", author: "Viktor Frankl" },
  { text: "A esperança é o sonho do homem acordado.", author: "Aristóteles" },
];

function FloatingParticle({ delay, duration, size, left }: { delay: number; duration: number; size: number; left: number }) {
  return (
    <div
      className="absolute rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-sm pointer-events-none"
      style={{
        width: size,
        height: size,
        left: `${left}%`,
        bottom: '-20px',
        animation: `floatUp ${duration}s ease-out ${delay}s infinite`,
      }}
    />
  );
}

function MobileHome() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % inspirationalQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideRight {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 0.4; }
          100% { transform: scale(0.8); opacity: 0.8; }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-breathe { animation: breathe 4s ease-in-out infinite; }
        .animate-shimmer { 
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s linear infinite;
        }
        .animate-fadeSlideUp { animation: fadeSlideUp 0.8s ease-out forwards; }
        .animate-fadeSlideRight { animation: fadeSlideRight 0.6s ease-out forwards; }
        .animate-pulse-ring { animation: pulse-ring 3s ease-in-out infinite; }
        .animate-gradient { 
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
        .card-3d {
          transform-style: preserve-3d;
          transition: transform 0.3s ease;
        }
        .card-3d:active {
          transform: scale(0.98) rotateX(2deg);
        }
        .glass-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.18);
        }
        .dark .glass-card {
          background: linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.2) 100%);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .text-shadow-glow {
          text-shadow: 0 0 40px rgba(var(--primary), 0.3);
        }
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
      `}</style>

      {/* Hero Section - Immersive Full Screen */}
      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: "brightness(0.35) saturate(1.2)",
          }}
        />
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background animate-gradient" 
          style={{ backgroundSize: '100% 200%' }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingParticle delay={0} duration={8} size={12} left={10} />
          <FloatingParticle delay={2} duration={10} size={8} left={25} />
          <FloatingParticle delay={1} duration={9} size={10} left={40} />
          <FloatingParticle delay={3} duration={11} size={6} left={60} />
          <FloatingParticle delay={1.5} duration={8} size={14} left={75} />
          <FloatingParticle delay={4} duration={12} size={8} left={90} />
        </div>
        
        {/* Main Hero Content */}
        <div className={`relative z-10 w-full px-6 py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Animated Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Pulsing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-2xl animate-pulse-ring scale-150" />
              {/* Main Icon Container */}
              <div className="relative w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-breathe" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl" />
                <Flower2 className="relative w-14 h-14 text-primary drop-shadow-lg animate-float" />
              </div>
              {/* Decorative Orbiting Elements */}
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent/60 animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
          
          {/* Title with Premium Typography */}
          <div className="text-center mb-6">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary/80 mb-3 animate-fadeSlideUp">
              Bem-vindo(a) ao
            </p>
            <h1 className="font-serif text-4xl font-bold mb-2 leading-[1.15] animate-fadeSlideUp stagger-1">
              <span className="text-foreground">Cuidado </span>
              <span className="gradient-text">Integral</span>
            </h1>
            <p className="text-sm text-muted-foreground font-medium animate-fadeSlideUp stagger-2">
              na Saúde Mental
            </p>
          </div>
          
          {/* Subtitle */}
          <p className="text-center text-base text-muted-foreground leading-relaxed mb-8 max-w-xs mx-auto animate-fadeSlideUp stagger-2">
            Descubra o <strong className="text-foreground font-semibold">sentido</strong> e o <strong className="text-foreground font-semibold">propósito</strong> da vida através de ferramentas científicas
          </p>
          
          {/* CTA Buttons with Glass Effect */}
          <div className="flex flex-col gap-3 px-2 animate-fadeSlideUp stagger-3">
            <Link href="/proposito">
              <Button 
                size="lg" 
                className="w-full h-14 text-base font-semibold bg-gradient-to-r from-primary via-primary/90 to-accent shadow-xl shadow-primary/25 border-0 relative overflow-hidden group" 
                data-testid="button-hero-comecar"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Começar Minha Jornada
                  <ArrowRight className="w-5 h-5 group-active:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 animate-shimmer opacity-30" />
              </Button>
            </Link>
            <Link href="/aprenda">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full h-14 text-base font-medium glass-card border-white/20 text-foreground" 
                data-testid="button-hero-aprenda"
              >
                <Sparkles className="w-4 h-4 mr-2 text-accent" />
                Conheça a Ciência
              </Button>
            </Link>
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center mt-12 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
              <div className="w-1.5 h-3 rounded-full bg-primary/60 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Carousel Section */}
      <section className="relative py-10 px-6 bg-gradient-to-b from-background via-card/50 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        
        <div className="relative">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Quote className="w-4 h-4 text-primary/60" />
            <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">Inspiração</span>
          </div>
          
          <div className="min-h-[100px] flex items-center justify-center">
            <div className="text-center transition-all duration-500 ease-out">
              <p className="font-serif text-lg italic text-foreground/90 leading-relaxed mb-3 px-4">
                "{inspirationalQuotes[currentQuote].text}"
              </p>
              <p className="text-sm text-primary font-medium">
                — {inspirationalQuotes[currentQuote].author}
              </p>
            </div>
          </div>
          
          {/* Quote Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {inspirationalQuotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentQuote 
                    ? 'w-6 bg-primary' 
                    : 'bg-muted-foreground/30'
                }`}
                data-testid={`quote-indicator-${index}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Premium Cards */}
      <section className="px-5 py-10 bg-gradient-to-b from-background to-card/30">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold tracking-wide uppercase text-primary">Projeto Acadêmico</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
            Cuidado Integral
          </h2>
          <p className="text-sm text-primary font-medium">
            Uma Abordagem Científica e Humanizada
          </p>
        </div>
        
        {/* Info Cards with Premium Design */}
        <div className="space-y-4">
          {/* Card 1 - Students */}
          <div className="card-3d">
            <Card className="relative overflow-hidden border-0 shadow-lg shadow-primary/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              <div className="p-5 relative">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/30 flex-shrink-0">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-bold mb-2 text-foreground">
                      Desenvolvido por Estudantes
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Criado por discentes do curso de <strong className="text-foreground">Enfermagem da UFF</strong>, integrando conhecimentos científicos com práticas de cuidado espiritual.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Card 2 - Why Spiritual Care */}
          <div className="card-3d">
            <Card className="relative overflow-hidden border-0 shadow-lg shadow-accent/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full" />
              <div className="p-5 relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-lg shadow-accent/30">
                    <Heart className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Por Que Cuidado Integral?
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  A OMS reconhece desde 2005 a espiritualidade como componente integral da saúde.
                </p>
                
                {/* Benefits List with Icons */}
                <div className="space-y-3">
                  {[
                    { icon: Shield, text: "Fortalece a resiliência psicológica", color: "text-chart-2" },
                    { icon: Sun, text: "Reduz ansiedade e depressão", color: "text-chart-4" },
                    { icon: Star, text: "Promove esperança e equilíbrio", color: "text-primary" },
                    { icon: Compass, text: "Auxilia na busca por sentido", color: "text-accent" },
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-background/50 border border-border/50 animate-fadeSlideRight"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-current/10 flex items-center justify-center ${item.color}`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-foreground font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          
          {/* Academic Badge */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/15 via-accent/10 to-primary/5 p-5 border border-primary/20">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="relative flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl flex-shrink-0">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-foreground mb-1">Base Acadêmica</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Orientado pela <strong className="text-foreground">Profª Eliane Ramos Pereira</strong> e demais docentes da <strong className="text-foreground">EEAAC/UFF</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Interactive Grid */}
      <section className="px-5 py-10 bg-gradient-to-b from-card/30 via-background to-card/20">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold tracking-wide uppercase text-accent">Ferramentas</span>
          </div>
          <h2 className="font-serif text-2xl font-bold mb-2 text-foreground">
            Recursos para sua <span className="gradient-text">Jornada</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            Baseados em Logoterapia e evidências científicas
          </p>
        </div>
        
        {/* Feature Cards Grid */}
        <div className="space-y-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link key={feature.href} href={feature.href}>
                <div 
                  className="card-3d animate-fadeSlideUp"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <Card className="relative overflow-hidden border-0 shadow-md active:shadow-sm transition-all duration-200">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-50`} />
                    
                    <div className="relative p-4">
                      <div className="flex items-center gap-4">
                        {/* Icon with Glow */}
                        <div className="relative flex-shrink-0">
                          <div className={`absolute inset-0 ${feature.bg} blur-xl scale-150 opacity-60`} />
                          <div className={`relative w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center border border-current/10`}>
                            <Icon className={`w-7 h-7 ${feature.color}`} />
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <h3 className="font-semibold text-foreground text-base">{feature.title}</h3>
                            <div className={`w-8 h-8 rounded-full ${feature.bg} flex items-center justify-center`}>
                              <ChevronRight className={`w-4 h-4 ${feature.color}`} />
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Scientific Evidence Section */}
      <section className="px-5 py-10 bg-gradient-to-b from-card/20 to-background">
        <h2 className="font-serif text-xl font-bold mb-6 text-foreground text-center">
          Base Científica <span className="gradient-text">Sólida</span>
        </h2>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { label: "OMS", sublabel: "Desde 2005", color: "primary", icon: Award },
            { label: "EEAAC", sublabel: "Enfermagem", color: "accent", icon: GraduationCap },
            { label: "UFF", sublabel: "Universidade", color: "chart-2", icon: BookOpen },
            { label: "Frankl", sublabel: "Logoterapia", color: "chart-3", icon: Sparkles },
          ].map((stat, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-2xl p-4 bg-gradient-to-br from-${stat.color}/15 to-${stat.color}/5 border border-${stat.color}/20 text-center card-3d`}
            >
              <div className={`absolute -top-4 -right-4 w-16 h-16 bg-${stat.color}/10 rounded-full blur-xl`} />
              <stat.icon className={`w-6 h-6 text-${stat.color} mx-auto mb-2`} />
              <p className={`text-xl font-black text-${stat.color}`}>{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
            </div>
          ))}
        </div>
        
        <Link href="/referencias">
          <Button variant="outline" className="w-full h-12 font-medium" data-testid="button-ver-referencias">
            <BookOpen className="w-4 h-4 mr-2" />
            Ver Todas as Referências
          </Button>
        </Link>
      </section>

      {/* Final CTA Section - Premium */}
      <section className="relative px-5 py-14 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/15 to-primary/10 animate-gradient" style={{ backgroundSize: '200% 200%' }} />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/50 backdrop-blur-sm border border-white/20 mb-6">
            <Leaf className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold tracking-wide text-foreground">Comece Agora</span>
          </div>
          
          <h2 className="font-serif text-2xl font-bold mb-4 text-foreground">
            Inicie sua Jornada de
            <br />
            <span className="gradient-text text-3xl">Autoconhecimento</span>
          </h2>
          
          <p className="text-sm text-muted-foreground mb-8 max-w-xs mx-auto">
            Ferramentas baseadas em ciência para cultivar esperança e bem-estar espiritual
          </p>
          
          <Link href="/proposito">
            <Button 
              size="lg" 
              className="w-full h-14 text-base font-semibold bg-gradient-to-r from-primary via-primary/90 to-accent shadow-2xl shadow-primary/30 border-0 relative overflow-hidden group" 
              data-testid="button-cta-comecar"
            >
              <span className="relative z-10 flex items-center gap-2">
                Começar Agora
                <ArrowRight className="w-5 h-5 group-active:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 animate-shimmer opacity-30" />
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Safe Area Bottom */}
      <div className="h-6 bg-background safe-area-bottom" />
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

      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-card">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-5xl font-medium mb-6 text-foreground">
              Cuidado Integral na Saúde Mental
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
                Por Que <span className="text-primary">Cuidado Integral</span>?
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
              Este projeto é orientado pelas <strong className="text-foreground">Profª Drª Eliane Ramos Pereira</strong>, <strong className="text-foreground">Profª Drª Rose Mary Costa Rosa Andrade Silva</strong> e <strong className="text-foreground">Profª Drª Diva Cristina Morett Romano Leão</strong>, 
              docentes e pesquisadoras em espiritualidade no cuidado em saúde, vinculadas à <strong className="text-foreground">Escola de Enfermagem Aurora de Afonso Costa (EEAAC)</strong> 
              da <strong className="text-foreground">Universidade Federal Fluminense</strong>.
            </p>
          </div>
        </div>
      </section>

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
            {features.map((feature) => (
              <div key={feature.title} className="hover-lift">
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <QuoteCard
            text="Quem tem um porquê para viver pode suportar quase qualquer como."
            author="Viktor Frankl, fundador da Logoterapia"
          />
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 sm:p-8 text-center border border-primary/20 hover-lift">
                <p className="text-3xl sm:text-4xl font-black text-primary mb-2">OMS</p>
                <p className="text-sm text-muted-foreground">Reconhecimento desde 2005</p>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-6 sm:p-8 text-center border border-accent/20 hover-lift">
                <p className="text-3xl sm:text-4xl font-black text-accent mb-2">EEAAC</p>
                <p className="text-sm text-muted-foreground">Escola de Enfermagem</p>
              </div>
              <div className="bg-gradient-to-br from-chart-2/10 to-chart-2/5 rounded-2xl p-6 sm:p-8 text-center border border-chart-2/20 hover-lift">
                <p className="text-3xl sm:text-4xl font-black text-chart-2 mb-2">UFF</p>
                <p className="text-sm text-muted-foreground">Universidade Federal</p>
              </div>
              <div className="bg-gradient-to-br from-chart-3/10 to-chart-3/5 rounded-2xl p-6 sm:p-8 text-center border border-chart-3/20 hover-lift">
                <p className="text-3xl sm:text-4xl font-black text-chart-3 mb-2">Frankl</p>
                <p className="text-sm text-muted-foreground">Base teórica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl font-bold mb-6 text-foreground">
            Inicie sua Jornada de <span className="gradient-text">Autoconhecimento</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            Explore ferramentas baseadas em ciência para cultivar esperança e fortalecer seu bem-estar espiritual.
          </p>
          <Link href="/proposito">
            <Button size="lg" className="text-lg px-12 py-6 bg-gradient-to-r from-primary via-primary/90 to-accent hover:from-primary/90 hover:to-accent/90 shadow-xl hover:shadow-2xl transition-all hover-lift" data-testid="button-cta-comecar">
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
