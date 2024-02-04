import OpenAI from "openai";
import { AI_API_KEY } from "../consts";

export const openai = new OpenAI({
  apiKey: AI_API_KEY.KEY,
  dangerouslyAllowBrowser: true,
});
