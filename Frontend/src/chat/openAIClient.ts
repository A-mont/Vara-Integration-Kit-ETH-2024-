import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.AIAPIKEY,
  dangerouslyAllowBrowser: true,
});
