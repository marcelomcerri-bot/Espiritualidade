import { Play, Music, Leaf, Palette, Heart as HeartIcon } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Praticas() {
  const handleTabChange = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4 text-foreground">
            Práticas
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-6">
            Explore diferentes formas de cultivar sua espiritualidade através de meditação, música contemplativa, conexão com a natureza e arte-terapia
          </p>
          <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500 max-w-3xl">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Caráter Educativo:</strong> Todas as práticas apresentadas têm finalidade educativa e informativa. Elas não substituem orientação médica, psicológica ou espiritual formal. Se você estiver passando por sofrimento emocional ou crise, procure um profissional de saúde qualificado.
            </p>
          </div>
        </div>

        <Tabs defaultValue="meditacao" className="w-full" onValueChange={handleTabChange}>
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
                description="A meditação mindfulness ajuda a reduzir sintomas de ansiedade e depressão ao cultivar a presença consciente no momento atual. Esta prática promove equilíbrio emocional e fortalece a conexão com seu mundo interior, elemento essencial do cuidado espiritual na saúde mental."
                reference="Mindful Peace. Guided Meditation for Inner Peace. YouTube, 2023. Disponível em: https://www.youtube.com/watch?v=inpok4MKVLM"
              />
              <VideoPlayer
                videoId="z6X5oEIg6Ak"
                title="Meditação de Gratidão"
                description="A gratidão é um recurso espiritual fundamental no cuidado da saúde mental. Esta prática fortalece a resiliência emocional, reduz sintomas de ansiedade e depressão, e cultiva uma perspectiva positiva sobre a vida. Ao reconhecer e valorizar as bênçãos cotidianas, desenvolvemos um senso mais profundo de propósito e bem-estar, elementos centrais na integração da espiritualidade ao cuidado em saúde mental."
                reference="Poetoterapia por Lázaro Ramon. Meditação Guiada para Gratidão. YouTube, 2021. Disponível em: https://www.youtube.com/watch?v=z6X5oEIg6Ak"
              />
              <VideoPlayer
                videoId="2saauDlIqM0"
                title="Meditação para Sono Profundo"
                description="O sono reparador é fundamental para a saúde mental e espiritual. Esta prática de relaxamento profundo auxilia na regulação do sistema nervoso, reduzindo pensamentos ruminantes e promovendo paz interior, essenciais para o autocuidado espiritual."
                reference="Poetoterapia por Lázaro Ramon. Meditação para Dormir - Viagem Mental Profundamente Relaxante. YouTube. Disponível em: https://www.youtube.com/watch?v=2saauDlIqM0"
              />
              <VideoPlayer
                videoId="sJjyX9W-E-Y"
                title="Meditação para Ansiedade (10 min)"
                description="A ansiedade afeta profundamente a dimensão espiritual ao desconectar a pessoa do presente. Esta meditação utiliza técnicas de respiração e atenção plena que acalmam o sistema nervoso, restaurando o equilíbrio entre corpo, mente e espírito."
                reference="Raissa Zoccal - Yoga Mudra. Meditação Guiada para Aliviar Ansiedade. YouTube. Disponível em: https://www.youtube.com/watch?v=sJjyX9W-E-Y"
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
                description="A musicoterapia e os sons da natureza têm efeito comprovado na redução de cortisol e na promoção de estados meditativos. Esta prática facilita a conexão espiritual através da escuta contemplativa, nutrindo a alma e facilitando a introspecção."
                reference="Meditation Relax Music. Relaxing Music with Nature Sounds. YouTube, 2019. Disponível em: https://www.youtube.com/watch?v=lFcSrYw-ARY"
              />
              <VideoPlayer
                videoId="eKFTSSKCzWA"
                title="Frequências de Cura 432Hz"
                description="Frequências sonoras específicas podem influenciar estados de consciência e bem-estar emocional. A música em 432Hz é associada à harmonia natural e à redução de estresse, criando um ambiente propício para práticas espirituais e cura emocional."
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
