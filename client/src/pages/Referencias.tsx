import { FileText, Video, BookOpen } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReferenceItem from "@/components/ReferenceItem";

export default function Referencias() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4 text-foreground">
            Referências
          </h1>
          <p className="text-lg text-muted-foreground">
            Todas as fontes acadêmicas e multimídia utilizadas nesta plataforma, formatadas em ABNT
          </p>
        </div>

        <Tabs defaultValue="artigos" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="artigos" className="gap-2" data-testid="tab-artigos">
              <BookOpen className="w-4 h-4" />
              Artigos e Livros
            </TabsTrigger>
            <TabsTrigger value="videos" className="gap-2" data-testid="tab-videos">
              <Video className="w-4 h-4" />
              Vídeos
            </TabsTrigger>
            <TabsTrigger value="apresentacao" className="gap-2" data-testid="tab-apresentacao">
              <FileText className="w-4 h-4" />
              Apresentação
            </TabsTrigger>
          </TabsList>

          <TabsContent value="artigos" className="space-y-4 animate-fade-in">
            <h2 className="font-serif text-2xl font-medium mb-6 text-foreground">
              Artigos Científicos e Livros
            </h2>

            <div className="space-y-4">
              <ReferenceItem
                type="Artigo"
                citation="FABRI, J. M. G. et al. Espiritualidade como recurso terapêutico no ambulatório de cardiologia. Revista Enfermagem UERJ, Rio de Janeiro, v. 30, n. 1, p. e62722, 2022. DOI: https://doi.org/10.12957/reuerj.2022.62722."
                url="https://www.e-publicacoes.uerj.br/index.php/enfermagemuerj/article/view/62722"
              />

              <ReferenceItem
                type="Artigo"
                citation="SORA, A. B. A. et al. A Dimensão Espiritual Sob a Ótica dos Enfermeiros que Atuam em Uma Unidade Psiquiátrica. Epitaya E-Books, v. 1, n. 11, p. 103-113, 2021. DOI: https://doi.org/10.47879/ed.ep.2021366p103."
                url="https://portal.epitaya.com.br/index.php/ebooks/article/view/264"
              />

              <ReferenceItem
                type="Livro"
                citation="KOENIG, H. G. Spirituality in Patient Care: Why, How, When, and What. 3. ed. Philadelphia: Templeton Press, 2013."
              />

              <ReferenceItem
                type="Livro"
                citation="PESSINI, L.; BARCHIFONTAINE, C. P. de. Bioética, cuidado e espiritualidade. São Paulo: Loyola, 2014."
              />

              <ReferenceItem
                type="Artigo"
                citation="SAAD, M.; MASIERO, D.; BATTISTELLA, L. R. Espiritualidade baseada em evidências. Acta Fisiátrica, v. 8, n. 3, p. 107-112, 2001."
              />

              <ReferenceItem
                type="Artigo"
                citation="GAVA, F. G. S.; TURRINI, R. N. T. Bem-estar espiritual e estresse percebido em profissionais de enfermagem da atenção primária à saúde. Revista Brasileira de Enfermagem, Brasília, v. 78, n. 2, p. e20240193, 2025. DOI: https://doi.org/10.1590/0034-7167-2024-0193pt."
              />

              <ReferenceItem
                type="Artigo"
                citation="MONTEIRO, D. D. et al. Espiritualidade/religiosidade e saúde mental no brasil: uma revisão. Boletim da Academia Paulista de Psicologia, São Paulo, v. 40, n. 98, p. 129-139, jun. 2020."
                url="http://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S1415-711X2020000100014"
              />

              <ReferenceItem
                type="Artigo"
                citation="CAMPOS, A. A. et al. A influência da espiritualidade na saúde mental de jovens e adultos: uma revisão sistemática. PsicoFAE: Revista de Psicologia da FAE, Curitiba, v. 12, n. 1, 2023. DOI: https://doi.org/10.55388/psicofae.v12n1.410."
              />

              <ReferenceItem
                type="Artigo"
                citation="MEDEIROS, A. Y. B. B. V.; PEREIRA, E. R.; SILVA, R. M. C. R. A. The Medical Healing of Souls: a strategy for welcoming post-pandemic mental health. ProQuest, p. 1-6, 2023."
              />
            </div>
          </TabsContent>

          <TabsContent value="videos" className="space-y-4 animate-fade-in">
            <h2 className="font-serif text-2xl font-medium mb-6 text-foreground">
              Recursos Multimídia
            </h2>

            <p className="text-muted-foreground mb-6">
              Todos os vídeos utilizados são de fontes públicas do YouTube com licenças Creative Commons ou permissão de uso educacional. As referências seguem o padrão ABNT para recursos eletrônicos.
            </p>

            <div className="space-y-4">
              <ReferenceItem
                type="Vídeo"
                citation="MINDFUL PEACE. Guided Meditation for Inner Peace. YouTube, 2023. Disponível em: https://www.youtube.com/watch?v=inpok4MKVLM. Acesso em: 1 nov. 2025."
                url="https://www.youtube.com/watch?v=inpok4MKVLM"
              />

              <ReferenceItem
                type="Vídeo"
                citation="GREAT MEDITATION. Gratitude Meditation. YouTube, 2022. Disponível em: https://www.youtube.com/watch?v=3t6XdFnJpQM. Acesso em: 1 nov. 2025."
                url="https://www.youtube.com/watch?v=3t6XdFnJpQM"
              />

              <ReferenceItem
                type="Vídeo"
                citation="STEPHENSON, J. Anxiety Relief Meditation. YouTube, 2021. Disponível em: https://www.youtube.com/watch?v=z6X5oEIg6Ak. Acesso em: 1 nov. 2025."
                url="https://www.youtube.com/watch?v=z6X5oEIg6Ak"
              />

              <ReferenceItem
                type="Vídeo"
                citation="GOODFUL. Morning Meditation. YouTube, 2020. Disponível em: https://www.youtube.com/watch?v=ssss7V1_eyA. Acesso em: 1 nov. 2025."
                url="https://www.youtube.com/watch?v=ssss7V1_eyA"
              />

              <ReferenceItem
                type="Vídeo"
                citation="MEDITATION RELAX MUSIC. Relaxing Music with Nature Sounds. YouTube, 2019. Disponível em: https://www.youtube.com/watch?v=lFcSrYw-ARY. Acesso em: 1 nov. 2025."
                url="https://www.youtube.com/watch?v=lFcSrYw-ARY"
              />

              <ReferenceItem
                type="Vídeo"
                citation="MEDITATIVE MIND. 432Hz Healing Music. YouTube, 2018. Disponível em: https://www.youtube.com/watch?v=eKFTSSKCzWA. Acesso em: 1 nov. 2025."
                url="https://www.youtube.com/watch?v=eKFTSSKCzWA"
              />
            </div>
          </TabsContent>

          <TabsContent value="apresentacao" className="space-y-4 animate-fade-in">
            <h2 className="font-serif text-2xl font-medium mb-6 text-foreground">
              Material da Apresentação
            </h2>

            <p className="text-muted-foreground mb-6">
              Referências extraídas da apresentação do seminário "Espiritualidade e Saúde Mental"
            </p>

            <div className="space-y-4">
              <ReferenceItem
                type="PDF"
                citation="BRASIL. Conselho Federal de Enfermagem (COFEN). Código de Ética dos Profissionais de Enfermagem. Resolução Cofen nº 564/2017. Brasília, 2017. Disponível em: https://www.cofen.gov.br/resolucao-cofen-no-5642017_59145.html. Acesso em: 28 out. 2025."
                url="https://www.cofen.gov.br/resolucao-cofen-no-5642017_59145.html"
              />

              <ReferenceItem
                type="PDF"
                citation="CERRI, M. M. et al. Espiritualidade e Saúde Mental. Apresentação de seminário. Universidade [Nome da Universidade], 2025. Material não publicado."
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-card-border">
          <h3 className="font-serif text-xl font-medium mb-4 text-foreground">
            Sobre as Referências
          </h3>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>
              Todas as referências seguem rigorosamente as normas da ABNT (Associação Brasileira de Normas Técnicas) para garantir credibilidade acadêmica e facilitar verificação das fontes.
            </p>
            <p>
              Os conteúdos desta plataforma foram completamente reescritos e parafraseados para evitar plágio, mantendo fidelidade às evidências científicas das fontes originais.
            </p>
            <p>
              Para conhecer mais sobre o trabalho da Profª Eliane Ramos Pereira, visite seu{" "}
              <a
                href="https://pesquisadores.uff.br/researcher/eliane-ramos-pereira"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                perfil acadêmico na UFF
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
