import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import BreathingExercise from "@/components/BreathingExercise";
import QuoteCard from "@/components/QuoteCard";

export default function MomentoDificil() {
  const hopefulQuotes = [
    "Este momento difícil não define quem você é. Você tem força interior para atravessá-lo.",
    "Mesmo na escuridão mais profunda, existe uma luz de esperança. Você não está sozinho.",
    "Sua vida tem valor e significado. Este sofrimento é temporário.",
    "Você já superou dias difíceis antes. Você tem resiliência.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4 text-foreground">
            Momento Difícil
          </h1>
          <p className="text-lg text-muted-foreground">
            Se você está passando por um momento de crise, saiba que há recursos e pessoas prontos para ajudar
          </p>
        </div>

        {/* Emergency Contacts */}
        <Card className="mb-8 border-2 border-destructive/20 bg-gradient-to-br from-destructive/5 to-background">
          <CardHeader>
            <h2 className="font-serif text-2xl font-medium text-foreground">
              Precisa de Ajuda Imediata?
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Se você está em crise ou pensando em se machucar, entre em contato com um dos serviços abaixo:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="tel:188"
                className="flex items-center gap-3 p-4 rounded-xl bg-background hover-elevate transition-all border border-card-border"
                data-testid="link-cvv"
              >
                <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">CVV - 188</p>
                  <p className="text-sm text-muted-foreground">Centro de Valorização da Vida</p>
                  <p className="text-xs text-muted-foreground">24h, ligação gratuita</p>
                </div>
              </a>

              <a
                href="https://www.cvv.org.br/chat/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-background hover-elevate transition-all border border-card-border"
                data-testid="link-cvv-chat"
              >
                <MessageCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Chat CVV</p>
                  <p className="text-sm text-muted-foreground">Atendimento por chat</p>
                  <p className="text-xs text-muted-foreground">www.cvv.org.br/chat</p>
                </div>
              </a>

              <a
                href="tel:192"
                className="flex items-center gap-3 p-4 rounded-xl bg-background hover-elevate transition-all border border-card-border"
                data-testid="link-samu"
              >
                <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">SAMU - 192</p>
                  <p className="text-sm text-muted-foreground">Emergência Médica</p>
                  <p className="text-xs text-muted-foreground">24h, ligação gratuita</p>
                </div>
              </a>

              <a
                href="tel:190"
                className="flex items-center gap-3 p-4 rounded-xl bg-background hover-elevate transition-all border border-card-border"
                data-testid="link-policia"
              >
                <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Polícia - 190</p>
                  <p className="text-sm text-muted-foreground">Emergência policial</p>
                  <p className="text-xs text-muted-foreground">24h, ligação gratuita</p>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Breathing Exercise */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="font-serif text-2xl font-medium text-foreground">
              Exercício de Respiração
            </h2>
            <p className="text-muted-foreground">
              Acalme sua mente e corpo com esta técnica de respiração consciente
            </p>
          </CardHeader>
          <CardContent>
            <BreathingExercise />
          </CardContent>
        </Card>

        {/* Hopeful Quotes */}
        <div className="mb-8">
          <h2 className="font-serif text-2xl font-medium mb-6 text-foreground">
            Mensagens de Esperança
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {hopefulQuotes.map((quote, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-card-border"
              >
                <p className="text-lg text-foreground leading-relaxed">
                  {quote}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <Card className="bg-muted/30">
          <CardHeader>
            <h2 className="font-serif text-2xl font-medium text-foreground">
              Outras Estratégias de Apoio
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-xl bg-background/50">
              <h3 className="font-medium mb-2 text-foreground">Escreva seus Sentimentos</h3>
              <p className="text-sm text-muted-foreground">
                Usar o <a href="/diario" className="text-primary hover:underline">Meu Diário</a> pode ajudar a processar emoções difíceis e ganhar clareza.
              </p>
            </div>
            
            <div className="p-4 rounded-xl bg-background/50">
              <h3 className="font-medium mb-2 text-foreground">Pratique Meditação</h3>
              <p className="text-sm text-muted-foreground">
                Explore <a href="/praticas" className="text-primary hover:underline">Práticas</a> de meditação guiada para acalmar a ansiedade.
              </p>
            </div>
            
            <div className="p-4 rounded-xl bg-background/50">
              <h3 className="font-medium mb-2 text-foreground">Conecte-se com Alguém</h3>
              <p className="text-sm text-muted-foreground">
                Ligue para um amigo, familiar ou profissional de saúde mental. Compartilhar o que sente pode aliviar.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/20">
          <p className="text-sm text-muted-foreground italic">
            <strong className="text-foreground">Lembre-se:</strong> Buscar ajuda é um sinal de coragem, não de fraqueza. Você merece apoio e cuidado. Sua vida tem valor inestimável.
          </p>
        </div>
      </div>
    </div>
  );
}
