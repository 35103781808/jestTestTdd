import React from 'react';
import { useListaParticipante } from '../../state/hook/useListaParticipante';

function Sorteio() {
  const participantes = useListaParticipante();
  return (
    <section>
      <form>
        <select name="participanteDavez" id="participanteDavez">
          {participantes.map((participante) => (
            <option key={participante} value={participante}>
              {participante}
            </option>
          ))}

        </select>
      </form>
    </section>

  );
}

export default Sorteio;
