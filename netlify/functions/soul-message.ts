import { GoogleGenAI } from "@google/genai";

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

async function generateSoulMessage(context: SoulMessageContext): Promise<string> {
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
  Conteúdo: ${entry.content.substring(0, 200)}${entry.content.length > 200 ? '...' : ''}
  ${entry.gratitude ? `Gratidão: ${entry.gratitude}` : ''}
`).join('\n')}`
      : '';

    const statsContext = context.latestJourneyStats
      ? `\n\nÚLTIMA AUTOAVALIAÇÃO DA JORNADA:
- Dimensão Espiritual: ${context.latestJourneyStats.spiritual}/10
- Bem-estar Emocional: ${context.latestJourneyStats.emotional}/10
- Saúde Mental: ${context.latestJourneyStats.mental}/10
- Sentido de Vida: ${context.latestJourneyStats.sentidoVida}/10
- Esperança: ${context.latestJourneyStats.esperanca}/10`
      : '';

    userContext = `Esta pessoa está em sua jornada de autoconhecimento espiritual.${diaryContext}${statsContext}

Com base nesses dados, crie uma mensagem personalizada que:
- Reconheça e valide sua jornada
- Conecte suas reflexões com princípios de Logoterapia
- Ofereça insights sobre seu crescimento espiritual
- Encoraje os próximos passos`;
  }

  try {
    const model = await ai.models.get("gemini-2.5-flash");
    const result = await model.generateContent({
      systemInstruction: systemPrompt,
      generationConfig: {
        temperature: 0.8,
        topP: 0.9,
      },
      contents: userContext,
    });

    return result.text() || "Desculpe, não foi possível gerar uma mensagem no momento.";
  } catch (error) {
    console.error("Error generating soul message:", error);
    throw new Error("Não foi possível gerar a mensagem. Por favor, tente novamente.");
  }
}

export const handler = async () => {
  try {
    const message = await generateSoulMessage({
      hasData: false,
    });
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    };
  } catch (error) {
    console.error("Error in soul-message function:", error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        error: error instanceof Error ? error.message : "Failed to generate soul message" 
      }),
    };
  }
};
