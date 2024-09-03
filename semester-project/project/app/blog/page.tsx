"use client";

import Link from "next/link";
import { BlogPosts } from "../blogposts";

export default function Blogs() {
  return (
    <>
      <h1 className='blogsTitle'>Blogs</h1>
      <h1 className='blogContainer'>
        {BlogPosts.posts.map((post) => (
          <Link href={`./blog/${post.Id}`} key={post.Id}>
            <div key={post.Id} className='post'>
              <div>
                <h1>{post.Title}</h1>
                <p>{post.Description}</p>
              </div>
              {post.Image && <img src={post.Image} />}
              <Link className='arrow' href={`./blog/${post.Id}`}>
                {">"}
              </Link>
            </div>
          </Link>
        ))}
      </h1>
    </>
  );
}
