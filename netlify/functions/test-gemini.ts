import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

async function generateTestMessage(): Promise<string> {
  const systemPrompt = `Você é um mentor espiritual compassivo e sábio, especializado em Logoterapia de Viktor Frankl e cuidado espiritual na saúde mental.`;

  const userContext = `Esta pessoa está começando sua jornada de autoconhecimento espiritual. Crie uma mensagem de boas-vindas calorosa (150-250 palavras).`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-001",
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.8,
        topP: 0.9,
      },
      contents: userContext,
    });

    return response.text || "API funcionando!";
  } catch (error) {
    console.error("Error in test:", error);
    throw error;
  }
}

export const handler = async () => {
  try {
    console.log("Testing Gemini API...");
    const message = await generateTestMessage();
    console.log("Gemini API test successful!");
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        success: true, 
        message,
        timestamp: new Date().toISOString()
      }),
    };
  } catch (error) {
    console.error("Gemini API test failed:", error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : "Failed to test Gemini API",
        timestamp: new Date().toISOString()
      }),
    };
  }
};
