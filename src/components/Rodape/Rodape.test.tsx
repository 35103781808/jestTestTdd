import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { useListaParticipante } from '../../state/hook/useListaParticipante';
import Rodape from './index';

jest.mock('../../state/hook/useListaParticipante', () => ({ useListaParticipante: jest.fn() }));
const mockNavegacao = jest.fn();

jest.mock('react-router-dom', () => ({ useNavigate: () => mockNavegacao }));

describe('Quando não existe participantes suficientes', () => {
  beforeEach(() => { (useListaParticipante as jest.Mock).mockReturnValue([]); });
  test('o botão deve ser disabled', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>,
    );

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });
});

describe('Quando existe participantes suficientes', () => {
  const participantes = ['Ana', 'Flávia', 'Juliana'];
  beforeEach(() => { (useListaParticipante as jest.Mock).mockReturnValue(participantes); });
  test('o botão deve ser habilitado', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>,
    );

    const button = screen.getByRole('button');

    expect(button).not.toBeDisabled();
  });

  test('o jogo foi iniciado', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>,
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(mockNavegacao).toHaveBeenCalledTimes(1);
    expect(mockNavegacao).toHaveBeenCalledWith('/sorteio');
  });
});
