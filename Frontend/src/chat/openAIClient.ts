import OpenAI from "openai";
import { OPENAI_API_KEY } from "../consts";

export const openai = new OpenAI({
  apiKey: OPENAI_API_KEY.KEY,
  dangerouslyAllowBrowser: true,
});
