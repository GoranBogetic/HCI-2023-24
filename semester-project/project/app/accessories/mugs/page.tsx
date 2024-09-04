"use client";

import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";

export default function Mugs() {
  const [mugs, setMugs] = useState([]);
  const [displaymugs, setDisplayMugs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/VLasic2001/mock-database-hci/mugs"
    )
      .then((response) => response.json())
      .then((data) => setMugs(data));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setDisplayMugs(
      mugs.filter((mug) => {
        return mug.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [mugs, search]);

  return (
    <div>
      <nav className='subNavbar'>
        <Link href='/accessories/mugs'>Coffee Mugs</Link>
        <Link href='/accessories/thermoses'>Travel Cups</Link>
      </nav>
      <h1 className='mugText'>Coffee Mugs and Cups</h1>
      <div className='mugSearch'>
        Search:{" "}
        <input
          type='text'
          placeholder='Enter search '
          className='searchInput'
          onChange={handleChange}
        />
      </div>
      <div className='mugs'>
        {displaymugs.map((mug) => (
          <div className='mug' key={mug["id"]}>
            <Link href={`./mugs/${mug["id"]}`}>
              <div>
                <h2>{mug["name"]}</h2>
                <p>{mug["description"]}</p>
              </div>
              <img src={mug["image"]} />
            </Link>
            <Link className='arrow' href={`./mugs/${mug["id"]}`}>
              {">"}
            </Link>
          </div>
        ))}
        {displaymugs.length === 0 && (
          <div className='emptySearch'>
            No mugs found, try a different search!
          </div>
        )}
      </div>
    </div>
  );
}
