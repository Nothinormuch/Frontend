import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are a helpful chef assistant.
A user will provide a list of ingredients.
Suggest a delicious recipe using some or all of those ingredients.
You can include a few common pantry staples (salt, oil, etc.).
Format the response strictly in Markdown
`;

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export default async function getRecipeFromGemini(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `${SYSTEM_PROMPT}\n\nI have ${ingredientsString}. Please suggest a recipe!`,
    });
    const text = response.text;
    if (!text) {
      throw new Error("No response from AI");
    }
    return text;
  } catch (err) {
    console.error("Chef Gemini Error:", err.message);
    return "I'm having a bit of trouble in the kitchen right now. Could you try again in a moment?";
  }
}
