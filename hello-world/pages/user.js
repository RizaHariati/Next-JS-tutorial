import Link from "next/link";
import React from "react";

const Userlist = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        const { id, name } = user;
        return (
          <div key={id}>
            <Link href="/about">
              <a>{name}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Userlist;

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  if (data) {
    console.log(data);
  } else {
    console.log("empty data");
  }
  return {
    props: {
      users: data,
    },
  };
};
