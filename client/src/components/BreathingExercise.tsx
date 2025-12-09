import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, Wind, Info } from "lucide-react";

export default function BreathingExercise() {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<"Inspire" | "Segure" | "Expire">("Inspire");
  const [timer, setTimer] = useState(4);
  const [cycles, setCycles] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev > 1) return prev - 1;

        // Move to next phase
        if (phase === "Inspire") {
          setPhase("Segure");
          return 7;
        } else if (phase === "Segure") {
          setPhase("Expire");
          return 8;
        } else {
          setPhase("Inspire");
          setCycles((c) => c + 1);
          return 4;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, phase]);

  const handleReset = () => {
    setIsActive(false);
    setPhase("Inspire");
    setTimer(4);
    setCycles(0);
  };

  const getPhaseColor = () => {
    switch (phase) {
      case "Inspire":
        return "from-primary/40 to-primary/20";
      case "Segure":
        return "from-accent/40 to-accent/20";
      case "Expire":
        return "from-chart-2/40 to-chart-2/20";
    }
  };

  const getPhaseTextColor = () => {
    switch (phase) {
      case "Inspire":
        return "text-primary";
      case "Segure":
        return "text-accent";
      case "Expire":
        return "text-chart-2";
    }
  };

  const getPhaseInstruction = () => {
    switch (phase) {
      case "Inspire":
        return "Inspire pelo nariz lentamente";
      case "Segure":
        return "Segure o ar nos pulmões";
      case "Expire":
        return "Expire pela boca devagar";
    }
  };

  return (
    <div className="flex flex-col items-center" data-testid="breathing-exercise">
      {/* Header com instrução */}
      <div className="w-full mb-6 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Wind className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-foreground text-sm">Técnica 4-7-8</h3>
            <p className="text-xs text-muted-foreground">Desenvolvida pelo Dr. Andrew Weil</p>
          </div>
        </div>
      </div>

      {/* Visual do exercício */}
      <div className="relative w-56 h-56 flex items-center justify-center mb-6">
        {/* Anel externo animado */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${getPhaseColor()} transition-all duration-500 ${
            isActive ? "animate-pulse scale-100" : "scale-95 opacity-60"
          }`}
        />
        
        {/* Anel médio */}
        <div
          className={`absolute inset-4 rounded-full bg-gradient-to-br ${getPhaseColor()} opacity-60 transition-all duration-500 ${
            isActive ? "animate-breathe" : ""
          }`}
        />
        
        {/* Círculo interno */}
        <div className="absolute inset-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-inner" />
        
        {/* Conteúdo central */}
        <div className="relative z-10 text-center">
          <p className={`font-serif text-2xl font-semibold ${getPhaseTextColor()} mb-1 transition-colors duration-300`} data-testid="text-breathing-phase">
            {phase}
          </p>
          <p className={`text-5xl font-bold ${getPhaseTextColor()} transition-colors duration-300`} data-testid="text-breathing-timer">
            {timer}
          </p>
        </div>
      </div>

      {/* Instrução da fase atual */}
      <div className="mb-6 text-center">
        <p className={`text-sm font-medium ${getPhaseTextColor()} transition-colors duration-300`}>
          {getPhaseInstruction()}
        </p>
        {cycles > 0 && (
          <p className="text-xs text-muted-foreground mt-1">
            {cycles} {cycles === 1 ? "ciclo completo" : "ciclos completos"}
          </p>
        )}
      </div>

      {/* Botões de controle */}
      <div className="flex gap-3 mb-6">
        <Button
          onClick={() => setIsActive(!isActive)}
          size="lg"
          variant="default"
          className="min-w-[120px]"
          data-testid="button-breathing-toggle"
        >
          {isActive ? (
            <>
              <Pause className="w-5 h-5 mr-2" />
              Pausar
            </>
          ) : (
            <>
              <Play className="w-5 h-5 mr-2" />
              Iniciar
            </>
          )}
        </Button>
        <Button
          onClick={handleReset}
          size="lg"
          variant="outline"
          data-testid="button-breathing-reset"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          Reiniciar
        </Button>
      </div>

      {/* Indicadores de tempo por fase */}
      <div className="w-full max-w-sm">
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className={`p-3 rounded-xl text-center transition-all duration-300 ${phase === "Inspire" ? "bg-primary/15 border-2 border-primary/30 scale-105" : "bg-muted/30 border border-transparent"}`}>
            <p className="text-xs text-muted-foreground mb-1">Inspire</p>
            <p className={`text-lg font-bold ${phase === "Inspire" ? "text-primary" : "text-foreground"}`}>4s</p>
          </div>
          <div className={`p-3 rounded-xl text-center transition-all duration-300 ${phase === "Segure" ? "bg-accent/15 border-2 border-accent/30 scale-105" : "bg-muted/30 border border-transparent"}`}>
            <p className="text-xs text-muted-foreground mb-1">Segure</p>
            <p className={`text-lg font-bold ${phase === "Segure" ? "text-accent" : "text-foreground"}`}>7s</p>
          </div>
          <div className={`p-3 rounded-xl text-center transition-all duration-300 ${phase === "Expire" ? "bg-chart-2/15 border-2 border-chart-2/30 scale-105" : "bg-muted/30 border border-transparent"}`}>
            <p className="text-xs text-muted-foreground mb-1">Expire</p>
            <p className={`text-lg font-bold ${phase === "Expire" ? "text-chart-2" : "text-foreground"}`}>8s</p>
          </div>
        </div>
        
        {/* Dica informativa */}
        <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/20 border border-border/50">
          <Info className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            Esta técnica ativa o sistema nervoso parassimpático, reduzindo ansiedade e promovendo relaxamento profundo.
          </p>
        </div>
      </div>
    </div>
  );
}
