"use client";

import PostSearch from "@/components/PostSearch";
import Posts from "@/components/Posts";
import { getAllPosts } from "@/servises/getPosts";
import { Metadata } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export interface IPost {
  id: number;
  title: string;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h2>Posts</h2>
      <PostSearch onSearch={setPosts} />
      <ul>{loading ? <h1>Loading...</h1> : <Posts posts={posts} />}</ul>
    </>
  );
};

export default Blog;
