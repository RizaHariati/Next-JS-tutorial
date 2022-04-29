import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import styles2 from "../../styles/Job.module.css";
const url = "https://jsonplaceholder.typicode.com/users";

export const getStaticProps = async () => {
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { rizaList: data },
  };
};
const RizaBranch = ({ rizaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Riza Page</h1>
      <Link href="/">
        <a className={styles.btn}>back</a>
      </Link>
      <p className={styles2.apply}>This list</p>
      {rizaList.map((item) => {
        const { id, name } = item;
        return (
          <div key={id}>
            <Link href={`/riza/${id}`}>
              <a style={{ color: "blue" }}>{name}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RizaBranch;
