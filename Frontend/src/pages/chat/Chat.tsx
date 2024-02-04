import { useState } from "react";
import { chat } from "../../chat/chat";

function Chat() {
  const [input, setInput] = useState(""); // Estado para almacenar el input del usuario
  const [res, setRes] = useState(""); // Estado para almacenar la respuesta del chat

  const handleChat = async () => {
    const completion = await chat(input); // Pasa el input del usuario a la función chat
    if (completion) {
      setRes(completion);
    } else {
      setRes("ChatGPT fue a tirar la basura, vuelve en 5 minutos.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe tu mensaje aquí"
        className="form-control mb-2"
      />{" "}
      {/* Cuadro de input para el usuario */}
      <button type="button" onClick={handleChat} className="btn bg-secondary">
        Iniciar Chat
      </button>{" "}
      {/* Botón para iniciar el chat */}
      {res && <div className="respuesta">{res}</div>}
    </div>
  );
}

export { Chat };
