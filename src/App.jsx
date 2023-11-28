import { useState } from "react";
import Novidades from "./components/Novidades";
import Snkr from "./components/Snkr";
import Swal from 'sweetalert2';

function App() {
  const [carrinho, setCarrinho] = useState([]);

  const adicionaAoCarrinho = (tenis) => {
    console.log("Carrinho atualizado:", [...carrinho, tenis]);
    const carrinho2 = [...carrinho, tenis];
    setCarrinho(carrinho2);
    console.log("Carrinho atualizado:", carrinho2);
    console.log("Carrinho atualizado:", carrinho);
  
    Swal.fire({
      title: 'Adicionado ao Carrinho',
      text: tenis.modelo,
      icon: 'success',
      confirmButtonText: 'Ok',
    });
  }

  return (
    <>
      <Snkr carrinho={carrinho}/>
      <Novidades adicionaAoCarrinho={adicionaAoCarrinho} />
    </>
  );
}

export default App;
