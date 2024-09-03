import { BlogPosts } from "@/app/blogposts";
import Link from "next/link";

export default function BlogPost({ params }: { params: { id: number } }) {
  const post = BlogPosts.posts.find((p) => p.Id == params.id);

  return (
    <div className='singlePost'>
      {post && (
        <div className='singleMug'>
          <div>
            <h1>{post["Title"]}</h1>
            <span>{post["Text"]}</span>
          </div>
          <img src={post["Image"]} />
        </div>
      )}
      <Link href={"/blog"}>{"<"} Back</Link>
    </div>
  );
}
