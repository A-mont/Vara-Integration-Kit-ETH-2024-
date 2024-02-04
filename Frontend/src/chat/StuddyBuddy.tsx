import React, { useState, useEffect } from "react";
import { openai } from "./openAIClient";

type Choice = {
  index: number;
  message: { role: string; content: string };
  logprobs?: null;
  finish_reason: string;
};

type Completion = {
  choices?: Choice[];
};

function StudyBuddy(): JSX.Element {
  const [completion, setCompletion] = useState<Completion | null>(null);

  useEffect(() => {
    const fetchCompletion = async () => {
      try {
        const completionResult = await openai.chat.completions.create({
          messages: [
            {
              role: "system",
              content:
                "Necesito aprender lo necesario de inglés para leer documentación general web 3 y código de rust. Hazme preguntas, una por una, y dame 4 opciones de respuesta. Si respondo correctamente, ve subiendo el nivel gradualmente en la siguiente pregunta hasta que me equivoque y explícame en qué me equivoqué e invítame a estudiar. En seguida prepara una pregunta similar para ver si ya puedo responder",
            },
          ],
          model: "gpt-4-turbo-preview",
        });

        setCompletion(completionResult as any);
      } catch (error) {
        console.error("Error fetching completion:", error);
        // Handle the error appropriately, e.g., display an error message to the user
      }
    };

    fetchCompletion();
  }, []);

  return (
    <div>
      {completion && completion.choices && (
        <>
          {completion.choices[0] && (
            <h1>{completion.choices[0].message.content}</h1>
          )}
          <ul>
            {completion.choices.map((choice) => (
              <li key={choice.message.content}>{choice.message.content}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export { StudyBuddy }; // Use named export instead of default
