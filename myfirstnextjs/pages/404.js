import React, { useEffect } from "react";
import Link from "next/dist/client/link";
import styles from "../styles/Job.module.css";
import { useRouter } from "next/router";

const FileNotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);

  return (
    <div className={styles.notFound}>
      <h1>Opps...</h1>
      <h2>That Page cannot be found</h2>
      <p>
        Go back to
        <Link href="/">
          <a className={styles.back}>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default FileNotFound;
