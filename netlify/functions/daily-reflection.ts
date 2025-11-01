import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

async function generateDailyReflection(): Promise<string> {
  const systemPrompt = `Você é um sábio mentor espiritual com profundo conhecimento em Logoterapia e filosofia existencial. 
  
Crie uma reflexão diária inspiradora (1-2 frases curtas) que:
- Promova esperança, sentido e propósito de vida
- Use princípios de Viktor Frankl ou sabedoria universal
- Seja aplicável ao dia-a-dia
- Inspire ação positiva e reflexão
- Seja poética mas acessível
- Tenha no máximo 50 palavras

Não repita reflexões - seja sempre original.`;

  const prompts = [
    "Crie uma reflexão sobre encontrar sentido nas pequenas coisas do dia",
    "Crie uma reflexão sobre a liberdade de escolha diante das circunstâncias",
    "Crie uma reflexão sobre esperança e resiliência",
    "Crie uma reflexão sobre conexão com algo maior que nós mesmos",
    "Crie uma reflexão sobre propósito e missão de vida",
    "Crie uma reflexão sobre gratidão e presente",
    "Crie uma reflexão sobre responsabilidade e autenticidade",
  ];

  const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
  
  const fullPrompt = `${randomPrompt}

Crie uma reflexão para hoje, ${new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}.`;

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

    return response.text || "Que este dia seja repleto de sentido e propósito.";
  } catch (error) {
    console.error("Error generating daily reflection:", error);
    throw new Error("Não foi possível gerar a reflexão diária.");
  }
}

export const handler = async () => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY not found in environment variables");
      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          error: "GEMINI_API_KEY não está configurada. Configure a variável de ambiente no Netlify." 
        }),
      };
    }

    const reflection = await generateDailyReflection();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reflection }),
    };
  } catch (error) {
    console.error("Error in daily-reflection function:", error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        error: error instanceof Error ? error.message : "Failed to generate daily reflection" 
      }),
    };
  }
};
