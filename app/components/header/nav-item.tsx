import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from 'next/navigation';

type NavItemProps = {
  label: string;
  href: string;
}

export const NavItem = ({ label, href }: NavItemProps) => {
  // this hook get the actual pathname
  const pathname = usePathname();

  // if the current route is equal to the route that the user clicked
  const isActive = pathname === href;

  return (
    <Link href={href} className={cn(
      "text-gray-400 flex items-center gap-2 font-medium font-mono", isActive && 'text-gray-50'
    )}>
      <span className="text-emerald-400">#</span>
      { label }
    </Link>
  )
}