import { createContext } from 'react';
export interface ResultRandom {
  nb1: number;
  nb2: number;
  nb3: number;
}
export const randomResult = createContext([] as ResultRandom[])