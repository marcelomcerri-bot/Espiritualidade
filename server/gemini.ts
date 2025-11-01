import { GoogleGenAI } from "@google/genai";
import { createHash } from "crypto";
import { storage } from "./storage";

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
        model: "gemini-2.0-flash-001",
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
        model: "gemini-2.0-flash-001",
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
