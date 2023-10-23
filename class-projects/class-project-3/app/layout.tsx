import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
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
