import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { listaParticipantesState, erroState } from '../atom';

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaParticipantesState);
  const lista = useRecoilValue(listaParticipantesState);
  const setErro = useSetRecoilState(erroState);

  return (nomeParticipante:string) => {
    if (lista.includes(nomeParticipante)) {
      setErro('Nomes Duplicados não são permitidos');
      setTimeout(() => { setErro(''); }, 5000);
      return;
    }
    return setLista((listaAtual) => [...listaAtual, nomeParticipante]);
  };
};
