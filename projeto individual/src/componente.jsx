import { useState } from "react";

function Componente() {
  const [quantidade, setQuantidade] = useState(0);
  const [valores, setValores] = useState([]);

  const handleAdicionar = () => {
    if (quantidade !== "") {
      setValores([...valores, Number(quantidade)]);
      setQuantidade(0);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <label>
            Descrição:
        </label>
        <input 
        type="text"/>
        

      <label>
        Valor:
        <input
          type="number"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        
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

      <ul>
        {valores.map((v, i) => (
          <li key={i}>Valor adicionado: {v}</li>
        ))}
      </ul>
    </div>
  );
}

export default Componente;
