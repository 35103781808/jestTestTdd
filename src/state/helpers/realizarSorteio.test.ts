import React from 'react';
import { realizarSorteio } from './realizarSorteio';

jest.mock('../../state/hook/useListaParticipante', () => ({ useListaParticipante: jest.fn() }));

describe('Dado um sorteio no amigo secreto', () => {
  test('Cada participante não sorteie o proprio nome', () => {
    const participantes = ['Ana', 'Catarina', 'Renato', 'Juliana', 'José', 'Nicolas'];
    const sorteio = realizarSorteio(participantes);

    participantes.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
