import { Heart, Sparkles, Sun, Wind, Book, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import BreathingExercise from "@/components/BreathingExercise";
import { Link } from "wouter";

export default function MomentoDificil() {
  const hopefulQuotes = [
    "Este momento difícil não define quem você é. Você tem força interior para atravessá-lo.",
    "A espiritualidade nos lembra que sempre há esperança, mesmo nos dias mais sombrios.",
    "Sua vida tem valor e significado profundos. Esta fase é passageira.",
    "Você já superou dias difíceis antes. Sua resiliência é maior do que imagina.",
    "Quando tudo parece incerto, o sentido da vida permanece. Você não está sozinho.",
  ];

  const spiritualPractices = [
    {
      icon: Wind,
      title: "Respiração Consciente",
      description: "A respiração profunda acalma o sistema nervoso e traz presença ao momento atual.",
      link: "#respiracao",
    },
    {
      icon: Heart,
      title: "Práticas de Gratidão",
      description: "Reconhecer pequenas bênçãos, mesmo em momentos difíceis, cultiva esperança.",
      link: "/diario",
    },
    {
      icon: Sun,
      title: "Conexão com a Natureza",
      description: "Observar o céu, sentir o sol ou caminhar ao ar livre restaura o equilíbrio interior.",
      link: "/praticas#natureza",
    },
    {
      icon: Sparkles,
      title: "Meditação Guiada",
      description: "Práticas de mindfulness ajudam a encontrar paz interior e clareza mental.",
      link: "/praticas#meditacao",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4 text-foreground">
            Apoio Espiritual em Momentos Difíceis
          </h1>
          <p className="text-lg text-muted-foreground">
            Ferramentas espirituais para encontrar conforto, esperança e renovação interior
          </p>
        </div>

        {/* Spiritual Strength Message */}
        <Card className="mb-8 border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
          <CardHeader>
            <h2 className="font-serif text-2xl font-medium text-foreground flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary" />
              Você Tem Força Interior
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Momentos difíceis fazem parte da experiência humana. A espiritualidade nos oferece recursos poderosos para enfrentar adversidades: esperança, sentido existencial, conexão profunda e força interior que você já possui.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Segundo a Logoterapia de Viktor Frankl, mesmo nas circunstâncias mais desafiadoras, podemos encontrar sentido e propósito. Sua dimensão espiritual é uma âncora de resiliência.
            </p>
          </CardContent>
        </Card>

        {/* Spiritual Practices Grid */}
        <div className="mb-8">
          <h2 className="font-serif text-2xl font-medium mb-6 text-foreground">
            Práticas de Apoio Espiritual
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {spiritualPractices.map((practice) => (
              <Link key={practice.title} href={practice.link}>
                <div className="flex items-start gap-3 p-5 rounded-xl bg-gradient-to-br from-background to-card hover-elevate transition-all border border-card-border cursor-pointer group">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <practice.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1 text-foreground group-hover:text-primary transition-colors">
                      {practice.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {practice.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Breathing Exercise */}
        <Card className="mb-8" id="respiracao">
          <CardHeader>
            <h2 className="font-serif text-2xl font-medium text-foreground flex items-center gap-2">
              <Wind className="w-6 h-6 text-primary" />
              Exercício de Respiração Consciente
            </h2>
            <p className="text-muted-foreground">
              Acalme sua mente e corpo com esta técnica de respiração. Pratique agora mesmo.
            </p>
          </CardHeader>
          <CardContent>
            <BreathingExercise />
          </CardContent>
        </Card>

        {/* Hopeful Quotes */}
        <div className="mb-8">
          <h2 className="font-serif text-2xl font-medium mb-6 text-foreground">
            Mensagens de Esperança e Força
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {hopefulQuotes.map((quote, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-gradient-to-br from-accent/10 to-primary/5 border border-card-border"
              >
                <p className="text-base text-foreground leading-relaxed italic">
                  "{quote}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <Card className="mb-8 bg-muted/20">
          <CardHeader>
            <h2 className="font-serif text-2xl font-medium text-foreground">
              Outras Ferramentas de Apoio
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link href="/diario">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-background hover-elevate transition-all border border-card-border cursor-pointer group">
                <Book className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1 text-foreground group-hover:text-primary transition-colors">
                    Escreva no Diário
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Expressar sentimentos por escrito ajuda a processar emoções e ganhar clareza sobre o que você está vivendo.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/proposito">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-background hover-elevate transition-all border border-card-border cursor-pointer group">
                <Sparkles className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1 text-foreground group-hover:text-primary transition-colors">
                    Reflita sobre seu Propósito
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Reconectar-se com seu sentido de vida pode trazer orientação e motivação nos momentos desafiadores.
                  </p>
                </div>
              </div>
            </Link>
            
            <div className="flex items-start gap-3 p-4 rounded-xl bg-background border border-card-border">
              <Users className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium mb-1 text-foreground">Conecte-se com Pessoas Queridas</h3>
                <p className="text-sm text-muted-foreground">
                  Compartilhar o que sente com amigos, familiares ou um profissional de saúde mental pode trazer alívio e perspectiva.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Help Notice */}
        <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-background">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium mb-2 text-foreground">Buscar Apoio Profissional</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  Se você sente que precisa de apoio adicional, considere conversar com um profissional de saúde mental ou psicólogo. Buscar ajuda é um sinal de autocuidado e força.
                </p>
                <p className="text-xs text-muted-foreground">
                  <strong className="text-foreground">CVV - 188:</strong> Centro de Valorização da Vida (24h, gratuito) - Conversa sigilosa para quem precisa de apoio emocional.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/20">
          <p className="text-sm text-muted-foreground italic leading-relaxed">
            <strong className="text-foreground">Lembre-se:</strong> Sua vida tem valor inestimável e significado profundo. Os momentos difíceis são temporários, mas sua capacidade de encontrar sentido e esperança é permanente. Você não está sozinho nesta jornada.
          </p>
        </div>
      </div>
    </div>
  );
}
