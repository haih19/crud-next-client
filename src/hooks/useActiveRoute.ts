import { useCallback } from 'react';
import { usePathname } from 'next/navigation';

export const useActiveRoute = () => {
  const pathname = usePathname();

  const isActiveRoute = useCallback(
    (href?: string) => {
      if (!href) return false;
      return pathname === href;
    },
    [pathname]
  );

  return { isActiveRoute };
};
