'use client'

import Image from "next/image";
import Link from "next/link";

import { NavItem } from "./nav-item";

const NAV_ITENS = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Projetos',
    href: '/projects'
  }
]

export const Header = () => {
  return (
    <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image 
            width={50}
            height={49}
            src="/images/logo.svg"
            alt="Logo"
          />
        </Link>
        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITENS.map(item => (
            // {...item} is equal to label={label} href={href}
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  )
}