import Link from "next/link";
import React from "react";

const Products = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => {
        console.log(post);
        const { id, title } = post;
        return (
          <div key={id}>
            <Link href={`product/${id}`}>
              <a>
                {id} {title}
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};
