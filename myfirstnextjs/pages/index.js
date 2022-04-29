import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Layout from "../comps/Layout";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Riza Page || Home</title>
        <meta name="keywords" content="Riza Homepage" />
      </Head>
      <div>
        <h1 className={styles.title}>Hello world!</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          dolorem soluta quidem non velit?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
          qui omnis reprehenderit quia obcaecati, consequatur impedit atque quo
          assumenda.
        </p>
      </div>
    </>
  );
}
