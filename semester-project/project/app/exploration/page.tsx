import Link from "next/link";

export default function Exploration() {
	return (
		<h1>
			<nav className="subNavbar">
				<Link href="/exploration">Exploration</Link>
				<Link href="/exploration/singleOrigin">Single-Origin Coffee</Link>
				<Link href="/exploration/specialty">Specialty Blends</Link>
				<Link href="/exploration/profiles">Flavor Profiles</Link>
			</nav>
			<span className="text">Exploration</span>
		</h1>
	);
}
