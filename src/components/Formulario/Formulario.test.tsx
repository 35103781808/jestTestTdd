import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Formulario from '../Formulario';

describe('Descrevendo o comportamento do Formulário', () => {
  test('quando o input estiver vazio os participantes não podem ser adicionados', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>,
    );

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test('adicionar um participante casa haja um nome preenchido', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>,
    );

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const button = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'Ana Carolina' } });
    fireEvent.click(button);

    expect(input).toHaveFocus();
    expect(input).toHaveValue('');
  });

  test('nomes duplicados não podem ser adicionados', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>,
    );

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const button = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'Ana Carolina' } });
    fireEvent.click(button);
    fireEvent.change(input, { target: { value: 'Ana Carolina' } });
    fireEvent.click(button);

    const mensagemErro = screen.getByRole('alert');

    expect(mensagemErro.textContent).toBe('Nomes Duplicados não são permitidos');
  });

  test('a mensagem de erro deve sumir após os timers', () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>,
    );

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const button = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'Ana Carolina' } });
    fireEvent.click(button);
    fireEvent.change(input, { target: { value: 'Ana Carolina' } });
    fireEvent.click(button);

    let mensagemErro = screen.queryByRole('alert');

    expect(mensagemErro).toBeInTheDocument();

    act(() => {
      /* fire events that update state */
      jest.runAllTimers();
    });
    // espera N segundos

    mensagemErro = screen.queryByRole('alert');

    expect(mensagemErro).toBeNull();
  });
});
