import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Blog",
};


const Page: React.FC = () => {
  return (
    <>
      Posts
    </>
  );
};

export default Page;
