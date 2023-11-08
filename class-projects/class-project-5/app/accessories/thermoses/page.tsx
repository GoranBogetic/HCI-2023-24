import Link from "next/link";

export default function Thermoses() {
	return (
		<h1>
			<nav className="subNavbar">
				<Link href="/accessories">Accessories</Link>
				<Link href="/accessories/mugs">Coffee Mugs and Cups</Link>
				<Link href="/accessories/thermoses">Travel Cups and Thermoses</Link>
			</nav>
			<span className="text">Travel Cups and Thermoses</span>
		</h1>
	);
}
