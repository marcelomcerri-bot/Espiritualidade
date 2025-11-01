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
                <p className="font-medium text-foreground mb-1">1.580+ Citações</p>
                <p className="text-sm text-muted-foreground">Produção acadêmica reconhecida internacionalmente</p>
              </div>
              <div className="p-4 rounded-xl bg-background border border-card-border">
                <p className="font-medium text-foreground mb-1">Universidade Federal Fluminense</p>
                <p className="text-sm text-muted-foreground">Professora Titular em Enfermagem</p>
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
