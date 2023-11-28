import React, { useState, useEffect } from "react";
import { dados } from "../../public/tenis";
import CardTenis from "./CardTenis";

function Novidades(props) {
  const [tenis, setTenis] = useState([]);

  useEffect(() => {
    setTenis(dados);
  }, []);

  const addCarrinho = (tenisAdicionado) => {
    props.adicionaAoCarrinho(tenisAdicionado);
  };

  const listaTenis = tenis.map((tenis) => (
    <CardTenis key={tenis.id} tenis={tenis} addCarrinho={addCarrinho} />
  ));

  return (
    <div className="container mt-3">
      <h3>Novidades em Tênis</h3>
      <div className="row">
        {listaTenis}
      </div>
    </div>
  );
}

export default Novidades;
