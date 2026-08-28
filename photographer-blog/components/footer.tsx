import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col justify-center p-4 bg-black text-white items-center text-xs">
        <nav  className="flex justify-center">
           
            <Link href="/contact">Contact</Link>
        </nav>
        <div>
            <p>© {year} Photographer Blog | All Rights Reserved</p>
        </div>
    </footer>
  );
}