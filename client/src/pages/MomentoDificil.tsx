import { Heart, Sparkles, Sun, Wind, Book, Users, Phone, Brain, Lightbulb, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import BreathingExercise from "@/components/BreathingExercise";
import { Link } from "wouter";
import { useState } from "react";

export default function MomentoDificil() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

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

  const moodOptions = [
    { label: "Ansioso", value: "ansioso", color: "from-yellow-500/20 to-orange-500/20", borderColor: "border-yellow-500/40" },
    { label: "Triste", value: "triste", color: "from-blue-500/20 to-indigo-500/20", borderColor: "border-blue-500/40" },
    { label: "Sobrecarregado", value: "sobrecarregado", color: "from-red-500/20 to-pink-500/20", borderColor: "border-red-500/40" },
    { label: "Sem esperança", value: "sem-esperanca", color: "from-gray-500/20 to-slate-500/20", borderColor: "border-gray-500/40" },
    { label: "Estressado", value: "estressado", color: "from-purple-500/20 to-violet-500/20", borderColor: "border-purple-500/40" },
  ];

  const moodRecommendations: Record<string, { title: string; practices: string[]; description: string }> = {
    ansioso: {
      title: "Apoio para Ansiedade",
      description: "A ansiedade pode ser aliviada através de práticas que trazem você de volta ao momento presente.",
      practices: ["Respiração 4-7-8 (inspire por 4, segure por 7, expire por 8)", "Observar 5 coisas que você vê, 4 que você toca, 3 que você ouve", "Meditação de body scan para reconexão corporal", "Caminhada consciente ao ar livre"],
    },
    triste: {
      title: "Acolhimento da Tristeza",
      description: "A tristeza é uma emoção válida que merece ser acolhida com compaixão.",
      practices: ["Escrever uma carta para você mesmo com palavras de conforto", "Praticar gratidão por pequenos momentos do dia", "Ouvir música que toca sua alma", "Conectar-se com a natureza ou com pessoas queridas"],
    },
    sobrecarregado: {
      title: "Alívio da Sobrecarga",
      description: "Quando tudo parece demais, é hora de simplificar e voltar ao essencial.",
      practices: ["Listar 3 prioridades absolutas e deixar o resto para depois", "Respiração profunda por 5 minutos", "Prática de soltar o controle - reconhecer o que não está em suas mãos", "Conversar com alguém de confiança sobre o que você está sentindo"],
    },
    "sem-esperanca": {
      title: "Reencontrar a Esperança",
      description: "Mesmo quando parece que não há saída, existem caminhos de renovação.",
      practices: ["Relembrar um momento difícil que você já superou", "Conectar-se com seu propósito de vida através do questionário", "Praticar compaixão por si mesmo - você está fazendo o melhor que pode", "Buscar apoio profissional - pedir ajuda é um ato de coragem"],
    },
    estressado: {
      title: "Redução do Estresse",
      description: "O estresse crônico pode ser transformado através de práticas de ancoragem.",
      practices: ["Técnica de respiração consciente 4-4-4-4", "Fazer uma pausa e mudar de ambiente por alguns minutos", "Meditação de 10 minutos focada no presente", "Prática de movimento: alongamento ou caminhada leve"],
    },
  };

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

        {/* Mood-Based Recommendations - NOVA FUNCIONALIDADE */}
        <Card className="mb-8 bg-gradient-to-br from-accent/5 to-primary/5">
          <CardHeader>
            <h2 className="font-serif text-2xl font-medium text-foreground flex items-center gap-2">
              <Brain className="w-6 h-6 text-primary" />
              Como Você Está Se Sentindo Agora?
            </h2>
            <p className="text-muted-foreground">
              Selecione a emoção que mais representa o que você está vivendo. Ofereceremos práticas personalizadas.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
              {moodOptions.map((mood) => (
                <button
                  key={mood.value}
                  onClick={() => setSelectedMood(mood.value)}
                  className={`p-4 rounded-xl transition-all border-2 ${
                    selectedMood === mood.value
                      ? `bg-gradient-to-br ${mood.color} ${mood.borderColor} scale-105`
                      : "bg-background border-card-border hover:border-primary/40"
                  }`}
                  data-testid={`button-mood-${mood.value}`}
                >
                  <p className="text-sm font-medium text-foreground">{mood.label}</p>
                </button>
              ))}
            </div>

            {selectedMood && moodRecommendations[selectedMood] && (
              <div className="animate-fade-in space-y-4" data-testid="mood-recommendations">
                <div className="p-5 rounded-xl bg-background border border-primary/30">
                  <h3 className="font-serif text-xl font-medium mb-2 text-foreground flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    {moodRecommendations[selectedMood].title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {moodRecommendations[selectedMood].description}
                  </p>
                  <h4 className="font-medium text-foreground mb-3">Práticas Recomendadas:</h4>
                  <ul className="space-y-2">
                    {moodRecommendations[selectedMood].practices.map((practice, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <Activity className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

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
