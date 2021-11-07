import "./App.css";
import NavB from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  const usuario = "Ivan";
  const greeting = "Bienvenido a la Tienda";
  const handleClick = (valor1, valor2) => {
    alert(valor1 + valor2);
  };
  return (
    <div className="App">
      <NavB />
      <ItemListContainer
        greeting={greeting}
        usuario={usuario}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
