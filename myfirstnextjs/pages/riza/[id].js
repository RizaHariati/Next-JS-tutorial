import { useRouter } from "next/router";
import Link from "next/link";
const url = "https://jsonplaceholder.typicode.com/users/";

export const getStaticPaths = async () => {
  const res = await fetch(url);
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(url + context.params.id);
  const data = await res.json();
  return {
    props: { riza: data },
  };
};

const Detail = ({ riza }) => {
  const { name, email, address, company } = riza;
  const router = useRouter();
  return (
    <div>
      <h3>{name}</h3>
      <p>email : {email}</p>
      <p>address :</p>
      <div>
        <p>{address.street}</p>
        <p>{address.city}</p>
      </div>
      <p>company: {company.name}</p>
      <Link href="/riza">
        <a style={{ color: "blue" }}>Go Back</a>
      </Link>
    </div>
  );
};

export default Detail;
