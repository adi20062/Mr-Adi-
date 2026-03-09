import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const getChatSession = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are a friendly, enthusiastic employee at Cabell's Ice Cream in Shelbyville, IN. 
      Your tone is warm, family-friendly, and helpful.
      
      Key Info about the shop:
      - Location: 1658 IN-44, Shelbyville, IN.
      - Rating: 4.7 stars based on customer reviews.
      - We are known for our Soft Serve, Banana Splits, and thick Milkshakes.
      - Values: We prioritize community and Christian family values.
      - Seasonality: We close for winter and reopen in February.
      
      Your goal is to help customers choose an ice cream flavor, answer questions about our hours or location, and just be pleasant.
      Keep answers relatively short (under 3 sentences) unless asked for a long story.
      If asked about ingredients you don't know, suggest they call us at (555) 123-4567 to be safe regarding allergies.`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I got a brain freeze! Can you say that again?";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm having trouble connecting to the shop right now. Please try again later!";
  }
};