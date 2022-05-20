import React, { useState } from 'react';
import { useListaParticipante } from '../../state/hook/useListaParticipante';
import { useResultadoSorteio } from '../../state/hook/useResultadoSorteio';

function Sorteio() {
  const [participanteDaVez, setParticipantesDaVez] = useState('');
  const [amigoSecreto, setAmigoSecreto] = useState('');
  const participantes = useListaParticipante();

  const resultado = useResultadoSorteio();

  const sortear = (e:any) => {
    e.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  };

  return (
    <section>
      <form onSubmit={sortear}>
        <select
          required
          name="participanteDavez"
          id="participanteDavez"
          value={participanteDaVez}
          placeholder="Selecione o seu nome"
          onChange={(e) => { setParticipantesDaVez(e.target.value); }}
        >
          {participantes.map((participante) => (
            <option key={participante} value={participante}>
              {participante}
            </option>
          ))}
        </select>
        <button type="submit">Sortear</button>
      </form>
      {amigoSecreto && <p>{amigoSecreto}</p>}
    </section>

  );
}

export default Sorteio;
