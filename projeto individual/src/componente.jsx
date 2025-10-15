import { useState } from "react";

function Componente() {
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [valores, setValores] = useState([]);

  const handleAdicionar = () => {
    if (descricao !== "" && quantidade !== "") {
      // adiciona um objeto com descrição e quantidade
      const novoItem = { descricao, quantidade: Number(quantidade) };
      setValores([...valores, novoItem]);
      setDescricao("");
      setQuantidade(0);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Adicionar Item</h2>

      <label>
        Descrição:
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          style={{ marginLeft: "8px", padding: "5px" }}
        />
      </label>

      <br /><br />

      <label>
        Valor:
        <input
          type="number"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          style={{ marginLeft: "8px", padding: "5px" }}
        />
      </label>

      <button
        onClick={handleAdicionar}
        style={{
          marginLeft: "10px",
          padding: "6px 12px",
          cursor: "pointer",
        }}
      >
        Adicionar
      </button>

      <ul style={{ marginTop: "20px" }}>
        {valores.map((item, i) => (
          <li key={i}>
            <strong>Descrição:</strong> {item.descricao} — <strong>Valor:</strong> {item.quantidade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Componente;
