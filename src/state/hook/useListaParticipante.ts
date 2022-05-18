import { useRecoilValue } from 'recoil';
import { listaParticipantesState } from '../atom';

export const useListaParticipante = () => useRecoilValue(listaParticipantesState);
