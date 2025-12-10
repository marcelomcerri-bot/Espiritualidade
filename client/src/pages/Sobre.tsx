import { GraduationCap, Users, BookOpen, Heart, Smartphone, Download } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Sobre() {
  const authors = [
    "Bruno Sessin Freixieiro Youssef",
    "Duane Motta Conceicao",
    "Gabrielle Bittencourt Freitas",
    "Gabriel Manhaes de Carvalho",
    "Marcelo Marques Cerri",
    "Maria Clara Cruz Lacerda Ritta",
    "Maria Luiza Cavalcanti Marques Gall Otero",
    "Pedro Augusto dos Santos Almeida",
    "Rebeca Grassini Gomes de Carvalho",
    "Roberta Mendonça de Medeiros",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4 text-foreground">
            Sobre o Projeto
          </h1>
          <p className="text-lg text-muted-foreground">
            Conheça a equipe e a inspiração por trás desta plataforma
          </p>
        </div>

        {/* Project Purpose */}
        <Card className="mb-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
          <CardHeader>
            <h2 className="font-serif text-2xl font-medium text-foreground flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary" />
              Propósito do Projeto
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Este projeto foi desenvolvido como trabalho acadêmico na disciplina <strong className="text-foreground">"Espiritualidade no Campo da Saúde"</strong>, do curso de graduação em Enfermagem da Universidade Federal Fluminense (UFF).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A plataforma visa integrar conhecimentos sobre espiritualidade no campo da saúde, oferecendo ferramentas práticas baseadas em evidências científicas e na Logoterapia de Viktor Frankl para o fortalecimento do bem-estar emocional e espiritual.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Fundamentado em estudos sobre a dimensão espiritual como fator de proteção e promoção da saúde, este trabalho busca contribuir para um cuidado integral e humanizado.
            </p>
          </CardContent>
        </Card>

        {/* APK Section */}
        <Card className="mb-8 border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-background overflow-hidden">
          <CardHeader>
            <h2 className="font-serif text-2xl font-medium text-foreground flex items-center gap-2">
              <Smartphone className="w-6 h-6 text-primary" />
              Disponível para Android
            </h2>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Phone Mockup */}
              <div className="flex-shrink-0">
                <div className="relative w-[280px] h-[560px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[40px] p-3 shadow-2xl">
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10"></div>
                  
                  {/* Phone screen */}
                  <div className="w-full h-full bg-white dark:bg-gray-950 rounded-[32px] overflow-hidden relative">
                    {/* App content preview */}
                    <div className="w-full h-full flex flex-col bg-gradient-to-b from-orange-50 to-white dark:from-orange-950/20 dark:to-gray-950">
                      {/* Header */}
                      <div className="p-6 text-center">
                        <h1 className="font-serif text-2xl font-medium text-gray-900 dark:text-gray-100 mb-2">
                          Cuidado Integral
                        </h1>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          na Saúde Mental
                        </p>
                      </div>
                      
                      {/* Content preview */}
                      <div className="flex-1 px-4 space-y-3">
                        <div className="p-3 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                              <Heart className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                            </div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-24"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded w-full"></div>
                            <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded w-4/5"></div>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                              <BookOpen className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-20"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded w-full"></div>
                            <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded w-3/5"></div>
                          </div>
                        </div>

                        <div className="p-3 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                              <Users className="w-3 h-3 text-green-600 dark:text-green-400" />
                            </div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-28"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded w-full"></div>
                            <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded w-2/3"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom navigation */}
                      <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                        <div className="flex justify-around">
                          <div className="w-8 h-1 bg-orange-500 rounded-full"></div>
                          <div className="w-8 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                          <div className="w-8 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                          <div className="w-8 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download info */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-xl font-serif font-medium text-foreground mb-3">
                    Acesse onde estiver
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Baixe nosso aplicativo Android e tenha acesso a todas as práticas de cuidado espiritual, ferramentas de autoconhecimento e recursos para saúde mental diretamente no seu celular.
                  </p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground mb-6">
                    <div className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Acesso offline a conteúdos selecionados</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Interface otimizada para dispositivos móveis</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Mesma experiência do site em formato de app</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/30">
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong className="text-foreground">Link de download:</strong> Acesse a pasta do Google Drive para baixar o APK do aplicativo.
                  </p>
                  <Button 
                    asChild
                    className="w-full sm:w-auto gap-2"
                    data-testid="button-download-apk"
                  >
                    <a 
                      href="https://drive.google.com/drive/u/1/folders/13swnhpe7Dr1r4Qlkb35GmaeO6lptYDqu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Download className="w-4 h-4" />
                      Download APK
                    </a>
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground italic">
                  <strong className="text-foreground">Nota:</strong> O aplicativo está em versão beta e disponível apenas para Android. Certifique-se de permitir instalação de apps de fontes desconhecidas nas configurações do seu dispositivo.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Orientação */}
        <Card className="mb-8 bg-gradient-to-br from-accent/5 to-background">
          <CardHeader>
            <h2 className="font-serif text-2xl font-medium text-foreground flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Orientação Acadêmica
            </h2>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 rounded-xl bg-background border border-card-border">
              <h3 className="text-xl font-serif font-medium text-foreground mb-2">
                Profª Drª Eliane Ramos Pereira
              </h3>
              <p className="text-muted-foreground mb-3">
                Universidade Federal Fluminense (UFF)
              </p>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Formação:</strong> Doutora em Enfermagem | Mestre em Enfermagem (UNIRIO) | Especialista em Psicanálise e Saúde Mental (UERJ)</p>
                <p><strong className="text-foreground">Áreas de Expertise:</strong> Enfermagem em Saúde Mental, Espiritualidade e Cuidado Integral, Fenomenologia (Merleau-Ponty), Logoterapia (Viktor Frankl), Psicossomática</p>
                <p><strong className="text-foreground">Liderança:</strong> Núcleo de Estudos Qualitativos Translacionais em Emoções e Espiritualidade na Saúde (QUALITEES/CNPq)</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-background border border-card-border">
              <h3 className="text-xl font-serif font-medium text-foreground mb-2">
                Profª Drª Rose Mary Costa Rosa Andrade Silva
              </h3>
              <p className="text-muted-foreground mb-3">
                Universidade Federal Fluminense (UFF)
              </p>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Formação:</strong> Pós-Doutora em Filosofia (UERJ) | Doutora em Psicologia Social, Filosofia e Enfermagem | Mestre em Filosofia e Enfermagem</p>
                <p><strong className="text-foreground">Áreas de Expertise:</strong> Fenomenologia (Merleau-Ponty), Cuidado Integral, Filosofia e Saúde, Tanatologia, Cuidados Paliativos</p>
                <p><strong className="text-foreground">Liderança:</strong> Grupo de Pesquisa "Filosofia e Saúde" (UERJ-UFF)</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-background border border-card-border">
              <h3 className="text-xl font-serif font-medium text-foreground mb-2">
                Profª Drª Diva Cristina Morett Romano Leão
              </h3>
              <p className="text-muted-foreground mb-3">
                Universidade Federal Fluminense (UFF)
              </p>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Formação:</strong> Doutora em Ciências do Cuidado em Saúde (UFF/Universidad de Granada) | Mestre em Enfermagem (UNIRIO) | Especialista em Enfermagem Obstétrica</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                As professoras são referências nacionais em pesquisas sobre espiritualidade aplicada à enfermagem e saúde mental, com foco em fenomenologia, logoterapia e cuidado humanizado. Sua extensa produção acadêmica demonstra forte compromisso com a integração da dimensão espiritual nos cuidados de saúde.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Authors */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="font-serif text-2xl font-medium text-foreground flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              Equipe de Desenvolvimento
            </h2>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Este projeto foi desenvolvido pelos seguintes discentes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {authors.map((author, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-background to-card border border-card-border"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-medium">
                      {author.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </span>
                  </div>
                  <p className="text-foreground font-medium">{author}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Metodologia */}
        <Card className="mb-8 border-2 border-accent/20">
          <CardHeader>
            <h2 className="font-serif text-2xl font-medium text-foreground flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              Metodologia e Propósito
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Este site é resultado de um projeto acadêmico desenvolvido na disciplina <strong className="text-foreground">Espiritualidade no Campo da Saúde</strong> (EEAAC/UFF), com o objetivo de integrar teoria e prática no cuidado espiritual em saúde mental.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A plataforma foi construída como produto educacional, não se caracterizando como plataforma de uso público ou comercial. Todo o conteúdo é fundamentado em evidências científicas, pesquisas acadêmicas e obras de autores reconhecidos na área de espiritualidade e saúde.
            </p>
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Natureza do Projeto:</strong> Trabalho acadêmico desenvolvido por discentes de graduação em Enfermagem da Universidade Federal Fluminense, sob orientação da Profª Drª Eliane Ramos Pereira, com finalidade exclusivamente educacional e de promoção do conhecimento sobre o cuidado espiritual no campo da saúde mental.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-card-border">
          <p className="text-sm text-muted-foreground italic leading-relaxed text-center">
            <strong className="text-foreground">Nota:</strong> Este projeto é um trabalho acadêmico desenvolvido com fins educacionais e de promoção do conhecimento sobre cuidado espiritual na saúde mental. Todo o conteúdo é baseado em evidências científicas e referências acadêmicas devidamente citadas.
          </p>
        </div>
      </div>
    </div>
  );
}
