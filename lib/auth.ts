import {
  getAuth,
  signInWithRedirect,
  signOut,
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

import { app } from "./firebase";

type UserState = User | null;
// 認証するユーザーが保持するRecoilの状態
// ログイン済み : User, していないとき null

const userState = atom<UserState>({
  key: "userState",
  default: null,
  dangerouslyAllowMutability: true,
  //React の useRef のようにコンポーネントライフサイクルとは切り離して更新ができるようになる。
});

export const login = (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  return signInWithRedirect(auth, provider);
};

export const logout = (): Promise<void> => {
  const auth = getAuth(app);
  return signOut(auth);
};

export const useAuth = (): boolean => {
  //ユーザー認証を監視する。
  // 変更があった場合に、コールバク関数を実行する
  // 実行中かいないかを、isloadingで返す
  const [isLoading, setIsLoading] = useState(true);
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    const auth = getAuth(app);

    return onAuthStateChanged(auth, (user) => {
      // ログインやログアウト、サインインの時に処理を走らす。
      setUser(user);
      setIsLoading(false);
    });
  }, [setUser]);

  return isLoading;
};

export const useUser = (): UserState => {
  return useRecoilValue(userState);
};
