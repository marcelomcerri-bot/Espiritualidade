import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { TrendingUp, Heart, Brain, Sparkles, Plus } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { JourneyAssessment } from "@shared/schema";

export default function Jornada() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newAssessment, setNewAssessment] = useState({
    spiritual: 50,
    emotional: 50,
    mental: 50,
    sentidoVida: 50,
    esperanca: 50,
    gratidao: 50,
    pazInterior: 50,
    conexao: 50,
    proposito: 50,
  });

  const { data: assessments = [], isLoading } = useQuery<JourneyAssessment[]>({
    queryKey: ["/api/journey"],
  });

  const createMutation = useMutation({
    mutationFn: async (assessment: typeof newAssessment) => {
      const weekNumber = assessments.length + 1;
      return await apiRequest("/api/journey", {
        method: "POST",
        body: JSON.stringify({
          ...assessment,
          weekLabel: `Sem ${weekNumber}`,
        }),
        headers: { "Content-Type": "application/json" },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/journey"] });
      setIsDialogOpen(false);
      setNewAssessment({
        spiritual: 50,
        emotional: 50,
        mental: 50,
        sentidoVida: 50,
        esperanca: 50,
        gratidao: 50,
        pazInterior: 50,
        conexao: 50,
        proposito: 50,
      });
    },
  });

  const handleSaveAssessment = () => {
    createMutation.mutate(newAssessment);
  };

  const lineData = assessments.map((a) => ({
    semana: a.weekLabel,
    espiritual: a.spiritual,
    emocional: a.emotional,
    mental: a.mental,
  }));

  const latestAssessment = assessments[assessments.length - 1];
  const radarData = latestAssessment
    ? [
        { categoria: "Sentido de Vida", valor: latestAssessment.sentidoVida },
        { categoria: "Esperança", valor: latestAssessment.esperanca },
        { categoria: "Gratidão", valor: latestAssessment.gratidao },
        { categoria: "Paz Interior", valor: latestAssessment.pazInterior },
        { categoria: "Conexão", valor: latestAssessment.conexao },
        { categoria: "Propósito", valor: latestAssessment.proposito },
      ]
    : [];

  const stats = latestAssessment
    ? {
        spiritual: latestAssessment.spiritual,
        emotional: latestAssessment.emotional,
        mental: latestAssessment.mental,
      }
    : { spiritual: 0, emotional: 0, mental: 0 };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-card py-12 flex items-center justify-center">
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-12 flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4 text-foreground">
              Minha Jornada
            </h1>
            <p className="text-lg text-muted-foreground">
              Acompanhe a evolução do seu bem-estar espiritual, emocional e mental ao longo do tempo
            </p>
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" data-testid="button-new-assessment">
                <Plus className="w-5 h-5 mr-2" />
                Nova Autoavaliação
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl">Autoavaliação Semanal</DialogTitle>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div className="space-y-2">
                  <Label>Bem-Estar Espiritual ({newAssessment.spiritual}%)</Label>
                  <Slider
                    value={[newAssessment.spiritual]}
                    onValueChange={(v) => setNewAssessment({ ...newAssessment, spiritual: v[0] })}
                    min={0}
                    max={100}
                    step={1}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Equilíbrio Emocional ({newAssessment.emotional}%)</Label>
                  <Slider
                    value={[newAssessment.emotional]}
                    onValueChange={(v) => setNewAssessment({ ...newAssessment, emotional: v[0] })}
                    min={0}
                    max={100}
                    step={1}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Saúde Mental ({newAssessment.mental}%)</Label>
                  <Slider
                    value={[newAssessment.mental]}
                    onValueChange={(v) => setNewAssessment({ ...newAssessment, mental: v[0] })}
                    min={0}
                    max={100}
                    step={1}
                  />
                </div>

                <div className="pt-4 border-t">
                  <h3 className="font-medium mb-4">Dimensões Espirituais</h3>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Sentido de Vida ({newAssessment.sentidoVida}%)</Label>
                      <Slider
                        value={[newAssessment.sentidoVida]}
                        onValueChange={(v) => setNewAssessment({ ...newAssessment, sentidoVida: v[0] })}
                        min={0}
                        max={100}
                        step={1}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Esperança ({newAssessment.esperanca}%)</Label>
                      <Slider
                        value={[newAssessment.esperanca]}
                        onValueChange={(v) => setNewAssessment({ ...newAssessment, esperanca: v[0] })}
                        min={0}
                        max={100}
                        step={1}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Gratidão ({newAssessment.gratidao}%)</Label>
                      <Slider
                        value={[newAssessment.gratidao]}
                        onValueChange={(v) => setNewAssessment({ ...newAssessment, gratidao: v[0] })}
                        min={0}
                        max={100}
                        step={1}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Paz Interior ({newAssessment.pazInterior}%)</Label>
                      <Slider
                        value={[newAssessment.pazInterior]}
                        onValueChange={(v) => setNewAssessment({ ...newAssessment, pazInterior: v[0] })}
                        min={0}
                        max={100}
                        step={1}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Conexão ({newAssessment.conexao}%)</Label>
                      <Slider
                        value={[newAssessment.conexao]}
                        onValueChange={(v) => setNewAssessment({ ...newAssessment, conexao: v[0] })}
                        min={0}
                        max={100}
                        step={1}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Propósito ({newAssessment.proposito}%)</Label>
                      <Slider
                        value={[newAssessment.proposito]}
                        onValueChange={(v) => setNewAssessment({ ...newAssessment, proposito: v[0] })}
                        min={0}
                        max={100}
                        step={1}
                      />
                    </div>
                  </div>
                </div>

                <Button onClick={handleSaveAssessment} className="w-full" disabled={createMutation.isPending}>
                  {createMutation.isPending ? "Salvando..." : "Salvar Autoavaliação"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {assessments.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground mb-4">
              Você ainda não tem autoavaliações registradas. Comece criando sua primeira avaliação!
            </p>
            <Button onClick={() => setIsDialogOpen(true)}>
              <Plus className="w-5 h-5 mr-2" />
              Criar Primeira Autoavaliação
            </Button>
          </Card>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="hover-elevate transition-all" data-testid="card-stat-espiritual">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Bem-Estar Espiritual</p>
                      <p className="text-3xl font-bold text-primary">{stats.spiritual}%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all" data-testid="card-stat-emocional">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-accent/10">
                      <Heart className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Equilíbrio Emocional</p>
                      <p className="text-3xl font-bold text-accent-foreground">{stats.emotional}%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all" data-testid="card-stat-mental">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-chart-2/10">
                      <Brain className="w-6 h-6 text-chart-2" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Saúde Mental</p>
                      <p className="text-3xl font-bold text-chart-2">{stats.mental}%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <Tabs defaultValue="linha" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="linha" data-testid="tab-linha">
                  Evolução Temporal
                </TabsTrigger>
                <TabsTrigger value="radar" data-testid="tab-radar">
                  Dimensões Espirituais
                </TabsTrigger>
              </TabsList>

              <TabsContent value="linha" className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">
                      Progresso Semanal
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Acompanhe como cada dimensão evolui ao longo das semanas
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={lineData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                          <XAxis dataKey="semana" stroke="hsl(var(--muted-foreground))" />
                          <YAxis stroke="hsl(var(--muted-foreground))" />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "hsl(var(--card))",
                              border: "1px solid hsl(var(--border))",
                              borderRadius: "8px",
                            }}
                          />
                          <Line
                            type="monotone"
                            dataKey="espiritual"
                            stroke="hsl(var(--primary))"
                            strokeWidth={2}
                            name="Espiritual"
                          />
                          <Line
                            type="monotone"
                            dataKey="emocional"
                            stroke="hsl(var(--accent-foreground))"
                            strokeWidth={2}
                            name="Emocional"
                          />
                          <Line
                            type="monotone"
                            dataKey="mental"
                            stroke="hsl(var(--chart-2))"
                            strokeWidth={2}
                            name="Mental"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="radar" className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">
                      Mapa de Dimensões Espirituais
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Visualize suas diferentes dimensões de bem-estar espiritual (última avaliação)
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart data={radarData}>
                          <PolarGrid stroke="hsl(var(--border))" />
                          <PolarAngleAxis dataKey="categoria" stroke="hsl(var(--muted-foreground))" />
                          <PolarRadiusAxis stroke="hsl(var(--muted-foreground))" />
                          <Radar
                            name="Dimensões"
                            dataKey="valor"
                            stroke="hsl(var(--primary))"
                            fill="hsl(var(--primary))"
                            fillOpacity={0.3}
                          />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </>
        )}

        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-card-border">
          <h3 className="font-serif text-xl font-medium mb-3 text-foreground">
            Sobre estas Métricas
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Estes gráficos são gerados a partir de autoavaliações semanais baseadas em escalas validadas de bem-estar espiritual. Pesquisas demonstram que o acompanhamento regular do próprio estado espiritual fortalece a consciência de si e facilita o cultivo intencional de práticas benéficas.
          </p>
        </div>
      </div>
    </div>
  );
}
