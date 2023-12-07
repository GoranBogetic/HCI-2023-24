import Link from "next/link";

export default function Equipment() {
	return (
		<h1>
			<nav className="subNavbar">
				<Link href="/equipment">Equipment</Link>
				<Link href="/equipment/brewingEquipment">Coffee Brewing Equpiment</Link>
				<Link href="/equipment/methods">Brewing Methods</Link>
				<Link href="/equipment/guides">Guides and Tutorials</Link>
			</nav>
			<span className="text">Equipment and Methods</span>
		</h1>
	);
}
