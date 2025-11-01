import { useState, useEffect } from "react";
import { Sparkles, RefreshCw, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MensagemAlma() {
  const [message, setMessage] = useState<string>("");
  const [dailyReflection, setDailyReflection] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMessage = async (forceRefresh = false) => {
    if (forceRefresh) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }
    setError(null);

    try {
      const [messageRes, reflectionRes] = await Promise.all([
        fetch("/api/soul-message"),
        fetch("/api/daily-reflection")
      ]);

      if (!messageRes.ok || !reflectionRes.ok) {
        throw new Error("Falha ao buscar mensagens");
      }

      const messageData = await messageRes.json();
      const reflectionData = await reflectionRes.json();

      setMessage(messageData.message);
      setDailyReflection(reflectionData.reflection);
    } catch (err) {
      console.error("Error fetching message:", err);
      setError("Não foi possível gerar sua mensagem. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  const formatMessage = (text: string) => {
    return text.split('\n\n').map((paragraph, index) => (
      <p key={index} className="text-foreground leading-relaxed mb-4 last:mb-0">
        {paragraph.split('**').map((part, i) => 
          i % 2 === 1 ? <strong key={i} className="font-semibold text-primary">{part}</strong> : part
        )}
      </p>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-accent/5 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-float">
              <Sparkles className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4 text-foreground">
            Reflexões que Curam
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mensagens de Cuidado Espiritual para sua Jornada
          </p>
        </div>

        {/* Daily Reflection */}
        {dailyReflection && !isLoading && (
          <Card className="mb-8 border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-background animate-fade-in">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-accent-foreground mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-accent-foreground mb-2">Reflexão do Dia</h3>
                  <p className="text-muted-foreground italic leading-relaxed">
                    {dailyReflection}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Main Soul Message */}
        <Card className="border-2 border-primary/30 bg-gradient-to-br from-background via-primary/5 to-background shadow-2xl animate-fade-in">
          <CardContent className="p-8 lg:p-12">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full border-4 border-primary/30 border-t-primary animate-spin"></div>
                  <Sparkles className="w-6 h-6 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <p className="text-muted-foreground animate-pulse">
                  Gerando sua mensagem personalizada...
                </p>
              </div>
            ) : error ? (
              <div className="text-center py-16">
                <p className="text-red-500 mb-4">{error}</p>
                <Button onClick={() => fetchMessage(true)} variant="outline">
                  Tentar Novamente
                </Button>
              </div>
            ) : (
              <div className="prose prose-lg max-w-none">
                {formatMessage(message)}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
          <p className="text-sm text-muted-foreground leading-relaxed text-center">
            💫 Esta mensagem foi criada especialmente para você em {new Date().toLocaleDateString('pt-BR', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
