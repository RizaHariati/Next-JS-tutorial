import { useRouter } from "next/router";
import React from "react";
import Layout from "../../../component/Layout";

const ProductDetail = ({ children }) => {
  const router = useRouter();
  return (
    <Layout>
      <p> {router.query.productid}</p>
    </Layout>
  );
};

export default ProductDetail;
