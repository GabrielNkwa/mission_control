'use client';

import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Navbar() {
  const menuItems = [
    {
      title: 'Mission Planning',
      href: '/missionplanning',
      description:
        'Monitor assets and personnel in real-time with live location updates and status information.',
    },
    {
      title: 'Real-Time Tracking',
      href: '/realtimetracking',
      description:
        'Monitor assets and personnel in real-time with live location updates and status information.',
    },
    {
      title: 'Secure Communication',
      href: '/securecommunication',
      description:
        'End-to-end encrypted communication channels and secure data transmission protocols.',
    },
    {
      title: 'Geofencing',
      href: '/restrictedzones',
      description:
        'Create and manage virtual perimeters with automated alerts for restricted zone violations.',
    },
    {
      title: 'Asset Monitoring',
      href: '/assetsandpersonnel',
      description:
        'Comprehensive tracking and management of assets and personnel across locations.',
    },
    {
      title: 'Historical Data',
      href: '/dataandreporting',
      description:
        'Access detailed historical records and generate comprehensive reports and analytics.',
    },
    {
      title: 'Threat Detection',
      href: '/threatdetection',
      description:
        'Advanced threat detection systems with automated response protocols and alerts.',
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white">
      <div className="flex h-16 items-center px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-2 md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 pt-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group grid gap-1 p-2 hover:bg-accent rounded-lg"
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    {item.title}
                  </div>
                  <div className="line-clamp-2 text-sm text-muted-foreground">
                    {item.description}
                  </div>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Monitoring</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {menuItems.slice(0, 4).map((item) => (
                    <NavigationMenuLink asChild key={item.href}>
                      <Link
                        to={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          {item.title}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {item.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Analytics</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {menuItems.slice(4).map((item) => (
                    <NavigationMenuLink asChild key={item.href}>
                      <Link
                        to={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          {item.title}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {item.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
