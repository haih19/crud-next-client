'use client';

import { Badge } from '@/components/ui/badge';
import { useActiveRoute } from '@/hooks';
import { Home, LineChartIcon, Package2, PackageIcon, ShoppingCart, Users } from 'lucide-react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const MENU = [
  {
    label: 'Dashboard',
    icon: <Home className="h-4 w-4" />,
    href: '/dashboard',
  },
  {
    label: 'Orders',
    icon: <ShoppingCart className="h-4 w-4" />,
    href: '/orders',
  },
  {
    label: 'Products',
    icon: <PackageIcon className="h-4 w-4" />,
    href: '/products',
  },
  {
    label: 'Customers',
    icon: <Users className="h-4 w-4" />,
    href: '/users',
  },
  {
    label: 'Analytics',
    icon: <LineChartIcon className="h-4 w-4" />,
    href: '/analytics',
  },
];

export const SideBar = () => {
  const { isActiveRoute } = useActiveRoute();
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Acme Inc</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {MENU.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={twMerge(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                  isActiveRoute(item?.href) && 'bg-muted'
                )}
              >
                {item.icon}
                {item.label}
                {item.label === 'Orders' && (
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
