import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, CheckCircle, XCircle, Sparkles } from "lucide-react";

export default function TestGemini() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const testGemini = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/test-gemini");
      const data = await response.json();
      
      if (response.ok) {
        setResult(data);
      } else {
        setError(data.error || "Erro ao testar API");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8 text-purple-600" />
            Teste da API Gemini
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Verifique se sua chave da API do Google Gemini está funcionando corretamente
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Status da Conexão</CardTitle>
            <CardDescription>
              Clique no botão abaixo para testar a conexão com a API do Gemini
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              onClick={testGemini}
              disabled={loading}
              className="w-full"
              size="lg"
              data-testid="button-test-gemini"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Testando API...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Testar API do Gemini
                </>
              )}
            </Button>

            {result && (
              <div className="mt-6 space-y-4" data-testid="result-success">
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle className="w-6 h-6" />
                  <span className="font-semibold text-lg">API Funcionando Perfeitamente!</span>
                </div>
                
                <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle className="text-green-800 dark:text-green-300">
                      Mensagem Gerada
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div 
                      className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
                      dangerouslySetInnerHTML={{ __html: result.message.replace(/\n/g, '<br>') }}
                    />
                  </CardContent>
                </Card>

                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <strong>Timestamp:</strong> {new Date(result.timestamp).toLocaleString('pt-BR')}
                </div>
              </div>
            )}

            {error && (
              <div className="mt-6 space-y-4" data-testid="result-error">
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                  <XCircle className="w-6 h-6" />
                  <span className="font-semibold text-lg">Erro na API</span>
                </div>
                
                <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                  <CardContent className="pt-6">
                    <p className="text-red-800 dark:text-red-300 font-mono text-sm">
                      {error}
                    </p>
                  </CardContent>
                </Card>

                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <p><strong>Possíveis soluções:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Verifique se a chave GEMINI_API_KEY está configurada corretamente</li>
                    <li>Confirme se a chave tem permissões adequadas</li>
                    <li>Verifique sua cota de uso na API do Google</li>
                  </ul>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="shadow-lg bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="text-blue-800 dark:text-blue-300">Informações</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
            <p><strong>Modelo:</strong> gemini-2.5-flash</p>
            <p><strong>Tipo de Teste:</strong> Geração de mensagem espiritual personalizada</p>
            <p><strong>Endpoint:</strong> /api/test-gemini</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
