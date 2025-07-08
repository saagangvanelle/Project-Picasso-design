import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MON ENTREPRISE</h1>
        <nav className="space-x-6">
          <Link href="#services">Services</Link>
          <Link href="#about">À propos</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
