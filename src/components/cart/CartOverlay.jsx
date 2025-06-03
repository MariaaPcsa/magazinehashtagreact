// Importa o hook useState do React para controlar o estado do componente
import { useState } from 'react';

// Define o componente funcional CartOverlay
const CartOverlay = () => {
  // Define o estado isCardOpen com valor inicial true
  // Quando false, o carrinho será "fechado" (oculto ou deslizado para fora da tela)
  const [isCardOpen, setCardOpen] = useState(true);

  return (
    // Div que cobre a tela inteira com posição fixa no topo/esquerda
    // Aplica transição suave ao mover com translate-x
    <div
      className={`h-screen w-screen fixed top-0 left-0 flex z-50 
        ease-in-out duration-200 ${
        isCardOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Camada de fundo para fechar o card ao clicar */}
      <div
        id="outside-of-card"
        onClick={() => setCardOpen(false)} // Ao clicar, fecha o card
        className="w-3/4 bg-slate-950 opacity-50" // Ocupa 75% da largura com fundo escuro e opaco
      ></div>

       {/* Seção lateral que representa o carrinho */}
      <section
        className="w-1/4 bg-slate-950 min-w-96 border border-slate-400 p-5 flex flex-col justify-between text-white"
      >
        {/* Conteúdo do carrinho aqui */}
      </section>
    </div>
  );
};

export default CartOverlay;
