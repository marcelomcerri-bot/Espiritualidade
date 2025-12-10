import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

const LUME_KNOWLEDGE_BASE = `
BASE DE CONHECIMENTO CIENTÍFICA - ESPIRITUALIDADE E SAÚDE MENTAL

=== DEFINIÇÕES FUNDAMENTAIS ===

ESPIRITUALIDADE:
- Dimensão universal presente em todos os seres humanos
- Diferente de religiosidade: não está necessariamente vinculada a dogmas ou rituais
- Busca pessoal por significado existencial, propósito de vida e respostas às questões profundas sobre existência
- Conexão com algo transcendente — seja chamado de sagrado, poder superior ou realidade última
- Viktor Frankl: a dimensão espiritual é intrinsecamente humana - nossa capacidade de encontrar sentido mesmo nas circunstâncias mais desafiadoras

LOGOTERAPIA (Viktor Frankl):
- Terceira escola vienense de psicoterapia (após Freud e Adler)
- "Logos" = sentido/significado
- Princípio fundamental: a vontade de encontrar significado é a motivação primária do ser humano
- Frankl sobreviveu aos campos de concentração nazistas e observou que "quem possui um porquê para viver consegue suportar quase qualquer como"
- Técnicas validadas cientificamente:
  * Intenção Paradoxal: desejar paradoxalmente aquilo que se teme
  * Derreflexão: desviar atenção de si mesmo para algo ou alguém
  * Diálogo Socrático: descoberta guiada do sentido através de perguntas

TRÊS CAMINHOS PARA O SENTIDO (Frankl):
1. Valores Criativos: o que oferecemos ao mundo (trabalho, criação, contribuição)
2. Valores Vivenciais: o que recebemos do mundo (amor, beleza, natureza, arte)
3. Valores Atitudinais: a atitude que tomamos diante do sofrimento inevitável

=== EVIDÊNCIAS CIENTÍFICAS ===

SAÚDE MENTAL:
- Práticas espirituais atuam como fator de proteção contra transtornos mentais
- Indivíduos com vida espiritual ativa apresentam índices menores de ansiedade, depressão e tentativas de suicídio
- Redução significativa de sintomas depressivos e ansiosos em pacientes que cultivam espiritualidade como recurso de enfrentamento
- Fonte: LUCCHETTI, G.; KOENIG, H. G.; LUCCHETTI, A. L. G. Spirituality, religiousness, and mental health: A review. World Journal of Clinical Cases, v. 9, n. 26, 2021.

RESILIÊNCIA:
- Espiritualidade fortalece a capacidade de resiliência
- Oferece esperança, otimismo e senso de propósito que sustentam o indivíduo em crises
- Viktor Frankl demonstrou através de sua experiência nos campos de concentração

SAÚDE FÍSICA:
- Impacto positivo no sistema imunológico, endócrino e cardiovascular
- Práticas espirituais promovem comportamentos saudáveis e adesão a tratamentos médicos
- OMS reconhece desde 2005 a espiritualidade como componente integral do conceito de saúde

TRANSTORNOS ESPECÍFICOS (evidências robustas):
- Menor incidência de depressão
- Menor taxa de suicídio
- Menor uso e abuso de substâncias
- Relação mista com ansiedade (estudos mostram resultados positivos, nulos e até negativos)
- Transtorno bipolar e TEPT: melhores desfechos com coping religioso positivo

=== LUTA ESPIRITUAL (FATOR DE RISCO) ===

Ocorre quando o indivíduo:
- Interpreta sua doença ou sofrimento como castigo divino
- Sente-se abandonado por Deus ou pela sua fé
- Entra em conflito com sua comunidade de fé

IMPORTANTE: Em 7% a 15% dos casos, a espiritualidade pode se manifestar como "luta espiritual", associada a PIORES resultados de saúde mental, incluindo:
- Maiores níveis de depressão e ansiedade
- Pior adesão ao tratamento
- Maior ideação suicida

=== FERRAMENTA FICA (Avaliação Espiritual Clínica) ===

F - Fé (Faith): Você tem crenças espirituais ou religiosas?
I - Importância (Importance): Qual a importância da fé na sua vida?
C - Comunidade (Community): Você faz parte de uma comunidade espiritual?
A - Ação (Address/Action): Como gostaria que abordássemos isso no seu cuidado?

Benefícios: aumenta satisfação do paciente e melhora adesão ao tratamento.

=== INTERVENÇÕES DE ENFERMAGEM ===

Práticas eficazes de baixo custo:
- Oração guiada (adaptada às crenças do paciente)
- Pensamento positivo (focado em esperança e significado)
- Escuta ativa (focada no conforto espiritual)
- Meditação espiritual (respeitando tradições individuais)

Resultados comprovados:
- Redução significativa da intensidade da dor em pacientes queimados, oncológicos e pós-operatórios
- Diminuição dos níveis de ansiedade
- Cuidado holístico que complementa manejo farmacológico

=== MECANISMOS BIOLÓGICOS (Pesquisa em andamento) ===

Marcadores neurobiológicos investigados:
- BDNF (Fator Neurotrófico Derivado do Cérebro): níveis mais altos correlacionados com maior espiritualidade
- Serotonina: disponibilidade de transportadores relacionada ao bem-estar espiritual

=== REFERÊNCIAS PRINCIPAIS ===

ARTIGOS DA PROFª DRª ELIANE RAMOS PEREIRA (UFF):
- FABRI, J. M. G. et al. Espiritualidade como recurso terapêutico no ambulatório de cardiologia. Revista Enfermagem UERJ, v. 30, n. 1, 2022.
- DIAS, F. A. et al. Espiritualidade, percepção e saúde mental de universitários em período pandêmico. ResearchGate, 2025.
- ROCHA, R. C. N. P. et al. O sentido da vida dos enfermeiros no trabalho em cuidados paliativos. Revista Eletrônica de Enfermagem, v. 22, 2020.

ARTIGOS DA PROFª DRª ROSE MARY COSTA ROSA ANDRADE SILVA (UFF):
- SILVA, R. M. C. R. A.; PEREIRA, E. R. A dimensão espiritual e sentido da vida na prática do cuidado de enfermagem. REME, v. 22, 2018.
- SILVA, R. M. C. R. A. et al. A Espiritualidade na Maternidade Atípica: Uma Reflexão com Base no Referencial Teórico de Victor Frankl. Revista Pró-UniverSUS, 2023.

ARTIGOS DA PROFª DRª DIVA CRISTINA MORETT ROMANO LEÃO (UFF):
- ROCHA, R. C. N. P. et al. Meaning of life as perceived by nurses at work in oncology palliative care. Revista da Escola de Enfermagem da USP, v. 55, 2021.
- LEÃO, D. C. M. R. et al. Spirituality and meaning of life in nursing education. Revista Brasileira de Enfermagem, v. 73, n. 6, 2020.
- LEÃO, D. C. M. R. et al. Influência da religiosidade e espiritualidade na saúde. Online Brazilian Journal of Nursing, 2017.

OUTRAS REFERÊNCIAS IMPORTANTES:
- LUCCHETTI, G.; KOENIG, H. G.; LUCCHETTI, A. L. G. Spirituality, religiousness, and mental health. World Journal of Clinical Cases, v. 9, n. 26, 2021.
- MOREIRA-ALMEIDA, A.; KOENIG, H. G.; LUCCHETTI, G. Clinical implications of spirituality to mental health. Revista Brasileira de Psiquiatria, v. 36, n. 2, 2014.
- KOENIG, H. G. Spirituality in Patient Care. 3. ed. Philadelphia: Templeton Press, 2013.
- PESSINI, L.; BARCHIFONTAINE, C. P. de. Bioética, cuidado e espiritualidade. São Paulo: Loyola, 2014.
`;

