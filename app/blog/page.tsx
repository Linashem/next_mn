import { Metadata } from "next";
import Link from "next/link";
import React from "react";

interface IPost {
  id: number;
  title: string;
}

export const metadata: Metadata = {
  title: "Blog",
};

// async function getData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: { revalidate: 60 },
//   });
//   return response.json();
// }

const Blog: React.FC = async () => {
  // const posts = await getData();
  return (
    <>
      <h2>Posts</h2>
      <ul>
        {posts.map((post: IPost) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title} </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
