
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export const getGeminiResponse = async (userPrompt: string) => {
  if (!API_KEY) {
    return "Error: API Key no configurada.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `Eres un experto consultor de hardware de Apple para iDistribute. 
        Tu objetivo es ayudar a los clientes a elegir el mejor producto según sus necesidades profesionales o personales. 
        Conoces a fondo los chips (M1, M2, M3, A17 Pro), pantallas, baterías y casos de uso. 
        Responde siempre en español, de forma elegante, minimalista y profesional. 
        No menciones precios exactos a menos que te pregunten específicamente por los del catálogo de iDistribute.`,
      },
    });

    return response.text || "Lo siento, no pude procesar tu solicitud.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Hubo un error al conectar con el asistente de IA.";
  }
};
