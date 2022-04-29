import React from "react";

import styles from "../styles/Home.module.css";
import Head from "next/head";
const About = () => {
  return (
    <>
      <Head>
        <title>Riza Page || About</title>
        <meta name="keywords" content="Riza About Page" />
      </Head>
      <div>
        <h1 className={styles.title}>About</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
          qui omnis reprehenderit quia obcaecati, consequatur impedit atque quo
          assumenda.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          dolorem soluta quidem non velit?
        </p>
      </div>
    </>
  );
};

export default About;
