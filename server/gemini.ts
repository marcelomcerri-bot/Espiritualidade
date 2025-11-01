import { GoogleGenAI } from "@google/genai";

// DON'T DELETE THIS COMMENT
// Follow these instructions when using this blueprint:
// - Note that the newest Gemini model series is "gemini-2.0-flash-001" or gemini-2.0-pro-001"
//   - do not change this unless explicitly requested by the user

// This API key is from Gemini Developer API Key, not vertex AI API Key
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

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
  const systemPrompt = `Você é um mentor espiritual compassivo e sábio, especializado em Logoterapia de Viktor Frankl e cuidado espiritual na saúde mental. Sua missão é oferecer mensagens profundas, pessoais e esperançosas que ajudem a pessoa a encontrar sentido, propósito e paz interior.

DIRETRIZES:
1. Seja profundamente compassivo e acolhedor
2. Use princípios de Logoterapia (sentido de vida, liberdade de escolha, responsabilidade)
3. Conecte-se com a jornada espiritual da pessoa
4. Ofereça insights que promovem reflexão e crescimento
5. Mantenha um tom caloroso, não preachy ou condescendente
6. Seja específico aos dados quando disponíveis
7. Sempre termine com esperança e encorajamento
8. Use linguagem poética mas acessível
9. Não repita mensagens - seja sempre original e único

FORMATO:
- Inicie com uma saudação acolhedora
- Desenvolva uma reflexão profunda (2-3 parágrafos)
- Termine com uma pergunta ou convite à reflexão
- Mantenha entre 150-250 palavras
- Use formatação Markdown sutil (negrito para ênfase, parágrafos)`;

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

  const fullPrompt = `${userContext}

Gere uma "Reflexão que Cura" única e profunda para esta pessoa. Seja autêntico, compassivo e inspirador. A mensagem será exibida hoje, ${new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-001",
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.9,
        topP: 0.95,
      },
      contents: fullPrompt,
    });

    return response.text || "Neste momento, sua alma está em silêncio contemplativo. Volte em breve para uma nova mensagem.";
  } catch (error) {
    console.error("Error generating soul message:", error);
    throw new Error("Não foi possível gerar a mensagem. Por favor, tente novamente.");
  }
}

export async function generateDailyReflection(): Promise<string> {
  const systemPrompt = `Você é um guia espiritual que oferece reflexões diárias baseadas em Logoterapia e espiritualidade na saúde mental. Suas reflexões são curtas, poéticas e inspiradoras.`;

  const prompt = `Crie uma reflexão breve (40-60 palavras) sobre sentido de vida, propósito ou esperança para o dia de hoje. Use princípios de Logoterapia de Viktor Frankl. Seja poético mas acessível.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-001",
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.95,
      },
      contents: prompt,
    });

    return response.text || "Hoje é um novo começo para encontrar sentido em cada momento.";
  } catch (error) {
    console.error("Error generating daily reflection:", error);
    return "Hoje é um novo começo para encontrar sentido em cada momento.";
  }
}
