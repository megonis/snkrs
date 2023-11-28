import React from 'react';
import Swal from 'sweetalert2';

function CardTenis(props) {
  const mostrarDetalhes = (modelo, marca, preco) => {
    Swal.fire({
      title: modelo,
      text: marca,
      text: preco,
    });
  
  };

  return (
    <div className="col-sm-4 mb-3 mb-sm-0">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.tenis.foto} className="img-fluid rounded-start" alt="Imagem do Tênis" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.tenis.modelo}</h5>
              <p className="card-text">
                <small className="text-body-secondary">marca: {props.tenis.marca}</small>
              </p>
              <p className="card-text">Em até 10x de: R${props.tenis.preco / 10}</p>
              <h5 className="card-text">R${props.tenis.preco.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</h5>

              <button className="btn btn-sm btn-danger" onClick={
                () => mostrarDetalhes(props.tenis.detalhes)
              }>
                
                Ver Detalhes <i className="bi bi-info-circle"></i>
              </button>

              <button className="btn btn-sm btn-primary float-end" onClick={()=> props.addCarrinho(props.tenis)}>
                Comprar <i className="bi bi-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTenis;
