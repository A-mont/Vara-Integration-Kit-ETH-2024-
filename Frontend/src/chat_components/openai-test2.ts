import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function openai2() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "Necesito aprender lo necesario de inglés para leer documentación general web 3 y código de rust. Hazme preguntas, una por una, y dame 4 opciones de respuesta. Si respondo correctamente, ve subiendo el nivel gradualmente en la siguiente pregunta hasta que me equivoque y explícame en qué me equivoqué e invítame a estudiar. En seguida prepara una pregunta similar para ver si ya puedo responder",
      },
    ],

    model: "gpt-4-turbo-preview",
  });

  console.log(completion.choices[0]);
}
openai2();
