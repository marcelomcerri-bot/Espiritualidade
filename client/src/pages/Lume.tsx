import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, Loader2, BookOpen, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export default function Lume() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const chatMutation = useMutation({
    mutationFn: async (message: string) => {
      const response = await apiRequest("POST", "/api/lume/chat", {
        message,
        history: messages.slice(-10)
      });
      return response.json();
    },
    onSuccess: (data) => {
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    },
    onError: () => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Desculpe, houve um erro ao processar sua mensagem. Por favor, tente novamente." 
      }]);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || chatMutation.isPending) return;
    
    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput("");
    chatMutation.mutate(userMessage);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const suggestedQuestions = [
    "O que é Logoterapia?",
    "Como a espiritualidade ajuda na saúde mental?",
    "O que é a ferramenta FICA?",
    "Quais são os três caminhos para o sentido segundo Frankl?"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card py-8">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-2 text-foreground">
            LUME
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seu assistente de conhecimento sobre espiritualidade e saúde mental, baseado em evidências científicas
          </p>
        </div>

        <Card className="mb-4 bg-primary/5 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                LUME responde apenas com base em artigos científicos e referências acadêmicas da plataforma. 
                Para consultar as fontes completas, visite a página de{" "}
                <a href="/referencias" className="text-primary hover:underline font-medium">
                  Referências
                </a>.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <ScrollArea 
            className="h-[400px] lg:h-[500px] p-4" 
            ref={scrollAreaRef}
            data-testid="chat-messages-area"
          >
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-4">
                <BookOpen className="w-12 h-12 text-muted-foreground/50 mb-4" />
                <h3 className="font-medium text-foreground mb-2">
                  Faça sua pergunta para LUME
                </h3>
                <p className="text-sm text-muted-foreground mb-6 max-w-md">
                  Pergunte sobre logoterapia, espiritualidade, saúde mental e as evidências científicas que fundamentam essas áreas.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setInput(question);
                        textareaRef.current?.focus();
                      }}
                      data-testid={`button-suggestion-${index}`}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    data-testid={`chat-message-${index}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <div className="whitespace-pre-wrap text-sm leading-relaxed">
                        {message.content}
                      </div>
                    </div>
                  </div>
                ))}
                {chatMutation.isPending && (
                  <div className="flex justify-start" data-testid="chat-loading-indicator">
                    <div className="bg-muted rounded-2xl px-4 py-3 flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="text-sm text-muted-foreground">LUME está pensando...</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </ScrollArea>
        </Card>

        <form onSubmit={handleSubmit} className="flex gap-3">
          <Textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite sua pergunta sobre espiritualidade e saúde mental..."
            className="min-h-[56px] max-h-[200px] resize-none"
            disabled={chatMutation.isPending}
            data-testid="input-chat-message"
          />
          <Button
            type="submit"
            size="lg"
            disabled={!input.trim() || chatMutation.isPending}
            className="flex-shrink-0 px-4"
            data-testid="button-send-message"
          >
            {chatMutation.isPending ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-4">
          LUME não substitui acompanhamento profissional de saúde mental. 
          Em caso de crise, procure ajuda especializada.
        </p>
      </div>
    </div>
  );
}
