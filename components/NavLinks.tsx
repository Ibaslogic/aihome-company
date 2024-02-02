'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NavItem } from '@/types';
import { menus } from '@/constants/nav-items';
import { ChevronDown } from 'lucide-react';

const NavLinks = () => {
  return (
    <div className="hidden md:flex space-x-2  md:px-6">
      {menus.map((item, idx) => {
        return <MenuItem key={idx} item={item} />;
      })}
    </div>
  );
};

export default NavLinks;

const MenuItem = ({ item }: { item: NavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="relative">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${
              pathname.includes(item.path) ? 'bg-zinc-100' : ''
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {/* {item.icon} */}
              <span className="font-semibold text-xl  flex">
                {item.title}
              </span>
            </div>

            <div
              className={`${subMenuOpen ? 'rotate-180' : ''} flex`}
            >
              <ChevronDown width="24" height="24" />
            </div>
          </button>

          {subMenuOpen && (
            <div className="absolute my-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname ? 'font-bold' : ''
                    }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${
            item.path === pathname ? 'bg-zinc-100' : ''
          }`}
        >
          {/* {item.icon} */}
          <span className="font-semibold text-xl flex">
            {item.title}
          </span>
        </Link>
      )}
    </div>
  );
};
