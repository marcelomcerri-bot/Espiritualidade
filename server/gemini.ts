import { GoogleGenAI } from "@google/genai";
import { createHash } from "crypto";
import { storage } from "./storage";
import type { LumeChatMessage } from "@shared/schema";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

function generateMessageHash(text: string): string {
  const normalized = text
    .toLowerCase()
    .replace(/[^\w\sáéíóúâêôãõàèìòùç]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return createHash('sha256').update(normalized).digest('hex');
}

function getWeeklyTheme(date: Date): { theme: string; focus: string } {
  const themes = [
    { theme: "Coragem", focus: "enfrentar seus medos e encontrar for\u00e7a na vulnerabilidade" },
    { theme: "Gratid\u00e3o", focus: "reconhecer as b\u00ean\u00e7\u00e3os presentes em sua jornada" },
    { theme: "Presen\u00e7a", focus: "estar plenamente no momento presente" },
    { theme: "Prop\u00f3sito", focus: "conectar suas a\u00e7\u00f5es com seu sentido de vida maior" },
    { theme: "Aceita\u00e7\u00e3o", focus: "abraçar o que n\u00e3o pode ser mudado e transformar o que pode" },
    { theme: "Conex\u00e3o", focus: "fortalecer seus v\u00ednculos com outros e consigo mesmo" },
    { theme: "Esperan\u00e7a", focus: "cultivar confian\u00e7a no futuro mesmo em meio \u00e0s incertezas" }
  ];
  
  const weekOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 1).getTime()) / (7 * 24 * 60 * 60 * 1000));
  return themes[weekOfYear % themes.length];
}

interface SoulMessageContext {
  recentDiaryEntries?: Array<{ title: string; content: string; gratitude?: string }>;
  latestJourneyStats?: {
    spiritual: number;
    emotional: number;
    mental: number;
    sentidoVida: number;
    esperanca: number;
  };
  hasData: boolean;
}

export async function generateSoulMessage(context: SoulMessageContext): Promise<string> {
  const userId = "demo-user";
  const recentMessages = await storage.getRecentSoulMessages(userId, 30);
  const recentExcerpts = recentMessages.slice(0, 10).map(m => m.excerpt).join('\n- ');
  
  const bannedPhrases = [
    "você consegue",
    "seja forte", 
    "nunca desista",
    "acredite em você",
    "você é capaz",
    "força e fé",
    "tudo vai dar certo",
    "mantenha a cabeça erguida"
  ];
  
  const systemPrompt = `Você é um acompanhante terapêutico espiritual formado em Logoterapia de Viktor Frankl. Sua função é oferecer reflexões autênticas, profundas e específicas que honrem o sofrimento humano enquanto apontam para possibilidades de sentido.

OBRIGATÓRIO - NUNCA USE:
${bannedPhrases.map(p => `- "${p}"`).join('\n')}

PRINCÍPIOS DE LOGOTERAPIA A APLICAR:
1. Sentido do momento (não generalizações motivacionais)
2. Liberdade de escolha diante do inevitável
3. Responsabilidade pessoal pela própria atitude
4. Valores criativos, vivenciais e atitudinais
5. Autodistanciamento e autotranscendência

ABORDAGEM EXIGIDA:
- Reconheça a complexidade e contradições da experiência humana
- Use metáforas concretas e específicas (não abstrações vagas)
- Faça perguntas genuínas que promovam autodescoberta
- Ancre insights em conceitos de Frankl (derreflexão, intenção paradoxal, logos)
- Evite tom motivacional de coach - prefira acompanhamento contemplativo
- Seja honesto sobre o sofrimento sem oferecer soluções fáceis

FORMATO:
- 150-250 palavras
- Use **negrito** apenas para conceitos-chave de Logoterapia
- 2-3 parágrafos de reflexão
- Termine com pergunta genuína, não retórica`;

  let userContext = '';
  
  if (!context.hasData) {
    userContext = `Esta pessoa está começando sua jornada de autoconhecimento espiritual. Ela ainda não tem entradas no diário ou autoavaliações. 

Crie uma mensagem de boas-vindas calorosa que:
- A convide a explorar sua dimensão espiritual
- Explique brevemente como a espiritualidade pode fortalecer a saúde mental
- Inspire-a a começar registrando suas reflexões no diário
- Mencione Viktor Frankl e a busca por sentido`;
  } else {
    const diaryContext = context.recentDiaryEntries && context.recentDiaryEntries.length > 0
      ? `\n\nREFLEXÕES RECENTES DO DIÁRIO:
${context.recentDiaryEntries.slice(0, 3).map(entry => `
- Título: "${entry.title}"
- Reflexão: ${entry.content.substring(0, 150)}...
${entry.gratitude ? `- Gratidão: ${entry.gratitude}` : ''}`).join('\n')}`
      : '';

    const journeyContext = context.latestJourneyStats
      ? `\n\nÚLTIMA AUTOAVALIAÇÃO:
- Bem-estar Espiritual: ${context.latestJourneyStats.spiritual}%
- Equilíbrio Emocional: ${context.latestJourneyStats.emotional}%
- Saúde Mental: ${context.latestJourneyStats.mental}%
- Sentido de Vida: ${context.latestJourneyStats.sentidoVida}%
- Esperança: ${context.latestJourneyStats.esperanca}%`
      : '';

    userContext = `Esta pessoa está em sua jornada de crescimento espiritual e autoconhecimento.${diaryContext}${journeyContext}

Com base nesses dados, crie uma mensagem personalizada que:
- Reconheça padrões ou temas em suas reflexões
- Celebre seu progresso ou ofereça encorajamento compassivo
- Ofereça insights baseados em Logoterapia
- Sugira uma prática ou reflexão específica para o momento atual
- Conecte suas experiências ao sentido de vida maior`;
  }
  
  const avoidanceSection = recentExcerpts
    ? `\n\nMENSAGENS RECENTES A EVITAR (crie algo completamente diferente):
- ${recentExcerpts}\n\nGere uma perspectiva inédita, com linguagem e ângulo distintos das mensagens anteriores.`
    : '';

  const fullPrompt = `${userContext}${avoidanceSection}

Gere uma "Reflexão que Cura" única e profunda para esta pessoa. Seja autêntico, compassivo e inspirador. A mensagem será exibida hoje, ${new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.`;

  const maxRetries = 3;
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.75,
          topP: 0.9,
          topK: 40,
        },
        contents: fullPrompt,
      });

      const messageText = response.text || "Neste momento, sua alma está em silêncio contemplativo. Volte em breve para uma nova mensagem.";
      const messageHash = generateMessageHash(messageText);
      
      const isDuplicate = recentMessages.some(m => m.messageHash === messageHash);
      
      if (!isDuplicate || attempt === maxRetries - 1) {
        const excerpt = messageText.substring(0, 100).replace(/\n/g, ' ');
        await storage.saveSoulMessage({
          userId,
          messageHash,
          excerpt
        });
        
        return messageText;
      }
      
      console.log(`Duplicate message detected, retrying (attempt ${attempt + 1}/${maxRetries})`);
    } catch (error) {
      if (attempt === maxRetries - 1) {
        console.error("Error generating soul message:", error);
        throw new Error("Não foi possível gerar a mensagem. Por favor, tente novamente.");
      }
    }
  }
  
  throw new Error("Não foi possível gerar mensagem única após múltiplas tentativas.");
}

