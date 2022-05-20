import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { useListaParticipante } from '../../state/hook/useListaParticipante';
import Sorteio from './index';

jest.mock('../../state/hook/useListaParticipante', () => ({ useListaParticipante: jest.fn() }));

describe('a página de sorteio', () => {
  const participantes = ['Ana', 'Catarina', 'Renato'];
  const resultados = new Map([['Ana', 'Catarina'], ['Catarina', 'Renato']]);
  beforeEach(() => { (useListaParticipante as jest.Mock).mockReturnValue(participantes); });
  test('Todos os participantes devem exibir o seu amigo secreto', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>,
    );
    const opcao = screen.queryAllByRole('option');
    expect(opcao).toHaveLength(participantes.length);
  });

  /*  test('O amigo secreto é exibido qdo solicitado', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>,
    );
    const select = screen.getByPlaceholderText('Selecione o seu nome');

    fireEvent.change(select, { target: { value: participantes[0] } });

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const amigoSecreto = screen.getByRole('alert');
    expect(amigoSecreto).toBeInTheDocument();
  }); */
});
