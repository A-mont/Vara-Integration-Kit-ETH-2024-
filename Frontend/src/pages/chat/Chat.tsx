import { useState } from "react";
import { chat } from "../../chat/chat";

function Chat() {
  const [res, setRes] = useState(""); // Estado para almacenar la respuesta del chat

  const handleChat = async () => {
    const completion = Promise.resolve(chat()).then((x) => {
      if (x) {
        setRes(x);
      } else {
        setRes("ChatGPT fue a tirar la basura, vuelve en 5 minutos.");
      }
    }); // Llama a la función async y espera su ejecución// Almacena la respuesta en el estado
  };

  return (
    <div>
      <button type="button" onClick={handleChat} className="btn bg-secondary">
        Iniciar Chat
      </button>{" "}
      {/* Botón para iniciar el chat */}
      {res && <div className="respuesta">{res}</div>}
    </div>
  );
}

export { Chat };
