"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";
import clsx from "clsx";

const Navlink = ({ title }) => (
  <LinkScroll
    className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-5 max-lg:h5"
    to="section1"
  >
    {title}
  </LinkScroll>
);

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10">
      <div className="container flex h-14 items-center max-lg:px-5">
        <Link className="lg:hidden flex-1 cursor-pointer z-2" href="/">
          <Image
            src="/images/xora.svg"
            width={115}
            height={55}
            alt="Xora Logo"
          />
        </Link>
        <div className={clsx('w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0', isOpen ? 'max-lg:opacity-100': 'max-lg:pointer-events-none')}>
          <div className="max-xl:flex max-lg:flex-col max-lg:relative max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <Navlink title="features" />
                  <div className="dot" />
                  <Navlink title="pricing" />
                </li>
                <li className="nav-logo">
                  <LinkScroll className={clsx('max-lg:hidden transition-transform duration-500 cursor-pointer')} to="hero" offset={-100} spy smooth>
                    <Image
                      src="/images/xora.svg"
                      width={160}
                      height={55}
                      alt="Xora Logo"
                    />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <Navlink title="faq" />
                  <div className="dot" />
                  <Navlink title="download" />
                </li>
              </ul>
            </nav>
            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290] -translate-y-1/2 rotate-90">
            <Image className="relative z-2" src="/images/bg-outlines.svg" alt="outline" width={690} height={380} />
            <Image className="absolute inset-0 mix-blend-soft-light" src="/images/bg-outlines-fill.png" alt="outline" width={690} height={380} />
            </div>
          </div>
        </div>
        <button onClick={() => setIsOpen((prevState) => !prevState)} className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center">
          <Image className="size-1/2 object-contain" src={`/images/${isOpen ? 'close' : 'magic'}.svg`} width={25} height={25} alt="magic"/>
        </button>
      </div>
    </header>
  );
};

export default Header;
