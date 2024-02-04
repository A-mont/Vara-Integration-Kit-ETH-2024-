import { openai } from "./openAIClient";

async function chat(userInput: string) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "Como IA especializada en Auxiliar al aprendizaje, el objetivo es explicar el concepto que te de el usuario de manera sencilla y clara en inglés y español",
      },
      {
        role: "user",
        content: userInput,
      },
    ],

    model: "gpt-4-turbo-preview",
  });
  console.log(completion.choices[0]);
  const text = completion.choices[0].message.content;

  return text;
}
export { chat };
