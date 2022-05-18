import React, { useRef, useState } from 'react';
import { useListaParticipante } from '../../state/hook/useListaParticipante';

function ListaParticipantes() {
  const participantes: string[] = useListaParticipante();

  return (

    <ul>

      {participantes?.map((participante) => <li key={participante}>{participante}</li>)}

    </ul>
  );
}

export default ListaParticipantes;
