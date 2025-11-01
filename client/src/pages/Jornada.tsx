import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { TrendingUp, Heart, Brain, Sparkles, Plus, Trash2, Edit, AlertTriangle } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useLocalJourney } from "@/hooks/useLocalStorage";

export default function Jornada() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showClearAllDialog, setShowClearAllDialog] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
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

  const { assessments, addAssessment, deleteAssessment, updateAssessment, clearAll, isLoading } = useLocalJourney();

  const handleSaveAssessment = () => {
    setIsSaving(true);
    if (editingId) {
      updateAssessment(editingId, newAssessment);
      setEditingId(null);
    } else {
      addAssessment(newAssessment);
    }
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
    setIsSaving(false);
  };

  const handleEdit = (assessment: any) => {
    setNewAssessment({
      spiritual: assessment.spiritual,
      emotional: assessment.emotional,
      mental: assessment.mental,
      sentidoVida: assessment.sentidoVida,
      esperanca: assessment.esperanca,
      gratidao: assessment.gratidao,
      pazInterior: assessment.pazInterior,
      conexao: assessment.conexao,
      proposito: assessment.proposito,
    });
    setEditingId(assessment.id);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    deleteAssessment(id);
    setDeletingId(null);
  };

  const handleClearAll = () => {
    clearAll();
    setShowClearAllDialog(false);
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

  const getPersonalizedInsights = () => {
    if (!latestAssessment || assessments.length < 2) return [];
    
    const previous = assessments[assessments.length - 2];
    const insights: { type: string; message: string; color: string }[] = [];
    
    const spiritualChange = latestAssessment.spiritual - previous.spiritual;
    const emotionalChange = latestAssessment.emotional - previous.emotional;
    const mentalChange = latestAssessment.mental - previous.mental;
    
    if (spiritualChange >= 10) {
      insights.push({
        type: "Crescimento Espiritual",
        message: `Seu bem-estar espiritual aumentou ${spiritualChange}%! Continue cultivando as práticas que trouxeram essa evolução.`,
        color: "from-primary/10 to-primary/5 border-primary/30"
      });
    } else if (spiritualChange <= -10) {
      insights.push({
        type: "Atenção Espiritual",
        message: `Sua dimensão espiritual caiu ${Math.abs(spiritualChange)}%. Considere retomar práticas de conexão e sentido.`,
        color: "from-yellow-500/10 to-orange-500/5 border-yellow-500/30"
      });
    }
    
    if (latestAssessment.sentidoVida < 40) {
      insights.push({
        type: "Reconexão com Propósito",
        message: "Seu senso de propósito está baixo. Explore o questionário de Logoterapia para redescobrir o que traz significado à sua vida.",
        color: "from-accent/10 to-accent/5 border-accent/30"
      });
    }
    
    if (latestAssessment.gratidao >= 70 && latestAssessment.pazInterior >= 70) {
      insights.push({
        type: "Equilíbrio Interior",
        message: "Gratidão e paz interior elevadas indicam um estado de harmonia espiritual. Continue nutrind o essas dimensões!",
        color: "from-green-500/10 to-emerald-500/5 border-green-500/30"
      });
    }
    
    if (assessments.length >= 4) {
      const trend = assessments.slice(-4).reduce((acc, a, i) => {
        if (i > 0) {
          const prev = assessments[assessments.length - 4 + i - 1];
          return acc + (a.spiritual - prev.spiritual);
        }
        return acc;
      }, 0);
      
      if (trend >= 20) {
        insights.push({
          type: "Tendência Positiva",
          message: "Você está em uma trajetória ascendente consistente! Seu comprometimento com o crescimento espiritual está gerando frutos.",
          color: "from-blue-500/10 to-indigo-500/5 border-blue-500/30"
        });
      }
    }
    
    return insights;
  };

  const personalizedInsights = getPersonalizedInsights();

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

          <div className="flex gap-2">
            {assessments.length > 0 && (
              <Button
                onClick={() => setShowClearAllDialog(true)}
                variant="outline"
                size="sm"
                className="text-destructive hover:bg-destructive/10"
                data-testid="button-jornada-clear-all"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Limpar Tudo
              </Button>
            )}
            <Dialog open={isDialogOpen} onOpenChange={(open) => {
              setIsDialogOpen(open);
              if (!open) {
                setEditingId(null);
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
              }
            }}>
              <DialogTrigger asChild>
                <Button size="lg" data-testid="button-new-assessment">
                  <Plus className="w-5 h-5 mr-2" />
                  Nova Autoavaliação
                </Button>
              </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl">
                  {editingId ? "Editar Autoavaliação" : "Autoavaliação Semanal"}
                </DialogTitle>
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

                <Button onClick={handleSaveAssessment} className="w-full" disabled={isSaving}>
                  {isSaving ? "Salvando..." : (editingId ? "Atualizar Autoavaliação" : "Salvar Autoavaliação")}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          </div>
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

            {/* Personalized Insights - NOVA FUNCIONALIDADE */}
            {personalizedInsights.length > 0 && (
              <div className="mt-12">
                <h2 className="font-serif text-3xl font-medium mb-6 text-foreground">
                  Insights Personalizados
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {personalizedInsights.map((insight, idx) => (
                    <Card key={idx} className={`border-2 bg-gradient-to-br ${insight.color}`}>
                      <CardContent className="pt-6">
                        <h3 className="font-medium text-lg mb-2 text-foreground">{insight.type}</h3>
                        <p className="text-muted-foreground leading-relaxed">{insight.message}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
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

        {/* Delete Confirmation Dialog */}
        <AlertDialog open={deletingId !== null} onOpenChange={() => setDeletingId(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Excluir autoavaliação?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta ação não pode ser desfeita. Esta autoavaliação será permanentemente excluída.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => deletingId && handleDelete(deletingId)}
                className="bg-destructive hover:bg-destructive/90"
              >
                Excluir
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Clear All Confirmation Dialog */}
        <AlertDialog open={showClearAllDialog} onOpenChange={setShowClearAllDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                Limpar todas as autoavaliações?
              </AlertDialogTitle>
              <AlertDialogDescription>
                Esta ação não pode ser desfeita. Todas as {assessments.length} autoavaliação(ões) serão permanentemente excluídas.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleClearAll}
                className="bg-destructive hover:bg-destructive/90"
              >
                Limpar Tudo
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
