import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/image/lotus.png" width={50} height={50} />
      </div>

      <Link href="/">
        <a style={{ marginRight: "15px" }}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ marginRight: "15px" }}>About</a>
      </Link>
      <Link href="/riza">
        <a style={{ marginRight: "15px" }}>Riza</a>
      </Link>
    </nav>
  );
};

export default Navbar;
