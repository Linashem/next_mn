"use client";

import { IPost } from "@/app/blog/page";
import { getPostsBySearch } from "@/servises/getPosts";
import React, { useState } from "react";

type PostSearchProps ={
  onSearch: (value: any[]) => void;
}

const PostSearch: React.FC<PostSearchProps> = ({onSearch}) => {
  const [search, setSearch] = useState("");
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    const posts = await getPostsBySearch(search);
    onSearch(posts);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default PostSearch;
