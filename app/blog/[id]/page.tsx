import React from "react";

interface PostProps {
  params: {
    id: number;
    title: string;
    body: string;
  };
}

async function getData(id: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: { revalidate: 60 },
    }
  );
  return response.json();
}


export async function generateMetadata({ params: { id } }: PostProps) {
  const post = await getData(id);
  return {
    title: post.title,
  };
}

const Post: React.FC<PostProps> = async ({ params: { id } }) => {
  const post = await getData(id);
  return (
    <>
      {<h1 className="post_title">{post.title}</h1>}
      <p>{post.body}</p>
    </>
  );
};

export default Post;
