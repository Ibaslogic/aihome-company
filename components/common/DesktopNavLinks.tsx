'use client';

import React from 'react';
// import Link from 'next/link';

import { cn } from '@/lib/utils';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { menus } from '@/constants/nav-items';
import Link from 'next/link';

export function DesktopNavLinks() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menus.map((menuItem) => (
          <React.Fragment key={menuItem.title}>
            {menuItem.submenu ? (
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-1 lg:px-3">
                  {menuItem.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-4 md:w-[650px] md:grid-cols-2">
                    {menuItem.subMenuItems?.map((subItem) => (
                      <ListItem
                        key={subItem.title}
                        title={subItem.title}
                        href={subItem.path}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem>
                <Link
                  href={menuItem.path}
                  className={navigationMenuTriggerStyle()}
                  // passHref
                >
                  {/* <NavigationMenuLink
                  href={menuItem.path}
                  className={navigationMenuTriggerStyle()}
                > */}
                  {menuItem.title}
                  {/* </NavigationMenuLink> */}
                </Link>
              </NavigationMenuItem>
            )}
          </React.Fragment>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, href, children, ...props }, ref) => {
  return (
    <li>
      <Link
        ref={ref}
        href={href as string}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">
          {title}
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
      {/* <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink> */}
    </li>
  );
});
ListItem.displayName = 'ListItem';
