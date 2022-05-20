import { render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { useListaParticipante } from '../../state/hook/useListaParticipante';
import ListaParticipantes from './index';

jest.mock('../../state/hook/useListaParticipante', () => ({ useListaParticipante: jest.fn() }));

describe('Uma lista Vazia de participantes', () => {
  beforeEach(() => { (useListaParticipante as jest.Mock).mockReturnValue([]); });
  test('deve ser renderizada sem elementos', () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>,
    );

    const itens = screen.queryAllByRole('listitem');

    expect(itens).toHaveLength(0);
  });
});

describe('Uma lista com participantes', () => {
  const participantes = ['Gabriela', 'José'];
  beforeEach(() => { (useListaParticipante as jest.Mock).mockReturnValue(participantes); });

  test('uma lista preenchida de participantes', () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>,
    );

    const itens = screen.queryAllByRole('listitem');

    expect(itens).toHaveLength(participantes.length);
  });
});
