'use client';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  CircleUser,
  Home,
  LineChartIcon,
  Menu,
  Package2,
  PackageIcon,
  ShoppingCart,
  Users,
} from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useActiveRoute } from '@/hooks/useActiveRoute';
import { twMerge } from 'tailwind-merge';

const MENU = [
  {
    label: <span className="sr-only">Acme Inc</span>,
    icon: <Package2 className="h-6 w-6" />,
    href: '/',
    className: 'flex items-center gap-2 text-lg font-semibold',
  },
  {
    label: 'Dashboard',
    icon: <Home className="h-4 w-4" />,
    href: '/',
  },
  {
    label: (
      <>
        Orders
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          6
        </Badge>
      </>
    ),
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

export const Header = () => {
  const { isActiveRoute } = useActiveRoute();
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            {MENU.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={twMerge(
                  isActiveRoute(item?.href) && !item?.className && 'bg-muted',
                  item?.className
                    ? item.className
                    : 'mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground'
                )}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full justify-end md:justify-between">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#">Products</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Edit Product</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
