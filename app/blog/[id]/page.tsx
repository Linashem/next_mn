import React from "react";


interface PostProps {
  params: {
    id: string;
  };
}

export function generateMetadata({params:{id}}:PostProps){
return {
  title:id
}
}


const Post: React.FC<PostProps> = ({ params: { id } }) => {
  return (
    <>
      <h1>Post {id}</h1>{" "}
    </>
  );
};

export default Post;
