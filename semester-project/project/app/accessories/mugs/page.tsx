"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Mugs() {
	const [mugs, setMugs] = useState([]);

	useEffect(() => {
		fetch("https://my-json-server.typicode.com/VLasic2001/mock-database-hci/mugs").then(response => response.json()).then(data => setMugs(data));
	}, [])

	return (
		<h1>
			<nav className="subNavbar">
				<Link href="/accessories">Accessories</Link>
				<Link href="/accessories/mugs">Coffee Mugs and Cups</Link>
				<Link href="/accessories/thermoses">Travel Cups and Thermoses</Link>
			</nav>
			<span className="text">Coffee Mugs and Cups</span>
			{mugs.map(mug => <div key={mug["id"]}>
				<Link href={`./mugs/${mug["id"]}`}>
					<h2>{mug["name"]}</h2>
					<span>{mug["description"]}</span>
				</Link>
				<br />
				<br />
				</div>
			)}
		</h1>
	);
}
