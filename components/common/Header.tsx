'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import Container from './Container';
import Logo from './Logo';
import NavLinks from '../NavLinks';
import { DesktopNavLinks } from './DesktopNavLinks';

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <nav>
        <Container className="relative z-50 flex justify-between items-center h-14">
          <Logo />
          <div className="hidden md:block">
            {/* <NavLinks /> */}
            <DesktopNavLinks />
          </div>
          <div className="hidden md:block">
            <Link href="#">Partner with us</Link>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
