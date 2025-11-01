import { BookOpen, Microscope, Heart, Brain } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import QuoteCard from "@/components/QuoteCard";
import compassionImage from "@assets/generated_images/Compassionate_care_heart_symbol_cb14015c.png";

export default function Aprenda() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4 text-foreground">
            Aprenda Mais
          </h1>
          <p className="text-lg text-muted-foreground">
            Compreenda a base científica que fundamenta o cuidado espiritual no campo da saúde
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-serif text-3xl font-medium mb-6 text-foreground">
              O que é Espiritualidade?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A espiritualidade representa uma dimensão universal presente em todos os seres humanos. Diferente de religiosidade, ela não está necessariamente vinculada a dogmas ou rituais de instituições específicas. Trata-se da busca pessoal por significado existencial, propósito de vida e respostas às questões mais profundas sobre nossa existência.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Estudos contemporâneos definem espiritualidade como a conexão com algo transcendente — seja chamado de sagrado, poder superior ou realidade última. Esta dimensão oferece orientação, fornecendo senso de direção na busca pelo bem-estar físico, emocional, intelectual e social.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Viktor Frankl, psiquiatra e fundador da Logoterapia, enfatizou que a dimensão espiritual é intrinsecamente humana: é nossa capacidade de encontrar sentido mesmo nas circunstâncias mais desafiadoras da vida.
            </p>
          </div>
          
          <div className="flex items-center justify-center">
            <img
              src={compassionImage}
              alt="Cuidado compassivo"
              className="w-full max-w-md rounded-3xl shadow-2xl animate-float"
            />
          </div>
        </div>

        {/* Evidence Cards */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl font-medium mb-8 text-foreground text-center">
            Evidências Científicas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-elevate transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground">
                    Saúde Mental
                  </h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pesquisas demonstram que práticas espirituais atuam como fator de proteção contra transtornos mentais. Indivíduos com vida espiritual ativa apresentam índices menores de ansiedade, depressão e tentativas de suicídio.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Estudos mostram redução significativa de sintomas depressivos e ansiosos em pacientes que cultivam espiritualidade como recurso de enfrentamento.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <Brain className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground">
                    Resiliência
                  </h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A espiritualidade fortalece a capacidade de resiliência — habilidade de se adaptar e crescer diante de adversidades. Ela oferece esperança, otimismo e senso de propósito que sustentam o indivíduo em crises.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Viktor Frankl demonstrou através de sua experiência nos campos de concentração que quem possui um "porquê" para viver consegue suportar quase qualquer "como".
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-chart-2/10">
                    <Microscope className="w-6 h-6 text-chart-2" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground">
                    Saúde Física
                  </h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Estudos científicos revelam que a espiritualidade impacta positivamente o sistema imunológico, endócrino e cardiovascular. Práticas espirituais promovem comportamentos saudáveis como adesão a tratamentos médicos.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  A OMS reconhece desde 2005 a espiritualidade como componente integral do conceito de saúde.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-chart-5/10">
                    <BookOpen className="w-6 h-6 text-chart-5" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground">
                    Logoterapia
                  </h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Desenvolvida por Viktor Frankl, a Logoterapia é abordagem terapêutica centrada na busca por sentido existencial. Ela parte do princípio de que a vontade de encontrar significado é motivação primária do ser humano.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Técnicas logoterapêuticas incluem Intenção Paradoxal, Derreflexão e Diálogo Socrático — métodos validados cientificamente para tratamento de diversos transtornos mentais.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quote */}
        <div className="mb-16">
          <QuoteCard
            text="A busca de sentido na vida humana constitui uma força primária e não uma racionalização secundária de impulsos instintivos. Este sentido é único e específico, na medida em que deve e pode ser cumprido somente por aquela pessoa."
            author="Viktor Frankl, Em Busca de Sentido"
          />
        </div>

        {/* OMS Recognition */}
        <Card className="mb-12 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <h2 className="font-serif text-2xl font-medium text-foreground">
              Reconhecimento da OMS
            </h2>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Em 2005, a Organização Mundial da Saúde integrou oficialmente a espiritualidade, religiosidade e crenças pessoais como dimensões essenciais da saúde e qualidade de vida. Este reconhecimento fundamenta o modelo biopsicossocial-espiritual de cuidado.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Profissionais de saúde são encorajados a considerar a dimensão espiritual nas práticas clínicas, respeitando os valores e crenças dos pacientes. Pesquisas demonstram que acolher a espiritualidade do paciente fortalece o vínculo terapêutico e favorece resultados positivos no tratamento.
            </p>
          </CardContent>
        </Card>

        {/* Specific Mental Disorders Section */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl font-medium mb-8 text-foreground">
            Espiritualidade e Transtornos Mentais Específicos
          </h2>
          
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed mb-6">
                A literatura científica atual demonstra que os benefícios da espiritualidade para a saúde mental podem ser observados em condições específicas. Evidências robustas, principalmente em contextos ocidentais, associam níveis mais altos de espiritualidade e religiosidade a:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900" data-testid="benefit-depression">
                  <p className="font-medium text-foreground mb-2">✓ Menor incidência de depressão</p>
                  <p className="text-sm text-muted-foreground">Práticas espirituais atuam como fator protetor significativo</p>
                </div>
                
                <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900" data-testid="benefit-suicide">
                  <p className="font-medium text-foreground mb-2">✓ Menor taxa de suicídio</p>
                  <p className="text-sm text-muted-foreground">Senso de propósito e comunidade oferecem proteção</p>
                </div>
                
                <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900" data-testid="benefit-substance">
                  <p className="font-medium text-foreground mb-2">✓ Menor uso e abuso de substâncias</p>
                  <p className="text-sm text-muted-foreground">Valores espirituais promovem comportamentos saudáveis</p>
                </div>
                
                <div className="p-4 rounded-xl bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900" data-testid="benefit-anxiety">
                  <p className="font-medium text-foreground mb-2">~ Relação mista com ansiedade</p>
                  <p className="text-sm text-muted-foreground">Estudos mostram resultados positivos, nulos e até negativos</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Condições como <strong>transtorno bipolar</strong> e <strong>estresse pós-traumático</strong> frequentemente mostram melhores desfechos quando associadas a coping religioso positivo e maior significado espiritual.
              </p>
              
              <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500" data-testid="warning-spiritual-struggle">
                <p className="text-sm font-medium text-orange-900 dark:text-orange-200 mb-2">⚠️ Importante Ressalva:</p>
                <p className="text-sm text-muted-foreground">
                  Em uma minoria dos casos (7% a 15%), a espiritualidade pode se manifestar como "luta espiritual", o que está consistentemente associado a piores resultados de saúde mental.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Spiritual Struggle Section */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl font-medium mb-8 text-foreground">
            Luta Espiritual: Um Fator de Risco Crucial
          </h2>
          
          <Card className="border-2 border-destructive/20 bg-destructive/5">
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Para equilibrar a visão, é fundamental abordar o conceito de <strong>"luta espiritual"</strong> ou <strong>"coping religioso negativo"</strong>. Esta situação ocorre quando o indivíduo:
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-background" data-testid="struggle-punishment">
                  <span className="text-destructive font-bold">•</span>
                  <p className="text-muted-foreground">Interpreta sua doença ou sofrimento como um <strong>castigo divino</strong></p>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-lg bg-background" data-testid="struggle-abandoned">
                  <span className="text-destructive font-bold">•</span>
                  <p className="text-muted-foreground">Sente-se <strong>abandonado por Deus</strong> ou pela sua fé</p>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-lg bg-background" data-testid="struggle-community">
                  <span className="text-destructive font-bold">•</span>
                  <p className="text-muted-foreground">Entra em <strong>conflito com sua comunidade de fé</strong></p>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-background border border-destructive/30">
                <p className="text-sm font-medium text-foreground mb-2">Diferença Importante:</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Diferente de simplesmente não ser religioso, a luta espiritual é um <strong>estado de sofrimento ativo relacionado às crenças</strong>.
                </p>
                <p className="text-sm text-muted-foreground">
                  Estudos mostram que esse tipo de coping está fortemente associado a maiores níveis de depressão, ansiedade, pior adesão ao tratamento e maior ideação suicida, representando um importante fator de risco que os profissionais de saúde devem estar aptos a identificar.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Clinical Assessment Section */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl font-medium mb-8 text-foreground">
            Avaliação Espiritual na Prática Clínica
          </h2>
          
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Uma das aplicações mais práticas e consensuais nas diretrizes clínicas é a realização da <strong>"História Espiritual"</strong> durante a anamnese. Trata-se de uma entrevista breve e estruturada para compreender a importância e o impacto (positivo ou negativo) das crenças do paciente em sua saúde e no tratamento.
              </p>
              
              <div className="p-6 rounded-xl bg-primary/10 border border-primary/30 mb-6">
                <h3 className="font-serif text-xl font-medium text-foreground mb-4">Ferramenta FICA</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Uma das ferramentas validadas mais utilizadas é o protocolo FICA, que permite ao profissional identificar, em poucos minutos, como a espiritualidade impacta o paciente:
                </p>
                
                <div className="space-y-3">
                  <div className="flex gap-3" data-testid="fica-faith">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">F</div>
                    <div>
                      <p className="font-medium text-foreground">Fé (Faith)</p>
                      <p className="text-sm text-muted-foreground">Você tem crenças espirituais ou religiosas?</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3" data-testid="fica-importance">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">I</div>
                    <div>
                      <p className="font-medium text-foreground">Importância (Importance)</p>
                      <p className="text-sm text-muted-foreground">Qual a importância da fé na sua vida?</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3" data-testid="fica-community">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">C</div>
                    <div>
                      <p className="font-medium text-foreground">Comunidade (Community)</p>
                      <p className="text-sm text-muted-foreground">Você faz parte de uma comunidade espiritual?</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3" data-testid="fica-action">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">A</div>
                    <div>
                      <p className="font-medium text-foreground">Ação (Address/Action)</p>
                      <p className="text-sm text-muted-foreground">Como gostaria que abordássemos isso no seu cuidado?</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900">
                <p className="text-sm font-medium text-green-900 dark:text-green-200 mb-2">✓ Benefícios Comprovados:</p>
                <p className="text-sm text-muted-foreground">
                  Estudos demonstram que essa abordagem aumenta a satisfação do paciente com o cuidado e pode melhorar a adesão ao tratamento, pois sinaliza um acolhimento integral da pessoa.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Nursing Interventions Section */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl font-medium mb-8 text-foreground">
            Intervenções de Enfermagem para Dor e Ansiedade
          </h2>
          
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed mb-6">
                A espiritualidade também se mostra uma ferramenta valiosa e de <strong>baixo custo</strong> para intervenções de enfermagem diretas, especialmente no manejo de sintomas. Revisões sistemáticas e ensaios clínicos identificaram práticas eficazes:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-background border border-card-border" data-testid="intervention-prayer">
                  <p className="font-medium text-foreground mb-2">🙏 Oração Guiada</p>
                  <p className="text-sm text-muted-foreground">Meditação baseada em preces adaptadas às crenças do paciente</p>
                </div>
                
                <div className="p-4 rounded-xl bg-background border border-card-border" data-testid="intervention-positive">
                  <p className="font-medium text-foreground mb-2">💭 Pensamento Positivo</p>
                  <p className="text-sm text-muted-foreground">Treinamento focado em esperança e significado</p>
                </div>
                
                <div className="p-4 rounded-xl bg-background border border-card-border" data-testid="intervention-listening">
                  <p className="font-medium text-foreground mb-2">👂 Escuta Ativa</p>
                  <p className="text-sm text-muted-foreground">Focada no conforto espiritual e necessidades existenciais</p>
                </div>
                
                <div className="p-4 rounded-xl bg-background border border-card-border" data-testid="intervention-meditation">
                  <p className="font-medium text-foreground mb-2">🧘 Meditação Espiritual</p>
                  <p className="text-sm text-muted-foreground">Práticas contemplativas respeitando tradições individuais</p>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-accent/10 border border-accent/30">
                <p className="text-sm font-medium text-foreground mb-2">📊 Resultados Comprovados:</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Essas intervenções, quando realizadas com respeito à crença do paciente, resultaram em:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span><strong>Redução significativa da intensidade da dor</strong> em pacientes queimados, oncológicos e pós-operatórios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span><strong>Diminuição dos níveis de ansiedade</strong> em diversos contextos clínicos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span><strong>Cuidado holístico</strong> que complementa o manejo farmacológico, promovendo conforto e bem-estar</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Biological Mechanisms Section */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl font-medium mb-8 text-foreground">
            Mecanismos Biológicos: Uma Fronteira da Pesquisa
          </h2>
          
          <Card className="bg-gradient-to-br from-chart-2/5 to-chart-5/5">
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed mb-6">
                A ciência começa a explorar os possíveis <strong>mecanismos biológicos</strong> que mediam a relação entre espiritualidade e saúde. Pesquisas preliminares, ainda em estágio inicial, investigam como crenças e práticas espirituais podem influenciar marcadores neurobiológicos.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-background/80 backdrop-blur border border-card-border" data-testid="bio-bdnf">
                  <p className="font-medium text-foreground mb-2">🧠 BDNF</p>
                  <p className="text-sm text-muted-foreground">Fator Neurotrófico Derivado do Cérebro — níveis mais altos correlacionados com maior espiritualidade</p>
                </div>
                
                <div className="p-4 rounded-xl bg-background/80 backdrop-blur border border-card-border" data-testid="bio-serotonin">
                  <p className="font-medium text-foreground mb-2">🔬 Serotonina</p>
                  <p className="text-sm text-muted-foreground">Disponibilidade de transportadores de serotonina relacionada ao bem-estar espiritual</p>
                </div>
                
                <div className="p-4 rounded-xl bg-background/80 backdrop-blur border border-card-border" data-testid="bio-dopamine">
                  <p className="font-medium text-foreground mb-2">⚡ Dopamina</p>
                  <p className="text-sm text-muted-foreground">Variações em genes relacionados ao sistema dopaminérgico</p>
                </div>
                
                <div className="p-4 rounded-xl bg-background/80 backdrop-blur border border-card-border" data-testid="bio-oxytocin">
                  <p className="font-medium text-foreground mb-2">💙 Oxitocina</p>
                  <p className="text-sm text-muted-foreground">Sistema de oxitocina associado a conexão social e espiritual</p>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-chart-5/20 border border-chart-5/30">
                <p className="text-sm font-medium text-foreground mb-2">🔭 Perspectiva Futura:</p>
                <p className="text-sm text-muted-foreground">
                  Embora sejam descobertas iniciais, elas abrem um caminho promissor para entender como o bem-estar espiritual pode se traduzir em mudanças fisiológicas mensuráveis no cérebro e no corpo, integrando dimensões subjetivas e objetivas da saúde humana.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Research Base */}
        <Card>
          <CardHeader>
            <h2 className="font-serif text-2xl font-medium text-foreground">
              Base de Pesquisa
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Esta plataforma é fundamentada em décadas de pesquisas sobre espiritualidade no campo da saúde. Destaque especial para os trabalhos da Profª Eliane Ramos Pereira (UFF), referência nacional em espiritualidade no cuidado em saúde.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-background border border-card-border">
                <p className="font-medium text-foreground mb-1">Universidade Federal Fluminense</p>
                <p className="text-sm text-muted-foreground">Professora Titular em Enfermagem</p>
              </div>
              <div className="p-4 rounded-xl bg-background border border-card-border">
                <p className="font-medium text-foreground mb-1">EEAAC/UFF</p>
                <p className="text-sm text-muted-foreground">Escola de Enfermagem Aurora de Afonso Costa</p>
              </div>
              <div className="p-4 rounded-xl bg-background border border-card-border">
                <p className="font-medium text-foreground mb-1">Fenomenologia</p>
                <p className="text-sm text-muted-foreground">Abordagem qualitativa para compreender experiências</p>
              </div>
              <div className="p-4 rounded-xl bg-background border border-card-border">
                <p className="font-medium text-foreground mb-1">Logoterapia</p>
                <p className="text-sm text-muted-foreground">Base teórica em Viktor Frankl</p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                Para conhecer todas as referências acadêmicas que fundamentam esta plataforma, visite a seção <a href="/referencias" className="text-primary hover:underline font-medium">Referências</a>.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
