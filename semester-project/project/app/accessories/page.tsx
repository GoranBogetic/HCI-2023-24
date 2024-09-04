import Link from "next/link";

export default function Accesories() {
  return (
    <h1>
      <nav className='subNavbar'>
        <Link href='/accessories/mugs'>Coffee Mugs</Link>
        <Link href='/accessories/thermoses'>Thermoses</Link>
      </nav>
      <span className='text'>Accessories</span>
    </h1>
  );
}
