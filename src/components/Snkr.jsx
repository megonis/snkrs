import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Swal from 'sweetalert2';

function Snkr(props) {
  const [open, setOpen] = useState(false);
  const [carrinho, setCarrinho] = useState([]);

  const verCarrinho = () => {
    setOpen(true);
  };

  
  
 
  const listaCompras = carrinho.map((item) => (
    <tr key={item.id}>
      <td>{item.modelo}</td>
      <td>{item.preco.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</td>
    </tr>
  ));

  return (
    <>
      <nav className="navbar bg-warning">
        <div className="container">
          <a className="navbar-brand" href="#">
            <div className="d-flex align-items-center">
              <img src="./logo.png" alt="Logo" width="50" height="50" className="d-inline-block align-text-top me-3" />
              <h2>Mega SNKRS. Pise com estilo!</h2>
            </div>
          </a>
          
          <button className="btn btn-primary position-relative" 
          onClick={verCarrinho}>
            Ver Carrinho <i className="bi bi-cart-check"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {props.carrinho.length}
              <span className="visually-hidden">Tênis Adicionados</span>
            </span>
          </button>
        </div>
      </nav>

      <Modal open={open} onClose={() => setOpen(false)} center>
  <h3 className="mt-4">Lista dos Tênis Adicionados ao Carrinho</h3>
  <table className="table table-danger table-hover mt-3">
    <thead>
      <tr>
        <th>Modelo do Tênis</th>
        <th>Preço R$</th>
      </tr>
    </thead>
    <tbody>
      {props.carrinho.map((item) => (
        <tr key={item.id}>
          <td>{item.modelo}</td>
          <td>{item.preco.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</td>
        </tr>
      ))}
    </tbody>
  </table>
</Modal>

    </>
  );
}

export default Snkr;
