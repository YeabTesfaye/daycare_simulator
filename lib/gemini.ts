import { GoogleGenAI } from "@google/genai";

export const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY as string,
});

export async function generateWithGemini(prompt: string): Promise<string> {
  const response = await genAI.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      temperature: 0.3,
      maxOutputTokens: 8192,  // ← increased from 2400
      responseMimeType: "application/json",
    },
  });
  return response.text ?? "";
}