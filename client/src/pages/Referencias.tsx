import { FileText, Video, BookOpen, Download } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReferenceItem from "@/components/ReferenceItem";
import { Button } from "@/components/ui/button";
import pdfFile from "@assets/Espiritualidade e Saúde mental_1762015049821.pdf";

export default function Referencias() {
  const handleTabChange = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4 text-foreground">
            Referências
          </h1>
          <p className="text-lg text-muted-foreground">
            Todas as fontes acadêmicas e multimídia utilizadas nesta plataforma, formatadas rigorosamente em ABNT
          </p>
        </div>

        <Tabs defaultValue="artigos" className="w-full" onValueChange={handleTabChange}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="artigos" className="gap-2" data-testid="tab-artigos">
              <BookOpen className="w-4 h-4" />
              Artigos e Livros
            </TabsTrigger>
            <TabsTrigger value="videos" className="gap-2" data-testid="tab-videos">
              <Video className="w-4 h-4" />
              Vídeos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="artigos" className="space-y-4 animate-fade-in">
            <h2 className="font-serif text-2xl font-medium mb-6 text-foreground">
              Artigos Científicos e Livros
            </h2>
            
            <h3 className="font-medium text-lg text-foreground mb-4 mt-8">
              Artigos da Profª Drª Eliane Ramos Pereira
            </h3>
            
            <div className="space-y-4">
              <ReferenceItem
                type="Artigo"
                citation="FABRI, J. M. G. et al. Espiritualidade como recurso terapêutico no ambulatório de cardiologia. Revista Enfermagem UERJ, Rio de Janeiro, v. 30, n. 1, p. e62722, 2022. DOI: https://doi.org/10.12957/reuerj.2022.62722."
                url="https://www.e-publicacoes.uerj.br/index.php/enfermagemuerj/article/view/62722"
              />

              <ReferenceItem
                type="Artigo"
                citation="SORA, A. B. et al. A Dimensão Espiritual Sob a Ótica dos Enfermeiros que Atuam em Uma Unidade Psiquiátrica. Epitaya E-books, v. 1, n. 11, p. 103-113, 2021. DOI: https://doi.org/10.47879/ed.ep.2021366p103."
                url="https://portal.epitaya.com.br/index.php/ebooks/article/view/264"
              />

              <ReferenceItem
                type="Artigo"
                citation="DIAS, F. A.; PEREIRA, E. R.; SILVA, R. M. C. R. A.; MEDEIROS, A. Y. B. B. V. Espiritualidade, percepção e saúde mental de universitários em período pandêmico: estudo bibliométrico. ResearchGate, 2025. Disponível em: https://www.researchgate.net/publication/391241507. Acesso em: 1 nov. 2025."
                url="https://www.researchgate.net/publication/391241507"
              />

              <ReferenceItem
                type="Artigo"
                citation="MEDEIROS, A. Y. B. B. V.; PEREIRA, E. R.; SILVA, R. M. C. R. A. The Medical Healing of Souls: a strategy for welcoming post-pandemic mental health. ProQuest, p. 1-6, 2023."
              />

              <ReferenceItem
                type="Artigo"
                citation="FLORES, I. P.; PEREIRA, E. R.; SILVA, R. M. C. R. A.; ALCANTARA, V. C. G. Espiritualidade, ensino na graduação e prática profissional: uma revisão integrativa. Research, Society and Development, v. 9, n. 10, 2020."
              />

              <ReferenceItem
                type="Artigo"
                citation="FLORES, I. P.; PEREIRA, E. R.; SILVA, R. M. C. R. A.; BEZERRA, C. M. P. D.; ALCANTARA, V. C. G. A religiosidade e sua influência no processo de cura terapêutico. Research, Society and Development, v. 9, n. 9, 2020."
              />

              <ReferenceItem
                type="Artigo"
                citation="ROCHA, R. C. N. P.; PEREIRA, E. R.; SILVA, R. M. C. R. A.; MEDEIROS, A. Y. B. B. V.; MARINS, A. M. F. O sentido da vida dos enfermeiros no trabalho em cuidados paliativos: revisão integrativa. Revista Eletrônica de Enfermagem, v. 22, 2020."
              />

              <ReferenceItem
                type="Artigo"
                citation="DIAS, F. A.; PEREIRA, E. R.; SILVA, R. M. C. R. A.; MEDEIROS, A. Y. B. B. V. Espiritualidade e saúde: Uma reflexão crítica sobre a vida simbólica. Research, Society and Development, v. 9, n. 8, 2020."
              />
            </div>

            <h3 className="font-medium text-lg text-foreground mb-4 mt-8">
              Livros e Obras de Referência
            </h3>

            <div className="space-y-4">
              <ReferenceItem
                type="Livro"
                citation="KOENIG, H. G. Spirituality in Patient Care: Why, How, When, and What. 3. ed. Philadelphia: Templeton Press, 2013."
              />

              <ReferenceItem
                type="Livro"
                citation="PESSINI, L.; BARCHIFONTAINE, C. P. de. Bioética, cuidado e espiritualidade. São Paulo: Loyola, 2014."
              />
            </div>

            <h3 className="font-medium text-lg text-foreground mb-4 mt-8">
              Outras Referências Utilizadas
            </h3>

            <div className="space-y-4">
              <ReferenceItem
                type="Artigo"
                citation="LUCCHETTI, G.; KOENIG, H. G.; LUCCHETTI, A. L. G. Spirituality, religiousness, and mental health: A review of the current scientific evidence. World Journal of Clinical Cases, v. 9, n. 26, p. 7620–7631, 16 set. 2021. DOI: https://doi.org/10.12998/wjcc.v9.i26.7620."
                url="https://doi.org/10.12998/wjcc.v9.i26.7620"
              />

              <ReferenceItem
                type="Artigo"
                citation="MOREIRA-ALMEIDA, A.; KOENIG, H. G.; LUCCHETTI, G. Clinical implications of spirituality to mental health: review of evidence and practical guidelines. Revista Brasileira de Psiquiatria, v. 36, n. 2, p. 176–182, abr. 2014. DOI: https://doi.org/10.1590/1516-4446-2013-1255."
                url="https://doi.org/10.1590/1516-4446-2013-1255"
              />

              <ReferenceItem
                type="Artigo"
                citation="MOREIRA, R. DE S.; SANTANA JUNIOR, R. N. DE A.; POSSO, M. B. S. Spirituality, nursing and pain: an indissociable triad. Brazilian Journal of Pain, v. 4, n. 3, p. 282-287, 2021. DOI: https://doi.org/10.5935/2595-0118.20210044."
                url="https://doi.org/10.5935/2595-0118.20210044"
              />

              <ReferenceItem
                type="Artigo"
                citation="GAVA, F. G. S.; TURRINI, R. N. T. Bem-estar espiritual e estresse percebido em profissionais de enfermagem da atenção primária à saúde. Revista Brasileira de Enfermagem, Brasília, v. 78, n. 2, e20240193, 2025. DOI: https://doi.org/10.1590/0034-7167-2024-0193pt."
                url="https://doi.org/10.1590/0034-7167-2024-0193pt"
              />

              <ReferenceItem
                type="Artigo"
                citation="MONTEIRO, D. D. et al. Espiritualidade/religiosidade e saúde mental no brasil: uma revisão. Boletim da Academia Paulista de Psicologia, São Paulo, v. 40, n. 98, p. 129-139, jun. 2020. Disponível em: http://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S1415-711X2020000100014. Acesso em: 29 out. 2025."
                url="http://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S1415-711X2020000100014"
              />

              <ReferenceItem
                type="Artigo"
                citation="CAMPOS, A. A. et al. A influência da espiritualidade na saúde mental de jovens e adultos: uma revisão sistemática. PsicoFAE: Revista de Psicologia da FAE, Curitiba, v. 12, n. 1, 2023. DOI: https://doi.org/10.55388/psicofae.v12n1.410."
                url="https://doi.org/10.55388/psicofae.v12n1.410"
              />

              <ReferenceItem
                type="Artigo"
                citation="SAAD, M.; MASIERO, D.; BATTISTELLA, L. R. Espiritualidade baseada em evidências. Acta Fisiátrica, v. 8, n. 3, p. 107-112, 2001."
              />

              <ReferenceItem
                type="PDF"
                citation="BRASIL. Conselho Federal de Enfermagem (COFEN). Código de Ética dos Profissionais de Enfermagem. Resolução Cofen nº 564/2017. Brasília, 2017. Disponível em: https://www.cofen.gov.br/resolucao-cofen-no-5642017_59145.html. Acesso em: 28 out. 2025."
                url="https://www.cofen.gov.br/resolucao-cofen-no-5642017_59145.html"
              />

              <div className="p-6 rounded-lg border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-background hover:shadow-lg transition-all">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-primary">PDF - Material Acadêmico</span>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">
                      CERRI, M. M.; OTERO, M. L. C. M. G.; BITTENCOURT FREITAS, G.; MANHAES DE CARVALHO, G.; CARVALHO, R. G. G.; RITTA, M. C. C. L.; MEDEIROS, R. M.; ALMEIDA, P. A. S.; SESSIN FREIXIEIRO YOUSSEF, B.; MOTTA CONCEICAO, D. Espiritualidade e Saúde Mental: Apresentação de Seminário. Universidade Federal Fluminense (UFF), 2025. Material acadêmico.
                    </p>
                  </div>
                  <a
                    href={pdfFile}
                    download="Espiritualidade_e_Saude_Mental_UFF_2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="default"
                      size="sm"
                      className="gap-2"
                      data-testid="button-download-pdf"
                    >
                      <Download className="w-4 h-4" />
                      Baixar PDF
                    </Button>
                  </a>
                </div>
              </div>
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
                citation="SEALEY, M. Guided Meditation for Deep Sleep. YouTube, 2020. Disponível em: https://www.youtube.com/watch?v=1vx8iUvfyCY. Acesso em: 1 nov. 2025."
                url="https://www.youtube.com/watch?v=1vx8iUvfyCY"
              />

              <ReferenceItem
                type="Vídeo"
                citation="GOODFUL. 10-Minute Meditation For Anxiety. YouTube, 2019. Disponível em: https://www.youtube.com/watch?v=O-6f5wQXSu8. Acesso em: 1 nov. 2025."
                url="https://www.youtube.com/watch?v=O-6f5wQXSu8"
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
              Esta plataforma é fundamentada especialmente nos estudos da <strong className="text-foreground">Profª Drª Eliane Ramos Pereira</strong>, professora titular da Universidade Federal Fluminense (UFF) e referência nacional em espiritualidade aplicada à enfermagem e ao campo da saúde.
            </p>
            <p>
              Os conteúdos foram desenvolvidos com base em evidências científicas, mantendo fidelidade às pesquisas originais e respeitando integralmente os direitos autorais.
            </p>
            <p>
              Para conhecer mais sobre o trabalho da Profª Eliane Ramos Pereira, visite seu{" "}
              <a
                href="https://scholar.google.com/citations?user=7VMEE9EAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                perfil acadêmico no Google Scholar
              </a>
              {" "}ou seu{" "}
              <a
                href="https://orcid.org/0000-0002-6381-3979"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                perfil ORCID
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
