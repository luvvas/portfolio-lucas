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
    <header>
      <div className="container">
        <Link href="/">
          <Image 
            width={50}
            height={49}
            src="/images/logo.svg"
            alt="Logo"
          />
        </Link>
        <nav className="flex items-center gap-4">
          {NAV_ITENS.map(item => (
            // {...item} is equal to label={label} href={href}
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>

  )
}