'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import Container from './Container';
import Logo from './Logo';
import { DesktopNavLinks } from './DesktopNavLinks';

const Header = () => {
  return (
    <header className="border-b border-gray-200 text-black/70">
      <nav>
        <Container className="relative z-50 flex justify-between items-center h-16">
          <Logo />
          <div className="hidden md:block">
            <DesktopNavLinks />
          </div>
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex h-11 animate-shimmer items-center justify-center rounded-md border border-blue-950/[0.96]  bg-[linear-gradient(110deg,#202d5b,45%,#2f4e78,55%,#202d5b)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none"
            >
              Contact
            </Link>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
