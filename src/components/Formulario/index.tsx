import React, { useRef, useState } from 'react';
import Sorteador from '../../imagens/logo.png';
import Participante from '../../imagens/participante.png';
import { useAdicionarParticipante } from '../../state/hook/useAdicionarParticipante';
import { useMensagemDeErro } from '../../state/hook/useMensagemDeErro';
import { Container, ContainerImages, ContainerImage1, ContainerPartImg,
  ContainerStart, Title } from './styles';

function Formulario() {
  const [nome, setNome] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionarParticipante();
  const mensagemErro = useMensagemDeErro();

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    setNome('');
    adicionarNaLista(nome);
    inputRef.current?.focus();
  };

  return (

    <Container>

      <ContainerImages>

        <ContainerImage1>
          <img alt="sorteador" src={Sorteador} />
        </ContainerImage1>
        <ContainerPartImg><img alt="participante.png" src={Participante} /></ContainerPartImg>

      </ContainerImages>

      <ContainerStart>

        <Title> Vamos Começar</Title>

        <form onSubmit={adicionarParticipante}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Insira os nomes dos participantes"
            value={nome}
            onChange={(e) => { setNome(e.target.value); }}
          />
          <button type="submit" disabled={!nome}>Adicionar</button>
          {mensagemErro && <p role="alert">{mensagemErro}</p>}
        </form>

      </ContainerStart>

    </Container>
  );
}

export default Formulario;
