'use client'

import Link from "next/link";

import { NavItem } from "./nav-item";

const NAV_ITEMS = [
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
          <h1 className="text-2xl">Lukita</h1>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map(item => (
            // {...item} is equal to label={label} href={href}
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  )
}