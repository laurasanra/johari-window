import { useState } from "react/cjs/react.development";

const Window = ({ results }) => {
  const [area, setArea] = useState("Área Libre");

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setArea("Área Libre");
          }}
        >
          Área Libre
        </button>
        <button
          onClick={() => {
            setArea("Área Ciega");
          }}
        >
          Área Ciega
        </button>
        <button
          onClick={() => {
            setArea("Área Oculta");
          }}
        >
          Área Oculta
        </button>
        <button
          onClick={() => {
            setArea("Área Desconocida");
          }}
        >
          Área Desconocida
        </button>
      </div>
      <div>{area}</div>
    </div>
  );
};

export default Window;
