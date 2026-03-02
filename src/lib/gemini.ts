import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client
// The API key is injected via process.env.GEMINI_API_KEY
export const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const MODEL_NAME = "gemini-2.5-flash-latest";
