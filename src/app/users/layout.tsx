import { UserStoreProvider } from '@/providers/user-store-provider';
import { ReactNode } from 'react';

export default function Layout({ children }: { readonly children: ReactNode }) {
  return (
    <UserStoreProvider>
      <section>{children}</section>
    </UserStoreProvider>
  );
}
