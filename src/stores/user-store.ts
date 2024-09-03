import { User } from '@/http';
import { createStore } from 'zustand/vanilla';
import { devtools, persist } from 'zustand/middleware';

export type UserState = {
  users?: User[];
};

export type UserActions = {
  setUsers: (users: User[]) => void;
};

export type UserStore = UserState & UserActions;

export const initUserStore = (): UserState => {
  return {
    users: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        created_at: '2022-01-01',
        updated_at: '2022-01-01',
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        created_at: '2022-01-02',
        updated_at: '2022-01-02',
      },
    ],
  };
};

export const defaultInitUserState: UserState = {
  users: undefined,
};

export const createUserStore = (initState: UserState) => {
  return createStore<UserStore>()(
    devtools(
      persist(
        (set, get) => ({
          // fetchUsers: async () => {
          //   try {
          //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
          //     const data = await response.json();
          //     set({ users: data });
          //   } catch (error) {
          //     console.error('Error fetching users:', error);
          //   }
          // },
          ...initState,
          setUsers: (users: User[]) => set({ users: users }),
        }),
        {
          name: 'UserStore',
        }
      )
    )
  );
};
