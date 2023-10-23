import Link from "next/link";

export default function Blog() {
	return (
		<h1>
			<nav className="subNavbar">
				<Link href="/about">About Us</Link>
				<Link href="/about/info">Company Information</Link>
				<Link href="/about/blog">Blog</Link>
			</nav>
			<span className="text">Blog</span>
		</h1>
	);
}
