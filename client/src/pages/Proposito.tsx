import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { PurposeAnswer } from "@shared/schema";

export default function Proposito() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(6).fill(""));

  const { data: savedAnswers = [], isLoading } = useQuery<PurposeAnswer[]>({
    queryKey: ["/api/purpose"],
  });

  useEffect(() => {
    if (savedAnswers.length > 0) {
      const newAnswers = Array(6).fill("");
      savedAnswers.forEach((sa) => {
        if (sa.questionIndex >= 0 && sa.questionIndex < 6) {
          newAnswers[sa.questionIndex] = sa.answer;
        }
      });
      setAnswers(newAnswers);
    }
  }, [savedAnswers]);

  const saveMutation = useMutation({
    mutationFn: async ({ questionIndex, answer }: { questionIndex: number; answer: string }) => {
      return await apiRequest("POST", "/api/purpose", { questionIndex, answer });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/purpose"] });
    },
  });

  const questions = [
    {
      question: "O que traz significado profundo para sua vida?",
      subtitle: "Pense nas atividades, relacionamentos ou valores que fazem você sentir que sua vida tem propósito.",
    },
    {
      question: "Quando você se sente mais vivo e autêntico?",
      subtitle: "Reflita sobre momentos em que você experimentou plenitude e conexão consigo mesmo.",
    },
    {
      question: "Quais são seus valores essenciais?",
      subtitle: "Identifique princípios que guiam suas escolhas e que você não abriria mão.",
    },
    {
      question: "Como você gostaria de contribuir para o mundo?",
      subtitle: "Pense no legado que deseja deixar e no impacto que quer ter na vida de outros.",
    },
    {
      question: "O que você faria se não tivesse medo?",
      subtitle: "Imagine-se livre de limitações. Que direção sua vida tomaria?",
    },
    {
      question: "Quando você olha para o futuro, o que traz esperança?",
      subtitle: "Visualize possibilidades que inspiram otimismo e motivação para seguir em frente.",
    },
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const [isCompleted, setIsCompleted] = useState(false);

  const handleNext = () => {
    if (answers[currentQuestion].trim()) {
      saveMutation.mutate({
        questionIndex: currentQuestion,
        answer: answers[currentQuestion],
      });
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswerChange = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-card py-12 flex items-center justify-center">
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    );
  }

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-card py-12">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="bg-card rounded-3xl p-8 lg:p-12 border border-card-border shadow-xl text-center animate-fade-in">
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
              <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4 text-foreground">
                Parabéns!
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Você completou o questionário de descoberta de propósito
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl p-8 mb-8 text-left">
              <h2 className="font-serif text-2xl font-medium mb-4 text-foreground">
                Suas Reflexões
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Você dedicou tempo para refletir profundamente sobre o que traz significado à sua vida. 
                Suas respostas foram salvas e você pode revisá-las a qualquer momento retornando a esta página.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Continue sua jornada explorando as outras ferramentas da plataforma para aprofundar 
                seu autoconhecimento e fortalecer seu bem-estar espiritual.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  setIsCompleted(false);
                  setCurrentQuestion(0);
                }}
                size="lg"
                variant="outline"
                data-testid="button-proposito-review"
              >
                Revisar Respostas
              </Button>
              <Link href="/diario">
                <Button size="lg" data-testid="button-proposito-diario">
                  Ir para Meu Diário
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card py-12">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4 text-foreground">
            Descobrir Meu Propósito
          </h1>
          <p className="text-lg text-muted-foreground">
            Reflexões baseadas em Logoterapia para identificar seus valores essenciais e propósito de vida
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Pergunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="bg-card rounded-3xl p-8 lg:p-12 border border-card-border shadow-xl animate-fade-in">
          <div className="mb-8">
            <h2 className="font-serif text-2xl lg:text-3xl font-medium mb-3 text-foreground">
              {questions[currentQuestion].question}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {questions[currentQuestion].subtitle}
            </p>
          </div>

          <Textarea
            value={answers[currentQuestion]}
            onChange={(e) => handleAnswerChange(e.target.value)}
            placeholder="Escreva suas reflexões aqui..."
            className="min-h-[200px] text-base resize-none"
            data-testid="textarea-proposito-answer"
          />

          <div className="flex justify-between mt-8">
            <Button
              onClick={handlePrevious}
              variant="outline"
              disabled={currentQuestion === 0}
              data-testid="button-proposito-previous"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Anterior
            </Button>
            <Button
              onClick={handleNext}
              disabled={saveMutation.isPending || !answers[currentQuestion]?.trim()}
              data-testid="button-proposito-next"
            >
              {saveMutation.isPending ? "Salvando..." : currentQuestion === questions.length - 1 ? "Concluir" : "Próxima"}
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/20">
          <p className="text-sm text-muted-foreground italic">
            <strong className="text-foreground">Nota:</strong> Esta ferramenta é inspirada na Logoterapia de Viktor Frankl, 
            abordagem terapêutica que enfatiza a busca por sentido existencial como caminho para a saúde mental.
            Suas respostas são salvas automaticamente.
          </p>
        </div>
      </div>
    </div>
  );
}
