import "./globals.css";
import Link from "next/link";


export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<nav className="navbar">
					<Link href="/">Home</Link>
					<Link href="/exploration">Exploration</Link>
					<Link href="/equipment">Equipment and Methods</Link>
					<Link href="/accessories">Accessories</Link>
					<Link href="/subscriptions">Subscriptions</Link>
					<Link href="/contact">Contact Us</Link>
					<Link href="/about">About Us</Link>
					<Link href="/cart">Shopping Cart</Link>
				</nav>
				{children}
			</body>
		</html>
	);
}
