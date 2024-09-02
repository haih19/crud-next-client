import { HomeIcon, ShoppingCartIcon, UserIcon } from '@/components/app/icon';
import { Badge } from '@/components/ui/badge';
import { LineChartIcon, PackageIcon } from 'lucide-react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const MENU = [
  {
    label: 'Dashboard',
    icon: <HomeIcon className="h-4 w-4" />,
    href: '/',
  },
  {
    label: 'Orders',
    icon: <ShoppingCartIcon className="h-4 w-4" />,
    href: '/orders',
  },
  {
    label: 'Products',
    icon: <PackageIcon className="h-4 w-4" />,
    href: '/products',
  },
  {
    label: 'Customers',
    icon: <UserIcon className="h-4 w-4" />,
    href: '/customers',
  },
  {
    label: 'Analytics',
    icon: <LineChartIcon className="h-4 w-4" />,
    href: '/analytics',
  },
];

export const SideBarLink = () => {
  return (
    <>
      {MENU.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={twMerge(
            'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
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
    </>
  );
};
