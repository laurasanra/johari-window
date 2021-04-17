import "./styles/index.scss";
import DropdownMenu from "./components/DropdownMenu";
import Window from "./components/Window";
import PeceptionForm from "./components/PerceptionForm";
import { useState } from "react/cjs/react.development";
import perceptions from "./utils/perceptions";

function App() {
  const [results, setResults] = useState(perceptions);

  console.log(results);

  return (
    <div className="App">
      <header className="App-header">
        <h1>La ventana de Johari</h1>
      </header>
      <main>
        <DropdownMenu title="Cómo me percibo yo">
          <PeceptionForm type="own" />
        </DropdownMenu>
        <DropdownMenu title="Cómo me perciben los demás">
          <PeceptionForm type="others" />
        </DropdownMenu>
        <DropdownMenu title="Resultados">
          <Window results={results} />
        </DropdownMenu>
      </main>
    </div>
  );
}

export default App;
