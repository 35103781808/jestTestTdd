import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useListaParticipante } from '../../state/hook/useListaParticipante';

function Rodape() {
  const participantes: string[] = useListaParticipante();

  const navegarPara = useNavigate();

  const iniciar = () => {
    navegarPara('/sorteio');
  };
  return (

    <footer>
      <button type="button" disabled={participantes.length < 3} onClick={iniciar}>Iniciar Brincadeira</button>
    </footer>
  );
}

export default Rodape;
