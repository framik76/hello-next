'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    return (
      <header className="p-4 bg-slate-800 flex gap-4">
        <Link 
          href={"/"} 
          className={`px-4 py-2 ${pathname === '/' ? 'bg-teal-500' : 'bg-violet-600'}`}>Home</Link>
        <Link 
          href={"/about"} 
          className={`px-4 py-2 ${pathname === '/about' ? 'bg-teal-500' : 'bg-violet-600'}`}>About me</Link>
        <Link 
          href={"/articoli"} 
          className={`px-4 py-2 ${pathname === '/articoli' ? 'bg-teal-500' : 'bg-violet-600'}`}>Articoli</Link>
      </header>
    )
  }