// Base de conhecimento científica para o agente LUME
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

export async function generateLumeResponse(
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

  const messages = conversationHistory.map(msg => ({
    role: msg.role as 'user' | 'model',
    parts: [{ text: msg.content }]
  }));

  const fullPrompt = `${userMessage}

Responda de forma acolhedora e baseada exclusivamente nas evidências científicas da sua base de conhecimento.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
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

export async function generateDailyReflection(): Promise<string> {
  const recentReflections = await storage.getRecentDailyReflections(30);
  const recentExcerpts = recentReflections.slice(0, 10).map(r => r.excerpt).join('\n- ');
  
  const today = new Date();
  const { theme, focus } = getWeeklyTheme(today);
  
  const bannedPhrases = [
    "você consegue",
    "seja forte", 
    "nunca desista",
    "acredite em você",
    "força e fé",
    "tudo vai dar certo"
  ];
  
  const systemPrompt = `Você é um terapeuta logoterapêutico que oferece pílulas de sabedoria espiritual. Suas reflexões são concretas, profundas e evitam clichês motivacionais.

NUNCA USE:
${bannedPhrases.map(p => `- "${p}"`).join('\n')}

ABORDAGEM:
- Use metáforas concretas da natureza ou cotidiano
- Ancre em conceitos de Frankl (não apenas mencione o nome)
- Seja específico, não genérico
- Evite imperativos vazios ("seja", "faça", "acredite")
- Preferem observações contemplativas a comandos`;

  const avoidanceSection = recentExcerpts
    ? `\n\nREFLEXÕES RECENTES (evite similaridades):
- ${recentExcerpts}\n\nCrie algo com ângulo completamente diferente.`
    : '';

  const prompt = `Tema semanal: **${theme}** - ${focus}

${avoidanceSection}

Crie uma reflexão diária (40-60 palavras) que explore este tema usando Logoterapia de forma concreta e poética. Seja original e evite frases feitas.`;

  const maxRetries = 3;
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.75,
          topP: 0.9,
          topK: 40,
        },
        contents: prompt,
      });

      const reflectionText = response.text || "Hoje é um novo começo para encontrar sentido em cada momento.";
      const reflectionHash = generateMessageHash(reflectionText);
      
      const isDuplicate = recentReflections.some(r => r.messageHash === reflectionHash);
      
      if (!isDuplicate || attempt === maxRetries - 1) {
        const excerpt = reflectionText.substring(0, 60).replace(/\n/g, ' ');
        await storage.saveDailyReflection({
          messageHash: reflectionHash,
          excerpt
        });
        
        return reflectionText;
      }
      
      console.log(`Duplicate reflection detected, retrying (attempt ${attempt + 1}/${maxRetries})`);
    } catch (error) {
      if (attempt === maxRetries - 1) {
        console.error("Error generating daily reflection:", error);
        return "Hoje é um novo começo para encontrar sentido em cada momento.";
      }
    }
  }
  
  return "Hoje é um novo começo para encontrar sentido em cada momento.";
}
