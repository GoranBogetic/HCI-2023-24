"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Mugs({ params }: { params: { id: number } }) {
	const [mug, setMug] = useState([]);

	useEffect(() => {
		fetch(`https://my-json-server.typicode.com/VLasic2001/mock-database-hci/mugs/${params.id}`).then(response => response.json()).then(data => setMug(data));
	}, [])

	return (
		<h1>
			<nav className="subNavbar">
				<Link href="/accessories">Accessories</Link>
				<Link href="/accessories/mugs">Coffee Mugs and Cups</Link>
				<Link href="/accessories/thermoses">Travel Cups and Thermoses</Link>
			</nav>
            {mug && 
            <div>
                <h1>{mug["name"]}</h1>
				<span>{mug["description"]}</span>
                <img src={mug["image"]}/>
            </div>}



			
				
			
		</h1>
	);
}
