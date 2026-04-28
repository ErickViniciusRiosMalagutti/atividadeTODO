import React from 'react';

function Botao(props) {
  return (
    <button 
      type={props.type || "button"} 
      onClick={props.onClick} 
      style={props.estiloCustomizado}
    >
      {props.children}
    </button>
  );
}

export default Botao;