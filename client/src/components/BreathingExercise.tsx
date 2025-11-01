import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";

export default function BreathingExercise() {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<"Inspire" | "Segure" | "Expire">("Inspire");
  const [timer, setTimer] = useState(4);

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
  };

  return (
    <div className="flex flex-col items-center gap-8 p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5" data-testid="breathing-exercise">
      <div className="relative w-64 h-64 flex items-center justify-center">
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 ${
            isActive ? "animate-breathe" : "opacity-80"
          }`}
        />
        <div className="relative z-10 text-center">
          <p className="font-serif text-3xl font-medium text-foreground mb-2" data-testid="text-breathing-phase">
            {phase}
          </p>
          <p className="text-6xl font-bold text-primary" data-testid="text-breathing-timer">
            {timer}
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          onClick={() => setIsActive(!isActive)}
          size="lg"
          variant="default"
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

      <p className="text-sm text-muted-foreground text-center max-w-md">
        Técnica 4-7-8: Inspire pelo nariz por 4 segundos, segure por 7 segundos, e expire pela boca por 8 segundos.
      </p>
    </div>
  );
}
