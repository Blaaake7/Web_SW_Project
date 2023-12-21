import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";


const { persistAtom } = recoilPersist({
  key: "loggedIn", // 고유한 key 값
  storage: localStorage,
})


export const loginState = atom({
  key: "loginState",
  default: false,
  effects_UNSTABLE: [persistAtom]
})