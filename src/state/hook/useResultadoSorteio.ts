import { useRecoilValue, useSetRecoilState } from 'recoil';
import { resultadoAmigoSecreto } from '../atom';
import { realizarSorteio } from '../helpers/realizarSorteio';
import { useListaParticipante } from './useListaParticipante';

export const useResultadoSorteio = () => useRecoilValue(resultadoAmigoSecreto);
