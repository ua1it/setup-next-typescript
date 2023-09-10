import { atom, useRecoilState } from 'recoil';


export const movieIdState = atom({
  key: 'movieIdState',
  default: "0",
});