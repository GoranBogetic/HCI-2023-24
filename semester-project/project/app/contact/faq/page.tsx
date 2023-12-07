import Link from "next/link";

export default function Contact() {
	return (
		<h1>
			<nav className="subNavbar">
				<Link href="/contact">Contact Us</Link>
				<Link href="/contact/support">Customer Support</Link>
				<Link href="/contact/faq">FAQ</Link>
			</nav>
			<span className="text">FAQ</span>
		</h1>
	);
}
