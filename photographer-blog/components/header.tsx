'use client';
import Link from "next/link";
import Image from 'next/image';


export default function Header() {
  return (
    <header>
      <nav className="flex jsutify-center ">
        <Image alt="" src="../../../public/globe.svg" />
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Gallery</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Contact</Link>
      </nav>
    </header>
  );
}