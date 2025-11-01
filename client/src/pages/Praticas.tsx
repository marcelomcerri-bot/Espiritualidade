import { Play, Music, Leaf, Palette, Heart as HeartIcon } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Praticas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4 text-foreground">
            Práticas
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Explore diferentes formas de cultivar sua espiritualidade através de meditação, música contemplativa, conexão com a natureza e arte-terapia
          </p>
        </div>

        <Tabs defaultValue="meditacao" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            <TabsTrigger value="meditacao" className="gap-2" data-testid="tab-meditacao">
              <Play className="w-4 h-4" />
              Meditação
            </TabsTrigger>
            <TabsTrigger value="musica" className="gap-2" data-testid="tab-musica">
              <Music className="w-4 h-4" />
              Música
            </TabsTrigger>
            <TabsTrigger value="natureza" className="gap-2" data-testid="tab-natureza">
              <Leaf className="w-4 h-4" />
              Natureza
            </TabsTrigger>
            <TabsTrigger value="arte" className="gap-2" data-testid="tab-arte">
              <Palette className="w-4 h-4" />
              Arte
            </TabsTrigger>
          </TabsList>

          <TabsContent value="meditacao" className="space-y-8 animate-fade-in">
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-medium mb-3 text-foreground">
                Meditação Guiada
              </h2>
              <p className="text-muted-foreground">
                Práticas de mindfulness e meditação para cultivar presença, paz interior e conexão espiritual
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <VideoPlayer
                videoId="inpok4MKVLM"
                title="Meditação para Paz Interior (10 min)"
                description="Prática guiada de mindfulness para acalmar a mente e cultivar serenidade."
                reference="Mindful Peace. Guided Meditation for Inner Peace. YouTube, 2023. Disponível em: https://www.youtube.com/watch?v=inpok4MKVLM"
              />
              <VideoPlayer
                videoId="3t6XdFnJpQM"
                title="Meditação de Gratidão"
                description="Cultive sentimentos de gratidão e aprecie as bênçãos da vida."
                reference="Great Meditation. Gratitude Meditation. YouTube, 2022. Disponível em: https://www.youtube.com/watch?v=3t6XdFnJpQM"
              />
              <VideoPlayer
                videoId="z6X5oEIg6Ak"
                title="Meditação para Ansiedade"
                description="Técnicas para reduzir ansiedade e encontrar equilíbrio emocional."
                reference="Jason Stephenson. Anxiety Relief Meditation. YouTube, 2021. Disponível em: https://www.youtube.com/watch?v=z6X5oEIg6Ak"
              />
              <VideoPlayer
                videoId="ssss7V1_eyA"
                title="Meditação Matinal"
                description="Comece o dia com intenção, presença e energia positiva."
                reference="Goodful. Morning Meditation. YouTube, 2020. Disponível em: https://www.youtube.com/watch?v=ssss7V1_eyA"
              />
            </div>
          </TabsContent>

          <TabsContent value="musica" className="space-y-8 animate-fade-in">
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-medium mb-3 text-foreground">
                Música Contemplativa
              </h2>
              <p className="text-muted-foreground">
                Sons e melodias que nutrem a alma e criam espaço para reflexão espiritual
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <VideoPlayer
                videoId="lFcSrYw-ARY"
                title="Música Relaxante com Sons da Natureza"
                description="Combinação harmoniosa de melodias suaves e sons naturais para meditação."
                reference="Meditation Relax Music. Relaxing Music with Nature Sounds. YouTube, 2019. Disponível em: https://www.youtube.com/watch?v=lFcSrYw-ARY"
              />
              <VideoPlayer
                videoId="eKFTSSKCzWA"
                title="Frequências de Cura 432Hz"
                description="Música em frequência natural que promove harmonia e bem-estar."
                reference="Meditative Mind. 432Hz Healing Music. YouTube, 2018. Disponível em: https://www.youtube.com/watch?v=eKFTSSKCzWA"
              />
            </div>
          </TabsContent>

          <TabsContent value="natureza" className="space-y-8 animate-fade-in">
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-medium mb-3 text-foreground">
                Conexão com a Natureza
              </h2>
              <p className="text-muted-foreground">
                A natureza como fonte de renovação espiritual e equilíbrio
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-chart-3/10 to-chart-5/10 border border-card-border">
              <div className="flex items-start gap-4 mb-6">
                <Leaf className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2 text-foreground">
                    Práticas Sugeridas
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Pesquisas mostram que o contato regular com a natureza reduz estresse, ansiedade e promove bem-estar espiritual.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-background/50">
                  <h4 className="font-medium mb-2 text-foreground">Caminhada Contemplativa</h4>
                  <p className="text-sm text-muted-foreground">
                    Caminhe em um parque ou área verde com atenção plena, observando sons, cores e sensações. Permita-se estar presente.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-background/50">
                  <h4 className="font-medium mb-2 text-foreground">Jardinagem Terapêutica</h4>
                  <p className="text-sm text-muted-foreground">
                    Cultive plantas ou flores. O ato de cuidar de seres vivos conecta você com ciclos naturais e renova esperança.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-background/50">
                  <h4 className="font-medium mb-2 text-foreground">Observação do Céu</h4>
                  <p className="text-sm text-muted-foreground">
                    Contemple o nascer ou pôr do sol, as estrelas. Essa prática amplia perspectiva e cultiva senso de transcendência.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="arte" className="space-y-8 animate-fade-in">
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-medium mb-3 text-foreground">
                Arte-Terapia
              </h2>
              <p className="text-muted-foreground">
                Expressão criativa como caminho para autoconhecimento e cura emocional
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-accent/10 to-primary/10 border border-card-border">
                <Palette className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">
                  Desenho Intuitivo
                </h3>
                <p className="text-muted-foreground mb-4">
                  Desenhe livremente sem julgamento. Permita que cores e formas expressem emoções que palavras não alcançam.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Use materiais simples: lápis, canetas coloridas, aquarela</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Não se preocupe com resultado, foque no processo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Observe o que emerge espontaneamente</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-gradient-to-br from-chart-2/10 to-accent/10 border border-card-border">
                <HeartIcon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">
                  Mandala Pessoal
                </h3>
                <p className="text-muted-foreground mb-4">
                  Crie mandalas representando seu mundo interior. Símbolos circulares promovem integração psicológica.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Desenhe um círculo e preencha com formas simétricas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Use cores que ressoam com seu estado emocional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Reflita sobre o que a mandala revela sobre você</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 p-6 rounded-2xl bg-muted/30 border border-muted">
          <p className="text-sm text-muted-foreground italic">
            <strong className="text-foreground">Importante:</strong> Todos os vídeos utilizados são de fontes públicas do YouTube com licenças Creative Commons ou uso permitido. Referências completas disponíveis na seção de <a href="/referencias" className="text-primary hover:underline">Referências</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
