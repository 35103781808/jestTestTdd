import { render } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Configuracao from './index';

const mockNavegacao = jest.fn();

jest.mock('react-router-dom', () => ({ useNavigate: () => mockNavegacao }));

describe('a página de configuração', () => {
  test('Deve ser renderizada corretamente', () => {
    const { container } = render(
      <RecoilRoot>
        <Configuracao />
      </RecoilRoot>,
    );

    expect(container).toMatchSnapshot();
  });
});
