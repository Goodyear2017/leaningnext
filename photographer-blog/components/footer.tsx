import Link from "next/link";

export default function Header() {
    const year = new Date().getFullYear();
  return (
    <footer className="text-center py-4">
        <nav >
            <Link href="/">Home</Link> 
            <Link href="/">Contact</Link>
        </nav>
        <div className="font-sz-sm ">
            <p>© {year} Photographer Blog | All Rights Reserved</p>
        </div>
    </footer>
  );
}