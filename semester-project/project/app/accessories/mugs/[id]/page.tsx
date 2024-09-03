"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Mugs({ params }: { params: { id: number } }) {
  const [mug, setMug] = useState<{
    name: string;
    description: string;
    image: string;
  }>();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/VLasic2001/mock-database-hci/mugs/${params.id}`
    )
      .then((response) => response.json())
      .then((data) => setMug(data));
  }, []);

  return (
    <div>
      <nav className='subNavbar'>
        <Link href='/accessories/mugs'>Coffee Mugs and Cups</Link>
        <Link href='/accessories/thermoses'>Travel Cups and Thermoses</Link>
      </nav>
      {mug && (
        <div className='singleMug'>
          <div>
            <h1>{mug["name"]}</h1>
            <span>{mug["description"]}</span>
          </div>
          <img src={mug["image"]} />
        </div>
      )}
    </div>
  );
}
