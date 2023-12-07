import { IPost } from "@/app/blog/page";
import Link from "next/link";
import React from "react";

interface PostsProps {
  posts: IPost[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <>
      {posts.map((post: IPost) => (
        <li key={post.id}>
          <Link key={post.id} href={`/blog/${post.id}`}>{post.title} </Link>
        </li>
      ))}
    </>
  );
};

export default Posts;
