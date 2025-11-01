import { useState, useEffect } from "react";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import mandalaImage from "@assets/generated_images/Soft_mandala_calming_pattern_58493912.png";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { MeaningPillar } from "@shared/schema";

export default function MapaSentido() {
  const [newPillar, setNewPillar] = useState({ category: "Relações" as const, text: "" });

  const { data: pillars = [], isLoading } = useQuery<MeaningPillar[]>({
    queryKey: ["/api/meaning-pillars"],
  });

  const createMutation = useMutation({
    mutationFn: async (pillar: { category: string; text: string }) => {
      return await apiRequest("POST", "/api/meaning-pillars", pillar);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/meaning-pillars"] });
      setNewPillar({ category: "Relações", text: "" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      return await apiRequest("DELETE", `/api/meaning-pillars/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/meaning-pillars"] });
    },
  });

  const addPillar = () => {
    if (newPillar.text.trim()) {
      createMutation.mutate(newPillar);
    }
  };

  const removePillar = (id: string) => {
    deleteMutation.mutate(id);
  };

  const categoryColors = {
    Relações: "bg-primary/10 text-primary border-primary/30",
    Atividades: "bg-accent/10 text-accent-foreground border-accent/30",
    Valores: "bg-chart-2/10 text-chart-2 border-chart-2/30",
    Propósito: "bg-chart-5/10 text-chart-5 border-chart-5/30",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4 text-foreground">
            Meu Mapa de Sentido
          </h1>
          <p className="text-lg text-muted-foreground">
            Mapeie os pilares que trazem propósito à sua vida: relações, atividades, valores e objetivos existenciais
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Visual Mandala */}
          <div className="order-2 lg:order-1">
            <Card className="sticky top-24">
              <CardHeader>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  Visualização
                </h2>
                <p className="text-sm text-muted-foreground">
                  Seus pilares de sentido representados em mandala
                </p>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-8">
                  <img
                    src={mandalaImage}
                    alt="Mandala"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                  />
                  
                  <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4">
                    <div className="text-center mb-4">
                      <p className="font-serif text-3xl font-medium text-foreground mb-2">
                        {pillars.length}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Pilares de Sentido
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                      {Object.entries(categoryColors).map(([category, color]) => {
                        const count = pillars.filter((p) => p.category === category).length;
                        return (
                          <div
                            key={category}
                            className={`p-4 rounded-xl border-2 ${color}`}
                          >
                            <p className="text-2xl font-bold mb-1">{count}</p>
                            <p className="text-xs opacity-80">{category}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pillars List */}
          <div className="order-1 lg:order-2 space-y-6">
            <Card>
              <CardHeader>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  Adicionar Pilar
                </h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Categoria
                  </label>
                  <select
                    value={newPillar.category}
                    onChange={(e) =>
                      setNewPillar({ ...newPillar, category: e.target.value as any })
                    }
                    className="w-full p-3 rounded-lg border border-input bg-background text-foreground"
                    data-testid="select-pilar-categoria"
                  >
                    <option value="Relações">Relações</option>
                    <option value="Atividades">Atividades</option>
                    <option value="Valores">Valores</option>
                    <option value="Propósito">Propósito</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Descrição
                  </label>
                  <Input
                    value={newPillar.text}
                    onChange={(e) => setNewPillar({ ...newPillar, text: e.target.value })}
                    placeholder="Ex: Família, trabalho criativo, honestidade..."
                    onKeyDown={(e) => e.key === "Enter" && addPillar()}
                    data-testid="input-pilar-text"
                  />
                </div>

                <Button onClick={addPillar} className="w-full" disabled={createMutation.isPending} data-testid="button-add-pilar">
                  <Plus className="w-5 h-5 mr-2" />
                  {createMutation.isPending ? "Adicionando..." : "Adicionar Pilar"}
                </Button>
              </CardContent>
            </Card>

            <div>
              <h2 className="font-serif text-2xl font-medium mb-4 text-foreground">
                Meus Pilares
              </h2>
              <div className="space-y-3">
                {isLoading ? (
                  <p className="text-muted-foreground text-center py-8">Carregando...</p>
                ) : pillars.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    Adicione pilares para começar a mapear o que traz sentido à sua vida
                  </p>
                ) : (
                  pillars.map((pillar) => (
                    <div
                      key={pillar.id}
                      className={`flex items-center justify-between p-4 rounded-xl border-2 ${categoryColors[pillar.category as keyof typeof categoryColors]} hover-elevate transition-all`}
                      data-testid={`pilar-${pillar.id}`}
                    >
                      <div>
                        <p className="font-medium">{pillar.text}</p>
                        <p className="text-xs opacity-70">{pillar.category}</p>
                      </div>
                      <button
                        onClick={() => removePillar(pillar.id)}
                        className="p-2 rounded-lg hover:bg-background/50 transition-colors"
                        disabled={deleteMutation.isPending}
                        data-testid={`button-remove-${pillar.id}`}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-card-border">
          <h3 className="font-serif text-xl font-medium mb-3 text-foreground">
            Sobre o Mapa de Sentido
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A Logoterapia enfatiza que o sentido existencial emerge de três dimensões principais: valores criativos (o que criamos ou fazemos), valores vivenciais (o que experienciamos em relações e momentos), e valores atitudinais (como respondemos ao sofrimento inevitável).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Este mapa ajuda você a visualizar conscientemente esses pilares, fortalecendo a conexão com aquilo que torna sua vida significativa. Pesquisas mostram que clareza sobre fontes de sentido aumenta resiliência e bem-estar psicológico.
          </p>
        </div>
      </div>
    </div>
  );
}
