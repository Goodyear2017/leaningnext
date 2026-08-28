'use client';
import Link from "next/link";
import Image from 'next/image';


export default function Header() {
  return (
    <header>
      <nav className="flex justify-between gap-8 p-4 bg-black text-white">
        <Image alt="logo" src="/globe.svg"  width={24} height={24} />
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}