interface LumeChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

async function generateLumeResponse(
  userMessage: string,
  conversationHistory: LumeChatMessage[] = []
): Promise<string> {
  const systemPrompt = `Você é LUME, um assistente especializado em espiritualidade e saúde mental, desenvolvido para a plataforma "Cuidado Integral na Saúde Mental".

SUA IDENTIDADE:
- Nome: LUME (representa luz, iluminação, clareza)
- Papel: Orientador baseado em evidências científicas sobre espiritualidade e logoterapia
- Tom: Acolhedor, respeitoso, científico mas acessível

REGRAS ABSOLUTAS (NÃO VIOLE NUNCA):
1. RESPONDA APENAS com base na BASE DE CONHECIMENTO fornecida abaixo
2. Se a pergunta não puder ser respondida com a base de conhecimento, diga EXATAMENTE: "Esta pergunta está fora do meu conhecimento especializado. Posso ajudar com questões sobre espiritualidade, logoterapia, saúde mental e as evidências científicas que fundamentam essas áreas."
3. NUNCA invente informações, estatísticas ou cite estudos que não estejam explicitamente na base de conhecimento
4. SEMPRE que mencionar uma informação científica, CITE a referência entre parênteses no formato: (AUTOR, ano)
5. NUNCA dê conselhos médicos ou substitua profissionais de saúde mental
6. Se detectar sinais de crise emocional, oriente a pessoa a buscar o CVV (188) ou profissional de saúde mental

FORMATO OBRIGATÓRIO DAS RESPOSTAS:
- Seja claro e objetivo, mas acolhedor
- Use parágrafos curtos para facilitar leitura
- SEMPRE inclua pelo menos uma citação quando mencionar dados científicos. Exemplo: "Estudos mostram que a espiritualidade atua como fator de proteção contra transtornos mentais (LUCCHETTI; KOENIG; LUCCHETTI, 2021)."
- Ao final da resposta, se citou referências, liste-as brevemente
- Ofereça-se para aprofundar temas relacionados

EXEMPLOS DE CITAÇÃO CORRETA:
- "A Logoterapia foi desenvolvida por Viktor Frankl (FRANKL, Logoterapia)."
- "A ferramenta FICA é validada para avaliação espiritual clínica (KOENIG, 2013)."
- "Práticas espirituais podem reduzir sintomas de ansiedade e depressão (LUCCHETTI; KOENIG; LUCCHETTI, 2021)."

BASE DE CONHECIMENTO:
${LUME_KNOWLEDGE_BASE}`;

  const fullPrompt = `${userMessage}

Responda de forma acolhedora e baseada exclusivamente nas evidências científicas da sua base de conhecimento.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-001",
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
        topP: 0.9,
        topK: 40,
      },
      contents: fullPrompt,
    });

    return response.text || "Desculpe, não consegui processar sua pergunta. Por favor, tente novamente.";
  } catch (error) {
    console.error("Error generating LUME response:", error);
    throw new Error("Não foi possível gerar uma resposta. Por favor, tente novamente.");
  }
}

export const handler = async (event: { body: string }) => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: "GEMINI_API_KEY não está configurada." }),
      };
    }

    const body = JSON.parse(event.body || '{}');
    const { message, history } = body;

    if (!message || typeof message !== 'string') {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: "Mensagem é obrigatória" }),
      };
    }

    const response = await generateLumeResponse(message, history || []);
    
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ response }),
    };
  } catch (error) {
    console.error("Error in lume-chat function:", error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        error: error instanceof Error ? error.message : "Failed to generate response" 
      }),
    };
  }
};
