// lib/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      {/* צד שמאל – שם האפליקציה */}
      <h1>Maayan&apos;s App</h1>

      {/* צד ימין – ארבעת הקישורים */}
      <nav>
        <Link href="/">Home</Link>
        <Link href="/art">Art Gallery</Link>
        <Link href="/design">Ensemble Design</Link>
        <Link href="/tic-tac-toe">Tic-Tac-Toe</Link>
      </nav>
    </header>
  );
}
