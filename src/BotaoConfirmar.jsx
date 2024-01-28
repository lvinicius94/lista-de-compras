import React from 'react';

const BotaoConfirmar = () => {
  const handleClick = () => {
    const confirmacao = window.confirm("Tem certeza que deseja realizar esta ação?");

    if (confirmacao) {
      // Coloque aqui a lógica para o que deve acontecer se o usuário confirmar
      console.log("Ação confirmada!");
    } else {
      // Coloque aqui a lógica para o que deve acontecer se o usuário cancelar
      console.log("Ação cancelada!");
    }
  };

  return (
    <button onClick={handleClick}>Clique Aqui</button>
  );
};

export default BotaoConfirmar;
