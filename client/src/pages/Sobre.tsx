import { GraduationCap, Users, BookOpen, Heart } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Sobre() {
  const authors = [
    "Gabrielle Bittencourt",
    "Gabriel Manhães",
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

        {/* Orientação */}
        <Card className="mb-8 bg-gradient-to-br from-accent/5 to-background">
          <CardHeader>
            <h2 className="font-serif text-2xl font-medium text-foreground flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Orientação Acadêmica
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-6 rounded-xl bg-background border border-card-border">
              <h3 className="text-xl font-serif font-medium text-foreground mb-2">
                Profª Drª Eliane Ramos Pereira
              </h3>
              <p className="text-muted-foreground mb-3">
                Universidade Federal Fluminense (UFF)
              </p>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Formação:</strong> Doutora em Enfermagem | Mestre em Enfermagem (UNIRIO) | Especialista em Psicanálise e Saúde Mental (UERJ)</p>
                <p><strong className="text-foreground">Áreas de Expertise:</strong> Enfermagem em Saúde Mental, Espiritualidade e Cuidado Espiritual, Fenomenologia (Merleau-Ponty), Logoterapia (Viktor Frankl), Psicossomática</p>
                <p><strong className="text-foreground">Liderança:</strong> Núcleo de Estudos Qualitativos Translacionais em Emoções e Espiritualidade na Saúde (QUALITEES/CNPq)</p>
              </div>
              
              <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  A Profª Eliane Ramos Pereira é referência nacional em pesquisas sobre espiritualidade aplicada à enfermagem e saúde mental, com foco em fenomenologia, logoterapia e cuidado humanizado. Sua extensa produção acadêmica demonstra forte compromisso com a integração da dimensão espiritual nos cuidados de saúde.
                </p>
              </div>
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
              Este projeto foi desenvolvido pelos seguintes discentes como trabalho de seminário:
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
