import { Plus, BookOpen, Sparkles, Trash2, Edit, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
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
import { useState } from "react";
import { useLocalDiary } from "@/hooks/useLocalStorage";

export default function Diario() {
  const [isCreating, setIsCreating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showClearAllDialog, setShowClearAllDialog] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [newEntry, setNewEntry] = useState({
    title: "",
    content: "",
    gratitude: "",
  });

  const { entries, addEntry, deleteEntry, updateEntry, clearAll, isLoading } = useLocalDiary();

  const handleSave = () => {
    if (!newEntry.title || !newEntry.content) {
      return;
    }
    setIsSaving(true);
    if (editingId) {
      updateEntry(editingId, newEntry);
      setEditingId(null);
    } else {
      addEntry(newEntry);
    }
    setNewEntry({ title: "", content: "", gratitude: "" });
    setIsCreating(false);
    setIsSaving(false);
  };

  const handleEdit = (entry: any) => {
    setNewEntry({
      title: entry.title,
      content: entry.content,
      gratitude: entry.gratitude || "",
    });
    setEditingId(entry.id);
    setIsCreating(true);
  };

  const handleDelete = (id: string) => {
    deleteEntry(id);
    setDeletingId(null);
  };

  const handleClearAll = () => {
    clearAll();
    setShowClearAllDialog(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4 text-foreground">
                Meu Diário
              </h1>
              <p className="text-lg text-muted-foreground">
                Registre experiências significativas, gratidão e reflexões sobre fontes de sentido na sua vida
              </p>
            </div>
            {entries.length > 0 && (
              <Button
                onClick={() => setShowClearAllDialog(true)}
                variant="outline"
                size="sm"
                className="text-destructive hover:bg-destructive/10 flex-shrink-0"
                data-testid="button-diario-clear-all"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Limpar Tudo
              </Button>
            )}
          </div>
        </div>

        {!isCreating ? (
          <Button
            onClick={() => setIsCreating(true)}
            size="lg"
            className="mb-8 w-full sm:w-auto"
            data-testid="button-diario-new"
          >
            <Plus className="w-5 h-5 mr-2" />
            Nova Entrada
          </Button>
        ) : (
          <Card className="mb-8 animate-fade-in">
            <CardHeader>
              <h2 className="font-serif text-2xl font-medium text-foreground flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                Nova Entrada
              </h2>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Título
                </label>
                <Input
                  value={newEntry.title}
                  onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
                  placeholder="Dê um título para este momento..."
                  data-testid="input-diario-title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Reflexão
                </label>
                <Textarea
                  value={newEntry.content}
                  onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })}
                  placeholder="O que foi significativo hoje? O que trouxe sentido?"
                  className="min-h-[150px]"
                  data-testid="textarea-diario-content"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Gratidão
                </label>
                <Textarea
                  value={newEntry.gratitude}
                  onChange={(e) => setNewEntry({ ...newEntry, gratitude: e.target.value })}
                  placeholder="Pelo que você é grato hoje?"
                  className="min-h-[100px]"
                  data-testid="textarea-diario-gratitude"
                />
              </div>

              <div className="flex gap-3">
                <Button onClick={handleSave} disabled={isSaving} data-testid="button-diario-save">
                  {isSaving ? "Salvando..." : (editingId ? "Atualizar Entrada" : "Salvar Entrada")}
                </Button>
                <Button
                  onClick={() => {
                    setIsCreating(false);
                    setEditingId(null);
                    setNewEntry({ title: "", content: "", gratitude: "" });
                  }}
                  variant="outline"
                  data-testid="button-diario-cancel"
                >
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-medium text-foreground">
            Entradas Anteriores
          </h2>
          
          {isLoading ? (
            <p className="text-muted-foreground text-center py-8">Carregando...</p>
          ) : entries.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              Nenhuma entrada ainda. Comece criando sua primeira reflexão!
            </p>
          ) : (
            entries.map((entry) => (
              <Card key={entry.id} className="hover-elevate transition-all" data-testid={`card-diario-entry-${entry.id}`}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-xl font-medium text-foreground">
                      {entry.title}
                    </h3>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {new Date(entry.date).toLocaleDateString("pt-BR")}
                      </span>
                      <Button
                        onClick={() => handleEdit(entry)}
                        variant="ghost"
                        size="sm"
                        data-testid={`button-diario-edit-${entry.id}`}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={() => setDeletingId(entry.id)}
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:bg-destructive/10"
                        data-testid={`button-diario-delete-${entry.id}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground leading-relaxed">{entry.content}</p>
                  {entry.gratitude && (
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                      <p className="text-sm text-muted-foreground flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{entry.gratitude}</span>
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Delete Confirmation Dialog */}
        <AlertDialog open={deletingId !== null} onOpenChange={() => setDeletingId(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Excluir entrada?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta ação não pode ser desfeita. Esta entrada será permanentemente excluída.
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
                Limpar todas as entradas?
              </AlertDialogTitle>
              <AlertDialogDescription>
                Esta ação não pode ser desfeita. Todas as {entries.length} entrada(s) do diário serão permanentemente excluídas.
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
