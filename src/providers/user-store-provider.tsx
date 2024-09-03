'use client';

import { type UserStore, createUserStore, initUserStore } from '@/stores/user-store';
import { type ReactNode, createContext, useContext, useRef } from 'react';
import { useStore } from 'zustand';

export type UserStoreApi = ReturnType<typeof createUserStore>;

export const UserStoreContext = createContext<UserStoreApi>({} as UserStoreApi);

export type UserStoreProviderProps = {
  children: ReactNode;
};

export const UserStoreProvider: React.FC<UserStoreProviderProps> = ({
  children,
}: UserStoreProviderProps) => {
  const storeRef = useRef<UserStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createUserStore(initUserStore());
  }

  return <UserStoreContext.Provider value={storeRef.current}>{children}</UserStoreContext.Provider>;
};

export const useUserStore = <T,>(selector: (store: UserStore) => T): T => {
  const userStoreContext = useContext(UserStoreContext);

  if (!userStoreContext) {
    throw new Error('useUserStore must be used within a UserStoreProvider');
  }

  return useStore(userStoreContext, selector);
};
