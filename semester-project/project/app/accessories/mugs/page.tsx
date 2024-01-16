'use client';

import Link from 'next/link';
import { ChangeEvent, useEffect, useState } from 'react';

export default function Mugs() {
  const [mugs, setMugs] = useState([]);
  const [displaymugs, setDisplayMugs] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/VLasic2001/mock-database-hci/mugs')
      .then((response) => response.json())
      .then((data) => setMugs(data));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setDisplayMugs(
      mugs.filter((mug) => {
        console.log(mug);
        return mug.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [mugs, search]);

  return (
    <h1>
      <nav className="subNavbar">
        <Link href="/accessories">Accessories</Link>
        <Link href="/accessories/mugs">Coffee Mugs and Cups</Link>
        <Link href="/accessories/thermoses">Travel Cups and Thermoses</Link>
      </nav>
      <span className="text">Coffee Mugs and Cups</span>
      <div>
        Search: <input type="text" placeholder="Enter search" className="searchInput" onChange={handleChange} />
      </div>
      {displaymugs.map((mug) => (
        <div key={mug['id']}>
          <Link href={`./mugs/${mug['id']}`}>
            <h2>{mug['name']}</h2>
            <span>{mug['description']}</span>
          </Link>
          <br />
          <br />
        </div>
      ))}
    </h1>
  );
}
