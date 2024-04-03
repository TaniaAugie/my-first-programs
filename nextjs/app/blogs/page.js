import React from "react";
import Link from "next/link";

const BlogPage = () => {
  return (
    <div>
      <link href={`/blogs/${1}`}>Blog 1</link>
      <link href={`/blogs/${2}`}>Blog 2</link>
      <link href={`/blogs/${3}`}>Blog 3</link>
      <link href={`/blogs/${4}`}>Blog 4</link>
    </div>
  );
};

export default BlogPage;
